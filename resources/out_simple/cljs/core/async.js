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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t143102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143102 = (function (f,fn_handler,meta143103){
this.f = f;
this.fn_handler = fn_handler;
this.meta143103 = meta143103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143102.cljs$lang$type = true;
cljs.core.async.t143102.cljs$lang$ctorStr = "cljs.core.async/t143102";
cljs.core.async.t143102.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t143102");
});
cljs.core.async.t143102.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t143102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t143102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t143102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143104){var self__ = this;
var _143104__$1 = this;return self__.meta143103;
});
cljs.core.async.t143102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143104,meta143103__$1){var self__ = this;
var _143104__$1 = this;return (new cljs.core.async.t143102(self__.f,self__.fn_handler,meta143103__$1));
});
cljs.core.async.__GT_t143102 = (function __GT_t143102(f__$1,fn_handler__$1,meta143103){return (new cljs.core.async.t143102(f__$1,fn_handler__$1,meta143103));
});
}
return (new cljs.core.async.t143102(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__143106 = buff;if(G__143106)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__143106.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__143106.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__143106);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__143106);
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
{var val_143107 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_143107);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_143107);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___143108 = n;var x_143109 = 0;while(true){
if((x_143109 < n__8553__auto___143108))
{(a[x_143109] = 0);
{
var G__143110 = (x_143109 + 1);
x_143109 = G__143110;
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
var G__143111 = (i + 1);
i = G__143111;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t143115 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143115 = (function (flag,alt_flag,meta143116){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta143116 = meta143116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143115.cljs$lang$type = true;
cljs.core.async.t143115.cljs$lang$ctorStr = "cljs.core.async/t143115";
cljs.core.async.t143115.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t143115");
});
cljs.core.async.t143115.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t143115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t143115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t143115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143117){var self__ = this;
var _143117__$1 = this;return self__.meta143116;
});
cljs.core.async.t143115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143117,meta143116__$1){var self__ = this;
var _143117__$1 = this;return (new cljs.core.async.t143115(self__.flag,self__.alt_flag,meta143116__$1));
});
cljs.core.async.__GT_t143115 = (function __GT_t143115(flag__$1,alt_flag__$1,meta143116){return (new cljs.core.async.t143115(flag__$1,alt_flag__$1,meta143116));
});
}
return (new cljs.core.async.t143115(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t143121 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143121 = (function (cb,flag,alt_handler,meta143122){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta143122 = meta143122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143121.cljs$lang$type = true;
cljs.core.async.t143121.cljs$lang$ctorStr = "cljs.core.async/t143121";
cljs.core.async.t143121.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t143121");
});
cljs.core.async.t143121.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t143121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t143121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t143121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143123){var self__ = this;
var _143123__$1 = this;return self__.meta143122;
});
cljs.core.async.t143121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143123,meta143122__$1){var self__ = this;
var _143123__$1 = this;return (new cljs.core.async.t143121(self__.cb,self__.flag,self__.alt_handler,meta143122__$1));
});
cljs.core.async.__GT_t143121 = (function __GT_t143121(cb__$1,flag__$1,alt_handler__$1,meta143122){return (new cljs.core.async.t143121(cb__$1,flag__$1,alt_handler__$1,meta143122));
});
}
return (new cljs.core.async.t143121(cb,flag,alt_handler,null));
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
return (function (p1__143124_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__143124_SHARP_,port], null));
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
var G__143125 = (i + 1);
i = G__143125;
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
var alts_BANG___delegate = function (ports,p__143126){var map__143128 = p__143126;var map__143128__$1 = ((cljs.core.seq_QMARK_.call(null,map__143128))?cljs.core.apply.call(null,cljs.core.hash_map,map__143128):map__143128);var opts = map__143128__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__143126 = null;if (arguments.length > 1) {
  p__143126 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__143126);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__143129){
var ports = cljs.core.first(arglist__143129);
var p__143126 = cljs.core.rest(arglist__143129);
return alts_BANG___delegate(ports,p__143126);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t143137 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143137 = (function (ch,f,map_LT_,meta143138){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta143138 = meta143138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143137.cljs$lang$type = true;
cljs.core.async.t143137.cljs$lang$ctorStr = "cljs.core.async/t143137";
cljs.core.async.t143137.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t143137");
});
cljs.core.async.t143137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t143137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t143137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t143137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t143140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143140 = (function (fn1,_,meta143138,ch,f,map_LT_,meta143141){
this.fn1 = fn1;
this._ = _;
this.meta143138 = meta143138;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta143141 = meta143141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143140.cljs$lang$type = true;
cljs.core.async.t143140.cljs$lang$ctorStr = "cljs.core.async/t143140";
cljs.core.async.t143140.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t143140");
});
cljs.core.async.t143140.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t143140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t143140.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t143140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__143130_SHARP_){return f1.call(null,(((p1__143130_SHARP_ == null))?null:self__.f.call(null,p1__143130_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t143140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143142){var self__ = this;
var _143142__$1 = this;return self__.meta143141;
});
cljs.core.async.t143140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143142,meta143141__$1){var self__ = this;
var _143142__$1 = this;return (new cljs.core.async.t143140(self__.fn1,self__._,self__.meta143138,self__.ch,self__.f,self__.map_LT_,meta143141__$1));
});
cljs.core.async.__GT_t143140 = (function __GT_t143140(fn1__$1,___$2,meta143138__$1,ch__$2,f__$2,map_LT___$2,meta143141){return (new cljs.core.async.t143140(fn1__$1,___$2,meta143138__$1,ch__$2,f__$2,map_LT___$2,meta143141));
});
}
return (new cljs.core.async.t143140(fn1,___$1,self__.meta143138,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t143137.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t143137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t143137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143139){var self__ = this;
var _143139__$1 = this;return self__.meta143138;
});
cljs.core.async.t143137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143139,meta143138__$1){var self__ = this;
var _143139__$1 = this;return (new cljs.core.async.t143137(self__.ch,self__.f,self__.map_LT_,meta143138__$1));
});
cljs.core.async.__GT_t143137 = (function __GT_t143137(ch__$1,f__$1,map_LT___$1,meta143138){return (new cljs.core.async.t143137(ch__$1,f__$1,map_LT___$1,meta143138));
});
}
return (new cljs.core.async.t143137(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t143146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143146 = (function (ch,f,map_GT_,meta143147){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta143147 = meta143147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143146.cljs$lang$type = true;
cljs.core.async.t143146.cljs$lang$ctorStr = "cljs.core.async/t143146";
cljs.core.async.t143146.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t143146");
});
cljs.core.async.t143146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t143146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t143146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t143146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t143146.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t143146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t143146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143148){var self__ = this;
var _143148__$1 = this;return self__.meta143147;
});
cljs.core.async.t143146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143148,meta143147__$1){var self__ = this;
var _143148__$1 = this;return (new cljs.core.async.t143146(self__.ch,self__.f,self__.map_GT_,meta143147__$1));
});
cljs.core.async.__GT_t143146 = (function __GT_t143146(ch__$1,f__$1,map_GT___$1,meta143147){return (new cljs.core.async.t143146(ch__$1,f__$1,map_GT___$1,meta143147));
});
}
return (new cljs.core.async.t143146(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t143152 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143152 = (function (ch,p,filter_GT_,meta143153){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta143153 = meta143153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143152.cljs$lang$type = true;
cljs.core.async.t143152.cljs$lang$ctorStr = "cljs.core.async/t143152";
cljs.core.async.t143152.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t143152");
});
cljs.core.async.t143152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t143152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t143152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t143152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t143152.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t143152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t143152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143154){var self__ = this;
var _143154__$1 = this;return self__.meta143153;
});
cljs.core.async.t143152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143154,meta143153__$1){var self__ = this;
var _143154__$1 = this;return (new cljs.core.async.t143152(self__.ch,self__.p,self__.filter_GT_,meta143153__$1));
});
cljs.core.async.__GT_t143152 = (function __GT_t143152(ch__$1,p__$1,filter_GT___$1,meta143153){return (new cljs.core.async.t143152(ch__$1,p__$1,filter_GT___$1,meta143153));
});
}
return (new cljs.core.async.t143152(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___143237 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_143216){var state_val_143217 = (state_143216[1]);if((state_val_143217 === 1))
{var state_143216__$1 = state_143216;var statearr_143218_143238 = state_143216__$1;(statearr_143218_143238[2] = null);
(statearr_143218_143238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143217 === 2))
{var state_143216__$1 = state_143216;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143216__$1,4,ch);
} else
{if((state_val_143217 === 3))
{var inst_143214 = (state_143216[2]);var state_143216__$1 = state_143216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143216__$1,inst_143214);
} else
{if((state_val_143217 === 4))
{var inst_143198 = (state_143216[7]);var inst_143198__$1 = (state_143216[2]);var inst_143199 = (inst_143198__$1 == null);var state_143216__$1 = (function (){var statearr_143219 = state_143216;(statearr_143219[7] = inst_143198__$1);
return statearr_143219;
})();if(cljs.core.truth_(inst_143199))
{var statearr_143220_143239 = state_143216__$1;(statearr_143220_143239[1] = 5);
} else
{var statearr_143221_143240 = state_143216__$1;(statearr_143221_143240[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143217 === 5))
{var inst_143201 = cljs.core.async.close_BANG_.call(null,out);var state_143216__$1 = state_143216;var statearr_143222_143241 = state_143216__$1;(statearr_143222_143241[2] = inst_143201);
(statearr_143222_143241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143217 === 6))
{var inst_143198 = (state_143216[7]);var inst_143203 = p.call(null,inst_143198);var state_143216__$1 = state_143216;if(cljs.core.truth_(inst_143203))
{var statearr_143223_143242 = state_143216__$1;(statearr_143223_143242[1] = 8);
} else
{var statearr_143224_143243 = state_143216__$1;(statearr_143224_143243[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143217 === 7))
{var inst_143212 = (state_143216[2]);var state_143216__$1 = state_143216;var statearr_143225_143244 = state_143216__$1;(statearr_143225_143244[2] = inst_143212);
(statearr_143225_143244[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143217 === 8))
{var inst_143198 = (state_143216[7]);var state_143216__$1 = state_143216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143216__$1,11,out,inst_143198);
} else
{if((state_val_143217 === 9))
{var state_143216__$1 = state_143216;var statearr_143226_143245 = state_143216__$1;(statearr_143226_143245[2] = null);
(statearr_143226_143245[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143217 === 10))
{var inst_143209 = (state_143216[2]);var state_143216__$1 = (function (){var statearr_143227 = state_143216;(statearr_143227[8] = inst_143209);
return statearr_143227;
})();var statearr_143228_143246 = state_143216__$1;(statearr_143228_143246[2] = null);
(statearr_143228_143246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143217 === 11))
{var inst_143206 = (state_143216[2]);var state_143216__$1 = state_143216;var statearr_143229_143247 = state_143216__$1;(statearr_143229_143247[2] = inst_143206);
(statearr_143229_143247[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_143233 = (new Array(9));(statearr_143233[0] = state_machine__10214__auto__);
(statearr_143233[1] = 1);
return statearr_143233;
});
var state_machine__10214__auto____1 = (function (state_143216){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_143216);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e143234){if((e143234 instanceof Object))
{var ex__10217__auto__ = e143234;var statearr_143235_143248 = state_143216;(statearr_143235_143248[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143216);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143249 = state_143216;
state_143216 = G__143249;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_143216){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_143216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_143236 = f__10284__auto__.call(null);(statearr_143236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___143237);
return statearr_143236;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_143401){var state_val_143402 = (state_143401[1]);if((state_val_143402 === 1))
{var state_143401__$1 = state_143401;var statearr_143403_143440 = state_143401__$1;(statearr_143403_143440[2] = null);
(statearr_143403_143440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 2))
{var state_143401__$1 = state_143401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143401__$1,4,in$);
} else
{if((state_val_143402 === 3))
{var inst_143399 = (state_143401[2]);var state_143401__$1 = state_143401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143401__$1,inst_143399);
} else
{if((state_val_143402 === 4))
{var inst_143347 = (state_143401[7]);var inst_143347__$1 = (state_143401[2]);var inst_143348 = (inst_143347__$1 == null);var state_143401__$1 = (function (){var statearr_143404 = state_143401;(statearr_143404[7] = inst_143347__$1);
return statearr_143404;
})();if(cljs.core.truth_(inst_143348))
{var statearr_143405_143441 = state_143401__$1;(statearr_143405_143441[1] = 5);
} else
{var statearr_143406_143442 = state_143401__$1;(statearr_143406_143442[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 5))
{var inst_143350 = cljs.core.async.close_BANG_.call(null,out);var state_143401__$1 = state_143401;var statearr_143407_143443 = state_143401__$1;(statearr_143407_143443[2] = inst_143350);
(statearr_143407_143443[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 6))
{var inst_143347 = (state_143401[7]);var inst_143352 = f.call(null,inst_143347);var inst_143357 = cljs.core.seq.call(null,inst_143352);var inst_143358 = inst_143357;var inst_143359 = null;var inst_143360 = 0;var inst_143361 = 0;var state_143401__$1 = (function (){var statearr_143408 = state_143401;(statearr_143408[8] = inst_143359);
(statearr_143408[9] = inst_143358);
(statearr_143408[10] = inst_143360);
(statearr_143408[11] = inst_143361);
return statearr_143408;
})();var statearr_143409_143444 = state_143401__$1;(statearr_143409_143444[2] = null);
(statearr_143409_143444[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 7))
{var inst_143397 = (state_143401[2]);var state_143401__$1 = state_143401;var statearr_143410_143445 = state_143401__$1;(statearr_143410_143445[2] = inst_143397);
(statearr_143410_143445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 8))
{var inst_143360 = (state_143401[10]);var inst_143361 = (state_143401[11]);var inst_143363 = (inst_143361 < inst_143360);var inst_143364 = inst_143363;var state_143401__$1 = state_143401;if(cljs.core.truth_(inst_143364))
{var statearr_143411_143446 = state_143401__$1;(statearr_143411_143446[1] = 10);
} else
{var statearr_143412_143447 = state_143401__$1;(statearr_143412_143447[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 9))
{var inst_143394 = (state_143401[2]);var state_143401__$1 = (function (){var statearr_143413 = state_143401;(statearr_143413[12] = inst_143394);
return statearr_143413;
})();var statearr_143414_143448 = state_143401__$1;(statearr_143414_143448[2] = null);
(statearr_143414_143448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 10))
{var inst_143359 = (state_143401[8]);var inst_143361 = (state_143401[11]);var inst_143366 = cljs.core._nth.call(null,inst_143359,inst_143361);var state_143401__$1 = state_143401;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143401__$1,13,out,inst_143366);
} else
{if((state_val_143402 === 11))
{var inst_143372 = (state_143401[13]);var inst_143358 = (state_143401[9]);var inst_143372__$1 = cljs.core.seq.call(null,inst_143358);var state_143401__$1 = (function (){var statearr_143418 = state_143401;(statearr_143418[13] = inst_143372__$1);
return statearr_143418;
})();if(inst_143372__$1)
{var statearr_143419_143449 = state_143401__$1;(statearr_143419_143449[1] = 14);
} else
{var statearr_143420_143450 = state_143401__$1;(statearr_143420_143450[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 12))
{var inst_143392 = (state_143401[2]);var state_143401__$1 = state_143401;var statearr_143421_143451 = state_143401__$1;(statearr_143421_143451[2] = inst_143392);
(statearr_143421_143451[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 13))
{var inst_143359 = (state_143401[8]);var inst_143358 = (state_143401[9]);var inst_143360 = (state_143401[10]);var inst_143361 = (state_143401[11]);var inst_143368 = (state_143401[2]);var inst_143369 = (inst_143361 + 1);var tmp143415 = inst_143359;var tmp143416 = inst_143358;var tmp143417 = inst_143360;var inst_143358__$1 = tmp143416;var inst_143359__$1 = tmp143415;var inst_143360__$1 = tmp143417;var inst_143361__$1 = inst_143369;var state_143401__$1 = (function (){var statearr_143422 = state_143401;(statearr_143422[8] = inst_143359__$1);
(statearr_143422[14] = inst_143368);
(statearr_143422[9] = inst_143358__$1);
(statearr_143422[10] = inst_143360__$1);
(statearr_143422[11] = inst_143361__$1);
return statearr_143422;
})();var statearr_143423_143452 = state_143401__$1;(statearr_143423_143452[2] = null);
(statearr_143423_143452[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 14))
{var inst_143372 = (state_143401[13]);var inst_143374 = cljs.core.chunked_seq_QMARK_.call(null,inst_143372);var state_143401__$1 = state_143401;if(inst_143374)
{var statearr_143424_143453 = state_143401__$1;(statearr_143424_143453[1] = 17);
} else
{var statearr_143425_143454 = state_143401__$1;(statearr_143425_143454[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 15))
{var state_143401__$1 = state_143401;var statearr_143426_143455 = state_143401__$1;(statearr_143426_143455[2] = null);
(statearr_143426_143455[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 16))
{var inst_143390 = (state_143401[2]);var state_143401__$1 = state_143401;var statearr_143427_143456 = state_143401__$1;(statearr_143427_143456[2] = inst_143390);
(statearr_143427_143456[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 17))
{var inst_143372 = (state_143401[13]);var inst_143376 = cljs.core.chunk_first.call(null,inst_143372);var inst_143377 = cljs.core.chunk_rest.call(null,inst_143372);var inst_143378 = cljs.core.count.call(null,inst_143376);var inst_143358 = inst_143377;var inst_143359 = inst_143376;var inst_143360 = inst_143378;var inst_143361 = 0;var state_143401__$1 = (function (){var statearr_143428 = state_143401;(statearr_143428[8] = inst_143359);
(statearr_143428[9] = inst_143358);
(statearr_143428[10] = inst_143360);
(statearr_143428[11] = inst_143361);
return statearr_143428;
})();var statearr_143429_143457 = state_143401__$1;(statearr_143429_143457[2] = null);
(statearr_143429_143457[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 18))
{var inst_143372 = (state_143401[13]);var inst_143381 = cljs.core.first.call(null,inst_143372);var state_143401__$1 = state_143401;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143401__$1,20,out,inst_143381);
} else
{if((state_val_143402 === 19))
{var inst_143387 = (state_143401[2]);var state_143401__$1 = state_143401;var statearr_143430_143458 = state_143401__$1;(statearr_143430_143458[2] = inst_143387);
(statearr_143430_143458[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143402 === 20))
{var inst_143372 = (state_143401[13]);var inst_143383 = (state_143401[2]);var inst_143384 = cljs.core.next.call(null,inst_143372);var inst_143358 = inst_143384;var inst_143359 = null;var inst_143360 = 0;var inst_143361 = 0;var state_143401__$1 = (function (){var statearr_143431 = state_143401;(statearr_143431[8] = inst_143359);
(statearr_143431[15] = inst_143383);
(statearr_143431[9] = inst_143358);
(statearr_143431[10] = inst_143360);
(statearr_143431[11] = inst_143361);
return statearr_143431;
})();var statearr_143432_143459 = state_143401__$1;(statearr_143432_143459[2] = null);
(statearr_143432_143459[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_143436 = (new Array(16));(statearr_143436[0] = state_machine__10214__auto__);
(statearr_143436[1] = 1);
return statearr_143436;
});
var state_machine__10214__auto____1 = (function (state_143401){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_143401);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e143437){if((e143437 instanceof Object))
{var ex__10217__auto__ = e143437;var statearr_143438_143460 = state_143401;(statearr_143438_143460[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143401);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143461 = state_143401;
state_143401 = G__143461;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_143401){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_143401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_143439 = f__10284__auto__.call(null);(statearr_143439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_143439;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___143542 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_143521){var state_val_143522 = (state_143521[1]);if((state_val_143522 === 1))
{var state_143521__$1 = state_143521;var statearr_143523_143543 = state_143521__$1;(statearr_143523_143543[2] = null);
(statearr_143523_143543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143522 === 2))
{var state_143521__$1 = state_143521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143521__$1,4,from);
} else
{if((state_val_143522 === 3))
{var inst_143519 = (state_143521[2]);var state_143521__$1 = state_143521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143521__$1,inst_143519);
} else
{if((state_val_143522 === 4))
{var inst_143504 = (state_143521[7]);var inst_143504__$1 = (state_143521[2]);var inst_143505 = (inst_143504__$1 == null);var state_143521__$1 = (function (){var statearr_143524 = state_143521;(statearr_143524[7] = inst_143504__$1);
return statearr_143524;
})();if(cljs.core.truth_(inst_143505))
{var statearr_143525_143544 = state_143521__$1;(statearr_143525_143544[1] = 5);
} else
{var statearr_143526_143545 = state_143521__$1;(statearr_143526_143545[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143522 === 5))
{var state_143521__$1 = state_143521;if(cljs.core.truth_(close_QMARK_))
{var statearr_143527_143546 = state_143521__$1;(statearr_143527_143546[1] = 8);
} else
{var statearr_143528_143547 = state_143521__$1;(statearr_143528_143547[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143522 === 6))
{var inst_143504 = (state_143521[7]);var state_143521__$1 = state_143521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143521__$1,11,to,inst_143504);
} else
{if((state_val_143522 === 7))
{var inst_143517 = (state_143521[2]);var state_143521__$1 = state_143521;var statearr_143529_143548 = state_143521__$1;(statearr_143529_143548[2] = inst_143517);
(statearr_143529_143548[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143522 === 8))
{var inst_143508 = cljs.core.async.close_BANG_.call(null,to);var state_143521__$1 = state_143521;var statearr_143530_143549 = state_143521__$1;(statearr_143530_143549[2] = inst_143508);
(statearr_143530_143549[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143522 === 9))
{var state_143521__$1 = state_143521;var statearr_143531_143550 = state_143521__$1;(statearr_143531_143550[2] = null);
(statearr_143531_143550[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143522 === 10))
{var inst_143511 = (state_143521[2]);var state_143521__$1 = state_143521;var statearr_143532_143551 = state_143521__$1;(statearr_143532_143551[2] = inst_143511);
(statearr_143532_143551[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143522 === 11))
{var inst_143514 = (state_143521[2]);var state_143521__$1 = (function (){var statearr_143533 = state_143521;(statearr_143533[8] = inst_143514);
return statearr_143533;
})();var statearr_143534_143552 = state_143521__$1;(statearr_143534_143552[2] = null);
(statearr_143534_143552[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_143538 = (new Array(9));(statearr_143538[0] = state_machine__10214__auto__);
(statearr_143538[1] = 1);
return statearr_143538;
});
var state_machine__10214__auto____1 = (function (state_143521){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_143521);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e143539){if((e143539 instanceof Object))
{var ex__10217__auto__ = e143539;var statearr_143540_143553 = state_143521;(statearr_143540_143553[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143521);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143554 = state_143521;
state_143521 = G__143554;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_143521){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_143521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_143541 = f__10284__auto__.call(null);(statearr_143541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___143542);
return statearr_143541;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___143641 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_143619){var state_val_143620 = (state_143619[1]);if((state_val_143620 === 1))
{var state_143619__$1 = state_143619;var statearr_143621_143642 = state_143619__$1;(statearr_143621_143642[2] = null);
(statearr_143621_143642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143620 === 2))
{var state_143619__$1 = state_143619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143619__$1,4,ch);
} else
{if((state_val_143620 === 3))
{var inst_143617 = (state_143619[2]);var state_143619__$1 = state_143619;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143619__$1,inst_143617);
} else
{if((state_val_143620 === 4))
{var inst_143600 = (state_143619[7]);var inst_143600__$1 = (state_143619[2]);var inst_143601 = (inst_143600__$1 == null);var state_143619__$1 = (function (){var statearr_143622 = state_143619;(statearr_143622[7] = inst_143600__$1);
return statearr_143622;
})();if(cljs.core.truth_(inst_143601))
{var statearr_143623_143643 = state_143619__$1;(statearr_143623_143643[1] = 5);
} else
{var statearr_143624_143644 = state_143619__$1;(statearr_143624_143644[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143620 === 5))
{var inst_143603 = cljs.core.async.close_BANG_.call(null,tc);var inst_143604 = cljs.core.async.close_BANG_.call(null,fc);var state_143619__$1 = (function (){var statearr_143625 = state_143619;(statearr_143625[8] = inst_143603);
return statearr_143625;
})();var statearr_143626_143645 = state_143619__$1;(statearr_143626_143645[2] = inst_143604);
(statearr_143626_143645[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143620 === 6))
{var inst_143600 = (state_143619[7]);var inst_143606 = p.call(null,inst_143600);var state_143619__$1 = state_143619;if(cljs.core.truth_(inst_143606))
{var statearr_143627_143646 = state_143619__$1;(statearr_143627_143646[1] = 9);
} else
{var statearr_143628_143647 = state_143619__$1;(statearr_143628_143647[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143620 === 7))
{var inst_143615 = (state_143619[2]);var state_143619__$1 = state_143619;var statearr_143629_143648 = state_143619__$1;(statearr_143629_143648[2] = inst_143615);
(statearr_143629_143648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143620 === 8))
{var inst_143612 = (state_143619[2]);var state_143619__$1 = (function (){var statearr_143630 = state_143619;(statearr_143630[9] = inst_143612);
return statearr_143630;
})();var statearr_143631_143649 = state_143619__$1;(statearr_143631_143649[2] = null);
(statearr_143631_143649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143620 === 9))
{var state_143619__$1 = state_143619;var statearr_143632_143650 = state_143619__$1;(statearr_143632_143650[2] = tc);
(statearr_143632_143650[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143620 === 10))
{var state_143619__$1 = state_143619;var statearr_143633_143651 = state_143619__$1;(statearr_143633_143651[2] = fc);
(statearr_143633_143651[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143620 === 11))
{var inst_143600 = (state_143619[7]);var inst_143610 = (state_143619[2]);var state_143619__$1 = state_143619;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143619__$1,8,inst_143610,inst_143600);
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
var state_machine__10214__auto____0 = (function (){var statearr_143637 = (new Array(10));(statearr_143637[0] = state_machine__10214__auto__);
(statearr_143637[1] = 1);
return statearr_143637;
});
var state_machine__10214__auto____1 = (function (state_143619){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_143619);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e143638){if((e143638 instanceof Object))
{var ex__10217__auto__ = e143638;var statearr_143639_143652 = state_143619;(statearr_143639_143652[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143619);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143653 = state_143619;
state_143619 = G__143653;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_143619){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_143619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_143640 = f__10284__auto__.call(null);(statearr_143640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___143641);
return statearr_143640;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_143700){var state_val_143701 = (state_143700[1]);if((state_val_143701 === 7))
{var inst_143696 = (state_143700[2]);var state_143700__$1 = state_143700;var statearr_143702_143718 = state_143700__$1;(statearr_143702_143718[2] = inst_143696);
(statearr_143702_143718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143701 === 6))
{var inst_143686 = (state_143700[7]);var inst_143689 = (state_143700[8]);var inst_143693 = f.call(null,inst_143686,inst_143689);var inst_143686__$1 = inst_143693;var state_143700__$1 = (function (){var statearr_143703 = state_143700;(statearr_143703[7] = inst_143686__$1);
return statearr_143703;
})();var statearr_143704_143719 = state_143700__$1;(statearr_143704_143719[2] = null);
(statearr_143704_143719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143701 === 5))
{var inst_143686 = (state_143700[7]);var state_143700__$1 = state_143700;var statearr_143705_143720 = state_143700__$1;(statearr_143705_143720[2] = inst_143686);
(statearr_143705_143720[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143701 === 4))
{var inst_143689 = (state_143700[8]);var inst_143689__$1 = (state_143700[2]);var inst_143690 = (inst_143689__$1 == null);var state_143700__$1 = (function (){var statearr_143706 = state_143700;(statearr_143706[8] = inst_143689__$1);
return statearr_143706;
})();if(cljs.core.truth_(inst_143690))
{var statearr_143707_143721 = state_143700__$1;(statearr_143707_143721[1] = 5);
} else
{var statearr_143708_143722 = state_143700__$1;(statearr_143708_143722[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143701 === 3))
{var inst_143698 = (state_143700[2]);var state_143700__$1 = state_143700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143700__$1,inst_143698);
} else
{if((state_val_143701 === 2))
{var state_143700__$1 = state_143700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143700__$1,4,ch);
} else
{if((state_val_143701 === 1))
{var inst_143686 = init;var state_143700__$1 = (function (){var statearr_143709 = state_143700;(statearr_143709[7] = inst_143686);
return statearr_143709;
})();var statearr_143710_143723 = state_143700__$1;(statearr_143710_143723[2] = null);
(statearr_143710_143723[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_143714 = (new Array(9));(statearr_143714[0] = state_machine__10214__auto__);
(statearr_143714[1] = 1);
return statearr_143714;
});
var state_machine__10214__auto____1 = (function (state_143700){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_143700);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e143715){if((e143715 instanceof Object))
{var ex__10217__auto__ = e143715;var statearr_143716_143724 = state_143700;(statearr_143716_143724[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143725 = state_143700;
state_143700 = G__143725;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_143700){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_143700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_143717 = f__10284__auto__.call(null);(statearr_143717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_143717;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_143787){var state_val_143788 = (state_143787[1]);if((state_val_143788 === 1))
{var inst_143767 = cljs.core.seq.call(null,coll);var inst_143768 = inst_143767;var state_143787__$1 = (function (){var statearr_143789 = state_143787;(statearr_143789[7] = inst_143768);
return statearr_143789;
})();var statearr_143790_143808 = state_143787__$1;(statearr_143790_143808[2] = null);
(statearr_143790_143808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143788 === 2))
{var inst_143768 = (state_143787[7]);var state_143787__$1 = state_143787;if(cljs.core.truth_(inst_143768))
{var statearr_143791_143809 = state_143787__$1;(statearr_143791_143809[1] = 4);
} else
{var statearr_143792_143810 = state_143787__$1;(statearr_143792_143810[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143788 === 3))
{var inst_143785 = (state_143787[2]);var state_143787__$1 = state_143787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143787__$1,inst_143785);
} else
{if((state_val_143788 === 4))
{var inst_143768 = (state_143787[7]);var inst_143771 = cljs.core.first.call(null,inst_143768);var state_143787__$1 = state_143787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143787__$1,7,ch,inst_143771);
} else
{if((state_val_143788 === 5))
{var state_143787__$1 = state_143787;if(cljs.core.truth_(close_QMARK_))
{var statearr_143793_143811 = state_143787__$1;(statearr_143793_143811[1] = 8);
} else
{var statearr_143794_143812 = state_143787__$1;(statearr_143794_143812[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143788 === 6))
{var inst_143783 = (state_143787[2]);var state_143787__$1 = state_143787;var statearr_143795_143813 = state_143787__$1;(statearr_143795_143813[2] = inst_143783);
(statearr_143795_143813[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143788 === 7))
{var inst_143768 = (state_143787[7]);var inst_143773 = (state_143787[2]);var inst_143774 = cljs.core.next.call(null,inst_143768);var inst_143768__$1 = inst_143774;var state_143787__$1 = (function (){var statearr_143796 = state_143787;(statearr_143796[8] = inst_143773);
(statearr_143796[7] = inst_143768__$1);
return statearr_143796;
})();var statearr_143797_143814 = state_143787__$1;(statearr_143797_143814[2] = null);
(statearr_143797_143814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143788 === 8))
{var inst_143778 = cljs.core.async.close_BANG_.call(null,ch);var state_143787__$1 = state_143787;var statearr_143798_143815 = state_143787__$1;(statearr_143798_143815[2] = inst_143778);
(statearr_143798_143815[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143788 === 9))
{var state_143787__$1 = state_143787;var statearr_143799_143816 = state_143787__$1;(statearr_143799_143816[2] = null);
(statearr_143799_143816[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143788 === 10))
{var inst_143781 = (state_143787[2]);var state_143787__$1 = state_143787;var statearr_143800_143817 = state_143787__$1;(statearr_143800_143817[2] = inst_143781);
(statearr_143800_143817[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_143804 = (new Array(9));(statearr_143804[0] = state_machine__10214__auto__);
(statearr_143804[1] = 1);
return statearr_143804;
});
var state_machine__10214__auto____1 = (function (state_143787){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_143787);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e143805){if((e143805 instanceof Object))
{var ex__10217__auto__ = e143805;var statearr_143806_143818 = state_143787;(statearr_143806_143818[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143819 = state_143787;
state_143787 = G__143819;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_143787){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_143787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_143807 = f__10284__auto__.call(null);(statearr_143807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_143807;
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
cljs.core.async.Mux = (function (){var obj143821 = {};return obj143821;
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
cljs.core.async.Mult = (function (){var obj143823 = {};return obj143823;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t144038 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t144038 = (function (cs,ch,mult,meta144039){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta144039 = meta144039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t144038.cljs$lang$type = true;
cljs.core.async.t144038.cljs$lang$ctorStr = "cljs.core.async/t144038";
cljs.core.async.t144038.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t144038");
});})(cs))
;
cljs.core.async.t144038.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t144038.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t144038.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t144038.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t144038.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t144038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t144038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_144040){var self__ = this;
var _144040__$1 = this;return self__.meta144039;
});})(cs))
;
cljs.core.async.t144038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_144040,meta144039__$1){var self__ = this;
var _144040__$1 = this;return (new cljs.core.async.t144038(self__.cs,self__.ch,self__.mult,meta144039__$1));
});})(cs))
;
cljs.core.async.__GT_t144038 = ((function (cs){
return (function __GT_t144038(cs__$1,ch__$1,mult__$1,meta144039){return (new cljs.core.async.t144038(cs__$1,ch__$1,mult__$1,meta144039));
});})(cs))
;
}
return (new cljs.core.async.t144038(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___144252 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_144170){var state_val_144171 = (state_144170[1]);if((state_val_144171 === 32))
{var inst_144119 = (state_144170[7]);var inst_144043 = (state_144170[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_144170,31,Object,null,30);var inst_144126 = cljs.core.async.put_BANG_.call(null,inst_144119,inst_144043,done);var state_144170__$1 = state_144170;var statearr_144172_144253 = state_144170__$1;(statearr_144172_144253[2] = inst_144126);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144170__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 1))
{var state_144170__$1 = state_144170;var statearr_144173_144254 = state_144170__$1;(statearr_144173_144254[2] = null);
(statearr_144173_144254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 33))
{var inst_144132 = (state_144170[9]);var inst_144134 = cljs.core.chunked_seq_QMARK_.call(null,inst_144132);var state_144170__$1 = state_144170;if(inst_144134)
{var statearr_144174_144255 = state_144170__$1;(statearr_144174_144255[1] = 36);
} else
{var statearr_144175_144256 = state_144170__$1;(statearr_144175_144256[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 2))
{var state_144170__$1 = state_144170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144170__$1,4,ch);
} else
{if((state_val_144171 === 34))
{var state_144170__$1 = state_144170;var statearr_144176_144257 = state_144170__$1;(statearr_144176_144257[2] = null);
(statearr_144176_144257[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 3))
{var inst_144168 = (state_144170[2]);var state_144170__$1 = state_144170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144170__$1,inst_144168);
} else
{if((state_val_144171 === 35))
{var inst_144157 = (state_144170[2]);var state_144170__$1 = state_144170;var statearr_144177_144258 = state_144170__$1;(statearr_144177_144258[2] = inst_144157);
(statearr_144177_144258[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 4))
{var inst_144043 = (state_144170[8]);var inst_144043__$1 = (state_144170[2]);var inst_144044 = (inst_144043__$1 == null);var state_144170__$1 = (function (){var statearr_144178 = state_144170;(statearr_144178[8] = inst_144043__$1);
return statearr_144178;
})();if(cljs.core.truth_(inst_144044))
{var statearr_144179_144259 = state_144170__$1;(statearr_144179_144259[1] = 5);
} else
{var statearr_144180_144260 = state_144170__$1;(statearr_144180_144260[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 36))
{var inst_144132 = (state_144170[9]);var inst_144136 = cljs.core.chunk_first.call(null,inst_144132);var inst_144137 = cljs.core.chunk_rest.call(null,inst_144132);var inst_144138 = cljs.core.count.call(null,inst_144136);var inst_144111 = inst_144137;var inst_144112 = inst_144136;var inst_144113 = inst_144138;var inst_144114 = 0;var state_144170__$1 = (function (){var statearr_144181 = state_144170;(statearr_144181[10] = inst_144113);
(statearr_144181[11] = inst_144112);
(statearr_144181[12] = inst_144111);
(statearr_144181[13] = inst_144114);
return statearr_144181;
})();var statearr_144182_144261 = state_144170__$1;(statearr_144182_144261[2] = null);
(statearr_144182_144261[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 5))
{var inst_144050 = cljs.core.deref.call(null,cs);var inst_144051 = cljs.core.seq.call(null,inst_144050);var inst_144052 = inst_144051;var inst_144053 = null;var inst_144054 = 0;var inst_144055 = 0;var state_144170__$1 = (function (){var statearr_144183 = state_144170;(statearr_144183[14] = inst_144055);
(statearr_144183[15] = inst_144053);
(statearr_144183[16] = inst_144054);
(statearr_144183[17] = inst_144052);
return statearr_144183;
})();var statearr_144184_144262 = state_144170__$1;(statearr_144184_144262[2] = null);
(statearr_144184_144262[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 37))
{var inst_144132 = (state_144170[9]);var inst_144141 = cljs.core.first.call(null,inst_144132);var state_144170__$1 = (function (){var statearr_144185 = state_144170;(statearr_144185[18] = inst_144141);
return statearr_144185;
})();var statearr_144186_144263 = state_144170__$1;(statearr_144186_144263[2] = null);
(statearr_144186_144263[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 6))
{var inst_144102 = cljs.core.deref.call(null,cs);var inst_144103 = cljs.core.keys.call(null,inst_144102);var inst_144104 = cljs.core.count.call(null,inst_144103);var inst_144105 = cljs.core.reset_BANG_.call(null,dctr,inst_144104);var inst_144110 = cljs.core.seq.call(null,inst_144103);var inst_144111 = inst_144110;var inst_144112 = null;var inst_144113 = 0;var inst_144114 = 0;var state_144170__$1 = (function (){var statearr_144187 = state_144170;(statearr_144187[10] = inst_144113);
(statearr_144187[11] = inst_144112);
(statearr_144187[12] = inst_144111);
(statearr_144187[19] = inst_144105);
(statearr_144187[13] = inst_144114);
return statearr_144187;
})();var statearr_144188_144264 = state_144170__$1;(statearr_144188_144264[2] = null);
(statearr_144188_144264[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 38))
{var inst_144154 = (state_144170[2]);var state_144170__$1 = state_144170;var statearr_144189_144265 = state_144170__$1;(statearr_144189_144265[2] = inst_144154);
(statearr_144189_144265[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 7))
{var inst_144166 = (state_144170[2]);var state_144170__$1 = state_144170;var statearr_144190_144266 = state_144170__$1;(statearr_144190_144266[2] = inst_144166);
(statearr_144190_144266[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 39))
{var inst_144132 = (state_144170[9]);var inst_144150 = (state_144170[2]);var inst_144151 = cljs.core.next.call(null,inst_144132);var inst_144111 = inst_144151;var inst_144112 = null;var inst_144113 = 0;var inst_144114 = 0;var state_144170__$1 = (function (){var statearr_144191 = state_144170;(statearr_144191[10] = inst_144113);
(statearr_144191[11] = inst_144112);
(statearr_144191[12] = inst_144111);
(statearr_144191[20] = inst_144150);
(statearr_144191[13] = inst_144114);
return statearr_144191;
})();var statearr_144192_144267 = state_144170__$1;(statearr_144192_144267[2] = null);
(statearr_144192_144267[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 8))
{var inst_144055 = (state_144170[14]);var inst_144054 = (state_144170[16]);var inst_144057 = (inst_144055 < inst_144054);var inst_144058 = inst_144057;var state_144170__$1 = state_144170;if(cljs.core.truth_(inst_144058))
{var statearr_144193_144268 = state_144170__$1;(statearr_144193_144268[1] = 10);
} else
{var statearr_144194_144269 = state_144170__$1;(statearr_144194_144269[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 40))
{var inst_144141 = (state_144170[18]);var inst_144142 = (state_144170[2]);var inst_144143 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_144144 = cljs.core.async.untap_STAR_.call(null,m,inst_144141);var state_144170__$1 = (function (){var statearr_144195 = state_144170;(statearr_144195[21] = inst_144142);
(statearr_144195[22] = inst_144143);
return statearr_144195;
})();var statearr_144196_144270 = state_144170__$1;(statearr_144196_144270[2] = inst_144144);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144170__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 9))
{var inst_144100 = (state_144170[2]);var state_144170__$1 = state_144170;var statearr_144197_144271 = state_144170__$1;(statearr_144197_144271[2] = inst_144100);
(statearr_144197_144271[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 41))
{var inst_144141 = (state_144170[18]);var inst_144043 = (state_144170[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_144170,40,Object,null,39);var inst_144148 = cljs.core.async.put_BANG_.call(null,inst_144141,inst_144043,done);var state_144170__$1 = state_144170;var statearr_144198_144272 = state_144170__$1;(statearr_144198_144272[2] = inst_144148);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144170__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 10))
{var inst_144055 = (state_144170[14]);var inst_144053 = (state_144170[15]);var inst_144061 = cljs.core._nth.call(null,inst_144053,inst_144055);var inst_144062 = cljs.core.nth.call(null,inst_144061,0,null);var inst_144063 = cljs.core.nth.call(null,inst_144061,1,null);var state_144170__$1 = (function (){var statearr_144199 = state_144170;(statearr_144199[23] = inst_144062);
return statearr_144199;
})();if(cljs.core.truth_(inst_144063))
{var statearr_144200_144273 = state_144170__$1;(statearr_144200_144273[1] = 13);
} else
{var statearr_144201_144274 = state_144170__$1;(statearr_144201_144274[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 42))
{var inst_144163 = (state_144170[2]);var state_144170__$1 = (function (){var statearr_144202 = state_144170;(statearr_144202[24] = inst_144163);
return statearr_144202;
})();var statearr_144203_144275 = state_144170__$1;(statearr_144203_144275[2] = null);
(statearr_144203_144275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 11))
{var inst_144072 = (state_144170[25]);var inst_144052 = (state_144170[17]);var inst_144072__$1 = cljs.core.seq.call(null,inst_144052);var state_144170__$1 = (function (){var statearr_144204 = state_144170;(statearr_144204[25] = inst_144072__$1);
return statearr_144204;
})();if(inst_144072__$1)
{var statearr_144205_144276 = state_144170__$1;(statearr_144205_144276[1] = 16);
} else
{var statearr_144206_144277 = state_144170__$1;(statearr_144206_144277[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 12))
{var inst_144098 = (state_144170[2]);var state_144170__$1 = state_144170;var statearr_144207_144278 = state_144170__$1;(statearr_144207_144278[2] = inst_144098);
(statearr_144207_144278[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 13))
{var inst_144062 = (state_144170[23]);var inst_144065 = cljs.core.async.close_BANG_.call(null,inst_144062);var state_144170__$1 = state_144170;var statearr_144211_144279 = state_144170__$1;(statearr_144211_144279[2] = inst_144065);
(statearr_144211_144279[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 14))
{var state_144170__$1 = state_144170;var statearr_144212_144280 = state_144170__$1;(statearr_144212_144280[2] = null);
(statearr_144212_144280[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 15))
{var inst_144055 = (state_144170[14]);var inst_144053 = (state_144170[15]);var inst_144054 = (state_144170[16]);var inst_144052 = (state_144170[17]);var inst_144068 = (state_144170[2]);var inst_144069 = (inst_144055 + 1);var tmp144208 = inst_144053;var tmp144209 = inst_144054;var tmp144210 = inst_144052;var inst_144052__$1 = tmp144210;var inst_144053__$1 = tmp144208;var inst_144054__$1 = tmp144209;var inst_144055__$1 = inst_144069;var state_144170__$1 = (function (){var statearr_144213 = state_144170;(statearr_144213[26] = inst_144068);
(statearr_144213[14] = inst_144055__$1);
(statearr_144213[15] = inst_144053__$1);
(statearr_144213[16] = inst_144054__$1);
(statearr_144213[17] = inst_144052__$1);
return statearr_144213;
})();var statearr_144214_144281 = state_144170__$1;(statearr_144214_144281[2] = null);
(statearr_144214_144281[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 16))
{var inst_144072 = (state_144170[25]);var inst_144074 = cljs.core.chunked_seq_QMARK_.call(null,inst_144072);var state_144170__$1 = state_144170;if(inst_144074)
{var statearr_144215_144282 = state_144170__$1;(statearr_144215_144282[1] = 19);
} else
{var statearr_144216_144283 = state_144170__$1;(statearr_144216_144283[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 17))
{var state_144170__$1 = state_144170;var statearr_144217_144284 = state_144170__$1;(statearr_144217_144284[2] = null);
(statearr_144217_144284[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 18))
{var inst_144096 = (state_144170[2]);var state_144170__$1 = state_144170;var statearr_144218_144285 = state_144170__$1;(statearr_144218_144285[2] = inst_144096);
(statearr_144218_144285[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 19))
{var inst_144072 = (state_144170[25]);var inst_144076 = cljs.core.chunk_first.call(null,inst_144072);var inst_144077 = cljs.core.chunk_rest.call(null,inst_144072);var inst_144078 = cljs.core.count.call(null,inst_144076);var inst_144052 = inst_144077;var inst_144053 = inst_144076;var inst_144054 = inst_144078;var inst_144055 = 0;var state_144170__$1 = (function (){var statearr_144219 = state_144170;(statearr_144219[14] = inst_144055);
(statearr_144219[15] = inst_144053);
(statearr_144219[16] = inst_144054);
(statearr_144219[17] = inst_144052);
return statearr_144219;
})();var statearr_144220_144286 = state_144170__$1;(statearr_144220_144286[2] = null);
(statearr_144220_144286[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 20))
{var inst_144072 = (state_144170[25]);var inst_144082 = cljs.core.first.call(null,inst_144072);var inst_144083 = cljs.core.nth.call(null,inst_144082,0,null);var inst_144084 = cljs.core.nth.call(null,inst_144082,1,null);var state_144170__$1 = (function (){var statearr_144221 = state_144170;(statearr_144221[27] = inst_144083);
return statearr_144221;
})();if(cljs.core.truth_(inst_144084))
{var statearr_144222_144287 = state_144170__$1;(statearr_144222_144287[1] = 22);
} else
{var statearr_144223_144288 = state_144170__$1;(statearr_144223_144288[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 21))
{var inst_144093 = (state_144170[2]);var state_144170__$1 = state_144170;var statearr_144224_144289 = state_144170__$1;(statearr_144224_144289[2] = inst_144093);
(statearr_144224_144289[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 22))
{var inst_144083 = (state_144170[27]);var inst_144086 = cljs.core.async.close_BANG_.call(null,inst_144083);var state_144170__$1 = state_144170;var statearr_144225_144290 = state_144170__$1;(statearr_144225_144290[2] = inst_144086);
(statearr_144225_144290[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 23))
{var state_144170__$1 = state_144170;var statearr_144226_144291 = state_144170__$1;(statearr_144226_144291[2] = null);
(statearr_144226_144291[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 24))
{var inst_144072 = (state_144170[25]);var inst_144089 = (state_144170[2]);var inst_144090 = cljs.core.next.call(null,inst_144072);var inst_144052 = inst_144090;var inst_144053 = null;var inst_144054 = 0;var inst_144055 = 0;var state_144170__$1 = (function (){var statearr_144227 = state_144170;(statearr_144227[14] = inst_144055);
(statearr_144227[15] = inst_144053);
(statearr_144227[16] = inst_144054);
(statearr_144227[17] = inst_144052);
(statearr_144227[28] = inst_144089);
return statearr_144227;
})();var statearr_144228_144292 = state_144170__$1;(statearr_144228_144292[2] = null);
(statearr_144228_144292[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 25))
{var inst_144113 = (state_144170[10]);var inst_144114 = (state_144170[13]);var inst_144116 = (inst_144114 < inst_144113);var inst_144117 = inst_144116;var state_144170__$1 = state_144170;if(cljs.core.truth_(inst_144117))
{var statearr_144229_144293 = state_144170__$1;(statearr_144229_144293[1] = 27);
} else
{var statearr_144230_144294 = state_144170__$1;(statearr_144230_144294[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 26))
{var inst_144161 = (state_144170[2]);var state_144170__$1 = (function (){var statearr_144231 = state_144170;(statearr_144231[29] = inst_144161);
return statearr_144231;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144170__$1,42,dchan);
} else
{if((state_val_144171 === 27))
{var inst_144112 = (state_144170[11]);var inst_144114 = (state_144170[13]);var inst_144119 = cljs.core._nth.call(null,inst_144112,inst_144114);var state_144170__$1 = (function (){var statearr_144232 = state_144170;(statearr_144232[7] = inst_144119);
return statearr_144232;
})();var statearr_144233_144295 = state_144170__$1;(statearr_144233_144295[2] = null);
(statearr_144233_144295[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 28))
{var inst_144111 = (state_144170[12]);var inst_144132 = (state_144170[9]);var inst_144132__$1 = cljs.core.seq.call(null,inst_144111);var state_144170__$1 = (function (){var statearr_144237 = state_144170;(statearr_144237[9] = inst_144132__$1);
return statearr_144237;
})();if(inst_144132__$1)
{var statearr_144238_144296 = state_144170__$1;(statearr_144238_144296[1] = 33);
} else
{var statearr_144239_144297 = state_144170__$1;(statearr_144239_144297[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 29))
{var inst_144159 = (state_144170[2]);var state_144170__$1 = state_144170;var statearr_144240_144298 = state_144170__$1;(statearr_144240_144298[2] = inst_144159);
(statearr_144240_144298[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 30))
{var inst_144113 = (state_144170[10]);var inst_144112 = (state_144170[11]);var inst_144111 = (state_144170[12]);var inst_144114 = (state_144170[13]);var inst_144128 = (state_144170[2]);var inst_144129 = (inst_144114 + 1);var tmp144234 = inst_144113;var tmp144235 = inst_144112;var tmp144236 = inst_144111;var inst_144111__$1 = tmp144236;var inst_144112__$1 = tmp144235;var inst_144113__$1 = tmp144234;var inst_144114__$1 = inst_144129;var state_144170__$1 = (function (){var statearr_144241 = state_144170;(statearr_144241[10] = inst_144113__$1);
(statearr_144241[11] = inst_144112__$1);
(statearr_144241[12] = inst_144111__$1);
(statearr_144241[30] = inst_144128);
(statearr_144241[13] = inst_144114__$1);
return statearr_144241;
})();var statearr_144242_144299 = state_144170__$1;(statearr_144242_144299[2] = null);
(statearr_144242_144299[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144171 === 31))
{var inst_144119 = (state_144170[7]);var inst_144120 = (state_144170[2]);var inst_144121 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_144122 = cljs.core.async.untap_STAR_.call(null,m,inst_144119);var state_144170__$1 = (function (){var statearr_144243 = state_144170;(statearr_144243[31] = inst_144120);
(statearr_144243[32] = inst_144121);
return statearr_144243;
})();var statearr_144244_144300 = state_144170__$1;(statearr_144244_144300[2] = inst_144122);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144170__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_144248 = (new Array(33));(statearr_144248[0] = state_machine__10214__auto__);
(statearr_144248[1] = 1);
return statearr_144248;
});
var state_machine__10214__auto____1 = (function (state_144170){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_144170);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e144249){if((e144249 instanceof Object))
{var ex__10217__auto__ = e144249;var statearr_144250_144301 = state_144170;(statearr_144250_144301[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e144249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__144302 = state_144170;
state_144170 = G__144302;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_144170){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_144170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_144251 = f__10284__auto__.call(null);(statearr_144251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___144252);
return statearr_144251;
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
cljs.core.async.Mix = (function (){var obj144304 = {};return obj144304;
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
;var m = (function (){if(typeof cljs.core.async.t144414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t144414 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta144415){
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
this.meta144415 = meta144415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t144414.cljs$lang$type = true;
cljs.core.async.t144414.cljs$lang$ctorStr = "cljs.core.async/t144414";
cljs.core.async.t144414.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t144414");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t144414.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t144414.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t144414.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t144414.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t144414.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t144414.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t144414.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t144414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t144414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_144416){var self__ = this;
var _144416__$1 = this;return self__.meta144415;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t144414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_144416,meta144415__$1){var self__ = this;
var _144416__$1 = this;return (new cljs.core.async.t144414(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta144415__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t144414 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t144414(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta144415){return (new cljs.core.async.t144414(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta144415));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t144414(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___144523 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_144481){var state_val_144482 = (state_144481[1]);if((state_val_144482 === 1))
{var inst_144420 = (state_144481[7]);var inst_144420__$1 = calc_state.call(null);var inst_144421 = cljs.core.seq_QMARK_.call(null,inst_144420__$1);var state_144481__$1 = (function (){var statearr_144483 = state_144481;(statearr_144483[7] = inst_144420__$1);
return statearr_144483;
})();if(inst_144421)
{var statearr_144484_144524 = state_144481__$1;(statearr_144484_144524[1] = 2);
} else
{var statearr_144485_144525 = state_144481__$1;(statearr_144485_144525[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 2))
{var inst_144420 = (state_144481[7]);var inst_144423 = cljs.core.apply.call(null,cljs.core.hash_map,inst_144420);var state_144481__$1 = state_144481;var statearr_144486_144526 = state_144481__$1;(statearr_144486_144526[2] = inst_144423);
(statearr_144486_144526[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 3))
{var inst_144420 = (state_144481[7]);var state_144481__$1 = state_144481;var statearr_144487_144527 = state_144481__$1;(statearr_144487_144527[2] = inst_144420);
(statearr_144487_144527[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 4))
{var inst_144420 = (state_144481[7]);var inst_144426 = (state_144481[2]);var inst_144427 = cljs.core.get.call(null,inst_144426,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_144428 = cljs.core.get.call(null,inst_144426,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_144429 = cljs.core.get.call(null,inst_144426,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_144430 = inst_144420;var state_144481__$1 = (function (){var statearr_144488 = state_144481;(statearr_144488[8] = inst_144430);
(statearr_144488[9] = inst_144427);
(statearr_144488[10] = inst_144429);
(statearr_144488[11] = inst_144428);
return statearr_144488;
})();var statearr_144489_144528 = state_144481__$1;(statearr_144489_144528[2] = null);
(statearr_144489_144528[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 5))
{var inst_144430 = (state_144481[8]);var inst_144433 = cljs.core.seq_QMARK_.call(null,inst_144430);var state_144481__$1 = state_144481;if(inst_144433)
{var statearr_144490_144529 = state_144481__$1;(statearr_144490_144529[1] = 7);
} else
{var statearr_144491_144530 = state_144481__$1;(statearr_144491_144530[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 6))
{var inst_144479 = (state_144481[2]);var state_144481__$1 = state_144481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144481__$1,inst_144479);
} else
{if((state_val_144482 === 7))
{var inst_144430 = (state_144481[8]);var inst_144435 = cljs.core.apply.call(null,cljs.core.hash_map,inst_144430);var state_144481__$1 = state_144481;var statearr_144492_144531 = state_144481__$1;(statearr_144492_144531[2] = inst_144435);
(statearr_144492_144531[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 8))
{var inst_144430 = (state_144481[8]);var state_144481__$1 = state_144481;var statearr_144493_144532 = state_144481__$1;(statearr_144493_144532[2] = inst_144430);
(statearr_144493_144532[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 9))
{var inst_144438 = (state_144481[12]);var inst_144438__$1 = (state_144481[2]);var inst_144439 = cljs.core.get.call(null,inst_144438__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_144440 = cljs.core.get.call(null,inst_144438__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_144441 = cljs.core.get.call(null,inst_144438__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_144481__$1 = (function (){var statearr_144494 = state_144481;(statearr_144494[12] = inst_144438__$1);
(statearr_144494[13] = inst_144441);
(statearr_144494[14] = inst_144440);
return statearr_144494;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_144481__$1,10,inst_144439);
} else
{if((state_val_144482 === 10))
{var inst_144445 = (state_144481[15]);var inst_144446 = (state_144481[16]);var inst_144444 = (state_144481[2]);var inst_144445__$1 = cljs.core.nth.call(null,inst_144444,0,null);var inst_144446__$1 = cljs.core.nth.call(null,inst_144444,1,null);var inst_144447 = (inst_144445__$1 == null);var inst_144448 = cljs.core._EQ_.call(null,inst_144446__$1,change);var inst_144449 = (inst_144447) || (inst_144448);var state_144481__$1 = (function (){var statearr_144495 = state_144481;(statearr_144495[15] = inst_144445__$1);
(statearr_144495[16] = inst_144446__$1);
return statearr_144495;
})();if(cljs.core.truth_(inst_144449))
{var statearr_144496_144533 = state_144481__$1;(statearr_144496_144533[1] = 11);
} else
{var statearr_144497_144534 = state_144481__$1;(statearr_144497_144534[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 11))
{var inst_144445 = (state_144481[15]);var inst_144451 = (inst_144445 == null);var state_144481__$1 = state_144481;if(cljs.core.truth_(inst_144451))
{var statearr_144498_144535 = state_144481__$1;(statearr_144498_144535[1] = 14);
} else
{var statearr_144499_144536 = state_144481__$1;(statearr_144499_144536[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 12))
{var inst_144460 = (state_144481[17]);var inst_144446 = (state_144481[16]);var inst_144441 = (state_144481[13]);var inst_144460__$1 = inst_144441.call(null,inst_144446);var state_144481__$1 = (function (){var statearr_144500 = state_144481;(statearr_144500[17] = inst_144460__$1);
return statearr_144500;
})();if(cljs.core.truth_(inst_144460__$1))
{var statearr_144501_144537 = state_144481__$1;(statearr_144501_144537[1] = 17);
} else
{var statearr_144502_144538 = state_144481__$1;(statearr_144502_144538[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 13))
{var inst_144477 = (state_144481[2]);var state_144481__$1 = state_144481;var statearr_144503_144539 = state_144481__$1;(statearr_144503_144539[2] = inst_144477);
(statearr_144503_144539[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 14))
{var inst_144446 = (state_144481[16]);var inst_144453 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_144446);var state_144481__$1 = state_144481;var statearr_144504_144540 = state_144481__$1;(statearr_144504_144540[2] = inst_144453);
(statearr_144504_144540[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 15))
{var state_144481__$1 = state_144481;var statearr_144505_144541 = state_144481__$1;(statearr_144505_144541[2] = null);
(statearr_144505_144541[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 16))
{var inst_144456 = (state_144481[2]);var inst_144457 = calc_state.call(null);var inst_144430 = inst_144457;var state_144481__$1 = (function (){var statearr_144506 = state_144481;(statearr_144506[8] = inst_144430);
(statearr_144506[18] = inst_144456);
return statearr_144506;
})();var statearr_144507_144542 = state_144481__$1;(statearr_144507_144542[2] = null);
(statearr_144507_144542[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 17))
{var inst_144460 = (state_144481[17]);var state_144481__$1 = state_144481;var statearr_144508_144543 = state_144481__$1;(statearr_144508_144543[2] = inst_144460);
(statearr_144508_144543[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 18))
{var inst_144446 = (state_144481[16]);var inst_144441 = (state_144481[13]);var inst_144440 = (state_144481[14]);var inst_144463 = cljs.core.empty_QMARK_.call(null,inst_144441);var inst_144464 = inst_144440.call(null,inst_144446);var inst_144465 = cljs.core.not.call(null,inst_144464);var inst_144466 = (inst_144463) && (inst_144465);var state_144481__$1 = state_144481;var statearr_144509_144544 = state_144481__$1;(statearr_144509_144544[2] = inst_144466);
(statearr_144509_144544[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 19))
{var inst_144468 = (state_144481[2]);var state_144481__$1 = state_144481;if(cljs.core.truth_(inst_144468))
{var statearr_144510_144545 = state_144481__$1;(statearr_144510_144545[1] = 20);
} else
{var statearr_144511_144546 = state_144481__$1;(statearr_144511_144546[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 20))
{var inst_144445 = (state_144481[15]);var state_144481__$1 = state_144481;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144481__$1,23,out,inst_144445);
} else
{if((state_val_144482 === 21))
{var state_144481__$1 = state_144481;var statearr_144512_144547 = state_144481__$1;(statearr_144512_144547[2] = null);
(statearr_144512_144547[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 22))
{var inst_144438 = (state_144481[12]);var inst_144474 = (state_144481[2]);var inst_144430 = inst_144438;var state_144481__$1 = (function (){var statearr_144513 = state_144481;(statearr_144513[8] = inst_144430);
(statearr_144513[19] = inst_144474);
return statearr_144513;
})();var statearr_144514_144548 = state_144481__$1;(statearr_144514_144548[2] = null);
(statearr_144514_144548[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144482 === 23))
{var inst_144471 = (state_144481[2]);var state_144481__$1 = state_144481;var statearr_144515_144549 = state_144481__$1;(statearr_144515_144549[2] = inst_144471);
(statearr_144515_144549[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_144519 = (new Array(20));(statearr_144519[0] = state_machine__10214__auto__);
(statearr_144519[1] = 1);
return statearr_144519;
});
var state_machine__10214__auto____1 = (function (state_144481){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_144481);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e144520){if((e144520 instanceof Object))
{var ex__10217__auto__ = e144520;var statearr_144521_144550 = state_144481;(statearr_144521_144550[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144481);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e144520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__144551 = state_144481;
state_144481 = G__144551;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_144481){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_144481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_144522 = f__10284__auto__.call(null);(statearr_144522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___144523);
return statearr_144522;
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
cljs.core.async.Pub = (function (){var obj144553 = {};return obj144553;
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
return (function (p1__144554_SHARP_){if(cljs.core.truth_(p1__144554_SHARP_.call(null,topic)))
{return p1__144554_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__144554_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t144679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t144679 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta144680){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta144680 = meta144680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t144679.cljs$lang$type = true;
cljs.core.async.t144679.cljs$lang$ctorStr = "cljs.core.async/t144679";
cljs.core.async.t144679.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t144679");
});})(mults,ensure_mult))
;
cljs.core.async.t144679.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t144679.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t144679.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t144679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t144679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t144679.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t144679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t144679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_144681){var self__ = this;
var _144681__$1 = this;return self__.meta144680;
});})(mults,ensure_mult))
;
cljs.core.async.t144679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_144681,meta144680__$1){var self__ = this;
var _144681__$1 = this;return (new cljs.core.async.t144679(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta144680__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t144679 = ((function (mults,ensure_mult){
return (function __GT_t144679(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta144680){return (new cljs.core.async.t144679(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta144680));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t144679(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___144803 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_144755){var state_val_144756 = (state_144755[1]);if((state_val_144756 === 1))
{var state_144755__$1 = state_144755;var statearr_144757_144804 = state_144755__$1;(statearr_144757_144804[2] = null);
(statearr_144757_144804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 2))
{var state_144755__$1 = state_144755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144755__$1,4,ch);
} else
{if((state_val_144756 === 3))
{var inst_144753 = (state_144755[2]);var state_144755__$1 = state_144755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144755__$1,inst_144753);
} else
{if((state_val_144756 === 4))
{var inst_144684 = (state_144755[7]);var inst_144684__$1 = (state_144755[2]);var inst_144685 = (inst_144684__$1 == null);var state_144755__$1 = (function (){var statearr_144758 = state_144755;(statearr_144758[7] = inst_144684__$1);
return statearr_144758;
})();if(cljs.core.truth_(inst_144685))
{var statearr_144759_144805 = state_144755__$1;(statearr_144759_144805[1] = 5);
} else
{var statearr_144760_144806 = state_144755__$1;(statearr_144760_144806[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 5))
{var inst_144691 = cljs.core.deref.call(null,mults);var inst_144692 = cljs.core.vals.call(null,inst_144691);var inst_144693 = cljs.core.seq.call(null,inst_144692);var inst_144694 = inst_144693;var inst_144695 = null;var inst_144696 = 0;var inst_144697 = 0;var state_144755__$1 = (function (){var statearr_144761 = state_144755;(statearr_144761[8] = inst_144697);
(statearr_144761[9] = inst_144696);
(statearr_144761[10] = inst_144695);
(statearr_144761[11] = inst_144694);
return statearr_144761;
})();var statearr_144762_144807 = state_144755__$1;(statearr_144762_144807[2] = null);
(statearr_144762_144807[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 6))
{var inst_144732 = (state_144755[12]);var inst_144734 = (state_144755[13]);var inst_144684 = (state_144755[7]);var inst_144732__$1 = topic_fn.call(null,inst_144684);var inst_144733 = cljs.core.deref.call(null,mults);var inst_144734__$1 = cljs.core.get.call(null,inst_144733,inst_144732__$1);var state_144755__$1 = (function (){var statearr_144763 = state_144755;(statearr_144763[12] = inst_144732__$1);
(statearr_144763[13] = inst_144734__$1);
return statearr_144763;
})();if(cljs.core.truth_(inst_144734__$1))
{var statearr_144764_144808 = state_144755__$1;(statearr_144764_144808[1] = 19);
} else
{var statearr_144765_144809 = state_144755__$1;(statearr_144765_144809[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 7))
{var inst_144751 = (state_144755[2]);var state_144755__$1 = state_144755;var statearr_144766_144810 = state_144755__$1;(statearr_144766_144810[2] = inst_144751);
(statearr_144766_144810[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 8))
{var inst_144697 = (state_144755[8]);var inst_144696 = (state_144755[9]);var inst_144699 = (inst_144697 < inst_144696);var inst_144700 = inst_144699;var state_144755__$1 = state_144755;if(cljs.core.truth_(inst_144700))
{var statearr_144770_144811 = state_144755__$1;(statearr_144770_144811[1] = 10);
} else
{var statearr_144771_144812 = state_144755__$1;(statearr_144771_144812[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 9))
{var inst_144730 = (state_144755[2]);var state_144755__$1 = state_144755;var statearr_144772_144813 = state_144755__$1;(statearr_144772_144813[2] = inst_144730);
(statearr_144772_144813[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 10))
{var inst_144697 = (state_144755[8]);var inst_144696 = (state_144755[9]);var inst_144695 = (state_144755[10]);var inst_144694 = (state_144755[11]);var inst_144702 = cljs.core._nth.call(null,inst_144695,inst_144697);var inst_144703 = cljs.core.async.muxch_STAR_.call(null,inst_144702);var inst_144704 = cljs.core.async.close_BANG_.call(null,inst_144703);var inst_144705 = (inst_144697 + 1);var tmp144767 = inst_144696;var tmp144768 = inst_144695;var tmp144769 = inst_144694;var inst_144694__$1 = tmp144769;var inst_144695__$1 = tmp144768;var inst_144696__$1 = tmp144767;var inst_144697__$1 = inst_144705;var state_144755__$1 = (function (){var statearr_144773 = state_144755;(statearr_144773[8] = inst_144697__$1);
(statearr_144773[9] = inst_144696__$1);
(statearr_144773[10] = inst_144695__$1);
(statearr_144773[11] = inst_144694__$1);
(statearr_144773[14] = inst_144704);
return statearr_144773;
})();var statearr_144774_144814 = state_144755__$1;(statearr_144774_144814[2] = null);
(statearr_144774_144814[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 11))
{var inst_144694 = (state_144755[11]);var inst_144708 = (state_144755[15]);var inst_144708__$1 = cljs.core.seq.call(null,inst_144694);var state_144755__$1 = (function (){var statearr_144775 = state_144755;(statearr_144775[15] = inst_144708__$1);
return statearr_144775;
})();if(inst_144708__$1)
{var statearr_144776_144815 = state_144755__$1;(statearr_144776_144815[1] = 13);
} else
{var statearr_144777_144816 = state_144755__$1;(statearr_144777_144816[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 12))
{var inst_144728 = (state_144755[2]);var state_144755__$1 = state_144755;var statearr_144778_144817 = state_144755__$1;(statearr_144778_144817[2] = inst_144728);
(statearr_144778_144817[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 13))
{var inst_144708 = (state_144755[15]);var inst_144710 = cljs.core.chunked_seq_QMARK_.call(null,inst_144708);var state_144755__$1 = state_144755;if(inst_144710)
{var statearr_144779_144818 = state_144755__$1;(statearr_144779_144818[1] = 16);
} else
{var statearr_144780_144819 = state_144755__$1;(statearr_144780_144819[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 14))
{var state_144755__$1 = state_144755;var statearr_144781_144820 = state_144755__$1;(statearr_144781_144820[2] = null);
(statearr_144781_144820[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 15))
{var inst_144726 = (state_144755[2]);var state_144755__$1 = state_144755;var statearr_144782_144821 = state_144755__$1;(statearr_144782_144821[2] = inst_144726);
(statearr_144782_144821[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 16))
{var inst_144708 = (state_144755[15]);var inst_144712 = cljs.core.chunk_first.call(null,inst_144708);var inst_144713 = cljs.core.chunk_rest.call(null,inst_144708);var inst_144714 = cljs.core.count.call(null,inst_144712);var inst_144694 = inst_144713;var inst_144695 = inst_144712;var inst_144696 = inst_144714;var inst_144697 = 0;var state_144755__$1 = (function (){var statearr_144783 = state_144755;(statearr_144783[8] = inst_144697);
(statearr_144783[9] = inst_144696);
(statearr_144783[10] = inst_144695);
(statearr_144783[11] = inst_144694);
return statearr_144783;
})();var statearr_144784_144822 = state_144755__$1;(statearr_144784_144822[2] = null);
(statearr_144784_144822[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 17))
{var inst_144708 = (state_144755[15]);var inst_144717 = cljs.core.first.call(null,inst_144708);var inst_144718 = cljs.core.async.muxch_STAR_.call(null,inst_144717);var inst_144719 = cljs.core.async.close_BANG_.call(null,inst_144718);var inst_144720 = cljs.core.next.call(null,inst_144708);var inst_144694 = inst_144720;var inst_144695 = null;var inst_144696 = 0;var inst_144697 = 0;var state_144755__$1 = (function (){var statearr_144785 = state_144755;(statearr_144785[16] = inst_144719);
(statearr_144785[8] = inst_144697);
(statearr_144785[9] = inst_144696);
(statearr_144785[10] = inst_144695);
(statearr_144785[11] = inst_144694);
return statearr_144785;
})();var statearr_144786_144823 = state_144755__$1;(statearr_144786_144823[2] = null);
(statearr_144786_144823[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 18))
{var inst_144723 = (state_144755[2]);var state_144755__$1 = state_144755;var statearr_144787_144824 = state_144755__$1;(statearr_144787_144824[2] = inst_144723);
(statearr_144787_144824[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 19))
{var state_144755__$1 = state_144755;var statearr_144788_144825 = state_144755__$1;(statearr_144788_144825[2] = null);
(statearr_144788_144825[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 20))
{var state_144755__$1 = state_144755;var statearr_144789_144826 = state_144755__$1;(statearr_144789_144826[2] = null);
(statearr_144789_144826[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 21))
{var inst_144748 = (state_144755[2]);var state_144755__$1 = (function (){var statearr_144790 = state_144755;(statearr_144790[17] = inst_144748);
return statearr_144790;
})();var statearr_144791_144827 = state_144755__$1;(statearr_144791_144827[2] = null);
(statearr_144791_144827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 22))
{var inst_144745 = (state_144755[2]);var state_144755__$1 = state_144755;var statearr_144792_144828 = state_144755__$1;(statearr_144792_144828[2] = inst_144745);
(statearr_144792_144828[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 23))
{var inst_144732 = (state_144755[12]);var inst_144736 = (state_144755[2]);var inst_144737 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_144732);var state_144755__$1 = (function (){var statearr_144793 = state_144755;(statearr_144793[18] = inst_144736);
return statearr_144793;
})();var statearr_144794_144829 = state_144755__$1;(statearr_144794_144829[2] = inst_144737);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144755__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144756 === 24))
{var inst_144734 = (state_144755[13]);var inst_144684 = (state_144755[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_144755,23,Object,null,22);var inst_144741 = cljs.core.async.muxch_STAR_.call(null,inst_144734);var state_144755__$1 = state_144755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144755__$1,25,inst_144741,inst_144684);
} else
{if((state_val_144756 === 25))
{var inst_144743 = (state_144755[2]);var state_144755__$1 = state_144755;var statearr_144795_144830 = state_144755__$1;(statearr_144795_144830[2] = inst_144743);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144755__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_144799 = (new Array(19));(statearr_144799[0] = state_machine__10214__auto__);
(statearr_144799[1] = 1);
return statearr_144799;
});
var state_machine__10214__auto____1 = (function (state_144755){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_144755);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e144800){if((e144800 instanceof Object))
{var ex__10217__auto__ = e144800;var statearr_144801_144831 = state_144755;(statearr_144801_144831[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144755);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e144800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__144832 = state_144755;
state_144755 = G__144832;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_144755){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_144755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_144802 = f__10284__auto__.call(null);(statearr_144802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___144803);
return statearr_144802;
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
,cljs.core.range.call(null,cnt));var c__10283__auto___144969 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_144939){var state_val_144940 = (state_144939[1]);if((state_val_144940 === 1))
{var state_144939__$1 = state_144939;var statearr_144941_144970 = state_144939__$1;(statearr_144941_144970[2] = null);
(statearr_144941_144970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 2))
{var inst_144902 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_144903 = 0;var state_144939__$1 = (function (){var statearr_144942 = state_144939;(statearr_144942[7] = inst_144902);
(statearr_144942[8] = inst_144903);
return statearr_144942;
})();var statearr_144943_144971 = state_144939__$1;(statearr_144943_144971[2] = null);
(statearr_144943_144971[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 3))
{var inst_144937 = (state_144939[2]);var state_144939__$1 = state_144939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144939__$1,inst_144937);
} else
{if((state_val_144940 === 4))
{var inst_144903 = (state_144939[8]);var inst_144905 = (inst_144903 < cnt);var state_144939__$1 = state_144939;if(cljs.core.truth_(inst_144905))
{var statearr_144944_144972 = state_144939__$1;(statearr_144944_144972[1] = 6);
} else
{var statearr_144945_144973 = state_144939__$1;(statearr_144945_144973[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 5))
{var inst_144923 = (state_144939[2]);var state_144939__$1 = (function (){var statearr_144946 = state_144939;(statearr_144946[9] = inst_144923);
return statearr_144946;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144939__$1,12,dchan);
} else
{if((state_val_144940 === 6))
{var state_144939__$1 = state_144939;var statearr_144947_144974 = state_144939__$1;(statearr_144947_144974[2] = null);
(statearr_144947_144974[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 7))
{var state_144939__$1 = state_144939;var statearr_144948_144975 = state_144939__$1;(statearr_144948_144975[2] = null);
(statearr_144948_144975[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 8))
{var inst_144921 = (state_144939[2]);var state_144939__$1 = state_144939;var statearr_144949_144976 = state_144939__$1;(statearr_144949_144976[2] = inst_144921);
(statearr_144949_144976[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 9))
{var inst_144903 = (state_144939[8]);var inst_144916 = (state_144939[2]);var inst_144917 = (inst_144903 + 1);var inst_144903__$1 = inst_144917;var state_144939__$1 = (function (){var statearr_144950 = state_144939;(statearr_144950[10] = inst_144916);
(statearr_144950[8] = inst_144903__$1);
return statearr_144950;
})();var statearr_144951_144977 = state_144939__$1;(statearr_144951_144977[2] = null);
(statearr_144951_144977[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 10))
{var inst_144907 = (state_144939[2]);var inst_144908 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_144939__$1 = (function (){var statearr_144952 = state_144939;(statearr_144952[11] = inst_144907);
return statearr_144952;
})();var statearr_144953_144978 = state_144939__$1;(statearr_144953_144978[2] = inst_144908);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144939__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 11))
{var inst_144903 = (state_144939[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_144939,10,Object,null,9);var inst_144912 = chs__$1.call(null,inst_144903);var inst_144913 = done.call(null,inst_144903);var inst_144914 = cljs.core.async.take_BANG_.call(null,inst_144912,inst_144913);var state_144939__$1 = state_144939;var statearr_144954_144979 = state_144939__$1;(statearr_144954_144979[2] = inst_144914);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144939__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 12))
{var inst_144925 = (state_144939[12]);var inst_144925__$1 = (state_144939[2]);var inst_144926 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_144925__$1);var state_144939__$1 = (function (){var statearr_144955 = state_144939;(statearr_144955[12] = inst_144925__$1);
return statearr_144955;
})();if(cljs.core.truth_(inst_144926))
{var statearr_144956_144980 = state_144939__$1;(statearr_144956_144980[1] = 13);
} else
{var statearr_144957_144981 = state_144939__$1;(statearr_144957_144981[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 13))
{var inst_144928 = cljs.core.async.close_BANG_.call(null,out);var state_144939__$1 = state_144939;var statearr_144958_144982 = state_144939__$1;(statearr_144958_144982[2] = inst_144928);
(statearr_144958_144982[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 14))
{var inst_144925 = (state_144939[12]);var inst_144930 = cljs.core.apply.call(null,f,inst_144925);var state_144939__$1 = state_144939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144939__$1,16,out,inst_144930);
} else
{if((state_val_144940 === 15))
{var inst_144935 = (state_144939[2]);var state_144939__$1 = state_144939;var statearr_144959_144983 = state_144939__$1;(statearr_144959_144983[2] = inst_144935);
(statearr_144959_144983[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144940 === 16))
{var inst_144932 = (state_144939[2]);var state_144939__$1 = (function (){var statearr_144960 = state_144939;(statearr_144960[13] = inst_144932);
return statearr_144960;
})();var statearr_144961_144984 = state_144939__$1;(statearr_144961_144984[2] = null);
(statearr_144961_144984[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_144965 = (new Array(14));(statearr_144965[0] = state_machine__10214__auto__);
(statearr_144965[1] = 1);
return statearr_144965;
});
var state_machine__10214__auto____1 = (function (state_144939){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_144939);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e144966){if((e144966 instanceof Object))
{var ex__10217__auto__ = e144966;var statearr_144967_144985 = state_144939;(statearr_144967_144985[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e144966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__144986 = state_144939;
state_144939 = G__144986;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_144939){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_144939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_144968 = f__10284__auto__.call(null);(statearr_144968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___144969);
return statearr_144968;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___145094 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_145070){var state_val_145071 = (state_145070[1]);if((state_val_145071 === 1))
{var inst_145041 = cljs.core.vec.call(null,chs);var inst_145042 = inst_145041;var state_145070__$1 = (function (){var statearr_145072 = state_145070;(statearr_145072[7] = inst_145042);
return statearr_145072;
})();var statearr_145073_145095 = state_145070__$1;(statearr_145073_145095[2] = null);
(statearr_145073_145095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145071 === 2))
{var inst_145042 = (state_145070[7]);var inst_145044 = cljs.core.count.call(null,inst_145042);var inst_145045 = (inst_145044 > 0);var state_145070__$1 = state_145070;if(cljs.core.truth_(inst_145045))
{var statearr_145074_145096 = state_145070__$1;(statearr_145074_145096[1] = 4);
} else
{var statearr_145075_145097 = state_145070__$1;(statearr_145075_145097[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145071 === 3))
{var inst_145068 = (state_145070[2]);var state_145070__$1 = state_145070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145070__$1,inst_145068);
} else
{if((state_val_145071 === 4))
{var inst_145042 = (state_145070[7]);var state_145070__$1 = state_145070;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_145070__$1,7,inst_145042);
} else
{if((state_val_145071 === 5))
{var inst_145064 = cljs.core.async.close_BANG_.call(null,out);var state_145070__$1 = state_145070;var statearr_145076_145098 = state_145070__$1;(statearr_145076_145098[2] = inst_145064);
(statearr_145076_145098[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145071 === 6))
{var inst_145066 = (state_145070[2]);var state_145070__$1 = state_145070;var statearr_145077_145099 = state_145070__$1;(statearr_145077_145099[2] = inst_145066);
(statearr_145077_145099[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145071 === 7))
{var inst_145050 = (state_145070[8]);var inst_145049 = (state_145070[9]);var inst_145049__$1 = (state_145070[2]);var inst_145050__$1 = cljs.core.nth.call(null,inst_145049__$1,0,null);var inst_145051 = cljs.core.nth.call(null,inst_145049__$1,1,null);var inst_145052 = (inst_145050__$1 == null);var state_145070__$1 = (function (){var statearr_145078 = state_145070;(statearr_145078[10] = inst_145051);
(statearr_145078[8] = inst_145050__$1);
(statearr_145078[9] = inst_145049__$1);
return statearr_145078;
})();if(cljs.core.truth_(inst_145052))
{var statearr_145079_145100 = state_145070__$1;(statearr_145079_145100[1] = 8);
} else
{var statearr_145080_145101 = state_145070__$1;(statearr_145080_145101[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145071 === 8))
{var inst_145042 = (state_145070[7]);var inst_145051 = (state_145070[10]);var inst_145050 = (state_145070[8]);var inst_145049 = (state_145070[9]);var inst_145054 = (function (){var c = inst_145051;var v = inst_145050;var vec__145047 = inst_145049;var cs = inst_145042;return ((function (c,v,vec__145047,cs,inst_145042,inst_145051,inst_145050,inst_145049,state_val_145071){
return (function (p1__144987_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__144987_SHARP_);
});
;})(c,v,vec__145047,cs,inst_145042,inst_145051,inst_145050,inst_145049,state_val_145071))
})();var inst_145055 = cljs.core.filterv.call(null,inst_145054,inst_145042);var inst_145042__$1 = inst_145055;var state_145070__$1 = (function (){var statearr_145081 = state_145070;(statearr_145081[7] = inst_145042__$1);
return statearr_145081;
})();var statearr_145082_145102 = state_145070__$1;(statearr_145082_145102[2] = null);
(statearr_145082_145102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145071 === 9))
{var inst_145050 = (state_145070[8]);var state_145070__$1 = state_145070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145070__$1,11,out,inst_145050);
} else
{if((state_val_145071 === 10))
{var inst_145062 = (state_145070[2]);var state_145070__$1 = state_145070;var statearr_145084_145103 = state_145070__$1;(statearr_145084_145103[2] = inst_145062);
(statearr_145084_145103[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145071 === 11))
{var inst_145042 = (state_145070[7]);var inst_145059 = (state_145070[2]);var tmp145083 = inst_145042;var inst_145042__$1 = tmp145083;var state_145070__$1 = (function (){var statearr_145085 = state_145070;(statearr_145085[7] = inst_145042__$1);
(statearr_145085[11] = inst_145059);
return statearr_145085;
})();var statearr_145086_145104 = state_145070__$1;(statearr_145086_145104[2] = null);
(statearr_145086_145104[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_145090 = (new Array(12));(statearr_145090[0] = state_machine__10214__auto__);
(statearr_145090[1] = 1);
return statearr_145090;
});
var state_machine__10214__auto____1 = (function (state_145070){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_145070);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e145091){if((e145091 instanceof Object))
{var ex__10217__auto__ = e145091;var statearr_145092_145105 = state_145070;(statearr_145092_145105[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145070);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e145091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__145106 = state_145070;
state_145070 = G__145106;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_145070){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_145070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_145093 = f__10284__auto__.call(null);(statearr_145093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___145094);
return statearr_145093;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___145199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_145176){var state_val_145177 = (state_145176[1]);if((state_val_145177 === 1))
{var inst_145153 = 0;var state_145176__$1 = (function (){var statearr_145178 = state_145176;(statearr_145178[7] = inst_145153);
return statearr_145178;
})();var statearr_145179_145200 = state_145176__$1;(statearr_145179_145200[2] = null);
(statearr_145179_145200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145177 === 2))
{var inst_145153 = (state_145176[7]);var inst_145155 = (inst_145153 < n);var state_145176__$1 = state_145176;if(cljs.core.truth_(inst_145155))
{var statearr_145180_145201 = state_145176__$1;(statearr_145180_145201[1] = 4);
} else
{var statearr_145181_145202 = state_145176__$1;(statearr_145181_145202[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145177 === 3))
{var inst_145173 = (state_145176[2]);var inst_145174 = cljs.core.async.close_BANG_.call(null,out);var state_145176__$1 = (function (){var statearr_145182 = state_145176;(statearr_145182[8] = inst_145173);
return statearr_145182;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145176__$1,inst_145174);
} else
{if((state_val_145177 === 4))
{var state_145176__$1 = state_145176;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145176__$1,7,ch);
} else
{if((state_val_145177 === 5))
{var state_145176__$1 = state_145176;var statearr_145183_145203 = state_145176__$1;(statearr_145183_145203[2] = null);
(statearr_145183_145203[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145177 === 6))
{var inst_145171 = (state_145176[2]);var state_145176__$1 = state_145176;var statearr_145184_145204 = state_145176__$1;(statearr_145184_145204[2] = inst_145171);
(statearr_145184_145204[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145177 === 7))
{var inst_145158 = (state_145176[9]);var inst_145158__$1 = (state_145176[2]);var inst_145159 = (inst_145158__$1 == null);var inst_145160 = cljs.core.not.call(null,inst_145159);var state_145176__$1 = (function (){var statearr_145185 = state_145176;(statearr_145185[9] = inst_145158__$1);
return statearr_145185;
})();if(inst_145160)
{var statearr_145186_145205 = state_145176__$1;(statearr_145186_145205[1] = 8);
} else
{var statearr_145187_145206 = state_145176__$1;(statearr_145187_145206[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145177 === 8))
{var inst_145158 = (state_145176[9]);var state_145176__$1 = state_145176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145176__$1,11,out,inst_145158);
} else
{if((state_val_145177 === 9))
{var state_145176__$1 = state_145176;var statearr_145188_145207 = state_145176__$1;(statearr_145188_145207[2] = null);
(statearr_145188_145207[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145177 === 10))
{var inst_145168 = (state_145176[2]);var state_145176__$1 = state_145176;var statearr_145189_145208 = state_145176__$1;(statearr_145189_145208[2] = inst_145168);
(statearr_145189_145208[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145177 === 11))
{var inst_145153 = (state_145176[7]);var inst_145163 = (state_145176[2]);var inst_145164 = (inst_145153 + 1);var inst_145153__$1 = inst_145164;var state_145176__$1 = (function (){var statearr_145190 = state_145176;(statearr_145190[7] = inst_145153__$1);
(statearr_145190[10] = inst_145163);
return statearr_145190;
})();var statearr_145191_145209 = state_145176__$1;(statearr_145191_145209[2] = null);
(statearr_145191_145209[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_145195 = (new Array(11));(statearr_145195[0] = state_machine__10214__auto__);
(statearr_145195[1] = 1);
return statearr_145195;
});
var state_machine__10214__auto____1 = (function (state_145176){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_145176);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e145196){if((e145196 instanceof Object))
{var ex__10217__auto__ = e145196;var statearr_145197_145210 = state_145176;(statearr_145197_145210[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145176);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e145196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__145211 = state_145176;
state_145176 = G__145211;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_145176){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_145176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_145198 = f__10284__auto__.call(null);(statearr_145198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___145199);
return statearr_145198;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___145308 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_145283){var state_val_145284 = (state_145283[1]);if((state_val_145284 === 1))
{var inst_145260 = null;var state_145283__$1 = (function (){var statearr_145285 = state_145283;(statearr_145285[7] = inst_145260);
return statearr_145285;
})();var statearr_145286_145309 = state_145283__$1;(statearr_145286_145309[2] = null);
(statearr_145286_145309[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145284 === 2))
{var state_145283__$1 = state_145283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145283__$1,4,ch);
} else
{if((state_val_145284 === 3))
{var inst_145280 = (state_145283[2]);var inst_145281 = cljs.core.async.close_BANG_.call(null,out);var state_145283__$1 = (function (){var statearr_145287 = state_145283;(statearr_145287[8] = inst_145280);
return statearr_145287;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145283__$1,inst_145281);
} else
{if((state_val_145284 === 4))
{var inst_145263 = (state_145283[9]);var inst_145263__$1 = (state_145283[2]);var inst_145264 = (inst_145263__$1 == null);var inst_145265 = cljs.core.not.call(null,inst_145264);var state_145283__$1 = (function (){var statearr_145288 = state_145283;(statearr_145288[9] = inst_145263__$1);
return statearr_145288;
})();if(inst_145265)
{var statearr_145289_145310 = state_145283__$1;(statearr_145289_145310[1] = 5);
} else
{var statearr_145290_145311 = state_145283__$1;(statearr_145290_145311[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145284 === 5))
{var inst_145263 = (state_145283[9]);var inst_145260 = (state_145283[7]);var inst_145267 = cljs.core._EQ_.call(null,inst_145263,inst_145260);var state_145283__$1 = state_145283;if(inst_145267)
{var statearr_145291_145312 = state_145283__$1;(statearr_145291_145312[1] = 8);
} else
{var statearr_145292_145313 = state_145283__$1;(statearr_145292_145313[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145284 === 6))
{var state_145283__$1 = state_145283;var statearr_145294_145314 = state_145283__$1;(statearr_145294_145314[2] = null);
(statearr_145294_145314[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145284 === 7))
{var inst_145278 = (state_145283[2]);var state_145283__$1 = state_145283;var statearr_145295_145315 = state_145283__$1;(statearr_145295_145315[2] = inst_145278);
(statearr_145295_145315[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145284 === 8))
{var inst_145260 = (state_145283[7]);var tmp145293 = inst_145260;var inst_145260__$1 = tmp145293;var state_145283__$1 = (function (){var statearr_145296 = state_145283;(statearr_145296[7] = inst_145260__$1);
return statearr_145296;
})();var statearr_145297_145316 = state_145283__$1;(statearr_145297_145316[2] = null);
(statearr_145297_145316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145284 === 9))
{var inst_145263 = (state_145283[9]);var state_145283__$1 = state_145283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145283__$1,11,out,inst_145263);
} else
{if((state_val_145284 === 10))
{var inst_145275 = (state_145283[2]);var state_145283__$1 = state_145283;var statearr_145298_145317 = state_145283__$1;(statearr_145298_145317[2] = inst_145275);
(statearr_145298_145317[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145284 === 11))
{var inst_145263 = (state_145283[9]);var inst_145272 = (state_145283[2]);var inst_145260 = inst_145263;var state_145283__$1 = (function (){var statearr_145299 = state_145283;(statearr_145299[10] = inst_145272);
(statearr_145299[7] = inst_145260);
return statearr_145299;
})();var statearr_145300_145318 = state_145283__$1;(statearr_145300_145318[2] = null);
(statearr_145300_145318[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_145304 = (new Array(11));(statearr_145304[0] = state_machine__10214__auto__);
(statearr_145304[1] = 1);
return statearr_145304;
});
var state_machine__10214__auto____1 = (function (state_145283){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_145283);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e145305){if((e145305 instanceof Object))
{var ex__10217__auto__ = e145305;var statearr_145306_145319 = state_145283;(statearr_145306_145319[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145283);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e145305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__145320 = state_145283;
state_145283 = G__145320;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_145283){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_145283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_145307 = f__10284__auto__.call(null);(statearr_145307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___145308);
return statearr_145307;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___145455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_145425){var state_val_145426 = (state_145425[1]);if((state_val_145426 === 1))
{var inst_145388 = (new Array(n));var inst_145389 = inst_145388;var inst_145390 = 0;var state_145425__$1 = (function (){var statearr_145427 = state_145425;(statearr_145427[7] = inst_145390);
(statearr_145427[8] = inst_145389);
return statearr_145427;
})();var statearr_145428_145456 = state_145425__$1;(statearr_145428_145456[2] = null);
(statearr_145428_145456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145426 === 2))
{var state_145425__$1 = state_145425;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145425__$1,4,ch);
} else
{if((state_val_145426 === 3))
{var inst_145423 = (state_145425[2]);var state_145425__$1 = state_145425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145425__$1,inst_145423);
} else
{if((state_val_145426 === 4))
{var inst_145393 = (state_145425[9]);var inst_145393__$1 = (state_145425[2]);var inst_145394 = (inst_145393__$1 == null);var inst_145395 = cljs.core.not.call(null,inst_145394);var state_145425__$1 = (function (){var statearr_145429 = state_145425;(statearr_145429[9] = inst_145393__$1);
return statearr_145429;
})();if(inst_145395)
{var statearr_145430_145457 = state_145425__$1;(statearr_145430_145457[1] = 5);
} else
{var statearr_145431_145458 = state_145425__$1;(statearr_145431_145458[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145426 === 5))
{var inst_145393 = (state_145425[9]);var inst_145390 = (state_145425[7]);var inst_145398 = (state_145425[10]);var inst_145389 = (state_145425[8]);var inst_145397 = (inst_145389[inst_145390] = inst_145393);var inst_145398__$1 = (inst_145390 + 1);var inst_145399 = (inst_145398__$1 < n);var state_145425__$1 = (function (){var statearr_145432 = state_145425;(statearr_145432[10] = inst_145398__$1);
(statearr_145432[11] = inst_145397);
return statearr_145432;
})();if(cljs.core.truth_(inst_145399))
{var statearr_145433_145459 = state_145425__$1;(statearr_145433_145459[1] = 8);
} else
{var statearr_145434_145460 = state_145425__$1;(statearr_145434_145460[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145426 === 6))
{var inst_145390 = (state_145425[7]);var inst_145411 = (inst_145390 > 0);var state_145425__$1 = state_145425;if(cljs.core.truth_(inst_145411))
{var statearr_145436_145461 = state_145425__$1;(statearr_145436_145461[1] = 12);
} else
{var statearr_145437_145462 = state_145425__$1;(statearr_145437_145462[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145426 === 7))
{var inst_145421 = (state_145425[2]);var state_145425__$1 = state_145425;var statearr_145438_145463 = state_145425__$1;(statearr_145438_145463[2] = inst_145421);
(statearr_145438_145463[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145426 === 8))
{var inst_145398 = (state_145425[10]);var inst_145389 = (state_145425[8]);var tmp145435 = inst_145389;var inst_145389__$1 = tmp145435;var inst_145390 = inst_145398;var state_145425__$1 = (function (){var statearr_145439 = state_145425;(statearr_145439[7] = inst_145390);
(statearr_145439[8] = inst_145389__$1);
return statearr_145439;
})();var statearr_145440_145464 = state_145425__$1;(statearr_145440_145464[2] = null);
(statearr_145440_145464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145426 === 9))
{var inst_145389 = (state_145425[8]);var inst_145403 = cljs.core.vec.call(null,inst_145389);var state_145425__$1 = state_145425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145425__$1,11,out,inst_145403);
} else
{if((state_val_145426 === 10))
{var inst_145409 = (state_145425[2]);var state_145425__$1 = state_145425;var statearr_145441_145465 = state_145425__$1;(statearr_145441_145465[2] = inst_145409);
(statearr_145441_145465[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145426 === 11))
{var inst_145405 = (state_145425[2]);var inst_145406 = (new Array(n));var inst_145389 = inst_145406;var inst_145390 = 0;var state_145425__$1 = (function (){var statearr_145442 = state_145425;(statearr_145442[12] = inst_145405);
(statearr_145442[7] = inst_145390);
(statearr_145442[8] = inst_145389);
return statearr_145442;
})();var statearr_145443_145466 = state_145425__$1;(statearr_145443_145466[2] = null);
(statearr_145443_145466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145426 === 12))
{var inst_145389 = (state_145425[8]);var inst_145413 = cljs.core.vec.call(null,inst_145389);var state_145425__$1 = state_145425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145425__$1,15,out,inst_145413);
} else
{if((state_val_145426 === 13))
{var state_145425__$1 = state_145425;var statearr_145444_145467 = state_145425__$1;(statearr_145444_145467[2] = null);
(statearr_145444_145467[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145426 === 14))
{var inst_145418 = (state_145425[2]);var inst_145419 = cljs.core.async.close_BANG_.call(null,out);var state_145425__$1 = (function (){var statearr_145445 = state_145425;(statearr_145445[13] = inst_145418);
return statearr_145445;
})();var statearr_145446_145468 = state_145425__$1;(statearr_145446_145468[2] = inst_145419);
(statearr_145446_145468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145426 === 15))
{var inst_145415 = (state_145425[2]);var state_145425__$1 = state_145425;var statearr_145447_145469 = state_145425__$1;(statearr_145447_145469[2] = inst_145415);
(statearr_145447_145469[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_145451 = (new Array(14));(statearr_145451[0] = state_machine__10214__auto__);
(statearr_145451[1] = 1);
return statearr_145451;
});
var state_machine__10214__auto____1 = (function (state_145425){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_145425);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e145452){if((e145452 instanceof Object))
{var ex__10217__auto__ = e145452;var statearr_145453_145470 = state_145425;(statearr_145453_145470[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145425);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e145452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__145471 = state_145425;
state_145425 = G__145471;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_145425){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_145425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_145454 = f__10284__auto__.call(null);(statearr_145454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___145455);
return statearr_145454;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___145614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_145584){var state_val_145585 = (state_145584[1]);if((state_val_145585 === 1))
{var inst_145543 = (new Array(0));var inst_145544 = inst_145543;var inst_145545 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_145584__$1 = (function (){var statearr_145586 = state_145584;(statearr_145586[7] = inst_145544);
(statearr_145586[8] = inst_145545);
return statearr_145586;
})();var statearr_145587_145615 = state_145584__$1;(statearr_145587_145615[2] = null);
(statearr_145587_145615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145585 === 2))
{var state_145584__$1 = state_145584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145584__$1,4,ch);
} else
{if((state_val_145585 === 3))
{var inst_145582 = (state_145584[2]);var state_145584__$1 = state_145584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145584__$1,inst_145582);
} else
{if((state_val_145585 === 4))
{var inst_145548 = (state_145584[9]);var inst_145548__$1 = (state_145584[2]);var inst_145549 = (inst_145548__$1 == null);var inst_145550 = cljs.core.not.call(null,inst_145549);var state_145584__$1 = (function (){var statearr_145588 = state_145584;(statearr_145588[9] = inst_145548__$1);
return statearr_145588;
})();if(inst_145550)
{var statearr_145589_145616 = state_145584__$1;(statearr_145589_145616[1] = 5);
} else
{var statearr_145590_145617 = state_145584__$1;(statearr_145590_145617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145585 === 5))
{var inst_145545 = (state_145584[8]);var inst_145552 = (state_145584[10]);var inst_145548 = (state_145584[9]);var inst_145552__$1 = f.call(null,inst_145548);var inst_145553 = cljs.core._EQ_.call(null,inst_145552__$1,inst_145545);var inst_145554 = cljs.core.keyword_identical_QMARK_.call(null,inst_145545,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_145555 = (inst_145553) || (inst_145554);var state_145584__$1 = (function (){var statearr_145591 = state_145584;(statearr_145591[10] = inst_145552__$1);
return statearr_145591;
})();if(cljs.core.truth_(inst_145555))
{var statearr_145592_145618 = state_145584__$1;(statearr_145592_145618[1] = 8);
} else
{var statearr_145593_145619 = state_145584__$1;(statearr_145593_145619[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145585 === 6))
{var inst_145544 = (state_145584[7]);var inst_145569 = inst_145544.length;var inst_145570 = (inst_145569 > 0);var state_145584__$1 = state_145584;if(cljs.core.truth_(inst_145570))
{var statearr_145595_145620 = state_145584__$1;(statearr_145595_145620[1] = 12);
} else
{var statearr_145596_145621 = state_145584__$1;(statearr_145596_145621[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145585 === 7))
{var inst_145580 = (state_145584[2]);var state_145584__$1 = state_145584;var statearr_145597_145622 = state_145584__$1;(statearr_145597_145622[2] = inst_145580);
(statearr_145597_145622[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145585 === 8))
{var inst_145544 = (state_145584[7]);var inst_145552 = (state_145584[10]);var inst_145548 = (state_145584[9]);var inst_145557 = inst_145544.push(inst_145548);var tmp145594 = inst_145544;var inst_145544__$1 = tmp145594;var inst_145545 = inst_145552;var state_145584__$1 = (function (){var statearr_145598 = state_145584;(statearr_145598[11] = inst_145557);
(statearr_145598[7] = inst_145544__$1);
(statearr_145598[8] = inst_145545);
return statearr_145598;
})();var statearr_145599_145623 = state_145584__$1;(statearr_145599_145623[2] = null);
(statearr_145599_145623[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145585 === 9))
{var inst_145544 = (state_145584[7]);var inst_145560 = cljs.core.vec.call(null,inst_145544);var state_145584__$1 = state_145584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145584__$1,11,out,inst_145560);
} else
{if((state_val_145585 === 10))
{var inst_145567 = (state_145584[2]);var state_145584__$1 = state_145584;var statearr_145600_145624 = state_145584__$1;(statearr_145600_145624[2] = inst_145567);
(statearr_145600_145624[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145585 === 11))
{var inst_145552 = (state_145584[10]);var inst_145548 = (state_145584[9]);var inst_145562 = (state_145584[2]);var inst_145563 = (new Array(0));var inst_145564 = inst_145563.push(inst_145548);var inst_145544 = inst_145563;var inst_145545 = inst_145552;var state_145584__$1 = (function (){var statearr_145601 = state_145584;(statearr_145601[12] = inst_145564);
(statearr_145601[13] = inst_145562);
(statearr_145601[7] = inst_145544);
(statearr_145601[8] = inst_145545);
return statearr_145601;
})();var statearr_145602_145625 = state_145584__$1;(statearr_145602_145625[2] = null);
(statearr_145602_145625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145585 === 12))
{var inst_145544 = (state_145584[7]);var inst_145572 = cljs.core.vec.call(null,inst_145544);var state_145584__$1 = state_145584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145584__$1,15,out,inst_145572);
} else
{if((state_val_145585 === 13))
{var state_145584__$1 = state_145584;var statearr_145603_145626 = state_145584__$1;(statearr_145603_145626[2] = null);
(statearr_145603_145626[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145585 === 14))
{var inst_145577 = (state_145584[2]);var inst_145578 = cljs.core.async.close_BANG_.call(null,out);var state_145584__$1 = (function (){var statearr_145604 = state_145584;(statearr_145604[14] = inst_145577);
return statearr_145604;
})();var statearr_145605_145627 = state_145584__$1;(statearr_145605_145627[2] = inst_145578);
(statearr_145605_145627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_145585 === 15))
{var inst_145574 = (state_145584[2]);var state_145584__$1 = state_145584;var statearr_145606_145628 = state_145584__$1;(statearr_145606_145628[2] = inst_145574);
(statearr_145606_145628[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_145610 = (new Array(15));(statearr_145610[0] = state_machine__10214__auto__);
(statearr_145610[1] = 1);
return statearr_145610;
});
var state_machine__10214__auto____1 = (function (state_145584){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_145584);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e145611){if((e145611 instanceof Object))
{var ex__10217__auto__ = e145611;var statearr_145612_145629 = state_145584;(statearr_145612_145629[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e145611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__145630 = state_145584;
state_145584 = G__145630;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_145584){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_145584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_145613 = f__10284__auto__.call(null);(statearr_145613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___145614);
return statearr_145613;
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
