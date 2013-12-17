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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21110 = (function (f,fn_handler,meta21111){
this.f = f;
this.fn_handler = fn_handler;
this.meta21111 = meta21111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21110.cljs$lang$type = true;
cljs.core.async.t21110.cljs$lang$ctorStr = "cljs.core.async/t21110";
cljs.core.async.t21110.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21110");
});
cljs.core.async.t21110.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21112){var self__ = this;
var _21112__$1 = this;return self__.meta21111;
});
cljs.core.async.t21110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21112,meta21111__$1){var self__ = this;
var _21112__$1 = this;return (new cljs.core.async.t21110(self__.f,self__.fn_handler,meta21111__$1));
});
cljs.core.async.__GT_t21110 = (function __GT_t21110(f__$1,fn_handler__$1,meta21111){return (new cljs.core.async.t21110(f__$1,fn_handler__$1,meta21111));
});
}
return (new cljs.core.async.t21110(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21114 = buff;if(G__21114)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__21114.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21114.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21114);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21114);
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
{var val_21115 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21115);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_21115);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7816__auto__ = ret;if(cljs.core.truth_(and__7816__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7816__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8651__auto___21116 = n;var x_21117 = 0;while(true){
if((x_21117 < n__8651__auto___21116))
{(a[x_21117] = 0);
{
var G__21118 = (x_21117 + 1);
x_21117 = G__21118;
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
var G__21119 = (i + 1);
i = G__21119;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21123 = (function (flag,alt_flag,meta21124){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21124 = meta21124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21123.cljs$lang$type = true;
cljs.core.async.t21123.cljs$lang$ctorStr = "cljs.core.async/t21123";
cljs.core.async.t21123.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21123");
});
cljs.core.async.t21123.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t21123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t21123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21125){var self__ = this;
var _21125__$1 = this;return self__.meta21124;
});
cljs.core.async.t21123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21125,meta21124__$1){var self__ = this;
var _21125__$1 = this;return (new cljs.core.async.t21123(self__.flag,self__.alt_flag,meta21124__$1));
});
cljs.core.async.__GT_t21123 = (function __GT_t21123(flag__$1,alt_flag__$1,meta21124){return (new cljs.core.async.t21123(flag__$1,alt_flag__$1,meta21124));
});
}
return (new cljs.core.async.t21123(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21129 = (function (cb,flag,alt_handler,meta21130){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21130 = meta21130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21129.cljs$lang$type = true;
cljs.core.async.t21129.cljs$lang$ctorStr = "cljs.core.async/t21129";
cljs.core.async.t21129.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21129");
});
cljs.core.async.t21129.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21131){var self__ = this;
var _21131__$1 = this;return self__.meta21130;
});
cljs.core.async.t21129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21131,meta21130__$1){var self__ = this;
var _21131__$1 = this;return (new cljs.core.async.t21129(self__.cb,self__.flag,self__.alt_handler,meta21130__$1));
});
cljs.core.async.__GT_t21129 = (function __GT_t21129(cb__$1,flag__$1,alt_handler__$1,meta21130){return (new cljs.core.async.t21129(cb__$1,flag__$1,alt_handler__$1,meta21130));
});
}
return (new cljs.core.async.t21129(cb,flag,alt_handler,null));
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
return (function (p1__21132_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21132_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7828__auto__ = wport;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21133 = (i + 1);
i = G__21133;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7828__auto__ = ret;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7816__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7816__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7816__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__21134){var map__21136 = p__21134;var map__21136__$1 = ((cljs.core.seq_QMARK_.call(null,map__21136))?cljs.core.apply.call(null,cljs.core.hash_map,map__21136):map__21136);var opts = map__21136__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21134 = null;if (arguments.length > 1) {
  p__21134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21134);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21137){
var ports = cljs.core.first(arglist__21137);
var p__21134 = cljs.core.rest(arglist__21137);
return alts_BANG___delegate(ports,p__21134);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21145 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21145 = (function (ch,f,map_LT_,meta21146){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21146 = meta21146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21145.cljs$lang$type = true;
cljs.core.async.t21145.cljs$lang$ctorStr = "cljs.core.async/t21145";
cljs.core.async.t21145.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21145");
});
cljs.core.async.t21145.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21145.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t21145.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21145.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21148 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21148 = (function (fn1,_,meta21146,ch,f,map_LT_,meta21149){
this.fn1 = fn1;
this._ = _;
this.meta21146 = meta21146;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21149 = meta21149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21148.cljs$lang$type = true;
cljs.core.async.t21148.cljs$lang$ctorStr = "cljs.core.async/t21148";
cljs.core.async.t21148.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21148");
});
cljs.core.async.t21148.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t21148.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t21148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__21138_SHARP_){return f1.call(null,(((p1__21138_SHARP_ == null))?null:self__.f.call(null,p1__21138_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t21148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21150){var self__ = this;
var _21150__$1 = this;return self__.meta21149;
});
cljs.core.async.t21148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21150,meta21149__$1){var self__ = this;
var _21150__$1 = this;return (new cljs.core.async.t21148(self__.fn1,self__._,self__.meta21146,self__.ch,self__.f,self__.map_LT_,meta21149__$1));
});
cljs.core.async.__GT_t21148 = (function __GT_t21148(fn1__$1,___$2,meta21146__$1,ch__$2,f__$2,map_LT___$2,meta21149){return (new cljs.core.async.t21148(fn1__$1,___$2,meta21146__$1,ch__$2,f__$2,map_LT___$2,meta21149));
});
}
return (new cljs.core.async.t21148(fn1,___$1,self__.meta21146,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7816__auto__ = ret;if(cljs.core.truth_(and__7816__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7816__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21145.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21145.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21147){var self__ = this;
var _21147__$1 = this;return self__.meta21146;
});
cljs.core.async.t21145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21147,meta21146__$1){var self__ = this;
var _21147__$1 = this;return (new cljs.core.async.t21145(self__.ch,self__.f,self__.map_LT_,meta21146__$1));
});
cljs.core.async.__GT_t21145 = (function __GT_t21145(ch__$1,f__$1,map_LT___$1,meta21146){return (new cljs.core.async.t21145(ch__$1,f__$1,map_LT___$1,meta21146));
});
}
return (new cljs.core.async.t21145(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21154 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21154 = (function (ch,f,map_GT_,meta21155){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21155 = meta21155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21154.cljs$lang$type = true;
cljs.core.async.t21154.cljs$lang$ctorStr = "cljs.core.async/t21154";
cljs.core.async.t21154.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21154");
});
cljs.core.async.t21154.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21154.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t21154.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21154.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21154.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21154.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21156){var self__ = this;
var _21156__$1 = this;return self__.meta21155;
});
cljs.core.async.t21154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21156,meta21155__$1){var self__ = this;
var _21156__$1 = this;return (new cljs.core.async.t21154(self__.ch,self__.f,self__.map_GT_,meta21155__$1));
});
cljs.core.async.__GT_t21154 = (function __GT_t21154(ch__$1,f__$1,map_GT___$1,meta21155){return (new cljs.core.async.t21154(ch__$1,f__$1,map_GT___$1,meta21155));
});
}
return (new cljs.core.async.t21154(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21160 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21160 = (function (ch,p,filter_GT_,meta21161){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21161 = meta21161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21160.cljs$lang$type = true;
cljs.core.async.t21160.cljs$lang$ctorStr = "cljs.core.async/t21160";
cljs.core.async.t21160.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21160");
});
cljs.core.async.t21160.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21160.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t21160.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21160.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21160.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21160.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21162){var self__ = this;
var _21162__$1 = this;return self__.meta21161;
});
cljs.core.async.t21160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21162,meta21161__$1){var self__ = this;
var _21162__$1 = this;return (new cljs.core.async.t21160(self__.ch,self__.p,self__.filter_GT_,meta21161__$1));
});
cljs.core.async.__GT_t21160 = (function __GT_t21160(ch__$1,p__$1,filter_GT___$1,meta21161){return (new cljs.core.async.t21160(ch__$1,p__$1,filter_GT___$1,meta21161));
});
}
return (new cljs.core.async.t21160(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15955__auto___21245 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_21224){var state_val_21225 = (state_21224[1]);if((state_val_21225 === 1))
{var state_21224__$1 = state_21224;var statearr_21226_21246 = state_21224__$1;(statearr_21226_21246[2] = null);
(statearr_21226_21246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21225 === 2))
{var state_21224__$1 = state_21224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21224__$1,4,ch);
} else
{if((state_val_21225 === 3))
{var inst_21222 = (state_21224[2]);var state_21224__$1 = state_21224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21224__$1,inst_21222);
} else
{if((state_val_21225 === 4))
{var inst_21206 = (state_21224[7]);var inst_21206__$1 = (state_21224[2]);var inst_21207 = (inst_21206__$1 == null);var state_21224__$1 = (function (){var statearr_21227 = state_21224;(statearr_21227[7] = inst_21206__$1);
return statearr_21227;
})();if(cljs.core.truth_(inst_21207))
{var statearr_21228_21247 = state_21224__$1;(statearr_21228_21247[1] = 5);
} else
{var statearr_21229_21248 = state_21224__$1;(statearr_21229_21248[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21225 === 5))
{var inst_21209 = cljs.core.async.close_BANG_.call(null,out);var state_21224__$1 = state_21224;var statearr_21230_21249 = state_21224__$1;(statearr_21230_21249[2] = inst_21209);
(statearr_21230_21249[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21225 === 6))
{var inst_21206 = (state_21224[7]);var inst_21211 = p.call(null,inst_21206);var state_21224__$1 = state_21224;if(cljs.core.truth_(inst_21211))
{var statearr_21231_21250 = state_21224__$1;(statearr_21231_21250[1] = 8);
} else
{var statearr_21232_21251 = state_21224__$1;(statearr_21232_21251[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21225 === 7))
{var inst_21220 = (state_21224[2]);var state_21224__$1 = state_21224;var statearr_21233_21252 = state_21224__$1;(statearr_21233_21252[2] = inst_21220);
(statearr_21233_21252[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21225 === 8))
{var inst_21206 = (state_21224[7]);var state_21224__$1 = state_21224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21224__$1,11,out,inst_21206);
} else
{if((state_val_21225 === 9))
{var state_21224__$1 = state_21224;var statearr_21234_21253 = state_21224__$1;(statearr_21234_21253[2] = null);
(statearr_21234_21253[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21225 === 10))
{var inst_21217 = (state_21224[2]);var state_21224__$1 = (function (){var statearr_21235 = state_21224;(statearr_21235[8] = inst_21217);
return statearr_21235;
})();var statearr_21236_21254 = state_21224__$1;(statearr_21236_21254[2] = null);
(statearr_21236_21254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21225 === 11))
{var inst_21214 = (state_21224[2]);var state_21224__$1 = state_21224;var statearr_21237_21255 = state_21224__$1;(statearr_21237_21255[2] = inst_21214);
(statearr_21237_21255[1] = 10);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_21241 = (new Array(9));(statearr_21241[0] = state_machine__15863__auto__);
(statearr_21241[1] = 1);
return statearr_21241;
});
var state_machine__15863__auto____1 = (function (state_21224){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_21224);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e21242){if((e21242 instanceof Object))
{var ex__15866__auto__ = e21242;var statearr_21243_21256 = state_21224;(statearr_21243_21256[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21257 = state_21224;
state_21224 = G__21257;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_21224){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_21224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_21244 = f__15956__auto__.call(null);(statearr_21244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___21245);
return statearr_21244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15955__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_21409){var state_val_21410 = (state_21409[1]);if((state_val_21410 === 1))
{var state_21409__$1 = state_21409;var statearr_21411_21448 = state_21409__$1;(statearr_21411_21448[2] = null);
(statearr_21411_21448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 2))
{var state_21409__$1 = state_21409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21409__$1,4,in$);
} else
{if((state_val_21410 === 3))
{var inst_21407 = (state_21409[2]);var state_21409__$1 = state_21409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21409__$1,inst_21407);
} else
{if((state_val_21410 === 4))
{var inst_21355 = (state_21409[7]);var inst_21355__$1 = (state_21409[2]);var inst_21356 = (inst_21355__$1 == null);var state_21409__$1 = (function (){var statearr_21412 = state_21409;(statearr_21412[7] = inst_21355__$1);
return statearr_21412;
})();if(cljs.core.truth_(inst_21356))
{var statearr_21413_21449 = state_21409__$1;(statearr_21413_21449[1] = 5);
} else
{var statearr_21414_21450 = state_21409__$1;(statearr_21414_21450[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 5))
{var inst_21358 = cljs.core.async.close_BANG_.call(null,out);var state_21409__$1 = state_21409;var statearr_21415_21451 = state_21409__$1;(statearr_21415_21451[2] = inst_21358);
(statearr_21415_21451[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 6))
{var inst_21355 = (state_21409[7]);var inst_21360 = f.call(null,inst_21355);var inst_21365 = cljs.core.seq.call(null,inst_21360);var inst_21366 = inst_21365;var inst_21367 = null;var inst_21368 = 0;var inst_21369 = 0;var state_21409__$1 = (function (){var statearr_21416 = state_21409;(statearr_21416[8] = inst_21367);
(statearr_21416[9] = inst_21368);
(statearr_21416[10] = inst_21369);
(statearr_21416[11] = inst_21366);
return statearr_21416;
})();var statearr_21417_21452 = state_21409__$1;(statearr_21417_21452[2] = null);
(statearr_21417_21452[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 7))
{var inst_21405 = (state_21409[2]);var state_21409__$1 = state_21409;var statearr_21418_21453 = state_21409__$1;(statearr_21418_21453[2] = inst_21405);
(statearr_21418_21453[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 8))
{var inst_21368 = (state_21409[9]);var inst_21369 = (state_21409[10]);var inst_21371 = (inst_21369 < inst_21368);var inst_21372 = inst_21371;var state_21409__$1 = state_21409;if(cljs.core.truth_(inst_21372))
{var statearr_21419_21454 = state_21409__$1;(statearr_21419_21454[1] = 10);
} else
{var statearr_21420_21455 = state_21409__$1;(statearr_21420_21455[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 9))
{var inst_21402 = (state_21409[2]);var state_21409__$1 = (function (){var statearr_21421 = state_21409;(statearr_21421[12] = inst_21402);
return statearr_21421;
})();var statearr_21422_21456 = state_21409__$1;(statearr_21422_21456[2] = null);
(statearr_21422_21456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 10))
{var inst_21367 = (state_21409[8]);var inst_21369 = (state_21409[10]);var inst_21374 = cljs.core._nth.call(null,inst_21367,inst_21369);var state_21409__$1 = state_21409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21409__$1,13,out,inst_21374);
} else
{if((state_val_21410 === 11))
{var inst_21380 = (state_21409[13]);var inst_21366 = (state_21409[11]);var inst_21380__$1 = cljs.core.seq.call(null,inst_21366);var state_21409__$1 = (function (){var statearr_21426 = state_21409;(statearr_21426[13] = inst_21380__$1);
return statearr_21426;
})();if(inst_21380__$1)
{var statearr_21427_21457 = state_21409__$1;(statearr_21427_21457[1] = 14);
} else
{var statearr_21428_21458 = state_21409__$1;(statearr_21428_21458[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 12))
{var inst_21400 = (state_21409[2]);var state_21409__$1 = state_21409;var statearr_21429_21459 = state_21409__$1;(statearr_21429_21459[2] = inst_21400);
(statearr_21429_21459[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 13))
{var inst_21367 = (state_21409[8]);var inst_21368 = (state_21409[9]);var inst_21369 = (state_21409[10]);var inst_21366 = (state_21409[11]);var inst_21376 = (state_21409[2]);var inst_21377 = (inst_21369 + 1);var tmp21423 = inst_21367;var tmp21424 = inst_21368;var tmp21425 = inst_21366;var inst_21366__$1 = tmp21425;var inst_21367__$1 = tmp21423;var inst_21368__$1 = tmp21424;var inst_21369__$1 = inst_21377;var state_21409__$1 = (function (){var statearr_21430 = state_21409;(statearr_21430[8] = inst_21367__$1);
(statearr_21430[14] = inst_21376);
(statearr_21430[9] = inst_21368__$1);
(statearr_21430[10] = inst_21369__$1);
(statearr_21430[11] = inst_21366__$1);
return statearr_21430;
})();var statearr_21431_21460 = state_21409__$1;(statearr_21431_21460[2] = null);
(statearr_21431_21460[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 14))
{var inst_21380 = (state_21409[13]);var inst_21382 = cljs.core.chunked_seq_QMARK_.call(null,inst_21380);var state_21409__$1 = state_21409;if(inst_21382)
{var statearr_21432_21461 = state_21409__$1;(statearr_21432_21461[1] = 17);
} else
{var statearr_21433_21462 = state_21409__$1;(statearr_21433_21462[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 15))
{var state_21409__$1 = state_21409;var statearr_21434_21463 = state_21409__$1;(statearr_21434_21463[2] = null);
(statearr_21434_21463[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 16))
{var inst_21398 = (state_21409[2]);var state_21409__$1 = state_21409;var statearr_21435_21464 = state_21409__$1;(statearr_21435_21464[2] = inst_21398);
(statearr_21435_21464[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 17))
{var inst_21380 = (state_21409[13]);var inst_21384 = cljs.core.chunk_first.call(null,inst_21380);var inst_21385 = cljs.core.chunk_rest.call(null,inst_21380);var inst_21386 = cljs.core.count.call(null,inst_21384);var inst_21366 = inst_21385;var inst_21367 = inst_21384;var inst_21368 = inst_21386;var inst_21369 = 0;var state_21409__$1 = (function (){var statearr_21436 = state_21409;(statearr_21436[8] = inst_21367);
(statearr_21436[9] = inst_21368);
(statearr_21436[10] = inst_21369);
(statearr_21436[11] = inst_21366);
return statearr_21436;
})();var statearr_21437_21465 = state_21409__$1;(statearr_21437_21465[2] = null);
(statearr_21437_21465[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 18))
{var inst_21380 = (state_21409[13]);var inst_21389 = cljs.core.first.call(null,inst_21380);var state_21409__$1 = state_21409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21409__$1,20,out,inst_21389);
} else
{if((state_val_21410 === 19))
{var inst_21395 = (state_21409[2]);var state_21409__$1 = state_21409;var statearr_21438_21466 = state_21409__$1;(statearr_21438_21466[2] = inst_21395);
(statearr_21438_21466[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21410 === 20))
{var inst_21380 = (state_21409[13]);var inst_21391 = (state_21409[2]);var inst_21392 = cljs.core.next.call(null,inst_21380);var inst_21366 = inst_21392;var inst_21367 = null;var inst_21368 = 0;var inst_21369 = 0;var state_21409__$1 = (function (){var statearr_21439 = state_21409;(statearr_21439[8] = inst_21367);
(statearr_21439[9] = inst_21368);
(statearr_21439[10] = inst_21369);
(statearr_21439[11] = inst_21366);
(statearr_21439[15] = inst_21391);
return statearr_21439;
})();var statearr_21440_21467 = state_21409__$1;(statearr_21440_21467[2] = null);
(statearr_21440_21467[1] = 8);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_21444 = (new Array(16));(statearr_21444[0] = state_machine__15863__auto__);
(statearr_21444[1] = 1);
return statearr_21444;
});
var state_machine__15863__auto____1 = (function (state_21409){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_21409);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e21445){if((e21445 instanceof Object))
{var ex__15866__auto__ = e21445;var statearr_21446_21468 = state_21409;(statearr_21446_21468[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21469 = state_21409;
state_21409 = G__21469;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_21409){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_21409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_21447 = f__15956__auto__.call(null);(statearr_21447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto__);
return statearr_21447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
}));
return c__15955__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15955__auto___21550 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_21529){var state_val_21530 = (state_21529[1]);if((state_val_21530 === 1))
{var state_21529__$1 = state_21529;var statearr_21531_21551 = state_21529__$1;(statearr_21531_21551[2] = null);
(statearr_21531_21551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 2))
{var state_21529__$1 = state_21529;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21529__$1,4,from);
} else
{if((state_val_21530 === 3))
{var inst_21527 = (state_21529[2]);var state_21529__$1 = state_21529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21529__$1,inst_21527);
} else
{if((state_val_21530 === 4))
{var inst_21512 = (state_21529[7]);var inst_21512__$1 = (state_21529[2]);var inst_21513 = (inst_21512__$1 == null);var state_21529__$1 = (function (){var statearr_21532 = state_21529;(statearr_21532[7] = inst_21512__$1);
return statearr_21532;
})();if(cljs.core.truth_(inst_21513))
{var statearr_21533_21552 = state_21529__$1;(statearr_21533_21552[1] = 5);
} else
{var statearr_21534_21553 = state_21529__$1;(statearr_21534_21553[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 5))
{var state_21529__$1 = state_21529;if(cljs.core.truth_(close_QMARK_))
{var statearr_21535_21554 = state_21529__$1;(statearr_21535_21554[1] = 8);
} else
{var statearr_21536_21555 = state_21529__$1;(statearr_21536_21555[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 6))
{var inst_21512 = (state_21529[7]);var state_21529__$1 = state_21529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21529__$1,11,to,inst_21512);
} else
{if((state_val_21530 === 7))
{var inst_21525 = (state_21529[2]);var state_21529__$1 = state_21529;var statearr_21537_21556 = state_21529__$1;(statearr_21537_21556[2] = inst_21525);
(statearr_21537_21556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 8))
{var inst_21516 = cljs.core.async.close_BANG_.call(null,to);var state_21529__$1 = state_21529;var statearr_21538_21557 = state_21529__$1;(statearr_21538_21557[2] = inst_21516);
(statearr_21538_21557[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 9))
{var state_21529__$1 = state_21529;var statearr_21539_21558 = state_21529__$1;(statearr_21539_21558[2] = null);
(statearr_21539_21558[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 10))
{var inst_21519 = (state_21529[2]);var state_21529__$1 = state_21529;var statearr_21540_21559 = state_21529__$1;(statearr_21540_21559[2] = inst_21519);
(statearr_21540_21559[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 11))
{var inst_21522 = (state_21529[2]);var state_21529__$1 = (function (){var statearr_21541 = state_21529;(statearr_21541[8] = inst_21522);
return statearr_21541;
})();var statearr_21542_21560 = state_21529__$1;(statearr_21542_21560[2] = null);
(statearr_21542_21560[1] = 2);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_21546 = (new Array(9));(statearr_21546[0] = state_machine__15863__auto__);
(statearr_21546[1] = 1);
return statearr_21546;
});
var state_machine__15863__auto____1 = (function (state_21529){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_21529);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e21547){if((e21547 instanceof Object))
{var ex__15866__auto__ = e21547;var statearr_21548_21561 = state_21529;(statearr_21548_21561[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21529);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21547;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21562 = state_21529;
state_21529 = G__21562;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_21529){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_21529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_21549 = f__15956__auto__.call(null);(statearr_21549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___21550);
return statearr_21549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15955__auto___21649 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_21627){var state_val_21628 = (state_21627[1]);if((state_val_21628 === 1))
{var state_21627__$1 = state_21627;var statearr_21629_21650 = state_21627__$1;(statearr_21629_21650[2] = null);
(statearr_21629_21650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21628 === 2))
{var state_21627__$1 = state_21627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21627__$1,4,ch);
} else
{if((state_val_21628 === 3))
{var inst_21625 = (state_21627[2]);var state_21627__$1 = state_21627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21627__$1,inst_21625);
} else
{if((state_val_21628 === 4))
{var inst_21608 = (state_21627[7]);var inst_21608__$1 = (state_21627[2]);var inst_21609 = (inst_21608__$1 == null);var state_21627__$1 = (function (){var statearr_21630 = state_21627;(statearr_21630[7] = inst_21608__$1);
return statearr_21630;
})();if(cljs.core.truth_(inst_21609))
{var statearr_21631_21651 = state_21627__$1;(statearr_21631_21651[1] = 5);
} else
{var statearr_21632_21652 = state_21627__$1;(statearr_21632_21652[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21628 === 5))
{var inst_21611 = cljs.core.async.close_BANG_.call(null,tc);var inst_21612 = cljs.core.async.close_BANG_.call(null,fc);var state_21627__$1 = (function (){var statearr_21633 = state_21627;(statearr_21633[8] = inst_21611);
return statearr_21633;
})();var statearr_21634_21653 = state_21627__$1;(statearr_21634_21653[2] = inst_21612);
(statearr_21634_21653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21628 === 6))
{var inst_21608 = (state_21627[7]);var inst_21614 = p.call(null,inst_21608);var state_21627__$1 = state_21627;if(cljs.core.truth_(inst_21614))
{var statearr_21635_21654 = state_21627__$1;(statearr_21635_21654[1] = 9);
} else
{var statearr_21636_21655 = state_21627__$1;(statearr_21636_21655[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21628 === 7))
{var inst_21623 = (state_21627[2]);var state_21627__$1 = state_21627;var statearr_21637_21656 = state_21627__$1;(statearr_21637_21656[2] = inst_21623);
(statearr_21637_21656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21628 === 8))
{var inst_21620 = (state_21627[2]);var state_21627__$1 = (function (){var statearr_21638 = state_21627;(statearr_21638[9] = inst_21620);
return statearr_21638;
})();var statearr_21639_21657 = state_21627__$1;(statearr_21639_21657[2] = null);
(statearr_21639_21657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21628 === 9))
{var state_21627__$1 = state_21627;var statearr_21640_21658 = state_21627__$1;(statearr_21640_21658[2] = tc);
(statearr_21640_21658[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21628 === 10))
{var state_21627__$1 = state_21627;var statearr_21641_21659 = state_21627__$1;(statearr_21641_21659[2] = fc);
(statearr_21641_21659[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21628 === 11))
{var inst_21608 = (state_21627[7]);var inst_21618 = (state_21627[2]);var state_21627__$1 = state_21627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21627__$1,8,inst_21618,inst_21608);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_21645 = (new Array(10));(statearr_21645[0] = state_machine__15863__auto__);
(statearr_21645[1] = 1);
return statearr_21645;
});
var state_machine__15863__auto____1 = (function (state_21627){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_21627);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e21646){if((e21646 instanceof Object))
{var ex__15866__auto__ = e21646;var statearr_21647_21660 = state_21627;(statearr_21647_21660[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21661 = state_21627;
state_21627 = G__21661;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_21627){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_21627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_21648 = f__15956__auto__.call(null);(statearr_21648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___21649);
return statearr_21648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15955__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_21708){var state_val_21709 = (state_21708[1]);if((state_val_21709 === 7))
{var inst_21704 = (state_21708[2]);var state_21708__$1 = state_21708;var statearr_21710_21726 = state_21708__$1;(statearr_21710_21726[2] = inst_21704);
(statearr_21710_21726[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21709 === 6))
{var inst_21697 = (state_21708[7]);var inst_21694 = (state_21708[8]);var inst_21701 = f.call(null,inst_21694,inst_21697);var inst_21694__$1 = inst_21701;var state_21708__$1 = (function (){var statearr_21711 = state_21708;(statearr_21711[8] = inst_21694__$1);
return statearr_21711;
})();var statearr_21712_21727 = state_21708__$1;(statearr_21712_21727[2] = null);
(statearr_21712_21727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21709 === 5))
{var inst_21694 = (state_21708[8]);var state_21708__$1 = state_21708;var statearr_21713_21728 = state_21708__$1;(statearr_21713_21728[2] = inst_21694);
(statearr_21713_21728[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21709 === 4))
{var inst_21697 = (state_21708[7]);var inst_21697__$1 = (state_21708[2]);var inst_21698 = (inst_21697__$1 == null);var state_21708__$1 = (function (){var statearr_21714 = state_21708;(statearr_21714[7] = inst_21697__$1);
return statearr_21714;
})();if(cljs.core.truth_(inst_21698))
{var statearr_21715_21729 = state_21708__$1;(statearr_21715_21729[1] = 5);
} else
{var statearr_21716_21730 = state_21708__$1;(statearr_21716_21730[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21709 === 3))
{var inst_21706 = (state_21708[2]);var state_21708__$1 = state_21708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21708__$1,inst_21706);
} else
{if((state_val_21709 === 2))
{var state_21708__$1 = state_21708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21708__$1,4,ch);
} else
{if((state_val_21709 === 1))
{var inst_21694 = init;var state_21708__$1 = (function (){var statearr_21717 = state_21708;(statearr_21717[8] = inst_21694);
return statearr_21717;
})();var statearr_21718_21731 = state_21708__$1;(statearr_21718_21731[2] = null);
(statearr_21718_21731[1] = 2);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_21722 = (new Array(9));(statearr_21722[0] = state_machine__15863__auto__);
(statearr_21722[1] = 1);
return statearr_21722;
});
var state_machine__15863__auto____1 = (function (state_21708){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_21708);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e21723){if((e21723 instanceof Object))
{var ex__15866__auto__ = e21723;var statearr_21724_21732 = state_21708;(statearr_21724_21732[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21733 = state_21708;
state_21708 = G__21733;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_21708){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_21708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_21725 = f__15956__auto__.call(null);(statearr_21725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto__);
return statearr_21725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
}));
return c__15955__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15955__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_21795){var state_val_21796 = (state_21795[1]);if((state_val_21796 === 1))
{var inst_21775 = cljs.core.seq.call(null,coll);var inst_21776 = inst_21775;var state_21795__$1 = (function (){var statearr_21797 = state_21795;(statearr_21797[7] = inst_21776);
return statearr_21797;
})();var statearr_21798_21816 = state_21795__$1;(statearr_21798_21816[2] = null);
(statearr_21798_21816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21796 === 2))
{var inst_21776 = (state_21795[7]);var state_21795__$1 = state_21795;if(cljs.core.truth_(inst_21776))
{var statearr_21799_21817 = state_21795__$1;(statearr_21799_21817[1] = 4);
} else
{var statearr_21800_21818 = state_21795__$1;(statearr_21800_21818[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21796 === 3))
{var inst_21793 = (state_21795[2]);var state_21795__$1 = state_21795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21795__$1,inst_21793);
} else
{if((state_val_21796 === 4))
{var inst_21776 = (state_21795[7]);var inst_21779 = cljs.core.first.call(null,inst_21776);var state_21795__$1 = state_21795;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21795__$1,7,ch,inst_21779);
} else
{if((state_val_21796 === 5))
{var state_21795__$1 = state_21795;if(cljs.core.truth_(close_QMARK_))
{var statearr_21801_21819 = state_21795__$1;(statearr_21801_21819[1] = 8);
} else
{var statearr_21802_21820 = state_21795__$1;(statearr_21802_21820[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21796 === 6))
{var inst_21791 = (state_21795[2]);var state_21795__$1 = state_21795;var statearr_21803_21821 = state_21795__$1;(statearr_21803_21821[2] = inst_21791);
(statearr_21803_21821[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21796 === 7))
{var inst_21776 = (state_21795[7]);var inst_21781 = (state_21795[2]);var inst_21782 = cljs.core.next.call(null,inst_21776);var inst_21776__$1 = inst_21782;var state_21795__$1 = (function (){var statearr_21804 = state_21795;(statearr_21804[7] = inst_21776__$1);
(statearr_21804[8] = inst_21781);
return statearr_21804;
})();var statearr_21805_21822 = state_21795__$1;(statearr_21805_21822[2] = null);
(statearr_21805_21822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21796 === 8))
{var inst_21786 = cljs.core.async.close_BANG_.call(null,ch);var state_21795__$1 = state_21795;var statearr_21806_21823 = state_21795__$1;(statearr_21806_21823[2] = inst_21786);
(statearr_21806_21823[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21796 === 9))
{var state_21795__$1 = state_21795;var statearr_21807_21824 = state_21795__$1;(statearr_21807_21824[2] = null);
(statearr_21807_21824[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21796 === 10))
{var inst_21789 = (state_21795[2]);var state_21795__$1 = state_21795;var statearr_21808_21825 = state_21795__$1;(statearr_21808_21825[2] = inst_21789);
(statearr_21808_21825[1] = 6);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_21812 = (new Array(9));(statearr_21812[0] = state_machine__15863__auto__);
(statearr_21812[1] = 1);
return statearr_21812;
});
var state_machine__15863__auto____1 = (function (state_21795){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_21795);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e21813){if((e21813 instanceof Object))
{var ex__15866__auto__ = e21813;var statearr_21814_21826 = state_21795;(statearr_21814_21826[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21795);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21827 = state_21795;
state_21795 = G__21827;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_21795){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_21795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_21815 = f__15956__auto__.call(null);(statearr_21815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto__);
return statearr_21815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
}));
return c__15955__auto__;
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
cljs.core.async.Mux = (function (){var obj21829 = {};return obj21829;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7816__auto__ = _;if(and__7816__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7816__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8431__auto__ = (((_ == null))?null:_);return (function (){var or__7828__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21831 = {};return obj21831;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7816__auto__ = m;if(and__7816__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7816__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8431__auto__ = (((m == null))?null:m);return (function (){var or__7828__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7816__auto__ = m;if(and__7816__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7816__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8431__auto__ = (((m == null))?null:m);return (function (){var or__7828__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7816__auto__ = m;if(and__7816__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7816__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8431__auto__ = (((m == null))?null:m);return (function (){var or__7828__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22055 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22055 = (function (cs,ch,mult,meta22056){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22056 = meta22056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22055.cljs$lang$type = true;
cljs.core.async.t22055.cljs$lang$ctorStr = "cljs.core.async/t22055";
cljs.core.async.t22055.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t22055");
});})(cs))
;
cljs.core.async.t22055.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22055.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22055.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22055.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22055.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22057){var self__ = this;
var _22057__$1 = this;return self__.meta22056;
});})(cs))
;
cljs.core.async.t22055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22057,meta22056__$1){var self__ = this;
var _22057__$1 = this;return (new cljs.core.async.t22055(self__.cs,self__.ch,self__.mult,meta22056__$1));
});})(cs))
;
cljs.core.async.__GT_t22055 = ((function (cs){
return (function __GT_t22055(cs__$1,ch__$1,mult__$1,meta22056){return (new cljs.core.async.t22055(cs__$1,ch__$1,mult__$1,meta22056));
});})(cs))
;
}
return (new cljs.core.async.t22055(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15955__auto___22278 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_22192){var state_val_22193 = (state_22192[1]);if((state_val_22193 === 32))
{var inst_22060 = (state_22192[7]);var inst_22136 = (state_22192[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22192,31,Object,null,30);var inst_22143 = cljs.core.async.put_BANG_.call(null,inst_22136,inst_22060,done);var state_22192__$1 = state_22192;var statearr_22194_22279 = state_22192__$1;(statearr_22194_22279[2] = inst_22143);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22192__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 1))
{var state_22192__$1 = state_22192;var statearr_22195_22280 = state_22192__$1;(statearr_22195_22280[2] = null);
(statearr_22195_22280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 33))
{var inst_22149 = (state_22192[9]);var inst_22151 = cljs.core.chunked_seq_QMARK_.call(null,inst_22149);var state_22192__$1 = state_22192;if(inst_22151)
{var statearr_22196_22281 = state_22192__$1;(statearr_22196_22281[1] = 36);
} else
{var statearr_22197_22282 = state_22192__$1;(statearr_22197_22282[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 2))
{var state_22192__$1 = state_22192;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22192__$1,4,ch);
} else
{if((state_val_22193 === 34))
{var state_22192__$1 = state_22192;var statearr_22198_22283 = state_22192__$1;(statearr_22198_22283[2] = null);
(statearr_22198_22283[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 3))
{var inst_22190 = (state_22192[2]);var state_22192__$1 = state_22192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22192__$1,inst_22190);
} else
{if((state_val_22193 === 35))
{var inst_22174 = (state_22192[2]);var state_22192__$1 = state_22192;var statearr_22199_22284 = state_22192__$1;(statearr_22199_22284[2] = inst_22174);
(statearr_22199_22284[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 4))
{var inst_22060 = (state_22192[7]);var inst_22060__$1 = (state_22192[2]);var inst_22061 = (inst_22060__$1 == null);var state_22192__$1 = (function (){var statearr_22200 = state_22192;(statearr_22200[7] = inst_22060__$1);
return statearr_22200;
})();if(cljs.core.truth_(inst_22061))
{var statearr_22201_22285 = state_22192__$1;(statearr_22201_22285[1] = 5);
} else
{var statearr_22202_22286 = state_22192__$1;(statearr_22202_22286[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 36))
{var inst_22149 = (state_22192[9]);var inst_22153 = cljs.core.chunk_first.call(null,inst_22149);var inst_22154 = cljs.core.chunk_rest.call(null,inst_22149);var inst_22155 = cljs.core.count.call(null,inst_22153);var inst_22128 = inst_22154;var inst_22129 = inst_22153;var inst_22130 = inst_22155;var inst_22131 = 0;var state_22192__$1 = (function (){var statearr_22203 = state_22192;(statearr_22203[10] = inst_22128);
(statearr_22203[11] = inst_22129);
(statearr_22203[12] = inst_22131);
(statearr_22203[13] = inst_22130);
return statearr_22203;
})();var statearr_22204_22287 = state_22192__$1;(statearr_22204_22287[2] = null);
(statearr_22204_22287[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 5))
{var inst_22067 = cljs.core.deref.call(null,cs);var inst_22068 = cljs.core.seq.call(null,inst_22067);var inst_22069 = inst_22068;var inst_22070 = null;var inst_22071 = 0;var inst_22072 = 0;var state_22192__$1 = (function (){var statearr_22205 = state_22192;(statearr_22205[14] = inst_22071);
(statearr_22205[15] = inst_22070);
(statearr_22205[16] = inst_22069);
(statearr_22205[17] = inst_22072);
return statearr_22205;
})();var statearr_22206_22288 = state_22192__$1;(statearr_22206_22288[2] = null);
(statearr_22206_22288[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 37))
{var inst_22149 = (state_22192[9]);var inst_22158 = cljs.core.first.call(null,inst_22149);var state_22192__$1 = (function (){var statearr_22207 = state_22192;(statearr_22207[18] = inst_22158);
return statearr_22207;
})();var statearr_22208_22289 = state_22192__$1;(statearr_22208_22289[2] = null);
(statearr_22208_22289[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 6))
{var inst_22120 = (state_22192[19]);var inst_22119 = cljs.core.deref.call(null,cs);var inst_22120__$1 = cljs.core.keys.call(null,inst_22119);var inst_22121 = cljs.core.count.call(null,inst_22120__$1);var inst_22122 = cljs.core.reset_BANG_.call(null,dctr,inst_22121);var inst_22127 = cljs.core.seq.call(null,inst_22120__$1);var inst_22128 = inst_22127;var inst_22129 = null;var inst_22130 = 0;var inst_22131 = 0;var state_22192__$1 = (function (){var statearr_22209 = state_22192;(statearr_22209[19] = inst_22120__$1);
(statearr_22209[10] = inst_22128);
(statearr_22209[11] = inst_22129);
(statearr_22209[12] = inst_22131);
(statearr_22209[13] = inst_22130);
(statearr_22209[20] = inst_22122);
return statearr_22209;
})();var statearr_22210_22290 = state_22192__$1;(statearr_22210_22290[2] = null);
(statearr_22210_22290[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 38))
{var inst_22171 = (state_22192[2]);var state_22192__$1 = state_22192;var statearr_22211_22291 = state_22192__$1;(statearr_22211_22291[2] = inst_22171);
(statearr_22211_22291[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 7))
{var inst_22188 = (state_22192[2]);var state_22192__$1 = state_22192;var statearr_22212_22292 = state_22192__$1;(statearr_22212_22292[2] = inst_22188);
(statearr_22212_22292[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 39))
{var inst_22149 = (state_22192[9]);var inst_22167 = (state_22192[2]);var inst_22168 = cljs.core.next.call(null,inst_22149);var inst_22128 = inst_22168;var inst_22129 = null;var inst_22130 = 0;var inst_22131 = 0;var state_22192__$1 = (function (){var statearr_22213 = state_22192;(statearr_22213[10] = inst_22128);
(statearr_22213[11] = inst_22129);
(statearr_22213[12] = inst_22131);
(statearr_22213[13] = inst_22130);
(statearr_22213[21] = inst_22167);
return statearr_22213;
})();var statearr_22214_22293 = state_22192__$1;(statearr_22214_22293[2] = null);
(statearr_22214_22293[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 8))
{var inst_22071 = (state_22192[14]);var inst_22072 = (state_22192[17]);var inst_22074 = (inst_22072 < inst_22071);var inst_22075 = inst_22074;var state_22192__$1 = state_22192;if(cljs.core.truth_(inst_22075))
{var statearr_22215_22294 = state_22192__$1;(statearr_22215_22294[1] = 10);
} else
{var statearr_22216_22295 = state_22192__$1;(statearr_22216_22295[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 40))
{var inst_22158 = (state_22192[18]);var inst_22159 = (state_22192[2]);var inst_22160 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22161 = cljs.core.async.untap_STAR_.call(null,m,inst_22158);var state_22192__$1 = (function (){var statearr_22217 = state_22192;(statearr_22217[22] = inst_22160);
(statearr_22217[23] = inst_22159);
return statearr_22217;
})();var statearr_22218_22296 = state_22192__$1;(statearr_22218_22296[2] = inst_22161);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22192__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 9))
{var inst_22117 = (state_22192[2]);var state_22192__$1 = state_22192;var statearr_22219_22297 = state_22192__$1;(statearr_22219_22297[2] = inst_22117);
(statearr_22219_22297[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 41))
{var inst_22060 = (state_22192[7]);var inst_22158 = (state_22192[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22192,40,Object,null,39);var inst_22165 = cljs.core.async.put_BANG_.call(null,inst_22158,inst_22060,done);var state_22192__$1 = state_22192;var statearr_22220_22298 = state_22192__$1;(statearr_22220_22298[2] = inst_22165);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22192__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 10))
{var inst_22070 = (state_22192[15]);var inst_22072 = (state_22192[17]);var inst_22078 = cljs.core._nth.call(null,inst_22070,inst_22072);var inst_22079 = cljs.core.nth.call(null,inst_22078,0,null);var inst_22080 = cljs.core.nth.call(null,inst_22078,1,null);var state_22192__$1 = (function (){var statearr_22221 = state_22192;(statearr_22221[24] = inst_22079);
return statearr_22221;
})();if(cljs.core.truth_(inst_22080))
{var statearr_22222_22299 = state_22192__$1;(statearr_22222_22299[1] = 13);
} else
{var statearr_22223_22300 = state_22192__$1;(statearr_22223_22300[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 42))
{var state_22192__$1 = state_22192;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22192__$1,45,dchan);
} else
{if((state_val_22193 === 11))
{var inst_22069 = (state_22192[16]);var inst_22089 = (state_22192[25]);var inst_22089__$1 = cljs.core.seq.call(null,inst_22069);var state_22192__$1 = (function (){var statearr_22224 = state_22192;(statearr_22224[25] = inst_22089__$1);
return statearr_22224;
})();if(inst_22089__$1)
{var statearr_22225_22301 = state_22192__$1;(statearr_22225_22301[1] = 16);
} else
{var statearr_22226_22302 = state_22192__$1;(statearr_22226_22302[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 43))
{var state_22192__$1 = state_22192;var statearr_22227_22303 = state_22192__$1;(statearr_22227_22303[2] = null);
(statearr_22227_22303[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 12))
{var inst_22115 = (state_22192[2]);var state_22192__$1 = state_22192;var statearr_22228_22304 = state_22192__$1;(statearr_22228_22304[2] = inst_22115);
(statearr_22228_22304[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 44))
{var inst_22185 = (state_22192[2]);var state_22192__$1 = (function (){var statearr_22229 = state_22192;(statearr_22229[26] = inst_22185);
return statearr_22229;
})();var statearr_22230_22305 = state_22192__$1;(statearr_22230_22305[2] = null);
(statearr_22230_22305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 13))
{var inst_22079 = (state_22192[24]);var inst_22082 = cljs.core.async.close_BANG_.call(null,inst_22079);var state_22192__$1 = state_22192;var statearr_22231_22306 = state_22192__$1;(statearr_22231_22306[2] = inst_22082);
(statearr_22231_22306[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 45))
{var inst_22182 = (state_22192[2]);var state_22192__$1 = state_22192;var statearr_22235_22307 = state_22192__$1;(statearr_22235_22307[2] = inst_22182);
(statearr_22235_22307[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 14))
{var state_22192__$1 = state_22192;var statearr_22236_22308 = state_22192__$1;(statearr_22236_22308[2] = null);
(statearr_22236_22308[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 15))
{var inst_22071 = (state_22192[14]);var inst_22070 = (state_22192[15]);var inst_22069 = (state_22192[16]);var inst_22072 = (state_22192[17]);var inst_22085 = (state_22192[2]);var inst_22086 = (inst_22072 + 1);var tmp22232 = inst_22071;var tmp22233 = inst_22070;var tmp22234 = inst_22069;var inst_22069__$1 = tmp22234;var inst_22070__$1 = tmp22233;var inst_22071__$1 = tmp22232;var inst_22072__$1 = inst_22086;var state_22192__$1 = (function (){var statearr_22237 = state_22192;(statearr_22237[14] = inst_22071__$1);
(statearr_22237[15] = inst_22070__$1);
(statearr_22237[16] = inst_22069__$1);
(statearr_22237[17] = inst_22072__$1);
(statearr_22237[27] = inst_22085);
return statearr_22237;
})();var statearr_22238_22309 = state_22192__$1;(statearr_22238_22309[2] = null);
(statearr_22238_22309[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 16))
{var inst_22089 = (state_22192[25]);var inst_22091 = cljs.core.chunked_seq_QMARK_.call(null,inst_22089);var state_22192__$1 = state_22192;if(inst_22091)
{var statearr_22239_22310 = state_22192__$1;(statearr_22239_22310[1] = 19);
} else
{var statearr_22240_22311 = state_22192__$1;(statearr_22240_22311[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 17))
{var state_22192__$1 = state_22192;var statearr_22241_22312 = state_22192__$1;(statearr_22241_22312[2] = null);
(statearr_22241_22312[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 18))
{var inst_22113 = (state_22192[2]);var state_22192__$1 = state_22192;var statearr_22242_22313 = state_22192__$1;(statearr_22242_22313[2] = inst_22113);
(statearr_22242_22313[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 19))
{var inst_22089 = (state_22192[25]);var inst_22093 = cljs.core.chunk_first.call(null,inst_22089);var inst_22094 = cljs.core.chunk_rest.call(null,inst_22089);var inst_22095 = cljs.core.count.call(null,inst_22093);var inst_22069 = inst_22094;var inst_22070 = inst_22093;var inst_22071 = inst_22095;var inst_22072 = 0;var state_22192__$1 = (function (){var statearr_22243 = state_22192;(statearr_22243[14] = inst_22071);
(statearr_22243[15] = inst_22070);
(statearr_22243[16] = inst_22069);
(statearr_22243[17] = inst_22072);
return statearr_22243;
})();var statearr_22244_22314 = state_22192__$1;(statearr_22244_22314[2] = null);
(statearr_22244_22314[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 20))
{var inst_22089 = (state_22192[25]);var inst_22099 = cljs.core.first.call(null,inst_22089);var inst_22100 = cljs.core.nth.call(null,inst_22099,0,null);var inst_22101 = cljs.core.nth.call(null,inst_22099,1,null);var state_22192__$1 = (function (){var statearr_22245 = state_22192;(statearr_22245[28] = inst_22100);
return statearr_22245;
})();if(cljs.core.truth_(inst_22101))
{var statearr_22246_22315 = state_22192__$1;(statearr_22246_22315[1] = 22);
} else
{var statearr_22247_22316 = state_22192__$1;(statearr_22247_22316[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 21))
{var inst_22110 = (state_22192[2]);var state_22192__$1 = state_22192;var statearr_22248_22317 = state_22192__$1;(statearr_22248_22317[2] = inst_22110);
(statearr_22248_22317[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 22))
{var inst_22100 = (state_22192[28]);var inst_22103 = cljs.core.async.close_BANG_.call(null,inst_22100);var state_22192__$1 = state_22192;var statearr_22249_22318 = state_22192__$1;(statearr_22249_22318[2] = inst_22103);
(statearr_22249_22318[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 23))
{var state_22192__$1 = state_22192;var statearr_22250_22319 = state_22192__$1;(statearr_22250_22319[2] = null);
(statearr_22250_22319[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 24))
{var inst_22089 = (state_22192[25]);var inst_22106 = (state_22192[2]);var inst_22107 = cljs.core.next.call(null,inst_22089);var inst_22069 = inst_22107;var inst_22070 = null;var inst_22071 = 0;var inst_22072 = 0;var state_22192__$1 = (function (){var statearr_22251 = state_22192;(statearr_22251[29] = inst_22106);
(statearr_22251[14] = inst_22071);
(statearr_22251[15] = inst_22070);
(statearr_22251[16] = inst_22069);
(statearr_22251[17] = inst_22072);
return statearr_22251;
})();var statearr_22252_22320 = state_22192__$1;(statearr_22252_22320[2] = null);
(statearr_22252_22320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 25))
{var inst_22131 = (state_22192[12]);var inst_22130 = (state_22192[13]);var inst_22133 = (inst_22131 < inst_22130);var inst_22134 = inst_22133;var state_22192__$1 = state_22192;if(cljs.core.truth_(inst_22134))
{var statearr_22253_22321 = state_22192__$1;(statearr_22253_22321[1] = 27);
} else
{var statearr_22254_22322 = state_22192__$1;(statearr_22254_22322[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 26))
{var inst_22120 = (state_22192[19]);var inst_22178 = (state_22192[2]);var inst_22179 = cljs.core.seq.call(null,inst_22120);var state_22192__$1 = (function (){var statearr_22255 = state_22192;(statearr_22255[30] = inst_22178);
return statearr_22255;
})();if(inst_22179)
{var statearr_22256_22323 = state_22192__$1;(statearr_22256_22323[1] = 42);
} else
{var statearr_22257_22324 = state_22192__$1;(statearr_22257_22324[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 27))
{var inst_22129 = (state_22192[11]);var inst_22131 = (state_22192[12]);var inst_22136 = cljs.core._nth.call(null,inst_22129,inst_22131);var state_22192__$1 = (function (){var statearr_22258 = state_22192;(statearr_22258[8] = inst_22136);
return statearr_22258;
})();var statearr_22259_22325 = state_22192__$1;(statearr_22259_22325[2] = null);
(statearr_22259_22325[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 28))
{var inst_22149 = (state_22192[9]);var inst_22128 = (state_22192[10]);var inst_22149__$1 = cljs.core.seq.call(null,inst_22128);var state_22192__$1 = (function (){var statearr_22263 = state_22192;(statearr_22263[9] = inst_22149__$1);
return statearr_22263;
})();if(inst_22149__$1)
{var statearr_22264_22326 = state_22192__$1;(statearr_22264_22326[1] = 33);
} else
{var statearr_22265_22327 = state_22192__$1;(statearr_22265_22327[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 29))
{var inst_22176 = (state_22192[2]);var state_22192__$1 = state_22192;var statearr_22266_22328 = state_22192__$1;(statearr_22266_22328[2] = inst_22176);
(statearr_22266_22328[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 30))
{var inst_22128 = (state_22192[10]);var inst_22129 = (state_22192[11]);var inst_22131 = (state_22192[12]);var inst_22130 = (state_22192[13]);var inst_22145 = (state_22192[2]);var inst_22146 = (inst_22131 + 1);var tmp22260 = inst_22128;var tmp22261 = inst_22129;var tmp22262 = inst_22130;var inst_22128__$1 = tmp22260;var inst_22129__$1 = tmp22261;var inst_22130__$1 = tmp22262;var inst_22131__$1 = inst_22146;var state_22192__$1 = (function (){var statearr_22267 = state_22192;(statearr_22267[31] = inst_22145);
(statearr_22267[10] = inst_22128__$1);
(statearr_22267[11] = inst_22129__$1);
(statearr_22267[12] = inst_22131__$1);
(statearr_22267[13] = inst_22130__$1);
return statearr_22267;
})();var statearr_22268_22329 = state_22192__$1;(statearr_22268_22329[2] = null);
(statearr_22268_22329[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22193 === 31))
{var inst_22136 = (state_22192[8]);var inst_22137 = (state_22192[2]);var inst_22138 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22139 = cljs.core.async.untap_STAR_.call(null,m,inst_22136);var state_22192__$1 = (function (){var statearr_22269 = state_22192;(statearr_22269[32] = inst_22137);
(statearr_22269[33] = inst_22138);
return statearr_22269;
})();var statearr_22270_22330 = state_22192__$1;(statearr_22270_22330[2] = inst_22139);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22192__$1);
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
}
}
}
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_22274 = (new Array(34));(statearr_22274[0] = state_machine__15863__auto__);
(statearr_22274[1] = 1);
return statearr_22274;
});
var state_machine__15863__auto____1 = (function (state_22192){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_22192);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e22275){if((e22275 instanceof Object))
{var ex__15866__auto__ = e22275;var statearr_22276_22331 = state_22192;(statearr_22276_22331[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22192);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22332 = state_22192;
state_22192 = G__22332;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_22192){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_22192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_22277 = f__15956__auto__.call(null);(statearr_22277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___22278);
return statearr_22277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
cljs.core.async.Mix = (function (){var obj22334 = {};return obj22334;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7816__auto__ = m;if(and__7816__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7816__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8431__auto__ = (((m == null))?null:m);return (function (){var or__7828__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7816__auto__ = m;if(and__7816__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7816__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8431__auto__ = (((m == null))?null:m);return (function (){var or__7828__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7816__auto__ = m;if(and__7816__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7816__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8431__auto__ = (((m == null))?null:m);return (function (){var or__7828__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7816__auto__ = m;if(and__7816__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7816__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8431__auto__ = (((m == null))?null:m);return (function (){var or__7828__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7816__auto__ = m;if(and__7816__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7816__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8431__auto__ = (((m == null))?null:m);return (function (){var or__7828__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t22444 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22444 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22445){
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
this.meta22445 = meta22445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22444.cljs$lang$type = true;
cljs.core.async.t22444.cljs$lang$ctorStr = "cljs.core.async/t22444";
cljs.core.async.t22444.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t22444");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22444.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22444.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22444.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22444.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22444.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22444.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22444.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22446){var self__ = this;
var _22446__$1 = this;return self__.meta22445;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22446,meta22445__$1){var self__ = this;
var _22446__$1 = this;return (new cljs.core.async.t22444(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22445__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22444 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22444(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22445){return (new cljs.core.async.t22444(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22445));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22444(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__15955__auto___22553 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_22511){var state_val_22512 = (state_22511[1]);if((state_val_22512 === 1))
{var inst_22450 = (state_22511[7]);var inst_22450__$1 = calc_state.call(null);var inst_22451 = cljs.core.seq_QMARK_.call(null,inst_22450__$1);var state_22511__$1 = (function (){var statearr_22513 = state_22511;(statearr_22513[7] = inst_22450__$1);
return statearr_22513;
})();if(inst_22451)
{var statearr_22514_22554 = state_22511__$1;(statearr_22514_22554[1] = 2);
} else
{var statearr_22515_22555 = state_22511__$1;(statearr_22515_22555[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 2))
{var inst_22450 = (state_22511[7]);var inst_22453 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22450);var state_22511__$1 = state_22511;var statearr_22516_22556 = state_22511__$1;(statearr_22516_22556[2] = inst_22453);
(statearr_22516_22556[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 3))
{var inst_22450 = (state_22511[7]);var state_22511__$1 = state_22511;var statearr_22517_22557 = state_22511__$1;(statearr_22517_22557[2] = inst_22450);
(statearr_22517_22557[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 4))
{var inst_22450 = (state_22511[7]);var inst_22456 = (state_22511[2]);var inst_22457 = cljs.core.get.call(null,inst_22456,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22458 = cljs.core.get.call(null,inst_22456,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22459 = cljs.core.get.call(null,inst_22456,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_22460 = inst_22450;var state_22511__$1 = (function (){var statearr_22518 = state_22511;(statearr_22518[8] = inst_22460);
(statearr_22518[9] = inst_22457);
(statearr_22518[10] = inst_22458);
(statearr_22518[11] = inst_22459);
return statearr_22518;
})();var statearr_22519_22558 = state_22511__$1;(statearr_22519_22558[2] = null);
(statearr_22519_22558[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 5))
{var inst_22460 = (state_22511[8]);var inst_22463 = cljs.core.seq_QMARK_.call(null,inst_22460);var state_22511__$1 = state_22511;if(inst_22463)
{var statearr_22520_22559 = state_22511__$1;(statearr_22520_22559[1] = 7);
} else
{var statearr_22521_22560 = state_22511__$1;(statearr_22521_22560[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 6))
{var inst_22509 = (state_22511[2]);var state_22511__$1 = state_22511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22511__$1,inst_22509);
} else
{if((state_val_22512 === 7))
{var inst_22460 = (state_22511[8]);var inst_22465 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22460);var state_22511__$1 = state_22511;var statearr_22522_22561 = state_22511__$1;(statearr_22522_22561[2] = inst_22465);
(statearr_22522_22561[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 8))
{var inst_22460 = (state_22511[8]);var state_22511__$1 = state_22511;var statearr_22523_22562 = state_22511__$1;(statearr_22523_22562[2] = inst_22460);
(statearr_22523_22562[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 9))
{var inst_22468 = (state_22511[12]);var inst_22468__$1 = (state_22511[2]);var inst_22469 = cljs.core.get.call(null,inst_22468__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22470 = cljs.core.get.call(null,inst_22468__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22471 = cljs.core.get.call(null,inst_22468__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_22511__$1 = (function (){var statearr_22524 = state_22511;(statearr_22524[12] = inst_22468__$1);
(statearr_22524[13] = inst_22470);
(statearr_22524[14] = inst_22471);
return statearr_22524;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22511__$1,10,inst_22469);
} else
{if((state_val_22512 === 10))
{var inst_22476 = (state_22511[15]);var inst_22475 = (state_22511[16]);var inst_22474 = (state_22511[2]);var inst_22475__$1 = cljs.core.nth.call(null,inst_22474,0,null);var inst_22476__$1 = cljs.core.nth.call(null,inst_22474,1,null);var inst_22477 = (inst_22475__$1 == null);var inst_22478 = cljs.core._EQ_.call(null,inst_22476__$1,change);var inst_22479 = (inst_22477) || (inst_22478);var state_22511__$1 = (function (){var statearr_22525 = state_22511;(statearr_22525[15] = inst_22476__$1);
(statearr_22525[16] = inst_22475__$1);
return statearr_22525;
})();if(cljs.core.truth_(inst_22479))
{var statearr_22526_22563 = state_22511__$1;(statearr_22526_22563[1] = 11);
} else
{var statearr_22527_22564 = state_22511__$1;(statearr_22527_22564[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 11))
{var inst_22475 = (state_22511[16]);var inst_22481 = (inst_22475 == null);var state_22511__$1 = state_22511;if(cljs.core.truth_(inst_22481))
{var statearr_22528_22565 = state_22511__$1;(statearr_22528_22565[1] = 14);
} else
{var statearr_22529_22566 = state_22511__$1;(statearr_22529_22566[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 12))
{var inst_22476 = (state_22511[15]);var inst_22471 = (state_22511[14]);var inst_22490 = (state_22511[17]);var inst_22490__$1 = inst_22471.call(null,inst_22476);var state_22511__$1 = (function (){var statearr_22530 = state_22511;(statearr_22530[17] = inst_22490__$1);
return statearr_22530;
})();if(cljs.core.truth_(inst_22490__$1))
{var statearr_22531_22567 = state_22511__$1;(statearr_22531_22567[1] = 17);
} else
{var statearr_22532_22568 = state_22511__$1;(statearr_22532_22568[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 13))
{var inst_22507 = (state_22511[2]);var state_22511__$1 = state_22511;var statearr_22533_22569 = state_22511__$1;(statearr_22533_22569[2] = inst_22507);
(statearr_22533_22569[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 14))
{var inst_22476 = (state_22511[15]);var inst_22483 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22476);var state_22511__$1 = state_22511;var statearr_22534_22570 = state_22511__$1;(statearr_22534_22570[2] = inst_22483);
(statearr_22534_22570[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 15))
{var state_22511__$1 = state_22511;var statearr_22535_22571 = state_22511__$1;(statearr_22535_22571[2] = null);
(statearr_22535_22571[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 16))
{var inst_22486 = (state_22511[2]);var inst_22487 = calc_state.call(null);var inst_22460 = inst_22487;var state_22511__$1 = (function (){var statearr_22536 = state_22511;(statearr_22536[8] = inst_22460);
(statearr_22536[18] = inst_22486);
return statearr_22536;
})();var statearr_22537_22572 = state_22511__$1;(statearr_22537_22572[2] = null);
(statearr_22537_22572[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 17))
{var inst_22490 = (state_22511[17]);var state_22511__$1 = state_22511;var statearr_22538_22573 = state_22511__$1;(statearr_22538_22573[2] = inst_22490);
(statearr_22538_22573[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 18))
{var inst_22476 = (state_22511[15]);var inst_22470 = (state_22511[13]);var inst_22471 = (state_22511[14]);var inst_22493 = cljs.core.empty_QMARK_.call(null,inst_22471);var inst_22494 = inst_22470.call(null,inst_22476);var inst_22495 = cljs.core.not.call(null,inst_22494);var inst_22496 = (inst_22493) && (inst_22495);var state_22511__$1 = state_22511;var statearr_22539_22574 = state_22511__$1;(statearr_22539_22574[2] = inst_22496);
(statearr_22539_22574[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 19))
{var inst_22498 = (state_22511[2]);var state_22511__$1 = state_22511;if(cljs.core.truth_(inst_22498))
{var statearr_22540_22575 = state_22511__$1;(statearr_22540_22575[1] = 20);
} else
{var statearr_22541_22576 = state_22511__$1;(statearr_22541_22576[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 20))
{var inst_22475 = (state_22511[16]);var state_22511__$1 = state_22511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22511__$1,23,out,inst_22475);
} else
{if((state_val_22512 === 21))
{var state_22511__$1 = state_22511;var statearr_22542_22577 = state_22511__$1;(statearr_22542_22577[2] = null);
(statearr_22542_22577[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 22))
{var inst_22468 = (state_22511[12]);var inst_22504 = (state_22511[2]);var inst_22460 = inst_22468;var state_22511__$1 = (function (){var statearr_22543 = state_22511;(statearr_22543[8] = inst_22460);
(statearr_22543[19] = inst_22504);
return statearr_22543;
})();var statearr_22544_22578 = state_22511__$1;(statearr_22544_22578[2] = null);
(statearr_22544_22578[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22512 === 23))
{var inst_22501 = (state_22511[2]);var state_22511__$1 = state_22511;var statearr_22545_22579 = state_22511__$1;(statearr_22545_22579[2] = inst_22501);
(statearr_22545_22579[1] = 22);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_22549 = (new Array(20));(statearr_22549[0] = state_machine__15863__auto__);
(statearr_22549[1] = 1);
return statearr_22549;
});
var state_machine__15863__auto____1 = (function (state_22511){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_22511);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e22550){if((e22550 instanceof Object))
{var ex__15866__auto__ = e22550;var statearr_22551_22580 = state_22511;(statearr_22551_22580[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22511);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22581 = state_22511;
state_22511 = G__22581;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_22511){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_22511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_22552 = f__15956__auto__.call(null);(statearr_22552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___22553);
return statearr_22552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
cljs.core.async.Pub = (function (){var obj22583 = {};return obj22583;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7816__auto__ = p;if(and__7816__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7816__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8431__auto__ = (((p == null))?null:p);return (function (){var or__7828__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7816__auto__ = p;if(and__7816__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7816__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8431__auto__ = (((p == null))?null:p);return (function (){var or__7828__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7816__auto__ = p;if(and__7816__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7816__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8431__auto__ = (((p == null))?null:p);return (function (){var or__7828__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7816__auto__ = p;if(and__7816__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7816__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8431__auto__ = (((p == null))?null:p);return (function (){var or__7828__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
* Items received when there are no matching subs get dropped.
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
return (function (topic){var or__7828__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7828__auto__,mults){
return (function (p1__22584_SHARP_){if(cljs.core.truth_(p1__22584_SHARP_.call(null,topic)))
{return p1__22584_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22584_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7828__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22709 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22710){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22710 = meta22710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22709.cljs$lang$type = true;
cljs.core.async.t22709.cljs$lang$ctorStr = "cljs.core.async/t22709";
cljs.core.async.t22709.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t22709");
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22709.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22711){var self__ = this;
var _22711__$1 = this;return self__.meta22710;
});})(mults,ensure_mult))
;
cljs.core.async.t22709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22711,meta22710__$1){var self__ = this;
var _22711__$1 = this;return (new cljs.core.async.t22709(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22710__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22709 = ((function (mults,ensure_mult){
return (function __GT_t22709(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22710){return (new cljs.core.async.t22709(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22710));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22709(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15955__auto___22833 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_22785){var state_val_22786 = (state_22785[1]);if((state_val_22786 === 1))
{var state_22785__$1 = state_22785;var statearr_22787_22834 = state_22785__$1;(statearr_22787_22834[2] = null);
(statearr_22787_22834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 2))
{var state_22785__$1 = state_22785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22785__$1,4,ch);
} else
{if((state_val_22786 === 3))
{var inst_22783 = (state_22785[2]);var state_22785__$1 = state_22785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22785__$1,inst_22783);
} else
{if((state_val_22786 === 4))
{var inst_22714 = (state_22785[7]);var inst_22714__$1 = (state_22785[2]);var inst_22715 = (inst_22714__$1 == null);var state_22785__$1 = (function (){var statearr_22788 = state_22785;(statearr_22788[7] = inst_22714__$1);
return statearr_22788;
})();if(cljs.core.truth_(inst_22715))
{var statearr_22789_22835 = state_22785__$1;(statearr_22789_22835[1] = 5);
} else
{var statearr_22790_22836 = state_22785__$1;(statearr_22790_22836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 5))
{var inst_22721 = cljs.core.deref.call(null,mults);var inst_22722 = cljs.core.vals.call(null,inst_22721);var inst_22723 = cljs.core.seq.call(null,inst_22722);var inst_22724 = inst_22723;var inst_22725 = null;var inst_22726 = 0;var inst_22727 = 0;var state_22785__$1 = (function (){var statearr_22791 = state_22785;(statearr_22791[8] = inst_22725);
(statearr_22791[9] = inst_22724);
(statearr_22791[10] = inst_22727);
(statearr_22791[11] = inst_22726);
return statearr_22791;
})();var statearr_22792_22837 = state_22785__$1;(statearr_22792_22837[2] = null);
(statearr_22792_22837[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 6))
{var inst_22714 = (state_22785[7]);var inst_22764 = (state_22785[12]);var inst_22762 = (state_22785[13]);var inst_22762__$1 = topic_fn.call(null,inst_22714);var inst_22763 = cljs.core.deref.call(null,mults);var inst_22764__$1 = cljs.core.get.call(null,inst_22763,inst_22762__$1);var state_22785__$1 = (function (){var statearr_22793 = state_22785;(statearr_22793[12] = inst_22764__$1);
(statearr_22793[13] = inst_22762__$1);
return statearr_22793;
})();if(cljs.core.truth_(inst_22764__$1))
{var statearr_22794_22838 = state_22785__$1;(statearr_22794_22838[1] = 19);
} else
{var statearr_22795_22839 = state_22785__$1;(statearr_22795_22839[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 7))
{var inst_22781 = (state_22785[2]);var state_22785__$1 = state_22785;var statearr_22796_22840 = state_22785__$1;(statearr_22796_22840[2] = inst_22781);
(statearr_22796_22840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 8))
{var inst_22727 = (state_22785[10]);var inst_22726 = (state_22785[11]);var inst_22729 = (inst_22727 < inst_22726);var inst_22730 = inst_22729;var state_22785__$1 = state_22785;if(cljs.core.truth_(inst_22730))
{var statearr_22800_22841 = state_22785__$1;(statearr_22800_22841[1] = 10);
} else
{var statearr_22801_22842 = state_22785__$1;(statearr_22801_22842[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 9))
{var inst_22760 = (state_22785[2]);var state_22785__$1 = state_22785;var statearr_22802_22843 = state_22785__$1;(statearr_22802_22843[2] = inst_22760);
(statearr_22802_22843[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 10))
{var inst_22725 = (state_22785[8]);var inst_22724 = (state_22785[9]);var inst_22727 = (state_22785[10]);var inst_22726 = (state_22785[11]);var inst_22732 = cljs.core._nth.call(null,inst_22725,inst_22727);var inst_22733 = cljs.core.async.muxch_STAR_.call(null,inst_22732);var inst_22734 = cljs.core.async.close_BANG_.call(null,inst_22733);var inst_22735 = (inst_22727 + 1);var tmp22797 = inst_22725;var tmp22798 = inst_22724;var tmp22799 = inst_22726;var inst_22724__$1 = tmp22798;var inst_22725__$1 = tmp22797;var inst_22726__$1 = tmp22799;var inst_22727__$1 = inst_22735;var state_22785__$1 = (function (){var statearr_22803 = state_22785;(statearr_22803[8] = inst_22725__$1);
(statearr_22803[9] = inst_22724__$1);
(statearr_22803[10] = inst_22727__$1);
(statearr_22803[11] = inst_22726__$1);
(statearr_22803[14] = inst_22734);
return statearr_22803;
})();var statearr_22804_22844 = state_22785__$1;(statearr_22804_22844[2] = null);
(statearr_22804_22844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 11))
{var inst_22724 = (state_22785[9]);var inst_22738 = (state_22785[15]);var inst_22738__$1 = cljs.core.seq.call(null,inst_22724);var state_22785__$1 = (function (){var statearr_22805 = state_22785;(statearr_22805[15] = inst_22738__$1);
return statearr_22805;
})();if(inst_22738__$1)
{var statearr_22806_22845 = state_22785__$1;(statearr_22806_22845[1] = 13);
} else
{var statearr_22807_22846 = state_22785__$1;(statearr_22807_22846[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 12))
{var inst_22758 = (state_22785[2]);var state_22785__$1 = state_22785;var statearr_22808_22847 = state_22785__$1;(statearr_22808_22847[2] = inst_22758);
(statearr_22808_22847[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 13))
{var inst_22738 = (state_22785[15]);var inst_22740 = cljs.core.chunked_seq_QMARK_.call(null,inst_22738);var state_22785__$1 = state_22785;if(inst_22740)
{var statearr_22809_22848 = state_22785__$1;(statearr_22809_22848[1] = 16);
} else
{var statearr_22810_22849 = state_22785__$1;(statearr_22810_22849[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 14))
{var state_22785__$1 = state_22785;var statearr_22811_22850 = state_22785__$1;(statearr_22811_22850[2] = null);
(statearr_22811_22850[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 15))
{var inst_22756 = (state_22785[2]);var state_22785__$1 = state_22785;var statearr_22812_22851 = state_22785__$1;(statearr_22812_22851[2] = inst_22756);
(statearr_22812_22851[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 16))
{var inst_22738 = (state_22785[15]);var inst_22742 = cljs.core.chunk_first.call(null,inst_22738);var inst_22743 = cljs.core.chunk_rest.call(null,inst_22738);var inst_22744 = cljs.core.count.call(null,inst_22742);var inst_22724 = inst_22743;var inst_22725 = inst_22742;var inst_22726 = inst_22744;var inst_22727 = 0;var state_22785__$1 = (function (){var statearr_22813 = state_22785;(statearr_22813[8] = inst_22725);
(statearr_22813[9] = inst_22724);
(statearr_22813[10] = inst_22727);
(statearr_22813[11] = inst_22726);
return statearr_22813;
})();var statearr_22814_22852 = state_22785__$1;(statearr_22814_22852[2] = null);
(statearr_22814_22852[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 17))
{var inst_22738 = (state_22785[15]);var inst_22747 = cljs.core.first.call(null,inst_22738);var inst_22748 = cljs.core.async.muxch_STAR_.call(null,inst_22747);var inst_22749 = cljs.core.async.close_BANG_.call(null,inst_22748);var inst_22750 = cljs.core.next.call(null,inst_22738);var inst_22724 = inst_22750;var inst_22725 = null;var inst_22726 = 0;var inst_22727 = 0;var state_22785__$1 = (function (){var statearr_22815 = state_22785;(statearr_22815[8] = inst_22725);
(statearr_22815[9] = inst_22724);
(statearr_22815[10] = inst_22727);
(statearr_22815[11] = inst_22726);
(statearr_22815[16] = inst_22749);
return statearr_22815;
})();var statearr_22816_22853 = state_22785__$1;(statearr_22816_22853[2] = null);
(statearr_22816_22853[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 18))
{var inst_22753 = (state_22785[2]);var state_22785__$1 = state_22785;var statearr_22817_22854 = state_22785__$1;(statearr_22817_22854[2] = inst_22753);
(statearr_22817_22854[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 19))
{var state_22785__$1 = state_22785;var statearr_22818_22855 = state_22785__$1;(statearr_22818_22855[2] = null);
(statearr_22818_22855[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 20))
{var state_22785__$1 = state_22785;var statearr_22819_22856 = state_22785__$1;(statearr_22819_22856[2] = null);
(statearr_22819_22856[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 21))
{var inst_22778 = (state_22785[2]);var state_22785__$1 = (function (){var statearr_22820 = state_22785;(statearr_22820[17] = inst_22778);
return statearr_22820;
})();var statearr_22821_22857 = state_22785__$1;(statearr_22821_22857[2] = null);
(statearr_22821_22857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 22))
{var inst_22775 = (state_22785[2]);var state_22785__$1 = state_22785;var statearr_22822_22858 = state_22785__$1;(statearr_22822_22858[2] = inst_22775);
(statearr_22822_22858[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 23))
{var inst_22762 = (state_22785[13]);var inst_22766 = (state_22785[2]);var inst_22767 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22762);var state_22785__$1 = (function (){var statearr_22823 = state_22785;(statearr_22823[18] = inst_22766);
return statearr_22823;
})();var statearr_22824_22859 = state_22785__$1;(statearr_22824_22859[2] = inst_22767);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22785__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22786 === 24))
{var inst_22714 = (state_22785[7]);var inst_22764 = (state_22785[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22785,23,Object,null,22);var inst_22771 = cljs.core.async.muxch_STAR_.call(null,inst_22764);var state_22785__$1 = state_22785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22785__$1,25,inst_22771,inst_22714);
} else
{if((state_val_22786 === 25))
{var inst_22773 = (state_22785[2]);var state_22785__$1 = state_22785;var statearr_22825_22860 = state_22785__$1;(statearr_22825_22860[2] = inst_22773);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22785__$1);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_22829 = (new Array(19));(statearr_22829[0] = state_machine__15863__auto__);
(statearr_22829[1] = 1);
return statearr_22829;
});
var state_machine__15863__auto____1 = (function (state_22785){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_22785);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e22830){if((e22830 instanceof Object))
{var ex__15866__auto__ = e22830;var statearr_22831_22861 = state_22785;(statearr_22831_22861[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22862 = state_22785;
state_22785 = G__22862;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_22785){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_22785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_22832 = f__15956__auto__.call(null);(statearr_22832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___22833);
return statearr_22832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
,cljs.core.range.call(null,cnt));var c__15955__auto___22999 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_22969){var state_val_22970 = (state_22969[1]);if((state_val_22970 === 1))
{var state_22969__$1 = state_22969;var statearr_22971_23000 = state_22969__$1;(statearr_22971_23000[2] = null);
(statearr_22971_23000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 2))
{var inst_22932 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_22933 = 0;var state_22969__$1 = (function (){var statearr_22972 = state_22969;(statearr_22972[7] = inst_22932);
(statearr_22972[8] = inst_22933);
return statearr_22972;
})();var statearr_22973_23001 = state_22969__$1;(statearr_22973_23001[2] = null);
(statearr_22973_23001[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 3))
{var inst_22967 = (state_22969[2]);var state_22969__$1 = state_22969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22969__$1,inst_22967);
} else
{if((state_val_22970 === 4))
{var inst_22933 = (state_22969[8]);var inst_22935 = (inst_22933 < cnt);var state_22969__$1 = state_22969;if(cljs.core.truth_(inst_22935))
{var statearr_22974_23002 = state_22969__$1;(statearr_22974_23002[1] = 6);
} else
{var statearr_22975_23003 = state_22969__$1;(statearr_22975_23003[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 5))
{var inst_22953 = (state_22969[2]);var state_22969__$1 = (function (){var statearr_22976 = state_22969;(statearr_22976[9] = inst_22953);
return statearr_22976;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22969__$1,12,dchan);
} else
{if((state_val_22970 === 6))
{var state_22969__$1 = state_22969;var statearr_22977_23004 = state_22969__$1;(statearr_22977_23004[2] = null);
(statearr_22977_23004[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 7))
{var state_22969__$1 = state_22969;var statearr_22978_23005 = state_22969__$1;(statearr_22978_23005[2] = null);
(statearr_22978_23005[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 8))
{var inst_22951 = (state_22969[2]);var state_22969__$1 = state_22969;var statearr_22979_23006 = state_22969__$1;(statearr_22979_23006[2] = inst_22951);
(statearr_22979_23006[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 9))
{var inst_22933 = (state_22969[8]);var inst_22946 = (state_22969[2]);var inst_22947 = (inst_22933 + 1);var inst_22933__$1 = inst_22947;var state_22969__$1 = (function (){var statearr_22980 = state_22969;(statearr_22980[8] = inst_22933__$1);
(statearr_22980[10] = inst_22946);
return statearr_22980;
})();var statearr_22981_23007 = state_22969__$1;(statearr_22981_23007[2] = null);
(statearr_22981_23007[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 10))
{var inst_22937 = (state_22969[2]);var inst_22938 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_22969__$1 = (function (){var statearr_22982 = state_22969;(statearr_22982[11] = inst_22937);
return statearr_22982;
})();var statearr_22983_23008 = state_22969__$1;(statearr_22983_23008[2] = inst_22938);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22969__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 11))
{var inst_22933 = (state_22969[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22969,10,Object,null,9);var inst_22942 = chs__$1.call(null,inst_22933);var inst_22943 = done.call(null,inst_22933);var inst_22944 = cljs.core.async.take_BANG_.call(null,inst_22942,inst_22943);var state_22969__$1 = state_22969;var statearr_22984_23009 = state_22969__$1;(statearr_22984_23009[2] = inst_22944);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22969__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 12))
{var inst_22955 = (state_22969[12]);var inst_22955__$1 = (state_22969[2]);var inst_22956 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22955__$1);var state_22969__$1 = (function (){var statearr_22985 = state_22969;(statearr_22985[12] = inst_22955__$1);
return statearr_22985;
})();if(cljs.core.truth_(inst_22956))
{var statearr_22986_23010 = state_22969__$1;(statearr_22986_23010[1] = 13);
} else
{var statearr_22987_23011 = state_22969__$1;(statearr_22987_23011[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 13))
{var inst_22958 = cljs.core.async.close_BANG_.call(null,out);var state_22969__$1 = state_22969;var statearr_22988_23012 = state_22969__$1;(statearr_22988_23012[2] = inst_22958);
(statearr_22988_23012[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 14))
{var inst_22955 = (state_22969[12]);var inst_22960 = cljs.core.apply.call(null,f,inst_22955);var state_22969__$1 = state_22969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22969__$1,16,out,inst_22960);
} else
{if((state_val_22970 === 15))
{var inst_22965 = (state_22969[2]);var state_22969__$1 = state_22969;var statearr_22989_23013 = state_22969__$1;(statearr_22989_23013[2] = inst_22965);
(statearr_22989_23013[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22970 === 16))
{var inst_22962 = (state_22969[2]);var state_22969__$1 = (function (){var statearr_22990 = state_22969;(statearr_22990[13] = inst_22962);
return statearr_22990;
})();var statearr_22991_23014 = state_22969__$1;(statearr_22991_23014[2] = null);
(statearr_22991_23014[1] = 2);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_22995 = (new Array(14));(statearr_22995[0] = state_machine__15863__auto__);
(statearr_22995[1] = 1);
return statearr_22995;
});
var state_machine__15863__auto____1 = (function (state_22969){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_22969);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e22996){if((e22996 instanceof Object))
{var ex__15866__auto__ = e22996;var statearr_22997_23015 = state_22969;(statearr_22997_23015[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22969);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23016 = state_22969;
state_22969 = G__23016;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_22969){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_22969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_22998 = f__15956__auto__.call(null);(statearr_22998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___22999);
return statearr_22998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15955__auto___23124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_23100){var state_val_23101 = (state_23100[1]);if((state_val_23101 === 1))
{var inst_23071 = cljs.core.vec.call(null,chs);var inst_23072 = inst_23071;var state_23100__$1 = (function (){var statearr_23102 = state_23100;(statearr_23102[7] = inst_23072);
return statearr_23102;
})();var statearr_23103_23125 = state_23100__$1;(statearr_23103_23125[2] = null);
(statearr_23103_23125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 2))
{var inst_23072 = (state_23100[7]);var inst_23074 = cljs.core.count.call(null,inst_23072);var inst_23075 = (inst_23074 > 0);var state_23100__$1 = state_23100;if(cljs.core.truth_(inst_23075))
{var statearr_23104_23126 = state_23100__$1;(statearr_23104_23126[1] = 4);
} else
{var statearr_23105_23127 = state_23100__$1;(statearr_23105_23127[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 3))
{var inst_23098 = (state_23100[2]);var state_23100__$1 = state_23100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23100__$1,inst_23098);
} else
{if((state_val_23101 === 4))
{var inst_23072 = (state_23100[7]);var state_23100__$1 = state_23100;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23100__$1,7,inst_23072);
} else
{if((state_val_23101 === 5))
{var inst_23094 = cljs.core.async.close_BANG_.call(null,out);var state_23100__$1 = state_23100;var statearr_23106_23128 = state_23100__$1;(statearr_23106_23128[2] = inst_23094);
(statearr_23106_23128[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 6))
{var inst_23096 = (state_23100[2]);var state_23100__$1 = state_23100;var statearr_23107_23129 = state_23100__$1;(statearr_23107_23129[2] = inst_23096);
(statearr_23107_23129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 7))
{var inst_23079 = (state_23100[8]);var inst_23080 = (state_23100[9]);var inst_23079__$1 = (state_23100[2]);var inst_23080__$1 = cljs.core.nth.call(null,inst_23079__$1,0,null);var inst_23081 = cljs.core.nth.call(null,inst_23079__$1,1,null);var inst_23082 = (inst_23080__$1 == null);var state_23100__$1 = (function (){var statearr_23108 = state_23100;(statearr_23108[8] = inst_23079__$1);
(statearr_23108[9] = inst_23080__$1);
(statearr_23108[10] = inst_23081);
return statearr_23108;
})();if(cljs.core.truth_(inst_23082))
{var statearr_23109_23130 = state_23100__$1;(statearr_23109_23130[1] = 8);
} else
{var statearr_23110_23131 = state_23100__$1;(statearr_23110_23131[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 8))
{var inst_23072 = (state_23100[7]);var inst_23079 = (state_23100[8]);var inst_23080 = (state_23100[9]);var inst_23081 = (state_23100[10]);var inst_23084 = (function (){var c = inst_23081;var v = inst_23080;var vec__23077 = inst_23079;var cs = inst_23072;return ((function (c,v,vec__23077,cs,inst_23072,inst_23079,inst_23080,inst_23081,state_val_23101){
return (function (p1__23017_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23017_SHARP_);
});
;})(c,v,vec__23077,cs,inst_23072,inst_23079,inst_23080,inst_23081,state_val_23101))
})();var inst_23085 = cljs.core.filterv.call(null,inst_23084,inst_23072);var inst_23072__$1 = inst_23085;var state_23100__$1 = (function (){var statearr_23111 = state_23100;(statearr_23111[7] = inst_23072__$1);
return statearr_23111;
})();var statearr_23112_23132 = state_23100__$1;(statearr_23112_23132[2] = null);
(statearr_23112_23132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 9))
{var inst_23080 = (state_23100[9]);var state_23100__$1 = state_23100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23100__$1,11,out,inst_23080);
} else
{if((state_val_23101 === 10))
{var inst_23092 = (state_23100[2]);var state_23100__$1 = state_23100;var statearr_23114_23133 = state_23100__$1;(statearr_23114_23133[2] = inst_23092);
(statearr_23114_23133[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 11))
{var inst_23072 = (state_23100[7]);var inst_23089 = (state_23100[2]);var tmp23113 = inst_23072;var inst_23072__$1 = tmp23113;var state_23100__$1 = (function (){var statearr_23115 = state_23100;(statearr_23115[7] = inst_23072__$1);
(statearr_23115[11] = inst_23089);
return statearr_23115;
})();var statearr_23116_23134 = state_23100__$1;(statearr_23116_23134[2] = null);
(statearr_23116_23134[1] = 2);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_23120 = (new Array(12));(statearr_23120[0] = state_machine__15863__auto__);
(statearr_23120[1] = 1);
return statearr_23120;
});
var state_machine__15863__auto____1 = (function (state_23100){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_23100);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e23121){if((e23121 instanceof Object))
{var ex__15866__auto__ = e23121;var statearr_23122_23135 = state_23100;(statearr_23122_23135[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23100);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23136 = state_23100;
state_23100 = G__23136;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_23100){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_23100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_23123 = f__15956__auto__.call(null);(statearr_23123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___23124);
return statearr_23123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15955__auto___23229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_23206){var state_val_23207 = (state_23206[1]);if((state_val_23207 === 1))
{var inst_23183 = 0;var state_23206__$1 = (function (){var statearr_23208 = state_23206;(statearr_23208[7] = inst_23183);
return statearr_23208;
})();var statearr_23209_23230 = state_23206__$1;(statearr_23209_23230[2] = null);
(statearr_23209_23230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23207 === 2))
{var inst_23183 = (state_23206[7]);var inst_23185 = (inst_23183 < n);var state_23206__$1 = state_23206;if(cljs.core.truth_(inst_23185))
{var statearr_23210_23231 = state_23206__$1;(statearr_23210_23231[1] = 4);
} else
{var statearr_23211_23232 = state_23206__$1;(statearr_23211_23232[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23207 === 3))
{var inst_23203 = (state_23206[2]);var inst_23204 = cljs.core.async.close_BANG_.call(null,out);var state_23206__$1 = (function (){var statearr_23212 = state_23206;(statearr_23212[8] = inst_23203);
return statearr_23212;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23206__$1,inst_23204);
} else
{if((state_val_23207 === 4))
{var state_23206__$1 = state_23206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23206__$1,7,ch);
} else
{if((state_val_23207 === 5))
{var state_23206__$1 = state_23206;var statearr_23213_23233 = state_23206__$1;(statearr_23213_23233[2] = null);
(statearr_23213_23233[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23207 === 6))
{var inst_23201 = (state_23206[2]);var state_23206__$1 = state_23206;var statearr_23214_23234 = state_23206__$1;(statearr_23214_23234[2] = inst_23201);
(statearr_23214_23234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23207 === 7))
{var inst_23188 = (state_23206[9]);var inst_23188__$1 = (state_23206[2]);var inst_23189 = (inst_23188__$1 == null);var inst_23190 = cljs.core.not.call(null,inst_23189);var state_23206__$1 = (function (){var statearr_23215 = state_23206;(statearr_23215[9] = inst_23188__$1);
return statearr_23215;
})();if(inst_23190)
{var statearr_23216_23235 = state_23206__$1;(statearr_23216_23235[1] = 8);
} else
{var statearr_23217_23236 = state_23206__$1;(statearr_23217_23236[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23207 === 8))
{var inst_23188 = (state_23206[9]);var state_23206__$1 = state_23206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23206__$1,11,out,inst_23188);
} else
{if((state_val_23207 === 9))
{var state_23206__$1 = state_23206;var statearr_23218_23237 = state_23206__$1;(statearr_23218_23237[2] = null);
(statearr_23218_23237[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23207 === 10))
{var inst_23198 = (state_23206[2]);var state_23206__$1 = state_23206;var statearr_23219_23238 = state_23206__$1;(statearr_23219_23238[2] = inst_23198);
(statearr_23219_23238[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23207 === 11))
{var inst_23183 = (state_23206[7]);var inst_23193 = (state_23206[2]);var inst_23194 = (inst_23183 + 1);var inst_23183__$1 = inst_23194;var state_23206__$1 = (function (){var statearr_23220 = state_23206;(statearr_23220[10] = inst_23193);
(statearr_23220[7] = inst_23183__$1);
return statearr_23220;
})();var statearr_23221_23239 = state_23206__$1;(statearr_23221_23239[2] = null);
(statearr_23221_23239[1] = 2);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_23225 = (new Array(11));(statearr_23225[0] = state_machine__15863__auto__);
(statearr_23225[1] = 1);
return statearr_23225;
});
var state_machine__15863__auto____1 = (function (state_23206){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_23206);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e23226){if((e23226 instanceof Object))
{var ex__15866__auto__ = e23226;var statearr_23227_23240 = state_23206;(statearr_23227_23240[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23241 = state_23206;
state_23206 = G__23241;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_23206){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_23206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_23228 = f__15956__auto__.call(null);(statearr_23228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___23229);
return statearr_23228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15955__auto___23338 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_23313){var state_val_23314 = (state_23313[1]);if((state_val_23314 === 1))
{var inst_23290 = null;var state_23313__$1 = (function (){var statearr_23315 = state_23313;(statearr_23315[7] = inst_23290);
return statearr_23315;
})();var statearr_23316_23339 = state_23313__$1;(statearr_23316_23339[2] = null);
(statearr_23316_23339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23314 === 2))
{var state_23313__$1 = state_23313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23313__$1,4,ch);
} else
{if((state_val_23314 === 3))
{var inst_23310 = (state_23313[2]);var inst_23311 = cljs.core.async.close_BANG_.call(null,out);var state_23313__$1 = (function (){var statearr_23317 = state_23313;(statearr_23317[8] = inst_23310);
return statearr_23317;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23313__$1,inst_23311);
} else
{if((state_val_23314 === 4))
{var inst_23293 = (state_23313[9]);var inst_23293__$1 = (state_23313[2]);var inst_23294 = (inst_23293__$1 == null);var inst_23295 = cljs.core.not.call(null,inst_23294);var state_23313__$1 = (function (){var statearr_23318 = state_23313;(statearr_23318[9] = inst_23293__$1);
return statearr_23318;
})();if(inst_23295)
{var statearr_23319_23340 = state_23313__$1;(statearr_23319_23340[1] = 5);
} else
{var statearr_23320_23341 = state_23313__$1;(statearr_23320_23341[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23314 === 5))
{var inst_23290 = (state_23313[7]);var inst_23293 = (state_23313[9]);var inst_23297 = cljs.core._EQ_.call(null,inst_23293,inst_23290);var state_23313__$1 = state_23313;if(inst_23297)
{var statearr_23321_23342 = state_23313__$1;(statearr_23321_23342[1] = 8);
} else
{var statearr_23322_23343 = state_23313__$1;(statearr_23322_23343[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23314 === 6))
{var state_23313__$1 = state_23313;var statearr_23324_23344 = state_23313__$1;(statearr_23324_23344[2] = null);
(statearr_23324_23344[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23314 === 7))
{var inst_23308 = (state_23313[2]);var state_23313__$1 = state_23313;var statearr_23325_23345 = state_23313__$1;(statearr_23325_23345[2] = inst_23308);
(statearr_23325_23345[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23314 === 8))
{var inst_23290 = (state_23313[7]);var tmp23323 = inst_23290;var inst_23290__$1 = tmp23323;var state_23313__$1 = (function (){var statearr_23326 = state_23313;(statearr_23326[7] = inst_23290__$1);
return statearr_23326;
})();var statearr_23327_23346 = state_23313__$1;(statearr_23327_23346[2] = null);
(statearr_23327_23346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23314 === 9))
{var inst_23293 = (state_23313[9]);var state_23313__$1 = state_23313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23313__$1,11,out,inst_23293);
} else
{if((state_val_23314 === 10))
{var inst_23305 = (state_23313[2]);var state_23313__$1 = state_23313;var statearr_23328_23347 = state_23313__$1;(statearr_23328_23347[2] = inst_23305);
(statearr_23328_23347[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23314 === 11))
{var inst_23293 = (state_23313[9]);var inst_23302 = (state_23313[2]);var inst_23290 = inst_23293;var state_23313__$1 = (function (){var statearr_23329 = state_23313;(statearr_23329[7] = inst_23290);
(statearr_23329[10] = inst_23302);
return statearr_23329;
})();var statearr_23330_23348 = state_23313__$1;(statearr_23330_23348[2] = null);
(statearr_23330_23348[1] = 2);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_23334 = (new Array(11));(statearr_23334[0] = state_machine__15863__auto__);
(statearr_23334[1] = 1);
return statearr_23334;
});
var state_machine__15863__auto____1 = (function (state_23313){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_23313);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e23335){if((e23335 instanceof Object))
{var ex__15866__auto__ = e23335;var statearr_23336_23349 = state_23313;(statearr_23336_23349[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23313);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23350 = state_23313;
state_23313 = G__23350;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_23313){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_23313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_23337 = f__15956__auto__.call(null);(statearr_23337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___23338);
return statearr_23337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15955__auto___23485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_23455){var state_val_23456 = (state_23455[1]);if((state_val_23456 === 1))
{var inst_23418 = (new Array(n));var inst_23419 = inst_23418;var inst_23420 = 0;var state_23455__$1 = (function (){var statearr_23457 = state_23455;(statearr_23457[7] = inst_23419);
(statearr_23457[8] = inst_23420);
return statearr_23457;
})();var statearr_23458_23486 = state_23455__$1;(statearr_23458_23486[2] = null);
(statearr_23458_23486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 2))
{var state_23455__$1 = state_23455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23455__$1,4,ch);
} else
{if((state_val_23456 === 3))
{var inst_23453 = (state_23455[2]);var state_23455__$1 = state_23455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23455__$1,inst_23453);
} else
{if((state_val_23456 === 4))
{var inst_23423 = (state_23455[9]);var inst_23423__$1 = (state_23455[2]);var inst_23424 = (inst_23423__$1 == null);var inst_23425 = cljs.core.not.call(null,inst_23424);var state_23455__$1 = (function (){var statearr_23459 = state_23455;(statearr_23459[9] = inst_23423__$1);
return statearr_23459;
})();if(inst_23425)
{var statearr_23460_23487 = state_23455__$1;(statearr_23460_23487[1] = 5);
} else
{var statearr_23461_23488 = state_23455__$1;(statearr_23461_23488[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 5))
{var inst_23419 = (state_23455[7]);var inst_23428 = (state_23455[10]);var inst_23423 = (state_23455[9]);var inst_23420 = (state_23455[8]);var inst_23427 = (inst_23419[inst_23420] = inst_23423);var inst_23428__$1 = (inst_23420 + 1);var inst_23429 = (inst_23428__$1 < n);var state_23455__$1 = (function (){var statearr_23462 = state_23455;(statearr_23462[11] = inst_23427);
(statearr_23462[10] = inst_23428__$1);
return statearr_23462;
})();if(cljs.core.truth_(inst_23429))
{var statearr_23463_23489 = state_23455__$1;(statearr_23463_23489[1] = 8);
} else
{var statearr_23464_23490 = state_23455__$1;(statearr_23464_23490[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 6))
{var inst_23420 = (state_23455[8]);var inst_23441 = (inst_23420 > 0);var state_23455__$1 = state_23455;if(cljs.core.truth_(inst_23441))
{var statearr_23466_23491 = state_23455__$1;(statearr_23466_23491[1] = 12);
} else
{var statearr_23467_23492 = state_23455__$1;(statearr_23467_23492[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 7))
{var inst_23451 = (state_23455[2]);var state_23455__$1 = state_23455;var statearr_23468_23493 = state_23455__$1;(statearr_23468_23493[2] = inst_23451);
(statearr_23468_23493[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 8))
{var inst_23419 = (state_23455[7]);var inst_23428 = (state_23455[10]);var tmp23465 = inst_23419;var inst_23419__$1 = tmp23465;var inst_23420 = inst_23428;var state_23455__$1 = (function (){var statearr_23469 = state_23455;(statearr_23469[7] = inst_23419__$1);
(statearr_23469[8] = inst_23420);
return statearr_23469;
})();var statearr_23470_23494 = state_23455__$1;(statearr_23470_23494[2] = null);
(statearr_23470_23494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 9))
{var inst_23419 = (state_23455[7]);var inst_23433 = cljs.core.vec.call(null,inst_23419);var state_23455__$1 = state_23455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23455__$1,11,out,inst_23433);
} else
{if((state_val_23456 === 10))
{var inst_23439 = (state_23455[2]);var state_23455__$1 = state_23455;var statearr_23471_23495 = state_23455__$1;(statearr_23471_23495[2] = inst_23439);
(statearr_23471_23495[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 11))
{var inst_23435 = (state_23455[2]);var inst_23436 = (new Array(n));var inst_23419 = inst_23436;var inst_23420 = 0;var state_23455__$1 = (function (){var statearr_23472 = state_23455;(statearr_23472[12] = inst_23435);
(statearr_23472[7] = inst_23419);
(statearr_23472[8] = inst_23420);
return statearr_23472;
})();var statearr_23473_23496 = state_23455__$1;(statearr_23473_23496[2] = null);
(statearr_23473_23496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 12))
{var inst_23419 = (state_23455[7]);var inst_23443 = cljs.core.vec.call(null,inst_23419);var state_23455__$1 = state_23455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23455__$1,15,out,inst_23443);
} else
{if((state_val_23456 === 13))
{var state_23455__$1 = state_23455;var statearr_23474_23497 = state_23455__$1;(statearr_23474_23497[2] = null);
(statearr_23474_23497[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 14))
{var inst_23448 = (state_23455[2]);var inst_23449 = cljs.core.async.close_BANG_.call(null,out);var state_23455__$1 = (function (){var statearr_23475 = state_23455;(statearr_23475[13] = inst_23448);
return statearr_23475;
})();var statearr_23476_23498 = state_23455__$1;(statearr_23476_23498[2] = inst_23449);
(statearr_23476_23498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 15))
{var inst_23445 = (state_23455[2]);var state_23455__$1 = state_23455;var statearr_23477_23499 = state_23455__$1;(statearr_23477_23499[2] = inst_23445);
(statearr_23477_23499[1] = 14);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_23481 = (new Array(14));(statearr_23481[0] = state_machine__15863__auto__);
(statearr_23481[1] = 1);
return statearr_23481;
});
var state_machine__15863__auto____1 = (function (state_23455){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_23455);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e23482){if((e23482 instanceof Object))
{var ex__15866__auto__ = e23482;var statearr_23483_23500 = state_23455;(statearr_23483_23500[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23501 = state_23455;
state_23455 = G__23501;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_23455){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_23455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_23484 = f__15956__auto__.call(null);(statearr_23484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___23485);
return statearr_23484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15955__auto___23644 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_23614){var state_val_23615 = (state_23614[1]);if((state_val_23615 === 1))
{var inst_23573 = (new Array(0));var inst_23574 = inst_23573;var inst_23575 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_23614__$1 = (function (){var statearr_23616 = state_23614;(statearr_23616[7] = inst_23575);
(statearr_23616[8] = inst_23574);
return statearr_23616;
})();var statearr_23617_23645 = state_23614__$1;(statearr_23617_23645[2] = null);
(statearr_23617_23645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23615 === 2))
{var state_23614__$1 = state_23614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23614__$1,4,ch);
} else
{if((state_val_23615 === 3))
{var inst_23612 = (state_23614[2]);var state_23614__$1 = state_23614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23614__$1,inst_23612);
} else
{if((state_val_23615 === 4))
{var inst_23578 = (state_23614[9]);var inst_23578__$1 = (state_23614[2]);var inst_23579 = (inst_23578__$1 == null);var inst_23580 = cljs.core.not.call(null,inst_23579);var state_23614__$1 = (function (){var statearr_23618 = state_23614;(statearr_23618[9] = inst_23578__$1);
return statearr_23618;
})();if(inst_23580)
{var statearr_23619_23646 = state_23614__$1;(statearr_23619_23646[1] = 5);
} else
{var statearr_23620_23647 = state_23614__$1;(statearr_23620_23647[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23615 === 5))
{var inst_23578 = (state_23614[9]);var inst_23582 = (state_23614[10]);var inst_23575 = (state_23614[7]);var inst_23582__$1 = f.call(null,inst_23578);var inst_23583 = cljs.core._EQ_.call(null,inst_23582__$1,inst_23575);var inst_23584 = cljs.core.keyword_identical_QMARK_.call(null,inst_23575,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_23585 = (inst_23583) || (inst_23584);var state_23614__$1 = (function (){var statearr_23621 = state_23614;(statearr_23621[10] = inst_23582__$1);
return statearr_23621;
})();if(cljs.core.truth_(inst_23585))
{var statearr_23622_23648 = state_23614__$1;(statearr_23622_23648[1] = 8);
} else
{var statearr_23623_23649 = state_23614__$1;(statearr_23623_23649[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23615 === 6))
{var inst_23574 = (state_23614[8]);var inst_23599 = inst_23574.length;var inst_23600 = (inst_23599 > 0);var state_23614__$1 = state_23614;if(cljs.core.truth_(inst_23600))
{var statearr_23625_23650 = state_23614__$1;(statearr_23625_23650[1] = 12);
} else
{var statearr_23626_23651 = state_23614__$1;(statearr_23626_23651[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23615 === 7))
{var inst_23610 = (state_23614[2]);var state_23614__$1 = state_23614;var statearr_23627_23652 = state_23614__$1;(statearr_23627_23652[2] = inst_23610);
(statearr_23627_23652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23615 === 8))
{var inst_23578 = (state_23614[9]);var inst_23582 = (state_23614[10]);var inst_23574 = (state_23614[8]);var inst_23587 = inst_23574.push(inst_23578);var tmp23624 = inst_23574;var inst_23574__$1 = tmp23624;var inst_23575 = inst_23582;var state_23614__$1 = (function (){var statearr_23628 = state_23614;(statearr_23628[11] = inst_23587);
(statearr_23628[7] = inst_23575);
(statearr_23628[8] = inst_23574__$1);
return statearr_23628;
})();var statearr_23629_23653 = state_23614__$1;(statearr_23629_23653[2] = null);
(statearr_23629_23653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23615 === 9))
{var inst_23574 = (state_23614[8]);var inst_23590 = cljs.core.vec.call(null,inst_23574);var state_23614__$1 = state_23614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23614__$1,11,out,inst_23590);
} else
{if((state_val_23615 === 10))
{var inst_23597 = (state_23614[2]);var state_23614__$1 = state_23614;var statearr_23630_23654 = state_23614__$1;(statearr_23630_23654[2] = inst_23597);
(statearr_23630_23654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23615 === 11))
{var inst_23578 = (state_23614[9]);var inst_23582 = (state_23614[10]);var inst_23592 = (state_23614[2]);var inst_23593 = (new Array(0));var inst_23594 = inst_23593.push(inst_23578);var inst_23574 = inst_23593;var inst_23575 = inst_23582;var state_23614__$1 = (function (){var statearr_23631 = state_23614;(statearr_23631[12] = inst_23594);
(statearr_23631[13] = inst_23592);
(statearr_23631[7] = inst_23575);
(statearr_23631[8] = inst_23574);
return statearr_23631;
})();var statearr_23632_23655 = state_23614__$1;(statearr_23632_23655[2] = null);
(statearr_23632_23655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23615 === 12))
{var inst_23574 = (state_23614[8]);var inst_23602 = cljs.core.vec.call(null,inst_23574);var state_23614__$1 = state_23614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23614__$1,15,out,inst_23602);
} else
{if((state_val_23615 === 13))
{var state_23614__$1 = state_23614;var statearr_23633_23656 = state_23614__$1;(statearr_23633_23656[2] = null);
(statearr_23633_23656[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23615 === 14))
{var inst_23607 = (state_23614[2]);var inst_23608 = cljs.core.async.close_BANG_.call(null,out);var state_23614__$1 = (function (){var statearr_23634 = state_23614;(statearr_23634[14] = inst_23607);
return statearr_23634;
})();var statearr_23635_23657 = state_23614__$1;(statearr_23635_23657[2] = inst_23608);
(statearr_23635_23657[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23615 === 15))
{var inst_23604 = (state_23614[2]);var state_23614__$1 = state_23614;var statearr_23636_23658 = state_23614__$1;(statearr_23636_23658[2] = inst_23604);
(statearr_23636_23658[1] = 14);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_23640 = (new Array(15));(statearr_23640[0] = state_machine__15863__auto__);
(statearr_23640[1] = 1);
return statearr_23640;
});
var state_machine__15863__auto____1 = (function (state_23614){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_23614);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e23641){if((e23641 instanceof Object))
{var ex__15866__auto__ = e23641;var statearr_23642_23659 = state_23614;(statearr_23642_23659[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23660 = state_23614;
state_23614 = G__23660;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_23614){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_23614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_23643 = f__15956__auto__.call(null);(statearr_23643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___23644);
return statearr_23643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
