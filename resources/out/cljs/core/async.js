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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t100377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t100377 = (function (f,fn_handler,meta100378){
this.f = f;
this.fn_handler = fn_handler;
this.meta100378 = meta100378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t100377.cljs$lang$type = true;
cljs.core.async.t100377.cljs$lang$ctorStr = "cljs.core.async/t100377";
cljs.core.async.t100377.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"cljs.core.async/t100377");
});
cljs.core.async.t100377.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t100377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t100377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t100377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100379){var self__ = this;
var _100379__$1 = this;return self__.meta100378;
});
cljs.core.async.t100377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100379,meta100378__$1){var self__ = this;
var _100379__$1 = this;return (new cljs.core.async.t100377(self__.f,self__.fn_handler,meta100378__$1));
});
cljs.core.async.__GT_t100377 = (function __GT_t100377(f__$1,fn_handler__$1,meta100378){return (new cljs.core.async.t100377(f__$1,fn_handler__$1,meta100378));
});
}
return (new cljs.core.async.t100377(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__100381 = buff;if(G__100381)
{var bit__14448__auto__ = null;if(cljs.core.truth_((function (){var or__13822__auto__ = bit__14448__auto__;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return G__100381.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__100381.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__100381);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__100381);
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
{var val_100382 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_100382);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_100382);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13810__auto__ = ret;if(cljs.core.truth_(and__13810__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13810__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14645__auto___100383 = n;var x_100384 = 0;while(true){
if((x_100384 < n__14645__auto___100383))
{(a[x_100384] = 0);
{
var G__100385 = (x_100384 + 1);
x_100384 = G__100385;
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
var G__100386 = (i + 1);
i = G__100386;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t100390 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t100390 = (function (flag,alt_flag,meta100391){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta100391 = meta100391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t100390.cljs$lang$type = true;
cljs.core.async.t100390.cljs$lang$ctorStr = "cljs.core.async/t100390";
cljs.core.async.t100390.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"cljs.core.async/t100390");
});
cljs.core.async.t100390.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t100390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t100390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t100390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100392){var self__ = this;
var _100392__$1 = this;return self__.meta100391;
});
cljs.core.async.t100390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100392,meta100391__$1){var self__ = this;
var _100392__$1 = this;return (new cljs.core.async.t100390(self__.flag,self__.alt_flag,meta100391__$1));
});
cljs.core.async.__GT_t100390 = (function __GT_t100390(flag__$1,alt_flag__$1,meta100391){return (new cljs.core.async.t100390(flag__$1,alt_flag__$1,meta100391));
});
}
return (new cljs.core.async.t100390(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t100396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t100396 = (function (cb,flag,alt_handler,meta100397){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta100397 = meta100397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t100396.cljs$lang$type = true;
cljs.core.async.t100396.cljs$lang$ctorStr = "cljs.core.async/t100396";
cljs.core.async.t100396.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"cljs.core.async/t100396");
});
cljs.core.async.t100396.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t100396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t100396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t100396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100398){var self__ = this;
var _100398__$1 = this;return self__.meta100397;
});
cljs.core.async.t100396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100398,meta100397__$1){var self__ = this;
var _100398__$1 = this;return (new cljs.core.async.t100396(self__.cb,self__.flag,self__.alt_handler,meta100397__$1));
});
cljs.core.async.__GT_t100396 = (function __GT_t100396(cb__$1,flag__$1,alt_handler__$1,meta100397){return (new cljs.core.async.t100396(cb__$1,flag__$1,alt_handler__$1,meta100397));
});
}
return (new cljs.core.async.t100396(cb,flag,alt_handler,null));
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
return (function (p1__100399_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__100399_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13822__auto__ = wport;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__100400 = (i + 1);
i = G__100400;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13822__auto__ = ret;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13810__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13810__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13810__auto__;
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
var alts_BANG___delegate = function (ports,p__100401){var map__100403 = p__100401;var map__100403__$1 = ((cljs.core.seq_QMARK_.call(null,map__100403))?cljs.core.apply.call(null,cljs.core.hash_map,map__100403):map__100403);var opts = map__100403__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__100401 = null;if (arguments.length > 1) {
  p__100401 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__100401);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__100404){
var ports = cljs.core.first(arglist__100404);
var p__100401 = cljs.core.rest(arglist__100404);
return alts_BANG___delegate(ports,p__100401);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t100412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t100412 = (function (ch,f,map_LT_,meta100413){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta100413 = meta100413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t100412.cljs$lang$type = true;
cljs.core.async.t100412.cljs$lang$ctorStr = "cljs.core.async/t100412";
cljs.core.async.t100412.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"cljs.core.async/t100412");
});
cljs.core.async.t100412.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t100412.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t100412.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t100412.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t100415 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t100415 = (function (fn1,_,meta100413,ch,f,map_LT_,meta100416){
this.fn1 = fn1;
this._ = _;
this.meta100413 = meta100413;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta100416 = meta100416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t100415.cljs$lang$type = true;
cljs.core.async.t100415.cljs$lang$ctorStr = "cljs.core.async/t100415";
cljs.core.async.t100415.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"cljs.core.async/t100415");
});
cljs.core.async.t100415.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t100415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t100415.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t100415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__100405_SHARP_){return f1.call(null,(((p1__100405_SHARP_ == null))?null:self__.f.call(null,p1__100405_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t100415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100417){var self__ = this;
var _100417__$1 = this;return self__.meta100416;
});
cljs.core.async.t100415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100417,meta100416__$1){var self__ = this;
var _100417__$1 = this;return (new cljs.core.async.t100415(self__.fn1,self__._,self__.meta100413,self__.ch,self__.f,self__.map_LT_,meta100416__$1));
});
cljs.core.async.__GT_t100415 = (function __GT_t100415(fn1__$1,___$2,meta100413__$1,ch__$2,f__$2,map_LT___$2,meta100416){return (new cljs.core.async.t100415(fn1__$1,___$2,meta100413__$1,ch__$2,f__$2,map_LT___$2,meta100416));
});
}
return (new cljs.core.async.t100415(fn1,___$1,self__.meta100413,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13810__auto__ = ret;if(cljs.core.truth_(and__13810__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13810__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t100412.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t100412.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t100412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100414){var self__ = this;
var _100414__$1 = this;return self__.meta100413;
});
cljs.core.async.t100412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100414,meta100413__$1){var self__ = this;
var _100414__$1 = this;return (new cljs.core.async.t100412(self__.ch,self__.f,self__.map_LT_,meta100413__$1));
});
cljs.core.async.__GT_t100412 = (function __GT_t100412(ch__$1,f__$1,map_LT___$1,meta100413){return (new cljs.core.async.t100412(ch__$1,f__$1,map_LT___$1,meta100413));
});
}
return (new cljs.core.async.t100412(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t100421 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t100421 = (function (ch,f,map_GT_,meta100422){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta100422 = meta100422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t100421.cljs$lang$type = true;
cljs.core.async.t100421.cljs$lang$ctorStr = "cljs.core.async/t100421";
cljs.core.async.t100421.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"cljs.core.async/t100421");
});
cljs.core.async.t100421.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t100421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t100421.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t100421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t100421.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t100421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t100421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100423){var self__ = this;
var _100423__$1 = this;return self__.meta100422;
});
cljs.core.async.t100421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100423,meta100422__$1){var self__ = this;
var _100423__$1 = this;return (new cljs.core.async.t100421(self__.ch,self__.f,self__.map_GT_,meta100422__$1));
});
cljs.core.async.__GT_t100421 = (function __GT_t100421(ch__$1,f__$1,map_GT___$1,meta100422){return (new cljs.core.async.t100421(ch__$1,f__$1,map_GT___$1,meta100422));
});
}
return (new cljs.core.async.t100421(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t100427 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t100427 = (function (ch,p,filter_GT_,meta100428){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta100428 = meta100428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t100427.cljs$lang$type = true;
cljs.core.async.t100427.cljs$lang$ctorStr = "cljs.core.async/t100427";
cljs.core.async.t100427.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"cljs.core.async/t100427");
});
cljs.core.async.t100427.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t100427.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t100427.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t100427.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t100427.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t100427.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t100427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100429){var self__ = this;
var _100429__$1 = this;return self__.meta100428;
});
cljs.core.async.t100427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100429,meta100428__$1){var self__ = this;
var _100429__$1 = this;return (new cljs.core.async.t100427(self__.ch,self__.p,self__.filter_GT_,meta100428__$1));
});
cljs.core.async.__GT_t100427 = (function __GT_t100427(ch__$1,p__$1,filter_GT___$1,meta100428){return (new cljs.core.async.t100427(ch__$1,p__$1,filter_GT___$1,meta100428));
});
}
return (new cljs.core.async.t100427(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16830__auto___100512 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_100491){var state_val_100492 = (state_100491[1]);if((state_val_100492 === 1))
{var state_100491__$1 = state_100491;var statearr_100493_100513 = state_100491__$1;(statearr_100493_100513[2] = null);
(statearr_100493_100513[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100492 === 2))
{var state_100491__$1 = state_100491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100491__$1,4,ch);
} else
{if((state_val_100492 === 3))
{var inst_100489 = (state_100491[2]);var state_100491__$1 = state_100491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100491__$1,inst_100489);
} else
{if((state_val_100492 === 4))
{var inst_100473 = (state_100491[7]);var inst_100473__$1 = (state_100491[2]);var inst_100474 = (inst_100473__$1 == null);var state_100491__$1 = (function (){var statearr_100494 = state_100491;(statearr_100494[7] = inst_100473__$1);
return statearr_100494;
})();if(cljs.core.truth_(inst_100474))
{var statearr_100495_100514 = state_100491__$1;(statearr_100495_100514[1] = 5);
} else
{var statearr_100496_100515 = state_100491__$1;(statearr_100496_100515[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100492 === 5))
{var inst_100476 = cljs.core.async.close_BANG_.call(null,out);var state_100491__$1 = state_100491;var statearr_100497_100516 = state_100491__$1;(statearr_100497_100516[2] = inst_100476);
(statearr_100497_100516[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100492 === 6))
{var inst_100473 = (state_100491[7]);var inst_100478 = p.call(null,inst_100473);var state_100491__$1 = state_100491;if(cljs.core.truth_(inst_100478))
{var statearr_100498_100517 = state_100491__$1;(statearr_100498_100517[1] = 8);
} else
{var statearr_100499_100518 = state_100491__$1;(statearr_100499_100518[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100492 === 7))
{var inst_100487 = (state_100491[2]);var state_100491__$1 = state_100491;var statearr_100500_100519 = state_100491__$1;(statearr_100500_100519[2] = inst_100487);
(statearr_100500_100519[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100492 === 8))
{var inst_100473 = (state_100491[7]);var state_100491__$1 = state_100491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100491__$1,11,out,inst_100473);
} else
{if((state_val_100492 === 9))
{var state_100491__$1 = state_100491;var statearr_100501_100520 = state_100491__$1;(statearr_100501_100520[2] = null);
(statearr_100501_100520[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100492 === 10))
{var inst_100484 = (state_100491[2]);var state_100491__$1 = (function (){var statearr_100502 = state_100491;(statearr_100502[8] = inst_100484);
return statearr_100502;
})();var statearr_100503_100521 = state_100491__$1;(statearr_100503_100521[2] = null);
(statearr_100503_100521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100492 === 11))
{var inst_100481 = (state_100491[2]);var state_100491__$1 = state_100491;var statearr_100504_100522 = state_100491__$1;(statearr_100504_100522[2] = inst_100481);
(statearr_100504_100522[1] = 10);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_100508 = (new Array(9));(statearr_100508[0] = state_machine__16761__auto__);
(statearr_100508[1] = 1);
return statearr_100508;
});
var state_machine__16761__auto____1 = (function (state_100491){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_100491);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e100509){if((e100509 instanceof Object))
{var ex__16764__auto__ = e100509;var statearr_100510_100523 = state_100491;(statearr_100510_100523[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100491);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e100509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__100524 = state_100491;
state_100491 = G__100524;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_100491){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_100491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_100511 = f__16831__auto__.call(null);(statearr_100511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___100512);
return statearr_100511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__16830__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_100676){var state_val_100677 = (state_100676[1]);if((state_val_100677 === 1))
{var state_100676__$1 = state_100676;var statearr_100678_100715 = state_100676__$1;(statearr_100678_100715[2] = null);
(statearr_100678_100715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 2))
{var state_100676__$1 = state_100676;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100676__$1,4,in$);
} else
{if((state_val_100677 === 3))
{var inst_100674 = (state_100676[2]);var state_100676__$1 = state_100676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100676__$1,inst_100674);
} else
{if((state_val_100677 === 4))
{var inst_100622 = (state_100676[7]);var inst_100622__$1 = (state_100676[2]);var inst_100623 = (inst_100622__$1 == null);var state_100676__$1 = (function (){var statearr_100679 = state_100676;(statearr_100679[7] = inst_100622__$1);
return statearr_100679;
})();if(cljs.core.truth_(inst_100623))
{var statearr_100680_100716 = state_100676__$1;(statearr_100680_100716[1] = 5);
} else
{var statearr_100681_100717 = state_100676__$1;(statearr_100681_100717[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 5))
{var inst_100625 = cljs.core.async.close_BANG_.call(null,out);var state_100676__$1 = state_100676;var statearr_100682_100718 = state_100676__$1;(statearr_100682_100718[2] = inst_100625);
(statearr_100682_100718[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 6))
{var inst_100622 = (state_100676[7]);var inst_100627 = f.call(null,inst_100622);var inst_100632 = cljs.core.seq.call(null,inst_100627);var inst_100633 = inst_100632;var inst_100634 = null;var inst_100635 = 0;var inst_100636 = 0;var state_100676__$1 = (function (){var statearr_100683 = state_100676;(statearr_100683[8] = inst_100636);
(statearr_100683[9] = inst_100635);
(statearr_100683[10] = inst_100633);
(statearr_100683[11] = inst_100634);
return statearr_100683;
})();var statearr_100684_100719 = state_100676__$1;(statearr_100684_100719[2] = null);
(statearr_100684_100719[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 7))
{var inst_100672 = (state_100676[2]);var state_100676__$1 = state_100676;var statearr_100685_100720 = state_100676__$1;(statearr_100685_100720[2] = inst_100672);
(statearr_100685_100720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 8))
{var inst_100636 = (state_100676[8]);var inst_100635 = (state_100676[9]);var inst_100638 = (inst_100636 < inst_100635);var inst_100639 = inst_100638;var state_100676__$1 = state_100676;if(cljs.core.truth_(inst_100639))
{var statearr_100686_100721 = state_100676__$1;(statearr_100686_100721[1] = 10);
} else
{var statearr_100687_100722 = state_100676__$1;(statearr_100687_100722[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 9))
{var inst_100669 = (state_100676[2]);var state_100676__$1 = (function (){var statearr_100688 = state_100676;(statearr_100688[12] = inst_100669);
return statearr_100688;
})();var statearr_100689_100723 = state_100676__$1;(statearr_100689_100723[2] = null);
(statearr_100689_100723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 10))
{var inst_100636 = (state_100676[8]);var inst_100634 = (state_100676[11]);var inst_100641 = cljs.core._nth.call(null,inst_100634,inst_100636);var state_100676__$1 = state_100676;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100676__$1,13,out,inst_100641);
} else
{if((state_val_100677 === 11))
{var inst_100647 = (state_100676[13]);var inst_100633 = (state_100676[10]);var inst_100647__$1 = cljs.core.seq.call(null,inst_100633);var state_100676__$1 = (function (){var statearr_100693 = state_100676;(statearr_100693[13] = inst_100647__$1);
return statearr_100693;
})();if(inst_100647__$1)
{var statearr_100694_100724 = state_100676__$1;(statearr_100694_100724[1] = 14);
} else
{var statearr_100695_100725 = state_100676__$1;(statearr_100695_100725[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 12))
{var inst_100667 = (state_100676[2]);var state_100676__$1 = state_100676;var statearr_100696_100726 = state_100676__$1;(statearr_100696_100726[2] = inst_100667);
(statearr_100696_100726[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 13))
{var inst_100636 = (state_100676[8]);var inst_100635 = (state_100676[9]);var inst_100633 = (state_100676[10]);var inst_100634 = (state_100676[11]);var inst_100643 = (state_100676[2]);var inst_100644 = (inst_100636 + 1);var tmp100690 = inst_100635;var tmp100691 = inst_100633;var tmp100692 = inst_100634;var inst_100633__$1 = tmp100691;var inst_100634__$1 = tmp100692;var inst_100635__$1 = tmp100690;var inst_100636__$1 = inst_100644;var state_100676__$1 = (function (){var statearr_100697 = state_100676;(statearr_100697[8] = inst_100636__$1);
(statearr_100697[9] = inst_100635__$1);
(statearr_100697[14] = inst_100643);
(statearr_100697[10] = inst_100633__$1);
(statearr_100697[11] = inst_100634__$1);
return statearr_100697;
})();var statearr_100698_100727 = state_100676__$1;(statearr_100698_100727[2] = null);
(statearr_100698_100727[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 14))
{var inst_100647 = (state_100676[13]);var inst_100649 = cljs.core.chunked_seq_QMARK_.call(null,inst_100647);var state_100676__$1 = state_100676;if(inst_100649)
{var statearr_100699_100728 = state_100676__$1;(statearr_100699_100728[1] = 17);
} else
{var statearr_100700_100729 = state_100676__$1;(statearr_100700_100729[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 15))
{var state_100676__$1 = state_100676;var statearr_100701_100730 = state_100676__$1;(statearr_100701_100730[2] = null);
(statearr_100701_100730[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 16))
{var inst_100665 = (state_100676[2]);var state_100676__$1 = state_100676;var statearr_100702_100731 = state_100676__$1;(statearr_100702_100731[2] = inst_100665);
(statearr_100702_100731[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 17))
{var inst_100647 = (state_100676[13]);var inst_100651 = cljs.core.chunk_first.call(null,inst_100647);var inst_100652 = cljs.core.chunk_rest.call(null,inst_100647);var inst_100653 = cljs.core.count.call(null,inst_100651);var inst_100633 = inst_100652;var inst_100634 = inst_100651;var inst_100635 = inst_100653;var inst_100636 = 0;var state_100676__$1 = (function (){var statearr_100703 = state_100676;(statearr_100703[8] = inst_100636);
(statearr_100703[9] = inst_100635);
(statearr_100703[10] = inst_100633);
(statearr_100703[11] = inst_100634);
return statearr_100703;
})();var statearr_100704_100732 = state_100676__$1;(statearr_100704_100732[2] = null);
(statearr_100704_100732[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 18))
{var inst_100647 = (state_100676[13]);var inst_100656 = cljs.core.first.call(null,inst_100647);var state_100676__$1 = state_100676;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100676__$1,20,out,inst_100656);
} else
{if((state_val_100677 === 19))
{var inst_100662 = (state_100676[2]);var state_100676__$1 = state_100676;var statearr_100705_100733 = state_100676__$1;(statearr_100705_100733[2] = inst_100662);
(statearr_100705_100733[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100677 === 20))
{var inst_100647 = (state_100676[13]);var inst_100658 = (state_100676[2]);var inst_100659 = cljs.core.next.call(null,inst_100647);var inst_100633 = inst_100659;var inst_100634 = null;var inst_100635 = 0;var inst_100636 = 0;var state_100676__$1 = (function (){var statearr_100706 = state_100676;(statearr_100706[8] = inst_100636);
(statearr_100706[9] = inst_100635);
(statearr_100706[15] = inst_100658);
(statearr_100706[10] = inst_100633);
(statearr_100706[11] = inst_100634);
return statearr_100706;
})();var statearr_100707_100734 = state_100676__$1;(statearr_100707_100734[2] = null);
(statearr_100707_100734[1] = 8);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_100711 = (new Array(16));(statearr_100711[0] = state_machine__16761__auto__);
(statearr_100711[1] = 1);
return statearr_100711;
});
var state_machine__16761__auto____1 = (function (state_100676){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_100676);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e100712){if((e100712 instanceof Object))
{var ex__16764__auto__ = e100712;var statearr_100713_100735 = state_100676;(statearr_100713_100735[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100676);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e100712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__100736 = state_100676;
state_100676 = G__100736;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_100676){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_100676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_100714 = f__16831__auto__.call(null);(statearr_100714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto__);
return statearr_100714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
}));
return c__16830__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__16830__auto___100817 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_100796){var state_val_100797 = (state_100796[1]);if((state_val_100797 === 1))
{var state_100796__$1 = state_100796;var statearr_100798_100818 = state_100796__$1;(statearr_100798_100818[2] = null);
(statearr_100798_100818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100797 === 2))
{var state_100796__$1 = state_100796;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100796__$1,4,from);
} else
{if((state_val_100797 === 3))
{var inst_100794 = (state_100796[2]);var state_100796__$1 = state_100796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100796__$1,inst_100794);
} else
{if((state_val_100797 === 4))
{var inst_100779 = (state_100796[7]);var inst_100779__$1 = (state_100796[2]);var inst_100780 = (inst_100779__$1 == null);var state_100796__$1 = (function (){var statearr_100799 = state_100796;(statearr_100799[7] = inst_100779__$1);
return statearr_100799;
})();if(cljs.core.truth_(inst_100780))
{var statearr_100800_100819 = state_100796__$1;(statearr_100800_100819[1] = 5);
} else
{var statearr_100801_100820 = state_100796__$1;(statearr_100801_100820[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100797 === 5))
{var state_100796__$1 = state_100796;if(cljs.core.truth_(close_QMARK_))
{var statearr_100802_100821 = state_100796__$1;(statearr_100802_100821[1] = 8);
} else
{var statearr_100803_100822 = state_100796__$1;(statearr_100803_100822[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100797 === 6))
{var inst_100779 = (state_100796[7]);var state_100796__$1 = state_100796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100796__$1,11,to,inst_100779);
} else
{if((state_val_100797 === 7))
{var inst_100792 = (state_100796[2]);var state_100796__$1 = state_100796;var statearr_100804_100823 = state_100796__$1;(statearr_100804_100823[2] = inst_100792);
(statearr_100804_100823[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100797 === 8))
{var inst_100783 = cljs.core.async.close_BANG_.call(null,to);var state_100796__$1 = state_100796;var statearr_100805_100824 = state_100796__$1;(statearr_100805_100824[2] = inst_100783);
(statearr_100805_100824[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100797 === 9))
{var state_100796__$1 = state_100796;var statearr_100806_100825 = state_100796__$1;(statearr_100806_100825[2] = null);
(statearr_100806_100825[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100797 === 10))
{var inst_100786 = (state_100796[2]);var state_100796__$1 = state_100796;var statearr_100807_100826 = state_100796__$1;(statearr_100807_100826[2] = inst_100786);
(statearr_100807_100826[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100797 === 11))
{var inst_100789 = (state_100796[2]);var state_100796__$1 = (function (){var statearr_100808 = state_100796;(statearr_100808[8] = inst_100789);
return statearr_100808;
})();var statearr_100809_100827 = state_100796__$1;(statearr_100809_100827[2] = null);
(statearr_100809_100827[1] = 2);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_100813 = (new Array(9));(statearr_100813[0] = state_machine__16761__auto__);
(statearr_100813[1] = 1);
return statearr_100813;
});
var state_machine__16761__auto____1 = (function (state_100796){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_100796);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e100814){if((e100814 instanceof Object))
{var ex__16764__auto__ = e100814;var statearr_100815_100828 = state_100796;(statearr_100815_100828[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100796);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e100814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__100829 = state_100796;
state_100796 = G__100829;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_100796){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_100796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_100816 = f__16831__auto__.call(null);(statearr_100816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___100817);
return statearr_100816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__16830__auto___100916 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_100894){var state_val_100895 = (state_100894[1]);if((state_val_100895 === 1))
{var state_100894__$1 = state_100894;var statearr_100896_100917 = state_100894__$1;(statearr_100896_100917[2] = null);
(statearr_100896_100917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100895 === 2))
{var state_100894__$1 = state_100894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100894__$1,4,ch);
} else
{if((state_val_100895 === 3))
{var inst_100892 = (state_100894[2]);var state_100894__$1 = state_100894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100894__$1,inst_100892);
} else
{if((state_val_100895 === 4))
{var inst_100875 = (state_100894[7]);var inst_100875__$1 = (state_100894[2]);var inst_100876 = (inst_100875__$1 == null);var state_100894__$1 = (function (){var statearr_100897 = state_100894;(statearr_100897[7] = inst_100875__$1);
return statearr_100897;
})();if(cljs.core.truth_(inst_100876))
{var statearr_100898_100918 = state_100894__$1;(statearr_100898_100918[1] = 5);
} else
{var statearr_100899_100919 = state_100894__$1;(statearr_100899_100919[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100895 === 5))
{var inst_100878 = cljs.core.async.close_BANG_.call(null,tc);var inst_100879 = cljs.core.async.close_BANG_.call(null,fc);var state_100894__$1 = (function (){var statearr_100900 = state_100894;(statearr_100900[8] = inst_100878);
return statearr_100900;
})();var statearr_100901_100920 = state_100894__$1;(statearr_100901_100920[2] = inst_100879);
(statearr_100901_100920[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100895 === 6))
{var inst_100875 = (state_100894[7]);var inst_100881 = p.call(null,inst_100875);var state_100894__$1 = state_100894;if(cljs.core.truth_(inst_100881))
{var statearr_100902_100921 = state_100894__$1;(statearr_100902_100921[1] = 9);
} else
{var statearr_100903_100922 = state_100894__$1;(statearr_100903_100922[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100895 === 7))
{var inst_100890 = (state_100894[2]);var state_100894__$1 = state_100894;var statearr_100904_100923 = state_100894__$1;(statearr_100904_100923[2] = inst_100890);
(statearr_100904_100923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100895 === 8))
{var inst_100887 = (state_100894[2]);var state_100894__$1 = (function (){var statearr_100905 = state_100894;(statearr_100905[9] = inst_100887);
return statearr_100905;
})();var statearr_100906_100924 = state_100894__$1;(statearr_100906_100924[2] = null);
(statearr_100906_100924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100895 === 9))
{var state_100894__$1 = state_100894;var statearr_100907_100925 = state_100894__$1;(statearr_100907_100925[2] = tc);
(statearr_100907_100925[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100895 === 10))
{var state_100894__$1 = state_100894;var statearr_100908_100926 = state_100894__$1;(statearr_100908_100926[2] = fc);
(statearr_100908_100926[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100895 === 11))
{var inst_100875 = (state_100894[7]);var inst_100885 = (state_100894[2]);var state_100894__$1 = state_100894;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100894__$1,8,inst_100885,inst_100875);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_100912 = (new Array(10));(statearr_100912[0] = state_machine__16761__auto__);
(statearr_100912[1] = 1);
return statearr_100912;
});
var state_machine__16761__auto____1 = (function (state_100894){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_100894);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e100913){if((e100913 instanceof Object))
{var ex__16764__auto__ = e100913;var statearr_100914_100927 = state_100894;(statearr_100914_100927[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100894);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e100913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__100928 = state_100894;
state_100894 = G__100928;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_100894){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_100894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_100915 = f__16831__auto__.call(null);(statearr_100915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___100916);
return statearr_100915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__16830__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_100975){var state_val_100976 = (state_100975[1]);if((state_val_100976 === 7))
{var inst_100971 = (state_100975[2]);var state_100975__$1 = state_100975;var statearr_100977_100993 = state_100975__$1;(statearr_100977_100993[2] = inst_100971);
(statearr_100977_100993[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100976 === 6))
{var inst_100961 = (state_100975[7]);var inst_100964 = (state_100975[8]);var inst_100968 = f.call(null,inst_100961,inst_100964);var inst_100961__$1 = inst_100968;var state_100975__$1 = (function (){var statearr_100978 = state_100975;(statearr_100978[7] = inst_100961__$1);
return statearr_100978;
})();var statearr_100979_100994 = state_100975__$1;(statearr_100979_100994[2] = null);
(statearr_100979_100994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100976 === 5))
{var inst_100961 = (state_100975[7]);var state_100975__$1 = state_100975;var statearr_100980_100995 = state_100975__$1;(statearr_100980_100995[2] = inst_100961);
(statearr_100980_100995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100976 === 4))
{var inst_100964 = (state_100975[8]);var inst_100964__$1 = (state_100975[2]);var inst_100965 = (inst_100964__$1 == null);var state_100975__$1 = (function (){var statearr_100981 = state_100975;(statearr_100981[8] = inst_100964__$1);
return statearr_100981;
})();if(cljs.core.truth_(inst_100965))
{var statearr_100982_100996 = state_100975__$1;(statearr_100982_100996[1] = 5);
} else
{var statearr_100983_100997 = state_100975__$1;(statearr_100983_100997[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_100976 === 3))
{var inst_100973 = (state_100975[2]);var state_100975__$1 = state_100975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100975__$1,inst_100973);
} else
{if((state_val_100976 === 2))
{var state_100975__$1 = state_100975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100975__$1,4,ch);
} else
{if((state_val_100976 === 1))
{var inst_100961 = init;var state_100975__$1 = (function (){var statearr_100984 = state_100975;(statearr_100984[7] = inst_100961);
return statearr_100984;
})();var statearr_100985_100998 = state_100975__$1;(statearr_100985_100998[2] = null);
(statearr_100985_100998[1] = 2);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_100989 = (new Array(9));(statearr_100989[0] = state_machine__16761__auto__);
(statearr_100989[1] = 1);
return statearr_100989;
});
var state_machine__16761__auto____1 = (function (state_100975){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_100975);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e100990){if((e100990 instanceof Object))
{var ex__16764__auto__ = e100990;var statearr_100991_100999 = state_100975;(statearr_100991_100999[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e100990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__101000 = state_100975;
state_100975 = G__101000;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_100975){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_100975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_100992 = f__16831__auto__.call(null);(statearr_100992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto__);
return statearr_100992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
}));
return c__16830__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__16830__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_101062){var state_val_101063 = (state_101062[1]);if((state_val_101063 === 1))
{var inst_101042 = cljs.core.seq.call(null,coll);var inst_101043 = inst_101042;var state_101062__$1 = (function (){var statearr_101064 = state_101062;(statearr_101064[7] = inst_101043);
return statearr_101064;
})();var statearr_101065_101083 = state_101062__$1;(statearr_101065_101083[2] = null);
(statearr_101065_101083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101063 === 2))
{var inst_101043 = (state_101062[7]);var state_101062__$1 = state_101062;if(cljs.core.truth_(inst_101043))
{var statearr_101066_101084 = state_101062__$1;(statearr_101066_101084[1] = 4);
} else
{var statearr_101067_101085 = state_101062__$1;(statearr_101067_101085[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101063 === 3))
{var inst_101060 = (state_101062[2]);var state_101062__$1 = state_101062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101062__$1,inst_101060);
} else
{if((state_val_101063 === 4))
{var inst_101043 = (state_101062[7]);var inst_101046 = cljs.core.first.call(null,inst_101043);var state_101062__$1 = state_101062;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101062__$1,7,ch,inst_101046);
} else
{if((state_val_101063 === 5))
{var state_101062__$1 = state_101062;if(cljs.core.truth_(close_QMARK_))
{var statearr_101068_101086 = state_101062__$1;(statearr_101068_101086[1] = 8);
} else
{var statearr_101069_101087 = state_101062__$1;(statearr_101069_101087[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101063 === 6))
{var inst_101058 = (state_101062[2]);var state_101062__$1 = state_101062;var statearr_101070_101088 = state_101062__$1;(statearr_101070_101088[2] = inst_101058);
(statearr_101070_101088[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101063 === 7))
{var inst_101043 = (state_101062[7]);var inst_101048 = (state_101062[2]);var inst_101049 = cljs.core.next.call(null,inst_101043);var inst_101043__$1 = inst_101049;var state_101062__$1 = (function (){var statearr_101071 = state_101062;(statearr_101071[8] = inst_101048);
(statearr_101071[7] = inst_101043__$1);
return statearr_101071;
})();var statearr_101072_101089 = state_101062__$1;(statearr_101072_101089[2] = null);
(statearr_101072_101089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101063 === 8))
{var inst_101053 = cljs.core.async.close_BANG_.call(null,ch);var state_101062__$1 = state_101062;var statearr_101073_101090 = state_101062__$1;(statearr_101073_101090[2] = inst_101053);
(statearr_101073_101090[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101063 === 9))
{var state_101062__$1 = state_101062;var statearr_101074_101091 = state_101062__$1;(statearr_101074_101091[2] = null);
(statearr_101074_101091[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101063 === 10))
{var inst_101056 = (state_101062[2]);var state_101062__$1 = state_101062;var statearr_101075_101092 = state_101062__$1;(statearr_101075_101092[2] = inst_101056);
(statearr_101075_101092[1] = 6);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_101079 = (new Array(9));(statearr_101079[0] = state_machine__16761__auto__);
(statearr_101079[1] = 1);
return statearr_101079;
});
var state_machine__16761__auto____1 = (function (state_101062){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_101062);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e101080){if((e101080 instanceof Object))
{var ex__16764__auto__ = e101080;var statearr_101081_101093 = state_101062;(statearr_101081_101093[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101062);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e101080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__101094 = state_101062;
state_101062 = G__101094;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_101062){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_101062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_101082 = f__16831__auto__.call(null);(statearr_101082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto__);
return statearr_101082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
}));
return c__16830__auto__;
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
cljs.core.async.Mux = (function (){var obj101096 = {};return obj101096;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13810__auto__ = _;if(and__13810__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13810__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14425__auto__ = (((_ == null))?null:_);return (function (){var or__13822__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj101098 = {};return obj101098;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13810__auto__ = m;if(and__13810__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13810__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14425__auto__ = (((m == null))?null:m);return (function (){var or__13822__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13810__auto__ = m;if(and__13810__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13810__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14425__auto__ = (((m == null))?null:m);return (function (){var or__13822__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13810__auto__ = m;if(and__13810__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13810__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14425__auto__ = (((m == null))?null:m);return (function (){var or__13822__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t101322 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t101322 = (function (cs,ch,mult,meta101323){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta101323 = meta101323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t101322.cljs$lang$type = true;
cljs.core.async.t101322.cljs$lang$ctorStr = "cljs.core.async/t101322";
cljs.core.async.t101322.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"cljs.core.async/t101322");
});})(cs))
;
cljs.core.async.t101322.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t101322.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t101322.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t101322.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t101322.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t101322.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t101322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_101324){var self__ = this;
var _101324__$1 = this;return self__.meta101323;
});})(cs))
;
cljs.core.async.t101322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_101324,meta101323__$1){var self__ = this;
var _101324__$1 = this;return (new cljs.core.async.t101322(self__.cs,self__.ch,self__.mult,meta101323__$1));
});})(cs))
;
cljs.core.async.__GT_t101322 = ((function (cs){
return (function __GT_t101322(cs__$1,ch__$1,mult__$1,meta101323){return (new cljs.core.async.t101322(cs__$1,ch__$1,mult__$1,meta101323));
});})(cs))
;
}
return (new cljs.core.async.t101322(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__16830__auto___101545 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_101459){var state_val_101460 = (state_101459[1]);if((state_val_101460 === 32))
{var inst_101403 = (state_101459[7]);var inst_101327 = (state_101459[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_101459,31,Object,null,30);var inst_101410 = cljs.core.async.put_BANG_.call(null,inst_101403,inst_101327,done);var state_101459__$1 = state_101459;var statearr_101461_101546 = state_101459__$1;(statearr_101461_101546[2] = inst_101410);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101459__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 1))
{var state_101459__$1 = state_101459;var statearr_101462_101547 = state_101459__$1;(statearr_101462_101547[2] = null);
(statearr_101462_101547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 33))
{var inst_101416 = (state_101459[9]);var inst_101418 = cljs.core.chunked_seq_QMARK_.call(null,inst_101416);var state_101459__$1 = state_101459;if(inst_101418)
{var statearr_101463_101548 = state_101459__$1;(statearr_101463_101548[1] = 36);
} else
{var statearr_101464_101549 = state_101459__$1;(statearr_101464_101549[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 2))
{var state_101459__$1 = state_101459;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101459__$1,4,ch);
} else
{if((state_val_101460 === 34))
{var state_101459__$1 = state_101459;var statearr_101465_101550 = state_101459__$1;(statearr_101465_101550[2] = null);
(statearr_101465_101550[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 3))
{var inst_101457 = (state_101459[2]);var state_101459__$1 = state_101459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101459__$1,inst_101457);
} else
{if((state_val_101460 === 35))
{var inst_101441 = (state_101459[2]);var state_101459__$1 = state_101459;var statearr_101466_101551 = state_101459__$1;(statearr_101466_101551[2] = inst_101441);
(statearr_101466_101551[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 4))
{var inst_101327 = (state_101459[8]);var inst_101327__$1 = (state_101459[2]);var inst_101328 = (inst_101327__$1 == null);var state_101459__$1 = (function (){var statearr_101467 = state_101459;(statearr_101467[8] = inst_101327__$1);
return statearr_101467;
})();if(cljs.core.truth_(inst_101328))
{var statearr_101468_101552 = state_101459__$1;(statearr_101468_101552[1] = 5);
} else
{var statearr_101469_101553 = state_101459__$1;(statearr_101469_101553[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 36))
{var inst_101416 = (state_101459[9]);var inst_101420 = cljs.core.chunk_first.call(null,inst_101416);var inst_101421 = cljs.core.chunk_rest.call(null,inst_101416);var inst_101422 = cljs.core.count.call(null,inst_101420);var inst_101395 = inst_101421;var inst_101396 = inst_101420;var inst_101397 = inst_101422;var inst_101398 = 0;var state_101459__$1 = (function (){var statearr_101470 = state_101459;(statearr_101470[10] = inst_101395);
(statearr_101470[11] = inst_101396);
(statearr_101470[12] = inst_101398);
(statearr_101470[13] = inst_101397);
return statearr_101470;
})();var statearr_101471_101554 = state_101459__$1;(statearr_101471_101554[2] = null);
(statearr_101471_101554[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 5))
{var inst_101334 = cljs.core.deref.call(null,cs);var inst_101335 = cljs.core.seq.call(null,inst_101334);var inst_101336 = inst_101335;var inst_101337 = null;var inst_101338 = 0;var inst_101339 = 0;var state_101459__$1 = (function (){var statearr_101472 = state_101459;(statearr_101472[14] = inst_101339);
(statearr_101472[15] = inst_101336);
(statearr_101472[16] = inst_101337);
(statearr_101472[17] = inst_101338);
return statearr_101472;
})();var statearr_101473_101555 = state_101459__$1;(statearr_101473_101555[2] = null);
(statearr_101473_101555[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 37))
{var inst_101416 = (state_101459[9]);var inst_101425 = cljs.core.first.call(null,inst_101416);var state_101459__$1 = (function (){var statearr_101474 = state_101459;(statearr_101474[18] = inst_101425);
return statearr_101474;
})();var statearr_101475_101556 = state_101459__$1;(statearr_101475_101556[2] = null);
(statearr_101475_101556[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 6))
{var inst_101387 = (state_101459[19]);var inst_101386 = cljs.core.deref.call(null,cs);var inst_101387__$1 = cljs.core.keys.call(null,inst_101386);var inst_101388 = cljs.core.count.call(null,inst_101387__$1);var inst_101389 = cljs.core.reset_BANG_.call(null,dctr,inst_101388);var inst_101394 = cljs.core.seq.call(null,inst_101387__$1);var inst_101395 = inst_101394;var inst_101396 = null;var inst_101397 = 0;var inst_101398 = 0;var state_101459__$1 = (function (){var statearr_101476 = state_101459;(statearr_101476[10] = inst_101395);
(statearr_101476[11] = inst_101396);
(statearr_101476[12] = inst_101398);
(statearr_101476[13] = inst_101397);
(statearr_101476[20] = inst_101389);
(statearr_101476[19] = inst_101387__$1);
return statearr_101476;
})();var statearr_101477_101557 = state_101459__$1;(statearr_101477_101557[2] = null);
(statearr_101477_101557[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 38))
{var inst_101438 = (state_101459[2]);var state_101459__$1 = state_101459;var statearr_101478_101558 = state_101459__$1;(statearr_101478_101558[2] = inst_101438);
(statearr_101478_101558[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 7))
{var inst_101455 = (state_101459[2]);var state_101459__$1 = state_101459;var statearr_101479_101559 = state_101459__$1;(statearr_101479_101559[2] = inst_101455);
(statearr_101479_101559[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 39))
{var inst_101416 = (state_101459[9]);var inst_101434 = (state_101459[2]);var inst_101435 = cljs.core.next.call(null,inst_101416);var inst_101395 = inst_101435;var inst_101396 = null;var inst_101397 = 0;var inst_101398 = 0;var state_101459__$1 = (function (){var statearr_101480 = state_101459;(statearr_101480[10] = inst_101395);
(statearr_101480[11] = inst_101396);
(statearr_101480[21] = inst_101434);
(statearr_101480[12] = inst_101398);
(statearr_101480[13] = inst_101397);
return statearr_101480;
})();var statearr_101481_101560 = state_101459__$1;(statearr_101481_101560[2] = null);
(statearr_101481_101560[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 8))
{var inst_101339 = (state_101459[14]);var inst_101338 = (state_101459[17]);var inst_101341 = (inst_101339 < inst_101338);var inst_101342 = inst_101341;var state_101459__$1 = state_101459;if(cljs.core.truth_(inst_101342))
{var statearr_101482_101561 = state_101459__$1;(statearr_101482_101561[1] = 10);
} else
{var statearr_101483_101562 = state_101459__$1;(statearr_101483_101562[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 40))
{var inst_101425 = (state_101459[18]);var inst_101426 = (state_101459[2]);var inst_101427 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_101428 = cljs.core.async.untap_STAR_.call(null,m,inst_101425);var state_101459__$1 = (function (){var statearr_101484 = state_101459;(statearr_101484[22] = inst_101426);
(statearr_101484[23] = inst_101427);
return statearr_101484;
})();var statearr_101485_101563 = state_101459__$1;(statearr_101485_101563[2] = inst_101428);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101459__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 9))
{var inst_101384 = (state_101459[2]);var state_101459__$1 = state_101459;var statearr_101486_101564 = state_101459__$1;(statearr_101486_101564[2] = inst_101384);
(statearr_101486_101564[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 41))
{var inst_101425 = (state_101459[18]);var inst_101327 = (state_101459[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_101459,40,Object,null,39);var inst_101432 = cljs.core.async.put_BANG_.call(null,inst_101425,inst_101327,done);var state_101459__$1 = state_101459;var statearr_101487_101565 = state_101459__$1;(statearr_101487_101565[2] = inst_101432);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101459__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 10))
{var inst_101339 = (state_101459[14]);var inst_101337 = (state_101459[16]);var inst_101345 = cljs.core._nth.call(null,inst_101337,inst_101339);var inst_101346 = cljs.core.nth.call(null,inst_101345,0,null);var inst_101347 = cljs.core.nth.call(null,inst_101345,1,null);var state_101459__$1 = (function (){var statearr_101488 = state_101459;(statearr_101488[24] = inst_101346);
return statearr_101488;
})();if(cljs.core.truth_(inst_101347))
{var statearr_101489_101566 = state_101459__$1;(statearr_101489_101566[1] = 13);
} else
{var statearr_101490_101567 = state_101459__$1;(statearr_101490_101567[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 42))
{var state_101459__$1 = state_101459;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101459__$1,45,dchan);
} else
{if((state_val_101460 === 11))
{var inst_101356 = (state_101459[25]);var inst_101336 = (state_101459[15]);var inst_101356__$1 = cljs.core.seq.call(null,inst_101336);var state_101459__$1 = (function (){var statearr_101491 = state_101459;(statearr_101491[25] = inst_101356__$1);
return statearr_101491;
})();if(inst_101356__$1)
{var statearr_101492_101568 = state_101459__$1;(statearr_101492_101568[1] = 16);
} else
{var statearr_101493_101569 = state_101459__$1;(statearr_101493_101569[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 43))
{var state_101459__$1 = state_101459;var statearr_101494_101570 = state_101459__$1;(statearr_101494_101570[2] = null);
(statearr_101494_101570[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 12))
{var inst_101382 = (state_101459[2]);var state_101459__$1 = state_101459;var statearr_101495_101571 = state_101459__$1;(statearr_101495_101571[2] = inst_101382);
(statearr_101495_101571[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 44))
{var inst_101452 = (state_101459[2]);var state_101459__$1 = (function (){var statearr_101496 = state_101459;(statearr_101496[26] = inst_101452);
return statearr_101496;
})();var statearr_101497_101572 = state_101459__$1;(statearr_101497_101572[2] = null);
(statearr_101497_101572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 13))
{var inst_101346 = (state_101459[24]);var inst_101349 = cljs.core.async.close_BANG_.call(null,inst_101346);var state_101459__$1 = state_101459;var statearr_101498_101573 = state_101459__$1;(statearr_101498_101573[2] = inst_101349);
(statearr_101498_101573[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 45))
{var inst_101449 = (state_101459[2]);var state_101459__$1 = state_101459;var statearr_101502_101574 = state_101459__$1;(statearr_101502_101574[2] = inst_101449);
(statearr_101502_101574[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 14))
{var state_101459__$1 = state_101459;var statearr_101503_101575 = state_101459__$1;(statearr_101503_101575[2] = null);
(statearr_101503_101575[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 15))
{var inst_101339 = (state_101459[14]);var inst_101336 = (state_101459[15]);var inst_101337 = (state_101459[16]);var inst_101338 = (state_101459[17]);var inst_101352 = (state_101459[2]);var inst_101353 = (inst_101339 + 1);var tmp101499 = inst_101336;var tmp101500 = inst_101337;var tmp101501 = inst_101338;var inst_101336__$1 = tmp101499;var inst_101337__$1 = tmp101500;var inst_101338__$1 = tmp101501;var inst_101339__$1 = inst_101353;var state_101459__$1 = (function (){var statearr_101504 = state_101459;(statearr_101504[27] = inst_101352);
(statearr_101504[14] = inst_101339__$1);
(statearr_101504[15] = inst_101336__$1);
(statearr_101504[16] = inst_101337__$1);
(statearr_101504[17] = inst_101338__$1);
return statearr_101504;
})();var statearr_101505_101576 = state_101459__$1;(statearr_101505_101576[2] = null);
(statearr_101505_101576[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 16))
{var inst_101356 = (state_101459[25]);var inst_101358 = cljs.core.chunked_seq_QMARK_.call(null,inst_101356);var state_101459__$1 = state_101459;if(inst_101358)
{var statearr_101506_101577 = state_101459__$1;(statearr_101506_101577[1] = 19);
} else
{var statearr_101507_101578 = state_101459__$1;(statearr_101507_101578[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 17))
{var state_101459__$1 = state_101459;var statearr_101508_101579 = state_101459__$1;(statearr_101508_101579[2] = null);
(statearr_101508_101579[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 18))
{var inst_101380 = (state_101459[2]);var state_101459__$1 = state_101459;var statearr_101509_101580 = state_101459__$1;(statearr_101509_101580[2] = inst_101380);
(statearr_101509_101580[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 19))
{var inst_101356 = (state_101459[25]);var inst_101360 = cljs.core.chunk_first.call(null,inst_101356);var inst_101361 = cljs.core.chunk_rest.call(null,inst_101356);var inst_101362 = cljs.core.count.call(null,inst_101360);var inst_101336 = inst_101361;var inst_101337 = inst_101360;var inst_101338 = inst_101362;var inst_101339 = 0;var state_101459__$1 = (function (){var statearr_101510 = state_101459;(statearr_101510[14] = inst_101339);
(statearr_101510[15] = inst_101336);
(statearr_101510[16] = inst_101337);
(statearr_101510[17] = inst_101338);
return statearr_101510;
})();var statearr_101511_101581 = state_101459__$1;(statearr_101511_101581[2] = null);
(statearr_101511_101581[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 20))
{var inst_101356 = (state_101459[25]);var inst_101366 = cljs.core.first.call(null,inst_101356);var inst_101367 = cljs.core.nth.call(null,inst_101366,0,null);var inst_101368 = cljs.core.nth.call(null,inst_101366,1,null);var state_101459__$1 = (function (){var statearr_101512 = state_101459;(statearr_101512[28] = inst_101367);
return statearr_101512;
})();if(cljs.core.truth_(inst_101368))
{var statearr_101513_101582 = state_101459__$1;(statearr_101513_101582[1] = 22);
} else
{var statearr_101514_101583 = state_101459__$1;(statearr_101514_101583[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 21))
{var inst_101377 = (state_101459[2]);var state_101459__$1 = state_101459;var statearr_101515_101584 = state_101459__$1;(statearr_101515_101584[2] = inst_101377);
(statearr_101515_101584[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 22))
{var inst_101367 = (state_101459[28]);var inst_101370 = cljs.core.async.close_BANG_.call(null,inst_101367);var state_101459__$1 = state_101459;var statearr_101516_101585 = state_101459__$1;(statearr_101516_101585[2] = inst_101370);
(statearr_101516_101585[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 23))
{var state_101459__$1 = state_101459;var statearr_101517_101586 = state_101459__$1;(statearr_101517_101586[2] = null);
(statearr_101517_101586[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 24))
{var inst_101356 = (state_101459[25]);var inst_101373 = (state_101459[2]);var inst_101374 = cljs.core.next.call(null,inst_101356);var inst_101336 = inst_101374;var inst_101337 = null;var inst_101338 = 0;var inst_101339 = 0;var state_101459__$1 = (function (){var statearr_101518 = state_101459;(statearr_101518[14] = inst_101339);
(statearr_101518[29] = inst_101373);
(statearr_101518[15] = inst_101336);
(statearr_101518[16] = inst_101337);
(statearr_101518[17] = inst_101338);
return statearr_101518;
})();var statearr_101519_101587 = state_101459__$1;(statearr_101519_101587[2] = null);
(statearr_101519_101587[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 25))
{var inst_101398 = (state_101459[12]);var inst_101397 = (state_101459[13]);var inst_101400 = (inst_101398 < inst_101397);var inst_101401 = inst_101400;var state_101459__$1 = state_101459;if(cljs.core.truth_(inst_101401))
{var statearr_101520_101588 = state_101459__$1;(statearr_101520_101588[1] = 27);
} else
{var statearr_101521_101589 = state_101459__$1;(statearr_101521_101589[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 26))
{var inst_101387 = (state_101459[19]);var inst_101445 = (state_101459[2]);var inst_101446 = cljs.core.seq.call(null,inst_101387);var state_101459__$1 = (function (){var statearr_101522 = state_101459;(statearr_101522[30] = inst_101445);
return statearr_101522;
})();if(inst_101446)
{var statearr_101523_101590 = state_101459__$1;(statearr_101523_101590[1] = 42);
} else
{var statearr_101524_101591 = state_101459__$1;(statearr_101524_101591[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 27))
{var inst_101396 = (state_101459[11]);var inst_101398 = (state_101459[12]);var inst_101403 = cljs.core._nth.call(null,inst_101396,inst_101398);var state_101459__$1 = (function (){var statearr_101525 = state_101459;(statearr_101525[7] = inst_101403);
return statearr_101525;
})();var statearr_101526_101592 = state_101459__$1;(statearr_101526_101592[2] = null);
(statearr_101526_101592[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 28))
{var inst_101395 = (state_101459[10]);var inst_101416 = (state_101459[9]);var inst_101416__$1 = cljs.core.seq.call(null,inst_101395);var state_101459__$1 = (function (){var statearr_101530 = state_101459;(statearr_101530[9] = inst_101416__$1);
return statearr_101530;
})();if(inst_101416__$1)
{var statearr_101531_101593 = state_101459__$1;(statearr_101531_101593[1] = 33);
} else
{var statearr_101532_101594 = state_101459__$1;(statearr_101532_101594[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 29))
{var inst_101443 = (state_101459[2]);var state_101459__$1 = state_101459;var statearr_101533_101595 = state_101459__$1;(statearr_101533_101595[2] = inst_101443);
(statearr_101533_101595[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 30))
{var inst_101395 = (state_101459[10]);var inst_101396 = (state_101459[11]);var inst_101398 = (state_101459[12]);var inst_101397 = (state_101459[13]);var inst_101412 = (state_101459[2]);var inst_101413 = (inst_101398 + 1);var tmp101527 = inst_101395;var tmp101528 = inst_101396;var tmp101529 = inst_101397;var inst_101395__$1 = tmp101527;var inst_101396__$1 = tmp101528;var inst_101397__$1 = tmp101529;var inst_101398__$1 = inst_101413;var state_101459__$1 = (function (){var statearr_101534 = state_101459;(statearr_101534[10] = inst_101395__$1);
(statearr_101534[11] = inst_101396__$1);
(statearr_101534[12] = inst_101398__$1);
(statearr_101534[13] = inst_101397__$1);
(statearr_101534[31] = inst_101412);
return statearr_101534;
})();var statearr_101535_101596 = state_101459__$1;(statearr_101535_101596[2] = null);
(statearr_101535_101596[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101460 === 31))
{var inst_101403 = (state_101459[7]);var inst_101404 = (state_101459[2]);var inst_101405 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_101406 = cljs.core.async.untap_STAR_.call(null,m,inst_101403);var state_101459__$1 = (function (){var statearr_101536 = state_101459;(statearr_101536[32] = inst_101405);
(statearr_101536[33] = inst_101404);
return statearr_101536;
})();var statearr_101537_101597 = state_101459__$1;(statearr_101537_101597[2] = inst_101406);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101459__$1);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_101541 = (new Array(34));(statearr_101541[0] = state_machine__16761__auto__);
(statearr_101541[1] = 1);
return statearr_101541;
});
var state_machine__16761__auto____1 = (function (state_101459){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_101459);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e101542){if((e101542 instanceof Object))
{var ex__16764__auto__ = e101542;var statearr_101543_101598 = state_101459;(statearr_101543_101598[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101459);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e101542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__101599 = state_101459;
state_101459 = G__101599;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_101459){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_101459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_101544 = f__16831__auto__.call(null);(statearr_101544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___101545);
return statearr_101544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
cljs.core.async.Mix = (function (){var obj101601 = {};return obj101601;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13810__auto__ = m;if(and__13810__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13810__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14425__auto__ = (((m == null))?null:m);return (function (){var or__13822__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13810__auto__ = m;if(and__13810__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13810__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14425__auto__ = (((m == null))?null:m);return (function (){var or__13822__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13810__auto__ = m;if(and__13810__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13810__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14425__auto__ = (((m == null))?null:m);return (function (){var or__13822__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13810__auto__ = m;if(and__13810__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13810__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14425__auto__ = (((m == null))?null:m);return (function (){var or__13822__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13810__auto__ = m;if(and__13810__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13810__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14425__auto__ = (((m == null))?null:m);return (function (){var or__13822__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t101711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t101711 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta101712){
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
this.meta101712 = meta101712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t101711.cljs$lang$type = true;
cljs.core.async.t101711.cljs$lang$ctorStr = "cljs.core.async/t101711";
cljs.core.async.t101711.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"cljs.core.async/t101711");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t101711.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t101711.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t101711.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t101711.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t101711.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t101711.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t101711.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t101711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t101711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_101713){var self__ = this;
var _101713__$1 = this;return self__.meta101712;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t101711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_101713,meta101712__$1){var self__ = this;
var _101713__$1 = this;return (new cljs.core.async.t101711(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta101712__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t101711 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t101711(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta101712){return (new cljs.core.async.t101711(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta101712));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t101711(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__16830__auto___101820 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_101778){var state_val_101779 = (state_101778[1]);if((state_val_101779 === 1))
{var inst_101717 = (state_101778[7]);var inst_101717__$1 = calc_state.call(null);var inst_101718 = cljs.core.seq_QMARK_.call(null,inst_101717__$1);var state_101778__$1 = (function (){var statearr_101780 = state_101778;(statearr_101780[7] = inst_101717__$1);
return statearr_101780;
})();if(inst_101718)
{var statearr_101781_101821 = state_101778__$1;(statearr_101781_101821[1] = 2);
} else
{var statearr_101782_101822 = state_101778__$1;(statearr_101782_101822[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 2))
{var inst_101717 = (state_101778[7]);var inst_101720 = cljs.core.apply.call(null,cljs.core.hash_map,inst_101717);var state_101778__$1 = state_101778;var statearr_101783_101823 = state_101778__$1;(statearr_101783_101823[2] = inst_101720);
(statearr_101783_101823[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 3))
{var inst_101717 = (state_101778[7]);var state_101778__$1 = state_101778;var statearr_101784_101824 = state_101778__$1;(statearr_101784_101824[2] = inst_101717);
(statearr_101784_101824[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 4))
{var inst_101717 = (state_101778[7]);var inst_101723 = (state_101778[2]);var inst_101724 = cljs.core.get.call(null,inst_101723,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_101725 = cljs.core.get.call(null,inst_101723,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_101726 = cljs.core.get.call(null,inst_101723,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_101727 = inst_101717;var state_101778__$1 = (function (){var statearr_101785 = state_101778;(statearr_101785[8] = inst_101725);
(statearr_101785[9] = inst_101724);
(statearr_101785[10] = inst_101727);
(statearr_101785[11] = inst_101726);
return statearr_101785;
})();var statearr_101786_101825 = state_101778__$1;(statearr_101786_101825[2] = null);
(statearr_101786_101825[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 5))
{var inst_101727 = (state_101778[10]);var inst_101730 = cljs.core.seq_QMARK_.call(null,inst_101727);var state_101778__$1 = state_101778;if(inst_101730)
{var statearr_101787_101826 = state_101778__$1;(statearr_101787_101826[1] = 7);
} else
{var statearr_101788_101827 = state_101778__$1;(statearr_101788_101827[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 6))
{var inst_101776 = (state_101778[2]);var state_101778__$1 = state_101778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101778__$1,inst_101776);
} else
{if((state_val_101779 === 7))
{var inst_101727 = (state_101778[10]);var inst_101732 = cljs.core.apply.call(null,cljs.core.hash_map,inst_101727);var state_101778__$1 = state_101778;var statearr_101789_101828 = state_101778__$1;(statearr_101789_101828[2] = inst_101732);
(statearr_101789_101828[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 8))
{var inst_101727 = (state_101778[10]);var state_101778__$1 = state_101778;var statearr_101790_101829 = state_101778__$1;(statearr_101790_101829[2] = inst_101727);
(statearr_101790_101829[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 9))
{var inst_101735 = (state_101778[12]);var inst_101735__$1 = (state_101778[2]);var inst_101736 = cljs.core.get.call(null,inst_101735__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_101737 = cljs.core.get.call(null,inst_101735__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_101738 = cljs.core.get.call(null,inst_101735__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_101778__$1 = (function (){var statearr_101791 = state_101778;(statearr_101791[12] = inst_101735__$1);
(statearr_101791[13] = inst_101738);
(statearr_101791[14] = inst_101737);
return statearr_101791;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_101778__$1,10,inst_101736);
} else
{if((state_val_101779 === 10))
{var inst_101742 = (state_101778[15]);var inst_101743 = (state_101778[16]);var inst_101741 = (state_101778[2]);var inst_101742__$1 = cljs.core.nth.call(null,inst_101741,0,null);var inst_101743__$1 = cljs.core.nth.call(null,inst_101741,1,null);var inst_101744 = (inst_101742__$1 == null);var inst_101745 = cljs.core._EQ_.call(null,inst_101743__$1,change);var inst_101746 = (inst_101744) || (inst_101745);var state_101778__$1 = (function (){var statearr_101792 = state_101778;(statearr_101792[15] = inst_101742__$1);
(statearr_101792[16] = inst_101743__$1);
return statearr_101792;
})();if(cljs.core.truth_(inst_101746))
{var statearr_101793_101830 = state_101778__$1;(statearr_101793_101830[1] = 11);
} else
{var statearr_101794_101831 = state_101778__$1;(statearr_101794_101831[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 11))
{var inst_101742 = (state_101778[15]);var inst_101748 = (inst_101742 == null);var state_101778__$1 = state_101778;if(cljs.core.truth_(inst_101748))
{var statearr_101795_101832 = state_101778__$1;(statearr_101795_101832[1] = 14);
} else
{var statearr_101796_101833 = state_101778__$1;(statearr_101796_101833[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 12))
{var inst_101738 = (state_101778[13]);var inst_101743 = (state_101778[16]);var inst_101757 = (state_101778[17]);var inst_101757__$1 = inst_101738.call(null,inst_101743);var state_101778__$1 = (function (){var statearr_101797 = state_101778;(statearr_101797[17] = inst_101757__$1);
return statearr_101797;
})();if(cljs.core.truth_(inst_101757__$1))
{var statearr_101798_101834 = state_101778__$1;(statearr_101798_101834[1] = 17);
} else
{var statearr_101799_101835 = state_101778__$1;(statearr_101799_101835[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 13))
{var inst_101774 = (state_101778[2]);var state_101778__$1 = state_101778;var statearr_101800_101836 = state_101778__$1;(statearr_101800_101836[2] = inst_101774);
(statearr_101800_101836[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 14))
{var inst_101743 = (state_101778[16]);var inst_101750 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_101743);var state_101778__$1 = state_101778;var statearr_101801_101837 = state_101778__$1;(statearr_101801_101837[2] = inst_101750);
(statearr_101801_101837[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 15))
{var state_101778__$1 = state_101778;var statearr_101802_101838 = state_101778__$1;(statearr_101802_101838[2] = null);
(statearr_101802_101838[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 16))
{var inst_101753 = (state_101778[2]);var inst_101754 = calc_state.call(null);var inst_101727 = inst_101754;var state_101778__$1 = (function (){var statearr_101803 = state_101778;(statearr_101803[10] = inst_101727);
(statearr_101803[18] = inst_101753);
return statearr_101803;
})();var statearr_101804_101839 = state_101778__$1;(statearr_101804_101839[2] = null);
(statearr_101804_101839[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 17))
{var inst_101757 = (state_101778[17]);var state_101778__$1 = state_101778;var statearr_101805_101840 = state_101778__$1;(statearr_101805_101840[2] = inst_101757);
(statearr_101805_101840[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 18))
{var inst_101738 = (state_101778[13]);var inst_101737 = (state_101778[14]);var inst_101743 = (state_101778[16]);var inst_101760 = cljs.core.empty_QMARK_.call(null,inst_101738);var inst_101761 = inst_101737.call(null,inst_101743);var inst_101762 = cljs.core.not.call(null,inst_101761);var inst_101763 = (inst_101760) && (inst_101762);var state_101778__$1 = state_101778;var statearr_101806_101841 = state_101778__$1;(statearr_101806_101841[2] = inst_101763);
(statearr_101806_101841[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 19))
{var inst_101765 = (state_101778[2]);var state_101778__$1 = state_101778;if(cljs.core.truth_(inst_101765))
{var statearr_101807_101842 = state_101778__$1;(statearr_101807_101842[1] = 20);
} else
{var statearr_101808_101843 = state_101778__$1;(statearr_101808_101843[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 20))
{var inst_101742 = (state_101778[15]);var state_101778__$1 = state_101778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101778__$1,23,out,inst_101742);
} else
{if((state_val_101779 === 21))
{var state_101778__$1 = state_101778;var statearr_101809_101844 = state_101778__$1;(statearr_101809_101844[2] = null);
(statearr_101809_101844[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 22))
{var inst_101735 = (state_101778[12]);var inst_101771 = (state_101778[2]);var inst_101727 = inst_101735;var state_101778__$1 = (function (){var statearr_101810 = state_101778;(statearr_101810[10] = inst_101727);
(statearr_101810[19] = inst_101771);
return statearr_101810;
})();var statearr_101811_101845 = state_101778__$1;(statearr_101811_101845[2] = null);
(statearr_101811_101845[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_101779 === 23))
{var inst_101768 = (state_101778[2]);var state_101778__$1 = state_101778;var statearr_101812_101846 = state_101778__$1;(statearr_101812_101846[2] = inst_101768);
(statearr_101812_101846[1] = 22);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_101816 = (new Array(20));(statearr_101816[0] = state_machine__16761__auto__);
(statearr_101816[1] = 1);
return statearr_101816;
});
var state_machine__16761__auto____1 = (function (state_101778){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_101778);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e101817){if((e101817 instanceof Object))
{var ex__16764__auto__ = e101817;var statearr_101818_101847 = state_101778;(statearr_101818_101847[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e101817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__101848 = state_101778;
state_101778 = G__101848;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_101778){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_101778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_101819 = f__16831__auto__.call(null);(statearr_101819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___101820);
return statearr_101819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
cljs.core.async.Pub = (function (){var obj101850 = {};return obj101850;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13810__auto__ = p;if(and__13810__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13810__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14425__auto__ = (((p == null))?null:p);return (function (){var or__13822__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13810__auto__ = p;if(and__13810__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13810__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14425__auto__ = (((p == null))?null:p);return (function (){var or__13822__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13810__auto__ = p;if(and__13810__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13810__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14425__auto__ = (((p == null))?null:p);return (function (){var or__13822__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13810__auto__ = p;if(and__13810__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13810__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14425__auto__ = (((p == null))?null:p);return (function (){var or__13822__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
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
return (function (topic){var or__13822__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13822__auto__,mults){
return (function (p1__101851_SHARP_){if(cljs.core.truth_(p1__101851_SHARP_.call(null,topic)))
{return p1__101851_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__101851_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13822__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t101976 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t101976 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta101977){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta101977 = meta101977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t101976.cljs$lang$type = true;
cljs.core.async.t101976.cljs$lang$ctorStr = "cljs.core.async/t101976";
cljs.core.async.t101976.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"cljs.core.async/t101976");
});})(mults,ensure_mult))
;
cljs.core.async.t101976.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t101976.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t101976.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t101976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t101976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t101976.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t101976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t101976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_101978){var self__ = this;
var _101978__$1 = this;return self__.meta101977;
});})(mults,ensure_mult))
;
cljs.core.async.t101976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_101978,meta101977__$1){var self__ = this;
var _101978__$1 = this;return (new cljs.core.async.t101976(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta101977__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t101976 = ((function (mults,ensure_mult){
return (function __GT_t101976(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta101977){return (new cljs.core.async.t101976(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta101977));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t101976(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__16830__auto___102100 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_102052){var state_val_102053 = (state_102052[1]);if((state_val_102053 === 1))
{var state_102052__$1 = state_102052;var statearr_102054_102101 = state_102052__$1;(statearr_102054_102101[2] = null);
(statearr_102054_102101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 2))
{var state_102052__$1 = state_102052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102052__$1,4,ch);
} else
{if((state_val_102053 === 3))
{var inst_102050 = (state_102052[2]);var state_102052__$1 = state_102052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102052__$1,inst_102050);
} else
{if((state_val_102053 === 4))
{var inst_101981 = (state_102052[7]);var inst_101981__$1 = (state_102052[2]);var inst_101982 = (inst_101981__$1 == null);var state_102052__$1 = (function (){var statearr_102055 = state_102052;(statearr_102055[7] = inst_101981__$1);
return statearr_102055;
})();if(cljs.core.truth_(inst_101982))
{var statearr_102056_102102 = state_102052__$1;(statearr_102056_102102[1] = 5);
} else
{var statearr_102057_102103 = state_102052__$1;(statearr_102057_102103[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 5))
{var inst_101988 = cljs.core.deref.call(null,mults);var inst_101989 = cljs.core.vals.call(null,inst_101988);var inst_101990 = cljs.core.seq.call(null,inst_101989);var inst_101991 = inst_101990;var inst_101992 = null;var inst_101993 = 0;var inst_101994 = 0;var state_102052__$1 = (function (){var statearr_102058 = state_102052;(statearr_102058[8] = inst_101994);
(statearr_102058[9] = inst_101993);
(statearr_102058[10] = inst_101992);
(statearr_102058[11] = inst_101991);
return statearr_102058;
})();var statearr_102059_102104 = state_102052__$1;(statearr_102059_102104[2] = null);
(statearr_102059_102104[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 6))
{var inst_102029 = (state_102052[12]);var inst_101981 = (state_102052[7]);var inst_102031 = (state_102052[13]);var inst_102029__$1 = topic_fn.call(null,inst_101981);var inst_102030 = cljs.core.deref.call(null,mults);var inst_102031__$1 = cljs.core.get.call(null,inst_102030,inst_102029__$1);var state_102052__$1 = (function (){var statearr_102060 = state_102052;(statearr_102060[12] = inst_102029__$1);
(statearr_102060[13] = inst_102031__$1);
return statearr_102060;
})();if(cljs.core.truth_(inst_102031__$1))
{var statearr_102061_102105 = state_102052__$1;(statearr_102061_102105[1] = 19);
} else
{var statearr_102062_102106 = state_102052__$1;(statearr_102062_102106[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 7))
{var inst_102048 = (state_102052[2]);var state_102052__$1 = state_102052;var statearr_102063_102107 = state_102052__$1;(statearr_102063_102107[2] = inst_102048);
(statearr_102063_102107[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 8))
{var inst_101994 = (state_102052[8]);var inst_101993 = (state_102052[9]);var inst_101996 = (inst_101994 < inst_101993);var inst_101997 = inst_101996;var state_102052__$1 = state_102052;if(cljs.core.truth_(inst_101997))
{var statearr_102067_102108 = state_102052__$1;(statearr_102067_102108[1] = 10);
} else
{var statearr_102068_102109 = state_102052__$1;(statearr_102068_102109[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 9))
{var inst_102027 = (state_102052[2]);var state_102052__$1 = state_102052;var statearr_102069_102110 = state_102052__$1;(statearr_102069_102110[2] = inst_102027);
(statearr_102069_102110[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 10))
{var inst_101994 = (state_102052[8]);var inst_101993 = (state_102052[9]);var inst_101992 = (state_102052[10]);var inst_101991 = (state_102052[11]);var inst_101999 = cljs.core._nth.call(null,inst_101992,inst_101994);var inst_102000 = cljs.core.async.muxch_STAR_.call(null,inst_101999);var inst_102001 = cljs.core.async.close_BANG_.call(null,inst_102000);var inst_102002 = (inst_101994 + 1);var tmp102064 = inst_101993;var tmp102065 = inst_101992;var tmp102066 = inst_101991;var inst_101991__$1 = tmp102066;var inst_101992__$1 = tmp102065;var inst_101993__$1 = tmp102064;var inst_101994__$1 = inst_102002;var state_102052__$1 = (function (){var statearr_102070 = state_102052;(statearr_102070[14] = inst_102001);
(statearr_102070[8] = inst_101994__$1);
(statearr_102070[9] = inst_101993__$1);
(statearr_102070[10] = inst_101992__$1);
(statearr_102070[11] = inst_101991__$1);
return statearr_102070;
})();var statearr_102071_102111 = state_102052__$1;(statearr_102071_102111[2] = null);
(statearr_102071_102111[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 11))
{var inst_102005 = (state_102052[15]);var inst_101991 = (state_102052[11]);var inst_102005__$1 = cljs.core.seq.call(null,inst_101991);var state_102052__$1 = (function (){var statearr_102072 = state_102052;(statearr_102072[15] = inst_102005__$1);
return statearr_102072;
})();if(inst_102005__$1)
{var statearr_102073_102112 = state_102052__$1;(statearr_102073_102112[1] = 13);
} else
{var statearr_102074_102113 = state_102052__$1;(statearr_102074_102113[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 12))
{var inst_102025 = (state_102052[2]);var state_102052__$1 = state_102052;var statearr_102075_102114 = state_102052__$1;(statearr_102075_102114[2] = inst_102025);
(statearr_102075_102114[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 13))
{var inst_102005 = (state_102052[15]);var inst_102007 = cljs.core.chunked_seq_QMARK_.call(null,inst_102005);var state_102052__$1 = state_102052;if(inst_102007)
{var statearr_102076_102115 = state_102052__$1;(statearr_102076_102115[1] = 16);
} else
{var statearr_102077_102116 = state_102052__$1;(statearr_102077_102116[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 14))
{var state_102052__$1 = state_102052;var statearr_102078_102117 = state_102052__$1;(statearr_102078_102117[2] = null);
(statearr_102078_102117[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 15))
{var inst_102023 = (state_102052[2]);var state_102052__$1 = state_102052;var statearr_102079_102118 = state_102052__$1;(statearr_102079_102118[2] = inst_102023);
(statearr_102079_102118[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 16))
{var inst_102005 = (state_102052[15]);var inst_102009 = cljs.core.chunk_first.call(null,inst_102005);var inst_102010 = cljs.core.chunk_rest.call(null,inst_102005);var inst_102011 = cljs.core.count.call(null,inst_102009);var inst_101991 = inst_102010;var inst_101992 = inst_102009;var inst_101993 = inst_102011;var inst_101994 = 0;var state_102052__$1 = (function (){var statearr_102080 = state_102052;(statearr_102080[8] = inst_101994);
(statearr_102080[9] = inst_101993);
(statearr_102080[10] = inst_101992);
(statearr_102080[11] = inst_101991);
return statearr_102080;
})();var statearr_102081_102119 = state_102052__$1;(statearr_102081_102119[2] = null);
(statearr_102081_102119[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 17))
{var inst_102005 = (state_102052[15]);var inst_102014 = cljs.core.first.call(null,inst_102005);var inst_102015 = cljs.core.async.muxch_STAR_.call(null,inst_102014);var inst_102016 = cljs.core.async.close_BANG_.call(null,inst_102015);var inst_102017 = cljs.core.next.call(null,inst_102005);var inst_101991 = inst_102017;var inst_101992 = null;var inst_101993 = 0;var inst_101994 = 0;var state_102052__$1 = (function (){var statearr_102082 = state_102052;(statearr_102082[16] = inst_102016);
(statearr_102082[8] = inst_101994);
(statearr_102082[9] = inst_101993);
(statearr_102082[10] = inst_101992);
(statearr_102082[11] = inst_101991);
return statearr_102082;
})();var statearr_102083_102120 = state_102052__$1;(statearr_102083_102120[2] = null);
(statearr_102083_102120[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 18))
{var inst_102020 = (state_102052[2]);var state_102052__$1 = state_102052;var statearr_102084_102121 = state_102052__$1;(statearr_102084_102121[2] = inst_102020);
(statearr_102084_102121[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 19))
{var state_102052__$1 = state_102052;var statearr_102085_102122 = state_102052__$1;(statearr_102085_102122[2] = null);
(statearr_102085_102122[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 20))
{var state_102052__$1 = state_102052;var statearr_102086_102123 = state_102052__$1;(statearr_102086_102123[2] = null);
(statearr_102086_102123[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 21))
{var inst_102045 = (state_102052[2]);var state_102052__$1 = (function (){var statearr_102087 = state_102052;(statearr_102087[17] = inst_102045);
return statearr_102087;
})();var statearr_102088_102124 = state_102052__$1;(statearr_102088_102124[2] = null);
(statearr_102088_102124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 22))
{var inst_102042 = (state_102052[2]);var state_102052__$1 = state_102052;var statearr_102089_102125 = state_102052__$1;(statearr_102089_102125[2] = inst_102042);
(statearr_102089_102125[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 23))
{var inst_102029 = (state_102052[12]);var inst_102033 = (state_102052[2]);var inst_102034 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_102029);var state_102052__$1 = (function (){var statearr_102090 = state_102052;(statearr_102090[18] = inst_102033);
return statearr_102090;
})();var statearr_102091_102126 = state_102052__$1;(statearr_102091_102126[2] = inst_102034);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102052__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102053 === 24))
{var inst_101981 = (state_102052[7]);var inst_102031 = (state_102052[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_102052,23,Object,null,22);var inst_102038 = cljs.core.async.muxch_STAR_.call(null,inst_102031);var state_102052__$1 = state_102052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102052__$1,25,inst_102038,inst_101981);
} else
{if((state_val_102053 === 25))
{var inst_102040 = (state_102052[2]);var state_102052__$1 = state_102052;var statearr_102092_102127 = state_102052__$1;(statearr_102092_102127[2] = inst_102040);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102052__$1);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_102096 = (new Array(19));(statearr_102096[0] = state_machine__16761__auto__);
(statearr_102096[1] = 1);
return statearr_102096;
});
var state_machine__16761__auto____1 = (function (state_102052){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_102052);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e102097){if((e102097 instanceof Object))
{var ex__16764__auto__ = e102097;var statearr_102098_102128 = state_102052;(statearr_102098_102128[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e102097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__102129 = state_102052;
state_102052 = G__102129;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_102052){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_102052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_102099 = f__16831__auto__.call(null);(statearr_102099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___102100);
return statearr_102099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
,cljs.core.range.call(null,cnt));var c__16830__auto___102266 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_102236){var state_val_102237 = (state_102236[1]);if((state_val_102237 === 1))
{var state_102236__$1 = state_102236;var statearr_102238_102267 = state_102236__$1;(statearr_102238_102267[2] = null);
(statearr_102238_102267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 2))
{var inst_102199 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_102200 = 0;var state_102236__$1 = (function (){var statearr_102239 = state_102236;(statearr_102239[7] = inst_102200);
(statearr_102239[8] = inst_102199);
return statearr_102239;
})();var statearr_102240_102268 = state_102236__$1;(statearr_102240_102268[2] = null);
(statearr_102240_102268[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 3))
{var inst_102234 = (state_102236[2]);var state_102236__$1 = state_102236;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102236__$1,inst_102234);
} else
{if((state_val_102237 === 4))
{var inst_102200 = (state_102236[7]);var inst_102202 = (inst_102200 < cnt);var state_102236__$1 = state_102236;if(cljs.core.truth_(inst_102202))
{var statearr_102241_102269 = state_102236__$1;(statearr_102241_102269[1] = 6);
} else
{var statearr_102242_102270 = state_102236__$1;(statearr_102242_102270[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 5))
{var inst_102220 = (state_102236[2]);var state_102236__$1 = (function (){var statearr_102243 = state_102236;(statearr_102243[9] = inst_102220);
return statearr_102243;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102236__$1,12,dchan);
} else
{if((state_val_102237 === 6))
{var state_102236__$1 = state_102236;var statearr_102244_102271 = state_102236__$1;(statearr_102244_102271[2] = null);
(statearr_102244_102271[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 7))
{var state_102236__$1 = state_102236;var statearr_102245_102272 = state_102236__$1;(statearr_102245_102272[2] = null);
(statearr_102245_102272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 8))
{var inst_102218 = (state_102236[2]);var state_102236__$1 = state_102236;var statearr_102246_102273 = state_102236__$1;(statearr_102246_102273[2] = inst_102218);
(statearr_102246_102273[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 9))
{var inst_102200 = (state_102236[7]);var inst_102213 = (state_102236[2]);var inst_102214 = (inst_102200 + 1);var inst_102200__$1 = inst_102214;var state_102236__$1 = (function (){var statearr_102247 = state_102236;(statearr_102247[10] = inst_102213);
(statearr_102247[7] = inst_102200__$1);
return statearr_102247;
})();var statearr_102248_102274 = state_102236__$1;(statearr_102248_102274[2] = null);
(statearr_102248_102274[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 10))
{var inst_102204 = (state_102236[2]);var inst_102205 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_102236__$1 = (function (){var statearr_102249 = state_102236;(statearr_102249[11] = inst_102204);
return statearr_102249;
})();var statearr_102250_102275 = state_102236__$1;(statearr_102250_102275[2] = inst_102205);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102236__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 11))
{var inst_102200 = (state_102236[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_102236,10,Object,null,9);var inst_102209 = chs__$1.call(null,inst_102200);var inst_102210 = done.call(null,inst_102200);var inst_102211 = cljs.core.async.take_BANG_.call(null,inst_102209,inst_102210);var state_102236__$1 = state_102236;var statearr_102251_102276 = state_102236__$1;(statearr_102251_102276[2] = inst_102211);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102236__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 12))
{var inst_102222 = (state_102236[12]);var inst_102222__$1 = (state_102236[2]);var inst_102223 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_102222__$1);var state_102236__$1 = (function (){var statearr_102252 = state_102236;(statearr_102252[12] = inst_102222__$1);
return statearr_102252;
})();if(cljs.core.truth_(inst_102223))
{var statearr_102253_102277 = state_102236__$1;(statearr_102253_102277[1] = 13);
} else
{var statearr_102254_102278 = state_102236__$1;(statearr_102254_102278[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 13))
{var inst_102225 = cljs.core.async.close_BANG_.call(null,out);var state_102236__$1 = state_102236;var statearr_102255_102279 = state_102236__$1;(statearr_102255_102279[2] = inst_102225);
(statearr_102255_102279[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 14))
{var inst_102222 = (state_102236[12]);var inst_102227 = cljs.core.apply.call(null,f,inst_102222);var state_102236__$1 = state_102236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102236__$1,16,out,inst_102227);
} else
{if((state_val_102237 === 15))
{var inst_102232 = (state_102236[2]);var state_102236__$1 = state_102236;var statearr_102256_102280 = state_102236__$1;(statearr_102256_102280[2] = inst_102232);
(statearr_102256_102280[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102237 === 16))
{var inst_102229 = (state_102236[2]);var state_102236__$1 = (function (){var statearr_102257 = state_102236;(statearr_102257[13] = inst_102229);
return statearr_102257;
})();var statearr_102258_102281 = state_102236__$1;(statearr_102258_102281[2] = null);
(statearr_102258_102281[1] = 2);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_102262 = (new Array(14));(statearr_102262[0] = state_machine__16761__auto__);
(statearr_102262[1] = 1);
return statearr_102262;
});
var state_machine__16761__auto____1 = (function (state_102236){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_102236);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e102263){if((e102263 instanceof Object))
{var ex__16764__auto__ = e102263;var statearr_102264_102282 = state_102236;(statearr_102264_102282[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102236);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e102263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__102283 = state_102236;
state_102236 = G__102283;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_102236){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_102236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_102265 = f__16831__auto__.call(null);(statearr_102265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___102266);
return statearr_102265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16830__auto___102391 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_102367){var state_val_102368 = (state_102367[1]);if((state_val_102368 === 1))
{var inst_102338 = cljs.core.vec.call(null,chs);var inst_102339 = inst_102338;var state_102367__$1 = (function (){var statearr_102369 = state_102367;(statearr_102369[7] = inst_102339);
return statearr_102369;
})();var statearr_102370_102392 = state_102367__$1;(statearr_102370_102392[2] = null);
(statearr_102370_102392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102368 === 2))
{var inst_102339 = (state_102367[7]);var inst_102341 = cljs.core.count.call(null,inst_102339);var inst_102342 = (inst_102341 > 0);var state_102367__$1 = state_102367;if(cljs.core.truth_(inst_102342))
{var statearr_102371_102393 = state_102367__$1;(statearr_102371_102393[1] = 4);
} else
{var statearr_102372_102394 = state_102367__$1;(statearr_102372_102394[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102368 === 3))
{var inst_102365 = (state_102367[2]);var state_102367__$1 = state_102367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102367__$1,inst_102365);
} else
{if((state_val_102368 === 4))
{var inst_102339 = (state_102367[7]);var state_102367__$1 = state_102367;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_102367__$1,7,inst_102339);
} else
{if((state_val_102368 === 5))
{var inst_102361 = cljs.core.async.close_BANG_.call(null,out);var state_102367__$1 = state_102367;var statearr_102373_102395 = state_102367__$1;(statearr_102373_102395[2] = inst_102361);
(statearr_102373_102395[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102368 === 6))
{var inst_102363 = (state_102367[2]);var state_102367__$1 = state_102367;var statearr_102374_102396 = state_102367__$1;(statearr_102374_102396[2] = inst_102363);
(statearr_102374_102396[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102368 === 7))
{var inst_102347 = (state_102367[8]);var inst_102346 = (state_102367[9]);var inst_102346__$1 = (state_102367[2]);var inst_102347__$1 = cljs.core.nth.call(null,inst_102346__$1,0,null);var inst_102348 = cljs.core.nth.call(null,inst_102346__$1,1,null);var inst_102349 = (inst_102347__$1 == null);var state_102367__$1 = (function (){var statearr_102375 = state_102367;(statearr_102375[8] = inst_102347__$1);
(statearr_102375[10] = inst_102348);
(statearr_102375[9] = inst_102346__$1);
return statearr_102375;
})();if(cljs.core.truth_(inst_102349))
{var statearr_102376_102397 = state_102367__$1;(statearr_102376_102397[1] = 8);
} else
{var statearr_102377_102398 = state_102367__$1;(statearr_102377_102398[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102368 === 8))
{var inst_102347 = (state_102367[8]);var inst_102348 = (state_102367[10]);var inst_102346 = (state_102367[9]);var inst_102339 = (state_102367[7]);var inst_102351 = (function (){var c = inst_102348;var v = inst_102347;var vec__102344 = inst_102346;var cs = inst_102339;return ((function (c,v,vec__102344,cs,inst_102347,inst_102348,inst_102346,inst_102339,state_val_102368){
return (function (p1__102284_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__102284_SHARP_);
});
;})(c,v,vec__102344,cs,inst_102347,inst_102348,inst_102346,inst_102339,state_val_102368))
})();var inst_102352 = cljs.core.filterv.call(null,inst_102351,inst_102339);var inst_102339__$1 = inst_102352;var state_102367__$1 = (function (){var statearr_102378 = state_102367;(statearr_102378[7] = inst_102339__$1);
return statearr_102378;
})();var statearr_102379_102399 = state_102367__$1;(statearr_102379_102399[2] = null);
(statearr_102379_102399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102368 === 9))
{var inst_102347 = (state_102367[8]);var state_102367__$1 = state_102367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102367__$1,11,out,inst_102347);
} else
{if((state_val_102368 === 10))
{var inst_102359 = (state_102367[2]);var state_102367__$1 = state_102367;var statearr_102381_102400 = state_102367__$1;(statearr_102381_102400[2] = inst_102359);
(statearr_102381_102400[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102368 === 11))
{var inst_102339 = (state_102367[7]);var inst_102356 = (state_102367[2]);var tmp102380 = inst_102339;var inst_102339__$1 = tmp102380;var state_102367__$1 = (function (){var statearr_102382 = state_102367;(statearr_102382[11] = inst_102356);
(statearr_102382[7] = inst_102339__$1);
return statearr_102382;
})();var statearr_102383_102401 = state_102367__$1;(statearr_102383_102401[2] = null);
(statearr_102383_102401[1] = 2);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_102387 = (new Array(12));(statearr_102387[0] = state_machine__16761__auto__);
(statearr_102387[1] = 1);
return statearr_102387;
});
var state_machine__16761__auto____1 = (function (state_102367){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_102367);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e102388){if((e102388 instanceof Object))
{var ex__16764__auto__ = e102388;var statearr_102389_102402 = state_102367;(statearr_102389_102402[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e102388;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__102403 = state_102367;
state_102367 = G__102403;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_102367){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_102367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_102390 = f__16831__auto__.call(null);(statearr_102390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___102391);
return statearr_102390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16830__auto___102496 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_102473){var state_val_102474 = (state_102473[1]);if((state_val_102474 === 1))
{var inst_102450 = 0;var state_102473__$1 = (function (){var statearr_102475 = state_102473;(statearr_102475[7] = inst_102450);
return statearr_102475;
})();var statearr_102476_102497 = state_102473__$1;(statearr_102476_102497[2] = null);
(statearr_102476_102497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102474 === 2))
{var inst_102450 = (state_102473[7]);var inst_102452 = (inst_102450 < n);var state_102473__$1 = state_102473;if(cljs.core.truth_(inst_102452))
{var statearr_102477_102498 = state_102473__$1;(statearr_102477_102498[1] = 4);
} else
{var statearr_102478_102499 = state_102473__$1;(statearr_102478_102499[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102474 === 3))
{var inst_102470 = (state_102473[2]);var inst_102471 = cljs.core.async.close_BANG_.call(null,out);var state_102473__$1 = (function (){var statearr_102479 = state_102473;(statearr_102479[8] = inst_102470);
return statearr_102479;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102473__$1,inst_102471);
} else
{if((state_val_102474 === 4))
{var state_102473__$1 = state_102473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102473__$1,7,ch);
} else
{if((state_val_102474 === 5))
{var state_102473__$1 = state_102473;var statearr_102480_102500 = state_102473__$1;(statearr_102480_102500[2] = null);
(statearr_102480_102500[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102474 === 6))
{var inst_102468 = (state_102473[2]);var state_102473__$1 = state_102473;var statearr_102481_102501 = state_102473__$1;(statearr_102481_102501[2] = inst_102468);
(statearr_102481_102501[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102474 === 7))
{var inst_102455 = (state_102473[9]);var inst_102455__$1 = (state_102473[2]);var inst_102456 = (inst_102455__$1 == null);var inst_102457 = cljs.core.not.call(null,inst_102456);var state_102473__$1 = (function (){var statearr_102482 = state_102473;(statearr_102482[9] = inst_102455__$1);
return statearr_102482;
})();if(inst_102457)
{var statearr_102483_102502 = state_102473__$1;(statearr_102483_102502[1] = 8);
} else
{var statearr_102484_102503 = state_102473__$1;(statearr_102484_102503[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102474 === 8))
{var inst_102455 = (state_102473[9]);var state_102473__$1 = state_102473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102473__$1,11,out,inst_102455);
} else
{if((state_val_102474 === 9))
{var state_102473__$1 = state_102473;var statearr_102485_102504 = state_102473__$1;(statearr_102485_102504[2] = null);
(statearr_102485_102504[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102474 === 10))
{var inst_102465 = (state_102473[2]);var state_102473__$1 = state_102473;var statearr_102486_102505 = state_102473__$1;(statearr_102486_102505[2] = inst_102465);
(statearr_102486_102505[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102474 === 11))
{var inst_102450 = (state_102473[7]);var inst_102460 = (state_102473[2]);var inst_102461 = (inst_102450 + 1);var inst_102450__$1 = inst_102461;var state_102473__$1 = (function (){var statearr_102487 = state_102473;(statearr_102487[7] = inst_102450__$1);
(statearr_102487[10] = inst_102460);
return statearr_102487;
})();var statearr_102488_102506 = state_102473__$1;(statearr_102488_102506[2] = null);
(statearr_102488_102506[1] = 2);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_102492 = (new Array(11));(statearr_102492[0] = state_machine__16761__auto__);
(statearr_102492[1] = 1);
return statearr_102492;
});
var state_machine__16761__auto____1 = (function (state_102473){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_102473);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e102493){if((e102493 instanceof Object))
{var ex__16764__auto__ = e102493;var statearr_102494_102507 = state_102473;(statearr_102494_102507[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102473);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e102493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__102508 = state_102473;
state_102473 = G__102508;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_102473){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_102473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_102495 = f__16831__auto__.call(null);(statearr_102495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___102496);
return statearr_102495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16830__auto___102605 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_102580){var state_val_102581 = (state_102580[1]);if((state_val_102581 === 1))
{var inst_102557 = null;var state_102580__$1 = (function (){var statearr_102582 = state_102580;(statearr_102582[7] = inst_102557);
return statearr_102582;
})();var statearr_102583_102606 = state_102580__$1;(statearr_102583_102606[2] = null);
(statearr_102583_102606[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102581 === 2))
{var state_102580__$1 = state_102580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102580__$1,4,ch);
} else
{if((state_val_102581 === 3))
{var inst_102577 = (state_102580[2]);var inst_102578 = cljs.core.async.close_BANG_.call(null,out);var state_102580__$1 = (function (){var statearr_102584 = state_102580;(statearr_102584[8] = inst_102577);
return statearr_102584;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102580__$1,inst_102578);
} else
{if((state_val_102581 === 4))
{var inst_102560 = (state_102580[9]);var inst_102560__$1 = (state_102580[2]);var inst_102561 = (inst_102560__$1 == null);var inst_102562 = cljs.core.not.call(null,inst_102561);var state_102580__$1 = (function (){var statearr_102585 = state_102580;(statearr_102585[9] = inst_102560__$1);
return statearr_102585;
})();if(inst_102562)
{var statearr_102586_102607 = state_102580__$1;(statearr_102586_102607[1] = 5);
} else
{var statearr_102587_102608 = state_102580__$1;(statearr_102587_102608[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102581 === 5))
{var inst_102560 = (state_102580[9]);var inst_102557 = (state_102580[7]);var inst_102564 = cljs.core._EQ_.call(null,inst_102560,inst_102557);var state_102580__$1 = state_102580;if(inst_102564)
{var statearr_102588_102609 = state_102580__$1;(statearr_102588_102609[1] = 8);
} else
{var statearr_102589_102610 = state_102580__$1;(statearr_102589_102610[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102581 === 6))
{var state_102580__$1 = state_102580;var statearr_102591_102611 = state_102580__$1;(statearr_102591_102611[2] = null);
(statearr_102591_102611[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102581 === 7))
{var inst_102575 = (state_102580[2]);var state_102580__$1 = state_102580;var statearr_102592_102612 = state_102580__$1;(statearr_102592_102612[2] = inst_102575);
(statearr_102592_102612[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102581 === 8))
{var inst_102557 = (state_102580[7]);var tmp102590 = inst_102557;var inst_102557__$1 = tmp102590;var state_102580__$1 = (function (){var statearr_102593 = state_102580;(statearr_102593[7] = inst_102557__$1);
return statearr_102593;
})();var statearr_102594_102613 = state_102580__$1;(statearr_102594_102613[2] = null);
(statearr_102594_102613[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102581 === 9))
{var inst_102560 = (state_102580[9]);var state_102580__$1 = state_102580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102580__$1,11,out,inst_102560);
} else
{if((state_val_102581 === 10))
{var inst_102572 = (state_102580[2]);var state_102580__$1 = state_102580;var statearr_102595_102614 = state_102580__$1;(statearr_102595_102614[2] = inst_102572);
(statearr_102595_102614[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102581 === 11))
{var inst_102560 = (state_102580[9]);var inst_102569 = (state_102580[2]);var inst_102557 = inst_102560;var state_102580__$1 = (function (){var statearr_102596 = state_102580;(statearr_102596[10] = inst_102569);
(statearr_102596[7] = inst_102557);
return statearr_102596;
})();var statearr_102597_102615 = state_102580__$1;(statearr_102597_102615[2] = null);
(statearr_102597_102615[1] = 2);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_102601 = (new Array(11));(statearr_102601[0] = state_machine__16761__auto__);
(statearr_102601[1] = 1);
return statearr_102601;
});
var state_machine__16761__auto____1 = (function (state_102580){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_102580);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e102602){if((e102602 instanceof Object))
{var ex__16764__auto__ = e102602;var statearr_102603_102616 = state_102580;(statearr_102603_102616[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102580);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e102602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__102617 = state_102580;
state_102580 = G__102617;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_102580){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_102580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_102604 = f__16831__auto__.call(null);(statearr_102604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___102605);
return statearr_102604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16830__auto___102752 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_102722){var state_val_102723 = (state_102722[1]);if((state_val_102723 === 1))
{var inst_102685 = (new Array(n));var inst_102686 = inst_102685;var inst_102687 = 0;var state_102722__$1 = (function (){var statearr_102724 = state_102722;(statearr_102724[7] = inst_102687);
(statearr_102724[8] = inst_102686);
return statearr_102724;
})();var statearr_102725_102753 = state_102722__$1;(statearr_102725_102753[2] = null);
(statearr_102725_102753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102723 === 2))
{var state_102722__$1 = state_102722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102722__$1,4,ch);
} else
{if((state_val_102723 === 3))
{var inst_102720 = (state_102722[2]);var state_102722__$1 = state_102722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102722__$1,inst_102720);
} else
{if((state_val_102723 === 4))
{var inst_102690 = (state_102722[9]);var inst_102690__$1 = (state_102722[2]);var inst_102691 = (inst_102690__$1 == null);var inst_102692 = cljs.core.not.call(null,inst_102691);var state_102722__$1 = (function (){var statearr_102726 = state_102722;(statearr_102726[9] = inst_102690__$1);
return statearr_102726;
})();if(inst_102692)
{var statearr_102727_102754 = state_102722__$1;(statearr_102727_102754[1] = 5);
} else
{var statearr_102728_102755 = state_102722__$1;(statearr_102728_102755[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102723 === 5))
{var inst_102695 = (state_102722[10]);var inst_102687 = (state_102722[7]);var inst_102686 = (state_102722[8]);var inst_102690 = (state_102722[9]);var inst_102694 = (inst_102686[inst_102687] = inst_102690);var inst_102695__$1 = (inst_102687 + 1);var inst_102696 = (inst_102695__$1 < n);var state_102722__$1 = (function (){var statearr_102729 = state_102722;(statearr_102729[10] = inst_102695__$1);
(statearr_102729[11] = inst_102694);
return statearr_102729;
})();if(cljs.core.truth_(inst_102696))
{var statearr_102730_102756 = state_102722__$1;(statearr_102730_102756[1] = 8);
} else
{var statearr_102731_102757 = state_102722__$1;(statearr_102731_102757[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102723 === 6))
{var inst_102687 = (state_102722[7]);var inst_102708 = (inst_102687 > 0);var state_102722__$1 = state_102722;if(cljs.core.truth_(inst_102708))
{var statearr_102733_102758 = state_102722__$1;(statearr_102733_102758[1] = 12);
} else
{var statearr_102734_102759 = state_102722__$1;(statearr_102734_102759[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102723 === 7))
{var inst_102718 = (state_102722[2]);var state_102722__$1 = state_102722;var statearr_102735_102760 = state_102722__$1;(statearr_102735_102760[2] = inst_102718);
(statearr_102735_102760[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102723 === 8))
{var inst_102695 = (state_102722[10]);var inst_102686 = (state_102722[8]);var tmp102732 = inst_102686;var inst_102686__$1 = tmp102732;var inst_102687 = inst_102695;var state_102722__$1 = (function (){var statearr_102736 = state_102722;(statearr_102736[7] = inst_102687);
(statearr_102736[8] = inst_102686__$1);
return statearr_102736;
})();var statearr_102737_102761 = state_102722__$1;(statearr_102737_102761[2] = null);
(statearr_102737_102761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102723 === 9))
{var inst_102686 = (state_102722[8]);var inst_102700 = cljs.core.vec.call(null,inst_102686);var state_102722__$1 = state_102722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102722__$1,11,out,inst_102700);
} else
{if((state_val_102723 === 10))
{var inst_102706 = (state_102722[2]);var state_102722__$1 = state_102722;var statearr_102738_102762 = state_102722__$1;(statearr_102738_102762[2] = inst_102706);
(statearr_102738_102762[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102723 === 11))
{var inst_102702 = (state_102722[2]);var inst_102703 = (new Array(n));var inst_102686 = inst_102703;var inst_102687 = 0;var state_102722__$1 = (function (){var statearr_102739 = state_102722;(statearr_102739[7] = inst_102687);
(statearr_102739[8] = inst_102686);
(statearr_102739[12] = inst_102702);
return statearr_102739;
})();var statearr_102740_102763 = state_102722__$1;(statearr_102740_102763[2] = null);
(statearr_102740_102763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102723 === 12))
{var inst_102686 = (state_102722[8]);var inst_102710 = cljs.core.vec.call(null,inst_102686);var state_102722__$1 = state_102722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102722__$1,15,out,inst_102710);
} else
{if((state_val_102723 === 13))
{var state_102722__$1 = state_102722;var statearr_102741_102764 = state_102722__$1;(statearr_102741_102764[2] = null);
(statearr_102741_102764[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102723 === 14))
{var inst_102715 = (state_102722[2]);var inst_102716 = cljs.core.async.close_BANG_.call(null,out);var state_102722__$1 = (function (){var statearr_102742 = state_102722;(statearr_102742[13] = inst_102715);
return statearr_102742;
})();var statearr_102743_102765 = state_102722__$1;(statearr_102743_102765[2] = inst_102716);
(statearr_102743_102765[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102723 === 15))
{var inst_102712 = (state_102722[2]);var state_102722__$1 = state_102722;var statearr_102744_102766 = state_102722__$1;(statearr_102744_102766[2] = inst_102712);
(statearr_102744_102766[1] = 14);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_102748 = (new Array(14));(statearr_102748[0] = state_machine__16761__auto__);
(statearr_102748[1] = 1);
return statearr_102748;
});
var state_machine__16761__auto____1 = (function (state_102722){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_102722);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e102749){if((e102749 instanceof Object))
{var ex__16764__auto__ = e102749;var statearr_102750_102767 = state_102722;(statearr_102750_102767[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102722);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e102749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__102768 = state_102722;
state_102722 = G__102768;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_102722){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_102722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_102751 = f__16831__auto__.call(null);(statearr_102751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___102752);
return statearr_102751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16830__auto___102911 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_102881){var state_val_102882 = (state_102881[1]);if((state_val_102882 === 1))
{var inst_102840 = (new Array(0));var inst_102841 = inst_102840;var inst_102842 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_102881__$1 = (function (){var statearr_102883 = state_102881;(statearr_102883[7] = inst_102842);
(statearr_102883[8] = inst_102841);
return statearr_102883;
})();var statearr_102884_102912 = state_102881__$1;(statearr_102884_102912[2] = null);
(statearr_102884_102912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102882 === 2))
{var state_102881__$1 = state_102881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102881__$1,4,ch);
} else
{if((state_val_102882 === 3))
{var inst_102879 = (state_102881[2]);var state_102881__$1 = state_102881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102881__$1,inst_102879);
} else
{if((state_val_102882 === 4))
{var inst_102845 = (state_102881[9]);var inst_102845__$1 = (state_102881[2]);var inst_102846 = (inst_102845__$1 == null);var inst_102847 = cljs.core.not.call(null,inst_102846);var state_102881__$1 = (function (){var statearr_102885 = state_102881;(statearr_102885[9] = inst_102845__$1);
return statearr_102885;
})();if(inst_102847)
{var statearr_102886_102913 = state_102881__$1;(statearr_102886_102913[1] = 5);
} else
{var statearr_102887_102914 = state_102881__$1;(statearr_102887_102914[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102882 === 5))
{var inst_102842 = (state_102881[7]);var inst_102845 = (state_102881[9]);var inst_102849 = (state_102881[10]);var inst_102849__$1 = f.call(null,inst_102845);var inst_102850 = cljs.core._EQ_.call(null,inst_102849__$1,inst_102842);var inst_102851 = cljs.core.keyword_identical_QMARK_.call(null,inst_102842,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_102852 = (inst_102850) || (inst_102851);var state_102881__$1 = (function (){var statearr_102888 = state_102881;(statearr_102888[10] = inst_102849__$1);
return statearr_102888;
})();if(cljs.core.truth_(inst_102852))
{var statearr_102889_102915 = state_102881__$1;(statearr_102889_102915[1] = 8);
} else
{var statearr_102890_102916 = state_102881__$1;(statearr_102890_102916[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102882 === 6))
{var inst_102841 = (state_102881[8]);var inst_102866 = inst_102841.length;var inst_102867 = (inst_102866 > 0);var state_102881__$1 = state_102881;if(cljs.core.truth_(inst_102867))
{var statearr_102892_102917 = state_102881__$1;(statearr_102892_102917[1] = 12);
} else
{var statearr_102893_102918 = state_102881__$1;(statearr_102893_102918[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102882 === 7))
{var inst_102877 = (state_102881[2]);var state_102881__$1 = state_102881;var statearr_102894_102919 = state_102881__$1;(statearr_102894_102919[2] = inst_102877);
(statearr_102894_102919[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102882 === 8))
{var inst_102845 = (state_102881[9]);var inst_102841 = (state_102881[8]);var inst_102849 = (state_102881[10]);var inst_102854 = inst_102841.push(inst_102845);var tmp102891 = inst_102841;var inst_102841__$1 = tmp102891;var inst_102842 = inst_102849;var state_102881__$1 = (function (){var statearr_102895 = state_102881;(statearr_102895[7] = inst_102842);
(statearr_102895[8] = inst_102841__$1);
(statearr_102895[11] = inst_102854);
return statearr_102895;
})();var statearr_102896_102920 = state_102881__$1;(statearr_102896_102920[2] = null);
(statearr_102896_102920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102882 === 9))
{var inst_102841 = (state_102881[8]);var inst_102857 = cljs.core.vec.call(null,inst_102841);var state_102881__$1 = state_102881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102881__$1,11,out,inst_102857);
} else
{if((state_val_102882 === 10))
{var inst_102864 = (state_102881[2]);var state_102881__$1 = state_102881;var statearr_102897_102921 = state_102881__$1;(statearr_102897_102921[2] = inst_102864);
(statearr_102897_102921[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102882 === 11))
{var inst_102845 = (state_102881[9]);var inst_102849 = (state_102881[10]);var inst_102859 = (state_102881[2]);var inst_102860 = (new Array(0));var inst_102861 = inst_102860.push(inst_102845);var inst_102841 = inst_102860;var inst_102842 = inst_102849;var state_102881__$1 = (function (){var statearr_102898 = state_102881;(statearr_102898[12] = inst_102859);
(statearr_102898[7] = inst_102842);
(statearr_102898[8] = inst_102841);
(statearr_102898[13] = inst_102861);
return statearr_102898;
})();var statearr_102899_102922 = state_102881__$1;(statearr_102899_102922[2] = null);
(statearr_102899_102922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102882 === 12))
{var inst_102841 = (state_102881[8]);var inst_102869 = cljs.core.vec.call(null,inst_102841);var state_102881__$1 = state_102881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102881__$1,15,out,inst_102869);
} else
{if((state_val_102882 === 13))
{var state_102881__$1 = state_102881;var statearr_102900_102923 = state_102881__$1;(statearr_102900_102923[2] = null);
(statearr_102900_102923[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102882 === 14))
{var inst_102874 = (state_102881[2]);var inst_102875 = cljs.core.async.close_BANG_.call(null,out);var state_102881__$1 = (function (){var statearr_102901 = state_102881;(statearr_102901[14] = inst_102874);
return statearr_102901;
})();var statearr_102902_102924 = state_102881__$1;(statearr_102902_102924[2] = inst_102875);
(statearr_102902_102924[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_102882 === 15))
{var inst_102871 = (state_102881[2]);var state_102881__$1 = state_102881;var statearr_102903_102925 = state_102881__$1;(statearr_102903_102925[2] = inst_102871);
(statearr_102903_102925[1] = 14);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_102907 = (new Array(15));(statearr_102907[0] = state_machine__16761__auto__);
(statearr_102907[1] = 1);
return statearr_102907;
});
var state_machine__16761__auto____1 = (function (state_102881){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_102881);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e102908){if((e102908 instanceof Object))
{var ex__16764__auto__ = e102908;var statearr_102909_102926 = state_102881;(statearr_102909_102926[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102881);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e102908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__102927 = state_102881;
state_102881 = G__102927;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_102881){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_102881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_102910 = f__16831__auto__.call(null);(statearr_102910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___102911);
return statearr_102910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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