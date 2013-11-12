// Compiled by ClojureScript 0.0-2030
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t43642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43642 = (function (f,fn_handler,meta43643){
this.f = f;
this.fn_handler = fn_handler;
this.meta43643 = meta43643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43642.cljs$lang$type = true;
cljs.core.async.t43642.cljs$lang$ctorStr = "cljs.core.async/t43642";
cljs.core.async.t43642.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t43642");
});
cljs.core.async.t43642.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t43642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t43642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43644){var self__ = this;
var _43644__$1 = this;return self__.meta43643;
});
cljs.core.async.t43642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43644,meta43643__$1){var self__ = this;
var _43644__$1 = this;return (new cljs.core.async.t43642(self__.f,self__.fn_handler,meta43643__$1));
});
cljs.core.async.__GT_t43642 = (function __GT_t43642(f__$1,fn_handler__$1,meta43643){return (new cljs.core.async.t43642(f__$1,fn_handler__$1,meta43643));
});
}
return (new cljs.core.async.t43642(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__43646 = buff;if(G__43646)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__43646.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__43646.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__43646);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__43646);
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
{var val_43647 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_43647);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_43647);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7430__auto__ = ret;if(cljs.core.truth_(and__7430__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7430__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8228__auto___43648 = n;var x_43649 = 0;while(true){
if((x_43649 < n__8228__auto___43648))
{(a[x_43649] = 0);
{
var G__43650 = (x_43649 + 1);
x_43649 = G__43650;
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
var G__43651 = (i + 1);
i = G__43651;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t43655 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43655 = (function (flag,alt_flag,meta43656){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta43656 = meta43656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43655.cljs$lang$type = true;
cljs.core.async.t43655.cljs$lang$ctorStr = "cljs.core.async/t43655";
cljs.core.async.t43655.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t43655");
});
cljs.core.async.t43655.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t43655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t43655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43657){var self__ = this;
var _43657__$1 = this;return self__.meta43656;
});
cljs.core.async.t43655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43657,meta43656__$1){var self__ = this;
var _43657__$1 = this;return (new cljs.core.async.t43655(self__.flag,self__.alt_flag,meta43656__$1));
});
cljs.core.async.__GT_t43655 = (function __GT_t43655(flag__$1,alt_flag__$1,meta43656){return (new cljs.core.async.t43655(flag__$1,alt_flag__$1,meta43656));
});
}
return (new cljs.core.async.t43655(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t43661 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43661 = (function (cb,flag,alt_handler,meta43662){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta43662 = meta43662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43661.cljs$lang$type = true;
cljs.core.async.t43661.cljs$lang$ctorStr = "cljs.core.async/t43661";
cljs.core.async.t43661.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t43661");
});
cljs.core.async.t43661.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t43661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t43661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43663){var self__ = this;
var _43663__$1 = this;return self__.meta43662;
});
cljs.core.async.t43661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43663,meta43662__$1){var self__ = this;
var _43663__$1 = this;return (new cljs.core.async.t43661(self__.cb,self__.flag,self__.alt_handler,meta43662__$1));
});
cljs.core.async.__GT_t43661 = (function __GT_t43661(cb__$1,flag__$1,alt_handler__$1,meta43662){return (new cljs.core.async.t43661(cb__$1,flag__$1,alt_handler__$1,meta43662));
});
}
return (new cljs.core.async.t43661(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43664_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__43664_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__7439__auto__ = wport;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__43665 = (i + 1);
i = G__43665;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7439__auto__ = ret;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7430__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7430__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7430__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
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
var alts_BANG___delegate = function (ports,p__43666){var map__43668 = p__43666;var map__43668__$1 = ((cljs.core.seq_QMARK_.call(null,map__43668))?cljs.core.apply.call(null,cljs.core.hash_map,map__43668):map__43668);var opts = map__43668__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__43666 = null;if (arguments.length > 1) {
  p__43666 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__43666);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__43669){
var ports = cljs.core.first(arglist__43669);
var p__43666 = cljs.core.rest(arglist__43669);
return alts_BANG___delegate(ports,p__43666);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t43677 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43677 = (function (ch,f,map_LT_,meta43678){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta43678 = meta43678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43677.cljs$lang$type = true;
cljs.core.async.t43677.cljs$lang$ctorStr = "cljs.core.async/t43677";
cljs.core.async.t43677.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t43677");
});
cljs.core.async.t43677.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t43677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t43677.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t43677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t43680 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43680 = (function (fn1,_,meta43678,ch,f,map_LT_,meta43681){
this.fn1 = fn1;
this._ = _;
this.meta43678 = meta43678;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta43681 = meta43681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43680.cljs$lang$type = true;
cljs.core.async.t43680.cljs$lang$ctorStr = "cljs.core.async/t43680";
cljs.core.async.t43680.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t43680");
});
cljs.core.async.t43680.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t43680.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t43680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__43670_SHARP_){return f1.call(null,(((p1__43670_SHARP_ == null))?null:self__.f.call(null,p1__43670_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t43680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43682){var self__ = this;
var _43682__$1 = this;return self__.meta43681;
});
cljs.core.async.t43680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43682,meta43681__$1){var self__ = this;
var _43682__$1 = this;return (new cljs.core.async.t43680(self__.fn1,self__._,self__.meta43678,self__.ch,self__.f,self__.map_LT_,meta43681__$1));
});
cljs.core.async.__GT_t43680 = (function __GT_t43680(fn1__$1,___$2,meta43678__$1,ch__$2,f__$2,map_LT___$2,meta43681){return (new cljs.core.async.t43680(fn1__$1,___$2,meta43678__$1,ch__$2,f__$2,map_LT___$2,meta43681));
});
}
return (new cljs.core.async.t43680(fn1,___$1,self__.meta43678,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7430__auto__ = ret;if(cljs.core.truth_(and__7430__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7430__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t43677.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t43677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t43677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43679){var self__ = this;
var _43679__$1 = this;return self__.meta43678;
});
cljs.core.async.t43677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43679,meta43678__$1){var self__ = this;
var _43679__$1 = this;return (new cljs.core.async.t43677(self__.ch,self__.f,self__.map_LT_,meta43678__$1));
});
cljs.core.async.__GT_t43677 = (function __GT_t43677(ch__$1,f__$1,map_LT___$1,meta43678){return (new cljs.core.async.t43677(ch__$1,f__$1,map_LT___$1,meta43678));
});
}
return (new cljs.core.async.t43677(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t43686 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43686 = (function (ch,f,map_GT_,meta43687){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta43687 = meta43687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43686.cljs$lang$type = true;
cljs.core.async.t43686.cljs$lang$ctorStr = "cljs.core.async/t43686";
cljs.core.async.t43686.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t43686");
});
cljs.core.async.t43686.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t43686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t43686.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t43686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t43686.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t43686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t43686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43688){var self__ = this;
var _43688__$1 = this;return self__.meta43687;
});
cljs.core.async.t43686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43688,meta43687__$1){var self__ = this;
var _43688__$1 = this;return (new cljs.core.async.t43686(self__.ch,self__.f,self__.map_GT_,meta43687__$1));
});
cljs.core.async.__GT_t43686 = (function __GT_t43686(ch__$1,f__$1,map_GT___$1,meta43687){return (new cljs.core.async.t43686(ch__$1,f__$1,map_GT___$1,meta43687));
});
}
return (new cljs.core.async.t43686(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t43692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43692 = (function (ch,p,filter_GT_,meta43693){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta43693 = meta43693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43692.cljs$lang$type = true;
cljs.core.async.t43692.cljs$lang$ctorStr = "cljs.core.async/t43692";
cljs.core.async.t43692.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t43692");
});
cljs.core.async.t43692.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t43692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t43692.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t43692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t43692.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t43692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t43692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43694){var self__ = this;
var _43694__$1 = this;return self__.meta43693;
});
cljs.core.async.t43692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43694,meta43693__$1){var self__ = this;
var _43694__$1 = this;return (new cljs.core.async.t43692(self__.ch,self__.p,self__.filter_GT_,meta43693__$1));
});
cljs.core.async.__GT_t43692 = (function __GT_t43692(ch__$1,p__$1,filter_GT___$1,meta43693){return (new cljs.core.async.t43692(ch__$1,p__$1,filter_GT___$1,meta43693));
});
}
return (new cljs.core.async.t43692(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___43777 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_43756){var state_val_43757 = (state_43756[1]);if((state_val_43757 === 1))
{var state_43756__$1 = state_43756;var statearr_43758_43778 = state_43756__$1;(statearr_43758_43778[2] = null);
(statearr_43758_43778[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43757 === 2))
{var state_43756__$1 = state_43756;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43756__$1,4,ch);
} else
{if((state_val_43757 === 3))
{var inst_43754 = (state_43756[2]);var state_43756__$1 = state_43756;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43756__$1,inst_43754);
} else
{if((state_val_43757 === 4))
{var inst_43738 = (state_43756[7]);var inst_43738__$1 = (state_43756[2]);var inst_43739 = (inst_43738__$1 == null);var state_43756__$1 = (function (){var statearr_43759 = state_43756;(statearr_43759[7] = inst_43738__$1);
return statearr_43759;
})();if(cljs.core.truth_(inst_43739))
{var statearr_43760_43779 = state_43756__$1;(statearr_43760_43779[1] = 5);
} else
{var statearr_43761_43780 = state_43756__$1;(statearr_43761_43780[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43757 === 5))
{var inst_43741 = cljs.core.async.close_BANG_.call(null,out);var state_43756__$1 = state_43756;var statearr_43762_43781 = state_43756__$1;(statearr_43762_43781[2] = inst_43741);
(statearr_43762_43781[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43757 === 6))
{var inst_43738 = (state_43756[7]);var inst_43743 = p.call(null,inst_43738);var state_43756__$1 = state_43756;if(cljs.core.truth_(inst_43743))
{var statearr_43763_43782 = state_43756__$1;(statearr_43763_43782[1] = 8);
} else
{var statearr_43764_43783 = state_43756__$1;(statearr_43764_43783[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43757 === 7))
{var inst_43752 = (state_43756[2]);var state_43756__$1 = state_43756;var statearr_43765_43784 = state_43756__$1;(statearr_43765_43784[2] = inst_43752);
(statearr_43765_43784[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43757 === 8))
{var inst_43738 = (state_43756[7]);var state_43756__$1 = state_43756;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43756__$1,11,out,inst_43738);
} else
{if((state_val_43757 === 9))
{var state_43756__$1 = state_43756;var statearr_43766_43785 = state_43756__$1;(statearr_43766_43785[2] = null);
(statearr_43766_43785[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43757 === 10))
{var inst_43749 = (state_43756[2]);var state_43756__$1 = (function (){var statearr_43767 = state_43756;(statearr_43767[8] = inst_43749);
return statearr_43767;
})();var statearr_43768_43786 = state_43756__$1;(statearr_43768_43786[2] = null);
(statearr_43768_43786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43757 === 11))
{var inst_43746 = (state_43756[2]);var state_43756__$1 = state_43756;var statearr_43769_43787 = state_43756__$1;(statearr_43769_43787[2] = inst_43746);
(statearr_43769_43787[1] = 10);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_43773 = (new Array(9));(statearr_43773[0] = state_machine__11439__auto__);
(statearr_43773[1] = 1);
return statearr_43773;
});
var state_machine__11439__auto____1 = (function (state_43756){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_43756);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e43774){if((e43774 instanceof Object))
{var ex__11442__auto__ = e43774;var statearr_43775_43788 = state_43756;(statearr_43775_43788[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43756);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43789 = state_43756;
state_43756 = G__43789;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_43756){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_43756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_43776 = f__11509__auto__.call(null);(statearr_43776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___43777);
return statearr_43776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_43941){var state_val_43942 = (state_43941[1]);if((state_val_43942 === 1))
{var state_43941__$1 = state_43941;var statearr_43943_43980 = state_43941__$1;(statearr_43943_43980[2] = null);
(statearr_43943_43980[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 2))
{var state_43941__$1 = state_43941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43941__$1,4,in$);
} else
{if((state_val_43942 === 3))
{var inst_43939 = (state_43941[2]);var state_43941__$1 = state_43941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43941__$1,inst_43939);
} else
{if((state_val_43942 === 4))
{var inst_43887 = (state_43941[7]);var inst_43887__$1 = (state_43941[2]);var inst_43888 = (inst_43887__$1 == null);var state_43941__$1 = (function (){var statearr_43944 = state_43941;(statearr_43944[7] = inst_43887__$1);
return statearr_43944;
})();if(cljs.core.truth_(inst_43888))
{var statearr_43945_43981 = state_43941__$1;(statearr_43945_43981[1] = 5);
} else
{var statearr_43946_43982 = state_43941__$1;(statearr_43946_43982[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 5))
{var inst_43890 = cljs.core.async.close_BANG_.call(null,out);var state_43941__$1 = state_43941;var statearr_43947_43983 = state_43941__$1;(statearr_43947_43983[2] = inst_43890);
(statearr_43947_43983[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 6))
{var inst_43887 = (state_43941[7]);var inst_43892 = f.call(null,inst_43887);var inst_43897 = cljs.core.seq.call(null,inst_43892);var inst_43898 = inst_43897;var inst_43899 = null;var inst_43900 = 0;var inst_43901 = 0;var state_43941__$1 = (function (){var statearr_43948 = state_43941;(statearr_43948[8] = inst_43899);
(statearr_43948[9] = inst_43900);
(statearr_43948[10] = inst_43901);
(statearr_43948[11] = inst_43898);
return statearr_43948;
})();var statearr_43949_43984 = state_43941__$1;(statearr_43949_43984[2] = null);
(statearr_43949_43984[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 7))
{var inst_43937 = (state_43941[2]);var state_43941__$1 = state_43941;var statearr_43950_43985 = state_43941__$1;(statearr_43950_43985[2] = inst_43937);
(statearr_43950_43985[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 8))
{var inst_43900 = (state_43941[9]);var inst_43901 = (state_43941[10]);var inst_43903 = (inst_43901 < inst_43900);var inst_43904 = inst_43903;var state_43941__$1 = state_43941;if(cljs.core.truth_(inst_43904))
{var statearr_43951_43986 = state_43941__$1;(statearr_43951_43986[1] = 10);
} else
{var statearr_43952_43987 = state_43941__$1;(statearr_43952_43987[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 9))
{var inst_43934 = (state_43941[2]);var state_43941__$1 = (function (){var statearr_43953 = state_43941;(statearr_43953[12] = inst_43934);
return statearr_43953;
})();var statearr_43954_43988 = state_43941__$1;(statearr_43954_43988[2] = null);
(statearr_43954_43988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 10))
{var inst_43899 = (state_43941[8]);var inst_43901 = (state_43941[10]);var inst_43906 = cljs.core._nth.call(null,inst_43899,inst_43901);var state_43941__$1 = state_43941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43941__$1,13,out,inst_43906);
} else
{if((state_val_43942 === 11))
{var inst_43898 = (state_43941[11]);var inst_43912 = (state_43941[13]);var inst_43912__$1 = cljs.core.seq.call(null,inst_43898);var state_43941__$1 = (function (){var statearr_43958 = state_43941;(statearr_43958[13] = inst_43912__$1);
return statearr_43958;
})();if(inst_43912__$1)
{var statearr_43959_43989 = state_43941__$1;(statearr_43959_43989[1] = 14);
} else
{var statearr_43960_43990 = state_43941__$1;(statearr_43960_43990[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 12))
{var inst_43932 = (state_43941[2]);var state_43941__$1 = state_43941;var statearr_43961_43991 = state_43941__$1;(statearr_43961_43991[2] = inst_43932);
(statearr_43961_43991[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 13))
{var inst_43899 = (state_43941[8]);var inst_43900 = (state_43941[9]);var inst_43901 = (state_43941[10]);var inst_43898 = (state_43941[11]);var inst_43908 = (state_43941[2]);var inst_43909 = (inst_43901 + 1);var tmp43955 = inst_43899;var tmp43956 = inst_43900;var tmp43957 = inst_43898;var inst_43898__$1 = tmp43957;var inst_43899__$1 = tmp43955;var inst_43900__$1 = tmp43956;var inst_43901__$1 = inst_43909;var state_43941__$1 = (function (){var statearr_43962 = state_43941;(statearr_43962[8] = inst_43899__$1);
(statearr_43962[9] = inst_43900__$1);
(statearr_43962[10] = inst_43901__$1);
(statearr_43962[11] = inst_43898__$1);
(statearr_43962[14] = inst_43908);
return statearr_43962;
})();var statearr_43963_43992 = state_43941__$1;(statearr_43963_43992[2] = null);
(statearr_43963_43992[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 14))
{var inst_43912 = (state_43941[13]);var inst_43914 = cljs.core.chunked_seq_QMARK_.call(null,inst_43912);var state_43941__$1 = state_43941;if(inst_43914)
{var statearr_43964_43993 = state_43941__$1;(statearr_43964_43993[1] = 17);
} else
{var statearr_43965_43994 = state_43941__$1;(statearr_43965_43994[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 15))
{var state_43941__$1 = state_43941;var statearr_43966_43995 = state_43941__$1;(statearr_43966_43995[2] = null);
(statearr_43966_43995[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 16))
{var inst_43930 = (state_43941[2]);var state_43941__$1 = state_43941;var statearr_43967_43996 = state_43941__$1;(statearr_43967_43996[2] = inst_43930);
(statearr_43967_43996[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 17))
{var inst_43912 = (state_43941[13]);var inst_43916 = cljs.core.chunk_first.call(null,inst_43912);var inst_43917 = cljs.core.chunk_rest.call(null,inst_43912);var inst_43918 = cljs.core.count.call(null,inst_43916);var inst_43898 = inst_43917;var inst_43899 = inst_43916;var inst_43900 = inst_43918;var inst_43901 = 0;var state_43941__$1 = (function (){var statearr_43968 = state_43941;(statearr_43968[8] = inst_43899);
(statearr_43968[9] = inst_43900);
(statearr_43968[10] = inst_43901);
(statearr_43968[11] = inst_43898);
return statearr_43968;
})();var statearr_43969_43997 = state_43941__$1;(statearr_43969_43997[2] = null);
(statearr_43969_43997[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 18))
{var inst_43912 = (state_43941[13]);var inst_43921 = cljs.core.first.call(null,inst_43912);var state_43941__$1 = state_43941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43941__$1,20,out,inst_43921);
} else
{if((state_val_43942 === 19))
{var inst_43927 = (state_43941[2]);var state_43941__$1 = state_43941;var statearr_43970_43998 = state_43941__$1;(statearr_43970_43998[2] = inst_43927);
(statearr_43970_43998[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43942 === 20))
{var inst_43912 = (state_43941[13]);var inst_43923 = (state_43941[2]);var inst_43924 = cljs.core.next.call(null,inst_43912);var inst_43898 = inst_43924;var inst_43899 = null;var inst_43900 = 0;var inst_43901 = 0;var state_43941__$1 = (function (){var statearr_43971 = state_43941;(statearr_43971[15] = inst_43923);
(statearr_43971[8] = inst_43899);
(statearr_43971[9] = inst_43900);
(statearr_43971[10] = inst_43901);
(statearr_43971[11] = inst_43898);
return statearr_43971;
})();var statearr_43972_43999 = state_43941__$1;(statearr_43972_43999[2] = null);
(statearr_43972_43999[1] = 8);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_43976 = (new Array(16));(statearr_43976[0] = state_machine__11439__auto__);
(statearr_43976[1] = 1);
return statearr_43976;
});
var state_machine__11439__auto____1 = (function (state_43941){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_43941);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e43977){if((e43977 instanceof Object))
{var ex__11442__auto__ = e43977;var statearr_43978_44000 = state_43941;(statearr_43978_44000[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44001 = state_43941;
state_43941 = G__44001;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_43941){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_43941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_43979 = f__11509__auto__.call(null);(statearr_43979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_43979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11508__auto___44082 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_44061){var state_val_44062 = (state_44061[1]);if((state_val_44062 === 1))
{var state_44061__$1 = state_44061;var statearr_44063_44083 = state_44061__$1;(statearr_44063_44083[2] = null);
(statearr_44063_44083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44062 === 2))
{var state_44061__$1 = state_44061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44061__$1,4,from);
} else
{if((state_val_44062 === 3))
{var inst_44059 = (state_44061[2]);var state_44061__$1 = state_44061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44061__$1,inst_44059);
} else
{if((state_val_44062 === 4))
{var inst_44044 = (state_44061[7]);var inst_44044__$1 = (state_44061[2]);var inst_44045 = (inst_44044__$1 == null);var state_44061__$1 = (function (){var statearr_44064 = state_44061;(statearr_44064[7] = inst_44044__$1);
return statearr_44064;
})();if(cljs.core.truth_(inst_44045))
{var statearr_44065_44084 = state_44061__$1;(statearr_44065_44084[1] = 5);
} else
{var statearr_44066_44085 = state_44061__$1;(statearr_44066_44085[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44062 === 5))
{var state_44061__$1 = state_44061;if(cljs.core.truth_(close_QMARK_))
{var statearr_44067_44086 = state_44061__$1;(statearr_44067_44086[1] = 8);
} else
{var statearr_44068_44087 = state_44061__$1;(statearr_44068_44087[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44062 === 6))
{var inst_44044 = (state_44061[7]);var state_44061__$1 = state_44061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44061__$1,11,to,inst_44044);
} else
{if((state_val_44062 === 7))
{var inst_44057 = (state_44061[2]);var state_44061__$1 = state_44061;var statearr_44069_44088 = state_44061__$1;(statearr_44069_44088[2] = inst_44057);
(statearr_44069_44088[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44062 === 8))
{var inst_44048 = cljs.core.async.close_BANG_.call(null,to);var state_44061__$1 = state_44061;var statearr_44070_44089 = state_44061__$1;(statearr_44070_44089[2] = inst_44048);
(statearr_44070_44089[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44062 === 9))
{var state_44061__$1 = state_44061;var statearr_44071_44090 = state_44061__$1;(statearr_44071_44090[2] = null);
(statearr_44071_44090[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44062 === 10))
{var inst_44051 = (state_44061[2]);var state_44061__$1 = state_44061;var statearr_44072_44091 = state_44061__$1;(statearr_44072_44091[2] = inst_44051);
(statearr_44072_44091[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44062 === 11))
{var inst_44054 = (state_44061[2]);var state_44061__$1 = (function (){var statearr_44073 = state_44061;(statearr_44073[8] = inst_44054);
return statearr_44073;
})();var statearr_44074_44092 = state_44061__$1;(statearr_44074_44092[2] = null);
(statearr_44074_44092[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_44078 = (new Array(9));(statearr_44078[0] = state_machine__11439__auto__);
(statearr_44078[1] = 1);
return statearr_44078;
});
var state_machine__11439__auto____1 = (function (state_44061){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_44061);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e44079){if((e44079 instanceof Object))
{var ex__11442__auto__ = e44079;var statearr_44080_44093 = state_44061;(statearr_44080_44093[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44094 = state_44061;
state_44061 = G__44094;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_44061){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_44061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_44081 = f__11509__auto__.call(null);(statearr_44081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___44082);
return statearr_44081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11508__auto___44181 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_44159){var state_val_44160 = (state_44159[1]);if((state_val_44160 === 1))
{var state_44159__$1 = state_44159;var statearr_44161_44182 = state_44159__$1;(statearr_44161_44182[2] = null);
(statearr_44161_44182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44160 === 2))
{var state_44159__$1 = state_44159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44159__$1,4,ch);
} else
{if((state_val_44160 === 3))
{var inst_44157 = (state_44159[2]);var state_44159__$1 = state_44159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44159__$1,inst_44157);
} else
{if((state_val_44160 === 4))
{var inst_44140 = (state_44159[7]);var inst_44140__$1 = (state_44159[2]);var inst_44141 = (inst_44140__$1 == null);var state_44159__$1 = (function (){var statearr_44162 = state_44159;(statearr_44162[7] = inst_44140__$1);
return statearr_44162;
})();if(cljs.core.truth_(inst_44141))
{var statearr_44163_44183 = state_44159__$1;(statearr_44163_44183[1] = 5);
} else
{var statearr_44164_44184 = state_44159__$1;(statearr_44164_44184[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44160 === 5))
{var inst_44143 = cljs.core.async.close_BANG_.call(null,tc);var inst_44144 = cljs.core.async.close_BANG_.call(null,fc);var state_44159__$1 = (function (){var statearr_44165 = state_44159;(statearr_44165[8] = inst_44143);
return statearr_44165;
})();var statearr_44166_44185 = state_44159__$1;(statearr_44166_44185[2] = inst_44144);
(statearr_44166_44185[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44160 === 6))
{var inst_44140 = (state_44159[7]);var inst_44146 = p.call(null,inst_44140);var state_44159__$1 = state_44159;if(cljs.core.truth_(inst_44146))
{var statearr_44167_44186 = state_44159__$1;(statearr_44167_44186[1] = 9);
} else
{var statearr_44168_44187 = state_44159__$1;(statearr_44168_44187[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44160 === 7))
{var inst_44155 = (state_44159[2]);var state_44159__$1 = state_44159;var statearr_44169_44188 = state_44159__$1;(statearr_44169_44188[2] = inst_44155);
(statearr_44169_44188[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44160 === 8))
{var inst_44152 = (state_44159[2]);var state_44159__$1 = (function (){var statearr_44170 = state_44159;(statearr_44170[9] = inst_44152);
return statearr_44170;
})();var statearr_44171_44189 = state_44159__$1;(statearr_44171_44189[2] = null);
(statearr_44171_44189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44160 === 9))
{var state_44159__$1 = state_44159;var statearr_44172_44190 = state_44159__$1;(statearr_44172_44190[2] = tc);
(statearr_44172_44190[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44160 === 10))
{var state_44159__$1 = state_44159;var statearr_44173_44191 = state_44159__$1;(statearr_44173_44191[2] = fc);
(statearr_44173_44191[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44160 === 11))
{var inst_44140 = (state_44159[7]);var inst_44150 = (state_44159[2]);var state_44159__$1 = state_44159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44159__$1,8,inst_44150,inst_44140);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_44177 = (new Array(10));(statearr_44177[0] = state_machine__11439__auto__);
(statearr_44177[1] = 1);
return statearr_44177;
});
var state_machine__11439__auto____1 = (function (state_44159){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_44159);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e44178){if((e44178 instanceof Object))
{var ex__11442__auto__ = e44178;var statearr_44179_44192 = state_44159;(statearr_44179_44192[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44159);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44193 = state_44159;
state_44159 = G__44193;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_44159){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_44159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_44180 = f__11509__auto__.call(null);(statearr_44180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___44181);
return statearr_44180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_44240){var state_val_44241 = (state_44240[1]);if((state_val_44241 === 7))
{var inst_44236 = (state_44240[2]);var state_44240__$1 = state_44240;var statearr_44242_44258 = state_44240__$1;(statearr_44242_44258[2] = inst_44236);
(statearr_44242_44258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44241 === 6))
{var inst_44229 = (state_44240[7]);var inst_44226 = (state_44240[8]);var inst_44233 = f.call(null,inst_44226,inst_44229);var inst_44226__$1 = inst_44233;var state_44240__$1 = (function (){var statearr_44243 = state_44240;(statearr_44243[8] = inst_44226__$1);
return statearr_44243;
})();var statearr_44244_44259 = state_44240__$1;(statearr_44244_44259[2] = null);
(statearr_44244_44259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44241 === 5))
{var inst_44226 = (state_44240[8]);var state_44240__$1 = state_44240;var statearr_44245_44260 = state_44240__$1;(statearr_44245_44260[2] = inst_44226);
(statearr_44245_44260[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44241 === 4))
{var inst_44229 = (state_44240[7]);var inst_44229__$1 = (state_44240[2]);var inst_44230 = (inst_44229__$1 == null);var state_44240__$1 = (function (){var statearr_44246 = state_44240;(statearr_44246[7] = inst_44229__$1);
return statearr_44246;
})();if(cljs.core.truth_(inst_44230))
{var statearr_44247_44261 = state_44240__$1;(statearr_44247_44261[1] = 5);
} else
{var statearr_44248_44262 = state_44240__$1;(statearr_44248_44262[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44241 === 3))
{var inst_44238 = (state_44240[2]);var state_44240__$1 = state_44240;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44240__$1,inst_44238);
} else
{if((state_val_44241 === 2))
{var state_44240__$1 = state_44240;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44240__$1,4,ch);
} else
{if((state_val_44241 === 1))
{var inst_44226 = init;var state_44240__$1 = (function (){var statearr_44249 = state_44240;(statearr_44249[8] = inst_44226);
return statearr_44249;
})();var statearr_44250_44263 = state_44240__$1;(statearr_44250_44263[2] = null);
(statearr_44250_44263[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_44254 = (new Array(9));(statearr_44254[0] = state_machine__11439__auto__);
(statearr_44254[1] = 1);
return statearr_44254;
});
var state_machine__11439__auto____1 = (function (state_44240){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_44240);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e44255){if((e44255 instanceof Object))
{var ex__11442__auto__ = e44255;var statearr_44256_44264 = state_44240;(statearr_44256_44264[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44240);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44265 = state_44240;
state_44240 = G__44265;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_44240){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_44240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_44257 = f__11509__auto__.call(null);(statearr_44257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_44257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_44327){var state_val_44328 = (state_44327[1]);if((state_val_44328 === 1))
{var inst_44307 = cljs.core.seq.call(null,coll);var inst_44308 = inst_44307;var state_44327__$1 = (function (){var statearr_44329 = state_44327;(statearr_44329[7] = inst_44308);
return statearr_44329;
})();var statearr_44330_44348 = state_44327__$1;(statearr_44330_44348[2] = null);
(statearr_44330_44348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44328 === 2))
{var inst_44308 = (state_44327[7]);var state_44327__$1 = state_44327;if(cljs.core.truth_(inst_44308))
{var statearr_44331_44349 = state_44327__$1;(statearr_44331_44349[1] = 4);
} else
{var statearr_44332_44350 = state_44327__$1;(statearr_44332_44350[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44328 === 3))
{var inst_44325 = (state_44327[2]);var state_44327__$1 = state_44327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44327__$1,inst_44325);
} else
{if((state_val_44328 === 4))
{var inst_44308 = (state_44327[7]);var inst_44311 = cljs.core.first.call(null,inst_44308);var state_44327__$1 = state_44327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44327__$1,7,ch,inst_44311);
} else
{if((state_val_44328 === 5))
{var state_44327__$1 = state_44327;if(cljs.core.truth_(close_QMARK_))
{var statearr_44333_44351 = state_44327__$1;(statearr_44333_44351[1] = 8);
} else
{var statearr_44334_44352 = state_44327__$1;(statearr_44334_44352[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44328 === 6))
{var inst_44323 = (state_44327[2]);var state_44327__$1 = state_44327;var statearr_44335_44353 = state_44327__$1;(statearr_44335_44353[2] = inst_44323);
(statearr_44335_44353[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44328 === 7))
{var inst_44308 = (state_44327[7]);var inst_44313 = (state_44327[2]);var inst_44314 = cljs.core.next.call(null,inst_44308);var inst_44308__$1 = inst_44314;var state_44327__$1 = (function (){var statearr_44336 = state_44327;(statearr_44336[7] = inst_44308__$1);
(statearr_44336[8] = inst_44313);
return statearr_44336;
})();var statearr_44337_44354 = state_44327__$1;(statearr_44337_44354[2] = null);
(statearr_44337_44354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44328 === 8))
{var inst_44318 = cljs.core.async.close_BANG_.call(null,ch);var state_44327__$1 = state_44327;var statearr_44338_44355 = state_44327__$1;(statearr_44338_44355[2] = inst_44318);
(statearr_44338_44355[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44328 === 9))
{var state_44327__$1 = state_44327;var statearr_44339_44356 = state_44327__$1;(statearr_44339_44356[2] = null);
(statearr_44339_44356[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44328 === 10))
{var inst_44321 = (state_44327[2]);var state_44327__$1 = state_44327;var statearr_44340_44357 = state_44327__$1;(statearr_44340_44357[2] = inst_44321);
(statearr_44340_44357[1] = 6);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_44344 = (new Array(9));(statearr_44344[0] = state_machine__11439__auto__);
(statearr_44344[1] = 1);
return statearr_44344;
});
var state_machine__11439__auto____1 = (function (state_44327){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_44327);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e44345){if((e44345 instanceof Object))
{var ex__11442__auto__ = e44345;var statearr_44346_44358 = state_44327;(statearr_44346_44358[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44327);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44359 = state_44327;
state_44327 = G__44359;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_44327){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_44327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_44347 = f__11509__auto__.call(null);(statearr_44347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_44347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
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
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7430__auto__ = _;if(and__7430__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8035__auto__ = (((_ == null))?null:_);return (function (){var or__7439__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t44574 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44574 = (function (cs,ch,mult,meta44575){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta44575 = meta44575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44574.cljs$lang$type = true;
cljs.core.async.t44574.cljs$lang$ctorStr = "cljs.core.async/t44574";
cljs.core.async.t44574.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t44574");
});})(cs))
;
cljs.core.async.t44574.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t44574.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t44574.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t44574.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t44574.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t44574.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t44574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44576){var self__ = this;
var _44576__$1 = this;return self__.meta44575;
});})(cs))
;
cljs.core.async.t44574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44576,meta44575__$1){var self__ = this;
var _44576__$1 = this;return (new cljs.core.async.t44574(self__.cs,self__.ch,self__.mult,meta44575__$1));
});})(cs))
;
cljs.core.async.__GT_t44574 = ((function (cs){
return (function __GT_t44574(cs__$1,ch__$1,mult__$1,meta44575){return (new cljs.core.async.t44574(cs__$1,ch__$1,mult__$1,meta44575));
});})(cs))
;
}
return (new cljs.core.async.t44574(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11508__auto___44788 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_44706){var state_val_44707 = (state_44706[1]);if((state_val_44707 === 32))
{var inst_44655 = (state_44706[7]);var inst_44579 = (state_44706[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44706,31,Object,null,30);var inst_44662 = cljs.core.async.put_BANG_.call(null,inst_44655,inst_44579,done);var state_44706__$1 = state_44706;var statearr_44708_44789 = state_44706__$1;(statearr_44708_44789[2] = inst_44662);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44706__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 1))
{var state_44706__$1 = state_44706;var statearr_44709_44790 = state_44706__$1;(statearr_44709_44790[2] = null);
(statearr_44709_44790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 33))
{var inst_44668 = (state_44706[9]);var inst_44670 = cljs.core.chunked_seq_QMARK_.call(null,inst_44668);var state_44706__$1 = state_44706;if(inst_44670)
{var statearr_44710_44791 = state_44706__$1;(statearr_44710_44791[1] = 36);
} else
{var statearr_44711_44792 = state_44706__$1;(statearr_44711_44792[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 2))
{var state_44706__$1 = state_44706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44706__$1,4,ch);
} else
{if((state_val_44707 === 34))
{var state_44706__$1 = state_44706;var statearr_44712_44793 = state_44706__$1;(statearr_44712_44793[2] = null);
(statearr_44712_44793[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 3))
{var inst_44704 = (state_44706[2]);var state_44706__$1 = state_44706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44706__$1,inst_44704);
} else
{if((state_val_44707 === 35))
{var inst_44693 = (state_44706[2]);var state_44706__$1 = state_44706;var statearr_44713_44794 = state_44706__$1;(statearr_44713_44794[2] = inst_44693);
(statearr_44713_44794[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 4))
{var inst_44579 = (state_44706[8]);var inst_44579__$1 = (state_44706[2]);var inst_44580 = (inst_44579__$1 == null);var state_44706__$1 = (function (){var statearr_44714 = state_44706;(statearr_44714[8] = inst_44579__$1);
return statearr_44714;
})();if(cljs.core.truth_(inst_44580))
{var statearr_44715_44795 = state_44706__$1;(statearr_44715_44795[1] = 5);
} else
{var statearr_44716_44796 = state_44706__$1;(statearr_44716_44796[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 36))
{var inst_44668 = (state_44706[9]);var inst_44672 = cljs.core.chunk_first.call(null,inst_44668);var inst_44673 = cljs.core.chunk_rest.call(null,inst_44668);var inst_44674 = cljs.core.count.call(null,inst_44672);var inst_44647 = inst_44673;var inst_44648 = inst_44672;var inst_44649 = inst_44674;var inst_44650 = 0;var state_44706__$1 = (function (){var statearr_44717 = state_44706;(statearr_44717[10] = inst_44650);
(statearr_44717[11] = inst_44648);
(statearr_44717[12] = inst_44647);
(statearr_44717[13] = inst_44649);
return statearr_44717;
})();var statearr_44718_44797 = state_44706__$1;(statearr_44718_44797[2] = null);
(statearr_44718_44797[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 5))
{var inst_44586 = cljs.core.deref.call(null,cs);var inst_44587 = cljs.core.seq.call(null,inst_44586);var inst_44588 = inst_44587;var inst_44589 = null;var inst_44590 = 0;var inst_44591 = 0;var state_44706__$1 = (function (){var statearr_44719 = state_44706;(statearr_44719[14] = inst_44588);
(statearr_44719[15] = inst_44589);
(statearr_44719[16] = inst_44591);
(statearr_44719[17] = inst_44590);
return statearr_44719;
})();var statearr_44720_44798 = state_44706__$1;(statearr_44720_44798[2] = null);
(statearr_44720_44798[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 37))
{var inst_44668 = (state_44706[9]);var inst_44677 = cljs.core.first.call(null,inst_44668);var state_44706__$1 = (function (){var statearr_44721 = state_44706;(statearr_44721[18] = inst_44677);
return statearr_44721;
})();var statearr_44722_44799 = state_44706__$1;(statearr_44722_44799[2] = null);
(statearr_44722_44799[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 6))
{var inst_44638 = cljs.core.deref.call(null,cs);var inst_44639 = cljs.core.keys.call(null,inst_44638);var inst_44640 = cljs.core.count.call(null,inst_44639);var inst_44641 = cljs.core.reset_BANG_.call(null,dctr,inst_44640);var inst_44646 = cljs.core.seq.call(null,inst_44639);var inst_44647 = inst_44646;var inst_44648 = null;var inst_44649 = 0;var inst_44650 = 0;var state_44706__$1 = (function (){var statearr_44723 = state_44706;(statearr_44723[10] = inst_44650);
(statearr_44723[19] = inst_44641);
(statearr_44723[11] = inst_44648);
(statearr_44723[12] = inst_44647);
(statearr_44723[13] = inst_44649);
return statearr_44723;
})();var statearr_44724_44800 = state_44706__$1;(statearr_44724_44800[2] = null);
(statearr_44724_44800[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 38))
{var inst_44690 = (state_44706[2]);var state_44706__$1 = state_44706;var statearr_44725_44801 = state_44706__$1;(statearr_44725_44801[2] = inst_44690);
(statearr_44725_44801[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 7))
{var inst_44702 = (state_44706[2]);var state_44706__$1 = state_44706;var statearr_44726_44802 = state_44706__$1;(statearr_44726_44802[2] = inst_44702);
(statearr_44726_44802[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 39))
{var inst_44668 = (state_44706[9]);var inst_44686 = (state_44706[2]);var inst_44687 = cljs.core.next.call(null,inst_44668);var inst_44647 = inst_44687;var inst_44648 = null;var inst_44649 = 0;var inst_44650 = 0;var state_44706__$1 = (function (){var statearr_44727 = state_44706;(statearr_44727[10] = inst_44650);
(statearr_44727[20] = inst_44686);
(statearr_44727[11] = inst_44648);
(statearr_44727[12] = inst_44647);
(statearr_44727[13] = inst_44649);
return statearr_44727;
})();var statearr_44728_44803 = state_44706__$1;(statearr_44728_44803[2] = null);
(statearr_44728_44803[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 8))
{var inst_44591 = (state_44706[16]);var inst_44590 = (state_44706[17]);var inst_44593 = (inst_44591 < inst_44590);var inst_44594 = inst_44593;var state_44706__$1 = state_44706;if(cljs.core.truth_(inst_44594))
{var statearr_44729_44804 = state_44706__$1;(statearr_44729_44804[1] = 10);
} else
{var statearr_44730_44805 = state_44706__$1;(statearr_44730_44805[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 40))
{var inst_44677 = (state_44706[18]);var inst_44678 = (state_44706[2]);var inst_44679 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_44680 = cljs.core.async.untap_STAR_.call(null,m,inst_44677);var state_44706__$1 = (function (){var statearr_44731 = state_44706;(statearr_44731[21] = inst_44678);
(statearr_44731[22] = inst_44679);
return statearr_44731;
})();var statearr_44732_44806 = state_44706__$1;(statearr_44732_44806[2] = inst_44680);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44706__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 9))
{var inst_44636 = (state_44706[2]);var state_44706__$1 = state_44706;var statearr_44733_44807 = state_44706__$1;(statearr_44733_44807[2] = inst_44636);
(statearr_44733_44807[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 41))
{var inst_44677 = (state_44706[18]);var inst_44579 = (state_44706[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44706,40,Object,null,39);var inst_44684 = cljs.core.async.put_BANG_.call(null,inst_44677,inst_44579,done);var state_44706__$1 = state_44706;var statearr_44734_44808 = state_44706__$1;(statearr_44734_44808[2] = inst_44684);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44706__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 10))
{var inst_44589 = (state_44706[15]);var inst_44591 = (state_44706[16]);var inst_44597 = cljs.core._nth.call(null,inst_44589,inst_44591);var inst_44598 = cljs.core.nth.call(null,inst_44597,0,null);var inst_44599 = cljs.core.nth.call(null,inst_44597,1,null);var state_44706__$1 = (function (){var statearr_44735 = state_44706;(statearr_44735[23] = inst_44598);
return statearr_44735;
})();if(cljs.core.truth_(inst_44599))
{var statearr_44736_44809 = state_44706__$1;(statearr_44736_44809[1] = 13);
} else
{var statearr_44737_44810 = state_44706__$1;(statearr_44737_44810[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 42))
{var inst_44699 = (state_44706[2]);var state_44706__$1 = (function (){var statearr_44738 = state_44706;(statearr_44738[24] = inst_44699);
return statearr_44738;
})();var statearr_44739_44811 = state_44706__$1;(statearr_44739_44811[2] = null);
(statearr_44739_44811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 11))
{var inst_44588 = (state_44706[14]);var inst_44608 = (state_44706[25]);var inst_44608__$1 = cljs.core.seq.call(null,inst_44588);var state_44706__$1 = (function (){var statearr_44740 = state_44706;(statearr_44740[25] = inst_44608__$1);
return statearr_44740;
})();if(inst_44608__$1)
{var statearr_44741_44812 = state_44706__$1;(statearr_44741_44812[1] = 16);
} else
{var statearr_44742_44813 = state_44706__$1;(statearr_44742_44813[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 12))
{var inst_44634 = (state_44706[2]);var state_44706__$1 = state_44706;var statearr_44743_44814 = state_44706__$1;(statearr_44743_44814[2] = inst_44634);
(statearr_44743_44814[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 13))
{var inst_44598 = (state_44706[23]);var inst_44601 = cljs.core.async.close_BANG_.call(null,inst_44598);var state_44706__$1 = state_44706;var statearr_44747_44815 = state_44706__$1;(statearr_44747_44815[2] = inst_44601);
(statearr_44747_44815[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 14))
{var state_44706__$1 = state_44706;var statearr_44748_44816 = state_44706__$1;(statearr_44748_44816[2] = null);
(statearr_44748_44816[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 15))
{var inst_44588 = (state_44706[14]);var inst_44589 = (state_44706[15]);var inst_44591 = (state_44706[16]);var inst_44590 = (state_44706[17]);var inst_44604 = (state_44706[2]);var inst_44605 = (inst_44591 + 1);var tmp44744 = inst_44588;var tmp44745 = inst_44589;var tmp44746 = inst_44590;var inst_44588__$1 = tmp44744;var inst_44589__$1 = tmp44745;var inst_44590__$1 = tmp44746;var inst_44591__$1 = inst_44605;var state_44706__$1 = (function (){var statearr_44749 = state_44706;(statearr_44749[14] = inst_44588__$1);
(statearr_44749[15] = inst_44589__$1);
(statearr_44749[26] = inst_44604);
(statearr_44749[16] = inst_44591__$1);
(statearr_44749[17] = inst_44590__$1);
return statearr_44749;
})();var statearr_44750_44817 = state_44706__$1;(statearr_44750_44817[2] = null);
(statearr_44750_44817[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 16))
{var inst_44608 = (state_44706[25]);var inst_44610 = cljs.core.chunked_seq_QMARK_.call(null,inst_44608);var state_44706__$1 = state_44706;if(inst_44610)
{var statearr_44751_44818 = state_44706__$1;(statearr_44751_44818[1] = 19);
} else
{var statearr_44752_44819 = state_44706__$1;(statearr_44752_44819[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 17))
{var state_44706__$1 = state_44706;var statearr_44753_44820 = state_44706__$1;(statearr_44753_44820[2] = null);
(statearr_44753_44820[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 18))
{var inst_44632 = (state_44706[2]);var state_44706__$1 = state_44706;var statearr_44754_44821 = state_44706__$1;(statearr_44754_44821[2] = inst_44632);
(statearr_44754_44821[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 19))
{var inst_44608 = (state_44706[25]);var inst_44612 = cljs.core.chunk_first.call(null,inst_44608);var inst_44613 = cljs.core.chunk_rest.call(null,inst_44608);var inst_44614 = cljs.core.count.call(null,inst_44612);var inst_44588 = inst_44613;var inst_44589 = inst_44612;var inst_44590 = inst_44614;var inst_44591 = 0;var state_44706__$1 = (function (){var statearr_44755 = state_44706;(statearr_44755[14] = inst_44588);
(statearr_44755[15] = inst_44589);
(statearr_44755[16] = inst_44591);
(statearr_44755[17] = inst_44590);
return statearr_44755;
})();var statearr_44756_44822 = state_44706__$1;(statearr_44756_44822[2] = null);
(statearr_44756_44822[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 20))
{var inst_44608 = (state_44706[25]);var inst_44618 = cljs.core.first.call(null,inst_44608);var inst_44619 = cljs.core.nth.call(null,inst_44618,0,null);var inst_44620 = cljs.core.nth.call(null,inst_44618,1,null);var state_44706__$1 = (function (){var statearr_44757 = state_44706;(statearr_44757[27] = inst_44619);
return statearr_44757;
})();if(cljs.core.truth_(inst_44620))
{var statearr_44758_44823 = state_44706__$1;(statearr_44758_44823[1] = 22);
} else
{var statearr_44759_44824 = state_44706__$1;(statearr_44759_44824[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 21))
{var inst_44629 = (state_44706[2]);var state_44706__$1 = state_44706;var statearr_44760_44825 = state_44706__$1;(statearr_44760_44825[2] = inst_44629);
(statearr_44760_44825[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 22))
{var inst_44619 = (state_44706[27]);var inst_44622 = cljs.core.async.close_BANG_.call(null,inst_44619);var state_44706__$1 = state_44706;var statearr_44761_44826 = state_44706__$1;(statearr_44761_44826[2] = inst_44622);
(statearr_44761_44826[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 23))
{var state_44706__$1 = state_44706;var statearr_44762_44827 = state_44706__$1;(statearr_44762_44827[2] = null);
(statearr_44762_44827[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 24))
{var inst_44608 = (state_44706[25]);var inst_44625 = (state_44706[2]);var inst_44626 = cljs.core.next.call(null,inst_44608);var inst_44588 = inst_44626;var inst_44589 = null;var inst_44590 = 0;var inst_44591 = 0;var state_44706__$1 = (function (){var statearr_44763 = state_44706;(statearr_44763[28] = inst_44625);
(statearr_44763[14] = inst_44588);
(statearr_44763[15] = inst_44589);
(statearr_44763[16] = inst_44591);
(statearr_44763[17] = inst_44590);
return statearr_44763;
})();var statearr_44764_44828 = state_44706__$1;(statearr_44764_44828[2] = null);
(statearr_44764_44828[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 25))
{var inst_44650 = (state_44706[10]);var inst_44649 = (state_44706[13]);var inst_44652 = (inst_44650 < inst_44649);var inst_44653 = inst_44652;var state_44706__$1 = state_44706;if(cljs.core.truth_(inst_44653))
{var statearr_44765_44829 = state_44706__$1;(statearr_44765_44829[1] = 27);
} else
{var statearr_44766_44830 = state_44706__$1;(statearr_44766_44830[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 26))
{var inst_44697 = (state_44706[2]);var state_44706__$1 = (function (){var statearr_44767 = state_44706;(statearr_44767[29] = inst_44697);
return statearr_44767;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44706__$1,42,dchan);
} else
{if((state_val_44707 === 27))
{var inst_44650 = (state_44706[10]);var inst_44648 = (state_44706[11]);var inst_44655 = cljs.core._nth.call(null,inst_44648,inst_44650);var state_44706__$1 = (function (){var statearr_44768 = state_44706;(statearr_44768[7] = inst_44655);
return statearr_44768;
})();var statearr_44769_44831 = state_44706__$1;(statearr_44769_44831[2] = null);
(statearr_44769_44831[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 28))
{var inst_44668 = (state_44706[9]);var inst_44647 = (state_44706[12]);var inst_44668__$1 = cljs.core.seq.call(null,inst_44647);var state_44706__$1 = (function (){var statearr_44773 = state_44706;(statearr_44773[9] = inst_44668__$1);
return statearr_44773;
})();if(inst_44668__$1)
{var statearr_44774_44832 = state_44706__$1;(statearr_44774_44832[1] = 33);
} else
{var statearr_44775_44833 = state_44706__$1;(statearr_44775_44833[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 29))
{var inst_44695 = (state_44706[2]);var state_44706__$1 = state_44706;var statearr_44776_44834 = state_44706__$1;(statearr_44776_44834[2] = inst_44695);
(statearr_44776_44834[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 30))
{var inst_44650 = (state_44706[10]);var inst_44648 = (state_44706[11]);var inst_44647 = (state_44706[12]);var inst_44649 = (state_44706[13]);var inst_44664 = (state_44706[2]);var inst_44665 = (inst_44650 + 1);var tmp44770 = inst_44648;var tmp44771 = inst_44647;var tmp44772 = inst_44649;var inst_44647__$1 = tmp44771;var inst_44648__$1 = tmp44770;var inst_44649__$1 = tmp44772;var inst_44650__$1 = inst_44665;var state_44706__$1 = (function (){var statearr_44777 = state_44706;(statearr_44777[10] = inst_44650__$1);
(statearr_44777[11] = inst_44648__$1);
(statearr_44777[12] = inst_44647__$1);
(statearr_44777[13] = inst_44649__$1);
(statearr_44777[30] = inst_44664);
return statearr_44777;
})();var statearr_44778_44835 = state_44706__$1;(statearr_44778_44835[2] = null);
(statearr_44778_44835[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 31))
{var inst_44655 = (state_44706[7]);var inst_44656 = (state_44706[2]);var inst_44657 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_44658 = cljs.core.async.untap_STAR_.call(null,m,inst_44655);var state_44706__$1 = (function (){var statearr_44779 = state_44706;(statearr_44779[31] = inst_44656);
(statearr_44779[32] = inst_44657);
return statearr_44779;
})();var statearr_44780_44836 = state_44706__$1;(statearr_44780_44836[2] = inst_44658);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44706__$1);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_44784 = (new Array(33));(statearr_44784[0] = state_machine__11439__auto__);
(statearr_44784[1] = 1);
return statearr_44784;
});
var state_machine__11439__auto____1 = (function (state_44706){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_44706);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e44785){if((e44785 instanceof Object))
{var ex__11442__auto__ = e44785;var statearr_44786_44837 = state_44706;(statearr_44786_44837[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44706);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44838 = state_44706;
state_44706 = G__44838;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_44706){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_44706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_44787 = f__11509__auto__.call(null);(statearr_44787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___44788);
return statearr_44787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t44948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44948 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta44949){
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
this.meta44949 = meta44949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44948.cljs$lang$type = true;
cljs.core.async.t44948.cljs$lang$ctorStr = "cljs.core.async/t44948";
cljs.core.async.t44948.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t44948");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44948.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t44948.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44948.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44948.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44948.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44948.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44948.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t44948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44950){var self__ = this;
var _44950__$1 = this;return self__.meta44949;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44950,meta44949__$1){var self__ = this;
var _44950__$1 = this;return (new cljs.core.async.t44948(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta44949__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t44948 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t44948(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta44949){return (new cljs.core.async.t44948(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta44949));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t44948(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__11508__auto___45057 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_45015){var state_val_45016 = (state_45015[1]);if((state_val_45016 === 1))
{var inst_44954 = (state_45015[7]);var inst_44954__$1 = calc_state.call(null);var inst_44955 = cljs.core.seq_QMARK_.call(null,inst_44954__$1);var state_45015__$1 = (function (){var statearr_45017 = state_45015;(statearr_45017[7] = inst_44954__$1);
return statearr_45017;
})();if(inst_44955)
{var statearr_45018_45058 = state_45015__$1;(statearr_45018_45058[1] = 2);
} else
{var statearr_45019_45059 = state_45015__$1;(statearr_45019_45059[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 2))
{var inst_44954 = (state_45015[7]);var inst_44957 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44954);var state_45015__$1 = state_45015;var statearr_45020_45060 = state_45015__$1;(statearr_45020_45060[2] = inst_44957);
(statearr_45020_45060[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 3))
{var inst_44954 = (state_45015[7]);var state_45015__$1 = state_45015;var statearr_45021_45061 = state_45015__$1;(statearr_45021_45061[2] = inst_44954);
(statearr_45021_45061[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 4))
{var inst_44954 = (state_45015[7]);var inst_44960 = (state_45015[2]);var inst_44961 = cljs.core.get.call(null,inst_44960,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_44962 = cljs.core.get.call(null,inst_44960,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_44963 = cljs.core.get.call(null,inst_44960,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_44964 = inst_44954;var state_45015__$1 = (function (){var statearr_45022 = state_45015;(statearr_45022[8] = inst_44962);
(statearr_45022[9] = inst_44963);
(statearr_45022[10] = inst_44964);
(statearr_45022[11] = inst_44961);
return statearr_45022;
})();var statearr_45023_45062 = state_45015__$1;(statearr_45023_45062[2] = null);
(statearr_45023_45062[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 5))
{var inst_44964 = (state_45015[10]);var inst_44967 = cljs.core.seq_QMARK_.call(null,inst_44964);var state_45015__$1 = state_45015;if(inst_44967)
{var statearr_45024_45063 = state_45015__$1;(statearr_45024_45063[1] = 7);
} else
{var statearr_45025_45064 = state_45015__$1;(statearr_45025_45064[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 6))
{var inst_45013 = (state_45015[2]);var state_45015__$1 = state_45015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45015__$1,inst_45013);
} else
{if((state_val_45016 === 7))
{var inst_44964 = (state_45015[10]);var inst_44969 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44964);var state_45015__$1 = state_45015;var statearr_45026_45065 = state_45015__$1;(statearr_45026_45065[2] = inst_44969);
(statearr_45026_45065[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 8))
{var inst_44964 = (state_45015[10]);var state_45015__$1 = state_45015;var statearr_45027_45066 = state_45015__$1;(statearr_45027_45066[2] = inst_44964);
(statearr_45027_45066[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 9))
{var inst_44972 = (state_45015[12]);var inst_44972__$1 = (state_45015[2]);var inst_44973 = cljs.core.get.call(null,inst_44972__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_44974 = cljs.core.get.call(null,inst_44972__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_44975 = cljs.core.get.call(null,inst_44972__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_45015__$1 = (function (){var statearr_45028 = state_45015;(statearr_45028[12] = inst_44972__$1);
(statearr_45028[13] = inst_44974);
(statearr_45028[14] = inst_44975);
return statearr_45028;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_45015__$1,10,inst_44973);
} else
{if((state_val_45016 === 10))
{var inst_44979 = (state_45015[15]);var inst_44980 = (state_45015[16]);var inst_44978 = (state_45015[2]);var inst_44979__$1 = cljs.core.nth.call(null,inst_44978,0,null);var inst_44980__$1 = cljs.core.nth.call(null,inst_44978,1,null);var inst_44981 = (inst_44979__$1 == null);var inst_44982 = cljs.core._EQ_.call(null,inst_44980__$1,change);var inst_44983 = (inst_44981) || (inst_44982);var state_45015__$1 = (function (){var statearr_45029 = state_45015;(statearr_45029[15] = inst_44979__$1);
(statearr_45029[16] = inst_44980__$1);
return statearr_45029;
})();if(cljs.core.truth_(inst_44983))
{var statearr_45030_45067 = state_45015__$1;(statearr_45030_45067[1] = 11);
} else
{var statearr_45031_45068 = state_45015__$1;(statearr_45031_45068[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 11))
{var inst_44979 = (state_45015[15]);var inst_44985 = (inst_44979 == null);var state_45015__$1 = state_45015;if(cljs.core.truth_(inst_44985))
{var statearr_45032_45069 = state_45015__$1;(statearr_45032_45069[1] = 14);
} else
{var statearr_45033_45070 = state_45015__$1;(statearr_45033_45070[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 12))
{var inst_44994 = (state_45015[17]);var inst_44975 = (state_45015[14]);var inst_44980 = (state_45015[16]);var inst_44994__$1 = inst_44975.call(null,inst_44980);var state_45015__$1 = (function (){var statearr_45034 = state_45015;(statearr_45034[17] = inst_44994__$1);
return statearr_45034;
})();if(cljs.core.truth_(inst_44994__$1))
{var statearr_45035_45071 = state_45015__$1;(statearr_45035_45071[1] = 17);
} else
{var statearr_45036_45072 = state_45015__$1;(statearr_45036_45072[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 13))
{var inst_45011 = (state_45015[2]);var state_45015__$1 = state_45015;var statearr_45037_45073 = state_45015__$1;(statearr_45037_45073[2] = inst_45011);
(statearr_45037_45073[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 14))
{var inst_44980 = (state_45015[16]);var inst_44987 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44980);var state_45015__$1 = state_45015;var statearr_45038_45074 = state_45015__$1;(statearr_45038_45074[2] = inst_44987);
(statearr_45038_45074[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 15))
{var state_45015__$1 = state_45015;var statearr_45039_45075 = state_45015__$1;(statearr_45039_45075[2] = null);
(statearr_45039_45075[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 16))
{var inst_44990 = (state_45015[2]);var inst_44991 = calc_state.call(null);var inst_44964 = inst_44991;var state_45015__$1 = (function (){var statearr_45040 = state_45015;(statearr_45040[10] = inst_44964);
(statearr_45040[18] = inst_44990);
return statearr_45040;
})();var statearr_45041_45076 = state_45015__$1;(statearr_45041_45076[2] = null);
(statearr_45041_45076[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 17))
{var inst_44994 = (state_45015[17]);var state_45015__$1 = state_45015;var statearr_45042_45077 = state_45015__$1;(statearr_45042_45077[2] = inst_44994);
(statearr_45042_45077[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 18))
{var inst_44974 = (state_45015[13]);var inst_44975 = (state_45015[14]);var inst_44980 = (state_45015[16]);var inst_44997 = cljs.core.empty_QMARK_.call(null,inst_44975);var inst_44998 = inst_44974.call(null,inst_44980);var inst_44999 = cljs.core.not.call(null,inst_44998);var inst_45000 = (inst_44997) && (inst_44999);var state_45015__$1 = state_45015;var statearr_45043_45078 = state_45015__$1;(statearr_45043_45078[2] = inst_45000);
(statearr_45043_45078[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 19))
{var inst_45002 = (state_45015[2]);var state_45015__$1 = state_45015;if(cljs.core.truth_(inst_45002))
{var statearr_45044_45079 = state_45015__$1;(statearr_45044_45079[1] = 20);
} else
{var statearr_45045_45080 = state_45015__$1;(statearr_45045_45080[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 20))
{var inst_44979 = (state_45015[15]);var state_45015__$1 = state_45015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45015__$1,23,out,inst_44979);
} else
{if((state_val_45016 === 21))
{var state_45015__$1 = state_45015;var statearr_45046_45081 = state_45015__$1;(statearr_45046_45081[2] = null);
(statearr_45046_45081[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 22))
{var inst_44972 = (state_45015[12]);var inst_45008 = (state_45015[2]);var inst_44964 = inst_44972;var state_45015__$1 = (function (){var statearr_45047 = state_45015;(statearr_45047[10] = inst_44964);
(statearr_45047[19] = inst_45008);
return statearr_45047;
})();var statearr_45048_45082 = state_45015__$1;(statearr_45048_45082[2] = null);
(statearr_45048_45082[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45016 === 23))
{var inst_45005 = (state_45015[2]);var state_45015__$1 = state_45015;var statearr_45049_45083 = state_45015__$1;(statearr_45049_45083[2] = inst_45005);
(statearr_45049_45083[1] = 22);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_45053 = (new Array(20));(statearr_45053[0] = state_machine__11439__auto__);
(statearr_45053[1] = 1);
return statearr_45053;
});
var state_machine__11439__auto____1 = (function (state_45015){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_45015);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e45054){if((e45054 instanceof Object))
{var ex__11442__auto__ = e45054;var statearr_45055_45084 = state_45015;(statearr_45055_45084[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45085 = state_45015;
state_45015 = G__45085;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_45015){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_45015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_45056 = f__11509__auto__.call(null);(statearr_45056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___45057);
return statearr_45056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
return (function (topic){var or__7439__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7439__auto__,mults){
return (function (p1__45086_SHARP_){if(cljs.core.truth_(p1__45086_SHARP_.call(null,topic)))
{return p1__45086_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__45086_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7439__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t45211 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t45211 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta45212){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta45212 = meta45212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45211.cljs$lang$type = true;
cljs.core.async.t45211.cljs$lang$ctorStr = "cljs.core.async/t45211";
cljs.core.async.t45211.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t45211");
});})(mults,ensure_mult))
;
cljs.core.async.t45211.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t45211.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t45211.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t45211.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t45211.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t45211.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t45211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t45211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45213){var self__ = this;
var _45213__$1 = this;return self__.meta45212;
});})(mults,ensure_mult))
;
cljs.core.async.t45211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45213,meta45212__$1){var self__ = this;
var _45213__$1 = this;return (new cljs.core.async.t45211(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta45212__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t45211 = ((function (mults,ensure_mult){
return (function __GT_t45211(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta45212){return (new cljs.core.async.t45211(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta45212));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t45211(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11508__auto___45335 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_45287){var state_val_45288 = (state_45287[1]);if((state_val_45288 === 1))
{var state_45287__$1 = state_45287;var statearr_45289_45336 = state_45287__$1;(statearr_45289_45336[2] = null);
(statearr_45289_45336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 2))
{var state_45287__$1 = state_45287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45287__$1,4,ch);
} else
{if((state_val_45288 === 3))
{var inst_45285 = (state_45287[2]);var state_45287__$1 = state_45287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45287__$1,inst_45285);
} else
{if((state_val_45288 === 4))
{var inst_45216 = (state_45287[7]);var inst_45216__$1 = (state_45287[2]);var inst_45217 = (inst_45216__$1 == null);var state_45287__$1 = (function (){var statearr_45290 = state_45287;(statearr_45290[7] = inst_45216__$1);
return statearr_45290;
})();if(cljs.core.truth_(inst_45217))
{var statearr_45291_45337 = state_45287__$1;(statearr_45291_45337[1] = 5);
} else
{var statearr_45292_45338 = state_45287__$1;(statearr_45292_45338[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 5))
{var inst_45223 = cljs.core.deref.call(null,mults);var inst_45224 = cljs.core.vals.call(null,inst_45223);var inst_45225 = cljs.core.seq.call(null,inst_45224);var inst_45226 = inst_45225;var inst_45227 = null;var inst_45228 = 0;var inst_45229 = 0;var state_45287__$1 = (function (){var statearr_45293 = state_45287;(statearr_45293[8] = inst_45226);
(statearr_45293[9] = inst_45227);
(statearr_45293[10] = inst_45228);
(statearr_45293[11] = inst_45229);
return statearr_45293;
})();var statearr_45294_45339 = state_45287__$1;(statearr_45294_45339[2] = null);
(statearr_45294_45339[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 6))
{var inst_45216 = (state_45287[7]);var inst_45266 = (state_45287[12]);var inst_45264 = (state_45287[13]);var inst_45264__$1 = topic_fn.call(null,inst_45216);var inst_45265 = cljs.core.deref.call(null,mults);var inst_45266__$1 = cljs.core.get.call(null,inst_45265,inst_45264__$1);var state_45287__$1 = (function (){var statearr_45295 = state_45287;(statearr_45295[12] = inst_45266__$1);
(statearr_45295[13] = inst_45264__$1);
return statearr_45295;
})();if(cljs.core.truth_(inst_45266__$1))
{var statearr_45296_45340 = state_45287__$1;(statearr_45296_45340[1] = 19);
} else
{var statearr_45297_45341 = state_45287__$1;(statearr_45297_45341[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 7))
{var inst_45283 = (state_45287[2]);var state_45287__$1 = state_45287;var statearr_45298_45342 = state_45287__$1;(statearr_45298_45342[2] = inst_45283);
(statearr_45298_45342[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 8))
{var inst_45228 = (state_45287[10]);var inst_45229 = (state_45287[11]);var inst_45231 = (inst_45229 < inst_45228);var inst_45232 = inst_45231;var state_45287__$1 = state_45287;if(cljs.core.truth_(inst_45232))
{var statearr_45302_45343 = state_45287__$1;(statearr_45302_45343[1] = 10);
} else
{var statearr_45303_45344 = state_45287__$1;(statearr_45303_45344[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 9))
{var inst_45262 = (state_45287[2]);var state_45287__$1 = state_45287;var statearr_45304_45345 = state_45287__$1;(statearr_45304_45345[2] = inst_45262);
(statearr_45304_45345[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 10))
{var inst_45226 = (state_45287[8]);var inst_45227 = (state_45287[9]);var inst_45228 = (state_45287[10]);var inst_45229 = (state_45287[11]);var inst_45234 = cljs.core._nth.call(null,inst_45227,inst_45229);var inst_45235 = cljs.core.async.muxch_STAR_.call(null,inst_45234);var inst_45236 = cljs.core.async.close_BANG_.call(null,inst_45235);var inst_45237 = (inst_45229 + 1);var tmp45299 = inst_45226;var tmp45300 = inst_45227;var tmp45301 = inst_45228;var inst_45226__$1 = tmp45299;var inst_45227__$1 = tmp45300;var inst_45228__$1 = tmp45301;var inst_45229__$1 = inst_45237;var state_45287__$1 = (function (){var statearr_45305 = state_45287;(statearr_45305[14] = inst_45236);
(statearr_45305[8] = inst_45226__$1);
(statearr_45305[9] = inst_45227__$1);
(statearr_45305[10] = inst_45228__$1);
(statearr_45305[11] = inst_45229__$1);
return statearr_45305;
})();var statearr_45306_45346 = state_45287__$1;(statearr_45306_45346[2] = null);
(statearr_45306_45346[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 11))
{var inst_45240 = (state_45287[15]);var inst_45226 = (state_45287[8]);var inst_45240__$1 = cljs.core.seq.call(null,inst_45226);var state_45287__$1 = (function (){var statearr_45307 = state_45287;(statearr_45307[15] = inst_45240__$1);
return statearr_45307;
})();if(inst_45240__$1)
{var statearr_45308_45347 = state_45287__$1;(statearr_45308_45347[1] = 13);
} else
{var statearr_45309_45348 = state_45287__$1;(statearr_45309_45348[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 12))
{var inst_45260 = (state_45287[2]);var state_45287__$1 = state_45287;var statearr_45310_45349 = state_45287__$1;(statearr_45310_45349[2] = inst_45260);
(statearr_45310_45349[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 13))
{var inst_45240 = (state_45287[15]);var inst_45242 = cljs.core.chunked_seq_QMARK_.call(null,inst_45240);var state_45287__$1 = state_45287;if(inst_45242)
{var statearr_45311_45350 = state_45287__$1;(statearr_45311_45350[1] = 16);
} else
{var statearr_45312_45351 = state_45287__$1;(statearr_45312_45351[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 14))
{var state_45287__$1 = state_45287;var statearr_45313_45352 = state_45287__$1;(statearr_45313_45352[2] = null);
(statearr_45313_45352[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 15))
{var inst_45258 = (state_45287[2]);var state_45287__$1 = state_45287;var statearr_45314_45353 = state_45287__$1;(statearr_45314_45353[2] = inst_45258);
(statearr_45314_45353[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 16))
{var inst_45240 = (state_45287[15]);var inst_45244 = cljs.core.chunk_first.call(null,inst_45240);var inst_45245 = cljs.core.chunk_rest.call(null,inst_45240);var inst_45246 = cljs.core.count.call(null,inst_45244);var inst_45226 = inst_45245;var inst_45227 = inst_45244;var inst_45228 = inst_45246;var inst_45229 = 0;var state_45287__$1 = (function (){var statearr_45315 = state_45287;(statearr_45315[8] = inst_45226);
(statearr_45315[9] = inst_45227);
(statearr_45315[10] = inst_45228);
(statearr_45315[11] = inst_45229);
return statearr_45315;
})();var statearr_45316_45354 = state_45287__$1;(statearr_45316_45354[2] = null);
(statearr_45316_45354[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 17))
{var inst_45240 = (state_45287[15]);var inst_45249 = cljs.core.first.call(null,inst_45240);var inst_45250 = cljs.core.async.muxch_STAR_.call(null,inst_45249);var inst_45251 = cljs.core.async.close_BANG_.call(null,inst_45250);var inst_45252 = cljs.core.next.call(null,inst_45240);var inst_45226 = inst_45252;var inst_45227 = null;var inst_45228 = 0;var inst_45229 = 0;var state_45287__$1 = (function (){var statearr_45317 = state_45287;(statearr_45317[16] = inst_45251);
(statearr_45317[8] = inst_45226);
(statearr_45317[9] = inst_45227);
(statearr_45317[10] = inst_45228);
(statearr_45317[11] = inst_45229);
return statearr_45317;
})();var statearr_45318_45355 = state_45287__$1;(statearr_45318_45355[2] = null);
(statearr_45318_45355[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 18))
{var inst_45255 = (state_45287[2]);var state_45287__$1 = state_45287;var statearr_45319_45356 = state_45287__$1;(statearr_45319_45356[2] = inst_45255);
(statearr_45319_45356[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 19))
{var state_45287__$1 = state_45287;var statearr_45320_45357 = state_45287__$1;(statearr_45320_45357[2] = null);
(statearr_45320_45357[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 20))
{var state_45287__$1 = state_45287;var statearr_45321_45358 = state_45287__$1;(statearr_45321_45358[2] = null);
(statearr_45321_45358[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 21))
{var inst_45280 = (state_45287[2]);var state_45287__$1 = (function (){var statearr_45322 = state_45287;(statearr_45322[17] = inst_45280);
return statearr_45322;
})();var statearr_45323_45359 = state_45287__$1;(statearr_45323_45359[2] = null);
(statearr_45323_45359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 22))
{var inst_45277 = (state_45287[2]);var state_45287__$1 = state_45287;var statearr_45324_45360 = state_45287__$1;(statearr_45324_45360[2] = inst_45277);
(statearr_45324_45360[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 23))
{var inst_45264 = (state_45287[13]);var inst_45268 = (state_45287[2]);var inst_45269 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45264);var state_45287__$1 = (function (){var statearr_45325 = state_45287;(statearr_45325[18] = inst_45268);
return statearr_45325;
})();var statearr_45326_45361 = state_45287__$1;(statearr_45326_45361[2] = inst_45269);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45287__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45288 === 24))
{var inst_45216 = (state_45287[7]);var inst_45266 = (state_45287[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45287,23,Object,null,22);var inst_45273 = cljs.core.async.muxch_STAR_.call(null,inst_45266);var state_45287__$1 = state_45287;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45287__$1,25,inst_45273,inst_45216);
} else
{if((state_val_45288 === 25))
{var inst_45275 = (state_45287[2]);var state_45287__$1 = state_45287;var statearr_45327_45362 = state_45287__$1;(statearr_45327_45362[2] = inst_45275);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45287__$1);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_45331 = (new Array(19));(statearr_45331[0] = state_machine__11439__auto__);
(statearr_45331[1] = 1);
return statearr_45331;
});
var state_machine__11439__auto____1 = (function (state_45287){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_45287);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e45332){if((e45332 instanceof Object))
{var ex__11442__auto__ = e45332;var statearr_45333_45363 = state_45287;(statearr_45333_45363[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45287);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45364 = state_45287;
state_45287 = G__45364;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_45287){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_45287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_45334 = f__11509__auto__.call(null);(statearr_45334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___45335);
return statearr_45334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
,cljs.core.range.call(null,cnt));var c__11508__auto___45501 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_45471){var state_val_45472 = (state_45471[1]);if((state_val_45472 === 1))
{var state_45471__$1 = state_45471;var statearr_45473_45502 = state_45471__$1;(statearr_45473_45502[2] = null);
(statearr_45473_45502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 2))
{var inst_45434 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_45435 = 0;var state_45471__$1 = (function (){var statearr_45474 = state_45471;(statearr_45474[7] = inst_45435);
(statearr_45474[8] = inst_45434);
return statearr_45474;
})();var statearr_45475_45503 = state_45471__$1;(statearr_45475_45503[2] = null);
(statearr_45475_45503[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 3))
{var inst_45469 = (state_45471[2]);var state_45471__$1 = state_45471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45471__$1,inst_45469);
} else
{if((state_val_45472 === 4))
{var inst_45435 = (state_45471[7]);var inst_45437 = (inst_45435 < cnt);var state_45471__$1 = state_45471;if(cljs.core.truth_(inst_45437))
{var statearr_45476_45504 = state_45471__$1;(statearr_45476_45504[1] = 6);
} else
{var statearr_45477_45505 = state_45471__$1;(statearr_45477_45505[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 5))
{var inst_45455 = (state_45471[2]);var state_45471__$1 = (function (){var statearr_45478 = state_45471;(statearr_45478[9] = inst_45455);
return statearr_45478;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45471__$1,12,dchan);
} else
{if((state_val_45472 === 6))
{var state_45471__$1 = state_45471;var statearr_45479_45506 = state_45471__$1;(statearr_45479_45506[2] = null);
(statearr_45479_45506[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 7))
{var state_45471__$1 = state_45471;var statearr_45480_45507 = state_45471__$1;(statearr_45480_45507[2] = null);
(statearr_45480_45507[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 8))
{var inst_45453 = (state_45471[2]);var state_45471__$1 = state_45471;var statearr_45481_45508 = state_45471__$1;(statearr_45481_45508[2] = inst_45453);
(statearr_45481_45508[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 9))
{var inst_45435 = (state_45471[7]);var inst_45448 = (state_45471[2]);var inst_45449 = (inst_45435 + 1);var inst_45435__$1 = inst_45449;var state_45471__$1 = (function (){var statearr_45482 = state_45471;(statearr_45482[10] = inst_45448);
(statearr_45482[7] = inst_45435__$1);
return statearr_45482;
})();var statearr_45483_45509 = state_45471__$1;(statearr_45483_45509[2] = null);
(statearr_45483_45509[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 10))
{var inst_45439 = (state_45471[2]);var inst_45440 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_45471__$1 = (function (){var statearr_45484 = state_45471;(statearr_45484[11] = inst_45439);
return statearr_45484;
})();var statearr_45485_45510 = state_45471__$1;(statearr_45485_45510[2] = inst_45440);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45471__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 11))
{var inst_45435 = (state_45471[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45471,10,Object,null,9);var inst_45444 = chs__$1.call(null,inst_45435);var inst_45445 = done.call(null,inst_45435);var inst_45446 = cljs.core.async.take_BANG_.call(null,inst_45444,inst_45445);var state_45471__$1 = state_45471;var statearr_45486_45511 = state_45471__$1;(statearr_45486_45511[2] = inst_45446);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45471__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 12))
{var inst_45457 = (state_45471[12]);var inst_45457__$1 = (state_45471[2]);var inst_45458 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45457__$1);var state_45471__$1 = (function (){var statearr_45487 = state_45471;(statearr_45487[12] = inst_45457__$1);
return statearr_45487;
})();if(cljs.core.truth_(inst_45458))
{var statearr_45488_45512 = state_45471__$1;(statearr_45488_45512[1] = 13);
} else
{var statearr_45489_45513 = state_45471__$1;(statearr_45489_45513[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 13))
{var inst_45460 = cljs.core.async.close_BANG_.call(null,out);var state_45471__$1 = state_45471;var statearr_45490_45514 = state_45471__$1;(statearr_45490_45514[2] = inst_45460);
(statearr_45490_45514[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 14))
{var inst_45457 = (state_45471[12]);var inst_45462 = cljs.core.apply.call(null,f,inst_45457);var state_45471__$1 = state_45471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45471__$1,16,out,inst_45462);
} else
{if((state_val_45472 === 15))
{var inst_45467 = (state_45471[2]);var state_45471__$1 = state_45471;var statearr_45491_45515 = state_45471__$1;(statearr_45491_45515[2] = inst_45467);
(statearr_45491_45515[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45472 === 16))
{var inst_45464 = (state_45471[2]);var state_45471__$1 = (function (){var statearr_45492 = state_45471;(statearr_45492[13] = inst_45464);
return statearr_45492;
})();var statearr_45493_45516 = state_45471__$1;(statearr_45493_45516[2] = null);
(statearr_45493_45516[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_45497 = (new Array(14));(statearr_45497[0] = state_machine__11439__auto__);
(statearr_45497[1] = 1);
return statearr_45497;
});
var state_machine__11439__auto____1 = (function (state_45471){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_45471);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e45498){if((e45498 instanceof Object))
{var ex__11442__auto__ = e45498;var statearr_45499_45517 = state_45471;(statearr_45499_45517[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45471);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45518 = state_45471;
state_45471 = G__45518;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_45471){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_45471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_45500 = f__11509__auto__.call(null);(statearr_45500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___45501);
return statearr_45500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___45626 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_45602){var state_val_45603 = (state_45602[1]);if((state_val_45603 === 1))
{var inst_45573 = cljs.core.vec.call(null,chs);var inst_45574 = inst_45573;var state_45602__$1 = (function (){var statearr_45604 = state_45602;(statearr_45604[7] = inst_45574);
return statearr_45604;
})();var statearr_45605_45627 = state_45602__$1;(statearr_45605_45627[2] = null);
(statearr_45605_45627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45603 === 2))
{var inst_45574 = (state_45602[7]);var inst_45576 = cljs.core.count.call(null,inst_45574);var inst_45577 = (inst_45576 > 0);var state_45602__$1 = state_45602;if(cljs.core.truth_(inst_45577))
{var statearr_45606_45628 = state_45602__$1;(statearr_45606_45628[1] = 4);
} else
{var statearr_45607_45629 = state_45602__$1;(statearr_45607_45629[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45603 === 3))
{var inst_45600 = (state_45602[2]);var state_45602__$1 = state_45602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45602__$1,inst_45600);
} else
{if((state_val_45603 === 4))
{var inst_45574 = (state_45602[7]);var state_45602__$1 = state_45602;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_45602__$1,7,inst_45574);
} else
{if((state_val_45603 === 5))
{var inst_45596 = cljs.core.async.close_BANG_.call(null,out);var state_45602__$1 = state_45602;var statearr_45608_45630 = state_45602__$1;(statearr_45608_45630[2] = inst_45596);
(statearr_45608_45630[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45603 === 6))
{var inst_45598 = (state_45602[2]);var state_45602__$1 = state_45602;var statearr_45609_45631 = state_45602__$1;(statearr_45609_45631[2] = inst_45598);
(statearr_45609_45631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45603 === 7))
{var inst_45581 = (state_45602[8]);var inst_45582 = (state_45602[9]);var inst_45581__$1 = (state_45602[2]);var inst_45582__$1 = cljs.core.nth.call(null,inst_45581__$1,0,null);var inst_45583 = cljs.core.nth.call(null,inst_45581__$1,1,null);var inst_45584 = (inst_45582__$1 == null);var state_45602__$1 = (function (){var statearr_45610 = state_45602;(statearr_45610[10] = inst_45583);
(statearr_45610[8] = inst_45581__$1);
(statearr_45610[9] = inst_45582__$1);
return statearr_45610;
})();if(cljs.core.truth_(inst_45584))
{var statearr_45611_45632 = state_45602__$1;(statearr_45611_45632[1] = 8);
} else
{var statearr_45612_45633 = state_45602__$1;(statearr_45612_45633[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45603 === 8))
{var inst_45583 = (state_45602[10]);var inst_45581 = (state_45602[8]);var inst_45582 = (state_45602[9]);var inst_45574 = (state_45602[7]);var inst_45586 = (function (){var c = inst_45583;var v = inst_45582;var vec__45579 = inst_45581;var cs = inst_45574;return ((function (c,v,vec__45579,cs,inst_45583,inst_45581,inst_45582,inst_45574,state_val_45603){
return (function (p1__45519_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__45519_SHARP_);
});
;})(c,v,vec__45579,cs,inst_45583,inst_45581,inst_45582,inst_45574,state_val_45603))
})();var inst_45587 = cljs.core.filterv.call(null,inst_45586,inst_45574);var inst_45574__$1 = inst_45587;var state_45602__$1 = (function (){var statearr_45613 = state_45602;(statearr_45613[7] = inst_45574__$1);
return statearr_45613;
})();var statearr_45614_45634 = state_45602__$1;(statearr_45614_45634[2] = null);
(statearr_45614_45634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45603 === 9))
{var inst_45582 = (state_45602[9]);var state_45602__$1 = state_45602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45602__$1,11,out,inst_45582);
} else
{if((state_val_45603 === 10))
{var inst_45594 = (state_45602[2]);var state_45602__$1 = state_45602;var statearr_45616_45635 = state_45602__$1;(statearr_45616_45635[2] = inst_45594);
(statearr_45616_45635[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45603 === 11))
{var inst_45574 = (state_45602[7]);var inst_45591 = (state_45602[2]);var tmp45615 = inst_45574;var inst_45574__$1 = tmp45615;var state_45602__$1 = (function (){var statearr_45617 = state_45602;(statearr_45617[7] = inst_45574__$1);
(statearr_45617[11] = inst_45591);
return statearr_45617;
})();var statearr_45618_45636 = state_45602__$1;(statearr_45618_45636[2] = null);
(statearr_45618_45636[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_45622 = (new Array(12));(statearr_45622[0] = state_machine__11439__auto__);
(statearr_45622[1] = 1);
return statearr_45622;
});
var state_machine__11439__auto____1 = (function (state_45602){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_45602);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e45623){if((e45623 instanceof Object))
{var ex__11442__auto__ = e45623;var statearr_45624_45637 = state_45602;(statearr_45624_45637[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45602);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45638 = state_45602;
state_45602 = G__45638;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_45602){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_45602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_45625 = f__11509__auto__.call(null);(statearr_45625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___45626);
return statearr_45625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___45731 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_45708){var state_val_45709 = (state_45708[1]);if((state_val_45709 === 1))
{var inst_45685 = 0;var state_45708__$1 = (function (){var statearr_45710 = state_45708;(statearr_45710[7] = inst_45685);
return statearr_45710;
})();var statearr_45711_45732 = state_45708__$1;(statearr_45711_45732[2] = null);
(statearr_45711_45732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45709 === 2))
{var inst_45685 = (state_45708[7]);var inst_45687 = (inst_45685 < n);var state_45708__$1 = state_45708;if(cljs.core.truth_(inst_45687))
{var statearr_45712_45733 = state_45708__$1;(statearr_45712_45733[1] = 4);
} else
{var statearr_45713_45734 = state_45708__$1;(statearr_45713_45734[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45709 === 3))
{var inst_45705 = (state_45708[2]);var inst_45706 = cljs.core.async.close_BANG_.call(null,out);var state_45708__$1 = (function (){var statearr_45714 = state_45708;(statearr_45714[8] = inst_45705);
return statearr_45714;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45708__$1,inst_45706);
} else
{if((state_val_45709 === 4))
{var state_45708__$1 = state_45708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45708__$1,7,ch);
} else
{if((state_val_45709 === 5))
{var state_45708__$1 = state_45708;var statearr_45715_45735 = state_45708__$1;(statearr_45715_45735[2] = null);
(statearr_45715_45735[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45709 === 6))
{var inst_45703 = (state_45708[2]);var state_45708__$1 = state_45708;var statearr_45716_45736 = state_45708__$1;(statearr_45716_45736[2] = inst_45703);
(statearr_45716_45736[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45709 === 7))
{var inst_45690 = (state_45708[9]);var inst_45690__$1 = (state_45708[2]);var inst_45691 = (inst_45690__$1 == null);var inst_45692 = cljs.core.not.call(null,inst_45691);var state_45708__$1 = (function (){var statearr_45717 = state_45708;(statearr_45717[9] = inst_45690__$1);
return statearr_45717;
})();if(inst_45692)
{var statearr_45718_45737 = state_45708__$1;(statearr_45718_45737[1] = 8);
} else
{var statearr_45719_45738 = state_45708__$1;(statearr_45719_45738[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45709 === 8))
{var inst_45690 = (state_45708[9]);var state_45708__$1 = state_45708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45708__$1,11,out,inst_45690);
} else
{if((state_val_45709 === 9))
{var state_45708__$1 = state_45708;var statearr_45720_45739 = state_45708__$1;(statearr_45720_45739[2] = null);
(statearr_45720_45739[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45709 === 10))
{var inst_45700 = (state_45708[2]);var state_45708__$1 = state_45708;var statearr_45721_45740 = state_45708__$1;(statearr_45721_45740[2] = inst_45700);
(statearr_45721_45740[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45709 === 11))
{var inst_45685 = (state_45708[7]);var inst_45695 = (state_45708[2]);var inst_45696 = (inst_45685 + 1);var inst_45685__$1 = inst_45696;var state_45708__$1 = (function (){var statearr_45722 = state_45708;(statearr_45722[10] = inst_45695);
(statearr_45722[7] = inst_45685__$1);
return statearr_45722;
})();var statearr_45723_45741 = state_45708__$1;(statearr_45723_45741[2] = null);
(statearr_45723_45741[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_45727 = (new Array(11));(statearr_45727[0] = state_machine__11439__auto__);
(statearr_45727[1] = 1);
return statearr_45727;
});
var state_machine__11439__auto____1 = (function (state_45708){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_45708);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e45728){if((e45728 instanceof Object))
{var ex__11442__auto__ = e45728;var statearr_45729_45742 = state_45708;(statearr_45729_45742[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45743 = state_45708;
state_45708 = G__45743;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_45708){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_45708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_45730 = f__11509__auto__.call(null);(statearr_45730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___45731);
return statearr_45730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___45840 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_45815){var state_val_45816 = (state_45815[1]);if((state_val_45816 === 1))
{var inst_45792 = null;var state_45815__$1 = (function (){var statearr_45817 = state_45815;(statearr_45817[7] = inst_45792);
return statearr_45817;
})();var statearr_45818_45841 = state_45815__$1;(statearr_45818_45841[2] = null);
(statearr_45818_45841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45816 === 2))
{var state_45815__$1 = state_45815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45815__$1,4,ch);
} else
{if((state_val_45816 === 3))
{var inst_45812 = (state_45815[2]);var inst_45813 = cljs.core.async.close_BANG_.call(null,out);var state_45815__$1 = (function (){var statearr_45819 = state_45815;(statearr_45819[8] = inst_45812);
return statearr_45819;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45815__$1,inst_45813);
} else
{if((state_val_45816 === 4))
{var inst_45795 = (state_45815[9]);var inst_45795__$1 = (state_45815[2]);var inst_45796 = (inst_45795__$1 == null);var inst_45797 = cljs.core.not.call(null,inst_45796);var state_45815__$1 = (function (){var statearr_45820 = state_45815;(statearr_45820[9] = inst_45795__$1);
return statearr_45820;
})();if(inst_45797)
{var statearr_45821_45842 = state_45815__$1;(statearr_45821_45842[1] = 5);
} else
{var statearr_45822_45843 = state_45815__$1;(statearr_45822_45843[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45816 === 5))
{var inst_45792 = (state_45815[7]);var inst_45795 = (state_45815[9]);var inst_45799 = cljs.core._EQ_.call(null,inst_45795,inst_45792);var state_45815__$1 = state_45815;if(inst_45799)
{var statearr_45823_45844 = state_45815__$1;(statearr_45823_45844[1] = 8);
} else
{var statearr_45824_45845 = state_45815__$1;(statearr_45824_45845[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45816 === 6))
{var state_45815__$1 = state_45815;var statearr_45826_45846 = state_45815__$1;(statearr_45826_45846[2] = null);
(statearr_45826_45846[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45816 === 7))
{var inst_45810 = (state_45815[2]);var state_45815__$1 = state_45815;var statearr_45827_45847 = state_45815__$1;(statearr_45827_45847[2] = inst_45810);
(statearr_45827_45847[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45816 === 8))
{var inst_45792 = (state_45815[7]);var tmp45825 = inst_45792;var inst_45792__$1 = tmp45825;var state_45815__$1 = (function (){var statearr_45828 = state_45815;(statearr_45828[7] = inst_45792__$1);
return statearr_45828;
})();var statearr_45829_45848 = state_45815__$1;(statearr_45829_45848[2] = null);
(statearr_45829_45848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45816 === 9))
{var inst_45795 = (state_45815[9]);var state_45815__$1 = state_45815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45815__$1,11,out,inst_45795);
} else
{if((state_val_45816 === 10))
{var inst_45807 = (state_45815[2]);var state_45815__$1 = state_45815;var statearr_45830_45849 = state_45815__$1;(statearr_45830_45849[2] = inst_45807);
(statearr_45830_45849[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45816 === 11))
{var inst_45795 = (state_45815[9]);var inst_45804 = (state_45815[2]);var inst_45792 = inst_45795;var state_45815__$1 = (function (){var statearr_45831 = state_45815;(statearr_45831[7] = inst_45792);
(statearr_45831[10] = inst_45804);
return statearr_45831;
})();var statearr_45832_45850 = state_45815__$1;(statearr_45832_45850[2] = null);
(statearr_45832_45850[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_45836 = (new Array(11));(statearr_45836[0] = state_machine__11439__auto__);
(statearr_45836[1] = 1);
return statearr_45836;
});
var state_machine__11439__auto____1 = (function (state_45815){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_45815);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e45837){if((e45837 instanceof Object))
{var ex__11442__auto__ = e45837;var statearr_45838_45851 = state_45815;(statearr_45838_45851[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45852 = state_45815;
state_45815 = G__45852;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_45815){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_45815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_45839 = f__11509__auto__.call(null);(statearr_45839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___45840);
return statearr_45839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___45987 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_45957){var state_val_45958 = (state_45957[1]);if((state_val_45958 === 1))
{var inst_45920 = (new Array(n));var inst_45921 = inst_45920;var inst_45922 = 0;var state_45957__$1 = (function (){var statearr_45959 = state_45957;(statearr_45959[7] = inst_45921);
(statearr_45959[8] = inst_45922);
return statearr_45959;
})();var statearr_45960_45988 = state_45957__$1;(statearr_45960_45988[2] = null);
(statearr_45960_45988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45958 === 2))
{var state_45957__$1 = state_45957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45957__$1,4,ch);
} else
{if((state_val_45958 === 3))
{var inst_45955 = (state_45957[2]);var state_45957__$1 = state_45957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45957__$1,inst_45955);
} else
{if((state_val_45958 === 4))
{var inst_45925 = (state_45957[9]);var inst_45925__$1 = (state_45957[2]);var inst_45926 = (inst_45925__$1 == null);var inst_45927 = cljs.core.not.call(null,inst_45926);var state_45957__$1 = (function (){var statearr_45961 = state_45957;(statearr_45961[9] = inst_45925__$1);
return statearr_45961;
})();if(inst_45927)
{var statearr_45962_45989 = state_45957__$1;(statearr_45962_45989[1] = 5);
} else
{var statearr_45963_45990 = state_45957__$1;(statearr_45963_45990[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45958 === 5))
{var inst_45930 = (state_45957[10]);var inst_45921 = (state_45957[7]);var inst_45922 = (state_45957[8]);var inst_45925 = (state_45957[9]);var inst_45929 = (inst_45921[inst_45922] = inst_45925);var inst_45930__$1 = (inst_45922 + 1);var inst_45931 = (inst_45930__$1 < n);var state_45957__$1 = (function (){var statearr_45964 = state_45957;(statearr_45964[10] = inst_45930__$1);
(statearr_45964[11] = inst_45929);
return statearr_45964;
})();if(cljs.core.truth_(inst_45931))
{var statearr_45965_45991 = state_45957__$1;(statearr_45965_45991[1] = 8);
} else
{var statearr_45966_45992 = state_45957__$1;(statearr_45966_45992[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45958 === 6))
{var inst_45922 = (state_45957[8]);var inst_45943 = (inst_45922 > 0);var state_45957__$1 = state_45957;if(cljs.core.truth_(inst_45943))
{var statearr_45968_45993 = state_45957__$1;(statearr_45968_45993[1] = 12);
} else
{var statearr_45969_45994 = state_45957__$1;(statearr_45969_45994[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45958 === 7))
{var inst_45953 = (state_45957[2]);var state_45957__$1 = state_45957;var statearr_45970_45995 = state_45957__$1;(statearr_45970_45995[2] = inst_45953);
(statearr_45970_45995[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45958 === 8))
{var inst_45930 = (state_45957[10]);var inst_45921 = (state_45957[7]);var tmp45967 = inst_45921;var inst_45921__$1 = tmp45967;var inst_45922 = inst_45930;var state_45957__$1 = (function (){var statearr_45971 = state_45957;(statearr_45971[7] = inst_45921__$1);
(statearr_45971[8] = inst_45922);
return statearr_45971;
})();var statearr_45972_45996 = state_45957__$1;(statearr_45972_45996[2] = null);
(statearr_45972_45996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45958 === 9))
{var inst_45921 = (state_45957[7]);var inst_45935 = cljs.core.vec.call(null,inst_45921);var state_45957__$1 = state_45957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45957__$1,11,out,inst_45935);
} else
{if((state_val_45958 === 10))
{var inst_45941 = (state_45957[2]);var state_45957__$1 = state_45957;var statearr_45973_45997 = state_45957__$1;(statearr_45973_45997[2] = inst_45941);
(statearr_45973_45997[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45958 === 11))
{var inst_45937 = (state_45957[2]);var inst_45938 = (new Array(n));var inst_45921 = inst_45938;var inst_45922 = 0;var state_45957__$1 = (function (){var statearr_45974 = state_45957;(statearr_45974[7] = inst_45921);
(statearr_45974[8] = inst_45922);
(statearr_45974[12] = inst_45937);
return statearr_45974;
})();var statearr_45975_45998 = state_45957__$1;(statearr_45975_45998[2] = null);
(statearr_45975_45998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45958 === 12))
{var inst_45921 = (state_45957[7]);var inst_45945 = cljs.core.vec.call(null,inst_45921);var state_45957__$1 = state_45957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45957__$1,15,out,inst_45945);
} else
{if((state_val_45958 === 13))
{var state_45957__$1 = state_45957;var statearr_45976_45999 = state_45957__$1;(statearr_45976_45999[2] = null);
(statearr_45976_45999[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45958 === 14))
{var inst_45950 = (state_45957[2]);var inst_45951 = cljs.core.async.close_BANG_.call(null,out);var state_45957__$1 = (function (){var statearr_45977 = state_45957;(statearr_45977[13] = inst_45950);
return statearr_45977;
})();var statearr_45978_46000 = state_45957__$1;(statearr_45978_46000[2] = inst_45951);
(statearr_45978_46000[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45958 === 15))
{var inst_45947 = (state_45957[2]);var state_45957__$1 = state_45957;var statearr_45979_46001 = state_45957__$1;(statearr_45979_46001[2] = inst_45947);
(statearr_45979_46001[1] = 14);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_45983 = (new Array(14));(statearr_45983[0] = state_machine__11439__auto__);
(statearr_45983[1] = 1);
return statearr_45983;
});
var state_machine__11439__auto____1 = (function (state_45957){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_45957);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e45984){if((e45984 instanceof Object))
{var ex__11442__auto__ = e45984;var statearr_45985_46002 = state_45957;(statearr_45985_46002[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45957);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46003 = state_45957;
state_45957 = G__46003;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_45957){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_45957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_45986 = f__11509__auto__.call(null);(statearr_45986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___45987);
return statearr_45986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___46146 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_46116){var state_val_46117 = (state_46116[1]);if((state_val_46117 === 1))
{var inst_46075 = (new Array(0));var inst_46076 = inst_46075;var inst_46077 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_46116__$1 = (function (){var statearr_46118 = state_46116;(statearr_46118[7] = inst_46076);
(statearr_46118[8] = inst_46077);
return statearr_46118;
})();var statearr_46119_46147 = state_46116__$1;(statearr_46119_46147[2] = null);
(statearr_46119_46147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46117 === 2))
{var state_46116__$1 = state_46116;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46116__$1,4,ch);
} else
{if((state_val_46117 === 3))
{var inst_46114 = (state_46116[2]);var state_46116__$1 = state_46116;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46116__$1,inst_46114);
} else
{if((state_val_46117 === 4))
{var inst_46080 = (state_46116[9]);var inst_46080__$1 = (state_46116[2]);var inst_46081 = (inst_46080__$1 == null);var inst_46082 = cljs.core.not.call(null,inst_46081);var state_46116__$1 = (function (){var statearr_46120 = state_46116;(statearr_46120[9] = inst_46080__$1);
return statearr_46120;
})();if(inst_46082)
{var statearr_46121_46148 = state_46116__$1;(statearr_46121_46148[1] = 5);
} else
{var statearr_46122_46149 = state_46116__$1;(statearr_46122_46149[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46117 === 5))
{var inst_46080 = (state_46116[9]);var inst_46077 = (state_46116[8]);var inst_46084 = (state_46116[10]);var inst_46084__$1 = f.call(null,inst_46080);var inst_46085 = cljs.core._EQ_.call(null,inst_46084__$1,inst_46077);var inst_46086 = cljs.core.keyword_identical_QMARK_.call(null,inst_46077,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_46087 = (inst_46085) || (inst_46086);var state_46116__$1 = (function (){var statearr_46123 = state_46116;(statearr_46123[10] = inst_46084__$1);
return statearr_46123;
})();if(cljs.core.truth_(inst_46087))
{var statearr_46124_46150 = state_46116__$1;(statearr_46124_46150[1] = 8);
} else
{var statearr_46125_46151 = state_46116__$1;(statearr_46125_46151[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46117 === 6))
{var inst_46076 = (state_46116[7]);var inst_46101 = inst_46076.length;var inst_46102 = (inst_46101 > 0);var state_46116__$1 = state_46116;if(cljs.core.truth_(inst_46102))
{var statearr_46127_46152 = state_46116__$1;(statearr_46127_46152[1] = 12);
} else
{var statearr_46128_46153 = state_46116__$1;(statearr_46128_46153[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46117 === 7))
{var inst_46112 = (state_46116[2]);var state_46116__$1 = state_46116;var statearr_46129_46154 = state_46116__$1;(statearr_46129_46154[2] = inst_46112);
(statearr_46129_46154[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46117 === 8))
{var inst_46080 = (state_46116[9]);var inst_46076 = (state_46116[7]);var inst_46084 = (state_46116[10]);var inst_46089 = inst_46076.push(inst_46080);var tmp46126 = inst_46076;var inst_46076__$1 = tmp46126;var inst_46077 = inst_46084;var state_46116__$1 = (function (){var statearr_46130 = state_46116;(statearr_46130[7] = inst_46076__$1);
(statearr_46130[8] = inst_46077);
(statearr_46130[11] = inst_46089);
return statearr_46130;
})();var statearr_46131_46155 = state_46116__$1;(statearr_46131_46155[2] = null);
(statearr_46131_46155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46117 === 9))
{var inst_46076 = (state_46116[7]);var inst_46092 = cljs.core.vec.call(null,inst_46076);var state_46116__$1 = state_46116;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46116__$1,11,out,inst_46092);
} else
{if((state_val_46117 === 10))
{var inst_46099 = (state_46116[2]);var state_46116__$1 = state_46116;var statearr_46132_46156 = state_46116__$1;(statearr_46132_46156[2] = inst_46099);
(statearr_46132_46156[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46117 === 11))
{var inst_46080 = (state_46116[9]);var inst_46084 = (state_46116[10]);var inst_46094 = (state_46116[2]);var inst_46095 = (new Array(0));var inst_46096 = inst_46095.push(inst_46080);var inst_46076 = inst_46095;var inst_46077 = inst_46084;var state_46116__$1 = (function (){var statearr_46133 = state_46116;(statearr_46133[7] = inst_46076);
(statearr_46133[8] = inst_46077);
(statearr_46133[12] = inst_46094);
(statearr_46133[13] = inst_46096);
return statearr_46133;
})();var statearr_46134_46157 = state_46116__$1;(statearr_46134_46157[2] = null);
(statearr_46134_46157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46117 === 12))
{var inst_46076 = (state_46116[7]);var inst_46104 = cljs.core.vec.call(null,inst_46076);var state_46116__$1 = state_46116;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46116__$1,15,out,inst_46104);
} else
{if((state_val_46117 === 13))
{var state_46116__$1 = state_46116;var statearr_46135_46158 = state_46116__$1;(statearr_46135_46158[2] = null);
(statearr_46135_46158[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46117 === 14))
{var inst_46109 = (state_46116[2]);var inst_46110 = cljs.core.async.close_BANG_.call(null,out);var state_46116__$1 = (function (){var statearr_46136 = state_46116;(statearr_46136[14] = inst_46109);
return statearr_46136;
})();var statearr_46137_46159 = state_46116__$1;(statearr_46137_46159[2] = inst_46110);
(statearr_46137_46159[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46117 === 15))
{var inst_46106 = (state_46116[2]);var state_46116__$1 = state_46116;var statearr_46138_46160 = state_46116__$1;(statearr_46138_46160[2] = inst_46106);
(statearr_46138_46160[1] = 14);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_46142 = (new Array(15));(statearr_46142[0] = state_machine__11439__auto__);
(statearr_46142[1] = 1);
return statearr_46142;
});
var state_machine__11439__auto____1 = (function (state_46116){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_46116);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e46143){if((e46143 instanceof Object))
{var ex__11442__auto__ = e46143;var statearr_46144_46161 = state_46116;(statearr_46144_46161[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46116);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46143;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46162 = state_46116;
state_46116 = G__46162;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_46116){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_46116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_46145 = f__11509__auto__.call(null);(statearr_46145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___46146);
return statearr_46145;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
