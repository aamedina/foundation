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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t628940 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t628940 = (function (f,fn_handler,meta628941){
this.f = f;
this.fn_handler = fn_handler;
this.meta628941 = meta628941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t628940.cljs$lang$type = true;
cljs.core.async.t628940.cljs$lang$ctorStr = "cljs.core.async/t628940";
cljs.core.async.t628940.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t628940");
});
cljs.core.async.t628940.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t628940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t628940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t628940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_628942){var self__ = this;
var _628942__$1 = this;return self__.meta628941;
});
cljs.core.async.t628940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_628942,meta628941__$1){var self__ = this;
var _628942__$1 = this;return (new cljs.core.async.t628940(self__.f,self__.fn_handler,meta628941__$1));
});
cljs.core.async.__GT_t628940 = (function __GT_t628940(f__$1,fn_handler__$1,meta628941){return (new cljs.core.async.t628940(f__$1,fn_handler__$1,meta628941));
});
}
return (new cljs.core.async.t628940(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__628944 = buff;if(G__628944)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__628944.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__628944.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__628944);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__628944);
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
{var val_628945 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_628945);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_628945);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___628946 = n;var x_628947 = 0;while(true){
if((x_628947 < n__8553__auto___628946))
{(a[x_628947] = 0);
{
var G__628948 = (x_628947 + 1);
x_628947 = G__628948;
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
var G__628949 = (i + 1);
i = G__628949;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t628953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t628953 = (function (flag,alt_flag,meta628954){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta628954 = meta628954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t628953.cljs$lang$type = true;
cljs.core.async.t628953.cljs$lang$ctorStr = "cljs.core.async/t628953";
cljs.core.async.t628953.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t628953");
});
cljs.core.async.t628953.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t628953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t628953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t628953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_628955){var self__ = this;
var _628955__$1 = this;return self__.meta628954;
});
cljs.core.async.t628953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_628955,meta628954__$1){var self__ = this;
var _628955__$1 = this;return (new cljs.core.async.t628953(self__.flag,self__.alt_flag,meta628954__$1));
});
cljs.core.async.__GT_t628953 = (function __GT_t628953(flag__$1,alt_flag__$1,meta628954){return (new cljs.core.async.t628953(flag__$1,alt_flag__$1,meta628954));
});
}
return (new cljs.core.async.t628953(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t628959 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t628959 = (function (cb,flag,alt_handler,meta628960){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta628960 = meta628960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t628959.cljs$lang$type = true;
cljs.core.async.t628959.cljs$lang$ctorStr = "cljs.core.async/t628959";
cljs.core.async.t628959.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t628959");
});
cljs.core.async.t628959.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t628959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t628959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t628959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_628961){var self__ = this;
var _628961__$1 = this;return self__.meta628960;
});
cljs.core.async.t628959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_628961,meta628960__$1){var self__ = this;
var _628961__$1 = this;return (new cljs.core.async.t628959(self__.cb,self__.flag,self__.alt_handler,meta628960__$1));
});
cljs.core.async.__GT_t628959 = (function __GT_t628959(cb__$1,flag__$1,alt_handler__$1,meta628960){return (new cljs.core.async.t628959(cb__$1,flag__$1,alt_handler__$1,meta628960));
});
}
return (new cljs.core.async.t628959(cb,flag,alt_handler,null));
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
return (function (p1__628962_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__628962_SHARP_,port], null));
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
var G__628963 = (i + 1);
i = G__628963;
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
var alts_BANG___delegate = function (ports,p__628964){var map__628966 = p__628964;var map__628966__$1 = ((cljs.core.seq_QMARK_.call(null,map__628966))?cljs.core.apply.call(null,cljs.core.hash_map,map__628966):map__628966);var opts = map__628966__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__628964 = null;if (arguments.length > 1) {
  p__628964 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__628964);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__628967){
var ports = cljs.core.first(arglist__628967);
var p__628964 = cljs.core.rest(arglist__628967);
return alts_BANG___delegate(ports,p__628964);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t628975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t628975 = (function (ch,f,map_LT_,meta628976){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta628976 = meta628976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t628975.cljs$lang$type = true;
cljs.core.async.t628975.cljs$lang$ctorStr = "cljs.core.async/t628975";
cljs.core.async.t628975.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t628975");
});
cljs.core.async.t628975.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t628975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t628975.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t628975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t628978 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t628978 = (function (fn1,_,meta628976,ch,f,map_LT_,meta628979){
this.fn1 = fn1;
this._ = _;
this.meta628976 = meta628976;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta628979 = meta628979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t628978.cljs$lang$type = true;
cljs.core.async.t628978.cljs$lang$ctorStr = "cljs.core.async/t628978";
cljs.core.async.t628978.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t628978");
});
cljs.core.async.t628978.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t628978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t628978.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t628978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__628968_SHARP_){return f1.call(null,(((p1__628968_SHARP_ == null))?null:self__.f.call(null,p1__628968_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t628978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_628980){var self__ = this;
var _628980__$1 = this;return self__.meta628979;
});
cljs.core.async.t628978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_628980,meta628979__$1){var self__ = this;
var _628980__$1 = this;return (new cljs.core.async.t628978(self__.fn1,self__._,self__.meta628976,self__.ch,self__.f,self__.map_LT_,meta628979__$1));
});
cljs.core.async.__GT_t628978 = (function __GT_t628978(fn1__$1,___$2,meta628976__$1,ch__$2,f__$2,map_LT___$2,meta628979){return (new cljs.core.async.t628978(fn1__$1,___$2,meta628976__$1,ch__$2,f__$2,map_LT___$2,meta628979));
});
}
return (new cljs.core.async.t628978(fn1,___$1,self__.meta628976,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t628975.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t628975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t628975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_628977){var self__ = this;
var _628977__$1 = this;return self__.meta628976;
});
cljs.core.async.t628975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_628977,meta628976__$1){var self__ = this;
var _628977__$1 = this;return (new cljs.core.async.t628975(self__.ch,self__.f,self__.map_LT_,meta628976__$1));
});
cljs.core.async.__GT_t628975 = (function __GT_t628975(ch__$1,f__$1,map_LT___$1,meta628976){return (new cljs.core.async.t628975(ch__$1,f__$1,map_LT___$1,meta628976));
});
}
return (new cljs.core.async.t628975(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t628984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t628984 = (function (ch,f,map_GT_,meta628985){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta628985 = meta628985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t628984.cljs$lang$type = true;
cljs.core.async.t628984.cljs$lang$ctorStr = "cljs.core.async/t628984";
cljs.core.async.t628984.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t628984");
});
cljs.core.async.t628984.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t628984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t628984.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t628984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t628984.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t628984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t628984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_628986){var self__ = this;
var _628986__$1 = this;return self__.meta628985;
});
cljs.core.async.t628984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_628986,meta628985__$1){var self__ = this;
var _628986__$1 = this;return (new cljs.core.async.t628984(self__.ch,self__.f,self__.map_GT_,meta628985__$1));
});
cljs.core.async.__GT_t628984 = (function __GT_t628984(ch__$1,f__$1,map_GT___$1,meta628985){return (new cljs.core.async.t628984(ch__$1,f__$1,map_GT___$1,meta628985));
});
}
return (new cljs.core.async.t628984(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t628990 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t628990 = (function (ch,p,filter_GT_,meta628991){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta628991 = meta628991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t628990.cljs$lang$type = true;
cljs.core.async.t628990.cljs$lang$ctorStr = "cljs.core.async/t628990";
cljs.core.async.t628990.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t628990");
});
cljs.core.async.t628990.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t628990.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t628990.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t628990.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t628990.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t628990.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t628990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_628992){var self__ = this;
var _628992__$1 = this;return self__.meta628991;
});
cljs.core.async.t628990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_628992,meta628991__$1){var self__ = this;
var _628992__$1 = this;return (new cljs.core.async.t628990(self__.ch,self__.p,self__.filter_GT_,meta628991__$1));
});
cljs.core.async.__GT_t628990 = (function __GT_t628990(ch__$1,p__$1,filter_GT___$1,meta628991){return (new cljs.core.async.t628990(ch__$1,p__$1,filter_GT___$1,meta628991));
});
}
return (new cljs.core.async.t628990(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___629075 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_629054){var state_val_629055 = (state_629054[1]);if((state_val_629055 === 1))
{var state_629054__$1 = state_629054;var statearr_629056_629076 = state_629054__$1;(statearr_629056_629076[2] = null);
(statearr_629056_629076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629055 === 2))
{var state_629054__$1 = state_629054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_629054__$1,4,ch);
} else
{if((state_val_629055 === 3))
{var inst_629052 = (state_629054[2]);var state_629054__$1 = state_629054;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_629054__$1,inst_629052);
} else
{if((state_val_629055 === 4))
{var inst_629036 = (state_629054[7]);var inst_629036__$1 = (state_629054[2]);var inst_629037 = (inst_629036__$1 == null);var state_629054__$1 = (function (){var statearr_629057 = state_629054;(statearr_629057[7] = inst_629036__$1);
return statearr_629057;
})();if(cljs.core.truth_(inst_629037))
{var statearr_629058_629077 = state_629054__$1;(statearr_629058_629077[1] = 5);
} else
{var statearr_629059_629078 = state_629054__$1;(statearr_629059_629078[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629055 === 5))
{var inst_629039 = cljs.core.async.close_BANG_.call(null,out);var state_629054__$1 = state_629054;var statearr_629060_629079 = state_629054__$1;(statearr_629060_629079[2] = inst_629039);
(statearr_629060_629079[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629055 === 6))
{var inst_629036 = (state_629054[7]);var inst_629041 = p.call(null,inst_629036);var state_629054__$1 = state_629054;if(cljs.core.truth_(inst_629041))
{var statearr_629061_629080 = state_629054__$1;(statearr_629061_629080[1] = 8);
} else
{var statearr_629062_629081 = state_629054__$1;(statearr_629062_629081[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629055 === 7))
{var inst_629050 = (state_629054[2]);var state_629054__$1 = state_629054;var statearr_629063_629082 = state_629054__$1;(statearr_629063_629082[2] = inst_629050);
(statearr_629063_629082[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629055 === 8))
{var inst_629036 = (state_629054[7]);var state_629054__$1 = state_629054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_629054__$1,11,out,inst_629036);
} else
{if((state_val_629055 === 9))
{var state_629054__$1 = state_629054;var statearr_629064_629083 = state_629054__$1;(statearr_629064_629083[2] = null);
(statearr_629064_629083[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629055 === 10))
{var inst_629047 = (state_629054[2]);var state_629054__$1 = (function (){var statearr_629065 = state_629054;(statearr_629065[8] = inst_629047);
return statearr_629065;
})();var statearr_629066_629084 = state_629054__$1;(statearr_629066_629084[2] = null);
(statearr_629066_629084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629055 === 11))
{var inst_629044 = (state_629054[2]);var state_629054__$1 = state_629054;var statearr_629067_629085 = state_629054__$1;(statearr_629067_629085[2] = inst_629044);
(statearr_629067_629085[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_629071 = (new Array(9));(statearr_629071[0] = state_machine__10214__auto__);
(statearr_629071[1] = 1);
return statearr_629071;
});
var state_machine__10214__auto____1 = (function (state_629054){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_629054);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e629072){if((e629072 instanceof Object))
{var ex__10217__auto__ = e629072;var statearr_629073_629086 = state_629054;(statearr_629073_629086[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_629054);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e629072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__629087 = state_629054;
state_629054 = G__629087;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_629054){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_629054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_629074 = f__10284__auto__.call(null);(statearr_629074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___629075);
return statearr_629074;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_629239){var state_val_629240 = (state_629239[1]);if((state_val_629240 === 1))
{var state_629239__$1 = state_629239;var statearr_629241_629278 = state_629239__$1;(statearr_629241_629278[2] = null);
(statearr_629241_629278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 2))
{var state_629239__$1 = state_629239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_629239__$1,4,in$);
} else
{if((state_val_629240 === 3))
{var inst_629237 = (state_629239[2]);var state_629239__$1 = state_629239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_629239__$1,inst_629237);
} else
{if((state_val_629240 === 4))
{var inst_629185 = (state_629239[7]);var inst_629185__$1 = (state_629239[2]);var inst_629186 = (inst_629185__$1 == null);var state_629239__$1 = (function (){var statearr_629242 = state_629239;(statearr_629242[7] = inst_629185__$1);
return statearr_629242;
})();if(cljs.core.truth_(inst_629186))
{var statearr_629243_629279 = state_629239__$1;(statearr_629243_629279[1] = 5);
} else
{var statearr_629244_629280 = state_629239__$1;(statearr_629244_629280[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 5))
{var inst_629188 = cljs.core.async.close_BANG_.call(null,out);var state_629239__$1 = state_629239;var statearr_629245_629281 = state_629239__$1;(statearr_629245_629281[2] = inst_629188);
(statearr_629245_629281[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 6))
{var inst_629185 = (state_629239[7]);var inst_629190 = f.call(null,inst_629185);var inst_629195 = cljs.core.seq.call(null,inst_629190);var inst_629196 = inst_629195;var inst_629197 = null;var inst_629198 = 0;var inst_629199 = 0;var state_629239__$1 = (function (){var statearr_629246 = state_629239;(statearr_629246[8] = inst_629197);
(statearr_629246[9] = inst_629198);
(statearr_629246[10] = inst_629199);
(statearr_629246[11] = inst_629196);
return statearr_629246;
})();var statearr_629247_629282 = state_629239__$1;(statearr_629247_629282[2] = null);
(statearr_629247_629282[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 7))
{var inst_629235 = (state_629239[2]);var state_629239__$1 = state_629239;var statearr_629248_629283 = state_629239__$1;(statearr_629248_629283[2] = inst_629235);
(statearr_629248_629283[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 8))
{var inst_629198 = (state_629239[9]);var inst_629199 = (state_629239[10]);var inst_629201 = (inst_629199 < inst_629198);var inst_629202 = inst_629201;var state_629239__$1 = state_629239;if(cljs.core.truth_(inst_629202))
{var statearr_629249_629284 = state_629239__$1;(statearr_629249_629284[1] = 10);
} else
{var statearr_629250_629285 = state_629239__$1;(statearr_629250_629285[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 9))
{var inst_629232 = (state_629239[2]);var state_629239__$1 = (function (){var statearr_629251 = state_629239;(statearr_629251[12] = inst_629232);
return statearr_629251;
})();var statearr_629252_629286 = state_629239__$1;(statearr_629252_629286[2] = null);
(statearr_629252_629286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 10))
{var inst_629197 = (state_629239[8]);var inst_629199 = (state_629239[10]);var inst_629204 = cljs.core._nth.call(null,inst_629197,inst_629199);var state_629239__$1 = state_629239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_629239__$1,13,out,inst_629204);
} else
{if((state_val_629240 === 11))
{var inst_629210 = (state_629239[13]);var inst_629196 = (state_629239[11]);var inst_629210__$1 = cljs.core.seq.call(null,inst_629196);var state_629239__$1 = (function (){var statearr_629256 = state_629239;(statearr_629256[13] = inst_629210__$1);
return statearr_629256;
})();if(inst_629210__$1)
{var statearr_629257_629287 = state_629239__$1;(statearr_629257_629287[1] = 14);
} else
{var statearr_629258_629288 = state_629239__$1;(statearr_629258_629288[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 12))
{var inst_629230 = (state_629239[2]);var state_629239__$1 = state_629239;var statearr_629259_629289 = state_629239__$1;(statearr_629259_629289[2] = inst_629230);
(statearr_629259_629289[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 13))
{var inst_629197 = (state_629239[8]);var inst_629198 = (state_629239[9]);var inst_629199 = (state_629239[10]);var inst_629196 = (state_629239[11]);var inst_629206 = (state_629239[2]);var inst_629207 = (inst_629199 + 1);var tmp629253 = inst_629197;var tmp629254 = inst_629198;var tmp629255 = inst_629196;var inst_629196__$1 = tmp629255;var inst_629197__$1 = tmp629253;var inst_629198__$1 = tmp629254;var inst_629199__$1 = inst_629207;var state_629239__$1 = (function (){var statearr_629260 = state_629239;(statearr_629260[8] = inst_629197__$1);
(statearr_629260[9] = inst_629198__$1);
(statearr_629260[10] = inst_629199__$1);
(statearr_629260[11] = inst_629196__$1);
(statearr_629260[14] = inst_629206);
return statearr_629260;
})();var statearr_629261_629290 = state_629239__$1;(statearr_629261_629290[2] = null);
(statearr_629261_629290[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 14))
{var inst_629210 = (state_629239[13]);var inst_629212 = cljs.core.chunked_seq_QMARK_.call(null,inst_629210);var state_629239__$1 = state_629239;if(inst_629212)
{var statearr_629262_629291 = state_629239__$1;(statearr_629262_629291[1] = 17);
} else
{var statearr_629263_629292 = state_629239__$1;(statearr_629263_629292[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 15))
{var state_629239__$1 = state_629239;var statearr_629264_629293 = state_629239__$1;(statearr_629264_629293[2] = null);
(statearr_629264_629293[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 16))
{var inst_629228 = (state_629239[2]);var state_629239__$1 = state_629239;var statearr_629265_629294 = state_629239__$1;(statearr_629265_629294[2] = inst_629228);
(statearr_629265_629294[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 17))
{var inst_629210 = (state_629239[13]);var inst_629214 = cljs.core.chunk_first.call(null,inst_629210);var inst_629215 = cljs.core.chunk_rest.call(null,inst_629210);var inst_629216 = cljs.core.count.call(null,inst_629214);var inst_629196 = inst_629215;var inst_629197 = inst_629214;var inst_629198 = inst_629216;var inst_629199 = 0;var state_629239__$1 = (function (){var statearr_629266 = state_629239;(statearr_629266[8] = inst_629197);
(statearr_629266[9] = inst_629198);
(statearr_629266[10] = inst_629199);
(statearr_629266[11] = inst_629196);
return statearr_629266;
})();var statearr_629267_629295 = state_629239__$1;(statearr_629267_629295[2] = null);
(statearr_629267_629295[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 18))
{var inst_629210 = (state_629239[13]);var inst_629219 = cljs.core.first.call(null,inst_629210);var state_629239__$1 = state_629239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_629239__$1,20,out,inst_629219);
} else
{if((state_val_629240 === 19))
{var inst_629225 = (state_629239[2]);var state_629239__$1 = state_629239;var statearr_629268_629296 = state_629239__$1;(statearr_629268_629296[2] = inst_629225);
(statearr_629268_629296[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629240 === 20))
{var inst_629210 = (state_629239[13]);var inst_629221 = (state_629239[2]);var inst_629222 = cljs.core.next.call(null,inst_629210);var inst_629196 = inst_629222;var inst_629197 = null;var inst_629198 = 0;var inst_629199 = 0;var state_629239__$1 = (function (){var statearr_629269 = state_629239;(statearr_629269[8] = inst_629197);
(statearr_629269[9] = inst_629198);
(statearr_629269[10] = inst_629199);
(statearr_629269[11] = inst_629196);
(statearr_629269[15] = inst_629221);
return statearr_629269;
})();var statearr_629270_629297 = state_629239__$1;(statearr_629270_629297[2] = null);
(statearr_629270_629297[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_629274 = (new Array(16));(statearr_629274[0] = state_machine__10214__auto__);
(statearr_629274[1] = 1);
return statearr_629274;
});
var state_machine__10214__auto____1 = (function (state_629239){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_629239);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e629275){if((e629275 instanceof Object))
{var ex__10217__auto__ = e629275;var statearr_629276_629298 = state_629239;(statearr_629276_629298[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_629239);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e629275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__629299 = state_629239;
state_629239 = G__629299;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_629239){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_629239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_629277 = f__10284__auto__.call(null);(statearr_629277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_629277;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___629380 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_629359){var state_val_629360 = (state_629359[1]);if((state_val_629360 === 1))
{var state_629359__$1 = state_629359;var statearr_629361_629381 = state_629359__$1;(statearr_629361_629381[2] = null);
(statearr_629361_629381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629360 === 2))
{var state_629359__$1 = state_629359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_629359__$1,4,from);
} else
{if((state_val_629360 === 3))
{var inst_629357 = (state_629359[2]);var state_629359__$1 = state_629359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_629359__$1,inst_629357);
} else
{if((state_val_629360 === 4))
{var inst_629342 = (state_629359[7]);var inst_629342__$1 = (state_629359[2]);var inst_629343 = (inst_629342__$1 == null);var state_629359__$1 = (function (){var statearr_629362 = state_629359;(statearr_629362[7] = inst_629342__$1);
return statearr_629362;
})();if(cljs.core.truth_(inst_629343))
{var statearr_629363_629382 = state_629359__$1;(statearr_629363_629382[1] = 5);
} else
{var statearr_629364_629383 = state_629359__$1;(statearr_629364_629383[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629360 === 5))
{var state_629359__$1 = state_629359;if(cljs.core.truth_(close_QMARK_))
{var statearr_629365_629384 = state_629359__$1;(statearr_629365_629384[1] = 8);
} else
{var statearr_629366_629385 = state_629359__$1;(statearr_629366_629385[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629360 === 6))
{var inst_629342 = (state_629359[7]);var state_629359__$1 = state_629359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_629359__$1,11,to,inst_629342);
} else
{if((state_val_629360 === 7))
{var inst_629355 = (state_629359[2]);var state_629359__$1 = state_629359;var statearr_629367_629386 = state_629359__$1;(statearr_629367_629386[2] = inst_629355);
(statearr_629367_629386[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629360 === 8))
{var inst_629346 = cljs.core.async.close_BANG_.call(null,to);var state_629359__$1 = state_629359;var statearr_629368_629387 = state_629359__$1;(statearr_629368_629387[2] = inst_629346);
(statearr_629368_629387[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629360 === 9))
{var state_629359__$1 = state_629359;var statearr_629369_629388 = state_629359__$1;(statearr_629369_629388[2] = null);
(statearr_629369_629388[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629360 === 10))
{var inst_629349 = (state_629359[2]);var state_629359__$1 = state_629359;var statearr_629370_629389 = state_629359__$1;(statearr_629370_629389[2] = inst_629349);
(statearr_629370_629389[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629360 === 11))
{var inst_629352 = (state_629359[2]);var state_629359__$1 = (function (){var statearr_629371 = state_629359;(statearr_629371[8] = inst_629352);
return statearr_629371;
})();var statearr_629372_629390 = state_629359__$1;(statearr_629372_629390[2] = null);
(statearr_629372_629390[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_629376 = (new Array(9));(statearr_629376[0] = state_machine__10214__auto__);
(statearr_629376[1] = 1);
return statearr_629376;
});
var state_machine__10214__auto____1 = (function (state_629359){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_629359);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e629377){if((e629377 instanceof Object))
{var ex__10217__auto__ = e629377;var statearr_629378_629391 = state_629359;(statearr_629378_629391[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_629359);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e629377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__629392 = state_629359;
state_629359 = G__629392;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_629359){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_629359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_629379 = f__10284__auto__.call(null);(statearr_629379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___629380);
return statearr_629379;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___629479 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_629457){var state_val_629458 = (state_629457[1]);if((state_val_629458 === 1))
{var state_629457__$1 = state_629457;var statearr_629459_629480 = state_629457__$1;(statearr_629459_629480[2] = null);
(statearr_629459_629480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629458 === 2))
{var state_629457__$1 = state_629457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_629457__$1,4,ch);
} else
{if((state_val_629458 === 3))
{var inst_629455 = (state_629457[2]);var state_629457__$1 = state_629457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_629457__$1,inst_629455);
} else
{if((state_val_629458 === 4))
{var inst_629438 = (state_629457[7]);var inst_629438__$1 = (state_629457[2]);var inst_629439 = (inst_629438__$1 == null);var state_629457__$1 = (function (){var statearr_629460 = state_629457;(statearr_629460[7] = inst_629438__$1);
return statearr_629460;
})();if(cljs.core.truth_(inst_629439))
{var statearr_629461_629481 = state_629457__$1;(statearr_629461_629481[1] = 5);
} else
{var statearr_629462_629482 = state_629457__$1;(statearr_629462_629482[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629458 === 5))
{var inst_629441 = cljs.core.async.close_BANG_.call(null,tc);var inst_629442 = cljs.core.async.close_BANG_.call(null,fc);var state_629457__$1 = (function (){var statearr_629463 = state_629457;(statearr_629463[8] = inst_629441);
return statearr_629463;
})();var statearr_629464_629483 = state_629457__$1;(statearr_629464_629483[2] = inst_629442);
(statearr_629464_629483[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629458 === 6))
{var inst_629438 = (state_629457[7]);var inst_629444 = p.call(null,inst_629438);var state_629457__$1 = state_629457;if(cljs.core.truth_(inst_629444))
{var statearr_629465_629484 = state_629457__$1;(statearr_629465_629484[1] = 9);
} else
{var statearr_629466_629485 = state_629457__$1;(statearr_629466_629485[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629458 === 7))
{var inst_629453 = (state_629457[2]);var state_629457__$1 = state_629457;var statearr_629467_629486 = state_629457__$1;(statearr_629467_629486[2] = inst_629453);
(statearr_629467_629486[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629458 === 8))
{var inst_629450 = (state_629457[2]);var state_629457__$1 = (function (){var statearr_629468 = state_629457;(statearr_629468[9] = inst_629450);
return statearr_629468;
})();var statearr_629469_629487 = state_629457__$1;(statearr_629469_629487[2] = null);
(statearr_629469_629487[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629458 === 9))
{var state_629457__$1 = state_629457;var statearr_629470_629488 = state_629457__$1;(statearr_629470_629488[2] = tc);
(statearr_629470_629488[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629458 === 10))
{var state_629457__$1 = state_629457;var statearr_629471_629489 = state_629457__$1;(statearr_629471_629489[2] = fc);
(statearr_629471_629489[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629458 === 11))
{var inst_629438 = (state_629457[7]);var inst_629448 = (state_629457[2]);var state_629457__$1 = state_629457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_629457__$1,8,inst_629448,inst_629438);
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
var state_machine__10214__auto____0 = (function (){var statearr_629475 = (new Array(10));(statearr_629475[0] = state_machine__10214__auto__);
(statearr_629475[1] = 1);
return statearr_629475;
});
var state_machine__10214__auto____1 = (function (state_629457){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_629457);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e629476){if((e629476 instanceof Object))
{var ex__10217__auto__ = e629476;var statearr_629477_629490 = state_629457;(statearr_629477_629490[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_629457);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e629476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__629491 = state_629457;
state_629457 = G__629491;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_629457){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_629457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_629478 = f__10284__auto__.call(null);(statearr_629478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___629479);
return statearr_629478;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_629538){var state_val_629539 = (state_629538[1]);if((state_val_629539 === 7))
{var inst_629534 = (state_629538[2]);var state_629538__$1 = state_629538;var statearr_629540_629556 = state_629538__$1;(statearr_629540_629556[2] = inst_629534);
(statearr_629540_629556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629539 === 6))
{var inst_629527 = (state_629538[7]);var inst_629524 = (state_629538[8]);var inst_629531 = f.call(null,inst_629524,inst_629527);var inst_629524__$1 = inst_629531;var state_629538__$1 = (function (){var statearr_629541 = state_629538;(statearr_629541[8] = inst_629524__$1);
return statearr_629541;
})();var statearr_629542_629557 = state_629538__$1;(statearr_629542_629557[2] = null);
(statearr_629542_629557[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629539 === 5))
{var inst_629524 = (state_629538[8]);var state_629538__$1 = state_629538;var statearr_629543_629558 = state_629538__$1;(statearr_629543_629558[2] = inst_629524);
(statearr_629543_629558[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629539 === 4))
{var inst_629527 = (state_629538[7]);var inst_629527__$1 = (state_629538[2]);var inst_629528 = (inst_629527__$1 == null);var state_629538__$1 = (function (){var statearr_629544 = state_629538;(statearr_629544[7] = inst_629527__$1);
return statearr_629544;
})();if(cljs.core.truth_(inst_629528))
{var statearr_629545_629559 = state_629538__$1;(statearr_629545_629559[1] = 5);
} else
{var statearr_629546_629560 = state_629538__$1;(statearr_629546_629560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629539 === 3))
{var inst_629536 = (state_629538[2]);var state_629538__$1 = state_629538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_629538__$1,inst_629536);
} else
{if((state_val_629539 === 2))
{var state_629538__$1 = state_629538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_629538__$1,4,ch);
} else
{if((state_val_629539 === 1))
{var inst_629524 = init;var state_629538__$1 = (function (){var statearr_629547 = state_629538;(statearr_629547[8] = inst_629524);
return statearr_629547;
})();var statearr_629548_629561 = state_629538__$1;(statearr_629548_629561[2] = null);
(statearr_629548_629561[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_629552 = (new Array(9));(statearr_629552[0] = state_machine__10214__auto__);
(statearr_629552[1] = 1);
return statearr_629552;
});
var state_machine__10214__auto____1 = (function (state_629538){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_629538);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e629553){if((e629553 instanceof Object))
{var ex__10217__auto__ = e629553;var statearr_629554_629562 = state_629538;(statearr_629554_629562[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_629538);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e629553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__629563 = state_629538;
state_629538 = G__629563;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_629538){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_629538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_629555 = f__10284__auto__.call(null);(statearr_629555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_629555;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_629625){var state_val_629626 = (state_629625[1]);if((state_val_629626 === 1))
{var inst_629605 = cljs.core.seq.call(null,coll);var inst_629606 = inst_629605;var state_629625__$1 = (function (){var statearr_629627 = state_629625;(statearr_629627[7] = inst_629606);
return statearr_629627;
})();var statearr_629628_629646 = state_629625__$1;(statearr_629628_629646[2] = null);
(statearr_629628_629646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629626 === 2))
{var inst_629606 = (state_629625[7]);var state_629625__$1 = state_629625;if(cljs.core.truth_(inst_629606))
{var statearr_629629_629647 = state_629625__$1;(statearr_629629_629647[1] = 4);
} else
{var statearr_629630_629648 = state_629625__$1;(statearr_629630_629648[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629626 === 3))
{var inst_629623 = (state_629625[2]);var state_629625__$1 = state_629625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_629625__$1,inst_629623);
} else
{if((state_val_629626 === 4))
{var inst_629606 = (state_629625[7]);var inst_629609 = cljs.core.first.call(null,inst_629606);var state_629625__$1 = state_629625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_629625__$1,7,ch,inst_629609);
} else
{if((state_val_629626 === 5))
{var state_629625__$1 = state_629625;if(cljs.core.truth_(close_QMARK_))
{var statearr_629631_629649 = state_629625__$1;(statearr_629631_629649[1] = 8);
} else
{var statearr_629632_629650 = state_629625__$1;(statearr_629632_629650[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629626 === 6))
{var inst_629621 = (state_629625[2]);var state_629625__$1 = state_629625;var statearr_629633_629651 = state_629625__$1;(statearr_629633_629651[2] = inst_629621);
(statearr_629633_629651[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629626 === 7))
{var inst_629606 = (state_629625[7]);var inst_629611 = (state_629625[2]);var inst_629612 = cljs.core.next.call(null,inst_629606);var inst_629606__$1 = inst_629612;var state_629625__$1 = (function (){var statearr_629634 = state_629625;(statearr_629634[7] = inst_629606__$1);
(statearr_629634[8] = inst_629611);
return statearr_629634;
})();var statearr_629635_629652 = state_629625__$1;(statearr_629635_629652[2] = null);
(statearr_629635_629652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629626 === 8))
{var inst_629616 = cljs.core.async.close_BANG_.call(null,ch);var state_629625__$1 = state_629625;var statearr_629636_629653 = state_629625__$1;(statearr_629636_629653[2] = inst_629616);
(statearr_629636_629653[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629626 === 9))
{var state_629625__$1 = state_629625;var statearr_629637_629654 = state_629625__$1;(statearr_629637_629654[2] = null);
(statearr_629637_629654[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_629626 === 10))
{var inst_629619 = (state_629625[2]);var state_629625__$1 = state_629625;var statearr_629638_629655 = state_629625__$1;(statearr_629638_629655[2] = inst_629619);
(statearr_629638_629655[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_629642 = (new Array(9));(statearr_629642[0] = state_machine__10214__auto__);
(statearr_629642[1] = 1);
return statearr_629642;
});
var state_machine__10214__auto____1 = (function (state_629625){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_629625);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e629643){if((e629643 instanceof Object))
{var ex__10217__auto__ = e629643;var statearr_629644_629656 = state_629625;(statearr_629644_629656[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_629625);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e629643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__629657 = state_629625;
state_629625 = G__629657;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_629625){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_629625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_629645 = f__10284__auto__.call(null);(statearr_629645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_629645;
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
cljs.core.async.Mux = (function (){var obj629659 = {};return obj629659;
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
cljs.core.async.Mult = (function (){var obj629661 = {};return obj629661;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t629876 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t629876 = (function (cs,ch,mult,meta629877){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta629877 = meta629877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t629876.cljs$lang$type = true;
cljs.core.async.t629876.cljs$lang$ctorStr = "cljs.core.async/t629876";
cljs.core.async.t629876.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t629876");
});})(cs))
;
cljs.core.async.t629876.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t629876.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t629876.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t629876.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t629876.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t629876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t629876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_629878){var self__ = this;
var _629878__$1 = this;return self__.meta629877;
});})(cs))
;
cljs.core.async.t629876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_629878,meta629877__$1){var self__ = this;
var _629878__$1 = this;return (new cljs.core.async.t629876(self__.cs,self__.ch,self__.mult,meta629877__$1));
});})(cs))
;
cljs.core.async.__GT_t629876 = ((function (cs){
return (function __GT_t629876(cs__$1,ch__$1,mult__$1,meta629877){return (new cljs.core.async.t629876(cs__$1,ch__$1,mult__$1,meta629877));
});})(cs))
;
}
return (new cljs.core.async.t629876(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___630090 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_630008){var state_val_630009 = (state_630008[1]);if((state_val_630009 === 32))
{var inst_629957 = (state_630008[7]);var inst_629881 = (state_630008[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_630008,31,Object,null,30);var inst_629964 = cljs.core.async.put_BANG_.call(null,inst_629957,inst_629881,done);var state_630008__$1 = state_630008;var statearr_630010_630091 = state_630008__$1;(statearr_630010_630091[2] = inst_629964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630008__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 1))
{var state_630008__$1 = state_630008;var statearr_630011_630092 = state_630008__$1;(statearr_630011_630092[2] = null);
(statearr_630011_630092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 33))
{var inst_629970 = (state_630008[9]);var inst_629972 = cljs.core.chunked_seq_QMARK_.call(null,inst_629970);var state_630008__$1 = state_630008;if(inst_629972)
{var statearr_630012_630093 = state_630008__$1;(statearr_630012_630093[1] = 36);
} else
{var statearr_630013_630094 = state_630008__$1;(statearr_630013_630094[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 2))
{var state_630008__$1 = state_630008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_630008__$1,4,ch);
} else
{if((state_val_630009 === 34))
{var state_630008__$1 = state_630008;var statearr_630014_630095 = state_630008__$1;(statearr_630014_630095[2] = null);
(statearr_630014_630095[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 3))
{var inst_630006 = (state_630008[2]);var state_630008__$1 = state_630008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_630008__$1,inst_630006);
} else
{if((state_val_630009 === 35))
{var inst_629995 = (state_630008[2]);var state_630008__$1 = state_630008;var statearr_630015_630096 = state_630008__$1;(statearr_630015_630096[2] = inst_629995);
(statearr_630015_630096[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 4))
{var inst_629881 = (state_630008[8]);var inst_629881__$1 = (state_630008[2]);var inst_629882 = (inst_629881__$1 == null);var state_630008__$1 = (function (){var statearr_630016 = state_630008;(statearr_630016[8] = inst_629881__$1);
return statearr_630016;
})();if(cljs.core.truth_(inst_629882))
{var statearr_630017_630097 = state_630008__$1;(statearr_630017_630097[1] = 5);
} else
{var statearr_630018_630098 = state_630008__$1;(statearr_630018_630098[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 36))
{var inst_629970 = (state_630008[9]);var inst_629974 = cljs.core.chunk_first.call(null,inst_629970);var inst_629975 = cljs.core.chunk_rest.call(null,inst_629970);var inst_629976 = cljs.core.count.call(null,inst_629974);var inst_629949 = inst_629975;var inst_629950 = inst_629974;var inst_629951 = inst_629976;var inst_629952 = 0;var state_630008__$1 = (function (){var statearr_630019 = state_630008;(statearr_630019[10] = inst_629951);
(statearr_630019[11] = inst_629949);
(statearr_630019[12] = inst_629950);
(statearr_630019[13] = inst_629952);
return statearr_630019;
})();var statearr_630020_630099 = state_630008__$1;(statearr_630020_630099[2] = null);
(statearr_630020_630099[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 5))
{var inst_629888 = cljs.core.deref.call(null,cs);var inst_629889 = cljs.core.seq.call(null,inst_629888);var inst_629890 = inst_629889;var inst_629891 = null;var inst_629892 = 0;var inst_629893 = 0;var state_630008__$1 = (function (){var statearr_630021 = state_630008;(statearr_630021[14] = inst_629890);
(statearr_630021[15] = inst_629891);
(statearr_630021[16] = inst_629892);
(statearr_630021[17] = inst_629893);
return statearr_630021;
})();var statearr_630022_630100 = state_630008__$1;(statearr_630022_630100[2] = null);
(statearr_630022_630100[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 37))
{var inst_629970 = (state_630008[9]);var inst_629979 = cljs.core.first.call(null,inst_629970);var state_630008__$1 = (function (){var statearr_630023 = state_630008;(statearr_630023[18] = inst_629979);
return statearr_630023;
})();var statearr_630024_630101 = state_630008__$1;(statearr_630024_630101[2] = null);
(statearr_630024_630101[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 6))
{var inst_629940 = cljs.core.deref.call(null,cs);var inst_629941 = cljs.core.keys.call(null,inst_629940);var inst_629942 = cljs.core.count.call(null,inst_629941);var inst_629943 = cljs.core.reset_BANG_.call(null,dctr,inst_629942);var inst_629948 = cljs.core.seq.call(null,inst_629941);var inst_629949 = inst_629948;var inst_629950 = null;var inst_629951 = 0;var inst_629952 = 0;var state_630008__$1 = (function (){var statearr_630025 = state_630008;(statearr_630025[19] = inst_629943);
(statearr_630025[10] = inst_629951);
(statearr_630025[11] = inst_629949);
(statearr_630025[12] = inst_629950);
(statearr_630025[13] = inst_629952);
return statearr_630025;
})();var statearr_630026_630102 = state_630008__$1;(statearr_630026_630102[2] = null);
(statearr_630026_630102[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 38))
{var inst_629992 = (state_630008[2]);var state_630008__$1 = state_630008;var statearr_630027_630103 = state_630008__$1;(statearr_630027_630103[2] = inst_629992);
(statearr_630027_630103[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 7))
{var inst_630004 = (state_630008[2]);var state_630008__$1 = state_630008;var statearr_630028_630104 = state_630008__$1;(statearr_630028_630104[2] = inst_630004);
(statearr_630028_630104[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 39))
{var inst_629970 = (state_630008[9]);var inst_629988 = (state_630008[2]);var inst_629989 = cljs.core.next.call(null,inst_629970);var inst_629949 = inst_629989;var inst_629950 = null;var inst_629951 = 0;var inst_629952 = 0;var state_630008__$1 = (function (){var statearr_630029 = state_630008;(statearr_630029[20] = inst_629988);
(statearr_630029[10] = inst_629951);
(statearr_630029[11] = inst_629949);
(statearr_630029[12] = inst_629950);
(statearr_630029[13] = inst_629952);
return statearr_630029;
})();var statearr_630030_630105 = state_630008__$1;(statearr_630030_630105[2] = null);
(statearr_630030_630105[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 8))
{var inst_629892 = (state_630008[16]);var inst_629893 = (state_630008[17]);var inst_629895 = (inst_629893 < inst_629892);var inst_629896 = inst_629895;var state_630008__$1 = state_630008;if(cljs.core.truth_(inst_629896))
{var statearr_630031_630106 = state_630008__$1;(statearr_630031_630106[1] = 10);
} else
{var statearr_630032_630107 = state_630008__$1;(statearr_630032_630107[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 40))
{var inst_629979 = (state_630008[18]);var inst_629980 = (state_630008[2]);var inst_629981 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_629982 = cljs.core.async.untap_STAR_.call(null,m,inst_629979);var state_630008__$1 = (function (){var statearr_630033 = state_630008;(statearr_630033[21] = inst_629980);
(statearr_630033[22] = inst_629981);
return statearr_630033;
})();var statearr_630034_630108 = state_630008__$1;(statearr_630034_630108[2] = inst_629982);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630008__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 9))
{var inst_629938 = (state_630008[2]);var state_630008__$1 = state_630008;var statearr_630035_630109 = state_630008__$1;(statearr_630035_630109[2] = inst_629938);
(statearr_630035_630109[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 41))
{var inst_629881 = (state_630008[8]);var inst_629979 = (state_630008[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_630008,40,Object,null,39);var inst_629986 = cljs.core.async.put_BANG_.call(null,inst_629979,inst_629881,done);var state_630008__$1 = state_630008;var statearr_630036_630110 = state_630008__$1;(statearr_630036_630110[2] = inst_629986);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630008__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 10))
{var inst_629891 = (state_630008[15]);var inst_629893 = (state_630008[17]);var inst_629899 = cljs.core._nth.call(null,inst_629891,inst_629893);var inst_629900 = cljs.core.nth.call(null,inst_629899,0,null);var inst_629901 = cljs.core.nth.call(null,inst_629899,1,null);var state_630008__$1 = (function (){var statearr_630037 = state_630008;(statearr_630037[23] = inst_629900);
return statearr_630037;
})();if(cljs.core.truth_(inst_629901))
{var statearr_630038_630111 = state_630008__$1;(statearr_630038_630111[1] = 13);
} else
{var statearr_630039_630112 = state_630008__$1;(statearr_630039_630112[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 42))
{var inst_630001 = (state_630008[2]);var state_630008__$1 = (function (){var statearr_630040 = state_630008;(statearr_630040[24] = inst_630001);
return statearr_630040;
})();var statearr_630041_630113 = state_630008__$1;(statearr_630041_630113[2] = null);
(statearr_630041_630113[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 11))
{var inst_629890 = (state_630008[14]);var inst_629910 = (state_630008[25]);var inst_629910__$1 = cljs.core.seq.call(null,inst_629890);var state_630008__$1 = (function (){var statearr_630042 = state_630008;(statearr_630042[25] = inst_629910__$1);
return statearr_630042;
})();if(inst_629910__$1)
{var statearr_630043_630114 = state_630008__$1;(statearr_630043_630114[1] = 16);
} else
{var statearr_630044_630115 = state_630008__$1;(statearr_630044_630115[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 12))
{var inst_629936 = (state_630008[2]);var state_630008__$1 = state_630008;var statearr_630045_630116 = state_630008__$1;(statearr_630045_630116[2] = inst_629936);
(statearr_630045_630116[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 13))
{var inst_629900 = (state_630008[23]);var inst_629903 = cljs.core.async.close_BANG_.call(null,inst_629900);var state_630008__$1 = state_630008;var statearr_630049_630117 = state_630008__$1;(statearr_630049_630117[2] = inst_629903);
(statearr_630049_630117[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 14))
{var state_630008__$1 = state_630008;var statearr_630050_630118 = state_630008__$1;(statearr_630050_630118[2] = null);
(statearr_630050_630118[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 15))
{var inst_629890 = (state_630008[14]);var inst_629891 = (state_630008[15]);var inst_629892 = (state_630008[16]);var inst_629893 = (state_630008[17]);var inst_629906 = (state_630008[2]);var inst_629907 = (inst_629893 + 1);var tmp630046 = inst_629890;var tmp630047 = inst_629891;var tmp630048 = inst_629892;var inst_629890__$1 = tmp630046;var inst_629891__$1 = tmp630047;var inst_629892__$1 = tmp630048;var inst_629893__$1 = inst_629907;var state_630008__$1 = (function (){var statearr_630051 = state_630008;(statearr_630051[14] = inst_629890__$1);
(statearr_630051[15] = inst_629891__$1);
(statearr_630051[16] = inst_629892__$1);
(statearr_630051[17] = inst_629893__$1);
(statearr_630051[26] = inst_629906);
return statearr_630051;
})();var statearr_630052_630119 = state_630008__$1;(statearr_630052_630119[2] = null);
(statearr_630052_630119[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 16))
{var inst_629910 = (state_630008[25]);var inst_629912 = cljs.core.chunked_seq_QMARK_.call(null,inst_629910);var state_630008__$1 = state_630008;if(inst_629912)
{var statearr_630053_630120 = state_630008__$1;(statearr_630053_630120[1] = 19);
} else
{var statearr_630054_630121 = state_630008__$1;(statearr_630054_630121[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 17))
{var state_630008__$1 = state_630008;var statearr_630055_630122 = state_630008__$1;(statearr_630055_630122[2] = null);
(statearr_630055_630122[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 18))
{var inst_629934 = (state_630008[2]);var state_630008__$1 = state_630008;var statearr_630056_630123 = state_630008__$1;(statearr_630056_630123[2] = inst_629934);
(statearr_630056_630123[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 19))
{var inst_629910 = (state_630008[25]);var inst_629914 = cljs.core.chunk_first.call(null,inst_629910);var inst_629915 = cljs.core.chunk_rest.call(null,inst_629910);var inst_629916 = cljs.core.count.call(null,inst_629914);var inst_629890 = inst_629915;var inst_629891 = inst_629914;var inst_629892 = inst_629916;var inst_629893 = 0;var state_630008__$1 = (function (){var statearr_630057 = state_630008;(statearr_630057[14] = inst_629890);
(statearr_630057[15] = inst_629891);
(statearr_630057[16] = inst_629892);
(statearr_630057[17] = inst_629893);
return statearr_630057;
})();var statearr_630058_630124 = state_630008__$1;(statearr_630058_630124[2] = null);
(statearr_630058_630124[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 20))
{var inst_629910 = (state_630008[25]);var inst_629920 = cljs.core.first.call(null,inst_629910);var inst_629921 = cljs.core.nth.call(null,inst_629920,0,null);var inst_629922 = cljs.core.nth.call(null,inst_629920,1,null);var state_630008__$1 = (function (){var statearr_630059 = state_630008;(statearr_630059[27] = inst_629921);
return statearr_630059;
})();if(cljs.core.truth_(inst_629922))
{var statearr_630060_630125 = state_630008__$1;(statearr_630060_630125[1] = 22);
} else
{var statearr_630061_630126 = state_630008__$1;(statearr_630061_630126[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 21))
{var inst_629931 = (state_630008[2]);var state_630008__$1 = state_630008;var statearr_630062_630127 = state_630008__$1;(statearr_630062_630127[2] = inst_629931);
(statearr_630062_630127[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 22))
{var inst_629921 = (state_630008[27]);var inst_629924 = cljs.core.async.close_BANG_.call(null,inst_629921);var state_630008__$1 = state_630008;var statearr_630063_630128 = state_630008__$1;(statearr_630063_630128[2] = inst_629924);
(statearr_630063_630128[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 23))
{var state_630008__$1 = state_630008;var statearr_630064_630129 = state_630008__$1;(statearr_630064_630129[2] = null);
(statearr_630064_630129[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 24))
{var inst_629910 = (state_630008[25]);var inst_629927 = (state_630008[2]);var inst_629928 = cljs.core.next.call(null,inst_629910);var inst_629890 = inst_629928;var inst_629891 = null;var inst_629892 = 0;var inst_629893 = 0;var state_630008__$1 = (function (){var statearr_630065 = state_630008;(statearr_630065[14] = inst_629890);
(statearr_630065[15] = inst_629891);
(statearr_630065[16] = inst_629892);
(statearr_630065[17] = inst_629893);
(statearr_630065[28] = inst_629927);
return statearr_630065;
})();var statearr_630066_630130 = state_630008__$1;(statearr_630066_630130[2] = null);
(statearr_630066_630130[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 25))
{var inst_629951 = (state_630008[10]);var inst_629952 = (state_630008[13]);var inst_629954 = (inst_629952 < inst_629951);var inst_629955 = inst_629954;var state_630008__$1 = state_630008;if(cljs.core.truth_(inst_629955))
{var statearr_630067_630131 = state_630008__$1;(statearr_630067_630131[1] = 27);
} else
{var statearr_630068_630132 = state_630008__$1;(statearr_630068_630132[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 26))
{var inst_629999 = (state_630008[2]);var state_630008__$1 = (function (){var statearr_630069 = state_630008;(statearr_630069[29] = inst_629999);
return statearr_630069;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_630008__$1,42,dchan);
} else
{if((state_val_630009 === 27))
{var inst_629950 = (state_630008[12]);var inst_629952 = (state_630008[13]);var inst_629957 = cljs.core._nth.call(null,inst_629950,inst_629952);var state_630008__$1 = (function (){var statearr_630070 = state_630008;(statearr_630070[7] = inst_629957);
return statearr_630070;
})();var statearr_630071_630133 = state_630008__$1;(statearr_630071_630133[2] = null);
(statearr_630071_630133[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 28))
{var inst_629970 = (state_630008[9]);var inst_629949 = (state_630008[11]);var inst_629970__$1 = cljs.core.seq.call(null,inst_629949);var state_630008__$1 = (function (){var statearr_630075 = state_630008;(statearr_630075[9] = inst_629970__$1);
return statearr_630075;
})();if(inst_629970__$1)
{var statearr_630076_630134 = state_630008__$1;(statearr_630076_630134[1] = 33);
} else
{var statearr_630077_630135 = state_630008__$1;(statearr_630077_630135[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 29))
{var inst_629997 = (state_630008[2]);var state_630008__$1 = state_630008;var statearr_630078_630136 = state_630008__$1;(statearr_630078_630136[2] = inst_629997);
(statearr_630078_630136[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 30))
{var inst_629951 = (state_630008[10]);var inst_629949 = (state_630008[11]);var inst_629950 = (state_630008[12]);var inst_629952 = (state_630008[13]);var inst_629966 = (state_630008[2]);var inst_629967 = (inst_629952 + 1);var tmp630072 = inst_629951;var tmp630073 = inst_629949;var tmp630074 = inst_629950;var inst_629949__$1 = tmp630073;var inst_629950__$1 = tmp630074;var inst_629951__$1 = tmp630072;var inst_629952__$1 = inst_629967;var state_630008__$1 = (function (){var statearr_630079 = state_630008;(statearr_630079[10] = inst_629951__$1);
(statearr_630079[11] = inst_629949__$1);
(statearr_630079[12] = inst_629950__$1);
(statearr_630079[13] = inst_629952__$1);
(statearr_630079[30] = inst_629966);
return statearr_630079;
})();var statearr_630080_630137 = state_630008__$1;(statearr_630080_630137[2] = null);
(statearr_630080_630137[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630009 === 31))
{var inst_629957 = (state_630008[7]);var inst_629958 = (state_630008[2]);var inst_629959 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_629960 = cljs.core.async.untap_STAR_.call(null,m,inst_629957);var state_630008__$1 = (function (){var statearr_630081 = state_630008;(statearr_630081[31] = inst_629959);
(statearr_630081[32] = inst_629958);
return statearr_630081;
})();var statearr_630082_630138 = state_630008__$1;(statearr_630082_630138[2] = inst_629960);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630008__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_630086 = (new Array(33));(statearr_630086[0] = state_machine__10214__auto__);
(statearr_630086[1] = 1);
return statearr_630086;
});
var state_machine__10214__auto____1 = (function (state_630008){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_630008);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e630087){if((e630087 instanceof Object))
{var ex__10217__auto__ = e630087;var statearr_630088_630139 = state_630008;(statearr_630088_630139[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630008);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e630087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__630140 = state_630008;
state_630008 = G__630140;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_630008){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_630008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_630089 = f__10284__auto__.call(null);(statearr_630089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___630090);
return statearr_630089;
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
cljs.core.async.Mix = (function (){var obj630142 = {};return obj630142;
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
;var m = (function (){if(typeof cljs.core.async.t630252 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t630252 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta630253){
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
this.meta630253 = meta630253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t630252.cljs$lang$type = true;
cljs.core.async.t630252.cljs$lang$ctorStr = "cljs.core.async/t630252";
cljs.core.async.t630252.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t630252");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t630252.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t630252.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t630252.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t630252.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t630252.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t630252.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t630252.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t630252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t630252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_630254){var self__ = this;
var _630254__$1 = this;return self__.meta630253;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t630252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_630254,meta630253__$1){var self__ = this;
var _630254__$1 = this;return (new cljs.core.async.t630252(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta630253__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t630252 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t630252(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta630253){return (new cljs.core.async.t630252(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta630253));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t630252(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___630361 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_630319){var state_val_630320 = (state_630319[1]);if((state_val_630320 === 1))
{var inst_630258 = (state_630319[7]);var inst_630258__$1 = calc_state.call(null);var inst_630259 = cljs.core.seq_QMARK_.call(null,inst_630258__$1);var state_630319__$1 = (function (){var statearr_630321 = state_630319;(statearr_630321[7] = inst_630258__$1);
return statearr_630321;
})();if(inst_630259)
{var statearr_630322_630362 = state_630319__$1;(statearr_630322_630362[1] = 2);
} else
{var statearr_630323_630363 = state_630319__$1;(statearr_630323_630363[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 2))
{var inst_630258 = (state_630319[7]);var inst_630261 = cljs.core.apply.call(null,cljs.core.hash_map,inst_630258);var state_630319__$1 = state_630319;var statearr_630324_630364 = state_630319__$1;(statearr_630324_630364[2] = inst_630261);
(statearr_630324_630364[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 3))
{var inst_630258 = (state_630319[7]);var state_630319__$1 = state_630319;var statearr_630325_630365 = state_630319__$1;(statearr_630325_630365[2] = inst_630258);
(statearr_630325_630365[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 4))
{var inst_630258 = (state_630319[7]);var inst_630264 = (state_630319[2]);var inst_630265 = cljs.core.get.call(null,inst_630264,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_630266 = cljs.core.get.call(null,inst_630264,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_630267 = cljs.core.get.call(null,inst_630264,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_630268 = inst_630258;var state_630319__$1 = (function (){var statearr_630326 = state_630319;(statearr_630326[8] = inst_630268);
(statearr_630326[9] = inst_630267);
(statearr_630326[10] = inst_630266);
(statearr_630326[11] = inst_630265);
return statearr_630326;
})();var statearr_630327_630366 = state_630319__$1;(statearr_630327_630366[2] = null);
(statearr_630327_630366[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 5))
{var inst_630268 = (state_630319[8]);var inst_630271 = cljs.core.seq_QMARK_.call(null,inst_630268);var state_630319__$1 = state_630319;if(inst_630271)
{var statearr_630328_630367 = state_630319__$1;(statearr_630328_630367[1] = 7);
} else
{var statearr_630329_630368 = state_630319__$1;(statearr_630329_630368[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 6))
{var inst_630317 = (state_630319[2]);var state_630319__$1 = state_630319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_630319__$1,inst_630317);
} else
{if((state_val_630320 === 7))
{var inst_630268 = (state_630319[8]);var inst_630273 = cljs.core.apply.call(null,cljs.core.hash_map,inst_630268);var state_630319__$1 = state_630319;var statearr_630330_630369 = state_630319__$1;(statearr_630330_630369[2] = inst_630273);
(statearr_630330_630369[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 8))
{var inst_630268 = (state_630319[8]);var state_630319__$1 = state_630319;var statearr_630331_630370 = state_630319__$1;(statearr_630331_630370[2] = inst_630268);
(statearr_630331_630370[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 9))
{var inst_630276 = (state_630319[12]);var inst_630276__$1 = (state_630319[2]);var inst_630277 = cljs.core.get.call(null,inst_630276__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_630278 = cljs.core.get.call(null,inst_630276__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_630279 = cljs.core.get.call(null,inst_630276__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_630319__$1 = (function (){var statearr_630332 = state_630319;(statearr_630332[12] = inst_630276__$1);
(statearr_630332[13] = inst_630279);
(statearr_630332[14] = inst_630278);
return statearr_630332;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_630319__$1,10,inst_630277);
} else
{if((state_val_630320 === 10))
{var inst_630284 = (state_630319[15]);var inst_630283 = (state_630319[16]);var inst_630282 = (state_630319[2]);var inst_630283__$1 = cljs.core.nth.call(null,inst_630282,0,null);var inst_630284__$1 = cljs.core.nth.call(null,inst_630282,1,null);var inst_630285 = (inst_630283__$1 == null);var inst_630286 = cljs.core._EQ_.call(null,inst_630284__$1,change);var inst_630287 = (inst_630285) || (inst_630286);var state_630319__$1 = (function (){var statearr_630333 = state_630319;(statearr_630333[15] = inst_630284__$1);
(statearr_630333[16] = inst_630283__$1);
return statearr_630333;
})();if(cljs.core.truth_(inst_630287))
{var statearr_630334_630371 = state_630319__$1;(statearr_630334_630371[1] = 11);
} else
{var statearr_630335_630372 = state_630319__$1;(statearr_630335_630372[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 11))
{var inst_630283 = (state_630319[16]);var inst_630289 = (inst_630283 == null);var state_630319__$1 = state_630319;if(cljs.core.truth_(inst_630289))
{var statearr_630336_630373 = state_630319__$1;(statearr_630336_630373[1] = 14);
} else
{var statearr_630337_630374 = state_630319__$1;(statearr_630337_630374[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 12))
{var inst_630298 = (state_630319[17]);var inst_630284 = (state_630319[15]);var inst_630279 = (state_630319[13]);var inst_630298__$1 = inst_630279.call(null,inst_630284);var state_630319__$1 = (function (){var statearr_630338 = state_630319;(statearr_630338[17] = inst_630298__$1);
return statearr_630338;
})();if(cljs.core.truth_(inst_630298__$1))
{var statearr_630339_630375 = state_630319__$1;(statearr_630339_630375[1] = 17);
} else
{var statearr_630340_630376 = state_630319__$1;(statearr_630340_630376[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 13))
{var inst_630315 = (state_630319[2]);var state_630319__$1 = state_630319;var statearr_630341_630377 = state_630319__$1;(statearr_630341_630377[2] = inst_630315);
(statearr_630341_630377[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 14))
{var inst_630284 = (state_630319[15]);var inst_630291 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_630284);var state_630319__$1 = state_630319;var statearr_630342_630378 = state_630319__$1;(statearr_630342_630378[2] = inst_630291);
(statearr_630342_630378[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 15))
{var state_630319__$1 = state_630319;var statearr_630343_630379 = state_630319__$1;(statearr_630343_630379[2] = null);
(statearr_630343_630379[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 16))
{var inst_630294 = (state_630319[2]);var inst_630295 = calc_state.call(null);var inst_630268 = inst_630295;var state_630319__$1 = (function (){var statearr_630344 = state_630319;(statearr_630344[8] = inst_630268);
(statearr_630344[18] = inst_630294);
return statearr_630344;
})();var statearr_630345_630380 = state_630319__$1;(statearr_630345_630380[2] = null);
(statearr_630345_630380[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 17))
{var inst_630298 = (state_630319[17]);var state_630319__$1 = state_630319;var statearr_630346_630381 = state_630319__$1;(statearr_630346_630381[2] = inst_630298);
(statearr_630346_630381[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 18))
{var inst_630284 = (state_630319[15]);var inst_630279 = (state_630319[13]);var inst_630278 = (state_630319[14]);var inst_630301 = cljs.core.empty_QMARK_.call(null,inst_630279);var inst_630302 = inst_630278.call(null,inst_630284);var inst_630303 = cljs.core.not.call(null,inst_630302);var inst_630304 = (inst_630301) && (inst_630303);var state_630319__$1 = state_630319;var statearr_630347_630382 = state_630319__$1;(statearr_630347_630382[2] = inst_630304);
(statearr_630347_630382[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 19))
{var inst_630306 = (state_630319[2]);var state_630319__$1 = state_630319;if(cljs.core.truth_(inst_630306))
{var statearr_630348_630383 = state_630319__$1;(statearr_630348_630383[1] = 20);
} else
{var statearr_630349_630384 = state_630319__$1;(statearr_630349_630384[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 20))
{var inst_630283 = (state_630319[16]);var state_630319__$1 = state_630319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_630319__$1,23,out,inst_630283);
} else
{if((state_val_630320 === 21))
{var state_630319__$1 = state_630319;var statearr_630350_630385 = state_630319__$1;(statearr_630350_630385[2] = null);
(statearr_630350_630385[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 22))
{var inst_630276 = (state_630319[12]);var inst_630312 = (state_630319[2]);var inst_630268 = inst_630276;var state_630319__$1 = (function (){var statearr_630351 = state_630319;(statearr_630351[8] = inst_630268);
(statearr_630351[19] = inst_630312);
return statearr_630351;
})();var statearr_630352_630386 = state_630319__$1;(statearr_630352_630386[2] = null);
(statearr_630352_630386[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630320 === 23))
{var inst_630309 = (state_630319[2]);var state_630319__$1 = state_630319;var statearr_630353_630387 = state_630319__$1;(statearr_630353_630387[2] = inst_630309);
(statearr_630353_630387[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_630357 = (new Array(20));(statearr_630357[0] = state_machine__10214__auto__);
(statearr_630357[1] = 1);
return statearr_630357;
});
var state_machine__10214__auto____1 = (function (state_630319){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_630319);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e630358){if((e630358 instanceof Object))
{var ex__10217__auto__ = e630358;var statearr_630359_630388 = state_630319;(statearr_630359_630388[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e630358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__630389 = state_630319;
state_630319 = G__630389;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_630319){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_630319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_630360 = f__10284__auto__.call(null);(statearr_630360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___630361);
return statearr_630360;
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
cljs.core.async.Pub = (function (){var obj630391 = {};return obj630391;
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
return (function (p1__630392_SHARP_){if(cljs.core.truth_(p1__630392_SHARP_.call(null,topic)))
{return p1__630392_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__630392_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t630517 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t630517 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta630518){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta630518 = meta630518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t630517.cljs$lang$type = true;
cljs.core.async.t630517.cljs$lang$ctorStr = "cljs.core.async/t630517";
cljs.core.async.t630517.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t630517");
});})(mults,ensure_mult))
;
cljs.core.async.t630517.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t630517.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t630517.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t630517.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t630517.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t630517.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t630517.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t630517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_630519){var self__ = this;
var _630519__$1 = this;return self__.meta630518;
});})(mults,ensure_mult))
;
cljs.core.async.t630517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_630519,meta630518__$1){var self__ = this;
var _630519__$1 = this;return (new cljs.core.async.t630517(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta630518__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t630517 = ((function (mults,ensure_mult){
return (function __GT_t630517(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta630518){return (new cljs.core.async.t630517(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta630518));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t630517(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___630641 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_630593){var state_val_630594 = (state_630593[1]);if((state_val_630594 === 1))
{var state_630593__$1 = state_630593;var statearr_630595_630642 = state_630593__$1;(statearr_630595_630642[2] = null);
(statearr_630595_630642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 2))
{var state_630593__$1 = state_630593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_630593__$1,4,ch);
} else
{if((state_val_630594 === 3))
{var inst_630591 = (state_630593[2]);var state_630593__$1 = state_630593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_630593__$1,inst_630591);
} else
{if((state_val_630594 === 4))
{var inst_630522 = (state_630593[7]);var inst_630522__$1 = (state_630593[2]);var inst_630523 = (inst_630522__$1 == null);var state_630593__$1 = (function (){var statearr_630596 = state_630593;(statearr_630596[7] = inst_630522__$1);
return statearr_630596;
})();if(cljs.core.truth_(inst_630523))
{var statearr_630597_630643 = state_630593__$1;(statearr_630597_630643[1] = 5);
} else
{var statearr_630598_630644 = state_630593__$1;(statearr_630598_630644[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 5))
{var inst_630529 = cljs.core.deref.call(null,mults);var inst_630530 = cljs.core.vals.call(null,inst_630529);var inst_630531 = cljs.core.seq.call(null,inst_630530);var inst_630532 = inst_630531;var inst_630533 = null;var inst_630534 = 0;var inst_630535 = 0;var state_630593__$1 = (function (){var statearr_630599 = state_630593;(statearr_630599[8] = inst_630534);
(statearr_630599[9] = inst_630535);
(statearr_630599[10] = inst_630533);
(statearr_630599[11] = inst_630532);
return statearr_630599;
})();var statearr_630600_630645 = state_630593__$1;(statearr_630600_630645[2] = null);
(statearr_630600_630645[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 6))
{var inst_630572 = (state_630593[12]);var inst_630570 = (state_630593[13]);var inst_630522 = (state_630593[7]);var inst_630570__$1 = topic_fn.call(null,inst_630522);var inst_630571 = cljs.core.deref.call(null,mults);var inst_630572__$1 = cljs.core.get.call(null,inst_630571,inst_630570__$1);var state_630593__$1 = (function (){var statearr_630601 = state_630593;(statearr_630601[12] = inst_630572__$1);
(statearr_630601[13] = inst_630570__$1);
return statearr_630601;
})();if(cljs.core.truth_(inst_630572__$1))
{var statearr_630602_630646 = state_630593__$1;(statearr_630602_630646[1] = 19);
} else
{var statearr_630603_630647 = state_630593__$1;(statearr_630603_630647[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 7))
{var inst_630589 = (state_630593[2]);var state_630593__$1 = state_630593;var statearr_630604_630648 = state_630593__$1;(statearr_630604_630648[2] = inst_630589);
(statearr_630604_630648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 8))
{var inst_630534 = (state_630593[8]);var inst_630535 = (state_630593[9]);var inst_630537 = (inst_630535 < inst_630534);var inst_630538 = inst_630537;var state_630593__$1 = state_630593;if(cljs.core.truth_(inst_630538))
{var statearr_630608_630649 = state_630593__$1;(statearr_630608_630649[1] = 10);
} else
{var statearr_630609_630650 = state_630593__$1;(statearr_630609_630650[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 9))
{var inst_630568 = (state_630593[2]);var state_630593__$1 = state_630593;var statearr_630610_630651 = state_630593__$1;(statearr_630610_630651[2] = inst_630568);
(statearr_630610_630651[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 10))
{var inst_630534 = (state_630593[8]);var inst_630535 = (state_630593[9]);var inst_630533 = (state_630593[10]);var inst_630532 = (state_630593[11]);var inst_630540 = cljs.core._nth.call(null,inst_630533,inst_630535);var inst_630541 = cljs.core.async.muxch_STAR_.call(null,inst_630540);var inst_630542 = cljs.core.async.close_BANG_.call(null,inst_630541);var inst_630543 = (inst_630535 + 1);var tmp630605 = inst_630534;var tmp630606 = inst_630533;var tmp630607 = inst_630532;var inst_630532__$1 = tmp630607;var inst_630533__$1 = tmp630606;var inst_630534__$1 = tmp630605;var inst_630535__$1 = inst_630543;var state_630593__$1 = (function (){var statearr_630611 = state_630593;(statearr_630611[8] = inst_630534__$1);
(statearr_630611[9] = inst_630535__$1);
(statearr_630611[14] = inst_630542);
(statearr_630611[10] = inst_630533__$1);
(statearr_630611[11] = inst_630532__$1);
return statearr_630611;
})();var statearr_630612_630652 = state_630593__$1;(statearr_630612_630652[2] = null);
(statearr_630612_630652[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 11))
{var inst_630532 = (state_630593[11]);var inst_630546 = (state_630593[15]);var inst_630546__$1 = cljs.core.seq.call(null,inst_630532);var state_630593__$1 = (function (){var statearr_630613 = state_630593;(statearr_630613[15] = inst_630546__$1);
return statearr_630613;
})();if(inst_630546__$1)
{var statearr_630614_630653 = state_630593__$1;(statearr_630614_630653[1] = 13);
} else
{var statearr_630615_630654 = state_630593__$1;(statearr_630615_630654[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 12))
{var inst_630566 = (state_630593[2]);var state_630593__$1 = state_630593;var statearr_630616_630655 = state_630593__$1;(statearr_630616_630655[2] = inst_630566);
(statearr_630616_630655[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 13))
{var inst_630546 = (state_630593[15]);var inst_630548 = cljs.core.chunked_seq_QMARK_.call(null,inst_630546);var state_630593__$1 = state_630593;if(inst_630548)
{var statearr_630617_630656 = state_630593__$1;(statearr_630617_630656[1] = 16);
} else
{var statearr_630618_630657 = state_630593__$1;(statearr_630618_630657[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 14))
{var state_630593__$1 = state_630593;var statearr_630619_630658 = state_630593__$1;(statearr_630619_630658[2] = null);
(statearr_630619_630658[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 15))
{var inst_630564 = (state_630593[2]);var state_630593__$1 = state_630593;var statearr_630620_630659 = state_630593__$1;(statearr_630620_630659[2] = inst_630564);
(statearr_630620_630659[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 16))
{var inst_630546 = (state_630593[15]);var inst_630550 = cljs.core.chunk_first.call(null,inst_630546);var inst_630551 = cljs.core.chunk_rest.call(null,inst_630546);var inst_630552 = cljs.core.count.call(null,inst_630550);var inst_630532 = inst_630551;var inst_630533 = inst_630550;var inst_630534 = inst_630552;var inst_630535 = 0;var state_630593__$1 = (function (){var statearr_630621 = state_630593;(statearr_630621[8] = inst_630534);
(statearr_630621[9] = inst_630535);
(statearr_630621[10] = inst_630533);
(statearr_630621[11] = inst_630532);
return statearr_630621;
})();var statearr_630622_630660 = state_630593__$1;(statearr_630622_630660[2] = null);
(statearr_630622_630660[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 17))
{var inst_630546 = (state_630593[15]);var inst_630555 = cljs.core.first.call(null,inst_630546);var inst_630556 = cljs.core.async.muxch_STAR_.call(null,inst_630555);var inst_630557 = cljs.core.async.close_BANG_.call(null,inst_630556);var inst_630558 = cljs.core.next.call(null,inst_630546);var inst_630532 = inst_630558;var inst_630533 = null;var inst_630534 = 0;var inst_630535 = 0;var state_630593__$1 = (function (){var statearr_630623 = state_630593;(statearr_630623[8] = inst_630534);
(statearr_630623[9] = inst_630535);
(statearr_630623[10] = inst_630533);
(statearr_630623[11] = inst_630532);
(statearr_630623[16] = inst_630557);
return statearr_630623;
})();var statearr_630624_630661 = state_630593__$1;(statearr_630624_630661[2] = null);
(statearr_630624_630661[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 18))
{var inst_630561 = (state_630593[2]);var state_630593__$1 = state_630593;var statearr_630625_630662 = state_630593__$1;(statearr_630625_630662[2] = inst_630561);
(statearr_630625_630662[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 19))
{var state_630593__$1 = state_630593;var statearr_630626_630663 = state_630593__$1;(statearr_630626_630663[2] = null);
(statearr_630626_630663[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 20))
{var state_630593__$1 = state_630593;var statearr_630627_630664 = state_630593__$1;(statearr_630627_630664[2] = null);
(statearr_630627_630664[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 21))
{var inst_630586 = (state_630593[2]);var state_630593__$1 = (function (){var statearr_630628 = state_630593;(statearr_630628[17] = inst_630586);
return statearr_630628;
})();var statearr_630629_630665 = state_630593__$1;(statearr_630629_630665[2] = null);
(statearr_630629_630665[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 22))
{var inst_630583 = (state_630593[2]);var state_630593__$1 = state_630593;var statearr_630630_630666 = state_630593__$1;(statearr_630630_630666[2] = inst_630583);
(statearr_630630_630666[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 23))
{var inst_630570 = (state_630593[13]);var inst_630574 = (state_630593[2]);var inst_630575 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_630570);var state_630593__$1 = (function (){var statearr_630631 = state_630593;(statearr_630631[18] = inst_630574);
return statearr_630631;
})();var statearr_630632_630667 = state_630593__$1;(statearr_630632_630667[2] = inst_630575);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630593__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630594 === 24))
{var inst_630572 = (state_630593[12]);var inst_630522 = (state_630593[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_630593,23,Object,null,22);var inst_630579 = cljs.core.async.muxch_STAR_.call(null,inst_630572);var state_630593__$1 = state_630593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_630593__$1,25,inst_630579,inst_630522);
} else
{if((state_val_630594 === 25))
{var inst_630581 = (state_630593[2]);var state_630593__$1 = state_630593;var statearr_630633_630668 = state_630593__$1;(statearr_630633_630668[2] = inst_630581);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630593__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_630637 = (new Array(19));(statearr_630637[0] = state_machine__10214__auto__);
(statearr_630637[1] = 1);
return statearr_630637;
});
var state_machine__10214__auto____1 = (function (state_630593){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_630593);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e630638){if((e630638 instanceof Object))
{var ex__10217__auto__ = e630638;var statearr_630639_630669 = state_630593;(statearr_630639_630669[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e630638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__630670 = state_630593;
state_630593 = G__630670;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_630593){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_630593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_630640 = f__10284__auto__.call(null);(statearr_630640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___630641);
return statearr_630640;
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
,cljs.core.range.call(null,cnt));var c__10283__auto___630807 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_630777){var state_val_630778 = (state_630777[1]);if((state_val_630778 === 1))
{var state_630777__$1 = state_630777;var statearr_630779_630808 = state_630777__$1;(statearr_630779_630808[2] = null);
(statearr_630779_630808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 2))
{var inst_630740 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_630741 = 0;var state_630777__$1 = (function (){var statearr_630780 = state_630777;(statearr_630780[7] = inst_630741);
(statearr_630780[8] = inst_630740);
return statearr_630780;
})();var statearr_630781_630809 = state_630777__$1;(statearr_630781_630809[2] = null);
(statearr_630781_630809[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 3))
{var inst_630775 = (state_630777[2]);var state_630777__$1 = state_630777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_630777__$1,inst_630775);
} else
{if((state_val_630778 === 4))
{var inst_630741 = (state_630777[7]);var inst_630743 = (inst_630741 < cnt);var state_630777__$1 = state_630777;if(cljs.core.truth_(inst_630743))
{var statearr_630782_630810 = state_630777__$1;(statearr_630782_630810[1] = 6);
} else
{var statearr_630783_630811 = state_630777__$1;(statearr_630783_630811[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 5))
{var inst_630761 = (state_630777[2]);var state_630777__$1 = (function (){var statearr_630784 = state_630777;(statearr_630784[9] = inst_630761);
return statearr_630784;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_630777__$1,12,dchan);
} else
{if((state_val_630778 === 6))
{var state_630777__$1 = state_630777;var statearr_630785_630812 = state_630777__$1;(statearr_630785_630812[2] = null);
(statearr_630785_630812[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 7))
{var state_630777__$1 = state_630777;var statearr_630786_630813 = state_630777__$1;(statearr_630786_630813[2] = null);
(statearr_630786_630813[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 8))
{var inst_630759 = (state_630777[2]);var state_630777__$1 = state_630777;var statearr_630787_630814 = state_630777__$1;(statearr_630787_630814[2] = inst_630759);
(statearr_630787_630814[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 9))
{var inst_630741 = (state_630777[7]);var inst_630754 = (state_630777[2]);var inst_630755 = (inst_630741 + 1);var inst_630741__$1 = inst_630755;var state_630777__$1 = (function (){var statearr_630788 = state_630777;(statearr_630788[7] = inst_630741__$1);
(statearr_630788[10] = inst_630754);
return statearr_630788;
})();var statearr_630789_630815 = state_630777__$1;(statearr_630789_630815[2] = null);
(statearr_630789_630815[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 10))
{var inst_630745 = (state_630777[2]);var inst_630746 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_630777__$1 = (function (){var statearr_630790 = state_630777;(statearr_630790[11] = inst_630745);
return statearr_630790;
})();var statearr_630791_630816 = state_630777__$1;(statearr_630791_630816[2] = inst_630746);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630777__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 11))
{var inst_630741 = (state_630777[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_630777,10,Object,null,9);var inst_630750 = chs__$1.call(null,inst_630741);var inst_630751 = done.call(null,inst_630741);var inst_630752 = cljs.core.async.take_BANG_.call(null,inst_630750,inst_630751);var state_630777__$1 = state_630777;var statearr_630792_630817 = state_630777__$1;(statearr_630792_630817[2] = inst_630752);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630777__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 12))
{var inst_630763 = (state_630777[12]);var inst_630763__$1 = (state_630777[2]);var inst_630764 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_630763__$1);var state_630777__$1 = (function (){var statearr_630793 = state_630777;(statearr_630793[12] = inst_630763__$1);
return statearr_630793;
})();if(cljs.core.truth_(inst_630764))
{var statearr_630794_630818 = state_630777__$1;(statearr_630794_630818[1] = 13);
} else
{var statearr_630795_630819 = state_630777__$1;(statearr_630795_630819[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 13))
{var inst_630766 = cljs.core.async.close_BANG_.call(null,out);var state_630777__$1 = state_630777;var statearr_630796_630820 = state_630777__$1;(statearr_630796_630820[2] = inst_630766);
(statearr_630796_630820[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 14))
{var inst_630763 = (state_630777[12]);var inst_630768 = cljs.core.apply.call(null,f,inst_630763);var state_630777__$1 = state_630777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_630777__$1,16,out,inst_630768);
} else
{if((state_val_630778 === 15))
{var inst_630773 = (state_630777[2]);var state_630777__$1 = state_630777;var statearr_630797_630821 = state_630777__$1;(statearr_630797_630821[2] = inst_630773);
(statearr_630797_630821[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630778 === 16))
{var inst_630770 = (state_630777[2]);var state_630777__$1 = (function (){var statearr_630798 = state_630777;(statearr_630798[13] = inst_630770);
return statearr_630798;
})();var statearr_630799_630822 = state_630777__$1;(statearr_630799_630822[2] = null);
(statearr_630799_630822[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_630803 = (new Array(14));(statearr_630803[0] = state_machine__10214__auto__);
(statearr_630803[1] = 1);
return statearr_630803;
});
var state_machine__10214__auto____1 = (function (state_630777){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_630777);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e630804){if((e630804 instanceof Object))
{var ex__10217__auto__ = e630804;var statearr_630805_630823 = state_630777;(statearr_630805_630823[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e630804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__630824 = state_630777;
state_630777 = G__630824;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_630777){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_630777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_630806 = f__10284__auto__.call(null);(statearr_630806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___630807);
return statearr_630806;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___630932 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_630908){var state_val_630909 = (state_630908[1]);if((state_val_630909 === 1))
{var inst_630879 = cljs.core.vec.call(null,chs);var inst_630880 = inst_630879;var state_630908__$1 = (function (){var statearr_630910 = state_630908;(statearr_630910[7] = inst_630880);
return statearr_630910;
})();var statearr_630911_630933 = state_630908__$1;(statearr_630911_630933[2] = null);
(statearr_630911_630933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630909 === 2))
{var inst_630880 = (state_630908[7]);var inst_630882 = cljs.core.count.call(null,inst_630880);var inst_630883 = (inst_630882 > 0);var state_630908__$1 = state_630908;if(cljs.core.truth_(inst_630883))
{var statearr_630912_630934 = state_630908__$1;(statearr_630912_630934[1] = 4);
} else
{var statearr_630913_630935 = state_630908__$1;(statearr_630913_630935[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630909 === 3))
{var inst_630906 = (state_630908[2]);var state_630908__$1 = state_630908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_630908__$1,inst_630906);
} else
{if((state_val_630909 === 4))
{var inst_630880 = (state_630908[7]);var state_630908__$1 = state_630908;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_630908__$1,7,inst_630880);
} else
{if((state_val_630909 === 5))
{var inst_630902 = cljs.core.async.close_BANG_.call(null,out);var state_630908__$1 = state_630908;var statearr_630914_630936 = state_630908__$1;(statearr_630914_630936[2] = inst_630902);
(statearr_630914_630936[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630909 === 6))
{var inst_630904 = (state_630908[2]);var state_630908__$1 = state_630908;var statearr_630915_630937 = state_630908__$1;(statearr_630915_630937[2] = inst_630904);
(statearr_630915_630937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630909 === 7))
{var inst_630887 = (state_630908[8]);var inst_630888 = (state_630908[9]);var inst_630887__$1 = (state_630908[2]);var inst_630888__$1 = cljs.core.nth.call(null,inst_630887__$1,0,null);var inst_630889 = cljs.core.nth.call(null,inst_630887__$1,1,null);var inst_630890 = (inst_630888__$1 == null);var state_630908__$1 = (function (){var statearr_630916 = state_630908;(statearr_630916[8] = inst_630887__$1);
(statearr_630916[9] = inst_630888__$1);
(statearr_630916[10] = inst_630889);
return statearr_630916;
})();if(cljs.core.truth_(inst_630890))
{var statearr_630917_630938 = state_630908__$1;(statearr_630917_630938[1] = 8);
} else
{var statearr_630918_630939 = state_630908__$1;(statearr_630918_630939[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630909 === 8))
{var inst_630887 = (state_630908[8]);var inst_630888 = (state_630908[9]);var inst_630889 = (state_630908[10]);var inst_630880 = (state_630908[7]);var inst_630892 = (function (){var c = inst_630889;var v = inst_630888;var vec__630885 = inst_630887;var cs = inst_630880;return ((function (c,v,vec__630885,cs,inst_630887,inst_630888,inst_630889,inst_630880,state_val_630909){
return (function (p1__630825_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__630825_SHARP_);
});
;})(c,v,vec__630885,cs,inst_630887,inst_630888,inst_630889,inst_630880,state_val_630909))
})();var inst_630893 = cljs.core.filterv.call(null,inst_630892,inst_630880);var inst_630880__$1 = inst_630893;var state_630908__$1 = (function (){var statearr_630919 = state_630908;(statearr_630919[7] = inst_630880__$1);
return statearr_630919;
})();var statearr_630920_630940 = state_630908__$1;(statearr_630920_630940[2] = null);
(statearr_630920_630940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630909 === 9))
{var inst_630888 = (state_630908[9]);var state_630908__$1 = state_630908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_630908__$1,11,out,inst_630888);
} else
{if((state_val_630909 === 10))
{var inst_630900 = (state_630908[2]);var state_630908__$1 = state_630908;var statearr_630922_630941 = state_630908__$1;(statearr_630922_630941[2] = inst_630900);
(statearr_630922_630941[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_630909 === 11))
{var inst_630880 = (state_630908[7]);var inst_630897 = (state_630908[2]);var tmp630921 = inst_630880;var inst_630880__$1 = tmp630921;var state_630908__$1 = (function (){var statearr_630923 = state_630908;(statearr_630923[11] = inst_630897);
(statearr_630923[7] = inst_630880__$1);
return statearr_630923;
})();var statearr_630924_630942 = state_630908__$1;(statearr_630924_630942[2] = null);
(statearr_630924_630942[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_630928 = (new Array(12));(statearr_630928[0] = state_machine__10214__auto__);
(statearr_630928[1] = 1);
return statearr_630928;
});
var state_machine__10214__auto____1 = (function (state_630908){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_630908);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e630929){if((e630929 instanceof Object))
{var ex__10217__auto__ = e630929;var statearr_630930_630943 = state_630908;(statearr_630930_630943[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_630908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e630929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__630944 = state_630908;
state_630908 = G__630944;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_630908){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_630908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_630931 = f__10284__auto__.call(null);(statearr_630931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___630932);
return statearr_630931;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___631037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_631014){var state_val_631015 = (state_631014[1]);if((state_val_631015 === 1))
{var inst_630991 = 0;var state_631014__$1 = (function (){var statearr_631016 = state_631014;(statearr_631016[7] = inst_630991);
return statearr_631016;
})();var statearr_631017_631038 = state_631014__$1;(statearr_631017_631038[2] = null);
(statearr_631017_631038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631015 === 2))
{var inst_630991 = (state_631014[7]);var inst_630993 = (inst_630991 < n);var state_631014__$1 = state_631014;if(cljs.core.truth_(inst_630993))
{var statearr_631018_631039 = state_631014__$1;(statearr_631018_631039[1] = 4);
} else
{var statearr_631019_631040 = state_631014__$1;(statearr_631019_631040[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631015 === 3))
{var inst_631011 = (state_631014[2]);var inst_631012 = cljs.core.async.close_BANG_.call(null,out);var state_631014__$1 = (function (){var statearr_631020 = state_631014;(statearr_631020[8] = inst_631011);
return statearr_631020;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_631014__$1,inst_631012);
} else
{if((state_val_631015 === 4))
{var state_631014__$1 = state_631014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_631014__$1,7,ch);
} else
{if((state_val_631015 === 5))
{var state_631014__$1 = state_631014;var statearr_631021_631041 = state_631014__$1;(statearr_631021_631041[2] = null);
(statearr_631021_631041[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631015 === 6))
{var inst_631009 = (state_631014[2]);var state_631014__$1 = state_631014;var statearr_631022_631042 = state_631014__$1;(statearr_631022_631042[2] = inst_631009);
(statearr_631022_631042[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631015 === 7))
{var inst_630996 = (state_631014[9]);var inst_630996__$1 = (state_631014[2]);var inst_630997 = (inst_630996__$1 == null);var inst_630998 = cljs.core.not.call(null,inst_630997);var state_631014__$1 = (function (){var statearr_631023 = state_631014;(statearr_631023[9] = inst_630996__$1);
return statearr_631023;
})();if(inst_630998)
{var statearr_631024_631043 = state_631014__$1;(statearr_631024_631043[1] = 8);
} else
{var statearr_631025_631044 = state_631014__$1;(statearr_631025_631044[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631015 === 8))
{var inst_630996 = (state_631014[9]);var state_631014__$1 = state_631014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_631014__$1,11,out,inst_630996);
} else
{if((state_val_631015 === 9))
{var state_631014__$1 = state_631014;var statearr_631026_631045 = state_631014__$1;(statearr_631026_631045[2] = null);
(statearr_631026_631045[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631015 === 10))
{var inst_631006 = (state_631014[2]);var state_631014__$1 = state_631014;var statearr_631027_631046 = state_631014__$1;(statearr_631027_631046[2] = inst_631006);
(statearr_631027_631046[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631015 === 11))
{var inst_630991 = (state_631014[7]);var inst_631001 = (state_631014[2]);var inst_631002 = (inst_630991 + 1);var inst_630991__$1 = inst_631002;var state_631014__$1 = (function (){var statearr_631028 = state_631014;(statearr_631028[10] = inst_631001);
(statearr_631028[7] = inst_630991__$1);
return statearr_631028;
})();var statearr_631029_631047 = state_631014__$1;(statearr_631029_631047[2] = null);
(statearr_631029_631047[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_631033 = (new Array(11));(statearr_631033[0] = state_machine__10214__auto__);
(statearr_631033[1] = 1);
return statearr_631033;
});
var state_machine__10214__auto____1 = (function (state_631014){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_631014);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e631034){if((e631034 instanceof Object))
{var ex__10217__auto__ = e631034;var statearr_631035_631048 = state_631014;(statearr_631035_631048[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_631014);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e631034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__631049 = state_631014;
state_631014 = G__631049;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_631014){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_631014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_631036 = f__10284__auto__.call(null);(statearr_631036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___631037);
return statearr_631036;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___631146 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_631121){var state_val_631122 = (state_631121[1]);if((state_val_631122 === 1))
{var inst_631098 = null;var state_631121__$1 = (function (){var statearr_631123 = state_631121;(statearr_631123[7] = inst_631098);
return statearr_631123;
})();var statearr_631124_631147 = state_631121__$1;(statearr_631124_631147[2] = null);
(statearr_631124_631147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631122 === 2))
{var state_631121__$1 = state_631121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_631121__$1,4,ch);
} else
{if((state_val_631122 === 3))
{var inst_631118 = (state_631121[2]);var inst_631119 = cljs.core.async.close_BANG_.call(null,out);var state_631121__$1 = (function (){var statearr_631125 = state_631121;(statearr_631125[8] = inst_631118);
return statearr_631125;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_631121__$1,inst_631119);
} else
{if((state_val_631122 === 4))
{var inst_631101 = (state_631121[9]);var inst_631101__$1 = (state_631121[2]);var inst_631102 = (inst_631101__$1 == null);var inst_631103 = cljs.core.not.call(null,inst_631102);var state_631121__$1 = (function (){var statearr_631126 = state_631121;(statearr_631126[9] = inst_631101__$1);
return statearr_631126;
})();if(inst_631103)
{var statearr_631127_631148 = state_631121__$1;(statearr_631127_631148[1] = 5);
} else
{var statearr_631128_631149 = state_631121__$1;(statearr_631128_631149[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631122 === 5))
{var inst_631101 = (state_631121[9]);var inst_631098 = (state_631121[7]);var inst_631105 = cljs.core._EQ_.call(null,inst_631101,inst_631098);var state_631121__$1 = state_631121;if(inst_631105)
{var statearr_631129_631150 = state_631121__$1;(statearr_631129_631150[1] = 8);
} else
{var statearr_631130_631151 = state_631121__$1;(statearr_631130_631151[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631122 === 6))
{var state_631121__$1 = state_631121;var statearr_631132_631152 = state_631121__$1;(statearr_631132_631152[2] = null);
(statearr_631132_631152[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631122 === 7))
{var inst_631116 = (state_631121[2]);var state_631121__$1 = state_631121;var statearr_631133_631153 = state_631121__$1;(statearr_631133_631153[2] = inst_631116);
(statearr_631133_631153[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631122 === 8))
{var inst_631098 = (state_631121[7]);var tmp631131 = inst_631098;var inst_631098__$1 = tmp631131;var state_631121__$1 = (function (){var statearr_631134 = state_631121;(statearr_631134[7] = inst_631098__$1);
return statearr_631134;
})();var statearr_631135_631154 = state_631121__$1;(statearr_631135_631154[2] = null);
(statearr_631135_631154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631122 === 9))
{var inst_631101 = (state_631121[9]);var state_631121__$1 = state_631121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_631121__$1,11,out,inst_631101);
} else
{if((state_val_631122 === 10))
{var inst_631113 = (state_631121[2]);var state_631121__$1 = state_631121;var statearr_631136_631155 = state_631121__$1;(statearr_631136_631155[2] = inst_631113);
(statearr_631136_631155[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631122 === 11))
{var inst_631101 = (state_631121[9]);var inst_631110 = (state_631121[2]);var inst_631098 = inst_631101;var state_631121__$1 = (function (){var statearr_631137 = state_631121;(statearr_631137[10] = inst_631110);
(statearr_631137[7] = inst_631098);
return statearr_631137;
})();var statearr_631138_631156 = state_631121__$1;(statearr_631138_631156[2] = null);
(statearr_631138_631156[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_631142 = (new Array(11));(statearr_631142[0] = state_machine__10214__auto__);
(statearr_631142[1] = 1);
return statearr_631142;
});
var state_machine__10214__auto____1 = (function (state_631121){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_631121);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e631143){if((e631143 instanceof Object))
{var ex__10217__auto__ = e631143;var statearr_631144_631157 = state_631121;(statearr_631144_631157[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_631121);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e631143;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__631158 = state_631121;
state_631121 = G__631158;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_631121){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_631121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_631145 = f__10284__auto__.call(null);(statearr_631145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___631146);
return statearr_631145;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___631293 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_631263){var state_val_631264 = (state_631263[1]);if((state_val_631264 === 1))
{var inst_631226 = (new Array(n));var inst_631227 = inst_631226;var inst_631228 = 0;var state_631263__$1 = (function (){var statearr_631265 = state_631263;(statearr_631265[7] = inst_631227);
(statearr_631265[8] = inst_631228);
return statearr_631265;
})();var statearr_631266_631294 = state_631263__$1;(statearr_631266_631294[2] = null);
(statearr_631266_631294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631264 === 2))
{var state_631263__$1 = state_631263;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_631263__$1,4,ch);
} else
{if((state_val_631264 === 3))
{var inst_631261 = (state_631263[2]);var state_631263__$1 = state_631263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_631263__$1,inst_631261);
} else
{if((state_val_631264 === 4))
{var inst_631231 = (state_631263[9]);var inst_631231__$1 = (state_631263[2]);var inst_631232 = (inst_631231__$1 == null);var inst_631233 = cljs.core.not.call(null,inst_631232);var state_631263__$1 = (function (){var statearr_631267 = state_631263;(statearr_631267[9] = inst_631231__$1);
return statearr_631267;
})();if(inst_631233)
{var statearr_631268_631295 = state_631263__$1;(statearr_631268_631295[1] = 5);
} else
{var statearr_631269_631296 = state_631263__$1;(statearr_631269_631296[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631264 === 5))
{var inst_631227 = (state_631263[7]);var inst_631236 = (state_631263[10]);var inst_631228 = (state_631263[8]);var inst_631231 = (state_631263[9]);var inst_631235 = (inst_631227[inst_631228] = inst_631231);var inst_631236__$1 = (inst_631228 + 1);var inst_631237 = (inst_631236__$1 < n);var state_631263__$1 = (function (){var statearr_631270 = state_631263;(statearr_631270[10] = inst_631236__$1);
(statearr_631270[11] = inst_631235);
return statearr_631270;
})();if(cljs.core.truth_(inst_631237))
{var statearr_631271_631297 = state_631263__$1;(statearr_631271_631297[1] = 8);
} else
{var statearr_631272_631298 = state_631263__$1;(statearr_631272_631298[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631264 === 6))
{var inst_631228 = (state_631263[8]);var inst_631249 = (inst_631228 > 0);var state_631263__$1 = state_631263;if(cljs.core.truth_(inst_631249))
{var statearr_631274_631299 = state_631263__$1;(statearr_631274_631299[1] = 12);
} else
{var statearr_631275_631300 = state_631263__$1;(statearr_631275_631300[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631264 === 7))
{var inst_631259 = (state_631263[2]);var state_631263__$1 = state_631263;var statearr_631276_631301 = state_631263__$1;(statearr_631276_631301[2] = inst_631259);
(statearr_631276_631301[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631264 === 8))
{var inst_631227 = (state_631263[7]);var inst_631236 = (state_631263[10]);var tmp631273 = inst_631227;var inst_631227__$1 = tmp631273;var inst_631228 = inst_631236;var state_631263__$1 = (function (){var statearr_631277 = state_631263;(statearr_631277[7] = inst_631227__$1);
(statearr_631277[8] = inst_631228);
return statearr_631277;
})();var statearr_631278_631302 = state_631263__$1;(statearr_631278_631302[2] = null);
(statearr_631278_631302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631264 === 9))
{var inst_631227 = (state_631263[7]);var inst_631241 = cljs.core.vec.call(null,inst_631227);var state_631263__$1 = state_631263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_631263__$1,11,out,inst_631241);
} else
{if((state_val_631264 === 10))
{var inst_631247 = (state_631263[2]);var state_631263__$1 = state_631263;var statearr_631279_631303 = state_631263__$1;(statearr_631279_631303[2] = inst_631247);
(statearr_631279_631303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631264 === 11))
{var inst_631243 = (state_631263[2]);var inst_631244 = (new Array(n));var inst_631227 = inst_631244;var inst_631228 = 0;var state_631263__$1 = (function (){var statearr_631280 = state_631263;(statearr_631280[7] = inst_631227);
(statearr_631280[8] = inst_631228);
(statearr_631280[12] = inst_631243);
return statearr_631280;
})();var statearr_631281_631304 = state_631263__$1;(statearr_631281_631304[2] = null);
(statearr_631281_631304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631264 === 12))
{var inst_631227 = (state_631263[7]);var inst_631251 = cljs.core.vec.call(null,inst_631227);var state_631263__$1 = state_631263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_631263__$1,15,out,inst_631251);
} else
{if((state_val_631264 === 13))
{var state_631263__$1 = state_631263;var statearr_631282_631305 = state_631263__$1;(statearr_631282_631305[2] = null);
(statearr_631282_631305[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631264 === 14))
{var inst_631256 = (state_631263[2]);var inst_631257 = cljs.core.async.close_BANG_.call(null,out);var state_631263__$1 = (function (){var statearr_631283 = state_631263;(statearr_631283[13] = inst_631256);
return statearr_631283;
})();var statearr_631284_631306 = state_631263__$1;(statearr_631284_631306[2] = inst_631257);
(statearr_631284_631306[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631264 === 15))
{var inst_631253 = (state_631263[2]);var state_631263__$1 = state_631263;var statearr_631285_631307 = state_631263__$1;(statearr_631285_631307[2] = inst_631253);
(statearr_631285_631307[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_631289 = (new Array(14));(statearr_631289[0] = state_machine__10214__auto__);
(statearr_631289[1] = 1);
return statearr_631289;
});
var state_machine__10214__auto____1 = (function (state_631263){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_631263);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e631290){if((e631290 instanceof Object))
{var ex__10217__auto__ = e631290;var statearr_631291_631308 = state_631263;(statearr_631291_631308[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_631263);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e631290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__631309 = state_631263;
state_631263 = G__631309;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_631263){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_631263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_631292 = f__10284__auto__.call(null);(statearr_631292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___631293);
return statearr_631292;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___631452 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_631422){var state_val_631423 = (state_631422[1]);if((state_val_631423 === 1))
{var inst_631381 = (new Array(0));var inst_631382 = inst_631381;var inst_631383 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_631422__$1 = (function (){var statearr_631424 = state_631422;(statearr_631424[7] = inst_631383);
(statearr_631424[8] = inst_631382);
return statearr_631424;
})();var statearr_631425_631453 = state_631422__$1;(statearr_631425_631453[2] = null);
(statearr_631425_631453[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631423 === 2))
{var state_631422__$1 = state_631422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_631422__$1,4,ch);
} else
{if((state_val_631423 === 3))
{var inst_631420 = (state_631422[2]);var state_631422__$1 = state_631422;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_631422__$1,inst_631420);
} else
{if((state_val_631423 === 4))
{var inst_631386 = (state_631422[9]);var inst_631386__$1 = (state_631422[2]);var inst_631387 = (inst_631386__$1 == null);var inst_631388 = cljs.core.not.call(null,inst_631387);var state_631422__$1 = (function (){var statearr_631426 = state_631422;(statearr_631426[9] = inst_631386__$1);
return statearr_631426;
})();if(inst_631388)
{var statearr_631427_631454 = state_631422__$1;(statearr_631427_631454[1] = 5);
} else
{var statearr_631428_631455 = state_631422__$1;(statearr_631428_631455[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631423 === 5))
{var inst_631386 = (state_631422[9]);var inst_631383 = (state_631422[7]);var inst_631390 = (state_631422[10]);var inst_631390__$1 = f.call(null,inst_631386);var inst_631391 = cljs.core._EQ_.call(null,inst_631390__$1,inst_631383);var inst_631392 = cljs.core.keyword_identical_QMARK_.call(null,inst_631383,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_631393 = (inst_631391) || (inst_631392);var state_631422__$1 = (function (){var statearr_631429 = state_631422;(statearr_631429[10] = inst_631390__$1);
return statearr_631429;
})();if(cljs.core.truth_(inst_631393))
{var statearr_631430_631456 = state_631422__$1;(statearr_631430_631456[1] = 8);
} else
{var statearr_631431_631457 = state_631422__$1;(statearr_631431_631457[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631423 === 6))
{var inst_631382 = (state_631422[8]);var inst_631407 = inst_631382.length;var inst_631408 = (inst_631407 > 0);var state_631422__$1 = state_631422;if(cljs.core.truth_(inst_631408))
{var statearr_631433_631458 = state_631422__$1;(statearr_631433_631458[1] = 12);
} else
{var statearr_631434_631459 = state_631422__$1;(statearr_631434_631459[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631423 === 7))
{var inst_631418 = (state_631422[2]);var state_631422__$1 = state_631422;var statearr_631435_631460 = state_631422__$1;(statearr_631435_631460[2] = inst_631418);
(statearr_631435_631460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631423 === 8))
{var inst_631386 = (state_631422[9]);var inst_631382 = (state_631422[8]);var inst_631390 = (state_631422[10]);var inst_631395 = inst_631382.push(inst_631386);var tmp631432 = inst_631382;var inst_631382__$1 = tmp631432;var inst_631383 = inst_631390;var state_631422__$1 = (function (){var statearr_631436 = state_631422;(statearr_631436[7] = inst_631383);
(statearr_631436[8] = inst_631382__$1);
(statearr_631436[11] = inst_631395);
return statearr_631436;
})();var statearr_631437_631461 = state_631422__$1;(statearr_631437_631461[2] = null);
(statearr_631437_631461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631423 === 9))
{var inst_631382 = (state_631422[8]);var inst_631398 = cljs.core.vec.call(null,inst_631382);var state_631422__$1 = state_631422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_631422__$1,11,out,inst_631398);
} else
{if((state_val_631423 === 10))
{var inst_631405 = (state_631422[2]);var state_631422__$1 = state_631422;var statearr_631438_631462 = state_631422__$1;(statearr_631438_631462[2] = inst_631405);
(statearr_631438_631462[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631423 === 11))
{var inst_631386 = (state_631422[9]);var inst_631390 = (state_631422[10]);var inst_631400 = (state_631422[2]);var inst_631401 = (new Array(0));var inst_631402 = inst_631401.push(inst_631386);var inst_631382 = inst_631401;var inst_631383 = inst_631390;var state_631422__$1 = (function (){var statearr_631439 = state_631422;(statearr_631439[7] = inst_631383);
(statearr_631439[8] = inst_631382);
(statearr_631439[12] = inst_631402);
(statearr_631439[13] = inst_631400);
return statearr_631439;
})();var statearr_631440_631463 = state_631422__$1;(statearr_631440_631463[2] = null);
(statearr_631440_631463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631423 === 12))
{var inst_631382 = (state_631422[8]);var inst_631410 = cljs.core.vec.call(null,inst_631382);var state_631422__$1 = state_631422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_631422__$1,15,out,inst_631410);
} else
{if((state_val_631423 === 13))
{var state_631422__$1 = state_631422;var statearr_631441_631464 = state_631422__$1;(statearr_631441_631464[2] = null);
(statearr_631441_631464[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631423 === 14))
{var inst_631415 = (state_631422[2]);var inst_631416 = cljs.core.async.close_BANG_.call(null,out);var state_631422__$1 = (function (){var statearr_631442 = state_631422;(statearr_631442[14] = inst_631415);
return statearr_631442;
})();var statearr_631443_631465 = state_631422__$1;(statearr_631443_631465[2] = inst_631416);
(statearr_631443_631465[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_631423 === 15))
{var inst_631412 = (state_631422[2]);var state_631422__$1 = state_631422;var statearr_631444_631466 = state_631422__$1;(statearr_631444_631466[2] = inst_631412);
(statearr_631444_631466[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_631448 = (new Array(15));(statearr_631448[0] = state_machine__10214__auto__);
(statearr_631448[1] = 1);
return statearr_631448;
});
var state_machine__10214__auto____1 = (function (state_631422){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_631422);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e631449){if((e631449 instanceof Object))
{var ex__10217__auto__ = e631449;var statearr_631450_631467 = state_631422;(statearr_631450_631467[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_631422);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e631449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__631468 = state_631422;
state_631422 = G__631468;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_631422){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_631422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_631451 = f__10284__auto__.call(null);(statearr_631451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___631452);
return statearr_631451;
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