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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t205362 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t205362 = (function (f,fn_handler,meta205363){
this.f = f;
this.fn_handler = fn_handler;
this.meta205363 = meta205363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t205362.cljs$lang$type = true;
cljs.core.async.t205362.cljs$lang$ctorStr = "cljs.core.async/t205362";
cljs.core.async.t205362.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t205362");
});
cljs.core.async.t205362.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t205362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t205362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t205362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_205364){var self__ = this;
var _205364__$1 = this;return self__.meta205363;
});
cljs.core.async.t205362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_205364,meta205363__$1){var self__ = this;
var _205364__$1 = this;return (new cljs.core.async.t205362(self__.f,self__.fn_handler,meta205363__$1));
});
cljs.core.async.__GT_t205362 = (function __GT_t205362(f__$1,fn_handler__$1,meta205363){return (new cljs.core.async.t205362(f__$1,fn_handler__$1,meta205363));
});
}
return (new cljs.core.async.t205362(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__205366 = buff;if(G__205366)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__205366.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__205366.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__205366);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__205366);
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
{var val_205367 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_205367);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_205367);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___205368 = n;var x_205369 = 0;while(true){
if((x_205369 < n__8553__auto___205368))
{(a[x_205369] = 0);
{
var G__205370 = (x_205369 + 1);
x_205369 = G__205370;
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
var G__205371 = (i + 1);
i = G__205371;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t205375 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t205375 = (function (flag,alt_flag,meta205376){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta205376 = meta205376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t205375.cljs$lang$type = true;
cljs.core.async.t205375.cljs$lang$ctorStr = "cljs.core.async/t205375";
cljs.core.async.t205375.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t205375");
});
cljs.core.async.t205375.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t205375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t205375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t205375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_205377){var self__ = this;
var _205377__$1 = this;return self__.meta205376;
});
cljs.core.async.t205375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_205377,meta205376__$1){var self__ = this;
var _205377__$1 = this;return (new cljs.core.async.t205375(self__.flag,self__.alt_flag,meta205376__$1));
});
cljs.core.async.__GT_t205375 = (function __GT_t205375(flag__$1,alt_flag__$1,meta205376){return (new cljs.core.async.t205375(flag__$1,alt_flag__$1,meta205376));
});
}
return (new cljs.core.async.t205375(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t205381 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t205381 = (function (cb,flag,alt_handler,meta205382){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta205382 = meta205382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t205381.cljs$lang$type = true;
cljs.core.async.t205381.cljs$lang$ctorStr = "cljs.core.async/t205381";
cljs.core.async.t205381.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t205381");
});
cljs.core.async.t205381.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t205381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t205381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t205381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_205383){var self__ = this;
var _205383__$1 = this;return self__.meta205382;
});
cljs.core.async.t205381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_205383,meta205382__$1){var self__ = this;
var _205383__$1 = this;return (new cljs.core.async.t205381(self__.cb,self__.flag,self__.alt_handler,meta205382__$1));
});
cljs.core.async.__GT_t205381 = (function __GT_t205381(cb__$1,flag__$1,alt_handler__$1,meta205382){return (new cljs.core.async.t205381(cb__$1,flag__$1,alt_handler__$1,meta205382));
});
}
return (new cljs.core.async.t205381(cb,flag,alt_handler,null));
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
return (function (p1__205384_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__205384_SHARP_,port], null));
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
var G__205385 = (i + 1);
i = G__205385;
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
var alts_BANG___delegate = function (ports,p__205386){var map__205388 = p__205386;var map__205388__$1 = ((cljs.core.seq_QMARK_.call(null,map__205388))?cljs.core.apply.call(null,cljs.core.hash_map,map__205388):map__205388);var opts = map__205388__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__205386 = null;if (arguments.length > 1) {
  p__205386 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__205386);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__205389){
var ports = cljs.core.first(arglist__205389);
var p__205386 = cljs.core.rest(arglist__205389);
return alts_BANG___delegate(ports,p__205386);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t205397 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t205397 = (function (ch,f,map_LT_,meta205398){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta205398 = meta205398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t205397.cljs$lang$type = true;
cljs.core.async.t205397.cljs$lang$ctorStr = "cljs.core.async/t205397";
cljs.core.async.t205397.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t205397");
});
cljs.core.async.t205397.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t205397.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t205397.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t205397.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t205400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t205400 = (function (fn1,_,meta205398,ch,f,map_LT_,meta205401){
this.fn1 = fn1;
this._ = _;
this.meta205398 = meta205398;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta205401 = meta205401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t205400.cljs$lang$type = true;
cljs.core.async.t205400.cljs$lang$ctorStr = "cljs.core.async/t205400";
cljs.core.async.t205400.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t205400");
});
cljs.core.async.t205400.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t205400.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t205400.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t205400.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__205390_SHARP_){return f1.call(null,(((p1__205390_SHARP_ == null))?null:self__.f.call(null,p1__205390_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t205400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_205402){var self__ = this;
var _205402__$1 = this;return self__.meta205401;
});
cljs.core.async.t205400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_205402,meta205401__$1){var self__ = this;
var _205402__$1 = this;return (new cljs.core.async.t205400(self__.fn1,self__._,self__.meta205398,self__.ch,self__.f,self__.map_LT_,meta205401__$1));
});
cljs.core.async.__GT_t205400 = (function __GT_t205400(fn1__$1,___$2,meta205398__$1,ch__$2,f__$2,map_LT___$2,meta205401){return (new cljs.core.async.t205400(fn1__$1,___$2,meta205398__$1,ch__$2,f__$2,map_LT___$2,meta205401));
});
}
return (new cljs.core.async.t205400(fn1,___$1,self__.meta205398,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t205397.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t205397.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t205397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_205399){var self__ = this;
var _205399__$1 = this;return self__.meta205398;
});
cljs.core.async.t205397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_205399,meta205398__$1){var self__ = this;
var _205399__$1 = this;return (new cljs.core.async.t205397(self__.ch,self__.f,self__.map_LT_,meta205398__$1));
});
cljs.core.async.__GT_t205397 = (function __GT_t205397(ch__$1,f__$1,map_LT___$1,meta205398){return (new cljs.core.async.t205397(ch__$1,f__$1,map_LT___$1,meta205398));
});
}
return (new cljs.core.async.t205397(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t205406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t205406 = (function (ch,f,map_GT_,meta205407){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta205407 = meta205407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t205406.cljs$lang$type = true;
cljs.core.async.t205406.cljs$lang$ctorStr = "cljs.core.async/t205406";
cljs.core.async.t205406.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t205406");
});
cljs.core.async.t205406.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t205406.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t205406.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t205406.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t205406.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t205406.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t205406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_205408){var self__ = this;
var _205408__$1 = this;return self__.meta205407;
});
cljs.core.async.t205406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_205408,meta205407__$1){var self__ = this;
var _205408__$1 = this;return (new cljs.core.async.t205406(self__.ch,self__.f,self__.map_GT_,meta205407__$1));
});
cljs.core.async.__GT_t205406 = (function __GT_t205406(ch__$1,f__$1,map_GT___$1,meta205407){return (new cljs.core.async.t205406(ch__$1,f__$1,map_GT___$1,meta205407));
});
}
return (new cljs.core.async.t205406(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t205412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t205412 = (function (ch,p,filter_GT_,meta205413){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta205413 = meta205413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t205412.cljs$lang$type = true;
cljs.core.async.t205412.cljs$lang$ctorStr = "cljs.core.async/t205412";
cljs.core.async.t205412.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t205412");
});
cljs.core.async.t205412.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t205412.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t205412.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t205412.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t205412.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t205412.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t205412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_205414){var self__ = this;
var _205414__$1 = this;return self__.meta205413;
});
cljs.core.async.t205412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_205414,meta205413__$1){var self__ = this;
var _205414__$1 = this;return (new cljs.core.async.t205412(self__.ch,self__.p,self__.filter_GT_,meta205413__$1));
});
cljs.core.async.__GT_t205412 = (function __GT_t205412(ch__$1,p__$1,filter_GT___$1,meta205413){return (new cljs.core.async.t205412(ch__$1,p__$1,filter_GT___$1,meta205413));
});
}
return (new cljs.core.async.t205412(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___205497 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_205476){var state_val_205477 = (state_205476[1]);if((state_val_205477 === 1))
{var state_205476__$1 = state_205476;var statearr_205478_205498 = state_205476__$1;(statearr_205478_205498[2] = null);
(statearr_205478_205498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205477 === 2))
{var state_205476__$1 = state_205476;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205476__$1,4,ch);
} else
{if((state_val_205477 === 3))
{var inst_205474 = (state_205476[2]);var state_205476__$1 = state_205476;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205476__$1,inst_205474);
} else
{if((state_val_205477 === 4))
{var inst_205458 = (state_205476[7]);var inst_205458__$1 = (state_205476[2]);var inst_205459 = (inst_205458__$1 == null);var state_205476__$1 = (function (){var statearr_205479 = state_205476;(statearr_205479[7] = inst_205458__$1);
return statearr_205479;
})();if(cljs.core.truth_(inst_205459))
{var statearr_205480_205499 = state_205476__$1;(statearr_205480_205499[1] = 5);
} else
{var statearr_205481_205500 = state_205476__$1;(statearr_205481_205500[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205477 === 5))
{var inst_205461 = cljs.core.async.close_BANG_.call(null,out);var state_205476__$1 = state_205476;var statearr_205482_205501 = state_205476__$1;(statearr_205482_205501[2] = inst_205461);
(statearr_205482_205501[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205477 === 6))
{var inst_205458 = (state_205476[7]);var inst_205463 = p.call(null,inst_205458);var state_205476__$1 = state_205476;if(cljs.core.truth_(inst_205463))
{var statearr_205483_205502 = state_205476__$1;(statearr_205483_205502[1] = 8);
} else
{var statearr_205484_205503 = state_205476__$1;(statearr_205484_205503[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205477 === 7))
{var inst_205472 = (state_205476[2]);var state_205476__$1 = state_205476;var statearr_205485_205504 = state_205476__$1;(statearr_205485_205504[2] = inst_205472);
(statearr_205485_205504[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205477 === 8))
{var inst_205458 = (state_205476[7]);var state_205476__$1 = state_205476;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205476__$1,11,out,inst_205458);
} else
{if((state_val_205477 === 9))
{var state_205476__$1 = state_205476;var statearr_205486_205505 = state_205476__$1;(statearr_205486_205505[2] = null);
(statearr_205486_205505[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205477 === 10))
{var inst_205469 = (state_205476[2]);var state_205476__$1 = (function (){var statearr_205487 = state_205476;(statearr_205487[8] = inst_205469);
return statearr_205487;
})();var statearr_205488_205506 = state_205476__$1;(statearr_205488_205506[2] = null);
(statearr_205488_205506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205477 === 11))
{var inst_205466 = (state_205476[2]);var state_205476__$1 = state_205476;var statearr_205489_205507 = state_205476__$1;(statearr_205489_205507[2] = inst_205466);
(statearr_205489_205507[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_205493 = (new Array(9));(statearr_205493[0] = state_machine__10214__auto__);
(statearr_205493[1] = 1);
return statearr_205493;
});
var state_machine__10214__auto____1 = (function (state_205476){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_205476);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e205494){if((e205494 instanceof Object))
{var ex__10217__auto__ = e205494;var statearr_205495_205508 = state_205476;(statearr_205495_205508[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205476);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__205509 = state_205476;
state_205476 = G__205509;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_205476){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_205476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_205496 = f__10284__auto__.call(null);(statearr_205496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___205497);
return statearr_205496;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_205661){var state_val_205662 = (state_205661[1]);if((state_val_205662 === 1))
{var state_205661__$1 = state_205661;var statearr_205663_205700 = state_205661__$1;(statearr_205663_205700[2] = null);
(statearr_205663_205700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 2))
{var state_205661__$1 = state_205661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205661__$1,4,in$);
} else
{if((state_val_205662 === 3))
{var inst_205659 = (state_205661[2]);var state_205661__$1 = state_205661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205661__$1,inst_205659);
} else
{if((state_val_205662 === 4))
{var inst_205607 = (state_205661[7]);var inst_205607__$1 = (state_205661[2]);var inst_205608 = (inst_205607__$1 == null);var state_205661__$1 = (function (){var statearr_205664 = state_205661;(statearr_205664[7] = inst_205607__$1);
return statearr_205664;
})();if(cljs.core.truth_(inst_205608))
{var statearr_205665_205701 = state_205661__$1;(statearr_205665_205701[1] = 5);
} else
{var statearr_205666_205702 = state_205661__$1;(statearr_205666_205702[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 5))
{var inst_205610 = cljs.core.async.close_BANG_.call(null,out);var state_205661__$1 = state_205661;var statearr_205667_205703 = state_205661__$1;(statearr_205667_205703[2] = inst_205610);
(statearr_205667_205703[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 6))
{var inst_205607 = (state_205661[7]);var inst_205612 = f.call(null,inst_205607);var inst_205617 = cljs.core.seq.call(null,inst_205612);var inst_205618 = inst_205617;var inst_205619 = null;var inst_205620 = 0;var inst_205621 = 0;var state_205661__$1 = (function (){var statearr_205668 = state_205661;(statearr_205668[8] = inst_205620);
(statearr_205668[9] = inst_205621);
(statearr_205668[10] = inst_205618);
(statearr_205668[11] = inst_205619);
return statearr_205668;
})();var statearr_205669_205704 = state_205661__$1;(statearr_205669_205704[2] = null);
(statearr_205669_205704[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 7))
{var inst_205657 = (state_205661[2]);var state_205661__$1 = state_205661;var statearr_205670_205705 = state_205661__$1;(statearr_205670_205705[2] = inst_205657);
(statearr_205670_205705[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 8))
{var inst_205620 = (state_205661[8]);var inst_205621 = (state_205661[9]);var inst_205623 = (inst_205621 < inst_205620);var inst_205624 = inst_205623;var state_205661__$1 = state_205661;if(cljs.core.truth_(inst_205624))
{var statearr_205671_205706 = state_205661__$1;(statearr_205671_205706[1] = 10);
} else
{var statearr_205672_205707 = state_205661__$1;(statearr_205672_205707[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 9))
{var inst_205654 = (state_205661[2]);var state_205661__$1 = (function (){var statearr_205673 = state_205661;(statearr_205673[12] = inst_205654);
return statearr_205673;
})();var statearr_205674_205708 = state_205661__$1;(statearr_205674_205708[2] = null);
(statearr_205674_205708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 10))
{var inst_205621 = (state_205661[9]);var inst_205619 = (state_205661[11]);var inst_205626 = cljs.core._nth.call(null,inst_205619,inst_205621);var state_205661__$1 = state_205661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205661__$1,13,out,inst_205626);
} else
{if((state_val_205662 === 11))
{var inst_205632 = (state_205661[13]);var inst_205618 = (state_205661[10]);var inst_205632__$1 = cljs.core.seq.call(null,inst_205618);var state_205661__$1 = (function (){var statearr_205678 = state_205661;(statearr_205678[13] = inst_205632__$1);
return statearr_205678;
})();if(inst_205632__$1)
{var statearr_205679_205709 = state_205661__$1;(statearr_205679_205709[1] = 14);
} else
{var statearr_205680_205710 = state_205661__$1;(statearr_205680_205710[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 12))
{var inst_205652 = (state_205661[2]);var state_205661__$1 = state_205661;var statearr_205681_205711 = state_205661__$1;(statearr_205681_205711[2] = inst_205652);
(statearr_205681_205711[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 13))
{var inst_205620 = (state_205661[8]);var inst_205621 = (state_205661[9]);var inst_205618 = (state_205661[10]);var inst_205619 = (state_205661[11]);var inst_205628 = (state_205661[2]);var inst_205629 = (inst_205621 + 1);var tmp205675 = inst_205620;var tmp205676 = inst_205618;var tmp205677 = inst_205619;var inst_205618__$1 = tmp205676;var inst_205619__$1 = tmp205677;var inst_205620__$1 = tmp205675;var inst_205621__$1 = inst_205629;var state_205661__$1 = (function (){var statearr_205682 = state_205661;(statearr_205682[8] = inst_205620__$1);
(statearr_205682[9] = inst_205621__$1);
(statearr_205682[14] = inst_205628);
(statearr_205682[10] = inst_205618__$1);
(statearr_205682[11] = inst_205619__$1);
return statearr_205682;
})();var statearr_205683_205712 = state_205661__$1;(statearr_205683_205712[2] = null);
(statearr_205683_205712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 14))
{var inst_205632 = (state_205661[13]);var inst_205634 = cljs.core.chunked_seq_QMARK_.call(null,inst_205632);var state_205661__$1 = state_205661;if(inst_205634)
{var statearr_205684_205713 = state_205661__$1;(statearr_205684_205713[1] = 17);
} else
{var statearr_205685_205714 = state_205661__$1;(statearr_205685_205714[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 15))
{var state_205661__$1 = state_205661;var statearr_205686_205715 = state_205661__$1;(statearr_205686_205715[2] = null);
(statearr_205686_205715[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 16))
{var inst_205650 = (state_205661[2]);var state_205661__$1 = state_205661;var statearr_205687_205716 = state_205661__$1;(statearr_205687_205716[2] = inst_205650);
(statearr_205687_205716[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 17))
{var inst_205632 = (state_205661[13]);var inst_205636 = cljs.core.chunk_first.call(null,inst_205632);var inst_205637 = cljs.core.chunk_rest.call(null,inst_205632);var inst_205638 = cljs.core.count.call(null,inst_205636);var inst_205618 = inst_205637;var inst_205619 = inst_205636;var inst_205620 = inst_205638;var inst_205621 = 0;var state_205661__$1 = (function (){var statearr_205688 = state_205661;(statearr_205688[8] = inst_205620);
(statearr_205688[9] = inst_205621);
(statearr_205688[10] = inst_205618);
(statearr_205688[11] = inst_205619);
return statearr_205688;
})();var statearr_205689_205717 = state_205661__$1;(statearr_205689_205717[2] = null);
(statearr_205689_205717[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 18))
{var inst_205632 = (state_205661[13]);var inst_205641 = cljs.core.first.call(null,inst_205632);var state_205661__$1 = state_205661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205661__$1,20,out,inst_205641);
} else
{if((state_val_205662 === 19))
{var inst_205647 = (state_205661[2]);var state_205661__$1 = state_205661;var statearr_205690_205718 = state_205661__$1;(statearr_205690_205718[2] = inst_205647);
(statearr_205690_205718[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205662 === 20))
{var inst_205632 = (state_205661[13]);var inst_205643 = (state_205661[2]);var inst_205644 = cljs.core.next.call(null,inst_205632);var inst_205618 = inst_205644;var inst_205619 = null;var inst_205620 = 0;var inst_205621 = 0;var state_205661__$1 = (function (){var statearr_205691 = state_205661;(statearr_205691[8] = inst_205620);
(statearr_205691[9] = inst_205621);
(statearr_205691[10] = inst_205618);
(statearr_205691[15] = inst_205643);
(statearr_205691[11] = inst_205619);
return statearr_205691;
})();var statearr_205692_205719 = state_205661__$1;(statearr_205692_205719[2] = null);
(statearr_205692_205719[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_205696 = (new Array(16));(statearr_205696[0] = state_machine__10214__auto__);
(statearr_205696[1] = 1);
return statearr_205696;
});
var state_machine__10214__auto____1 = (function (state_205661){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_205661);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e205697){if((e205697 instanceof Object))
{var ex__10217__auto__ = e205697;var statearr_205698_205720 = state_205661;(statearr_205698_205720[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205661);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__205721 = state_205661;
state_205661 = G__205721;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_205661){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_205661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_205699 = f__10284__auto__.call(null);(statearr_205699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_205699;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___205802 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_205781){var state_val_205782 = (state_205781[1]);if((state_val_205782 === 1))
{var state_205781__$1 = state_205781;var statearr_205783_205803 = state_205781__$1;(statearr_205783_205803[2] = null);
(statearr_205783_205803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205782 === 2))
{var state_205781__$1 = state_205781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205781__$1,4,from);
} else
{if((state_val_205782 === 3))
{var inst_205779 = (state_205781[2]);var state_205781__$1 = state_205781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205781__$1,inst_205779);
} else
{if((state_val_205782 === 4))
{var inst_205764 = (state_205781[7]);var inst_205764__$1 = (state_205781[2]);var inst_205765 = (inst_205764__$1 == null);var state_205781__$1 = (function (){var statearr_205784 = state_205781;(statearr_205784[7] = inst_205764__$1);
return statearr_205784;
})();if(cljs.core.truth_(inst_205765))
{var statearr_205785_205804 = state_205781__$1;(statearr_205785_205804[1] = 5);
} else
{var statearr_205786_205805 = state_205781__$1;(statearr_205786_205805[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205782 === 5))
{var state_205781__$1 = state_205781;if(cljs.core.truth_(close_QMARK_))
{var statearr_205787_205806 = state_205781__$1;(statearr_205787_205806[1] = 8);
} else
{var statearr_205788_205807 = state_205781__$1;(statearr_205788_205807[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205782 === 6))
{var inst_205764 = (state_205781[7]);var state_205781__$1 = state_205781;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205781__$1,11,to,inst_205764);
} else
{if((state_val_205782 === 7))
{var inst_205777 = (state_205781[2]);var state_205781__$1 = state_205781;var statearr_205789_205808 = state_205781__$1;(statearr_205789_205808[2] = inst_205777);
(statearr_205789_205808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205782 === 8))
{var inst_205768 = cljs.core.async.close_BANG_.call(null,to);var state_205781__$1 = state_205781;var statearr_205790_205809 = state_205781__$1;(statearr_205790_205809[2] = inst_205768);
(statearr_205790_205809[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205782 === 9))
{var state_205781__$1 = state_205781;var statearr_205791_205810 = state_205781__$1;(statearr_205791_205810[2] = null);
(statearr_205791_205810[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205782 === 10))
{var inst_205771 = (state_205781[2]);var state_205781__$1 = state_205781;var statearr_205792_205811 = state_205781__$1;(statearr_205792_205811[2] = inst_205771);
(statearr_205792_205811[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205782 === 11))
{var inst_205774 = (state_205781[2]);var state_205781__$1 = (function (){var statearr_205793 = state_205781;(statearr_205793[8] = inst_205774);
return statearr_205793;
})();var statearr_205794_205812 = state_205781__$1;(statearr_205794_205812[2] = null);
(statearr_205794_205812[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_205798 = (new Array(9));(statearr_205798[0] = state_machine__10214__auto__);
(statearr_205798[1] = 1);
return statearr_205798;
});
var state_machine__10214__auto____1 = (function (state_205781){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_205781);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e205799){if((e205799 instanceof Object))
{var ex__10217__auto__ = e205799;var statearr_205800_205813 = state_205781;(statearr_205800_205813[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205781);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__205814 = state_205781;
state_205781 = G__205814;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_205781){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_205781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_205801 = f__10284__auto__.call(null);(statearr_205801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___205802);
return statearr_205801;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___205901 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_205879){var state_val_205880 = (state_205879[1]);if((state_val_205880 === 1))
{var state_205879__$1 = state_205879;var statearr_205881_205902 = state_205879__$1;(statearr_205881_205902[2] = null);
(statearr_205881_205902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205880 === 2))
{var state_205879__$1 = state_205879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205879__$1,4,ch);
} else
{if((state_val_205880 === 3))
{var inst_205877 = (state_205879[2]);var state_205879__$1 = state_205879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205879__$1,inst_205877);
} else
{if((state_val_205880 === 4))
{var inst_205860 = (state_205879[7]);var inst_205860__$1 = (state_205879[2]);var inst_205861 = (inst_205860__$1 == null);var state_205879__$1 = (function (){var statearr_205882 = state_205879;(statearr_205882[7] = inst_205860__$1);
return statearr_205882;
})();if(cljs.core.truth_(inst_205861))
{var statearr_205883_205903 = state_205879__$1;(statearr_205883_205903[1] = 5);
} else
{var statearr_205884_205904 = state_205879__$1;(statearr_205884_205904[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205880 === 5))
{var inst_205863 = cljs.core.async.close_BANG_.call(null,tc);var inst_205864 = cljs.core.async.close_BANG_.call(null,fc);var state_205879__$1 = (function (){var statearr_205885 = state_205879;(statearr_205885[8] = inst_205863);
return statearr_205885;
})();var statearr_205886_205905 = state_205879__$1;(statearr_205886_205905[2] = inst_205864);
(statearr_205886_205905[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205880 === 6))
{var inst_205860 = (state_205879[7]);var inst_205866 = p.call(null,inst_205860);var state_205879__$1 = state_205879;if(cljs.core.truth_(inst_205866))
{var statearr_205887_205906 = state_205879__$1;(statearr_205887_205906[1] = 9);
} else
{var statearr_205888_205907 = state_205879__$1;(statearr_205888_205907[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205880 === 7))
{var inst_205875 = (state_205879[2]);var state_205879__$1 = state_205879;var statearr_205889_205908 = state_205879__$1;(statearr_205889_205908[2] = inst_205875);
(statearr_205889_205908[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205880 === 8))
{var inst_205872 = (state_205879[2]);var state_205879__$1 = (function (){var statearr_205890 = state_205879;(statearr_205890[9] = inst_205872);
return statearr_205890;
})();var statearr_205891_205909 = state_205879__$1;(statearr_205891_205909[2] = null);
(statearr_205891_205909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205880 === 9))
{var state_205879__$1 = state_205879;var statearr_205892_205910 = state_205879__$1;(statearr_205892_205910[2] = tc);
(statearr_205892_205910[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205880 === 10))
{var state_205879__$1 = state_205879;var statearr_205893_205911 = state_205879__$1;(statearr_205893_205911[2] = fc);
(statearr_205893_205911[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205880 === 11))
{var inst_205860 = (state_205879[7]);var inst_205870 = (state_205879[2]);var state_205879__$1 = state_205879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205879__$1,8,inst_205870,inst_205860);
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
var state_machine__10214__auto____0 = (function (){var statearr_205897 = (new Array(10));(statearr_205897[0] = state_machine__10214__auto__);
(statearr_205897[1] = 1);
return statearr_205897;
});
var state_machine__10214__auto____1 = (function (state_205879){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_205879);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e205898){if((e205898 instanceof Object))
{var ex__10217__auto__ = e205898;var statearr_205899_205912 = state_205879;(statearr_205899_205912[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205879);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__205913 = state_205879;
state_205879 = G__205913;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_205879){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_205879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_205900 = f__10284__auto__.call(null);(statearr_205900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___205901);
return statearr_205900;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_205960){var state_val_205961 = (state_205960[1]);if((state_val_205961 === 7))
{var inst_205956 = (state_205960[2]);var state_205960__$1 = state_205960;var statearr_205962_205978 = state_205960__$1;(statearr_205962_205978[2] = inst_205956);
(statearr_205962_205978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205961 === 6))
{var inst_205946 = (state_205960[7]);var inst_205949 = (state_205960[8]);var inst_205953 = f.call(null,inst_205946,inst_205949);var inst_205946__$1 = inst_205953;var state_205960__$1 = (function (){var statearr_205963 = state_205960;(statearr_205963[7] = inst_205946__$1);
return statearr_205963;
})();var statearr_205964_205979 = state_205960__$1;(statearr_205964_205979[2] = null);
(statearr_205964_205979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205961 === 5))
{var inst_205946 = (state_205960[7]);var state_205960__$1 = state_205960;var statearr_205965_205980 = state_205960__$1;(statearr_205965_205980[2] = inst_205946);
(statearr_205965_205980[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205961 === 4))
{var inst_205949 = (state_205960[8]);var inst_205949__$1 = (state_205960[2]);var inst_205950 = (inst_205949__$1 == null);var state_205960__$1 = (function (){var statearr_205966 = state_205960;(statearr_205966[8] = inst_205949__$1);
return statearr_205966;
})();if(cljs.core.truth_(inst_205950))
{var statearr_205967_205981 = state_205960__$1;(statearr_205967_205981[1] = 5);
} else
{var statearr_205968_205982 = state_205960__$1;(statearr_205968_205982[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_205961 === 3))
{var inst_205958 = (state_205960[2]);var state_205960__$1 = state_205960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205960__$1,inst_205958);
} else
{if((state_val_205961 === 2))
{var state_205960__$1 = state_205960;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205960__$1,4,ch);
} else
{if((state_val_205961 === 1))
{var inst_205946 = init;var state_205960__$1 = (function (){var statearr_205969 = state_205960;(statearr_205969[7] = inst_205946);
return statearr_205969;
})();var statearr_205970_205983 = state_205960__$1;(statearr_205970_205983[2] = null);
(statearr_205970_205983[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_205974 = (new Array(9));(statearr_205974[0] = state_machine__10214__auto__);
(statearr_205974[1] = 1);
return statearr_205974;
});
var state_machine__10214__auto____1 = (function (state_205960){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_205960);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e205975){if((e205975 instanceof Object))
{var ex__10217__auto__ = e205975;var statearr_205976_205984 = state_205960;(statearr_205976_205984[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205960);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e205975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__205985 = state_205960;
state_205960 = G__205985;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_205960){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_205960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_205977 = f__10284__auto__.call(null);(statearr_205977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_205977;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_206047){var state_val_206048 = (state_206047[1]);if((state_val_206048 === 1))
{var inst_206027 = cljs.core.seq.call(null,coll);var inst_206028 = inst_206027;var state_206047__$1 = (function (){var statearr_206049 = state_206047;(statearr_206049[7] = inst_206028);
return statearr_206049;
})();var statearr_206050_206068 = state_206047__$1;(statearr_206050_206068[2] = null);
(statearr_206050_206068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206048 === 2))
{var inst_206028 = (state_206047[7]);var state_206047__$1 = state_206047;if(cljs.core.truth_(inst_206028))
{var statearr_206051_206069 = state_206047__$1;(statearr_206051_206069[1] = 4);
} else
{var statearr_206052_206070 = state_206047__$1;(statearr_206052_206070[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206048 === 3))
{var inst_206045 = (state_206047[2]);var state_206047__$1 = state_206047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_206047__$1,inst_206045);
} else
{if((state_val_206048 === 4))
{var inst_206028 = (state_206047[7]);var inst_206031 = cljs.core.first.call(null,inst_206028);var state_206047__$1 = state_206047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_206047__$1,7,ch,inst_206031);
} else
{if((state_val_206048 === 5))
{var state_206047__$1 = state_206047;if(cljs.core.truth_(close_QMARK_))
{var statearr_206053_206071 = state_206047__$1;(statearr_206053_206071[1] = 8);
} else
{var statearr_206054_206072 = state_206047__$1;(statearr_206054_206072[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206048 === 6))
{var inst_206043 = (state_206047[2]);var state_206047__$1 = state_206047;var statearr_206055_206073 = state_206047__$1;(statearr_206055_206073[2] = inst_206043);
(statearr_206055_206073[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206048 === 7))
{var inst_206028 = (state_206047[7]);var inst_206033 = (state_206047[2]);var inst_206034 = cljs.core.next.call(null,inst_206028);var inst_206028__$1 = inst_206034;var state_206047__$1 = (function (){var statearr_206056 = state_206047;(statearr_206056[8] = inst_206033);
(statearr_206056[7] = inst_206028__$1);
return statearr_206056;
})();var statearr_206057_206074 = state_206047__$1;(statearr_206057_206074[2] = null);
(statearr_206057_206074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206048 === 8))
{var inst_206038 = cljs.core.async.close_BANG_.call(null,ch);var state_206047__$1 = state_206047;var statearr_206058_206075 = state_206047__$1;(statearr_206058_206075[2] = inst_206038);
(statearr_206058_206075[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206048 === 9))
{var state_206047__$1 = state_206047;var statearr_206059_206076 = state_206047__$1;(statearr_206059_206076[2] = null);
(statearr_206059_206076[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206048 === 10))
{var inst_206041 = (state_206047[2]);var state_206047__$1 = state_206047;var statearr_206060_206077 = state_206047__$1;(statearr_206060_206077[2] = inst_206041);
(statearr_206060_206077[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_206064 = (new Array(9));(statearr_206064[0] = state_machine__10214__auto__);
(statearr_206064[1] = 1);
return statearr_206064;
});
var state_machine__10214__auto____1 = (function (state_206047){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_206047);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e206065){if((e206065 instanceof Object))
{var ex__10217__auto__ = e206065;var statearr_206066_206078 = state_206047;(statearr_206066_206078[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e206065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__206079 = state_206047;
state_206047 = G__206079;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_206047){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_206047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_206067 = f__10284__auto__.call(null);(statearr_206067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_206067;
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
cljs.core.async.Mux = (function (){var obj206081 = {};return obj206081;
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
cljs.core.async.Mult = (function (){var obj206083 = {};return obj206083;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t206298 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t206298 = (function (cs,ch,mult,meta206299){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta206299 = meta206299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t206298.cljs$lang$type = true;
cljs.core.async.t206298.cljs$lang$ctorStr = "cljs.core.async/t206298";
cljs.core.async.t206298.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t206298");
});})(cs))
;
cljs.core.async.t206298.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t206298.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t206298.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t206298.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t206298.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t206298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t206298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_206300){var self__ = this;
var _206300__$1 = this;return self__.meta206299;
});})(cs))
;
cljs.core.async.t206298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_206300,meta206299__$1){var self__ = this;
var _206300__$1 = this;return (new cljs.core.async.t206298(self__.cs,self__.ch,self__.mult,meta206299__$1));
});})(cs))
;
cljs.core.async.__GT_t206298 = ((function (cs){
return (function __GT_t206298(cs__$1,ch__$1,mult__$1,meta206299){return (new cljs.core.async.t206298(cs__$1,ch__$1,mult__$1,meta206299));
});})(cs))
;
}
return (new cljs.core.async.t206298(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___206512 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_206430){var state_val_206431 = (state_206430[1]);if((state_val_206431 === 32))
{var inst_206379 = (state_206430[7]);var inst_206303 = (state_206430[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_206430,31,Object,null,30);var inst_206386 = cljs.core.async.put_BANG_.call(null,inst_206379,inst_206303,done);var state_206430__$1 = state_206430;var statearr_206432_206513 = state_206430__$1;(statearr_206432_206513[2] = inst_206386);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206430__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 1))
{var state_206430__$1 = state_206430;var statearr_206433_206514 = state_206430__$1;(statearr_206433_206514[2] = null);
(statearr_206433_206514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 33))
{var inst_206392 = (state_206430[9]);var inst_206394 = cljs.core.chunked_seq_QMARK_.call(null,inst_206392);var state_206430__$1 = state_206430;if(inst_206394)
{var statearr_206434_206515 = state_206430__$1;(statearr_206434_206515[1] = 36);
} else
{var statearr_206435_206516 = state_206430__$1;(statearr_206435_206516[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 2))
{var state_206430__$1 = state_206430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_206430__$1,4,ch);
} else
{if((state_val_206431 === 34))
{var state_206430__$1 = state_206430;var statearr_206436_206517 = state_206430__$1;(statearr_206436_206517[2] = null);
(statearr_206436_206517[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 3))
{var inst_206428 = (state_206430[2]);var state_206430__$1 = state_206430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_206430__$1,inst_206428);
} else
{if((state_val_206431 === 35))
{var inst_206417 = (state_206430[2]);var state_206430__$1 = state_206430;var statearr_206437_206518 = state_206430__$1;(statearr_206437_206518[2] = inst_206417);
(statearr_206437_206518[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 4))
{var inst_206303 = (state_206430[8]);var inst_206303__$1 = (state_206430[2]);var inst_206304 = (inst_206303__$1 == null);var state_206430__$1 = (function (){var statearr_206438 = state_206430;(statearr_206438[8] = inst_206303__$1);
return statearr_206438;
})();if(cljs.core.truth_(inst_206304))
{var statearr_206439_206519 = state_206430__$1;(statearr_206439_206519[1] = 5);
} else
{var statearr_206440_206520 = state_206430__$1;(statearr_206440_206520[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 36))
{var inst_206392 = (state_206430[9]);var inst_206396 = cljs.core.chunk_first.call(null,inst_206392);var inst_206397 = cljs.core.chunk_rest.call(null,inst_206392);var inst_206398 = cljs.core.count.call(null,inst_206396);var inst_206371 = inst_206397;var inst_206372 = inst_206396;var inst_206373 = inst_206398;var inst_206374 = 0;var state_206430__$1 = (function (){var statearr_206441 = state_206430;(statearr_206441[10] = inst_206371);
(statearr_206441[11] = inst_206372);
(statearr_206441[12] = inst_206374);
(statearr_206441[13] = inst_206373);
return statearr_206441;
})();var statearr_206442_206521 = state_206430__$1;(statearr_206442_206521[2] = null);
(statearr_206442_206521[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 5))
{var inst_206310 = cljs.core.deref.call(null,cs);var inst_206311 = cljs.core.seq.call(null,inst_206310);var inst_206312 = inst_206311;var inst_206313 = null;var inst_206314 = 0;var inst_206315 = 0;var state_206430__$1 = (function (){var statearr_206443 = state_206430;(statearr_206443[14] = inst_206313);
(statearr_206443[15] = inst_206314);
(statearr_206443[16] = inst_206312);
(statearr_206443[17] = inst_206315);
return statearr_206443;
})();var statearr_206444_206522 = state_206430__$1;(statearr_206444_206522[2] = null);
(statearr_206444_206522[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 37))
{var inst_206392 = (state_206430[9]);var inst_206401 = cljs.core.first.call(null,inst_206392);var state_206430__$1 = (function (){var statearr_206445 = state_206430;(statearr_206445[18] = inst_206401);
return statearr_206445;
})();var statearr_206446_206523 = state_206430__$1;(statearr_206446_206523[2] = null);
(statearr_206446_206523[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 6))
{var inst_206362 = cljs.core.deref.call(null,cs);var inst_206363 = cljs.core.keys.call(null,inst_206362);var inst_206364 = cljs.core.count.call(null,inst_206363);var inst_206365 = cljs.core.reset_BANG_.call(null,dctr,inst_206364);var inst_206370 = cljs.core.seq.call(null,inst_206363);var inst_206371 = inst_206370;var inst_206372 = null;var inst_206373 = 0;var inst_206374 = 0;var state_206430__$1 = (function (){var statearr_206447 = state_206430;(statearr_206447[10] = inst_206371);
(statearr_206447[11] = inst_206372);
(statearr_206447[19] = inst_206365);
(statearr_206447[12] = inst_206374);
(statearr_206447[13] = inst_206373);
return statearr_206447;
})();var statearr_206448_206524 = state_206430__$1;(statearr_206448_206524[2] = null);
(statearr_206448_206524[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 38))
{var inst_206414 = (state_206430[2]);var state_206430__$1 = state_206430;var statearr_206449_206525 = state_206430__$1;(statearr_206449_206525[2] = inst_206414);
(statearr_206449_206525[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 7))
{var inst_206426 = (state_206430[2]);var state_206430__$1 = state_206430;var statearr_206450_206526 = state_206430__$1;(statearr_206450_206526[2] = inst_206426);
(statearr_206450_206526[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 39))
{var inst_206392 = (state_206430[9]);var inst_206410 = (state_206430[2]);var inst_206411 = cljs.core.next.call(null,inst_206392);var inst_206371 = inst_206411;var inst_206372 = null;var inst_206373 = 0;var inst_206374 = 0;var state_206430__$1 = (function (){var statearr_206451 = state_206430;(statearr_206451[10] = inst_206371);
(statearr_206451[11] = inst_206372);
(statearr_206451[20] = inst_206410);
(statearr_206451[12] = inst_206374);
(statearr_206451[13] = inst_206373);
return statearr_206451;
})();var statearr_206452_206527 = state_206430__$1;(statearr_206452_206527[2] = null);
(statearr_206452_206527[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 8))
{var inst_206314 = (state_206430[15]);var inst_206315 = (state_206430[17]);var inst_206317 = (inst_206315 < inst_206314);var inst_206318 = inst_206317;var state_206430__$1 = state_206430;if(cljs.core.truth_(inst_206318))
{var statearr_206453_206528 = state_206430__$1;(statearr_206453_206528[1] = 10);
} else
{var statearr_206454_206529 = state_206430__$1;(statearr_206454_206529[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 40))
{var inst_206401 = (state_206430[18]);var inst_206402 = (state_206430[2]);var inst_206403 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_206404 = cljs.core.async.untap_STAR_.call(null,m,inst_206401);var state_206430__$1 = (function (){var statearr_206455 = state_206430;(statearr_206455[21] = inst_206403);
(statearr_206455[22] = inst_206402);
return statearr_206455;
})();var statearr_206456_206530 = state_206430__$1;(statearr_206456_206530[2] = inst_206404);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206430__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 9))
{var inst_206360 = (state_206430[2]);var state_206430__$1 = state_206430;var statearr_206457_206531 = state_206430__$1;(statearr_206457_206531[2] = inst_206360);
(statearr_206457_206531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 41))
{var inst_206401 = (state_206430[18]);var inst_206303 = (state_206430[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_206430,40,Object,null,39);var inst_206408 = cljs.core.async.put_BANG_.call(null,inst_206401,inst_206303,done);var state_206430__$1 = state_206430;var statearr_206458_206532 = state_206430__$1;(statearr_206458_206532[2] = inst_206408);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206430__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 10))
{var inst_206313 = (state_206430[14]);var inst_206315 = (state_206430[17]);var inst_206321 = cljs.core._nth.call(null,inst_206313,inst_206315);var inst_206322 = cljs.core.nth.call(null,inst_206321,0,null);var inst_206323 = cljs.core.nth.call(null,inst_206321,1,null);var state_206430__$1 = (function (){var statearr_206459 = state_206430;(statearr_206459[23] = inst_206322);
return statearr_206459;
})();if(cljs.core.truth_(inst_206323))
{var statearr_206460_206533 = state_206430__$1;(statearr_206460_206533[1] = 13);
} else
{var statearr_206461_206534 = state_206430__$1;(statearr_206461_206534[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 42))
{var inst_206423 = (state_206430[2]);var state_206430__$1 = (function (){var statearr_206462 = state_206430;(statearr_206462[24] = inst_206423);
return statearr_206462;
})();var statearr_206463_206535 = state_206430__$1;(statearr_206463_206535[2] = null);
(statearr_206463_206535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 11))
{var inst_206312 = (state_206430[16]);var inst_206332 = (state_206430[25]);var inst_206332__$1 = cljs.core.seq.call(null,inst_206312);var state_206430__$1 = (function (){var statearr_206464 = state_206430;(statearr_206464[25] = inst_206332__$1);
return statearr_206464;
})();if(inst_206332__$1)
{var statearr_206465_206536 = state_206430__$1;(statearr_206465_206536[1] = 16);
} else
{var statearr_206466_206537 = state_206430__$1;(statearr_206466_206537[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 12))
{var inst_206358 = (state_206430[2]);var state_206430__$1 = state_206430;var statearr_206467_206538 = state_206430__$1;(statearr_206467_206538[2] = inst_206358);
(statearr_206467_206538[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 13))
{var inst_206322 = (state_206430[23]);var inst_206325 = cljs.core.async.close_BANG_.call(null,inst_206322);var state_206430__$1 = state_206430;var statearr_206471_206539 = state_206430__$1;(statearr_206471_206539[2] = inst_206325);
(statearr_206471_206539[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 14))
{var state_206430__$1 = state_206430;var statearr_206472_206540 = state_206430__$1;(statearr_206472_206540[2] = null);
(statearr_206472_206540[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 15))
{var inst_206313 = (state_206430[14]);var inst_206314 = (state_206430[15]);var inst_206312 = (state_206430[16]);var inst_206315 = (state_206430[17]);var inst_206328 = (state_206430[2]);var inst_206329 = (inst_206315 + 1);var tmp206468 = inst_206313;var tmp206469 = inst_206314;var tmp206470 = inst_206312;var inst_206312__$1 = tmp206470;var inst_206313__$1 = tmp206468;var inst_206314__$1 = tmp206469;var inst_206315__$1 = inst_206329;var state_206430__$1 = (function (){var statearr_206473 = state_206430;(statearr_206473[14] = inst_206313__$1);
(statearr_206473[15] = inst_206314__$1);
(statearr_206473[16] = inst_206312__$1);
(statearr_206473[26] = inst_206328);
(statearr_206473[17] = inst_206315__$1);
return statearr_206473;
})();var statearr_206474_206541 = state_206430__$1;(statearr_206474_206541[2] = null);
(statearr_206474_206541[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 16))
{var inst_206332 = (state_206430[25]);var inst_206334 = cljs.core.chunked_seq_QMARK_.call(null,inst_206332);var state_206430__$1 = state_206430;if(inst_206334)
{var statearr_206475_206542 = state_206430__$1;(statearr_206475_206542[1] = 19);
} else
{var statearr_206476_206543 = state_206430__$1;(statearr_206476_206543[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 17))
{var state_206430__$1 = state_206430;var statearr_206477_206544 = state_206430__$1;(statearr_206477_206544[2] = null);
(statearr_206477_206544[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 18))
{var inst_206356 = (state_206430[2]);var state_206430__$1 = state_206430;var statearr_206478_206545 = state_206430__$1;(statearr_206478_206545[2] = inst_206356);
(statearr_206478_206545[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 19))
{var inst_206332 = (state_206430[25]);var inst_206336 = cljs.core.chunk_first.call(null,inst_206332);var inst_206337 = cljs.core.chunk_rest.call(null,inst_206332);var inst_206338 = cljs.core.count.call(null,inst_206336);var inst_206312 = inst_206337;var inst_206313 = inst_206336;var inst_206314 = inst_206338;var inst_206315 = 0;var state_206430__$1 = (function (){var statearr_206479 = state_206430;(statearr_206479[14] = inst_206313);
(statearr_206479[15] = inst_206314);
(statearr_206479[16] = inst_206312);
(statearr_206479[17] = inst_206315);
return statearr_206479;
})();var statearr_206480_206546 = state_206430__$1;(statearr_206480_206546[2] = null);
(statearr_206480_206546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 20))
{var inst_206332 = (state_206430[25]);var inst_206342 = cljs.core.first.call(null,inst_206332);var inst_206343 = cljs.core.nth.call(null,inst_206342,0,null);var inst_206344 = cljs.core.nth.call(null,inst_206342,1,null);var state_206430__$1 = (function (){var statearr_206481 = state_206430;(statearr_206481[27] = inst_206343);
return statearr_206481;
})();if(cljs.core.truth_(inst_206344))
{var statearr_206482_206547 = state_206430__$1;(statearr_206482_206547[1] = 22);
} else
{var statearr_206483_206548 = state_206430__$1;(statearr_206483_206548[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 21))
{var inst_206353 = (state_206430[2]);var state_206430__$1 = state_206430;var statearr_206484_206549 = state_206430__$1;(statearr_206484_206549[2] = inst_206353);
(statearr_206484_206549[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 22))
{var inst_206343 = (state_206430[27]);var inst_206346 = cljs.core.async.close_BANG_.call(null,inst_206343);var state_206430__$1 = state_206430;var statearr_206485_206550 = state_206430__$1;(statearr_206485_206550[2] = inst_206346);
(statearr_206485_206550[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 23))
{var state_206430__$1 = state_206430;var statearr_206486_206551 = state_206430__$1;(statearr_206486_206551[2] = null);
(statearr_206486_206551[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 24))
{var inst_206332 = (state_206430[25]);var inst_206349 = (state_206430[2]);var inst_206350 = cljs.core.next.call(null,inst_206332);var inst_206312 = inst_206350;var inst_206313 = null;var inst_206314 = 0;var inst_206315 = 0;var state_206430__$1 = (function (){var statearr_206487 = state_206430;(statearr_206487[14] = inst_206313);
(statearr_206487[15] = inst_206314);
(statearr_206487[16] = inst_206312);
(statearr_206487[17] = inst_206315);
(statearr_206487[28] = inst_206349);
return statearr_206487;
})();var statearr_206488_206552 = state_206430__$1;(statearr_206488_206552[2] = null);
(statearr_206488_206552[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 25))
{var inst_206374 = (state_206430[12]);var inst_206373 = (state_206430[13]);var inst_206376 = (inst_206374 < inst_206373);var inst_206377 = inst_206376;var state_206430__$1 = state_206430;if(cljs.core.truth_(inst_206377))
{var statearr_206489_206553 = state_206430__$1;(statearr_206489_206553[1] = 27);
} else
{var statearr_206490_206554 = state_206430__$1;(statearr_206490_206554[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 26))
{var inst_206421 = (state_206430[2]);var state_206430__$1 = (function (){var statearr_206491 = state_206430;(statearr_206491[29] = inst_206421);
return statearr_206491;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_206430__$1,42,dchan);
} else
{if((state_val_206431 === 27))
{var inst_206372 = (state_206430[11]);var inst_206374 = (state_206430[12]);var inst_206379 = cljs.core._nth.call(null,inst_206372,inst_206374);var state_206430__$1 = (function (){var statearr_206492 = state_206430;(statearr_206492[7] = inst_206379);
return statearr_206492;
})();var statearr_206493_206555 = state_206430__$1;(statearr_206493_206555[2] = null);
(statearr_206493_206555[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 28))
{var inst_206371 = (state_206430[10]);var inst_206392 = (state_206430[9]);var inst_206392__$1 = cljs.core.seq.call(null,inst_206371);var state_206430__$1 = (function (){var statearr_206497 = state_206430;(statearr_206497[9] = inst_206392__$1);
return statearr_206497;
})();if(inst_206392__$1)
{var statearr_206498_206556 = state_206430__$1;(statearr_206498_206556[1] = 33);
} else
{var statearr_206499_206557 = state_206430__$1;(statearr_206499_206557[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 29))
{var inst_206419 = (state_206430[2]);var state_206430__$1 = state_206430;var statearr_206500_206558 = state_206430__$1;(statearr_206500_206558[2] = inst_206419);
(statearr_206500_206558[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 30))
{var inst_206371 = (state_206430[10]);var inst_206372 = (state_206430[11]);var inst_206374 = (state_206430[12]);var inst_206373 = (state_206430[13]);var inst_206388 = (state_206430[2]);var inst_206389 = (inst_206374 + 1);var tmp206494 = inst_206371;var tmp206495 = inst_206372;var tmp206496 = inst_206373;var inst_206371__$1 = tmp206494;var inst_206372__$1 = tmp206495;var inst_206373__$1 = tmp206496;var inst_206374__$1 = inst_206389;var state_206430__$1 = (function (){var statearr_206501 = state_206430;(statearr_206501[10] = inst_206371__$1);
(statearr_206501[11] = inst_206372__$1);
(statearr_206501[12] = inst_206374__$1);
(statearr_206501[13] = inst_206373__$1);
(statearr_206501[30] = inst_206388);
return statearr_206501;
})();var statearr_206502_206559 = state_206430__$1;(statearr_206502_206559[2] = null);
(statearr_206502_206559[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206431 === 31))
{var inst_206379 = (state_206430[7]);var inst_206380 = (state_206430[2]);var inst_206381 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_206382 = cljs.core.async.untap_STAR_.call(null,m,inst_206379);var state_206430__$1 = (function (){var statearr_206503 = state_206430;(statearr_206503[31] = inst_206380);
(statearr_206503[32] = inst_206381);
return statearr_206503;
})();var statearr_206504_206560 = state_206430__$1;(statearr_206504_206560[2] = inst_206382);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206430__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_206508 = (new Array(33));(statearr_206508[0] = state_machine__10214__auto__);
(statearr_206508[1] = 1);
return statearr_206508;
});
var state_machine__10214__auto____1 = (function (state_206430){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_206430);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e206509){if((e206509 instanceof Object))
{var ex__10217__auto__ = e206509;var statearr_206510_206561 = state_206430;(statearr_206510_206561[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e206509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__206562 = state_206430;
state_206430 = G__206562;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_206430){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_206430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_206511 = f__10284__auto__.call(null);(statearr_206511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___206512);
return statearr_206511;
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
cljs.core.async.Mix = (function (){var obj206564 = {};return obj206564;
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
;var m = (function (){if(typeof cljs.core.async.t206674 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t206674 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta206675){
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
this.meta206675 = meta206675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t206674.cljs$lang$type = true;
cljs.core.async.t206674.cljs$lang$ctorStr = "cljs.core.async/t206674";
cljs.core.async.t206674.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t206674");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t206674.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t206674.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t206674.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t206674.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t206674.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t206674.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t206674.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t206674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t206674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_206676){var self__ = this;
var _206676__$1 = this;return self__.meta206675;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t206674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_206676,meta206675__$1){var self__ = this;
var _206676__$1 = this;return (new cljs.core.async.t206674(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta206675__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t206674 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t206674(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta206675){return (new cljs.core.async.t206674(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta206675));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t206674(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___206783 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_206741){var state_val_206742 = (state_206741[1]);if((state_val_206742 === 1))
{var inst_206680 = (state_206741[7]);var inst_206680__$1 = calc_state.call(null);var inst_206681 = cljs.core.seq_QMARK_.call(null,inst_206680__$1);var state_206741__$1 = (function (){var statearr_206743 = state_206741;(statearr_206743[7] = inst_206680__$1);
return statearr_206743;
})();if(inst_206681)
{var statearr_206744_206784 = state_206741__$1;(statearr_206744_206784[1] = 2);
} else
{var statearr_206745_206785 = state_206741__$1;(statearr_206745_206785[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 2))
{var inst_206680 = (state_206741[7]);var inst_206683 = cljs.core.apply.call(null,cljs.core.hash_map,inst_206680);var state_206741__$1 = state_206741;var statearr_206746_206786 = state_206741__$1;(statearr_206746_206786[2] = inst_206683);
(statearr_206746_206786[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 3))
{var inst_206680 = (state_206741[7]);var state_206741__$1 = state_206741;var statearr_206747_206787 = state_206741__$1;(statearr_206747_206787[2] = inst_206680);
(statearr_206747_206787[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 4))
{var inst_206680 = (state_206741[7]);var inst_206686 = (state_206741[2]);var inst_206687 = cljs.core.get.call(null,inst_206686,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_206688 = cljs.core.get.call(null,inst_206686,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_206689 = cljs.core.get.call(null,inst_206686,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_206690 = inst_206680;var state_206741__$1 = (function (){var statearr_206748 = state_206741;(statearr_206748[8] = inst_206689);
(statearr_206748[9] = inst_206687);
(statearr_206748[10] = inst_206688);
(statearr_206748[11] = inst_206690);
return statearr_206748;
})();var statearr_206749_206788 = state_206741__$1;(statearr_206749_206788[2] = null);
(statearr_206749_206788[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 5))
{var inst_206690 = (state_206741[11]);var inst_206693 = cljs.core.seq_QMARK_.call(null,inst_206690);var state_206741__$1 = state_206741;if(inst_206693)
{var statearr_206750_206789 = state_206741__$1;(statearr_206750_206789[1] = 7);
} else
{var statearr_206751_206790 = state_206741__$1;(statearr_206751_206790[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 6))
{var inst_206739 = (state_206741[2]);var state_206741__$1 = state_206741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_206741__$1,inst_206739);
} else
{if((state_val_206742 === 7))
{var inst_206690 = (state_206741[11]);var inst_206695 = cljs.core.apply.call(null,cljs.core.hash_map,inst_206690);var state_206741__$1 = state_206741;var statearr_206752_206791 = state_206741__$1;(statearr_206752_206791[2] = inst_206695);
(statearr_206752_206791[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 8))
{var inst_206690 = (state_206741[11]);var state_206741__$1 = state_206741;var statearr_206753_206792 = state_206741__$1;(statearr_206753_206792[2] = inst_206690);
(statearr_206753_206792[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 9))
{var inst_206698 = (state_206741[12]);var inst_206698__$1 = (state_206741[2]);var inst_206699 = cljs.core.get.call(null,inst_206698__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_206700 = cljs.core.get.call(null,inst_206698__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_206701 = cljs.core.get.call(null,inst_206698__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_206741__$1 = (function (){var statearr_206754 = state_206741;(statearr_206754[12] = inst_206698__$1);
(statearr_206754[13] = inst_206701);
(statearr_206754[14] = inst_206700);
return statearr_206754;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_206741__$1,10,inst_206699);
} else
{if((state_val_206742 === 10))
{var inst_206705 = (state_206741[15]);var inst_206706 = (state_206741[16]);var inst_206704 = (state_206741[2]);var inst_206705__$1 = cljs.core.nth.call(null,inst_206704,0,null);var inst_206706__$1 = cljs.core.nth.call(null,inst_206704,1,null);var inst_206707 = (inst_206705__$1 == null);var inst_206708 = cljs.core._EQ_.call(null,inst_206706__$1,change);var inst_206709 = (inst_206707) || (inst_206708);var state_206741__$1 = (function (){var statearr_206755 = state_206741;(statearr_206755[15] = inst_206705__$1);
(statearr_206755[16] = inst_206706__$1);
return statearr_206755;
})();if(cljs.core.truth_(inst_206709))
{var statearr_206756_206793 = state_206741__$1;(statearr_206756_206793[1] = 11);
} else
{var statearr_206757_206794 = state_206741__$1;(statearr_206757_206794[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 11))
{var inst_206705 = (state_206741[15]);var inst_206711 = (inst_206705 == null);var state_206741__$1 = state_206741;if(cljs.core.truth_(inst_206711))
{var statearr_206758_206795 = state_206741__$1;(statearr_206758_206795[1] = 14);
} else
{var statearr_206759_206796 = state_206741__$1;(statearr_206759_206796[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 12))
{var inst_206720 = (state_206741[17]);var inst_206706 = (state_206741[16]);var inst_206701 = (state_206741[13]);var inst_206720__$1 = inst_206701.call(null,inst_206706);var state_206741__$1 = (function (){var statearr_206760 = state_206741;(statearr_206760[17] = inst_206720__$1);
return statearr_206760;
})();if(cljs.core.truth_(inst_206720__$1))
{var statearr_206761_206797 = state_206741__$1;(statearr_206761_206797[1] = 17);
} else
{var statearr_206762_206798 = state_206741__$1;(statearr_206762_206798[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 13))
{var inst_206737 = (state_206741[2]);var state_206741__$1 = state_206741;var statearr_206763_206799 = state_206741__$1;(statearr_206763_206799[2] = inst_206737);
(statearr_206763_206799[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 14))
{var inst_206706 = (state_206741[16]);var inst_206713 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_206706);var state_206741__$1 = state_206741;var statearr_206764_206800 = state_206741__$1;(statearr_206764_206800[2] = inst_206713);
(statearr_206764_206800[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 15))
{var state_206741__$1 = state_206741;var statearr_206765_206801 = state_206741__$1;(statearr_206765_206801[2] = null);
(statearr_206765_206801[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 16))
{var inst_206716 = (state_206741[2]);var inst_206717 = calc_state.call(null);var inst_206690 = inst_206717;var state_206741__$1 = (function (){var statearr_206766 = state_206741;(statearr_206766[18] = inst_206716);
(statearr_206766[11] = inst_206690);
return statearr_206766;
})();var statearr_206767_206802 = state_206741__$1;(statearr_206767_206802[2] = null);
(statearr_206767_206802[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 17))
{var inst_206720 = (state_206741[17]);var state_206741__$1 = state_206741;var statearr_206768_206803 = state_206741__$1;(statearr_206768_206803[2] = inst_206720);
(statearr_206768_206803[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 18))
{var inst_206706 = (state_206741[16]);var inst_206701 = (state_206741[13]);var inst_206700 = (state_206741[14]);var inst_206723 = cljs.core.empty_QMARK_.call(null,inst_206701);var inst_206724 = inst_206700.call(null,inst_206706);var inst_206725 = cljs.core.not.call(null,inst_206724);var inst_206726 = (inst_206723) && (inst_206725);var state_206741__$1 = state_206741;var statearr_206769_206804 = state_206741__$1;(statearr_206769_206804[2] = inst_206726);
(statearr_206769_206804[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 19))
{var inst_206728 = (state_206741[2]);var state_206741__$1 = state_206741;if(cljs.core.truth_(inst_206728))
{var statearr_206770_206805 = state_206741__$1;(statearr_206770_206805[1] = 20);
} else
{var statearr_206771_206806 = state_206741__$1;(statearr_206771_206806[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 20))
{var inst_206705 = (state_206741[15]);var state_206741__$1 = state_206741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_206741__$1,23,out,inst_206705);
} else
{if((state_val_206742 === 21))
{var state_206741__$1 = state_206741;var statearr_206772_206807 = state_206741__$1;(statearr_206772_206807[2] = null);
(statearr_206772_206807[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 22))
{var inst_206698 = (state_206741[12]);var inst_206734 = (state_206741[2]);var inst_206690 = inst_206698;var state_206741__$1 = (function (){var statearr_206773 = state_206741;(statearr_206773[11] = inst_206690);
(statearr_206773[19] = inst_206734);
return statearr_206773;
})();var statearr_206774_206808 = state_206741__$1;(statearr_206774_206808[2] = null);
(statearr_206774_206808[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_206742 === 23))
{var inst_206731 = (state_206741[2]);var state_206741__$1 = state_206741;var statearr_206775_206809 = state_206741__$1;(statearr_206775_206809[2] = inst_206731);
(statearr_206775_206809[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_206779 = (new Array(20));(statearr_206779[0] = state_machine__10214__auto__);
(statearr_206779[1] = 1);
return statearr_206779;
});
var state_machine__10214__auto____1 = (function (state_206741){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_206741);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e206780){if((e206780 instanceof Object))
{var ex__10217__auto__ = e206780;var statearr_206781_206810 = state_206741;(statearr_206781_206810[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_206741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e206780;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__206811 = state_206741;
state_206741 = G__206811;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_206741){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_206741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_206782 = f__10284__auto__.call(null);(statearr_206782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___206783);
return statearr_206782;
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
cljs.core.async.Pub = (function (){var obj206813 = {};return obj206813;
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
return (function (p1__206814_SHARP_){if(cljs.core.truth_(p1__206814_SHARP_.call(null,topic)))
{return p1__206814_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__206814_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t206939 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t206939 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta206940){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta206940 = meta206940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t206939.cljs$lang$type = true;
cljs.core.async.t206939.cljs$lang$ctorStr = "cljs.core.async/t206939";
cljs.core.async.t206939.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t206939");
});})(mults,ensure_mult))
;
cljs.core.async.t206939.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t206939.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t206939.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t206939.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t206939.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t206939.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t206939.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t206939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_206941){var self__ = this;
var _206941__$1 = this;return self__.meta206940;
});})(mults,ensure_mult))
;
cljs.core.async.t206939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_206941,meta206940__$1){var self__ = this;
var _206941__$1 = this;return (new cljs.core.async.t206939(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta206940__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t206939 = ((function (mults,ensure_mult){
return (function __GT_t206939(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta206940){return (new cljs.core.async.t206939(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta206940));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t206939(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___207063 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_207015){var state_val_207016 = (state_207015[1]);if((state_val_207016 === 1))
{var state_207015__$1 = state_207015;var statearr_207017_207064 = state_207015__$1;(statearr_207017_207064[2] = null);
(statearr_207017_207064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 2))
{var state_207015__$1 = state_207015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207015__$1,4,ch);
} else
{if((state_val_207016 === 3))
{var inst_207013 = (state_207015[2]);var state_207015__$1 = state_207015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207015__$1,inst_207013);
} else
{if((state_val_207016 === 4))
{var inst_206944 = (state_207015[7]);var inst_206944__$1 = (state_207015[2]);var inst_206945 = (inst_206944__$1 == null);var state_207015__$1 = (function (){var statearr_207018 = state_207015;(statearr_207018[7] = inst_206944__$1);
return statearr_207018;
})();if(cljs.core.truth_(inst_206945))
{var statearr_207019_207065 = state_207015__$1;(statearr_207019_207065[1] = 5);
} else
{var statearr_207020_207066 = state_207015__$1;(statearr_207020_207066[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 5))
{var inst_206951 = cljs.core.deref.call(null,mults);var inst_206952 = cljs.core.vals.call(null,inst_206951);var inst_206953 = cljs.core.seq.call(null,inst_206952);var inst_206954 = inst_206953;var inst_206955 = null;var inst_206956 = 0;var inst_206957 = 0;var state_207015__$1 = (function (){var statearr_207021 = state_207015;(statearr_207021[8] = inst_206957);
(statearr_207021[9] = inst_206956);
(statearr_207021[10] = inst_206955);
(statearr_207021[11] = inst_206954);
return statearr_207021;
})();var statearr_207022_207067 = state_207015__$1;(statearr_207022_207067[2] = null);
(statearr_207022_207067[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 6))
{var inst_206994 = (state_207015[12]);var inst_206992 = (state_207015[13]);var inst_206944 = (state_207015[7]);var inst_206992__$1 = topic_fn.call(null,inst_206944);var inst_206993 = cljs.core.deref.call(null,mults);var inst_206994__$1 = cljs.core.get.call(null,inst_206993,inst_206992__$1);var state_207015__$1 = (function (){var statearr_207023 = state_207015;(statearr_207023[12] = inst_206994__$1);
(statearr_207023[13] = inst_206992__$1);
return statearr_207023;
})();if(cljs.core.truth_(inst_206994__$1))
{var statearr_207024_207068 = state_207015__$1;(statearr_207024_207068[1] = 19);
} else
{var statearr_207025_207069 = state_207015__$1;(statearr_207025_207069[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 7))
{var inst_207011 = (state_207015[2]);var state_207015__$1 = state_207015;var statearr_207026_207070 = state_207015__$1;(statearr_207026_207070[2] = inst_207011);
(statearr_207026_207070[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 8))
{var inst_206957 = (state_207015[8]);var inst_206956 = (state_207015[9]);var inst_206959 = (inst_206957 < inst_206956);var inst_206960 = inst_206959;var state_207015__$1 = state_207015;if(cljs.core.truth_(inst_206960))
{var statearr_207030_207071 = state_207015__$1;(statearr_207030_207071[1] = 10);
} else
{var statearr_207031_207072 = state_207015__$1;(statearr_207031_207072[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 9))
{var inst_206990 = (state_207015[2]);var state_207015__$1 = state_207015;var statearr_207032_207073 = state_207015__$1;(statearr_207032_207073[2] = inst_206990);
(statearr_207032_207073[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 10))
{var inst_206957 = (state_207015[8]);var inst_206956 = (state_207015[9]);var inst_206955 = (state_207015[10]);var inst_206954 = (state_207015[11]);var inst_206962 = cljs.core._nth.call(null,inst_206955,inst_206957);var inst_206963 = cljs.core.async.muxch_STAR_.call(null,inst_206962);var inst_206964 = cljs.core.async.close_BANG_.call(null,inst_206963);var inst_206965 = (inst_206957 + 1);var tmp207027 = inst_206956;var tmp207028 = inst_206955;var tmp207029 = inst_206954;var inst_206954__$1 = tmp207029;var inst_206955__$1 = tmp207028;var inst_206956__$1 = tmp207027;var inst_206957__$1 = inst_206965;var state_207015__$1 = (function (){var statearr_207033 = state_207015;(statearr_207033[8] = inst_206957__$1);
(statearr_207033[14] = inst_206964);
(statearr_207033[9] = inst_206956__$1);
(statearr_207033[10] = inst_206955__$1);
(statearr_207033[11] = inst_206954__$1);
return statearr_207033;
})();var statearr_207034_207074 = state_207015__$1;(statearr_207034_207074[2] = null);
(statearr_207034_207074[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 11))
{var inst_206954 = (state_207015[11]);var inst_206968 = (state_207015[15]);var inst_206968__$1 = cljs.core.seq.call(null,inst_206954);var state_207015__$1 = (function (){var statearr_207035 = state_207015;(statearr_207035[15] = inst_206968__$1);
return statearr_207035;
})();if(inst_206968__$1)
{var statearr_207036_207075 = state_207015__$1;(statearr_207036_207075[1] = 13);
} else
{var statearr_207037_207076 = state_207015__$1;(statearr_207037_207076[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 12))
{var inst_206988 = (state_207015[2]);var state_207015__$1 = state_207015;var statearr_207038_207077 = state_207015__$1;(statearr_207038_207077[2] = inst_206988);
(statearr_207038_207077[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 13))
{var inst_206968 = (state_207015[15]);var inst_206970 = cljs.core.chunked_seq_QMARK_.call(null,inst_206968);var state_207015__$1 = state_207015;if(inst_206970)
{var statearr_207039_207078 = state_207015__$1;(statearr_207039_207078[1] = 16);
} else
{var statearr_207040_207079 = state_207015__$1;(statearr_207040_207079[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 14))
{var state_207015__$1 = state_207015;var statearr_207041_207080 = state_207015__$1;(statearr_207041_207080[2] = null);
(statearr_207041_207080[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 15))
{var inst_206986 = (state_207015[2]);var state_207015__$1 = state_207015;var statearr_207042_207081 = state_207015__$1;(statearr_207042_207081[2] = inst_206986);
(statearr_207042_207081[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 16))
{var inst_206968 = (state_207015[15]);var inst_206972 = cljs.core.chunk_first.call(null,inst_206968);var inst_206973 = cljs.core.chunk_rest.call(null,inst_206968);var inst_206974 = cljs.core.count.call(null,inst_206972);var inst_206954 = inst_206973;var inst_206955 = inst_206972;var inst_206956 = inst_206974;var inst_206957 = 0;var state_207015__$1 = (function (){var statearr_207043 = state_207015;(statearr_207043[8] = inst_206957);
(statearr_207043[9] = inst_206956);
(statearr_207043[10] = inst_206955);
(statearr_207043[11] = inst_206954);
return statearr_207043;
})();var statearr_207044_207082 = state_207015__$1;(statearr_207044_207082[2] = null);
(statearr_207044_207082[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 17))
{var inst_206968 = (state_207015[15]);var inst_206977 = cljs.core.first.call(null,inst_206968);var inst_206978 = cljs.core.async.muxch_STAR_.call(null,inst_206977);var inst_206979 = cljs.core.async.close_BANG_.call(null,inst_206978);var inst_206980 = cljs.core.next.call(null,inst_206968);var inst_206954 = inst_206980;var inst_206955 = null;var inst_206956 = 0;var inst_206957 = 0;var state_207015__$1 = (function (){var statearr_207045 = state_207015;(statearr_207045[8] = inst_206957);
(statearr_207045[9] = inst_206956);
(statearr_207045[10] = inst_206955);
(statearr_207045[11] = inst_206954);
(statearr_207045[16] = inst_206979);
return statearr_207045;
})();var statearr_207046_207083 = state_207015__$1;(statearr_207046_207083[2] = null);
(statearr_207046_207083[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 18))
{var inst_206983 = (state_207015[2]);var state_207015__$1 = state_207015;var statearr_207047_207084 = state_207015__$1;(statearr_207047_207084[2] = inst_206983);
(statearr_207047_207084[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 19))
{var state_207015__$1 = state_207015;var statearr_207048_207085 = state_207015__$1;(statearr_207048_207085[2] = null);
(statearr_207048_207085[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 20))
{var state_207015__$1 = state_207015;var statearr_207049_207086 = state_207015__$1;(statearr_207049_207086[2] = null);
(statearr_207049_207086[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 21))
{var inst_207008 = (state_207015[2]);var state_207015__$1 = (function (){var statearr_207050 = state_207015;(statearr_207050[17] = inst_207008);
return statearr_207050;
})();var statearr_207051_207087 = state_207015__$1;(statearr_207051_207087[2] = null);
(statearr_207051_207087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 22))
{var inst_207005 = (state_207015[2]);var state_207015__$1 = state_207015;var statearr_207052_207088 = state_207015__$1;(statearr_207052_207088[2] = inst_207005);
(statearr_207052_207088[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 23))
{var inst_206992 = (state_207015[13]);var inst_206996 = (state_207015[2]);var inst_206997 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_206992);var state_207015__$1 = (function (){var statearr_207053 = state_207015;(statearr_207053[18] = inst_206996);
return statearr_207053;
})();var statearr_207054_207089 = state_207015__$1;(statearr_207054_207089[2] = inst_206997);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207015__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207016 === 24))
{var inst_206994 = (state_207015[12]);var inst_206944 = (state_207015[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_207015,23,Object,null,22);var inst_207001 = cljs.core.async.muxch_STAR_.call(null,inst_206994);var state_207015__$1 = state_207015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207015__$1,25,inst_207001,inst_206944);
} else
{if((state_val_207016 === 25))
{var inst_207003 = (state_207015[2]);var state_207015__$1 = state_207015;var statearr_207055_207090 = state_207015__$1;(statearr_207055_207090[2] = inst_207003);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207015__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_207059 = (new Array(19));(statearr_207059[0] = state_machine__10214__auto__);
(statearr_207059[1] = 1);
return statearr_207059;
});
var state_machine__10214__auto____1 = (function (state_207015){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_207015);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e207060){if((e207060 instanceof Object))
{var ex__10217__auto__ = e207060;var statearr_207061_207091 = state_207015;(statearr_207061_207091[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e207060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__207092 = state_207015;
state_207015 = G__207092;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_207015){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_207015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_207062 = f__10284__auto__.call(null);(statearr_207062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___207063);
return statearr_207062;
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
,cljs.core.range.call(null,cnt));var c__10283__auto___207229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_207199){var state_val_207200 = (state_207199[1]);if((state_val_207200 === 1))
{var state_207199__$1 = state_207199;var statearr_207201_207230 = state_207199__$1;(statearr_207201_207230[2] = null);
(statearr_207201_207230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 2))
{var inst_207162 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_207163 = 0;var state_207199__$1 = (function (){var statearr_207202 = state_207199;(statearr_207202[7] = inst_207162);
(statearr_207202[8] = inst_207163);
return statearr_207202;
})();var statearr_207203_207231 = state_207199__$1;(statearr_207203_207231[2] = null);
(statearr_207203_207231[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 3))
{var inst_207197 = (state_207199[2]);var state_207199__$1 = state_207199;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207199__$1,inst_207197);
} else
{if((state_val_207200 === 4))
{var inst_207163 = (state_207199[8]);var inst_207165 = (inst_207163 < cnt);var state_207199__$1 = state_207199;if(cljs.core.truth_(inst_207165))
{var statearr_207204_207232 = state_207199__$1;(statearr_207204_207232[1] = 6);
} else
{var statearr_207205_207233 = state_207199__$1;(statearr_207205_207233[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 5))
{var inst_207183 = (state_207199[2]);var state_207199__$1 = (function (){var statearr_207206 = state_207199;(statearr_207206[9] = inst_207183);
return statearr_207206;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207199__$1,12,dchan);
} else
{if((state_val_207200 === 6))
{var state_207199__$1 = state_207199;var statearr_207207_207234 = state_207199__$1;(statearr_207207_207234[2] = null);
(statearr_207207_207234[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 7))
{var state_207199__$1 = state_207199;var statearr_207208_207235 = state_207199__$1;(statearr_207208_207235[2] = null);
(statearr_207208_207235[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 8))
{var inst_207181 = (state_207199[2]);var state_207199__$1 = state_207199;var statearr_207209_207236 = state_207199__$1;(statearr_207209_207236[2] = inst_207181);
(statearr_207209_207236[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 9))
{var inst_207163 = (state_207199[8]);var inst_207176 = (state_207199[2]);var inst_207177 = (inst_207163 + 1);var inst_207163__$1 = inst_207177;var state_207199__$1 = (function (){var statearr_207210 = state_207199;(statearr_207210[10] = inst_207176);
(statearr_207210[8] = inst_207163__$1);
return statearr_207210;
})();var statearr_207211_207237 = state_207199__$1;(statearr_207211_207237[2] = null);
(statearr_207211_207237[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 10))
{var inst_207167 = (state_207199[2]);var inst_207168 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_207199__$1 = (function (){var statearr_207212 = state_207199;(statearr_207212[11] = inst_207167);
return statearr_207212;
})();var statearr_207213_207238 = state_207199__$1;(statearr_207213_207238[2] = inst_207168);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207199__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 11))
{var inst_207163 = (state_207199[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_207199,10,Object,null,9);var inst_207172 = chs__$1.call(null,inst_207163);var inst_207173 = done.call(null,inst_207163);var inst_207174 = cljs.core.async.take_BANG_.call(null,inst_207172,inst_207173);var state_207199__$1 = state_207199;var statearr_207214_207239 = state_207199__$1;(statearr_207214_207239[2] = inst_207174);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207199__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 12))
{var inst_207185 = (state_207199[12]);var inst_207185__$1 = (state_207199[2]);var inst_207186 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_207185__$1);var state_207199__$1 = (function (){var statearr_207215 = state_207199;(statearr_207215[12] = inst_207185__$1);
return statearr_207215;
})();if(cljs.core.truth_(inst_207186))
{var statearr_207216_207240 = state_207199__$1;(statearr_207216_207240[1] = 13);
} else
{var statearr_207217_207241 = state_207199__$1;(statearr_207217_207241[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 13))
{var inst_207188 = cljs.core.async.close_BANG_.call(null,out);var state_207199__$1 = state_207199;var statearr_207218_207242 = state_207199__$1;(statearr_207218_207242[2] = inst_207188);
(statearr_207218_207242[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 14))
{var inst_207185 = (state_207199[12]);var inst_207190 = cljs.core.apply.call(null,f,inst_207185);var state_207199__$1 = state_207199;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207199__$1,16,out,inst_207190);
} else
{if((state_val_207200 === 15))
{var inst_207195 = (state_207199[2]);var state_207199__$1 = state_207199;var statearr_207219_207243 = state_207199__$1;(statearr_207219_207243[2] = inst_207195);
(statearr_207219_207243[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207200 === 16))
{var inst_207192 = (state_207199[2]);var state_207199__$1 = (function (){var statearr_207220 = state_207199;(statearr_207220[13] = inst_207192);
return statearr_207220;
})();var statearr_207221_207244 = state_207199__$1;(statearr_207221_207244[2] = null);
(statearr_207221_207244[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_207225 = (new Array(14));(statearr_207225[0] = state_machine__10214__auto__);
(statearr_207225[1] = 1);
return statearr_207225;
});
var state_machine__10214__auto____1 = (function (state_207199){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_207199);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e207226){if((e207226 instanceof Object))
{var ex__10217__auto__ = e207226;var statearr_207227_207245 = state_207199;(statearr_207227_207245[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207199);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e207226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__207246 = state_207199;
state_207199 = G__207246;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_207199){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_207199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_207228 = f__10284__auto__.call(null);(statearr_207228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___207229);
return statearr_207228;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___207354 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_207330){var state_val_207331 = (state_207330[1]);if((state_val_207331 === 1))
{var inst_207301 = cljs.core.vec.call(null,chs);var inst_207302 = inst_207301;var state_207330__$1 = (function (){var statearr_207332 = state_207330;(statearr_207332[7] = inst_207302);
return statearr_207332;
})();var statearr_207333_207355 = state_207330__$1;(statearr_207333_207355[2] = null);
(statearr_207333_207355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207331 === 2))
{var inst_207302 = (state_207330[7]);var inst_207304 = cljs.core.count.call(null,inst_207302);var inst_207305 = (inst_207304 > 0);var state_207330__$1 = state_207330;if(cljs.core.truth_(inst_207305))
{var statearr_207334_207356 = state_207330__$1;(statearr_207334_207356[1] = 4);
} else
{var statearr_207335_207357 = state_207330__$1;(statearr_207335_207357[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207331 === 3))
{var inst_207328 = (state_207330[2]);var state_207330__$1 = state_207330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207330__$1,inst_207328);
} else
{if((state_val_207331 === 4))
{var inst_207302 = (state_207330[7]);var state_207330__$1 = state_207330;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_207330__$1,7,inst_207302);
} else
{if((state_val_207331 === 5))
{var inst_207324 = cljs.core.async.close_BANG_.call(null,out);var state_207330__$1 = state_207330;var statearr_207336_207358 = state_207330__$1;(statearr_207336_207358[2] = inst_207324);
(statearr_207336_207358[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207331 === 6))
{var inst_207326 = (state_207330[2]);var state_207330__$1 = state_207330;var statearr_207337_207359 = state_207330__$1;(statearr_207337_207359[2] = inst_207326);
(statearr_207337_207359[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207331 === 7))
{var inst_207309 = (state_207330[8]);var inst_207310 = (state_207330[9]);var inst_207309__$1 = (state_207330[2]);var inst_207310__$1 = cljs.core.nth.call(null,inst_207309__$1,0,null);var inst_207311 = cljs.core.nth.call(null,inst_207309__$1,1,null);var inst_207312 = (inst_207310__$1 == null);var state_207330__$1 = (function (){var statearr_207338 = state_207330;(statearr_207338[8] = inst_207309__$1);
(statearr_207338[10] = inst_207311);
(statearr_207338[9] = inst_207310__$1);
return statearr_207338;
})();if(cljs.core.truth_(inst_207312))
{var statearr_207339_207360 = state_207330__$1;(statearr_207339_207360[1] = 8);
} else
{var statearr_207340_207361 = state_207330__$1;(statearr_207340_207361[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207331 === 8))
{var inst_207302 = (state_207330[7]);var inst_207309 = (state_207330[8]);var inst_207311 = (state_207330[10]);var inst_207310 = (state_207330[9]);var inst_207314 = (function (){var c = inst_207311;var v = inst_207310;var vec__207307 = inst_207309;var cs = inst_207302;return ((function (c,v,vec__207307,cs,inst_207302,inst_207309,inst_207311,inst_207310,state_val_207331){
return (function (p1__207247_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__207247_SHARP_);
});
;})(c,v,vec__207307,cs,inst_207302,inst_207309,inst_207311,inst_207310,state_val_207331))
})();var inst_207315 = cljs.core.filterv.call(null,inst_207314,inst_207302);var inst_207302__$1 = inst_207315;var state_207330__$1 = (function (){var statearr_207341 = state_207330;(statearr_207341[7] = inst_207302__$1);
return statearr_207341;
})();var statearr_207342_207362 = state_207330__$1;(statearr_207342_207362[2] = null);
(statearr_207342_207362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207331 === 9))
{var inst_207310 = (state_207330[9]);var state_207330__$1 = state_207330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207330__$1,11,out,inst_207310);
} else
{if((state_val_207331 === 10))
{var inst_207322 = (state_207330[2]);var state_207330__$1 = state_207330;var statearr_207344_207363 = state_207330__$1;(statearr_207344_207363[2] = inst_207322);
(statearr_207344_207363[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207331 === 11))
{var inst_207302 = (state_207330[7]);var inst_207319 = (state_207330[2]);var tmp207343 = inst_207302;var inst_207302__$1 = tmp207343;var state_207330__$1 = (function (){var statearr_207345 = state_207330;(statearr_207345[7] = inst_207302__$1);
(statearr_207345[11] = inst_207319);
return statearr_207345;
})();var statearr_207346_207364 = state_207330__$1;(statearr_207346_207364[2] = null);
(statearr_207346_207364[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_207350 = (new Array(12));(statearr_207350[0] = state_machine__10214__auto__);
(statearr_207350[1] = 1);
return statearr_207350;
});
var state_machine__10214__auto____1 = (function (state_207330){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_207330);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e207351){if((e207351 instanceof Object))
{var ex__10217__auto__ = e207351;var statearr_207352_207365 = state_207330;(statearr_207352_207365[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207330);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e207351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__207366 = state_207330;
state_207330 = G__207366;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_207330){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_207330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_207353 = f__10284__auto__.call(null);(statearr_207353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___207354);
return statearr_207353;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___207459 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_207436){var state_val_207437 = (state_207436[1]);if((state_val_207437 === 1))
{var inst_207413 = 0;var state_207436__$1 = (function (){var statearr_207438 = state_207436;(statearr_207438[7] = inst_207413);
return statearr_207438;
})();var statearr_207439_207460 = state_207436__$1;(statearr_207439_207460[2] = null);
(statearr_207439_207460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207437 === 2))
{var inst_207413 = (state_207436[7]);var inst_207415 = (inst_207413 < n);var state_207436__$1 = state_207436;if(cljs.core.truth_(inst_207415))
{var statearr_207440_207461 = state_207436__$1;(statearr_207440_207461[1] = 4);
} else
{var statearr_207441_207462 = state_207436__$1;(statearr_207441_207462[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207437 === 3))
{var inst_207433 = (state_207436[2]);var inst_207434 = cljs.core.async.close_BANG_.call(null,out);var state_207436__$1 = (function (){var statearr_207442 = state_207436;(statearr_207442[8] = inst_207433);
return statearr_207442;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207436__$1,inst_207434);
} else
{if((state_val_207437 === 4))
{var state_207436__$1 = state_207436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207436__$1,7,ch);
} else
{if((state_val_207437 === 5))
{var state_207436__$1 = state_207436;var statearr_207443_207463 = state_207436__$1;(statearr_207443_207463[2] = null);
(statearr_207443_207463[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207437 === 6))
{var inst_207431 = (state_207436[2]);var state_207436__$1 = state_207436;var statearr_207444_207464 = state_207436__$1;(statearr_207444_207464[2] = inst_207431);
(statearr_207444_207464[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207437 === 7))
{var inst_207418 = (state_207436[9]);var inst_207418__$1 = (state_207436[2]);var inst_207419 = (inst_207418__$1 == null);var inst_207420 = cljs.core.not.call(null,inst_207419);var state_207436__$1 = (function (){var statearr_207445 = state_207436;(statearr_207445[9] = inst_207418__$1);
return statearr_207445;
})();if(inst_207420)
{var statearr_207446_207465 = state_207436__$1;(statearr_207446_207465[1] = 8);
} else
{var statearr_207447_207466 = state_207436__$1;(statearr_207447_207466[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207437 === 8))
{var inst_207418 = (state_207436[9]);var state_207436__$1 = state_207436;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207436__$1,11,out,inst_207418);
} else
{if((state_val_207437 === 9))
{var state_207436__$1 = state_207436;var statearr_207448_207467 = state_207436__$1;(statearr_207448_207467[2] = null);
(statearr_207448_207467[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207437 === 10))
{var inst_207428 = (state_207436[2]);var state_207436__$1 = state_207436;var statearr_207449_207468 = state_207436__$1;(statearr_207449_207468[2] = inst_207428);
(statearr_207449_207468[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207437 === 11))
{var inst_207413 = (state_207436[7]);var inst_207423 = (state_207436[2]);var inst_207424 = (inst_207413 + 1);var inst_207413__$1 = inst_207424;var state_207436__$1 = (function (){var statearr_207450 = state_207436;(statearr_207450[7] = inst_207413__$1);
(statearr_207450[10] = inst_207423);
return statearr_207450;
})();var statearr_207451_207469 = state_207436__$1;(statearr_207451_207469[2] = null);
(statearr_207451_207469[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_207455 = (new Array(11));(statearr_207455[0] = state_machine__10214__auto__);
(statearr_207455[1] = 1);
return statearr_207455;
});
var state_machine__10214__auto____1 = (function (state_207436){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_207436);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e207456){if((e207456 instanceof Object))
{var ex__10217__auto__ = e207456;var statearr_207457_207470 = state_207436;(statearr_207457_207470[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207436);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e207456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__207471 = state_207436;
state_207436 = G__207471;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_207436){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_207436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_207458 = f__10284__auto__.call(null);(statearr_207458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___207459);
return statearr_207458;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___207568 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_207543){var state_val_207544 = (state_207543[1]);if((state_val_207544 === 1))
{var inst_207520 = null;var state_207543__$1 = (function (){var statearr_207545 = state_207543;(statearr_207545[7] = inst_207520);
return statearr_207545;
})();var statearr_207546_207569 = state_207543__$1;(statearr_207546_207569[2] = null);
(statearr_207546_207569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207544 === 2))
{var state_207543__$1 = state_207543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207543__$1,4,ch);
} else
{if((state_val_207544 === 3))
{var inst_207540 = (state_207543[2]);var inst_207541 = cljs.core.async.close_BANG_.call(null,out);var state_207543__$1 = (function (){var statearr_207547 = state_207543;(statearr_207547[8] = inst_207540);
return statearr_207547;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207543__$1,inst_207541);
} else
{if((state_val_207544 === 4))
{var inst_207523 = (state_207543[9]);var inst_207523__$1 = (state_207543[2]);var inst_207524 = (inst_207523__$1 == null);var inst_207525 = cljs.core.not.call(null,inst_207524);var state_207543__$1 = (function (){var statearr_207548 = state_207543;(statearr_207548[9] = inst_207523__$1);
return statearr_207548;
})();if(inst_207525)
{var statearr_207549_207570 = state_207543__$1;(statearr_207549_207570[1] = 5);
} else
{var statearr_207550_207571 = state_207543__$1;(statearr_207550_207571[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207544 === 5))
{var inst_207523 = (state_207543[9]);var inst_207520 = (state_207543[7]);var inst_207527 = cljs.core._EQ_.call(null,inst_207523,inst_207520);var state_207543__$1 = state_207543;if(inst_207527)
{var statearr_207551_207572 = state_207543__$1;(statearr_207551_207572[1] = 8);
} else
{var statearr_207552_207573 = state_207543__$1;(statearr_207552_207573[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207544 === 6))
{var state_207543__$1 = state_207543;var statearr_207554_207574 = state_207543__$1;(statearr_207554_207574[2] = null);
(statearr_207554_207574[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207544 === 7))
{var inst_207538 = (state_207543[2]);var state_207543__$1 = state_207543;var statearr_207555_207575 = state_207543__$1;(statearr_207555_207575[2] = inst_207538);
(statearr_207555_207575[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207544 === 8))
{var inst_207520 = (state_207543[7]);var tmp207553 = inst_207520;var inst_207520__$1 = tmp207553;var state_207543__$1 = (function (){var statearr_207556 = state_207543;(statearr_207556[7] = inst_207520__$1);
return statearr_207556;
})();var statearr_207557_207576 = state_207543__$1;(statearr_207557_207576[2] = null);
(statearr_207557_207576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207544 === 9))
{var inst_207523 = (state_207543[9]);var state_207543__$1 = state_207543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207543__$1,11,out,inst_207523);
} else
{if((state_val_207544 === 10))
{var inst_207535 = (state_207543[2]);var state_207543__$1 = state_207543;var statearr_207558_207577 = state_207543__$1;(statearr_207558_207577[2] = inst_207535);
(statearr_207558_207577[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207544 === 11))
{var inst_207523 = (state_207543[9]);var inst_207532 = (state_207543[2]);var inst_207520 = inst_207523;var state_207543__$1 = (function (){var statearr_207559 = state_207543;(statearr_207559[7] = inst_207520);
(statearr_207559[10] = inst_207532);
return statearr_207559;
})();var statearr_207560_207578 = state_207543__$1;(statearr_207560_207578[2] = null);
(statearr_207560_207578[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_207564 = (new Array(11));(statearr_207564[0] = state_machine__10214__auto__);
(statearr_207564[1] = 1);
return statearr_207564;
});
var state_machine__10214__auto____1 = (function (state_207543){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_207543);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e207565){if((e207565 instanceof Object))
{var ex__10217__auto__ = e207565;var statearr_207566_207579 = state_207543;(statearr_207566_207579[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207543);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e207565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__207580 = state_207543;
state_207543 = G__207580;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_207543){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_207543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_207567 = f__10284__auto__.call(null);(statearr_207567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___207568);
return statearr_207567;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___207715 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_207685){var state_val_207686 = (state_207685[1]);if((state_val_207686 === 1))
{var inst_207648 = (new Array(n));var inst_207649 = inst_207648;var inst_207650 = 0;var state_207685__$1 = (function (){var statearr_207687 = state_207685;(statearr_207687[7] = inst_207649);
(statearr_207687[8] = inst_207650);
return statearr_207687;
})();var statearr_207688_207716 = state_207685__$1;(statearr_207688_207716[2] = null);
(statearr_207688_207716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207686 === 2))
{var state_207685__$1 = state_207685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207685__$1,4,ch);
} else
{if((state_val_207686 === 3))
{var inst_207683 = (state_207685[2]);var state_207685__$1 = state_207685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207685__$1,inst_207683);
} else
{if((state_val_207686 === 4))
{var inst_207653 = (state_207685[9]);var inst_207653__$1 = (state_207685[2]);var inst_207654 = (inst_207653__$1 == null);var inst_207655 = cljs.core.not.call(null,inst_207654);var state_207685__$1 = (function (){var statearr_207689 = state_207685;(statearr_207689[9] = inst_207653__$1);
return statearr_207689;
})();if(inst_207655)
{var statearr_207690_207717 = state_207685__$1;(statearr_207690_207717[1] = 5);
} else
{var statearr_207691_207718 = state_207685__$1;(statearr_207691_207718[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207686 === 5))
{var inst_207658 = (state_207685[10]);var inst_207653 = (state_207685[9]);var inst_207649 = (state_207685[7]);var inst_207650 = (state_207685[8]);var inst_207657 = (inst_207649[inst_207650] = inst_207653);var inst_207658__$1 = (inst_207650 + 1);var inst_207659 = (inst_207658__$1 < n);var state_207685__$1 = (function (){var statearr_207692 = state_207685;(statearr_207692[10] = inst_207658__$1);
(statearr_207692[11] = inst_207657);
return statearr_207692;
})();if(cljs.core.truth_(inst_207659))
{var statearr_207693_207719 = state_207685__$1;(statearr_207693_207719[1] = 8);
} else
{var statearr_207694_207720 = state_207685__$1;(statearr_207694_207720[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207686 === 6))
{var inst_207650 = (state_207685[8]);var inst_207671 = (inst_207650 > 0);var state_207685__$1 = state_207685;if(cljs.core.truth_(inst_207671))
{var statearr_207696_207721 = state_207685__$1;(statearr_207696_207721[1] = 12);
} else
{var statearr_207697_207722 = state_207685__$1;(statearr_207697_207722[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207686 === 7))
{var inst_207681 = (state_207685[2]);var state_207685__$1 = state_207685;var statearr_207698_207723 = state_207685__$1;(statearr_207698_207723[2] = inst_207681);
(statearr_207698_207723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207686 === 8))
{var inst_207658 = (state_207685[10]);var inst_207649 = (state_207685[7]);var tmp207695 = inst_207649;var inst_207649__$1 = tmp207695;var inst_207650 = inst_207658;var state_207685__$1 = (function (){var statearr_207699 = state_207685;(statearr_207699[7] = inst_207649__$1);
(statearr_207699[8] = inst_207650);
return statearr_207699;
})();var statearr_207700_207724 = state_207685__$1;(statearr_207700_207724[2] = null);
(statearr_207700_207724[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207686 === 9))
{var inst_207649 = (state_207685[7]);var inst_207663 = cljs.core.vec.call(null,inst_207649);var state_207685__$1 = state_207685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207685__$1,11,out,inst_207663);
} else
{if((state_val_207686 === 10))
{var inst_207669 = (state_207685[2]);var state_207685__$1 = state_207685;var statearr_207701_207725 = state_207685__$1;(statearr_207701_207725[2] = inst_207669);
(statearr_207701_207725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207686 === 11))
{var inst_207665 = (state_207685[2]);var inst_207666 = (new Array(n));var inst_207649 = inst_207666;var inst_207650 = 0;var state_207685__$1 = (function (){var statearr_207702 = state_207685;(statearr_207702[7] = inst_207649);
(statearr_207702[8] = inst_207650);
(statearr_207702[12] = inst_207665);
return statearr_207702;
})();var statearr_207703_207726 = state_207685__$1;(statearr_207703_207726[2] = null);
(statearr_207703_207726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207686 === 12))
{var inst_207649 = (state_207685[7]);var inst_207673 = cljs.core.vec.call(null,inst_207649);var state_207685__$1 = state_207685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207685__$1,15,out,inst_207673);
} else
{if((state_val_207686 === 13))
{var state_207685__$1 = state_207685;var statearr_207704_207727 = state_207685__$1;(statearr_207704_207727[2] = null);
(statearr_207704_207727[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207686 === 14))
{var inst_207678 = (state_207685[2]);var inst_207679 = cljs.core.async.close_BANG_.call(null,out);var state_207685__$1 = (function (){var statearr_207705 = state_207685;(statearr_207705[13] = inst_207678);
return statearr_207705;
})();var statearr_207706_207728 = state_207685__$1;(statearr_207706_207728[2] = inst_207679);
(statearr_207706_207728[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207686 === 15))
{var inst_207675 = (state_207685[2]);var state_207685__$1 = state_207685;var statearr_207707_207729 = state_207685__$1;(statearr_207707_207729[2] = inst_207675);
(statearr_207707_207729[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_207711 = (new Array(14));(statearr_207711[0] = state_machine__10214__auto__);
(statearr_207711[1] = 1);
return statearr_207711;
});
var state_machine__10214__auto____1 = (function (state_207685){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_207685);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e207712){if((e207712 instanceof Object))
{var ex__10217__auto__ = e207712;var statearr_207713_207730 = state_207685;(statearr_207713_207730[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207685);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e207712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__207731 = state_207685;
state_207685 = G__207731;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_207685){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_207685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_207714 = f__10284__auto__.call(null);(statearr_207714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___207715);
return statearr_207714;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___207874 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_207844){var state_val_207845 = (state_207844[1]);if((state_val_207845 === 1))
{var inst_207803 = (new Array(0));var inst_207804 = inst_207803;var inst_207805 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_207844__$1 = (function (){var statearr_207846 = state_207844;(statearr_207846[7] = inst_207804);
(statearr_207846[8] = inst_207805);
return statearr_207846;
})();var statearr_207847_207875 = state_207844__$1;(statearr_207847_207875[2] = null);
(statearr_207847_207875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207845 === 2))
{var state_207844__$1 = state_207844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207844__$1,4,ch);
} else
{if((state_val_207845 === 3))
{var inst_207842 = (state_207844[2]);var state_207844__$1 = state_207844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207844__$1,inst_207842);
} else
{if((state_val_207845 === 4))
{var inst_207808 = (state_207844[9]);var inst_207808__$1 = (state_207844[2]);var inst_207809 = (inst_207808__$1 == null);var inst_207810 = cljs.core.not.call(null,inst_207809);var state_207844__$1 = (function (){var statearr_207848 = state_207844;(statearr_207848[9] = inst_207808__$1);
return statearr_207848;
})();if(inst_207810)
{var statearr_207849_207876 = state_207844__$1;(statearr_207849_207876[1] = 5);
} else
{var statearr_207850_207877 = state_207844__$1;(statearr_207850_207877[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207845 === 5))
{var inst_207805 = (state_207844[8]);var inst_207812 = (state_207844[10]);var inst_207808 = (state_207844[9]);var inst_207812__$1 = f.call(null,inst_207808);var inst_207813 = cljs.core._EQ_.call(null,inst_207812__$1,inst_207805);var inst_207814 = cljs.core.keyword_identical_QMARK_.call(null,inst_207805,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_207815 = (inst_207813) || (inst_207814);var state_207844__$1 = (function (){var statearr_207851 = state_207844;(statearr_207851[10] = inst_207812__$1);
return statearr_207851;
})();if(cljs.core.truth_(inst_207815))
{var statearr_207852_207878 = state_207844__$1;(statearr_207852_207878[1] = 8);
} else
{var statearr_207853_207879 = state_207844__$1;(statearr_207853_207879[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207845 === 6))
{var inst_207804 = (state_207844[7]);var inst_207829 = inst_207804.length;var inst_207830 = (inst_207829 > 0);var state_207844__$1 = state_207844;if(cljs.core.truth_(inst_207830))
{var statearr_207855_207880 = state_207844__$1;(statearr_207855_207880[1] = 12);
} else
{var statearr_207856_207881 = state_207844__$1;(statearr_207856_207881[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207845 === 7))
{var inst_207840 = (state_207844[2]);var state_207844__$1 = state_207844;var statearr_207857_207882 = state_207844__$1;(statearr_207857_207882[2] = inst_207840);
(statearr_207857_207882[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207845 === 8))
{var inst_207804 = (state_207844[7]);var inst_207812 = (state_207844[10]);var inst_207808 = (state_207844[9]);var inst_207817 = inst_207804.push(inst_207808);var tmp207854 = inst_207804;var inst_207804__$1 = tmp207854;var inst_207805 = inst_207812;var state_207844__$1 = (function (){var statearr_207858 = state_207844;(statearr_207858[7] = inst_207804__$1);
(statearr_207858[8] = inst_207805);
(statearr_207858[11] = inst_207817);
return statearr_207858;
})();var statearr_207859_207883 = state_207844__$1;(statearr_207859_207883[2] = null);
(statearr_207859_207883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207845 === 9))
{var inst_207804 = (state_207844[7]);var inst_207820 = cljs.core.vec.call(null,inst_207804);var state_207844__$1 = state_207844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207844__$1,11,out,inst_207820);
} else
{if((state_val_207845 === 10))
{var inst_207827 = (state_207844[2]);var state_207844__$1 = state_207844;var statearr_207860_207884 = state_207844__$1;(statearr_207860_207884[2] = inst_207827);
(statearr_207860_207884[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207845 === 11))
{var inst_207812 = (state_207844[10]);var inst_207808 = (state_207844[9]);var inst_207822 = (state_207844[2]);var inst_207823 = (new Array(0));var inst_207824 = inst_207823.push(inst_207808);var inst_207804 = inst_207823;var inst_207805 = inst_207812;var state_207844__$1 = (function (){var statearr_207861 = state_207844;(statearr_207861[7] = inst_207804);
(statearr_207861[8] = inst_207805);
(statearr_207861[12] = inst_207824);
(statearr_207861[13] = inst_207822);
return statearr_207861;
})();var statearr_207862_207885 = state_207844__$1;(statearr_207862_207885[2] = null);
(statearr_207862_207885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207845 === 12))
{var inst_207804 = (state_207844[7]);var inst_207832 = cljs.core.vec.call(null,inst_207804);var state_207844__$1 = state_207844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_207844__$1,15,out,inst_207832);
} else
{if((state_val_207845 === 13))
{var state_207844__$1 = state_207844;var statearr_207863_207886 = state_207844__$1;(statearr_207863_207886[2] = null);
(statearr_207863_207886[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207845 === 14))
{var inst_207837 = (state_207844[2]);var inst_207838 = cljs.core.async.close_BANG_.call(null,out);var state_207844__$1 = (function (){var statearr_207864 = state_207844;(statearr_207864[14] = inst_207837);
return statearr_207864;
})();var statearr_207865_207887 = state_207844__$1;(statearr_207865_207887[2] = inst_207838);
(statearr_207865_207887[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_207845 === 15))
{var inst_207834 = (state_207844[2]);var state_207844__$1 = state_207844;var statearr_207866_207888 = state_207844__$1;(statearr_207866_207888[2] = inst_207834);
(statearr_207866_207888[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_207870 = (new Array(15));(statearr_207870[0] = state_machine__10214__auto__);
(statearr_207870[1] = 1);
return statearr_207870;
});
var state_machine__10214__auto____1 = (function (state_207844){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_207844);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e207871){if((e207871 instanceof Object))
{var ex__10217__auto__ = e207871;var statearr_207872_207889 = state_207844;(statearr_207872_207889[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207844);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e207871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__207890 = state_207844;
state_207844 = G__207890;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_207844){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_207844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_207873 = f__10284__auto__.call(null);(statearr_207873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___207874);
return statearr_207873;
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

//# sourceMappingURL=async.js.map