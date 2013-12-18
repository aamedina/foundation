// Compiled by ClojureScript 0.0-2120
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t42347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42347 = (function (f,fn_handler,meta42348){
this.f = f;
this.fn_handler = fn_handler;
this.meta42348 = meta42348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42347.cljs$lang$type = true;
cljs.core.async.t42347.cljs$lang$ctorStr = "cljs.core.async/t42347";
cljs.core.async.t42347.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t42347");
});
cljs.core.async.t42347.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t42347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t42347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42349){var self__ = this;
var _42349__$1 = this;return self__.meta42348;
});
cljs.core.async.t42347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42349,meta42348__$1){var self__ = this;
var _42349__$1 = this;return (new cljs.core.async.t42347(self__.f,self__.fn_handler,meta42348__$1));
});
cljs.core.async.__GT_t42347 = (function __GT_t42347(f__$1,fn_handler__$1,meta42348){return (new cljs.core.async.t42347(f__$1,fn_handler__$1,meta42348));
});
}
return (new cljs.core.async.t42347(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__42351 = buff;if(G__42351)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__42351.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__42351.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__42351);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__42351);
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
{var val_42352 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_42352);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_42352);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8233__auto__ = ret;if(cljs.core.truth_(and__8233__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8233__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9073__auto___42353 = n;var x_42354 = 0;while(true){
if((x_42354 < n__9073__auto___42353))
{(a[x_42354] = 0);
{
var G__42355 = (x_42354 + 1);
x_42354 = G__42355;
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
var G__42356 = (i + 1);
i = G__42356;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t42360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42360 = (function (flag,alt_flag,meta42361){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta42361 = meta42361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42360.cljs$lang$type = true;
cljs.core.async.t42360.cljs$lang$ctorStr = "cljs.core.async/t42360";
cljs.core.async.t42360.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t42360");
});
cljs.core.async.t42360.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t42360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t42360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42362){var self__ = this;
var _42362__$1 = this;return self__.meta42361;
});
cljs.core.async.t42360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42362,meta42361__$1){var self__ = this;
var _42362__$1 = this;return (new cljs.core.async.t42360(self__.flag,self__.alt_flag,meta42361__$1));
});
cljs.core.async.__GT_t42360 = (function __GT_t42360(flag__$1,alt_flag__$1,meta42361){return (new cljs.core.async.t42360(flag__$1,alt_flag__$1,meta42361));
});
}
return (new cljs.core.async.t42360(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t42366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42366 = (function (cb,flag,alt_handler,meta42367){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta42367 = meta42367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42366.cljs$lang$type = true;
cljs.core.async.t42366.cljs$lang$ctorStr = "cljs.core.async/t42366";
cljs.core.async.t42366.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t42366");
});
cljs.core.async.t42366.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t42366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t42366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42368){var self__ = this;
var _42368__$1 = this;return self__.meta42367;
});
cljs.core.async.t42366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42368,meta42367__$1){var self__ = this;
var _42368__$1 = this;return (new cljs.core.async.t42366(self__.cb,self__.flag,self__.alt_handler,meta42367__$1));
});
cljs.core.async.__GT_t42366 = (function __GT_t42366(cb__$1,flag__$1,alt_handler__$1,meta42367){return (new cljs.core.async.t42366(cb__$1,flag__$1,alt_handler__$1,meta42367));
});
}
return (new cljs.core.async.t42366(cb,flag,alt_handler,null));
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
return (function (p1__42369_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42369_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8245__auto__ = wport;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__42370 = (i + 1);
i = G__42370;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8245__auto__ = ret;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8233__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8233__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8233__auto__;
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
var alts_BANG___delegate = function (ports,p__42371){var map__42373 = p__42371;var map__42373__$1 = ((cljs.core.seq_QMARK_.call(null,map__42373))?cljs.core.apply.call(null,cljs.core.hash_map,map__42373):map__42373);var opts = map__42373__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__42371 = null;if (arguments.length > 1) {
  p__42371 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__42371);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__42374){
var ports = cljs.core.first(arglist__42374);
var p__42371 = cljs.core.rest(arglist__42374);
return alts_BANG___delegate(ports,p__42371);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t42382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42382 = (function (ch,f,map_LT_,meta42383){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42383 = meta42383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42382.cljs$lang$type = true;
cljs.core.async.t42382.cljs$lang$ctorStr = "cljs.core.async/t42382";
cljs.core.async.t42382.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t42382");
});
cljs.core.async.t42382.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42382.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t42382.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42382.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t42385 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42385 = (function (fn1,_,meta42383,ch,f,map_LT_,meta42386){
this.fn1 = fn1;
this._ = _;
this.meta42383 = meta42383;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42386 = meta42386;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42385.cljs$lang$type = true;
cljs.core.async.t42385.cljs$lang$ctorStr = "cljs.core.async/t42385";
cljs.core.async.t42385.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t42385");
});
cljs.core.async.t42385.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42385.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t42385.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t42385.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__42375_SHARP_){return f1.call(null,(((p1__42375_SHARP_ == null))?null:self__.f.call(null,p1__42375_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t42385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42387){var self__ = this;
var _42387__$1 = this;return self__.meta42386;
});
cljs.core.async.t42385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42387,meta42386__$1){var self__ = this;
var _42387__$1 = this;return (new cljs.core.async.t42385(self__.fn1,self__._,self__.meta42383,self__.ch,self__.f,self__.map_LT_,meta42386__$1));
});
cljs.core.async.__GT_t42385 = (function __GT_t42385(fn1__$1,___$2,meta42383__$1,ch__$2,f__$2,map_LT___$2,meta42386){return (new cljs.core.async.t42385(fn1__$1,___$2,meta42383__$1,ch__$2,f__$2,map_LT___$2,meta42386));
});
}
return (new cljs.core.async.t42385(fn1,___$1,self__.meta42383,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8233__auto__ = ret;if(cljs.core.truth_(and__8233__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8233__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t42382.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42382.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t42382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42384){var self__ = this;
var _42384__$1 = this;return self__.meta42383;
});
cljs.core.async.t42382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42384,meta42383__$1){var self__ = this;
var _42384__$1 = this;return (new cljs.core.async.t42382(self__.ch,self__.f,self__.map_LT_,meta42383__$1));
});
cljs.core.async.__GT_t42382 = (function __GT_t42382(ch__$1,f__$1,map_LT___$1,meta42383){return (new cljs.core.async.t42382(ch__$1,f__$1,map_LT___$1,meta42383));
});
}
return (new cljs.core.async.t42382(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t42391 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42391 = (function (ch,f,map_GT_,meta42392){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta42392 = meta42392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42391.cljs$lang$type = true;
cljs.core.async.t42391.cljs$lang$ctorStr = "cljs.core.async/t42391";
cljs.core.async.t42391.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t42391");
});
cljs.core.async.t42391.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t42391.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t42391.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t42391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42393){var self__ = this;
var _42393__$1 = this;return self__.meta42392;
});
cljs.core.async.t42391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42393,meta42392__$1){var self__ = this;
var _42393__$1 = this;return (new cljs.core.async.t42391(self__.ch,self__.f,self__.map_GT_,meta42392__$1));
});
cljs.core.async.__GT_t42391 = (function __GT_t42391(ch__$1,f__$1,map_GT___$1,meta42392){return (new cljs.core.async.t42391(ch__$1,f__$1,map_GT___$1,meta42392));
});
}
return (new cljs.core.async.t42391(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t42397 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42397 = (function (ch,p,filter_GT_,meta42398){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta42398 = meta42398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42397.cljs$lang$type = true;
cljs.core.async.t42397.cljs$lang$ctorStr = "cljs.core.async/t42397";
cljs.core.async.t42397.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t42397");
});
cljs.core.async.t42397.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42397.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t42397.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42397.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t42397.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42397.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t42397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42399){var self__ = this;
var _42399__$1 = this;return self__.meta42398;
});
cljs.core.async.t42397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42399,meta42398__$1){var self__ = this;
var _42399__$1 = this;return (new cljs.core.async.t42397(self__.ch,self__.p,self__.filter_GT_,meta42398__$1));
});
cljs.core.async.__GT_t42397 = (function __GT_t42397(ch__$1,p__$1,filter_GT___$1,meta42398){return (new cljs.core.async.t42397(ch__$1,p__$1,filter_GT___$1,meta42398));
});
}
return (new cljs.core.async.t42397(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___42482 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_42461){var state_val_42462 = (state_42461[1]);if((state_val_42462 === 1))
{var state_42461__$1 = state_42461;var statearr_42463_42483 = state_42461__$1;(statearr_42463_42483[2] = null);
(statearr_42463_42483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42462 === 2))
{var state_42461__$1 = state_42461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42461__$1,4,ch);
} else
{if((state_val_42462 === 3))
{var inst_42459 = (state_42461[2]);var state_42461__$1 = state_42461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42461__$1,inst_42459);
} else
{if((state_val_42462 === 4))
{var inst_42443 = (state_42461[7]);var inst_42443__$1 = (state_42461[2]);var inst_42444 = (inst_42443__$1 == null);var state_42461__$1 = (function (){var statearr_42464 = state_42461;(statearr_42464[7] = inst_42443__$1);
return statearr_42464;
})();if(cljs.core.truth_(inst_42444))
{var statearr_42465_42484 = state_42461__$1;(statearr_42465_42484[1] = 5);
} else
{var statearr_42466_42485 = state_42461__$1;(statearr_42466_42485[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42462 === 5))
{var inst_42446 = cljs.core.async.close_BANG_.call(null,out);var state_42461__$1 = state_42461;var statearr_42467_42486 = state_42461__$1;(statearr_42467_42486[2] = inst_42446);
(statearr_42467_42486[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42462 === 6))
{var inst_42443 = (state_42461[7]);var inst_42448 = p.call(null,inst_42443);var state_42461__$1 = state_42461;if(cljs.core.truth_(inst_42448))
{var statearr_42468_42487 = state_42461__$1;(statearr_42468_42487[1] = 8);
} else
{var statearr_42469_42488 = state_42461__$1;(statearr_42469_42488[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42462 === 7))
{var inst_42457 = (state_42461[2]);var state_42461__$1 = state_42461;var statearr_42470_42489 = state_42461__$1;(statearr_42470_42489[2] = inst_42457);
(statearr_42470_42489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42462 === 8))
{var inst_42443 = (state_42461[7]);var state_42461__$1 = state_42461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42461__$1,11,out,inst_42443);
} else
{if((state_val_42462 === 9))
{var state_42461__$1 = state_42461;var statearr_42471_42490 = state_42461__$1;(statearr_42471_42490[2] = null);
(statearr_42471_42490[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42462 === 10))
{var inst_42454 = (state_42461[2]);var state_42461__$1 = (function (){var statearr_42472 = state_42461;(statearr_42472[8] = inst_42454);
return statearr_42472;
})();var statearr_42473_42491 = state_42461__$1;(statearr_42473_42491[2] = null);
(statearr_42473_42491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42462 === 11))
{var inst_42451 = (state_42461[2]);var state_42461__$1 = state_42461;var statearr_42474_42492 = state_42461__$1;(statearr_42474_42492[2] = inst_42451);
(statearr_42474_42492[1] = 10);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_42478 = [null,null,null,null,null,null,null,null,null];(statearr_42478[0] = state_machine__12133__auto__);
(statearr_42478[1] = 1);
return statearr_42478;
});
var state_machine__12133__auto____1 = (function (state_42461){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_42461);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e42479){if((e42479 instanceof Object))
{var ex__12136__auto__ = e42479;var statearr_42480_42493 = state_42461;(statearr_42480_42493[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42494 = state_42461;
state_42461 = G__42494;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_42461){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_42461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_42481 = f__12203__auto__.call(null);(statearr_42481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___42482);
return statearr_42481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12202__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_42646){var state_val_42647 = (state_42646[1]);if((state_val_42647 === 1))
{var state_42646__$1 = state_42646;var statearr_42648_42685 = state_42646__$1;(statearr_42648_42685[2] = null);
(statearr_42648_42685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 2))
{var state_42646__$1 = state_42646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42646__$1,4,in$);
} else
{if((state_val_42647 === 3))
{var inst_42644 = (state_42646[2]);var state_42646__$1 = state_42646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42646__$1,inst_42644);
} else
{if((state_val_42647 === 4))
{var inst_42592 = (state_42646[7]);var inst_42592__$1 = (state_42646[2]);var inst_42593 = (inst_42592__$1 == null);var state_42646__$1 = (function (){var statearr_42649 = state_42646;(statearr_42649[7] = inst_42592__$1);
return statearr_42649;
})();if(cljs.core.truth_(inst_42593))
{var statearr_42650_42686 = state_42646__$1;(statearr_42650_42686[1] = 5);
} else
{var statearr_42651_42687 = state_42646__$1;(statearr_42651_42687[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 5))
{var inst_42595 = cljs.core.async.close_BANG_.call(null,out);var state_42646__$1 = state_42646;var statearr_42652_42688 = state_42646__$1;(statearr_42652_42688[2] = inst_42595);
(statearr_42652_42688[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 6))
{var inst_42592 = (state_42646[7]);var inst_42597 = f.call(null,inst_42592);var inst_42602 = cljs.core.seq.call(null,inst_42597);var inst_42603 = inst_42602;var inst_42604 = null;var inst_42605 = 0;var inst_42606 = 0;var state_42646__$1 = (function (){var statearr_42653 = state_42646;(statearr_42653[8] = inst_42604);
(statearr_42653[9] = inst_42603);
(statearr_42653[10] = inst_42605);
(statearr_42653[11] = inst_42606);
return statearr_42653;
})();var statearr_42654_42689 = state_42646__$1;(statearr_42654_42689[2] = null);
(statearr_42654_42689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 7))
{var inst_42642 = (state_42646[2]);var state_42646__$1 = state_42646;var statearr_42655_42690 = state_42646__$1;(statearr_42655_42690[2] = inst_42642);
(statearr_42655_42690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 8))
{var inst_42605 = (state_42646[10]);var inst_42606 = (state_42646[11]);var inst_42608 = (inst_42606 < inst_42605);var inst_42609 = inst_42608;var state_42646__$1 = state_42646;if(cljs.core.truth_(inst_42609))
{var statearr_42656_42691 = state_42646__$1;(statearr_42656_42691[1] = 10);
} else
{var statearr_42657_42692 = state_42646__$1;(statearr_42657_42692[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 9))
{var inst_42639 = (state_42646[2]);var state_42646__$1 = (function (){var statearr_42658 = state_42646;(statearr_42658[12] = inst_42639);
return statearr_42658;
})();var statearr_42659_42693 = state_42646__$1;(statearr_42659_42693[2] = null);
(statearr_42659_42693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 10))
{var inst_42604 = (state_42646[8]);var inst_42606 = (state_42646[11]);var inst_42611 = cljs.core._nth.call(null,inst_42604,inst_42606);var state_42646__$1 = state_42646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42646__$1,13,out,inst_42611);
} else
{if((state_val_42647 === 11))
{var inst_42603 = (state_42646[9]);var inst_42617 = (state_42646[13]);var inst_42617__$1 = cljs.core.seq.call(null,inst_42603);var state_42646__$1 = (function (){var statearr_42663 = state_42646;(statearr_42663[13] = inst_42617__$1);
return statearr_42663;
})();if(inst_42617__$1)
{var statearr_42664_42694 = state_42646__$1;(statearr_42664_42694[1] = 14);
} else
{var statearr_42665_42695 = state_42646__$1;(statearr_42665_42695[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 12))
{var inst_42637 = (state_42646[2]);var state_42646__$1 = state_42646;var statearr_42666_42696 = state_42646__$1;(statearr_42666_42696[2] = inst_42637);
(statearr_42666_42696[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 13))
{var inst_42604 = (state_42646[8]);var inst_42603 = (state_42646[9]);var inst_42605 = (state_42646[10]);var inst_42606 = (state_42646[11]);var inst_42613 = (state_42646[2]);var inst_42614 = (inst_42606 + 1);var tmp42660 = inst_42604;var tmp42661 = inst_42603;var tmp42662 = inst_42605;var inst_42603__$1 = tmp42661;var inst_42604__$1 = tmp42660;var inst_42605__$1 = tmp42662;var inst_42606__$1 = inst_42614;var state_42646__$1 = (function (){var statearr_42667 = state_42646;(statearr_42667[8] = inst_42604__$1);
(statearr_42667[9] = inst_42603__$1);
(statearr_42667[10] = inst_42605__$1);
(statearr_42667[11] = inst_42606__$1);
(statearr_42667[14] = inst_42613);
return statearr_42667;
})();var statearr_42668_42697 = state_42646__$1;(statearr_42668_42697[2] = null);
(statearr_42668_42697[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 14))
{var inst_42617 = (state_42646[13]);var inst_42619 = cljs.core.chunked_seq_QMARK_.call(null,inst_42617);var state_42646__$1 = state_42646;if(inst_42619)
{var statearr_42669_42698 = state_42646__$1;(statearr_42669_42698[1] = 17);
} else
{var statearr_42670_42699 = state_42646__$1;(statearr_42670_42699[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 15))
{var state_42646__$1 = state_42646;var statearr_42671_42700 = state_42646__$1;(statearr_42671_42700[2] = null);
(statearr_42671_42700[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 16))
{var inst_42635 = (state_42646[2]);var state_42646__$1 = state_42646;var statearr_42672_42701 = state_42646__$1;(statearr_42672_42701[2] = inst_42635);
(statearr_42672_42701[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 17))
{var inst_42617 = (state_42646[13]);var inst_42621 = cljs.core.chunk_first.call(null,inst_42617);var inst_42622 = cljs.core.chunk_rest.call(null,inst_42617);var inst_42623 = cljs.core.count.call(null,inst_42621);var inst_42603 = inst_42622;var inst_42604 = inst_42621;var inst_42605 = inst_42623;var inst_42606 = 0;var state_42646__$1 = (function (){var statearr_42673 = state_42646;(statearr_42673[8] = inst_42604);
(statearr_42673[9] = inst_42603);
(statearr_42673[10] = inst_42605);
(statearr_42673[11] = inst_42606);
return statearr_42673;
})();var statearr_42674_42702 = state_42646__$1;(statearr_42674_42702[2] = null);
(statearr_42674_42702[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 18))
{var inst_42617 = (state_42646[13]);var inst_42626 = cljs.core.first.call(null,inst_42617);var state_42646__$1 = state_42646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42646__$1,20,out,inst_42626);
} else
{if((state_val_42647 === 19))
{var inst_42632 = (state_42646[2]);var state_42646__$1 = state_42646;var statearr_42675_42703 = state_42646__$1;(statearr_42675_42703[2] = inst_42632);
(statearr_42675_42703[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42647 === 20))
{var inst_42617 = (state_42646[13]);var inst_42628 = (state_42646[2]);var inst_42629 = cljs.core.next.call(null,inst_42617);var inst_42603 = inst_42629;var inst_42604 = null;var inst_42605 = 0;var inst_42606 = 0;var state_42646__$1 = (function (){var statearr_42676 = state_42646;(statearr_42676[8] = inst_42604);
(statearr_42676[9] = inst_42603);
(statearr_42676[10] = inst_42605);
(statearr_42676[11] = inst_42606);
(statearr_42676[15] = inst_42628);
return statearr_42676;
})();var statearr_42677_42704 = state_42646__$1;(statearr_42677_42704[2] = null);
(statearr_42677_42704[1] = 8);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_42681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42681[0] = state_machine__12133__auto__);
(statearr_42681[1] = 1);
return statearr_42681;
});
var state_machine__12133__auto____1 = (function (state_42646){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_42646);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e42682){if((e42682 instanceof Object))
{var ex__12136__auto__ = e42682;var statearr_42683_42705 = state_42646;(statearr_42683_42705[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42706 = state_42646;
state_42646 = G__42706;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_42646){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_42646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_42684 = f__12203__auto__.call(null);(statearr_42684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto__);
return statearr_42684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
}));
return c__12202__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12202__auto___42787 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_42766){var state_val_42767 = (state_42766[1]);if((state_val_42767 === 1))
{var state_42766__$1 = state_42766;var statearr_42768_42788 = state_42766__$1;(statearr_42768_42788[2] = null);
(statearr_42768_42788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42767 === 2))
{var state_42766__$1 = state_42766;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42766__$1,4,from);
} else
{if((state_val_42767 === 3))
{var inst_42764 = (state_42766[2]);var state_42766__$1 = state_42766;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42766__$1,inst_42764);
} else
{if((state_val_42767 === 4))
{var inst_42749 = (state_42766[7]);var inst_42749__$1 = (state_42766[2]);var inst_42750 = (inst_42749__$1 == null);var state_42766__$1 = (function (){var statearr_42769 = state_42766;(statearr_42769[7] = inst_42749__$1);
return statearr_42769;
})();if(cljs.core.truth_(inst_42750))
{var statearr_42770_42789 = state_42766__$1;(statearr_42770_42789[1] = 5);
} else
{var statearr_42771_42790 = state_42766__$1;(statearr_42771_42790[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42767 === 5))
{var state_42766__$1 = state_42766;if(cljs.core.truth_(close_QMARK_))
{var statearr_42772_42791 = state_42766__$1;(statearr_42772_42791[1] = 8);
} else
{var statearr_42773_42792 = state_42766__$1;(statearr_42773_42792[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42767 === 6))
{var inst_42749 = (state_42766[7]);var state_42766__$1 = state_42766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42766__$1,11,to,inst_42749);
} else
{if((state_val_42767 === 7))
{var inst_42762 = (state_42766[2]);var state_42766__$1 = state_42766;var statearr_42774_42793 = state_42766__$1;(statearr_42774_42793[2] = inst_42762);
(statearr_42774_42793[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42767 === 8))
{var inst_42753 = cljs.core.async.close_BANG_.call(null,to);var state_42766__$1 = state_42766;var statearr_42775_42794 = state_42766__$1;(statearr_42775_42794[2] = inst_42753);
(statearr_42775_42794[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42767 === 9))
{var state_42766__$1 = state_42766;var statearr_42776_42795 = state_42766__$1;(statearr_42776_42795[2] = null);
(statearr_42776_42795[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42767 === 10))
{var inst_42756 = (state_42766[2]);var state_42766__$1 = state_42766;var statearr_42777_42796 = state_42766__$1;(statearr_42777_42796[2] = inst_42756);
(statearr_42777_42796[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42767 === 11))
{var inst_42759 = (state_42766[2]);var state_42766__$1 = (function (){var statearr_42778 = state_42766;(statearr_42778[8] = inst_42759);
return statearr_42778;
})();var statearr_42779_42797 = state_42766__$1;(statearr_42779_42797[2] = null);
(statearr_42779_42797[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_42783 = [null,null,null,null,null,null,null,null,null];(statearr_42783[0] = state_machine__12133__auto__);
(statearr_42783[1] = 1);
return statearr_42783;
});
var state_machine__12133__auto____1 = (function (state_42766){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_42766);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e42784){if((e42784 instanceof Object))
{var ex__12136__auto__ = e42784;var statearr_42785_42798 = state_42766;(statearr_42785_42798[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42766);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42799 = state_42766;
state_42766 = G__42799;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_42766){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_42766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_42786 = f__12203__auto__.call(null);(statearr_42786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___42787);
return statearr_42786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12202__auto___42886 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_42864){var state_val_42865 = (state_42864[1]);if((state_val_42865 === 1))
{var state_42864__$1 = state_42864;var statearr_42866_42887 = state_42864__$1;(statearr_42866_42887[2] = null);
(statearr_42866_42887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42865 === 2))
{var state_42864__$1 = state_42864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42864__$1,4,ch);
} else
{if((state_val_42865 === 3))
{var inst_42862 = (state_42864[2]);var state_42864__$1 = state_42864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42864__$1,inst_42862);
} else
{if((state_val_42865 === 4))
{var inst_42845 = (state_42864[7]);var inst_42845__$1 = (state_42864[2]);var inst_42846 = (inst_42845__$1 == null);var state_42864__$1 = (function (){var statearr_42867 = state_42864;(statearr_42867[7] = inst_42845__$1);
return statearr_42867;
})();if(cljs.core.truth_(inst_42846))
{var statearr_42868_42888 = state_42864__$1;(statearr_42868_42888[1] = 5);
} else
{var statearr_42869_42889 = state_42864__$1;(statearr_42869_42889[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42865 === 5))
{var inst_42848 = cljs.core.async.close_BANG_.call(null,tc);var inst_42849 = cljs.core.async.close_BANG_.call(null,fc);var state_42864__$1 = (function (){var statearr_42870 = state_42864;(statearr_42870[8] = inst_42848);
return statearr_42870;
})();var statearr_42871_42890 = state_42864__$1;(statearr_42871_42890[2] = inst_42849);
(statearr_42871_42890[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42865 === 6))
{var inst_42845 = (state_42864[7]);var inst_42851 = p.call(null,inst_42845);var state_42864__$1 = state_42864;if(cljs.core.truth_(inst_42851))
{var statearr_42872_42891 = state_42864__$1;(statearr_42872_42891[1] = 9);
} else
{var statearr_42873_42892 = state_42864__$1;(statearr_42873_42892[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42865 === 7))
{var inst_42860 = (state_42864[2]);var state_42864__$1 = state_42864;var statearr_42874_42893 = state_42864__$1;(statearr_42874_42893[2] = inst_42860);
(statearr_42874_42893[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42865 === 8))
{var inst_42857 = (state_42864[2]);var state_42864__$1 = (function (){var statearr_42875 = state_42864;(statearr_42875[9] = inst_42857);
return statearr_42875;
})();var statearr_42876_42894 = state_42864__$1;(statearr_42876_42894[2] = null);
(statearr_42876_42894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42865 === 9))
{var state_42864__$1 = state_42864;var statearr_42877_42895 = state_42864__$1;(statearr_42877_42895[2] = tc);
(statearr_42877_42895[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42865 === 10))
{var state_42864__$1 = state_42864;var statearr_42878_42896 = state_42864__$1;(statearr_42878_42896[2] = fc);
(statearr_42878_42896[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42865 === 11))
{var inst_42845 = (state_42864[7]);var inst_42855 = (state_42864[2]);var state_42864__$1 = state_42864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42864__$1,8,inst_42855,inst_42845);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_42882 = [null,null,null,null,null,null,null,null,null,null];(statearr_42882[0] = state_machine__12133__auto__);
(statearr_42882[1] = 1);
return statearr_42882;
});
var state_machine__12133__auto____1 = (function (state_42864){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_42864);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e42883){if((e42883 instanceof Object))
{var ex__12136__auto__ = e42883;var statearr_42884_42897 = state_42864;(statearr_42884_42897[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42864);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42898 = state_42864;
state_42864 = G__42898;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_42864){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_42864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_42885 = f__12203__auto__.call(null);(statearr_42885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___42886);
return statearr_42885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12202__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_42945){var state_val_42946 = (state_42945[1]);if((state_val_42946 === 7))
{var inst_42941 = (state_42945[2]);var state_42945__$1 = state_42945;var statearr_42947_42963 = state_42945__$1;(statearr_42947_42963[2] = inst_42941);
(statearr_42947_42963[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42946 === 6))
{var inst_42931 = (state_42945[7]);var inst_42934 = (state_42945[8]);var inst_42938 = f.call(null,inst_42931,inst_42934);var inst_42931__$1 = inst_42938;var state_42945__$1 = (function (){var statearr_42948 = state_42945;(statearr_42948[7] = inst_42931__$1);
return statearr_42948;
})();var statearr_42949_42964 = state_42945__$1;(statearr_42949_42964[2] = null);
(statearr_42949_42964[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42946 === 5))
{var inst_42931 = (state_42945[7]);var state_42945__$1 = state_42945;var statearr_42950_42965 = state_42945__$1;(statearr_42950_42965[2] = inst_42931);
(statearr_42950_42965[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42946 === 4))
{var inst_42934 = (state_42945[8]);var inst_42934__$1 = (state_42945[2]);var inst_42935 = (inst_42934__$1 == null);var state_42945__$1 = (function (){var statearr_42951 = state_42945;(statearr_42951[8] = inst_42934__$1);
return statearr_42951;
})();if(cljs.core.truth_(inst_42935))
{var statearr_42952_42966 = state_42945__$1;(statearr_42952_42966[1] = 5);
} else
{var statearr_42953_42967 = state_42945__$1;(statearr_42953_42967[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42946 === 3))
{var inst_42943 = (state_42945[2]);var state_42945__$1 = state_42945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42945__$1,inst_42943);
} else
{if((state_val_42946 === 2))
{var state_42945__$1 = state_42945;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42945__$1,4,ch);
} else
{if((state_val_42946 === 1))
{var inst_42931 = init;var state_42945__$1 = (function (){var statearr_42954 = state_42945;(statearr_42954[7] = inst_42931);
return statearr_42954;
})();var statearr_42955_42968 = state_42945__$1;(statearr_42955_42968[2] = null);
(statearr_42955_42968[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_42959 = [null,null,null,null,null,null,null,null,null];(statearr_42959[0] = state_machine__12133__auto__);
(statearr_42959[1] = 1);
return statearr_42959;
});
var state_machine__12133__auto____1 = (function (state_42945){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_42945);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e42960){if((e42960 instanceof Object))
{var ex__12136__auto__ = e42960;var statearr_42961_42969 = state_42945;(statearr_42961_42969[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42945);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42960;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42970 = state_42945;
state_42945 = G__42970;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_42945){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_42945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_42962 = f__12203__auto__.call(null);(statearr_42962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto__);
return statearr_42962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
}));
return c__12202__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12202__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_43032){var state_val_43033 = (state_43032[1]);if((state_val_43033 === 1))
{var inst_43012 = cljs.core.seq.call(null,coll);var inst_43013 = inst_43012;var state_43032__$1 = (function (){var statearr_43034 = state_43032;(statearr_43034[7] = inst_43013);
return statearr_43034;
})();var statearr_43035_43053 = state_43032__$1;(statearr_43035_43053[2] = null);
(statearr_43035_43053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43033 === 2))
{var inst_43013 = (state_43032[7]);var state_43032__$1 = state_43032;if(cljs.core.truth_(inst_43013))
{var statearr_43036_43054 = state_43032__$1;(statearr_43036_43054[1] = 4);
} else
{var statearr_43037_43055 = state_43032__$1;(statearr_43037_43055[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43033 === 3))
{var inst_43030 = (state_43032[2]);var state_43032__$1 = state_43032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43032__$1,inst_43030);
} else
{if((state_val_43033 === 4))
{var inst_43013 = (state_43032[7]);var inst_43016 = cljs.core.first.call(null,inst_43013);var state_43032__$1 = state_43032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43032__$1,7,ch,inst_43016);
} else
{if((state_val_43033 === 5))
{var state_43032__$1 = state_43032;if(cljs.core.truth_(close_QMARK_))
{var statearr_43038_43056 = state_43032__$1;(statearr_43038_43056[1] = 8);
} else
{var statearr_43039_43057 = state_43032__$1;(statearr_43039_43057[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43033 === 6))
{var inst_43028 = (state_43032[2]);var state_43032__$1 = state_43032;var statearr_43040_43058 = state_43032__$1;(statearr_43040_43058[2] = inst_43028);
(statearr_43040_43058[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43033 === 7))
{var inst_43013 = (state_43032[7]);var inst_43018 = (state_43032[2]);var inst_43019 = cljs.core.next.call(null,inst_43013);var inst_43013__$1 = inst_43019;var state_43032__$1 = (function (){var statearr_43041 = state_43032;(statearr_43041[8] = inst_43018);
(statearr_43041[7] = inst_43013__$1);
return statearr_43041;
})();var statearr_43042_43059 = state_43032__$1;(statearr_43042_43059[2] = null);
(statearr_43042_43059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43033 === 8))
{var inst_43023 = cljs.core.async.close_BANG_.call(null,ch);var state_43032__$1 = state_43032;var statearr_43043_43060 = state_43032__$1;(statearr_43043_43060[2] = inst_43023);
(statearr_43043_43060[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43033 === 9))
{var state_43032__$1 = state_43032;var statearr_43044_43061 = state_43032__$1;(statearr_43044_43061[2] = null);
(statearr_43044_43061[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43033 === 10))
{var inst_43026 = (state_43032[2]);var state_43032__$1 = state_43032;var statearr_43045_43062 = state_43032__$1;(statearr_43045_43062[2] = inst_43026);
(statearr_43045_43062[1] = 6);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_43049 = [null,null,null,null,null,null,null,null,null];(statearr_43049[0] = state_machine__12133__auto__);
(statearr_43049[1] = 1);
return statearr_43049;
});
var state_machine__12133__auto____1 = (function (state_43032){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_43032);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e43050){if((e43050 instanceof Object))
{var ex__12136__auto__ = e43050;var statearr_43051_43063 = state_43032;(statearr_43051_43063[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43064 = state_43032;
state_43032 = G__43064;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_43032){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_43032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_43052 = f__12203__auto__.call(null);(statearr_43052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto__);
return statearr_43052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
}));
return c__12202__auto__;
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
cljs.core.async.Mux = (function (){var obj43066 = {};return obj43066;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8233__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj43068 = {};return obj43068;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t43292 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43292 = (function (cs,ch,mult,meta43293){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta43293 = meta43293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43292.cljs$lang$type = true;
cljs.core.async.t43292.cljs$lang$ctorStr = "cljs.core.async/t43292";
cljs.core.async.t43292.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t43292");
});})(cs))
;
cljs.core.async.t43292.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t43292.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t43292.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t43292.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t43292.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t43292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43294){var self__ = this;
var _43294__$1 = this;return self__.meta43293;
});})(cs))
;
cljs.core.async.t43292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43294,meta43293__$1){var self__ = this;
var _43294__$1 = this;return (new cljs.core.async.t43292(self__.cs,self__.ch,self__.mult,meta43293__$1));
});})(cs))
;
cljs.core.async.__GT_t43292 = ((function (cs){
return (function __GT_t43292(cs__$1,ch__$1,mult__$1,meta43293){return (new cljs.core.async.t43292(cs__$1,ch__$1,mult__$1,meta43293));
});})(cs))
;
}
return (new cljs.core.async.t43292(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12202__auto___43515 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_43429){var state_val_43430 = (state_43429[1]);if((state_val_43430 === 32))
{var inst_43373 = (state_43429[7]);var inst_43297 = (state_43429[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43429,31,Object,null,30);var inst_43380 = cljs.core.async.put_BANG_.call(null,inst_43373,inst_43297,done);var state_43429__$1 = state_43429;var statearr_43431_43516 = state_43429__$1;(statearr_43431_43516[2] = inst_43380);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43429__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 1))
{var state_43429__$1 = state_43429;var statearr_43432_43517 = state_43429__$1;(statearr_43432_43517[2] = null);
(statearr_43432_43517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 33))
{var inst_43386 = (state_43429[9]);var inst_43388 = cljs.core.chunked_seq_QMARK_.call(null,inst_43386);var state_43429__$1 = state_43429;if(inst_43388)
{var statearr_43433_43518 = state_43429__$1;(statearr_43433_43518[1] = 36);
} else
{var statearr_43434_43519 = state_43429__$1;(statearr_43434_43519[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 2))
{var state_43429__$1 = state_43429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43429__$1,4,ch);
} else
{if((state_val_43430 === 34))
{var state_43429__$1 = state_43429;var statearr_43435_43520 = state_43429__$1;(statearr_43435_43520[2] = null);
(statearr_43435_43520[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 3))
{var inst_43427 = (state_43429[2]);var state_43429__$1 = state_43429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43429__$1,inst_43427);
} else
{if((state_val_43430 === 35))
{var inst_43411 = (state_43429[2]);var state_43429__$1 = state_43429;var statearr_43436_43521 = state_43429__$1;(statearr_43436_43521[2] = inst_43411);
(statearr_43436_43521[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 4))
{var inst_43297 = (state_43429[8]);var inst_43297__$1 = (state_43429[2]);var inst_43298 = (inst_43297__$1 == null);var state_43429__$1 = (function (){var statearr_43437 = state_43429;(statearr_43437[8] = inst_43297__$1);
return statearr_43437;
})();if(cljs.core.truth_(inst_43298))
{var statearr_43438_43522 = state_43429__$1;(statearr_43438_43522[1] = 5);
} else
{var statearr_43439_43523 = state_43429__$1;(statearr_43439_43523[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 36))
{var inst_43386 = (state_43429[9]);var inst_43390 = cljs.core.chunk_first.call(null,inst_43386);var inst_43391 = cljs.core.chunk_rest.call(null,inst_43386);var inst_43392 = cljs.core.count.call(null,inst_43390);var inst_43365 = inst_43391;var inst_43366 = inst_43390;var inst_43367 = inst_43392;var inst_43368 = 0;var state_43429__$1 = (function (){var statearr_43440 = state_43429;(statearr_43440[10] = inst_43366);
(statearr_43440[11] = inst_43365);
(statearr_43440[12] = inst_43367);
(statearr_43440[13] = inst_43368);
return statearr_43440;
})();var statearr_43441_43524 = state_43429__$1;(statearr_43441_43524[2] = null);
(statearr_43441_43524[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 5))
{var inst_43304 = cljs.core.deref.call(null,cs);var inst_43305 = cljs.core.seq.call(null,inst_43304);var inst_43306 = inst_43305;var inst_43307 = null;var inst_43308 = 0;var inst_43309 = 0;var state_43429__$1 = (function (){var statearr_43442 = state_43429;(statearr_43442[14] = inst_43306);
(statearr_43442[15] = inst_43308);
(statearr_43442[16] = inst_43307);
(statearr_43442[17] = inst_43309);
return statearr_43442;
})();var statearr_43443_43525 = state_43429__$1;(statearr_43443_43525[2] = null);
(statearr_43443_43525[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 37))
{var inst_43386 = (state_43429[9]);var inst_43395 = cljs.core.first.call(null,inst_43386);var state_43429__$1 = (function (){var statearr_43444 = state_43429;(statearr_43444[18] = inst_43395);
return statearr_43444;
})();var statearr_43445_43526 = state_43429__$1;(statearr_43445_43526[2] = null);
(statearr_43445_43526[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 6))
{var inst_43357 = (state_43429[19]);var inst_43356 = cljs.core.deref.call(null,cs);var inst_43357__$1 = cljs.core.keys.call(null,inst_43356);var inst_43358 = cljs.core.count.call(null,inst_43357__$1);var inst_43359 = cljs.core.reset_BANG_.call(null,dctr,inst_43358);var inst_43364 = cljs.core.seq.call(null,inst_43357__$1);var inst_43365 = inst_43364;var inst_43366 = null;var inst_43367 = 0;var inst_43368 = 0;var state_43429__$1 = (function (){var statearr_43446 = state_43429;(statearr_43446[10] = inst_43366);
(statearr_43446[19] = inst_43357__$1);
(statearr_43446[11] = inst_43365);
(statearr_43446[20] = inst_43359);
(statearr_43446[12] = inst_43367);
(statearr_43446[13] = inst_43368);
return statearr_43446;
})();var statearr_43447_43527 = state_43429__$1;(statearr_43447_43527[2] = null);
(statearr_43447_43527[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 38))
{var inst_43408 = (state_43429[2]);var state_43429__$1 = state_43429;var statearr_43448_43528 = state_43429__$1;(statearr_43448_43528[2] = inst_43408);
(statearr_43448_43528[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 7))
{var inst_43425 = (state_43429[2]);var state_43429__$1 = state_43429;var statearr_43449_43529 = state_43429__$1;(statearr_43449_43529[2] = inst_43425);
(statearr_43449_43529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 39))
{var inst_43386 = (state_43429[9]);var inst_43404 = (state_43429[2]);var inst_43405 = cljs.core.next.call(null,inst_43386);var inst_43365 = inst_43405;var inst_43366 = null;var inst_43367 = 0;var inst_43368 = 0;var state_43429__$1 = (function (){var statearr_43450 = state_43429;(statearr_43450[21] = inst_43404);
(statearr_43450[10] = inst_43366);
(statearr_43450[11] = inst_43365);
(statearr_43450[12] = inst_43367);
(statearr_43450[13] = inst_43368);
return statearr_43450;
})();var statearr_43451_43530 = state_43429__$1;(statearr_43451_43530[2] = null);
(statearr_43451_43530[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 8))
{var inst_43308 = (state_43429[15]);var inst_43309 = (state_43429[17]);var inst_43311 = (inst_43309 < inst_43308);var inst_43312 = inst_43311;var state_43429__$1 = state_43429;if(cljs.core.truth_(inst_43312))
{var statearr_43452_43531 = state_43429__$1;(statearr_43452_43531[1] = 10);
} else
{var statearr_43453_43532 = state_43429__$1;(statearr_43453_43532[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 40))
{var inst_43395 = (state_43429[18]);var inst_43396 = (state_43429[2]);var inst_43397 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_43398 = cljs.core.async.untap_STAR_.call(null,m,inst_43395);var state_43429__$1 = (function (){var statearr_43454 = state_43429;(statearr_43454[22] = inst_43397);
(statearr_43454[23] = inst_43396);
return statearr_43454;
})();var statearr_43455_43533 = state_43429__$1;(statearr_43455_43533[2] = inst_43398);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43429__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 9))
{var inst_43354 = (state_43429[2]);var state_43429__$1 = state_43429;var statearr_43456_43534 = state_43429__$1;(statearr_43456_43534[2] = inst_43354);
(statearr_43456_43534[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 41))
{var inst_43395 = (state_43429[18]);var inst_43297 = (state_43429[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43429,40,Object,null,39);var inst_43402 = cljs.core.async.put_BANG_.call(null,inst_43395,inst_43297,done);var state_43429__$1 = state_43429;var statearr_43457_43535 = state_43429__$1;(statearr_43457_43535[2] = inst_43402);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43429__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 10))
{var inst_43307 = (state_43429[16]);var inst_43309 = (state_43429[17]);var inst_43315 = cljs.core._nth.call(null,inst_43307,inst_43309);var inst_43316 = cljs.core.nth.call(null,inst_43315,0,null);var inst_43317 = cljs.core.nth.call(null,inst_43315,1,null);var state_43429__$1 = (function (){var statearr_43458 = state_43429;(statearr_43458[24] = inst_43316);
return statearr_43458;
})();if(cljs.core.truth_(inst_43317))
{var statearr_43459_43536 = state_43429__$1;(statearr_43459_43536[1] = 13);
} else
{var statearr_43460_43537 = state_43429__$1;(statearr_43460_43537[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 42))
{var state_43429__$1 = state_43429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43429__$1,45,dchan);
} else
{if((state_val_43430 === 11))
{var inst_43306 = (state_43429[14]);var inst_43326 = (state_43429[25]);var inst_43326__$1 = cljs.core.seq.call(null,inst_43306);var state_43429__$1 = (function (){var statearr_43461 = state_43429;(statearr_43461[25] = inst_43326__$1);
return statearr_43461;
})();if(inst_43326__$1)
{var statearr_43462_43538 = state_43429__$1;(statearr_43462_43538[1] = 16);
} else
{var statearr_43463_43539 = state_43429__$1;(statearr_43463_43539[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 43))
{var state_43429__$1 = state_43429;var statearr_43464_43540 = state_43429__$1;(statearr_43464_43540[2] = null);
(statearr_43464_43540[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 12))
{var inst_43352 = (state_43429[2]);var state_43429__$1 = state_43429;var statearr_43465_43541 = state_43429__$1;(statearr_43465_43541[2] = inst_43352);
(statearr_43465_43541[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 44))
{var inst_43422 = (state_43429[2]);var state_43429__$1 = (function (){var statearr_43466 = state_43429;(statearr_43466[26] = inst_43422);
return statearr_43466;
})();var statearr_43467_43542 = state_43429__$1;(statearr_43467_43542[2] = null);
(statearr_43467_43542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 13))
{var inst_43316 = (state_43429[24]);var inst_43319 = cljs.core.async.close_BANG_.call(null,inst_43316);var state_43429__$1 = state_43429;var statearr_43468_43543 = state_43429__$1;(statearr_43468_43543[2] = inst_43319);
(statearr_43468_43543[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 45))
{var inst_43419 = (state_43429[2]);var state_43429__$1 = state_43429;var statearr_43472_43544 = state_43429__$1;(statearr_43472_43544[2] = inst_43419);
(statearr_43472_43544[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 14))
{var state_43429__$1 = state_43429;var statearr_43473_43545 = state_43429__$1;(statearr_43473_43545[2] = null);
(statearr_43473_43545[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 15))
{var inst_43306 = (state_43429[14]);var inst_43308 = (state_43429[15]);var inst_43307 = (state_43429[16]);var inst_43309 = (state_43429[17]);var inst_43322 = (state_43429[2]);var inst_43323 = (inst_43309 + 1);var tmp43469 = inst_43306;var tmp43470 = inst_43308;var tmp43471 = inst_43307;var inst_43306__$1 = tmp43469;var inst_43307__$1 = tmp43471;var inst_43308__$1 = tmp43470;var inst_43309__$1 = inst_43323;var state_43429__$1 = (function (){var statearr_43474 = state_43429;(statearr_43474[27] = inst_43322);
(statearr_43474[14] = inst_43306__$1);
(statearr_43474[15] = inst_43308__$1);
(statearr_43474[16] = inst_43307__$1);
(statearr_43474[17] = inst_43309__$1);
return statearr_43474;
})();var statearr_43475_43546 = state_43429__$1;(statearr_43475_43546[2] = null);
(statearr_43475_43546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 16))
{var inst_43326 = (state_43429[25]);var inst_43328 = cljs.core.chunked_seq_QMARK_.call(null,inst_43326);var state_43429__$1 = state_43429;if(inst_43328)
{var statearr_43476_43547 = state_43429__$1;(statearr_43476_43547[1] = 19);
} else
{var statearr_43477_43548 = state_43429__$1;(statearr_43477_43548[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 17))
{var state_43429__$1 = state_43429;var statearr_43478_43549 = state_43429__$1;(statearr_43478_43549[2] = null);
(statearr_43478_43549[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 18))
{var inst_43350 = (state_43429[2]);var state_43429__$1 = state_43429;var statearr_43479_43550 = state_43429__$1;(statearr_43479_43550[2] = inst_43350);
(statearr_43479_43550[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 19))
{var inst_43326 = (state_43429[25]);var inst_43330 = cljs.core.chunk_first.call(null,inst_43326);var inst_43331 = cljs.core.chunk_rest.call(null,inst_43326);var inst_43332 = cljs.core.count.call(null,inst_43330);var inst_43306 = inst_43331;var inst_43307 = inst_43330;var inst_43308 = inst_43332;var inst_43309 = 0;var state_43429__$1 = (function (){var statearr_43480 = state_43429;(statearr_43480[14] = inst_43306);
(statearr_43480[15] = inst_43308);
(statearr_43480[16] = inst_43307);
(statearr_43480[17] = inst_43309);
return statearr_43480;
})();var statearr_43481_43551 = state_43429__$1;(statearr_43481_43551[2] = null);
(statearr_43481_43551[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 20))
{var inst_43326 = (state_43429[25]);var inst_43336 = cljs.core.first.call(null,inst_43326);var inst_43337 = cljs.core.nth.call(null,inst_43336,0,null);var inst_43338 = cljs.core.nth.call(null,inst_43336,1,null);var state_43429__$1 = (function (){var statearr_43482 = state_43429;(statearr_43482[28] = inst_43337);
return statearr_43482;
})();if(cljs.core.truth_(inst_43338))
{var statearr_43483_43552 = state_43429__$1;(statearr_43483_43552[1] = 22);
} else
{var statearr_43484_43553 = state_43429__$1;(statearr_43484_43553[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 21))
{var inst_43347 = (state_43429[2]);var state_43429__$1 = state_43429;var statearr_43485_43554 = state_43429__$1;(statearr_43485_43554[2] = inst_43347);
(statearr_43485_43554[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 22))
{var inst_43337 = (state_43429[28]);var inst_43340 = cljs.core.async.close_BANG_.call(null,inst_43337);var state_43429__$1 = state_43429;var statearr_43486_43555 = state_43429__$1;(statearr_43486_43555[2] = inst_43340);
(statearr_43486_43555[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 23))
{var state_43429__$1 = state_43429;var statearr_43487_43556 = state_43429__$1;(statearr_43487_43556[2] = null);
(statearr_43487_43556[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 24))
{var inst_43326 = (state_43429[25]);var inst_43343 = (state_43429[2]);var inst_43344 = cljs.core.next.call(null,inst_43326);var inst_43306 = inst_43344;var inst_43307 = null;var inst_43308 = 0;var inst_43309 = 0;var state_43429__$1 = (function (){var statearr_43488 = state_43429;(statearr_43488[14] = inst_43306);
(statearr_43488[15] = inst_43308);
(statearr_43488[16] = inst_43307);
(statearr_43488[29] = inst_43343);
(statearr_43488[17] = inst_43309);
return statearr_43488;
})();var statearr_43489_43557 = state_43429__$1;(statearr_43489_43557[2] = null);
(statearr_43489_43557[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 25))
{var inst_43367 = (state_43429[12]);var inst_43368 = (state_43429[13]);var inst_43370 = (inst_43368 < inst_43367);var inst_43371 = inst_43370;var state_43429__$1 = state_43429;if(cljs.core.truth_(inst_43371))
{var statearr_43490_43558 = state_43429__$1;(statearr_43490_43558[1] = 27);
} else
{var statearr_43491_43559 = state_43429__$1;(statearr_43491_43559[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 26))
{var inst_43357 = (state_43429[19]);var inst_43415 = (state_43429[2]);var inst_43416 = cljs.core.seq.call(null,inst_43357);var state_43429__$1 = (function (){var statearr_43492 = state_43429;(statearr_43492[30] = inst_43415);
return statearr_43492;
})();if(inst_43416)
{var statearr_43493_43560 = state_43429__$1;(statearr_43493_43560[1] = 42);
} else
{var statearr_43494_43561 = state_43429__$1;(statearr_43494_43561[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 27))
{var inst_43366 = (state_43429[10]);var inst_43368 = (state_43429[13]);var inst_43373 = cljs.core._nth.call(null,inst_43366,inst_43368);var state_43429__$1 = (function (){var statearr_43495 = state_43429;(statearr_43495[7] = inst_43373);
return statearr_43495;
})();var statearr_43496_43562 = state_43429__$1;(statearr_43496_43562[2] = null);
(statearr_43496_43562[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 28))
{var inst_43365 = (state_43429[11]);var inst_43386 = (state_43429[9]);var inst_43386__$1 = cljs.core.seq.call(null,inst_43365);var state_43429__$1 = (function (){var statearr_43500 = state_43429;(statearr_43500[9] = inst_43386__$1);
return statearr_43500;
})();if(inst_43386__$1)
{var statearr_43501_43563 = state_43429__$1;(statearr_43501_43563[1] = 33);
} else
{var statearr_43502_43564 = state_43429__$1;(statearr_43502_43564[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 29))
{var inst_43413 = (state_43429[2]);var state_43429__$1 = state_43429;var statearr_43503_43565 = state_43429__$1;(statearr_43503_43565[2] = inst_43413);
(statearr_43503_43565[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 30))
{var inst_43366 = (state_43429[10]);var inst_43365 = (state_43429[11]);var inst_43367 = (state_43429[12]);var inst_43368 = (state_43429[13]);var inst_43382 = (state_43429[2]);var inst_43383 = (inst_43368 + 1);var tmp43497 = inst_43366;var tmp43498 = inst_43365;var tmp43499 = inst_43367;var inst_43365__$1 = tmp43498;var inst_43366__$1 = tmp43497;var inst_43367__$1 = tmp43499;var inst_43368__$1 = inst_43383;var state_43429__$1 = (function (){var statearr_43504 = state_43429;(statearr_43504[10] = inst_43366__$1);
(statearr_43504[11] = inst_43365__$1);
(statearr_43504[31] = inst_43382);
(statearr_43504[12] = inst_43367__$1);
(statearr_43504[13] = inst_43368__$1);
return statearr_43504;
})();var statearr_43505_43566 = state_43429__$1;(statearr_43505_43566[2] = null);
(statearr_43505_43566[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43430 === 31))
{var inst_43373 = (state_43429[7]);var inst_43374 = (state_43429[2]);var inst_43375 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_43376 = cljs.core.async.untap_STAR_.call(null,m,inst_43373);var state_43429__$1 = (function (){var statearr_43506 = state_43429;(statearr_43506[32] = inst_43375);
(statearr_43506[33] = inst_43374);
return statearr_43506;
})();var statearr_43507_43567 = state_43429__$1;(statearr_43507_43567[2] = inst_43376);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43429__$1);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_43511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43511[0] = state_machine__12133__auto__);
(statearr_43511[1] = 1);
return statearr_43511;
});
var state_machine__12133__auto____1 = (function (state_43429){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_43429);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e43512){if((e43512 instanceof Object))
{var ex__12136__auto__ = e43512;var statearr_43513_43568 = state_43429;(statearr_43513_43568[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43429);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43569 = state_43429;
state_43429 = G__43569;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_43429){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_43429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_43514 = f__12203__auto__.call(null);(statearr_43514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___43515);
return statearr_43514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
cljs.core.async.Mix = (function (){var obj43571 = {};return obj43571;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t43681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43681 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta43682){
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
this.meta43682 = meta43682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43681.cljs$lang$type = true;
cljs.core.async.t43681.cljs$lang$ctorStr = "cljs.core.async/t43681";
cljs.core.async.t43681.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t43681");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43681.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t43681.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43681.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43681.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43681.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43681.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43683){var self__ = this;
var _43683__$1 = this;return self__.meta43682;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43683,meta43682__$1){var self__ = this;
var _43683__$1 = this;return (new cljs.core.async.t43681(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta43682__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t43681 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t43681(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta43682){return (new cljs.core.async.t43681(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta43682));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t43681(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12202__auto___43790 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_43748){var state_val_43749 = (state_43748[1]);if((state_val_43749 === 1))
{var inst_43687 = (state_43748[7]);var inst_43687__$1 = calc_state.call(null);var inst_43688 = cljs.core.seq_QMARK_.call(null,inst_43687__$1);var state_43748__$1 = (function (){var statearr_43750 = state_43748;(statearr_43750[7] = inst_43687__$1);
return statearr_43750;
})();if(inst_43688)
{var statearr_43751_43791 = state_43748__$1;(statearr_43751_43791[1] = 2);
} else
{var statearr_43752_43792 = state_43748__$1;(statearr_43752_43792[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 2))
{var inst_43687 = (state_43748[7]);var inst_43690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43687);var state_43748__$1 = state_43748;var statearr_43753_43793 = state_43748__$1;(statearr_43753_43793[2] = inst_43690);
(statearr_43753_43793[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 3))
{var inst_43687 = (state_43748[7]);var state_43748__$1 = state_43748;var statearr_43754_43794 = state_43748__$1;(statearr_43754_43794[2] = inst_43687);
(statearr_43754_43794[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 4))
{var inst_43687 = (state_43748[7]);var inst_43693 = (state_43748[2]);var inst_43694 = cljs.core.get.call(null,inst_43693,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_43695 = cljs.core.get.call(null,inst_43693,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_43696 = cljs.core.get.call(null,inst_43693,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_43697 = inst_43687;var state_43748__$1 = (function (){var statearr_43755 = state_43748;(statearr_43755[8] = inst_43697);
(statearr_43755[9] = inst_43696);
(statearr_43755[10] = inst_43695);
(statearr_43755[11] = inst_43694);
return statearr_43755;
})();var statearr_43756_43795 = state_43748__$1;(statearr_43756_43795[2] = null);
(statearr_43756_43795[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 5))
{var inst_43697 = (state_43748[8]);var inst_43700 = cljs.core.seq_QMARK_.call(null,inst_43697);var state_43748__$1 = state_43748;if(inst_43700)
{var statearr_43757_43796 = state_43748__$1;(statearr_43757_43796[1] = 7);
} else
{var statearr_43758_43797 = state_43748__$1;(statearr_43758_43797[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 6))
{var inst_43746 = (state_43748[2]);var state_43748__$1 = state_43748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43748__$1,inst_43746);
} else
{if((state_val_43749 === 7))
{var inst_43697 = (state_43748[8]);var inst_43702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43697);var state_43748__$1 = state_43748;var statearr_43759_43798 = state_43748__$1;(statearr_43759_43798[2] = inst_43702);
(statearr_43759_43798[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 8))
{var inst_43697 = (state_43748[8]);var state_43748__$1 = state_43748;var statearr_43760_43799 = state_43748__$1;(statearr_43760_43799[2] = inst_43697);
(statearr_43760_43799[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 9))
{var inst_43705 = (state_43748[12]);var inst_43705__$1 = (state_43748[2]);var inst_43706 = cljs.core.get.call(null,inst_43705__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_43707 = cljs.core.get.call(null,inst_43705__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_43708 = cljs.core.get.call(null,inst_43705__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_43748__$1 = (function (){var statearr_43761 = state_43748;(statearr_43761[13] = inst_43707);
(statearr_43761[14] = inst_43708);
(statearr_43761[12] = inst_43705__$1);
return statearr_43761;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_43748__$1,10,inst_43706);
} else
{if((state_val_43749 === 10))
{var inst_43713 = (state_43748[15]);var inst_43712 = (state_43748[16]);var inst_43711 = (state_43748[2]);var inst_43712__$1 = cljs.core.nth.call(null,inst_43711,0,null);var inst_43713__$1 = cljs.core.nth.call(null,inst_43711,1,null);var inst_43714 = (inst_43712__$1 == null);var inst_43715 = cljs.core._EQ_.call(null,inst_43713__$1,change);var inst_43716 = (inst_43714) || (inst_43715);var state_43748__$1 = (function (){var statearr_43762 = state_43748;(statearr_43762[15] = inst_43713__$1);
(statearr_43762[16] = inst_43712__$1);
return statearr_43762;
})();if(cljs.core.truth_(inst_43716))
{var statearr_43763_43800 = state_43748__$1;(statearr_43763_43800[1] = 11);
} else
{var statearr_43764_43801 = state_43748__$1;(statearr_43764_43801[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 11))
{var inst_43712 = (state_43748[16]);var inst_43718 = (inst_43712 == null);var state_43748__$1 = state_43748;if(cljs.core.truth_(inst_43718))
{var statearr_43765_43802 = state_43748__$1;(statearr_43765_43802[1] = 14);
} else
{var statearr_43766_43803 = state_43748__$1;(statearr_43766_43803[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 12))
{var inst_43727 = (state_43748[17]);var inst_43708 = (state_43748[14]);var inst_43713 = (state_43748[15]);var inst_43727__$1 = inst_43708.call(null,inst_43713);var state_43748__$1 = (function (){var statearr_43767 = state_43748;(statearr_43767[17] = inst_43727__$1);
return statearr_43767;
})();if(cljs.core.truth_(inst_43727__$1))
{var statearr_43768_43804 = state_43748__$1;(statearr_43768_43804[1] = 17);
} else
{var statearr_43769_43805 = state_43748__$1;(statearr_43769_43805[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 13))
{var inst_43744 = (state_43748[2]);var state_43748__$1 = state_43748;var statearr_43770_43806 = state_43748__$1;(statearr_43770_43806[2] = inst_43744);
(statearr_43770_43806[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 14))
{var inst_43713 = (state_43748[15]);var inst_43720 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43713);var state_43748__$1 = state_43748;var statearr_43771_43807 = state_43748__$1;(statearr_43771_43807[2] = inst_43720);
(statearr_43771_43807[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 15))
{var state_43748__$1 = state_43748;var statearr_43772_43808 = state_43748__$1;(statearr_43772_43808[2] = null);
(statearr_43772_43808[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 16))
{var inst_43723 = (state_43748[2]);var inst_43724 = calc_state.call(null);var inst_43697 = inst_43724;var state_43748__$1 = (function (){var statearr_43773 = state_43748;(statearr_43773[18] = inst_43723);
(statearr_43773[8] = inst_43697);
return statearr_43773;
})();var statearr_43774_43809 = state_43748__$1;(statearr_43774_43809[2] = null);
(statearr_43774_43809[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 17))
{var inst_43727 = (state_43748[17]);var state_43748__$1 = state_43748;var statearr_43775_43810 = state_43748__$1;(statearr_43775_43810[2] = inst_43727);
(statearr_43775_43810[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 18))
{var inst_43707 = (state_43748[13]);var inst_43708 = (state_43748[14]);var inst_43713 = (state_43748[15]);var inst_43730 = cljs.core.empty_QMARK_.call(null,inst_43708);var inst_43731 = inst_43707.call(null,inst_43713);var inst_43732 = cljs.core.not.call(null,inst_43731);var inst_43733 = (inst_43730) && (inst_43732);var state_43748__$1 = state_43748;var statearr_43776_43811 = state_43748__$1;(statearr_43776_43811[2] = inst_43733);
(statearr_43776_43811[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 19))
{var inst_43735 = (state_43748[2]);var state_43748__$1 = state_43748;if(cljs.core.truth_(inst_43735))
{var statearr_43777_43812 = state_43748__$1;(statearr_43777_43812[1] = 20);
} else
{var statearr_43778_43813 = state_43748__$1;(statearr_43778_43813[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 20))
{var inst_43712 = (state_43748[16]);var state_43748__$1 = state_43748;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43748__$1,23,out,inst_43712);
} else
{if((state_val_43749 === 21))
{var state_43748__$1 = state_43748;var statearr_43779_43814 = state_43748__$1;(statearr_43779_43814[2] = null);
(statearr_43779_43814[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 22))
{var inst_43705 = (state_43748[12]);var inst_43741 = (state_43748[2]);var inst_43697 = inst_43705;var state_43748__$1 = (function (){var statearr_43780 = state_43748;(statearr_43780[19] = inst_43741);
(statearr_43780[8] = inst_43697);
return statearr_43780;
})();var statearr_43781_43815 = state_43748__$1;(statearr_43781_43815[2] = null);
(statearr_43781_43815[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43749 === 23))
{var inst_43738 = (state_43748[2]);var state_43748__$1 = state_43748;var statearr_43782_43816 = state_43748__$1;(statearr_43782_43816[2] = inst_43738);
(statearr_43782_43816[1] = 22);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_43786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43786[0] = state_machine__12133__auto__);
(statearr_43786[1] = 1);
return statearr_43786;
});
var state_machine__12133__auto____1 = (function (state_43748){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_43748);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e43787){if((e43787 instanceof Object))
{var ex__12136__auto__ = e43787;var statearr_43788_43817 = state_43748;(statearr_43788_43817[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43748);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43818 = state_43748;
state_43748 = G__43818;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_43748){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_43748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_43789 = f__12203__auto__.call(null);(statearr_43789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___43790);
return statearr_43789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
cljs.core.async.Pub = (function (){var obj43820 = {};return obj43820;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8233__auto__ = p;if(and__8233__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8233__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8853__auto__ = (((p == null))?null:p);return (function (){var or__8245__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8233__auto__ = p;if(and__8233__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8233__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8853__auto__ = (((p == null))?null:p);return (function (){var or__8245__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8233__auto__ = p;if(and__8233__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8233__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8853__auto__ = (((p == null))?null:p);return (function (){var or__8245__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8233__auto__ = p;if(and__8233__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8853__auto__ = (((p == null))?null:p);return (function (){var or__8245__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
return (function (topic){var or__8245__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8245__auto__,mults){
return (function (p1__43821_SHARP_){if(cljs.core.truth_(p1__43821_SHARP_.call(null,topic)))
{return p1__43821_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__43821_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8245__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t43946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43946 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta43947){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta43947 = meta43947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43946.cljs$lang$type = true;
cljs.core.async.t43946.cljs$lang$ctorStr = "cljs.core.async/t43946";
cljs.core.async.t43946.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t43946");
});})(mults,ensure_mult))
;
cljs.core.async.t43946.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t43946.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t43946.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t43946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t43946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t43946.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t43946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43948){var self__ = this;
var _43948__$1 = this;return self__.meta43947;
});})(mults,ensure_mult))
;
cljs.core.async.t43946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43948,meta43947__$1){var self__ = this;
var _43948__$1 = this;return (new cljs.core.async.t43946(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta43947__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t43946 = ((function (mults,ensure_mult){
return (function __GT_t43946(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta43947){return (new cljs.core.async.t43946(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta43947));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t43946(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12202__auto___44070 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_44022){var state_val_44023 = (state_44022[1]);if((state_val_44023 === 1))
{var state_44022__$1 = state_44022;var statearr_44024_44071 = state_44022__$1;(statearr_44024_44071[2] = null);
(statearr_44024_44071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 2))
{var state_44022__$1 = state_44022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44022__$1,4,ch);
} else
{if((state_val_44023 === 3))
{var inst_44020 = (state_44022[2]);var state_44022__$1 = state_44022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44022__$1,inst_44020);
} else
{if((state_val_44023 === 4))
{var inst_43951 = (state_44022[7]);var inst_43951__$1 = (state_44022[2]);var inst_43952 = (inst_43951__$1 == null);var state_44022__$1 = (function (){var statearr_44025 = state_44022;(statearr_44025[7] = inst_43951__$1);
return statearr_44025;
})();if(cljs.core.truth_(inst_43952))
{var statearr_44026_44072 = state_44022__$1;(statearr_44026_44072[1] = 5);
} else
{var statearr_44027_44073 = state_44022__$1;(statearr_44027_44073[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 5))
{var inst_43958 = cljs.core.deref.call(null,mults);var inst_43959 = cljs.core.vals.call(null,inst_43958);var inst_43960 = cljs.core.seq.call(null,inst_43959);var inst_43961 = inst_43960;var inst_43962 = null;var inst_43963 = 0;var inst_43964 = 0;var state_44022__$1 = (function (){var statearr_44028 = state_44022;(statearr_44028[8] = inst_43961);
(statearr_44028[9] = inst_43962);
(statearr_44028[10] = inst_43963);
(statearr_44028[11] = inst_43964);
return statearr_44028;
})();var statearr_44029_44074 = state_44022__$1;(statearr_44029_44074[2] = null);
(statearr_44029_44074[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 6))
{var inst_43951 = (state_44022[7]);var inst_44001 = (state_44022[12]);var inst_43999 = (state_44022[13]);var inst_43999__$1 = topic_fn.call(null,inst_43951);var inst_44000 = cljs.core.deref.call(null,mults);var inst_44001__$1 = cljs.core.get.call(null,inst_44000,inst_43999__$1);var state_44022__$1 = (function (){var statearr_44030 = state_44022;(statearr_44030[12] = inst_44001__$1);
(statearr_44030[13] = inst_43999__$1);
return statearr_44030;
})();if(cljs.core.truth_(inst_44001__$1))
{var statearr_44031_44075 = state_44022__$1;(statearr_44031_44075[1] = 19);
} else
{var statearr_44032_44076 = state_44022__$1;(statearr_44032_44076[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 7))
{var inst_44018 = (state_44022[2]);var state_44022__$1 = state_44022;var statearr_44033_44077 = state_44022__$1;(statearr_44033_44077[2] = inst_44018);
(statearr_44033_44077[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 8))
{var inst_43963 = (state_44022[10]);var inst_43964 = (state_44022[11]);var inst_43966 = (inst_43964 < inst_43963);var inst_43967 = inst_43966;var state_44022__$1 = state_44022;if(cljs.core.truth_(inst_43967))
{var statearr_44037_44078 = state_44022__$1;(statearr_44037_44078[1] = 10);
} else
{var statearr_44038_44079 = state_44022__$1;(statearr_44038_44079[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 9))
{var inst_43997 = (state_44022[2]);var state_44022__$1 = state_44022;var statearr_44039_44080 = state_44022__$1;(statearr_44039_44080[2] = inst_43997);
(statearr_44039_44080[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 10))
{var inst_43961 = (state_44022[8]);var inst_43962 = (state_44022[9]);var inst_43963 = (state_44022[10]);var inst_43964 = (state_44022[11]);var inst_43969 = cljs.core._nth.call(null,inst_43962,inst_43964);var inst_43970 = cljs.core.async.muxch_STAR_.call(null,inst_43969);var inst_43971 = cljs.core.async.close_BANG_.call(null,inst_43970);var inst_43972 = (inst_43964 + 1);var tmp44034 = inst_43961;var tmp44035 = inst_43962;var tmp44036 = inst_43963;var inst_43961__$1 = tmp44034;var inst_43962__$1 = tmp44035;var inst_43963__$1 = tmp44036;var inst_43964__$1 = inst_43972;var state_44022__$1 = (function (){var statearr_44040 = state_44022;(statearr_44040[14] = inst_43971);
(statearr_44040[8] = inst_43961__$1);
(statearr_44040[9] = inst_43962__$1);
(statearr_44040[10] = inst_43963__$1);
(statearr_44040[11] = inst_43964__$1);
return statearr_44040;
})();var statearr_44041_44081 = state_44022__$1;(statearr_44041_44081[2] = null);
(statearr_44041_44081[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 11))
{var inst_43975 = (state_44022[15]);var inst_43961 = (state_44022[8]);var inst_43975__$1 = cljs.core.seq.call(null,inst_43961);var state_44022__$1 = (function (){var statearr_44042 = state_44022;(statearr_44042[15] = inst_43975__$1);
return statearr_44042;
})();if(inst_43975__$1)
{var statearr_44043_44082 = state_44022__$1;(statearr_44043_44082[1] = 13);
} else
{var statearr_44044_44083 = state_44022__$1;(statearr_44044_44083[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 12))
{var inst_43995 = (state_44022[2]);var state_44022__$1 = state_44022;var statearr_44045_44084 = state_44022__$1;(statearr_44045_44084[2] = inst_43995);
(statearr_44045_44084[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 13))
{var inst_43975 = (state_44022[15]);var inst_43977 = cljs.core.chunked_seq_QMARK_.call(null,inst_43975);var state_44022__$1 = state_44022;if(inst_43977)
{var statearr_44046_44085 = state_44022__$1;(statearr_44046_44085[1] = 16);
} else
{var statearr_44047_44086 = state_44022__$1;(statearr_44047_44086[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 14))
{var state_44022__$1 = state_44022;var statearr_44048_44087 = state_44022__$1;(statearr_44048_44087[2] = null);
(statearr_44048_44087[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 15))
{var inst_43993 = (state_44022[2]);var state_44022__$1 = state_44022;var statearr_44049_44088 = state_44022__$1;(statearr_44049_44088[2] = inst_43993);
(statearr_44049_44088[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 16))
{var inst_43975 = (state_44022[15]);var inst_43979 = cljs.core.chunk_first.call(null,inst_43975);var inst_43980 = cljs.core.chunk_rest.call(null,inst_43975);var inst_43981 = cljs.core.count.call(null,inst_43979);var inst_43961 = inst_43980;var inst_43962 = inst_43979;var inst_43963 = inst_43981;var inst_43964 = 0;var state_44022__$1 = (function (){var statearr_44050 = state_44022;(statearr_44050[8] = inst_43961);
(statearr_44050[9] = inst_43962);
(statearr_44050[10] = inst_43963);
(statearr_44050[11] = inst_43964);
return statearr_44050;
})();var statearr_44051_44089 = state_44022__$1;(statearr_44051_44089[2] = null);
(statearr_44051_44089[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 17))
{var inst_43975 = (state_44022[15]);var inst_43984 = cljs.core.first.call(null,inst_43975);var inst_43985 = cljs.core.async.muxch_STAR_.call(null,inst_43984);var inst_43986 = cljs.core.async.close_BANG_.call(null,inst_43985);var inst_43987 = cljs.core.next.call(null,inst_43975);var inst_43961 = inst_43987;var inst_43962 = null;var inst_43963 = 0;var inst_43964 = 0;var state_44022__$1 = (function (){var statearr_44052 = state_44022;(statearr_44052[16] = inst_43986);
(statearr_44052[8] = inst_43961);
(statearr_44052[9] = inst_43962);
(statearr_44052[10] = inst_43963);
(statearr_44052[11] = inst_43964);
return statearr_44052;
})();var statearr_44053_44090 = state_44022__$1;(statearr_44053_44090[2] = null);
(statearr_44053_44090[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 18))
{var inst_43990 = (state_44022[2]);var state_44022__$1 = state_44022;var statearr_44054_44091 = state_44022__$1;(statearr_44054_44091[2] = inst_43990);
(statearr_44054_44091[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 19))
{var state_44022__$1 = state_44022;var statearr_44055_44092 = state_44022__$1;(statearr_44055_44092[2] = null);
(statearr_44055_44092[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 20))
{var state_44022__$1 = state_44022;var statearr_44056_44093 = state_44022__$1;(statearr_44056_44093[2] = null);
(statearr_44056_44093[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 21))
{var inst_44015 = (state_44022[2]);var state_44022__$1 = (function (){var statearr_44057 = state_44022;(statearr_44057[17] = inst_44015);
return statearr_44057;
})();var statearr_44058_44094 = state_44022__$1;(statearr_44058_44094[2] = null);
(statearr_44058_44094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 22))
{var inst_44012 = (state_44022[2]);var state_44022__$1 = state_44022;var statearr_44059_44095 = state_44022__$1;(statearr_44059_44095[2] = inst_44012);
(statearr_44059_44095[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 23))
{var inst_43999 = (state_44022[13]);var inst_44003 = (state_44022[2]);var inst_44004 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43999);var state_44022__$1 = (function (){var statearr_44060 = state_44022;(statearr_44060[18] = inst_44003);
return statearr_44060;
})();var statearr_44061_44096 = state_44022__$1;(statearr_44061_44096[2] = inst_44004);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44022__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44023 === 24))
{var inst_43951 = (state_44022[7]);var inst_44001 = (state_44022[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44022,23,Object,null,22);var inst_44008 = cljs.core.async.muxch_STAR_.call(null,inst_44001);var state_44022__$1 = state_44022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44022__$1,25,inst_44008,inst_43951);
} else
{if((state_val_44023 === 25))
{var inst_44010 = (state_44022[2]);var state_44022__$1 = state_44022;var statearr_44062_44097 = state_44022__$1;(statearr_44062_44097[2] = inst_44010);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44022__$1);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_44066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44066[0] = state_machine__12133__auto__);
(statearr_44066[1] = 1);
return statearr_44066;
});
var state_machine__12133__auto____1 = (function (state_44022){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_44022);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e44067){if((e44067 instanceof Object))
{var ex__12136__auto__ = e44067;var statearr_44068_44098 = state_44022;(statearr_44068_44098[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44022);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44099 = state_44022;
state_44022 = G__44099;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_44022){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_44022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_44069 = f__12203__auto__.call(null);(statearr_44069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___44070);
return statearr_44069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
,cljs.core.range.call(null,cnt));var c__12202__auto___44236 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_44206){var state_val_44207 = (state_44206[1]);if((state_val_44207 === 1))
{var state_44206__$1 = state_44206;var statearr_44208_44237 = state_44206__$1;(statearr_44208_44237[2] = null);
(statearr_44208_44237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 2))
{var inst_44169 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_44170 = 0;var state_44206__$1 = (function (){var statearr_44209 = state_44206;(statearr_44209[7] = inst_44169);
(statearr_44209[8] = inst_44170);
return statearr_44209;
})();var statearr_44210_44238 = state_44206__$1;(statearr_44210_44238[2] = null);
(statearr_44210_44238[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 3))
{var inst_44204 = (state_44206[2]);var state_44206__$1 = state_44206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44206__$1,inst_44204);
} else
{if((state_val_44207 === 4))
{var inst_44170 = (state_44206[8]);var inst_44172 = (inst_44170 < cnt);var state_44206__$1 = state_44206;if(cljs.core.truth_(inst_44172))
{var statearr_44211_44239 = state_44206__$1;(statearr_44211_44239[1] = 6);
} else
{var statearr_44212_44240 = state_44206__$1;(statearr_44212_44240[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 5))
{var inst_44190 = (state_44206[2]);var state_44206__$1 = (function (){var statearr_44213 = state_44206;(statearr_44213[9] = inst_44190);
return statearr_44213;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44206__$1,12,dchan);
} else
{if((state_val_44207 === 6))
{var state_44206__$1 = state_44206;var statearr_44214_44241 = state_44206__$1;(statearr_44214_44241[2] = null);
(statearr_44214_44241[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 7))
{var state_44206__$1 = state_44206;var statearr_44215_44242 = state_44206__$1;(statearr_44215_44242[2] = null);
(statearr_44215_44242[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 8))
{var inst_44188 = (state_44206[2]);var state_44206__$1 = state_44206;var statearr_44216_44243 = state_44206__$1;(statearr_44216_44243[2] = inst_44188);
(statearr_44216_44243[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 9))
{var inst_44170 = (state_44206[8]);var inst_44183 = (state_44206[2]);var inst_44184 = (inst_44170 + 1);var inst_44170__$1 = inst_44184;var state_44206__$1 = (function (){var statearr_44217 = state_44206;(statearr_44217[8] = inst_44170__$1);
(statearr_44217[10] = inst_44183);
return statearr_44217;
})();var statearr_44218_44244 = state_44206__$1;(statearr_44218_44244[2] = null);
(statearr_44218_44244[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 10))
{var inst_44174 = (state_44206[2]);var inst_44175 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_44206__$1 = (function (){var statearr_44219 = state_44206;(statearr_44219[11] = inst_44174);
return statearr_44219;
})();var statearr_44220_44245 = state_44206__$1;(statearr_44220_44245[2] = inst_44175);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44206__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 11))
{var inst_44170 = (state_44206[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44206,10,Object,null,9);var inst_44179 = chs__$1.call(null,inst_44170);var inst_44180 = done.call(null,inst_44170);var inst_44181 = cljs.core.async.take_BANG_.call(null,inst_44179,inst_44180);var state_44206__$1 = state_44206;var statearr_44221_44246 = state_44206__$1;(statearr_44221_44246[2] = inst_44181);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44206__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 12))
{var inst_44192 = (state_44206[12]);var inst_44192__$1 = (state_44206[2]);var inst_44193 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44192__$1);var state_44206__$1 = (function (){var statearr_44222 = state_44206;(statearr_44222[12] = inst_44192__$1);
return statearr_44222;
})();if(cljs.core.truth_(inst_44193))
{var statearr_44223_44247 = state_44206__$1;(statearr_44223_44247[1] = 13);
} else
{var statearr_44224_44248 = state_44206__$1;(statearr_44224_44248[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 13))
{var inst_44195 = cljs.core.async.close_BANG_.call(null,out);var state_44206__$1 = state_44206;var statearr_44225_44249 = state_44206__$1;(statearr_44225_44249[2] = inst_44195);
(statearr_44225_44249[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 14))
{var inst_44192 = (state_44206[12]);var inst_44197 = cljs.core.apply.call(null,f,inst_44192);var state_44206__$1 = state_44206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44206__$1,16,out,inst_44197);
} else
{if((state_val_44207 === 15))
{var inst_44202 = (state_44206[2]);var state_44206__$1 = state_44206;var statearr_44226_44250 = state_44206__$1;(statearr_44226_44250[2] = inst_44202);
(statearr_44226_44250[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 16))
{var inst_44199 = (state_44206[2]);var state_44206__$1 = (function (){var statearr_44227 = state_44206;(statearr_44227[13] = inst_44199);
return statearr_44227;
})();var statearr_44228_44251 = state_44206__$1;(statearr_44228_44251[2] = null);
(statearr_44228_44251[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_44232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44232[0] = state_machine__12133__auto__);
(statearr_44232[1] = 1);
return statearr_44232;
});
var state_machine__12133__auto____1 = (function (state_44206){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_44206);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e44233){if((e44233 instanceof Object))
{var ex__12136__auto__ = e44233;var statearr_44234_44252 = state_44206;(statearr_44234_44252[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44253 = state_44206;
state_44206 = G__44253;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_44206){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_44206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_44235 = f__12203__auto__.call(null);(statearr_44235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___44236);
return statearr_44235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___44361 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_44337){var state_val_44338 = (state_44337[1]);if((state_val_44338 === 1))
{var inst_44308 = cljs.core.vec.call(null,chs);var inst_44309 = inst_44308;var state_44337__$1 = (function (){var statearr_44339 = state_44337;(statearr_44339[7] = inst_44309);
return statearr_44339;
})();var statearr_44340_44362 = state_44337__$1;(statearr_44340_44362[2] = null);
(statearr_44340_44362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44338 === 2))
{var inst_44309 = (state_44337[7]);var inst_44311 = cljs.core.count.call(null,inst_44309);var inst_44312 = (inst_44311 > 0);var state_44337__$1 = state_44337;if(cljs.core.truth_(inst_44312))
{var statearr_44341_44363 = state_44337__$1;(statearr_44341_44363[1] = 4);
} else
{var statearr_44342_44364 = state_44337__$1;(statearr_44342_44364[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44338 === 3))
{var inst_44335 = (state_44337[2]);var state_44337__$1 = state_44337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44337__$1,inst_44335);
} else
{if((state_val_44338 === 4))
{var inst_44309 = (state_44337[7]);var state_44337__$1 = state_44337;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_44337__$1,7,inst_44309);
} else
{if((state_val_44338 === 5))
{var inst_44331 = cljs.core.async.close_BANG_.call(null,out);var state_44337__$1 = state_44337;var statearr_44343_44365 = state_44337__$1;(statearr_44343_44365[2] = inst_44331);
(statearr_44343_44365[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44338 === 6))
{var inst_44333 = (state_44337[2]);var state_44337__$1 = state_44337;var statearr_44344_44366 = state_44337__$1;(statearr_44344_44366[2] = inst_44333);
(statearr_44344_44366[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44338 === 7))
{var inst_44316 = (state_44337[8]);var inst_44317 = (state_44337[9]);var inst_44316__$1 = (state_44337[2]);var inst_44317__$1 = cljs.core.nth.call(null,inst_44316__$1,0,null);var inst_44318 = cljs.core.nth.call(null,inst_44316__$1,1,null);var inst_44319 = (inst_44317__$1 == null);var state_44337__$1 = (function (){var statearr_44345 = state_44337;(statearr_44345[8] = inst_44316__$1);
(statearr_44345[10] = inst_44318);
(statearr_44345[9] = inst_44317__$1);
return statearr_44345;
})();if(cljs.core.truth_(inst_44319))
{var statearr_44346_44367 = state_44337__$1;(statearr_44346_44367[1] = 8);
} else
{var statearr_44347_44368 = state_44337__$1;(statearr_44347_44368[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44338 === 8))
{var inst_44309 = (state_44337[7]);var inst_44316 = (state_44337[8]);var inst_44318 = (state_44337[10]);var inst_44317 = (state_44337[9]);var inst_44321 = (function (){var c = inst_44318;var v = inst_44317;var vec__44314 = inst_44316;var cs = inst_44309;return ((function (c,v,vec__44314,cs,inst_44309,inst_44316,inst_44318,inst_44317,state_val_44338){
return (function (p1__44254_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__44254_SHARP_);
});
;})(c,v,vec__44314,cs,inst_44309,inst_44316,inst_44318,inst_44317,state_val_44338))
})();var inst_44322 = cljs.core.filterv.call(null,inst_44321,inst_44309);var inst_44309__$1 = inst_44322;var state_44337__$1 = (function (){var statearr_44348 = state_44337;(statearr_44348[7] = inst_44309__$1);
return statearr_44348;
})();var statearr_44349_44369 = state_44337__$1;(statearr_44349_44369[2] = null);
(statearr_44349_44369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44338 === 9))
{var inst_44317 = (state_44337[9]);var state_44337__$1 = state_44337;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44337__$1,11,out,inst_44317);
} else
{if((state_val_44338 === 10))
{var inst_44329 = (state_44337[2]);var state_44337__$1 = state_44337;var statearr_44351_44370 = state_44337__$1;(statearr_44351_44370[2] = inst_44329);
(statearr_44351_44370[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44338 === 11))
{var inst_44309 = (state_44337[7]);var inst_44326 = (state_44337[2]);var tmp44350 = inst_44309;var inst_44309__$1 = tmp44350;var state_44337__$1 = (function (){var statearr_44352 = state_44337;(statearr_44352[11] = inst_44326);
(statearr_44352[7] = inst_44309__$1);
return statearr_44352;
})();var statearr_44353_44371 = state_44337__$1;(statearr_44353_44371[2] = null);
(statearr_44353_44371[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_44357 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44357[0] = state_machine__12133__auto__);
(statearr_44357[1] = 1);
return statearr_44357;
});
var state_machine__12133__auto____1 = (function (state_44337){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_44337);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e44358){if((e44358 instanceof Object))
{var ex__12136__auto__ = e44358;var statearr_44359_44372 = state_44337;(statearr_44359_44372[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44337);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44373 = state_44337;
state_44337 = G__44373;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_44337){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_44337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_44360 = f__12203__auto__.call(null);(statearr_44360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___44361);
return statearr_44360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___44466 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_44443){var state_val_44444 = (state_44443[1]);if((state_val_44444 === 1))
{var inst_44420 = 0;var state_44443__$1 = (function (){var statearr_44445 = state_44443;(statearr_44445[7] = inst_44420);
return statearr_44445;
})();var statearr_44446_44467 = state_44443__$1;(statearr_44446_44467[2] = null);
(statearr_44446_44467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44444 === 2))
{var inst_44420 = (state_44443[7]);var inst_44422 = (inst_44420 < n);var state_44443__$1 = state_44443;if(cljs.core.truth_(inst_44422))
{var statearr_44447_44468 = state_44443__$1;(statearr_44447_44468[1] = 4);
} else
{var statearr_44448_44469 = state_44443__$1;(statearr_44448_44469[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44444 === 3))
{var inst_44440 = (state_44443[2]);var inst_44441 = cljs.core.async.close_BANG_.call(null,out);var state_44443__$1 = (function (){var statearr_44449 = state_44443;(statearr_44449[8] = inst_44440);
return statearr_44449;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44443__$1,inst_44441);
} else
{if((state_val_44444 === 4))
{var state_44443__$1 = state_44443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44443__$1,7,ch);
} else
{if((state_val_44444 === 5))
{var state_44443__$1 = state_44443;var statearr_44450_44470 = state_44443__$1;(statearr_44450_44470[2] = null);
(statearr_44450_44470[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44444 === 6))
{var inst_44438 = (state_44443[2]);var state_44443__$1 = state_44443;var statearr_44451_44471 = state_44443__$1;(statearr_44451_44471[2] = inst_44438);
(statearr_44451_44471[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44444 === 7))
{var inst_44425 = (state_44443[9]);var inst_44425__$1 = (state_44443[2]);var inst_44426 = (inst_44425__$1 == null);var inst_44427 = cljs.core.not.call(null,inst_44426);var state_44443__$1 = (function (){var statearr_44452 = state_44443;(statearr_44452[9] = inst_44425__$1);
return statearr_44452;
})();if(inst_44427)
{var statearr_44453_44472 = state_44443__$1;(statearr_44453_44472[1] = 8);
} else
{var statearr_44454_44473 = state_44443__$1;(statearr_44454_44473[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44444 === 8))
{var inst_44425 = (state_44443[9]);var state_44443__$1 = state_44443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44443__$1,11,out,inst_44425);
} else
{if((state_val_44444 === 9))
{var state_44443__$1 = state_44443;var statearr_44455_44474 = state_44443__$1;(statearr_44455_44474[2] = null);
(statearr_44455_44474[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44444 === 10))
{var inst_44435 = (state_44443[2]);var state_44443__$1 = state_44443;var statearr_44456_44475 = state_44443__$1;(statearr_44456_44475[2] = inst_44435);
(statearr_44456_44475[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44444 === 11))
{var inst_44420 = (state_44443[7]);var inst_44430 = (state_44443[2]);var inst_44431 = (inst_44420 + 1);var inst_44420__$1 = inst_44431;var state_44443__$1 = (function (){var statearr_44457 = state_44443;(statearr_44457[10] = inst_44430);
(statearr_44457[7] = inst_44420__$1);
return statearr_44457;
})();var statearr_44458_44476 = state_44443__$1;(statearr_44458_44476[2] = null);
(statearr_44458_44476[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_44462 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_44462[0] = state_machine__12133__auto__);
(statearr_44462[1] = 1);
return statearr_44462;
});
var state_machine__12133__auto____1 = (function (state_44443){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_44443);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e44463){if((e44463 instanceof Object))
{var ex__12136__auto__ = e44463;var statearr_44464_44477 = state_44443;(statearr_44464_44477[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44443);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44478 = state_44443;
state_44443 = G__44478;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_44443){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_44443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_44465 = f__12203__auto__.call(null);(statearr_44465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___44466);
return statearr_44465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___44575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_44550){var state_val_44551 = (state_44550[1]);if((state_val_44551 === 1))
{var inst_44527 = null;var state_44550__$1 = (function (){var statearr_44552 = state_44550;(statearr_44552[7] = inst_44527);
return statearr_44552;
})();var statearr_44553_44576 = state_44550__$1;(statearr_44553_44576[2] = null);
(statearr_44553_44576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44551 === 2))
{var state_44550__$1 = state_44550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44550__$1,4,ch);
} else
{if((state_val_44551 === 3))
{var inst_44547 = (state_44550[2]);var inst_44548 = cljs.core.async.close_BANG_.call(null,out);var state_44550__$1 = (function (){var statearr_44554 = state_44550;(statearr_44554[8] = inst_44547);
return statearr_44554;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44550__$1,inst_44548);
} else
{if((state_val_44551 === 4))
{var inst_44530 = (state_44550[9]);var inst_44530__$1 = (state_44550[2]);var inst_44531 = (inst_44530__$1 == null);var inst_44532 = cljs.core.not.call(null,inst_44531);var state_44550__$1 = (function (){var statearr_44555 = state_44550;(statearr_44555[9] = inst_44530__$1);
return statearr_44555;
})();if(inst_44532)
{var statearr_44556_44577 = state_44550__$1;(statearr_44556_44577[1] = 5);
} else
{var statearr_44557_44578 = state_44550__$1;(statearr_44557_44578[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44551 === 5))
{var inst_44530 = (state_44550[9]);var inst_44527 = (state_44550[7]);var inst_44534 = cljs.core._EQ_.call(null,inst_44530,inst_44527);var state_44550__$1 = state_44550;if(inst_44534)
{var statearr_44558_44579 = state_44550__$1;(statearr_44558_44579[1] = 8);
} else
{var statearr_44559_44580 = state_44550__$1;(statearr_44559_44580[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44551 === 6))
{var state_44550__$1 = state_44550;var statearr_44561_44581 = state_44550__$1;(statearr_44561_44581[2] = null);
(statearr_44561_44581[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44551 === 7))
{var inst_44545 = (state_44550[2]);var state_44550__$1 = state_44550;var statearr_44562_44582 = state_44550__$1;(statearr_44562_44582[2] = inst_44545);
(statearr_44562_44582[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44551 === 8))
{var inst_44527 = (state_44550[7]);var tmp44560 = inst_44527;var inst_44527__$1 = tmp44560;var state_44550__$1 = (function (){var statearr_44563 = state_44550;(statearr_44563[7] = inst_44527__$1);
return statearr_44563;
})();var statearr_44564_44583 = state_44550__$1;(statearr_44564_44583[2] = null);
(statearr_44564_44583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44551 === 9))
{var inst_44530 = (state_44550[9]);var state_44550__$1 = state_44550;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44550__$1,11,out,inst_44530);
} else
{if((state_val_44551 === 10))
{var inst_44542 = (state_44550[2]);var state_44550__$1 = state_44550;var statearr_44565_44584 = state_44550__$1;(statearr_44565_44584[2] = inst_44542);
(statearr_44565_44584[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44551 === 11))
{var inst_44530 = (state_44550[9]);var inst_44539 = (state_44550[2]);var inst_44527 = inst_44530;var state_44550__$1 = (function (){var statearr_44566 = state_44550;(statearr_44566[10] = inst_44539);
(statearr_44566[7] = inst_44527);
return statearr_44566;
})();var statearr_44567_44585 = state_44550__$1;(statearr_44567_44585[2] = null);
(statearr_44567_44585[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_44571 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_44571[0] = state_machine__12133__auto__);
(statearr_44571[1] = 1);
return statearr_44571;
});
var state_machine__12133__auto____1 = (function (state_44550){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_44550);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e44572){if((e44572 instanceof Object))
{var ex__12136__auto__ = e44572;var statearr_44573_44586 = state_44550;(statearr_44573_44586[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44550);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44587 = state_44550;
state_44550 = G__44587;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_44550){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_44550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_44574 = f__12203__auto__.call(null);(statearr_44574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___44575);
return statearr_44574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___44722 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_44692){var state_val_44693 = (state_44692[1]);if((state_val_44693 === 1))
{var inst_44655 = (new Array(n));var inst_44656 = inst_44655;var inst_44657 = 0;var state_44692__$1 = (function (){var statearr_44694 = state_44692;(statearr_44694[7] = inst_44656);
(statearr_44694[8] = inst_44657);
return statearr_44694;
})();var statearr_44695_44723 = state_44692__$1;(statearr_44695_44723[2] = null);
(statearr_44695_44723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44693 === 2))
{var state_44692__$1 = state_44692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44692__$1,4,ch);
} else
{if((state_val_44693 === 3))
{var inst_44690 = (state_44692[2]);var state_44692__$1 = state_44692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44692__$1,inst_44690);
} else
{if((state_val_44693 === 4))
{var inst_44660 = (state_44692[9]);var inst_44660__$1 = (state_44692[2]);var inst_44661 = (inst_44660__$1 == null);var inst_44662 = cljs.core.not.call(null,inst_44661);var state_44692__$1 = (function (){var statearr_44696 = state_44692;(statearr_44696[9] = inst_44660__$1);
return statearr_44696;
})();if(inst_44662)
{var statearr_44697_44724 = state_44692__$1;(statearr_44697_44724[1] = 5);
} else
{var statearr_44698_44725 = state_44692__$1;(statearr_44698_44725[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44693 === 5))
{var inst_44660 = (state_44692[9]);var inst_44665 = (state_44692[10]);var inst_44656 = (state_44692[7]);var inst_44657 = (state_44692[8]);var inst_44664 = (inst_44656[inst_44657] = inst_44660);var inst_44665__$1 = (inst_44657 + 1);var inst_44666 = (inst_44665__$1 < n);var state_44692__$1 = (function (){var statearr_44699 = state_44692;(statearr_44699[10] = inst_44665__$1);
(statearr_44699[11] = inst_44664);
return statearr_44699;
})();if(cljs.core.truth_(inst_44666))
{var statearr_44700_44726 = state_44692__$1;(statearr_44700_44726[1] = 8);
} else
{var statearr_44701_44727 = state_44692__$1;(statearr_44701_44727[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44693 === 6))
{var inst_44657 = (state_44692[8]);var inst_44678 = (inst_44657 > 0);var state_44692__$1 = state_44692;if(cljs.core.truth_(inst_44678))
{var statearr_44703_44728 = state_44692__$1;(statearr_44703_44728[1] = 12);
} else
{var statearr_44704_44729 = state_44692__$1;(statearr_44704_44729[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44693 === 7))
{var inst_44688 = (state_44692[2]);var state_44692__$1 = state_44692;var statearr_44705_44730 = state_44692__$1;(statearr_44705_44730[2] = inst_44688);
(statearr_44705_44730[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44693 === 8))
{var inst_44665 = (state_44692[10]);var inst_44656 = (state_44692[7]);var tmp44702 = inst_44656;var inst_44656__$1 = tmp44702;var inst_44657 = inst_44665;var state_44692__$1 = (function (){var statearr_44706 = state_44692;(statearr_44706[7] = inst_44656__$1);
(statearr_44706[8] = inst_44657);
return statearr_44706;
})();var statearr_44707_44731 = state_44692__$1;(statearr_44707_44731[2] = null);
(statearr_44707_44731[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44693 === 9))
{var inst_44656 = (state_44692[7]);var inst_44670 = cljs.core.vec.call(null,inst_44656);var state_44692__$1 = state_44692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44692__$1,11,out,inst_44670);
} else
{if((state_val_44693 === 10))
{var inst_44676 = (state_44692[2]);var state_44692__$1 = state_44692;var statearr_44708_44732 = state_44692__$1;(statearr_44708_44732[2] = inst_44676);
(statearr_44708_44732[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44693 === 11))
{var inst_44672 = (state_44692[2]);var inst_44673 = (new Array(n));var inst_44656 = inst_44673;var inst_44657 = 0;var state_44692__$1 = (function (){var statearr_44709 = state_44692;(statearr_44709[12] = inst_44672);
(statearr_44709[7] = inst_44656);
(statearr_44709[8] = inst_44657);
return statearr_44709;
})();var statearr_44710_44733 = state_44692__$1;(statearr_44710_44733[2] = null);
(statearr_44710_44733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44693 === 12))
{var inst_44656 = (state_44692[7]);var inst_44680 = cljs.core.vec.call(null,inst_44656);var state_44692__$1 = state_44692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44692__$1,15,out,inst_44680);
} else
{if((state_val_44693 === 13))
{var state_44692__$1 = state_44692;var statearr_44711_44734 = state_44692__$1;(statearr_44711_44734[2] = null);
(statearr_44711_44734[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44693 === 14))
{var inst_44685 = (state_44692[2]);var inst_44686 = cljs.core.async.close_BANG_.call(null,out);var state_44692__$1 = (function (){var statearr_44712 = state_44692;(statearr_44712[13] = inst_44685);
return statearr_44712;
})();var statearr_44713_44735 = state_44692__$1;(statearr_44713_44735[2] = inst_44686);
(statearr_44713_44735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44693 === 15))
{var inst_44682 = (state_44692[2]);var state_44692__$1 = state_44692;var statearr_44714_44736 = state_44692__$1;(statearr_44714_44736[2] = inst_44682);
(statearr_44714_44736[1] = 14);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_44718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44718[0] = state_machine__12133__auto__);
(statearr_44718[1] = 1);
return statearr_44718;
});
var state_machine__12133__auto____1 = (function (state_44692){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_44692);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e44719){if((e44719 instanceof Object))
{var ex__12136__auto__ = e44719;var statearr_44720_44737 = state_44692;(statearr_44720_44737[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44692);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44738 = state_44692;
state_44692 = G__44738;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_44692){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_44692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_44721 = f__12203__auto__.call(null);(statearr_44721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___44722);
return statearr_44721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___44881 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_44851){var state_val_44852 = (state_44851[1]);if((state_val_44852 === 1))
{var inst_44810 = [];var inst_44811 = inst_44810;var inst_44812 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_44851__$1 = (function (){var statearr_44853 = state_44851;(statearr_44853[7] = inst_44812);
(statearr_44853[8] = inst_44811);
return statearr_44853;
})();var statearr_44854_44882 = state_44851__$1;(statearr_44854_44882[2] = null);
(statearr_44854_44882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44852 === 2))
{var state_44851__$1 = state_44851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44851__$1,4,ch);
} else
{if((state_val_44852 === 3))
{var inst_44849 = (state_44851[2]);var state_44851__$1 = state_44851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44851__$1,inst_44849);
} else
{if((state_val_44852 === 4))
{var inst_44815 = (state_44851[9]);var inst_44815__$1 = (state_44851[2]);var inst_44816 = (inst_44815__$1 == null);var inst_44817 = cljs.core.not.call(null,inst_44816);var state_44851__$1 = (function (){var statearr_44855 = state_44851;(statearr_44855[9] = inst_44815__$1);
return statearr_44855;
})();if(inst_44817)
{var statearr_44856_44883 = state_44851__$1;(statearr_44856_44883[1] = 5);
} else
{var statearr_44857_44884 = state_44851__$1;(statearr_44857_44884[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44852 === 5))
{var inst_44812 = (state_44851[7]);var inst_44815 = (state_44851[9]);var inst_44819 = (state_44851[10]);var inst_44819__$1 = f.call(null,inst_44815);var inst_44820 = cljs.core._EQ_.call(null,inst_44819__$1,inst_44812);var inst_44821 = cljs.core.keyword_identical_QMARK_.call(null,inst_44812,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_44822 = (inst_44820) || (inst_44821);var state_44851__$1 = (function (){var statearr_44858 = state_44851;(statearr_44858[10] = inst_44819__$1);
return statearr_44858;
})();if(cljs.core.truth_(inst_44822))
{var statearr_44859_44885 = state_44851__$1;(statearr_44859_44885[1] = 8);
} else
{var statearr_44860_44886 = state_44851__$1;(statearr_44860_44886[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44852 === 6))
{var inst_44811 = (state_44851[8]);var inst_44836 = inst_44811.length;var inst_44837 = (inst_44836 > 0);var state_44851__$1 = state_44851;if(cljs.core.truth_(inst_44837))
{var statearr_44862_44887 = state_44851__$1;(statearr_44862_44887[1] = 12);
} else
{var statearr_44863_44888 = state_44851__$1;(statearr_44863_44888[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44852 === 7))
{var inst_44847 = (state_44851[2]);var state_44851__$1 = state_44851;var statearr_44864_44889 = state_44851__$1;(statearr_44864_44889[2] = inst_44847);
(statearr_44864_44889[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44852 === 8))
{var inst_44815 = (state_44851[9]);var inst_44819 = (state_44851[10]);var inst_44811 = (state_44851[8]);var inst_44824 = inst_44811.push(inst_44815);var tmp44861 = inst_44811;var inst_44811__$1 = tmp44861;var inst_44812 = inst_44819;var state_44851__$1 = (function (){var statearr_44865 = state_44851;(statearr_44865[7] = inst_44812);
(statearr_44865[11] = inst_44824);
(statearr_44865[8] = inst_44811__$1);
return statearr_44865;
})();var statearr_44866_44890 = state_44851__$1;(statearr_44866_44890[2] = null);
(statearr_44866_44890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44852 === 9))
{var inst_44811 = (state_44851[8]);var inst_44827 = cljs.core.vec.call(null,inst_44811);var state_44851__$1 = state_44851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44851__$1,11,out,inst_44827);
} else
{if((state_val_44852 === 10))
{var inst_44834 = (state_44851[2]);var state_44851__$1 = state_44851;var statearr_44867_44891 = state_44851__$1;(statearr_44867_44891[2] = inst_44834);
(statearr_44867_44891[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44852 === 11))
{var inst_44815 = (state_44851[9]);var inst_44819 = (state_44851[10]);var inst_44829 = (state_44851[2]);var inst_44830 = [];var inst_44831 = inst_44830.push(inst_44815);var inst_44811 = inst_44830;var inst_44812 = inst_44819;var state_44851__$1 = (function (){var statearr_44868 = state_44851;(statearr_44868[7] = inst_44812);
(statearr_44868[12] = inst_44829);
(statearr_44868[13] = inst_44831);
(statearr_44868[8] = inst_44811);
return statearr_44868;
})();var statearr_44869_44892 = state_44851__$1;(statearr_44869_44892[2] = null);
(statearr_44869_44892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44852 === 12))
{var inst_44811 = (state_44851[8]);var inst_44839 = cljs.core.vec.call(null,inst_44811);var state_44851__$1 = state_44851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44851__$1,15,out,inst_44839);
} else
{if((state_val_44852 === 13))
{var state_44851__$1 = state_44851;var statearr_44870_44893 = state_44851__$1;(statearr_44870_44893[2] = null);
(statearr_44870_44893[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44852 === 14))
{var inst_44844 = (state_44851[2]);var inst_44845 = cljs.core.async.close_BANG_.call(null,out);var state_44851__$1 = (function (){var statearr_44871 = state_44851;(statearr_44871[14] = inst_44844);
return statearr_44871;
})();var statearr_44872_44894 = state_44851__$1;(statearr_44872_44894[2] = inst_44845);
(statearr_44872_44894[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44852 === 15))
{var inst_44841 = (state_44851[2]);var state_44851__$1 = state_44851;var statearr_44873_44895 = state_44851__$1;(statearr_44873_44895[2] = inst_44841);
(statearr_44873_44895[1] = 14);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_44877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44877[0] = state_machine__12133__auto__);
(statearr_44877[1] = 1);
return statearr_44877;
});
var state_machine__12133__auto____1 = (function (state_44851){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_44851);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e44878){if((e44878 instanceof Object))
{var ex__12136__auto__ = e44878;var statearr_44879_44896 = state_44851;(statearr_44879_44896[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44851);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44897 = state_44851;
state_44851 = G__44897;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_44851){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_44851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_44880 = f__12203__auto__.call(null);(statearr_44880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___44881);
return statearr_44880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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