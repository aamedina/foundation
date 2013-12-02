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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t215694 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t215694 = (function (f,fn_handler,meta215695){
this.f = f;
this.fn_handler = fn_handler;
this.meta215695 = meta215695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t215694.cljs$lang$type = true;
cljs.core.async.t215694.cljs$lang$ctorStr = "cljs.core.async/t215694";
cljs.core.async.t215694.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t215694");
});
cljs.core.async.t215694.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t215694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t215694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t215694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_215696){var self__ = this;
var _215696__$1 = this;return self__.meta215695;
});
cljs.core.async.t215694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_215696,meta215695__$1){var self__ = this;
var _215696__$1 = this;return (new cljs.core.async.t215694(self__.f,self__.fn_handler,meta215695__$1));
});
cljs.core.async.__GT_t215694 = (function __GT_t215694(f__$1,fn_handler__$1,meta215695){return (new cljs.core.async.t215694(f__$1,fn_handler__$1,meta215695));
});
}
return (new cljs.core.async.t215694(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__215698 = buff;if(G__215698)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__215698.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__215698.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__215698);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__215698);
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
{var val_215699 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_215699) : fn1.call(null,val_215699));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_215699) : fn1.call(null,val_215699));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___215700 = n;var x_215701 = 0;while(true){
if((x_215701 < n__8553__auto___215700))
{(a[x_215701] = 0);
{
var G__215702 = (x_215701 + 1);
x_215701 = G__215702;
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
var G__215703 = (i + 1);
i = G__215703;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t215707 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t215707 = (function (flag,alt_flag,meta215708){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta215708 = meta215708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t215707.cljs$lang$type = true;
cljs.core.async.t215707.cljs$lang$ctorStr = "cljs.core.async/t215707";
cljs.core.async.t215707.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t215707");
});
cljs.core.async.t215707.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t215707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t215707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t215707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_215709){var self__ = this;
var _215709__$1 = this;return self__.meta215708;
});
cljs.core.async.t215707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_215709,meta215708__$1){var self__ = this;
var _215709__$1 = this;return (new cljs.core.async.t215707(self__.flag,self__.alt_flag,meta215708__$1));
});
cljs.core.async.__GT_t215707 = (function __GT_t215707(flag__$1,alt_flag__$1,meta215708){return (new cljs.core.async.t215707(flag__$1,alt_flag__$1,meta215708));
});
}
return (new cljs.core.async.t215707(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t215713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t215713 = (function (cb,flag,alt_handler,meta215714){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta215714 = meta215714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t215713.cljs$lang$type = true;
cljs.core.async.t215713.cljs$lang$ctorStr = "cljs.core.async/t215713";
cljs.core.async.t215713.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t215713");
});
cljs.core.async.t215713.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t215713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t215713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t215713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_215715){var self__ = this;
var _215715__$1 = this;return self__.meta215714;
});
cljs.core.async.t215713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_215715,meta215714__$1){var self__ = this;
var _215715__$1 = this;return (new cljs.core.async.t215713(self__.cb,self__.flag,self__.alt_handler,meta215714__$1));
});
cljs.core.async.__GT_t215713 = (function __GT_t215713(cb__$1,flag__$1,alt_handler__$1,meta215714){return (new cljs.core.async.t215713(cb__$1,flag__$1,alt_handler__$1,meta215714));
});
}
return (new cljs.core.async.t215713(cb,flag,alt_handler,null));
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
return (function (p1__215716_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__215716_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__215716_SHARP_,port], null)));
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
var G__215717 = (i + 1);
i = G__215717;
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
var alts_BANG___delegate = function (ports,p__215718){var map__215720 = p__215718;var map__215720__$1 = ((cljs.core.seq_QMARK_(map__215720))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__215720):map__215720);var opts = map__215720__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__215718 = null;if (arguments.length > 1) {
  p__215718 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__215718);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__215721){
var ports = cljs.core.first(arglist__215721);
var p__215718 = cljs.core.rest(arglist__215721);
return alts_BANG___delegate(ports,p__215718);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t215729 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t215729 = (function (ch,f,map_LT_,meta215730){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta215730 = meta215730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t215729.cljs$lang$type = true;
cljs.core.async.t215729.cljs$lang$ctorStr = "cljs.core.async/t215729";
cljs.core.async.t215729.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t215729");
});
cljs.core.async.t215729.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t215729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t215729.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t215729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t215732 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t215732 = (function (fn1,_,meta215730,ch,f,map_LT_,meta215733){
this.fn1 = fn1;
this._ = _;
this.meta215730 = meta215730;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta215733 = meta215733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t215732.cljs$lang$type = true;
cljs.core.async.t215732.cljs$lang$ctorStr = "cljs.core.async/t215732";
cljs.core.async.t215732.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t215732");
});
cljs.core.async.t215732.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t215732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t215732.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t215732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__215722_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__215722_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__215722_SHARP_) : self__.f.call(null,p1__215722_SHARP_)))) : f1.call(null,(((p1__215722_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__215722_SHARP_) : self__.f.call(null,p1__215722_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t215732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_215734){var self__ = this;
var _215734__$1 = this;return self__.meta215733;
});
cljs.core.async.t215732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_215734,meta215733__$1){var self__ = this;
var _215734__$1 = this;return (new cljs.core.async.t215732(self__.fn1,self__._,self__.meta215730,self__.ch,self__.f,self__.map_LT_,meta215733__$1));
});
cljs.core.async.__GT_t215732 = (function __GT_t215732(fn1__$1,___$2,meta215730__$1,ch__$2,f__$2,map_LT___$2,meta215733){return (new cljs.core.async.t215732(fn1__$1,___$2,meta215730__$1,ch__$2,f__$2,map_LT___$2,meta215733));
});
}
return (new cljs.core.async.t215732(fn1,___$1,self__.meta215730,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t215729.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t215729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t215729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_215731){var self__ = this;
var _215731__$1 = this;return self__.meta215730;
});
cljs.core.async.t215729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_215731,meta215730__$1){var self__ = this;
var _215731__$1 = this;return (new cljs.core.async.t215729(self__.ch,self__.f,self__.map_LT_,meta215730__$1));
});
cljs.core.async.__GT_t215729 = (function __GT_t215729(ch__$1,f__$1,map_LT___$1,meta215730){return (new cljs.core.async.t215729(ch__$1,f__$1,map_LT___$1,meta215730));
});
}
return (new cljs.core.async.t215729(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t215738 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t215738 = (function (ch,f,map_GT_,meta215739){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta215739 = meta215739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t215738.cljs$lang$type = true;
cljs.core.async.t215738.cljs$lang$ctorStr = "cljs.core.async/t215738";
cljs.core.async.t215738.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t215738");
});
cljs.core.async.t215738.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t215738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t215738.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t215738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t215738.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t215738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t215738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_215740){var self__ = this;
var _215740__$1 = this;return self__.meta215739;
});
cljs.core.async.t215738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_215740,meta215739__$1){var self__ = this;
var _215740__$1 = this;return (new cljs.core.async.t215738(self__.ch,self__.f,self__.map_GT_,meta215739__$1));
});
cljs.core.async.__GT_t215738 = (function __GT_t215738(ch__$1,f__$1,map_GT___$1,meta215739){return (new cljs.core.async.t215738(ch__$1,f__$1,map_GT___$1,meta215739));
});
}
return (new cljs.core.async.t215738(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t215744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t215744 = (function (ch,p,filter_GT_,meta215745){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta215745 = meta215745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t215744.cljs$lang$type = true;
cljs.core.async.t215744.cljs$lang$ctorStr = "cljs.core.async/t215744";
cljs.core.async.t215744.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t215744");
});
cljs.core.async.t215744.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t215744.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t215744.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t215744.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t215744.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t215744.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t215744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_215746){var self__ = this;
var _215746__$1 = this;return self__.meta215745;
});
cljs.core.async.t215744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_215746,meta215745__$1){var self__ = this;
var _215746__$1 = this;return (new cljs.core.async.t215744(self__.ch,self__.p,self__.filter_GT_,meta215745__$1));
});
cljs.core.async.__GT_t215744 = (function __GT_t215744(ch__$1,p__$1,filter_GT___$1,meta215745){return (new cljs.core.async.t215744(ch__$1,p__$1,filter_GT___$1,meta215745));
});
}
return (new cljs.core.async.t215744(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___215829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_215808){var state_val_215809 = (state_215808[1]);if((state_val_215809 === 1))
{var state_215808__$1 = state_215808;var statearr_215810_215830 = state_215808__$1;(statearr_215810_215830[2] = null);
(statearr_215810_215830[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215809 === 2))
{var state_215808__$1 = state_215808;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_215808__$1,4,ch);
} else
{if((state_val_215809 === 3))
{var inst_215806 = (state_215808[2]);var state_215808__$1 = state_215808;return cljs.core.async.impl.ioc_helpers.return_chan(state_215808__$1,inst_215806);
} else
{if((state_val_215809 === 4))
{var inst_215790 = (state_215808[7]);var inst_215790__$1 = (state_215808[2]);var inst_215791 = (inst_215790__$1 == null);var state_215808__$1 = (function (){var statearr_215811 = state_215808;(statearr_215811[7] = inst_215790__$1);
return statearr_215811;
})();if(cljs.core.truth_(inst_215791))
{var statearr_215812_215831 = state_215808__$1;(statearr_215812_215831[1] = 5);
} else
{var statearr_215813_215832 = state_215808__$1;(statearr_215813_215832[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_215809 === 5))
{var inst_215793 = cljs.core.async.close_BANG_(out);var state_215808__$1 = state_215808;var statearr_215814_215833 = state_215808__$1;(statearr_215814_215833[2] = inst_215793);
(statearr_215814_215833[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215809 === 6))
{var inst_215790 = (state_215808[7]);var inst_215795 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_215790) : p.call(null,inst_215790));var state_215808__$1 = state_215808;if(cljs.core.truth_(inst_215795))
{var statearr_215815_215834 = state_215808__$1;(statearr_215815_215834[1] = 8);
} else
{var statearr_215816_215835 = state_215808__$1;(statearr_215816_215835[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_215809 === 7))
{var inst_215804 = (state_215808[2]);var state_215808__$1 = state_215808;var statearr_215817_215836 = state_215808__$1;(statearr_215817_215836[2] = inst_215804);
(statearr_215817_215836[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215809 === 8))
{var inst_215790 = (state_215808[7]);var state_215808__$1 = state_215808;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_215808__$1,11,out,inst_215790);
} else
{if((state_val_215809 === 9))
{var state_215808__$1 = state_215808;var statearr_215818_215837 = state_215808__$1;(statearr_215818_215837[2] = null);
(statearr_215818_215837[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215809 === 10))
{var inst_215801 = (state_215808[2]);var state_215808__$1 = (function (){var statearr_215819 = state_215808;(statearr_215819[8] = inst_215801);
return statearr_215819;
})();var statearr_215820_215838 = state_215808__$1;(statearr_215820_215838[2] = null);
(statearr_215820_215838[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215809 === 11))
{var inst_215798 = (state_215808[2]);var state_215808__$1 = state_215808;var statearr_215821_215839 = state_215808__$1;(statearr_215821_215839[2] = inst_215798);
(statearr_215821_215839[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_215825 = (new Array(9));(statearr_215825[0] = state_machine__10214__auto__);
(statearr_215825[1] = 1);
return statearr_215825;
});
var state_machine__10214__auto____1 = (function (state_215808){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_215808);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e215826){if((e215826 instanceof Object))
{var ex__10217__auto__ = e215826;var statearr_215827_215840 = state_215808;(statearr_215827_215840[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_215808);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e215826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__215841 = state_215808;
state_215808 = G__215841;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_215808){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_215808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_215828 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_215828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___215829);
return statearr_215828;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_215993){var state_val_215994 = (state_215993[1]);if((state_val_215994 === 1))
{var state_215993__$1 = state_215993;var statearr_215995_216032 = state_215993__$1;(statearr_215995_216032[2] = null);
(statearr_215995_216032[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 2))
{var state_215993__$1 = state_215993;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_215993__$1,4,in$);
} else
{if((state_val_215994 === 3))
{var inst_215991 = (state_215993[2]);var state_215993__$1 = state_215993;return cljs.core.async.impl.ioc_helpers.return_chan(state_215993__$1,inst_215991);
} else
{if((state_val_215994 === 4))
{var inst_215939 = (state_215993[7]);var inst_215939__$1 = (state_215993[2]);var inst_215940 = (inst_215939__$1 == null);var state_215993__$1 = (function (){var statearr_215996 = state_215993;(statearr_215996[7] = inst_215939__$1);
return statearr_215996;
})();if(cljs.core.truth_(inst_215940))
{var statearr_215997_216033 = state_215993__$1;(statearr_215997_216033[1] = 5);
} else
{var statearr_215998_216034 = state_215993__$1;(statearr_215998_216034[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 5))
{var inst_215942 = cljs.core.async.close_BANG_(out);var state_215993__$1 = state_215993;var statearr_215999_216035 = state_215993__$1;(statearr_215999_216035[2] = inst_215942);
(statearr_215999_216035[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 6))
{var inst_215939 = (state_215993[7]);var inst_215944 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_215939) : f.call(null,inst_215939));var inst_215949 = cljs.core.seq(inst_215944);var inst_215950 = inst_215949;var inst_215951 = null;var inst_215952 = 0;var inst_215953 = 0;var state_215993__$1 = (function (){var statearr_216000 = state_215993;(statearr_216000[8] = inst_215953);
(statearr_216000[9] = inst_215952);
(statearr_216000[10] = inst_215951);
(statearr_216000[11] = inst_215950);
return statearr_216000;
})();var statearr_216001_216036 = state_215993__$1;(statearr_216001_216036[2] = null);
(statearr_216001_216036[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 7))
{var inst_215989 = (state_215993[2]);var state_215993__$1 = state_215993;var statearr_216002_216037 = state_215993__$1;(statearr_216002_216037[2] = inst_215989);
(statearr_216002_216037[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 8))
{var inst_215953 = (state_215993[8]);var inst_215952 = (state_215993[9]);var inst_215955 = (inst_215953 < inst_215952);var inst_215956 = inst_215955;var state_215993__$1 = state_215993;if(cljs.core.truth_(inst_215956))
{var statearr_216003_216038 = state_215993__$1;(statearr_216003_216038[1] = 10);
} else
{var statearr_216004_216039 = state_215993__$1;(statearr_216004_216039[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 9))
{var inst_215986 = (state_215993[2]);var state_215993__$1 = (function (){var statearr_216005 = state_215993;(statearr_216005[12] = inst_215986);
return statearr_216005;
})();var statearr_216006_216040 = state_215993__$1;(statearr_216006_216040[2] = null);
(statearr_216006_216040[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 10))
{var inst_215953 = (state_215993[8]);var inst_215951 = (state_215993[10]);var inst_215958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_215951,inst_215953);var state_215993__$1 = state_215993;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_215993__$1,13,out,inst_215958);
} else
{if((state_val_215994 === 11))
{var inst_215950 = (state_215993[11]);var inst_215964 = (state_215993[13]);var inst_215964__$1 = cljs.core.seq(inst_215950);var state_215993__$1 = (function (){var statearr_216010 = state_215993;(statearr_216010[13] = inst_215964__$1);
return statearr_216010;
})();if(inst_215964__$1)
{var statearr_216011_216041 = state_215993__$1;(statearr_216011_216041[1] = 14);
} else
{var statearr_216012_216042 = state_215993__$1;(statearr_216012_216042[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 12))
{var inst_215984 = (state_215993[2]);var state_215993__$1 = state_215993;var statearr_216013_216043 = state_215993__$1;(statearr_216013_216043[2] = inst_215984);
(statearr_216013_216043[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 13))
{var inst_215953 = (state_215993[8]);var inst_215952 = (state_215993[9]);var inst_215951 = (state_215993[10]);var inst_215950 = (state_215993[11]);var inst_215960 = (state_215993[2]);var inst_215961 = (inst_215953 + 1);var tmp216007 = inst_215952;var tmp216008 = inst_215951;var tmp216009 = inst_215950;var inst_215950__$1 = tmp216009;var inst_215951__$1 = tmp216008;var inst_215952__$1 = tmp216007;var inst_215953__$1 = inst_215961;var state_215993__$1 = (function (){var statearr_216014 = state_215993;(statearr_216014[8] = inst_215953__$1);
(statearr_216014[9] = inst_215952__$1);
(statearr_216014[10] = inst_215951__$1);
(statearr_216014[11] = inst_215950__$1);
(statearr_216014[14] = inst_215960);
return statearr_216014;
})();var statearr_216015_216044 = state_215993__$1;(statearr_216015_216044[2] = null);
(statearr_216015_216044[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 14))
{var inst_215964 = (state_215993[13]);var inst_215966 = cljs.core.chunked_seq_QMARK_(inst_215964);var state_215993__$1 = state_215993;if(inst_215966)
{var statearr_216016_216045 = state_215993__$1;(statearr_216016_216045[1] = 17);
} else
{var statearr_216017_216046 = state_215993__$1;(statearr_216017_216046[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 15))
{var state_215993__$1 = state_215993;var statearr_216018_216047 = state_215993__$1;(statearr_216018_216047[2] = null);
(statearr_216018_216047[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 16))
{var inst_215982 = (state_215993[2]);var state_215993__$1 = state_215993;var statearr_216019_216048 = state_215993__$1;(statearr_216019_216048[2] = inst_215982);
(statearr_216019_216048[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 17))
{var inst_215964 = (state_215993[13]);var inst_215968 = cljs.core.chunk_first(inst_215964);var inst_215969 = cljs.core.chunk_rest(inst_215964);var inst_215970 = cljs.core.count(inst_215968);var inst_215950 = inst_215969;var inst_215951 = inst_215968;var inst_215952 = inst_215970;var inst_215953 = 0;var state_215993__$1 = (function (){var statearr_216020 = state_215993;(statearr_216020[8] = inst_215953);
(statearr_216020[9] = inst_215952);
(statearr_216020[10] = inst_215951);
(statearr_216020[11] = inst_215950);
return statearr_216020;
})();var statearr_216021_216049 = state_215993__$1;(statearr_216021_216049[2] = null);
(statearr_216021_216049[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 18))
{var inst_215964 = (state_215993[13]);var inst_215973 = cljs.core.first(inst_215964);var state_215993__$1 = state_215993;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_215993__$1,20,out,inst_215973);
} else
{if((state_val_215994 === 19))
{var inst_215979 = (state_215993[2]);var state_215993__$1 = state_215993;var statearr_216022_216050 = state_215993__$1;(statearr_216022_216050[2] = inst_215979);
(statearr_216022_216050[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_215994 === 20))
{var inst_215964 = (state_215993[13]);var inst_215975 = (state_215993[2]);var inst_215976 = cljs.core.next(inst_215964);var inst_215950 = inst_215976;var inst_215951 = null;var inst_215952 = 0;var inst_215953 = 0;var state_215993__$1 = (function (){var statearr_216023 = state_215993;(statearr_216023[8] = inst_215953);
(statearr_216023[9] = inst_215952);
(statearr_216023[10] = inst_215951);
(statearr_216023[11] = inst_215950);
(statearr_216023[15] = inst_215975);
return statearr_216023;
})();var statearr_216024_216051 = state_215993__$1;(statearr_216024_216051[2] = null);
(statearr_216024_216051[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_216028 = (new Array(16));(statearr_216028[0] = state_machine__10214__auto__);
(statearr_216028[1] = 1);
return statearr_216028;
});
var state_machine__10214__auto____1 = (function (state_215993){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_215993);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e216029){if((e216029 instanceof Object))
{var ex__10217__auto__ = e216029;var statearr_216030_216052 = state_215993;(statearr_216030_216052[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_215993);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e216029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__216053 = state_215993;
state_215993 = G__216053;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_215993){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_215993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_216031 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_216031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_216031;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___216134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_216113){var state_val_216114 = (state_216113[1]);if((state_val_216114 === 1))
{var state_216113__$1 = state_216113;var statearr_216115_216135 = state_216113__$1;(statearr_216115_216135[2] = null);
(statearr_216115_216135[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216114 === 2))
{var state_216113__$1 = state_216113;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_216113__$1,4,from);
} else
{if((state_val_216114 === 3))
{var inst_216111 = (state_216113[2]);var state_216113__$1 = state_216113;return cljs.core.async.impl.ioc_helpers.return_chan(state_216113__$1,inst_216111);
} else
{if((state_val_216114 === 4))
{var inst_216096 = (state_216113[7]);var inst_216096__$1 = (state_216113[2]);var inst_216097 = (inst_216096__$1 == null);var state_216113__$1 = (function (){var statearr_216116 = state_216113;(statearr_216116[7] = inst_216096__$1);
return statearr_216116;
})();if(cljs.core.truth_(inst_216097))
{var statearr_216117_216136 = state_216113__$1;(statearr_216117_216136[1] = 5);
} else
{var statearr_216118_216137 = state_216113__$1;(statearr_216118_216137[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216114 === 5))
{var state_216113__$1 = state_216113;if(cljs.core.truth_(close_QMARK_))
{var statearr_216119_216138 = state_216113__$1;(statearr_216119_216138[1] = 8);
} else
{var statearr_216120_216139 = state_216113__$1;(statearr_216120_216139[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216114 === 6))
{var inst_216096 = (state_216113[7]);var state_216113__$1 = state_216113;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_216113__$1,11,to,inst_216096);
} else
{if((state_val_216114 === 7))
{var inst_216109 = (state_216113[2]);var state_216113__$1 = state_216113;var statearr_216121_216140 = state_216113__$1;(statearr_216121_216140[2] = inst_216109);
(statearr_216121_216140[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216114 === 8))
{var inst_216100 = cljs.core.async.close_BANG_(to);var state_216113__$1 = state_216113;var statearr_216122_216141 = state_216113__$1;(statearr_216122_216141[2] = inst_216100);
(statearr_216122_216141[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216114 === 9))
{var state_216113__$1 = state_216113;var statearr_216123_216142 = state_216113__$1;(statearr_216123_216142[2] = null);
(statearr_216123_216142[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216114 === 10))
{var inst_216103 = (state_216113[2]);var state_216113__$1 = state_216113;var statearr_216124_216143 = state_216113__$1;(statearr_216124_216143[2] = inst_216103);
(statearr_216124_216143[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216114 === 11))
{var inst_216106 = (state_216113[2]);var state_216113__$1 = (function (){var statearr_216125 = state_216113;(statearr_216125[8] = inst_216106);
return statearr_216125;
})();var statearr_216126_216144 = state_216113__$1;(statearr_216126_216144[2] = null);
(statearr_216126_216144[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_216130 = (new Array(9));(statearr_216130[0] = state_machine__10214__auto__);
(statearr_216130[1] = 1);
return statearr_216130;
});
var state_machine__10214__auto____1 = (function (state_216113){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_216113);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e216131){if((e216131 instanceof Object))
{var ex__10217__auto__ = e216131;var statearr_216132_216145 = state_216113;(statearr_216132_216145[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_216113);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e216131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__216146 = state_216113;
state_216113 = G__216146;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_216113){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_216113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_216133 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_216133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___216134);
return statearr_216133;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__10283__auto___216233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_216211){var state_val_216212 = (state_216211[1]);if((state_val_216212 === 1))
{var state_216211__$1 = state_216211;var statearr_216213_216234 = state_216211__$1;(statearr_216213_216234[2] = null);
(statearr_216213_216234[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216212 === 2))
{var state_216211__$1 = state_216211;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_216211__$1,4,ch);
} else
{if((state_val_216212 === 3))
{var inst_216209 = (state_216211[2]);var state_216211__$1 = state_216211;return cljs.core.async.impl.ioc_helpers.return_chan(state_216211__$1,inst_216209);
} else
{if((state_val_216212 === 4))
{var inst_216192 = (state_216211[7]);var inst_216192__$1 = (state_216211[2]);var inst_216193 = (inst_216192__$1 == null);var state_216211__$1 = (function (){var statearr_216214 = state_216211;(statearr_216214[7] = inst_216192__$1);
return statearr_216214;
})();if(cljs.core.truth_(inst_216193))
{var statearr_216215_216235 = state_216211__$1;(statearr_216215_216235[1] = 5);
} else
{var statearr_216216_216236 = state_216211__$1;(statearr_216216_216236[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216212 === 5))
{var inst_216195 = cljs.core.async.close_BANG_(tc);var inst_216196 = cljs.core.async.close_BANG_(fc);var state_216211__$1 = (function (){var statearr_216217 = state_216211;(statearr_216217[8] = inst_216195);
return statearr_216217;
})();var statearr_216218_216237 = state_216211__$1;(statearr_216218_216237[2] = inst_216196);
(statearr_216218_216237[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216212 === 6))
{var inst_216192 = (state_216211[7]);var inst_216198 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_216192) : p.call(null,inst_216192));var state_216211__$1 = state_216211;if(cljs.core.truth_(inst_216198))
{var statearr_216219_216238 = state_216211__$1;(statearr_216219_216238[1] = 9);
} else
{var statearr_216220_216239 = state_216211__$1;(statearr_216220_216239[1] = 10);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216212 === 7))
{var inst_216207 = (state_216211[2]);var state_216211__$1 = state_216211;var statearr_216221_216240 = state_216211__$1;(statearr_216221_216240[2] = inst_216207);
(statearr_216221_216240[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216212 === 8))
{var inst_216204 = (state_216211[2]);var state_216211__$1 = (function (){var statearr_216222 = state_216211;(statearr_216222[9] = inst_216204);
return statearr_216222;
})();var statearr_216223_216241 = state_216211__$1;(statearr_216223_216241[2] = null);
(statearr_216223_216241[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216212 === 9))
{var state_216211__$1 = state_216211;var statearr_216224_216242 = state_216211__$1;(statearr_216224_216242[2] = tc);
(statearr_216224_216242[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216212 === 10))
{var state_216211__$1 = state_216211;var statearr_216225_216243 = state_216211__$1;(statearr_216225_216243[2] = fc);
(statearr_216225_216243[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216212 === 11))
{var inst_216192 = (state_216211[7]);var inst_216202 = (state_216211[2]);var state_216211__$1 = state_216211;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_216211__$1,8,inst_216202,inst_216192);
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
var state_machine__10214__auto____0 = (function (){var statearr_216229 = (new Array(10));(statearr_216229[0] = state_machine__10214__auto__);
(statearr_216229[1] = 1);
return statearr_216229;
});
var state_machine__10214__auto____1 = (function (state_216211){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_216211);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e216230){if((e216230 instanceof Object))
{var ex__10217__auto__ = e216230;var statearr_216231_216244 = state_216211;(statearr_216231_216244[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_216211);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e216230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__216245 = state_216211;
state_216211 = G__216245;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_216211){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_216211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_216232 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_216232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___216233);
return statearr_216232;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_216292){var state_val_216293 = (state_216292[1]);if((state_val_216293 === 7))
{var inst_216288 = (state_216292[2]);var state_216292__$1 = state_216292;var statearr_216294_216310 = state_216292__$1;(statearr_216294_216310[2] = inst_216288);
(statearr_216294_216310[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216293 === 6))
{var inst_216278 = (state_216292[7]);var inst_216281 = (state_216292[8]);var inst_216285 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_216278,inst_216281) : f.call(null,inst_216278,inst_216281));var inst_216278__$1 = inst_216285;var state_216292__$1 = (function (){var statearr_216295 = state_216292;(statearr_216295[7] = inst_216278__$1);
return statearr_216295;
})();var statearr_216296_216311 = state_216292__$1;(statearr_216296_216311[2] = null);
(statearr_216296_216311[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216293 === 5))
{var inst_216278 = (state_216292[7]);var state_216292__$1 = state_216292;var statearr_216297_216312 = state_216292__$1;(statearr_216297_216312[2] = inst_216278);
(statearr_216297_216312[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216293 === 4))
{var inst_216281 = (state_216292[8]);var inst_216281__$1 = (state_216292[2]);var inst_216282 = (inst_216281__$1 == null);var state_216292__$1 = (function (){var statearr_216298 = state_216292;(statearr_216298[8] = inst_216281__$1);
return statearr_216298;
})();if(cljs.core.truth_(inst_216282))
{var statearr_216299_216313 = state_216292__$1;(statearr_216299_216313[1] = 5);
} else
{var statearr_216300_216314 = state_216292__$1;(statearr_216300_216314[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216293 === 3))
{var inst_216290 = (state_216292[2]);var state_216292__$1 = state_216292;return cljs.core.async.impl.ioc_helpers.return_chan(state_216292__$1,inst_216290);
} else
{if((state_val_216293 === 2))
{var state_216292__$1 = state_216292;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_216292__$1,4,ch);
} else
{if((state_val_216293 === 1))
{var inst_216278 = init;var state_216292__$1 = (function (){var statearr_216301 = state_216292;(statearr_216301[7] = inst_216278);
return statearr_216301;
})();var statearr_216302_216315 = state_216292__$1;(statearr_216302_216315[2] = null);
(statearr_216302_216315[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_216306 = (new Array(9));(statearr_216306[0] = state_machine__10214__auto__);
(statearr_216306[1] = 1);
return statearr_216306;
});
var state_machine__10214__auto____1 = (function (state_216292){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_216292);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e216307){if((e216307 instanceof Object))
{var ex__10217__auto__ = e216307;var statearr_216308_216316 = state_216292;(statearr_216308_216316[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_216292);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e216307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__216317 = state_216292;
state_216292 = G__216317;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_216292){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_216292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_216309 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_216309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_216309;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_216379){var state_val_216380 = (state_216379[1]);if((state_val_216380 === 1))
{var inst_216359 = cljs.core.seq(coll);var inst_216360 = inst_216359;var state_216379__$1 = (function (){var statearr_216381 = state_216379;(statearr_216381[7] = inst_216360);
return statearr_216381;
})();var statearr_216382_216400 = state_216379__$1;(statearr_216382_216400[2] = null);
(statearr_216382_216400[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216380 === 2))
{var inst_216360 = (state_216379[7]);var state_216379__$1 = state_216379;if(cljs.core.truth_(inst_216360))
{var statearr_216383_216401 = state_216379__$1;(statearr_216383_216401[1] = 4);
} else
{var statearr_216384_216402 = state_216379__$1;(statearr_216384_216402[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216380 === 3))
{var inst_216377 = (state_216379[2]);var state_216379__$1 = state_216379;return cljs.core.async.impl.ioc_helpers.return_chan(state_216379__$1,inst_216377);
} else
{if((state_val_216380 === 4))
{var inst_216360 = (state_216379[7]);var inst_216363 = cljs.core.first(inst_216360);var state_216379__$1 = state_216379;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_216379__$1,7,ch,inst_216363);
} else
{if((state_val_216380 === 5))
{var state_216379__$1 = state_216379;if(cljs.core.truth_(close_QMARK_))
{var statearr_216385_216403 = state_216379__$1;(statearr_216385_216403[1] = 8);
} else
{var statearr_216386_216404 = state_216379__$1;(statearr_216386_216404[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216380 === 6))
{var inst_216375 = (state_216379[2]);var state_216379__$1 = state_216379;var statearr_216387_216405 = state_216379__$1;(statearr_216387_216405[2] = inst_216375);
(statearr_216387_216405[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216380 === 7))
{var inst_216360 = (state_216379[7]);var inst_216365 = (state_216379[2]);var inst_216366 = cljs.core.next(inst_216360);var inst_216360__$1 = inst_216366;var state_216379__$1 = (function (){var statearr_216388 = state_216379;(statearr_216388[8] = inst_216365);
(statearr_216388[7] = inst_216360__$1);
return statearr_216388;
})();var statearr_216389_216406 = state_216379__$1;(statearr_216389_216406[2] = null);
(statearr_216389_216406[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216380 === 8))
{var inst_216370 = cljs.core.async.close_BANG_(ch);var state_216379__$1 = state_216379;var statearr_216390_216407 = state_216379__$1;(statearr_216390_216407[2] = inst_216370);
(statearr_216390_216407[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216380 === 9))
{var state_216379__$1 = state_216379;var statearr_216391_216408 = state_216379__$1;(statearr_216391_216408[2] = null);
(statearr_216391_216408[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216380 === 10))
{var inst_216373 = (state_216379[2]);var state_216379__$1 = state_216379;var statearr_216392_216409 = state_216379__$1;(statearr_216392_216409[2] = inst_216373);
(statearr_216392_216409[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_216396 = (new Array(9));(statearr_216396[0] = state_machine__10214__auto__);
(statearr_216396[1] = 1);
return statearr_216396;
});
var state_machine__10214__auto____1 = (function (state_216379){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_216379);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e216397){if((e216397 instanceof Object))
{var ex__10217__auto__ = e216397;var statearr_216398_216410 = state_216379;(statearr_216398_216410[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_216379);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e216397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__216411 = state_216379;
state_216379 = G__216411;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_216379){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_216379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_216399 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_216399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_216399;
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
cljs.core.async.Mux = (function (){var obj216413 = {};return obj216413;
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
cljs.core.async.Mult = (function (){var obj216415 = {};return obj216415;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t216630 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t216630 = (function (cs,ch,mult,meta216631){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta216631 = meta216631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t216630.cljs$lang$type = true;
cljs.core.async.t216630.cljs$lang$ctorStr = "cljs.core.async/t216630";
cljs.core.async.t216630.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t216630");
});})(cs))
;
cljs.core.async.t216630.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t216630.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t216630.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t216630.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t216630.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t216630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t216630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_216632){var self__ = this;
var _216632__$1 = this;return self__.meta216631;
});})(cs))
;
cljs.core.async.t216630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_216632,meta216631__$1){var self__ = this;
var _216632__$1 = this;return (new cljs.core.async.t216630(self__.cs,self__.ch,self__.mult,meta216631__$1));
});})(cs))
;
cljs.core.async.__GT_t216630 = ((function (cs){
return (function __GT_t216630(cs__$1,ch__$1,mult__$1,meta216631){return (new cljs.core.async.t216630(cs__$1,ch__$1,mult__$1,meta216631));
});})(cs))
;
}
return (new cljs.core.async.t216630(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___216844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_216762){var state_val_216763 = (state_216762[1]);if((state_val_216763 === 32))
{var inst_216635 = (state_216762[7]);var inst_216711 = (state_216762[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_216762,31,Object,null,30);var inst_216718 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_216711,inst_216635,done);var state_216762__$1 = state_216762;var statearr_216764_216845 = state_216762__$1;(statearr_216764_216845[2] = inst_216718);
cljs.core.async.impl.ioc_helpers.process_exception(state_216762__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 1))
{var state_216762__$1 = state_216762;var statearr_216765_216846 = state_216762__$1;(statearr_216765_216846[2] = null);
(statearr_216765_216846[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 33))
{var inst_216724 = (state_216762[9]);var inst_216726 = cljs.core.chunked_seq_QMARK_(inst_216724);var state_216762__$1 = state_216762;if(inst_216726)
{var statearr_216766_216847 = state_216762__$1;(statearr_216766_216847[1] = 36);
} else
{var statearr_216767_216848 = state_216762__$1;(statearr_216767_216848[1] = 37);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 2))
{var state_216762__$1 = state_216762;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_216762__$1,4,ch);
} else
{if((state_val_216763 === 34))
{var state_216762__$1 = state_216762;var statearr_216768_216849 = state_216762__$1;(statearr_216768_216849[2] = null);
(statearr_216768_216849[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 3))
{var inst_216760 = (state_216762[2]);var state_216762__$1 = state_216762;return cljs.core.async.impl.ioc_helpers.return_chan(state_216762__$1,inst_216760);
} else
{if((state_val_216763 === 35))
{var inst_216749 = (state_216762[2]);var state_216762__$1 = state_216762;var statearr_216769_216850 = state_216762__$1;(statearr_216769_216850[2] = inst_216749);
(statearr_216769_216850[1] = 29);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 4))
{var inst_216635 = (state_216762[7]);var inst_216635__$1 = (state_216762[2]);var inst_216636 = (inst_216635__$1 == null);var state_216762__$1 = (function (){var statearr_216770 = state_216762;(statearr_216770[7] = inst_216635__$1);
return statearr_216770;
})();if(cljs.core.truth_(inst_216636))
{var statearr_216771_216851 = state_216762__$1;(statearr_216771_216851[1] = 5);
} else
{var statearr_216772_216852 = state_216762__$1;(statearr_216772_216852[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 36))
{var inst_216724 = (state_216762[9]);var inst_216728 = cljs.core.chunk_first(inst_216724);var inst_216729 = cljs.core.chunk_rest(inst_216724);var inst_216730 = cljs.core.count(inst_216728);var inst_216703 = inst_216729;var inst_216704 = inst_216728;var inst_216705 = inst_216730;var inst_216706 = 0;var state_216762__$1 = (function (){var statearr_216773 = state_216762;(statearr_216773[10] = inst_216703);
(statearr_216773[11] = inst_216704);
(statearr_216773[12] = inst_216705);
(statearr_216773[13] = inst_216706);
return statearr_216773;
})();var statearr_216774_216853 = state_216762__$1;(statearr_216774_216853[2] = null);
(statearr_216774_216853[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 5))
{var inst_216642 = cljs.core.deref(cs);var inst_216643 = cljs.core.seq(inst_216642);var inst_216644 = inst_216643;var inst_216645 = null;var inst_216646 = 0;var inst_216647 = 0;var state_216762__$1 = (function (){var statearr_216775 = state_216762;(statearr_216775[14] = inst_216647);
(statearr_216775[15] = inst_216646);
(statearr_216775[16] = inst_216645);
(statearr_216775[17] = inst_216644);
return statearr_216775;
})();var statearr_216776_216854 = state_216762__$1;(statearr_216776_216854[2] = null);
(statearr_216776_216854[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 37))
{var inst_216724 = (state_216762[9]);var inst_216733 = cljs.core.first(inst_216724);var state_216762__$1 = (function (){var statearr_216777 = state_216762;(statearr_216777[18] = inst_216733);
return statearr_216777;
})();var statearr_216778_216855 = state_216762__$1;(statearr_216778_216855[2] = null);
(statearr_216778_216855[1] = 41);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 6))
{var inst_216694 = cljs.core.deref(cs);var inst_216695 = cljs.core.keys(inst_216694);var inst_216696 = cljs.core.count(inst_216695);var inst_216697 = cljs.core.reset_BANG_(dctr,inst_216696);var inst_216702 = cljs.core.seq(inst_216695);var inst_216703 = inst_216702;var inst_216704 = null;var inst_216705 = 0;var inst_216706 = 0;var state_216762__$1 = (function (){var statearr_216779 = state_216762;(statearr_216779[10] = inst_216703);
(statearr_216779[11] = inst_216704);
(statearr_216779[12] = inst_216705);
(statearr_216779[13] = inst_216706);
(statearr_216779[19] = inst_216697);
return statearr_216779;
})();var statearr_216780_216856 = state_216762__$1;(statearr_216780_216856[2] = null);
(statearr_216780_216856[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 38))
{var inst_216746 = (state_216762[2]);var state_216762__$1 = state_216762;var statearr_216781_216857 = state_216762__$1;(statearr_216781_216857[2] = inst_216746);
(statearr_216781_216857[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 7))
{var inst_216758 = (state_216762[2]);var state_216762__$1 = state_216762;var statearr_216782_216858 = state_216762__$1;(statearr_216782_216858[2] = inst_216758);
(statearr_216782_216858[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 39))
{var inst_216724 = (state_216762[9]);var inst_216742 = (state_216762[2]);var inst_216743 = cljs.core.next(inst_216724);var inst_216703 = inst_216743;var inst_216704 = null;var inst_216705 = 0;var inst_216706 = 0;var state_216762__$1 = (function (){var statearr_216783 = state_216762;(statearr_216783[10] = inst_216703);
(statearr_216783[11] = inst_216704);
(statearr_216783[12] = inst_216705);
(statearr_216783[13] = inst_216706);
(statearr_216783[20] = inst_216742);
return statearr_216783;
})();var statearr_216784_216859 = state_216762__$1;(statearr_216784_216859[2] = null);
(statearr_216784_216859[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 8))
{var inst_216647 = (state_216762[14]);var inst_216646 = (state_216762[15]);var inst_216649 = (inst_216647 < inst_216646);var inst_216650 = inst_216649;var state_216762__$1 = state_216762;if(cljs.core.truth_(inst_216650))
{var statearr_216785_216860 = state_216762__$1;(statearr_216785_216860[1] = 10);
} else
{var statearr_216786_216861 = state_216762__$1;(statearr_216786_216861[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 40))
{var inst_216733 = (state_216762[18]);var inst_216734 = (state_216762[2]);var inst_216735 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_216736 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_216733);var state_216762__$1 = (function (){var statearr_216787 = state_216762;(statearr_216787[21] = inst_216735);
(statearr_216787[22] = inst_216734);
return statearr_216787;
})();var statearr_216788_216862 = state_216762__$1;(statearr_216788_216862[2] = inst_216736);
cljs.core.async.impl.ioc_helpers.process_exception(state_216762__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 9))
{var inst_216692 = (state_216762[2]);var state_216762__$1 = state_216762;var statearr_216789_216863 = state_216762__$1;(statearr_216789_216863[2] = inst_216692);
(statearr_216789_216863[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 41))
{var inst_216635 = (state_216762[7]);var inst_216733 = (state_216762[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_216762,40,Object,null,39);var inst_216740 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_216733,inst_216635,done);var state_216762__$1 = state_216762;var statearr_216790_216864 = state_216762__$1;(statearr_216790_216864[2] = inst_216740);
cljs.core.async.impl.ioc_helpers.process_exception(state_216762__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 10))
{var inst_216647 = (state_216762[14]);var inst_216645 = (state_216762[16]);var inst_216653 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_216645,inst_216647);var inst_216654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_216653,0,null);var inst_216655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_216653,1,null);var state_216762__$1 = (function (){var statearr_216791 = state_216762;(statearr_216791[23] = inst_216654);
return statearr_216791;
})();if(cljs.core.truth_(inst_216655))
{var statearr_216792_216865 = state_216762__$1;(statearr_216792_216865[1] = 13);
} else
{var statearr_216793_216866 = state_216762__$1;(statearr_216793_216866[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 42))
{var inst_216755 = (state_216762[2]);var state_216762__$1 = (function (){var statearr_216794 = state_216762;(statearr_216794[24] = inst_216755);
return statearr_216794;
})();var statearr_216795_216867 = state_216762__$1;(statearr_216795_216867[2] = null);
(statearr_216795_216867[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 11))
{var inst_216644 = (state_216762[17]);var inst_216664 = (state_216762[25]);var inst_216664__$1 = cljs.core.seq(inst_216644);var state_216762__$1 = (function (){var statearr_216796 = state_216762;(statearr_216796[25] = inst_216664__$1);
return statearr_216796;
})();if(inst_216664__$1)
{var statearr_216797_216868 = state_216762__$1;(statearr_216797_216868[1] = 16);
} else
{var statearr_216798_216869 = state_216762__$1;(statearr_216798_216869[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 12))
{var inst_216690 = (state_216762[2]);var state_216762__$1 = state_216762;var statearr_216799_216870 = state_216762__$1;(statearr_216799_216870[2] = inst_216690);
(statearr_216799_216870[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 13))
{var inst_216654 = (state_216762[23]);var inst_216657 = cljs.core.async.close_BANG_(inst_216654);var state_216762__$1 = state_216762;var statearr_216803_216871 = state_216762__$1;(statearr_216803_216871[2] = inst_216657);
(statearr_216803_216871[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 14))
{var state_216762__$1 = state_216762;var statearr_216804_216872 = state_216762__$1;(statearr_216804_216872[2] = null);
(statearr_216804_216872[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 15))
{var inst_216647 = (state_216762[14]);var inst_216646 = (state_216762[15]);var inst_216645 = (state_216762[16]);var inst_216644 = (state_216762[17]);var inst_216660 = (state_216762[2]);var inst_216661 = (inst_216647 + 1);var tmp216800 = inst_216646;var tmp216801 = inst_216645;var tmp216802 = inst_216644;var inst_216644__$1 = tmp216802;var inst_216645__$1 = tmp216801;var inst_216646__$1 = tmp216800;var inst_216647__$1 = inst_216661;var state_216762__$1 = (function (){var statearr_216805 = state_216762;(statearr_216805[14] = inst_216647__$1);
(statearr_216805[15] = inst_216646__$1);
(statearr_216805[16] = inst_216645__$1);
(statearr_216805[17] = inst_216644__$1);
(statearr_216805[26] = inst_216660);
return statearr_216805;
})();var statearr_216806_216873 = state_216762__$1;(statearr_216806_216873[2] = null);
(statearr_216806_216873[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 16))
{var inst_216664 = (state_216762[25]);var inst_216666 = cljs.core.chunked_seq_QMARK_(inst_216664);var state_216762__$1 = state_216762;if(inst_216666)
{var statearr_216807_216874 = state_216762__$1;(statearr_216807_216874[1] = 19);
} else
{var statearr_216808_216875 = state_216762__$1;(statearr_216808_216875[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 17))
{var state_216762__$1 = state_216762;var statearr_216809_216876 = state_216762__$1;(statearr_216809_216876[2] = null);
(statearr_216809_216876[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 18))
{var inst_216688 = (state_216762[2]);var state_216762__$1 = state_216762;var statearr_216810_216877 = state_216762__$1;(statearr_216810_216877[2] = inst_216688);
(statearr_216810_216877[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 19))
{var inst_216664 = (state_216762[25]);var inst_216668 = cljs.core.chunk_first(inst_216664);var inst_216669 = cljs.core.chunk_rest(inst_216664);var inst_216670 = cljs.core.count(inst_216668);var inst_216644 = inst_216669;var inst_216645 = inst_216668;var inst_216646 = inst_216670;var inst_216647 = 0;var state_216762__$1 = (function (){var statearr_216811 = state_216762;(statearr_216811[14] = inst_216647);
(statearr_216811[15] = inst_216646);
(statearr_216811[16] = inst_216645);
(statearr_216811[17] = inst_216644);
return statearr_216811;
})();var statearr_216812_216878 = state_216762__$1;(statearr_216812_216878[2] = null);
(statearr_216812_216878[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 20))
{var inst_216664 = (state_216762[25]);var inst_216674 = cljs.core.first(inst_216664);var inst_216675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_216674,0,null);var inst_216676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_216674,1,null);var state_216762__$1 = (function (){var statearr_216813 = state_216762;(statearr_216813[27] = inst_216675);
return statearr_216813;
})();if(cljs.core.truth_(inst_216676))
{var statearr_216814_216879 = state_216762__$1;(statearr_216814_216879[1] = 22);
} else
{var statearr_216815_216880 = state_216762__$1;(statearr_216815_216880[1] = 23);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 21))
{var inst_216685 = (state_216762[2]);var state_216762__$1 = state_216762;var statearr_216816_216881 = state_216762__$1;(statearr_216816_216881[2] = inst_216685);
(statearr_216816_216881[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 22))
{var inst_216675 = (state_216762[27]);var inst_216678 = cljs.core.async.close_BANG_(inst_216675);var state_216762__$1 = state_216762;var statearr_216817_216882 = state_216762__$1;(statearr_216817_216882[2] = inst_216678);
(statearr_216817_216882[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 23))
{var state_216762__$1 = state_216762;var statearr_216818_216883 = state_216762__$1;(statearr_216818_216883[2] = null);
(statearr_216818_216883[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 24))
{var inst_216664 = (state_216762[25]);var inst_216681 = (state_216762[2]);var inst_216682 = cljs.core.next(inst_216664);var inst_216644 = inst_216682;var inst_216645 = null;var inst_216646 = 0;var inst_216647 = 0;var state_216762__$1 = (function (){var statearr_216819 = state_216762;(statearr_216819[14] = inst_216647);
(statearr_216819[15] = inst_216646);
(statearr_216819[16] = inst_216645);
(statearr_216819[17] = inst_216644);
(statearr_216819[28] = inst_216681);
return statearr_216819;
})();var statearr_216820_216884 = state_216762__$1;(statearr_216820_216884[2] = null);
(statearr_216820_216884[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 25))
{var inst_216705 = (state_216762[12]);var inst_216706 = (state_216762[13]);var inst_216708 = (inst_216706 < inst_216705);var inst_216709 = inst_216708;var state_216762__$1 = state_216762;if(cljs.core.truth_(inst_216709))
{var statearr_216821_216885 = state_216762__$1;(statearr_216821_216885[1] = 27);
} else
{var statearr_216822_216886 = state_216762__$1;(statearr_216822_216886[1] = 28);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 26))
{var inst_216753 = (state_216762[2]);var state_216762__$1 = (function (){var statearr_216823 = state_216762;(statearr_216823[29] = inst_216753);
return statearr_216823;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_216762__$1,42,dchan);
} else
{if((state_val_216763 === 27))
{var inst_216704 = (state_216762[11]);var inst_216706 = (state_216762[13]);var inst_216711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_216704,inst_216706);var state_216762__$1 = (function (){var statearr_216824 = state_216762;(statearr_216824[8] = inst_216711);
return statearr_216824;
})();var statearr_216825_216887 = state_216762__$1;(statearr_216825_216887[2] = null);
(statearr_216825_216887[1] = 32);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 28))
{var inst_216724 = (state_216762[9]);var inst_216703 = (state_216762[10]);var inst_216724__$1 = cljs.core.seq(inst_216703);var state_216762__$1 = (function (){var statearr_216829 = state_216762;(statearr_216829[9] = inst_216724__$1);
return statearr_216829;
})();if(inst_216724__$1)
{var statearr_216830_216888 = state_216762__$1;(statearr_216830_216888[1] = 33);
} else
{var statearr_216831_216889 = state_216762__$1;(statearr_216831_216889[1] = 34);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 29))
{var inst_216751 = (state_216762[2]);var state_216762__$1 = state_216762;var statearr_216832_216890 = state_216762__$1;(statearr_216832_216890[2] = inst_216751);
(statearr_216832_216890[1] = 26);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 30))
{var inst_216703 = (state_216762[10]);var inst_216704 = (state_216762[11]);var inst_216705 = (state_216762[12]);var inst_216706 = (state_216762[13]);var inst_216720 = (state_216762[2]);var inst_216721 = (inst_216706 + 1);var tmp216826 = inst_216703;var tmp216827 = inst_216704;var tmp216828 = inst_216705;var inst_216703__$1 = tmp216826;var inst_216704__$1 = tmp216827;var inst_216705__$1 = tmp216828;var inst_216706__$1 = inst_216721;var state_216762__$1 = (function (){var statearr_216833 = state_216762;(statearr_216833[30] = inst_216720);
(statearr_216833[10] = inst_216703__$1);
(statearr_216833[11] = inst_216704__$1);
(statearr_216833[12] = inst_216705__$1);
(statearr_216833[13] = inst_216706__$1);
return statearr_216833;
})();var statearr_216834_216891 = state_216762__$1;(statearr_216834_216891[2] = null);
(statearr_216834_216891[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_216763 === 31))
{var inst_216711 = (state_216762[8]);var inst_216712 = (state_216762[2]);var inst_216713 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_216714 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_216711);var state_216762__$1 = (function (){var statearr_216835 = state_216762;(statearr_216835[31] = inst_216713);
(statearr_216835[32] = inst_216712);
return statearr_216835;
})();var statearr_216836_216892 = state_216762__$1;(statearr_216836_216892[2] = inst_216714);
cljs.core.async.impl.ioc_helpers.process_exception(state_216762__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_216840 = (new Array(33));(statearr_216840[0] = state_machine__10214__auto__);
(statearr_216840[1] = 1);
return statearr_216840;
});
var state_machine__10214__auto____1 = (function (state_216762){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_216762);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e216841){if((e216841 instanceof Object))
{var ex__10217__auto__ = e216841;var statearr_216842_216893 = state_216762;(statearr_216842_216893[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_216762);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e216841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__216894 = state_216762;
state_216762 = G__216894;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_216762){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_216762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_216843 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_216843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___216844);
return statearr_216843;
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
cljs.core.async.Mix = (function (){var obj216896 = {};return obj216896;
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
;var m = (function (){if(typeof cljs.core.async.t217006 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t217006 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta217007){
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
this.meta217007 = meta217007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t217006.cljs$lang$type = true;
cljs.core.async.t217006.cljs$lang$ctorStr = "cljs.core.async/t217006";
cljs.core.async.t217006.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t217006");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t217006.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t217006.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t217006.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t217006.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t217006.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t217006.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t217006.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t217006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t217006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_217008){var self__ = this;
var _217008__$1 = this;return self__.meta217007;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t217006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_217008,meta217007__$1){var self__ = this;
var _217008__$1 = this;return (new cljs.core.async.t217006(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta217007__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t217006 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t217006(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta217007){return (new cljs.core.async.t217006(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta217007));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t217006(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___217115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_217073){var state_val_217074 = (state_217073[1]);if((state_val_217074 === 1))
{var inst_217012 = (state_217073[7]);var inst_217012__$1 = calc_state();var inst_217013 = cljs.core.seq_QMARK_(inst_217012__$1);var state_217073__$1 = (function (){var statearr_217075 = state_217073;(statearr_217075[7] = inst_217012__$1);
return statearr_217075;
})();if(inst_217013)
{var statearr_217076_217116 = state_217073__$1;(statearr_217076_217116[1] = 2);
} else
{var statearr_217077_217117 = state_217073__$1;(statearr_217077_217117[1] = 3);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 2))
{var inst_217012 = (state_217073[7]);var inst_217015 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_217012);var state_217073__$1 = state_217073;var statearr_217078_217118 = state_217073__$1;(statearr_217078_217118[2] = inst_217015);
(statearr_217078_217118[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 3))
{var inst_217012 = (state_217073[7]);var state_217073__$1 = state_217073;var statearr_217079_217119 = state_217073__$1;(statearr_217079_217119[2] = inst_217012);
(statearr_217079_217119[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 4))
{var inst_217012 = (state_217073[7]);var inst_217018 = (state_217073[2]);var inst_217019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_217018,cljs.core.constant$keyword$309);var inst_217020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_217018,cljs.core.constant$keyword$308);var inst_217021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_217018,cljs.core.constant$keyword$307);var inst_217022 = inst_217012;var state_217073__$1 = (function (){var statearr_217080 = state_217073;(statearr_217080[8] = inst_217019);
(statearr_217080[9] = inst_217020);
(statearr_217080[10] = inst_217022);
(statearr_217080[11] = inst_217021);
return statearr_217080;
})();var statearr_217081_217120 = state_217073__$1;(statearr_217081_217120[2] = null);
(statearr_217081_217120[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 5))
{var inst_217022 = (state_217073[10]);var inst_217025 = cljs.core.seq_QMARK_(inst_217022);var state_217073__$1 = state_217073;if(inst_217025)
{var statearr_217082_217121 = state_217073__$1;(statearr_217082_217121[1] = 7);
} else
{var statearr_217083_217122 = state_217073__$1;(statearr_217083_217122[1] = 8);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 6))
{var inst_217071 = (state_217073[2]);var state_217073__$1 = state_217073;return cljs.core.async.impl.ioc_helpers.return_chan(state_217073__$1,inst_217071);
} else
{if((state_val_217074 === 7))
{var inst_217022 = (state_217073[10]);var inst_217027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_217022);var state_217073__$1 = state_217073;var statearr_217084_217123 = state_217073__$1;(statearr_217084_217123[2] = inst_217027);
(statearr_217084_217123[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 8))
{var inst_217022 = (state_217073[10]);var state_217073__$1 = state_217073;var statearr_217085_217124 = state_217073__$1;(statearr_217085_217124[2] = inst_217022);
(statearr_217085_217124[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 9))
{var inst_217030 = (state_217073[12]);var inst_217030__$1 = (state_217073[2]);var inst_217031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_217030__$1,cljs.core.constant$keyword$309);var inst_217032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_217030__$1,cljs.core.constant$keyword$308);var inst_217033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_217030__$1,cljs.core.constant$keyword$307);var state_217073__$1 = (function (){var statearr_217086 = state_217073;(statearr_217086[12] = inst_217030__$1);
(statearr_217086[13] = inst_217033);
(statearr_217086[14] = inst_217032);
return statearr_217086;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_217073__$1,10,inst_217031);
} else
{if((state_val_217074 === 10))
{var inst_217038 = (state_217073[15]);var inst_217037 = (state_217073[16]);var inst_217036 = (state_217073[2]);var inst_217037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_217036,0,null);var inst_217038__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_217036,1,null);var inst_217039 = (inst_217037__$1 == null);var inst_217040 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_217038__$1,change);var inst_217041 = (inst_217039) || (inst_217040);var state_217073__$1 = (function (){var statearr_217087 = state_217073;(statearr_217087[15] = inst_217038__$1);
(statearr_217087[16] = inst_217037__$1);
return statearr_217087;
})();if(cljs.core.truth_(inst_217041))
{var statearr_217088_217125 = state_217073__$1;(statearr_217088_217125[1] = 11);
} else
{var statearr_217089_217126 = state_217073__$1;(statearr_217089_217126[1] = 12);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 11))
{var inst_217037 = (state_217073[16]);var inst_217043 = (inst_217037 == null);var state_217073__$1 = state_217073;if(cljs.core.truth_(inst_217043))
{var statearr_217090_217127 = state_217073__$1;(statearr_217090_217127[1] = 14);
} else
{var statearr_217091_217128 = state_217073__$1;(statearr_217091_217128[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 12))
{var inst_217052 = (state_217073[17]);var inst_217038 = (state_217073[15]);var inst_217033 = (state_217073[13]);var inst_217052__$1 = (inst_217033.cljs$core$IFn$_invoke$arity$1 ? inst_217033.cljs$core$IFn$_invoke$arity$1(inst_217038) : inst_217033.call(null,inst_217038));var state_217073__$1 = (function (){var statearr_217092 = state_217073;(statearr_217092[17] = inst_217052__$1);
return statearr_217092;
})();if(cljs.core.truth_(inst_217052__$1))
{var statearr_217093_217129 = state_217073__$1;(statearr_217093_217129[1] = 17);
} else
{var statearr_217094_217130 = state_217073__$1;(statearr_217094_217130[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 13))
{var inst_217069 = (state_217073[2]);var state_217073__$1 = state_217073;var statearr_217095_217131 = state_217073__$1;(statearr_217095_217131[2] = inst_217069);
(statearr_217095_217131[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 14))
{var inst_217038 = (state_217073[15]);var inst_217045 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_217038);var state_217073__$1 = state_217073;var statearr_217096_217132 = state_217073__$1;(statearr_217096_217132[2] = inst_217045);
(statearr_217096_217132[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 15))
{var state_217073__$1 = state_217073;var statearr_217097_217133 = state_217073__$1;(statearr_217097_217133[2] = null);
(statearr_217097_217133[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 16))
{var inst_217048 = (state_217073[2]);var inst_217049 = calc_state();var inst_217022 = inst_217049;var state_217073__$1 = (function (){var statearr_217098 = state_217073;(statearr_217098[18] = inst_217048);
(statearr_217098[10] = inst_217022);
return statearr_217098;
})();var statearr_217099_217134 = state_217073__$1;(statearr_217099_217134[2] = null);
(statearr_217099_217134[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 17))
{var inst_217052 = (state_217073[17]);var state_217073__$1 = state_217073;var statearr_217100_217135 = state_217073__$1;(statearr_217100_217135[2] = inst_217052);
(statearr_217100_217135[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 18))
{var inst_217038 = (state_217073[15]);var inst_217033 = (state_217073[13]);var inst_217032 = (state_217073[14]);var inst_217055 = cljs.core.empty_QMARK_(inst_217033);var inst_217056 = (inst_217032.cljs$core$IFn$_invoke$arity$1 ? inst_217032.cljs$core$IFn$_invoke$arity$1(inst_217038) : inst_217032.call(null,inst_217038));var inst_217057 = cljs.core.not(inst_217056);var inst_217058 = (inst_217055) && (inst_217057);var state_217073__$1 = state_217073;var statearr_217101_217136 = state_217073__$1;(statearr_217101_217136[2] = inst_217058);
(statearr_217101_217136[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 19))
{var inst_217060 = (state_217073[2]);var state_217073__$1 = state_217073;if(cljs.core.truth_(inst_217060))
{var statearr_217102_217137 = state_217073__$1;(statearr_217102_217137[1] = 20);
} else
{var statearr_217103_217138 = state_217073__$1;(statearr_217103_217138[1] = 21);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 20))
{var inst_217037 = (state_217073[16]);var state_217073__$1 = state_217073;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_217073__$1,23,out,inst_217037);
} else
{if((state_val_217074 === 21))
{var state_217073__$1 = state_217073;var statearr_217104_217139 = state_217073__$1;(statearr_217104_217139[2] = null);
(statearr_217104_217139[1] = 22);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 22))
{var inst_217030 = (state_217073[12]);var inst_217066 = (state_217073[2]);var inst_217022 = inst_217030;var state_217073__$1 = (function (){var statearr_217105 = state_217073;(statearr_217105[19] = inst_217066);
(statearr_217105[10] = inst_217022);
return statearr_217105;
})();var statearr_217106_217140 = state_217073__$1;(statearr_217106_217140[2] = null);
(statearr_217106_217140[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217074 === 23))
{var inst_217063 = (state_217073[2]);var state_217073__$1 = state_217073;var statearr_217107_217141 = state_217073__$1;(statearr_217107_217141[2] = inst_217063);
(statearr_217107_217141[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_217111 = (new Array(20));(statearr_217111[0] = state_machine__10214__auto__);
(statearr_217111[1] = 1);
return statearr_217111;
});
var state_machine__10214__auto____1 = (function (state_217073){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_217073);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e217112){if((e217112 instanceof Object))
{var ex__10217__auto__ = e217112;var statearr_217113_217142 = state_217073;(statearr_217113_217142[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_217073);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e217112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__217143 = state_217073;
state_217073 = G__217143;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_217073){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_217073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_217114 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_217114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___217115);
return statearr_217114;
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
cljs.core.async.Pub = (function (){var obj217145 = {};return obj217145;
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
return (function (p1__217146_SHARP_){if(cljs.core.truth_((p1__217146_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__217146_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__217146_SHARP_.call(null,topic))))
{return p1__217146_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__217146_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t217271 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t217271 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta217272){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta217272 = meta217272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t217271.cljs$lang$type = true;
cljs.core.async.t217271.cljs$lang$ctorStr = "cljs.core.async/t217271";
cljs.core.async.t217271.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t217271");
});})(mults,ensure_mult))
;
cljs.core.async.t217271.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t217271.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t217271.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t217271.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t217271.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t217271.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t217271.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t217271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_217273){var self__ = this;
var _217273__$1 = this;return self__.meta217272;
});})(mults,ensure_mult))
;
cljs.core.async.t217271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_217273,meta217272__$1){var self__ = this;
var _217273__$1 = this;return (new cljs.core.async.t217271(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta217272__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t217271 = ((function (mults,ensure_mult){
return (function __GT_t217271(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta217272){return (new cljs.core.async.t217271(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta217272));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t217271(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___217395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_217347){var state_val_217348 = (state_217347[1]);if((state_val_217348 === 1))
{var state_217347__$1 = state_217347;var statearr_217349_217396 = state_217347__$1;(statearr_217349_217396[2] = null);
(statearr_217349_217396[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 2))
{var state_217347__$1 = state_217347;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_217347__$1,4,ch);
} else
{if((state_val_217348 === 3))
{var inst_217345 = (state_217347[2]);var state_217347__$1 = state_217347;return cljs.core.async.impl.ioc_helpers.return_chan(state_217347__$1,inst_217345);
} else
{if((state_val_217348 === 4))
{var inst_217276 = (state_217347[7]);var inst_217276__$1 = (state_217347[2]);var inst_217277 = (inst_217276__$1 == null);var state_217347__$1 = (function (){var statearr_217350 = state_217347;(statearr_217350[7] = inst_217276__$1);
return statearr_217350;
})();if(cljs.core.truth_(inst_217277))
{var statearr_217351_217397 = state_217347__$1;(statearr_217351_217397[1] = 5);
} else
{var statearr_217352_217398 = state_217347__$1;(statearr_217352_217398[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 5))
{var inst_217283 = cljs.core.deref(mults);var inst_217284 = cljs.core.vals(inst_217283);var inst_217285 = cljs.core.seq(inst_217284);var inst_217286 = inst_217285;var inst_217287 = null;var inst_217288 = 0;var inst_217289 = 0;var state_217347__$1 = (function (){var statearr_217353 = state_217347;(statearr_217353[8] = inst_217289);
(statearr_217353[9] = inst_217286);
(statearr_217353[10] = inst_217288);
(statearr_217353[11] = inst_217287);
return statearr_217353;
})();var statearr_217354_217399 = state_217347__$1;(statearr_217354_217399[2] = null);
(statearr_217354_217399[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 6))
{var inst_217324 = (state_217347[12]);var inst_217326 = (state_217347[13]);var inst_217276 = (state_217347[7]);var inst_217324__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_217276) : topic_fn.call(null,inst_217276));var inst_217325 = cljs.core.deref(mults);var inst_217326__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_217325,inst_217324__$1);var state_217347__$1 = (function (){var statearr_217355 = state_217347;(statearr_217355[12] = inst_217324__$1);
(statearr_217355[13] = inst_217326__$1);
return statearr_217355;
})();if(cljs.core.truth_(inst_217326__$1))
{var statearr_217356_217400 = state_217347__$1;(statearr_217356_217400[1] = 19);
} else
{var statearr_217357_217401 = state_217347__$1;(statearr_217357_217401[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 7))
{var inst_217343 = (state_217347[2]);var state_217347__$1 = state_217347;var statearr_217358_217402 = state_217347__$1;(statearr_217358_217402[2] = inst_217343);
(statearr_217358_217402[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 8))
{var inst_217289 = (state_217347[8]);var inst_217288 = (state_217347[10]);var inst_217291 = (inst_217289 < inst_217288);var inst_217292 = inst_217291;var state_217347__$1 = state_217347;if(cljs.core.truth_(inst_217292))
{var statearr_217362_217403 = state_217347__$1;(statearr_217362_217403[1] = 10);
} else
{var statearr_217363_217404 = state_217347__$1;(statearr_217363_217404[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 9))
{var inst_217322 = (state_217347[2]);var state_217347__$1 = state_217347;var statearr_217364_217405 = state_217347__$1;(statearr_217364_217405[2] = inst_217322);
(statearr_217364_217405[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 10))
{var inst_217289 = (state_217347[8]);var inst_217286 = (state_217347[9]);var inst_217288 = (state_217347[10]);var inst_217287 = (state_217347[11]);var inst_217294 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_217287,inst_217289);var inst_217295 = cljs.core.async.muxch_STAR_(inst_217294);var inst_217296 = cljs.core.async.close_BANG_(inst_217295);var inst_217297 = (inst_217289 + 1);var tmp217359 = inst_217286;var tmp217360 = inst_217288;var tmp217361 = inst_217287;var inst_217286__$1 = tmp217359;var inst_217287__$1 = tmp217361;var inst_217288__$1 = tmp217360;var inst_217289__$1 = inst_217297;var state_217347__$1 = (function (){var statearr_217365 = state_217347;(statearr_217365[8] = inst_217289__$1);
(statearr_217365[9] = inst_217286__$1);
(statearr_217365[10] = inst_217288__$1);
(statearr_217365[11] = inst_217287__$1);
(statearr_217365[14] = inst_217296);
return statearr_217365;
})();var statearr_217366_217406 = state_217347__$1;(statearr_217366_217406[2] = null);
(statearr_217366_217406[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 11))
{var inst_217286 = (state_217347[9]);var inst_217300 = (state_217347[15]);var inst_217300__$1 = cljs.core.seq(inst_217286);var state_217347__$1 = (function (){var statearr_217367 = state_217347;(statearr_217367[15] = inst_217300__$1);
return statearr_217367;
})();if(inst_217300__$1)
{var statearr_217368_217407 = state_217347__$1;(statearr_217368_217407[1] = 13);
} else
{var statearr_217369_217408 = state_217347__$1;(statearr_217369_217408[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 12))
{var inst_217320 = (state_217347[2]);var state_217347__$1 = state_217347;var statearr_217370_217409 = state_217347__$1;(statearr_217370_217409[2] = inst_217320);
(statearr_217370_217409[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 13))
{var inst_217300 = (state_217347[15]);var inst_217302 = cljs.core.chunked_seq_QMARK_(inst_217300);var state_217347__$1 = state_217347;if(inst_217302)
{var statearr_217371_217410 = state_217347__$1;(statearr_217371_217410[1] = 16);
} else
{var statearr_217372_217411 = state_217347__$1;(statearr_217372_217411[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 14))
{var state_217347__$1 = state_217347;var statearr_217373_217412 = state_217347__$1;(statearr_217373_217412[2] = null);
(statearr_217373_217412[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 15))
{var inst_217318 = (state_217347[2]);var state_217347__$1 = state_217347;var statearr_217374_217413 = state_217347__$1;(statearr_217374_217413[2] = inst_217318);
(statearr_217374_217413[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 16))
{var inst_217300 = (state_217347[15]);var inst_217304 = cljs.core.chunk_first(inst_217300);var inst_217305 = cljs.core.chunk_rest(inst_217300);var inst_217306 = cljs.core.count(inst_217304);var inst_217286 = inst_217305;var inst_217287 = inst_217304;var inst_217288 = inst_217306;var inst_217289 = 0;var state_217347__$1 = (function (){var statearr_217375 = state_217347;(statearr_217375[8] = inst_217289);
(statearr_217375[9] = inst_217286);
(statearr_217375[10] = inst_217288);
(statearr_217375[11] = inst_217287);
return statearr_217375;
})();var statearr_217376_217414 = state_217347__$1;(statearr_217376_217414[2] = null);
(statearr_217376_217414[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 17))
{var inst_217300 = (state_217347[15]);var inst_217309 = cljs.core.first(inst_217300);var inst_217310 = cljs.core.async.muxch_STAR_(inst_217309);var inst_217311 = cljs.core.async.close_BANG_(inst_217310);var inst_217312 = cljs.core.next(inst_217300);var inst_217286 = inst_217312;var inst_217287 = null;var inst_217288 = 0;var inst_217289 = 0;var state_217347__$1 = (function (){var statearr_217377 = state_217347;(statearr_217377[8] = inst_217289);
(statearr_217377[9] = inst_217286);
(statearr_217377[10] = inst_217288);
(statearr_217377[11] = inst_217287);
(statearr_217377[16] = inst_217311);
return statearr_217377;
})();var statearr_217378_217415 = state_217347__$1;(statearr_217378_217415[2] = null);
(statearr_217378_217415[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 18))
{var inst_217315 = (state_217347[2]);var state_217347__$1 = state_217347;var statearr_217379_217416 = state_217347__$1;(statearr_217379_217416[2] = inst_217315);
(statearr_217379_217416[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 19))
{var state_217347__$1 = state_217347;var statearr_217380_217417 = state_217347__$1;(statearr_217380_217417[2] = null);
(statearr_217380_217417[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 20))
{var state_217347__$1 = state_217347;var statearr_217381_217418 = state_217347__$1;(statearr_217381_217418[2] = null);
(statearr_217381_217418[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 21))
{var inst_217340 = (state_217347[2]);var state_217347__$1 = (function (){var statearr_217382 = state_217347;(statearr_217382[17] = inst_217340);
return statearr_217382;
})();var statearr_217383_217419 = state_217347__$1;(statearr_217383_217419[2] = null);
(statearr_217383_217419[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 22))
{var inst_217337 = (state_217347[2]);var state_217347__$1 = state_217347;var statearr_217384_217420 = state_217347__$1;(statearr_217384_217420[2] = inst_217337);
(statearr_217384_217420[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 23))
{var inst_217324 = (state_217347[12]);var inst_217328 = (state_217347[2]);var inst_217329 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_217324);var state_217347__$1 = (function (){var statearr_217385 = state_217347;(statearr_217385[18] = inst_217328);
return statearr_217385;
})();var statearr_217386_217421 = state_217347__$1;(statearr_217386_217421[2] = inst_217329);
cljs.core.async.impl.ioc_helpers.process_exception(state_217347__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217348 === 24))
{var inst_217326 = (state_217347[13]);var inst_217276 = (state_217347[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_217347,23,Object,null,22);var inst_217333 = cljs.core.async.muxch_STAR_(inst_217326);var state_217347__$1 = state_217347;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_217347__$1,25,inst_217333,inst_217276);
} else
{if((state_val_217348 === 25))
{var inst_217335 = (state_217347[2]);var state_217347__$1 = state_217347;var statearr_217387_217422 = state_217347__$1;(statearr_217387_217422[2] = inst_217335);
cljs.core.async.impl.ioc_helpers.process_exception(state_217347__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_217391 = (new Array(19));(statearr_217391[0] = state_machine__10214__auto__);
(statearr_217391[1] = 1);
return statearr_217391;
});
var state_machine__10214__auto____1 = (function (state_217347){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_217347);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e217392){if((e217392 instanceof Object))
{var ex__10217__auto__ = e217392;var statearr_217393_217423 = state_217347;(statearr_217393_217423[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_217347);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e217392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__217424 = state_217347;
state_217347 = G__217424;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_217347){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_217347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_217394 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_217394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___217395);
return statearr_217394;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__10283__auto___217561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_217531){var state_val_217532 = (state_217531[1]);if((state_val_217532 === 1))
{var state_217531__$1 = state_217531;var statearr_217533_217562 = state_217531__$1;(statearr_217533_217562[2] = null);
(statearr_217533_217562[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 2))
{var inst_217494 = cljs.core.reset_BANG_(dctr,cnt);var inst_217495 = 0;var state_217531__$1 = (function (){var statearr_217534 = state_217531;(statearr_217534[7] = inst_217495);
(statearr_217534[8] = inst_217494);
return statearr_217534;
})();var statearr_217535_217563 = state_217531__$1;(statearr_217535_217563[2] = null);
(statearr_217535_217563[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 3))
{var inst_217529 = (state_217531[2]);var state_217531__$1 = state_217531;return cljs.core.async.impl.ioc_helpers.return_chan(state_217531__$1,inst_217529);
} else
{if((state_val_217532 === 4))
{var inst_217495 = (state_217531[7]);var inst_217497 = (inst_217495 < cnt);var state_217531__$1 = state_217531;if(cljs.core.truth_(inst_217497))
{var statearr_217536_217564 = state_217531__$1;(statearr_217536_217564[1] = 6);
} else
{var statearr_217537_217565 = state_217531__$1;(statearr_217537_217565[1] = 7);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 5))
{var inst_217515 = (state_217531[2]);var state_217531__$1 = (function (){var statearr_217538 = state_217531;(statearr_217538[9] = inst_217515);
return statearr_217538;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_217531__$1,12,dchan);
} else
{if((state_val_217532 === 6))
{var state_217531__$1 = state_217531;var statearr_217539_217566 = state_217531__$1;(statearr_217539_217566[2] = null);
(statearr_217539_217566[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 7))
{var state_217531__$1 = state_217531;var statearr_217540_217567 = state_217531__$1;(statearr_217540_217567[2] = null);
(statearr_217540_217567[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 8))
{var inst_217513 = (state_217531[2]);var state_217531__$1 = state_217531;var statearr_217541_217568 = state_217531__$1;(statearr_217541_217568[2] = inst_217513);
(statearr_217541_217568[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 9))
{var inst_217495 = (state_217531[7]);var inst_217508 = (state_217531[2]);var inst_217509 = (inst_217495 + 1);var inst_217495__$1 = inst_217509;var state_217531__$1 = (function (){var statearr_217542 = state_217531;(statearr_217542[7] = inst_217495__$1);
(statearr_217542[10] = inst_217508);
return statearr_217542;
})();var statearr_217543_217569 = state_217531__$1;(statearr_217543_217569[2] = null);
(statearr_217543_217569[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 10))
{var inst_217499 = (state_217531[2]);var inst_217500 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_217531__$1 = (function (){var statearr_217544 = state_217531;(statearr_217544[11] = inst_217499);
return statearr_217544;
})();var statearr_217545_217570 = state_217531__$1;(statearr_217545_217570[2] = inst_217500);
cljs.core.async.impl.ioc_helpers.process_exception(state_217531__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 11))
{var inst_217495 = (state_217531[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_217531,10,Object,null,9);var inst_217504 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_217495) : chs__$1.call(null,inst_217495));var inst_217505 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_217495) : done.call(null,inst_217495));var inst_217506 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_217504,inst_217505);var state_217531__$1 = state_217531;var statearr_217546_217571 = state_217531__$1;(statearr_217546_217571[2] = inst_217506);
cljs.core.async.impl.ioc_helpers.process_exception(state_217531__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 12))
{var inst_217517 = (state_217531[12]);var inst_217517__$1 = (state_217531[2]);var inst_217518 = cljs.core.some(cljs.core.nil_QMARK_,inst_217517__$1);var state_217531__$1 = (function (){var statearr_217547 = state_217531;(statearr_217547[12] = inst_217517__$1);
return statearr_217547;
})();if(cljs.core.truth_(inst_217518))
{var statearr_217548_217572 = state_217531__$1;(statearr_217548_217572[1] = 13);
} else
{var statearr_217549_217573 = state_217531__$1;(statearr_217549_217573[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 13))
{var inst_217520 = cljs.core.async.close_BANG_(out);var state_217531__$1 = state_217531;var statearr_217550_217574 = state_217531__$1;(statearr_217550_217574[2] = inst_217520);
(statearr_217550_217574[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 14))
{var inst_217517 = (state_217531[12]);var inst_217522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_217517);var state_217531__$1 = state_217531;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_217531__$1,16,out,inst_217522);
} else
{if((state_val_217532 === 15))
{var inst_217527 = (state_217531[2]);var state_217531__$1 = state_217531;var statearr_217551_217575 = state_217531__$1;(statearr_217551_217575[2] = inst_217527);
(statearr_217551_217575[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217532 === 16))
{var inst_217524 = (state_217531[2]);var state_217531__$1 = (function (){var statearr_217552 = state_217531;(statearr_217552[13] = inst_217524);
return statearr_217552;
})();var statearr_217553_217576 = state_217531__$1;(statearr_217553_217576[2] = null);
(statearr_217553_217576[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_217557 = (new Array(14));(statearr_217557[0] = state_machine__10214__auto__);
(statearr_217557[1] = 1);
return statearr_217557;
});
var state_machine__10214__auto____1 = (function (state_217531){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_217531);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e217558){if((e217558 instanceof Object))
{var ex__10217__auto__ = e217558;var statearr_217559_217577 = state_217531;(statearr_217559_217577[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_217531);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e217558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__217578 = state_217531;
state_217531 = G__217578;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_217531){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_217531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_217560 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_217560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___217561);
return statearr_217560;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___217686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_217662){var state_val_217663 = (state_217662[1]);if((state_val_217663 === 1))
{var inst_217633 = cljs.core.vec(chs);var inst_217634 = inst_217633;var state_217662__$1 = (function (){var statearr_217664 = state_217662;(statearr_217664[7] = inst_217634);
return statearr_217664;
})();var statearr_217665_217687 = state_217662__$1;(statearr_217665_217687[2] = null);
(statearr_217665_217687[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217663 === 2))
{var inst_217634 = (state_217662[7]);var inst_217636 = cljs.core.count(inst_217634);var inst_217637 = (inst_217636 > 0);var state_217662__$1 = state_217662;if(cljs.core.truth_(inst_217637))
{var statearr_217666_217688 = state_217662__$1;(statearr_217666_217688[1] = 4);
} else
{var statearr_217667_217689 = state_217662__$1;(statearr_217667_217689[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217663 === 3))
{var inst_217660 = (state_217662[2]);var state_217662__$1 = state_217662;return cljs.core.async.impl.ioc_helpers.return_chan(state_217662__$1,inst_217660);
} else
{if((state_val_217663 === 4))
{var inst_217634 = (state_217662[7]);var state_217662__$1 = state_217662;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_217662__$1,7,inst_217634);
} else
{if((state_val_217663 === 5))
{var inst_217656 = cljs.core.async.close_BANG_(out);var state_217662__$1 = state_217662;var statearr_217668_217690 = state_217662__$1;(statearr_217668_217690[2] = inst_217656);
(statearr_217668_217690[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217663 === 6))
{var inst_217658 = (state_217662[2]);var state_217662__$1 = state_217662;var statearr_217669_217691 = state_217662__$1;(statearr_217669_217691[2] = inst_217658);
(statearr_217669_217691[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217663 === 7))
{var inst_217641 = (state_217662[8]);var inst_217642 = (state_217662[9]);var inst_217641__$1 = (state_217662[2]);var inst_217642__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_217641__$1,0,null);var inst_217643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_217641__$1,1,null);var inst_217644 = (inst_217642__$1 == null);var state_217662__$1 = (function (){var statearr_217670 = state_217662;(statearr_217670[10] = inst_217643);
(statearr_217670[8] = inst_217641__$1);
(statearr_217670[9] = inst_217642__$1);
return statearr_217670;
})();if(cljs.core.truth_(inst_217644))
{var statearr_217671_217692 = state_217662__$1;(statearr_217671_217692[1] = 8);
} else
{var statearr_217672_217693 = state_217662__$1;(statearr_217672_217693[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217663 === 8))
{var inst_217643 = (state_217662[10]);var inst_217641 = (state_217662[8]);var inst_217642 = (state_217662[9]);var inst_217634 = (state_217662[7]);var inst_217646 = (function (){var c = inst_217643;var v = inst_217642;var vec__217639 = inst_217641;var cs = inst_217634;return ((function (c,v,vec__217639,cs,inst_217643,inst_217641,inst_217642,inst_217634,state_val_217663){
return (function (p1__217579_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__217579_SHARP_);
});
;})(c,v,vec__217639,cs,inst_217643,inst_217641,inst_217642,inst_217634,state_val_217663))
})();var inst_217647 = cljs.core.filterv(inst_217646,inst_217634);var inst_217634__$1 = inst_217647;var state_217662__$1 = (function (){var statearr_217673 = state_217662;(statearr_217673[7] = inst_217634__$1);
return statearr_217673;
})();var statearr_217674_217694 = state_217662__$1;(statearr_217674_217694[2] = null);
(statearr_217674_217694[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217663 === 9))
{var inst_217642 = (state_217662[9]);var state_217662__$1 = state_217662;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_217662__$1,11,out,inst_217642);
} else
{if((state_val_217663 === 10))
{var inst_217654 = (state_217662[2]);var state_217662__$1 = state_217662;var statearr_217676_217695 = state_217662__$1;(statearr_217676_217695[2] = inst_217654);
(statearr_217676_217695[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217663 === 11))
{var inst_217634 = (state_217662[7]);var inst_217651 = (state_217662[2]);var tmp217675 = inst_217634;var inst_217634__$1 = tmp217675;var state_217662__$1 = (function (){var statearr_217677 = state_217662;(statearr_217677[11] = inst_217651);
(statearr_217677[7] = inst_217634__$1);
return statearr_217677;
})();var statearr_217678_217696 = state_217662__$1;(statearr_217678_217696[2] = null);
(statearr_217678_217696[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_217682 = (new Array(12));(statearr_217682[0] = state_machine__10214__auto__);
(statearr_217682[1] = 1);
return statearr_217682;
});
var state_machine__10214__auto____1 = (function (state_217662){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_217662);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e217683){if((e217683 instanceof Object))
{var ex__10217__auto__ = e217683;var statearr_217684_217697 = state_217662;(statearr_217684_217697[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_217662);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e217683;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__217698 = state_217662;
state_217662 = G__217698;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_217662){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_217662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_217685 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_217685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___217686);
return statearr_217685;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___217791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_217768){var state_val_217769 = (state_217768[1]);if((state_val_217769 === 1))
{var inst_217745 = 0;var state_217768__$1 = (function (){var statearr_217770 = state_217768;(statearr_217770[7] = inst_217745);
return statearr_217770;
})();var statearr_217771_217792 = state_217768__$1;(statearr_217771_217792[2] = null);
(statearr_217771_217792[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217769 === 2))
{var inst_217745 = (state_217768[7]);var inst_217747 = (inst_217745 < n);var state_217768__$1 = state_217768;if(cljs.core.truth_(inst_217747))
{var statearr_217772_217793 = state_217768__$1;(statearr_217772_217793[1] = 4);
} else
{var statearr_217773_217794 = state_217768__$1;(statearr_217773_217794[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217769 === 3))
{var inst_217765 = (state_217768[2]);var inst_217766 = cljs.core.async.close_BANG_(out);var state_217768__$1 = (function (){var statearr_217774 = state_217768;(statearr_217774[8] = inst_217765);
return statearr_217774;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_217768__$1,inst_217766);
} else
{if((state_val_217769 === 4))
{var state_217768__$1 = state_217768;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_217768__$1,7,ch);
} else
{if((state_val_217769 === 5))
{var state_217768__$1 = state_217768;var statearr_217775_217795 = state_217768__$1;(statearr_217775_217795[2] = null);
(statearr_217775_217795[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217769 === 6))
{var inst_217763 = (state_217768[2]);var state_217768__$1 = state_217768;var statearr_217776_217796 = state_217768__$1;(statearr_217776_217796[2] = inst_217763);
(statearr_217776_217796[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217769 === 7))
{var inst_217750 = (state_217768[9]);var inst_217750__$1 = (state_217768[2]);var inst_217751 = (inst_217750__$1 == null);var inst_217752 = cljs.core.not(inst_217751);var state_217768__$1 = (function (){var statearr_217777 = state_217768;(statearr_217777[9] = inst_217750__$1);
return statearr_217777;
})();if(inst_217752)
{var statearr_217778_217797 = state_217768__$1;(statearr_217778_217797[1] = 8);
} else
{var statearr_217779_217798 = state_217768__$1;(statearr_217779_217798[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217769 === 8))
{var inst_217750 = (state_217768[9]);var state_217768__$1 = state_217768;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_217768__$1,11,out,inst_217750);
} else
{if((state_val_217769 === 9))
{var state_217768__$1 = state_217768;var statearr_217780_217799 = state_217768__$1;(statearr_217780_217799[2] = null);
(statearr_217780_217799[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217769 === 10))
{var inst_217760 = (state_217768[2]);var state_217768__$1 = state_217768;var statearr_217781_217800 = state_217768__$1;(statearr_217781_217800[2] = inst_217760);
(statearr_217781_217800[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217769 === 11))
{var inst_217745 = (state_217768[7]);var inst_217755 = (state_217768[2]);var inst_217756 = (inst_217745 + 1);var inst_217745__$1 = inst_217756;var state_217768__$1 = (function (){var statearr_217782 = state_217768;(statearr_217782[10] = inst_217755);
(statearr_217782[7] = inst_217745__$1);
return statearr_217782;
})();var statearr_217783_217801 = state_217768__$1;(statearr_217783_217801[2] = null);
(statearr_217783_217801[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_217787 = (new Array(11));(statearr_217787[0] = state_machine__10214__auto__);
(statearr_217787[1] = 1);
return statearr_217787;
});
var state_machine__10214__auto____1 = (function (state_217768){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_217768);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e217788){if((e217788 instanceof Object))
{var ex__10217__auto__ = e217788;var statearr_217789_217802 = state_217768;(statearr_217789_217802[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_217768);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e217788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__217803 = state_217768;
state_217768 = G__217803;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_217768){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_217768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_217790 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_217790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___217791);
return statearr_217790;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___217900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_217875){var state_val_217876 = (state_217875[1]);if((state_val_217876 === 1))
{var inst_217852 = null;var state_217875__$1 = (function (){var statearr_217877 = state_217875;(statearr_217877[7] = inst_217852);
return statearr_217877;
})();var statearr_217878_217901 = state_217875__$1;(statearr_217878_217901[2] = null);
(statearr_217878_217901[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217876 === 2))
{var state_217875__$1 = state_217875;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_217875__$1,4,ch);
} else
{if((state_val_217876 === 3))
{var inst_217872 = (state_217875[2]);var inst_217873 = cljs.core.async.close_BANG_(out);var state_217875__$1 = (function (){var statearr_217879 = state_217875;(statearr_217879[8] = inst_217872);
return statearr_217879;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_217875__$1,inst_217873);
} else
{if((state_val_217876 === 4))
{var inst_217855 = (state_217875[9]);var inst_217855__$1 = (state_217875[2]);var inst_217856 = (inst_217855__$1 == null);var inst_217857 = cljs.core.not(inst_217856);var state_217875__$1 = (function (){var statearr_217880 = state_217875;(statearr_217880[9] = inst_217855__$1);
return statearr_217880;
})();if(inst_217857)
{var statearr_217881_217902 = state_217875__$1;(statearr_217881_217902[1] = 5);
} else
{var statearr_217882_217903 = state_217875__$1;(statearr_217882_217903[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217876 === 5))
{var inst_217855 = (state_217875[9]);var inst_217852 = (state_217875[7]);var inst_217859 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_217855,inst_217852);var state_217875__$1 = state_217875;if(inst_217859)
{var statearr_217883_217904 = state_217875__$1;(statearr_217883_217904[1] = 8);
} else
{var statearr_217884_217905 = state_217875__$1;(statearr_217884_217905[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_217876 === 6))
{var state_217875__$1 = state_217875;var statearr_217886_217906 = state_217875__$1;(statearr_217886_217906[2] = null);
(statearr_217886_217906[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217876 === 7))
{var inst_217870 = (state_217875[2]);var state_217875__$1 = state_217875;var statearr_217887_217907 = state_217875__$1;(statearr_217887_217907[2] = inst_217870);
(statearr_217887_217907[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217876 === 8))
{var inst_217852 = (state_217875[7]);var tmp217885 = inst_217852;var inst_217852__$1 = tmp217885;var state_217875__$1 = (function (){var statearr_217888 = state_217875;(statearr_217888[7] = inst_217852__$1);
return statearr_217888;
})();var statearr_217889_217908 = state_217875__$1;(statearr_217889_217908[2] = null);
(statearr_217889_217908[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217876 === 9))
{var inst_217855 = (state_217875[9]);var state_217875__$1 = state_217875;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_217875__$1,11,out,inst_217855);
} else
{if((state_val_217876 === 10))
{var inst_217867 = (state_217875[2]);var state_217875__$1 = state_217875;var statearr_217890_217909 = state_217875__$1;(statearr_217890_217909[2] = inst_217867);
(statearr_217890_217909[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_217876 === 11))
{var inst_217855 = (state_217875[9]);var inst_217864 = (state_217875[2]);var inst_217852 = inst_217855;var state_217875__$1 = (function (){var statearr_217891 = state_217875;(statearr_217891[7] = inst_217852);
(statearr_217891[10] = inst_217864);
return statearr_217891;
})();var statearr_217892_217910 = state_217875__$1;(statearr_217892_217910[2] = null);
(statearr_217892_217910[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_217896 = (new Array(11));(statearr_217896[0] = state_machine__10214__auto__);
(statearr_217896[1] = 1);
return statearr_217896;
});
var state_machine__10214__auto____1 = (function (state_217875){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_217875);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e217897){if((e217897 instanceof Object))
{var ex__10217__auto__ = e217897;var statearr_217898_217911 = state_217875;(statearr_217898_217911[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_217875);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e217897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__217912 = state_217875;
state_217875 = G__217912;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_217875){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_217875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_217899 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_217899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___217900);
return statearr_217899;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___218047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_218017){var state_val_218018 = (state_218017[1]);if((state_val_218018 === 1))
{var inst_217980 = (new Array(n));var inst_217981 = inst_217980;var inst_217982 = 0;var state_218017__$1 = (function (){var statearr_218019 = state_218017;(statearr_218019[7] = inst_217982);
(statearr_218019[8] = inst_217981);
return statearr_218019;
})();var statearr_218020_218048 = state_218017__$1;(statearr_218020_218048[2] = null);
(statearr_218020_218048[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218018 === 2))
{var state_218017__$1 = state_218017;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_218017__$1,4,ch);
} else
{if((state_val_218018 === 3))
{var inst_218015 = (state_218017[2]);var state_218017__$1 = state_218017;return cljs.core.async.impl.ioc_helpers.return_chan(state_218017__$1,inst_218015);
} else
{if((state_val_218018 === 4))
{var inst_217985 = (state_218017[9]);var inst_217985__$1 = (state_218017[2]);var inst_217986 = (inst_217985__$1 == null);var inst_217987 = cljs.core.not(inst_217986);var state_218017__$1 = (function (){var statearr_218021 = state_218017;(statearr_218021[9] = inst_217985__$1);
return statearr_218021;
})();if(inst_217987)
{var statearr_218022_218049 = state_218017__$1;(statearr_218022_218049[1] = 5);
} else
{var statearr_218023_218050 = state_218017__$1;(statearr_218023_218050[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_218018 === 5))
{var inst_217985 = (state_218017[9]);var inst_217982 = (state_218017[7]);var inst_217981 = (state_218017[8]);var inst_217990 = (state_218017[10]);var inst_217989 = (inst_217981[inst_217982] = inst_217985);var inst_217990__$1 = (inst_217982 + 1);var inst_217991 = (inst_217990__$1 < n);var state_218017__$1 = (function (){var statearr_218024 = state_218017;(statearr_218024[10] = inst_217990__$1);
(statearr_218024[11] = inst_217989);
return statearr_218024;
})();if(cljs.core.truth_(inst_217991))
{var statearr_218025_218051 = state_218017__$1;(statearr_218025_218051[1] = 8);
} else
{var statearr_218026_218052 = state_218017__$1;(statearr_218026_218052[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_218018 === 6))
{var inst_217982 = (state_218017[7]);var inst_218003 = (inst_217982 > 0);var state_218017__$1 = state_218017;if(cljs.core.truth_(inst_218003))
{var statearr_218028_218053 = state_218017__$1;(statearr_218028_218053[1] = 12);
} else
{var statearr_218029_218054 = state_218017__$1;(statearr_218029_218054[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_218018 === 7))
{var inst_218013 = (state_218017[2]);var state_218017__$1 = state_218017;var statearr_218030_218055 = state_218017__$1;(statearr_218030_218055[2] = inst_218013);
(statearr_218030_218055[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218018 === 8))
{var inst_217981 = (state_218017[8]);var inst_217990 = (state_218017[10]);var tmp218027 = inst_217981;var inst_217981__$1 = tmp218027;var inst_217982 = inst_217990;var state_218017__$1 = (function (){var statearr_218031 = state_218017;(statearr_218031[7] = inst_217982);
(statearr_218031[8] = inst_217981__$1);
return statearr_218031;
})();var statearr_218032_218056 = state_218017__$1;(statearr_218032_218056[2] = null);
(statearr_218032_218056[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218018 === 9))
{var inst_217981 = (state_218017[8]);var inst_217995 = cljs.core.vec(inst_217981);var state_218017__$1 = state_218017;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_218017__$1,11,out,inst_217995);
} else
{if((state_val_218018 === 10))
{var inst_218001 = (state_218017[2]);var state_218017__$1 = state_218017;var statearr_218033_218057 = state_218017__$1;(statearr_218033_218057[2] = inst_218001);
(statearr_218033_218057[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218018 === 11))
{var inst_217997 = (state_218017[2]);var inst_217998 = (new Array(n));var inst_217981 = inst_217998;var inst_217982 = 0;var state_218017__$1 = (function (){var statearr_218034 = state_218017;(statearr_218034[7] = inst_217982);
(statearr_218034[8] = inst_217981);
(statearr_218034[12] = inst_217997);
return statearr_218034;
})();var statearr_218035_218058 = state_218017__$1;(statearr_218035_218058[2] = null);
(statearr_218035_218058[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218018 === 12))
{var inst_217981 = (state_218017[8]);var inst_218005 = cljs.core.vec(inst_217981);var state_218017__$1 = state_218017;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_218017__$1,15,out,inst_218005);
} else
{if((state_val_218018 === 13))
{var state_218017__$1 = state_218017;var statearr_218036_218059 = state_218017__$1;(statearr_218036_218059[2] = null);
(statearr_218036_218059[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218018 === 14))
{var inst_218010 = (state_218017[2]);var inst_218011 = cljs.core.async.close_BANG_(out);var state_218017__$1 = (function (){var statearr_218037 = state_218017;(statearr_218037[13] = inst_218010);
return statearr_218037;
})();var statearr_218038_218060 = state_218017__$1;(statearr_218038_218060[2] = inst_218011);
(statearr_218038_218060[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218018 === 15))
{var inst_218007 = (state_218017[2]);var state_218017__$1 = state_218017;var statearr_218039_218061 = state_218017__$1;(statearr_218039_218061[2] = inst_218007);
(statearr_218039_218061[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_218043 = (new Array(14));(statearr_218043[0] = state_machine__10214__auto__);
(statearr_218043[1] = 1);
return statearr_218043;
});
var state_machine__10214__auto____1 = (function (state_218017){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_218017);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e218044){if((e218044 instanceof Object))
{var ex__10217__auto__ = e218044;var statearr_218045_218062 = state_218017;(statearr_218045_218062[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_218017);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e218044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__218063 = state_218017;
state_218017 = G__218063;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_218017){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_218017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_218046 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_218046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___218047);
return statearr_218046;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___218206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_218176){var state_val_218177 = (state_218176[1]);if((state_val_218177 === 1))
{var inst_218135 = (new Array(0));var inst_218136 = inst_218135;var inst_218137 = cljs.core.constant$keyword$310;var state_218176__$1 = (function (){var statearr_218178 = state_218176;(statearr_218178[7] = inst_218136);
(statearr_218178[8] = inst_218137);
return statearr_218178;
})();var statearr_218179_218207 = state_218176__$1;(statearr_218179_218207[2] = null);
(statearr_218179_218207[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218177 === 2))
{var state_218176__$1 = state_218176;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_218176__$1,4,ch);
} else
{if((state_val_218177 === 3))
{var inst_218174 = (state_218176[2]);var state_218176__$1 = state_218176;return cljs.core.async.impl.ioc_helpers.return_chan(state_218176__$1,inst_218174);
} else
{if((state_val_218177 === 4))
{var inst_218140 = (state_218176[9]);var inst_218140__$1 = (state_218176[2]);var inst_218141 = (inst_218140__$1 == null);var inst_218142 = cljs.core.not(inst_218141);var state_218176__$1 = (function (){var statearr_218180 = state_218176;(statearr_218180[9] = inst_218140__$1);
return statearr_218180;
})();if(inst_218142)
{var statearr_218181_218208 = state_218176__$1;(statearr_218181_218208[1] = 5);
} else
{var statearr_218182_218209 = state_218176__$1;(statearr_218182_218209[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_218177 === 5))
{var inst_218137 = (state_218176[8]);var inst_218144 = (state_218176[10]);var inst_218140 = (state_218176[9]);var inst_218144__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_218140) : f.call(null,inst_218140));var inst_218145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_218144__$1,inst_218137);var inst_218146 = cljs.core.keyword_identical_QMARK_(inst_218137,cljs.core.constant$keyword$310);var inst_218147 = (inst_218145) || (inst_218146);var state_218176__$1 = (function (){var statearr_218183 = state_218176;(statearr_218183[10] = inst_218144__$1);
return statearr_218183;
})();if(cljs.core.truth_(inst_218147))
{var statearr_218184_218210 = state_218176__$1;(statearr_218184_218210[1] = 8);
} else
{var statearr_218185_218211 = state_218176__$1;(statearr_218185_218211[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_218177 === 6))
{var inst_218136 = (state_218176[7]);var inst_218161 = inst_218136.length;var inst_218162 = (inst_218161 > 0);var state_218176__$1 = state_218176;if(cljs.core.truth_(inst_218162))
{var statearr_218187_218212 = state_218176__$1;(statearr_218187_218212[1] = 12);
} else
{var statearr_218188_218213 = state_218176__$1;(statearr_218188_218213[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_218177 === 7))
{var inst_218172 = (state_218176[2]);var state_218176__$1 = state_218176;var statearr_218189_218214 = state_218176__$1;(statearr_218189_218214[2] = inst_218172);
(statearr_218189_218214[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218177 === 8))
{var inst_218136 = (state_218176[7]);var inst_218144 = (state_218176[10]);var inst_218140 = (state_218176[9]);var inst_218149 = inst_218136.push(inst_218140);var tmp218186 = inst_218136;var inst_218136__$1 = tmp218186;var inst_218137 = inst_218144;var state_218176__$1 = (function (){var statearr_218190 = state_218176;(statearr_218190[7] = inst_218136__$1);
(statearr_218190[8] = inst_218137);
(statearr_218190[11] = inst_218149);
return statearr_218190;
})();var statearr_218191_218215 = state_218176__$1;(statearr_218191_218215[2] = null);
(statearr_218191_218215[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218177 === 9))
{var inst_218136 = (state_218176[7]);var inst_218152 = cljs.core.vec(inst_218136);var state_218176__$1 = state_218176;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_218176__$1,11,out,inst_218152);
} else
{if((state_val_218177 === 10))
{var inst_218159 = (state_218176[2]);var state_218176__$1 = state_218176;var statearr_218192_218216 = state_218176__$1;(statearr_218192_218216[2] = inst_218159);
(statearr_218192_218216[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218177 === 11))
{var inst_218144 = (state_218176[10]);var inst_218140 = (state_218176[9]);var inst_218154 = (state_218176[2]);var inst_218155 = (new Array(0));var inst_218156 = inst_218155.push(inst_218140);var inst_218136 = inst_218155;var inst_218137 = inst_218144;var state_218176__$1 = (function (){var statearr_218193 = state_218176;(statearr_218193[7] = inst_218136);
(statearr_218193[8] = inst_218137);
(statearr_218193[12] = inst_218154);
(statearr_218193[13] = inst_218156);
return statearr_218193;
})();var statearr_218194_218217 = state_218176__$1;(statearr_218194_218217[2] = null);
(statearr_218194_218217[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218177 === 12))
{var inst_218136 = (state_218176[7]);var inst_218164 = cljs.core.vec(inst_218136);var state_218176__$1 = state_218176;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_218176__$1,15,out,inst_218164);
} else
{if((state_val_218177 === 13))
{var state_218176__$1 = state_218176;var statearr_218195_218218 = state_218176__$1;(statearr_218195_218218[2] = null);
(statearr_218195_218218[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218177 === 14))
{var inst_218169 = (state_218176[2]);var inst_218170 = cljs.core.async.close_BANG_(out);var state_218176__$1 = (function (){var statearr_218196 = state_218176;(statearr_218196[14] = inst_218169);
return statearr_218196;
})();var statearr_218197_218219 = state_218176__$1;(statearr_218197_218219[2] = inst_218170);
(statearr_218197_218219[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_218177 === 15))
{var inst_218166 = (state_218176[2]);var state_218176__$1 = state_218176;var statearr_218198_218220 = state_218176__$1;(statearr_218198_218220[2] = inst_218166);
(statearr_218198_218220[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_218202 = (new Array(15));(statearr_218202[0] = state_machine__10214__auto__);
(statearr_218202[1] = 1);
return statearr_218202;
});
var state_machine__10214__auto____1 = (function (state_218176){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_218176);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e218203){if((e218203 instanceof Object))
{var ex__10217__auto__ = e218203;var statearr_218204_218221 = state_218176;(statearr_218204_218221[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_218176);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e218203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__218222 = state_218176;
state_218176 = G__218222;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_218176){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_218176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_218205 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_218205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___218206);
return statearr_218205;
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
