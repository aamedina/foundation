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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21404 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21404 = (function (f,fn_handler,meta21405){
this.f = f;
this.fn_handler = fn_handler;
this.meta21405 = meta21405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21404.cljs$lang$type = true;
cljs.core.async.t21404.cljs$lang$ctorStr = "cljs.core.async/t21404";
cljs.core.async.t21404.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21404");
});
cljs.core.async.t21404.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21406){var self__ = this;
var _21406__$1 = this;return self__.meta21405;
});
cljs.core.async.t21404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21406,meta21405__$1){var self__ = this;
var _21406__$1 = this;return (new cljs.core.async.t21404(self__.f,self__.fn_handler,meta21405__$1));
});
cljs.core.async.__GT_t21404 = (function __GT_t21404(f__$1,fn_handler__$1,meta21405){return (new cljs.core.async.t21404(f__$1,fn_handler__$1,meta21405));
});
}
return (new cljs.core.async.t21404(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21408 = buff;if(G__21408)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__21408.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21408.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21408);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21408);
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
{var val_21409 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21409);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_21409);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8651__auto___21410 = n;var x_21411 = 0;while(true){
if((x_21411 < n__8651__auto___21410))
{(a[x_21411] = 0);
{
var G__21412 = (x_21411 + 1);
x_21411 = G__21412;
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
var G__21413 = (i + 1);
i = G__21413;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21417 = (function (flag,alt_flag,meta21418){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21418 = meta21418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21417.cljs$lang$type = true;
cljs.core.async.t21417.cljs$lang$ctorStr = "cljs.core.async/t21417";
cljs.core.async.t21417.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21417");
});
cljs.core.async.t21417.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t21417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t21417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21419){var self__ = this;
var _21419__$1 = this;return self__.meta21418;
});
cljs.core.async.t21417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21419,meta21418__$1){var self__ = this;
var _21419__$1 = this;return (new cljs.core.async.t21417(self__.flag,self__.alt_flag,meta21418__$1));
});
cljs.core.async.__GT_t21417 = (function __GT_t21417(flag__$1,alt_flag__$1,meta21418){return (new cljs.core.async.t21417(flag__$1,alt_flag__$1,meta21418));
});
}
return (new cljs.core.async.t21417(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21423 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21423 = (function (cb,flag,alt_handler,meta21424){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21424 = meta21424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21423.cljs$lang$type = true;
cljs.core.async.t21423.cljs$lang$ctorStr = "cljs.core.async/t21423";
cljs.core.async.t21423.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21423");
});
cljs.core.async.t21423.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21425){var self__ = this;
var _21425__$1 = this;return self__.meta21424;
});
cljs.core.async.t21423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21425,meta21424__$1){var self__ = this;
var _21425__$1 = this;return (new cljs.core.async.t21423(self__.cb,self__.flag,self__.alt_handler,meta21424__$1));
});
cljs.core.async.__GT_t21423 = (function __GT_t21423(cb__$1,flag__$1,alt_handler__$1,meta21424){return (new cljs.core.async.t21423(cb__$1,flag__$1,alt_handler__$1,meta21424));
});
}
return (new cljs.core.async.t21423(cb,flag,alt_handler,null));
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
return (function (p1__21426_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21426_SHARP_,port], null));
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
var G__21427 = (i + 1);
i = G__21427;
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
var alts_BANG___delegate = function (ports,p__21428){var map__21430 = p__21428;var map__21430__$1 = ((cljs.core.seq_QMARK_.call(null,map__21430))?cljs.core.apply.call(null,cljs.core.hash_map,map__21430):map__21430);var opts = map__21430__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21428 = null;if (arguments.length > 1) {
  p__21428 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21428);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21431){
var ports = cljs.core.first(arglist__21431);
var p__21428 = cljs.core.rest(arglist__21431);
return alts_BANG___delegate(ports,p__21428);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21439 = (function (ch,f,map_LT_,meta21440){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21440 = meta21440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21439.cljs$lang$type = true;
cljs.core.async.t21439.cljs$lang$ctorStr = "cljs.core.async/t21439";
cljs.core.async.t21439.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21439");
});
cljs.core.async.t21439.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t21439.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21442 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21442 = (function (fn1,_,meta21440,ch,f,map_LT_,meta21443){
this.fn1 = fn1;
this._ = _;
this.meta21440 = meta21440;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21443 = meta21443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21442.cljs$lang$type = true;
cljs.core.async.t21442.cljs$lang$ctorStr = "cljs.core.async/t21442";
cljs.core.async.t21442.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21442");
});
cljs.core.async.t21442.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21442.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t21442.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t21442.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__21432_SHARP_){return f1.call(null,(((p1__21432_SHARP_ == null))?null:self__.f.call(null,p1__21432_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t21442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21444){var self__ = this;
var _21444__$1 = this;return self__.meta21443;
});
cljs.core.async.t21442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21444,meta21443__$1){var self__ = this;
var _21444__$1 = this;return (new cljs.core.async.t21442(self__.fn1,self__._,self__.meta21440,self__.ch,self__.f,self__.map_LT_,meta21443__$1));
});
cljs.core.async.__GT_t21442 = (function __GT_t21442(fn1__$1,___$2,meta21440__$1,ch__$2,f__$2,map_LT___$2,meta21443){return (new cljs.core.async.t21442(fn1__$1,___$2,meta21440__$1,ch__$2,f__$2,map_LT___$2,meta21443));
});
}
return (new cljs.core.async.t21442(fn1,___$1,self__.meta21440,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t21439.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21441){var self__ = this;
var _21441__$1 = this;return self__.meta21440;
});
cljs.core.async.t21439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21441,meta21440__$1){var self__ = this;
var _21441__$1 = this;return (new cljs.core.async.t21439(self__.ch,self__.f,self__.map_LT_,meta21440__$1));
});
cljs.core.async.__GT_t21439 = (function __GT_t21439(ch__$1,f__$1,map_LT___$1,meta21440){return (new cljs.core.async.t21439(ch__$1,f__$1,map_LT___$1,meta21440));
});
}
return (new cljs.core.async.t21439(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21448 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21448 = (function (ch,f,map_GT_,meta21449){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21449 = meta21449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21448.cljs$lang$type = true;
cljs.core.async.t21448.cljs$lang$ctorStr = "cljs.core.async/t21448";
cljs.core.async.t21448.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21448");
});
cljs.core.async.t21448.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21448.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t21448.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21448.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21448.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21448.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21450){var self__ = this;
var _21450__$1 = this;return self__.meta21449;
});
cljs.core.async.t21448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21450,meta21449__$1){var self__ = this;
var _21450__$1 = this;return (new cljs.core.async.t21448(self__.ch,self__.f,self__.map_GT_,meta21449__$1));
});
cljs.core.async.__GT_t21448 = (function __GT_t21448(ch__$1,f__$1,map_GT___$1,meta21449){return (new cljs.core.async.t21448(ch__$1,f__$1,map_GT___$1,meta21449));
});
}
return (new cljs.core.async.t21448(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21454 = (function (ch,p,filter_GT_,meta21455){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21455 = meta21455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21454.cljs$lang$type = true;
cljs.core.async.t21454.cljs$lang$ctorStr = "cljs.core.async/t21454";
cljs.core.async.t21454.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t21454");
});
cljs.core.async.t21454.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t21454.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21454.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21456){var self__ = this;
var _21456__$1 = this;return self__.meta21455;
});
cljs.core.async.t21454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21456,meta21455__$1){var self__ = this;
var _21456__$1 = this;return (new cljs.core.async.t21454(self__.ch,self__.p,self__.filter_GT_,meta21455__$1));
});
cljs.core.async.__GT_t21454 = (function __GT_t21454(ch__$1,p__$1,filter_GT___$1,meta21455){return (new cljs.core.async.t21454(ch__$1,p__$1,filter_GT___$1,meta21455));
});
}
return (new cljs.core.async.t21454(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13587__auto___21539 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_21518){var state_val_21519 = (state_21518[1]);if((state_val_21519 === 1))
{var state_21518__$1 = state_21518;var statearr_21520_21540 = state_21518__$1;(statearr_21520_21540[2] = null);
(statearr_21520_21540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21519 === 2))
{var state_21518__$1 = state_21518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21518__$1,4,ch);
} else
{if((state_val_21519 === 3))
{var inst_21516 = (state_21518[2]);var state_21518__$1 = state_21518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21518__$1,inst_21516);
} else
{if((state_val_21519 === 4))
{var inst_21500 = (state_21518[7]);var inst_21500__$1 = (state_21518[2]);var inst_21501 = (inst_21500__$1 == null);var state_21518__$1 = (function (){var statearr_21521 = state_21518;(statearr_21521[7] = inst_21500__$1);
return statearr_21521;
})();if(cljs.core.truth_(inst_21501))
{var statearr_21522_21541 = state_21518__$1;(statearr_21522_21541[1] = 5);
} else
{var statearr_21523_21542 = state_21518__$1;(statearr_21523_21542[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21519 === 5))
{var inst_21503 = cljs.core.async.close_BANG_.call(null,out);var state_21518__$1 = state_21518;var statearr_21524_21543 = state_21518__$1;(statearr_21524_21543[2] = inst_21503);
(statearr_21524_21543[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21519 === 6))
{var inst_21500 = (state_21518[7]);var inst_21505 = p.call(null,inst_21500);var state_21518__$1 = state_21518;if(cljs.core.truth_(inst_21505))
{var statearr_21525_21544 = state_21518__$1;(statearr_21525_21544[1] = 8);
} else
{var statearr_21526_21545 = state_21518__$1;(statearr_21526_21545[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21519 === 7))
{var inst_21514 = (state_21518[2]);var state_21518__$1 = state_21518;var statearr_21527_21546 = state_21518__$1;(statearr_21527_21546[2] = inst_21514);
(statearr_21527_21546[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21519 === 8))
{var inst_21500 = (state_21518[7]);var state_21518__$1 = state_21518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21518__$1,11,out,inst_21500);
} else
{if((state_val_21519 === 9))
{var state_21518__$1 = state_21518;var statearr_21528_21547 = state_21518__$1;(statearr_21528_21547[2] = null);
(statearr_21528_21547[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21519 === 10))
{var inst_21511 = (state_21518[2]);var state_21518__$1 = (function (){var statearr_21529 = state_21518;(statearr_21529[8] = inst_21511);
return statearr_21529;
})();var statearr_21530_21548 = state_21518__$1;(statearr_21530_21548[2] = null);
(statearr_21530_21548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21519 === 11))
{var inst_21508 = (state_21518[2]);var state_21518__$1 = state_21518;var statearr_21531_21549 = state_21518__$1;(statearr_21531_21549[2] = inst_21508);
(statearr_21531_21549[1] = 10);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_21535 = (new Array(9));(statearr_21535[0] = state_machine__13460__auto__);
(statearr_21535[1] = 1);
return statearr_21535;
});
var state_machine__13460__auto____1 = (function (state_21518){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_21518);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e21536){if((e21536 instanceof Object))
{var ex__13463__auto__ = e21536;var statearr_21537_21550 = state_21518;(statearr_21537_21550[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21551 = state_21518;
state_21518 = G__21551;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_21518){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_21518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_21538 = f__13588__auto__.call(null);(statearr_21538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___21539);
return statearr_21538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13587__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_21703){var state_val_21704 = (state_21703[1]);if((state_val_21704 === 1))
{var state_21703__$1 = state_21703;var statearr_21705_21742 = state_21703__$1;(statearr_21705_21742[2] = null);
(statearr_21705_21742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 2))
{var state_21703__$1 = state_21703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21703__$1,4,in$);
} else
{if((state_val_21704 === 3))
{var inst_21701 = (state_21703[2]);var state_21703__$1 = state_21703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21703__$1,inst_21701);
} else
{if((state_val_21704 === 4))
{var inst_21649 = (state_21703[7]);var inst_21649__$1 = (state_21703[2]);var inst_21650 = (inst_21649__$1 == null);var state_21703__$1 = (function (){var statearr_21706 = state_21703;(statearr_21706[7] = inst_21649__$1);
return statearr_21706;
})();if(cljs.core.truth_(inst_21650))
{var statearr_21707_21743 = state_21703__$1;(statearr_21707_21743[1] = 5);
} else
{var statearr_21708_21744 = state_21703__$1;(statearr_21708_21744[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 5))
{var inst_21652 = cljs.core.async.close_BANG_.call(null,out);var state_21703__$1 = state_21703;var statearr_21709_21745 = state_21703__$1;(statearr_21709_21745[2] = inst_21652);
(statearr_21709_21745[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 6))
{var inst_21649 = (state_21703[7]);var inst_21654 = f.call(null,inst_21649);var inst_21659 = cljs.core.seq.call(null,inst_21654);var inst_21660 = inst_21659;var inst_21661 = null;var inst_21662 = 0;var inst_21663 = 0;var state_21703__$1 = (function (){var statearr_21710 = state_21703;(statearr_21710[8] = inst_21663);
(statearr_21710[9] = inst_21662);
(statearr_21710[10] = inst_21661);
(statearr_21710[11] = inst_21660);
return statearr_21710;
})();var statearr_21711_21746 = state_21703__$1;(statearr_21711_21746[2] = null);
(statearr_21711_21746[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 7))
{var inst_21699 = (state_21703[2]);var state_21703__$1 = state_21703;var statearr_21712_21747 = state_21703__$1;(statearr_21712_21747[2] = inst_21699);
(statearr_21712_21747[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 8))
{var inst_21663 = (state_21703[8]);var inst_21662 = (state_21703[9]);var inst_21665 = (inst_21663 < inst_21662);var inst_21666 = inst_21665;var state_21703__$1 = state_21703;if(cljs.core.truth_(inst_21666))
{var statearr_21713_21748 = state_21703__$1;(statearr_21713_21748[1] = 10);
} else
{var statearr_21714_21749 = state_21703__$1;(statearr_21714_21749[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 9))
{var inst_21696 = (state_21703[2]);var state_21703__$1 = (function (){var statearr_21715 = state_21703;(statearr_21715[12] = inst_21696);
return statearr_21715;
})();var statearr_21716_21750 = state_21703__$1;(statearr_21716_21750[2] = null);
(statearr_21716_21750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 10))
{var inst_21663 = (state_21703[8]);var inst_21661 = (state_21703[10]);var inst_21668 = cljs.core._nth.call(null,inst_21661,inst_21663);var state_21703__$1 = state_21703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21703__$1,13,out,inst_21668);
} else
{if((state_val_21704 === 11))
{var inst_21660 = (state_21703[11]);var inst_21674 = (state_21703[13]);var inst_21674__$1 = cljs.core.seq.call(null,inst_21660);var state_21703__$1 = (function (){var statearr_21720 = state_21703;(statearr_21720[13] = inst_21674__$1);
return statearr_21720;
})();if(inst_21674__$1)
{var statearr_21721_21751 = state_21703__$1;(statearr_21721_21751[1] = 14);
} else
{var statearr_21722_21752 = state_21703__$1;(statearr_21722_21752[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 12))
{var inst_21694 = (state_21703[2]);var state_21703__$1 = state_21703;var statearr_21723_21753 = state_21703__$1;(statearr_21723_21753[2] = inst_21694);
(statearr_21723_21753[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 13))
{var inst_21663 = (state_21703[8]);var inst_21662 = (state_21703[9]);var inst_21661 = (state_21703[10]);var inst_21660 = (state_21703[11]);var inst_21670 = (state_21703[2]);var inst_21671 = (inst_21663 + 1);var tmp21717 = inst_21662;var tmp21718 = inst_21661;var tmp21719 = inst_21660;var inst_21660__$1 = tmp21719;var inst_21661__$1 = tmp21718;var inst_21662__$1 = tmp21717;var inst_21663__$1 = inst_21671;var state_21703__$1 = (function (){var statearr_21724 = state_21703;(statearr_21724[8] = inst_21663__$1);
(statearr_21724[9] = inst_21662__$1);
(statearr_21724[10] = inst_21661__$1);
(statearr_21724[11] = inst_21660__$1);
(statearr_21724[14] = inst_21670);
return statearr_21724;
})();var statearr_21725_21754 = state_21703__$1;(statearr_21725_21754[2] = null);
(statearr_21725_21754[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 14))
{var inst_21674 = (state_21703[13]);var inst_21676 = cljs.core.chunked_seq_QMARK_.call(null,inst_21674);var state_21703__$1 = state_21703;if(inst_21676)
{var statearr_21726_21755 = state_21703__$1;(statearr_21726_21755[1] = 17);
} else
{var statearr_21727_21756 = state_21703__$1;(statearr_21727_21756[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 15))
{var state_21703__$1 = state_21703;var statearr_21728_21757 = state_21703__$1;(statearr_21728_21757[2] = null);
(statearr_21728_21757[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 16))
{var inst_21692 = (state_21703[2]);var state_21703__$1 = state_21703;var statearr_21729_21758 = state_21703__$1;(statearr_21729_21758[2] = inst_21692);
(statearr_21729_21758[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 17))
{var inst_21674 = (state_21703[13]);var inst_21678 = cljs.core.chunk_first.call(null,inst_21674);var inst_21679 = cljs.core.chunk_rest.call(null,inst_21674);var inst_21680 = cljs.core.count.call(null,inst_21678);var inst_21660 = inst_21679;var inst_21661 = inst_21678;var inst_21662 = inst_21680;var inst_21663 = 0;var state_21703__$1 = (function (){var statearr_21730 = state_21703;(statearr_21730[8] = inst_21663);
(statearr_21730[9] = inst_21662);
(statearr_21730[10] = inst_21661);
(statearr_21730[11] = inst_21660);
return statearr_21730;
})();var statearr_21731_21759 = state_21703__$1;(statearr_21731_21759[2] = null);
(statearr_21731_21759[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 18))
{var inst_21674 = (state_21703[13]);var inst_21683 = cljs.core.first.call(null,inst_21674);var state_21703__$1 = state_21703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21703__$1,20,out,inst_21683);
} else
{if((state_val_21704 === 19))
{var inst_21689 = (state_21703[2]);var state_21703__$1 = state_21703;var statearr_21732_21760 = state_21703__$1;(statearr_21732_21760[2] = inst_21689);
(statearr_21732_21760[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21704 === 20))
{var inst_21674 = (state_21703[13]);var inst_21685 = (state_21703[2]);var inst_21686 = cljs.core.next.call(null,inst_21674);var inst_21660 = inst_21686;var inst_21661 = null;var inst_21662 = 0;var inst_21663 = 0;var state_21703__$1 = (function (){var statearr_21733 = state_21703;(statearr_21733[8] = inst_21663);
(statearr_21733[9] = inst_21662);
(statearr_21733[10] = inst_21661);
(statearr_21733[11] = inst_21660);
(statearr_21733[15] = inst_21685);
return statearr_21733;
})();var statearr_21734_21761 = state_21703__$1;(statearr_21734_21761[2] = null);
(statearr_21734_21761[1] = 8);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_21738 = (new Array(16));(statearr_21738[0] = state_machine__13460__auto__);
(statearr_21738[1] = 1);
return statearr_21738;
});
var state_machine__13460__auto____1 = (function (state_21703){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_21703);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e21739){if((e21739 instanceof Object))
{var ex__13463__auto__ = e21739;var statearr_21740_21762 = state_21703;(statearr_21740_21762[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21703);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21763 = state_21703;
state_21703 = G__21763;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_21703){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_21703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_21741 = f__13588__auto__.call(null);(statearr_21741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto__);
return statearr_21741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
}));
return c__13587__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13587__auto___21844 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_21823){var state_val_21824 = (state_21823[1]);if((state_val_21824 === 1))
{var state_21823__$1 = state_21823;var statearr_21825_21845 = state_21823__$1;(statearr_21825_21845[2] = null);
(statearr_21825_21845[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21824 === 2))
{var state_21823__$1 = state_21823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21823__$1,4,from);
} else
{if((state_val_21824 === 3))
{var inst_21821 = (state_21823[2]);var state_21823__$1 = state_21823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21823__$1,inst_21821);
} else
{if((state_val_21824 === 4))
{var inst_21806 = (state_21823[7]);var inst_21806__$1 = (state_21823[2]);var inst_21807 = (inst_21806__$1 == null);var state_21823__$1 = (function (){var statearr_21826 = state_21823;(statearr_21826[7] = inst_21806__$1);
return statearr_21826;
})();if(cljs.core.truth_(inst_21807))
{var statearr_21827_21846 = state_21823__$1;(statearr_21827_21846[1] = 5);
} else
{var statearr_21828_21847 = state_21823__$1;(statearr_21828_21847[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21824 === 5))
{var state_21823__$1 = state_21823;if(cljs.core.truth_(close_QMARK_))
{var statearr_21829_21848 = state_21823__$1;(statearr_21829_21848[1] = 8);
} else
{var statearr_21830_21849 = state_21823__$1;(statearr_21830_21849[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21824 === 6))
{var inst_21806 = (state_21823[7]);var state_21823__$1 = state_21823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21823__$1,11,to,inst_21806);
} else
{if((state_val_21824 === 7))
{var inst_21819 = (state_21823[2]);var state_21823__$1 = state_21823;var statearr_21831_21850 = state_21823__$1;(statearr_21831_21850[2] = inst_21819);
(statearr_21831_21850[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21824 === 8))
{var inst_21810 = cljs.core.async.close_BANG_.call(null,to);var state_21823__$1 = state_21823;var statearr_21832_21851 = state_21823__$1;(statearr_21832_21851[2] = inst_21810);
(statearr_21832_21851[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21824 === 9))
{var state_21823__$1 = state_21823;var statearr_21833_21852 = state_21823__$1;(statearr_21833_21852[2] = null);
(statearr_21833_21852[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21824 === 10))
{var inst_21813 = (state_21823[2]);var state_21823__$1 = state_21823;var statearr_21834_21853 = state_21823__$1;(statearr_21834_21853[2] = inst_21813);
(statearr_21834_21853[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21824 === 11))
{var inst_21816 = (state_21823[2]);var state_21823__$1 = (function (){var statearr_21835 = state_21823;(statearr_21835[8] = inst_21816);
return statearr_21835;
})();var statearr_21836_21854 = state_21823__$1;(statearr_21836_21854[2] = null);
(statearr_21836_21854[1] = 2);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_21840 = (new Array(9));(statearr_21840[0] = state_machine__13460__auto__);
(statearr_21840[1] = 1);
return statearr_21840;
});
var state_machine__13460__auto____1 = (function (state_21823){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_21823);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e21841){if((e21841 instanceof Object))
{var ex__13463__auto__ = e21841;var statearr_21842_21855 = state_21823;(statearr_21842_21855[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21856 = state_21823;
state_21823 = G__21856;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_21823){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_21823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_21843 = f__13588__auto__.call(null);(statearr_21843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___21844);
return statearr_21843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13587__auto___21943 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_21921){var state_val_21922 = (state_21921[1]);if((state_val_21922 === 1))
{var state_21921__$1 = state_21921;var statearr_21923_21944 = state_21921__$1;(statearr_21923_21944[2] = null);
(statearr_21923_21944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21922 === 2))
{var state_21921__$1 = state_21921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21921__$1,4,ch);
} else
{if((state_val_21922 === 3))
{var inst_21919 = (state_21921[2]);var state_21921__$1 = state_21921;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21921__$1,inst_21919);
} else
{if((state_val_21922 === 4))
{var inst_21902 = (state_21921[7]);var inst_21902__$1 = (state_21921[2]);var inst_21903 = (inst_21902__$1 == null);var state_21921__$1 = (function (){var statearr_21924 = state_21921;(statearr_21924[7] = inst_21902__$1);
return statearr_21924;
})();if(cljs.core.truth_(inst_21903))
{var statearr_21925_21945 = state_21921__$1;(statearr_21925_21945[1] = 5);
} else
{var statearr_21926_21946 = state_21921__$1;(statearr_21926_21946[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21922 === 5))
{var inst_21905 = cljs.core.async.close_BANG_.call(null,tc);var inst_21906 = cljs.core.async.close_BANG_.call(null,fc);var state_21921__$1 = (function (){var statearr_21927 = state_21921;(statearr_21927[8] = inst_21905);
return statearr_21927;
})();var statearr_21928_21947 = state_21921__$1;(statearr_21928_21947[2] = inst_21906);
(statearr_21928_21947[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21922 === 6))
{var inst_21902 = (state_21921[7]);var inst_21908 = p.call(null,inst_21902);var state_21921__$1 = state_21921;if(cljs.core.truth_(inst_21908))
{var statearr_21929_21948 = state_21921__$1;(statearr_21929_21948[1] = 9);
} else
{var statearr_21930_21949 = state_21921__$1;(statearr_21930_21949[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21922 === 7))
{var inst_21917 = (state_21921[2]);var state_21921__$1 = state_21921;var statearr_21931_21950 = state_21921__$1;(statearr_21931_21950[2] = inst_21917);
(statearr_21931_21950[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21922 === 8))
{var inst_21914 = (state_21921[2]);var state_21921__$1 = (function (){var statearr_21932 = state_21921;(statearr_21932[9] = inst_21914);
return statearr_21932;
})();var statearr_21933_21951 = state_21921__$1;(statearr_21933_21951[2] = null);
(statearr_21933_21951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21922 === 9))
{var state_21921__$1 = state_21921;var statearr_21934_21952 = state_21921__$1;(statearr_21934_21952[2] = tc);
(statearr_21934_21952[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21922 === 10))
{var state_21921__$1 = state_21921;var statearr_21935_21953 = state_21921__$1;(statearr_21935_21953[2] = fc);
(statearr_21935_21953[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21922 === 11))
{var inst_21902 = (state_21921[7]);var inst_21912 = (state_21921[2]);var state_21921__$1 = state_21921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21921__$1,8,inst_21912,inst_21902);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_21939 = (new Array(10));(statearr_21939[0] = state_machine__13460__auto__);
(statearr_21939[1] = 1);
return statearr_21939;
});
var state_machine__13460__auto____1 = (function (state_21921){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_21921);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e21940){if((e21940 instanceof Object))
{var ex__13463__auto__ = e21940;var statearr_21941_21954 = state_21921;(statearr_21941_21954[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21921);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21955 = state_21921;
state_21921 = G__21955;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_21921){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_21921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_21942 = f__13588__auto__.call(null);(statearr_21942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___21943);
return statearr_21942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13587__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_22002){var state_val_22003 = (state_22002[1]);if((state_val_22003 === 7))
{var inst_21998 = (state_22002[2]);var state_22002__$1 = state_22002;var statearr_22004_22020 = state_22002__$1;(statearr_22004_22020[2] = inst_21998);
(statearr_22004_22020[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22003 === 6))
{var inst_21988 = (state_22002[7]);var inst_21991 = (state_22002[8]);var inst_21995 = f.call(null,inst_21988,inst_21991);var inst_21988__$1 = inst_21995;var state_22002__$1 = (function (){var statearr_22005 = state_22002;(statearr_22005[7] = inst_21988__$1);
return statearr_22005;
})();var statearr_22006_22021 = state_22002__$1;(statearr_22006_22021[2] = null);
(statearr_22006_22021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22003 === 5))
{var inst_21988 = (state_22002[7]);var state_22002__$1 = state_22002;var statearr_22007_22022 = state_22002__$1;(statearr_22007_22022[2] = inst_21988);
(statearr_22007_22022[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22003 === 4))
{var inst_21991 = (state_22002[8]);var inst_21991__$1 = (state_22002[2]);var inst_21992 = (inst_21991__$1 == null);var state_22002__$1 = (function (){var statearr_22008 = state_22002;(statearr_22008[8] = inst_21991__$1);
return statearr_22008;
})();if(cljs.core.truth_(inst_21992))
{var statearr_22009_22023 = state_22002__$1;(statearr_22009_22023[1] = 5);
} else
{var statearr_22010_22024 = state_22002__$1;(statearr_22010_22024[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22003 === 3))
{var inst_22000 = (state_22002[2]);var state_22002__$1 = state_22002;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22002__$1,inst_22000);
} else
{if((state_val_22003 === 2))
{var state_22002__$1 = state_22002;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22002__$1,4,ch);
} else
{if((state_val_22003 === 1))
{var inst_21988 = init;var state_22002__$1 = (function (){var statearr_22011 = state_22002;(statearr_22011[7] = inst_21988);
return statearr_22011;
})();var statearr_22012_22025 = state_22002__$1;(statearr_22012_22025[2] = null);
(statearr_22012_22025[1] = 2);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_22016 = (new Array(9));(statearr_22016[0] = state_machine__13460__auto__);
(statearr_22016[1] = 1);
return statearr_22016;
});
var state_machine__13460__auto____1 = (function (state_22002){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_22002);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e22017){if((e22017 instanceof Object))
{var ex__13463__auto__ = e22017;var statearr_22018_22026 = state_22002;(statearr_22018_22026[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22002);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22027 = state_22002;
state_22002 = G__22027;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_22002){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_22002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_22019 = f__13588__auto__.call(null);(statearr_22019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto__);
return statearr_22019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
}));
return c__13587__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13587__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_22089){var state_val_22090 = (state_22089[1]);if((state_val_22090 === 1))
{var inst_22069 = cljs.core.seq.call(null,coll);var inst_22070 = inst_22069;var state_22089__$1 = (function (){var statearr_22091 = state_22089;(statearr_22091[7] = inst_22070);
return statearr_22091;
})();var statearr_22092_22110 = state_22089__$1;(statearr_22092_22110[2] = null);
(statearr_22092_22110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22090 === 2))
{var inst_22070 = (state_22089[7]);var state_22089__$1 = state_22089;if(cljs.core.truth_(inst_22070))
{var statearr_22093_22111 = state_22089__$1;(statearr_22093_22111[1] = 4);
} else
{var statearr_22094_22112 = state_22089__$1;(statearr_22094_22112[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22090 === 3))
{var inst_22087 = (state_22089[2]);var state_22089__$1 = state_22089;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22089__$1,inst_22087);
} else
{if((state_val_22090 === 4))
{var inst_22070 = (state_22089[7]);var inst_22073 = cljs.core.first.call(null,inst_22070);var state_22089__$1 = state_22089;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22089__$1,7,ch,inst_22073);
} else
{if((state_val_22090 === 5))
{var state_22089__$1 = state_22089;if(cljs.core.truth_(close_QMARK_))
{var statearr_22095_22113 = state_22089__$1;(statearr_22095_22113[1] = 8);
} else
{var statearr_22096_22114 = state_22089__$1;(statearr_22096_22114[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22090 === 6))
{var inst_22085 = (state_22089[2]);var state_22089__$1 = state_22089;var statearr_22097_22115 = state_22089__$1;(statearr_22097_22115[2] = inst_22085);
(statearr_22097_22115[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22090 === 7))
{var inst_22070 = (state_22089[7]);var inst_22075 = (state_22089[2]);var inst_22076 = cljs.core.next.call(null,inst_22070);var inst_22070__$1 = inst_22076;var state_22089__$1 = (function (){var statearr_22098 = state_22089;(statearr_22098[8] = inst_22075);
(statearr_22098[7] = inst_22070__$1);
return statearr_22098;
})();var statearr_22099_22116 = state_22089__$1;(statearr_22099_22116[2] = null);
(statearr_22099_22116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22090 === 8))
{var inst_22080 = cljs.core.async.close_BANG_.call(null,ch);var state_22089__$1 = state_22089;var statearr_22100_22117 = state_22089__$1;(statearr_22100_22117[2] = inst_22080);
(statearr_22100_22117[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22090 === 9))
{var state_22089__$1 = state_22089;var statearr_22101_22118 = state_22089__$1;(statearr_22101_22118[2] = null);
(statearr_22101_22118[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22090 === 10))
{var inst_22083 = (state_22089[2]);var state_22089__$1 = state_22089;var statearr_22102_22119 = state_22089__$1;(statearr_22102_22119[2] = inst_22083);
(statearr_22102_22119[1] = 6);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_22106 = (new Array(9));(statearr_22106[0] = state_machine__13460__auto__);
(statearr_22106[1] = 1);
return statearr_22106;
});
var state_machine__13460__auto____1 = (function (state_22089){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_22089);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e22107){if((e22107 instanceof Object))
{var ex__13463__auto__ = e22107;var statearr_22108_22120 = state_22089;(statearr_22108_22120[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22089);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22121 = state_22089;
state_22089 = G__22121;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_22089){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_22089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_22109 = f__13588__auto__.call(null);(statearr_22109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto__);
return statearr_22109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
}));
return c__13587__auto__;
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
cljs.core.async.Mux = (function (){var obj22123 = {};return obj22123;
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
cljs.core.async.Mult = (function (){var obj22125 = {};return obj22125;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22349 = (function (cs,ch,mult,meta22350){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22350 = meta22350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22349.cljs$lang$type = true;
cljs.core.async.t22349.cljs$lang$ctorStr = "cljs.core.async/t22349";
cljs.core.async.t22349.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t22349");
});})(cs))
;
cljs.core.async.t22349.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22349.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22349.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22349.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22349.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22351){var self__ = this;
var _22351__$1 = this;return self__.meta22350;
});})(cs))
;
cljs.core.async.t22349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22351,meta22350__$1){var self__ = this;
var _22351__$1 = this;return (new cljs.core.async.t22349(self__.cs,self__.ch,self__.mult,meta22350__$1));
});})(cs))
;
cljs.core.async.__GT_t22349 = ((function (cs){
return (function __GT_t22349(cs__$1,ch__$1,mult__$1,meta22350){return (new cljs.core.async.t22349(cs__$1,ch__$1,mult__$1,meta22350));
});})(cs))
;
}
return (new cljs.core.async.t22349(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13587__auto___22572 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_22486){var state_val_22487 = (state_22486[1]);if((state_val_22487 === 32))
{var inst_22354 = (state_22486[7]);var inst_22430 = (state_22486[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22486,31,Object,null,30);var inst_22437 = cljs.core.async.put_BANG_.call(null,inst_22430,inst_22354,done);var state_22486__$1 = state_22486;var statearr_22488_22573 = state_22486__$1;(statearr_22488_22573[2] = inst_22437);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22486__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 1))
{var state_22486__$1 = state_22486;var statearr_22489_22574 = state_22486__$1;(statearr_22489_22574[2] = null);
(statearr_22489_22574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 33))
{var inst_22443 = (state_22486[9]);var inst_22445 = cljs.core.chunked_seq_QMARK_.call(null,inst_22443);var state_22486__$1 = state_22486;if(inst_22445)
{var statearr_22490_22575 = state_22486__$1;(statearr_22490_22575[1] = 36);
} else
{var statearr_22491_22576 = state_22486__$1;(statearr_22491_22576[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 2))
{var state_22486__$1 = state_22486;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22486__$1,4,ch);
} else
{if((state_val_22487 === 34))
{var state_22486__$1 = state_22486;var statearr_22492_22577 = state_22486__$1;(statearr_22492_22577[2] = null);
(statearr_22492_22577[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 3))
{var inst_22484 = (state_22486[2]);var state_22486__$1 = state_22486;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22486__$1,inst_22484);
} else
{if((state_val_22487 === 35))
{var inst_22468 = (state_22486[2]);var state_22486__$1 = state_22486;var statearr_22493_22578 = state_22486__$1;(statearr_22493_22578[2] = inst_22468);
(statearr_22493_22578[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 4))
{var inst_22354 = (state_22486[7]);var inst_22354__$1 = (state_22486[2]);var inst_22355 = (inst_22354__$1 == null);var state_22486__$1 = (function (){var statearr_22494 = state_22486;(statearr_22494[7] = inst_22354__$1);
return statearr_22494;
})();if(cljs.core.truth_(inst_22355))
{var statearr_22495_22579 = state_22486__$1;(statearr_22495_22579[1] = 5);
} else
{var statearr_22496_22580 = state_22486__$1;(statearr_22496_22580[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 36))
{var inst_22443 = (state_22486[9]);var inst_22447 = cljs.core.chunk_first.call(null,inst_22443);var inst_22448 = cljs.core.chunk_rest.call(null,inst_22443);var inst_22449 = cljs.core.count.call(null,inst_22447);var inst_22422 = inst_22448;var inst_22423 = inst_22447;var inst_22424 = inst_22449;var inst_22425 = 0;var state_22486__$1 = (function (){var statearr_22497 = state_22486;(statearr_22497[10] = inst_22423);
(statearr_22497[11] = inst_22424);
(statearr_22497[12] = inst_22425);
(statearr_22497[13] = inst_22422);
return statearr_22497;
})();var statearr_22498_22581 = state_22486__$1;(statearr_22498_22581[2] = null);
(statearr_22498_22581[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 5))
{var inst_22361 = cljs.core.deref.call(null,cs);var inst_22362 = cljs.core.seq.call(null,inst_22361);var inst_22363 = inst_22362;var inst_22364 = null;var inst_22365 = 0;var inst_22366 = 0;var state_22486__$1 = (function (){var statearr_22499 = state_22486;(statearr_22499[14] = inst_22363);
(statearr_22499[15] = inst_22366);
(statearr_22499[16] = inst_22365);
(statearr_22499[17] = inst_22364);
return statearr_22499;
})();var statearr_22500_22582 = state_22486__$1;(statearr_22500_22582[2] = null);
(statearr_22500_22582[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 37))
{var inst_22443 = (state_22486[9]);var inst_22452 = cljs.core.first.call(null,inst_22443);var state_22486__$1 = (function (){var statearr_22501 = state_22486;(statearr_22501[18] = inst_22452);
return statearr_22501;
})();var statearr_22502_22583 = state_22486__$1;(statearr_22502_22583[2] = null);
(statearr_22502_22583[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 6))
{var inst_22414 = (state_22486[19]);var inst_22413 = cljs.core.deref.call(null,cs);var inst_22414__$1 = cljs.core.keys.call(null,inst_22413);var inst_22415 = cljs.core.count.call(null,inst_22414__$1);var inst_22416 = cljs.core.reset_BANG_.call(null,dctr,inst_22415);var inst_22421 = cljs.core.seq.call(null,inst_22414__$1);var inst_22422 = inst_22421;var inst_22423 = null;var inst_22424 = 0;var inst_22425 = 0;var state_22486__$1 = (function (){var statearr_22503 = state_22486;(statearr_22503[10] = inst_22423);
(statearr_22503[11] = inst_22424);
(statearr_22503[12] = inst_22425);
(statearr_22503[13] = inst_22422);
(statearr_22503[19] = inst_22414__$1);
(statearr_22503[20] = inst_22416);
return statearr_22503;
})();var statearr_22504_22584 = state_22486__$1;(statearr_22504_22584[2] = null);
(statearr_22504_22584[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 38))
{var inst_22465 = (state_22486[2]);var state_22486__$1 = state_22486;var statearr_22505_22585 = state_22486__$1;(statearr_22505_22585[2] = inst_22465);
(statearr_22505_22585[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 7))
{var inst_22482 = (state_22486[2]);var state_22486__$1 = state_22486;var statearr_22506_22586 = state_22486__$1;(statearr_22506_22586[2] = inst_22482);
(statearr_22506_22586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 39))
{var inst_22443 = (state_22486[9]);var inst_22461 = (state_22486[2]);var inst_22462 = cljs.core.next.call(null,inst_22443);var inst_22422 = inst_22462;var inst_22423 = null;var inst_22424 = 0;var inst_22425 = 0;var state_22486__$1 = (function (){var statearr_22507 = state_22486;(statearr_22507[21] = inst_22461);
(statearr_22507[10] = inst_22423);
(statearr_22507[11] = inst_22424);
(statearr_22507[12] = inst_22425);
(statearr_22507[13] = inst_22422);
return statearr_22507;
})();var statearr_22508_22587 = state_22486__$1;(statearr_22508_22587[2] = null);
(statearr_22508_22587[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 8))
{var inst_22366 = (state_22486[15]);var inst_22365 = (state_22486[16]);var inst_22368 = (inst_22366 < inst_22365);var inst_22369 = inst_22368;var state_22486__$1 = state_22486;if(cljs.core.truth_(inst_22369))
{var statearr_22509_22588 = state_22486__$1;(statearr_22509_22588[1] = 10);
} else
{var statearr_22510_22589 = state_22486__$1;(statearr_22510_22589[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 40))
{var inst_22452 = (state_22486[18]);var inst_22453 = (state_22486[2]);var inst_22454 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22455 = cljs.core.async.untap_STAR_.call(null,m,inst_22452);var state_22486__$1 = (function (){var statearr_22511 = state_22486;(statearr_22511[22] = inst_22454);
(statearr_22511[23] = inst_22453);
return statearr_22511;
})();var statearr_22512_22590 = state_22486__$1;(statearr_22512_22590[2] = inst_22455);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22486__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 9))
{var inst_22411 = (state_22486[2]);var state_22486__$1 = state_22486;var statearr_22513_22591 = state_22486__$1;(statearr_22513_22591[2] = inst_22411);
(statearr_22513_22591[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 41))
{var inst_22354 = (state_22486[7]);var inst_22452 = (state_22486[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22486,40,Object,null,39);var inst_22459 = cljs.core.async.put_BANG_.call(null,inst_22452,inst_22354,done);var state_22486__$1 = state_22486;var statearr_22514_22592 = state_22486__$1;(statearr_22514_22592[2] = inst_22459);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22486__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 10))
{var inst_22366 = (state_22486[15]);var inst_22364 = (state_22486[17]);var inst_22372 = cljs.core._nth.call(null,inst_22364,inst_22366);var inst_22373 = cljs.core.nth.call(null,inst_22372,0,null);var inst_22374 = cljs.core.nth.call(null,inst_22372,1,null);var state_22486__$1 = (function (){var statearr_22515 = state_22486;(statearr_22515[24] = inst_22373);
return statearr_22515;
})();if(cljs.core.truth_(inst_22374))
{var statearr_22516_22593 = state_22486__$1;(statearr_22516_22593[1] = 13);
} else
{var statearr_22517_22594 = state_22486__$1;(statearr_22517_22594[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 42))
{var state_22486__$1 = state_22486;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22486__$1,45,dchan);
} else
{if((state_val_22487 === 11))
{var inst_22383 = (state_22486[25]);var inst_22363 = (state_22486[14]);var inst_22383__$1 = cljs.core.seq.call(null,inst_22363);var state_22486__$1 = (function (){var statearr_22518 = state_22486;(statearr_22518[25] = inst_22383__$1);
return statearr_22518;
})();if(inst_22383__$1)
{var statearr_22519_22595 = state_22486__$1;(statearr_22519_22595[1] = 16);
} else
{var statearr_22520_22596 = state_22486__$1;(statearr_22520_22596[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 43))
{var state_22486__$1 = state_22486;var statearr_22521_22597 = state_22486__$1;(statearr_22521_22597[2] = null);
(statearr_22521_22597[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 12))
{var inst_22409 = (state_22486[2]);var state_22486__$1 = state_22486;var statearr_22522_22598 = state_22486__$1;(statearr_22522_22598[2] = inst_22409);
(statearr_22522_22598[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 44))
{var inst_22479 = (state_22486[2]);var state_22486__$1 = (function (){var statearr_22523 = state_22486;(statearr_22523[26] = inst_22479);
return statearr_22523;
})();var statearr_22524_22599 = state_22486__$1;(statearr_22524_22599[2] = null);
(statearr_22524_22599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 13))
{var inst_22373 = (state_22486[24]);var inst_22376 = cljs.core.async.close_BANG_.call(null,inst_22373);var state_22486__$1 = state_22486;var statearr_22525_22600 = state_22486__$1;(statearr_22525_22600[2] = inst_22376);
(statearr_22525_22600[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 45))
{var inst_22476 = (state_22486[2]);var state_22486__$1 = state_22486;var statearr_22529_22601 = state_22486__$1;(statearr_22529_22601[2] = inst_22476);
(statearr_22529_22601[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 14))
{var state_22486__$1 = state_22486;var statearr_22530_22602 = state_22486__$1;(statearr_22530_22602[2] = null);
(statearr_22530_22602[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 15))
{var inst_22363 = (state_22486[14]);var inst_22366 = (state_22486[15]);var inst_22365 = (state_22486[16]);var inst_22364 = (state_22486[17]);var inst_22379 = (state_22486[2]);var inst_22380 = (inst_22366 + 1);var tmp22526 = inst_22363;var tmp22527 = inst_22365;var tmp22528 = inst_22364;var inst_22363__$1 = tmp22526;var inst_22364__$1 = tmp22528;var inst_22365__$1 = tmp22527;var inst_22366__$1 = inst_22380;var state_22486__$1 = (function (){var statearr_22531 = state_22486;(statearr_22531[27] = inst_22379);
(statearr_22531[14] = inst_22363__$1);
(statearr_22531[15] = inst_22366__$1);
(statearr_22531[16] = inst_22365__$1);
(statearr_22531[17] = inst_22364__$1);
return statearr_22531;
})();var statearr_22532_22603 = state_22486__$1;(statearr_22532_22603[2] = null);
(statearr_22532_22603[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 16))
{var inst_22383 = (state_22486[25]);var inst_22385 = cljs.core.chunked_seq_QMARK_.call(null,inst_22383);var state_22486__$1 = state_22486;if(inst_22385)
{var statearr_22533_22604 = state_22486__$1;(statearr_22533_22604[1] = 19);
} else
{var statearr_22534_22605 = state_22486__$1;(statearr_22534_22605[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 17))
{var state_22486__$1 = state_22486;var statearr_22535_22606 = state_22486__$1;(statearr_22535_22606[2] = null);
(statearr_22535_22606[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 18))
{var inst_22407 = (state_22486[2]);var state_22486__$1 = state_22486;var statearr_22536_22607 = state_22486__$1;(statearr_22536_22607[2] = inst_22407);
(statearr_22536_22607[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 19))
{var inst_22383 = (state_22486[25]);var inst_22387 = cljs.core.chunk_first.call(null,inst_22383);var inst_22388 = cljs.core.chunk_rest.call(null,inst_22383);var inst_22389 = cljs.core.count.call(null,inst_22387);var inst_22363 = inst_22388;var inst_22364 = inst_22387;var inst_22365 = inst_22389;var inst_22366 = 0;var state_22486__$1 = (function (){var statearr_22537 = state_22486;(statearr_22537[14] = inst_22363);
(statearr_22537[15] = inst_22366);
(statearr_22537[16] = inst_22365);
(statearr_22537[17] = inst_22364);
return statearr_22537;
})();var statearr_22538_22608 = state_22486__$1;(statearr_22538_22608[2] = null);
(statearr_22538_22608[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 20))
{var inst_22383 = (state_22486[25]);var inst_22393 = cljs.core.first.call(null,inst_22383);var inst_22394 = cljs.core.nth.call(null,inst_22393,0,null);var inst_22395 = cljs.core.nth.call(null,inst_22393,1,null);var state_22486__$1 = (function (){var statearr_22539 = state_22486;(statearr_22539[28] = inst_22394);
return statearr_22539;
})();if(cljs.core.truth_(inst_22395))
{var statearr_22540_22609 = state_22486__$1;(statearr_22540_22609[1] = 22);
} else
{var statearr_22541_22610 = state_22486__$1;(statearr_22541_22610[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 21))
{var inst_22404 = (state_22486[2]);var state_22486__$1 = state_22486;var statearr_22542_22611 = state_22486__$1;(statearr_22542_22611[2] = inst_22404);
(statearr_22542_22611[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 22))
{var inst_22394 = (state_22486[28]);var inst_22397 = cljs.core.async.close_BANG_.call(null,inst_22394);var state_22486__$1 = state_22486;var statearr_22543_22612 = state_22486__$1;(statearr_22543_22612[2] = inst_22397);
(statearr_22543_22612[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 23))
{var state_22486__$1 = state_22486;var statearr_22544_22613 = state_22486__$1;(statearr_22544_22613[2] = null);
(statearr_22544_22613[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 24))
{var inst_22383 = (state_22486[25]);var inst_22400 = (state_22486[2]);var inst_22401 = cljs.core.next.call(null,inst_22383);var inst_22363 = inst_22401;var inst_22364 = null;var inst_22365 = 0;var inst_22366 = 0;var state_22486__$1 = (function (){var statearr_22545 = state_22486;(statearr_22545[14] = inst_22363);
(statearr_22545[29] = inst_22400);
(statearr_22545[15] = inst_22366);
(statearr_22545[16] = inst_22365);
(statearr_22545[17] = inst_22364);
return statearr_22545;
})();var statearr_22546_22614 = state_22486__$1;(statearr_22546_22614[2] = null);
(statearr_22546_22614[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 25))
{var inst_22424 = (state_22486[11]);var inst_22425 = (state_22486[12]);var inst_22427 = (inst_22425 < inst_22424);var inst_22428 = inst_22427;var state_22486__$1 = state_22486;if(cljs.core.truth_(inst_22428))
{var statearr_22547_22615 = state_22486__$1;(statearr_22547_22615[1] = 27);
} else
{var statearr_22548_22616 = state_22486__$1;(statearr_22548_22616[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 26))
{var inst_22414 = (state_22486[19]);var inst_22472 = (state_22486[2]);var inst_22473 = cljs.core.seq.call(null,inst_22414);var state_22486__$1 = (function (){var statearr_22549 = state_22486;(statearr_22549[30] = inst_22472);
return statearr_22549;
})();if(inst_22473)
{var statearr_22550_22617 = state_22486__$1;(statearr_22550_22617[1] = 42);
} else
{var statearr_22551_22618 = state_22486__$1;(statearr_22551_22618[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 27))
{var inst_22423 = (state_22486[10]);var inst_22425 = (state_22486[12]);var inst_22430 = cljs.core._nth.call(null,inst_22423,inst_22425);var state_22486__$1 = (function (){var statearr_22552 = state_22486;(statearr_22552[8] = inst_22430);
return statearr_22552;
})();var statearr_22553_22619 = state_22486__$1;(statearr_22553_22619[2] = null);
(statearr_22553_22619[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 28))
{var inst_22422 = (state_22486[13]);var inst_22443 = (state_22486[9]);var inst_22443__$1 = cljs.core.seq.call(null,inst_22422);var state_22486__$1 = (function (){var statearr_22557 = state_22486;(statearr_22557[9] = inst_22443__$1);
return statearr_22557;
})();if(inst_22443__$1)
{var statearr_22558_22620 = state_22486__$1;(statearr_22558_22620[1] = 33);
} else
{var statearr_22559_22621 = state_22486__$1;(statearr_22559_22621[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 29))
{var inst_22470 = (state_22486[2]);var state_22486__$1 = state_22486;var statearr_22560_22622 = state_22486__$1;(statearr_22560_22622[2] = inst_22470);
(statearr_22560_22622[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 30))
{var inst_22423 = (state_22486[10]);var inst_22424 = (state_22486[11]);var inst_22425 = (state_22486[12]);var inst_22422 = (state_22486[13]);var inst_22439 = (state_22486[2]);var inst_22440 = (inst_22425 + 1);var tmp22554 = inst_22423;var tmp22555 = inst_22424;var tmp22556 = inst_22422;var inst_22422__$1 = tmp22556;var inst_22423__$1 = tmp22554;var inst_22424__$1 = tmp22555;var inst_22425__$1 = inst_22440;var state_22486__$1 = (function (){var statearr_22561 = state_22486;(statearr_22561[31] = inst_22439);
(statearr_22561[10] = inst_22423__$1);
(statearr_22561[11] = inst_22424__$1);
(statearr_22561[12] = inst_22425__$1);
(statearr_22561[13] = inst_22422__$1);
return statearr_22561;
})();var statearr_22562_22623 = state_22486__$1;(statearr_22562_22623[2] = null);
(statearr_22562_22623[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22487 === 31))
{var inst_22430 = (state_22486[8]);var inst_22431 = (state_22486[2]);var inst_22432 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22433 = cljs.core.async.untap_STAR_.call(null,m,inst_22430);var state_22486__$1 = (function (){var statearr_22563 = state_22486;(statearr_22563[32] = inst_22432);
(statearr_22563[33] = inst_22431);
return statearr_22563;
})();var statearr_22564_22624 = state_22486__$1;(statearr_22564_22624[2] = inst_22433);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22486__$1);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_22568 = (new Array(34));(statearr_22568[0] = state_machine__13460__auto__);
(statearr_22568[1] = 1);
return statearr_22568;
});
var state_machine__13460__auto____1 = (function (state_22486){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_22486);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e22569){if((e22569 instanceof Object))
{var ex__13463__auto__ = e22569;var statearr_22570_22625 = state_22486;(statearr_22570_22625[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22486);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22626 = state_22486;
state_22486 = G__22626;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_22486){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_22486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_22571 = f__13588__auto__.call(null);(statearr_22571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___22572);
return statearr_22571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
cljs.core.async.Mix = (function (){var obj22628 = {};return obj22628;
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
;var m = (function (){if(typeof cljs.core.async.t22738 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22738 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22739){
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
this.meta22739 = meta22739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22738.cljs$lang$type = true;
cljs.core.async.t22738.cljs$lang$ctorStr = "cljs.core.async/t22738";
cljs.core.async.t22738.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t22738");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22738.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22738.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22738.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22738.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22738.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22738.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22738.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22740){var self__ = this;
var _22740__$1 = this;return self__.meta22739;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22740,meta22739__$1){var self__ = this;
var _22740__$1 = this;return (new cljs.core.async.t22738(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22739__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22738 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22738(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22739){return (new cljs.core.async.t22738(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22739));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22738(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13587__auto___22847 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_22805){var state_val_22806 = (state_22805[1]);if((state_val_22806 === 1))
{var inst_22744 = (state_22805[7]);var inst_22744__$1 = calc_state.call(null);var inst_22745 = cljs.core.seq_QMARK_.call(null,inst_22744__$1);var state_22805__$1 = (function (){var statearr_22807 = state_22805;(statearr_22807[7] = inst_22744__$1);
return statearr_22807;
})();if(inst_22745)
{var statearr_22808_22848 = state_22805__$1;(statearr_22808_22848[1] = 2);
} else
{var statearr_22809_22849 = state_22805__$1;(statearr_22809_22849[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 2))
{var inst_22744 = (state_22805[7]);var inst_22747 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22744);var state_22805__$1 = state_22805;var statearr_22810_22850 = state_22805__$1;(statearr_22810_22850[2] = inst_22747);
(statearr_22810_22850[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 3))
{var inst_22744 = (state_22805[7]);var state_22805__$1 = state_22805;var statearr_22811_22851 = state_22805__$1;(statearr_22811_22851[2] = inst_22744);
(statearr_22811_22851[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 4))
{var inst_22744 = (state_22805[7]);var inst_22750 = (state_22805[2]);var inst_22751 = cljs.core.get.call(null,inst_22750,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22752 = cljs.core.get.call(null,inst_22750,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22753 = cljs.core.get.call(null,inst_22750,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_22754 = inst_22744;var state_22805__$1 = (function (){var statearr_22812 = state_22805;(statearr_22812[8] = inst_22752);
(statearr_22812[9] = inst_22751);
(statearr_22812[10] = inst_22753);
(statearr_22812[11] = inst_22754);
return statearr_22812;
})();var statearr_22813_22852 = state_22805__$1;(statearr_22813_22852[2] = null);
(statearr_22813_22852[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 5))
{var inst_22754 = (state_22805[11]);var inst_22757 = cljs.core.seq_QMARK_.call(null,inst_22754);var state_22805__$1 = state_22805;if(inst_22757)
{var statearr_22814_22853 = state_22805__$1;(statearr_22814_22853[1] = 7);
} else
{var statearr_22815_22854 = state_22805__$1;(statearr_22815_22854[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 6))
{var inst_22803 = (state_22805[2]);var state_22805__$1 = state_22805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22805__$1,inst_22803);
} else
{if((state_val_22806 === 7))
{var inst_22754 = (state_22805[11]);var inst_22759 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22754);var state_22805__$1 = state_22805;var statearr_22816_22855 = state_22805__$1;(statearr_22816_22855[2] = inst_22759);
(statearr_22816_22855[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 8))
{var inst_22754 = (state_22805[11]);var state_22805__$1 = state_22805;var statearr_22817_22856 = state_22805__$1;(statearr_22817_22856[2] = inst_22754);
(statearr_22817_22856[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 9))
{var inst_22762 = (state_22805[12]);var inst_22762__$1 = (state_22805[2]);var inst_22763 = cljs.core.get.call(null,inst_22762__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22764 = cljs.core.get.call(null,inst_22762__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22765 = cljs.core.get.call(null,inst_22762__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_22805__$1 = (function (){var statearr_22818 = state_22805;(statearr_22818[13] = inst_22764);
(statearr_22818[14] = inst_22765);
(statearr_22818[12] = inst_22762__$1);
return statearr_22818;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22805__$1,10,inst_22763);
} else
{if((state_val_22806 === 10))
{var inst_22769 = (state_22805[15]);var inst_22770 = (state_22805[16]);var inst_22768 = (state_22805[2]);var inst_22769__$1 = cljs.core.nth.call(null,inst_22768,0,null);var inst_22770__$1 = cljs.core.nth.call(null,inst_22768,1,null);var inst_22771 = (inst_22769__$1 == null);var inst_22772 = cljs.core._EQ_.call(null,inst_22770__$1,change);var inst_22773 = (inst_22771) || (inst_22772);var state_22805__$1 = (function (){var statearr_22819 = state_22805;(statearr_22819[15] = inst_22769__$1);
(statearr_22819[16] = inst_22770__$1);
return statearr_22819;
})();if(cljs.core.truth_(inst_22773))
{var statearr_22820_22857 = state_22805__$1;(statearr_22820_22857[1] = 11);
} else
{var statearr_22821_22858 = state_22805__$1;(statearr_22821_22858[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 11))
{var inst_22769 = (state_22805[15]);var inst_22775 = (inst_22769 == null);var state_22805__$1 = state_22805;if(cljs.core.truth_(inst_22775))
{var statearr_22822_22859 = state_22805__$1;(statearr_22822_22859[1] = 14);
} else
{var statearr_22823_22860 = state_22805__$1;(statearr_22823_22860[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 12))
{var inst_22784 = (state_22805[17]);var inst_22765 = (state_22805[14]);var inst_22770 = (state_22805[16]);var inst_22784__$1 = inst_22765.call(null,inst_22770);var state_22805__$1 = (function (){var statearr_22824 = state_22805;(statearr_22824[17] = inst_22784__$1);
return statearr_22824;
})();if(cljs.core.truth_(inst_22784__$1))
{var statearr_22825_22861 = state_22805__$1;(statearr_22825_22861[1] = 17);
} else
{var statearr_22826_22862 = state_22805__$1;(statearr_22826_22862[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 13))
{var inst_22801 = (state_22805[2]);var state_22805__$1 = state_22805;var statearr_22827_22863 = state_22805__$1;(statearr_22827_22863[2] = inst_22801);
(statearr_22827_22863[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 14))
{var inst_22770 = (state_22805[16]);var inst_22777 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22770);var state_22805__$1 = state_22805;var statearr_22828_22864 = state_22805__$1;(statearr_22828_22864[2] = inst_22777);
(statearr_22828_22864[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 15))
{var state_22805__$1 = state_22805;var statearr_22829_22865 = state_22805__$1;(statearr_22829_22865[2] = null);
(statearr_22829_22865[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 16))
{var inst_22780 = (state_22805[2]);var inst_22781 = calc_state.call(null);var inst_22754 = inst_22781;var state_22805__$1 = (function (){var statearr_22830 = state_22805;(statearr_22830[18] = inst_22780);
(statearr_22830[11] = inst_22754);
return statearr_22830;
})();var statearr_22831_22866 = state_22805__$1;(statearr_22831_22866[2] = null);
(statearr_22831_22866[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 17))
{var inst_22784 = (state_22805[17]);var state_22805__$1 = state_22805;var statearr_22832_22867 = state_22805__$1;(statearr_22832_22867[2] = inst_22784);
(statearr_22832_22867[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 18))
{var inst_22764 = (state_22805[13]);var inst_22765 = (state_22805[14]);var inst_22770 = (state_22805[16]);var inst_22787 = cljs.core.empty_QMARK_.call(null,inst_22765);var inst_22788 = inst_22764.call(null,inst_22770);var inst_22789 = cljs.core.not.call(null,inst_22788);var inst_22790 = (inst_22787) && (inst_22789);var state_22805__$1 = state_22805;var statearr_22833_22868 = state_22805__$1;(statearr_22833_22868[2] = inst_22790);
(statearr_22833_22868[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 19))
{var inst_22792 = (state_22805[2]);var state_22805__$1 = state_22805;if(cljs.core.truth_(inst_22792))
{var statearr_22834_22869 = state_22805__$1;(statearr_22834_22869[1] = 20);
} else
{var statearr_22835_22870 = state_22805__$1;(statearr_22835_22870[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 20))
{var inst_22769 = (state_22805[15]);var state_22805__$1 = state_22805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22805__$1,23,out,inst_22769);
} else
{if((state_val_22806 === 21))
{var state_22805__$1 = state_22805;var statearr_22836_22871 = state_22805__$1;(statearr_22836_22871[2] = null);
(statearr_22836_22871[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 22))
{var inst_22762 = (state_22805[12]);var inst_22798 = (state_22805[2]);var inst_22754 = inst_22762;var state_22805__$1 = (function (){var statearr_22837 = state_22805;(statearr_22837[19] = inst_22798);
(statearr_22837[11] = inst_22754);
return statearr_22837;
})();var statearr_22838_22872 = state_22805__$1;(statearr_22838_22872[2] = null);
(statearr_22838_22872[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22806 === 23))
{var inst_22795 = (state_22805[2]);var state_22805__$1 = state_22805;var statearr_22839_22873 = state_22805__$1;(statearr_22839_22873[2] = inst_22795);
(statearr_22839_22873[1] = 22);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_22843 = (new Array(20));(statearr_22843[0] = state_machine__13460__auto__);
(statearr_22843[1] = 1);
return statearr_22843;
});
var state_machine__13460__auto____1 = (function (state_22805){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_22805);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e22844){if((e22844 instanceof Object))
{var ex__13463__auto__ = e22844;var statearr_22845_22874 = state_22805;(statearr_22845_22874[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22875 = state_22805;
state_22805 = G__22875;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_22805){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_22805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_22846 = f__13588__auto__.call(null);(statearr_22846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___22847);
return statearr_22846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
cljs.core.async.Pub = (function (){var obj22877 = {};return obj22877;
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
return (function (p1__22878_SHARP_){if(cljs.core.truth_(p1__22878_SHARP_.call(null,topic)))
{return p1__22878_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22878_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7828__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23003 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23004){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23004 = meta23004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23003.cljs$lang$type = true;
cljs.core.async.t23003.cljs$lang$ctorStr = "cljs.core.async/t23003";
cljs.core.async.t23003.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"cljs.core.async/t23003");
});})(mults,ensure_mult))
;
cljs.core.async.t23003.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23003.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23003.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23003.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23005){var self__ = this;
var _23005__$1 = this;return self__.meta23004;
});})(mults,ensure_mult))
;
cljs.core.async.t23003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23005,meta23004__$1){var self__ = this;
var _23005__$1 = this;return (new cljs.core.async.t23003(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23004__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23003 = ((function (mults,ensure_mult){
return (function __GT_t23003(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23004){return (new cljs.core.async.t23003(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23004));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23003(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13587__auto___23127 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_23079){var state_val_23080 = (state_23079[1]);if((state_val_23080 === 1))
{var state_23079__$1 = state_23079;var statearr_23081_23128 = state_23079__$1;(statearr_23081_23128[2] = null);
(statearr_23081_23128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 2))
{var state_23079__$1 = state_23079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23079__$1,4,ch);
} else
{if((state_val_23080 === 3))
{var inst_23077 = (state_23079[2]);var state_23079__$1 = state_23079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23079__$1,inst_23077);
} else
{if((state_val_23080 === 4))
{var inst_23008 = (state_23079[7]);var inst_23008__$1 = (state_23079[2]);var inst_23009 = (inst_23008__$1 == null);var state_23079__$1 = (function (){var statearr_23082 = state_23079;(statearr_23082[7] = inst_23008__$1);
return statearr_23082;
})();if(cljs.core.truth_(inst_23009))
{var statearr_23083_23129 = state_23079__$1;(statearr_23083_23129[1] = 5);
} else
{var statearr_23084_23130 = state_23079__$1;(statearr_23084_23130[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 5))
{var inst_23015 = cljs.core.deref.call(null,mults);var inst_23016 = cljs.core.vals.call(null,inst_23015);var inst_23017 = cljs.core.seq.call(null,inst_23016);var inst_23018 = inst_23017;var inst_23019 = null;var inst_23020 = 0;var inst_23021 = 0;var state_23079__$1 = (function (){var statearr_23085 = state_23079;(statearr_23085[8] = inst_23018);
(statearr_23085[9] = inst_23019);
(statearr_23085[10] = inst_23020);
(statearr_23085[11] = inst_23021);
return statearr_23085;
})();var statearr_23086_23131 = state_23079__$1;(statearr_23086_23131[2] = null);
(statearr_23086_23131[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 6))
{var inst_23056 = (state_23079[12]);var inst_23008 = (state_23079[7]);var inst_23058 = (state_23079[13]);var inst_23056__$1 = topic_fn.call(null,inst_23008);var inst_23057 = cljs.core.deref.call(null,mults);var inst_23058__$1 = cljs.core.get.call(null,inst_23057,inst_23056__$1);var state_23079__$1 = (function (){var statearr_23087 = state_23079;(statearr_23087[12] = inst_23056__$1);
(statearr_23087[13] = inst_23058__$1);
return statearr_23087;
})();if(cljs.core.truth_(inst_23058__$1))
{var statearr_23088_23132 = state_23079__$1;(statearr_23088_23132[1] = 19);
} else
{var statearr_23089_23133 = state_23079__$1;(statearr_23089_23133[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 7))
{var inst_23075 = (state_23079[2]);var state_23079__$1 = state_23079;var statearr_23090_23134 = state_23079__$1;(statearr_23090_23134[2] = inst_23075);
(statearr_23090_23134[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 8))
{var inst_23020 = (state_23079[10]);var inst_23021 = (state_23079[11]);var inst_23023 = (inst_23021 < inst_23020);var inst_23024 = inst_23023;var state_23079__$1 = state_23079;if(cljs.core.truth_(inst_23024))
{var statearr_23094_23135 = state_23079__$1;(statearr_23094_23135[1] = 10);
} else
{var statearr_23095_23136 = state_23079__$1;(statearr_23095_23136[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 9))
{var inst_23054 = (state_23079[2]);var state_23079__$1 = state_23079;var statearr_23096_23137 = state_23079__$1;(statearr_23096_23137[2] = inst_23054);
(statearr_23096_23137[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 10))
{var inst_23018 = (state_23079[8]);var inst_23019 = (state_23079[9]);var inst_23020 = (state_23079[10]);var inst_23021 = (state_23079[11]);var inst_23026 = cljs.core._nth.call(null,inst_23019,inst_23021);var inst_23027 = cljs.core.async.muxch_STAR_.call(null,inst_23026);var inst_23028 = cljs.core.async.close_BANG_.call(null,inst_23027);var inst_23029 = (inst_23021 + 1);var tmp23091 = inst_23018;var tmp23092 = inst_23019;var tmp23093 = inst_23020;var inst_23018__$1 = tmp23091;var inst_23019__$1 = tmp23092;var inst_23020__$1 = tmp23093;var inst_23021__$1 = inst_23029;var state_23079__$1 = (function (){var statearr_23097 = state_23079;(statearr_23097[14] = inst_23028);
(statearr_23097[8] = inst_23018__$1);
(statearr_23097[9] = inst_23019__$1);
(statearr_23097[10] = inst_23020__$1);
(statearr_23097[11] = inst_23021__$1);
return statearr_23097;
})();var statearr_23098_23138 = state_23079__$1;(statearr_23098_23138[2] = null);
(statearr_23098_23138[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 11))
{var inst_23032 = (state_23079[15]);var inst_23018 = (state_23079[8]);var inst_23032__$1 = cljs.core.seq.call(null,inst_23018);var state_23079__$1 = (function (){var statearr_23099 = state_23079;(statearr_23099[15] = inst_23032__$1);
return statearr_23099;
})();if(inst_23032__$1)
{var statearr_23100_23139 = state_23079__$1;(statearr_23100_23139[1] = 13);
} else
{var statearr_23101_23140 = state_23079__$1;(statearr_23101_23140[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 12))
{var inst_23052 = (state_23079[2]);var state_23079__$1 = state_23079;var statearr_23102_23141 = state_23079__$1;(statearr_23102_23141[2] = inst_23052);
(statearr_23102_23141[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 13))
{var inst_23032 = (state_23079[15]);var inst_23034 = cljs.core.chunked_seq_QMARK_.call(null,inst_23032);var state_23079__$1 = state_23079;if(inst_23034)
{var statearr_23103_23142 = state_23079__$1;(statearr_23103_23142[1] = 16);
} else
{var statearr_23104_23143 = state_23079__$1;(statearr_23104_23143[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 14))
{var state_23079__$1 = state_23079;var statearr_23105_23144 = state_23079__$1;(statearr_23105_23144[2] = null);
(statearr_23105_23144[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 15))
{var inst_23050 = (state_23079[2]);var state_23079__$1 = state_23079;var statearr_23106_23145 = state_23079__$1;(statearr_23106_23145[2] = inst_23050);
(statearr_23106_23145[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 16))
{var inst_23032 = (state_23079[15]);var inst_23036 = cljs.core.chunk_first.call(null,inst_23032);var inst_23037 = cljs.core.chunk_rest.call(null,inst_23032);var inst_23038 = cljs.core.count.call(null,inst_23036);var inst_23018 = inst_23037;var inst_23019 = inst_23036;var inst_23020 = inst_23038;var inst_23021 = 0;var state_23079__$1 = (function (){var statearr_23107 = state_23079;(statearr_23107[8] = inst_23018);
(statearr_23107[9] = inst_23019);
(statearr_23107[10] = inst_23020);
(statearr_23107[11] = inst_23021);
return statearr_23107;
})();var statearr_23108_23146 = state_23079__$1;(statearr_23108_23146[2] = null);
(statearr_23108_23146[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 17))
{var inst_23032 = (state_23079[15]);var inst_23041 = cljs.core.first.call(null,inst_23032);var inst_23042 = cljs.core.async.muxch_STAR_.call(null,inst_23041);var inst_23043 = cljs.core.async.close_BANG_.call(null,inst_23042);var inst_23044 = cljs.core.next.call(null,inst_23032);var inst_23018 = inst_23044;var inst_23019 = null;var inst_23020 = 0;var inst_23021 = 0;var state_23079__$1 = (function (){var statearr_23109 = state_23079;(statearr_23109[16] = inst_23043);
(statearr_23109[8] = inst_23018);
(statearr_23109[9] = inst_23019);
(statearr_23109[10] = inst_23020);
(statearr_23109[11] = inst_23021);
return statearr_23109;
})();var statearr_23110_23147 = state_23079__$1;(statearr_23110_23147[2] = null);
(statearr_23110_23147[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 18))
{var inst_23047 = (state_23079[2]);var state_23079__$1 = state_23079;var statearr_23111_23148 = state_23079__$1;(statearr_23111_23148[2] = inst_23047);
(statearr_23111_23148[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 19))
{var state_23079__$1 = state_23079;var statearr_23112_23149 = state_23079__$1;(statearr_23112_23149[2] = null);
(statearr_23112_23149[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 20))
{var state_23079__$1 = state_23079;var statearr_23113_23150 = state_23079__$1;(statearr_23113_23150[2] = null);
(statearr_23113_23150[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 21))
{var inst_23072 = (state_23079[2]);var state_23079__$1 = (function (){var statearr_23114 = state_23079;(statearr_23114[17] = inst_23072);
return statearr_23114;
})();var statearr_23115_23151 = state_23079__$1;(statearr_23115_23151[2] = null);
(statearr_23115_23151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 22))
{var inst_23069 = (state_23079[2]);var state_23079__$1 = state_23079;var statearr_23116_23152 = state_23079__$1;(statearr_23116_23152[2] = inst_23069);
(statearr_23116_23152[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 23))
{var inst_23056 = (state_23079[12]);var inst_23060 = (state_23079[2]);var inst_23061 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23056);var state_23079__$1 = (function (){var statearr_23117 = state_23079;(statearr_23117[18] = inst_23060);
return statearr_23117;
})();var statearr_23118_23153 = state_23079__$1;(statearr_23118_23153[2] = inst_23061);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23079__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23080 === 24))
{var inst_23008 = (state_23079[7]);var inst_23058 = (state_23079[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23079,23,Object,null,22);var inst_23065 = cljs.core.async.muxch_STAR_.call(null,inst_23058);var state_23079__$1 = state_23079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23079__$1,25,inst_23065,inst_23008);
} else
{if((state_val_23080 === 25))
{var inst_23067 = (state_23079[2]);var state_23079__$1 = state_23079;var statearr_23119_23154 = state_23079__$1;(statearr_23119_23154[2] = inst_23067);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23079__$1);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_23123 = (new Array(19));(statearr_23123[0] = state_machine__13460__auto__);
(statearr_23123[1] = 1);
return statearr_23123;
});
var state_machine__13460__auto____1 = (function (state_23079){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_23079);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e23124){if((e23124 instanceof Object))
{var ex__13463__auto__ = e23124;var statearr_23125_23155 = state_23079;(statearr_23125_23155[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23156 = state_23079;
state_23079 = G__23156;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_23079){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_23079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_23126 = f__13588__auto__.call(null);(statearr_23126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___23127);
return statearr_23126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
,cljs.core.range.call(null,cnt));var c__13587__auto___23293 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_23263){var state_val_23264 = (state_23263[1]);if((state_val_23264 === 1))
{var state_23263__$1 = state_23263;var statearr_23265_23294 = state_23263__$1;(statearr_23265_23294[2] = null);
(statearr_23265_23294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 2))
{var inst_23226 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23227 = 0;var state_23263__$1 = (function (){var statearr_23266 = state_23263;(statearr_23266[7] = inst_23226);
(statearr_23266[8] = inst_23227);
return statearr_23266;
})();var statearr_23267_23295 = state_23263__$1;(statearr_23267_23295[2] = null);
(statearr_23267_23295[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 3))
{var inst_23261 = (state_23263[2]);var state_23263__$1 = state_23263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23263__$1,inst_23261);
} else
{if((state_val_23264 === 4))
{var inst_23227 = (state_23263[8]);var inst_23229 = (inst_23227 < cnt);var state_23263__$1 = state_23263;if(cljs.core.truth_(inst_23229))
{var statearr_23268_23296 = state_23263__$1;(statearr_23268_23296[1] = 6);
} else
{var statearr_23269_23297 = state_23263__$1;(statearr_23269_23297[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 5))
{var inst_23247 = (state_23263[2]);var state_23263__$1 = (function (){var statearr_23270 = state_23263;(statearr_23270[9] = inst_23247);
return statearr_23270;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23263__$1,12,dchan);
} else
{if((state_val_23264 === 6))
{var state_23263__$1 = state_23263;var statearr_23271_23298 = state_23263__$1;(statearr_23271_23298[2] = null);
(statearr_23271_23298[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 7))
{var state_23263__$1 = state_23263;var statearr_23272_23299 = state_23263__$1;(statearr_23272_23299[2] = null);
(statearr_23272_23299[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 8))
{var inst_23245 = (state_23263[2]);var state_23263__$1 = state_23263;var statearr_23273_23300 = state_23263__$1;(statearr_23273_23300[2] = inst_23245);
(statearr_23273_23300[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 9))
{var inst_23227 = (state_23263[8]);var inst_23240 = (state_23263[2]);var inst_23241 = (inst_23227 + 1);var inst_23227__$1 = inst_23241;var state_23263__$1 = (function (){var statearr_23274 = state_23263;(statearr_23274[10] = inst_23240);
(statearr_23274[8] = inst_23227__$1);
return statearr_23274;
})();var statearr_23275_23301 = state_23263__$1;(statearr_23275_23301[2] = null);
(statearr_23275_23301[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 10))
{var inst_23231 = (state_23263[2]);var inst_23232 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23263__$1 = (function (){var statearr_23276 = state_23263;(statearr_23276[11] = inst_23231);
return statearr_23276;
})();var statearr_23277_23302 = state_23263__$1;(statearr_23277_23302[2] = inst_23232);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23263__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 11))
{var inst_23227 = (state_23263[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23263,10,Object,null,9);var inst_23236 = chs__$1.call(null,inst_23227);var inst_23237 = done.call(null,inst_23227);var inst_23238 = cljs.core.async.take_BANG_.call(null,inst_23236,inst_23237);var state_23263__$1 = state_23263;var statearr_23278_23303 = state_23263__$1;(statearr_23278_23303[2] = inst_23238);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23263__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 12))
{var inst_23249 = (state_23263[12]);var inst_23249__$1 = (state_23263[2]);var inst_23250 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23249__$1);var state_23263__$1 = (function (){var statearr_23279 = state_23263;(statearr_23279[12] = inst_23249__$1);
return statearr_23279;
})();if(cljs.core.truth_(inst_23250))
{var statearr_23280_23304 = state_23263__$1;(statearr_23280_23304[1] = 13);
} else
{var statearr_23281_23305 = state_23263__$1;(statearr_23281_23305[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 13))
{var inst_23252 = cljs.core.async.close_BANG_.call(null,out);var state_23263__$1 = state_23263;var statearr_23282_23306 = state_23263__$1;(statearr_23282_23306[2] = inst_23252);
(statearr_23282_23306[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 14))
{var inst_23249 = (state_23263[12]);var inst_23254 = cljs.core.apply.call(null,f,inst_23249);var state_23263__$1 = state_23263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23263__$1,16,out,inst_23254);
} else
{if((state_val_23264 === 15))
{var inst_23259 = (state_23263[2]);var state_23263__$1 = state_23263;var statearr_23283_23307 = state_23263__$1;(statearr_23283_23307[2] = inst_23259);
(statearr_23283_23307[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23264 === 16))
{var inst_23256 = (state_23263[2]);var state_23263__$1 = (function (){var statearr_23284 = state_23263;(statearr_23284[13] = inst_23256);
return statearr_23284;
})();var statearr_23285_23308 = state_23263__$1;(statearr_23285_23308[2] = null);
(statearr_23285_23308[1] = 2);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_23289 = (new Array(14));(statearr_23289[0] = state_machine__13460__auto__);
(statearr_23289[1] = 1);
return statearr_23289;
});
var state_machine__13460__auto____1 = (function (state_23263){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_23263);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e23290){if((e23290 instanceof Object))
{var ex__13463__auto__ = e23290;var statearr_23291_23309 = state_23263;(statearr_23291_23309[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23263);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23310 = state_23263;
state_23263 = G__23310;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_23263){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_23263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_23292 = f__13588__auto__.call(null);(statearr_23292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___23293);
return statearr_23292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13587__auto___23418 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_23394){var state_val_23395 = (state_23394[1]);if((state_val_23395 === 1))
{var inst_23365 = cljs.core.vec.call(null,chs);var inst_23366 = inst_23365;var state_23394__$1 = (function (){var statearr_23396 = state_23394;(statearr_23396[7] = inst_23366);
return statearr_23396;
})();var statearr_23397_23419 = state_23394__$1;(statearr_23397_23419[2] = null);
(statearr_23397_23419[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23395 === 2))
{var inst_23366 = (state_23394[7]);var inst_23368 = cljs.core.count.call(null,inst_23366);var inst_23369 = (inst_23368 > 0);var state_23394__$1 = state_23394;if(cljs.core.truth_(inst_23369))
{var statearr_23398_23420 = state_23394__$1;(statearr_23398_23420[1] = 4);
} else
{var statearr_23399_23421 = state_23394__$1;(statearr_23399_23421[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23395 === 3))
{var inst_23392 = (state_23394[2]);var state_23394__$1 = state_23394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23394__$1,inst_23392);
} else
{if((state_val_23395 === 4))
{var inst_23366 = (state_23394[7]);var state_23394__$1 = state_23394;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23394__$1,7,inst_23366);
} else
{if((state_val_23395 === 5))
{var inst_23388 = cljs.core.async.close_BANG_.call(null,out);var state_23394__$1 = state_23394;var statearr_23400_23422 = state_23394__$1;(statearr_23400_23422[2] = inst_23388);
(statearr_23400_23422[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23395 === 6))
{var inst_23390 = (state_23394[2]);var state_23394__$1 = state_23394;var statearr_23401_23423 = state_23394__$1;(statearr_23401_23423[2] = inst_23390);
(statearr_23401_23423[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23395 === 7))
{var inst_23374 = (state_23394[8]);var inst_23373 = (state_23394[9]);var inst_23373__$1 = (state_23394[2]);var inst_23374__$1 = cljs.core.nth.call(null,inst_23373__$1,0,null);var inst_23375 = cljs.core.nth.call(null,inst_23373__$1,1,null);var inst_23376 = (inst_23374__$1 == null);var state_23394__$1 = (function (){var statearr_23402 = state_23394;(statearr_23402[8] = inst_23374__$1);
(statearr_23402[10] = inst_23375);
(statearr_23402[9] = inst_23373__$1);
return statearr_23402;
})();if(cljs.core.truth_(inst_23376))
{var statearr_23403_23424 = state_23394__$1;(statearr_23403_23424[1] = 8);
} else
{var statearr_23404_23425 = state_23394__$1;(statearr_23404_23425[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23395 === 8))
{var inst_23366 = (state_23394[7]);var inst_23374 = (state_23394[8]);var inst_23375 = (state_23394[10]);var inst_23373 = (state_23394[9]);var inst_23378 = (function (){var c = inst_23375;var v = inst_23374;var vec__23371 = inst_23373;var cs = inst_23366;return ((function (c,v,vec__23371,cs,inst_23366,inst_23374,inst_23375,inst_23373,state_val_23395){
return (function (p1__23311_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23311_SHARP_);
});
;})(c,v,vec__23371,cs,inst_23366,inst_23374,inst_23375,inst_23373,state_val_23395))
})();var inst_23379 = cljs.core.filterv.call(null,inst_23378,inst_23366);var inst_23366__$1 = inst_23379;var state_23394__$1 = (function (){var statearr_23405 = state_23394;(statearr_23405[7] = inst_23366__$1);
return statearr_23405;
})();var statearr_23406_23426 = state_23394__$1;(statearr_23406_23426[2] = null);
(statearr_23406_23426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23395 === 9))
{var inst_23374 = (state_23394[8]);var state_23394__$1 = state_23394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23394__$1,11,out,inst_23374);
} else
{if((state_val_23395 === 10))
{var inst_23386 = (state_23394[2]);var state_23394__$1 = state_23394;var statearr_23408_23427 = state_23394__$1;(statearr_23408_23427[2] = inst_23386);
(statearr_23408_23427[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23395 === 11))
{var inst_23366 = (state_23394[7]);var inst_23383 = (state_23394[2]);var tmp23407 = inst_23366;var inst_23366__$1 = tmp23407;var state_23394__$1 = (function (){var statearr_23409 = state_23394;(statearr_23409[7] = inst_23366__$1);
(statearr_23409[11] = inst_23383);
return statearr_23409;
})();var statearr_23410_23428 = state_23394__$1;(statearr_23410_23428[2] = null);
(statearr_23410_23428[1] = 2);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_23414 = (new Array(12));(statearr_23414[0] = state_machine__13460__auto__);
(statearr_23414[1] = 1);
return statearr_23414;
});
var state_machine__13460__auto____1 = (function (state_23394){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_23394);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e23415){if((e23415 instanceof Object))
{var ex__13463__auto__ = e23415;var statearr_23416_23429 = state_23394;(statearr_23416_23429[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23394);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23430 = state_23394;
state_23394 = G__23430;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_23394){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_23394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_23417 = f__13588__auto__.call(null);(statearr_23417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___23418);
return statearr_23417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13587__auto___23523 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_23500){var state_val_23501 = (state_23500[1]);if((state_val_23501 === 1))
{var inst_23477 = 0;var state_23500__$1 = (function (){var statearr_23502 = state_23500;(statearr_23502[7] = inst_23477);
return statearr_23502;
})();var statearr_23503_23524 = state_23500__$1;(statearr_23503_23524[2] = null);
(statearr_23503_23524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23501 === 2))
{var inst_23477 = (state_23500[7]);var inst_23479 = (inst_23477 < n);var state_23500__$1 = state_23500;if(cljs.core.truth_(inst_23479))
{var statearr_23504_23525 = state_23500__$1;(statearr_23504_23525[1] = 4);
} else
{var statearr_23505_23526 = state_23500__$1;(statearr_23505_23526[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23501 === 3))
{var inst_23497 = (state_23500[2]);var inst_23498 = cljs.core.async.close_BANG_.call(null,out);var state_23500__$1 = (function (){var statearr_23506 = state_23500;(statearr_23506[8] = inst_23497);
return statearr_23506;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23500__$1,inst_23498);
} else
{if((state_val_23501 === 4))
{var state_23500__$1 = state_23500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23500__$1,7,ch);
} else
{if((state_val_23501 === 5))
{var state_23500__$1 = state_23500;var statearr_23507_23527 = state_23500__$1;(statearr_23507_23527[2] = null);
(statearr_23507_23527[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23501 === 6))
{var inst_23495 = (state_23500[2]);var state_23500__$1 = state_23500;var statearr_23508_23528 = state_23500__$1;(statearr_23508_23528[2] = inst_23495);
(statearr_23508_23528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23501 === 7))
{var inst_23482 = (state_23500[9]);var inst_23482__$1 = (state_23500[2]);var inst_23483 = (inst_23482__$1 == null);var inst_23484 = cljs.core.not.call(null,inst_23483);var state_23500__$1 = (function (){var statearr_23509 = state_23500;(statearr_23509[9] = inst_23482__$1);
return statearr_23509;
})();if(inst_23484)
{var statearr_23510_23529 = state_23500__$1;(statearr_23510_23529[1] = 8);
} else
{var statearr_23511_23530 = state_23500__$1;(statearr_23511_23530[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23501 === 8))
{var inst_23482 = (state_23500[9]);var state_23500__$1 = state_23500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23500__$1,11,out,inst_23482);
} else
{if((state_val_23501 === 9))
{var state_23500__$1 = state_23500;var statearr_23512_23531 = state_23500__$1;(statearr_23512_23531[2] = null);
(statearr_23512_23531[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23501 === 10))
{var inst_23492 = (state_23500[2]);var state_23500__$1 = state_23500;var statearr_23513_23532 = state_23500__$1;(statearr_23513_23532[2] = inst_23492);
(statearr_23513_23532[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23501 === 11))
{var inst_23477 = (state_23500[7]);var inst_23487 = (state_23500[2]);var inst_23488 = (inst_23477 + 1);var inst_23477__$1 = inst_23488;var state_23500__$1 = (function (){var statearr_23514 = state_23500;(statearr_23514[10] = inst_23487);
(statearr_23514[7] = inst_23477__$1);
return statearr_23514;
})();var statearr_23515_23533 = state_23500__$1;(statearr_23515_23533[2] = null);
(statearr_23515_23533[1] = 2);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_23519 = (new Array(11));(statearr_23519[0] = state_machine__13460__auto__);
(statearr_23519[1] = 1);
return statearr_23519;
});
var state_machine__13460__auto____1 = (function (state_23500){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_23500);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e23520){if((e23520 instanceof Object))
{var ex__13463__auto__ = e23520;var statearr_23521_23534 = state_23500;(statearr_23521_23534[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23535 = state_23500;
state_23500 = G__23535;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_23500){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_23500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_23522 = f__13588__auto__.call(null);(statearr_23522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___23523);
return statearr_23522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13587__auto___23632 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_23607){var state_val_23608 = (state_23607[1]);if((state_val_23608 === 1))
{var inst_23584 = null;var state_23607__$1 = (function (){var statearr_23609 = state_23607;(statearr_23609[7] = inst_23584);
return statearr_23609;
})();var statearr_23610_23633 = state_23607__$1;(statearr_23610_23633[2] = null);
(statearr_23610_23633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23608 === 2))
{var state_23607__$1 = state_23607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23607__$1,4,ch);
} else
{if((state_val_23608 === 3))
{var inst_23604 = (state_23607[2]);var inst_23605 = cljs.core.async.close_BANG_.call(null,out);var state_23607__$1 = (function (){var statearr_23611 = state_23607;(statearr_23611[8] = inst_23604);
return statearr_23611;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23607__$1,inst_23605);
} else
{if((state_val_23608 === 4))
{var inst_23587 = (state_23607[9]);var inst_23587__$1 = (state_23607[2]);var inst_23588 = (inst_23587__$1 == null);var inst_23589 = cljs.core.not.call(null,inst_23588);var state_23607__$1 = (function (){var statearr_23612 = state_23607;(statearr_23612[9] = inst_23587__$1);
return statearr_23612;
})();if(inst_23589)
{var statearr_23613_23634 = state_23607__$1;(statearr_23613_23634[1] = 5);
} else
{var statearr_23614_23635 = state_23607__$1;(statearr_23614_23635[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23608 === 5))
{var inst_23587 = (state_23607[9]);var inst_23584 = (state_23607[7]);var inst_23591 = cljs.core._EQ_.call(null,inst_23587,inst_23584);var state_23607__$1 = state_23607;if(inst_23591)
{var statearr_23615_23636 = state_23607__$1;(statearr_23615_23636[1] = 8);
} else
{var statearr_23616_23637 = state_23607__$1;(statearr_23616_23637[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23608 === 6))
{var state_23607__$1 = state_23607;var statearr_23618_23638 = state_23607__$1;(statearr_23618_23638[2] = null);
(statearr_23618_23638[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23608 === 7))
{var inst_23602 = (state_23607[2]);var state_23607__$1 = state_23607;var statearr_23619_23639 = state_23607__$1;(statearr_23619_23639[2] = inst_23602);
(statearr_23619_23639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23608 === 8))
{var inst_23584 = (state_23607[7]);var tmp23617 = inst_23584;var inst_23584__$1 = tmp23617;var state_23607__$1 = (function (){var statearr_23620 = state_23607;(statearr_23620[7] = inst_23584__$1);
return statearr_23620;
})();var statearr_23621_23640 = state_23607__$1;(statearr_23621_23640[2] = null);
(statearr_23621_23640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23608 === 9))
{var inst_23587 = (state_23607[9]);var state_23607__$1 = state_23607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23607__$1,11,out,inst_23587);
} else
{if((state_val_23608 === 10))
{var inst_23599 = (state_23607[2]);var state_23607__$1 = state_23607;var statearr_23622_23641 = state_23607__$1;(statearr_23622_23641[2] = inst_23599);
(statearr_23622_23641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23608 === 11))
{var inst_23587 = (state_23607[9]);var inst_23596 = (state_23607[2]);var inst_23584 = inst_23587;var state_23607__$1 = (function (){var statearr_23623 = state_23607;(statearr_23623[10] = inst_23596);
(statearr_23623[7] = inst_23584);
return statearr_23623;
})();var statearr_23624_23642 = state_23607__$1;(statearr_23624_23642[2] = null);
(statearr_23624_23642[1] = 2);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_23628 = (new Array(11));(statearr_23628[0] = state_machine__13460__auto__);
(statearr_23628[1] = 1);
return statearr_23628;
});
var state_machine__13460__auto____1 = (function (state_23607){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_23607);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e23629){if((e23629 instanceof Object))
{var ex__13463__auto__ = e23629;var statearr_23630_23643 = state_23607;(statearr_23630_23643[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23607);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23644 = state_23607;
state_23607 = G__23644;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_23607){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_23607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_23631 = f__13588__auto__.call(null);(statearr_23631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___23632);
return statearr_23631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13587__auto___23779 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_23749){var state_val_23750 = (state_23749[1]);if((state_val_23750 === 1))
{var inst_23712 = (new Array(n));var inst_23713 = inst_23712;var inst_23714 = 0;var state_23749__$1 = (function (){var statearr_23751 = state_23749;(statearr_23751[7] = inst_23713);
(statearr_23751[8] = inst_23714);
return statearr_23751;
})();var statearr_23752_23780 = state_23749__$1;(statearr_23752_23780[2] = null);
(statearr_23752_23780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23750 === 2))
{var state_23749__$1 = state_23749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23749__$1,4,ch);
} else
{if((state_val_23750 === 3))
{var inst_23747 = (state_23749[2]);var state_23749__$1 = state_23749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23749__$1,inst_23747);
} else
{if((state_val_23750 === 4))
{var inst_23717 = (state_23749[9]);var inst_23717__$1 = (state_23749[2]);var inst_23718 = (inst_23717__$1 == null);var inst_23719 = cljs.core.not.call(null,inst_23718);var state_23749__$1 = (function (){var statearr_23753 = state_23749;(statearr_23753[9] = inst_23717__$1);
return statearr_23753;
})();if(inst_23719)
{var statearr_23754_23781 = state_23749__$1;(statearr_23754_23781[1] = 5);
} else
{var statearr_23755_23782 = state_23749__$1;(statearr_23755_23782[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23750 === 5))
{var inst_23713 = (state_23749[7]);var inst_23714 = (state_23749[8]);var inst_23717 = (state_23749[9]);var inst_23722 = (state_23749[10]);var inst_23721 = (inst_23713[inst_23714] = inst_23717);var inst_23722__$1 = (inst_23714 + 1);var inst_23723 = (inst_23722__$1 < n);var state_23749__$1 = (function (){var statearr_23756 = state_23749;(statearr_23756[11] = inst_23721);
(statearr_23756[10] = inst_23722__$1);
return statearr_23756;
})();if(cljs.core.truth_(inst_23723))
{var statearr_23757_23783 = state_23749__$1;(statearr_23757_23783[1] = 8);
} else
{var statearr_23758_23784 = state_23749__$1;(statearr_23758_23784[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23750 === 6))
{var inst_23714 = (state_23749[8]);var inst_23735 = (inst_23714 > 0);var state_23749__$1 = state_23749;if(cljs.core.truth_(inst_23735))
{var statearr_23760_23785 = state_23749__$1;(statearr_23760_23785[1] = 12);
} else
{var statearr_23761_23786 = state_23749__$1;(statearr_23761_23786[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23750 === 7))
{var inst_23745 = (state_23749[2]);var state_23749__$1 = state_23749;var statearr_23762_23787 = state_23749__$1;(statearr_23762_23787[2] = inst_23745);
(statearr_23762_23787[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23750 === 8))
{var inst_23713 = (state_23749[7]);var inst_23722 = (state_23749[10]);var tmp23759 = inst_23713;var inst_23713__$1 = tmp23759;var inst_23714 = inst_23722;var state_23749__$1 = (function (){var statearr_23763 = state_23749;(statearr_23763[7] = inst_23713__$1);
(statearr_23763[8] = inst_23714);
return statearr_23763;
})();var statearr_23764_23788 = state_23749__$1;(statearr_23764_23788[2] = null);
(statearr_23764_23788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23750 === 9))
{var inst_23713 = (state_23749[7]);var inst_23727 = cljs.core.vec.call(null,inst_23713);var state_23749__$1 = state_23749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23749__$1,11,out,inst_23727);
} else
{if((state_val_23750 === 10))
{var inst_23733 = (state_23749[2]);var state_23749__$1 = state_23749;var statearr_23765_23789 = state_23749__$1;(statearr_23765_23789[2] = inst_23733);
(statearr_23765_23789[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23750 === 11))
{var inst_23729 = (state_23749[2]);var inst_23730 = (new Array(n));var inst_23713 = inst_23730;var inst_23714 = 0;var state_23749__$1 = (function (){var statearr_23766 = state_23749;(statearr_23766[12] = inst_23729);
(statearr_23766[7] = inst_23713);
(statearr_23766[8] = inst_23714);
return statearr_23766;
})();var statearr_23767_23790 = state_23749__$1;(statearr_23767_23790[2] = null);
(statearr_23767_23790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23750 === 12))
{var inst_23713 = (state_23749[7]);var inst_23737 = cljs.core.vec.call(null,inst_23713);var state_23749__$1 = state_23749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23749__$1,15,out,inst_23737);
} else
{if((state_val_23750 === 13))
{var state_23749__$1 = state_23749;var statearr_23768_23791 = state_23749__$1;(statearr_23768_23791[2] = null);
(statearr_23768_23791[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23750 === 14))
{var inst_23742 = (state_23749[2]);var inst_23743 = cljs.core.async.close_BANG_.call(null,out);var state_23749__$1 = (function (){var statearr_23769 = state_23749;(statearr_23769[13] = inst_23742);
return statearr_23769;
})();var statearr_23770_23792 = state_23749__$1;(statearr_23770_23792[2] = inst_23743);
(statearr_23770_23792[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23750 === 15))
{var inst_23739 = (state_23749[2]);var state_23749__$1 = state_23749;var statearr_23771_23793 = state_23749__$1;(statearr_23771_23793[2] = inst_23739);
(statearr_23771_23793[1] = 14);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_23775 = (new Array(14));(statearr_23775[0] = state_machine__13460__auto__);
(statearr_23775[1] = 1);
return statearr_23775;
});
var state_machine__13460__auto____1 = (function (state_23749){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_23749);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e23776){if((e23776 instanceof Object))
{var ex__13463__auto__ = e23776;var statearr_23777_23794 = state_23749;(statearr_23777_23794[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23795 = state_23749;
state_23749 = G__23795;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_23749){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_23749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_23778 = f__13588__auto__.call(null);(statearr_23778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___23779);
return statearr_23778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13587__auto___23938 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_23908){var state_val_23909 = (state_23908[1]);if((state_val_23909 === 1))
{var inst_23867 = (new Array(0));var inst_23868 = inst_23867;var inst_23869 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_23908__$1 = (function (){var statearr_23910 = state_23908;(statearr_23910[7] = inst_23869);
(statearr_23910[8] = inst_23868);
return statearr_23910;
})();var statearr_23911_23939 = state_23908__$1;(statearr_23911_23939[2] = null);
(statearr_23911_23939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23909 === 2))
{var state_23908__$1 = state_23908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23908__$1,4,ch);
} else
{if((state_val_23909 === 3))
{var inst_23906 = (state_23908[2]);var state_23908__$1 = state_23908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23908__$1,inst_23906);
} else
{if((state_val_23909 === 4))
{var inst_23872 = (state_23908[9]);var inst_23872__$1 = (state_23908[2]);var inst_23873 = (inst_23872__$1 == null);var inst_23874 = cljs.core.not.call(null,inst_23873);var state_23908__$1 = (function (){var statearr_23912 = state_23908;(statearr_23912[9] = inst_23872__$1);
return statearr_23912;
})();if(inst_23874)
{var statearr_23913_23940 = state_23908__$1;(statearr_23913_23940[1] = 5);
} else
{var statearr_23914_23941 = state_23908__$1;(statearr_23914_23941[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23909 === 5))
{var inst_23876 = (state_23908[10]);var inst_23872 = (state_23908[9]);var inst_23869 = (state_23908[7]);var inst_23876__$1 = f.call(null,inst_23872);var inst_23877 = cljs.core._EQ_.call(null,inst_23876__$1,inst_23869);var inst_23878 = cljs.core.keyword_identical_QMARK_.call(null,inst_23869,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_23879 = (inst_23877) || (inst_23878);var state_23908__$1 = (function (){var statearr_23915 = state_23908;(statearr_23915[10] = inst_23876__$1);
return statearr_23915;
})();if(cljs.core.truth_(inst_23879))
{var statearr_23916_23942 = state_23908__$1;(statearr_23916_23942[1] = 8);
} else
{var statearr_23917_23943 = state_23908__$1;(statearr_23917_23943[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23909 === 6))
{var inst_23868 = (state_23908[8]);var inst_23893 = inst_23868.length;var inst_23894 = (inst_23893 > 0);var state_23908__$1 = state_23908;if(cljs.core.truth_(inst_23894))
{var statearr_23919_23944 = state_23908__$1;(statearr_23919_23944[1] = 12);
} else
{var statearr_23920_23945 = state_23908__$1;(statearr_23920_23945[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23909 === 7))
{var inst_23904 = (state_23908[2]);var state_23908__$1 = state_23908;var statearr_23921_23946 = state_23908__$1;(statearr_23921_23946[2] = inst_23904);
(statearr_23921_23946[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23909 === 8))
{var inst_23876 = (state_23908[10]);var inst_23872 = (state_23908[9]);var inst_23868 = (state_23908[8]);var inst_23881 = inst_23868.push(inst_23872);var tmp23918 = inst_23868;var inst_23868__$1 = tmp23918;var inst_23869 = inst_23876;var state_23908__$1 = (function (){var statearr_23922 = state_23908;(statearr_23922[11] = inst_23881);
(statearr_23922[7] = inst_23869);
(statearr_23922[8] = inst_23868__$1);
return statearr_23922;
})();var statearr_23923_23947 = state_23908__$1;(statearr_23923_23947[2] = null);
(statearr_23923_23947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23909 === 9))
{var inst_23868 = (state_23908[8]);var inst_23884 = cljs.core.vec.call(null,inst_23868);var state_23908__$1 = state_23908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23908__$1,11,out,inst_23884);
} else
{if((state_val_23909 === 10))
{var inst_23891 = (state_23908[2]);var state_23908__$1 = state_23908;var statearr_23924_23948 = state_23908__$1;(statearr_23924_23948[2] = inst_23891);
(statearr_23924_23948[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23909 === 11))
{var inst_23876 = (state_23908[10]);var inst_23872 = (state_23908[9]);var inst_23886 = (state_23908[2]);var inst_23887 = (new Array(0));var inst_23888 = inst_23887.push(inst_23872);var inst_23868 = inst_23887;var inst_23869 = inst_23876;var state_23908__$1 = (function (){var statearr_23925 = state_23908;(statearr_23925[7] = inst_23869);
(statearr_23925[8] = inst_23868);
(statearr_23925[12] = inst_23886);
(statearr_23925[13] = inst_23888);
return statearr_23925;
})();var statearr_23926_23949 = state_23908__$1;(statearr_23926_23949[2] = null);
(statearr_23926_23949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23909 === 12))
{var inst_23868 = (state_23908[8]);var inst_23896 = cljs.core.vec.call(null,inst_23868);var state_23908__$1 = state_23908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23908__$1,15,out,inst_23896);
} else
{if((state_val_23909 === 13))
{var state_23908__$1 = state_23908;var statearr_23927_23950 = state_23908__$1;(statearr_23927_23950[2] = null);
(statearr_23927_23950[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23909 === 14))
{var inst_23901 = (state_23908[2]);var inst_23902 = cljs.core.async.close_BANG_.call(null,out);var state_23908__$1 = (function (){var statearr_23928 = state_23908;(statearr_23928[14] = inst_23901);
return statearr_23928;
})();var statearr_23929_23951 = state_23908__$1;(statearr_23929_23951[2] = inst_23902);
(statearr_23929_23951[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23909 === 15))
{var inst_23898 = (state_23908[2]);var state_23908__$1 = state_23908;var statearr_23930_23952 = state_23908__$1;(statearr_23930_23952[2] = inst_23898);
(statearr_23930_23952[1] = 14);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_23934 = (new Array(15));(statearr_23934[0] = state_machine__13460__auto__);
(statearr_23934[1] = 1);
return statearr_23934;
});
var state_machine__13460__auto____1 = (function (state_23908){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_23908);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e23935){if((e23935 instanceof Object))
{var ex__13463__auto__ = e23935;var statearr_23936_23953 = state_23908;(statearr_23936_23953[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23954 = state_23908;
state_23908 = G__23954;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_23908){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_23908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_23937 = f__13588__auto__.call(null);(statearr_23937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___23938);
return statearr_23937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
