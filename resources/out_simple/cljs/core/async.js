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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t75929 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t75929 = (function (f,fn_handler,meta75930){
this.f = f;
this.fn_handler = fn_handler;
this.meta75930 = meta75930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t75929.cljs$lang$type = true;
cljs.core.async.t75929.cljs$lang$ctorStr = "cljs.core.async/t75929";
cljs.core.async.t75929.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t75929");
});
cljs.core.async.t75929.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t75929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t75929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t75929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75931){var self__ = this;
var _75931__$1 = this;return self__.meta75930;
});
cljs.core.async.t75929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75931,meta75930__$1){var self__ = this;
var _75931__$1 = this;return (new cljs.core.async.t75929(self__.f,self__.fn_handler,meta75930__$1));
});
cljs.core.async.__GT_t75929 = (function __GT_t75929(f__$1,fn_handler__$1,meta75930){return (new cljs.core.async.t75929(f__$1,fn_handler__$1,meta75930));
});
}
return (new cljs.core.async.t75929(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__75933 = buff;if(G__75933)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__75933.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__75933.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__75933);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__75933);
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
{var val_75934 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_75934);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_75934);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___75935 = n;var x_75936 = 0;while(true){
if((x_75936 < n__8553__auto___75935))
{(a[x_75936] = 0);
{
var G__75937 = (x_75936 + 1);
x_75936 = G__75937;
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
var G__75938 = (i + 1);
i = G__75938;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t75942 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t75942 = (function (flag,alt_flag,meta75943){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta75943 = meta75943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t75942.cljs$lang$type = true;
cljs.core.async.t75942.cljs$lang$ctorStr = "cljs.core.async/t75942";
cljs.core.async.t75942.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t75942");
});
cljs.core.async.t75942.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t75942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t75942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t75942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75944){var self__ = this;
var _75944__$1 = this;return self__.meta75943;
});
cljs.core.async.t75942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75944,meta75943__$1){var self__ = this;
var _75944__$1 = this;return (new cljs.core.async.t75942(self__.flag,self__.alt_flag,meta75943__$1));
});
cljs.core.async.__GT_t75942 = (function __GT_t75942(flag__$1,alt_flag__$1,meta75943){return (new cljs.core.async.t75942(flag__$1,alt_flag__$1,meta75943));
});
}
return (new cljs.core.async.t75942(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t75948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t75948 = (function (cb,flag,alt_handler,meta75949){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta75949 = meta75949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t75948.cljs$lang$type = true;
cljs.core.async.t75948.cljs$lang$ctorStr = "cljs.core.async/t75948";
cljs.core.async.t75948.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t75948");
});
cljs.core.async.t75948.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t75948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t75948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t75948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75950){var self__ = this;
var _75950__$1 = this;return self__.meta75949;
});
cljs.core.async.t75948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75950,meta75949__$1){var self__ = this;
var _75950__$1 = this;return (new cljs.core.async.t75948(self__.cb,self__.flag,self__.alt_handler,meta75949__$1));
});
cljs.core.async.__GT_t75948 = (function __GT_t75948(cb__$1,flag__$1,alt_handler__$1,meta75949){return (new cljs.core.async.t75948(cb__$1,flag__$1,alt_handler__$1,meta75949));
});
}
return (new cljs.core.async.t75948(cb,flag,alt_handler,null));
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
return (function (p1__75951_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__75951_SHARP_,port], null));
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
var G__75952 = (i + 1);
i = G__75952;
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
var alts_BANG___delegate = function (ports,p__75953){var map__75955 = p__75953;var map__75955__$1 = ((cljs.core.seq_QMARK_.call(null,map__75955))?cljs.core.apply.call(null,cljs.core.hash_map,map__75955):map__75955);var opts = map__75955__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__75953 = null;if (arguments.length > 1) {
  p__75953 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__75953);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__75956){
var ports = cljs.core.first(arglist__75956);
var p__75953 = cljs.core.rest(arglist__75956);
return alts_BANG___delegate(ports,p__75953);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t75964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t75964 = (function (ch,f,map_LT_,meta75965){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta75965 = meta75965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t75964.cljs$lang$type = true;
cljs.core.async.t75964.cljs$lang$ctorStr = "cljs.core.async/t75964";
cljs.core.async.t75964.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t75964");
});
cljs.core.async.t75964.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t75964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t75964.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t75964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t75967 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t75967 = (function (fn1,_,meta75965,ch,f,map_LT_,meta75968){
this.fn1 = fn1;
this._ = _;
this.meta75965 = meta75965;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta75968 = meta75968;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t75967.cljs$lang$type = true;
cljs.core.async.t75967.cljs$lang$ctorStr = "cljs.core.async/t75967";
cljs.core.async.t75967.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t75967");
});
cljs.core.async.t75967.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t75967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t75967.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t75967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__75957_SHARP_){return f1.call(null,(((p1__75957_SHARP_ == null))?null:self__.f.call(null,p1__75957_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t75967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75969){var self__ = this;
var _75969__$1 = this;return self__.meta75968;
});
cljs.core.async.t75967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75969,meta75968__$1){var self__ = this;
var _75969__$1 = this;return (new cljs.core.async.t75967(self__.fn1,self__._,self__.meta75965,self__.ch,self__.f,self__.map_LT_,meta75968__$1));
});
cljs.core.async.__GT_t75967 = (function __GT_t75967(fn1__$1,___$2,meta75965__$1,ch__$2,f__$2,map_LT___$2,meta75968){return (new cljs.core.async.t75967(fn1__$1,___$2,meta75965__$1,ch__$2,f__$2,map_LT___$2,meta75968));
});
}
return (new cljs.core.async.t75967(fn1,___$1,self__.meta75965,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t75964.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t75964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t75964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75966){var self__ = this;
var _75966__$1 = this;return self__.meta75965;
});
cljs.core.async.t75964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75966,meta75965__$1){var self__ = this;
var _75966__$1 = this;return (new cljs.core.async.t75964(self__.ch,self__.f,self__.map_LT_,meta75965__$1));
});
cljs.core.async.__GT_t75964 = (function __GT_t75964(ch__$1,f__$1,map_LT___$1,meta75965){return (new cljs.core.async.t75964(ch__$1,f__$1,map_LT___$1,meta75965));
});
}
return (new cljs.core.async.t75964(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t75973 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t75973 = (function (ch,f,map_GT_,meta75974){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta75974 = meta75974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t75973.cljs$lang$type = true;
cljs.core.async.t75973.cljs$lang$ctorStr = "cljs.core.async/t75973";
cljs.core.async.t75973.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t75973");
});
cljs.core.async.t75973.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t75973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t75973.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t75973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t75973.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t75973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t75973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75975){var self__ = this;
var _75975__$1 = this;return self__.meta75974;
});
cljs.core.async.t75973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75975,meta75974__$1){var self__ = this;
var _75975__$1 = this;return (new cljs.core.async.t75973(self__.ch,self__.f,self__.map_GT_,meta75974__$1));
});
cljs.core.async.__GT_t75973 = (function __GT_t75973(ch__$1,f__$1,map_GT___$1,meta75974){return (new cljs.core.async.t75973(ch__$1,f__$1,map_GT___$1,meta75974));
});
}
return (new cljs.core.async.t75973(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t75979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t75979 = (function (ch,p,filter_GT_,meta75980){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta75980 = meta75980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t75979.cljs$lang$type = true;
cljs.core.async.t75979.cljs$lang$ctorStr = "cljs.core.async/t75979";
cljs.core.async.t75979.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t75979");
});
cljs.core.async.t75979.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t75979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t75979.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t75979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t75979.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t75979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t75979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75981){var self__ = this;
var _75981__$1 = this;return self__.meta75980;
});
cljs.core.async.t75979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75981,meta75980__$1){var self__ = this;
var _75981__$1 = this;return (new cljs.core.async.t75979(self__.ch,self__.p,self__.filter_GT_,meta75980__$1));
});
cljs.core.async.__GT_t75979 = (function __GT_t75979(ch__$1,p__$1,filter_GT___$1,meta75980){return (new cljs.core.async.t75979(ch__$1,p__$1,filter_GT___$1,meta75980));
});
}
return (new cljs.core.async.t75979(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___76064 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_76043){var state_val_76044 = (state_76043[1]);if((state_val_76044 === 1))
{var state_76043__$1 = state_76043;var statearr_76045_76065 = state_76043__$1;(statearr_76045_76065[2] = null);
(statearr_76045_76065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76044 === 2))
{var state_76043__$1 = state_76043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76043__$1,4,ch);
} else
{if((state_val_76044 === 3))
{var inst_76041 = (state_76043[2]);var state_76043__$1 = state_76043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76043__$1,inst_76041);
} else
{if((state_val_76044 === 4))
{var inst_76025 = (state_76043[7]);var inst_76025__$1 = (state_76043[2]);var inst_76026 = (inst_76025__$1 == null);var state_76043__$1 = (function (){var statearr_76046 = state_76043;(statearr_76046[7] = inst_76025__$1);
return statearr_76046;
})();if(cljs.core.truth_(inst_76026))
{var statearr_76047_76066 = state_76043__$1;(statearr_76047_76066[1] = 5);
} else
{var statearr_76048_76067 = state_76043__$1;(statearr_76048_76067[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76044 === 5))
{var inst_76028 = cljs.core.async.close_BANG_.call(null,out);var state_76043__$1 = state_76043;var statearr_76049_76068 = state_76043__$1;(statearr_76049_76068[2] = inst_76028);
(statearr_76049_76068[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76044 === 6))
{var inst_76025 = (state_76043[7]);var inst_76030 = p.call(null,inst_76025);var state_76043__$1 = state_76043;if(cljs.core.truth_(inst_76030))
{var statearr_76050_76069 = state_76043__$1;(statearr_76050_76069[1] = 8);
} else
{var statearr_76051_76070 = state_76043__$1;(statearr_76051_76070[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76044 === 7))
{var inst_76039 = (state_76043[2]);var state_76043__$1 = state_76043;var statearr_76052_76071 = state_76043__$1;(statearr_76052_76071[2] = inst_76039);
(statearr_76052_76071[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76044 === 8))
{var inst_76025 = (state_76043[7]);var state_76043__$1 = state_76043;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76043__$1,11,out,inst_76025);
} else
{if((state_val_76044 === 9))
{var state_76043__$1 = state_76043;var statearr_76053_76072 = state_76043__$1;(statearr_76053_76072[2] = null);
(statearr_76053_76072[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76044 === 10))
{var inst_76036 = (state_76043[2]);var state_76043__$1 = (function (){var statearr_76054 = state_76043;(statearr_76054[8] = inst_76036);
return statearr_76054;
})();var statearr_76055_76073 = state_76043__$1;(statearr_76055_76073[2] = null);
(statearr_76055_76073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76044 === 11))
{var inst_76033 = (state_76043[2]);var state_76043__$1 = state_76043;var statearr_76056_76074 = state_76043__$1;(statearr_76056_76074[2] = inst_76033);
(statearr_76056_76074[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_76060 = (new Array(9));(statearr_76060[0] = state_machine__10214__auto__);
(statearr_76060[1] = 1);
return statearr_76060;
});
var state_machine__10214__auto____1 = (function (state_76043){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_76043);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e76061){if((e76061 instanceof Object))
{var ex__10217__auto__ = e76061;var statearr_76062_76075 = state_76043;(statearr_76062_76075[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76043);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__76076 = state_76043;
state_76043 = G__76076;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_76043){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_76043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_76063 = f__10284__auto__.call(null);(statearr_76063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___76064);
return statearr_76063;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_76228){var state_val_76229 = (state_76228[1]);if((state_val_76229 === 1))
{var state_76228__$1 = state_76228;var statearr_76230_76267 = state_76228__$1;(statearr_76230_76267[2] = null);
(statearr_76230_76267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 2))
{var state_76228__$1 = state_76228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76228__$1,4,in$);
} else
{if((state_val_76229 === 3))
{var inst_76226 = (state_76228[2]);var state_76228__$1 = state_76228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76228__$1,inst_76226);
} else
{if((state_val_76229 === 4))
{var inst_76174 = (state_76228[7]);var inst_76174__$1 = (state_76228[2]);var inst_76175 = (inst_76174__$1 == null);var state_76228__$1 = (function (){var statearr_76231 = state_76228;(statearr_76231[7] = inst_76174__$1);
return statearr_76231;
})();if(cljs.core.truth_(inst_76175))
{var statearr_76232_76268 = state_76228__$1;(statearr_76232_76268[1] = 5);
} else
{var statearr_76233_76269 = state_76228__$1;(statearr_76233_76269[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 5))
{var inst_76177 = cljs.core.async.close_BANG_.call(null,out);var state_76228__$1 = state_76228;var statearr_76234_76270 = state_76228__$1;(statearr_76234_76270[2] = inst_76177);
(statearr_76234_76270[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 6))
{var inst_76174 = (state_76228[7]);var inst_76179 = f.call(null,inst_76174);var inst_76184 = cljs.core.seq.call(null,inst_76179);var inst_76185 = inst_76184;var inst_76186 = null;var inst_76187 = 0;var inst_76188 = 0;var state_76228__$1 = (function (){var statearr_76235 = state_76228;(statearr_76235[8] = inst_76185);
(statearr_76235[9] = inst_76186);
(statearr_76235[10] = inst_76188);
(statearr_76235[11] = inst_76187);
return statearr_76235;
})();var statearr_76236_76271 = state_76228__$1;(statearr_76236_76271[2] = null);
(statearr_76236_76271[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 7))
{var inst_76224 = (state_76228[2]);var state_76228__$1 = state_76228;var statearr_76237_76272 = state_76228__$1;(statearr_76237_76272[2] = inst_76224);
(statearr_76237_76272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 8))
{var inst_76188 = (state_76228[10]);var inst_76187 = (state_76228[11]);var inst_76190 = (inst_76188 < inst_76187);var inst_76191 = inst_76190;var state_76228__$1 = state_76228;if(cljs.core.truth_(inst_76191))
{var statearr_76238_76273 = state_76228__$1;(statearr_76238_76273[1] = 10);
} else
{var statearr_76239_76274 = state_76228__$1;(statearr_76239_76274[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 9))
{var inst_76221 = (state_76228[2]);var state_76228__$1 = (function (){var statearr_76240 = state_76228;(statearr_76240[12] = inst_76221);
return statearr_76240;
})();var statearr_76241_76275 = state_76228__$1;(statearr_76241_76275[2] = null);
(statearr_76241_76275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 10))
{var inst_76186 = (state_76228[9]);var inst_76188 = (state_76228[10]);var inst_76193 = cljs.core._nth.call(null,inst_76186,inst_76188);var state_76228__$1 = state_76228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76228__$1,13,out,inst_76193);
} else
{if((state_val_76229 === 11))
{var inst_76185 = (state_76228[8]);var inst_76199 = (state_76228[13]);var inst_76199__$1 = cljs.core.seq.call(null,inst_76185);var state_76228__$1 = (function (){var statearr_76245 = state_76228;(statearr_76245[13] = inst_76199__$1);
return statearr_76245;
})();if(inst_76199__$1)
{var statearr_76246_76276 = state_76228__$1;(statearr_76246_76276[1] = 14);
} else
{var statearr_76247_76277 = state_76228__$1;(statearr_76247_76277[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 12))
{var inst_76219 = (state_76228[2]);var state_76228__$1 = state_76228;var statearr_76248_76278 = state_76228__$1;(statearr_76248_76278[2] = inst_76219);
(statearr_76248_76278[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 13))
{var inst_76185 = (state_76228[8]);var inst_76186 = (state_76228[9]);var inst_76188 = (state_76228[10]);var inst_76187 = (state_76228[11]);var inst_76195 = (state_76228[2]);var inst_76196 = (inst_76188 + 1);var tmp76242 = inst_76185;var tmp76243 = inst_76186;var tmp76244 = inst_76187;var inst_76185__$1 = tmp76242;var inst_76186__$1 = tmp76243;var inst_76187__$1 = tmp76244;var inst_76188__$1 = inst_76196;var state_76228__$1 = (function (){var statearr_76249 = state_76228;(statearr_76249[8] = inst_76185__$1);
(statearr_76249[9] = inst_76186__$1);
(statearr_76249[14] = inst_76195);
(statearr_76249[10] = inst_76188__$1);
(statearr_76249[11] = inst_76187__$1);
return statearr_76249;
})();var statearr_76250_76279 = state_76228__$1;(statearr_76250_76279[2] = null);
(statearr_76250_76279[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 14))
{var inst_76199 = (state_76228[13]);var inst_76201 = cljs.core.chunked_seq_QMARK_.call(null,inst_76199);var state_76228__$1 = state_76228;if(inst_76201)
{var statearr_76251_76280 = state_76228__$1;(statearr_76251_76280[1] = 17);
} else
{var statearr_76252_76281 = state_76228__$1;(statearr_76252_76281[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 15))
{var state_76228__$1 = state_76228;var statearr_76253_76282 = state_76228__$1;(statearr_76253_76282[2] = null);
(statearr_76253_76282[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 16))
{var inst_76217 = (state_76228[2]);var state_76228__$1 = state_76228;var statearr_76254_76283 = state_76228__$1;(statearr_76254_76283[2] = inst_76217);
(statearr_76254_76283[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 17))
{var inst_76199 = (state_76228[13]);var inst_76203 = cljs.core.chunk_first.call(null,inst_76199);var inst_76204 = cljs.core.chunk_rest.call(null,inst_76199);var inst_76205 = cljs.core.count.call(null,inst_76203);var inst_76185 = inst_76204;var inst_76186 = inst_76203;var inst_76187 = inst_76205;var inst_76188 = 0;var state_76228__$1 = (function (){var statearr_76255 = state_76228;(statearr_76255[8] = inst_76185);
(statearr_76255[9] = inst_76186);
(statearr_76255[10] = inst_76188);
(statearr_76255[11] = inst_76187);
return statearr_76255;
})();var statearr_76256_76284 = state_76228__$1;(statearr_76256_76284[2] = null);
(statearr_76256_76284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 18))
{var inst_76199 = (state_76228[13]);var inst_76208 = cljs.core.first.call(null,inst_76199);var state_76228__$1 = state_76228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76228__$1,20,out,inst_76208);
} else
{if((state_val_76229 === 19))
{var inst_76214 = (state_76228[2]);var state_76228__$1 = state_76228;var statearr_76257_76285 = state_76228__$1;(statearr_76257_76285[2] = inst_76214);
(statearr_76257_76285[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76229 === 20))
{var inst_76199 = (state_76228[13]);var inst_76210 = (state_76228[2]);var inst_76211 = cljs.core.next.call(null,inst_76199);var inst_76185 = inst_76211;var inst_76186 = null;var inst_76187 = 0;var inst_76188 = 0;var state_76228__$1 = (function (){var statearr_76258 = state_76228;(statearr_76258[8] = inst_76185);
(statearr_76258[9] = inst_76186);
(statearr_76258[10] = inst_76188);
(statearr_76258[11] = inst_76187);
(statearr_76258[15] = inst_76210);
return statearr_76258;
})();var statearr_76259_76286 = state_76228__$1;(statearr_76259_76286[2] = null);
(statearr_76259_76286[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_76263 = (new Array(16));(statearr_76263[0] = state_machine__10214__auto__);
(statearr_76263[1] = 1);
return statearr_76263;
});
var state_machine__10214__auto____1 = (function (state_76228){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_76228);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e76264){if((e76264 instanceof Object))
{var ex__10217__auto__ = e76264;var statearr_76265_76287 = state_76228;(statearr_76265_76287[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__76288 = state_76228;
state_76228 = G__76288;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_76228){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_76228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_76266 = f__10284__auto__.call(null);(statearr_76266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_76266;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___76369 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_76348){var state_val_76349 = (state_76348[1]);if((state_val_76349 === 1))
{var state_76348__$1 = state_76348;var statearr_76350_76370 = state_76348__$1;(statearr_76350_76370[2] = null);
(statearr_76350_76370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76349 === 2))
{var state_76348__$1 = state_76348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76348__$1,4,from);
} else
{if((state_val_76349 === 3))
{var inst_76346 = (state_76348[2]);var state_76348__$1 = state_76348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76348__$1,inst_76346);
} else
{if((state_val_76349 === 4))
{var inst_76331 = (state_76348[7]);var inst_76331__$1 = (state_76348[2]);var inst_76332 = (inst_76331__$1 == null);var state_76348__$1 = (function (){var statearr_76351 = state_76348;(statearr_76351[7] = inst_76331__$1);
return statearr_76351;
})();if(cljs.core.truth_(inst_76332))
{var statearr_76352_76371 = state_76348__$1;(statearr_76352_76371[1] = 5);
} else
{var statearr_76353_76372 = state_76348__$1;(statearr_76353_76372[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76349 === 5))
{var state_76348__$1 = state_76348;if(cljs.core.truth_(close_QMARK_))
{var statearr_76354_76373 = state_76348__$1;(statearr_76354_76373[1] = 8);
} else
{var statearr_76355_76374 = state_76348__$1;(statearr_76355_76374[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76349 === 6))
{var inst_76331 = (state_76348[7]);var state_76348__$1 = state_76348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76348__$1,11,to,inst_76331);
} else
{if((state_val_76349 === 7))
{var inst_76344 = (state_76348[2]);var state_76348__$1 = state_76348;var statearr_76356_76375 = state_76348__$1;(statearr_76356_76375[2] = inst_76344);
(statearr_76356_76375[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76349 === 8))
{var inst_76335 = cljs.core.async.close_BANG_.call(null,to);var state_76348__$1 = state_76348;var statearr_76357_76376 = state_76348__$1;(statearr_76357_76376[2] = inst_76335);
(statearr_76357_76376[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76349 === 9))
{var state_76348__$1 = state_76348;var statearr_76358_76377 = state_76348__$1;(statearr_76358_76377[2] = null);
(statearr_76358_76377[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76349 === 10))
{var inst_76338 = (state_76348[2]);var state_76348__$1 = state_76348;var statearr_76359_76378 = state_76348__$1;(statearr_76359_76378[2] = inst_76338);
(statearr_76359_76378[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76349 === 11))
{var inst_76341 = (state_76348[2]);var state_76348__$1 = (function (){var statearr_76360 = state_76348;(statearr_76360[8] = inst_76341);
return statearr_76360;
})();var statearr_76361_76379 = state_76348__$1;(statearr_76361_76379[2] = null);
(statearr_76361_76379[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_76365 = (new Array(9));(statearr_76365[0] = state_machine__10214__auto__);
(statearr_76365[1] = 1);
return statearr_76365;
});
var state_machine__10214__auto____1 = (function (state_76348){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_76348);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e76366){if((e76366 instanceof Object))
{var ex__10217__auto__ = e76366;var statearr_76367_76380 = state_76348;(statearr_76367_76380[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76348);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__76381 = state_76348;
state_76348 = G__76381;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_76348){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_76348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_76368 = f__10284__auto__.call(null);(statearr_76368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___76369);
return statearr_76368;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___76468 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_76446){var state_val_76447 = (state_76446[1]);if((state_val_76447 === 1))
{var state_76446__$1 = state_76446;var statearr_76448_76469 = state_76446__$1;(statearr_76448_76469[2] = null);
(statearr_76448_76469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76447 === 2))
{var state_76446__$1 = state_76446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76446__$1,4,ch);
} else
{if((state_val_76447 === 3))
{var inst_76444 = (state_76446[2]);var state_76446__$1 = state_76446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76446__$1,inst_76444);
} else
{if((state_val_76447 === 4))
{var inst_76427 = (state_76446[7]);var inst_76427__$1 = (state_76446[2]);var inst_76428 = (inst_76427__$1 == null);var state_76446__$1 = (function (){var statearr_76449 = state_76446;(statearr_76449[7] = inst_76427__$1);
return statearr_76449;
})();if(cljs.core.truth_(inst_76428))
{var statearr_76450_76470 = state_76446__$1;(statearr_76450_76470[1] = 5);
} else
{var statearr_76451_76471 = state_76446__$1;(statearr_76451_76471[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76447 === 5))
{var inst_76430 = cljs.core.async.close_BANG_.call(null,tc);var inst_76431 = cljs.core.async.close_BANG_.call(null,fc);var state_76446__$1 = (function (){var statearr_76452 = state_76446;(statearr_76452[8] = inst_76430);
return statearr_76452;
})();var statearr_76453_76472 = state_76446__$1;(statearr_76453_76472[2] = inst_76431);
(statearr_76453_76472[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76447 === 6))
{var inst_76427 = (state_76446[7]);var inst_76433 = p.call(null,inst_76427);var state_76446__$1 = state_76446;if(cljs.core.truth_(inst_76433))
{var statearr_76454_76473 = state_76446__$1;(statearr_76454_76473[1] = 9);
} else
{var statearr_76455_76474 = state_76446__$1;(statearr_76455_76474[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76447 === 7))
{var inst_76442 = (state_76446[2]);var state_76446__$1 = state_76446;var statearr_76456_76475 = state_76446__$1;(statearr_76456_76475[2] = inst_76442);
(statearr_76456_76475[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76447 === 8))
{var inst_76439 = (state_76446[2]);var state_76446__$1 = (function (){var statearr_76457 = state_76446;(statearr_76457[9] = inst_76439);
return statearr_76457;
})();var statearr_76458_76476 = state_76446__$1;(statearr_76458_76476[2] = null);
(statearr_76458_76476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76447 === 9))
{var state_76446__$1 = state_76446;var statearr_76459_76477 = state_76446__$1;(statearr_76459_76477[2] = tc);
(statearr_76459_76477[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76447 === 10))
{var state_76446__$1 = state_76446;var statearr_76460_76478 = state_76446__$1;(statearr_76460_76478[2] = fc);
(statearr_76460_76478[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76447 === 11))
{var inst_76427 = (state_76446[7]);var inst_76437 = (state_76446[2]);var state_76446__$1 = state_76446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76446__$1,8,inst_76437,inst_76427);
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
var state_machine__10214__auto____0 = (function (){var statearr_76464 = (new Array(10));(statearr_76464[0] = state_machine__10214__auto__);
(statearr_76464[1] = 1);
return statearr_76464;
});
var state_machine__10214__auto____1 = (function (state_76446){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_76446);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e76465){if((e76465 instanceof Object))
{var ex__10217__auto__ = e76465;var statearr_76466_76479 = state_76446;(statearr_76466_76479[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76446);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__76480 = state_76446;
state_76446 = G__76480;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_76446){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_76446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_76467 = f__10284__auto__.call(null);(statearr_76467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___76468);
return statearr_76467;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_76527){var state_val_76528 = (state_76527[1]);if((state_val_76528 === 7))
{var inst_76523 = (state_76527[2]);var state_76527__$1 = state_76527;var statearr_76529_76545 = state_76527__$1;(statearr_76529_76545[2] = inst_76523);
(statearr_76529_76545[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76528 === 6))
{var inst_76516 = (state_76527[7]);var inst_76513 = (state_76527[8]);var inst_76520 = f.call(null,inst_76513,inst_76516);var inst_76513__$1 = inst_76520;var state_76527__$1 = (function (){var statearr_76530 = state_76527;(statearr_76530[8] = inst_76513__$1);
return statearr_76530;
})();var statearr_76531_76546 = state_76527__$1;(statearr_76531_76546[2] = null);
(statearr_76531_76546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76528 === 5))
{var inst_76513 = (state_76527[8]);var state_76527__$1 = state_76527;var statearr_76532_76547 = state_76527__$1;(statearr_76532_76547[2] = inst_76513);
(statearr_76532_76547[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76528 === 4))
{var inst_76516 = (state_76527[7]);var inst_76516__$1 = (state_76527[2]);var inst_76517 = (inst_76516__$1 == null);var state_76527__$1 = (function (){var statearr_76533 = state_76527;(statearr_76533[7] = inst_76516__$1);
return statearr_76533;
})();if(cljs.core.truth_(inst_76517))
{var statearr_76534_76548 = state_76527__$1;(statearr_76534_76548[1] = 5);
} else
{var statearr_76535_76549 = state_76527__$1;(statearr_76535_76549[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76528 === 3))
{var inst_76525 = (state_76527[2]);var state_76527__$1 = state_76527;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76527__$1,inst_76525);
} else
{if((state_val_76528 === 2))
{var state_76527__$1 = state_76527;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76527__$1,4,ch);
} else
{if((state_val_76528 === 1))
{var inst_76513 = init;var state_76527__$1 = (function (){var statearr_76536 = state_76527;(statearr_76536[8] = inst_76513);
return statearr_76536;
})();var statearr_76537_76550 = state_76527__$1;(statearr_76537_76550[2] = null);
(statearr_76537_76550[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_76541 = (new Array(9));(statearr_76541[0] = state_machine__10214__auto__);
(statearr_76541[1] = 1);
return statearr_76541;
});
var state_machine__10214__auto____1 = (function (state_76527){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_76527);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e76542){if((e76542 instanceof Object))
{var ex__10217__auto__ = e76542;var statearr_76543_76551 = state_76527;(statearr_76543_76551[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76527);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__76552 = state_76527;
state_76527 = G__76552;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_76527){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_76527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_76544 = f__10284__auto__.call(null);(statearr_76544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_76544;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_76614){var state_val_76615 = (state_76614[1]);if((state_val_76615 === 1))
{var inst_76594 = cljs.core.seq.call(null,coll);var inst_76595 = inst_76594;var state_76614__$1 = (function (){var statearr_76616 = state_76614;(statearr_76616[7] = inst_76595);
return statearr_76616;
})();var statearr_76617_76635 = state_76614__$1;(statearr_76617_76635[2] = null);
(statearr_76617_76635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76615 === 2))
{var inst_76595 = (state_76614[7]);var state_76614__$1 = state_76614;if(cljs.core.truth_(inst_76595))
{var statearr_76618_76636 = state_76614__$1;(statearr_76618_76636[1] = 4);
} else
{var statearr_76619_76637 = state_76614__$1;(statearr_76619_76637[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76615 === 3))
{var inst_76612 = (state_76614[2]);var state_76614__$1 = state_76614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76614__$1,inst_76612);
} else
{if((state_val_76615 === 4))
{var inst_76595 = (state_76614[7]);var inst_76598 = cljs.core.first.call(null,inst_76595);var state_76614__$1 = state_76614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76614__$1,7,ch,inst_76598);
} else
{if((state_val_76615 === 5))
{var state_76614__$1 = state_76614;if(cljs.core.truth_(close_QMARK_))
{var statearr_76620_76638 = state_76614__$1;(statearr_76620_76638[1] = 8);
} else
{var statearr_76621_76639 = state_76614__$1;(statearr_76621_76639[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76615 === 6))
{var inst_76610 = (state_76614[2]);var state_76614__$1 = state_76614;var statearr_76622_76640 = state_76614__$1;(statearr_76622_76640[2] = inst_76610);
(statearr_76622_76640[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76615 === 7))
{var inst_76595 = (state_76614[7]);var inst_76600 = (state_76614[2]);var inst_76601 = cljs.core.next.call(null,inst_76595);var inst_76595__$1 = inst_76601;var state_76614__$1 = (function (){var statearr_76623 = state_76614;(statearr_76623[7] = inst_76595__$1);
(statearr_76623[8] = inst_76600);
return statearr_76623;
})();var statearr_76624_76641 = state_76614__$1;(statearr_76624_76641[2] = null);
(statearr_76624_76641[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76615 === 8))
{var inst_76605 = cljs.core.async.close_BANG_.call(null,ch);var state_76614__$1 = state_76614;var statearr_76625_76642 = state_76614__$1;(statearr_76625_76642[2] = inst_76605);
(statearr_76625_76642[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76615 === 9))
{var state_76614__$1 = state_76614;var statearr_76626_76643 = state_76614__$1;(statearr_76626_76643[2] = null);
(statearr_76626_76643[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76615 === 10))
{var inst_76608 = (state_76614[2]);var state_76614__$1 = state_76614;var statearr_76627_76644 = state_76614__$1;(statearr_76627_76644[2] = inst_76608);
(statearr_76627_76644[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_76631 = (new Array(9));(statearr_76631[0] = state_machine__10214__auto__);
(statearr_76631[1] = 1);
return statearr_76631;
});
var state_machine__10214__auto____1 = (function (state_76614){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_76614);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e76632){if((e76632 instanceof Object))
{var ex__10217__auto__ = e76632;var statearr_76633_76645 = state_76614;(statearr_76633_76645[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__76646 = state_76614;
state_76614 = G__76646;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_76614){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_76614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_76634 = f__10284__auto__.call(null);(statearr_76634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_76634;
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
cljs.core.async.Mux = (function (){var obj76648 = {};return obj76648;
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
cljs.core.async.Mult = (function (){var obj76650 = {};return obj76650;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t76865 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t76865 = (function (cs,ch,mult,meta76866){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta76866 = meta76866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76865.cljs$lang$type = true;
cljs.core.async.t76865.cljs$lang$ctorStr = "cljs.core.async/t76865";
cljs.core.async.t76865.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t76865");
});})(cs))
;
cljs.core.async.t76865.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t76865.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t76865.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t76865.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t76865.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t76865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t76865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_76867){var self__ = this;
var _76867__$1 = this;return self__.meta76866;
});})(cs))
;
cljs.core.async.t76865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_76867,meta76866__$1){var self__ = this;
var _76867__$1 = this;return (new cljs.core.async.t76865(self__.cs,self__.ch,self__.mult,meta76866__$1));
});})(cs))
;
cljs.core.async.__GT_t76865 = ((function (cs){
return (function __GT_t76865(cs__$1,ch__$1,mult__$1,meta76866){return (new cljs.core.async.t76865(cs__$1,ch__$1,mult__$1,meta76866));
});})(cs))
;
}
return (new cljs.core.async.t76865(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___77079 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_76997){var state_val_76998 = (state_76997[1]);if((state_val_76998 === 32))
{var inst_76870 = (state_76997[7]);var inst_76946 = (state_76997[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76997,31,Object,null,30);var inst_76953 = cljs.core.async.put_BANG_.call(null,inst_76946,inst_76870,done);var state_76997__$1 = state_76997;var statearr_76999_77080 = state_76997__$1;(statearr_76999_77080[2] = inst_76953);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76997__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 1))
{var state_76997__$1 = state_76997;var statearr_77000_77081 = state_76997__$1;(statearr_77000_77081[2] = null);
(statearr_77000_77081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 33))
{var inst_76959 = (state_76997[9]);var inst_76961 = cljs.core.chunked_seq_QMARK_.call(null,inst_76959);var state_76997__$1 = state_76997;if(inst_76961)
{var statearr_77001_77082 = state_76997__$1;(statearr_77001_77082[1] = 36);
} else
{var statearr_77002_77083 = state_76997__$1;(statearr_77002_77083[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 2))
{var state_76997__$1 = state_76997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76997__$1,4,ch);
} else
{if((state_val_76998 === 34))
{var state_76997__$1 = state_76997;var statearr_77003_77084 = state_76997__$1;(statearr_77003_77084[2] = null);
(statearr_77003_77084[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 3))
{var inst_76995 = (state_76997[2]);var state_76997__$1 = state_76997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76997__$1,inst_76995);
} else
{if((state_val_76998 === 35))
{var inst_76984 = (state_76997[2]);var state_76997__$1 = state_76997;var statearr_77004_77085 = state_76997__$1;(statearr_77004_77085[2] = inst_76984);
(statearr_77004_77085[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 4))
{var inst_76870 = (state_76997[7]);var inst_76870__$1 = (state_76997[2]);var inst_76871 = (inst_76870__$1 == null);var state_76997__$1 = (function (){var statearr_77005 = state_76997;(statearr_77005[7] = inst_76870__$1);
return statearr_77005;
})();if(cljs.core.truth_(inst_76871))
{var statearr_77006_77086 = state_76997__$1;(statearr_77006_77086[1] = 5);
} else
{var statearr_77007_77087 = state_76997__$1;(statearr_77007_77087[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 36))
{var inst_76959 = (state_76997[9]);var inst_76963 = cljs.core.chunk_first.call(null,inst_76959);var inst_76964 = cljs.core.chunk_rest.call(null,inst_76959);var inst_76965 = cljs.core.count.call(null,inst_76963);var inst_76938 = inst_76964;var inst_76939 = inst_76963;var inst_76940 = inst_76965;var inst_76941 = 0;var state_76997__$1 = (function (){var statearr_77008 = state_76997;(statearr_77008[10] = inst_76940);
(statearr_77008[11] = inst_76941);
(statearr_77008[12] = inst_76938);
(statearr_77008[13] = inst_76939);
return statearr_77008;
})();var statearr_77009_77088 = state_76997__$1;(statearr_77009_77088[2] = null);
(statearr_77009_77088[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 5))
{var inst_76877 = cljs.core.deref.call(null,cs);var inst_76878 = cljs.core.seq.call(null,inst_76877);var inst_76879 = inst_76878;var inst_76880 = null;var inst_76881 = 0;var inst_76882 = 0;var state_76997__$1 = (function (){var statearr_77010 = state_76997;(statearr_77010[14] = inst_76879);
(statearr_77010[15] = inst_76882);
(statearr_77010[16] = inst_76881);
(statearr_77010[17] = inst_76880);
return statearr_77010;
})();var statearr_77011_77089 = state_76997__$1;(statearr_77011_77089[2] = null);
(statearr_77011_77089[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 37))
{var inst_76959 = (state_76997[9]);var inst_76968 = cljs.core.first.call(null,inst_76959);var state_76997__$1 = (function (){var statearr_77012 = state_76997;(statearr_77012[18] = inst_76968);
return statearr_77012;
})();var statearr_77013_77090 = state_76997__$1;(statearr_77013_77090[2] = null);
(statearr_77013_77090[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 6))
{var inst_76929 = cljs.core.deref.call(null,cs);var inst_76930 = cljs.core.keys.call(null,inst_76929);var inst_76931 = cljs.core.count.call(null,inst_76930);var inst_76932 = cljs.core.reset_BANG_.call(null,dctr,inst_76931);var inst_76937 = cljs.core.seq.call(null,inst_76930);var inst_76938 = inst_76937;var inst_76939 = null;var inst_76940 = 0;var inst_76941 = 0;var state_76997__$1 = (function (){var statearr_77014 = state_76997;(statearr_77014[10] = inst_76940);
(statearr_77014[11] = inst_76941);
(statearr_77014[19] = inst_76932);
(statearr_77014[12] = inst_76938);
(statearr_77014[13] = inst_76939);
return statearr_77014;
})();var statearr_77015_77091 = state_76997__$1;(statearr_77015_77091[2] = null);
(statearr_77015_77091[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 38))
{var inst_76981 = (state_76997[2]);var state_76997__$1 = state_76997;var statearr_77016_77092 = state_76997__$1;(statearr_77016_77092[2] = inst_76981);
(statearr_77016_77092[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 7))
{var inst_76993 = (state_76997[2]);var state_76997__$1 = state_76997;var statearr_77017_77093 = state_76997__$1;(statearr_77017_77093[2] = inst_76993);
(statearr_77017_77093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 39))
{var inst_76959 = (state_76997[9]);var inst_76977 = (state_76997[2]);var inst_76978 = cljs.core.next.call(null,inst_76959);var inst_76938 = inst_76978;var inst_76939 = null;var inst_76940 = 0;var inst_76941 = 0;var state_76997__$1 = (function (){var statearr_77018 = state_76997;(statearr_77018[10] = inst_76940);
(statearr_77018[11] = inst_76941);
(statearr_77018[20] = inst_76977);
(statearr_77018[12] = inst_76938);
(statearr_77018[13] = inst_76939);
return statearr_77018;
})();var statearr_77019_77094 = state_76997__$1;(statearr_77019_77094[2] = null);
(statearr_77019_77094[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 8))
{var inst_76882 = (state_76997[15]);var inst_76881 = (state_76997[16]);var inst_76884 = (inst_76882 < inst_76881);var inst_76885 = inst_76884;var state_76997__$1 = state_76997;if(cljs.core.truth_(inst_76885))
{var statearr_77020_77095 = state_76997__$1;(statearr_77020_77095[1] = 10);
} else
{var statearr_77021_77096 = state_76997__$1;(statearr_77021_77096[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 40))
{var inst_76968 = (state_76997[18]);var inst_76969 = (state_76997[2]);var inst_76970 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_76971 = cljs.core.async.untap_STAR_.call(null,m,inst_76968);var state_76997__$1 = (function (){var statearr_77022 = state_76997;(statearr_77022[21] = inst_76969);
(statearr_77022[22] = inst_76970);
return statearr_77022;
})();var statearr_77023_77097 = state_76997__$1;(statearr_77023_77097[2] = inst_76971);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76997__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 9))
{var inst_76927 = (state_76997[2]);var state_76997__$1 = state_76997;var statearr_77024_77098 = state_76997__$1;(statearr_77024_77098[2] = inst_76927);
(statearr_77024_77098[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 41))
{var inst_76870 = (state_76997[7]);var inst_76968 = (state_76997[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76997,40,Object,null,39);var inst_76975 = cljs.core.async.put_BANG_.call(null,inst_76968,inst_76870,done);var state_76997__$1 = state_76997;var statearr_77025_77099 = state_76997__$1;(statearr_77025_77099[2] = inst_76975);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76997__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 10))
{var inst_76882 = (state_76997[15]);var inst_76880 = (state_76997[17]);var inst_76888 = cljs.core._nth.call(null,inst_76880,inst_76882);var inst_76889 = cljs.core.nth.call(null,inst_76888,0,null);var inst_76890 = cljs.core.nth.call(null,inst_76888,1,null);var state_76997__$1 = (function (){var statearr_77026 = state_76997;(statearr_77026[23] = inst_76889);
return statearr_77026;
})();if(cljs.core.truth_(inst_76890))
{var statearr_77027_77100 = state_76997__$1;(statearr_77027_77100[1] = 13);
} else
{var statearr_77028_77101 = state_76997__$1;(statearr_77028_77101[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 42))
{var inst_76990 = (state_76997[2]);var state_76997__$1 = (function (){var statearr_77029 = state_76997;(statearr_77029[24] = inst_76990);
return statearr_77029;
})();var statearr_77030_77102 = state_76997__$1;(statearr_77030_77102[2] = null);
(statearr_77030_77102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 11))
{var inst_76879 = (state_76997[14]);var inst_76899 = (state_76997[25]);var inst_76899__$1 = cljs.core.seq.call(null,inst_76879);var state_76997__$1 = (function (){var statearr_77031 = state_76997;(statearr_77031[25] = inst_76899__$1);
return statearr_77031;
})();if(inst_76899__$1)
{var statearr_77032_77103 = state_76997__$1;(statearr_77032_77103[1] = 16);
} else
{var statearr_77033_77104 = state_76997__$1;(statearr_77033_77104[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 12))
{var inst_76925 = (state_76997[2]);var state_76997__$1 = state_76997;var statearr_77034_77105 = state_76997__$1;(statearr_77034_77105[2] = inst_76925);
(statearr_77034_77105[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 13))
{var inst_76889 = (state_76997[23]);var inst_76892 = cljs.core.async.close_BANG_.call(null,inst_76889);var state_76997__$1 = state_76997;var statearr_77038_77106 = state_76997__$1;(statearr_77038_77106[2] = inst_76892);
(statearr_77038_77106[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 14))
{var state_76997__$1 = state_76997;var statearr_77039_77107 = state_76997__$1;(statearr_77039_77107[2] = null);
(statearr_77039_77107[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 15))
{var inst_76879 = (state_76997[14]);var inst_76882 = (state_76997[15]);var inst_76881 = (state_76997[16]);var inst_76880 = (state_76997[17]);var inst_76895 = (state_76997[2]);var inst_76896 = (inst_76882 + 1);var tmp77035 = inst_76879;var tmp77036 = inst_76881;var tmp77037 = inst_76880;var inst_76879__$1 = tmp77035;var inst_76880__$1 = tmp77037;var inst_76881__$1 = tmp77036;var inst_76882__$1 = inst_76896;var state_76997__$1 = (function (){var statearr_77040 = state_76997;(statearr_77040[14] = inst_76879__$1);
(statearr_77040[26] = inst_76895);
(statearr_77040[15] = inst_76882__$1);
(statearr_77040[16] = inst_76881__$1);
(statearr_77040[17] = inst_76880__$1);
return statearr_77040;
})();var statearr_77041_77108 = state_76997__$1;(statearr_77041_77108[2] = null);
(statearr_77041_77108[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 16))
{var inst_76899 = (state_76997[25]);var inst_76901 = cljs.core.chunked_seq_QMARK_.call(null,inst_76899);var state_76997__$1 = state_76997;if(inst_76901)
{var statearr_77042_77109 = state_76997__$1;(statearr_77042_77109[1] = 19);
} else
{var statearr_77043_77110 = state_76997__$1;(statearr_77043_77110[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 17))
{var state_76997__$1 = state_76997;var statearr_77044_77111 = state_76997__$1;(statearr_77044_77111[2] = null);
(statearr_77044_77111[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 18))
{var inst_76923 = (state_76997[2]);var state_76997__$1 = state_76997;var statearr_77045_77112 = state_76997__$1;(statearr_77045_77112[2] = inst_76923);
(statearr_77045_77112[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 19))
{var inst_76899 = (state_76997[25]);var inst_76903 = cljs.core.chunk_first.call(null,inst_76899);var inst_76904 = cljs.core.chunk_rest.call(null,inst_76899);var inst_76905 = cljs.core.count.call(null,inst_76903);var inst_76879 = inst_76904;var inst_76880 = inst_76903;var inst_76881 = inst_76905;var inst_76882 = 0;var state_76997__$1 = (function (){var statearr_77046 = state_76997;(statearr_77046[14] = inst_76879);
(statearr_77046[15] = inst_76882);
(statearr_77046[16] = inst_76881);
(statearr_77046[17] = inst_76880);
return statearr_77046;
})();var statearr_77047_77113 = state_76997__$1;(statearr_77047_77113[2] = null);
(statearr_77047_77113[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 20))
{var inst_76899 = (state_76997[25]);var inst_76909 = cljs.core.first.call(null,inst_76899);var inst_76910 = cljs.core.nth.call(null,inst_76909,0,null);var inst_76911 = cljs.core.nth.call(null,inst_76909,1,null);var state_76997__$1 = (function (){var statearr_77048 = state_76997;(statearr_77048[27] = inst_76910);
return statearr_77048;
})();if(cljs.core.truth_(inst_76911))
{var statearr_77049_77114 = state_76997__$1;(statearr_77049_77114[1] = 22);
} else
{var statearr_77050_77115 = state_76997__$1;(statearr_77050_77115[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 21))
{var inst_76920 = (state_76997[2]);var state_76997__$1 = state_76997;var statearr_77051_77116 = state_76997__$1;(statearr_77051_77116[2] = inst_76920);
(statearr_77051_77116[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 22))
{var inst_76910 = (state_76997[27]);var inst_76913 = cljs.core.async.close_BANG_.call(null,inst_76910);var state_76997__$1 = state_76997;var statearr_77052_77117 = state_76997__$1;(statearr_77052_77117[2] = inst_76913);
(statearr_77052_77117[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 23))
{var state_76997__$1 = state_76997;var statearr_77053_77118 = state_76997__$1;(statearr_77053_77118[2] = null);
(statearr_77053_77118[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 24))
{var inst_76899 = (state_76997[25]);var inst_76916 = (state_76997[2]);var inst_76917 = cljs.core.next.call(null,inst_76899);var inst_76879 = inst_76917;var inst_76880 = null;var inst_76881 = 0;var inst_76882 = 0;var state_76997__$1 = (function (){var statearr_77054 = state_76997;(statearr_77054[14] = inst_76879);
(statearr_77054[28] = inst_76916);
(statearr_77054[15] = inst_76882);
(statearr_77054[16] = inst_76881);
(statearr_77054[17] = inst_76880);
return statearr_77054;
})();var statearr_77055_77119 = state_76997__$1;(statearr_77055_77119[2] = null);
(statearr_77055_77119[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 25))
{var inst_76940 = (state_76997[10]);var inst_76941 = (state_76997[11]);var inst_76943 = (inst_76941 < inst_76940);var inst_76944 = inst_76943;var state_76997__$1 = state_76997;if(cljs.core.truth_(inst_76944))
{var statearr_77056_77120 = state_76997__$1;(statearr_77056_77120[1] = 27);
} else
{var statearr_77057_77121 = state_76997__$1;(statearr_77057_77121[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 26))
{var inst_76988 = (state_76997[2]);var state_76997__$1 = (function (){var statearr_77058 = state_76997;(statearr_77058[29] = inst_76988);
return statearr_77058;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76997__$1,42,dchan);
} else
{if((state_val_76998 === 27))
{var inst_76941 = (state_76997[11]);var inst_76939 = (state_76997[13]);var inst_76946 = cljs.core._nth.call(null,inst_76939,inst_76941);var state_76997__$1 = (function (){var statearr_77059 = state_76997;(statearr_77059[8] = inst_76946);
return statearr_77059;
})();var statearr_77060_77122 = state_76997__$1;(statearr_77060_77122[2] = null);
(statearr_77060_77122[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 28))
{var inst_76959 = (state_76997[9]);var inst_76938 = (state_76997[12]);var inst_76959__$1 = cljs.core.seq.call(null,inst_76938);var state_76997__$1 = (function (){var statearr_77064 = state_76997;(statearr_77064[9] = inst_76959__$1);
return statearr_77064;
})();if(inst_76959__$1)
{var statearr_77065_77123 = state_76997__$1;(statearr_77065_77123[1] = 33);
} else
{var statearr_77066_77124 = state_76997__$1;(statearr_77066_77124[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 29))
{var inst_76986 = (state_76997[2]);var state_76997__$1 = state_76997;var statearr_77067_77125 = state_76997__$1;(statearr_77067_77125[2] = inst_76986);
(statearr_77067_77125[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 30))
{var inst_76940 = (state_76997[10]);var inst_76941 = (state_76997[11]);var inst_76938 = (state_76997[12]);var inst_76939 = (state_76997[13]);var inst_76955 = (state_76997[2]);var inst_76956 = (inst_76941 + 1);var tmp77061 = inst_76940;var tmp77062 = inst_76938;var tmp77063 = inst_76939;var inst_76938__$1 = tmp77062;var inst_76939__$1 = tmp77063;var inst_76940__$1 = tmp77061;var inst_76941__$1 = inst_76956;var state_76997__$1 = (function (){var statearr_77068 = state_76997;(statearr_77068[30] = inst_76955);
(statearr_77068[10] = inst_76940__$1);
(statearr_77068[11] = inst_76941__$1);
(statearr_77068[12] = inst_76938__$1);
(statearr_77068[13] = inst_76939__$1);
return statearr_77068;
})();var statearr_77069_77126 = state_76997__$1;(statearr_77069_77126[2] = null);
(statearr_77069_77126[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_76998 === 31))
{var inst_76946 = (state_76997[8]);var inst_76947 = (state_76997[2]);var inst_76948 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_76949 = cljs.core.async.untap_STAR_.call(null,m,inst_76946);var state_76997__$1 = (function (){var statearr_77070 = state_76997;(statearr_77070[31] = inst_76947);
(statearr_77070[32] = inst_76948);
return statearr_77070;
})();var statearr_77071_77127 = state_76997__$1;(statearr_77071_77127[2] = inst_76949);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76997__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_77075 = (new Array(33));(statearr_77075[0] = state_machine__10214__auto__);
(statearr_77075[1] = 1);
return statearr_77075;
});
var state_machine__10214__auto____1 = (function (state_76997){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_76997);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e77076){if((e77076 instanceof Object))
{var ex__10217__auto__ = e77076;var statearr_77077_77128 = state_76997;(statearr_77077_77128[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76997);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77129 = state_76997;
state_76997 = G__77129;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_76997){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_76997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_77078 = f__10284__auto__.call(null);(statearr_77078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___77079);
return statearr_77078;
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
cljs.core.async.Mix = (function (){var obj77131 = {};return obj77131;
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
;var m = (function (){if(typeof cljs.core.async.t77241 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t77241 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta77242){
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
this.meta77242 = meta77242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t77241.cljs$lang$type = true;
cljs.core.async.t77241.cljs$lang$ctorStr = "cljs.core.async/t77241";
cljs.core.async.t77241.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t77241");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77241.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t77241.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77241.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77241.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77241.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77241.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77241.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t77241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_77243){var self__ = this;
var _77243__$1 = this;return self__.meta77242;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_77243,meta77242__$1){var self__ = this;
var _77243__$1 = this;return (new cljs.core.async.t77241(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta77242__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t77241 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t77241(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta77242){return (new cljs.core.async.t77241(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta77242));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t77241(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___77350 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_77308){var state_val_77309 = (state_77308[1]);if((state_val_77309 === 1))
{var inst_77247 = (state_77308[7]);var inst_77247__$1 = calc_state.call(null);var inst_77248 = cljs.core.seq_QMARK_.call(null,inst_77247__$1);var state_77308__$1 = (function (){var statearr_77310 = state_77308;(statearr_77310[7] = inst_77247__$1);
return statearr_77310;
})();if(inst_77248)
{var statearr_77311_77351 = state_77308__$1;(statearr_77311_77351[1] = 2);
} else
{var statearr_77312_77352 = state_77308__$1;(statearr_77312_77352[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 2))
{var inst_77247 = (state_77308[7]);var inst_77250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_77247);var state_77308__$1 = state_77308;var statearr_77313_77353 = state_77308__$1;(statearr_77313_77353[2] = inst_77250);
(statearr_77313_77353[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 3))
{var inst_77247 = (state_77308[7]);var state_77308__$1 = state_77308;var statearr_77314_77354 = state_77308__$1;(statearr_77314_77354[2] = inst_77247);
(statearr_77314_77354[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 4))
{var inst_77247 = (state_77308[7]);var inst_77253 = (state_77308[2]);var inst_77254 = cljs.core.get.call(null,inst_77253,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_77255 = cljs.core.get.call(null,inst_77253,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_77256 = cljs.core.get.call(null,inst_77253,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_77257 = inst_77247;var state_77308__$1 = (function (){var statearr_77315 = state_77308;(statearr_77315[8] = inst_77257);
(statearr_77315[9] = inst_77256);
(statearr_77315[10] = inst_77255);
(statearr_77315[11] = inst_77254);
return statearr_77315;
})();var statearr_77316_77355 = state_77308__$1;(statearr_77316_77355[2] = null);
(statearr_77316_77355[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 5))
{var inst_77257 = (state_77308[8]);var inst_77260 = cljs.core.seq_QMARK_.call(null,inst_77257);var state_77308__$1 = state_77308;if(inst_77260)
{var statearr_77317_77356 = state_77308__$1;(statearr_77317_77356[1] = 7);
} else
{var statearr_77318_77357 = state_77308__$1;(statearr_77318_77357[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 6))
{var inst_77306 = (state_77308[2]);var state_77308__$1 = state_77308;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77308__$1,inst_77306);
} else
{if((state_val_77309 === 7))
{var inst_77257 = (state_77308[8]);var inst_77262 = cljs.core.apply.call(null,cljs.core.hash_map,inst_77257);var state_77308__$1 = state_77308;var statearr_77319_77358 = state_77308__$1;(statearr_77319_77358[2] = inst_77262);
(statearr_77319_77358[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 8))
{var inst_77257 = (state_77308[8]);var state_77308__$1 = state_77308;var statearr_77320_77359 = state_77308__$1;(statearr_77320_77359[2] = inst_77257);
(statearr_77320_77359[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 9))
{var inst_77265 = (state_77308[12]);var inst_77265__$1 = (state_77308[2]);var inst_77266 = cljs.core.get.call(null,inst_77265__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_77267 = cljs.core.get.call(null,inst_77265__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_77268 = cljs.core.get.call(null,inst_77265__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_77308__$1 = (function (){var statearr_77321 = state_77308;(statearr_77321[13] = inst_77268);
(statearr_77321[14] = inst_77267);
(statearr_77321[12] = inst_77265__$1);
return statearr_77321;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_77308__$1,10,inst_77266);
} else
{if((state_val_77309 === 10))
{var inst_77272 = (state_77308[15]);var inst_77273 = (state_77308[16]);var inst_77271 = (state_77308[2]);var inst_77272__$1 = cljs.core.nth.call(null,inst_77271,0,null);var inst_77273__$1 = cljs.core.nth.call(null,inst_77271,1,null);var inst_77274 = (inst_77272__$1 == null);var inst_77275 = cljs.core._EQ_.call(null,inst_77273__$1,change);var inst_77276 = (inst_77274) || (inst_77275);var state_77308__$1 = (function (){var statearr_77322 = state_77308;(statearr_77322[15] = inst_77272__$1);
(statearr_77322[16] = inst_77273__$1);
return statearr_77322;
})();if(cljs.core.truth_(inst_77276))
{var statearr_77323_77360 = state_77308__$1;(statearr_77323_77360[1] = 11);
} else
{var statearr_77324_77361 = state_77308__$1;(statearr_77324_77361[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 11))
{var inst_77272 = (state_77308[15]);var inst_77278 = (inst_77272 == null);var state_77308__$1 = state_77308;if(cljs.core.truth_(inst_77278))
{var statearr_77325_77362 = state_77308__$1;(statearr_77325_77362[1] = 14);
} else
{var statearr_77326_77363 = state_77308__$1;(statearr_77326_77363[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 12))
{var inst_77273 = (state_77308[16]);var inst_77287 = (state_77308[17]);var inst_77268 = (state_77308[13]);var inst_77287__$1 = inst_77268.call(null,inst_77273);var state_77308__$1 = (function (){var statearr_77327 = state_77308;(statearr_77327[17] = inst_77287__$1);
return statearr_77327;
})();if(cljs.core.truth_(inst_77287__$1))
{var statearr_77328_77364 = state_77308__$1;(statearr_77328_77364[1] = 17);
} else
{var statearr_77329_77365 = state_77308__$1;(statearr_77329_77365[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 13))
{var inst_77304 = (state_77308[2]);var state_77308__$1 = state_77308;var statearr_77330_77366 = state_77308__$1;(statearr_77330_77366[2] = inst_77304);
(statearr_77330_77366[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 14))
{var inst_77273 = (state_77308[16]);var inst_77280 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_77273);var state_77308__$1 = state_77308;var statearr_77331_77367 = state_77308__$1;(statearr_77331_77367[2] = inst_77280);
(statearr_77331_77367[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 15))
{var state_77308__$1 = state_77308;var statearr_77332_77368 = state_77308__$1;(statearr_77332_77368[2] = null);
(statearr_77332_77368[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 16))
{var inst_77283 = (state_77308[2]);var inst_77284 = calc_state.call(null);var inst_77257 = inst_77284;var state_77308__$1 = (function (){var statearr_77333 = state_77308;(statearr_77333[18] = inst_77283);
(statearr_77333[8] = inst_77257);
return statearr_77333;
})();var statearr_77334_77369 = state_77308__$1;(statearr_77334_77369[2] = null);
(statearr_77334_77369[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 17))
{var inst_77287 = (state_77308[17]);var state_77308__$1 = state_77308;var statearr_77335_77370 = state_77308__$1;(statearr_77335_77370[2] = inst_77287);
(statearr_77335_77370[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 18))
{var inst_77273 = (state_77308[16]);var inst_77268 = (state_77308[13]);var inst_77267 = (state_77308[14]);var inst_77290 = cljs.core.empty_QMARK_.call(null,inst_77268);var inst_77291 = inst_77267.call(null,inst_77273);var inst_77292 = cljs.core.not.call(null,inst_77291);var inst_77293 = (inst_77290) && (inst_77292);var state_77308__$1 = state_77308;var statearr_77336_77371 = state_77308__$1;(statearr_77336_77371[2] = inst_77293);
(statearr_77336_77371[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 19))
{var inst_77295 = (state_77308[2]);var state_77308__$1 = state_77308;if(cljs.core.truth_(inst_77295))
{var statearr_77337_77372 = state_77308__$1;(statearr_77337_77372[1] = 20);
} else
{var statearr_77338_77373 = state_77308__$1;(statearr_77338_77373[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 20))
{var inst_77272 = (state_77308[15]);var state_77308__$1 = state_77308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77308__$1,23,out,inst_77272);
} else
{if((state_val_77309 === 21))
{var state_77308__$1 = state_77308;var statearr_77339_77374 = state_77308__$1;(statearr_77339_77374[2] = null);
(statearr_77339_77374[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 22))
{var inst_77265 = (state_77308[12]);var inst_77301 = (state_77308[2]);var inst_77257 = inst_77265;var state_77308__$1 = (function (){var statearr_77340 = state_77308;(statearr_77340[19] = inst_77301);
(statearr_77340[8] = inst_77257);
return statearr_77340;
})();var statearr_77341_77375 = state_77308__$1;(statearr_77341_77375[2] = null);
(statearr_77341_77375[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77309 === 23))
{var inst_77298 = (state_77308[2]);var state_77308__$1 = state_77308;var statearr_77342_77376 = state_77308__$1;(statearr_77342_77376[2] = inst_77298);
(statearr_77342_77376[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_77346 = (new Array(20));(statearr_77346[0] = state_machine__10214__auto__);
(statearr_77346[1] = 1);
return statearr_77346;
});
var state_machine__10214__auto____1 = (function (state_77308){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_77308);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e77347){if((e77347 instanceof Object))
{var ex__10217__auto__ = e77347;var statearr_77348_77377 = state_77308;(statearr_77348_77377[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77308);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77378 = state_77308;
state_77308 = G__77378;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_77308){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_77308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_77349 = f__10284__auto__.call(null);(statearr_77349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___77350);
return statearr_77349;
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
cljs.core.async.Pub = (function (){var obj77380 = {};return obj77380;
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
return (function (p1__77381_SHARP_){if(cljs.core.truth_(p1__77381_SHARP_.call(null,topic)))
{return p1__77381_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__77381_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t77506 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t77506 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta77507){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta77507 = meta77507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t77506.cljs$lang$type = true;
cljs.core.async.t77506.cljs$lang$ctorStr = "cljs.core.async/t77506";
cljs.core.async.t77506.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t77506");
});})(mults,ensure_mult))
;
cljs.core.async.t77506.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t77506.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t77506.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t77506.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t77506.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t77506.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t77506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t77506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_77508){var self__ = this;
var _77508__$1 = this;return self__.meta77507;
});})(mults,ensure_mult))
;
cljs.core.async.t77506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_77508,meta77507__$1){var self__ = this;
var _77508__$1 = this;return (new cljs.core.async.t77506(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta77507__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t77506 = ((function (mults,ensure_mult){
return (function __GT_t77506(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta77507){return (new cljs.core.async.t77506(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta77507));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t77506(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___77630 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_77582){var state_val_77583 = (state_77582[1]);if((state_val_77583 === 1))
{var state_77582__$1 = state_77582;var statearr_77584_77631 = state_77582__$1;(statearr_77584_77631[2] = null);
(statearr_77584_77631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 2))
{var state_77582__$1 = state_77582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77582__$1,4,ch);
} else
{if((state_val_77583 === 3))
{var inst_77580 = (state_77582[2]);var state_77582__$1 = state_77582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77582__$1,inst_77580);
} else
{if((state_val_77583 === 4))
{var inst_77511 = (state_77582[7]);var inst_77511__$1 = (state_77582[2]);var inst_77512 = (inst_77511__$1 == null);var state_77582__$1 = (function (){var statearr_77585 = state_77582;(statearr_77585[7] = inst_77511__$1);
return statearr_77585;
})();if(cljs.core.truth_(inst_77512))
{var statearr_77586_77632 = state_77582__$1;(statearr_77586_77632[1] = 5);
} else
{var statearr_77587_77633 = state_77582__$1;(statearr_77587_77633[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 5))
{var inst_77518 = cljs.core.deref.call(null,mults);var inst_77519 = cljs.core.vals.call(null,inst_77518);var inst_77520 = cljs.core.seq.call(null,inst_77519);var inst_77521 = inst_77520;var inst_77522 = null;var inst_77523 = 0;var inst_77524 = 0;var state_77582__$1 = (function (){var statearr_77588 = state_77582;(statearr_77588[8] = inst_77521);
(statearr_77588[9] = inst_77522);
(statearr_77588[10] = inst_77523);
(statearr_77588[11] = inst_77524);
return statearr_77588;
})();var statearr_77589_77634 = state_77582__$1;(statearr_77589_77634[2] = null);
(statearr_77589_77634[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 6))
{var inst_77511 = (state_77582[7]);var inst_77561 = (state_77582[12]);var inst_77559 = (state_77582[13]);var inst_77559__$1 = topic_fn.call(null,inst_77511);var inst_77560 = cljs.core.deref.call(null,mults);var inst_77561__$1 = cljs.core.get.call(null,inst_77560,inst_77559__$1);var state_77582__$1 = (function (){var statearr_77590 = state_77582;(statearr_77590[12] = inst_77561__$1);
(statearr_77590[13] = inst_77559__$1);
return statearr_77590;
})();if(cljs.core.truth_(inst_77561__$1))
{var statearr_77591_77635 = state_77582__$1;(statearr_77591_77635[1] = 19);
} else
{var statearr_77592_77636 = state_77582__$1;(statearr_77592_77636[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 7))
{var inst_77578 = (state_77582[2]);var state_77582__$1 = state_77582;var statearr_77593_77637 = state_77582__$1;(statearr_77593_77637[2] = inst_77578);
(statearr_77593_77637[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 8))
{var inst_77523 = (state_77582[10]);var inst_77524 = (state_77582[11]);var inst_77526 = (inst_77524 < inst_77523);var inst_77527 = inst_77526;var state_77582__$1 = state_77582;if(cljs.core.truth_(inst_77527))
{var statearr_77597_77638 = state_77582__$1;(statearr_77597_77638[1] = 10);
} else
{var statearr_77598_77639 = state_77582__$1;(statearr_77598_77639[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 9))
{var inst_77557 = (state_77582[2]);var state_77582__$1 = state_77582;var statearr_77599_77640 = state_77582__$1;(statearr_77599_77640[2] = inst_77557);
(statearr_77599_77640[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 10))
{var inst_77521 = (state_77582[8]);var inst_77522 = (state_77582[9]);var inst_77523 = (state_77582[10]);var inst_77524 = (state_77582[11]);var inst_77529 = cljs.core._nth.call(null,inst_77522,inst_77524);var inst_77530 = cljs.core.async.muxch_STAR_.call(null,inst_77529);var inst_77531 = cljs.core.async.close_BANG_.call(null,inst_77530);var inst_77532 = (inst_77524 + 1);var tmp77594 = inst_77521;var tmp77595 = inst_77522;var tmp77596 = inst_77523;var inst_77521__$1 = tmp77594;var inst_77522__$1 = tmp77595;var inst_77523__$1 = tmp77596;var inst_77524__$1 = inst_77532;var state_77582__$1 = (function (){var statearr_77600 = state_77582;(statearr_77600[8] = inst_77521__$1);
(statearr_77600[9] = inst_77522__$1);
(statearr_77600[14] = inst_77531);
(statearr_77600[10] = inst_77523__$1);
(statearr_77600[11] = inst_77524__$1);
return statearr_77600;
})();var statearr_77601_77641 = state_77582__$1;(statearr_77601_77641[2] = null);
(statearr_77601_77641[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 11))
{var inst_77521 = (state_77582[8]);var inst_77535 = (state_77582[15]);var inst_77535__$1 = cljs.core.seq.call(null,inst_77521);var state_77582__$1 = (function (){var statearr_77602 = state_77582;(statearr_77602[15] = inst_77535__$1);
return statearr_77602;
})();if(inst_77535__$1)
{var statearr_77603_77642 = state_77582__$1;(statearr_77603_77642[1] = 13);
} else
{var statearr_77604_77643 = state_77582__$1;(statearr_77604_77643[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 12))
{var inst_77555 = (state_77582[2]);var state_77582__$1 = state_77582;var statearr_77605_77644 = state_77582__$1;(statearr_77605_77644[2] = inst_77555);
(statearr_77605_77644[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 13))
{var inst_77535 = (state_77582[15]);var inst_77537 = cljs.core.chunked_seq_QMARK_.call(null,inst_77535);var state_77582__$1 = state_77582;if(inst_77537)
{var statearr_77606_77645 = state_77582__$1;(statearr_77606_77645[1] = 16);
} else
{var statearr_77607_77646 = state_77582__$1;(statearr_77607_77646[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 14))
{var state_77582__$1 = state_77582;var statearr_77608_77647 = state_77582__$1;(statearr_77608_77647[2] = null);
(statearr_77608_77647[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 15))
{var inst_77553 = (state_77582[2]);var state_77582__$1 = state_77582;var statearr_77609_77648 = state_77582__$1;(statearr_77609_77648[2] = inst_77553);
(statearr_77609_77648[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 16))
{var inst_77535 = (state_77582[15]);var inst_77539 = cljs.core.chunk_first.call(null,inst_77535);var inst_77540 = cljs.core.chunk_rest.call(null,inst_77535);var inst_77541 = cljs.core.count.call(null,inst_77539);var inst_77521 = inst_77540;var inst_77522 = inst_77539;var inst_77523 = inst_77541;var inst_77524 = 0;var state_77582__$1 = (function (){var statearr_77610 = state_77582;(statearr_77610[8] = inst_77521);
(statearr_77610[9] = inst_77522);
(statearr_77610[10] = inst_77523);
(statearr_77610[11] = inst_77524);
return statearr_77610;
})();var statearr_77611_77649 = state_77582__$1;(statearr_77611_77649[2] = null);
(statearr_77611_77649[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 17))
{var inst_77535 = (state_77582[15]);var inst_77544 = cljs.core.first.call(null,inst_77535);var inst_77545 = cljs.core.async.muxch_STAR_.call(null,inst_77544);var inst_77546 = cljs.core.async.close_BANG_.call(null,inst_77545);var inst_77547 = cljs.core.next.call(null,inst_77535);var inst_77521 = inst_77547;var inst_77522 = null;var inst_77523 = 0;var inst_77524 = 0;var state_77582__$1 = (function (){var statearr_77612 = state_77582;(statearr_77612[8] = inst_77521);
(statearr_77612[16] = inst_77546);
(statearr_77612[9] = inst_77522);
(statearr_77612[10] = inst_77523);
(statearr_77612[11] = inst_77524);
return statearr_77612;
})();var statearr_77613_77650 = state_77582__$1;(statearr_77613_77650[2] = null);
(statearr_77613_77650[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 18))
{var inst_77550 = (state_77582[2]);var state_77582__$1 = state_77582;var statearr_77614_77651 = state_77582__$1;(statearr_77614_77651[2] = inst_77550);
(statearr_77614_77651[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 19))
{var state_77582__$1 = state_77582;var statearr_77615_77652 = state_77582__$1;(statearr_77615_77652[2] = null);
(statearr_77615_77652[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 20))
{var state_77582__$1 = state_77582;var statearr_77616_77653 = state_77582__$1;(statearr_77616_77653[2] = null);
(statearr_77616_77653[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 21))
{var inst_77575 = (state_77582[2]);var state_77582__$1 = (function (){var statearr_77617 = state_77582;(statearr_77617[17] = inst_77575);
return statearr_77617;
})();var statearr_77618_77654 = state_77582__$1;(statearr_77618_77654[2] = null);
(statearr_77618_77654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 22))
{var inst_77572 = (state_77582[2]);var state_77582__$1 = state_77582;var statearr_77619_77655 = state_77582__$1;(statearr_77619_77655[2] = inst_77572);
(statearr_77619_77655[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 23))
{var inst_77559 = (state_77582[13]);var inst_77563 = (state_77582[2]);var inst_77564 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_77559);var state_77582__$1 = (function (){var statearr_77620 = state_77582;(statearr_77620[18] = inst_77563);
return statearr_77620;
})();var statearr_77621_77656 = state_77582__$1;(statearr_77621_77656[2] = inst_77564);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77582__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77583 === 24))
{var inst_77511 = (state_77582[7]);var inst_77561 = (state_77582[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77582,23,Object,null,22);var inst_77568 = cljs.core.async.muxch_STAR_.call(null,inst_77561);var state_77582__$1 = state_77582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77582__$1,25,inst_77568,inst_77511);
} else
{if((state_val_77583 === 25))
{var inst_77570 = (state_77582[2]);var state_77582__$1 = state_77582;var statearr_77622_77657 = state_77582__$1;(statearr_77622_77657[2] = inst_77570);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77582__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_77626 = (new Array(19));(statearr_77626[0] = state_machine__10214__auto__);
(statearr_77626[1] = 1);
return statearr_77626;
});
var state_machine__10214__auto____1 = (function (state_77582){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_77582);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e77627){if((e77627 instanceof Object))
{var ex__10217__auto__ = e77627;var statearr_77628_77658 = state_77582;(statearr_77628_77658[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77659 = state_77582;
state_77582 = G__77659;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_77582){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_77582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_77629 = f__10284__auto__.call(null);(statearr_77629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___77630);
return statearr_77629;
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
,cljs.core.range.call(null,cnt));var c__10283__auto___77796 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_77766){var state_val_77767 = (state_77766[1]);if((state_val_77767 === 1))
{var state_77766__$1 = state_77766;var statearr_77768_77797 = state_77766__$1;(statearr_77768_77797[2] = null);
(statearr_77768_77797[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 2))
{var inst_77729 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_77730 = 0;var state_77766__$1 = (function (){var statearr_77769 = state_77766;(statearr_77769[7] = inst_77729);
(statearr_77769[8] = inst_77730);
return statearr_77769;
})();var statearr_77770_77798 = state_77766__$1;(statearr_77770_77798[2] = null);
(statearr_77770_77798[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 3))
{var inst_77764 = (state_77766[2]);var state_77766__$1 = state_77766;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77766__$1,inst_77764);
} else
{if((state_val_77767 === 4))
{var inst_77730 = (state_77766[8]);var inst_77732 = (inst_77730 < cnt);var state_77766__$1 = state_77766;if(cljs.core.truth_(inst_77732))
{var statearr_77771_77799 = state_77766__$1;(statearr_77771_77799[1] = 6);
} else
{var statearr_77772_77800 = state_77766__$1;(statearr_77772_77800[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 5))
{var inst_77750 = (state_77766[2]);var state_77766__$1 = (function (){var statearr_77773 = state_77766;(statearr_77773[9] = inst_77750);
return statearr_77773;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77766__$1,12,dchan);
} else
{if((state_val_77767 === 6))
{var state_77766__$1 = state_77766;var statearr_77774_77801 = state_77766__$1;(statearr_77774_77801[2] = null);
(statearr_77774_77801[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 7))
{var state_77766__$1 = state_77766;var statearr_77775_77802 = state_77766__$1;(statearr_77775_77802[2] = null);
(statearr_77775_77802[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 8))
{var inst_77748 = (state_77766[2]);var state_77766__$1 = state_77766;var statearr_77776_77803 = state_77766__$1;(statearr_77776_77803[2] = inst_77748);
(statearr_77776_77803[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 9))
{var inst_77730 = (state_77766[8]);var inst_77743 = (state_77766[2]);var inst_77744 = (inst_77730 + 1);var inst_77730__$1 = inst_77744;var state_77766__$1 = (function (){var statearr_77777 = state_77766;(statearr_77777[10] = inst_77743);
(statearr_77777[8] = inst_77730__$1);
return statearr_77777;
})();var statearr_77778_77804 = state_77766__$1;(statearr_77778_77804[2] = null);
(statearr_77778_77804[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 10))
{var inst_77734 = (state_77766[2]);var inst_77735 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_77766__$1 = (function (){var statearr_77779 = state_77766;(statearr_77779[11] = inst_77734);
return statearr_77779;
})();var statearr_77780_77805 = state_77766__$1;(statearr_77780_77805[2] = inst_77735);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77766__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 11))
{var inst_77730 = (state_77766[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77766,10,Object,null,9);var inst_77739 = chs__$1.call(null,inst_77730);var inst_77740 = done.call(null,inst_77730);var inst_77741 = cljs.core.async.take_BANG_.call(null,inst_77739,inst_77740);var state_77766__$1 = state_77766;var statearr_77781_77806 = state_77766__$1;(statearr_77781_77806[2] = inst_77741);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77766__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 12))
{var inst_77752 = (state_77766[12]);var inst_77752__$1 = (state_77766[2]);var inst_77753 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_77752__$1);var state_77766__$1 = (function (){var statearr_77782 = state_77766;(statearr_77782[12] = inst_77752__$1);
return statearr_77782;
})();if(cljs.core.truth_(inst_77753))
{var statearr_77783_77807 = state_77766__$1;(statearr_77783_77807[1] = 13);
} else
{var statearr_77784_77808 = state_77766__$1;(statearr_77784_77808[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 13))
{var inst_77755 = cljs.core.async.close_BANG_.call(null,out);var state_77766__$1 = state_77766;var statearr_77785_77809 = state_77766__$1;(statearr_77785_77809[2] = inst_77755);
(statearr_77785_77809[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 14))
{var inst_77752 = (state_77766[12]);var inst_77757 = cljs.core.apply.call(null,f,inst_77752);var state_77766__$1 = state_77766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77766__$1,16,out,inst_77757);
} else
{if((state_val_77767 === 15))
{var inst_77762 = (state_77766[2]);var state_77766__$1 = state_77766;var statearr_77786_77810 = state_77766__$1;(statearr_77786_77810[2] = inst_77762);
(statearr_77786_77810[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77767 === 16))
{var inst_77759 = (state_77766[2]);var state_77766__$1 = (function (){var statearr_77787 = state_77766;(statearr_77787[13] = inst_77759);
return statearr_77787;
})();var statearr_77788_77811 = state_77766__$1;(statearr_77788_77811[2] = null);
(statearr_77788_77811[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_77792 = (new Array(14));(statearr_77792[0] = state_machine__10214__auto__);
(statearr_77792[1] = 1);
return statearr_77792;
});
var state_machine__10214__auto____1 = (function (state_77766){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_77766);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e77793){if((e77793 instanceof Object))
{var ex__10217__auto__ = e77793;var statearr_77794_77812 = state_77766;(statearr_77794_77812[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77766);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77813 = state_77766;
state_77766 = G__77813;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_77766){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_77766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_77795 = f__10284__auto__.call(null);(statearr_77795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___77796);
return statearr_77795;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___77921 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_77897){var state_val_77898 = (state_77897[1]);if((state_val_77898 === 1))
{var inst_77868 = cljs.core.vec.call(null,chs);var inst_77869 = inst_77868;var state_77897__$1 = (function (){var statearr_77899 = state_77897;(statearr_77899[7] = inst_77869);
return statearr_77899;
})();var statearr_77900_77922 = state_77897__$1;(statearr_77900_77922[2] = null);
(statearr_77900_77922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77898 === 2))
{var inst_77869 = (state_77897[7]);var inst_77871 = cljs.core.count.call(null,inst_77869);var inst_77872 = (inst_77871 > 0);var state_77897__$1 = state_77897;if(cljs.core.truth_(inst_77872))
{var statearr_77901_77923 = state_77897__$1;(statearr_77901_77923[1] = 4);
} else
{var statearr_77902_77924 = state_77897__$1;(statearr_77902_77924[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77898 === 3))
{var inst_77895 = (state_77897[2]);var state_77897__$1 = state_77897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77897__$1,inst_77895);
} else
{if((state_val_77898 === 4))
{var inst_77869 = (state_77897[7]);var state_77897__$1 = state_77897;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_77897__$1,7,inst_77869);
} else
{if((state_val_77898 === 5))
{var inst_77891 = cljs.core.async.close_BANG_.call(null,out);var state_77897__$1 = state_77897;var statearr_77903_77925 = state_77897__$1;(statearr_77903_77925[2] = inst_77891);
(statearr_77903_77925[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77898 === 6))
{var inst_77893 = (state_77897[2]);var state_77897__$1 = state_77897;var statearr_77904_77926 = state_77897__$1;(statearr_77904_77926[2] = inst_77893);
(statearr_77904_77926[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77898 === 7))
{var inst_77876 = (state_77897[8]);var inst_77877 = (state_77897[9]);var inst_77876__$1 = (state_77897[2]);var inst_77877__$1 = cljs.core.nth.call(null,inst_77876__$1,0,null);var inst_77878 = cljs.core.nth.call(null,inst_77876__$1,1,null);var inst_77879 = (inst_77877__$1 == null);var state_77897__$1 = (function (){var statearr_77905 = state_77897;(statearr_77905[8] = inst_77876__$1);
(statearr_77905[9] = inst_77877__$1);
(statearr_77905[10] = inst_77878);
return statearr_77905;
})();if(cljs.core.truth_(inst_77879))
{var statearr_77906_77927 = state_77897__$1;(statearr_77906_77927[1] = 8);
} else
{var statearr_77907_77928 = state_77897__$1;(statearr_77907_77928[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77898 === 8))
{var inst_77876 = (state_77897[8]);var inst_77877 = (state_77897[9]);var inst_77869 = (state_77897[7]);var inst_77878 = (state_77897[10]);var inst_77881 = (function (){var c = inst_77878;var v = inst_77877;var vec__77874 = inst_77876;var cs = inst_77869;return ((function (c,v,vec__77874,cs,inst_77876,inst_77877,inst_77869,inst_77878,state_val_77898){
return (function (p1__77814_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__77814_SHARP_);
});
;})(c,v,vec__77874,cs,inst_77876,inst_77877,inst_77869,inst_77878,state_val_77898))
})();var inst_77882 = cljs.core.filterv.call(null,inst_77881,inst_77869);var inst_77869__$1 = inst_77882;var state_77897__$1 = (function (){var statearr_77908 = state_77897;(statearr_77908[7] = inst_77869__$1);
return statearr_77908;
})();var statearr_77909_77929 = state_77897__$1;(statearr_77909_77929[2] = null);
(statearr_77909_77929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77898 === 9))
{var inst_77877 = (state_77897[9]);var state_77897__$1 = state_77897;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77897__$1,11,out,inst_77877);
} else
{if((state_val_77898 === 10))
{var inst_77889 = (state_77897[2]);var state_77897__$1 = state_77897;var statearr_77911_77930 = state_77897__$1;(statearr_77911_77930[2] = inst_77889);
(statearr_77911_77930[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_77898 === 11))
{var inst_77869 = (state_77897[7]);var inst_77886 = (state_77897[2]);var tmp77910 = inst_77869;var inst_77869__$1 = tmp77910;var state_77897__$1 = (function (){var statearr_77912 = state_77897;(statearr_77912[7] = inst_77869__$1);
(statearr_77912[11] = inst_77886);
return statearr_77912;
})();var statearr_77913_77931 = state_77897__$1;(statearr_77913_77931[2] = null);
(statearr_77913_77931[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_77917 = (new Array(12));(statearr_77917[0] = state_machine__10214__auto__);
(statearr_77917[1] = 1);
return statearr_77917;
});
var state_machine__10214__auto____1 = (function (state_77897){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_77897);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e77918){if((e77918 instanceof Object))
{var ex__10217__auto__ = e77918;var statearr_77919_77932 = state_77897;(statearr_77919_77932[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77897);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__77933 = state_77897;
state_77897 = G__77933;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_77897){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_77897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_77920 = f__10284__auto__.call(null);(statearr_77920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___77921);
return statearr_77920;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___78026 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_78003){var state_val_78004 = (state_78003[1]);if((state_val_78004 === 1))
{var inst_77980 = 0;var state_78003__$1 = (function (){var statearr_78005 = state_78003;(statearr_78005[7] = inst_77980);
return statearr_78005;
})();var statearr_78006_78027 = state_78003__$1;(statearr_78006_78027[2] = null);
(statearr_78006_78027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78004 === 2))
{var inst_77980 = (state_78003[7]);var inst_77982 = (inst_77980 < n);var state_78003__$1 = state_78003;if(cljs.core.truth_(inst_77982))
{var statearr_78007_78028 = state_78003__$1;(statearr_78007_78028[1] = 4);
} else
{var statearr_78008_78029 = state_78003__$1;(statearr_78008_78029[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78004 === 3))
{var inst_78000 = (state_78003[2]);var inst_78001 = cljs.core.async.close_BANG_.call(null,out);var state_78003__$1 = (function (){var statearr_78009 = state_78003;(statearr_78009[8] = inst_78000);
return statearr_78009;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78003__$1,inst_78001);
} else
{if((state_val_78004 === 4))
{var state_78003__$1 = state_78003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78003__$1,7,ch);
} else
{if((state_val_78004 === 5))
{var state_78003__$1 = state_78003;var statearr_78010_78030 = state_78003__$1;(statearr_78010_78030[2] = null);
(statearr_78010_78030[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78004 === 6))
{var inst_77998 = (state_78003[2]);var state_78003__$1 = state_78003;var statearr_78011_78031 = state_78003__$1;(statearr_78011_78031[2] = inst_77998);
(statearr_78011_78031[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78004 === 7))
{var inst_77985 = (state_78003[9]);var inst_77985__$1 = (state_78003[2]);var inst_77986 = (inst_77985__$1 == null);var inst_77987 = cljs.core.not.call(null,inst_77986);var state_78003__$1 = (function (){var statearr_78012 = state_78003;(statearr_78012[9] = inst_77985__$1);
return statearr_78012;
})();if(inst_77987)
{var statearr_78013_78032 = state_78003__$1;(statearr_78013_78032[1] = 8);
} else
{var statearr_78014_78033 = state_78003__$1;(statearr_78014_78033[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78004 === 8))
{var inst_77985 = (state_78003[9]);var state_78003__$1 = state_78003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78003__$1,11,out,inst_77985);
} else
{if((state_val_78004 === 9))
{var state_78003__$1 = state_78003;var statearr_78015_78034 = state_78003__$1;(statearr_78015_78034[2] = null);
(statearr_78015_78034[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78004 === 10))
{var inst_77995 = (state_78003[2]);var state_78003__$1 = state_78003;var statearr_78016_78035 = state_78003__$1;(statearr_78016_78035[2] = inst_77995);
(statearr_78016_78035[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78004 === 11))
{var inst_77980 = (state_78003[7]);var inst_77990 = (state_78003[2]);var inst_77991 = (inst_77980 + 1);var inst_77980__$1 = inst_77991;var state_78003__$1 = (function (){var statearr_78017 = state_78003;(statearr_78017[10] = inst_77990);
(statearr_78017[7] = inst_77980__$1);
return statearr_78017;
})();var statearr_78018_78036 = state_78003__$1;(statearr_78018_78036[2] = null);
(statearr_78018_78036[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_78022 = (new Array(11));(statearr_78022[0] = state_machine__10214__auto__);
(statearr_78022[1] = 1);
return statearr_78022;
});
var state_machine__10214__auto____1 = (function (state_78003){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_78003);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e78023){if((e78023 instanceof Object))
{var ex__10217__auto__ = e78023;var statearr_78024_78037 = state_78003;(statearr_78024_78037[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78003);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78038 = state_78003;
state_78003 = G__78038;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_78003){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_78003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_78025 = f__10284__auto__.call(null);(statearr_78025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___78026);
return statearr_78025;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___78135 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_78110){var state_val_78111 = (state_78110[1]);if((state_val_78111 === 1))
{var inst_78087 = null;var state_78110__$1 = (function (){var statearr_78112 = state_78110;(statearr_78112[7] = inst_78087);
return statearr_78112;
})();var statearr_78113_78136 = state_78110__$1;(statearr_78113_78136[2] = null);
(statearr_78113_78136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78111 === 2))
{var state_78110__$1 = state_78110;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78110__$1,4,ch);
} else
{if((state_val_78111 === 3))
{var inst_78107 = (state_78110[2]);var inst_78108 = cljs.core.async.close_BANG_.call(null,out);var state_78110__$1 = (function (){var statearr_78114 = state_78110;(statearr_78114[8] = inst_78107);
return statearr_78114;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78110__$1,inst_78108);
} else
{if((state_val_78111 === 4))
{var inst_78090 = (state_78110[9]);var inst_78090__$1 = (state_78110[2]);var inst_78091 = (inst_78090__$1 == null);var inst_78092 = cljs.core.not.call(null,inst_78091);var state_78110__$1 = (function (){var statearr_78115 = state_78110;(statearr_78115[9] = inst_78090__$1);
return statearr_78115;
})();if(inst_78092)
{var statearr_78116_78137 = state_78110__$1;(statearr_78116_78137[1] = 5);
} else
{var statearr_78117_78138 = state_78110__$1;(statearr_78117_78138[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78111 === 5))
{var inst_78087 = (state_78110[7]);var inst_78090 = (state_78110[9]);var inst_78094 = cljs.core._EQ_.call(null,inst_78090,inst_78087);var state_78110__$1 = state_78110;if(inst_78094)
{var statearr_78118_78139 = state_78110__$1;(statearr_78118_78139[1] = 8);
} else
{var statearr_78119_78140 = state_78110__$1;(statearr_78119_78140[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78111 === 6))
{var state_78110__$1 = state_78110;var statearr_78121_78141 = state_78110__$1;(statearr_78121_78141[2] = null);
(statearr_78121_78141[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78111 === 7))
{var inst_78105 = (state_78110[2]);var state_78110__$1 = state_78110;var statearr_78122_78142 = state_78110__$1;(statearr_78122_78142[2] = inst_78105);
(statearr_78122_78142[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78111 === 8))
{var inst_78087 = (state_78110[7]);var tmp78120 = inst_78087;var inst_78087__$1 = tmp78120;var state_78110__$1 = (function (){var statearr_78123 = state_78110;(statearr_78123[7] = inst_78087__$1);
return statearr_78123;
})();var statearr_78124_78143 = state_78110__$1;(statearr_78124_78143[2] = null);
(statearr_78124_78143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78111 === 9))
{var inst_78090 = (state_78110[9]);var state_78110__$1 = state_78110;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78110__$1,11,out,inst_78090);
} else
{if((state_val_78111 === 10))
{var inst_78102 = (state_78110[2]);var state_78110__$1 = state_78110;var statearr_78125_78144 = state_78110__$1;(statearr_78125_78144[2] = inst_78102);
(statearr_78125_78144[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78111 === 11))
{var inst_78090 = (state_78110[9]);var inst_78099 = (state_78110[2]);var inst_78087 = inst_78090;var state_78110__$1 = (function (){var statearr_78126 = state_78110;(statearr_78126[7] = inst_78087);
(statearr_78126[10] = inst_78099);
return statearr_78126;
})();var statearr_78127_78145 = state_78110__$1;(statearr_78127_78145[2] = null);
(statearr_78127_78145[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_78131 = (new Array(11));(statearr_78131[0] = state_machine__10214__auto__);
(statearr_78131[1] = 1);
return statearr_78131;
});
var state_machine__10214__auto____1 = (function (state_78110){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_78110);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e78132){if((e78132 instanceof Object))
{var ex__10217__auto__ = e78132;var statearr_78133_78146 = state_78110;(statearr_78133_78146[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78110);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78132;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78147 = state_78110;
state_78110 = G__78147;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_78110){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_78110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_78134 = f__10284__auto__.call(null);(statearr_78134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___78135);
return statearr_78134;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___78282 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_78252){var state_val_78253 = (state_78252[1]);if((state_val_78253 === 1))
{var inst_78215 = (new Array(n));var inst_78216 = inst_78215;var inst_78217 = 0;var state_78252__$1 = (function (){var statearr_78254 = state_78252;(statearr_78254[7] = inst_78216);
(statearr_78254[8] = inst_78217);
return statearr_78254;
})();var statearr_78255_78283 = state_78252__$1;(statearr_78255_78283[2] = null);
(statearr_78255_78283[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78253 === 2))
{var state_78252__$1 = state_78252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78252__$1,4,ch);
} else
{if((state_val_78253 === 3))
{var inst_78250 = (state_78252[2]);var state_78252__$1 = state_78252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78252__$1,inst_78250);
} else
{if((state_val_78253 === 4))
{var inst_78220 = (state_78252[9]);var inst_78220__$1 = (state_78252[2]);var inst_78221 = (inst_78220__$1 == null);var inst_78222 = cljs.core.not.call(null,inst_78221);var state_78252__$1 = (function (){var statearr_78256 = state_78252;(statearr_78256[9] = inst_78220__$1);
return statearr_78256;
})();if(inst_78222)
{var statearr_78257_78284 = state_78252__$1;(statearr_78257_78284[1] = 5);
} else
{var statearr_78258_78285 = state_78252__$1;(statearr_78258_78285[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78253 === 5))
{var inst_78220 = (state_78252[9]);var inst_78225 = (state_78252[10]);var inst_78216 = (state_78252[7]);var inst_78217 = (state_78252[8]);var inst_78224 = (inst_78216[inst_78217] = inst_78220);var inst_78225__$1 = (inst_78217 + 1);var inst_78226 = (inst_78225__$1 < n);var state_78252__$1 = (function (){var statearr_78259 = state_78252;(statearr_78259[10] = inst_78225__$1);
(statearr_78259[11] = inst_78224);
return statearr_78259;
})();if(cljs.core.truth_(inst_78226))
{var statearr_78260_78286 = state_78252__$1;(statearr_78260_78286[1] = 8);
} else
{var statearr_78261_78287 = state_78252__$1;(statearr_78261_78287[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78253 === 6))
{var inst_78217 = (state_78252[8]);var inst_78238 = (inst_78217 > 0);var state_78252__$1 = state_78252;if(cljs.core.truth_(inst_78238))
{var statearr_78263_78288 = state_78252__$1;(statearr_78263_78288[1] = 12);
} else
{var statearr_78264_78289 = state_78252__$1;(statearr_78264_78289[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78253 === 7))
{var inst_78248 = (state_78252[2]);var state_78252__$1 = state_78252;var statearr_78265_78290 = state_78252__$1;(statearr_78265_78290[2] = inst_78248);
(statearr_78265_78290[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78253 === 8))
{var inst_78225 = (state_78252[10]);var inst_78216 = (state_78252[7]);var tmp78262 = inst_78216;var inst_78216__$1 = tmp78262;var inst_78217 = inst_78225;var state_78252__$1 = (function (){var statearr_78266 = state_78252;(statearr_78266[7] = inst_78216__$1);
(statearr_78266[8] = inst_78217);
return statearr_78266;
})();var statearr_78267_78291 = state_78252__$1;(statearr_78267_78291[2] = null);
(statearr_78267_78291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78253 === 9))
{var inst_78216 = (state_78252[7]);var inst_78230 = cljs.core.vec.call(null,inst_78216);var state_78252__$1 = state_78252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78252__$1,11,out,inst_78230);
} else
{if((state_val_78253 === 10))
{var inst_78236 = (state_78252[2]);var state_78252__$1 = state_78252;var statearr_78268_78292 = state_78252__$1;(statearr_78268_78292[2] = inst_78236);
(statearr_78268_78292[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78253 === 11))
{var inst_78232 = (state_78252[2]);var inst_78233 = (new Array(n));var inst_78216 = inst_78233;var inst_78217 = 0;var state_78252__$1 = (function (){var statearr_78269 = state_78252;(statearr_78269[12] = inst_78232);
(statearr_78269[7] = inst_78216);
(statearr_78269[8] = inst_78217);
return statearr_78269;
})();var statearr_78270_78293 = state_78252__$1;(statearr_78270_78293[2] = null);
(statearr_78270_78293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78253 === 12))
{var inst_78216 = (state_78252[7]);var inst_78240 = cljs.core.vec.call(null,inst_78216);var state_78252__$1 = state_78252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78252__$1,15,out,inst_78240);
} else
{if((state_val_78253 === 13))
{var state_78252__$1 = state_78252;var statearr_78271_78294 = state_78252__$1;(statearr_78271_78294[2] = null);
(statearr_78271_78294[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78253 === 14))
{var inst_78245 = (state_78252[2]);var inst_78246 = cljs.core.async.close_BANG_.call(null,out);var state_78252__$1 = (function (){var statearr_78272 = state_78252;(statearr_78272[13] = inst_78245);
return statearr_78272;
})();var statearr_78273_78295 = state_78252__$1;(statearr_78273_78295[2] = inst_78246);
(statearr_78273_78295[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78253 === 15))
{var inst_78242 = (state_78252[2]);var state_78252__$1 = state_78252;var statearr_78274_78296 = state_78252__$1;(statearr_78274_78296[2] = inst_78242);
(statearr_78274_78296[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_78278 = (new Array(14));(statearr_78278[0] = state_machine__10214__auto__);
(statearr_78278[1] = 1);
return statearr_78278;
});
var state_machine__10214__auto____1 = (function (state_78252){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_78252);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e78279){if((e78279 instanceof Object))
{var ex__10217__auto__ = e78279;var statearr_78280_78297 = state_78252;(statearr_78280_78297[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78252);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78298 = state_78252;
state_78252 = G__78298;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_78252){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_78252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_78281 = f__10284__auto__.call(null);(statearr_78281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___78282);
return statearr_78281;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___78441 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_78411){var state_val_78412 = (state_78411[1]);if((state_val_78412 === 1))
{var inst_78370 = (new Array(0));var inst_78371 = inst_78370;var inst_78372 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_78411__$1 = (function (){var statearr_78413 = state_78411;(statearr_78413[7] = inst_78372);
(statearr_78413[8] = inst_78371);
return statearr_78413;
})();var statearr_78414_78442 = state_78411__$1;(statearr_78414_78442[2] = null);
(statearr_78414_78442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78412 === 2))
{var state_78411__$1 = state_78411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78411__$1,4,ch);
} else
{if((state_val_78412 === 3))
{var inst_78409 = (state_78411[2]);var state_78411__$1 = state_78411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78411__$1,inst_78409);
} else
{if((state_val_78412 === 4))
{var inst_78375 = (state_78411[9]);var inst_78375__$1 = (state_78411[2]);var inst_78376 = (inst_78375__$1 == null);var inst_78377 = cljs.core.not.call(null,inst_78376);var state_78411__$1 = (function (){var statearr_78415 = state_78411;(statearr_78415[9] = inst_78375__$1);
return statearr_78415;
})();if(inst_78377)
{var statearr_78416_78443 = state_78411__$1;(statearr_78416_78443[1] = 5);
} else
{var statearr_78417_78444 = state_78411__$1;(statearr_78417_78444[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78412 === 5))
{var inst_78379 = (state_78411[10]);var inst_78375 = (state_78411[9]);var inst_78372 = (state_78411[7]);var inst_78379__$1 = f.call(null,inst_78375);var inst_78380 = cljs.core._EQ_.call(null,inst_78379__$1,inst_78372);var inst_78381 = cljs.core.keyword_identical_QMARK_.call(null,inst_78372,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_78382 = (inst_78380) || (inst_78381);var state_78411__$1 = (function (){var statearr_78418 = state_78411;(statearr_78418[10] = inst_78379__$1);
return statearr_78418;
})();if(cljs.core.truth_(inst_78382))
{var statearr_78419_78445 = state_78411__$1;(statearr_78419_78445[1] = 8);
} else
{var statearr_78420_78446 = state_78411__$1;(statearr_78420_78446[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78412 === 6))
{var inst_78371 = (state_78411[8]);var inst_78396 = inst_78371.length;var inst_78397 = (inst_78396 > 0);var state_78411__$1 = state_78411;if(cljs.core.truth_(inst_78397))
{var statearr_78422_78447 = state_78411__$1;(statearr_78422_78447[1] = 12);
} else
{var statearr_78423_78448 = state_78411__$1;(statearr_78423_78448[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78412 === 7))
{var inst_78407 = (state_78411[2]);var state_78411__$1 = state_78411;var statearr_78424_78449 = state_78411__$1;(statearr_78424_78449[2] = inst_78407);
(statearr_78424_78449[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78412 === 8))
{var inst_78379 = (state_78411[10]);var inst_78375 = (state_78411[9]);var inst_78371 = (state_78411[8]);var inst_78384 = inst_78371.push(inst_78375);var tmp78421 = inst_78371;var inst_78371__$1 = tmp78421;var inst_78372 = inst_78379;var state_78411__$1 = (function (){var statearr_78425 = state_78411;(statearr_78425[7] = inst_78372);
(statearr_78425[8] = inst_78371__$1);
(statearr_78425[11] = inst_78384);
return statearr_78425;
})();var statearr_78426_78450 = state_78411__$1;(statearr_78426_78450[2] = null);
(statearr_78426_78450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78412 === 9))
{var inst_78371 = (state_78411[8]);var inst_78387 = cljs.core.vec.call(null,inst_78371);var state_78411__$1 = state_78411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78411__$1,11,out,inst_78387);
} else
{if((state_val_78412 === 10))
{var inst_78394 = (state_78411[2]);var state_78411__$1 = state_78411;var statearr_78427_78451 = state_78411__$1;(statearr_78427_78451[2] = inst_78394);
(statearr_78427_78451[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78412 === 11))
{var inst_78379 = (state_78411[10]);var inst_78375 = (state_78411[9]);var inst_78389 = (state_78411[2]);var inst_78390 = (new Array(0));var inst_78391 = inst_78390.push(inst_78375);var inst_78371 = inst_78390;var inst_78372 = inst_78379;var state_78411__$1 = (function (){var statearr_78428 = state_78411;(statearr_78428[7] = inst_78372);
(statearr_78428[8] = inst_78371);
(statearr_78428[12] = inst_78391);
(statearr_78428[13] = inst_78389);
return statearr_78428;
})();var statearr_78429_78452 = state_78411__$1;(statearr_78429_78452[2] = null);
(statearr_78429_78452[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78412 === 12))
{var inst_78371 = (state_78411[8]);var inst_78399 = cljs.core.vec.call(null,inst_78371);var state_78411__$1 = state_78411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78411__$1,15,out,inst_78399);
} else
{if((state_val_78412 === 13))
{var state_78411__$1 = state_78411;var statearr_78430_78453 = state_78411__$1;(statearr_78430_78453[2] = null);
(statearr_78430_78453[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78412 === 14))
{var inst_78404 = (state_78411[2]);var inst_78405 = cljs.core.async.close_BANG_.call(null,out);var state_78411__$1 = (function (){var statearr_78431 = state_78411;(statearr_78431[14] = inst_78404);
return statearr_78431;
})();var statearr_78432_78454 = state_78411__$1;(statearr_78432_78454[2] = inst_78405);
(statearr_78432_78454[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_78412 === 15))
{var inst_78401 = (state_78411[2]);var state_78411__$1 = state_78411;var statearr_78433_78455 = state_78411__$1;(statearr_78433_78455[2] = inst_78401);
(statearr_78433_78455[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_78437 = (new Array(15));(statearr_78437[0] = state_machine__10214__auto__);
(statearr_78437[1] = 1);
return statearr_78437;
});
var state_machine__10214__auto____1 = (function (state_78411){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_78411);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e78438){if((e78438 instanceof Object))
{var ex__10217__auto__ = e78438;var statearr_78439_78456 = state_78411;(statearr_78439_78456[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78411);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e78438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__78457 = state_78411;
state_78411 = G__78457;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_78411){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_78411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_78440 = f__10284__auto__.call(null);(statearr_78440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___78441);
return statearr_78440;
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
