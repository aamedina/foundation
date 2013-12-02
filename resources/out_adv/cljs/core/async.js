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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t81095 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81095 = (function (f,fn_handler,meta81096){
this.f = f;
this.fn_handler = fn_handler;
this.meta81096 = meta81096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81095.cljs$lang$type = true;
cljs.core.async.t81095.cljs$lang$ctorStr = "cljs.core.async/t81095";
cljs.core.async.t81095.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t81095");
});
cljs.core.async.t81095.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t81095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t81095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81097){var self__ = this;
var _81097__$1 = this;return self__.meta81096;
});
cljs.core.async.t81095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81097,meta81096__$1){var self__ = this;
var _81097__$1 = this;return (new cljs.core.async.t81095(self__.f,self__.fn_handler,meta81096__$1));
});
cljs.core.async.__GT_t81095 = (function __GT_t81095(f__$1,fn_handler__$1,meta81096){return (new cljs.core.async.t81095(f__$1,fn_handler__$1,meta81096));
});
}
return (new cljs.core.async.t81095(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__81099 = buff;if(G__81099)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__81099.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__81099.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__81099);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__81099);
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
{var val_81100 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_81100) : fn1.call(null,val_81100));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_81100) : fn1.call(null,val_81100));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__7718__auto__ = ret;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__7718__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___81101 = n;var x_81102 = 0;while(true){
if((x_81102 < n__8553__auto___81101))
{(a[x_81102] = 0);
{
var G__81103 = (x_81102 + 1);
x_81102 = G__81103;
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
var G__81104 = (i + 1);
i = G__81104;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t81108 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81108 = (function (flag,alt_flag,meta81109){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta81109 = meta81109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81108.cljs$lang$type = true;
cljs.core.async.t81108.cljs$lang$ctorStr = "cljs.core.async/t81108";
cljs.core.async.t81108.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t81108");
});
cljs.core.async.t81108.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81108.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t81108.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t81108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81110){var self__ = this;
var _81110__$1 = this;return self__.meta81109;
});
cljs.core.async.t81108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81110,meta81109__$1){var self__ = this;
var _81110__$1 = this;return (new cljs.core.async.t81108(self__.flag,self__.alt_flag,meta81109__$1));
});
cljs.core.async.__GT_t81108 = (function __GT_t81108(flag__$1,alt_flag__$1,meta81109){return (new cljs.core.async.t81108(flag__$1,alt_flag__$1,meta81109));
});
}
return (new cljs.core.async.t81108(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t81114 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81114 = (function (cb,flag,alt_handler,meta81115){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta81115 = meta81115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81114.cljs$lang$type = true;
cljs.core.async.t81114.cljs$lang$ctorStr = "cljs.core.async/t81114";
cljs.core.async.t81114.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t81114");
});
cljs.core.async.t81114.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t81114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t81114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81116){var self__ = this;
var _81116__$1 = this;return self__.meta81115;
});
cljs.core.async.t81114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81116,meta81115__$1){var self__ = this;
var _81116__$1 = this;return (new cljs.core.async.t81114(self__.cb,self__.flag,self__.alt_handler,meta81115__$1));
});
cljs.core.async.__GT_t81114 = (function __GT_t81114(cb__$1,flag__$1,alt_handler__$1,meta81115){return (new cljs.core.async.t81114(cb__$1,flag__$1,alt_handler__$1,meta81115));
});
}
return (new cljs.core.async.t81114(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__81117_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__81117_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__81117_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__7730__auto__ = wport;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__81118 = (i + 1);
i = G__81118;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$287))
{var temp__4098__auto__ = (function (){var and__7718__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__7718__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__7718__auto__;
}
})();if(cljs.core.truth_(temp__4098__auto__))
{var got = temp__4098__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$287], null));
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
var alts_BANG___delegate = function (ports,p__81119){var map__81121 = p__81119;var map__81121__$1 = ((cljs.core.seq_QMARK_(map__81121))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81121):map__81121);var opts = map__81121__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__81119 = null;if (arguments.length > 1) {
  p__81119 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__81119);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__81122){
var ports = cljs.core.first(arglist__81122);
var p__81119 = cljs.core.rest(arglist__81122);
return alts_BANG___delegate(ports,p__81119);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t81130 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81130 = (function (ch,f,map_LT_,meta81131){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta81131 = meta81131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81130.cljs$lang$type = true;
cljs.core.async.t81130.cljs$lang$ctorStr = "cljs.core.async/t81130";
cljs.core.async.t81130.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t81130");
});
cljs.core.async.t81130.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t81130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t81130.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t81130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t81133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81133 = (function (fn1,_,meta81131,ch,f,map_LT_,meta81134){
this.fn1 = fn1;
this._ = _;
this.meta81131 = meta81131;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta81134 = meta81134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81133.cljs$lang$type = true;
cljs.core.async.t81133.cljs$lang$ctorStr = "cljs.core.async/t81133";
cljs.core.async.t81133.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t81133");
});
cljs.core.async.t81133.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81133.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t81133.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t81133.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__81123_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__81123_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__81123_SHARP_) : self__.f.call(null,p1__81123_SHARP_)))) : f1.call(null,(((p1__81123_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__81123_SHARP_) : self__.f.call(null,p1__81123_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t81133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81135){var self__ = this;
var _81135__$1 = this;return self__.meta81134;
});
cljs.core.async.t81133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81135,meta81134__$1){var self__ = this;
var _81135__$1 = this;return (new cljs.core.async.t81133(self__.fn1,self__._,self__.meta81131,self__.ch,self__.f,self__.map_LT_,meta81134__$1));
});
cljs.core.async.__GT_t81133 = (function __GT_t81133(fn1__$1,___$2,meta81131__$1,ch__$2,f__$2,map_LT___$2,meta81134){return (new cljs.core.async.t81133(fn1__$1,___$2,meta81131__$1,ch__$2,f__$2,map_LT___$2,meta81134));
});
}
return (new cljs.core.async.t81133(fn1,___$1,self__.meta81131,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7718__auto__ = ret;if(cljs.core.truth_(and__7718__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__7718__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t81130.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t81130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t81130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81132){var self__ = this;
var _81132__$1 = this;return self__.meta81131;
});
cljs.core.async.t81130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81132,meta81131__$1){var self__ = this;
var _81132__$1 = this;return (new cljs.core.async.t81130(self__.ch,self__.f,self__.map_LT_,meta81131__$1));
});
cljs.core.async.__GT_t81130 = (function __GT_t81130(ch__$1,f__$1,map_LT___$1,meta81131){return (new cljs.core.async.t81130(ch__$1,f__$1,map_LT___$1,meta81131));
});
}
return (new cljs.core.async.t81130(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t81139 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81139 = (function (ch,f,map_GT_,meta81140){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta81140 = meta81140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81139.cljs$lang$type = true;
cljs.core.async.t81139.cljs$lang$ctorStr = "cljs.core.async/t81139";
cljs.core.async.t81139.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t81139");
});
cljs.core.async.t81139.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t81139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t81139.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t81139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t81139.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t81139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t81139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81141){var self__ = this;
var _81141__$1 = this;return self__.meta81140;
});
cljs.core.async.t81139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81141,meta81140__$1){var self__ = this;
var _81141__$1 = this;return (new cljs.core.async.t81139(self__.ch,self__.f,self__.map_GT_,meta81140__$1));
});
cljs.core.async.__GT_t81139 = (function __GT_t81139(ch__$1,f__$1,map_GT___$1,meta81140){return (new cljs.core.async.t81139(ch__$1,f__$1,map_GT___$1,meta81140));
});
}
return (new cljs.core.async.t81139(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t81145 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81145 = (function (ch,p,filter_GT_,meta81146){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta81146 = meta81146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81145.cljs$lang$type = true;
cljs.core.async.t81145.cljs$lang$ctorStr = "cljs.core.async/t81145";
cljs.core.async.t81145.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t81145");
});
cljs.core.async.t81145.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t81145.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t81145.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t81145.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t81145.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t81145.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t81145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81147){var self__ = this;
var _81147__$1 = this;return self__.meta81146;
});
cljs.core.async.t81145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81147,meta81146__$1){var self__ = this;
var _81147__$1 = this;return (new cljs.core.async.t81145(self__.ch,self__.p,self__.filter_GT_,meta81146__$1));
});
cljs.core.async.__GT_t81145 = (function __GT_t81145(ch__$1,p__$1,filter_GT___$1,meta81146){return (new cljs.core.async.t81145(ch__$1,p__$1,filter_GT___$1,meta81146));
});
}
return (new cljs.core.async.t81145(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___81230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_81209){var state_val_81210 = (state_81209[1]);if((state_val_81210 === 1))
{var state_81209__$1 = state_81209;var statearr_81211_81231 = state_81209__$1;(statearr_81211_81231[2] = null);
(statearr_81211_81231[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81210 === 2))
{var state_81209__$1 = state_81209;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81209__$1,4,ch);
} else
{if((state_val_81210 === 3))
{var inst_81207 = (state_81209[2]);var state_81209__$1 = state_81209;return cljs.core.async.impl.ioc_helpers.return_chan(state_81209__$1,inst_81207);
} else
{if((state_val_81210 === 4))
{var inst_81191 = (state_81209[7]);var inst_81191__$1 = (state_81209[2]);var inst_81192 = (inst_81191__$1 == null);var state_81209__$1 = (function (){var statearr_81212 = state_81209;(statearr_81212[7] = inst_81191__$1);
return statearr_81212;
})();if(cljs.core.truth_(inst_81192))
{var statearr_81213_81232 = state_81209__$1;(statearr_81213_81232[1] = 5);
} else
{var statearr_81214_81233 = state_81209__$1;(statearr_81214_81233[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81210 === 5))
{var inst_81194 = cljs.core.async.close_BANG_(out);var state_81209__$1 = state_81209;var statearr_81215_81234 = state_81209__$1;(statearr_81215_81234[2] = inst_81194);
(statearr_81215_81234[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81210 === 6))
{var inst_81191 = (state_81209[7]);var inst_81196 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_81191) : p.call(null,inst_81191));var state_81209__$1 = state_81209;if(cljs.core.truth_(inst_81196))
{var statearr_81216_81235 = state_81209__$1;(statearr_81216_81235[1] = 8);
} else
{var statearr_81217_81236 = state_81209__$1;(statearr_81217_81236[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81210 === 7))
{var inst_81205 = (state_81209[2]);var state_81209__$1 = state_81209;var statearr_81218_81237 = state_81209__$1;(statearr_81218_81237[2] = inst_81205);
(statearr_81218_81237[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81210 === 8))
{var inst_81191 = (state_81209[7]);var state_81209__$1 = state_81209;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81209__$1,11,out,inst_81191);
} else
{if((state_val_81210 === 9))
{var state_81209__$1 = state_81209;var statearr_81219_81238 = state_81209__$1;(statearr_81219_81238[2] = null);
(statearr_81219_81238[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81210 === 10))
{var inst_81202 = (state_81209[2]);var state_81209__$1 = (function (){var statearr_81220 = state_81209;(statearr_81220[8] = inst_81202);
return statearr_81220;
})();var statearr_81221_81239 = state_81209__$1;(statearr_81221_81239[2] = null);
(statearr_81221_81239[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81210 === 11))
{var inst_81199 = (state_81209[2]);var state_81209__$1 = state_81209;var statearr_81222_81240 = state_81209__$1;(statearr_81222_81240[2] = inst_81199);
(statearr_81222_81240[1] = 10);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_81226 = (new Array(9));(statearr_81226[0] = state_machine__10214__auto__);
(statearr_81226[1] = 1);
return statearr_81226;
});
var state_machine__10214__auto____1 = (function (state_81209){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_81209);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e81227){if((e81227 instanceof Object))
{var ex__10217__auto__ = e81227;var statearr_81228_81241 = state_81209;(statearr_81228_81241[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_81209);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e81227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__81242 = state_81209;
state_81209 = G__81242;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_81209){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_81209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_81229 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_81229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___81230);
return statearr_81229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_81394){var state_val_81395 = (state_81394[1]);if((state_val_81395 === 1))
{var state_81394__$1 = state_81394;var statearr_81396_81433 = state_81394__$1;(statearr_81396_81433[2] = null);
(statearr_81396_81433[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 2))
{var state_81394__$1 = state_81394;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81394__$1,4,in$);
} else
{if((state_val_81395 === 3))
{var inst_81392 = (state_81394[2]);var state_81394__$1 = state_81394;return cljs.core.async.impl.ioc_helpers.return_chan(state_81394__$1,inst_81392);
} else
{if((state_val_81395 === 4))
{var inst_81340 = (state_81394[7]);var inst_81340__$1 = (state_81394[2]);var inst_81341 = (inst_81340__$1 == null);var state_81394__$1 = (function (){var statearr_81397 = state_81394;(statearr_81397[7] = inst_81340__$1);
return statearr_81397;
})();if(cljs.core.truth_(inst_81341))
{var statearr_81398_81434 = state_81394__$1;(statearr_81398_81434[1] = 5);
} else
{var statearr_81399_81435 = state_81394__$1;(statearr_81399_81435[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 5))
{var inst_81343 = cljs.core.async.close_BANG_(out);var state_81394__$1 = state_81394;var statearr_81400_81436 = state_81394__$1;(statearr_81400_81436[2] = inst_81343);
(statearr_81400_81436[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 6))
{var inst_81340 = (state_81394[7]);var inst_81345 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_81340) : f.call(null,inst_81340));var inst_81350 = cljs.core.seq(inst_81345);var inst_81351 = inst_81350;var inst_81352 = null;var inst_81353 = 0;var inst_81354 = 0;var state_81394__$1 = (function (){var statearr_81401 = state_81394;(statearr_81401[8] = inst_81354);
(statearr_81401[9] = inst_81351);
(statearr_81401[10] = inst_81352);
(statearr_81401[11] = inst_81353);
return statearr_81401;
})();var statearr_81402_81437 = state_81394__$1;(statearr_81402_81437[2] = null);
(statearr_81402_81437[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 7))
{var inst_81390 = (state_81394[2]);var state_81394__$1 = state_81394;var statearr_81403_81438 = state_81394__$1;(statearr_81403_81438[2] = inst_81390);
(statearr_81403_81438[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 8))
{var inst_81354 = (state_81394[8]);var inst_81353 = (state_81394[11]);var inst_81356 = (inst_81354 < inst_81353);var inst_81357 = inst_81356;var state_81394__$1 = state_81394;if(cljs.core.truth_(inst_81357))
{var statearr_81404_81439 = state_81394__$1;(statearr_81404_81439[1] = 10);
} else
{var statearr_81405_81440 = state_81394__$1;(statearr_81405_81440[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 9))
{var inst_81387 = (state_81394[2]);var state_81394__$1 = (function (){var statearr_81406 = state_81394;(statearr_81406[12] = inst_81387);
return statearr_81406;
})();var statearr_81407_81441 = state_81394__$1;(statearr_81407_81441[2] = null);
(statearr_81407_81441[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 10))
{var inst_81354 = (state_81394[8]);var inst_81352 = (state_81394[10]);var inst_81359 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_81352,inst_81354);var state_81394__$1 = state_81394;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81394__$1,13,out,inst_81359);
} else
{if((state_val_81395 === 11))
{var inst_81365 = (state_81394[13]);var inst_81351 = (state_81394[9]);var inst_81365__$1 = cljs.core.seq(inst_81351);var state_81394__$1 = (function (){var statearr_81411 = state_81394;(statearr_81411[13] = inst_81365__$1);
return statearr_81411;
})();if(inst_81365__$1)
{var statearr_81412_81442 = state_81394__$1;(statearr_81412_81442[1] = 14);
} else
{var statearr_81413_81443 = state_81394__$1;(statearr_81413_81443[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 12))
{var inst_81385 = (state_81394[2]);var state_81394__$1 = state_81394;var statearr_81414_81444 = state_81394__$1;(statearr_81414_81444[2] = inst_81385);
(statearr_81414_81444[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 13))
{var inst_81354 = (state_81394[8]);var inst_81351 = (state_81394[9]);var inst_81352 = (state_81394[10]);var inst_81353 = (state_81394[11]);var inst_81361 = (state_81394[2]);var inst_81362 = (inst_81354 + 1);var tmp81408 = inst_81351;var tmp81409 = inst_81352;var tmp81410 = inst_81353;var inst_81351__$1 = tmp81408;var inst_81352__$1 = tmp81409;var inst_81353__$1 = tmp81410;var inst_81354__$1 = inst_81362;var state_81394__$1 = (function (){var statearr_81415 = state_81394;(statearr_81415[8] = inst_81354__$1);
(statearr_81415[14] = inst_81361);
(statearr_81415[9] = inst_81351__$1);
(statearr_81415[10] = inst_81352__$1);
(statearr_81415[11] = inst_81353__$1);
return statearr_81415;
})();var statearr_81416_81445 = state_81394__$1;(statearr_81416_81445[2] = null);
(statearr_81416_81445[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 14))
{var inst_81365 = (state_81394[13]);var inst_81367 = cljs.core.chunked_seq_QMARK_(inst_81365);var state_81394__$1 = state_81394;if(inst_81367)
{var statearr_81417_81446 = state_81394__$1;(statearr_81417_81446[1] = 17);
} else
{var statearr_81418_81447 = state_81394__$1;(statearr_81418_81447[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 15))
{var state_81394__$1 = state_81394;var statearr_81419_81448 = state_81394__$1;(statearr_81419_81448[2] = null);
(statearr_81419_81448[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 16))
{var inst_81383 = (state_81394[2]);var state_81394__$1 = state_81394;var statearr_81420_81449 = state_81394__$1;(statearr_81420_81449[2] = inst_81383);
(statearr_81420_81449[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 17))
{var inst_81365 = (state_81394[13]);var inst_81369 = cljs.core.chunk_first(inst_81365);var inst_81370 = cljs.core.chunk_rest(inst_81365);var inst_81371 = cljs.core.count(inst_81369);var inst_81351 = inst_81370;var inst_81352 = inst_81369;var inst_81353 = inst_81371;var inst_81354 = 0;var state_81394__$1 = (function (){var statearr_81421 = state_81394;(statearr_81421[8] = inst_81354);
(statearr_81421[9] = inst_81351);
(statearr_81421[10] = inst_81352);
(statearr_81421[11] = inst_81353);
return statearr_81421;
})();var statearr_81422_81450 = state_81394__$1;(statearr_81422_81450[2] = null);
(statearr_81422_81450[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 18))
{var inst_81365 = (state_81394[13]);var inst_81374 = cljs.core.first(inst_81365);var state_81394__$1 = state_81394;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81394__$1,20,out,inst_81374);
} else
{if((state_val_81395 === 19))
{var inst_81380 = (state_81394[2]);var state_81394__$1 = state_81394;var statearr_81423_81451 = state_81394__$1;(statearr_81423_81451[2] = inst_81380);
(statearr_81423_81451[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81395 === 20))
{var inst_81365 = (state_81394[13]);var inst_81376 = (state_81394[2]);var inst_81377 = cljs.core.next(inst_81365);var inst_81351 = inst_81377;var inst_81352 = null;var inst_81353 = 0;var inst_81354 = 0;var state_81394__$1 = (function (){var statearr_81424 = state_81394;(statearr_81424[8] = inst_81354);
(statearr_81424[9] = inst_81351);
(statearr_81424[10] = inst_81352);
(statearr_81424[11] = inst_81353);
(statearr_81424[15] = inst_81376);
return statearr_81424;
})();var statearr_81425_81452 = state_81394__$1;(statearr_81425_81452[2] = null);
(statearr_81425_81452[1] = 8);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_81429 = (new Array(16));(statearr_81429[0] = state_machine__10214__auto__);
(statearr_81429[1] = 1);
return statearr_81429;
});
var state_machine__10214__auto____1 = (function (state_81394){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_81394);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e81430){if((e81430 instanceof Object))
{var ex__10217__auto__ = e81430;var statearr_81431_81453 = state_81394;(statearr_81431_81453[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_81394);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e81430;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__81454 = state_81394;
state_81394 = G__81454;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_81394){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_81394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_81432 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_81432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_81432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___81535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_81514){var state_val_81515 = (state_81514[1]);if((state_val_81515 === 1))
{var state_81514__$1 = state_81514;var statearr_81516_81536 = state_81514__$1;(statearr_81516_81536[2] = null);
(statearr_81516_81536[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81515 === 2))
{var state_81514__$1 = state_81514;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81514__$1,4,from);
} else
{if((state_val_81515 === 3))
{var inst_81512 = (state_81514[2]);var state_81514__$1 = state_81514;return cljs.core.async.impl.ioc_helpers.return_chan(state_81514__$1,inst_81512);
} else
{if((state_val_81515 === 4))
{var inst_81497 = (state_81514[7]);var inst_81497__$1 = (state_81514[2]);var inst_81498 = (inst_81497__$1 == null);var state_81514__$1 = (function (){var statearr_81517 = state_81514;(statearr_81517[7] = inst_81497__$1);
return statearr_81517;
})();if(cljs.core.truth_(inst_81498))
{var statearr_81518_81537 = state_81514__$1;(statearr_81518_81537[1] = 5);
} else
{var statearr_81519_81538 = state_81514__$1;(statearr_81519_81538[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81515 === 5))
{var state_81514__$1 = state_81514;if(cljs.core.truth_(close_QMARK_))
{var statearr_81520_81539 = state_81514__$1;(statearr_81520_81539[1] = 8);
} else
{var statearr_81521_81540 = state_81514__$1;(statearr_81521_81540[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81515 === 6))
{var inst_81497 = (state_81514[7]);var state_81514__$1 = state_81514;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81514__$1,11,to,inst_81497);
} else
{if((state_val_81515 === 7))
{var inst_81510 = (state_81514[2]);var state_81514__$1 = state_81514;var statearr_81522_81541 = state_81514__$1;(statearr_81522_81541[2] = inst_81510);
(statearr_81522_81541[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81515 === 8))
{var inst_81501 = cljs.core.async.close_BANG_(to);var state_81514__$1 = state_81514;var statearr_81523_81542 = state_81514__$1;(statearr_81523_81542[2] = inst_81501);
(statearr_81523_81542[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81515 === 9))
{var state_81514__$1 = state_81514;var statearr_81524_81543 = state_81514__$1;(statearr_81524_81543[2] = null);
(statearr_81524_81543[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81515 === 10))
{var inst_81504 = (state_81514[2]);var state_81514__$1 = state_81514;var statearr_81525_81544 = state_81514__$1;(statearr_81525_81544[2] = inst_81504);
(statearr_81525_81544[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81515 === 11))
{var inst_81507 = (state_81514[2]);var state_81514__$1 = (function (){var statearr_81526 = state_81514;(statearr_81526[8] = inst_81507);
return statearr_81526;
})();var statearr_81527_81545 = state_81514__$1;(statearr_81527_81545[2] = null);
(statearr_81527_81545[1] = 2);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_81531 = (new Array(9));(statearr_81531[0] = state_machine__10214__auto__);
(statearr_81531[1] = 1);
return statearr_81531;
});
var state_machine__10214__auto____1 = (function (state_81514){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_81514);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e81532){if((e81532 instanceof Object))
{var ex__10217__auto__ = e81532;var statearr_81533_81546 = state_81514;(statearr_81533_81546[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_81514);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e81532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__81547 = state_81514;
state_81514 = G__81547;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_81514){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_81514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_81534 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_81534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___81535);
return statearr_81534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__10283__auto___81634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_81612){var state_val_81613 = (state_81612[1]);if((state_val_81613 === 1))
{var state_81612__$1 = state_81612;var statearr_81614_81635 = state_81612__$1;(statearr_81614_81635[2] = null);
(statearr_81614_81635[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81613 === 2))
{var state_81612__$1 = state_81612;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81612__$1,4,ch);
} else
{if((state_val_81613 === 3))
{var inst_81610 = (state_81612[2]);var state_81612__$1 = state_81612;return cljs.core.async.impl.ioc_helpers.return_chan(state_81612__$1,inst_81610);
} else
{if((state_val_81613 === 4))
{var inst_81593 = (state_81612[7]);var inst_81593__$1 = (state_81612[2]);var inst_81594 = (inst_81593__$1 == null);var state_81612__$1 = (function (){var statearr_81615 = state_81612;(statearr_81615[7] = inst_81593__$1);
return statearr_81615;
})();if(cljs.core.truth_(inst_81594))
{var statearr_81616_81636 = state_81612__$1;(statearr_81616_81636[1] = 5);
} else
{var statearr_81617_81637 = state_81612__$1;(statearr_81617_81637[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81613 === 5))
{var inst_81596 = cljs.core.async.close_BANG_(tc);var inst_81597 = cljs.core.async.close_BANG_(fc);var state_81612__$1 = (function (){var statearr_81618 = state_81612;(statearr_81618[8] = inst_81596);
return statearr_81618;
})();var statearr_81619_81638 = state_81612__$1;(statearr_81619_81638[2] = inst_81597);
(statearr_81619_81638[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81613 === 6))
{var inst_81593 = (state_81612[7]);var inst_81599 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_81593) : p.call(null,inst_81593));var state_81612__$1 = state_81612;if(cljs.core.truth_(inst_81599))
{var statearr_81620_81639 = state_81612__$1;(statearr_81620_81639[1] = 9);
} else
{var statearr_81621_81640 = state_81612__$1;(statearr_81621_81640[1] = 10);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81613 === 7))
{var inst_81608 = (state_81612[2]);var state_81612__$1 = state_81612;var statearr_81622_81641 = state_81612__$1;(statearr_81622_81641[2] = inst_81608);
(statearr_81622_81641[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81613 === 8))
{var inst_81605 = (state_81612[2]);var state_81612__$1 = (function (){var statearr_81623 = state_81612;(statearr_81623[9] = inst_81605);
return statearr_81623;
})();var statearr_81624_81642 = state_81612__$1;(statearr_81624_81642[2] = null);
(statearr_81624_81642[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81613 === 9))
{var state_81612__$1 = state_81612;var statearr_81625_81643 = state_81612__$1;(statearr_81625_81643[2] = tc);
(statearr_81625_81643[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81613 === 10))
{var state_81612__$1 = state_81612;var statearr_81626_81644 = state_81612__$1;(statearr_81626_81644[2] = fc);
(statearr_81626_81644[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81613 === 11))
{var inst_81593 = (state_81612[7]);var inst_81603 = (state_81612[2]);var state_81612__$1 = state_81612;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81612__$1,8,inst_81603,inst_81593);
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
var state_machine__10214__auto____0 = (function (){var statearr_81630 = (new Array(10));(statearr_81630[0] = state_machine__10214__auto__);
(statearr_81630[1] = 1);
return statearr_81630;
});
var state_machine__10214__auto____1 = (function (state_81612){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_81612);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e81631){if((e81631 instanceof Object))
{var ex__10217__auto__ = e81631;var statearr_81632_81645 = state_81612;(statearr_81632_81645[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_81612);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e81631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__81646 = state_81612;
state_81612 = G__81646;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_81612){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_81612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_81633 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_81633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___81634);
return statearr_81633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_81693){var state_val_81694 = (state_81693[1]);if((state_val_81694 === 7))
{var inst_81689 = (state_81693[2]);var state_81693__$1 = state_81693;var statearr_81695_81711 = state_81693__$1;(statearr_81695_81711[2] = inst_81689);
(statearr_81695_81711[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81694 === 6))
{var inst_81679 = (state_81693[7]);var inst_81682 = (state_81693[8]);var inst_81686 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_81679,inst_81682) : f.call(null,inst_81679,inst_81682));var inst_81679__$1 = inst_81686;var state_81693__$1 = (function (){var statearr_81696 = state_81693;(statearr_81696[7] = inst_81679__$1);
return statearr_81696;
})();var statearr_81697_81712 = state_81693__$1;(statearr_81697_81712[2] = null);
(statearr_81697_81712[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81694 === 5))
{var inst_81679 = (state_81693[7]);var state_81693__$1 = state_81693;var statearr_81698_81713 = state_81693__$1;(statearr_81698_81713[2] = inst_81679);
(statearr_81698_81713[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81694 === 4))
{var inst_81682 = (state_81693[8]);var inst_81682__$1 = (state_81693[2]);var inst_81683 = (inst_81682__$1 == null);var state_81693__$1 = (function (){var statearr_81699 = state_81693;(statearr_81699[8] = inst_81682__$1);
return statearr_81699;
})();if(cljs.core.truth_(inst_81683))
{var statearr_81700_81714 = state_81693__$1;(statearr_81700_81714[1] = 5);
} else
{var statearr_81701_81715 = state_81693__$1;(statearr_81701_81715[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81694 === 3))
{var inst_81691 = (state_81693[2]);var state_81693__$1 = state_81693;return cljs.core.async.impl.ioc_helpers.return_chan(state_81693__$1,inst_81691);
} else
{if((state_val_81694 === 2))
{var state_81693__$1 = state_81693;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81693__$1,4,ch);
} else
{if((state_val_81694 === 1))
{var inst_81679 = init;var state_81693__$1 = (function (){var statearr_81702 = state_81693;(statearr_81702[7] = inst_81679);
return statearr_81702;
})();var statearr_81703_81716 = state_81693__$1;(statearr_81703_81716[2] = null);
(statearr_81703_81716[1] = 2);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_81707 = (new Array(9));(statearr_81707[0] = state_machine__10214__auto__);
(statearr_81707[1] = 1);
return statearr_81707;
});
var state_machine__10214__auto____1 = (function (state_81693){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_81693);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e81708){if((e81708 instanceof Object))
{var ex__10217__auto__ = e81708;var statearr_81709_81717 = state_81693;(statearr_81709_81717[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_81693);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e81708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__81718 = state_81693;
state_81693 = G__81718;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_81693){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_81693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_81710 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_81710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_81710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_81780){var state_val_81781 = (state_81780[1]);if((state_val_81781 === 1))
{var inst_81760 = cljs.core.seq(coll);var inst_81761 = inst_81760;var state_81780__$1 = (function (){var statearr_81782 = state_81780;(statearr_81782[7] = inst_81761);
return statearr_81782;
})();var statearr_81783_81801 = state_81780__$1;(statearr_81783_81801[2] = null);
(statearr_81783_81801[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81781 === 2))
{var inst_81761 = (state_81780[7]);var state_81780__$1 = state_81780;if(cljs.core.truth_(inst_81761))
{var statearr_81784_81802 = state_81780__$1;(statearr_81784_81802[1] = 4);
} else
{var statearr_81785_81803 = state_81780__$1;(statearr_81785_81803[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81781 === 3))
{var inst_81778 = (state_81780[2]);var state_81780__$1 = state_81780;return cljs.core.async.impl.ioc_helpers.return_chan(state_81780__$1,inst_81778);
} else
{if((state_val_81781 === 4))
{var inst_81761 = (state_81780[7]);var inst_81764 = cljs.core.first(inst_81761);var state_81780__$1 = state_81780;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81780__$1,7,ch,inst_81764);
} else
{if((state_val_81781 === 5))
{var state_81780__$1 = state_81780;if(cljs.core.truth_(close_QMARK_))
{var statearr_81786_81804 = state_81780__$1;(statearr_81786_81804[1] = 8);
} else
{var statearr_81787_81805 = state_81780__$1;(statearr_81787_81805[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_81781 === 6))
{var inst_81776 = (state_81780[2]);var state_81780__$1 = state_81780;var statearr_81788_81806 = state_81780__$1;(statearr_81788_81806[2] = inst_81776);
(statearr_81788_81806[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81781 === 7))
{var inst_81761 = (state_81780[7]);var inst_81766 = (state_81780[2]);var inst_81767 = cljs.core.next(inst_81761);var inst_81761__$1 = inst_81767;var state_81780__$1 = (function (){var statearr_81789 = state_81780;(statearr_81789[7] = inst_81761__$1);
(statearr_81789[8] = inst_81766);
return statearr_81789;
})();var statearr_81790_81807 = state_81780__$1;(statearr_81790_81807[2] = null);
(statearr_81790_81807[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81781 === 8))
{var inst_81771 = cljs.core.async.close_BANG_(ch);var state_81780__$1 = state_81780;var statearr_81791_81808 = state_81780__$1;(statearr_81791_81808[2] = inst_81771);
(statearr_81791_81808[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81781 === 9))
{var state_81780__$1 = state_81780;var statearr_81792_81809 = state_81780__$1;(statearr_81792_81809[2] = null);
(statearr_81792_81809[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_81781 === 10))
{var inst_81774 = (state_81780[2]);var state_81780__$1 = state_81780;var statearr_81793_81810 = state_81780__$1;(statearr_81793_81810[2] = inst_81774);
(statearr_81793_81810[1] = 6);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_81797 = (new Array(9));(statearr_81797[0] = state_machine__10214__auto__);
(statearr_81797[1] = 1);
return statearr_81797;
});
var state_machine__10214__auto____1 = (function (state_81780){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_81780);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e81798){if((e81798 instanceof Object))
{var ex__10217__auto__ = e81798;var statearr_81799_81811 = state_81780;(statearr_81799_81811[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_81780);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e81798;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__81812 = state_81780;
state_81780 = G__81812;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_81780){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_81780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_81800 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_81800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_81800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj81814 = {};return obj81814;
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
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj81816 = {};return obj81816;
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
{throw cljs.core.missing_protocol("Mult.tap*",m);
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
{throw cljs.core.missing_protocol("Mult.untap*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t82031 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82031 = (function (cs,ch,mult,meta82032){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta82032 = meta82032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82031.cljs$lang$type = true;
cljs.core.async.t82031.cljs$lang$ctorStr = "cljs.core.async/t82031";
cljs.core.async.t82031.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t82031");
});})(cs))
;
cljs.core.async.t82031.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t82031.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t82031.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t82031.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t82031.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t82031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t82031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_82033){var self__ = this;
var _82033__$1 = this;return self__.meta82032;
});})(cs))
;
cljs.core.async.t82031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_82033,meta82032__$1){var self__ = this;
var _82033__$1 = this;return (new cljs.core.async.t82031(self__.cs,self__.ch,self__.mult,meta82032__$1));
});})(cs))
;
cljs.core.async.__GT_t82031 = ((function (cs){
return (function __GT_t82031(cs__$1,ch__$1,mult__$1,meta82032){return (new cljs.core.async.t82031(cs__$1,ch__$1,mult__$1,meta82032));
});})(cs))
;
}
return (new cljs.core.async.t82031(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___82245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_82163){var state_val_82164 = (state_82163[1]);if((state_val_82164 === 32))
{var inst_82036 = (state_82163[7]);var inst_82112 = (state_82163[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_82163,31,Object,null,30);var inst_82119 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_82112,inst_82036,done);var state_82163__$1 = state_82163;var statearr_82165_82246 = state_82163__$1;(statearr_82165_82246[2] = inst_82119);
cljs.core.async.impl.ioc_helpers.process_exception(state_82163__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 1))
{var state_82163__$1 = state_82163;var statearr_82166_82247 = state_82163__$1;(statearr_82166_82247[2] = null);
(statearr_82166_82247[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 33))
{var inst_82125 = (state_82163[9]);var inst_82127 = cljs.core.chunked_seq_QMARK_(inst_82125);var state_82163__$1 = state_82163;if(inst_82127)
{var statearr_82167_82248 = state_82163__$1;(statearr_82167_82248[1] = 36);
} else
{var statearr_82168_82249 = state_82163__$1;(statearr_82168_82249[1] = 37);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 2))
{var state_82163__$1 = state_82163;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82163__$1,4,ch);
} else
{if((state_val_82164 === 34))
{var state_82163__$1 = state_82163;var statearr_82169_82250 = state_82163__$1;(statearr_82169_82250[2] = null);
(statearr_82169_82250[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 3))
{var inst_82161 = (state_82163[2]);var state_82163__$1 = state_82163;return cljs.core.async.impl.ioc_helpers.return_chan(state_82163__$1,inst_82161);
} else
{if((state_val_82164 === 35))
{var inst_82150 = (state_82163[2]);var state_82163__$1 = state_82163;var statearr_82170_82251 = state_82163__$1;(statearr_82170_82251[2] = inst_82150);
(statearr_82170_82251[1] = 29);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 4))
{var inst_82036 = (state_82163[7]);var inst_82036__$1 = (state_82163[2]);var inst_82037 = (inst_82036__$1 == null);var state_82163__$1 = (function (){var statearr_82171 = state_82163;(statearr_82171[7] = inst_82036__$1);
return statearr_82171;
})();if(cljs.core.truth_(inst_82037))
{var statearr_82172_82252 = state_82163__$1;(statearr_82172_82252[1] = 5);
} else
{var statearr_82173_82253 = state_82163__$1;(statearr_82173_82253[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 36))
{var inst_82125 = (state_82163[9]);var inst_82129 = cljs.core.chunk_first(inst_82125);var inst_82130 = cljs.core.chunk_rest(inst_82125);var inst_82131 = cljs.core.count(inst_82129);var inst_82104 = inst_82130;var inst_82105 = inst_82129;var inst_82106 = inst_82131;var inst_82107 = 0;var state_82163__$1 = (function (){var statearr_82174 = state_82163;(statearr_82174[10] = inst_82105);
(statearr_82174[11] = inst_82104);
(statearr_82174[12] = inst_82106);
(statearr_82174[13] = inst_82107);
return statearr_82174;
})();var statearr_82175_82254 = state_82163__$1;(statearr_82175_82254[2] = null);
(statearr_82175_82254[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 5))
{var inst_82043 = cljs.core.deref(cs);var inst_82044 = cljs.core.seq(inst_82043);var inst_82045 = inst_82044;var inst_82046 = null;var inst_82047 = 0;var inst_82048 = 0;var state_82163__$1 = (function (){var statearr_82176 = state_82163;(statearr_82176[14] = inst_82048);
(statearr_82176[15] = inst_82047);
(statearr_82176[16] = inst_82045);
(statearr_82176[17] = inst_82046);
return statearr_82176;
})();var statearr_82177_82255 = state_82163__$1;(statearr_82177_82255[2] = null);
(statearr_82177_82255[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 37))
{var inst_82125 = (state_82163[9]);var inst_82134 = cljs.core.first(inst_82125);var state_82163__$1 = (function (){var statearr_82178 = state_82163;(statearr_82178[18] = inst_82134);
return statearr_82178;
})();var statearr_82179_82256 = state_82163__$1;(statearr_82179_82256[2] = null);
(statearr_82179_82256[1] = 41);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 6))
{var inst_82095 = cljs.core.deref(cs);var inst_82096 = cljs.core.keys(inst_82095);var inst_82097 = cljs.core.count(inst_82096);var inst_82098 = cljs.core.reset_BANG_(dctr,inst_82097);var inst_82103 = cljs.core.seq(inst_82096);var inst_82104 = inst_82103;var inst_82105 = null;var inst_82106 = 0;var inst_82107 = 0;var state_82163__$1 = (function (){var statearr_82180 = state_82163;(statearr_82180[19] = inst_82098);
(statearr_82180[10] = inst_82105);
(statearr_82180[11] = inst_82104);
(statearr_82180[12] = inst_82106);
(statearr_82180[13] = inst_82107);
return statearr_82180;
})();var statearr_82181_82257 = state_82163__$1;(statearr_82181_82257[2] = null);
(statearr_82181_82257[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 38))
{var inst_82147 = (state_82163[2]);var state_82163__$1 = state_82163;var statearr_82182_82258 = state_82163__$1;(statearr_82182_82258[2] = inst_82147);
(statearr_82182_82258[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 7))
{var inst_82159 = (state_82163[2]);var state_82163__$1 = state_82163;var statearr_82183_82259 = state_82163__$1;(statearr_82183_82259[2] = inst_82159);
(statearr_82183_82259[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 39))
{var inst_82125 = (state_82163[9]);var inst_82143 = (state_82163[2]);var inst_82144 = cljs.core.next(inst_82125);var inst_82104 = inst_82144;var inst_82105 = null;var inst_82106 = 0;var inst_82107 = 0;var state_82163__$1 = (function (){var statearr_82184 = state_82163;(statearr_82184[20] = inst_82143);
(statearr_82184[10] = inst_82105);
(statearr_82184[11] = inst_82104);
(statearr_82184[12] = inst_82106);
(statearr_82184[13] = inst_82107);
return statearr_82184;
})();var statearr_82185_82260 = state_82163__$1;(statearr_82185_82260[2] = null);
(statearr_82185_82260[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 8))
{var inst_82048 = (state_82163[14]);var inst_82047 = (state_82163[15]);var inst_82050 = (inst_82048 < inst_82047);var inst_82051 = inst_82050;var state_82163__$1 = state_82163;if(cljs.core.truth_(inst_82051))
{var statearr_82186_82261 = state_82163__$1;(statearr_82186_82261[1] = 10);
} else
{var statearr_82187_82262 = state_82163__$1;(statearr_82187_82262[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 40))
{var inst_82134 = (state_82163[18]);var inst_82135 = (state_82163[2]);var inst_82136 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_82137 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_82134);var state_82163__$1 = (function (){var statearr_82188 = state_82163;(statearr_82188[21] = inst_82136);
(statearr_82188[22] = inst_82135);
return statearr_82188;
})();var statearr_82189_82263 = state_82163__$1;(statearr_82189_82263[2] = inst_82137);
cljs.core.async.impl.ioc_helpers.process_exception(state_82163__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 9))
{var inst_82093 = (state_82163[2]);var state_82163__$1 = state_82163;var statearr_82190_82264 = state_82163__$1;(statearr_82190_82264[2] = inst_82093);
(statearr_82190_82264[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 41))
{var inst_82036 = (state_82163[7]);var inst_82134 = (state_82163[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_82163,40,Object,null,39);var inst_82141 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_82134,inst_82036,done);var state_82163__$1 = state_82163;var statearr_82191_82265 = state_82163__$1;(statearr_82191_82265[2] = inst_82141);
cljs.core.async.impl.ioc_helpers.process_exception(state_82163__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 10))
{var inst_82048 = (state_82163[14]);var inst_82046 = (state_82163[17]);var inst_82054 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_82046,inst_82048);var inst_82055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82054,0,null);var inst_82056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82054,1,null);var state_82163__$1 = (function (){var statearr_82192 = state_82163;(statearr_82192[23] = inst_82055);
return statearr_82192;
})();if(cljs.core.truth_(inst_82056))
{var statearr_82193_82266 = state_82163__$1;(statearr_82193_82266[1] = 13);
} else
{var statearr_82194_82267 = state_82163__$1;(statearr_82194_82267[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 42))
{var inst_82156 = (state_82163[2]);var state_82163__$1 = (function (){var statearr_82195 = state_82163;(statearr_82195[24] = inst_82156);
return statearr_82195;
})();var statearr_82196_82268 = state_82163__$1;(statearr_82196_82268[2] = null);
(statearr_82196_82268[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 11))
{var inst_82065 = (state_82163[25]);var inst_82045 = (state_82163[16]);var inst_82065__$1 = cljs.core.seq(inst_82045);var state_82163__$1 = (function (){var statearr_82197 = state_82163;(statearr_82197[25] = inst_82065__$1);
return statearr_82197;
})();if(inst_82065__$1)
{var statearr_82198_82269 = state_82163__$1;(statearr_82198_82269[1] = 16);
} else
{var statearr_82199_82270 = state_82163__$1;(statearr_82199_82270[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 12))
{var inst_82091 = (state_82163[2]);var state_82163__$1 = state_82163;var statearr_82200_82271 = state_82163__$1;(statearr_82200_82271[2] = inst_82091);
(statearr_82200_82271[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 13))
{var inst_82055 = (state_82163[23]);var inst_82058 = cljs.core.async.close_BANG_(inst_82055);var state_82163__$1 = state_82163;var statearr_82204_82272 = state_82163__$1;(statearr_82204_82272[2] = inst_82058);
(statearr_82204_82272[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 14))
{var state_82163__$1 = state_82163;var statearr_82205_82273 = state_82163__$1;(statearr_82205_82273[2] = null);
(statearr_82205_82273[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 15))
{var inst_82048 = (state_82163[14]);var inst_82047 = (state_82163[15]);var inst_82045 = (state_82163[16]);var inst_82046 = (state_82163[17]);var inst_82061 = (state_82163[2]);var inst_82062 = (inst_82048 + 1);var tmp82201 = inst_82047;var tmp82202 = inst_82045;var tmp82203 = inst_82046;var inst_82045__$1 = tmp82202;var inst_82046__$1 = tmp82203;var inst_82047__$1 = tmp82201;var inst_82048__$1 = inst_82062;var state_82163__$1 = (function (){var statearr_82206 = state_82163;(statearr_82206[14] = inst_82048__$1);
(statearr_82206[15] = inst_82047__$1);
(statearr_82206[26] = inst_82061);
(statearr_82206[16] = inst_82045__$1);
(statearr_82206[17] = inst_82046__$1);
return statearr_82206;
})();var statearr_82207_82274 = state_82163__$1;(statearr_82207_82274[2] = null);
(statearr_82207_82274[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 16))
{var inst_82065 = (state_82163[25]);var inst_82067 = cljs.core.chunked_seq_QMARK_(inst_82065);var state_82163__$1 = state_82163;if(inst_82067)
{var statearr_82208_82275 = state_82163__$1;(statearr_82208_82275[1] = 19);
} else
{var statearr_82209_82276 = state_82163__$1;(statearr_82209_82276[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 17))
{var state_82163__$1 = state_82163;var statearr_82210_82277 = state_82163__$1;(statearr_82210_82277[2] = null);
(statearr_82210_82277[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 18))
{var inst_82089 = (state_82163[2]);var state_82163__$1 = state_82163;var statearr_82211_82278 = state_82163__$1;(statearr_82211_82278[2] = inst_82089);
(statearr_82211_82278[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 19))
{var inst_82065 = (state_82163[25]);var inst_82069 = cljs.core.chunk_first(inst_82065);var inst_82070 = cljs.core.chunk_rest(inst_82065);var inst_82071 = cljs.core.count(inst_82069);var inst_82045 = inst_82070;var inst_82046 = inst_82069;var inst_82047 = inst_82071;var inst_82048 = 0;var state_82163__$1 = (function (){var statearr_82212 = state_82163;(statearr_82212[14] = inst_82048);
(statearr_82212[15] = inst_82047);
(statearr_82212[16] = inst_82045);
(statearr_82212[17] = inst_82046);
return statearr_82212;
})();var statearr_82213_82279 = state_82163__$1;(statearr_82213_82279[2] = null);
(statearr_82213_82279[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 20))
{var inst_82065 = (state_82163[25]);var inst_82075 = cljs.core.first(inst_82065);var inst_82076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82075,0,null);var inst_82077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82075,1,null);var state_82163__$1 = (function (){var statearr_82214 = state_82163;(statearr_82214[27] = inst_82076);
return statearr_82214;
})();if(cljs.core.truth_(inst_82077))
{var statearr_82215_82280 = state_82163__$1;(statearr_82215_82280[1] = 22);
} else
{var statearr_82216_82281 = state_82163__$1;(statearr_82216_82281[1] = 23);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 21))
{var inst_82086 = (state_82163[2]);var state_82163__$1 = state_82163;var statearr_82217_82282 = state_82163__$1;(statearr_82217_82282[2] = inst_82086);
(statearr_82217_82282[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 22))
{var inst_82076 = (state_82163[27]);var inst_82079 = cljs.core.async.close_BANG_(inst_82076);var state_82163__$1 = state_82163;var statearr_82218_82283 = state_82163__$1;(statearr_82218_82283[2] = inst_82079);
(statearr_82218_82283[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 23))
{var state_82163__$1 = state_82163;var statearr_82219_82284 = state_82163__$1;(statearr_82219_82284[2] = null);
(statearr_82219_82284[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 24))
{var inst_82065 = (state_82163[25]);var inst_82082 = (state_82163[2]);var inst_82083 = cljs.core.next(inst_82065);var inst_82045 = inst_82083;var inst_82046 = null;var inst_82047 = 0;var inst_82048 = 0;var state_82163__$1 = (function (){var statearr_82220 = state_82163;(statearr_82220[14] = inst_82048);
(statearr_82220[15] = inst_82047);
(statearr_82220[28] = inst_82082);
(statearr_82220[16] = inst_82045);
(statearr_82220[17] = inst_82046);
return statearr_82220;
})();var statearr_82221_82285 = state_82163__$1;(statearr_82221_82285[2] = null);
(statearr_82221_82285[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 25))
{var inst_82106 = (state_82163[12]);var inst_82107 = (state_82163[13]);var inst_82109 = (inst_82107 < inst_82106);var inst_82110 = inst_82109;var state_82163__$1 = state_82163;if(cljs.core.truth_(inst_82110))
{var statearr_82222_82286 = state_82163__$1;(statearr_82222_82286[1] = 27);
} else
{var statearr_82223_82287 = state_82163__$1;(statearr_82223_82287[1] = 28);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 26))
{var inst_82154 = (state_82163[2]);var state_82163__$1 = (function (){var statearr_82224 = state_82163;(statearr_82224[29] = inst_82154);
return statearr_82224;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82163__$1,42,dchan);
} else
{if((state_val_82164 === 27))
{var inst_82105 = (state_82163[10]);var inst_82107 = (state_82163[13]);var inst_82112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_82105,inst_82107);var state_82163__$1 = (function (){var statearr_82225 = state_82163;(statearr_82225[8] = inst_82112);
return statearr_82225;
})();var statearr_82226_82288 = state_82163__$1;(statearr_82226_82288[2] = null);
(statearr_82226_82288[1] = 32);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 28))
{var inst_82125 = (state_82163[9]);var inst_82104 = (state_82163[11]);var inst_82125__$1 = cljs.core.seq(inst_82104);var state_82163__$1 = (function (){var statearr_82230 = state_82163;(statearr_82230[9] = inst_82125__$1);
return statearr_82230;
})();if(inst_82125__$1)
{var statearr_82231_82289 = state_82163__$1;(statearr_82231_82289[1] = 33);
} else
{var statearr_82232_82290 = state_82163__$1;(statearr_82232_82290[1] = 34);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 29))
{var inst_82152 = (state_82163[2]);var state_82163__$1 = state_82163;var statearr_82233_82291 = state_82163__$1;(statearr_82233_82291[2] = inst_82152);
(statearr_82233_82291[1] = 26);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 30))
{var inst_82105 = (state_82163[10]);var inst_82104 = (state_82163[11]);var inst_82106 = (state_82163[12]);var inst_82107 = (state_82163[13]);var inst_82121 = (state_82163[2]);var inst_82122 = (inst_82107 + 1);var tmp82227 = inst_82105;var tmp82228 = inst_82104;var tmp82229 = inst_82106;var inst_82104__$1 = tmp82228;var inst_82105__$1 = tmp82227;var inst_82106__$1 = tmp82229;var inst_82107__$1 = inst_82122;var state_82163__$1 = (function (){var statearr_82234 = state_82163;(statearr_82234[30] = inst_82121);
(statearr_82234[10] = inst_82105__$1);
(statearr_82234[11] = inst_82104__$1);
(statearr_82234[12] = inst_82106__$1);
(statearr_82234[13] = inst_82107__$1);
return statearr_82234;
})();var statearr_82235_82292 = state_82163__$1;(statearr_82235_82292[2] = null);
(statearr_82235_82292[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82164 === 31))
{var inst_82112 = (state_82163[8]);var inst_82113 = (state_82163[2]);var inst_82114 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_82115 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_82112);var state_82163__$1 = (function (){var statearr_82236 = state_82163;(statearr_82236[31] = inst_82114);
(statearr_82236[32] = inst_82113);
return statearr_82236;
})();var statearr_82237_82293 = state_82163__$1;(statearr_82237_82293[2] = inst_82115);
cljs.core.async.impl.ioc_helpers.process_exception(state_82163__$1);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_82241 = (new Array(33));(statearr_82241[0] = state_machine__10214__auto__);
(statearr_82241[1] = 1);
return statearr_82241;
});
var state_machine__10214__auto____1 = (function (state_82163){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_82163);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e82242){if((e82242 instanceof Object))
{var ex__10217__auto__ = e82242;var statearr_82243_82294 = state_82163;(statearr_82243_82294[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_82163);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e82242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__82295 = state_82163;
state_82163 = G__82295;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_82163){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_82163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_82244 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_82244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___82245);
return statearr_82244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
cljs.core.async.Mix = (function (){var obj82297 = {};return obj82297;
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
{throw cljs.core.missing_protocol("Mix.admix*",m);
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
{throw cljs.core.missing_protocol("Mix.unmix*",m);
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
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol("Mix.toggle*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$304,null,cljs.core.constant$keyword$305,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$306);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$305);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$306,chs);var pauses = pick(cljs.core.constant$keyword$304,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$307,solos,cljs.core.constant$keyword$308,pick(cljs.core.constant$keyword$305,chs),cljs.core.constant$keyword$309,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$304)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t82407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82407 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta82408){
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
this.meta82408 = meta82408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82407.cljs$lang$type = true;
cljs.core.async.t82407.cljs$lang$ctorStr = "cljs.core.async/t82407";
cljs.core.async.t82407.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t82407");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82407.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t82407.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82407.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82407.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82407.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82407.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82407.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t82407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_82409){var self__ = this;
var _82409__$1 = this;return self__.meta82408;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_82409,meta82408__$1){var self__ = this;
var _82409__$1 = this;return (new cljs.core.async.t82407(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta82408__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t82407 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t82407(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta82408){return (new cljs.core.async.t82407(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta82408));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t82407(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___82516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_82474){var state_val_82475 = (state_82474[1]);if((state_val_82475 === 1))
{var inst_82413 = (state_82474[7]);var inst_82413__$1 = calc_state();var inst_82414 = cljs.core.seq_QMARK_(inst_82413__$1);var state_82474__$1 = (function (){var statearr_82476 = state_82474;(statearr_82476[7] = inst_82413__$1);
return statearr_82476;
})();if(inst_82414)
{var statearr_82477_82517 = state_82474__$1;(statearr_82477_82517[1] = 2);
} else
{var statearr_82478_82518 = state_82474__$1;(statearr_82478_82518[1] = 3);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 2))
{var inst_82413 = (state_82474[7]);var inst_82416 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_82413);var state_82474__$1 = state_82474;var statearr_82479_82519 = state_82474__$1;(statearr_82479_82519[2] = inst_82416);
(statearr_82479_82519[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 3))
{var inst_82413 = (state_82474[7]);var state_82474__$1 = state_82474;var statearr_82480_82520 = state_82474__$1;(statearr_82480_82520[2] = inst_82413);
(statearr_82480_82520[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 4))
{var inst_82413 = (state_82474[7]);var inst_82419 = (state_82474[2]);var inst_82420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82419,cljs.core.constant$keyword$309);var inst_82421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82419,cljs.core.constant$keyword$308);var inst_82422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82419,cljs.core.constant$keyword$307);var inst_82423 = inst_82413;var state_82474__$1 = (function (){var statearr_82481 = state_82474;(statearr_82481[8] = inst_82420);
(statearr_82481[9] = inst_82422);
(statearr_82481[10] = inst_82421);
(statearr_82481[11] = inst_82423);
return statearr_82481;
})();var statearr_82482_82521 = state_82474__$1;(statearr_82482_82521[2] = null);
(statearr_82482_82521[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 5))
{var inst_82423 = (state_82474[11]);var inst_82426 = cljs.core.seq_QMARK_(inst_82423);var state_82474__$1 = state_82474;if(inst_82426)
{var statearr_82483_82522 = state_82474__$1;(statearr_82483_82522[1] = 7);
} else
{var statearr_82484_82523 = state_82474__$1;(statearr_82484_82523[1] = 8);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 6))
{var inst_82472 = (state_82474[2]);var state_82474__$1 = state_82474;return cljs.core.async.impl.ioc_helpers.return_chan(state_82474__$1,inst_82472);
} else
{if((state_val_82475 === 7))
{var inst_82423 = (state_82474[11]);var inst_82428 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_82423);var state_82474__$1 = state_82474;var statearr_82485_82524 = state_82474__$1;(statearr_82485_82524[2] = inst_82428);
(statearr_82485_82524[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 8))
{var inst_82423 = (state_82474[11]);var state_82474__$1 = state_82474;var statearr_82486_82525 = state_82474__$1;(statearr_82486_82525[2] = inst_82423);
(statearr_82486_82525[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 9))
{var inst_82431 = (state_82474[12]);var inst_82431__$1 = (state_82474[2]);var inst_82432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82431__$1,cljs.core.constant$keyword$309);var inst_82433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82431__$1,cljs.core.constant$keyword$308);var inst_82434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82431__$1,cljs.core.constant$keyword$307);var state_82474__$1 = (function (){var statearr_82487 = state_82474;(statearr_82487[13] = inst_82433);
(statearr_82487[14] = inst_82434);
(statearr_82487[12] = inst_82431__$1);
return statearr_82487;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_82474__$1,10,inst_82432);
} else
{if((state_val_82475 === 10))
{var inst_82438 = (state_82474[15]);var inst_82439 = (state_82474[16]);var inst_82437 = (state_82474[2]);var inst_82438__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82437,0,null);var inst_82439__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82437,1,null);var inst_82440 = (inst_82438__$1 == null);var inst_82441 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_82439__$1,change);var inst_82442 = (inst_82440) || (inst_82441);var state_82474__$1 = (function (){var statearr_82488 = state_82474;(statearr_82488[15] = inst_82438__$1);
(statearr_82488[16] = inst_82439__$1);
return statearr_82488;
})();if(cljs.core.truth_(inst_82442))
{var statearr_82489_82526 = state_82474__$1;(statearr_82489_82526[1] = 11);
} else
{var statearr_82490_82527 = state_82474__$1;(statearr_82490_82527[1] = 12);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 11))
{var inst_82438 = (state_82474[15]);var inst_82444 = (inst_82438 == null);var state_82474__$1 = state_82474;if(cljs.core.truth_(inst_82444))
{var statearr_82491_82528 = state_82474__$1;(statearr_82491_82528[1] = 14);
} else
{var statearr_82492_82529 = state_82474__$1;(statearr_82492_82529[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 12))
{var inst_82434 = (state_82474[14]);var inst_82439 = (state_82474[16]);var inst_82453 = (state_82474[17]);var inst_82453__$1 = (inst_82434.cljs$core$IFn$_invoke$arity$1 ? inst_82434.cljs$core$IFn$_invoke$arity$1(inst_82439) : inst_82434.call(null,inst_82439));var state_82474__$1 = (function (){var statearr_82493 = state_82474;(statearr_82493[17] = inst_82453__$1);
return statearr_82493;
})();if(cljs.core.truth_(inst_82453__$1))
{var statearr_82494_82530 = state_82474__$1;(statearr_82494_82530[1] = 17);
} else
{var statearr_82495_82531 = state_82474__$1;(statearr_82495_82531[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 13))
{var inst_82470 = (state_82474[2]);var state_82474__$1 = state_82474;var statearr_82496_82532 = state_82474__$1;(statearr_82496_82532[2] = inst_82470);
(statearr_82496_82532[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 14))
{var inst_82439 = (state_82474[16]);var inst_82446 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_82439);var state_82474__$1 = state_82474;var statearr_82497_82533 = state_82474__$1;(statearr_82497_82533[2] = inst_82446);
(statearr_82497_82533[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 15))
{var state_82474__$1 = state_82474;var statearr_82498_82534 = state_82474__$1;(statearr_82498_82534[2] = null);
(statearr_82498_82534[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 16))
{var inst_82449 = (state_82474[2]);var inst_82450 = calc_state();var inst_82423 = inst_82450;var state_82474__$1 = (function (){var statearr_82499 = state_82474;(statearr_82499[18] = inst_82449);
(statearr_82499[11] = inst_82423);
return statearr_82499;
})();var statearr_82500_82535 = state_82474__$1;(statearr_82500_82535[2] = null);
(statearr_82500_82535[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 17))
{var inst_82453 = (state_82474[17]);var state_82474__$1 = state_82474;var statearr_82501_82536 = state_82474__$1;(statearr_82501_82536[2] = inst_82453);
(statearr_82501_82536[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 18))
{var inst_82433 = (state_82474[13]);var inst_82434 = (state_82474[14]);var inst_82439 = (state_82474[16]);var inst_82456 = cljs.core.empty_QMARK_(inst_82434);var inst_82457 = (inst_82433.cljs$core$IFn$_invoke$arity$1 ? inst_82433.cljs$core$IFn$_invoke$arity$1(inst_82439) : inst_82433.call(null,inst_82439));var inst_82458 = cljs.core.not(inst_82457);var inst_82459 = (inst_82456) && (inst_82458);var state_82474__$1 = state_82474;var statearr_82502_82537 = state_82474__$1;(statearr_82502_82537[2] = inst_82459);
(statearr_82502_82537[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 19))
{var inst_82461 = (state_82474[2]);var state_82474__$1 = state_82474;if(cljs.core.truth_(inst_82461))
{var statearr_82503_82538 = state_82474__$1;(statearr_82503_82538[1] = 20);
} else
{var statearr_82504_82539 = state_82474__$1;(statearr_82504_82539[1] = 21);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 20))
{var inst_82438 = (state_82474[15]);var state_82474__$1 = state_82474;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_82474__$1,23,out,inst_82438);
} else
{if((state_val_82475 === 21))
{var state_82474__$1 = state_82474;var statearr_82505_82540 = state_82474__$1;(statearr_82505_82540[2] = null);
(statearr_82505_82540[1] = 22);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 22))
{var inst_82431 = (state_82474[12]);var inst_82467 = (state_82474[2]);var inst_82423 = inst_82431;var state_82474__$1 = (function (){var statearr_82506 = state_82474;(statearr_82506[19] = inst_82467);
(statearr_82506[11] = inst_82423);
return statearr_82506;
})();var statearr_82507_82541 = state_82474__$1;(statearr_82507_82541[2] = null);
(statearr_82507_82541[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82475 === 23))
{var inst_82464 = (state_82474[2]);var state_82474__$1 = state_82474;var statearr_82508_82542 = state_82474__$1;(statearr_82508_82542[2] = inst_82464);
(statearr_82508_82542[1] = 22);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_82512 = (new Array(20));(statearr_82512[0] = state_machine__10214__auto__);
(statearr_82512[1] = 1);
return statearr_82512;
});
var state_machine__10214__auto____1 = (function (state_82474){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_82474);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e82513){if((e82513 instanceof Object))
{var ex__10217__auto__ = e82513;var statearr_82514_82543 = state_82474;(statearr_82514_82543[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_82474);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e82513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__82544 = state_82474;
state_82474 = G__82544;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_82474){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_82474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_82515 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_82515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___82516);
return statearr_82515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
cljs.core.async.Pub = (function (){var obj82546 = {};return obj82546;
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
{throw cljs.core.missing_protocol("Pub.sub*",p);
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
{throw cljs.core.missing_protocol("Pub.unsub*",p);
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
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (function (topic){var or__7730__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7730__auto__,mults){
return (function (p1__82547_SHARP_){if(cljs.core.truth_((p1__82547_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__82547_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__82547_SHARP_.call(null,topic))))
{return p1__82547_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__82547_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t82672 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82672 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta82673){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta82673 = meta82673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82672.cljs$lang$type = true;
cljs.core.async.t82672.cljs$lang$ctorStr = "cljs.core.async/t82672";
cljs.core.async.t82672.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t82672");
});})(mults,ensure_mult))
;
cljs.core.async.t82672.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t82672.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t82672.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t82672.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t82672.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t82672.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t82672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t82672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_82674){var self__ = this;
var _82674__$1 = this;return self__.meta82673;
});})(mults,ensure_mult))
;
cljs.core.async.t82672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_82674,meta82673__$1){var self__ = this;
var _82674__$1 = this;return (new cljs.core.async.t82672(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta82673__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t82672 = ((function (mults,ensure_mult){
return (function __GT_t82672(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta82673){return (new cljs.core.async.t82672(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta82673));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t82672(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___82796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_82748){var state_val_82749 = (state_82748[1]);if((state_val_82749 === 1))
{var state_82748__$1 = state_82748;var statearr_82750_82797 = state_82748__$1;(statearr_82750_82797[2] = null);
(statearr_82750_82797[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 2))
{var state_82748__$1 = state_82748;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82748__$1,4,ch);
} else
{if((state_val_82749 === 3))
{var inst_82746 = (state_82748[2]);var state_82748__$1 = state_82748;return cljs.core.async.impl.ioc_helpers.return_chan(state_82748__$1,inst_82746);
} else
{if((state_val_82749 === 4))
{var inst_82677 = (state_82748[7]);var inst_82677__$1 = (state_82748[2]);var inst_82678 = (inst_82677__$1 == null);var state_82748__$1 = (function (){var statearr_82751 = state_82748;(statearr_82751[7] = inst_82677__$1);
return statearr_82751;
})();if(cljs.core.truth_(inst_82678))
{var statearr_82752_82798 = state_82748__$1;(statearr_82752_82798[1] = 5);
} else
{var statearr_82753_82799 = state_82748__$1;(statearr_82753_82799[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 5))
{var inst_82684 = cljs.core.deref(mults);var inst_82685 = cljs.core.vals(inst_82684);var inst_82686 = cljs.core.seq(inst_82685);var inst_82687 = inst_82686;var inst_82688 = null;var inst_82689 = 0;var inst_82690 = 0;var state_82748__$1 = (function (){var statearr_82754 = state_82748;(statearr_82754[8] = inst_82688);
(statearr_82754[9] = inst_82687);
(statearr_82754[10] = inst_82689);
(statearr_82754[11] = inst_82690);
return statearr_82754;
})();var statearr_82755_82800 = state_82748__$1;(statearr_82755_82800[2] = null);
(statearr_82755_82800[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 6))
{var inst_82727 = (state_82748[12]);var inst_82677 = (state_82748[7]);var inst_82725 = (state_82748[13]);var inst_82725__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_82677) : topic_fn.call(null,inst_82677));var inst_82726 = cljs.core.deref(mults);var inst_82727__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82726,inst_82725__$1);var state_82748__$1 = (function (){var statearr_82756 = state_82748;(statearr_82756[12] = inst_82727__$1);
(statearr_82756[13] = inst_82725__$1);
return statearr_82756;
})();if(cljs.core.truth_(inst_82727__$1))
{var statearr_82757_82801 = state_82748__$1;(statearr_82757_82801[1] = 19);
} else
{var statearr_82758_82802 = state_82748__$1;(statearr_82758_82802[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 7))
{var inst_82744 = (state_82748[2]);var state_82748__$1 = state_82748;var statearr_82759_82803 = state_82748__$1;(statearr_82759_82803[2] = inst_82744);
(statearr_82759_82803[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 8))
{var inst_82689 = (state_82748[10]);var inst_82690 = (state_82748[11]);var inst_82692 = (inst_82690 < inst_82689);var inst_82693 = inst_82692;var state_82748__$1 = state_82748;if(cljs.core.truth_(inst_82693))
{var statearr_82763_82804 = state_82748__$1;(statearr_82763_82804[1] = 10);
} else
{var statearr_82764_82805 = state_82748__$1;(statearr_82764_82805[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 9))
{var inst_82723 = (state_82748[2]);var state_82748__$1 = state_82748;var statearr_82765_82806 = state_82748__$1;(statearr_82765_82806[2] = inst_82723);
(statearr_82765_82806[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 10))
{var inst_82688 = (state_82748[8]);var inst_82687 = (state_82748[9]);var inst_82689 = (state_82748[10]);var inst_82690 = (state_82748[11]);var inst_82695 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_82688,inst_82690);var inst_82696 = cljs.core.async.muxch_STAR_(inst_82695);var inst_82697 = cljs.core.async.close_BANG_(inst_82696);var inst_82698 = (inst_82690 + 1);var tmp82760 = inst_82688;var tmp82761 = inst_82687;var tmp82762 = inst_82689;var inst_82687__$1 = tmp82761;var inst_82688__$1 = tmp82760;var inst_82689__$1 = tmp82762;var inst_82690__$1 = inst_82698;var state_82748__$1 = (function (){var statearr_82766 = state_82748;(statearr_82766[8] = inst_82688__$1);
(statearr_82766[9] = inst_82687__$1);
(statearr_82766[10] = inst_82689__$1);
(statearr_82766[14] = inst_82697);
(statearr_82766[11] = inst_82690__$1);
return statearr_82766;
})();var statearr_82767_82807 = state_82748__$1;(statearr_82767_82807[2] = null);
(statearr_82767_82807[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 11))
{var inst_82687 = (state_82748[9]);var inst_82701 = (state_82748[15]);var inst_82701__$1 = cljs.core.seq(inst_82687);var state_82748__$1 = (function (){var statearr_82768 = state_82748;(statearr_82768[15] = inst_82701__$1);
return statearr_82768;
})();if(inst_82701__$1)
{var statearr_82769_82808 = state_82748__$1;(statearr_82769_82808[1] = 13);
} else
{var statearr_82770_82809 = state_82748__$1;(statearr_82770_82809[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 12))
{var inst_82721 = (state_82748[2]);var state_82748__$1 = state_82748;var statearr_82771_82810 = state_82748__$1;(statearr_82771_82810[2] = inst_82721);
(statearr_82771_82810[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 13))
{var inst_82701 = (state_82748[15]);var inst_82703 = cljs.core.chunked_seq_QMARK_(inst_82701);var state_82748__$1 = state_82748;if(inst_82703)
{var statearr_82772_82811 = state_82748__$1;(statearr_82772_82811[1] = 16);
} else
{var statearr_82773_82812 = state_82748__$1;(statearr_82773_82812[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 14))
{var state_82748__$1 = state_82748;var statearr_82774_82813 = state_82748__$1;(statearr_82774_82813[2] = null);
(statearr_82774_82813[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 15))
{var inst_82719 = (state_82748[2]);var state_82748__$1 = state_82748;var statearr_82775_82814 = state_82748__$1;(statearr_82775_82814[2] = inst_82719);
(statearr_82775_82814[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 16))
{var inst_82701 = (state_82748[15]);var inst_82705 = cljs.core.chunk_first(inst_82701);var inst_82706 = cljs.core.chunk_rest(inst_82701);var inst_82707 = cljs.core.count(inst_82705);var inst_82687 = inst_82706;var inst_82688 = inst_82705;var inst_82689 = inst_82707;var inst_82690 = 0;var state_82748__$1 = (function (){var statearr_82776 = state_82748;(statearr_82776[8] = inst_82688);
(statearr_82776[9] = inst_82687);
(statearr_82776[10] = inst_82689);
(statearr_82776[11] = inst_82690);
return statearr_82776;
})();var statearr_82777_82815 = state_82748__$1;(statearr_82777_82815[2] = null);
(statearr_82777_82815[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 17))
{var inst_82701 = (state_82748[15]);var inst_82710 = cljs.core.first(inst_82701);var inst_82711 = cljs.core.async.muxch_STAR_(inst_82710);var inst_82712 = cljs.core.async.close_BANG_(inst_82711);var inst_82713 = cljs.core.next(inst_82701);var inst_82687 = inst_82713;var inst_82688 = null;var inst_82689 = 0;var inst_82690 = 0;var state_82748__$1 = (function (){var statearr_82778 = state_82748;(statearr_82778[16] = inst_82712);
(statearr_82778[8] = inst_82688);
(statearr_82778[9] = inst_82687);
(statearr_82778[10] = inst_82689);
(statearr_82778[11] = inst_82690);
return statearr_82778;
})();var statearr_82779_82816 = state_82748__$1;(statearr_82779_82816[2] = null);
(statearr_82779_82816[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 18))
{var inst_82716 = (state_82748[2]);var state_82748__$1 = state_82748;var statearr_82780_82817 = state_82748__$1;(statearr_82780_82817[2] = inst_82716);
(statearr_82780_82817[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 19))
{var state_82748__$1 = state_82748;var statearr_82781_82818 = state_82748__$1;(statearr_82781_82818[2] = null);
(statearr_82781_82818[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 20))
{var state_82748__$1 = state_82748;var statearr_82782_82819 = state_82748__$1;(statearr_82782_82819[2] = null);
(statearr_82782_82819[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 21))
{var inst_82741 = (state_82748[2]);var state_82748__$1 = (function (){var statearr_82783 = state_82748;(statearr_82783[17] = inst_82741);
return statearr_82783;
})();var statearr_82784_82820 = state_82748__$1;(statearr_82784_82820[2] = null);
(statearr_82784_82820[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 22))
{var inst_82738 = (state_82748[2]);var state_82748__$1 = state_82748;var statearr_82785_82821 = state_82748__$1;(statearr_82785_82821[2] = inst_82738);
(statearr_82785_82821[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 23))
{var inst_82725 = (state_82748[13]);var inst_82729 = (state_82748[2]);var inst_82730 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_82725);var state_82748__$1 = (function (){var statearr_82786 = state_82748;(statearr_82786[18] = inst_82729);
return statearr_82786;
})();var statearr_82787_82822 = state_82748__$1;(statearr_82787_82822[2] = inst_82730);
cljs.core.async.impl.ioc_helpers.process_exception(state_82748__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82749 === 24))
{var inst_82727 = (state_82748[12]);var inst_82677 = (state_82748[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_82748,23,Object,null,22);var inst_82734 = cljs.core.async.muxch_STAR_(inst_82727);var state_82748__$1 = state_82748;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_82748__$1,25,inst_82734,inst_82677);
} else
{if((state_val_82749 === 25))
{var inst_82736 = (state_82748[2]);var state_82748__$1 = state_82748;var statearr_82788_82823 = state_82748__$1;(statearr_82788_82823[2] = inst_82736);
cljs.core.async.impl.ioc_helpers.process_exception(state_82748__$1);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_82792 = (new Array(19));(statearr_82792[0] = state_machine__10214__auto__);
(statearr_82792[1] = 1);
return statearr_82792;
});
var state_machine__10214__auto____1 = (function (state_82748){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_82748);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e82793){if((e82793 instanceof Object))
{var ex__10217__auto__ = e82793;var statearr_82794_82824 = state_82748;(statearr_82794_82824[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_82748);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e82793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__82825 = state_82748;
state_82748 = G__82825;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_82748){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_82748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_82795 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_82795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___82796);
return statearr_82795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__10283__auto___82962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_82932){var state_val_82933 = (state_82932[1]);if((state_val_82933 === 1))
{var state_82932__$1 = state_82932;var statearr_82934_82963 = state_82932__$1;(statearr_82934_82963[2] = null);
(statearr_82934_82963[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 2))
{var inst_82895 = cljs.core.reset_BANG_(dctr,cnt);var inst_82896 = 0;var state_82932__$1 = (function (){var statearr_82935 = state_82932;(statearr_82935[7] = inst_82895);
(statearr_82935[8] = inst_82896);
return statearr_82935;
})();var statearr_82936_82964 = state_82932__$1;(statearr_82936_82964[2] = null);
(statearr_82936_82964[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 3))
{var inst_82930 = (state_82932[2]);var state_82932__$1 = state_82932;return cljs.core.async.impl.ioc_helpers.return_chan(state_82932__$1,inst_82930);
} else
{if((state_val_82933 === 4))
{var inst_82896 = (state_82932[8]);var inst_82898 = (inst_82896 < cnt);var state_82932__$1 = state_82932;if(cljs.core.truth_(inst_82898))
{var statearr_82937_82965 = state_82932__$1;(statearr_82937_82965[1] = 6);
} else
{var statearr_82938_82966 = state_82932__$1;(statearr_82938_82966[1] = 7);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 5))
{var inst_82916 = (state_82932[2]);var state_82932__$1 = (function (){var statearr_82939 = state_82932;(statearr_82939[9] = inst_82916);
return statearr_82939;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82932__$1,12,dchan);
} else
{if((state_val_82933 === 6))
{var state_82932__$1 = state_82932;var statearr_82940_82967 = state_82932__$1;(statearr_82940_82967[2] = null);
(statearr_82940_82967[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 7))
{var state_82932__$1 = state_82932;var statearr_82941_82968 = state_82932__$1;(statearr_82941_82968[2] = null);
(statearr_82941_82968[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 8))
{var inst_82914 = (state_82932[2]);var state_82932__$1 = state_82932;var statearr_82942_82969 = state_82932__$1;(statearr_82942_82969[2] = inst_82914);
(statearr_82942_82969[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 9))
{var inst_82896 = (state_82932[8]);var inst_82909 = (state_82932[2]);var inst_82910 = (inst_82896 + 1);var inst_82896__$1 = inst_82910;var state_82932__$1 = (function (){var statearr_82943 = state_82932;(statearr_82943[10] = inst_82909);
(statearr_82943[8] = inst_82896__$1);
return statearr_82943;
})();var statearr_82944_82970 = state_82932__$1;(statearr_82944_82970[2] = null);
(statearr_82944_82970[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 10))
{var inst_82900 = (state_82932[2]);var inst_82901 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_82932__$1 = (function (){var statearr_82945 = state_82932;(statearr_82945[11] = inst_82900);
return statearr_82945;
})();var statearr_82946_82971 = state_82932__$1;(statearr_82946_82971[2] = inst_82901);
cljs.core.async.impl.ioc_helpers.process_exception(state_82932__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 11))
{var inst_82896 = (state_82932[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_82932,10,Object,null,9);var inst_82905 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_82896) : chs__$1.call(null,inst_82896));var inst_82906 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_82896) : done.call(null,inst_82896));var inst_82907 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_82905,inst_82906);var state_82932__$1 = state_82932;var statearr_82947_82972 = state_82932__$1;(statearr_82947_82972[2] = inst_82907);
cljs.core.async.impl.ioc_helpers.process_exception(state_82932__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 12))
{var inst_82918 = (state_82932[12]);var inst_82918__$1 = (state_82932[2]);var inst_82919 = cljs.core.some(cljs.core.nil_QMARK_,inst_82918__$1);var state_82932__$1 = (function (){var statearr_82948 = state_82932;(statearr_82948[12] = inst_82918__$1);
return statearr_82948;
})();if(cljs.core.truth_(inst_82919))
{var statearr_82949_82973 = state_82932__$1;(statearr_82949_82973[1] = 13);
} else
{var statearr_82950_82974 = state_82932__$1;(statearr_82950_82974[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 13))
{var inst_82921 = cljs.core.async.close_BANG_(out);var state_82932__$1 = state_82932;var statearr_82951_82975 = state_82932__$1;(statearr_82951_82975[2] = inst_82921);
(statearr_82951_82975[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 14))
{var inst_82918 = (state_82932[12]);var inst_82923 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_82918);var state_82932__$1 = state_82932;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_82932__$1,16,out,inst_82923);
} else
{if((state_val_82933 === 15))
{var inst_82928 = (state_82932[2]);var state_82932__$1 = state_82932;var statearr_82952_82976 = state_82932__$1;(statearr_82952_82976[2] = inst_82928);
(statearr_82952_82976[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_82933 === 16))
{var inst_82925 = (state_82932[2]);var state_82932__$1 = (function (){var statearr_82953 = state_82932;(statearr_82953[13] = inst_82925);
return statearr_82953;
})();var statearr_82954_82977 = state_82932__$1;(statearr_82954_82977[2] = null);
(statearr_82954_82977[1] = 2);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_82958 = (new Array(14));(statearr_82958[0] = state_machine__10214__auto__);
(statearr_82958[1] = 1);
return statearr_82958;
});
var state_machine__10214__auto____1 = (function (state_82932){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_82932);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e82959){if((e82959 instanceof Object))
{var ex__10217__auto__ = e82959;var statearr_82960_82978 = state_82932;(statearr_82960_82978[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_82932);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e82959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__82979 = state_82932;
state_82932 = G__82979;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_82932){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_82932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_82961 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_82961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___82962);
return statearr_82961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___83087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_83063){var state_val_83064 = (state_83063[1]);if((state_val_83064 === 1))
{var inst_83034 = cljs.core.vec(chs);var inst_83035 = inst_83034;var state_83063__$1 = (function (){var statearr_83065 = state_83063;(statearr_83065[7] = inst_83035);
return statearr_83065;
})();var statearr_83066_83088 = state_83063__$1;(statearr_83066_83088[2] = null);
(statearr_83066_83088[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83064 === 2))
{var inst_83035 = (state_83063[7]);var inst_83037 = cljs.core.count(inst_83035);var inst_83038 = (inst_83037 > 0);var state_83063__$1 = state_83063;if(cljs.core.truth_(inst_83038))
{var statearr_83067_83089 = state_83063__$1;(statearr_83067_83089[1] = 4);
} else
{var statearr_83068_83090 = state_83063__$1;(statearr_83068_83090[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83064 === 3))
{var inst_83061 = (state_83063[2]);var state_83063__$1 = state_83063;return cljs.core.async.impl.ioc_helpers.return_chan(state_83063__$1,inst_83061);
} else
{if((state_val_83064 === 4))
{var inst_83035 = (state_83063[7]);var state_83063__$1 = state_83063;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_83063__$1,7,inst_83035);
} else
{if((state_val_83064 === 5))
{var inst_83057 = cljs.core.async.close_BANG_(out);var state_83063__$1 = state_83063;var statearr_83069_83091 = state_83063__$1;(statearr_83069_83091[2] = inst_83057);
(statearr_83069_83091[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83064 === 6))
{var inst_83059 = (state_83063[2]);var state_83063__$1 = state_83063;var statearr_83070_83092 = state_83063__$1;(statearr_83070_83092[2] = inst_83059);
(statearr_83070_83092[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83064 === 7))
{var inst_83043 = (state_83063[8]);var inst_83042 = (state_83063[9]);var inst_83042__$1 = (state_83063[2]);var inst_83043__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83042__$1,0,null);var inst_83044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83042__$1,1,null);var inst_83045 = (inst_83043__$1 == null);var state_83063__$1 = (function (){var statearr_83071 = state_83063;(statearr_83071[8] = inst_83043__$1);
(statearr_83071[9] = inst_83042__$1);
(statearr_83071[10] = inst_83044);
return statearr_83071;
})();if(cljs.core.truth_(inst_83045))
{var statearr_83072_83093 = state_83063__$1;(statearr_83072_83093[1] = 8);
} else
{var statearr_83073_83094 = state_83063__$1;(statearr_83073_83094[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83064 === 8))
{var inst_83043 = (state_83063[8]);var inst_83042 = (state_83063[9]);var inst_83035 = (state_83063[7]);var inst_83044 = (state_83063[10]);var inst_83047 = (function (){var c = inst_83044;var v = inst_83043;var vec__83040 = inst_83042;var cs = inst_83035;return ((function (c,v,vec__83040,cs,inst_83043,inst_83042,inst_83035,inst_83044,state_val_83064){
return (function (p1__82980_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__82980_SHARP_);
});
;})(c,v,vec__83040,cs,inst_83043,inst_83042,inst_83035,inst_83044,state_val_83064))
})();var inst_83048 = cljs.core.filterv(inst_83047,inst_83035);var inst_83035__$1 = inst_83048;var state_83063__$1 = (function (){var statearr_83074 = state_83063;(statearr_83074[7] = inst_83035__$1);
return statearr_83074;
})();var statearr_83075_83095 = state_83063__$1;(statearr_83075_83095[2] = null);
(statearr_83075_83095[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83064 === 9))
{var inst_83043 = (state_83063[8]);var state_83063__$1 = state_83063;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83063__$1,11,out,inst_83043);
} else
{if((state_val_83064 === 10))
{var inst_83055 = (state_83063[2]);var state_83063__$1 = state_83063;var statearr_83077_83096 = state_83063__$1;(statearr_83077_83096[2] = inst_83055);
(statearr_83077_83096[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83064 === 11))
{var inst_83035 = (state_83063[7]);var inst_83052 = (state_83063[2]);var tmp83076 = inst_83035;var inst_83035__$1 = tmp83076;var state_83063__$1 = (function (){var statearr_83078 = state_83063;(statearr_83078[7] = inst_83035__$1);
(statearr_83078[11] = inst_83052);
return statearr_83078;
})();var statearr_83079_83097 = state_83063__$1;(statearr_83079_83097[2] = null);
(statearr_83079_83097[1] = 2);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_83083 = (new Array(12));(statearr_83083[0] = state_machine__10214__auto__);
(statearr_83083[1] = 1);
return statearr_83083;
});
var state_machine__10214__auto____1 = (function (state_83063){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_83063);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e83084){if((e83084 instanceof Object))
{var ex__10217__auto__ = e83084;var statearr_83085_83098 = state_83063;(statearr_83085_83098[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_83063);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e83084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__83099 = state_83063;
state_83063 = G__83099;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_83063){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_83063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_83086 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_83086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___83087);
return statearr_83086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___83192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_83169){var state_val_83170 = (state_83169[1]);if((state_val_83170 === 1))
{var inst_83146 = 0;var state_83169__$1 = (function (){var statearr_83171 = state_83169;(statearr_83171[7] = inst_83146);
return statearr_83171;
})();var statearr_83172_83193 = state_83169__$1;(statearr_83172_83193[2] = null);
(statearr_83172_83193[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83170 === 2))
{var inst_83146 = (state_83169[7]);var inst_83148 = (inst_83146 < n);var state_83169__$1 = state_83169;if(cljs.core.truth_(inst_83148))
{var statearr_83173_83194 = state_83169__$1;(statearr_83173_83194[1] = 4);
} else
{var statearr_83174_83195 = state_83169__$1;(statearr_83174_83195[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83170 === 3))
{var inst_83166 = (state_83169[2]);var inst_83167 = cljs.core.async.close_BANG_(out);var state_83169__$1 = (function (){var statearr_83175 = state_83169;(statearr_83175[8] = inst_83166);
return statearr_83175;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_83169__$1,inst_83167);
} else
{if((state_val_83170 === 4))
{var state_83169__$1 = state_83169;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83169__$1,7,ch);
} else
{if((state_val_83170 === 5))
{var state_83169__$1 = state_83169;var statearr_83176_83196 = state_83169__$1;(statearr_83176_83196[2] = null);
(statearr_83176_83196[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83170 === 6))
{var inst_83164 = (state_83169[2]);var state_83169__$1 = state_83169;var statearr_83177_83197 = state_83169__$1;(statearr_83177_83197[2] = inst_83164);
(statearr_83177_83197[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83170 === 7))
{var inst_83151 = (state_83169[9]);var inst_83151__$1 = (state_83169[2]);var inst_83152 = (inst_83151__$1 == null);var inst_83153 = cljs.core.not(inst_83152);var state_83169__$1 = (function (){var statearr_83178 = state_83169;(statearr_83178[9] = inst_83151__$1);
return statearr_83178;
})();if(inst_83153)
{var statearr_83179_83198 = state_83169__$1;(statearr_83179_83198[1] = 8);
} else
{var statearr_83180_83199 = state_83169__$1;(statearr_83180_83199[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83170 === 8))
{var inst_83151 = (state_83169[9]);var state_83169__$1 = state_83169;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83169__$1,11,out,inst_83151);
} else
{if((state_val_83170 === 9))
{var state_83169__$1 = state_83169;var statearr_83181_83200 = state_83169__$1;(statearr_83181_83200[2] = null);
(statearr_83181_83200[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83170 === 10))
{var inst_83161 = (state_83169[2]);var state_83169__$1 = state_83169;var statearr_83182_83201 = state_83169__$1;(statearr_83182_83201[2] = inst_83161);
(statearr_83182_83201[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83170 === 11))
{var inst_83146 = (state_83169[7]);var inst_83156 = (state_83169[2]);var inst_83157 = (inst_83146 + 1);var inst_83146__$1 = inst_83157;var state_83169__$1 = (function (){var statearr_83183 = state_83169;(statearr_83183[10] = inst_83156);
(statearr_83183[7] = inst_83146__$1);
return statearr_83183;
})();var statearr_83184_83202 = state_83169__$1;(statearr_83184_83202[2] = null);
(statearr_83184_83202[1] = 2);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_83188 = (new Array(11));(statearr_83188[0] = state_machine__10214__auto__);
(statearr_83188[1] = 1);
return statearr_83188;
});
var state_machine__10214__auto____1 = (function (state_83169){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_83169);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e83189){if((e83189 instanceof Object))
{var ex__10217__auto__ = e83189;var statearr_83190_83203 = state_83169;(statearr_83190_83203[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_83169);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e83189;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__83204 = state_83169;
state_83169 = G__83204;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_83169){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_83169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_83191 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_83191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___83192);
return statearr_83191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___83301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_83276){var state_val_83277 = (state_83276[1]);if((state_val_83277 === 1))
{var inst_83253 = null;var state_83276__$1 = (function (){var statearr_83278 = state_83276;(statearr_83278[7] = inst_83253);
return statearr_83278;
})();var statearr_83279_83302 = state_83276__$1;(statearr_83279_83302[2] = null);
(statearr_83279_83302[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83277 === 2))
{var state_83276__$1 = state_83276;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83276__$1,4,ch);
} else
{if((state_val_83277 === 3))
{var inst_83273 = (state_83276[2]);var inst_83274 = cljs.core.async.close_BANG_(out);var state_83276__$1 = (function (){var statearr_83280 = state_83276;(statearr_83280[8] = inst_83273);
return statearr_83280;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_83276__$1,inst_83274);
} else
{if((state_val_83277 === 4))
{var inst_83256 = (state_83276[9]);var inst_83256__$1 = (state_83276[2]);var inst_83257 = (inst_83256__$1 == null);var inst_83258 = cljs.core.not(inst_83257);var state_83276__$1 = (function (){var statearr_83281 = state_83276;(statearr_83281[9] = inst_83256__$1);
return statearr_83281;
})();if(inst_83258)
{var statearr_83282_83303 = state_83276__$1;(statearr_83282_83303[1] = 5);
} else
{var statearr_83283_83304 = state_83276__$1;(statearr_83283_83304[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83277 === 5))
{var inst_83253 = (state_83276[7]);var inst_83256 = (state_83276[9]);var inst_83260 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_83256,inst_83253);var state_83276__$1 = state_83276;if(inst_83260)
{var statearr_83284_83305 = state_83276__$1;(statearr_83284_83305[1] = 8);
} else
{var statearr_83285_83306 = state_83276__$1;(statearr_83285_83306[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83277 === 6))
{var state_83276__$1 = state_83276;var statearr_83287_83307 = state_83276__$1;(statearr_83287_83307[2] = null);
(statearr_83287_83307[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83277 === 7))
{var inst_83271 = (state_83276[2]);var state_83276__$1 = state_83276;var statearr_83288_83308 = state_83276__$1;(statearr_83288_83308[2] = inst_83271);
(statearr_83288_83308[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83277 === 8))
{var inst_83253 = (state_83276[7]);var tmp83286 = inst_83253;var inst_83253__$1 = tmp83286;var state_83276__$1 = (function (){var statearr_83289 = state_83276;(statearr_83289[7] = inst_83253__$1);
return statearr_83289;
})();var statearr_83290_83309 = state_83276__$1;(statearr_83290_83309[2] = null);
(statearr_83290_83309[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83277 === 9))
{var inst_83256 = (state_83276[9]);var state_83276__$1 = state_83276;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83276__$1,11,out,inst_83256);
} else
{if((state_val_83277 === 10))
{var inst_83268 = (state_83276[2]);var state_83276__$1 = state_83276;var statearr_83291_83310 = state_83276__$1;(statearr_83291_83310[2] = inst_83268);
(statearr_83291_83310[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83277 === 11))
{var inst_83256 = (state_83276[9]);var inst_83265 = (state_83276[2]);var inst_83253 = inst_83256;var state_83276__$1 = (function (){var statearr_83292 = state_83276;(statearr_83292[10] = inst_83265);
(statearr_83292[7] = inst_83253);
return statearr_83292;
})();var statearr_83293_83311 = state_83276__$1;(statearr_83293_83311[2] = null);
(statearr_83293_83311[1] = 2);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_83297 = (new Array(11));(statearr_83297[0] = state_machine__10214__auto__);
(statearr_83297[1] = 1);
return statearr_83297;
});
var state_machine__10214__auto____1 = (function (state_83276){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_83276);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e83298){if((e83298 instanceof Object))
{var ex__10217__auto__ = e83298;var statearr_83299_83312 = state_83276;(statearr_83299_83312[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_83276);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e83298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__83313 = state_83276;
state_83276 = G__83313;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_83276){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_83276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_83300 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_83300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___83301);
return statearr_83300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___83448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_83418){var state_val_83419 = (state_83418[1]);if((state_val_83419 === 1))
{var inst_83381 = (new Array(n));var inst_83382 = inst_83381;var inst_83383 = 0;var state_83418__$1 = (function (){var statearr_83420 = state_83418;(statearr_83420[7] = inst_83383);
(statearr_83420[8] = inst_83382);
return statearr_83420;
})();var statearr_83421_83449 = state_83418__$1;(statearr_83421_83449[2] = null);
(statearr_83421_83449[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83419 === 2))
{var state_83418__$1 = state_83418;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83418__$1,4,ch);
} else
{if((state_val_83419 === 3))
{var inst_83416 = (state_83418[2]);var state_83418__$1 = state_83418;return cljs.core.async.impl.ioc_helpers.return_chan(state_83418__$1,inst_83416);
} else
{if((state_val_83419 === 4))
{var inst_83386 = (state_83418[9]);var inst_83386__$1 = (state_83418[2]);var inst_83387 = (inst_83386__$1 == null);var inst_83388 = cljs.core.not(inst_83387);var state_83418__$1 = (function (){var statearr_83422 = state_83418;(statearr_83422[9] = inst_83386__$1);
return statearr_83422;
})();if(inst_83388)
{var statearr_83423_83450 = state_83418__$1;(statearr_83423_83450[1] = 5);
} else
{var statearr_83424_83451 = state_83418__$1;(statearr_83424_83451[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83419 === 5))
{var inst_83391 = (state_83418[10]);var inst_83386 = (state_83418[9]);var inst_83383 = (state_83418[7]);var inst_83382 = (state_83418[8]);var inst_83390 = (inst_83382[inst_83383] = inst_83386);var inst_83391__$1 = (inst_83383 + 1);var inst_83392 = (inst_83391__$1 < n);var state_83418__$1 = (function (){var statearr_83425 = state_83418;(statearr_83425[11] = inst_83390);
(statearr_83425[10] = inst_83391__$1);
return statearr_83425;
})();if(cljs.core.truth_(inst_83392))
{var statearr_83426_83452 = state_83418__$1;(statearr_83426_83452[1] = 8);
} else
{var statearr_83427_83453 = state_83418__$1;(statearr_83427_83453[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83419 === 6))
{var inst_83383 = (state_83418[7]);var inst_83404 = (inst_83383 > 0);var state_83418__$1 = state_83418;if(cljs.core.truth_(inst_83404))
{var statearr_83429_83454 = state_83418__$1;(statearr_83429_83454[1] = 12);
} else
{var statearr_83430_83455 = state_83418__$1;(statearr_83430_83455[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83419 === 7))
{var inst_83414 = (state_83418[2]);var state_83418__$1 = state_83418;var statearr_83431_83456 = state_83418__$1;(statearr_83431_83456[2] = inst_83414);
(statearr_83431_83456[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83419 === 8))
{var inst_83391 = (state_83418[10]);var inst_83382 = (state_83418[8]);var tmp83428 = inst_83382;var inst_83382__$1 = tmp83428;var inst_83383 = inst_83391;var state_83418__$1 = (function (){var statearr_83432 = state_83418;(statearr_83432[7] = inst_83383);
(statearr_83432[8] = inst_83382__$1);
return statearr_83432;
})();var statearr_83433_83457 = state_83418__$1;(statearr_83433_83457[2] = null);
(statearr_83433_83457[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83419 === 9))
{var inst_83382 = (state_83418[8]);var inst_83396 = cljs.core.vec(inst_83382);var state_83418__$1 = state_83418;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83418__$1,11,out,inst_83396);
} else
{if((state_val_83419 === 10))
{var inst_83402 = (state_83418[2]);var state_83418__$1 = state_83418;var statearr_83434_83458 = state_83418__$1;(statearr_83434_83458[2] = inst_83402);
(statearr_83434_83458[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83419 === 11))
{var inst_83398 = (state_83418[2]);var inst_83399 = (new Array(n));var inst_83382 = inst_83399;var inst_83383 = 0;var state_83418__$1 = (function (){var statearr_83435 = state_83418;(statearr_83435[12] = inst_83398);
(statearr_83435[7] = inst_83383);
(statearr_83435[8] = inst_83382);
return statearr_83435;
})();var statearr_83436_83459 = state_83418__$1;(statearr_83436_83459[2] = null);
(statearr_83436_83459[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83419 === 12))
{var inst_83382 = (state_83418[8]);var inst_83406 = cljs.core.vec(inst_83382);var state_83418__$1 = state_83418;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83418__$1,15,out,inst_83406);
} else
{if((state_val_83419 === 13))
{var state_83418__$1 = state_83418;var statearr_83437_83460 = state_83418__$1;(statearr_83437_83460[2] = null);
(statearr_83437_83460[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83419 === 14))
{var inst_83411 = (state_83418[2]);var inst_83412 = cljs.core.async.close_BANG_(out);var state_83418__$1 = (function (){var statearr_83438 = state_83418;(statearr_83438[13] = inst_83411);
return statearr_83438;
})();var statearr_83439_83461 = state_83418__$1;(statearr_83439_83461[2] = inst_83412);
(statearr_83439_83461[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83419 === 15))
{var inst_83408 = (state_83418[2]);var state_83418__$1 = state_83418;var statearr_83440_83462 = state_83418__$1;(statearr_83440_83462[2] = inst_83408);
(statearr_83440_83462[1] = 14);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_83444 = (new Array(14));(statearr_83444[0] = state_machine__10214__auto__);
(statearr_83444[1] = 1);
return statearr_83444;
});
var state_machine__10214__auto____1 = (function (state_83418){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_83418);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e83445){if((e83445 instanceof Object))
{var ex__10217__auto__ = e83445;var statearr_83446_83463 = state_83418;(statearr_83446_83463[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_83418);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e83445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__83464 = state_83418;
state_83418 = G__83464;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_83418){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_83418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_83447 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_83447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___83448);
return statearr_83447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___83607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_83577){var state_val_83578 = (state_83577[1]);if((state_val_83578 === 1))
{var inst_83536 = (new Array(0));var inst_83537 = inst_83536;var inst_83538 = cljs.core.constant$keyword$310;var state_83577__$1 = (function (){var statearr_83579 = state_83577;(statearr_83579[7] = inst_83538);
(statearr_83579[8] = inst_83537);
return statearr_83579;
})();var statearr_83580_83608 = state_83577__$1;(statearr_83580_83608[2] = null);
(statearr_83580_83608[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83578 === 2))
{var state_83577__$1 = state_83577;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83577__$1,4,ch);
} else
{if((state_val_83578 === 3))
{var inst_83575 = (state_83577[2]);var state_83577__$1 = state_83577;return cljs.core.async.impl.ioc_helpers.return_chan(state_83577__$1,inst_83575);
} else
{if((state_val_83578 === 4))
{var inst_83541 = (state_83577[9]);var inst_83541__$1 = (state_83577[2]);var inst_83542 = (inst_83541__$1 == null);var inst_83543 = cljs.core.not(inst_83542);var state_83577__$1 = (function (){var statearr_83581 = state_83577;(statearr_83581[9] = inst_83541__$1);
return statearr_83581;
})();if(inst_83543)
{var statearr_83582_83609 = state_83577__$1;(statearr_83582_83609[1] = 5);
} else
{var statearr_83583_83610 = state_83577__$1;(statearr_83583_83610[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83578 === 5))
{var inst_83538 = (state_83577[7]);var inst_83541 = (state_83577[9]);var inst_83545 = (state_83577[10]);var inst_83545__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_83541) : f.call(null,inst_83541));var inst_83546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_83545__$1,inst_83538);var inst_83547 = cljs.core.keyword_identical_QMARK_(inst_83538,cljs.core.constant$keyword$310);var inst_83548 = (inst_83546) || (inst_83547);var state_83577__$1 = (function (){var statearr_83584 = state_83577;(statearr_83584[10] = inst_83545__$1);
return statearr_83584;
})();if(cljs.core.truth_(inst_83548))
{var statearr_83585_83611 = state_83577__$1;(statearr_83585_83611[1] = 8);
} else
{var statearr_83586_83612 = state_83577__$1;(statearr_83586_83612[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83578 === 6))
{var inst_83537 = (state_83577[8]);var inst_83562 = inst_83537.length;var inst_83563 = (inst_83562 > 0);var state_83577__$1 = state_83577;if(cljs.core.truth_(inst_83563))
{var statearr_83588_83613 = state_83577__$1;(statearr_83588_83613[1] = 12);
} else
{var statearr_83589_83614 = state_83577__$1;(statearr_83589_83614[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_83578 === 7))
{var inst_83573 = (state_83577[2]);var state_83577__$1 = state_83577;var statearr_83590_83615 = state_83577__$1;(statearr_83590_83615[2] = inst_83573);
(statearr_83590_83615[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83578 === 8))
{var inst_83541 = (state_83577[9]);var inst_83537 = (state_83577[8]);var inst_83545 = (state_83577[10]);var inst_83550 = inst_83537.push(inst_83541);var tmp83587 = inst_83537;var inst_83537__$1 = tmp83587;var inst_83538 = inst_83545;var state_83577__$1 = (function (){var statearr_83591 = state_83577;(statearr_83591[11] = inst_83550);
(statearr_83591[7] = inst_83538);
(statearr_83591[8] = inst_83537__$1);
return statearr_83591;
})();var statearr_83592_83616 = state_83577__$1;(statearr_83592_83616[2] = null);
(statearr_83592_83616[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83578 === 9))
{var inst_83537 = (state_83577[8]);var inst_83553 = cljs.core.vec(inst_83537);var state_83577__$1 = state_83577;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83577__$1,11,out,inst_83553);
} else
{if((state_val_83578 === 10))
{var inst_83560 = (state_83577[2]);var state_83577__$1 = state_83577;var statearr_83593_83617 = state_83577__$1;(statearr_83593_83617[2] = inst_83560);
(statearr_83593_83617[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83578 === 11))
{var inst_83541 = (state_83577[9]);var inst_83545 = (state_83577[10]);var inst_83555 = (state_83577[2]);var inst_83556 = (new Array(0));var inst_83557 = inst_83556.push(inst_83541);var inst_83537 = inst_83556;var inst_83538 = inst_83545;var state_83577__$1 = (function (){var statearr_83594 = state_83577;(statearr_83594[7] = inst_83538);
(statearr_83594[8] = inst_83537);
(statearr_83594[12] = inst_83555);
(statearr_83594[13] = inst_83557);
return statearr_83594;
})();var statearr_83595_83618 = state_83577__$1;(statearr_83595_83618[2] = null);
(statearr_83595_83618[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83578 === 12))
{var inst_83537 = (state_83577[8]);var inst_83565 = cljs.core.vec(inst_83537);var state_83577__$1 = state_83577;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83577__$1,15,out,inst_83565);
} else
{if((state_val_83578 === 13))
{var state_83577__$1 = state_83577;var statearr_83596_83619 = state_83577__$1;(statearr_83596_83619[2] = null);
(statearr_83596_83619[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83578 === 14))
{var inst_83570 = (state_83577[2]);var inst_83571 = cljs.core.async.close_BANG_(out);var state_83577__$1 = (function (){var statearr_83597 = state_83577;(statearr_83597[14] = inst_83570);
return statearr_83597;
})();var statearr_83598_83620 = state_83577__$1;(statearr_83598_83620[2] = inst_83571);
(statearr_83598_83620[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_83578 === 15))
{var inst_83567 = (state_83577[2]);var state_83577__$1 = state_83577;var statearr_83599_83621 = state_83577__$1;(statearr_83599_83621[2] = inst_83567);
(statearr_83599_83621[1] = 14);
return cljs.core.constant$keyword$297;
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
var state_machine__10214__auto____0 = (function (){var statearr_83603 = (new Array(15));(statearr_83603[0] = state_machine__10214__auto__);
(statearr_83603[1] = 1);
return statearr_83603;
});
var state_machine__10214__auto____1 = (function (state_83577){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_83577);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e83604){if((e83604 instanceof Object))
{var ex__10217__auto__ = e83604;var statearr_83605_83622 = state_83577;(statearr_83605_83622[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_83577);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e83604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__83623 = state_83577;
state_83577 = G__83623;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_83577){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_83577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_83606 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_83606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___83607);
return statearr_83606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
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
