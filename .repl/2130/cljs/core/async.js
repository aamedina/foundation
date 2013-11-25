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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31984 = (function (f,fn_handler,meta31985){
this.f = f;
this.fn_handler = fn_handler;
this.meta31985 = meta31985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31984.cljs$lang$type = true;
cljs.core.async.t31984.cljs$lang$ctorStr = "cljs.core.async/t31984";
cljs.core.async.t31984.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t31984");
});
cljs.core.async.t31984.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31986){var self__ = this;
var _31986__$1 = this;return self__.meta31985;
});
cljs.core.async.t31984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31986,meta31985__$1){var self__ = this;
var _31986__$1 = this;return (new cljs.core.async.t31984(self__.f,self__.fn_handler,meta31985__$1));
});
cljs.core.async.__GT_t31984 = (function __GT_t31984(f__$1,fn_handler__$1,meta31985){return (new cljs.core.async.t31984(f__$1,fn_handler__$1,meta31985));
});
}
return (new cljs.core.async.t31984(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31988 = buff;if(G__31988)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__31988.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31988.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31988);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31988);
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
{var val_31989 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31989);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31989);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__5145__auto__ = ret;if(cljs.core.truth_(and__5145__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__5145__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5980__auto___31990 = n;var x_31991 = 0;while(true){
if((x_31991 < n__5980__auto___31990))
{(a[x_31991] = 0);
{
var G__31992 = (x_31991 + 1);
x_31991 = G__31992;
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
var G__31993 = (i + 1);
i = G__31993;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31997 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31997 = (function (flag,alt_flag,meta31998){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31998 = meta31998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31997.cljs$lang$type = true;
cljs.core.async.t31997.cljs$lang$ctorStr = "cljs.core.async/t31997";
cljs.core.async.t31997.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t31997");
});
cljs.core.async.t31997.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31999){var self__ = this;
var _31999__$1 = this;return self__.meta31998;
});
cljs.core.async.t31997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31999,meta31998__$1){var self__ = this;
var _31999__$1 = this;return (new cljs.core.async.t31997(self__.flag,self__.alt_flag,meta31998__$1));
});
cljs.core.async.__GT_t31997 = (function __GT_t31997(flag__$1,alt_flag__$1,meta31998){return (new cljs.core.async.t31997(flag__$1,alt_flag__$1,meta31998));
});
}
return (new cljs.core.async.t31997(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t32003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32003 = (function (cb,flag,alt_handler,meta32004){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32004 = meta32004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32003.cljs$lang$type = true;
cljs.core.async.t32003.cljs$lang$ctorStr = "cljs.core.async/t32003";
cljs.core.async.t32003.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t32003");
});
cljs.core.async.t32003.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t32003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t32003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32005){var self__ = this;
var _32005__$1 = this;return self__.meta32004;
});
cljs.core.async.t32003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32005,meta32004__$1){var self__ = this;
var _32005__$1 = this;return (new cljs.core.async.t32003(self__.cb,self__.flag,self__.alt_handler,meta32004__$1));
});
cljs.core.async.__GT_t32003 = (function __GT_t32003(cb__$1,flag__$1,alt_handler__$1,meta32004){return (new cljs.core.async.t32003(cb__$1,flag__$1,alt_handler__$1,meta32004));
});
}
return (new cljs.core.async.t32003(cb,flag,alt_handler,null));
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
return (function (p1__32006_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32006_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5157__auto__ = wport;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__32007 = (i + 1);
i = G__32007;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__5157__auto__ = ret;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__5145__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__5145__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__5145__auto__;
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
var alts_BANG___delegate = function (ports,p__32008){var map__32010 = p__32008;var map__32010__$1 = ((cljs.core.seq_QMARK_.call(null,map__32010))?cljs.core.apply.call(null,cljs.core.hash_map,map__32010):map__32010);var opts = map__32010__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__32008 = null;if (arguments.length > 1) {
  p__32008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__32008);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__32011){
var ports = cljs.core.first(arglist__32011);
var p__32008 = cljs.core.rest(arglist__32011);
return alts_BANG___delegate(ports,p__32008);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t32019 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32019 = (function (ch,f,map_LT_,meta32020){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32020 = meta32020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32019.cljs$lang$type = true;
cljs.core.async.t32019.cljs$lang$ctorStr = "cljs.core.async/t32019";
cljs.core.async.t32019.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t32019");
});
cljs.core.async.t32019.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t32019.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t32022 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32022 = (function (fn1,_,meta32020,ch,f,map_LT_,meta32023){
this.fn1 = fn1;
this._ = _;
this.meta32020 = meta32020;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32023 = meta32023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32022.cljs$lang$type = true;
cljs.core.async.t32022.cljs$lang$ctorStr = "cljs.core.async/t32022";
cljs.core.async.t32022.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t32022");
});
cljs.core.async.t32022.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t32022.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t32022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__32012_SHARP_){return f1.call(null,(((p1__32012_SHARP_ == null))?null:self__.f.call(null,p1__32012_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t32022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32024){var self__ = this;
var _32024__$1 = this;return self__.meta32023;
});
cljs.core.async.t32022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32024,meta32023__$1){var self__ = this;
var _32024__$1 = this;return (new cljs.core.async.t32022(self__.fn1,self__._,self__.meta32020,self__.ch,self__.f,self__.map_LT_,meta32023__$1));
});
cljs.core.async.__GT_t32022 = (function __GT_t32022(fn1__$1,___$2,meta32020__$1,ch__$2,f__$2,map_LT___$2,meta32023){return (new cljs.core.async.t32022(fn1__$1,___$2,meta32020__$1,ch__$2,f__$2,map_LT___$2,meta32023));
});
}
return (new cljs.core.async.t32022(fn1,___$1,self__.meta32020,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__5145__auto__ = ret;if(cljs.core.truth_(and__5145__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__5145__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t32019.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32021){var self__ = this;
var _32021__$1 = this;return self__.meta32020;
});
cljs.core.async.t32019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32021,meta32020__$1){var self__ = this;
var _32021__$1 = this;return (new cljs.core.async.t32019(self__.ch,self__.f,self__.map_LT_,meta32020__$1));
});
cljs.core.async.__GT_t32019 = (function __GT_t32019(ch__$1,f__$1,map_LT___$1,meta32020){return (new cljs.core.async.t32019(ch__$1,f__$1,map_LT___$1,meta32020));
});
}
return (new cljs.core.async.t32019(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t32028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32028 = (function (ch,f,map_GT_,meta32029){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32029 = meta32029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32028.cljs$lang$type = true;
cljs.core.async.t32028.cljs$lang$ctorStr = "cljs.core.async/t32028";
cljs.core.async.t32028.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t32028");
});
cljs.core.async.t32028.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32028.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t32028.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32028.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32028.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32028.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32030){var self__ = this;
var _32030__$1 = this;return self__.meta32029;
});
cljs.core.async.t32028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32030,meta32029__$1){var self__ = this;
var _32030__$1 = this;return (new cljs.core.async.t32028(self__.ch,self__.f,self__.map_GT_,meta32029__$1));
});
cljs.core.async.__GT_t32028 = (function __GT_t32028(ch__$1,f__$1,map_GT___$1,meta32029){return (new cljs.core.async.t32028(ch__$1,f__$1,map_GT___$1,meta32029));
});
}
return (new cljs.core.async.t32028(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t32034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32034 = (function (ch,p,filter_GT_,meta32035){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32035 = meta32035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32034.cljs$lang$type = true;
cljs.core.async.t32034.cljs$lang$ctorStr = "cljs.core.async/t32034";
cljs.core.async.t32034.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t32034");
});
cljs.core.async.t32034.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t32034.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32034.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32036){var self__ = this;
var _32036__$1 = this;return self__.meta32035;
});
cljs.core.async.t32034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32036,meta32035__$1){var self__ = this;
var _32036__$1 = this;return (new cljs.core.async.t32034(self__.ch,self__.p,self__.filter_GT_,meta32035__$1));
});
cljs.core.async.__GT_t32034 = (function __GT_t32034(ch__$1,p__$1,filter_GT___$1,meta32035){return (new cljs.core.async.t32034(ch__$1,p__$1,filter_GT___$1,meta32035));
});
}
return (new cljs.core.async.t32034(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___32119 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_32098){var state_val_32099 = (state_32098[1]);if((state_val_32099 === 1))
{var state_32098__$1 = state_32098;var statearr_32100_32120 = state_32098__$1;(statearr_32100_32120[2] = null);
(statearr_32100_32120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 2))
{var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32098__$1,4,ch);
} else
{if((state_val_32099 === 3))
{var inst_32096 = (state_32098[2]);var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32098__$1,inst_32096);
} else
{if((state_val_32099 === 4))
{var inst_32080 = (state_32098[7]);var inst_32080__$1 = (state_32098[2]);var inst_32081 = (inst_32080__$1 == null);var state_32098__$1 = (function (){var statearr_32101 = state_32098;(statearr_32101[7] = inst_32080__$1);
return statearr_32101;
})();if(cljs.core.truth_(inst_32081))
{var statearr_32102_32121 = state_32098__$1;(statearr_32102_32121[1] = 5);
} else
{var statearr_32103_32122 = state_32098__$1;(statearr_32103_32122[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 5))
{var inst_32083 = cljs.core.async.close_BANG_.call(null,out);var state_32098__$1 = state_32098;var statearr_32104_32123 = state_32098__$1;(statearr_32104_32123[2] = inst_32083);
(statearr_32104_32123[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 6))
{var inst_32080 = (state_32098[7]);var inst_32085 = p.call(null,inst_32080);var state_32098__$1 = state_32098;if(cljs.core.truth_(inst_32085))
{var statearr_32105_32124 = state_32098__$1;(statearr_32105_32124[1] = 8);
} else
{var statearr_32106_32125 = state_32098__$1;(statearr_32106_32125[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 7))
{var inst_32094 = (state_32098[2]);var state_32098__$1 = state_32098;var statearr_32107_32126 = state_32098__$1;(statearr_32107_32126[2] = inst_32094);
(statearr_32107_32126[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 8))
{var inst_32080 = (state_32098[7]);var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32098__$1,11,out,inst_32080);
} else
{if((state_val_32099 === 9))
{var state_32098__$1 = state_32098;var statearr_32108_32127 = state_32098__$1;(statearr_32108_32127[2] = null);
(statearr_32108_32127[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 10))
{var inst_32091 = (state_32098[2]);var state_32098__$1 = (function (){var statearr_32109 = state_32098;(statearr_32109[8] = inst_32091);
return statearr_32109;
})();var statearr_32110_32128 = state_32098__$1;(statearr_32110_32128[2] = null);
(statearr_32110_32128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 11))
{var inst_32088 = (state_32098[2]);var state_32098__$1 = state_32098;var statearr_32111_32129 = state_32098__$1;(statearr_32111_32129[2] = inst_32088);
(statearr_32111_32129[1] = 10);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_32115 = (new Array(9));(statearr_32115[0] = state_machine__12403__auto__);
(statearr_32115[1] = 1);
return statearr_32115;
});
var state_machine__12403__auto____1 = (function (state_32098){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_32098);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e32116){if((e32116 instanceof Object))
{var ex__12406__auto__ = e32116;var statearr_32117_32130 = state_32098;(statearr_32117_32130[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32131 = state_32098;
state_32098 = G__32131;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_32098){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_32098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_32118 = f__12478__auto__.call(null);(statearr_32118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___32119);
return statearr_32118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12477__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_32283){var state_val_32284 = (state_32283[1]);if((state_val_32284 === 1))
{var state_32283__$1 = state_32283;var statearr_32285_32322 = state_32283__$1;(statearr_32285_32322[2] = null);
(statearr_32285_32322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 2))
{var state_32283__$1 = state_32283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32283__$1,4,in$);
} else
{if((state_val_32284 === 3))
{var inst_32281 = (state_32283[2]);var state_32283__$1 = state_32283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32283__$1,inst_32281);
} else
{if((state_val_32284 === 4))
{var inst_32229 = (state_32283[7]);var inst_32229__$1 = (state_32283[2]);var inst_32230 = (inst_32229__$1 == null);var state_32283__$1 = (function (){var statearr_32286 = state_32283;(statearr_32286[7] = inst_32229__$1);
return statearr_32286;
})();if(cljs.core.truth_(inst_32230))
{var statearr_32287_32323 = state_32283__$1;(statearr_32287_32323[1] = 5);
} else
{var statearr_32288_32324 = state_32283__$1;(statearr_32288_32324[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 5))
{var inst_32232 = cljs.core.async.close_BANG_.call(null,out);var state_32283__$1 = state_32283;var statearr_32289_32325 = state_32283__$1;(statearr_32289_32325[2] = inst_32232);
(statearr_32289_32325[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 6))
{var inst_32229 = (state_32283[7]);var inst_32234 = f.call(null,inst_32229);var inst_32239 = cljs.core.seq.call(null,inst_32234);var inst_32240 = inst_32239;var inst_32241 = null;var inst_32242 = 0;var inst_32243 = 0;var state_32283__$1 = (function (){var statearr_32290 = state_32283;(statearr_32290[8] = inst_32240);
(statearr_32290[9] = inst_32241);
(statearr_32290[10] = inst_32243);
(statearr_32290[11] = inst_32242);
return statearr_32290;
})();var statearr_32291_32326 = state_32283__$1;(statearr_32291_32326[2] = null);
(statearr_32291_32326[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 7))
{var inst_32279 = (state_32283[2]);var state_32283__$1 = state_32283;var statearr_32292_32327 = state_32283__$1;(statearr_32292_32327[2] = inst_32279);
(statearr_32292_32327[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 8))
{var inst_32243 = (state_32283[10]);var inst_32242 = (state_32283[11]);var inst_32245 = (inst_32243 < inst_32242);var inst_32246 = inst_32245;var state_32283__$1 = state_32283;if(cljs.core.truth_(inst_32246))
{var statearr_32293_32328 = state_32283__$1;(statearr_32293_32328[1] = 10);
} else
{var statearr_32294_32329 = state_32283__$1;(statearr_32294_32329[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 9))
{var inst_32276 = (state_32283[2]);var state_32283__$1 = (function (){var statearr_32295 = state_32283;(statearr_32295[12] = inst_32276);
return statearr_32295;
})();var statearr_32296_32330 = state_32283__$1;(statearr_32296_32330[2] = null);
(statearr_32296_32330[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 10))
{var inst_32241 = (state_32283[9]);var inst_32243 = (state_32283[10]);var inst_32248 = cljs.core._nth.call(null,inst_32241,inst_32243);var state_32283__$1 = state_32283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32283__$1,13,out,inst_32248);
} else
{if((state_val_32284 === 11))
{var inst_32240 = (state_32283[8]);var inst_32254 = (state_32283[13]);var inst_32254__$1 = cljs.core.seq.call(null,inst_32240);var state_32283__$1 = (function (){var statearr_32300 = state_32283;(statearr_32300[13] = inst_32254__$1);
return statearr_32300;
})();if(inst_32254__$1)
{var statearr_32301_32331 = state_32283__$1;(statearr_32301_32331[1] = 14);
} else
{var statearr_32302_32332 = state_32283__$1;(statearr_32302_32332[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 12))
{var inst_32274 = (state_32283[2]);var state_32283__$1 = state_32283;var statearr_32303_32333 = state_32283__$1;(statearr_32303_32333[2] = inst_32274);
(statearr_32303_32333[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 13))
{var inst_32240 = (state_32283[8]);var inst_32241 = (state_32283[9]);var inst_32243 = (state_32283[10]);var inst_32242 = (state_32283[11]);var inst_32250 = (state_32283[2]);var inst_32251 = (inst_32243 + 1);var tmp32297 = inst_32240;var tmp32298 = inst_32241;var tmp32299 = inst_32242;var inst_32240__$1 = tmp32297;var inst_32241__$1 = tmp32298;var inst_32242__$1 = tmp32299;var inst_32243__$1 = inst_32251;var state_32283__$1 = (function (){var statearr_32304 = state_32283;(statearr_32304[8] = inst_32240__$1);
(statearr_32304[9] = inst_32241__$1);
(statearr_32304[14] = inst_32250);
(statearr_32304[10] = inst_32243__$1);
(statearr_32304[11] = inst_32242__$1);
return statearr_32304;
})();var statearr_32305_32334 = state_32283__$1;(statearr_32305_32334[2] = null);
(statearr_32305_32334[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 14))
{var inst_32254 = (state_32283[13]);var inst_32256 = cljs.core.chunked_seq_QMARK_.call(null,inst_32254);var state_32283__$1 = state_32283;if(inst_32256)
{var statearr_32306_32335 = state_32283__$1;(statearr_32306_32335[1] = 17);
} else
{var statearr_32307_32336 = state_32283__$1;(statearr_32307_32336[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 15))
{var state_32283__$1 = state_32283;var statearr_32308_32337 = state_32283__$1;(statearr_32308_32337[2] = null);
(statearr_32308_32337[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 16))
{var inst_32272 = (state_32283[2]);var state_32283__$1 = state_32283;var statearr_32309_32338 = state_32283__$1;(statearr_32309_32338[2] = inst_32272);
(statearr_32309_32338[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 17))
{var inst_32254 = (state_32283[13]);var inst_32258 = cljs.core.chunk_first.call(null,inst_32254);var inst_32259 = cljs.core.chunk_rest.call(null,inst_32254);var inst_32260 = cljs.core.count.call(null,inst_32258);var inst_32240 = inst_32259;var inst_32241 = inst_32258;var inst_32242 = inst_32260;var inst_32243 = 0;var state_32283__$1 = (function (){var statearr_32310 = state_32283;(statearr_32310[8] = inst_32240);
(statearr_32310[9] = inst_32241);
(statearr_32310[10] = inst_32243);
(statearr_32310[11] = inst_32242);
return statearr_32310;
})();var statearr_32311_32339 = state_32283__$1;(statearr_32311_32339[2] = null);
(statearr_32311_32339[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 18))
{var inst_32254 = (state_32283[13]);var inst_32263 = cljs.core.first.call(null,inst_32254);var state_32283__$1 = state_32283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32283__$1,20,out,inst_32263);
} else
{if((state_val_32284 === 19))
{var inst_32269 = (state_32283[2]);var state_32283__$1 = state_32283;var statearr_32312_32340 = state_32283__$1;(statearr_32312_32340[2] = inst_32269);
(statearr_32312_32340[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32284 === 20))
{var inst_32254 = (state_32283[13]);var inst_32265 = (state_32283[2]);var inst_32266 = cljs.core.next.call(null,inst_32254);var inst_32240 = inst_32266;var inst_32241 = null;var inst_32242 = 0;var inst_32243 = 0;var state_32283__$1 = (function (){var statearr_32313 = state_32283;(statearr_32313[15] = inst_32265);
(statearr_32313[8] = inst_32240);
(statearr_32313[9] = inst_32241);
(statearr_32313[10] = inst_32243);
(statearr_32313[11] = inst_32242);
return statearr_32313;
})();var statearr_32314_32341 = state_32283__$1;(statearr_32314_32341[2] = null);
(statearr_32314_32341[1] = 8);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_32318 = (new Array(16));(statearr_32318[0] = state_machine__12403__auto__);
(statearr_32318[1] = 1);
return statearr_32318;
});
var state_machine__12403__auto____1 = (function (state_32283){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_32283);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e32319){if((e32319 instanceof Object))
{var ex__12406__auto__ = e32319;var statearr_32320_32342 = state_32283;(statearr_32320_32342[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32283);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32343 = state_32283;
state_32283 = G__32343;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_32283){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_32283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_32321 = f__12478__auto__.call(null);(statearr_32321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto__);
return statearr_32321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
}));
return c__12477__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12477__auto___32424 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_32403){var state_val_32404 = (state_32403[1]);if((state_val_32404 === 1))
{var state_32403__$1 = state_32403;var statearr_32405_32425 = state_32403__$1;(statearr_32405_32425[2] = null);
(statearr_32405_32425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32404 === 2))
{var state_32403__$1 = state_32403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32403__$1,4,from);
} else
{if((state_val_32404 === 3))
{var inst_32401 = (state_32403[2]);var state_32403__$1 = state_32403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32403__$1,inst_32401);
} else
{if((state_val_32404 === 4))
{var inst_32386 = (state_32403[7]);var inst_32386__$1 = (state_32403[2]);var inst_32387 = (inst_32386__$1 == null);var state_32403__$1 = (function (){var statearr_32406 = state_32403;(statearr_32406[7] = inst_32386__$1);
return statearr_32406;
})();if(cljs.core.truth_(inst_32387))
{var statearr_32407_32426 = state_32403__$1;(statearr_32407_32426[1] = 5);
} else
{var statearr_32408_32427 = state_32403__$1;(statearr_32408_32427[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32404 === 5))
{var state_32403__$1 = state_32403;if(cljs.core.truth_(close_QMARK_))
{var statearr_32409_32428 = state_32403__$1;(statearr_32409_32428[1] = 8);
} else
{var statearr_32410_32429 = state_32403__$1;(statearr_32410_32429[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32404 === 6))
{var inst_32386 = (state_32403[7]);var state_32403__$1 = state_32403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32403__$1,11,to,inst_32386);
} else
{if((state_val_32404 === 7))
{var inst_32399 = (state_32403[2]);var state_32403__$1 = state_32403;var statearr_32411_32430 = state_32403__$1;(statearr_32411_32430[2] = inst_32399);
(statearr_32411_32430[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32404 === 8))
{var inst_32390 = cljs.core.async.close_BANG_.call(null,to);var state_32403__$1 = state_32403;var statearr_32412_32431 = state_32403__$1;(statearr_32412_32431[2] = inst_32390);
(statearr_32412_32431[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32404 === 9))
{var state_32403__$1 = state_32403;var statearr_32413_32432 = state_32403__$1;(statearr_32413_32432[2] = null);
(statearr_32413_32432[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32404 === 10))
{var inst_32393 = (state_32403[2]);var state_32403__$1 = state_32403;var statearr_32414_32433 = state_32403__$1;(statearr_32414_32433[2] = inst_32393);
(statearr_32414_32433[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32404 === 11))
{var inst_32396 = (state_32403[2]);var state_32403__$1 = (function (){var statearr_32415 = state_32403;(statearr_32415[8] = inst_32396);
return statearr_32415;
})();var statearr_32416_32434 = state_32403__$1;(statearr_32416_32434[2] = null);
(statearr_32416_32434[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_32420 = (new Array(9));(statearr_32420[0] = state_machine__12403__auto__);
(statearr_32420[1] = 1);
return statearr_32420;
});
var state_machine__12403__auto____1 = (function (state_32403){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_32403);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e32421){if((e32421 instanceof Object))
{var ex__12406__auto__ = e32421;var statearr_32422_32435 = state_32403;(statearr_32422_32435[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32436 = state_32403;
state_32403 = G__32436;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_32403){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_32403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_32423 = f__12478__auto__.call(null);(statearr_32423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___32424);
return statearr_32423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12477__auto___32523 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_32501){var state_val_32502 = (state_32501[1]);if((state_val_32502 === 1))
{var state_32501__$1 = state_32501;var statearr_32503_32524 = state_32501__$1;(statearr_32503_32524[2] = null);
(statearr_32503_32524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32502 === 2))
{var state_32501__$1 = state_32501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32501__$1,4,ch);
} else
{if((state_val_32502 === 3))
{var inst_32499 = (state_32501[2]);var state_32501__$1 = state_32501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32501__$1,inst_32499);
} else
{if((state_val_32502 === 4))
{var inst_32482 = (state_32501[7]);var inst_32482__$1 = (state_32501[2]);var inst_32483 = (inst_32482__$1 == null);var state_32501__$1 = (function (){var statearr_32504 = state_32501;(statearr_32504[7] = inst_32482__$1);
return statearr_32504;
})();if(cljs.core.truth_(inst_32483))
{var statearr_32505_32525 = state_32501__$1;(statearr_32505_32525[1] = 5);
} else
{var statearr_32506_32526 = state_32501__$1;(statearr_32506_32526[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32502 === 5))
{var inst_32485 = cljs.core.async.close_BANG_.call(null,tc);var inst_32486 = cljs.core.async.close_BANG_.call(null,fc);var state_32501__$1 = (function (){var statearr_32507 = state_32501;(statearr_32507[8] = inst_32485);
return statearr_32507;
})();var statearr_32508_32527 = state_32501__$1;(statearr_32508_32527[2] = inst_32486);
(statearr_32508_32527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32502 === 6))
{var inst_32482 = (state_32501[7]);var inst_32488 = p.call(null,inst_32482);var state_32501__$1 = state_32501;if(cljs.core.truth_(inst_32488))
{var statearr_32509_32528 = state_32501__$1;(statearr_32509_32528[1] = 9);
} else
{var statearr_32510_32529 = state_32501__$1;(statearr_32510_32529[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32502 === 7))
{var inst_32497 = (state_32501[2]);var state_32501__$1 = state_32501;var statearr_32511_32530 = state_32501__$1;(statearr_32511_32530[2] = inst_32497);
(statearr_32511_32530[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32502 === 8))
{var inst_32494 = (state_32501[2]);var state_32501__$1 = (function (){var statearr_32512 = state_32501;(statearr_32512[9] = inst_32494);
return statearr_32512;
})();var statearr_32513_32531 = state_32501__$1;(statearr_32513_32531[2] = null);
(statearr_32513_32531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32502 === 9))
{var state_32501__$1 = state_32501;var statearr_32514_32532 = state_32501__$1;(statearr_32514_32532[2] = tc);
(statearr_32514_32532[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32502 === 10))
{var state_32501__$1 = state_32501;var statearr_32515_32533 = state_32501__$1;(statearr_32515_32533[2] = fc);
(statearr_32515_32533[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32502 === 11))
{var inst_32482 = (state_32501[7]);var inst_32492 = (state_32501[2]);var state_32501__$1 = state_32501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32501__$1,8,inst_32492,inst_32482);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_32519 = (new Array(10));(statearr_32519[0] = state_machine__12403__auto__);
(statearr_32519[1] = 1);
return statearr_32519;
});
var state_machine__12403__auto____1 = (function (state_32501){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_32501);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e32520){if((e32520 instanceof Object))
{var ex__12406__auto__ = e32520;var statearr_32521_32534 = state_32501;(statearr_32521_32534[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32535 = state_32501;
state_32501 = G__32535;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_32501){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_32501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_32522 = f__12478__auto__.call(null);(statearr_32522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___32523);
return statearr_32522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12477__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_32582){var state_val_32583 = (state_32582[1]);if((state_val_32583 === 7))
{var inst_32578 = (state_32582[2]);var state_32582__$1 = state_32582;var statearr_32584_32600 = state_32582__$1;(statearr_32584_32600[2] = inst_32578);
(statearr_32584_32600[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32583 === 6))
{var inst_32568 = (state_32582[7]);var inst_32571 = (state_32582[8]);var inst_32575 = f.call(null,inst_32568,inst_32571);var inst_32568__$1 = inst_32575;var state_32582__$1 = (function (){var statearr_32585 = state_32582;(statearr_32585[7] = inst_32568__$1);
return statearr_32585;
})();var statearr_32586_32601 = state_32582__$1;(statearr_32586_32601[2] = null);
(statearr_32586_32601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32583 === 5))
{var inst_32568 = (state_32582[7]);var state_32582__$1 = state_32582;var statearr_32587_32602 = state_32582__$1;(statearr_32587_32602[2] = inst_32568);
(statearr_32587_32602[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32583 === 4))
{var inst_32571 = (state_32582[8]);var inst_32571__$1 = (state_32582[2]);var inst_32572 = (inst_32571__$1 == null);var state_32582__$1 = (function (){var statearr_32588 = state_32582;(statearr_32588[8] = inst_32571__$1);
return statearr_32588;
})();if(cljs.core.truth_(inst_32572))
{var statearr_32589_32603 = state_32582__$1;(statearr_32589_32603[1] = 5);
} else
{var statearr_32590_32604 = state_32582__$1;(statearr_32590_32604[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32583 === 3))
{var inst_32580 = (state_32582[2]);var state_32582__$1 = state_32582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32582__$1,inst_32580);
} else
{if((state_val_32583 === 2))
{var state_32582__$1 = state_32582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32582__$1,4,ch);
} else
{if((state_val_32583 === 1))
{var inst_32568 = init;var state_32582__$1 = (function (){var statearr_32591 = state_32582;(statearr_32591[7] = inst_32568);
return statearr_32591;
})();var statearr_32592_32605 = state_32582__$1;(statearr_32592_32605[2] = null);
(statearr_32592_32605[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_32596 = (new Array(9));(statearr_32596[0] = state_machine__12403__auto__);
(statearr_32596[1] = 1);
return statearr_32596;
});
var state_machine__12403__auto____1 = (function (state_32582){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_32582);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e32597){if((e32597 instanceof Object))
{var ex__12406__auto__ = e32597;var statearr_32598_32606 = state_32582;(statearr_32598_32606[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32607 = state_32582;
state_32582 = G__32607;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_32582){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_32582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_32599 = f__12478__auto__.call(null);(statearr_32599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto__);
return statearr_32599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
}));
return c__12477__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12477__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_32669){var state_val_32670 = (state_32669[1]);if((state_val_32670 === 1))
{var inst_32649 = cljs.core.seq.call(null,coll);var inst_32650 = inst_32649;var state_32669__$1 = (function (){var statearr_32671 = state_32669;(statearr_32671[7] = inst_32650);
return statearr_32671;
})();var statearr_32672_32690 = state_32669__$1;(statearr_32672_32690[2] = null);
(statearr_32672_32690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32670 === 2))
{var inst_32650 = (state_32669[7]);var state_32669__$1 = state_32669;if(cljs.core.truth_(inst_32650))
{var statearr_32673_32691 = state_32669__$1;(statearr_32673_32691[1] = 4);
} else
{var statearr_32674_32692 = state_32669__$1;(statearr_32674_32692[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32670 === 3))
{var inst_32667 = (state_32669[2]);var state_32669__$1 = state_32669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32669__$1,inst_32667);
} else
{if((state_val_32670 === 4))
{var inst_32650 = (state_32669[7]);var inst_32653 = cljs.core.first.call(null,inst_32650);var state_32669__$1 = state_32669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32669__$1,7,ch,inst_32653);
} else
{if((state_val_32670 === 5))
{var state_32669__$1 = state_32669;if(cljs.core.truth_(close_QMARK_))
{var statearr_32675_32693 = state_32669__$1;(statearr_32675_32693[1] = 8);
} else
{var statearr_32676_32694 = state_32669__$1;(statearr_32676_32694[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32670 === 6))
{var inst_32665 = (state_32669[2]);var state_32669__$1 = state_32669;var statearr_32677_32695 = state_32669__$1;(statearr_32677_32695[2] = inst_32665);
(statearr_32677_32695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32670 === 7))
{var inst_32650 = (state_32669[7]);var inst_32655 = (state_32669[2]);var inst_32656 = cljs.core.next.call(null,inst_32650);var inst_32650__$1 = inst_32656;var state_32669__$1 = (function (){var statearr_32678 = state_32669;(statearr_32678[8] = inst_32655);
(statearr_32678[7] = inst_32650__$1);
return statearr_32678;
})();var statearr_32679_32696 = state_32669__$1;(statearr_32679_32696[2] = null);
(statearr_32679_32696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32670 === 8))
{var inst_32660 = cljs.core.async.close_BANG_.call(null,ch);var state_32669__$1 = state_32669;var statearr_32680_32697 = state_32669__$1;(statearr_32680_32697[2] = inst_32660);
(statearr_32680_32697[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32670 === 9))
{var state_32669__$1 = state_32669;var statearr_32681_32698 = state_32669__$1;(statearr_32681_32698[2] = null);
(statearr_32681_32698[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32670 === 10))
{var inst_32663 = (state_32669[2]);var state_32669__$1 = state_32669;var statearr_32682_32699 = state_32669__$1;(statearr_32682_32699[2] = inst_32663);
(statearr_32682_32699[1] = 6);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_32686 = (new Array(9));(statearr_32686[0] = state_machine__12403__auto__);
(statearr_32686[1] = 1);
return statearr_32686;
});
var state_machine__12403__auto____1 = (function (state_32669){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_32669);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e32687){if((e32687 instanceof Object))
{var ex__12406__auto__ = e32687;var statearr_32688_32700 = state_32669;(statearr_32688_32700[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32669);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32701 = state_32669;
state_32669 = G__32701;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_32669){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_32669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_32689 = f__12478__auto__.call(null);(statearr_32689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto__);
return statearr_32689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
}));
return c__12477__auto__;
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
cljs.core.async.Mux = (function (){var obj32703 = {};return obj32703;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__5145__auto__ = _;if(and__5145__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5760__auto__ = (((_ == null))?null:_);return (function (){var or__5157__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj32705 = {};return obj32705;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32920 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32920 = (function (cs,ch,mult,meta32921){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32921 = meta32921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32920.cljs$lang$type = true;
cljs.core.async.t32920.cljs$lang$ctorStr = "cljs.core.async/t32920";
cljs.core.async.t32920.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t32920");
});})(cs))
;
cljs.core.async.t32920.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32920.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32920.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32920.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32920.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32920.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32922){var self__ = this;
var _32922__$1 = this;return self__.meta32921;
});})(cs))
;
cljs.core.async.t32920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32922,meta32921__$1){var self__ = this;
var _32922__$1 = this;return (new cljs.core.async.t32920(self__.cs,self__.ch,self__.mult,meta32921__$1));
});})(cs))
;
cljs.core.async.__GT_t32920 = ((function (cs){
return (function __GT_t32920(cs__$1,ch__$1,mult__$1,meta32921){return (new cljs.core.async.t32920(cs__$1,ch__$1,mult__$1,meta32921));
});})(cs))
;
}
return (new cljs.core.async.t32920(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12477__auto___33134 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_33052){var state_val_33053 = (state_33052[1]);if((state_val_33053 === 32))
{var inst_33001 = (state_33052[7]);var inst_32925 = (state_33052[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33052,31,Object,null,30);var inst_33008 = cljs.core.async.put_BANG_.call(null,inst_33001,inst_32925,done);var state_33052__$1 = state_33052;var statearr_33054_33135 = state_33052__$1;(statearr_33054_33135[2] = inst_33008);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33052__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 1))
{var state_33052__$1 = state_33052;var statearr_33055_33136 = state_33052__$1;(statearr_33055_33136[2] = null);
(statearr_33055_33136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 33))
{var inst_33014 = (state_33052[9]);var inst_33016 = cljs.core.chunked_seq_QMARK_.call(null,inst_33014);var state_33052__$1 = state_33052;if(inst_33016)
{var statearr_33056_33137 = state_33052__$1;(statearr_33056_33137[1] = 36);
} else
{var statearr_33057_33138 = state_33052__$1;(statearr_33057_33138[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 2))
{var state_33052__$1 = state_33052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33052__$1,4,ch);
} else
{if((state_val_33053 === 34))
{var state_33052__$1 = state_33052;var statearr_33058_33139 = state_33052__$1;(statearr_33058_33139[2] = null);
(statearr_33058_33139[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 3))
{var inst_33050 = (state_33052[2]);var state_33052__$1 = state_33052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33052__$1,inst_33050);
} else
{if((state_val_33053 === 35))
{var inst_33039 = (state_33052[2]);var state_33052__$1 = state_33052;var statearr_33059_33140 = state_33052__$1;(statearr_33059_33140[2] = inst_33039);
(statearr_33059_33140[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 4))
{var inst_32925 = (state_33052[8]);var inst_32925__$1 = (state_33052[2]);var inst_32926 = (inst_32925__$1 == null);var state_33052__$1 = (function (){var statearr_33060 = state_33052;(statearr_33060[8] = inst_32925__$1);
return statearr_33060;
})();if(cljs.core.truth_(inst_32926))
{var statearr_33061_33141 = state_33052__$1;(statearr_33061_33141[1] = 5);
} else
{var statearr_33062_33142 = state_33052__$1;(statearr_33062_33142[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 36))
{var inst_33014 = (state_33052[9]);var inst_33018 = cljs.core.chunk_first.call(null,inst_33014);var inst_33019 = cljs.core.chunk_rest.call(null,inst_33014);var inst_33020 = cljs.core.count.call(null,inst_33018);var inst_32993 = inst_33019;var inst_32994 = inst_33018;var inst_32995 = inst_33020;var inst_32996 = 0;var state_33052__$1 = (function (){var statearr_33063 = state_33052;(statearr_33063[10] = inst_32993);
(statearr_33063[11] = inst_32994);
(statearr_33063[12] = inst_32995);
(statearr_33063[13] = inst_32996);
return statearr_33063;
})();var statearr_33064_33143 = state_33052__$1;(statearr_33064_33143[2] = null);
(statearr_33064_33143[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 5))
{var inst_32932 = cljs.core.deref.call(null,cs);var inst_32933 = cljs.core.seq.call(null,inst_32932);var inst_32934 = inst_32933;var inst_32935 = null;var inst_32936 = 0;var inst_32937 = 0;var state_33052__$1 = (function (){var statearr_33065 = state_33052;(statearr_33065[14] = inst_32935);
(statearr_33065[15] = inst_32934);
(statearr_33065[16] = inst_32936);
(statearr_33065[17] = inst_32937);
return statearr_33065;
})();var statearr_33066_33144 = state_33052__$1;(statearr_33066_33144[2] = null);
(statearr_33066_33144[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 37))
{var inst_33014 = (state_33052[9]);var inst_33023 = cljs.core.first.call(null,inst_33014);var state_33052__$1 = (function (){var statearr_33067 = state_33052;(statearr_33067[18] = inst_33023);
return statearr_33067;
})();var statearr_33068_33145 = state_33052__$1;(statearr_33068_33145[2] = null);
(statearr_33068_33145[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 6))
{var inst_32984 = cljs.core.deref.call(null,cs);var inst_32985 = cljs.core.keys.call(null,inst_32984);var inst_32986 = cljs.core.count.call(null,inst_32985);var inst_32987 = cljs.core.reset_BANG_.call(null,dctr,inst_32986);var inst_32992 = cljs.core.seq.call(null,inst_32985);var inst_32993 = inst_32992;var inst_32994 = null;var inst_32995 = 0;var inst_32996 = 0;var state_33052__$1 = (function (){var statearr_33069 = state_33052;(statearr_33069[10] = inst_32993);
(statearr_33069[19] = inst_32987);
(statearr_33069[11] = inst_32994);
(statearr_33069[12] = inst_32995);
(statearr_33069[13] = inst_32996);
return statearr_33069;
})();var statearr_33070_33146 = state_33052__$1;(statearr_33070_33146[2] = null);
(statearr_33070_33146[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 38))
{var inst_33036 = (state_33052[2]);var state_33052__$1 = state_33052;var statearr_33071_33147 = state_33052__$1;(statearr_33071_33147[2] = inst_33036);
(statearr_33071_33147[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 7))
{var inst_33048 = (state_33052[2]);var state_33052__$1 = state_33052;var statearr_33072_33148 = state_33052__$1;(statearr_33072_33148[2] = inst_33048);
(statearr_33072_33148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 39))
{var inst_33014 = (state_33052[9]);var inst_33032 = (state_33052[2]);var inst_33033 = cljs.core.next.call(null,inst_33014);var inst_32993 = inst_33033;var inst_32994 = null;var inst_32995 = 0;var inst_32996 = 0;var state_33052__$1 = (function (){var statearr_33073 = state_33052;(statearr_33073[20] = inst_33032);
(statearr_33073[10] = inst_32993);
(statearr_33073[11] = inst_32994);
(statearr_33073[12] = inst_32995);
(statearr_33073[13] = inst_32996);
return statearr_33073;
})();var statearr_33074_33149 = state_33052__$1;(statearr_33074_33149[2] = null);
(statearr_33074_33149[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 8))
{var inst_32936 = (state_33052[16]);var inst_32937 = (state_33052[17]);var inst_32939 = (inst_32937 < inst_32936);var inst_32940 = inst_32939;var state_33052__$1 = state_33052;if(cljs.core.truth_(inst_32940))
{var statearr_33075_33150 = state_33052__$1;(statearr_33075_33150[1] = 10);
} else
{var statearr_33076_33151 = state_33052__$1;(statearr_33076_33151[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 40))
{var inst_33023 = (state_33052[18]);var inst_33024 = (state_33052[2]);var inst_33025 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33026 = cljs.core.async.untap_STAR_.call(null,m,inst_33023);var state_33052__$1 = (function (){var statearr_33077 = state_33052;(statearr_33077[21] = inst_33025);
(statearr_33077[22] = inst_33024);
return statearr_33077;
})();var statearr_33078_33152 = state_33052__$1;(statearr_33078_33152[2] = inst_33026);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33052__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 9))
{var inst_32982 = (state_33052[2]);var state_33052__$1 = state_33052;var statearr_33079_33153 = state_33052__$1;(statearr_33079_33153[2] = inst_32982);
(statearr_33079_33153[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 41))
{var inst_32925 = (state_33052[8]);var inst_33023 = (state_33052[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33052,40,Object,null,39);var inst_33030 = cljs.core.async.put_BANG_.call(null,inst_33023,inst_32925,done);var state_33052__$1 = state_33052;var statearr_33080_33154 = state_33052__$1;(statearr_33080_33154[2] = inst_33030);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33052__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 10))
{var inst_32935 = (state_33052[14]);var inst_32937 = (state_33052[17]);var inst_32943 = cljs.core._nth.call(null,inst_32935,inst_32937);var inst_32944 = cljs.core.nth.call(null,inst_32943,0,null);var inst_32945 = cljs.core.nth.call(null,inst_32943,1,null);var state_33052__$1 = (function (){var statearr_33081 = state_33052;(statearr_33081[23] = inst_32944);
return statearr_33081;
})();if(cljs.core.truth_(inst_32945))
{var statearr_33082_33155 = state_33052__$1;(statearr_33082_33155[1] = 13);
} else
{var statearr_33083_33156 = state_33052__$1;(statearr_33083_33156[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 42))
{var inst_33045 = (state_33052[2]);var state_33052__$1 = (function (){var statearr_33084 = state_33052;(statearr_33084[24] = inst_33045);
return statearr_33084;
})();var statearr_33085_33157 = state_33052__$1;(statearr_33085_33157[2] = null);
(statearr_33085_33157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 11))
{var inst_32954 = (state_33052[25]);var inst_32934 = (state_33052[15]);var inst_32954__$1 = cljs.core.seq.call(null,inst_32934);var state_33052__$1 = (function (){var statearr_33086 = state_33052;(statearr_33086[25] = inst_32954__$1);
return statearr_33086;
})();if(inst_32954__$1)
{var statearr_33087_33158 = state_33052__$1;(statearr_33087_33158[1] = 16);
} else
{var statearr_33088_33159 = state_33052__$1;(statearr_33088_33159[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 12))
{var inst_32980 = (state_33052[2]);var state_33052__$1 = state_33052;var statearr_33089_33160 = state_33052__$1;(statearr_33089_33160[2] = inst_32980);
(statearr_33089_33160[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 13))
{var inst_32944 = (state_33052[23]);var inst_32947 = cljs.core.async.close_BANG_.call(null,inst_32944);var state_33052__$1 = state_33052;var statearr_33093_33161 = state_33052__$1;(statearr_33093_33161[2] = inst_32947);
(statearr_33093_33161[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 14))
{var state_33052__$1 = state_33052;var statearr_33094_33162 = state_33052__$1;(statearr_33094_33162[2] = null);
(statearr_33094_33162[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 15))
{var inst_32935 = (state_33052[14]);var inst_32934 = (state_33052[15]);var inst_32936 = (state_33052[16]);var inst_32937 = (state_33052[17]);var inst_32950 = (state_33052[2]);var inst_32951 = (inst_32937 + 1);var tmp33090 = inst_32935;var tmp33091 = inst_32934;var tmp33092 = inst_32936;var inst_32934__$1 = tmp33091;var inst_32935__$1 = tmp33090;var inst_32936__$1 = tmp33092;var inst_32937__$1 = inst_32951;var state_33052__$1 = (function (){var statearr_33095 = state_33052;(statearr_33095[14] = inst_32935__$1);
(statearr_33095[15] = inst_32934__$1);
(statearr_33095[16] = inst_32936__$1);
(statearr_33095[17] = inst_32937__$1);
(statearr_33095[26] = inst_32950);
return statearr_33095;
})();var statearr_33096_33163 = state_33052__$1;(statearr_33096_33163[2] = null);
(statearr_33096_33163[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 16))
{var inst_32954 = (state_33052[25]);var inst_32956 = cljs.core.chunked_seq_QMARK_.call(null,inst_32954);var state_33052__$1 = state_33052;if(inst_32956)
{var statearr_33097_33164 = state_33052__$1;(statearr_33097_33164[1] = 19);
} else
{var statearr_33098_33165 = state_33052__$1;(statearr_33098_33165[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 17))
{var state_33052__$1 = state_33052;var statearr_33099_33166 = state_33052__$1;(statearr_33099_33166[2] = null);
(statearr_33099_33166[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 18))
{var inst_32978 = (state_33052[2]);var state_33052__$1 = state_33052;var statearr_33100_33167 = state_33052__$1;(statearr_33100_33167[2] = inst_32978);
(statearr_33100_33167[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 19))
{var inst_32954 = (state_33052[25]);var inst_32958 = cljs.core.chunk_first.call(null,inst_32954);var inst_32959 = cljs.core.chunk_rest.call(null,inst_32954);var inst_32960 = cljs.core.count.call(null,inst_32958);var inst_32934 = inst_32959;var inst_32935 = inst_32958;var inst_32936 = inst_32960;var inst_32937 = 0;var state_33052__$1 = (function (){var statearr_33101 = state_33052;(statearr_33101[14] = inst_32935);
(statearr_33101[15] = inst_32934);
(statearr_33101[16] = inst_32936);
(statearr_33101[17] = inst_32937);
return statearr_33101;
})();var statearr_33102_33168 = state_33052__$1;(statearr_33102_33168[2] = null);
(statearr_33102_33168[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 20))
{var inst_32954 = (state_33052[25]);var inst_32964 = cljs.core.first.call(null,inst_32954);var inst_32965 = cljs.core.nth.call(null,inst_32964,0,null);var inst_32966 = cljs.core.nth.call(null,inst_32964,1,null);var state_33052__$1 = (function (){var statearr_33103 = state_33052;(statearr_33103[27] = inst_32965);
return statearr_33103;
})();if(cljs.core.truth_(inst_32966))
{var statearr_33104_33169 = state_33052__$1;(statearr_33104_33169[1] = 22);
} else
{var statearr_33105_33170 = state_33052__$1;(statearr_33105_33170[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 21))
{var inst_32975 = (state_33052[2]);var state_33052__$1 = state_33052;var statearr_33106_33171 = state_33052__$1;(statearr_33106_33171[2] = inst_32975);
(statearr_33106_33171[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 22))
{var inst_32965 = (state_33052[27]);var inst_32968 = cljs.core.async.close_BANG_.call(null,inst_32965);var state_33052__$1 = state_33052;var statearr_33107_33172 = state_33052__$1;(statearr_33107_33172[2] = inst_32968);
(statearr_33107_33172[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 23))
{var state_33052__$1 = state_33052;var statearr_33108_33173 = state_33052__$1;(statearr_33108_33173[2] = null);
(statearr_33108_33173[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 24))
{var inst_32954 = (state_33052[25]);var inst_32971 = (state_33052[2]);var inst_32972 = cljs.core.next.call(null,inst_32954);var inst_32934 = inst_32972;var inst_32935 = null;var inst_32936 = 0;var inst_32937 = 0;var state_33052__$1 = (function (){var statearr_33109 = state_33052;(statearr_33109[14] = inst_32935);
(statearr_33109[15] = inst_32934);
(statearr_33109[28] = inst_32971);
(statearr_33109[16] = inst_32936);
(statearr_33109[17] = inst_32937);
return statearr_33109;
})();var statearr_33110_33174 = state_33052__$1;(statearr_33110_33174[2] = null);
(statearr_33110_33174[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 25))
{var inst_32995 = (state_33052[12]);var inst_32996 = (state_33052[13]);var inst_32998 = (inst_32996 < inst_32995);var inst_32999 = inst_32998;var state_33052__$1 = state_33052;if(cljs.core.truth_(inst_32999))
{var statearr_33111_33175 = state_33052__$1;(statearr_33111_33175[1] = 27);
} else
{var statearr_33112_33176 = state_33052__$1;(statearr_33112_33176[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 26))
{var inst_33043 = (state_33052[2]);var state_33052__$1 = (function (){var statearr_33113 = state_33052;(statearr_33113[29] = inst_33043);
return statearr_33113;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33052__$1,42,dchan);
} else
{if((state_val_33053 === 27))
{var inst_32994 = (state_33052[11]);var inst_32996 = (state_33052[13]);var inst_33001 = cljs.core._nth.call(null,inst_32994,inst_32996);var state_33052__$1 = (function (){var statearr_33114 = state_33052;(statearr_33114[7] = inst_33001);
return statearr_33114;
})();var statearr_33115_33177 = state_33052__$1;(statearr_33115_33177[2] = null);
(statearr_33115_33177[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 28))
{var inst_32993 = (state_33052[10]);var inst_33014 = (state_33052[9]);var inst_33014__$1 = cljs.core.seq.call(null,inst_32993);var state_33052__$1 = (function (){var statearr_33119 = state_33052;(statearr_33119[9] = inst_33014__$1);
return statearr_33119;
})();if(inst_33014__$1)
{var statearr_33120_33178 = state_33052__$1;(statearr_33120_33178[1] = 33);
} else
{var statearr_33121_33179 = state_33052__$1;(statearr_33121_33179[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 29))
{var inst_33041 = (state_33052[2]);var state_33052__$1 = state_33052;var statearr_33122_33180 = state_33052__$1;(statearr_33122_33180[2] = inst_33041);
(statearr_33122_33180[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 30))
{var inst_32993 = (state_33052[10]);var inst_32994 = (state_33052[11]);var inst_32995 = (state_33052[12]);var inst_32996 = (state_33052[13]);var inst_33010 = (state_33052[2]);var inst_33011 = (inst_32996 + 1);var tmp33116 = inst_32993;var tmp33117 = inst_32994;var tmp33118 = inst_32995;var inst_32993__$1 = tmp33116;var inst_32994__$1 = tmp33117;var inst_32995__$1 = tmp33118;var inst_32996__$1 = inst_33011;var state_33052__$1 = (function (){var statearr_33123 = state_33052;(statearr_33123[10] = inst_32993__$1);
(statearr_33123[30] = inst_33010);
(statearr_33123[11] = inst_32994__$1);
(statearr_33123[12] = inst_32995__$1);
(statearr_33123[13] = inst_32996__$1);
return statearr_33123;
})();var statearr_33124_33181 = state_33052__$1;(statearr_33124_33181[2] = null);
(statearr_33124_33181[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33053 === 31))
{var inst_33001 = (state_33052[7]);var inst_33002 = (state_33052[2]);var inst_33003 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33004 = cljs.core.async.untap_STAR_.call(null,m,inst_33001);var state_33052__$1 = (function (){var statearr_33125 = state_33052;(statearr_33125[31] = inst_33003);
(statearr_33125[32] = inst_33002);
return statearr_33125;
})();var statearr_33126_33182 = state_33052__$1;(statearr_33126_33182[2] = inst_33004);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33052__$1);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_33130 = (new Array(33));(statearr_33130[0] = state_machine__12403__auto__);
(statearr_33130[1] = 1);
return statearr_33130;
});
var state_machine__12403__auto____1 = (function (state_33052){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_33052);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e33131){if((e33131 instanceof Object))
{var ex__12406__auto__ = e33131;var statearr_33132_33183 = state_33052;(statearr_33132_33183[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33184 = state_33052;
state_33052 = G__33184;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_33052){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_33052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_33133 = f__12478__auto__.call(null);(statearr_33133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___33134);
return statearr_33133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
cljs.core.async.Mix = (function (){var obj33186 = {};return obj33186;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t33296 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33296 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta33297){
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
this.meta33297 = meta33297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33296.cljs$lang$type = true;
cljs.core.async.t33296.cljs$lang$ctorStr = "cljs.core.async/t33296";
cljs.core.async.t33296.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t33296");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33296.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t33296.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33296.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33296.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33296.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33296.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33296.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33298){var self__ = this;
var _33298__$1 = this;return self__.meta33297;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33298,meta33297__$1){var self__ = this;
var _33298__$1 = this;return (new cljs.core.async.t33296(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta33297__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t33296 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33296(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33297){return (new cljs.core.async.t33296(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33297));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t33296(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12477__auto___33405 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_33363){var state_val_33364 = (state_33363[1]);if((state_val_33364 === 1))
{var inst_33302 = (state_33363[7]);var inst_33302__$1 = calc_state.call(null);var inst_33303 = cljs.core.seq_QMARK_.call(null,inst_33302__$1);var state_33363__$1 = (function (){var statearr_33365 = state_33363;(statearr_33365[7] = inst_33302__$1);
return statearr_33365;
})();if(inst_33303)
{var statearr_33366_33406 = state_33363__$1;(statearr_33366_33406[1] = 2);
} else
{var statearr_33367_33407 = state_33363__$1;(statearr_33367_33407[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 2))
{var inst_33302 = (state_33363[7]);var inst_33305 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33302);var state_33363__$1 = state_33363;var statearr_33368_33408 = state_33363__$1;(statearr_33368_33408[2] = inst_33305);
(statearr_33368_33408[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 3))
{var inst_33302 = (state_33363[7]);var state_33363__$1 = state_33363;var statearr_33369_33409 = state_33363__$1;(statearr_33369_33409[2] = inst_33302);
(statearr_33369_33409[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 4))
{var inst_33302 = (state_33363[7]);var inst_33308 = (state_33363[2]);var inst_33309 = cljs.core.get.call(null,inst_33308,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33310 = cljs.core.get.call(null,inst_33308,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33311 = cljs.core.get.call(null,inst_33308,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_33312 = inst_33302;var state_33363__$1 = (function (){var statearr_33370 = state_33363;(statearr_33370[8] = inst_33312);
(statearr_33370[9] = inst_33311);
(statearr_33370[10] = inst_33310);
(statearr_33370[11] = inst_33309);
return statearr_33370;
})();var statearr_33371_33410 = state_33363__$1;(statearr_33371_33410[2] = null);
(statearr_33371_33410[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 5))
{var inst_33312 = (state_33363[8]);var inst_33315 = cljs.core.seq_QMARK_.call(null,inst_33312);var state_33363__$1 = state_33363;if(inst_33315)
{var statearr_33372_33411 = state_33363__$1;(statearr_33372_33411[1] = 7);
} else
{var statearr_33373_33412 = state_33363__$1;(statearr_33373_33412[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 6))
{var inst_33361 = (state_33363[2]);var state_33363__$1 = state_33363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33363__$1,inst_33361);
} else
{if((state_val_33364 === 7))
{var inst_33312 = (state_33363[8]);var inst_33317 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33312);var state_33363__$1 = state_33363;var statearr_33374_33413 = state_33363__$1;(statearr_33374_33413[2] = inst_33317);
(statearr_33374_33413[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 8))
{var inst_33312 = (state_33363[8]);var state_33363__$1 = state_33363;var statearr_33375_33414 = state_33363__$1;(statearr_33375_33414[2] = inst_33312);
(statearr_33375_33414[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 9))
{var inst_33320 = (state_33363[12]);var inst_33320__$1 = (state_33363[2]);var inst_33321 = cljs.core.get.call(null,inst_33320__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33322 = cljs.core.get.call(null,inst_33320__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33323 = cljs.core.get.call(null,inst_33320__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_33363__$1 = (function (){var statearr_33376 = state_33363;(statearr_33376[13] = inst_33323);
(statearr_33376[14] = inst_33322);
(statearr_33376[12] = inst_33320__$1);
return statearr_33376;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33363__$1,10,inst_33321);
} else
{if((state_val_33364 === 10))
{var inst_33328 = (state_33363[15]);var inst_33327 = (state_33363[16]);var inst_33326 = (state_33363[2]);var inst_33327__$1 = cljs.core.nth.call(null,inst_33326,0,null);var inst_33328__$1 = cljs.core.nth.call(null,inst_33326,1,null);var inst_33329 = (inst_33327__$1 == null);var inst_33330 = cljs.core._EQ_.call(null,inst_33328__$1,change);var inst_33331 = (inst_33329) || (inst_33330);var state_33363__$1 = (function (){var statearr_33377 = state_33363;(statearr_33377[15] = inst_33328__$1);
(statearr_33377[16] = inst_33327__$1);
return statearr_33377;
})();if(cljs.core.truth_(inst_33331))
{var statearr_33378_33415 = state_33363__$1;(statearr_33378_33415[1] = 11);
} else
{var statearr_33379_33416 = state_33363__$1;(statearr_33379_33416[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 11))
{var inst_33327 = (state_33363[16]);var inst_33333 = (inst_33327 == null);var state_33363__$1 = state_33363;if(cljs.core.truth_(inst_33333))
{var statearr_33380_33417 = state_33363__$1;(statearr_33380_33417[1] = 14);
} else
{var statearr_33381_33418 = state_33363__$1;(statearr_33381_33418[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 12))
{var inst_33328 = (state_33363[15]);var inst_33323 = (state_33363[13]);var inst_33342 = (state_33363[17]);var inst_33342__$1 = inst_33323.call(null,inst_33328);var state_33363__$1 = (function (){var statearr_33382 = state_33363;(statearr_33382[17] = inst_33342__$1);
return statearr_33382;
})();if(cljs.core.truth_(inst_33342__$1))
{var statearr_33383_33419 = state_33363__$1;(statearr_33383_33419[1] = 17);
} else
{var statearr_33384_33420 = state_33363__$1;(statearr_33384_33420[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 13))
{var inst_33359 = (state_33363[2]);var state_33363__$1 = state_33363;var statearr_33385_33421 = state_33363__$1;(statearr_33385_33421[2] = inst_33359);
(statearr_33385_33421[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 14))
{var inst_33328 = (state_33363[15]);var inst_33335 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33328);var state_33363__$1 = state_33363;var statearr_33386_33422 = state_33363__$1;(statearr_33386_33422[2] = inst_33335);
(statearr_33386_33422[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 15))
{var state_33363__$1 = state_33363;var statearr_33387_33423 = state_33363__$1;(statearr_33387_33423[2] = null);
(statearr_33387_33423[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 16))
{var inst_33338 = (state_33363[2]);var inst_33339 = calc_state.call(null);var inst_33312 = inst_33339;var state_33363__$1 = (function (){var statearr_33388 = state_33363;(statearr_33388[8] = inst_33312);
(statearr_33388[18] = inst_33338);
return statearr_33388;
})();var statearr_33389_33424 = state_33363__$1;(statearr_33389_33424[2] = null);
(statearr_33389_33424[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 17))
{var inst_33342 = (state_33363[17]);var state_33363__$1 = state_33363;var statearr_33390_33425 = state_33363__$1;(statearr_33390_33425[2] = inst_33342);
(statearr_33390_33425[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 18))
{var inst_33328 = (state_33363[15]);var inst_33323 = (state_33363[13]);var inst_33322 = (state_33363[14]);var inst_33345 = cljs.core.empty_QMARK_.call(null,inst_33323);var inst_33346 = inst_33322.call(null,inst_33328);var inst_33347 = cljs.core.not.call(null,inst_33346);var inst_33348 = (inst_33345) && (inst_33347);var state_33363__$1 = state_33363;var statearr_33391_33426 = state_33363__$1;(statearr_33391_33426[2] = inst_33348);
(statearr_33391_33426[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 19))
{var inst_33350 = (state_33363[2]);var state_33363__$1 = state_33363;if(cljs.core.truth_(inst_33350))
{var statearr_33392_33427 = state_33363__$1;(statearr_33392_33427[1] = 20);
} else
{var statearr_33393_33428 = state_33363__$1;(statearr_33393_33428[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 20))
{var inst_33327 = (state_33363[16]);var state_33363__$1 = state_33363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33363__$1,23,out,inst_33327);
} else
{if((state_val_33364 === 21))
{var state_33363__$1 = state_33363;var statearr_33394_33429 = state_33363__$1;(statearr_33394_33429[2] = null);
(statearr_33394_33429[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 22))
{var inst_33320 = (state_33363[12]);var inst_33356 = (state_33363[2]);var inst_33312 = inst_33320;var state_33363__$1 = (function (){var statearr_33395 = state_33363;(statearr_33395[19] = inst_33356);
(statearr_33395[8] = inst_33312);
return statearr_33395;
})();var statearr_33396_33430 = state_33363__$1;(statearr_33396_33430[2] = null);
(statearr_33396_33430[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 23))
{var inst_33353 = (state_33363[2]);var state_33363__$1 = state_33363;var statearr_33397_33431 = state_33363__$1;(statearr_33397_33431[2] = inst_33353);
(statearr_33397_33431[1] = 22);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_33401 = (new Array(20));(statearr_33401[0] = state_machine__12403__auto__);
(statearr_33401[1] = 1);
return statearr_33401;
});
var state_machine__12403__auto____1 = (function (state_33363){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_33363);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e33402){if((e33402 instanceof Object))
{var ex__12406__auto__ = e33402;var statearr_33403_33432 = state_33363;(statearr_33403_33432[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33363);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33433 = state_33363;
state_33363 = G__33433;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_33363){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_33363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_33404 = f__12478__auto__.call(null);(statearr_33404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___33405);
return statearr_33404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
cljs.core.async.Pub = (function (){var obj33435 = {};return obj33435;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
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
return (function (topic){var or__5157__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5157__auto__,mults){
return (function (p1__33436_SHARP_){if(cljs.core.truth_(p1__33436_SHARP_.call(null,topic)))
{return p1__33436_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33436_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5157__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33561 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33561 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33562){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33562 = meta33562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33561.cljs$lang$type = true;
cljs.core.async.t33561.cljs$lang$ctorStr = "cljs.core.async/t33561";
cljs.core.async.t33561.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t33561");
});})(mults,ensure_mult))
;
cljs.core.async.t33561.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33561.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33561.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33561.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33561.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33561.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33563){var self__ = this;
var _33563__$1 = this;return self__.meta33562;
});})(mults,ensure_mult))
;
cljs.core.async.t33561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33563,meta33562__$1){var self__ = this;
var _33563__$1 = this;return (new cljs.core.async.t33561(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33562__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33561 = ((function (mults,ensure_mult){
return (function __GT_t33561(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33562){return (new cljs.core.async.t33561(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33562));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33561(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12477__auto___33685 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_33637){var state_val_33638 = (state_33637[1]);if((state_val_33638 === 1))
{var state_33637__$1 = state_33637;var statearr_33639_33686 = state_33637__$1;(statearr_33639_33686[2] = null);
(statearr_33639_33686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 2))
{var state_33637__$1 = state_33637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33637__$1,4,ch);
} else
{if((state_val_33638 === 3))
{var inst_33635 = (state_33637[2]);var state_33637__$1 = state_33637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33637__$1,inst_33635);
} else
{if((state_val_33638 === 4))
{var inst_33566 = (state_33637[7]);var inst_33566__$1 = (state_33637[2]);var inst_33567 = (inst_33566__$1 == null);var state_33637__$1 = (function (){var statearr_33640 = state_33637;(statearr_33640[7] = inst_33566__$1);
return statearr_33640;
})();if(cljs.core.truth_(inst_33567))
{var statearr_33641_33687 = state_33637__$1;(statearr_33641_33687[1] = 5);
} else
{var statearr_33642_33688 = state_33637__$1;(statearr_33642_33688[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 5))
{var inst_33573 = cljs.core.deref.call(null,mults);var inst_33574 = cljs.core.vals.call(null,inst_33573);var inst_33575 = cljs.core.seq.call(null,inst_33574);var inst_33576 = inst_33575;var inst_33577 = null;var inst_33578 = 0;var inst_33579 = 0;var state_33637__$1 = (function (){var statearr_33643 = state_33637;(statearr_33643[8] = inst_33577);
(statearr_33643[9] = inst_33578);
(statearr_33643[10] = inst_33579);
(statearr_33643[11] = inst_33576);
return statearr_33643;
})();var statearr_33644_33689 = state_33637__$1;(statearr_33644_33689[2] = null);
(statearr_33644_33689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 6))
{var inst_33614 = (state_33637[12]);var inst_33616 = (state_33637[13]);var inst_33566 = (state_33637[7]);var inst_33614__$1 = topic_fn.call(null,inst_33566);var inst_33615 = cljs.core.deref.call(null,mults);var inst_33616__$1 = cljs.core.get.call(null,inst_33615,inst_33614__$1);var state_33637__$1 = (function (){var statearr_33645 = state_33637;(statearr_33645[12] = inst_33614__$1);
(statearr_33645[13] = inst_33616__$1);
return statearr_33645;
})();if(cljs.core.truth_(inst_33616__$1))
{var statearr_33646_33690 = state_33637__$1;(statearr_33646_33690[1] = 19);
} else
{var statearr_33647_33691 = state_33637__$1;(statearr_33647_33691[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 7))
{var inst_33633 = (state_33637[2]);var state_33637__$1 = state_33637;var statearr_33648_33692 = state_33637__$1;(statearr_33648_33692[2] = inst_33633);
(statearr_33648_33692[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 8))
{var inst_33578 = (state_33637[9]);var inst_33579 = (state_33637[10]);var inst_33581 = (inst_33579 < inst_33578);var inst_33582 = inst_33581;var state_33637__$1 = state_33637;if(cljs.core.truth_(inst_33582))
{var statearr_33652_33693 = state_33637__$1;(statearr_33652_33693[1] = 10);
} else
{var statearr_33653_33694 = state_33637__$1;(statearr_33653_33694[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 9))
{var inst_33612 = (state_33637[2]);var state_33637__$1 = state_33637;var statearr_33654_33695 = state_33637__$1;(statearr_33654_33695[2] = inst_33612);
(statearr_33654_33695[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 10))
{var inst_33577 = (state_33637[8]);var inst_33578 = (state_33637[9]);var inst_33579 = (state_33637[10]);var inst_33576 = (state_33637[11]);var inst_33584 = cljs.core._nth.call(null,inst_33577,inst_33579);var inst_33585 = cljs.core.async.muxch_STAR_.call(null,inst_33584);var inst_33586 = cljs.core.async.close_BANG_.call(null,inst_33585);var inst_33587 = (inst_33579 + 1);var tmp33649 = inst_33577;var tmp33650 = inst_33578;var tmp33651 = inst_33576;var inst_33576__$1 = tmp33651;var inst_33577__$1 = tmp33649;var inst_33578__$1 = tmp33650;var inst_33579__$1 = inst_33587;var state_33637__$1 = (function (){var statearr_33655 = state_33637;(statearr_33655[8] = inst_33577__$1);
(statearr_33655[14] = inst_33586);
(statearr_33655[9] = inst_33578__$1);
(statearr_33655[10] = inst_33579__$1);
(statearr_33655[11] = inst_33576__$1);
return statearr_33655;
})();var statearr_33656_33696 = state_33637__$1;(statearr_33656_33696[2] = null);
(statearr_33656_33696[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 11))
{var inst_33590 = (state_33637[15]);var inst_33576 = (state_33637[11]);var inst_33590__$1 = cljs.core.seq.call(null,inst_33576);var state_33637__$1 = (function (){var statearr_33657 = state_33637;(statearr_33657[15] = inst_33590__$1);
return statearr_33657;
})();if(inst_33590__$1)
{var statearr_33658_33697 = state_33637__$1;(statearr_33658_33697[1] = 13);
} else
{var statearr_33659_33698 = state_33637__$1;(statearr_33659_33698[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 12))
{var inst_33610 = (state_33637[2]);var state_33637__$1 = state_33637;var statearr_33660_33699 = state_33637__$1;(statearr_33660_33699[2] = inst_33610);
(statearr_33660_33699[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 13))
{var inst_33590 = (state_33637[15]);var inst_33592 = cljs.core.chunked_seq_QMARK_.call(null,inst_33590);var state_33637__$1 = state_33637;if(inst_33592)
{var statearr_33661_33700 = state_33637__$1;(statearr_33661_33700[1] = 16);
} else
{var statearr_33662_33701 = state_33637__$1;(statearr_33662_33701[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 14))
{var state_33637__$1 = state_33637;var statearr_33663_33702 = state_33637__$1;(statearr_33663_33702[2] = null);
(statearr_33663_33702[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 15))
{var inst_33608 = (state_33637[2]);var state_33637__$1 = state_33637;var statearr_33664_33703 = state_33637__$1;(statearr_33664_33703[2] = inst_33608);
(statearr_33664_33703[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 16))
{var inst_33590 = (state_33637[15]);var inst_33594 = cljs.core.chunk_first.call(null,inst_33590);var inst_33595 = cljs.core.chunk_rest.call(null,inst_33590);var inst_33596 = cljs.core.count.call(null,inst_33594);var inst_33576 = inst_33595;var inst_33577 = inst_33594;var inst_33578 = inst_33596;var inst_33579 = 0;var state_33637__$1 = (function (){var statearr_33665 = state_33637;(statearr_33665[8] = inst_33577);
(statearr_33665[9] = inst_33578);
(statearr_33665[10] = inst_33579);
(statearr_33665[11] = inst_33576);
return statearr_33665;
})();var statearr_33666_33704 = state_33637__$1;(statearr_33666_33704[2] = null);
(statearr_33666_33704[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 17))
{var inst_33590 = (state_33637[15]);var inst_33599 = cljs.core.first.call(null,inst_33590);var inst_33600 = cljs.core.async.muxch_STAR_.call(null,inst_33599);var inst_33601 = cljs.core.async.close_BANG_.call(null,inst_33600);var inst_33602 = cljs.core.next.call(null,inst_33590);var inst_33576 = inst_33602;var inst_33577 = null;var inst_33578 = 0;var inst_33579 = 0;var state_33637__$1 = (function (){var statearr_33667 = state_33637;(statearr_33667[8] = inst_33577);
(statearr_33667[9] = inst_33578);
(statearr_33667[10] = inst_33579);
(statearr_33667[11] = inst_33576);
(statearr_33667[16] = inst_33601);
return statearr_33667;
})();var statearr_33668_33705 = state_33637__$1;(statearr_33668_33705[2] = null);
(statearr_33668_33705[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 18))
{var inst_33605 = (state_33637[2]);var state_33637__$1 = state_33637;var statearr_33669_33706 = state_33637__$1;(statearr_33669_33706[2] = inst_33605);
(statearr_33669_33706[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 19))
{var state_33637__$1 = state_33637;var statearr_33670_33707 = state_33637__$1;(statearr_33670_33707[2] = null);
(statearr_33670_33707[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 20))
{var state_33637__$1 = state_33637;var statearr_33671_33708 = state_33637__$1;(statearr_33671_33708[2] = null);
(statearr_33671_33708[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 21))
{var inst_33630 = (state_33637[2]);var state_33637__$1 = (function (){var statearr_33672 = state_33637;(statearr_33672[17] = inst_33630);
return statearr_33672;
})();var statearr_33673_33709 = state_33637__$1;(statearr_33673_33709[2] = null);
(statearr_33673_33709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 22))
{var inst_33627 = (state_33637[2]);var state_33637__$1 = state_33637;var statearr_33674_33710 = state_33637__$1;(statearr_33674_33710[2] = inst_33627);
(statearr_33674_33710[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 23))
{var inst_33614 = (state_33637[12]);var inst_33618 = (state_33637[2]);var inst_33619 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33614);var state_33637__$1 = (function (){var statearr_33675 = state_33637;(statearr_33675[18] = inst_33618);
return statearr_33675;
})();var statearr_33676_33711 = state_33637__$1;(statearr_33676_33711[2] = inst_33619);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33637__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33638 === 24))
{var inst_33616 = (state_33637[13]);var inst_33566 = (state_33637[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33637,23,Object,null,22);var inst_33623 = cljs.core.async.muxch_STAR_.call(null,inst_33616);var state_33637__$1 = state_33637;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33637__$1,25,inst_33623,inst_33566);
} else
{if((state_val_33638 === 25))
{var inst_33625 = (state_33637[2]);var state_33637__$1 = state_33637;var statearr_33677_33712 = state_33637__$1;(statearr_33677_33712[2] = inst_33625);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33637__$1);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_33681 = (new Array(19));(statearr_33681[0] = state_machine__12403__auto__);
(statearr_33681[1] = 1);
return statearr_33681;
});
var state_machine__12403__auto____1 = (function (state_33637){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_33637);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e33682){if((e33682 instanceof Object))
{var ex__12406__auto__ = e33682;var statearr_33683_33713 = state_33637;(statearr_33683_33713[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33637);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33714 = state_33637;
state_33637 = G__33714;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_33637){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_33637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_33684 = f__12478__auto__.call(null);(statearr_33684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___33685);
return statearr_33684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
,cljs.core.range.call(null,cnt));var c__12477__auto___33851 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_33821){var state_val_33822 = (state_33821[1]);if((state_val_33822 === 1))
{var state_33821__$1 = state_33821;var statearr_33823_33852 = state_33821__$1;(statearr_33823_33852[2] = null);
(statearr_33823_33852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 2))
{var inst_33784 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33785 = 0;var state_33821__$1 = (function (){var statearr_33824 = state_33821;(statearr_33824[7] = inst_33785);
(statearr_33824[8] = inst_33784);
return statearr_33824;
})();var statearr_33825_33853 = state_33821__$1;(statearr_33825_33853[2] = null);
(statearr_33825_33853[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 3))
{var inst_33819 = (state_33821[2]);var state_33821__$1 = state_33821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33821__$1,inst_33819);
} else
{if((state_val_33822 === 4))
{var inst_33785 = (state_33821[7]);var inst_33787 = (inst_33785 < cnt);var state_33821__$1 = state_33821;if(cljs.core.truth_(inst_33787))
{var statearr_33826_33854 = state_33821__$1;(statearr_33826_33854[1] = 6);
} else
{var statearr_33827_33855 = state_33821__$1;(statearr_33827_33855[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 5))
{var inst_33805 = (state_33821[2]);var state_33821__$1 = (function (){var statearr_33828 = state_33821;(statearr_33828[9] = inst_33805);
return statearr_33828;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33821__$1,12,dchan);
} else
{if((state_val_33822 === 6))
{var state_33821__$1 = state_33821;var statearr_33829_33856 = state_33821__$1;(statearr_33829_33856[2] = null);
(statearr_33829_33856[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 7))
{var state_33821__$1 = state_33821;var statearr_33830_33857 = state_33821__$1;(statearr_33830_33857[2] = null);
(statearr_33830_33857[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 8))
{var inst_33803 = (state_33821[2]);var state_33821__$1 = state_33821;var statearr_33831_33858 = state_33821__$1;(statearr_33831_33858[2] = inst_33803);
(statearr_33831_33858[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 9))
{var inst_33785 = (state_33821[7]);var inst_33798 = (state_33821[2]);var inst_33799 = (inst_33785 + 1);var inst_33785__$1 = inst_33799;var state_33821__$1 = (function (){var statearr_33832 = state_33821;(statearr_33832[10] = inst_33798);
(statearr_33832[7] = inst_33785__$1);
return statearr_33832;
})();var statearr_33833_33859 = state_33821__$1;(statearr_33833_33859[2] = null);
(statearr_33833_33859[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 10))
{var inst_33789 = (state_33821[2]);var inst_33790 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33821__$1 = (function (){var statearr_33834 = state_33821;(statearr_33834[11] = inst_33789);
return statearr_33834;
})();var statearr_33835_33860 = state_33821__$1;(statearr_33835_33860[2] = inst_33790);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33821__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 11))
{var inst_33785 = (state_33821[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33821,10,Object,null,9);var inst_33794 = chs__$1.call(null,inst_33785);var inst_33795 = done.call(null,inst_33785);var inst_33796 = cljs.core.async.take_BANG_.call(null,inst_33794,inst_33795);var state_33821__$1 = state_33821;var statearr_33836_33861 = state_33821__$1;(statearr_33836_33861[2] = inst_33796);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33821__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 12))
{var inst_33807 = (state_33821[12]);var inst_33807__$1 = (state_33821[2]);var inst_33808 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33807__$1);var state_33821__$1 = (function (){var statearr_33837 = state_33821;(statearr_33837[12] = inst_33807__$1);
return statearr_33837;
})();if(cljs.core.truth_(inst_33808))
{var statearr_33838_33862 = state_33821__$1;(statearr_33838_33862[1] = 13);
} else
{var statearr_33839_33863 = state_33821__$1;(statearr_33839_33863[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 13))
{var inst_33810 = cljs.core.async.close_BANG_.call(null,out);var state_33821__$1 = state_33821;var statearr_33840_33864 = state_33821__$1;(statearr_33840_33864[2] = inst_33810);
(statearr_33840_33864[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 14))
{var inst_33807 = (state_33821[12]);var inst_33812 = cljs.core.apply.call(null,f,inst_33807);var state_33821__$1 = state_33821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33821__$1,16,out,inst_33812);
} else
{if((state_val_33822 === 15))
{var inst_33817 = (state_33821[2]);var state_33821__$1 = state_33821;var statearr_33841_33865 = state_33821__$1;(statearr_33841_33865[2] = inst_33817);
(statearr_33841_33865[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33822 === 16))
{var inst_33814 = (state_33821[2]);var state_33821__$1 = (function (){var statearr_33842 = state_33821;(statearr_33842[13] = inst_33814);
return statearr_33842;
})();var statearr_33843_33866 = state_33821__$1;(statearr_33843_33866[2] = null);
(statearr_33843_33866[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_33847 = (new Array(14));(statearr_33847[0] = state_machine__12403__auto__);
(statearr_33847[1] = 1);
return statearr_33847;
});
var state_machine__12403__auto____1 = (function (state_33821){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_33821);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e33848){if((e33848 instanceof Object))
{var ex__12406__auto__ = e33848;var statearr_33849_33867 = state_33821;(statearr_33849_33867[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33821);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33868 = state_33821;
state_33821 = G__33868;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_33821){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_33821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_33850 = f__12478__auto__.call(null);(statearr_33850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___33851);
return statearr_33850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___33976 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_33952){var state_val_33953 = (state_33952[1]);if((state_val_33953 === 1))
{var inst_33923 = cljs.core.vec.call(null,chs);var inst_33924 = inst_33923;var state_33952__$1 = (function (){var statearr_33954 = state_33952;(statearr_33954[7] = inst_33924);
return statearr_33954;
})();var statearr_33955_33977 = state_33952__$1;(statearr_33955_33977[2] = null);
(statearr_33955_33977[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33953 === 2))
{var inst_33924 = (state_33952[7]);var inst_33926 = cljs.core.count.call(null,inst_33924);var inst_33927 = (inst_33926 > 0);var state_33952__$1 = state_33952;if(cljs.core.truth_(inst_33927))
{var statearr_33956_33978 = state_33952__$1;(statearr_33956_33978[1] = 4);
} else
{var statearr_33957_33979 = state_33952__$1;(statearr_33957_33979[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33953 === 3))
{var inst_33950 = (state_33952[2]);var state_33952__$1 = state_33952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33952__$1,inst_33950);
} else
{if((state_val_33953 === 4))
{var inst_33924 = (state_33952[7]);var state_33952__$1 = state_33952;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33952__$1,7,inst_33924);
} else
{if((state_val_33953 === 5))
{var inst_33946 = cljs.core.async.close_BANG_.call(null,out);var state_33952__$1 = state_33952;var statearr_33958_33980 = state_33952__$1;(statearr_33958_33980[2] = inst_33946);
(statearr_33958_33980[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33953 === 6))
{var inst_33948 = (state_33952[2]);var state_33952__$1 = state_33952;var statearr_33959_33981 = state_33952__$1;(statearr_33959_33981[2] = inst_33948);
(statearr_33959_33981[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33953 === 7))
{var inst_33931 = (state_33952[8]);var inst_33932 = (state_33952[9]);var inst_33931__$1 = (state_33952[2]);var inst_33932__$1 = cljs.core.nth.call(null,inst_33931__$1,0,null);var inst_33933 = cljs.core.nth.call(null,inst_33931__$1,1,null);var inst_33934 = (inst_33932__$1 == null);var state_33952__$1 = (function (){var statearr_33960 = state_33952;(statearr_33960[10] = inst_33933);
(statearr_33960[8] = inst_33931__$1);
(statearr_33960[9] = inst_33932__$1);
return statearr_33960;
})();if(cljs.core.truth_(inst_33934))
{var statearr_33961_33982 = state_33952__$1;(statearr_33961_33982[1] = 8);
} else
{var statearr_33962_33983 = state_33952__$1;(statearr_33962_33983[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33953 === 8))
{var inst_33924 = (state_33952[7]);var inst_33933 = (state_33952[10]);var inst_33931 = (state_33952[8]);var inst_33932 = (state_33952[9]);var inst_33936 = (function (){var c = inst_33933;var v = inst_33932;var vec__33929 = inst_33931;var cs = inst_33924;return ((function (c,v,vec__33929,cs,inst_33924,inst_33933,inst_33931,inst_33932,state_val_33953){
return (function (p1__33869_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33869_SHARP_);
});
;})(c,v,vec__33929,cs,inst_33924,inst_33933,inst_33931,inst_33932,state_val_33953))
})();var inst_33937 = cljs.core.filterv.call(null,inst_33936,inst_33924);var inst_33924__$1 = inst_33937;var state_33952__$1 = (function (){var statearr_33963 = state_33952;(statearr_33963[7] = inst_33924__$1);
return statearr_33963;
})();var statearr_33964_33984 = state_33952__$1;(statearr_33964_33984[2] = null);
(statearr_33964_33984[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33953 === 9))
{var inst_33932 = (state_33952[9]);var state_33952__$1 = state_33952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33952__$1,11,out,inst_33932);
} else
{if((state_val_33953 === 10))
{var inst_33944 = (state_33952[2]);var state_33952__$1 = state_33952;var statearr_33966_33985 = state_33952__$1;(statearr_33966_33985[2] = inst_33944);
(statearr_33966_33985[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33953 === 11))
{var inst_33924 = (state_33952[7]);var inst_33941 = (state_33952[2]);var tmp33965 = inst_33924;var inst_33924__$1 = tmp33965;var state_33952__$1 = (function (){var statearr_33967 = state_33952;(statearr_33967[7] = inst_33924__$1);
(statearr_33967[11] = inst_33941);
return statearr_33967;
})();var statearr_33968_33986 = state_33952__$1;(statearr_33968_33986[2] = null);
(statearr_33968_33986[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_33972 = (new Array(12));(statearr_33972[0] = state_machine__12403__auto__);
(statearr_33972[1] = 1);
return statearr_33972;
});
var state_machine__12403__auto____1 = (function (state_33952){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_33952);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e33973){if((e33973 instanceof Object))
{var ex__12406__auto__ = e33973;var statearr_33974_33987 = state_33952;(statearr_33974_33987[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33952);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33988 = state_33952;
state_33952 = G__33988;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_33952){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_33952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_33975 = f__12478__auto__.call(null);(statearr_33975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___33976);
return statearr_33975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___34081 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_34058){var state_val_34059 = (state_34058[1]);if((state_val_34059 === 1))
{var inst_34035 = 0;var state_34058__$1 = (function (){var statearr_34060 = state_34058;(statearr_34060[7] = inst_34035);
return statearr_34060;
})();var statearr_34061_34082 = state_34058__$1;(statearr_34061_34082[2] = null);
(statearr_34061_34082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34059 === 2))
{var inst_34035 = (state_34058[7]);var inst_34037 = (inst_34035 < n);var state_34058__$1 = state_34058;if(cljs.core.truth_(inst_34037))
{var statearr_34062_34083 = state_34058__$1;(statearr_34062_34083[1] = 4);
} else
{var statearr_34063_34084 = state_34058__$1;(statearr_34063_34084[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34059 === 3))
{var inst_34055 = (state_34058[2]);var inst_34056 = cljs.core.async.close_BANG_.call(null,out);var state_34058__$1 = (function (){var statearr_34064 = state_34058;(statearr_34064[8] = inst_34055);
return statearr_34064;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34058__$1,inst_34056);
} else
{if((state_val_34059 === 4))
{var state_34058__$1 = state_34058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34058__$1,7,ch);
} else
{if((state_val_34059 === 5))
{var state_34058__$1 = state_34058;var statearr_34065_34085 = state_34058__$1;(statearr_34065_34085[2] = null);
(statearr_34065_34085[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34059 === 6))
{var inst_34053 = (state_34058[2]);var state_34058__$1 = state_34058;var statearr_34066_34086 = state_34058__$1;(statearr_34066_34086[2] = inst_34053);
(statearr_34066_34086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34059 === 7))
{var inst_34040 = (state_34058[9]);var inst_34040__$1 = (state_34058[2]);var inst_34041 = (inst_34040__$1 == null);var inst_34042 = cljs.core.not.call(null,inst_34041);var state_34058__$1 = (function (){var statearr_34067 = state_34058;(statearr_34067[9] = inst_34040__$1);
return statearr_34067;
})();if(inst_34042)
{var statearr_34068_34087 = state_34058__$1;(statearr_34068_34087[1] = 8);
} else
{var statearr_34069_34088 = state_34058__$1;(statearr_34069_34088[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34059 === 8))
{var inst_34040 = (state_34058[9]);var state_34058__$1 = state_34058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34058__$1,11,out,inst_34040);
} else
{if((state_val_34059 === 9))
{var state_34058__$1 = state_34058;var statearr_34070_34089 = state_34058__$1;(statearr_34070_34089[2] = null);
(statearr_34070_34089[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34059 === 10))
{var inst_34050 = (state_34058[2]);var state_34058__$1 = state_34058;var statearr_34071_34090 = state_34058__$1;(statearr_34071_34090[2] = inst_34050);
(statearr_34071_34090[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34059 === 11))
{var inst_34035 = (state_34058[7]);var inst_34045 = (state_34058[2]);var inst_34046 = (inst_34035 + 1);var inst_34035__$1 = inst_34046;var state_34058__$1 = (function (){var statearr_34072 = state_34058;(statearr_34072[10] = inst_34045);
(statearr_34072[7] = inst_34035__$1);
return statearr_34072;
})();var statearr_34073_34091 = state_34058__$1;(statearr_34073_34091[2] = null);
(statearr_34073_34091[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_34077 = (new Array(11));(statearr_34077[0] = state_machine__12403__auto__);
(statearr_34077[1] = 1);
return statearr_34077;
});
var state_machine__12403__auto____1 = (function (state_34058){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_34058);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e34078){if((e34078 instanceof Object))
{var ex__12406__auto__ = e34078;var statearr_34079_34092 = state_34058;(statearr_34079_34092[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34093 = state_34058;
state_34058 = G__34093;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_34058){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_34058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_34080 = f__12478__auto__.call(null);(statearr_34080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___34081);
return statearr_34080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___34190 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_34165){var state_val_34166 = (state_34165[1]);if((state_val_34166 === 1))
{var inst_34142 = null;var state_34165__$1 = (function (){var statearr_34167 = state_34165;(statearr_34167[7] = inst_34142);
return statearr_34167;
})();var statearr_34168_34191 = state_34165__$1;(statearr_34168_34191[2] = null);
(statearr_34168_34191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34166 === 2))
{var state_34165__$1 = state_34165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34165__$1,4,ch);
} else
{if((state_val_34166 === 3))
{var inst_34162 = (state_34165[2]);var inst_34163 = cljs.core.async.close_BANG_.call(null,out);var state_34165__$1 = (function (){var statearr_34169 = state_34165;(statearr_34169[8] = inst_34162);
return statearr_34169;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34165__$1,inst_34163);
} else
{if((state_val_34166 === 4))
{var inst_34145 = (state_34165[9]);var inst_34145__$1 = (state_34165[2]);var inst_34146 = (inst_34145__$1 == null);var inst_34147 = cljs.core.not.call(null,inst_34146);var state_34165__$1 = (function (){var statearr_34170 = state_34165;(statearr_34170[9] = inst_34145__$1);
return statearr_34170;
})();if(inst_34147)
{var statearr_34171_34192 = state_34165__$1;(statearr_34171_34192[1] = 5);
} else
{var statearr_34172_34193 = state_34165__$1;(statearr_34172_34193[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34166 === 5))
{var inst_34142 = (state_34165[7]);var inst_34145 = (state_34165[9]);var inst_34149 = cljs.core._EQ_.call(null,inst_34145,inst_34142);var state_34165__$1 = state_34165;if(inst_34149)
{var statearr_34173_34194 = state_34165__$1;(statearr_34173_34194[1] = 8);
} else
{var statearr_34174_34195 = state_34165__$1;(statearr_34174_34195[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34166 === 6))
{var state_34165__$1 = state_34165;var statearr_34176_34196 = state_34165__$1;(statearr_34176_34196[2] = null);
(statearr_34176_34196[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34166 === 7))
{var inst_34160 = (state_34165[2]);var state_34165__$1 = state_34165;var statearr_34177_34197 = state_34165__$1;(statearr_34177_34197[2] = inst_34160);
(statearr_34177_34197[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34166 === 8))
{var inst_34142 = (state_34165[7]);var tmp34175 = inst_34142;var inst_34142__$1 = tmp34175;var state_34165__$1 = (function (){var statearr_34178 = state_34165;(statearr_34178[7] = inst_34142__$1);
return statearr_34178;
})();var statearr_34179_34198 = state_34165__$1;(statearr_34179_34198[2] = null);
(statearr_34179_34198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34166 === 9))
{var inst_34145 = (state_34165[9]);var state_34165__$1 = state_34165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34165__$1,11,out,inst_34145);
} else
{if((state_val_34166 === 10))
{var inst_34157 = (state_34165[2]);var state_34165__$1 = state_34165;var statearr_34180_34199 = state_34165__$1;(statearr_34180_34199[2] = inst_34157);
(statearr_34180_34199[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34166 === 11))
{var inst_34145 = (state_34165[9]);var inst_34154 = (state_34165[2]);var inst_34142 = inst_34145;var state_34165__$1 = (function (){var statearr_34181 = state_34165;(statearr_34181[7] = inst_34142);
(statearr_34181[10] = inst_34154);
return statearr_34181;
})();var statearr_34182_34200 = state_34165__$1;(statearr_34182_34200[2] = null);
(statearr_34182_34200[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_34186 = (new Array(11));(statearr_34186[0] = state_machine__12403__auto__);
(statearr_34186[1] = 1);
return statearr_34186;
});
var state_machine__12403__auto____1 = (function (state_34165){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_34165);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e34187){if((e34187 instanceof Object))
{var ex__12406__auto__ = e34187;var statearr_34188_34201 = state_34165;(statearr_34188_34201[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34165);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34202 = state_34165;
state_34165 = G__34202;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_34165){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_34165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_34189 = f__12478__auto__.call(null);(statearr_34189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___34190);
return statearr_34189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___34337 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_34307){var state_val_34308 = (state_34307[1]);if((state_val_34308 === 1))
{var inst_34270 = (new Array(n));var inst_34271 = inst_34270;var inst_34272 = 0;var state_34307__$1 = (function (){var statearr_34309 = state_34307;(statearr_34309[7] = inst_34272);
(statearr_34309[8] = inst_34271);
return statearr_34309;
})();var statearr_34310_34338 = state_34307__$1;(statearr_34310_34338[2] = null);
(statearr_34310_34338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34308 === 2))
{var state_34307__$1 = state_34307;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34307__$1,4,ch);
} else
{if((state_val_34308 === 3))
{var inst_34305 = (state_34307[2]);var state_34307__$1 = state_34307;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34307__$1,inst_34305);
} else
{if((state_val_34308 === 4))
{var inst_34275 = (state_34307[9]);var inst_34275__$1 = (state_34307[2]);var inst_34276 = (inst_34275__$1 == null);var inst_34277 = cljs.core.not.call(null,inst_34276);var state_34307__$1 = (function (){var statearr_34311 = state_34307;(statearr_34311[9] = inst_34275__$1);
return statearr_34311;
})();if(inst_34277)
{var statearr_34312_34339 = state_34307__$1;(statearr_34312_34339[1] = 5);
} else
{var statearr_34313_34340 = state_34307__$1;(statearr_34313_34340[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34308 === 5))
{var inst_34280 = (state_34307[10]);var inst_34275 = (state_34307[9]);var inst_34272 = (state_34307[7]);var inst_34271 = (state_34307[8]);var inst_34279 = (inst_34271[inst_34272] = inst_34275);var inst_34280__$1 = (inst_34272 + 1);var inst_34281 = (inst_34280__$1 < n);var state_34307__$1 = (function (){var statearr_34314 = state_34307;(statearr_34314[10] = inst_34280__$1);
(statearr_34314[11] = inst_34279);
return statearr_34314;
})();if(cljs.core.truth_(inst_34281))
{var statearr_34315_34341 = state_34307__$1;(statearr_34315_34341[1] = 8);
} else
{var statearr_34316_34342 = state_34307__$1;(statearr_34316_34342[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34308 === 6))
{var inst_34272 = (state_34307[7]);var inst_34293 = (inst_34272 > 0);var state_34307__$1 = state_34307;if(cljs.core.truth_(inst_34293))
{var statearr_34318_34343 = state_34307__$1;(statearr_34318_34343[1] = 12);
} else
{var statearr_34319_34344 = state_34307__$1;(statearr_34319_34344[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34308 === 7))
{var inst_34303 = (state_34307[2]);var state_34307__$1 = state_34307;var statearr_34320_34345 = state_34307__$1;(statearr_34320_34345[2] = inst_34303);
(statearr_34320_34345[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34308 === 8))
{var inst_34280 = (state_34307[10]);var inst_34271 = (state_34307[8]);var tmp34317 = inst_34271;var inst_34271__$1 = tmp34317;var inst_34272 = inst_34280;var state_34307__$1 = (function (){var statearr_34321 = state_34307;(statearr_34321[7] = inst_34272);
(statearr_34321[8] = inst_34271__$1);
return statearr_34321;
})();var statearr_34322_34346 = state_34307__$1;(statearr_34322_34346[2] = null);
(statearr_34322_34346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34308 === 9))
{var inst_34271 = (state_34307[8]);var inst_34285 = cljs.core.vec.call(null,inst_34271);var state_34307__$1 = state_34307;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34307__$1,11,out,inst_34285);
} else
{if((state_val_34308 === 10))
{var inst_34291 = (state_34307[2]);var state_34307__$1 = state_34307;var statearr_34323_34347 = state_34307__$1;(statearr_34323_34347[2] = inst_34291);
(statearr_34323_34347[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34308 === 11))
{var inst_34287 = (state_34307[2]);var inst_34288 = (new Array(n));var inst_34271 = inst_34288;var inst_34272 = 0;var state_34307__$1 = (function (){var statearr_34324 = state_34307;(statearr_34324[12] = inst_34287);
(statearr_34324[7] = inst_34272);
(statearr_34324[8] = inst_34271);
return statearr_34324;
})();var statearr_34325_34348 = state_34307__$1;(statearr_34325_34348[2] = null);
(statearr_34325_34348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34308 === 12))
{var inst_34271 = (state_34307[8]);var inst_34295 = cljs.core.vec.call(null,inst_34271);var state_34307__$1 = state_34307;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34307__$1,15,out,inst_34295);
} else
{if((state_val_34308 === 13))
{var state_34307__$1 = state_34307;var statearr_34326_34349 = state_34307__$1;(statearr_34326_34349[2] = null);
(statearr_34326_34349[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34308 === 14))
{var inst_34300 = (state_34307[2]);var inst_34301 = cljs.core.async.close_BANG_.call(null,out);var state_34307__$1 = (function (){var statearr_34327 = state_34307;(statearr_34327[13] = inst_34300);
return statearr_34327;
})();var statearr_34328_34350 = state_34307__$1;(statearr_34328_34350[2] = inst_34301);
(statearr_34328_34350[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34308 === 15))
{var inst_34297 = (state_34307[2]);var state_34307__$1 = state_34307;var statearr_34329_34351 = state_34307__$1;(statearr_34329_34351[2] = inst_34297);
(statearr_34329_34351[1] = 14);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_34333 = (new Array(14));(statearr_34333[0] = state_machine__12403__auto__);
(statearr_34333[1] = 1);
return statearr_34333;
});
var state_machine__12403__auto____1 = (function (state_34307){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_34307);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e34334){if((e34334 instanceof Object))
{var ex__12406__auto__ = e34334;var statearr_34335_34352 = state_34307;(statearr_34335_34352[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34307);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34334;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34353 = state_34307;
state_34307 = G__34353;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_34307){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_34307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_34336 = f__12478__auto__.call(null);(statearr_34336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___34337);
return statearr_34336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___34496 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_34466){var state_val_34467 = (state_34466[1]);if((state_val_34467 === 1))
{var inst_34425 = (new Array(0));var inst_34426 = inst_34425;var inst_34427 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34466__$1 = (function (){var statearr_34468 = state_34466;(statearr_34468[7] = inst_34426);
(statearr_34468[8] = inst_34427);
return statearr_34468;
})();var statearr_34469_34497 = state_34466__$1;(statearr_34469_34497[2] = null);
(statearr_34469_34497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 2))
{var state_34466__$1 = state_34466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34466__$1,4,ch);
} else
{if((state_val_34467 === 3))
{var inst_34464 = (state_34466[2]);var state_34466__$1 = state_34466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34466__$1,inst_34464);
} else
{if((state_val_34467 === 4))
{var inst_34430 = (state_34466[9]);var inst_34430__$1 = (state_34466[2]);var inst_34431 = (inst_34430__$1 == null);var inst_34432 = cljs.core.not.call(null,inst_34431);var state_34466__$1 = (function (){var statearr_34470 = state_34466;(statearr_34470[9] = inst_34430__$1);
return statearr_34470;
})();if(inst_34432)
{var statearr_34471_34498 = state_34466__$1;(statearr_34471_34498[1] = 5);
} else
{var statearr_34472_34499 = state_34466__$1;(statearr_34472_34499[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 5))
{var inst_34434 = (state_34466[10]);var inst_34427 = (state_34466[8]);var inst_34430 = (state_34466[9]);var inst_34434__$1 = f.call(null,inst_34430);var inst_34435 = cljs.core._EQ_.call(null,inst_34434__$1,inst_34427);var inst_34436 = cljs.core.keyword_identical_QMARK_.call(null,inst_34427,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34437 = (inst_34435) || (inst_34436);var state_34466__$1 = (function (){var statearr_34473 = state_34466;(statearr_34473[10] = inst_34434__$1);
return statearr_34473;
})();if(cljs.core.truth_(inst_34437))
{var statearr_34474_34500 = state_34466__$1;(statearr_34474_34500[1] = 8);
} else
{var statearr_34475_34501 = state_34466__$1;(statearr_34475_34501[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 6))
{var inst_34426 = (state_34466[7]);var inst_34451 = inst_34426.length;var inst_34452 = (inst_34451 > 0);var state_34466__$1 = state_34466;if(cljs.core.truth_(inst_34452))
{var statearr_34477_34502 = state_34466__$1;(statearr_34477_34502[1] = 12);
} else
{var statearr_34478_34503 = state_34466__$1;(statearr_34478_34503[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 7))
{var inst_34462 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34479_34504 = state_34466__$1;(statearr_34479_34504[2] = inst_34462);
(statearr_34479_34504[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 8))
{var inst_34434 = (state_34466[10]);var inst_34426 = (state_34466[7]);var inst_34430 = (state_34466[9]);var inst_34439 = inst_34426.push(inst_34430);var tmp34476 = inst_34426;var inst_34426__$1 = tmp34476;var inst_34427 = inst_34434;var state_34466__$1 = (function (){var statearr_34480 = state_34466;(statearr_34480[11] = inst_34439);
(statearr_34480[7] = inst_34426__$1);
(statearr_34480[8] = inst_34427);
return statearr_34480;
})();var statearr_34481_34505 = state_34466__$1;(statearr_34481_34505[2] = null);
(statearr_34481_34505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 9))
{var inst_34426 = (state_34466[7]);var inst_34442 = cljs.core.vec.call(null,inst_34426);var state_34466__$1 = state_34466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34466__$1,11,out,inst_34442);
} else
{if((state_val_34467 === 10))
{var inst_34449 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34482_34506 = state_34466__$1;(statearr_34482_34506[2] = inst_34449);
(statearr_34482_34506[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 11))
{var inst_34434 = (state_34466[10]);var inst_34430 = (state_34466[9]);var inst_34444 = (state_34466[2]);var inst_34445 = (new Array(0));var inst_34446 = inst_34445.push(inst_34430);var inst_34426 = inst_34445;var inst_34427 = inst_34434;var state_34466__$1 = (function (){var statearr_34483 = state_34466;(statearr_34483[12] = inst_34446);
(statearr_34483[13] = inst_34444);
(statearr_34483[7] = inst_34426);
(statearr_34483[8] = inst_34427);
return statearr_34483;
})();var statearr_34484_34507 = state_34466__$1;(statearr_34484_34507[2] = null);
(statearr_34484_34507[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 12))
{var inst_34426 = (state_34466[7]);var inst_34454 = cljs.core.vec.call(null,inst_34426);var state_34466__$1 = state_34466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34466__$1,15,out,inst_34454);
} else
{if((state_val_34467 === 13))
{var state_34466__$1 = state_34466;var statearr_34485_34508 = state_34466__$1;(statearr_34485_34508[2] = null);
(statearr_34485_34508[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 14))
{var inst_34459 = (state_34466[2]);var inst_34460 = cljs.core.async.close_BANG_.call(null,out);var state_34466__$1 = (function (){var statearr_34486 = state_34466;(statearr_34486[14] = inst_34459);
return statearr_34486;
})();var statearr_34487_34509 = state_34466__$1;(statearr_34487_34509[2] = inst_34460);
(statearr_34487_34509[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 15))
{var inst_34456 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34488_34510 = state_34466__$1;(statearr_34488_34510[2] = inst_34456);
(statearr_34488_34510[1] = 14);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_34492 = (new Array(15));(statearr_34492[0] = state_machine__12403__auto__);
(statearr_34492[1] = 1);
return statearr_34492;
});
var state_machine__12403__auto____1 = (function (state_34466){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_34466);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e34493){if((e34493 instanceof Object))
{var ex__12406__auto__ = e34493;var statearr_34494_34511 = state_34466;(statearr_34494_34511[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34512 = state_34466;
state_34466 = G__34512;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_34466){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_34466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_34495 = f__12478__auto__.call(null);(statearr_34495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___34496);
return statearr_34495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
