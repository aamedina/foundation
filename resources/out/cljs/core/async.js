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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t324571 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t324571 = (function (f,fn_handler,meta324572){
this.f = f;
this.fn_handler = fn_handler;
this.meta324572 = meta324572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t324571.cljs$lang$type = true;
cljs.core.async.t324571.cljs$lang$ctorStr = "cljs.core.async/t324571";
cljs.core.async.t324571.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t324571");
});
cljs.core.async.t324571.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t324571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t324571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t324571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_324573){var self__ = this;
var _324573__$1 = this;return self__.meta324572;
});
cljs.core.async.t324571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_324573,meta324572__$1){var self__ = this;
var _324573__$1 = this;return (new cljs.core.async.t324571(self__.f,self__.fn_handler,meta324572__$1));
});
cljs.core.async.__GT_t324571 = (function __GT_t324571(f__$1,fn_handler__$1,meta324572){return (new cljs.core.async.t324571(f__$1,fn_handler__$1,meta324572));
});
}
return (new cljs.core.async.t324571(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__324575 = buff;if(G__324575)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__324575.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__324575.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__324575);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__324575);
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
{var val_324576 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_324576);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_324576);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13813__auto__ = ret;if(cljs.core.truth_(and__13813__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13813__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14648__auto___324577 = n;var x_324578 = 0;while(true){
if((x_324578 < n__14648__auto___324577))
{(a[x_324578] = 0);
{
var G__324579 = (x_324578 + 1);
x_324578 = G__324579;
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
var G__324580 = (i + 1);
i = G__324580;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t324584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t324584 = (function (flag,alt_flag,meta324585){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta324585 = meta324585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t324584.cljs$lang$type = true;
cljs.core.async.t324584.cljs$lang$ctorStr = "cljs.core.async/t324584";
cljs.core.async.t324584.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t324584");
});
cljs.core.async.t324584.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t324584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t324584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t324584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_324586){var self__ = this;
var _324586__$1 = this;return self__.meta324585;
});
cljs.core.async.t324584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_324586,meta324585__$1){var self__ = this;
var _324586__$1 = this;return (new cljs.core.async.t324584(self__.flag,self__.alt_flag,meta324585__$1));
});
cljs.core.async.__GT_t324584 = (function __GT_t324584(flag__$1,alt_flag__$1,meta324585){return (new cljs.core.async.t324584(flag__$1,alt_flag__$1,meta324585));
});
}
return (new cljs.core.async.t324584(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t324590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t324590 = (function (cb,flag,alt_handler,meta324591){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta324591 = meta324591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t324590.cljs$lang$type = true;
cljs.core.async.t324590.cljs$lang$ctorStr = "cljs.core.async/t324590";
cljs.core.async.t324590.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t324590");
});
cljs.core.async.t324590.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t324590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t324590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t324590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_324592){var self__ = this;
var _324592__$1 = this;return self__.meta324591;
});
cljs.core.async.t324590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_324592,meta324591__$1){var self__ = this;
var _324592__$1 = this;return (new cljs.core.async.t324590(self__.cb,self__.flag,self__.alt_handler,meta324591__$1));
});
cljs.core.async.__GT_t324590 = (function __GT_t324590(cb__$1,flag__$1,alt_handler__$1,meta324591){return (new cljs.core.async.t324590(cb__$1,flag__$1,alt_handler__$1,meta324591));
});
}
return (new cljs.core.async.t324590(cb,flag,alt_handler,null));
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
return (function (p1__324593_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__324593_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13825__auto__ = wport;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__324594 = (i + 1);
i = G__324594;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13825__auto__ = ret;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13813__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13813__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13813__auto__;
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
var alts_BANG___delegate = function (ports,p__324595){var map__324597 = p__324595;var map__324597__$1 = ((cljs.core.seq_QMARK_.call(null,map__324597))?cljs.core.apply.call(null,cljs.core.hash_map,map__324597):map__324597);var opts = map__324597__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__324595 = null;if (arguments.length > 1) {
  p__324595 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__324595);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__324598){
var ports = cljs.core.first(arglist__324598);
var p__324595 = cljs.core.rest(arglist__324598);
return alts_BANG___delegate(ports,p__324595);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t324606 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t324606 = (function (ch,f,map_LT_,meta324607){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta324607 = meta324607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t324606.cljs$lang$type = true;
cljs.core.async.t324606.cljs$lang$ctorStr = "cljs.core.async/t324606";
cljs.core.async.t324606.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t324606");
});
cljs.core.async.t324606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t324606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t324606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t324606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t324609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t324609 = (function (fn1,_,meta324607,ch,f,map_LT_,meta324610){
this.fn1 = fn1;
this._ = _;
this.meta324607 = meta324607;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta324610 = meta324610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t324609.cljs$lang$type = true;
cljs.core.async.t324609.cljs$lang$ctorStr = "cljs.core.async/t324609";
cljs.core.async.t324609.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t324609");
});
cljs.core.async.t324609.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t324609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t324609.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t324609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__324599_SHARP_){return f1.call(null,(((p1__324599_SHARP_ == null))?null:self__.f.call(null,p1__324599_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t324609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_324611){var self__ = this;
var _324611__$1 = this;return self__.meta324610;
});
cljs.core.async.t324609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_324611,meta324610__$1){var self__ = this;
var _324611__$1 = this;return (new cljs.core.async.t324609(self__.fn1,self__._,self__.meta324607,self__.ch,self__.f,self__.map_LT_,meta324610__$1));
});
cljs.core.async.__GT_t324609 = (function __GT_t324609(fn1__$1,___$2,meta324607__$1,ch__$2,f__$2,map_LT___$2,meta324610){return (new cljs.core.async.t324609(fn1__$1,___$2,meta324607__$1,ch__$2,f__$2,map_LT___$2,meta324610));
});
}
return (new cljs.core.async.t324609(fn1,___$1,self__.meta324607,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13813__auto__ = ret;if(cljs.core.truth_(and__13813__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13813__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t324606.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t324606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t324606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_324608){var self__ = this;
var _324608__$1 = this;return self__.meta324607;
});
cljs.core.async.t324606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_324608,meta324607__$1){var self__ = this;
var _324608__$1 = this;return (new cljs.core.async.t324606(self__.ch,self__.f,self__.map_LT_,meta324607__$1));
});
cljs.core.async.__GT_t324606 = (function __GT_t324606(ch__$1,f__$1,map_LT___$1,meta324607){return (new cljs.core.async.t324606(ch__$1,f__$1,map_LT___$1,meta324607));
});
}
return (new cljs.core.async.t324606(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t324615 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t324615 = (function (ch,f,map_GT_,meta324616){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta324616 = meta324616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t324615.cljs$lang$type = true;
cljs.core.async.t324615.cljs$lang$ctorStr = "cljs.core.async/t324615";
cljs.core.async.t324615.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t324615");
});
cljs.core.async.t324615.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t324615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t324615.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t324615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t324615.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t324615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t324615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_324617){var self__ = this;
var _324617__$1 = this;return self__.meta324616;
});
cljs.core.async.t324615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_324617,meta324616__$1){var self__ = this;
var _324617__$1 = this;return (new cljs.core.async.t324615(self__.ch,self__.f,self__.map_GT_,meta324616__$1));
});
cljs.core.async.__GT_t324615 = (function __GT_t324615(ch__$1,f__$1,map_GT___$1,meta324616){return (new cljs.core.async.t324615(ch__$1,f__$1,map_GT___$1,meta324616));
});
}
return (new cljs.core.async.t324615(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t324621 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t324621 = (function (ch,p,filter_GT_,meta324622){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta324622 = meta324622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t324621.cljs$lang$type = true;
cljs.core.async.t324621.cljs$lang$ctorStr = "cljs.core.async/t324621";
cljs.core.async.t324621.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t324621");
});
cljs.core.async.t324621.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t324621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t324621.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t324621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t324621.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t324621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t324621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_324623){var self__ = this;
var _324623__$1 = this;return self__.meta324622;
});
cljs.core.async.t324621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_324623,meta324622__$1){var self__ = this;
var _324623__$1 = this;return (new cljs.core.async.t324621(self__.ch,self__.p,self__.filter_GT_,meta324622__$1));
});
cljs.core.async.__GT_t324621 = (function __GT_t324621(ch__$1,p__$1,filter_GT___$1,meta324622){return (new cljs.core.async.t324621(ch__$1,p__$1,filter_GT___$1,meta324622));
});
}
return (new cljs.core.async.t324621(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___324706 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_324685){var state_val_324686 = (state_324685[1]);if((state_val_324686 === 1))
{var state_324685__$1 = state_324685;var statearr_324687_324707 = state_324685__$1;(statearr_324687_324707[2] = null);
(statearr_324687_324707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324686 === 2))
{var state_324685__$1 = state_324685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324685__$1,4,ch);
} else
{if((state_val_324686 === 3))
{var inst_324683 = (state_324685[2]);var state_324685__$1 = state_324685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324685__$1,inst_324683);
} else
{if((state_val_324686 === 4))
{var inst_324667 = (state_324685[7]);var inst_324667__$1 = (state_324685[2]);var inst_324668 = (inst_324667__$1 == null);var state_324685__$1 = (function (){var statearr_324688 = state_324685;(statearr_324688[7] = inst_324667__$1);
return statearr_324688;
})();if(cljs.core.truth_(inst_324668))
{var statearr_324689_324708 = state_324685__$1;(statearr_324689_324708[1] = 5);
} else
{var statearr_324690_324709 = state_324685__$1;(statearr_324690_324709[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324686 === 5))
{var inst_324670 = cljs.core.async.close_BANG_.call(null,out);var state_324685__$1 = state_324685;var statearr_324691_324710 = state_324685__$1;(statearr_324691_324710[2] = inst_324670);
(statearr_324691_324710[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324686 === 6))
{var inst_324667 = (state_324685[7]);var inst_324672 = p.call(null,inst_324667);var state_324685__$1 = state_324685;if(cljs.core.truth_(inst_324672))
{var statearr_324692_324711 = state_324685__$1;(statearr_324692_324711[1] = 8);
} else
{var statearr_324693_324712 = state_324685__$1;(statearr_324693_324712[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324686 === 7))
{var inst_324681 = (state_324685[2]);var state_324685__$1 = state_324685;var statearr_324694_324713 = state_324685__$1;(statearr_324694_324713[2] = inst_324681);
(statearr_324694_324713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324686 === 8))
{var inst_324667 = (state_324685[7]);var state_324685__$1 = state_324685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324685__$1,11,out,inst_324667);
} else
{if((state_val_324686 === 9))
{var state_324685__$1 = state_324685;var statearr_324695_324714 = state_324685__$1;(statearr_324695_324714[2] = null);
(statearr_324695_324714[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324686 === 10))
{var inst_324678 = (state_324685[2]);var state_324685__$1 = (function (){var statearr_324696 = state_324685;(statearr_324696[8] = inst_324678);
return statearr_324696;
})();var statearr_324697_324715 = state_324685__$1;(statearr_324697_324715[2] = null);
(statearr_324697_324715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324686 === 11))
{var inst_324675 = (state_324685[2]);var state_324685__$1 = state_324685;var statearr_324698_324716 = state_324685__$1;(statearr_324698_324716[2] = inst_324675);
(statearr_324698_324716[1] = 10);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_324702 = (new Array(9));(statearr_324702[0] = state_machine__18769__auto__);
(statearr_324702[1] = 1);
return statearr_324702;
});
var state_machine__18769__auto____1 = (function (state_324685){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_324685);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e324703){if((e324703 instanceof Object))
{var ex__18772__auto__ = e324703;var statearr_324704_324717 = state_324685;(statearr_324704_324717[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324685);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__324718 = state_324685;
state_324685 = G__324718;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_324685){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_324685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_324705 = f__18839__auto__.call(null);(statearr_324705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___324706);
return statearr_324705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_324870){var state_val_324871 = (state_324870[1]);if((state_val_324871 === 1))
{var state_324870__$1 = state_324870;var statearr_324872_324909 = state_324870__$1;(statearr_324872_324909[2] = null);
(statearr_324872_324909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 2))
{var state_324870__$1 = state_324870;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324870__$1,4,in$);
} else
{if((state_val_324871 === 3))
{var inst_324868 = (state_324870[2]);var state_324870__$1 = state_324870;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324870__$1,inst_324868);
} else
{if((state_val_324871 === 4))
{var inst_324816 = (state_324870[7]);var inst_324816__$1 = (state_324870[2]);var inst_324817 = (inst_324816__$1 == null);var state_324870__$1 = (function (){var statearr_324873 = state_324870;(statearr_324873[7] = inst_324816__$1);
return statearr_324873;
})();if(cljs.core.truth_(inst_324817))
{var statearr_324874_324910 = state_324870__$1;(statearr_324874_324910[1] = 5);
} else
{var statearr_324875_324911 = state_324870__$1;(statearr_324875_324911[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 5))
{var inst_324819 = cljs.core.async.close_BANG_.call(null,out);var state_324870__$1 = state_324870;var statearr_324876_324912 = state_324870__$1;(statearr_324876_324912[2] = inst_324819);
(statearr_324876_324912[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 6))
{var inst_324816 = (state_324870[7]);var inst_324821 = f.call(null,inst_324816);var inst_324826 = cljs.core.seq.call(null,inst_324821);var inst_324827 = inst_324826;var inst_324828 = null;var inst_324829 = 0;var inst_324830 = 0;var state_324870__$1 = (function (){var statearr_324877 = state_324870;(statearr_324877[8] = inst_324827);
(statearr_324877[9] = inst_324829);
(statearr_324877[10] = inst_324828);
(statearr_324877[11] = inst_324830);
return statearr_324877;
})();var statearr_324878_324913 = state_324870__$1;(statearr_324878_324913[2] = null);
(statearr_324878_324913[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 7))
{var inst_324866 = (state_324870[2]);var state_324870__$1 = state_324870;var statearr_324879_324914 = state_324870__$1;(statearr_324879_324914[2] = inst_324866);
(statearr_324879_324914[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 8))
{var inst_324829 = (state_324870[9]);var inst_324830 = (state_324870[11]);var inst_324832 = (inst_324830 < inst_324829);var inst_324833 = inst_324832;var state_324870__$1 = state_324870;if(cljs.core.truth_(inst_324833))
{var statearr_324880_324915 = state_324870__$1;(statearr_324880_324915[1] = 10);
} else
{var statearr_324881_324916 = state_324870__$1;(statearr_324881_324916[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 9))
{var inst_324863 = (state_324870[2]);var state_324870__$1 = (function (){var statearr_324882 = state_324870;(statearr_324882[12] = inst_324863);
return statearr_324882;
})();var statearr_324883_324917 = state_324870__$1;(statearr_324883_324917[2] = null);
(statearr_324883_324917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 10))
{var inst_324828 = (state_324870[10]);var inst_324830 = (state_324870[11]);var inst_324835 = cljs.core._nth.call(null,inst_324828,inst_324830);var state_324870__$1 = state_324870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324870__$1,13,out,inst_324835);
} else
{if((state_val_324871 === 11))
{var inst_324827 = (state_324870[8]);var inst_324841 = (state_324870[13]);var inst_324841__$1 = cljs.core.seq.call(null,inst_324827);var state_324870__$1 = (function (){var statearr_324887 = state_324870;(statearr_324887[13] = inst_324841__$1);
return statearr_324887;
})();if(inst_324841__$1)
{var statearr_324888_324918 = state_324870__$1;(statearr_324888_324918[1] = 14);
} else
{var statearr_324889_324919 = state_324870__$1;(statearr_324889_324919[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 12))
{var inst_324861 = (state_324870[2]);var state_324870__$1 = state_324870;var statearr_324890_324920 = state_324870__$1;(statearr_324890_324920[2] = inst_324861);
(statearr_324890_324920[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 13))
{var inst_324827 = (state_324870[8]);var inst_324829 = (state_324870[9]);var inst_324828 = (state_324870[10]);var inst_324830 = (state_324870[11]);var inst_324837 = (state_324870[2]);var inst_324838 = (inst_324830 + 1);var tmp324884 = inst_324827;var tmp324885 = inst_324829;var tmp324886 = inst_324828;var inst_324827__$1 = tmp324884;var inst_324828__$1 = tmp324886;var inst_324829__$1 = tmp324885;var inst_324830__$1 = inst_324838;var state_324870__$1 = (function (){var statearr_324891 = state_324870;(statearr_324891[8] = inst_324827__$1);
(statearr_324891[9] = inst_324829__$1);
(statearr_324891[10] = inst_324828__$1);
(statearr_324891[14] = inst_324837);
(statearr_324891[11] = inst_324830__$1);
return statearr_324891;
})();var statearr_324892_324921 = state_324870__$1;(statearr_324892_324921[2] = null);
(statearr_324892_324921[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 14))
{var inst_324841 = (state_324870[13]);var inst_324843 = cljs.core.chunked_seq_QMARK_.call(null,inst_324841);var state_324870__$1 = state_324870;if(inst_324843)
{var statearr_324893_324922 = state_324870__$1;(statearr_324893_324922[1] = 17);
} else
{var statearr_324894_324923 = state_324870__$1;(statearr_324894_324923[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 15))
{var state_324870__$1 = state_324870;var statearr_324895_324924 = state_324870__$1;(statearr_324895_324924[2] = null);
(statearr_324895_324924[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 16))
{var inst_324859 = (state_324870[2]);var state_324870__$1 = state_324870;var statearr_324896_324925 = state_324870__$1;(statearr_324896_324925[2] = inst_324859);
(statearr_324896_324925[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 17))
{var inst_324841 = (state_324870[13]);var inst_324845 = cljs.core.chunk_first.call(null,inst_324841);var inst_324846 = cljs.core.chunk_rest.call(null,inst_324841);var inst_324847 = cljs.core.count.call(null,inst_324845);var inst_324827 = inst_324846;var inst_324828 = inst_324845;var inst_324829 = inst_324847;var inst_324830 = 0;var state_324870__$1 = (function (){var statearr_324897 = state_324870;(statearr_324897[8] = inst_324827);
(statearr_324897[9] = inst_324829);
(statearr_324897[10] = inst_324828);
(statearr_324897[11] = inst_324830);
return statearr_324897;
})();var statearr_324898_324926 = state_324870__$1;(statearr_324898_324926[2] = null);
(statearr_324898_324926[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 18))
{var inst_324841 = (state_324870[13]);var inst_324850 = cljs.core.first.call(null,inst_324841);var state_324870__$1 = state_324870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324870__$1,20,out,inst_324850);
} else
{if((state_val_324871 === 19))
{var inst_324856 = (state_324870[2]);var state_324870__$1 = state_324870;var statearr_324899_324927 = state_324870__$1;(statearr_324899_324927[2] = inst_324856);
(statearr_324899_324927[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324871 === 20))
{var inst_324841 = (state_324870[13]);var inst_324852 = (state_324870[2]);var inst_324853 = cljs.core.next.call(null,inst_324841);var inst_324827 = inst_324853;var inst_324828 = null;var inst_324829 = 0;var inst_324830 = 0;var state_324870__$1 = (function (){var statearr_324900 = state_324870;(statearr_324900[15] = inst_324852);
(statearr_324900[8] = inst_324827);
(statearr_324900[9] = inst_324829);
(statearr_324900[10] = inst_324828);
(statearr_324900[11] = inst_324830);
return statearr_324900;
})();var statearr_324901_324928 = state_324870__$1;(statearr_324901_324928[2] = null);
(statearr_324901_324928[1] = 8);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_324905 = (new Array(16));(statearr_324905[0] = state_machine__18769__auto__);
(statearr_324905[1] = 1);
return statearr_324905;
});
var state_machine__18769__auto____1 = (function (state_324870){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_324870);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e324906){if((e324906 instanceof Object))
{var ex__18772__auto__ = e324906;var statearr_324907_324929 = state_324870;(statearr_324907_324929[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324870);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__324930 = state_324870;
state_324870 = G__324930;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_324870){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_324870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_324908 = f__18839__auto__.call(null);(statearr_324908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_324908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18838__auto___325011 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_324990){var state_val_324991 = (state_324990[1]);if((state_val_324991 === 1))
{var state_324990__$1 = state_324990;var statearr_324992_325012 = state_324990__$1;(statearr_324992_325012[2] = null);
(statearr_324992_325012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324991 === 2))
{var state_324990__$1 = state_324990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324990__$1,4,from);
} else
{if((state_val_324991 === 3))
{var inst_324988 = (state_324990[2]);var state_324990__$1 = state_324990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324990__$1,inst_324988);
} else
{if((state_val_324991 === 4))
{var inst_324973 = (state_324990[7]);var inst_324973__$1 = (state_324990[2]);var inst_324974 = (inst_324973__$1 == null);var state_324990__$1 = (function (){var statearr_324993 = state_324990;(statearr_324993[7] = inst_324973__$1);
return statearr_324993;
})();if(cljs.core.truth_(inst_324974))
{var statearr_324994_325013 = state_324990__$1;(statearr_324994_325013[1] = 5);
} else
{var statearr_324995_325014 = state_324990__$1;(statearr_324995_325014[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324991 === 5))
{var state_324990__$1 = state_324990;if(cljs.core.truth_(close_QMARK_))
{var statearr_324996_325015 = state_324990__$1;(statearr_324996_325015[1] = 8);
} else
{var statearr_324997_325016 = state_324990__$1;(statearr_324997_325016[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324991 === 6))
{var inst_324973 = (state_324990[7]);var state_324990__$1 = state_324990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324990__$1,11,to,inst_324973);
} else
{if((state_val_324991 === 7))
{var inst_324986 = (state_324990[2]);var state_324990__$1 = state_324990;var statearr_324998_325017 = state_324990__$1;(statearr_324998_325017[2] = inst_324986);
(statearr_324998_325017[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324991 === 8))
{var inst_324977 = cljs.core.async.close_BANG_.call(null,to);var state_324990__$1 = state_324990;var statearr_324999_325018 = state_324990__$1;(statearr_324999_325018[2] = inst_324977);
(statearr_324999_325018[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324991 === 9))
{var state_324990__$1 = state_324990;var statearr_325000_325019 = state_324990__$1;(statearr_325000_325019[2] = null);
(statearr_325000_325019[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324991 === 10))
{var inst_324980 = (state_324990[2]);var state_324990__$1 = state_324990;var statearr_325001_325020 = state_324990__$1;(statearr_325001_325020[2] = inst_324980);
(statearr_325001_325020[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324991 === 11))
{var inst_324983 = (state_324990[2]);var state_324990__$1 = (function (){var statearr_325002 = state_324990;(statearr_325002[8] = inst_324983);
return statearr_325002;
})();var statearr_325003_325021 = state_324990__$1;(statearr_325003_325021[2] = null);
(statearr_325003_325021[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_325007 = (new Array(9));(statearr_325007[0] = state_machine__18769__auto__);
(statearr_325007[1] = 1);
return statearr_325007;
});
var state_machine__18769__auto____1 = (function (state_324990){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_324990);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e325008){if((e325008 instanceof Object))
{var ex__18772__auto__ = e325008;var statearr_325009_325022 = state_324990;(statearr_325009_325022[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324990);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e325008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__325023 = state_324990;
state_324990 = G__325023;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_324990){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_324990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_325010 = f__18839__auto__.call(null);(statearr_325010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___325011);
return statearr_325010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18838__auto___325110 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_325088){var state_val_325089 = (state_325088[1]);if((state_val_325089 === 1))
{var state_325088__$1 = state_325088;var statearr_325090_325111 = state_325088__$1;(statearr_325090_325111[2] = null);
(statearr_325090_325111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325089 === 2))
{var state_325088__$1 = state_325088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_325088__$1,4,ch);
} else
{if((state_val_325089 === 3))
{var inst_325086 = (state_325088[2]);var state_325088__$1 = state_325088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_325088__$1,inst_325086);
} else
{if((state_val_325089 === 4))
{var inst_325069 = (state_325088[7]);var inst_325069__$1 = (state_325088[2]);var inst_325070 = (inst_325069__$1 == null);var state_325088__$1 = (function (){var statearr_325091 = state_325088;(statearr_325091[7] = inst_325069__$1);
return statearr_325091;
})();if(cljs.core.truth_(inst_325070))
{var statearr_325092_325112 = state_325088__$1;(statearr_325092_325112[1] = 5);
} else
{var statearr_325093_325113 = state_325088__$1;(statearr_325093_325113[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325089 === 5))
{var inst_325072 = cljs.core.async.close_BANG_.call(null,tc);var inst_325073 = cljs.core.async.close_BANG_.call(null,fc);var state_325088__$1 = (function (){var statearr_325094 = state_325088;(statearr_325094[8] = inst_325072);
return statearr_325094;
})();var statearr_325095_325114 = state_325088__$1;(statearr_325095_325114[2] = inst_325073);
(statearr_325095_325114[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325089 === 6))
{var inst_325069 = (state_325088[7]);var inst_325075 = p.call(null,inst_325069);var state_325088__$1 = state_325088;if(cljs.core.truth_(inst_325075))
{var statearr_325096_325115 = state_325088__$1;(statearr_325096_325115[1] = 9);
} else
{var statearr_325097_325116 = state_325088__$1;(statearr_325097_325116[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325089 === 7))
{var inst_325084 = (state_325088[2]);var state_325088__$1 = state_325088;var statearr_325098_325117 = state_325088__$1;(statearr_325098_325117[2] = inst_325084);
(statearr_325098_325117[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325089 === 8))
{var inst_325081 = (state_325088[2]);var state_325088__$1 = (function (){var statearr_325099 = state_325088;(statearr_325099[9] = inst_325081);
return statearr_325099;
})();var statearr_325100_325118 = state_325088__$1;(statearr_325100_325118[2] = null);
(statearr_325100_325118[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325089 === 9))
{var state_325088__$1 = state_325088;var statearr_325101_325119 = state_325088__$1;(statearr_325101_325119[2] = tc);
(statearr_325101_325119[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325089 === 10))
{var state_325088__$1 = state_325088;var statearr_325102_325120 = state_325088__$1;(statearr_325102_325120[2] = fc);
(statearr_325102_325120[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325089 === 11))
{var inst_325069 = (state_325088[7]);var inst_325079 = (state_325088[2]);var state_325088__$1 = state_325088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_325088__$1,8,inst_325079,inst_325069);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_325106 = (new Array(10));(statearr_325106[0] = state_machine__18769__auto__);
(statearr_325106[1] = 1);
return statearr_325106;
});
var state_machine__18769__auto____1 = (function (state_325088){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_325088);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e325107){if((e325107 instanceof Object))
{var ex__18772__auto__ = e325107;var statearr_325108_325121 = state_325088;(statearr_325108_325121[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325088);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e325107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__325122 = state_325088;
state_325088 = G__325122;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_325088){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_325088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_325109 = f__18839__auto__.call(null);(statearr_325109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___325110);
return statearr_325109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_325169){var state_val_325170 = (state_325169[1]);if((state_val_325170 === 7))
{var inst_325165 = (state_325169[2]);var state_325169__$1 = state_325169;var statearr_325171_325187 = state_325169__$1;(statearr_325171_325187[2] = inst_325165);
(statearr_325171_325187[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325170 === 6))
{var inst_325158 = (state_325169[7]);var inst_325155 = (state_325169[8]);var inst_325162 = f.call(null,inst_325155,inst_325158);var inst_325155__$1 = inst_325162;var state_325169__$1 = (function (){var statearr_325172 = state_325169;(statearr_325172[8] = inst_325155__$1);
return statearr_325172;
})();var statearr_325173_325188 = state_325169__$1;(statearr_325173_325188[2] = null);
(statearr_325173_325188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325170 === 5))
{var inst_325155 = (state_325169[8]);var state_325169__$1 = state_325169;var statearr_325174_325189 = state_325169__$1;(statearr_325174_325189[2] = inst_325155);
(statearr_325174_325189[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325170 === 4))
{var inst_325158 = (state_325169[7]);var inst_325158__$1 = (state_325169[2]);var inst_325159 = (inst_325158__$1 == null);var state_325169__$1 = (function (){var statearr_325175 = state_325169;(statearr_325175[7] = inst_325158__$1);
return statearr_325175;
})();if(cljs.core.truth_(inst_325159))
{var statearr_325176_325190 = state_325169__$1;(statearr_325176_325190[1] = 5);
} else
{var statearr_325177_325191 = state_325169__$1;(statearr_325177_325191[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325170 === 3))
{var inst_325167 = (state_325169[2]);var state_325169__$1 = state_325169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_325169__$1,inst_325167);
} else
{if((state_val_325170 === 2))
{var state_325169__$1 = state_325169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_325169__$1,4,ch);
} else
{if((state_val_325170 === 1))
{var inst_325155 = init;var state_325169__$1 = (function (){var statearr_325178 = state_325169;(statearr_325178[8] = inst_325155);
return statearr_325178;
})();var statearr_325179_325192 = state_325169__$1;(statearr_325179_325192[2] = null);
(statearr_325179_325192[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_325183 = (new Array(9));(statearr_325183[0] = state_machine__18769__auto__);
(statearr_325183[1] = 1);
return statearr_325183;
});
var state_machine__18769__auto____1 = (function (state_325169){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_325169);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e325184){if((e325184 instanceof Object))
{var ex__18772__auto__ = e325184;var statearr_325185_325193 = state_325169;(statearr_325185_325193[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325169);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e325184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__325194 = state_325169;
state_325169 = G__325194;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_325169){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_325169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_325186 = f__18839__auto__.call(null);(statearr_325186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_325186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_325256){var state_val_325257 = (state_325256[1]);if((state_val_325257 === 1))
{var inst_325236 = cljs.core.seq.call(null,coll);var inst_325237 = inst_325236;var state_325256__$1 = (function (){var statearr_325258 = state_325256;(statearr_325258[7] = inst_325237);
return statearr_325258;
})();var statearr_325259_325277 = state_325256__$1;(statearr_325259_325277[2] = null);
(statearr_325259_325277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325257 === 2))
{var inst_325237 = (state_325256[7]);var state_325256__$1 = state_325256;if(cljs.core.truth_(inst_325237))
{var statearr_325260_325278 = state_325256__$1;(statearr_325260_325278[1] = 4);
} else
{var statearr_325261_325279 = state_325256__$1;(statearr_325261_325279[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325257 === 3))
{var inst_325254 = (state_325256[2]);var state_325256__$1 = state_325256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_325256__$1,inst_325254);
} else
{if((state_val_325257 === 4))
{var inst_325237 = (state_325256[7]);var inst_325240 = cljs.core.first.call(null,inst_325237);var state_325256__$1 = state_325256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_325256__$1,7,ch,inst_325240);
} else
{if((state_val_325257 === 5))
{var state_325256__$1 = state_325256;if(cljs.core.truth_(close_QMARK_))
{var statearr_325262_325280 = state_325256__$1;(statearr_325262_325280[1] = 8);
} else
{var statearr_325263_325281 = state_325256__$1;(statearr_325263_325281[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325257 === 6))
{var inst_325252 = (state_325256[2]);var state_325256__$1 = state_325256;var statearr_325264_325282 = state_325256__$1;(statearr_325264_325282[2] = inst_325252);
(statearr_325264_325282[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325257 === 7))
{var inst_325237 = (state_325256[7]);var inst_325242 = (state_325256[2]);var inst_325243 = cljs.core.next.call(null,inst_325237);var inst_325237__$1 = inst_325243;var state_325256__$1 = (function (){var statearr_325265 = state_325256;(statearr_325265[7] = inst_325237__$1);
(statearr_325265[8] = inst_325242);
return statearr_325265;
})();var statearr_325266_325283 = state_325256__$1;(statearr_325266_325283[2] = null);
(statearr_325266_325283[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325257 === 8))
{var inst_325247 = cljs.core.async.close_BANG_.call(null,ch);var state_325256__$1 = state_325256;var statearr_325267_325284 = state_325256__$1;(statearr_325267_325284[2] = inst_325247);
(statearr_325267_325284[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325257 === 9))
{var state_325256__$1 = state_325256;var statearr_325268_325285 = state_325256__$1;(statearr_325268_325285[2] = null);
(statearr_325268_325285[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325257 === 10))
{var inst_325250 = (state_325256[2]);var state_325256__$1 = state_325256;var statearr_325269_325286 = state_325256__$1;(statearr_325269_325286[2] = inst_325250);
(statearr_325269_325286[1] = 6);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_325273 = (new Array(9));(statearr_325273[0] = state_machine__18769__auto__);
(statearr_325273[1] = 1);
return statearr_325273;
});
var state_machine__18769__auto____1 = (function (state_325256){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_325256);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e325274){if((e325274 instanceof Object))
{var ex__18772__auto__ = e325274;var statearr_325275_325287 = state_325256;(statearr_325275_325287[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e325274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__325288 = state_325256;
state_325256 = G__325288;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_325256){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_325256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_325276 = f__18839__auto__.call(null);(statearr_325276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_325276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
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
cljs.core.async.Mux = (function (){var obj325290 = {};return obj325290;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13813__auto__ = _;if(and__13813__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13813__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14428__auto__ = (((_ == null))?null:_);return (function (){var or__13825__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj325292 = {};return obj325292;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t325516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t325516 = (function (cs,ch,mult,meta325517){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta325517 = meta325517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t325516.cljs$lang$type = true;
cljs.core.async.t325516.cljs$lang$ctorStr = "cljs.core.async/t325516";
cljs.core.async.t325516.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t325516");
});})(cs))
;
cljs.core.async.t325516.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t325516.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t325516.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t325516.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t325516.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t325516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t325516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_325518){var self__ = this;
var _325518__$1 = this;return self__.meta325517;
});})(cs))
;
cljs.core.async.t325516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_325518,meta325517__$1){var self__ = this;
var _325518__$1 = this;return (new cljs.core.async.t325516(self__.cs,self__.ch,self__.mult,meta325517__$1));
});})(cs))
;
cljs.core.async.__GT_t325516 = ((function (cs){
return (function __GT_t325516(cs__$1,ch__$1,mult__$1,meta325517){return (new cljs.core.async.t325516(cs__$1,ch__$1,mult__$1,meta325517));
});})(cs))
;
}
return (new cljs.core.async.t325516(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18838__auto___325739 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_325653){var state_val_325654 = (state_325653[1]);if((state_val_325654 === 32))
{var inst_325597 = (state_325653[7]);var inst_325521 = (state_325653[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_325653,31,Object,null,30);var inst_325604 = cljs.core.async.put_BANG_.call(null,inst_325597,inst_325521,done);var state_325653__$1 = state_325653;var statearr_325655_325740 = state_325653__$1;(statearr_325655_325740[2] = inst_325604);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325653__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 1))
{var state_325653__$1 = state_325653;var statearr_325656_325741 = state_325653__$1;(statearr_325656_325741[2] = null);
(statearr_325656_325741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 33))
{var inst_325610 = (state_325653[9]);var inst_325612 = cljs.core.chunked_seq_QMARK_.call(null,inst_325610);var state_325653__$1 = state_325653;if(inst_325612)
{var statearr_325657_325742 = state_325653__$1;(statearr_325657_325742[1] = 36);
} else
{var statearr_325658_325743 = state_325653__$1;(statearr_325658_325743[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 2))
{var state_325653__$1 = state_325653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_325653__$1,4,ch);
} else
{if((state_val_325654 === 34))
{var state_325653__$1 = state_325653;var statearr_325659_325744 = state_325653__$1;(statearr_325659_325744[2] = null);
(statearr_325659_325744[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 3))
{var inst_325651 = (state_325653[2]);var state_325653__$1 = state_325653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_325653__$1,inst_325651);
} else
{if((state_val_325654 === 35))
{var inst_325635 = (state_325653[2]);var state_325653__$1 = state_325653;var statearr_325660_325745 = state_325653__$1;(statearr_325660_325745[2] = inst_325635);
(statearr_325660_325745[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 4))
{var inst_325521 = (state_325653[8]);var inst_325521__$1 = (state_325653[2]);var inst_325522 = (inst_325521__$1 == null);var state_325653__$1 = (function (){var statearr_325661 = state_325653;(statearr_325661[8] = inst_325521__$1);
return statearr_325661;
})();if(cljs.core.truth_(inst_325522))
{var statearr_325662_325746 = state_325653__$1;(statearr_325662_325746[1] = 5);
} else
{var statearr_325663_325747 = state_325653__$1;(statearr_325663_325747[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 36))
{var inst_325610 = (state_325653[9]);var inst_325614 = cljs.core.chunk_first.call(null,inst_325610);var inst_325615 = cljs.core.chunk_rest.call(null,inst_325610);var inst_325616 = cljs.core.count.call(null,inst_325614);var inst_325589 = inst_325615;var inst_325590 = inst_325614;var inst_325591 = inst_325616;var inst_325592 = 0;var state_325653__$1 = (function (){var statearr_325664 = state_325653;(statearr_325664[10] = inst_325589);
(statearr_325664[11] = inst_325590);
(statearr_325664[12] = inst_325592);
(statearr_325664[13] = inst_325591);
return statearr_325664;
})();var statearr_325665_325748 = state_325653__$1;(statearr_325665_325748[2] = null);
(statearr_325665_325748[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 5))
{var inst_325528 = cljs.core.deref.call(null,cs);var inst_325529 = cljs.core.seq.call(null,inst_325528);var inst_325530 = inst_325529;var inst_325531 = null;var inst_325532 = 0;var inst_325533 = 0;var state_325653__$1 = (function (){var statearr_325666 = state_325653;(statearr_325666[14] = inst_325531);
(statearr_325666[15] = inst_325532);
(statearr_325666[16] = inst_325530);
(statearr_325666[17] = inst_325533);
return statearr_325666;
})();var statearr_325667_325749 = state_325653__$1;(statearr_325667_325749[2] = null);
(statearr_325667_325749[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 37))
{var inst_325610 = (state_325653[9]);var inst_325619 = cljs.core.first.call(null,inst_325610);var state_325653__$1 = (function (){var statearr_325668 = state_325653;(statearr_325668[18] = inst_325619);
return statearr_325668;
})();var statearr_325669_325750 = state_325653__$1;(statearr_325669_325750[2] = null);
(statearr_325669_325750[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 6))
{var inst_325581 = (state_325653[19]);var inst_325580 = cljs.core.deref.call(null,cs);var inst_325581__$1 = cljs.core.keys.call(null,inst_325580);var inst_325582 = cljs.core.count.call(null,inst_325581__$1);var inst_325583 = cljs.core.reset_BANG_.call(null,dctr,inst_325582);var inst_325588 = cljs.core.seq.call(null,inst_325581__$1);var inst_325589 = inst_325588;var inst_325590 = null;var inst_325591 = 0;var inst_325592 = 0;var state_325653__$1 = (function (){var statearr_325670 = state_325653;(statearr_325670[10] = inst_325589);
(statearr_325670[11] = inst_325590);
(statearr_325670[19] = inst_325581__$1);
(statearr_325670[20] = inst_325583);
(statearr_325670[12] = inst_325592);
(statearr_325670[13] = inst_325591);
return statearr_325670;
})();var statearr_325671_325751 = state_325653__$1;(statearr_325671_325751[2] = null);
(statearr_325671_325751[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 38))
{var inst_325632 = (state_325653[2]);var state_325653__$1 = state_325653;var statearr_325672_325752 = state_325653__$1;(statearr_325672_325752[2] = inst_325632);
(statearr_325672_325752[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 7))
{var inst_325649 = (state_325653[2]);var state_325653__$1 = state_325653;var statearr_325673_325753 = state_325653__$1;(statearr_325673_325753[2] = inst_325649);
(statearr_325673_325753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 39))
{var inst_325610 = (state_325653[9]);var inst_325628 = (state_325653[2]);var inst_325629 = cljs.core.next.call(null,inst_325610);var inst_325589 = inst_325629;var inst_325590 = null;var inst_325591 = 0;var inst_325592 = 0;var state_325653__$1 = (function (){var statearr_325674 = state_325653;(statearr_325674[10] = inst_325589);
(statearr_325674[11] = inst_325590);
(statearr_325674[12] = inst_325592);
(statearr_325674[13] = inst_325591);
(statearr_325674[21] = inst_325628);
return statearr_325674;
})();var statearr_325675_325754 = state_325653__$1;(statearr_325675_325754[2] = null);
(statearr_325675_325754[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 8))
{var inst_325532 = (state_325653[15]);var inst_325533 = (state_325653[17]);var inst_325535 = (inst_325533 < inst_325532);var inst_325536 = inst_325535;var state_325653__$1 = state_325653;if(cljs.core.truth_(inst_325536))
{var statearr_325676_325755 = state_325653__$1;(statearr_325676_325755[1] = 10);
} else
{var statearr_325677_325756 = state_325653__$1;(statearr_325677_325756[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 40))
{var inst_325619 = (state_325653[18]);var inst_325620 = (state_325653[2]);var inst_325621 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_325622 = cljs.core.async.untap_STAR_.call(null,m,inst_325619);var state_325653__$1 = (function (){var statearr_325678 = state_325653;(statearr_325678[22] = inst_325621);
(statearr_325678[23] = inst_325620);
return statearr_325678;
})();var statearr_325679_325757 = state_325653__$1;(statearr_325679_325757[2] = inst_325622);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325653__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 9))
{var inst_325578 = (state_325653[2]);var state_325653__$1 = state_325653;var statearr_325680_325758 = state_325653__$1;(statearr_325680_325758[2] = inst_325578);
(statearr_325680_325758[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 41))
{var inst_325619 = (state_325653[18]);var inst_325521 = (state_325653[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_325653,40,Object,null,39);var inst_325626 = cljs.core.async.put_BANG_.call(null,inst_325619,inst_325521,done);var state_325653__$1 = state_325653;var statearr_325681_325759 = state_325653__$1;(statearr_325681_325759[2] = inst_325626);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325653__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 10))
{var inst_325531 = (state_325653[14]);var inst_325533 = (state_325653[17]);var inst_325539 = cljs.core._nth.call(null,inst_325531,inst_325533);var inst_325540 = cljs.core.nth.call(null,inst_325539,0,null);var inst_325541 = cljs.core.nth.call(null,inst_325539,1,null);var state_325653__$1 = (function (){var statearr_325682 = state_325653;(statearr_325682[24] = inst_325540);
return statearr_325682;
})();if(cljs.core.truth_(inst_325541))
{var statearr_325683_325760 = state_325653__$1;(statearr_325683_325760[1] = 13);
} else
{var statearr_325684_325761 = state_325653__$1;(statearr_325684_325761[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 42))
{var state_325653__$1 = state_325653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_325653__$1,45,dchan);
} else
{if((state_val_325654 === 11))
{var inst_325530 = (state_325653[16]);var inst_325550 = (state_325653[25]);var inst_325550__$1 = cljs.core.seq.call(null,inst_325530);var state_325653__$1 = (function (){var statearr_325685 = state_325653;(statearr_325685[25] = inst_325550__$1);
return statearr_325685;
})();if(inst_325550__$1)
{var statearr_325686_325762 = state_325653__$1;(statearr_325686_325762[1] = 16);
} else
{var statearr_325687_325763 = state_325653__$1;(statearr_325687_325763[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 43))
{var state_325653__$1 = state_325653;var statearr_325688_325764 = state_325653__$1;(statearr_325688_325764[2] = null);
(statearr_325688_325764[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 12))
{var inst_325576 = (state_325653[2]);var state_325653__$1 = state_325653;var statearr_325689_325765 = state_325653__$1;(statearr_325689_325765[2] = inst_325576);
(statearr_325689_325765[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 44))
{var inst_325646 = (state_325653[2]);var state_325653__$1 = (function (){var statearr_325690 = state_325653;(statearr_325690[26] = inst_325646);
return statearr_325690;
})();var statearr_325691_325766 = state_325653__$1;(statearr_325691_325766[2] = null);
(statearr_325691_325766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 13))
{var inst_325540 = (state_325653[24]);var inst_325543 = cljs.core.async.close_BANG_.call(null,inst_325540);var state_325653__$1 = state_325653;var statearr_325692_325767 = state_325653__$1;(statearr_325692_325767[2] = inst_325543);
(statearr_325692_325767[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 45))
{var inst_325643 = (state_325653[2]);var state_325653__$1 = state_325653;var statearr_325696_325768 = state_325653__$1;(statearr_325696_325768[2] = inst_325643);
(statearr_325696_325768[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 14))
{var state_325653__$1 = state_325653;var statearr_325697_325769 = state_325653__$1;(statearr_325697_325769[2] = null);
(statearr_325697_325769[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 15))
{var inst_325531 = (state_325653[14]);var inst_325532 = (state_325653[15]);var inst_325530 = (state_325653[16]);var inst_325533 = (state_325653[17]);var inst_325546 = (state_325653[2]);var inst_325547 = (inst_325533 + 1);var tmp325693 = inst_325531;var tmp325694 = inst_325532;var tmp325695 = inst_325530;var inst_325530__$1 = tmp325695;var inst_325531__$1 = tmp325693;var inst_325532__$1 = tmp325694;var inst_325533__$1 = inst_325547;var state_325653__$1 = (function (){var statearr_325698 = state_325653;(statearr_325698[14] = inst_325531__$1);
(statearr_325698[15] = inst_325532__$1);
(statearr_325698[16] = inst_325530__$1);
(statearr_325698[27] = inst_325546);
(statearr_325698[17] = inst_325533__$1);
return statearr_325698;
})();var statearr_325699_325770 = state_325653__$1;(statearr_325699_325770[2] = null);
(statearr_325699_325770[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 16))
{var inst_325550 = (state_325653[25]);var inst_325552 = cljs.core.chunked_seq_QMARK_.call(null,inst_325550);var state_325653__$1 = state_325653;if(inst_325552)
{var statearr_325700_325771 = state_325653__$1;(statearr_325700_325771[1] = 19);
} else
{var statearr_325701_325772 = state_325653__$1;(statearr_325701_325772[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 17))
{var state_325653__$1 = state_325653;var statearr_325702_325773 = state_325653__$1;(statearr_325702_325773[2] = null);
(statearr_325702_325773[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 18))
{var inst_325574 = (state_325653[2]);var state_325653__$1 = state_325653;var statearr_325703_325774 = state_325653__$1;(statearr_325703_325774[2] = inst_325574);
(statearr_325703_325774[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 19))
{var inst_325550 = (state_325653[25]);var inst_325554 = cljs.core.chunk_first.call(null,inst_325550);var inst_325555 = cljs.core.chunk_rest.call(null,inst_325550);var inst_325556 = cljs.core.count.call(null,inst_325554);var inst_325530 = inst_325555;var inst_325531 = inst_325554;var inst_325532 = inst_325556;var inst_325533 = 0;var state_325653__$1 = (function (){var statearr_325704 = state_325653;(statearr_325704[14] = inst_325531);
(statearr_325704[15] = inst_325532);
(statearr_325704[16] = inst_325530);
(statearr_325704[17] = inst_325533);
return statearr_325704;
})();var statearr_325705_325775 = state_325653__$1;(statearr_325705_325775[2] = null);
(statearr_325705_325775[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 20))
{var inst_325550 = (state_325653[25]);var inst_325560 = cljs.core.first.call(null,inst_325550);var inst_325561 = cljs.core.nth.call(null,inst_325560,0,null);var inst_325562 = cljs.core.nth.call(null,inst_325560,1,null);var state_325653__$1 = (function (){var statearr_325706 = state_325653;(statearr_325706[28] = inst_325561);
return statearr_325706;
})();if(cljs.core.truth_(inst_325562))
{var statearr_325707_325776 = state_325653__$1;(statearr_325707_325776[1] = 22);
} else
{var statearr_325708_325777 = state_325653__$1;(statearr_325708_325777[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 21))
{var inst_325571 = (state_325653[2]);var state_325653__$1 = state_325653;var statearr_325709_325778 = state_325653__$1;(statearr_325709_325778[2] = inst_325571);
(statearr_325709_325778[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 22))
{var inst_325561 = (state_325653[28]);var inst_325564 = cljs.core.async.close_BANG_.call(null,inst_325561);var state_325653__$1 = state_325653;var statearr_325710_325779 = state_325653__$1;(statearr_325710_325779[2] = inst_325564);
(statearr_325710_325779[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 23))
{var state_325653__$1 = state_325653;var statearr_325711_325780 = state_325653__$1;(statearr_325711_325780[2] = null);
(statearr_325711_325780[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 24))
{var inst_325550 = (state_325653[25]);var inst_325567 = (state_325653[2]);var inst_325568 = cljs.core.next.call(null,inst_325550);var inst_325530 = inst_325568;var inst_325531 = null;var inst_325532 = 0;var inst_325533 = 0;var state_325653__$1 = (function (){var statearr_325712 = state_325653;(statearr_325712[14] = inst_325531);
(statearr_325712[15] = inst_325532);
(statearr_325712[16] = inst_325530);
(statearr_325712[17] = inst_325533);
(statearr_325712[29] = inst_325567);
return statearr_325712;
})();var statearr_325713_325781 = state_325653__$1;(statearr_325713_325781[2] = null);
(statearr_325713_325781[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 25))
{var inst_325592 = (state_325653[12]);var inst_325591 = (state_325653[13]);var inst_325594 = (inst_325592 < inst_325591);var inst_325595 = inst_325594;var state_325653__$1 = state_325653;if(cljs.core.truth_(inst_325595))
{var statearr_325714_325782 = state_325653__$1;(statearr_325714_325782[1] = 27);
} else
{var statearr_325715_325783 = state_325653__$1;(statearr_325715_325783[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 26))
{var inst_325581 = (state_325653[19]);var inst_325639 = (state_325653[2]);var inst_325640 = cljs.core.seq.call(null,inst_325581);var state_325653__$1 = (function (){var statearr_325716 = state_325653;(statearr_325716[30] = inst_325639);
return statearr_325716;
})();if(inst_325640)
{var statearr_325717_325784 = state_325653__$1;(statearr_325717_325784[1] = 42);
} else
{var statearr_325718_325785 = state_325653__$1;(statearr_325718_325785[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 27))
{var inst_325590 = (state_325653[11]);var inst_325592 = (state_325653[12]);var inst_325597 = cljs.core._nth.call(null,inst_325590,inst_325592);var state_325653__$1 = (function (){var statearr_325719 = state_325653;(statearr_325719[7] = inst_325597);
return statearr_325719;
})();var statearr_325720_325786 = state_325653__$1;(statearr_325720_325786[2] = null);
(statearr_325720_325786[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 28))
{var inst_325589 = (state_325653[10]);var inst_325610 = (state_325653[9]);var inst_325610__$1 = cljs.core.seq.call(null,inst_325589);var state_325653__$1 = (function (){var statearr_325724 = state_325653;(statearr_325724[9] = inst_325610__$1);
return statearr_325724;
})();if(inst_325610__$1)
{var statearr_325725_325787 = state_325653__$1;(statearr_325725_325787[1] = 33);
} else
{var statearr_325726_325788 = state_325653__$1;(statearr_325726_325788[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 29))
{var inst_325637 = (state_325653[2]);var state_325653__$1 = state_325653;var statearr_325727_325789 = state_325653__$1;(statearr_325727_325789[2] = inst_325637);
(statearr_325727_325789[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 30))
{var inst_325589 = (state_325653[10]);var inst_325590 = (state_325653[11]);var inst_325592 = (state_325653[12]);var inst_325591 = (state_325653[13]);var inst_325606 = (state_325653[2]);var inst_325607 = (inst_325592 + 1);var tmp325721 = inst_325589;var tmp325722 = inst_325590;var tmp325723 = inst_325591;var inst_325589__$1 = tmp325721;var inst_325590__$1 = tmp325722;var inst_325591__$1 = tmp325723;var inst_325592__$1 = inst_325607;var state_325653__$1 = (function (){var statearr_325728 = state_325653;(statearr_325728[10] = inst_325589__$1);
(statearr_325728[11] = inst_325590__$1);
(statearr_325728[31] = inst_325606);
(statearr_325728[12] = inst_325592__$1);
(statearr_325728[13] = inst_325591__$1);
return statearr_325728;
})();var statearr_325729_325790 = state_325653__$1;(statearr_325729_325790[2] = null);
(statearr_325729_325790[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325654 === 31))
{var inst_325597 = (state_325653[7]);var inst_325598 = (state_325653[2]);var inst_325599 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_325600 = cljs.core.async.untap_STAR_.call(null,m,inst_325597);var state_325653__$1 = (function (){var statearr_325730 = state_325653;(statearr_325730[32] = inst_325598);
(statearr_325730[33] = inst_325599);
return statearr_325730;
})();var statearr_325731_325791 = state_325653__$1;(statearr_325731_325791[2] = inst_325600);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325653__$1);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_325735 = (new Array(34));(statearr_325735[0] = state_machine__18769__auto__);
(statearr_325735[1] = 1);
return statearr_325735;
});
var state_machine__18769__auto____1 = (function (state_325653){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_325653);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e325736){if((e325736 instanceof Object))
{var ex__18772__auto__ = e325736;var statearr_325737_325792 = state_325653;(statearr_325737_325792[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325653);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e325736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__325793 = state_325653;
state_325653 = G__325793;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_325653){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_325653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_325738 = f__18839__auto__.call(null);(statearr_325738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___325739);
return statearr_325738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
cljs.core.async.Mix = (function (){var obj325795 = {};return obj325795;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t325905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t325905 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta325906){
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
this.meta325906 = meta325906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t325905.cljs$lang$type = true;
cljs.core.async.t325905.cljs$lang$ctorStr = "cljs.core.async/t325905";
cljs.core.async.t325905.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t325905");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t325905.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t325905.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t325905.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t325905.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t325905.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t325905.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t325905.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t325905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t325905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_325907){var self__ = this;
var _325907__$1 = this;return self__.meta325906;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t325905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_325907,meta325906__$1){var self__ = this;
var _325907__$1 = this;return (new cljs.core.async.t325905(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta325906__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t325905 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t325905(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta325906){return (new cljs.core.async.t325905(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta325906));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t325905(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18838__auto___326014 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_325972){var state_val_325973 = (state_325972[1]);if((state_val_325973 === 1))
{var inst_325911 = (state_325972[7]);var inst_325911__$1 = calc_state.call(null);var inst_325912 = cljs.core.seq_QMARK_.call(null,inst_325911__$1);var state_325972__$1 = (function (){var statearr_325974 = state_325972;(statearr_325974[7] = inst_325911__$1);
return statearr_325974;
})();if(inst_325912)
{var statearr_325975_326015 = state_325972__$1;(statearr_325975_326015[1] = 2);
} else
{var statearr_325976_326016 = state_325972__$1;(statearr_325976_326016[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 2))
{var inst_325911 = (state_325972[7]);var inst_325914 = cljs.core.apply.call(null,cljs.core.hash_map,inst_325911);var state_325972__$1 = state_325972;var statearr_325977_326017 = state_325972__$1;(statearr_325977_326017[2] = inst_325914);
(statearr_325977_326017[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 3))
{var inst_325911 = (state_325972[7]);var state_325972__$1 = state_325972;var statearr_325978_326018 = state_325972__$1;(statearr_325978_326018[2] = inst_325911);
(statearr_325978_326018[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 4))
{var inst_325911 = (state_325972[7]);var inst_325917 = (state_325972[2]);var inst_325918 = cljs.core.get.call(null,inst_325917,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_325919 = cljs.core.get.call(null,inst_325917,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_325920 = cljs.core.get.call(null,inst_325917,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_325921 = inst_325911;var state_325972__$1 = (function (){var statearr_325979 = state_325972;(statearr_325979[8] = inst_325918);
(statearr_325979[9] = inst_325919);
(statearr_325979[10] = inst_325921);
(statearr_325979[11] = inst_325920);
return statearr_325979;
})();var statearr_325980_326019 = state_325972__$1;(statearr_325980_326019[2] = null);
(statearr_325980_326019[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 5))
{var inst_325921 = (state_325972[10]);var inst_325924 = cljs.core.seq_QMARK_.call(null,inst_325921);var state_325972__$1 = state_325972;if(inst_325924)
{var statearr_325981_326020 = state_325972__$1;(statearr_325981_326020[1] = 7);
} else
{var statearr_325982_326021 = state_325972__$1;(statearr_325982_326021[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 6))
{var inst_325970 = (state_325972[2]);var state_325972__$1 = state_325972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_325972__$1,inst_325970);
} else
{if((state_val_325973 === 7))
{var inst_325921 = (state_325972[10]);var inst_325926 = cljs.core.apply.call(null,cljs.core.hash_map,inst_325921);var state_325972__$1 = state_325972;var statearr_325983_326022 = state_325972__$1;(statearr_325983_326022[2] = inst_325926);
(statearr_325983_326022[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 8))
{var inst_325921 = (state_325972[10]);var state_325972__$1 = state_325972;var statearr_325984_326023 = state_325972__$1;(statearr_325984_326023[2] = inst_325921);
(statearr_325984_326023[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 9))
{var inst_325929 = (state_325972[12]);var inst_325929__$1 = (state_325972[2]);var inst_325930 = cljs.core.get.call(null,inst_325929__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_325931 = cljs.core.get.call(null,inst_325929__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_325932 = cljs.core.get.call(null,inst_325929__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_325972__$1 = (function (){var statearr_325985 = state_325972;(statearr_325985[13] = inst_325932);
(statearr_325985[14] = inst_325931);
(statearr_325985[12] = inst_325929__$1);
return statearr_325985;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_325972__$1,10,inst_325930);
} else
{if((state_val_325973 === 10))
{var inst_325936 = (state_325972[15]);var inst_325937 = (state_325972[16]);var inst_325935 = (state_325972[2]);var inst_325936__$1 = cljs.core.nth.call(null,inst_325935,0,null);var inst_325937__$1 = cljs.core.nth.call(null,inst_325935,1,null);var inst_325938 = (inst_325936__$1 == null);var inst_325939 = cljs.core._EQ_.call(null,inst_325937__$1,change);var inst_325940 = (inst_325938) || (inst_325939);var state_325972__$1 = (function (){var statearr_325986 = state_325972;(statearr_325986[15] = inst_325936__$1);
(statearr_325986[16] = inst_325937__$1);
return statearr_325986;
})();if(cljs.core.truth_(inst_325940))
{var statearr_325987_326024 = state_325972__$1;(statearr_325987_326024[1] = 11);
} else
{var statearr_325988_326025 = state_325972__$1;(statearr_325988_326025[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 11))
{var inst_325936 = (state_325972[15]);var inst_325942 = (inst_325936 == null);var state_325972__$1 = state_325972;if(cljs.core.truth_(inst_325942))
{var statearr_325989_326026 = state_325972__$1;(statearr_325989_326026[1] = 14);
} else
{var statearr_325990_326027 = state_325972__$1;(statearr_325990_326027[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 12))
{var inst_325932 = (state_325972[13]);var inst_325937 = (state_325972[16]);var inst_325951 = (state_325972[17]);var inst_325951__$1 = inst_325932.call(null,inst_325937);var state_325972__$1 = (function (){var statearr_325991 = state_325972;(statearr_325991[17] = inst_325951__$1);
return statearr_325991;
})();if(cljs.core.truth_(inst_325951__$1))
{var statearr_325992_326028 = state_325972__$1;(statearr_325992_326028[1] = 17);
} else
{var statearr_325993_326029 = state_325972__$1;(statearr_325993_326029[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 13))
{var inst_325968 = (state_325972[2]);var state_325972__$1 = state_325972;var statearr_325994_326030 = state_325972__$1;(statearr_325994_326030[2] = inst_325968);
(statearr_325994_326030[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 14))
{var inst_325937 = (state_325972[16]);var inst_325944 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_325937);var state_325972__$1 = state_325972;var statearr_325995_326031 = state_325972__$1;(statearr_325995_326031[2] = inst_325944);
(statearr_325995_326031[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 15))
{var state_325972__$1 = state_325972;var statearr_325996_326032 = state_325972__$1;(statearr_325996_326032[2] = null);
(statearr_325996_326032[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 16))
{var inst_325947 = (state_325972[2]);var inst_325948 = calc_state.call(null);var inst_325921 = inst_325948;var state_325972__$1 = (function (){var statearr_325997 = state_325972;(statearr_325997[10] = inst_325921);
(statearr_325997[18] = inst_325947);
return statearr_325997;
})();var statearr_325998_326033 = state_325972__$1;(statearr_325998_326033[2] = null);
(statearr_325998_326033[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 17))
{var inst_325951 = (state_325972[17]);var state_325972__$1 = state_325972;var statearr_325999_326034 = state_325972__$1;(statearr_325999_326034[2] = inst_325951);
(statearr_325999_326034[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 18))
{var inst_325932 = (state_325972[13]);var inst_325931 = (state_325972[14]);var inst_325937 = (state_325972[16]);var inst_325954 = cljs.core.empty_QMARK_.call(null,inst_325932);var inst_325955 = inst_325931.call(null,inst_325937);var inst_325956 = cljs.core.not.call(null,inst_325955);var inst_325957 = (inst_325954) && (inst_325956);var state_325972__$1 = state_325972;var statearr_326000_326035 = state_325972__$1;(statearr_326000_326035[2] = inst_325957);
(statearr_326000_326035[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 19))
{var inst_325959 = (state_325972[2]);var state_325972__$1 = state_325972;if(cljs.core.truth_(inst_325959))
{var statearr_326001_326036 = state_325972__$1;(statearr_326001_326036[1] = 20);
} else
{var statearr_326002_326037 = state_325972__$1;(statearr_326002_326037[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 20))
{var inst_325936 = (state_325972[15]);var state_325972__$1 = state_325972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_325972__$1,23,out,inst_325936);
} else
{if((state_val_325973 === 21))
{var state_325972__$1 = state_325972;var statearr_326003_326038 = state_325972__$1;(statearr_326003_326038[2] = null);
(statearr_326003_326038[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 22))
{var inst_325929 = (state_325972[12]);var inst_325965 = (state_325972[2]);var inst_325921 = inst_325929;var state_325972__$1 = (function (){var statearr_326004 = state_325972;(statearr_326004[10] = inst_325921);
(statearr_326004[19] = inst_325965);
return statearr_326004;
})();var statearr_326005_326039 = state_325972__$1;(statearr_326005_326039[2] = null);
(statearr_326005_326039[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325973 === 23))
{var inst_325962 = (state_325972[2]);var state_325972__$1 = state_325972;var statearr_326006_326040 = state_325972__$1;(statearr_326006_326040[2] = inst_325962);
(statearr_326006_326040[1] = 22);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_326010 = (new Array(20));(statearr_326010[0] = state_machine__18769__auto__);
(statearr_326010[1] = 1);
return statearr_326010;
});
var state_machine__18769__auto____1 = (function (state_325972){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_325972);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e326011){if((e326011 instanceof Object))
{var ex__18772__auto__ = e326011;var statearr_326012_326041 = state_325972;(statearr_326012_326041[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325972);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e326011;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__326042 = state_325972;
state_325972 = G__326042;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_325972){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_325972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_326013 = f__18839__auto__.call(null);(statearr_326013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___326014);
return statearr_326013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
cljs.core.async.Pub = (function (){var obj326044 = {};return obj326044;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13813__auto__ = p;if(and__13813__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13813__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14428__auto__ = (((p == null))?null:p);return (function (){var or__13825__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13813__auto__ = p;if(and__13813__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13813__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14428__auto__ = (((p == null))?null:p);return (function (){var or__13825__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13813__auto__ = p;if(and__13813__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13813__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14428__auto__ = (((p == null))?null:p);return (function (){var or__13825__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13813__auto__ = p;if(and__13813__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14428__auto__ = (((p == null))?null:p);return (function (){var or__13825__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
return (function (topic){var or__13825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13825__auto__,mults){
return (function (p1__326045_SHARP_){if(cljs.core.truth_(p1__326045_SHARP_.call(null,topic)))
{return p1__326045_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__326045_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13825__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t326170 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t326170 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta326171){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta326171 = meta326171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t326170.cljs$lang$type = true;
cljs.core.async.t326170.cljs$lang$ctorStr = "cljs.core.async/t326170";
cljs.core.async.t326170.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t326170");
});})(mults,ensure_mult))
;
cljs.core.async.t326170.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t326170.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t326170.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t326170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t326170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t326170.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t326170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t326170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_326172){var self__ = this;
var _326172__$1 = this;return self__.meta326171;
});})(mults,ensure_mult))
;
cljs.core.async.t326170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_326172,meta326171__$1){var self__ = this;
var _326172__$1 = this;return (new cljs.core.async.t326170(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta326171__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t326170 = ((function (mults,ensure_mult){
return (function __GT_t326170(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta326171){return (new cljs.core.async.t326170(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta326171));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t326170(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18838__auto___326294 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_326246){var state_val_326247 = (state_326246[1]);if((state_val_326247 === 1))
{var state_326246__$1 = state_326246;var statearr_326248_326295 = state_326246__$1;(statearr_326248_326295[2] = null);
(statearr_326248_326295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 2))
{var state_326246__$1 = state_326246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_326246__$1,4,ch);
} else
{if((state_val_326247 === 3))
{var inst_326244 = (state_326246[2]);var state_326246__$1 = state_326246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_326246__$1,inst_326244);
} else
{if((state_val_326247 === 4))
{var inst_326175 = (state_326246[7]);var inst_326175__$1 = (state_326246[2]);var inst_326176 = (inst_326175__$1 == null);var state_326246__$1 = (function (){var statearr_326249 = state_326246;(statearr_326249[7] = inst_326175__$1);
return statearr_326249;
})();if(cljs.core.truth_(inst_326176))
{var statearr_326250_326296 = state_326246__$1;(statearr_326250_326296[1] = 5);
} else
{var statearr_326251_326297 = state_326246__$1;(statearr_326251_326297[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 5))
{var inst_326182 = cljs.core.deref.call(null,mults);var inst_326183 = cljs.core.vals.call(null,inst_326182);var inst_326184 = cljs.core.seq.call(null,inst_326183);var inst_326185 = inst_326184;var inst_326186 = null;var inst_326187 = 0;var inst_326188 = 0;var state_326246__$1 = (function (){var statearr_326252 = state_326246;(statearr_326252[8] = inst_326186);
(statearr_326252[9] = inst_326185);
(statearr_326252[10] = inst_326188);
(statearr_326252[11] = inst_326187);
return statearr_326252;
})();var statearr_326253_326298 = state_326246__$1;(statearr_326253_326298[2] = null);
(statearr_326253_326298[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 6))
{var inst_326225 = (state_326246[12]);var inst_326223 = (state_326246[13]);var inst_326175 = (state_326246[7]);var inst_326223__$1 = topic_fn.call(null,inst_326175);var inst_326224 = cljs.core.deref.call(null,mults);var inst_326225__$1 = cljs.core.get.call(null,inst_326224,inst_326223__$1);var state_326246__$1 = (function (){var statearr_326254 = state_326246;(statearr_326254[12] = inst_326225__$1);
(statearr_326254[13] = inst_326223__$1);
return statearr_326254;
})();if(cljs.core.truth_(inst_326225__$1))
{var statearr_326255_326299 = state_326246__$1;(statearr_326255_326299[1] = 19);
} else
{var statearr_326256_326300 = state_326246__$1;(statearr_326256_326300[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 7))
{var inst_326242 = (state_326246[2]);var state_326246__$1 = state_326246;var statearr_326257_326301 = state_326246__$1;(statearr_326257_326301[2] = inst_326242);
(statearr_326257_326301[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 8))
{var inst_326188 = (state_326246[10]);var inst_326187 = (state_326246[11]);var inst_326190 = (inst_326188 < inst_326187);var inst_326191 = inst_326190;var state_326246__$1 = state_326246;if(cljs.core.truth_(inst_326191))
{var statearr_326261_326302 = state_326246__$1;(statearr_326261_326302[1] = 10);
} else
{var statearr_326262_326303 = state_326246__$1;(statearr_326262_326303[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 9))
{var inst_326221 = (state_326246[2]);var state_326246__$1 = state_326246;var statearr_326263_326304 = state_326246__$1;(statearr_326263_326304[2] = inst_326221);
(statearr_326263_326304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 10))
{var inst_326186 = (state_326246[8]);var inst_326185 = (state_326246[9]);var inst_326188 = (state_326246[10]);var inst_326187 = (state_326246[11]);var inst_326193 = cljs.core._nth.call(null,inst_326186,inst_326188);var inst_326194 = cljs.core.async.muxch_STAR_.call(null,inst_326193);var inst_326195 = cljs.core.async.close_BANG_.call(null,inst_326194);var inst_326196 = (inst_326188 + 1);var tmp326258 = inst_326186;var tmp326259 = inst_326185;var tmp326260 = inst_326187;var inst_326185__$1 = tmp326259;var inst_326186__$1 = tmp326258;var inst_326187__$1 = tmp326260;var inst_326188__$1 = inst_326196;var state_326246__$1 = (function (){var statearr_326264 = state_326246;(statearr_326264[8] = inst_326186__$1);
(statearr_326264[9] = inst_326185__$1);
(statearr_326264[10] = inst_326188__$1);
(statearr_326264[11] = inst_326187__$1);
(statearr_326264[14] = inst_326195);
return statearr_326264;
})();var statearr_326265_326305 = state_326246__$1;(statearr_326265_326305[2] = null);
(statearr_326265_326305[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 11))
{var inst_326185 = (state_326246[9]);var inst_326199 = (state_326246[15]);var inst_326199__$1 = cljs.core.seq.call(null,inst_326185);var state_326246__$1 = (function (){var statearr_326266 = state_326246;(statearr_326266[15] = inst_326199__$1);
return statearr_326266;
})();if(inst_326199__$1)
{var statearr_326267_326306 = state_326246__$1;(statearr_326267_326306[1] = 13);
} else
{var statearr_326268_326307 = state_326246__$1;(statearr_326268_326307[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 12))
{var inst_326219 = (state_326246[2]);var state_326246__$1 = state_326246;var statearr_326269_326308 = state_326246__$1;(statearr_326269_326308[2] = inst_326219);
(statearr_326269_326308[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 13))
{var inst_326199 = (state_326246[15]);var inst_326201 = cljs.core.chunked_seq_QMARK_.call(null,inst_326199);var state_326246__$1 = state_326246;if(inst_326201)
{var statearr_326270_326309 = state_326246__$1;(statearr_326270_326309[1] = 16);
} else
{var statearr_326271_326310 = state_326246__$1;(statearr_326271_326310[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 14))
{var state_326246__$1 = state_326246;var statearr_326272_326311 = state_326246__$1;(statearr_326272_326311[2] = null);
(statearr_326272_326311[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 15))
{var inst_326217 = (state_326246[2]);var state_326246__$1 = state_326246;var statearr_326273_326312 = state_326246__$1;(statearr_326273_326312[2] = inst_326217);
(statearr_326273_326312[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 16))
{var inst_326199 = (state_326246[15]);var inst_326203 = cljs.core.chunk_first.call(null,inst_326199);var inst_326204 = cljs.core.chunk_rest.call(null,inst_326199);var inst_326205 = cljs.core.count.call(null,inst_326203);var inst_326185 = inst_326204;var inst_326186 = inst_326203;var inst_326187 = inst_326205;var inst_326188 = 0;var state_326246__$1 = (function (){var statearr_326274 = state_326246;(statearr_326274[8] = inst_326186);
(statearr_326274[9] = inst_326185);
(statearr_326274[10] = inst_326188);
(statearr_326274[11] = inst_326187);
return statearr_326274;
})();var statearr_326275_326313 = state_326246__$1;(statearr_326275_326313[2] = null);
(statearr_326275_326313[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 17))
{var inst_326199 = (state_326246[15]);var inst_326208 = cljs.core.first.call(null,inst_326199);var inst_326209 = cljs.core.async.muxch_STAR_.call(null,inst_326208);var inst_326210 = cljs.core.async.close_BANG_.call(null,inst_326209);var inst_326211 = cljs.core.next.call(null,inst_326199);var inst_326185 = inst_326211;var inst_326186 = null;var inst_326187 = 0;var inst_326188 = 0;var state_326246__$1 = (function (){var statearr_326276 = state_326246;(statearr_326276[8] = inst_326186);
(statearr_326276[9] = inst_326185);
(statearr_326276[10] = inst_326188);
(statearr_326276[11] = inst_326187);
(statearr_326276[16] = inst_326210);
return statearr_326276;
})();var statearr_326277_326314 = state_326246__$1;(statearr_326277_326314[2] = null);
(statearr_326277_326314[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 18))
{var inst_326214 = (state_326246[2]);var state_326246__$1 = state_326246;var statearr_326278_326315 = state_326246__$1;(statearr_326278_326315[2] = inst_326214);
(statearr_326278_326315[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 19))
{var state_326246__$1 = state_326246;var statearr_326279_326316 = state_326246__$1;(statearr_326279_326316[2] = null);
(statearr_326279_326316[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 20))
{var state_326246__$1 = state_326246;var statearr_326280_326317 = state_326246__$1;(statearr_326280_326317[2] = null);
(statearr_326280_326317[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 21))
{var inst_326239 = (state_326246[2]);var state_326246__$1 = (function (){var statearr_326281 = state_326246;(statearr_326281[17] = inst_326239);
return statearr_326281;
})();var statearr_326282_326318 = state_326246__$1;(statearr_326282_326318[2] = null);
(statearr_326282_326318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 22))
{var inst_326236 = (state_326246[2]);var state_326246__$1 = state_326246;var statearr_326283_326319 = state_326246__$1;(statearr_326283_326319[2] = inst_326236);
(statearr_326283_326319[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 23))
{var inst_326223 = (state_326246[13]);var inst_326227 = (state_326246[2]);var inst_326228 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_326223);var state_326246__$1 = (function (){var statearr_326284 = state_326246;(statearr_326284[18] = inst_326227);
return statearr_326284;
})();var statearr_326285_326320 = state_326246__$1;(statearr_326285_326320[2] = inst_326228);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_326246__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326247 === 24))
{var inst_326225 = (state_326246[12]);var inst_326175 = (state_326246[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_326246,23,Object,null,22);var inst_326232 = cljs.core.async.muxch_STAR_.call(null,inst_326225);var state_326246__$1 = state_326246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_326246__$1,25,inst_326232,inst_326175);
} else
{if((state_val_326247 === 25))
{var inst_326234 = (state_326246[2]);var state_326246__$1 = state_326246;var statearr_326286_326321 = state_326246__$1;(statearr_326286_326321[2] = inst_326234);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_326246__$1);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_326290 = (new Array(19));(statearr_326290[0] = state_machine__18769__auto__);
(statearr_326290[1] = 1);
return statearr_326290;
});
var state_machine__18769__auto____1 = (function (state_326246){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_326246);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e326291){if((e326291 instanceof Object))
{var ex__18772__auto__ = e326291;var statearr_326292_326322 = state_326246;(statearr_326292_326322[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_326246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e326291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__326323 = state_326246;
state_326246 = G__326323;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_326246){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_326246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_326293 = f__18839__auto__.call(null);(statearr_326293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___326294);
return statearr_326293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
,cljs.core.range.call(null,cnt));var c__18838__auto___326460 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_326430){var state_val_326431 = (state_326430[1]);if((state_val_326431 === 1))
{var state_326430__$1 = state_326430;var statearr_326432_326461 = state_326430__$1;(statearr_326432_326461[2] = null);
(statearr_326432_326461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 2))
{var inst_326393 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_326394 = 0;var state_326430__$1 = (function (){var statearr_326433 = state_326430;(statearr_326433[7] = inst_326394);
(statearr_326433[8] = inst_326393);
return statearr_326433;
})();var statearr_326434_326462 = state_326430__$1;(statearr_326434_326462[2] = null);
(statearr_326434_326462[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 3))
{var inst_326428 = (state_326430[2]);var state_326430__$1 = state_326430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_326430__$1,inst_326428);
} else
{if((state_val_326431 === 4))
{var inst_326394 = (state_326430[7]);var inst_326396 = (inst_326394 < cnt);var state_326430__$1 = state_326430;if(cljs.core.truth_(inst_326396))
{var statearr_326435_326463 = state_326430__$1;(statearr_326435_326463[1] = 6);
} else
{var statearr_326436_326464 = state_326430__$1;(statearr_326436_326464[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 5))
{var inst_326414 = (state_326430[2]);var state_326430__$1 = (function (){var statearr_326437 = state_326430;(statearr_326437[9] = inst_326414);
return statearr_326437;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_326430__$1,12,dchan);
} else
{if((state_val_326431 === 6))
{var state_326430__$1 = state_326430;var statearr_326438_326465 = state_326430__$1;(statearr_326438_326465[2] = null);
(statearr_326438_326465[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 7))
{var state_326430__$1 = state_326430;var statearr_326439_326466 = state_326430__$1;(statearr_326439_326466[2] = null);
(statearr_326439_326466[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 8))
{var inst_326412 = (state_326430[2]);var state_326430__$1 = state_326430;var statearr_326440_326467 = state_326430__$1;(statearr_326440_326467[2] = inst_326412);
(statearr_326440_326467[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 9))
{var inst_326394 = (state_326430[7]);var inst_326407 = (state_326430[2]);var inst_326408 = (inst_326394 + 1);var inst_326394__$1 = inst_326408;var state_326430__$1 = (function (){var statearr_326441 = state_326430;(statearr_326441[7] = inst_326394__$1);
(statearr_326441[10] = inst_326407);
return statearr_326441;
})();var statearr_326442_326468 = state_326430__$1;(statearr_326442_326468[2] = null);
(statearr_326442_326468[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 10))
{var inst_326398 = (state_326430[2]);var inst_326399 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_326430__$1 = (function (){var statearr_326443 = state_326430;(statearr_326443[11] = inst_326398);
return statearr_326443;
})();var statearr_326444_326469 = state_326430__$1;(statearr_326444_326469[2] = inst_326399);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_326430__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 11))
{var inst_326394 = (state_326430[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_326430,10,Object,null,9);var inst_326403 = chs__$1.call(null,inst_326394);var inst_326404 = done.call(null,inst_326394);var inst_326405 = cljs.core.async.take_BANG_.call(null,inst_326403,inst_326404);var state_326430__$1 = state_326430;var statearr_326445_326470 = state_326430__$1;(statearr_326445_326470[2] = inst_326405);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_326430__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 12))
{var inst_326416 = (state_326430[12]);var inst_326416__$1 = (state_326430[2]);var inst_326417 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_326416__$1);var state_326430__$1 = (function (){var statearr_326446 = state_326430;(statearr_326446[12] = inst_326416__$1);
return statearr_326446;
})();if(cljs.core.truth_(inst_326417))
{var statearr_326447_326471 = state_326430__$1;(statearr_326447_326471[1] = 13);
} else
{var statearr_326448_326472 = state_326430__$1;(statearr_326448_326472[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 13))
{var inst_326419 = cljs.core.async.close_BANG_.call(null,out);var state_326430__$1 = state_326430;var statearr_326449_326473 = state_326430__$1;(statearr_326449_326473[2] = inst_326419);
(statearr_326449_326473[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 14))
{var inst_326416 = (state_326430[12]);var inst_326421 = cljs.core.apply.call(null,f,inst_326416);var state_326430__$1 = state_326430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_326430__$1,16,out,inst_326421);
} else
{if((state_val_326431 === 15))
{var inst_326426 = (state_326430[2]);var state_326430__$1 = state_326430;var statearr_326450_326474 = state_326430__$1;(statearr_326450_326474[2] = inst_326426);
(statearr_326450_326474[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326431 === 16))
{var inst_326423 = (state_326430[2]);var state_326430__$1 = (function (){var statearr_326451 = state_326430;(statearr_326451[13] = inst_326423);
return statearr_326451;
})();var statearr_326452_326475 = state_326430__$1;(statearr_326452_326475[2] = null);
(statearr_326452_326475[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_326456 = (new Array(14));(statearr_326456[0] = state_machine__18769__auto__);
(statearr_326456[1] = 1);
return statearr_326456;
});
var state_machine__18769__auto____1 = (function (state_326430){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_326430);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e326457){if((e326457 instanceof Object))
{var ex__18772__auto__ = e326457;var statearr_326458_326476 = state_326430;(statearr_326458_326476[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_326430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e326457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__326477 = state_326430;
state_326430 = G__326477;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_326430){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_326430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_326459 = f__18839__auto__.call(null);(statearr_326459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___326460);
return statearr_326459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___326585 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_326561){var state_val_326562 = (state_326561[1]);if((state_val_326562 === 1))
{var inst_326532 = cljs.core.vec.call(null,chs);var inst_326533 = inst_326532;var state_326561__$1 = (function (){var statearr_326563 = state_326561;(statearr_326563[7] = inst_326533);
return statearr_326563;
})();var statearr_326564_326586 = state_326561__$1;(statearr_326564_326586[2] = null);
(statearr_326564_326586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326562 === 2))
{var inst_326533 = (state_326561[7]);var inst_326535 = cljs.core.count.call(null,inst_326533);var inst_326536 = (inst_326535 > 0);var state_326561__$1 = state_326561;if(cljs.core.truth_(inst_326536))
{var statearr_326565_326587 = state_326561__$1;(statearr_326565_326587[1] = 4);
} else
{var statearr_326566_326588 = state_326561__$1;(statearr_326566_326588[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326562 === 3))
{var inst_326559 = (state_326561[2]);var state_326561__$1 = state_326561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_326561__$1,inst_326559);
} else
{if((state_val_326562 === 4))
{var inst_326533 = (state_326561[7]);var state_326561__$1 = state_326561;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_326561__$1,7,inst_326533);
} else
{if((state_val_326562 === 5))
{var inst_326555 = cljs.core.async.close_BANG_.call(null,out);var state_326561__$1 = state_326561;var statearr_326567_326589 = state_326561__$1;(statearr_326567_326589[2] = inst_326555);
(statearr_326567_326589[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326562 === 6))
{var inst_326557 = (state_326561[2]);var state_326561__$1 = state_326561;var statearr_326568_326590 = state_326561__$1;(statearr_326568_326590[2] = inst_326557);
(statearr_326568_326590[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326562 === 7))
{var inst_326541 = (state_326561[8]);var inst_326540 = (state_326561[9]);var inst_326540__$1 = (state_326561[2]);var inst_326541__$1 = cljs.core.nth.call(null,inst_326540__$1,0,null);var inst_326542 = cljs.core.nth.call(null,inst_326540__$1,1,null);var inst_326543 = (inst_326541__$1 == null);var state_326561__$1 = (function (){var statearr_326569 = state_326561;(statearr_326569[8] = inst_326541__$1);
(statearr_326569[10] = inst_326542);
(statearr_326569[9] = inst_326540__$1);
return statearr_326569;
})();if(cljs.core.truth_(inst_326543))
{var statearr_326570_326591 = state_326561__$1;(statearr_326570_326591[1] = 8);
} else
{var statearr_326571_326592 = state_326561__$1;(statearr_326571_326592[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326562 === 8))
{var inst_326541 = (state_326561[8]);var inst_326542 = (state_326561[10]);var inst_326540 = (state_326561[9]);var inst_326533 = (state_326561[7]);var inst_326545 = (function (){var c = inst_326542;var v = inst_326541;var vec__326538 = inst_326540;var cs = inst_326533;return ((function (c,v,vec__326538,cs,inst_326541,inst_326542,inst_326540,inst_326533,state_val_326562){
return (function (p1__326478_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__326478_SHARP_);
});
;})(c,v,vec__326538,cs,inst_326541,inst_326542,inst_326540,inst_326533,state_val_326562))
})();var inst_326546 = cljs.core.filterv.call(null,inst_326545,inst_326533);var inst_326533__$1 = inst_326546;var state_326561__$1 = (function (){var statearr_326572 = state_326561;(statearr_326572[7] = inst_326533__$1);
return statearr_326572;
})();var statearr_326573_326593 = state_326561__$1;(statearr_326573_326593[2] = null);
(statearr_326573_326593[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326562 === 9))
{var inst_326541 = (state_326561[8]);var state_326561__$1 = state_326561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_326561__$1,11,out,inst_326541);
} else
{if((state_val_326562 === 10))
{var inst_326553 = (state_326561[2]);var state_326561__$1 = state_326561;var statearr_326575_326594 = state_326561__$1;(statearr_326575_326594[2] = inst_326553);
(statearr_326575_326594[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326562 === 11))
{var inst_326533 = (state_326561[7]);var inst_326550 = (state_326561[2]);var tmp326574 = inst_326533;var inst_326533__$1 = tmp326574;var state_326561__$1 = (function (){var statearr_326576 = state_326561;(statearr_326576[11] = inst_326550);
(statearr_326576[7] = inst_326533__$1);
return statearr_326576;
})();var statearr_326577_326595 = state_326561__$1;(statearr_326577_326595[2] = null);
(statearr_326577_326595[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_326581 = (new Array(12));(statearr_326581[0] = state_machine__18769__auto__);
(statearr_326581[1] = 1);
return statearr_326581;
});
var state_machine__18769__auto____1 = (function (state_326561){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_326561);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e326582){if((e326582 instanceof Object))
{var ex__18772__auto__ = e326582;var statearr_326583_326596 = state_326561;(statearr_326583_326596[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_326561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e326582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__326597 = state_326561;
state_326561 = G__326597;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_326561){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_326561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_326584 = f__18839__auto__.call(null);(statearr_326584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___326585);
return statearr_326584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___326690 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_326667){var state_val_326668 = (state_326667[1]);if((state_val_326668 === 1))
{var inst_326644 = 0;var state_326667__$1 = (function (){var statearr_326669 = state_326667;(statearr_326669[7] = inst_326644);
return statearr_326669;
})();var statearr_326670_326691 = state_326667__$1;(statearr_326670_326691[2] = null);
(statearr_326670_326691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326668 === 2))
{var inst_326644 = (state_326667[7]);var inst_326646 = (inst_326644 < n);var state_326667__$1 = state_326667;if(cljs.core.truth_(inst_326646))
{var statearr_326671_326692 = state_326667__$1;(statearr_326671_326692[1] = 4);
} else
{var statearr_326672_326693 = state_326667__$1;(statearr_326672_326693[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326668 === 3))
{var inst_326664 = (state_326667[2]);var inst_326665 = cljs.core.async.close_BANG_.call(null,out);var state_326667__$1 = (function (){var statearr_326673 = state_326667;(statearr_326673[8] = inst_326664);
return statearr_326673;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_326667__$1,inst_326665);
} else
{if((state_val_326668 === 4))
{var state_326667__$1 = state_326667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_326667__$1,7,ch);
} else
{if((state_val_326668 === 5))
{var state_326667__$1 = state_326667;var statearr_326674_326694 = state_326667__$1;(statearr_326674_326694[2] = null);
(statearr_326674_326694[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326668 === 6))
{var inst_326662 = (state_326667[2]);var state_326667__$1 = state_326667;var statearr_326675_326695 = state_326667__$1;(statearr_326675_326695[2] = inst_326662);
(statearr_326675_326695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326668 === 7))
{var inst_326649 = (state_326667[9]);var inst_326649__$1 = (state_326667[2]);var inst_326650 = (inst_326649__$1 == null);var inst_326651 = cljs.core.not.call(null,inst_326650);var state_326667__$1 = (function (){var statearr_326676 = state_326667;(statearr_326676[9] = inst_326649__$1);
return statearr_326676;
})();if(inst_326651)
{var statearr_326677_326696 = state_326667__$1;(statearr_326677_326696[1] = 8);
} else
{var statearr_326678_326697 = state_326667__$1;(statearr_326678_326697[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326668 === 8))
{var inst_326649 = (state_326667[9]);var state_326667__$1 = state_326667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_326667__$1,11,out,inst_326649);
} else
{if((state_val_326668 === 9))
{var state_326667__$1 = state_326667;var statearr_326679_326698 = state_326667__$1;(statearr_326679_326698[2] = null);
(statearr_326679_326698[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326668 === 10))
{var inst_326659 = (state_326667[2]);var state_326667__$1 = state_326667;var statearr_326680_326699 = state_326667__$1;(statearr_326680_326699[2] = inst_326659);
(statearr_326680_326699[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326668 === 11))
{var inst_326644 = (state_326667[7]);var inst_326654 = (state_326667[2]);var inst_326655 = (inst_326644 + 1);var inst_326644__$1 = inst_326655;var state_326667__$1 = (function (){var statearr_326681 = state_326667;(statearr_326681[10] = inst_326654);
(statearr_326681[7] = inst_326644__$1);
return statearr_326681;
})();var statearr_326682_326700 = state_326667__$1;(statearr_326682_326700[2] = null);
(statearr_326682_326700[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_326686 = (new Array(11));(statearr_326686[0] = state_machine__18769__auto__);
(statearr_326686[1] = 1);
return statearr_326686;
});
var state_machine__18769__auto____1 = (function (state_326667){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_326667);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e326687){if((e326687 instanceof Object))
{var ex__18772__auto__ = e326687;var statearr_326688_326701 = state_326667;(statearr_326688_326701[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_326667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e326687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__326702 = state_326667;
state_326667 = G__326702;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_326667){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_326667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_326689 = f__18839__auto__.call(null);(statearr_326689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___326690);
return statearr_326689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___326799 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_326774){var state_val_326775 = (state_326774[1]);if((state_val_326775 === 1))
{var inst_326751 = null;var state_326774__$1 = (function (){var statearr_326776 = state_326774;(statearr_326776[7] = inst_326751);
return statearr_326776;
})();var statearr_326777_326800 = state_326774__$1;(statearr_326777_326800[2] = null);
(statearr_326777_326800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326775 === 2))
{var state_326774__$1 = state_326774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_326774__$1,4,ch);
} else
{if((state_val_326775 === 3))
{var inst_326771 = (state_326774[2]);var inst_326772 = cljs.core.async.close_BANG_.call(null,out);var state_326774__$1 = (function (){var statearr_326778 = state_326774;(statearr_326778[8] = inst_326771);
return statearr_326778;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_326774__$1,inst_326772);
} else
{if((state_val_326775 === 4))
{var inst_326754 = (state_326774[9]);var inst_326754__$1 = (state_326774[2]);var inst_326755 = (inst_326754__$1 == null);var inst_326756 = cljs.core.not.call(null,inst_326755);var state_326774__$1 = (function (){var statearr_326779 = state_326774;(statearr_326779[9] = inst_326754__$1);
return statearr_326779;
})();if(inst_326756)
{var statearr_326780_326801 = state_326774__$1;(statearr_326780_326801[1] = 5);
} else
{var statearr_326781_326802 = state_326774__$1;(statearr_326781_326802[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326775 === 5))
{var inst_326754 = (state_326774[9]);var inst_326751 = (state_326774[7]);var inst_326758 = cljs.core._EQ_.call(null,inst_326754,inst_326751);var state_326774__$1 = state_326774;if(inst_326758)
{var statearr_326782_326803 = state_326774__$1;(statearr_326782_326803[1] = 8);
} else
{var statearr_326783_326804 = state_326774__$1;(statearr_326783_326804[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326775 === 6))
{var state_326774__$1 = state_326774;var statearr_326785_326805 = state_326774__$1;(statearr_326785_326805[2] = null);
(statearr_326785_326805[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326775 === 7))
{var inst_326769 = (state_326774[2]);var state_326774__$1 = state_326774;var statearr_326786_326806 = state_326774__$1;(statearr_326786_326806[2] = inst_326769);
(statearr_326786_326806[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326775 === 8))
{var inst_326751 = (state_326774[7]);var tmp326784 = inst_326751;var inst_326751__$1 = tmp326784;var state_326774__$1 = (function (){var statearr_326787 = state_326774;(statearr_326787[7] = inst_326751__$1);
return statearr_326787;
})();var statearr_326788_326807 = state_326774__$1;(statearr_326788_326807[2] = null);
(statearr_326788_326807[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326775 === 9))
{var inst_326754 = (state_326774[9]);var state_326774__$1 = state_326774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_326774__$1,11,out,inst_326754);
} else
{if((state_val_326775 === 10))
{var inst_326766 = (state_326774[2]);var state_326774__$1 = state_326774;var statearr_326789_326808 = state_326774__$1;(statearr_326789_326808[2] = inst_326766);
(statearr_326789_326808[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326775 === 11))
{var inst_326754 = (state_326774[9]);var inst_326763 = (state_326774[2]);var inst_326751 = inst_326754;var state_326774__$1 = (function (){var statearr_326790 = state_326774;(statearr_326790[7] = inst_326751);
(statearr_326790[10] = inst_326763);
return statearr_326790;
})();var statearr_326791_326809 = state_326774__$1;(statearr_326791_326809[2] = null);
(statearr_326791_326809[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_326795 = (new Array(11));(statearr_326795[0] = state_machine__18769__auto__);
(statearr_326795[1] = 1);
return statearr_326795;
});
var state_machine__18769__auto____1 = (function (state_326774){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_326774);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e326796){if((e326796 instanceof Object))
{var ex__18772__auto__ = e326796;var statearr_326797_326810 = state_326774;(statearr_326797_326810[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_326774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e326796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__326811 = state_326774;
state_326774 = G__326811;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_326774){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_326774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_326798 = f__18839__auto__.call(null);(statearr_326798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___326799);
return statearr_326798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___326946 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_326916){var state_val_326917 = (state_326916[1]);if((state_val_326917 === 1))
{var inst_326879 = (new Array(n));var inst_326880 = inst_326879;var inst_326881 = 0;var state_326916__$1 = (function (){var statearr_326918 = state_326916;(statearr_326918[7] = inst_326881);
(statearr_326918[8] = inst_326880);
return statearr_326918;
})();var statearr_326919_326947 = state_326916__$1;(statearr_326919_326947[2] = null);
(statearr_326919_326947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326917 === 2))
{var state_326916__$1 = state_326916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_326916__$1,4,ch);
} else
{if((state_val_326917 === 3))
{var inst_326914 = (state_326916[2]);var state_326916__$1 = state_326916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_326916__$1,inst_326914);
} else
{if((state_val_326917 === 4))
{var inst_326884 = (state_326916[9]);var inst_326884__$1 = (state_326916[2]);var inst_326885 = (inst_326884__$1 == null);var inst_326886 = cljs.core.not.call(null,inst_326885);var state_326916__$1 = (function (){var statearr_326920 = state_326916;(statearr_326920[9] = inst_326884__$1);
return statearr_326920;
})();if(inst_326886)
{var statearr_326921_326948 = state_326916__$1;(statearr_326921_326948[1] = 5);
} else
{var statearr_326922_326949 = state_326916__$1;(statearr_326922_326949[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326917 === 5))
{var inst_326884 = (state_326916[9]);var inst_326881 = (state_326916[7]);var inst_326880 = (state_326916[8]);var inst_326889 = (state_326916[10]);var inst_326888 = (inst_326880[inst_326881] = inst_326884);var inst_326889__$1 = (inst_326881 + 1);var inst_326890 = (inst_326889__$1 < n);var state_326916__$1 = (function (){var statearr_326923 = state_326916;(statearr_326923[10] = inst_326889__$1);
(statearr_326923[11] = inst_326888);
return statearr_326923;
})();if(cljs.core.truth_(inst_326890))
{var statearr_326924_326950 = state_326916__$1;(statearr_326924_326950[1] = 8);
} else
{var statearr_326925_326951 = state_326916__$1;(statearr_326925_326951[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326917 === 6))
{var inst_326881 = (state_326916[7]);var inst_326902 = (inst_326881 > 0);var state_326916__$1 = state_326916;if(cljs.core.truth_(inst_326902))
{var statearr_326927_326952 = state_326916__$1;(statearr_326927_326952[1] = 12);
} else
{var statearr_326928_326953 = state_326916__$1;(statearr_326928_326953[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326917 === 7))
{var inst_326912 = (state_326916[2]);var state_326916__$1 = state_326916;var statearr_326929_326954 = state_326916__$1;(statearr_326929_326954[2] = inst_326912);
(statearr_326929_326954[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326917 === 8))
{var inst_326880 = (state_326916[8]);var inst_326889 = (state_326916[10]);var tmp326926 = inst_326880;var inst_326880__$1 = tmp326926;var inst_326881 = inst_326889;var state_326916__$1 = (function (){var statearr_326930 = state_326916;(statearr_326930[7] = inst_326881);
(statearr_326930[8] = inst_326880__$1);
return statearr_326930;
})();var statearr_326931_326955 = state_326916__$1;(statearr_326931_326955[2] = null);
(statearr_326931_326955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326917 === 9))
{var inst_326880 = (state_326916[8]);var inst_326894 = cljs.core.vec.call(null,inst_326880);var state_326916__$1 = state_326916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_326916__$1,11,out,inst_326894);
} else
{if((state_val_326917 === 10))
{var inst_326900 = (state_326916[2]);var state_326916__$1 = state_326916;var statearr_326932_326956 = state_326916__$1;(statearr_326932_326956[2] = inst_326900);
(statearr_326932_326956[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326917 === 11))
{var inst_326896 = (state_326916[2]);var inst_326897 = (new Array(n));var inst_326880 = inst_326897;var inst_326881 = 0;var state_326916__$1 = (function (){var statearr_326933 = state_326916;(statearr_326933[7] = inst_326881);
(statearr_326933[8] = inst_326880);
(statearr_326933[12] = inst_326896);
return statearr_326933;
})();var statearr_326934_326957 = state_326916__$1;(statearr_326934_326957[2] = null);
(statearr_326934_326957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326917 === 12))
{var inst_326880 = (state_326916[8]);var inst_326904 = cljs.core.vec.call(null,inst_326880);var state_326916__$1 = state_326916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_326916__$1,15,out,inst_326904);
} else
{if((state_val_326917 === 13))
{var state_326916__$1 = state_326916;var statearr_326935_326958 = state_326916__$1;(statearr_326935_326958[2] = null);
(statearr_326935_326958[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326917 === 14))
{var inst_326909 = (state_326916[2]);var inst_326910 = cljs.core.async.close_BANG_.call(null,out);var state_326916__$1 = (function (){var statearr_326936 = state_326916;(statearr_326936[13] = inst_326909);
return statearr_326936;
})();var statearr_326937_326959 = state_326916__$1;(statearr_326937_326959[2] = inst_326910);
(statearr_326937_326959[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_326917 === 15))
{var inst_326906 = (state_326916[2]);var state_326916__$1 = state_326916;var statearr_326938_326960 = state_326916__$1;(statearr_326938_326960[2] = inst_326906);
(statearr_326938_326960[1] = 14);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_326942 = (new Array(14));(statearr_326942[0] = state_machine__18769__auto__);
(statearr_326942[1] = 1);
return statearr_326942;
});
var state_machine__18769__auto____1 = (function (state_326916){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_326916);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e326943){if((e326943 instanceof Object))
{var ex__18772__auto__ = e326943;var statearr_326944_326961 = state_326916;(statearr_326944_326961[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_326916);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e326943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__326962 = state_326916;
state_326916 = G__326962;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_326916){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_326916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_326945 = f__18839__auto__.call(null);(statearr_326945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___326946);
return statearr_326945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___327105 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_327075){var state_val_327076 = (state_327075[1]);if((state_val_327076 === 1))
{var inst_327034 = (new Array(0));var inst_327035 = inst_327034;var inst_327036 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_327075__$1 = (function (){var statearr_327077 = state_327075;(statearr_327077[7] = inst_327036);
(statearr_327077[8] = inst_327035);
return statearr_327077;
})();var statearr_327078_327106 = state_327075__$1;(statearr_327078_327106[2] = null);
(statearr_327078_327106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327076 === 2))
{var state_327075__$1 = state_327075;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_327075__$1,4,ch);
} else
{if((state_val_327076 === 3))
{var inst_327073 = (state_327075[2]);var state_327075__$1 = state_327075;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_327075__$1,inst_327073);
} else
{if((state_val_327076 === 4))
{var inst_327039 = (state_327075[9]);var inst_327039__$1 = (state_327075[2]);var inst_327040 = (inst_327039__$1 == null);var inst_327041 = cljs.core.not.call(null,inst_327040);var state_327075__$1 = (function (){var statearr_327079 = state_327075;(statearr_327079[9] = inst_327039__$1);
return statearr_327079;
})();if(inst_327041)
{var statearr_327080_327107 = state_327075__$1;(statearr_327080_327107[1] = 5);
} else
{var statearr_327081_327108 = state_327075__$1;(statearr_327081_327108[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327076 === 5))
{var inst_327039 = (state_327075[9]);var inst_327036 = (state_327075[7]);var inst_327043 = (state_327075[10]);var inst_327043__$1 = f.call(null,inst_327039);var inst_327044 = cljs.core._EQ_.call(null,inst_327043__$1,inst_327036);var inst_327045 = cljs.core.keyword_identical_QMARK_.call(null,inst_327036,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_327046 = (inst_327044) || (inst_327045);var state_327075__$1 = (function (){var statearr_327082 = state_327075;(statearr_327082[10] = inst_327043__$1);
return statearr_327082;
})();if(cljs.core.truth_(inst_327046))
{var statearr_327083_327109 = state_327075__$1;(statearr_327083_327109[1] = 8);
} else
{var statearr_327084_327110 = state_327075__$1;(statearr_327084_327110[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327076 === 6))
{var inst_327035 = (state_327075[8]);var inst_327060 = inst_327035.length;var inst_327061 = (inst_327060 > 0);var state_327075__$1 = state_327075;if(cljs.core.truth_(inst_327061))
{var statearr_327086_327111 = state_327075__$1;(statearr_327086_327111[1] = 12);
} else
{var statearr_327087_327112 = state_327075__$1;(statearr_327087_327112[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327076 === 7))
{var inst_327071 = (state_327075[2]);var state_327075__$1 = state_327075;var statearr_327088_327113 = state_327075__$1;(statearr_327088_327113[2] = inst_327071);
(statearr_327088_327113[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327076 === 8))
{var inst_327039 = (state_327075[9]);var inst_327035 = (state_327075[8]);var inst_327043 = (state_327075[10]);var inst_327048 = inst_327035.push(inst_327039);var tmp327085 = inst_327035;var inst_327035__$1 = tmp327085;var inst_327036 = inst_327043;var state_327075__$1 = (function (){var statearr_327089 = state_327075;(statearr_327089[7] = inst_327036);
(statearr_327089[8] = inst_327035__$1);
(statearr_327089[11] = inst_327048);
return statearr_327089;
})();var statearr_327090_327114 = state_327075__$1;(statearr_327090_327114[2] = null);
(statearr_327090_327114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327076 === 9))
{var inst_327035 = (state_327075[8]);var inst_327051 = cljs.core.vec.call(null,inst_327035);var state_327075__$1 = state_327075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_327075__$1,11,out,inst_327051);
} else
{if((state_val_327076 === 10))
{var inst_327058 = (state_327075[2]);var state_327075__$1 = state_327075;var statearr_327091_327115 = state_327075__$1;(statearr_327091_327115[2] = inst_327058);
(statearr_327091_327115[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327076 === 11))
{var inst_327039 = (state_327075[9]);var inst_327043 = (state_327075[10]);var inst_327053 = (state_327075[2]);var inst_327054 = (new Array(0));var inst_327055 = inst_327054.push(inst_327039);var inst_327035 = inst_327054;var inst_327036 = inst_327043;var state_327075__$1 = (function (){var statearr_327092 = state_327075;(statearr_327092[7] = inst_327036);
(statearr_327092[8] = inst_327035);
(statearr_327092[12] = inst_327053);
(statearr_327092[13] = inst_327055);
return statearr_327092;
})();var statearr_327093_327116 = state_327075__$1;(statearr_327093_327116[2] = null);
(statearr_327093_327116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327076 === 12))
{var inst_327035 = (state_327075[8]);var inst_327063 = cljs.core.vec.call(null,inst_327035);var state_327075__$1 = state_327075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_327075__$1,15,out,inst_327063);
} else
{if((state_val_327076 === 13))
{var state_327075__$1 = state_327075;var statearr_327094_327117 = state_327075__$1;(statearr_327094_327117[2] = null);
(statearr_327094_327117[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327076 === 14))
{var inst_327068 = (state_327075[2]);var inst_327069 = cljs.core.async.close_BANG_.call(null,out);var state_327075__$1 = (function (){var statearr_327095 = state_327075;(statearr_327095[14] = inst_327068);
return statearr_327095;
})();var statearr_327096_327118 = state_327075__$1;(statearr_327096_327118[2] = inst_327069);
(statearr_327096_327118[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327076 === 15))
{var inst_327065 = (state_327075[2]);var state_327075__$1 = state_327075;var statearr_327097_327119 = state_327075__$1;(statearr_327097_327119[2] = inst_327065);
(statearr_327097_327119[1] = 14);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_327101 = (new Array(15));(statearr_327101[0] = state_machine__18769__auto__);
(statearr_327101[1] = 1);
return statearr_327101;
});
var state_machine__18769__auto____1 = (function (state_327075){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_327075);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e327102){if((e327102 instanceof Object))
{var ex__18772__auto__ = e327102;var statearr_327103_327120 = state_327075;(statearr_327103_327120[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_327075);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e327102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__327121 = state_327075;
state_327075 = G__327121;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_327075){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_327075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_327104 = f__18839__auto__.call(null);(statearr_327104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___327105);
return statearr_327104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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