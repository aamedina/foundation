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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23358 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23358 = (function (f,fn_handler,meta23359){
this.f = f;
this.fn_handler = fn_handler;
this.meta23359 = meta23359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23358.cljs$lang$type = true;
cljs.core.async.t23358.cljs$lang$ctorStr = "cljs.core.async/t23358";
cljs.core.async.t23358.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t23358");
});
cljs.core.async.t23358.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23360){var self__ = this;
var _23360__$1 = this;return self__.meta23359;
});
cljs.core.async.t23358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23360,meta23359__$1){var self__ = this;
var _23360__$1 = this;return (new cljs.core.async.t23358(self__.f,self__.fn_handler,meta23359__$1));
});
cljs.core.async.__GT_t23358 = (function __GT_t23358(f__$1,fn_handler__$1,meta23359){return (new cljs.core.async.t23358(f__$1,fn_handler__$1,meta23359));
});
}
return (new cljs.core.async.t23358(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23362 = buff;if(G__23362)
{var bit__11523__auto__ = null;if(cljs.core.truth_((function (){var or__10897__auto__ = bit__11523__auto__;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return G__23362.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23362.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23362);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23362);
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
{var val_23363 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23363);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_23363);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__10885__auto__ = ret;if(cljs.core.truth_(and__10885__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__10885__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11720__auto___23364 = n;var x_23365 = 0;while(true){
if((x_23365 < n__11720__auto___23364))
{(a[x_23365] = 0);
{
var G__23366 = (x_23365 + 1);
x_23365 = G__23366;
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
var G__23367 = (i + 1);
i = G__23367;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23371 = (function (flag,alt_flag,meta23372){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23372 = meta23372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23371.cljs$lang$type = true;
cljs.core.async.t23371.cljs$lang$ctorStr = "cljs.core.async/t23371";
cljs.core.async.t23371.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t23371");
});
cljs.core.async.t23371.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t23371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t23371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23373){var self__ = this;
var _23373__$1 = this;return self__.meta23372;
});
cljs.core.async.t23371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23373,meta23372__$1){var self__ = this;
var _23373__$1 = this;return (new cljs.core.async.t23371(self__.flag,self__.alt_flag,meta23372__$1));
});
cljs.core.async.__GT_t23371 = (function __GT_t23371(flag__$1,alt_flag__$1,meta23372){return (new cljs.core.async.t23371(flag__$1,alt_flag__$1,meta23372));
});
}
return (new cljs.core.async.t23371(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23377 = (function (cb,flag,alt_handler,meta23378){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23378 = meta23378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23377.cljs$lang$type = true;
cljs.core.async.t23377.cljs$lang$ctorStr = "cljs.core.async/t23377";
cljs.core.async.t23377.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t23377");
});
cljs.core.async.t23377.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23379){var self__ = this;
var _23379__$1 = this;return self__.meta23378;
});
cljs.core.async.t23377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23379,meta23378__$1){var self__ = this;
var _23379__$1 = this;return (new cljs.core.async.t23377(self__.cb,self__.flag,self__.alt_handler,meta23378__$1));
});
cljs.core.async.__GT_t23377 = (function __GT_t23377(cb__$1,flag__$1,alt_handler__$1,meta23378){return (new cljs.core.async.t23377(cb__$1,flag__$1,alt_handler__$1,meta23378));
});
}
return (new cljs.core.async.t23377(cb,flag,alt_handler,null));
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
return (function (p1__23380_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23380_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10897__auto__ = wport;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23381 = (i + 1);
i = G__23381;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__10897__auto__ = ret;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__10885__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__10885__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__10885__auto__;
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
var alts_BANG___delegate = function (ports,p__23382){var map__23384 = p__23382;var map__23384__$1 = ((cljs.core.seq_QMARK_.call(null,map__23384))?cljs.core.apply.call(null,cljs.core.hash_map,map__23384):map__23384);var opts = map__23384__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23382 = null;if (arguments.length > 1) {
  p__23382 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23382);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23385){
var ports = cljs.core.first(arglist__23385);
var p__23382 = cljs.core.rest(arglist__23385);
return alts_BANG___delegate(ports,p__23382);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23393 = (function (ch,f,map_LT_,meta23394){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23394 = meta23394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23393.cljs$lang$type = true;
cljs.core.async.t23393.cljs$lang$ctorStr = "cljs.core.async/t23393";
cljs.core.async.t23393.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t23393");
});
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t23396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23396 = (function (fn1,_,meta23394,ch,f,map_LT_,meta23397){
this.fn1 = fn1;
this._ = _;
this.meta23394 = meta23394;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23397 = meta23397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23396.cljs$lang$type = true;
cljs.core.async.t23396.cljs$lang$ctorStr = "cljs.core.async/t23396";
cljs.core.async.t23396.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t23396");
});
cljs.core.async.t23396.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t23396.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t23396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__23386_SHARP_){return f1.call(null,(((p1__23386_SHARP_ == null))?null:self__.f.call(null,p1__23386_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t23396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23398){var self__ = this;
var _23398__$1 = this;return self__.meta23397;
});
cljs.core.async.t23396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23398,meta23397__$1){var self__ = this;
var _23398__$1 = this;return (new cljs.core.async.t23396(self__.fn1,self__._,self__.meta23394,self__.ch,self__.f,self__.map_LT_,meta23397__$1));
});
cljs.core.async.__GT_t23396 = (function __GT_t23396(fn1__$1,___$2,meta23394__$1,ch__$2,f__$2,map_LT___$2,meta23397){return (new cljs.core.async.t23396(fn1__$1,___$2,meta23394__$1,ch__$2,f__$2,map_LT___$2,meta23397));
});
}
return (new cljs.core.async.t23396(fn1,___$1,self__.meta23394,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__10885__auto__ = ret;if(cljs.core.truth_(and__10885__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__10885__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23395){var self__ = this;
var _23395__$1 = this;return self__.meta23394;
});
cljs.core.async.t23393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23395,meta23394__$1){var self__ = this;
var _23395__$1 = this;return (new cljs.core.async.t23393(self__.ch,self__.f,self__.map_LT_,meta23394__$1));
});
cljs.core.async.__GT_t23393 = (function __GT_t23393(ch__$1,f__$1,map_LT___$1,meta23394){return (new cljs.core.async.t23393(ch__$1,f__$1,map_LT___$1,meta23394));
});
}
return (new cljs.core.async.t23393(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23402 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23402 = (function (ch,f,map_GT_,meta23403){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23403 = meta23403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23402.cljs$lang$type = true;
cljs.core.async.t23402.cljs$lang$ctorStr = "cljs.core.async/t23402";
cljs.core.async.t23402.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t23402");
});
cljs.core.async.t23402.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t23402.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23402.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23404){var self__ = this;
var _23404__$1 = this;return self__.meta23403;
});
cljs.core.async.t23402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23404,meta23403__$1){var self__ = this;
var _23404__$1 = this;return (new cljs.core.async.t23402(self__.ch,self__.f,self__.map_GT_,meta23403__$1));
});
cljs.core.async.__GT_t23402 = (function __GT_t23402(ch__$1,f__$1,map_GT___$1,meta23403){return (new cljs.core.async.t23402(ch__$1,f__$1,map_GT___$1,meta23403));
});
}
return (new cljs.core.async.t23402(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23408 = (function (ch,p,filter_GT_,meta23409){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23409 = meta23409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23408.cljs$lang$type = true;
cljs.core.async.t23408.cljs$lang$ctorStr = "cljs.core.async/t23408";
cljs.core.async.t23408.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t23408");
});
cljs.core.async.t23408.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t23408.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23408.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23410){var self__ = this;
var _23410__$1 = this;return self__.meta23409;
});
cljs.core.async.t23408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23410,meta23409__$1){var self__ = this;
var _23410__$1 = this;return (new cljs.core.async.t23408(self__.ch,self__.p,self__.filter_GT_,meta23409__$1));
});
cljs.core.async.__GT_t23408 = (function __GT_t23408(ch__$1,p__$1,filter_GT___$1,meta23409){return (new cljs.core.async.t23408(ch__$1,p__$1,filter_GT___$1,meta23409));
});
}
return (new cljs.core.async.t23408(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___23493 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_23472){var state_val_23473 = (state_23472[1]);if((state_val_23473 === 1))
{var state_23472__$1 = state_23472;var statearr_23474_23494 = state_23472__$1;(statearr_23474_23494[2] = null);
(statearr_23474_23494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23473 === 2))
{var state_23472__$1 = state_23472;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23472__$1,4,ch);
} else
{if((state_val_23473 === 3))
{var inst_23470 = (state_23472[2]);var state_23472__$1 = state_23472;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23472__$1,inst_23470);
} else
{if((state_val_23473 === 4))
{var inst_23454 = (state_23472[7]);var inst_23454__$1 = (state_23472[2]);var inst_23455 = (inst_23454__$1 == null);var state_23472__$1 = (function (){var statearr_23475 = state_23472;(statearr_23475[7] = inst_23454__$1);
return statearr_23475;
})();if(cljs.core.truth_(inst_23455))
{var statearr_23476_23495 = state_23472__$1;(statearr_23476_23495[1] = 5);
} else
{var statearr_23477_23496 = state_23472__$1;(statearr_23477_23496[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23473 === 5))
{var inst_23457 = cljs.core.async.close_BANG_.call(null,out);var state_23472__$1 = state_23472;var statearr_23478_23497 = state_23472__$1;(statearr_23478_23497[2] = inst_23457);
(statearr_23478_23497[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23473 === 6))
{var inst_23454 = (state_23472[7]);var inst_23459 = p.call(null,inst_23454);var state_23472__$1 = state_23472;if(cljs.core.truth_(inst_23459))
{var statearr_23479_23498 = state_23472__$1;(statearr_23479_23498[1] = 8);
} else
{var statearr_23480_23499 = state_23472__$1;(statearr_23480_23499[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23473 === 7))
{var inst_23468 = (state_23472[2]);var state_23472__$1 = state_23472;var statearr_23481_23500 = state_23472__$1;(statearr_23481_23500[2] = inst_23468);
(statearr_23481_23500[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23473 === 8))
{var inst_23454 = (state_23472[7]);var state_23472__$1 = state_23472;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23472__$1,11,out,inst_23454);
} else
{if((state_val_23473 === 9))
{var state_23472__$1 = state_23472;var statearr_23482_23501 = state_23472__$1;(statearr_23482_23501[2] = null);
(statearr_23482_23501[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23473 === 10))
{var inst_23465 = (state_23472[2]);var state_23472__$1 = (function (){var statearr_23483 = state_23472;(statearr_23483[8] = inst_23465);
return statearr_23483;
})();var statearr_23484_23502 = state_23472__$1;(statearr_23484_23502[2] = null);
(statearr_23484_23502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23473 === 11))
{var inst_23462 = (state_23472[2]);var state_23472__$1 = state_23472;var statearr_23485_23503 = state_23472__$1;(statearr_23485_23503[2] = inst_23462);
(statearr_23485_23503[1] = 10);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_23489 = (new Array(9));(statearr_23489[0] = state_machine__13894__auto__);
(statearr_23489[1] = 1);
return statearr_23489;
});
var state_machine__13894__auto____1 = (function (state_23472){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_23472);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e23490){if((e23490 instanceof Object))
{var ex__13897__auto__ = e23490;var statearr_23491_23504 = state_23472;(statearr_23491_23504[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23472);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23505 = state_23472;
state_23472 = G__23505;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_23472){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_23472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_23492 = f__13964__auto__.call(null);(statearr_23492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___23493);
return statearr_23492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_23657){var state_val_23658 = (state_23657[1]);if((state_val_23658 === 1))
{var state_23657__$1 = state_23657;var statearr_23659_23696 = state_23657__$1;(statearr_23659_23696[2] = null);
(statearr_23659_23696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 2))
{var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23657__$1,4,in$);
} else
{if((state_val_23658 === 3))
{var inst_23655 = (state_23657[2]);var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23657__$1,inst_23655);
} else
{if((state_val_23658 === 4))
{var inst_23603 = (state_23657[7]);var inst_23603__$1 = (state_23657[2]);var inst_23604 = (inst_23603__$1 == null);var state_23657__$1 = (function (){var statearr_23660 = state_23657;(statearr_23660[7] = inst_23603__$1);
return statearr_23660;
})();if(cljs.core.truth_(inst_23604))
{var statearr_23661_23697 = state_23657__$1;(statearr_23661_23697[1] = 5);
} else
{var statearr_23662_23698 = state_23657__$1;(statearr_23662_23698[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 5))
{var inst_23606 = cljs.core.async.close_BANG_.call(null,out);var state_23657__$1 = state_23657;var statearr_23663_23699 = state_23657__$1;(statearr_23663_23699[2] = inst_23606);
(statearr_23663_23699[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 6))
{var inst_23603 = (state_23657[7]);var inst_23608 = f.call(null,inst_23603);var inst_23613 = cljs.core.seq.call(null,inst_23608);var inst_23614 = inst_23613;var inst_23615 = null;var inst_23616 = 0;var inst_23617 = 0;var state_23657__$1 = (function (){var statearr_23664 = state_23657;(statearr_23664[8] = inst_23616);
(statearr_23664[9] = inst_23615);
(statearr_23664[10] = inst_23617);
(statearr_23664[11] = inst_23614);
return statearr_23664;
})();var statearr_23665_23700 = state_23657__$1;(statearr_23665_23700[2] = null);
(statearr_23665_23700[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 7))
{var inst_23653 = (state_23657[2]);var state_23657__$1 = state_23657;var statearr_23666_23701 = state_23657__$1;(statearr_23666_23701[2] = inst_23653);
(statearr_23666_23701[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 8))
{var inst_23616 = (state_23657[8]);var inst_23617 = (state_23657[10]);var inst_23619 = (inst_23617 < inst_23616);var inst_23620 = inst_23619;var state_23657__$1 = state_23657;if(cljs.core.truth_(inst_23620))
{var statearr_23667_23702 = state_23657__$1;(statearr_23667_23702[1] = 10);
} else
{var statearr_23668_23703 = state_23657__$1;(statearr_23668_23703[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 9))
{var inst_23650 = (state_23657[2]);var state_23657__$1 = (function (){var statearr_23669 = state_23657;(statearr_23669[12] = inst_23650);
return statearr_23669;
})();var statearr_23670_23704 = state_23657__$1;(statearr_23670_23704[2] = null);
(statearr_23670_23704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 10))
{var inst_23615 = (state_23657[9]);var inst_23617 = (state_23657[10]);var inst_23622 = cljs.core._nth.call(null,inst_23615,inst_23617);var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23657__$1,13,out,inst_23622);
} else
{if((state_val_23658 === 11))
{var inst_23628 = (state_23657[13]);var inst_23614 = (state_23657[11]);var inst_23628__$1 = cljs.core.seq.call(null,inst_23614);var state_23657__$1 = (function (){var statearr_23674 = state_23657;(statearr_23674[13] = inst_23628__$1);
return statearr_23674;
})();if(inst_23628__$1)
{var statearr_23675_23705 = state_23657__$1;(statearr_23675_23705[1] = 14);
} else
{var statearr_23676_23706 = state_23657__$1;(statearr_23676_23706[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 12))
{var inst_23648 = (state_23657[2]);var state_23657__$1 = state_23657;var statearr_23677_23707 = state_23657__$1;(statearr_23677_23707[2] = inst_23648);
(statearr_23677_23707[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 13))
{var inst_23616 = (state_23657[8]);var inst_23615 = (state_23657[9]);var inst_23617 = (state_23657[10]);var inst_23614 = (state_23657[11]);var inst_23624 = (state_23657[2]);var inst_23625 = (inst_23617 + 1);var tmp23671 = inst_23616;var tmp23672 = inst_23615;var tmp23673 = inst_23614;var inst_23614__$1 = tmp23673;var inst_23615__$1 = tmp23672;var inst_23616__$1 = tmp23671;var inst_23617__$1 = inst_23625;var state_23657__$1 = (function (){var statearr_23678 = state_23657;(statearr_23678[8] = inst_23616__$1);
(statearr_23678[9] = inst_23615__$1);
(statearr_23678[10] = inst_23617__$1);
(statearr_23678[14] = inst_23624);
(statearr_23678[11] = inst_23614__$1);
return statearr_23678;
})();var statearr_23679_23708 = state_23657__$1;(statearr_23679_23708[2] = null);
(statearr_23679_23708[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 14))
{var inst_23628 = (state_23657[13]);var inst_23630 = cljs.core.chunked_seq_QMARK_.call(null,inst_23628);var state_23657__$1 = state_23657;if(inst_23630)
{var statearr_23680_23709 = state_23657__$1;(statearr_23680_23709[1] = 17);
} else
{var statearr_23681_23710 = state_23657__$1;(statearr_23681_23710[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 15))
{var state_23657__$1 = state_23657;var statearr_23682_23711 = state_23657__$1;(statearr_23682_23711[2] = null);
(statearr_23682_23711[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 16))
{var inst_23646 = (state_23657[2]);var state_23657__$1 = state_23657;var statearr_23683_23712 = state_23657__$1;(statearr_23683_23712[2] = inst_23646);
(statearr_23683_23712[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 17))
{var inst_23628 = (state_23657[13]);var inst_23632 = cljs.core.chunk_first.call(null,inst_23628);var inst_23633 = cljs.core.chunk_rest.call(null,inst_23628);var inst_23634 = cljs.core.count.call(null,inst_23632);var inst_23614 = inst_23633;var inst_23615 = inst_23632;var inst_23616 = inst_23634;var inst_23617 = 0;var state_23657__$1 = (function (){var statearr_23684 = state_23657;(statearr_23684[8] = inst_23616);
(statearr_23684[9] = inst_23615);
(statearr_23684[10] = inst_23617);
(statearr_23684[11] = inst_23614);
return statearr_23684;
})();var statearr_23685_23713 = state_23657__$1;(statearr_23685_23713[2] = null);
(statearr_23685_23713[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 18))
{var inst_23628 = (state_23657[13]);var inst_23637 = cljs.core.first.call(null,inst_23628);var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23657__$1,20,out,inst_23637);
} else
{if((state_val_23658 === 19))
{var inst_23643 = (state_23657[2]);var state_23657__$1 = state_23657;var statearr_23686_23714 = state_23657__$1;(statearr_23686_23714[2] = inst_23643);
(statearr_23686_23714[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23658 === 20))
{var inst_23628 = (state_23657[13]);var inst_23639 = (state_23657[2]);var inst_23640 = cljs.core.next.call(null,inst_23628);var inst_23614 = inst_23640;var inst_23615 = null;var inst_23616 = 0;var inst_23617 = 0;var state_23657__$1 = (function (){var statearr_23687 = state_23657;(statearr_23687[8] = inst_23616);
(statearr_23687[9] = inst_23615);
(statearr_23687[10] = inst_23617);
(statearr_23687[11] = inst_23614);
(statearr_23687[15] = inst_23639);
return statearr_23687;
})();var statearr_23688_23715 = state_23657__$1;(statearr_23688_23715[2] = null);
(statearr_23688_23715[1] = 8);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_23692 = (new Array(16));(statearr_23692[0] = state_machine__13894__auto__);
(statearr_23692[1] = 1);
return statearr_23692;
});
var state_machine__13894__auto____1 = (function (state_23657){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_23657);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e23693){if((e23693 instanceof Object))
{var ex__13897__auto__ = e23693;var statearr_23694_23716 = state_23657;(statearr_23694_23716[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23717 = state_23657;
state_23657 = G__23717;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_23657){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_23657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_23695 = f__13964__auto__.call(null);(statearr_23695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_23695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13963__auto___23798 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_23777){var state_val_23778 = (state_23777[1]);if((state_val_23778 === 1))
{var state_23777__$1 = state_23777;var statearr_23779_23799 = state_23777__$1;(statearr_23779_23799[2] = null);
(statearr_23779_23799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23778 === 2))
{var state_23777__$1 = state_23777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23777__$1,4,from);
} else
{if((state_val_23778 === 3))
{var inst_23775 = (state_23777[2]);var state_23777__$1 = state_23777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23777__$1,inst_23775);
} else
{if((state_val_23778 === 4))
{var inst_23760 = (state_23777[7]);var inst_23760__$1 = (state_23777[2]);var inst_23761 = (inst_23760__$1 == null);var state_23777__$1 = (function (){var statearr_23780 = state_23777;(statearr_23780[7] = inst_23760__$1);
return statearr_23780;
})();if(cljs.core.truth_(inst_23761))
{var statearr_23781_23800 = state_23777__$1;(statearr_23781_23800[1] = 5);
} else
{var statearr_23782_23801 = state_23777__$1;(statearr_23782_23801[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23778 === 5))
{var state_23777__$1 = state_23777;if(cljs.core.truth_(close_QMARK_))
{var statearr_23783_23802 = state_23777__$1;(statearr_23783_23802[1] = 8);
} else
{var statearr_23784_23803 = state_23777__$1;(statearr_23784_23803[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23778 === 6))
{var inst_23760 = (state_23777[7]);var state_23777__$1 = state_23777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23777__$1,11,to,inst_23760);
} else
{if((state_val_23778 === 7))
{var inst_23773 = (state_23777[2]);var state_23777__$1 = state_23777;var statearr_23785_23804 = state_23777__$1;(statearr_23785_23804[2] = inst_23773);
(statearr_23785_23804[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23778 === 8))
{var inst_23764 = cljs.core.async.close_BANG_.call(null,to);var state_23777__$1 = state_23777;var statearr_23786_23805 = state_23777__$1;(statearr_23786_23805[2] = inst_23764);
(statearr_23786_23805[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23778 === 9))
{var state_23777__$1 = state_23777;var statearr_23787_23806 = state_23777__$1;(statearr_23787_23806[2] = null);
(statearr_23787_23806[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23778 === 10))
{var inst_23767 = (state_23777[2]);var state_23777__$1 = state_23777;var statearr_23788_23807 = state_23777__$1;(statearr_23788_23807[2] = inst_23767);
(statearr_23788_23807[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23778 === 11))
{var inst_23770 = (state_23777[2]);var state_23777__$1 = (function (){var statearr_23789 = state_23777;(statearr_23789[8] = inst_23770);
return statearr_23789;
})();var statearr_23790_23808 = state_23777__$1;(statearr_23790_23808[2] = null);
(statearr_23790_23808[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_23794 = (new Array(9));(statearr_23794[0] = state_machine__13894__auto__);
(statearr_23794[1] = 1);
return statearr_23794;
});
var state_machine__13894__auto____1 = (function (state_23777){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_23777);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e23795){if((e23795 instanceof Object))
{var ex__13897__auto__ = e23795;var statearr_23796_23809 = state_23777;(statearr_23796_23809[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23810 = state_23777;
state_23777 = G__23810;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_23777){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_23777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_23797 = f__13964__auto__.call(null);(statearr_23797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___23798);
return statearr_23797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13963__auto___23897 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_23875){var state_val_23876 = (state_23875[1]);if((state_val_23876 === 1))
{var state_23875__$1 = state_23875;var statearr_23877_23898 = state_23875__$1;(statearr_23877_23898[2] = null);
(statearr_23877_23898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23876 === 2))
{var state_23875__$1 = state_23875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23875__$1,4,ch);
} else
{if((state_val_23876 === 3))
{var inst_23873 = (state_23875[2]);var state_23875__$1 = state_23875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23875__$1,inst_23873);
} else
{if((state_val_23876 === 4))
{var inst_23856 = (state_23875[7]);var inst_23856__$1 = (state_23875[2]);var inst_23857 = (inst_23856__$1 == null);var state_23875__$1 = (function (){var statearr_23878 = state_23875;(statearr_23878[7] = inst_23856__$1);
return statearr_23878;
})();if(cljs.core.truth_(inst_23857))
{var statearr_23879_23899 = state_23875__$1;(statearr_23879_23899[1] = 5);
} else
{var statearr_23880_23900 = state_23875__$1;(statearr_23880_23900[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23876 === 5))
{var inst_23859 = cljs.core.async.close_BANG_.call(null,tc);var inst_23860 = cljs.core.async.close_BANG_.call(null,fc);var state_23875__$1 = (function (){var statearr_23881 = state_23875;(statearr_23881[8] = inst_23859);
return statearr_23881;
})();var statearr_23882_23901 = state_23875__$1;(statearr_23882_23901[2] = inst_23860);
(statearr_23882_23901[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23876 === 6))
{var inst_23856 = (state_23875[7]);var inst_23862 = p.call(null,inst_23856);var state_23875__$1 = state_23875;if(cljs.core.truth_(inst_23862))
{var statearr_23883_23902 = state_23875__$1;(statearr_23883_23902[1] = 9);
} else
{var statearr_23884_23903 = state_23875__$1;(statearr_23884_23903[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23876 === 7))
{var inst_23871 = (state_23875[2]);var state_23875__$1 = state_23875;var statearr_23885_23904 = state_23875__$1;(statearr_23885_23904[2] = inst_23871);
(statearr_23885_23904[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23876 === 8))
{var inst_23868 = (state_23875[2]);var state_23875__$1 = (function (){var statearr_23886 = state_23875;(statearr_23886[9] = inst_23868);
return statearr_23886;
})();var statearr_23887_23905 = state_23875__$1;(statearr_23887_23905[2] = null);
(statearr_23887_23905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23876 === 9))
{var state_23875__$1 = state_23875;var statearr_23888_23906 = state_23875__$1;(statearr_23888_23906[2] = tc);
(statearr_23888_23906[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23876 === 10))
{var state_23875__$1 = state_23875;var statearr_23889_23907 = state_23875__$1;(statearr_23889_23907[2] = fc);
(statearr_23889_23907[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23876 === 11))
{var inst_23856 = (state_23875[7]);var inst_23866 = (state_23875[2]);var state_23875__$1 = state_23875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23875__$1,8,inst_23866,inst_23856);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_23893 = (new Array(10));(statearr_23893[0] = state_machine__13894__auto__);
(statearr_23893[1] = 1);
return statearr_23893;
});
var state_machine__13894__auto____1 = (function (state_23875){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_23875);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e23894){if((e23894 instanceof Object))
{var ex__13897__auto__ = e23894;var statearr_23895_23908 = state_23875;(statearr_23895_23908[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23875);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23909 = state_23875;
state_23875 = G__23909;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_23875){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_23875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_23896 = f__13964__auto__.call(null);(statearr_23896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___23897);
return statearr_23896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_23956){var state_val_23957 = (state_23956[1]);if((state_val_23957 === 7))
{var inst_23952 = (state_23956[2]);var state_23956__$1 = state_23956;var statearr_23958_23974 = state_23956__$1;(statearr_23958_23974[2] = inst_23952);
(statearr_23958_23974[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23957 === 6))
{var inst_23942 = (state_23956[7]);var inst_23945 = (state_23956[8]);var inst_23949 = f.call(null,inst_23942,inst_23945);var inst_23942__$1 = inst_23949;var state_23956__$1 = (function (){var statearr_23959 = state_23956;(statearr_23959[7] = inst_23942__$1);
return statearr_23959;
})();var statearr_23960_23975 = state_23956__$1;(statearr_23960_23975[2] = null);
(statearr_23960_23975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23957 === 5))
{var inst_23942 = (state_23956[7]);var state_23956__$1 = state_23956;var statearr_23961_23976 = state_23956__$1;(statearr_23961_23976[2] = inst_23942);
(statearr_23961_23976[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23957 === 4))
{var inst_23945 = (state_23956[8]);var inst_23945__$1 = (state_23956[2]);var inst_23946 = (inst_23945__$1 == null);var state_23956__$1 = (function (){var statearr_23962 = state_23956;(statearr_23962[8] = inst_23945__$1);
return statearr_23962;
})();if(cljs.core.truth_(inst_23946))
{var statearr_23963_23977 = state_23956__$1;(statearr_23963_23977[1] = 5);
} else
{var statearr_23964_23978 = state_23956__$1;(statearr_23964_23978[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23957 === 3))
{var inst_23954 = (state_23956[2]);var state_23956__$1 = state_23956;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23956__$1,inst_23954);
} else
{if((state_val_23957 === 2))
{var state_23956__$1 = state_23956;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23956__$1,4,ch);
} else
{if((state_val_23957 === 1))
{var inst_23942 = init;var state_23956__$1 = (function (){var statearr_23965 = state_23956;(statearr_23965[7] = inst_23942);
return statearr_23965;
})();var statearr_23966_23979 = state_23956__$1;(statearr_23966_23979[2] = null);
(statearr_23966_23979[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_23970 = (new Array(9));(statearr_23970[0] = state_machine__13894__auto__);
(statearr_23970[1] = 1);
return statearr_23970;
});
var state_machine__13894__auto____1 = (function (state_23956){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_23956);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e23971){if((e23971 instanceof Object))
{var ex__13897__auto__ = e23971;var statearr_23972_23980 = state_23956;(statearr_23972_23980[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23956);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23981 = state_23956;
state_23956 = G__23981;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_23956){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_23956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_23973 = f__13964__auto__.call(null);(statearr_23973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_23973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_24043){var state_val_24044 = (state_24043[1]);if((state_val_24044 === 1))
{var inst_24023 = cljs.core.seq.call(null,coll);var inst_24024 = inst_24023;var state_24043__$1 = (function (){var statearr_24045 = state_24043;(statearr_24045[7] = inst_24024);
return statearr_24045;
})();var statearr_24046_24064 = state_24043__$1;(statearr_24046_24064[2] = null);
(statearr_24046_24064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24044 === 2))
{var inst_24024 = (state_24043[7]);var state_24043__$1 = state_24043;if(cljs.core.truth_(inst_24024))
{var statearr_24047_24065 = state_24043__$1;(statearr_24047_24065[1] = 4);
} else
{var statearr_24048_24066 = state_24043__$1;(statearr_24048_24066[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24044 === 3))
{var inst_24041 = (state_24043[2]);var state_24043__$1 = state_24043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24043__$1,inst_24041);
} else
{if((state_val_24044 === 4))
{var inst_24024 = (state_24043[7]);var inst_24027 = cljs.core.first.call(null,inst_24024);var state_24043__$1 = state_24043;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24043__$1,7,ch,inst_24027);
} else
{if((state_val_24044 === 5))
{var state_24043__$1 = state_24043;if(cljs.core.truth_(close_QMARK_))
{var statearr_24049_24067 = state_24043__$1;(statearr_24049_24067[1] = 8);
} else
{var statearr_24050_24068 = state_24043__$1;(statearr_24050_24068[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24044 === 6))
{var inst_24039 = (state_24043[2]);var state_24043__$1 = state_24043;var statearr_24051_24069 = state_24043__$1;(statearr_24051_24069[2] = inst_24039);
(statearr_24051_24069[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24044 === 7))
{var inst_24024 = (state_24043[7]);var inst_24029 = (state_24043[2]);var inst_24030 = cljs.core.next.call(null,inst_24024);var inst_24024__$1 = inst_24030;var state_24043__$1 = (function (){var statearr_24052 = state_24043;(statearr_24052[7] = inst_24024__$1);
(statearr_24052[8] = inst_24029);
return statearr_24052;
})();var statearr_24053_24070 = state_24043__$1;(statearr_24053_24070[2] = null);
(statearr_24053_24070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24044 === 8))
{var inst_24034 = cljs.core.async.close_BANG_.call(null,ch);var state_24043__$1 = state_24043;var statearr_24054_24071 = state_24043__$1;(statearr_24054_24071[2] = inst_24034);
(statearr_24054_24071[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24044 === 9))
{var state_24043__$1 = state_24043;var statearr_24055_24072 = state_24043__$1;(statearr_24055_24072[2] = null);
(statearr_24055_24072[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24044 === 10))
{var inst_24037 = (state_24043[2]);var state_24043__$1 = state_24043;var statearr_24056_24073 = state_24043__$1;(statearr_24056_24073[2] = inst_24037);
(statearr_24056_24073[1] = 6);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_24060 = (new Array(9));(statearr_24060[0] = state_machine__13894__auto__);
(statearr_24060[1] = 1);
return statearr_24060;
});
var state_machine__13894__auto____1 = (function (state_24043){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_24043);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e24061){if((e24061 instanceof Object))
{var ex__13897__auto__ = e24061;var statearr_24062_24074 = state_24043;(statearr_24062_24074[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24043);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24075 = state_24043;
state_24043 = G__24075;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_24043){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_24043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_24063 = f__13964__auto__.call(null);(statearr_24063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_24063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
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
cljs.core.async.Mux = (function (){var obj24077 = {};return obj24077;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__10885__auto__ = _;if(and__10885__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__11500__auto__ = (((_ == null))?null:_);return (function (){var or__10897__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24079 = {};return obj24079;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24294 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24294 = (function (cs,ch,mult,meta24295){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24295 = meta24295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24294.cljs$lang$type = true;
cljs.core.async.t24294.cljs$lang$ctorStr = "cljs.core.async/t24294";
cljs.core.async.t24294.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t24294");
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24294.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24294.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24296){var self__ = this;
var _24296__$1 = this;return self__.meta24295;
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24296,meta24295__$1){var self__ = this;
var _24296__$1 = this;return (new cljs.core.async.t24294(self__.cs,self__.ch,self__.mult,meta24295__$1));
});})(cs))
;
cljs.core.async.__GT_t24294 = ((function (cs){
return (function __GT_t24294(cs__$1,ch__$1,mult__$1,meta24295){return (new cljs.core.async.t24294(cs__$1,ch__$1,mult__$1,meta24295));
});})(cs))
;
}
return (new cljs.core.async.t24294(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13963__auto___24508 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_24426){var state_val_24427 = (state_24426[1]);if((state_val_24427 === 32))
{var inst_24375 = (state_24426[7]);var inst_24299 = (state_24426[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24426,31,Object,null,30);var inst_24382 = cljs.core.async.put_BANG_.call(null,inst_24375,inst_24299,done);var state_24426__$1 = state_24426;var statearr_24428_24509 = state_24426__$1;(statearr_24428_24509[2] = inst_24382);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24426__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 1))
{var state_24426__$1 = state_24426;var statearr_24429_24510 = state_24426__$1;(statearr_24429_24510[2] = null);
(statearr_24429_24510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 33))
{var inst_24388 = (state_24426[9]);var inst_24390 = cljs.core.chunked_seq_QMARK_.call(null,inst_24388);var state_24426__$1 = state_24426;if(inst_24390)
{var statearr_24430_24511 = state_24426__$1;(statearr_24430_24511[1] = 36);
} else
{var statearr_24431_24512 = state_24426__$1;(statearr_24431_24512[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 2))
{var state_24426__$1 = state_24426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24426__$1,4,ch);
} else
{if((state_val_24427 === 34))
{var state_24426__$1 = state_24426;var statearr_24432_24513 = state_24426__$1;(statearr_24432_24513[2] = null);
(statearr_24432_24513[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 3))
{var inst_24424 = (state_24426[2]);var state_24426__$1 = state_24426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24426__$1,inst_24424);
} else
{if((state_val_24427 === 35))
{var inst_24413 = (state_24426[2]);var state_24426__$1 = state_24426;var statearr_24433_24514 = state_24426__$1;(statearr_24433_24514[2] = inst_24413);
(statearr_24433_24514[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 4))
{var inst_24299 = (state_24426[8]);var inst_24299__$1 = (state_24426[2]);var inst_24300 = (inst_24299__$1 == null);var state_24426__$1 = (function (){var statearr_24434 = state_24426;(statearr_24434[8] = inst_24299__$1);
return statearr_24434;
})();if(cljs.core.truth_(inst_24300))
{var statearr_24435_24515 = state_24426__$1;(statearr_24435_24515[1] = 5);
} else
{var statearr_24436_24516 = state_24426__$1;(statearr_24436_24516[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 36))
{var inst_24388 = (state_24426[9]);var inst_24392 = cljs.core.chunk_first.call(null,inst_24388);var inst_24393 = cljs.core.chunk_rest.call(null,inst_24388);var inst_24394 = cljs.core.count.call(null,inst_24392);var inst_24367 = inst_24393;var inst_24368 = inst_24392;var inst_24369 = inst_24394;var inst_24370 = 0;var state_24426__$1 = (function (){var statearr_24437 = state_24426;(statearr_24437[10] = inst_24370);
(statearr_24437[11] = inst_24369);
(statearr_24437[12] = inst_24368);
(statearr_24437[13] = inst_24367);
return statearr_24437;
})();var statearr_24438_24517 = state_24426__$1;(statearr_24438_24517[2] = null);
(statearr_24438_24517[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 5))
{var inst_24306 = cljs.core.deref.call(null,cs);var inst_24307 = cljs.core.seq.call(null,inst_24306);var inst_24308 = inst_24307;var inst_24309 = null;var inst_24310 = 0;var inst_24311 = 0;var state_24426__$1 = (function (){var statearr_24439 = state_24426;(statearr_24439[14] = inst_24309);
(statearr_24439[15] = inst_24308);
(statearr_24439[16] = inst_24311);
(statearr_24439[17] = inst_24310);
return statearr_24439;
})();var statearr_24440_24518 = state_24426__$1;(statearr_24440_24518[2] = null);
(statearr_24440_24518[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 37))
{var inst_24388 = (state_24426[9]);var inst_24397 = cljs.core.first.call(null,inst_24388);var state_24426__$1 = (function (){var statearr_24441 = state_24426;(statearr_24441[18] = inst_24397);
return statearr_24441;
})();var statearr_24442_24519 = state_24426__$1;(statearr_24442_24519[2] = null);
(statearr_24442_24519[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 6))
{var inst_24358 = cljs.core.deref.call(null,cs);var inst_24359 = cljs.core.keys.call(null,inst_24358);var inst_24360 = cljs.core.count.call(null,inst_24359);var inst_24361 = cljs.core.reset_BANG_.call(null,dctr,inst_24360);var inst_24366 = cljs.core.seq.call(null,inst_24359);var inst_24367 = inst_24366;var inst_24368 = null;var inst_24369 = 0;var inst_24370 = 0;var state_24426__$1 = (function (){var statearr_24443 = state_24426;(statearr_24443[19] = inst_24361);
(statearr_24443[10] = inst_24370);
(statearr_24443[11] = inst_24369);
(statearr_24443[12] = inst_24368);
(statearr_24443[13] = inst_24367);
return statearr_24443;
})();var statearr_24444_24520 = state_24426__$1;(statearr_24444_24520[2] = null);
(statearr_24444_24520[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 38))
{var inst_24410 = (state_24426[2]);var state_24426__$1 = state_24426;var statearr_24445_24521 = state_24426__$1;(statearr_24445_24521[2] = inst_24410);
(statearr_24445_24521[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 7))
{var inst_24422 = (state_24426[2]);var state_24426__$1 = state_24426;var statearr_24446_24522 = state_24426__$1;(statearr_24446_24522[2] = inst_24422);
(statearr_24446_24522[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 39))
{var inst_24388 = (state_24426[9]);var inst_24406 = (state_24426[2]);var inst_24407 = cljs.core.next.call(null,inst_24388);var inst_24367 = inst_24407;var inst_24368 = null;var inst_24369 = 0;var inst_24370 = 0;var state_24426__$1 = (function (){var statearr_24447 = state_24426;(statearr_24447[20] = inst_24406);
(statearr_24447[10] = inst_24370);
(statearr_24447[11] = inst_24369);
(statearr_24447[12] = inst_24368);
(statearr_24447[13] = inst_24367);
return statearr_24447;
})();var statearr_24448_24523 = state_24426__$1;(statearr_24448_24523[2] = null);
(statearr_24448_24523[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 8))
{var inst_24311 = (state_24426[16]);var inst_24310 = (state_24426[17]);var inst_24313 = (inst_24311 < inst_24310);var inst_24314 = inst_24313;var state_24426__$1 = state_24426;if(cljs.core.truth_(inst_24314))
{var statearr_24449_24524 = state_24426__$1;(statearr_24449_24524[1] = 10);
} else
{var statearr_24450_24525 = state_24426__$1;(statearr_24450_24525[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 40))
{var inst_24397 = (state_24426[18]);var inst_24398 = (state_24426[2]);var inst_24399 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_24400 = cljs.core.async.untap_STAR_.call(null,m,inst_24397);var state_24426__$1 = (function (){var statearr_24451 = state_24426;(statearr_24451[21] = inst_24399);
(statearr_24451[22] = inst_24398);
return statearr_24451;
})();var statearr_24452_24526 = state_24426__$1;(statearr_24452_24526[2] = inst_24400);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24426__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 9))
{var inst_24356 = (state_24426[2]);var state_24426__$1 = state_24426;var statearr_24453_24527 = state_24426__$1;(statearr_24453_24527[2] = inst_24356);
(statearr_24453_24527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 41))
{var inst_24299 = (state_24426[8]);var inst_24397 = (state_24426[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24426,40,Object,null,39);var inst_24404 = cljs.core.async.put_BANG_.call(null,inst_24397,inst_24299,done);var state_24426__$1 = state_24426;var statearr_24454_24528 = state_24426__$1;(statearr_24454_24528[2] = inst_24404);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24426__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 10))
{var inst_24309 = (state_24426[14]);var inst_24311 = (state_24426[16]);var inst_24317 = cljs.core._nth.call(null,inst_24309,inst_24311);var inst_24318 = cljs.core.nth.call(null,inst_24317,0,null);var inst_24319 = cljs.core.nth.call(null,inst_24317,1,null);var state_24426__$1 = (function (){var statearr_24455 = state_24426;(statearr_24455[23] = inst_24318);
return statearr_24455;
})();if(cljs.core.truth_(inst_24319))
{var statearr_24456_24529 = state_24426__$1;(statearr_24456_24529[1] = 13);
} else
{var statearr_24457_24530 = state_24426__$1;(statearr_24457_24530[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 42))
{var inst_24419 = (state_24426[2]);var state_24426__$1 = (function (){var statearr_24458 = state_24426;(statearr_24458[24] = inst_24419);
return statearr_24458;
})();var statearr_24459_24531 = state_24426__$1;(statearr_24459_24531[2] = null);
(statearr_24459_24531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 11))
{var inst_24328 = (state_24426[25]);var inst_24308 = (state_24426[15]);var inst_24328__$1 = cljs.core.seq.call(null,inst_24308);var state_24426__$1 = (function (){var statearr_24460 = state_24426;(statearr_24460[25] = inst_24328__$1);
return statearr_24460;
})();if(inst_24328__$1)
{var statearr_24461_24532 = state_24426__$1;(statearr_24461_24532[1] = 16);
} else
{var statearr_24462_24533 = state_24426__$1;(statearr_24462_24533[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 12))
{var inst_24354 = (state_24426[2]);var state_24426__$1 = state_24426;var statearr_24463_24534 = state_24426__$1;(statearr_24463_24534[2] = inst_24354);
(statearr_24463_24534[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 13))
{var inst_24318 = (state_24426[23]);var inst_24321 = cljs.core.async.close_BANG_.call(null,inst_24318);var state_24426__$1 = state_24426;var statearr_24467_24535 = state_24426__$1;(statearr_24467_24535[2] = inst_24321);
(statearr_24467_24535[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 14))
{var state_24426__$1 = state_24426;var statearr_24468_24536 = state_24426__$1;(statearr_24468_24536[2] = null);
(statearr_24468_24536[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 15))
{var inst_24309 = (state_24426[14]);var inst_24308 = (state_24426[15]);var inst_24311 = (state_24426[16]);var inst_24310 = (state_24426[17]);var inst_24324 = (state_24426[2]);var inst_24325 = (inst_24311 + 1);var tmp24464 = inst_24309;var tmp24465 = inst_24308;var tmp24466 = inst_24310;var inst_24308__$1 = tmp24465;var inst_24309__$1 = tmp24464;var inst_24310__$1 = tmp24466;var inst_24311__$1 = inst_24325;var state_24426__$1 = (function (){var statearr_24469 = state_24426;(statearr_24469[14] = inst_24309__$1);
(statearr_24469[15] = inst_24308__$1);
(statearr_24469[26] = inst_24324);
(statearr_24469[16] = inst_24311__$1);
(statearr_24469[17] = inst_24310__$1);
return statearr_24469;
})();var statearr_24470_24537 = state_24426__$1;(statearr_24470_24537[2] = null);
(statearr_24470_24537[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 16))
{var inst_24328 = (state_24426[25]);var inst_24330 = cljs.core.chunked_seq_QMARK_.call(null,inst_24328);var state_24426__$1 = state_24426;if(inst_24330)
{var statearr_24471_24538 = state_24426__$1;(statearr_24471_24538[1] = 19);
} else
{var statearr_24472_24539 = state_24426__$1;(statearr_24472_24539[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 17))
{var state_24426__$1 = state_24426;var statearr_24473_24540 = state_24426__$1;(statearr_24473_24540[2] = null);
(statearr_24473_24540[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 18))
{var inst_24352 = (state_24426[2]);var state_24426__$1 = state_24426;var statearr_24474_24541 = state_24426__$1;(statearr_24474_24541[2] = inst_24352);
(statearr_24474_24541[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 19))
{var inst_24328 = (state_24426[25]);var inst_24332 = cljs.core.chunk_first.call(null,inst_24328);var inst_24333 = cljs.core.chunk_rest.call(null,inst_24328);var inst_24334 = cljs.core.count.call(null,inst_24332);var inst_24308 = inst_24333;var inst_24309 = inst_24332;var inst_24310 = inst_24334;var inst_24311 = 0;var state_24426__$1 = (function (){var statearr_24475 = state_24426;(statearr_24475[14] = inst_24309);
(statearr_24475[15] = inst_24308);
(statearr_24475[16] = inst_24311);
(statearr_24475[17] = inst_24310);
return statearr_24475;
})();var statearr_24476_24542 = state_24426__$1;(statearr_24476_24542[2] = null);
(statearr_24476_24542[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 20))
{var inst_24328 = (state_24426[25]);var inst_24338 = cljs.core.first.call(null,inst_24328);var inst_24339 = cljs.core.nth.call(null,inst_24338,0,null);var inst_24340 = cljs.core.nth.call(null,inst_24338,1,null);var state_24426__$1 = (function (){var statearr_24477 = state_24426;(statearr_24477[27] = inst_24339);
return statearr_24477;
})();if(cljs.core.truth_(inst_24340))
{var statearr_24478_24543 = state_24426__$1;(statearr_24478_24543[1] = 22);
} else
{var statearr_24479_24544 = state_24426__$1;(statearr_24479_24544[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 21))
{var inst_24349 = (state_24426[2]);var state_24426__$1 = state_24426;var statearr_24480_24545 = state_24426__$1;(statearr_24480_24545[2] = inst_24349);
(statearr_24480_24545[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 22))
{var inst_24339 = (state_24426[27]);var inst_24342 = cljs.core.async.close_BANG_.call(null,inst_24339);var state_24426__$1 = state_24426;var statearr_24481_24546 = state_24426__$1;(statearr_24481_24546[2] = inst_24342);
(statearr_24481_24546[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 23))
{var state_24426__$1 = state_24426;var statearr_24482_24547 = state_24426__$1;(statearr_24482_24547[2] = null);
(statearr_24482_24547[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 24))
{var inst_24328 = (state_24426[25]);var inst_24345 = (state_24426[2]);var inst_24346 = cljs.core.next.call(null,inst_24328);var inst_24308 = inst_24346;var inst_24309 = null;var inst_24310 = 0;var inst_24311 = 0;var state_24426__$1 = (function (){var statearr_24483 = state_24426;(statearr_24483[14] = inst_24309);
(statearr_24483[15] = inst_24308);
(statearr_24483[16] = inst_24311);
(statearr_24483[17] = inst_24310);
(statearr_24483[28] = inst_24345);
return statearr_24483;
})();var statearr_24484_24548 = state_24426__$1;(statearr_24484_24548[2] = null);
(statearr_24484_24548[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 25))
{var inst_24370 = (state_24426[10]);var inst_24369 = (state_24426[11]);var inst_24372 = (inst_24370 < inst_24369);var inst_24373 = inst_24372;var state_24426__$1 = state_24426;if(cljs.core.truth_(inst_24373))
{var statearr_24485_24549 = state_24426__$1;(statearr_24485_24549[1] = 27);
} else
{var statearr_24486_24550 = state_24426__$1;(statearr_24486_24550[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 26))
{var inst_24417 = (state_24426[2]);var state_24426__$1 = (function (){var statearr_24487 = state_24426;(statearr_24487[29] = inst_24417);
return statearr_24487;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24426__$1,42,dchan);
} else
{if((state_val_24427 === 27))
{var inst_24370 = (state_24426[10]);var inst_24368 = (state_24426[12]);var inst_24375 = cljs.core._nth.call(null,inst_24368,inst_24370);var state_24426__$1 = (function (){var statearr_24488 = state_24426;(statearr_24488[7] = inst_24375);
return statearr_24488;
})();var statearr_24489_24551 = state_24426__$1;(statearr_24489_24551[2] = null);
(statearr_24489_24551[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 28))
{var inst_24367 = (state_24426[13]);var inst_24388 = (state_24426[9]);var inst_24388__$1 = cljs.core.seq.call(null,inst_24367);var state_24426__$1 = (function (){var statearr_24493 = state_24426;(statearr_24493[9] = inst_24388__$1);
return statearr_24493;
})();if(inst_24388__$1)
{var statearr_24494_24552 = state_24426__$1;(statearr_24494_24552[1] = 33);
} else
{var statearr_24495_24553 = state_24426__$1;(statearr_24495_24553[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 29))
{var inst_24415 = (state_24426[2]);var state_24426__$1 = state_24426;var statearr_24496_24554 = state_24426__$1;(statearr_24496_24554[2] = inst_24415);
(statearr_24496_24554[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 30))
{var inst_24370 = (state_24426[10]);var inst_24369 = (state_24426[11]);var inst_24368 = (state_24426[12]);var inst_24367 = (state_24426[13]);var inst_24384 = (state_24426[2]);var inst_24385 = (inst_24370 + 1);var tmp24490 = inst_24369;var tmp24491 = inst_24368;var tmp24492 = inst_24367;var inst_24367__$1 = tmp24492;var inst_24368__$1 = tmp24491;var inst_24369__$1 = tmp24490;var inst_24370__$1 = inst_24385;var state_24426__$1 = (function (){var statearr_24497 = state_24426;(statearr_24497[10] = inst_24370__$1);
(statearr_24497[11] = inst_24369__$1);
(statearr_24497[12] = inst_24368__$1);
(statearr_24497[13] = inst_24367__$1);
(statearr_24497[30] = inst_24384);
return statearr_24497;
})();var statearr_24498_24555 = state_24426__$1;(statearr_24498_24555[2] = null);
(statearr_24498_24555[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24427 === 31))
{var inst_24375 = (state_24426[7]);var inst_24376 = (state_24426[2]);var inst_24377 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_24378 = cljs.core.async.untap_STAR_.call(null,m,inst_24375);var state_24426__$1 = (function (){var statearr_24499 = state_24426;(statearr_24499[31] = inst_24377);
(statearr_24499[32] = inst_24376);
return statearr_24499;
})();var statearr_24500_24556 = state_24426__$1;(statearr_24500_24556[2] = inst_24378);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24426__$1);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_24504 = (new Array(33));(statearr_24504[0] = state_machine__13894__auto__);
(statearr_24504[1] = 1);
return statearr_24504;
});
var state_machine__13894__auto____1 = (function (state_24426){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_24426);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e24505){if((e24505 instanceof Object))
{var ex__13897__auto__ = e24505;var statearr_24506_24557 = state_24426;(statearr_24506_24557[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24558 = state_24426;
state_24426 = G__24558;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_24426){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_24426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_24507 = f__13964__auto__.call(null);(statearr_24507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___24508);
return statearr_24507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
cljs.core.async.Mix = (function (){var obj24560 = {};return obj24560;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t24670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24670 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24671){
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
this.meta24671 = meta24671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24670.cljs$lang$type = true;
cljs.core.async.t24670.cljs$lang$ctorStr = "cljs.core.async/t24670";
cljs.core.async.t24670.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t24670");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24670.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24670.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24672){var self__ = this;
var _24672__$1 = this;return self__.meta24671;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24672,meta24671__$1){var self__ = this;
var _24672__$1 = this;return (new cljs.core.async.t24670(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24671__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24670 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24670(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24671){return (new cljs.core.async.t24670(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24671));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24670(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13963__auto___24779 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_24737){var state_val_24738 = (state_24737[1]);if((state_val_24738 === 1))
{var inst_24676 = (state_24737[7]);var inst_24676__$1 = calc_state.call(null);var inst_24677 = cljs.core.seq_QMARK_.call(null,inst_24676__$1);var state_24737__$1 = (function (){var statearr_24739 = state_24737;(statearr_24739[7] = inst_24676__$1);
return statearr_24739;
})();if(inst_24677)
{var statearr_24740_24780 = state_24737__$1;(statearr_24740_24780[1] = 2);
} else
{var statearr_24741_24781 = state_24737__$1;(statearr_24741_24781[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 2))
{var inst_24676 = (state_24737[7]);var inst_24679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24676);var state_24737__$1 = state_24737;var statearr_24742_24782 = state_24737__$1;(statearr_24742_24782[2] = inst_24679);
(statearr_24742_24782[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 3))
{var inst_24676 = (state_24737[7]);var state_24737__$1 = state_24737;var statearr_24743_24783 = state_24737__$1;(statearr_24743_24783[2] = inst_24676);
(statearr_24743_24783[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 4))
{var inst_24676 = (state_24737[7]);var inst_24682 = (state_24737[2]);var inst_24683 = cljs.core.get.call(null,inst_24682,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_24684 = cljs.core.get.call(null,inst_24682,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_24685 = cljs.core.get.call(null,inst_24682,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_24686 = inst_24676;var state_24737__$1 = (function (){var statearr_24744 = state_24737;(statearr_24744[8] = inst_24683);
(statearr_24744[9] = inst_24684);
(statearr_24744[10] = inst_24686);
(statearr_24744[11] = inst_24685);
return statearr_24744;
})();var statearr_24745_24784 = state_24737__$1;(statearr_24745_24784[2] = null);
(statearr_24745_24784[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 5))
{var inst_24686 = (state_24737[10]);var inst_24689 = cljs.core.seq_QMARK_.call(null,inst_24686);var state_24737__$1 = state_24737;if(inst_24689)
{var statearr_24746_24785 = state_24737__$1;(statearr_24746_24785[1] = 7);
} else
{var statearr_24747_24786 = state_24737__$1;(statearr_24747_24786[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 6))
{var inst_24735 = (state_24737[2]);var state_24737__$1 = state_24737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24737__$1,inst_24735);
} else
{if((state_val_24738 === 7))
{var inst_24686 = (state_24737[10]);var inst_24691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24686);var state_24737__$1 = state_24737;var statearr_24748_24787 = state_24737__$1;(statearr_24748_24787[2] = inst_24691);
(statearr_24748_24787[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 8))
{var inst_24686 = (state_24737[10]);var state_24737__$1 = state_24737;var statearr_24749_24788 = state_24737__$1;(statearr_24749_24788[2] = inst_24686);
(statearr_24749_24788[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 9))
{var inst_24694 = (state_24737[12]);var inst_24694__$1 = (state_24737[2]);var inst_24695 = cljs.core.get.call(null,inst_24694__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_24696 = cljs.core.get.call(null,inst_24694__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_24697 = cljs.core.get.call(null,inst_24694__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_24737__$1 = (function (){var statearr_24750 = state_24737;(statearr_24750[13] = inst_24697);
(statearr_24750[14] = inst_24696);
(statearr_24750[12] = inst_24694__$1);
return statearr_24750;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24737__$1,10,inst_24695);
} else
{if((state_val_24738 === 10))
{var inst_24701 = (state_24737[15]);var inst_24702 = (state_24737[16]);var inst_24700 = (state_24737[2]);var inst_24701__$1 = cljs.core.nth.call(null,inst_24700,0,null);var inst_24702__$1 = cljs.core.nth.call(null,inst_24700,1,null);var inst_24703 = (inst_24701__$1 == null);var inst_24704 = cljs.core._EQ_.call(null,inst_24702__$1,change);var inst_24705 = (inst_24703) || (inst_24704);var state_24737__$1 = (function (){var statearr_24751 = state_24737;(statearr_24751[15] = inst_24701__$1);
(statearr_24751[16] = inst_24702__$1);
return statearr_24751;
})();if(cljs.core.truth_(inst_24705))
{var statearr_24752_24789 = state_24737__$1;(statearr_24752_24789[1] = 11);
} else
{var statearr_24753_24790 = state_24737__$1;(statearr_24753_24790[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 11))
{var inst_24701 = (state_24737[15]);var inst_24707 = (inst_24701 == null);var state_24737__$1 = state_24737;if(cljs.core.truth_(inst_24707))
{var statearr_24754_24791 = state_24737__$1;(statearr_24754_24791[1] = 14);
} else
{var statearr_24755_24792 = state_24737__$1;(statearr_24755_24792[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 12))
{var inst_24697 = (state_24737[13]);var inst_24716 = (state_24737[17]);var inst_24702 = (state_24737[16]);var inst_24716__$1 = inst_24697.call(null,inst_24702);var state_24737__$1 = (function (){var statearr_24756 = state_24737;(statearr_24756[17] = inst_24716__$1);
return statearr_24756;
})();if(cljs.core.truth_(inst_24716__$1))
{var statearr_24757_24793 = state_24737__$1;(statearr_24757_24793[1] = 17);
} else
{var statearr_24758_24794 = state_24737__$1;(statearr_24758_24794[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 13))
{var inst_24733 = (state_24737[2]);var state_24737__$1 = state_24737;var statearr_24759_24795 = state_24737__$1;(statearr_24759_24795[2] = inst_24733);
(statearr_24759_24795[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 14))
{var inst_24702 = (state_24737[16]);var inst_24709 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24702);var state_24737__$1 = state_24737;var statearr_24760_24796 = state_24737__$1;(statearr_24760_24796[2] = inst_24709);
(statearr_24760_24796[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 15))
{var state_24737__$1 = state_24737;var statearr_24761_24797 = state_24737__$1;(statearr_24761_24797[2] = null);
(statearr_24761_24797[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 16))
{var inst_24712 = (state_24737[2]);var inst_24713 = calc_state.call(null);var inst_24686 = inst_24713;var state_24737__$1 = (function (){var statearr_24762 = state_24737;(statearr_24762[18] = inst_24712);
(statearr_24762[10] = inst_24686);
return statearr_24762;
})();var statearr_24763_24798 = state_24737__$1;(statearr_24763_24798[2] = null);
(statearr_24763_24798[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 17))
{var inst_24716 = (state_24737[17]);var state_24737__$1 = state_24737;var statearr_24764_24799 = state_24737__$1;(statearr_24764_24799[2] = inst_24716);
(statearr_24764_24799[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 18))
{var inst_24697 = (state_24737[13]);var inst_24696 = (state_24737[14]);var inst_24702 = (state_24737[16]);var inst_24719 = cljs.core.empty_QMARK_.call(null,inst_24697);var inst_24720 = inst_24696.call(null,inst_24702);var inst_24721 = cljs.core.not.call(null,inst_24720);var inst_24722 = (inst_24719) && (inst_24721);var state_24737__$1 = state_24737;var statearr_24765_24800 = state_24737__$1;(statearr_24765_24800[2] = inst_24722);
(statearr_24765_24800[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 19))
{var inst_24724 = (state_24737[2]);var state_24737__$1 = state_24737;if(cljs.core.truth_(inst_24724))
{var statearr_24766_24801 = state_24737__$1;(statearr_24766_24801[1] = 20);
} else
{var statearr_24767_24802 = state_24737__$1;(statearr_24767_24802[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 20))
{var inst_24701 = (state_24737[15]);var state_24737__$1 = state_24737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24737__$1,23,out,inst_24701);
} else
{if((state_val_24738 === 21))
{var state_24737__$1 = state_24737;var statearr_24768_24803 = state_24737__$1;(statearr_24768_24803[2] = null);
(statearr_24768_24803[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 22))
{var inst_24694 = (state_24737[12]);var inst_24730 = (state_24737[2]);var inst_24686 = inst_24694;var state_24737__$1 = (function (){var statearr_24769 = state_24737;(statearr_24769[19] = inst_24730);
(statearr_24769[10] = inst_24686);
return statearr_24769;
})();var statearr_24770_24804 = state_24737__$1;(statearr_24770_24804[2] = null);
(statearr_24770_24804[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24738 === 23))
{var inst_24727 = (state_24737[2]);var state_24737__$1 = state_24737;var statearr_24771_24805 = state_24737__$1;(statearr_24771_24805[2] = inst_24727);
(statearr_24771_24805[1] = 22);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_24775 = (new Array(20));(statearr_24775[0] = state_machine__13894__auto__);
(statearr_24775[1] = 1);
return statearr_24775;
});
var state_machine__13894__auto____1 = (function (state_24737){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_24737);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e24776){if((e24776 instanceof Object))
{var ex__13897__auto__ = e24776;var statearr_24777_24806 = state_24737;(statearr_24777_24806[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24807 = state_24737;
state_24737 = G__24807;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_24737){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_24737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_24778 = f__13964__auto__.call(null);(statearr_24778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___24779);
return statearr_24778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
cljs.core.async.Pub = (function (){var obj24809 = {};return obj24809;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
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
return (function (topic){var or__10897__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10897__auto__,mults){
return (function (p1__24810_SHARP_){if(cljs.core.truth_(p1__24810_SHARP_.call(null,topic)))
{return p1__24810_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24810_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10897__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24935 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24936){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24936 = meta24936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24935.cljs$lang$type = true;
cljs.core.async.t24935.cljs$lang$ctorStr = "cljs.core.async/t24935";
cljs.core.async.t24935.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t24935");
});})(mults,ensure_mult))
;
cljs.core.async.t24935.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24935.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24937){var self__ = this;
var _24937__$1 = this;return self__.meta24936;
});})(mults,ensure_mult))
;
cljs.core.async.t24935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24937,meta24936__$1){var self__ = this;
var _24937__$1 = this;return (new cljs.core.async.t24935(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24936__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24935 = ((function (mults,ensure_mult){
return (function __GT_t24935(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24936){return (new cljs.core.async.t24935(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24936));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24935(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13963__auto___25059 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_25011){var state_val_25012 = (state_25011[1]);if((state_val_25012 === 1))
{var state_25011__$1 = state_25011;var statearr_25013_25060 = state_25011__$1;(statearr_25013_25060[2] = null);
(statearr_25013_25060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 2))
{var state_25011__$1 = state_25011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25011__$1,4,ch);
} else
{if((state_val_25012 === 3))
{var inst_25009 = (state_25011[2]);var state_25011__$1 = state_25011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25011__$1,inst_25009);
} else
{if((state_val_25012 === 4))
{var inst_24940 = (state_25011[7]);var inst_24940__$1 = (state_25011[2]);var inst_24941 = (inst_24940__$1 == null);var state_25011__$1 = (function (){var statearr_25014 = state_25011;(statearr_25014[7] = inst_24940__$1);
return statearr_25014;
})();if(cljs.core.truth_(inst_24941))
{var statearr_25015_25061 = state_25011__$1;(statearr_25015_25061[1] = 5);
} else
{var statearr_25016_25062 = state_25011__$1;(statearr_25016_25062[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 5))
{var inst_24947 = cljs.core.deref.call(null,mults);var inst_24948 = cljs.core.vals.call(null,inst_24947);var inst_24949 = cljs.core.seq.call(null,inst_24948);var inst_24950 = inst_24949;var inst_24951 = null;var inst_24952 = 0;var inst_24953 = 0;var state_25011__$1 = (function (){var statearr_25017 = state_25011;(statearr_25017[8] = inst_24953);
(statearr_25017[9] = inst_24952);
(statearr_25017[10] = inst_24951);
(statearr_25017[11] = inst_24950);
return statearr_25017;
})();var statearr_25018_25063 = state_25011__$1;(statearr_25018_25063[2] = null);
(statearr_25018_25063[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 6))
{var inst_24988 = (state_25011[12]);var inst_24990 = (state_25011[13]);var inst_24940 = (state_25011[7]);var inst_24988__$1 = topic_fn.call(null,inst_24940);var inst_24989 = cljs.core.deref.call(null,mults);var inst_24990__$1 = cljs.core.get.call(null,inst_24989,inst_24988__$1);var state_25011__$1 = (function (){var statearr_25019 = state_25011;(statearr_25019[12] = inst_24988__$1);
(statearr_25019[13] = inst_24990__$1);
return statearr_25019;
})();if(cljs.core.truth_(inst_24990__$1))
{var statearr_25020_25064 = state_25011__$1;(statearr_25020_25064[1] = 19);
} else
{var statearr_25021_25065 = state_25011__$1;(statearr_25021_25065[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 7))
{var inst_25007 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25022_25066 = state_25011__$1;(statearr_25022_25066[2] = inst_25007);
(statearr_25022_25066[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 8))
{var inst_24953 = (state_25011[8]);var inst_24952 = (state_25011[9]);var inst_24955 = (inst_24953 < inst_24952);var inst_24956 = inst_24955;var state_25011__$1 = state_25011;if(cljs.core.truth_(inst_24956))
{var statearr_25026_25067 = state_25011__$1;(statearr_25026_25067[1] = 10);
} else
{var statearr_25027_25068 = state_25011__$1;(statearr_25027_25068[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 9))
{var inst_24986 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25028_25069 = state_25011__$1;(statearr_25028_25069[2] = inst_24986);
(statearr_25028_25069[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 10))
{var inst_24953 = (state_25011[8]);var inst_24952 = (state_25011[9]);var inst_24951 = (state_25011[10]);var inst_24950 = (state_25011[11]);var inst_24958 = cljs.core._nth.call(null,inst_24951,inst_24953);var inst_24959 = cljs.core.async.muxch_STAR_.call(null,inst_24958);var inst_24960 = cljs.core.async.close_BANG_.call(null,inst_24959);var inst_24961 = (inst_24953 + 1);var tmp25023 = inst_24952;var tmp25024 = inst_24951;var tmp25025 = inst_24950;var inst_24950__$1 = tmp25025;var inst_24951__$1 = tmp25024;var inst_24952__$1 = tmp25023;var inst_24953__$1 = inst_24961;var state_25011__$1 = (function (){var statearr_25029 = state_25011;(statearr_25029[8] = inst_24953__$1);
(statearr_25029[14] = inst_24960);
(statearr_25029[9] = inst_24952__$1);
(statearr_25029[10] = inst_24951__$1);
(statearr_25029[11] = inst_24950__$1);
return statearr_25029;
})();var statearr_25030_25070 = state_25011__$1;(statearr_25030_25070[2] = null);
(statearr_25030_25070[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 11))
{var inst_24964 = (state_25011[15]);var inst_24950 = (state_25011[11]);var inst_24964__$1 = cljs.core.seq.call(null,inst_24950);var state_25011__$1 = (function (){var statearr_25031 = state_25011;(statearr_25031[15] = inst_24964__$1);
return statearr_25031;
})();if(inst_24964__$1)
{var statearr_25032_25071 = state_25011__$1;(statearr_25032_25071[1] = 13);
} else
{var statearr_25033_25072 = state_25011__$1;(statearr_25033_25072[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 12))
{var inst_24984 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25034_25073 = state_25011__$1;(statearr_25034_25073[2] = inst_24984);
(statearr_25034_25073[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 13))
{var inst_24964 = (state_25011[15]);var inst_24966 = cljs.core.chunked_seq_QMARK_.call(null,inst_24964);var state_25011__$1 = state_25011;if(inst_24966)
{var statearr_25035_25074 = state_25011__$1;(statearr_25035_25074[1] = 16);
} else
{var statearr_25036_25075 = state_25011__$1;(statearr_25036_25075[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 14))
{var state_25011__$1 = state_25011;var statearr_25037_25076 = state_25011__$1;(statearr_25037_25076[2] = null);
(statearr_25037_25076[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 15))
{var inst_24982 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25038_25077 = state_25011__$1;(statearr_25038_25077[2] = inst_24982);
(statearr_25038_25077[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 16))
{var inst_24964 = (state_25011[15]);var inst_24968 = cljs.core.chunk_first.call(null,inst_24964);var inst_24969 = cljs.core.chunk_rest.call(null,inst_24964);var inst_24970 = cljs.core.count.call(null,inst_24968);var inst_24950 = inst_24969;var inst_24951 = inst_24968;var inst_24952 = inst_24970;var inst_24953 = 0;var state_25011__$1 = (function (){var statearr_25039 = state_25011;(statearr_25039[8] = inst_24953);
(statearr_25039[9] = inst_24952);
(statearr_25039[10] = inst_24951);
(statearr_25039[11] = inst_24950);
return statearr_25039;
})();var statearr_25040_25078 = state_25011__$1;(statearr_25040_25078[2] = null);
(statearr_25040_25078[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 17))
{var inst_24964 = (state_25011[15]);var inst_24973 = cljs.core.first.call(null,inst_24964);var inst_24974 = cljs.core.async.muxch_STAR_.call(null,inst_24973);var inst_24975 = cljs.core.async.close_BANG_.call(null,inst_24974);var inst_24976 = cljs.core.next.call(null,inst_24964);var inst_24950 = inst_24976;var inst_24951 = null;var inst_24952 = 0;var inst_24953 = 0;var state_25011__$1 = (function (){var statearr_25041 = state_25011;(statearr_25041[8] = inst_24953);
(statearr_25041[9] = inst_24952);
(statearr_25041[10] = inst_24951);
(statearr_25041[11] = inst_24950);
(statearr_25041[16] = inst_24975);
return statearr_25041;
})();var statearr_25042_25079 = state_25011__$1;(statearr_25042_25079[2] = null);
(statearr_25042_25079[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 18))
{var inst_24979 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25043_25080 = state_25011__$1;(statearr_25043_25080[2] = inst_24979);
(statearr_25043_25080[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 19))
{var state_25011__$1 = state_25011;var statearr_25044_25081 = state_25011__$1;(statearr_25044_25081[2] = null);
(statearr_25044_25081[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 20))
{var state_25011__$1 = state_25011;var statearr_25045_25082 = state_25011__$1;(statearr_25045_25082[2] = null);
(statearr_25045_25082[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 21))
{var inst_25004 = (state_25011[2]);var state_25011__$1 = (function (){var statearr_25046 = state_25011;(statearr_25046[17] = inst_25004);
return statearr_25046;
})();var statearr_25047_25083 = state_25011__$1;(statearr_25047_25083[2] = null);
(statearr_25047_25083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 22))
{var inst_25001 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25048_25084 = state_25011__$1;(statearr_25048_25084[2] = inst_25001);
(statearr_25048_25084[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 23))
{var inst_24988 = (state_25011[12]);var inst_24992 = (state_25011[2]);var inst_24993 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24988);var state_25011__$1 = (function (){var statearr_25049 = state_25011;(statearr_25049[18] = inst_24992);
return statearr_25049;
})();var statearr_25050_25085 = state_25011__$1;(statearr_25050_25085[2] = inst_24993);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25011__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25012 === 24))
{var inst_24990 = (state_25011[13]);var inst_24940 = (state_25011[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25011,23,Object,null,22);var inst_24997 = cljs.core.async.muxch_STAR_.call(null,inst_24990);var state_25011__$1 = state_25011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25011__$1,25,inst_24997,inst_24940);
} else
{if((state_val_25012 === 25))
{var inst_24999 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25051_25086 = state_25011__$1;(statearr_25051_25086[2] = inst_24999);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25011__$1);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_25055 = (new Array(19));(statearr_25055[0] = state_machine__13894__auto__);
(statearr_25055[1] = 1);
return statearr_25055;
});
var state_machine__13894__auto____1 = (function (state_25011){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_25011);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e25056){if((e25056 instanceof Object))
{var ex__13897__auto__ = e25056;var statearr_25057_25087 = state_25011;(statearr_25057_25087[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25011);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25088 = state_25011;
state_25011 = G__25088;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_25011){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_25011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_25058 = f__13964__auto__.call(null);(statearr_25058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___25059);
return statearr_25058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
,cljs.core.range.call(null,cnt));var c__13963__auto___25225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_25195){var state_val_25196 = (state_25195[1]);if((state_val_25196 === 1))
{var state_25195__$1 = state_25195;var statearr_25197_25226 = state_25195__$1;(statearr_25197_25226[2] = null);
(statearr_25197_25226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 2))
{var inst_25158 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25159 = 0;var state_25195__$1 = (function (){var statearr_25198 = state_25195;(statearr_25198[7] = inst_25159);
(statearr_25198[8] = inst_25158);
return statearr_25198;
})();var statearr_25199_25227 = state_25195__$1;(statearr_25199_25227[2] = null);
(statearr_25199_25227[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 3))
{var inst_25193 = (state_25195[2]);var state_25195__$1 = state_25195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25195__$1,inst_25193);
} else
{if((state_val_25196 === 4))
{var inst_25159 = (state_25195[7]);var inst_25161 = (inst_25159 < cnt);var state_25195__$1 = state_25195;if(cljs.core.truth_(inst_25161))
{var statearr_25200_25228 = state_25195__$1;(statearr_25200_25228[1] = 6);
} else
{var statearr_25201_25229 = state_25195__$1;(statearr_25201_25229[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 5))
{var inst_25179 = (state_25195[2]);var state_25195__$1 = (function (){var statearr_25202 = state_25195;(statearr_25202[9] = inst_25179);
return statearr_25202;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25195__$1,12,dchan);
} else
{if((state_val_25196 === 6))
{var state_25195__$1 = state_25195;var statearr_25203_25230 = state_25195__$1;(statearr_25203_25230[2] = null);
(statearr_25203_25230[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 7))
{var state_25195__$1 = state_25195;var statearr_25204_25231 = state_25195__$1;(statearr_25204_25231[2] = null);
(statearr_25204_25231[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 8))
{var inst_25177 = (state_25195[2]);var state_25195__$1 = state_25195;var statearr_25205_25232 = state_25195__$1;(statearr_25205_25232[2] = inst_25177);
(statearr_25205_25232[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 9))
{var inst_25159 = (state_25195[7]);var inst_25172 = (state_25195[2]);var inst_25173 = (inst_25159 + 1);var inst_25159__$1 = inst_25173;var state_25195__$1 = (function (){var statearr_25206 = state_25195;(statearr_25206[10] = inst_25172);
(statearr_25206[7] = inst_25159__$1);
return statearr_25206;
})();var statearr_25207_25233 = state_25195__$1;(statearr_25207_25233[2] = null);
(statearr_25207_25233[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 10))
{var inst_25163 = (state_25195[2]);var inst_25164 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25195__$1 = (function (){var statearr_25208 = state_25195;(statearr_25208[11] = inst_25163);
return statearr_25208;
})();var statearr_25209_25234 = state_25195__$1;(statearr_25209_25234[2] = inst_25164);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25195__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 11))
{var inst_25159 = (state_25195[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25195,10,Object,null,9);var inst_25168 = chs__$1.call(null,inst_25159);var inst_25169 = done.call(null,inst_25159);var inst_25170 = cljs.core.async.take_BANG_.call(null,inst_25168,inst_25169);var state_25195__$1 = state_25195;var statearr_25210_25235 = state_25195__$1;(statearr_25210_25235[2] = inst_25170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25195__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 12))
{var inst_25181 = (state_25195[12]);var inst_25181__$1 = (state_25195[2]);var inst_25182 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25181__$1);var state_25195__$1 = (function (){var statearr_25211 = state_25195;(statearr_25211[12] = inst_25181__$1);
return statearr_25211;
})();if(cljs.core.truth_(inst_25182))
{var statearr_25212_25236 = state_25195__$1;(statearr_25212_25236[1] = 13);
} else
{var statearr_25213_25237 = state_25195__$1;(statearr_25213_25237[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 13))
{var inst_25184 = cljs.core.async.close_BANG_.call(null,out);var state_25195__$1 = state_25195;var statearr_25214_25238 = state_25195__$1;(statearr_25214_25238[2] = inst_25184);
(statearr_25214_25238[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 14))
{var inst_25181 = (state_25195[12]);var inst_25186 = cljs.core.apply.call(null,f,inst_25181);var state_25195__$1 = state_25195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25195__$1,16,out,inst_25186);
} else
{if((state_val_25196 === 15))
{var inst_25191 = (state_25195[2]);var state_25195__$1 = state_25195;var statearr_25215_25239 = state_25195__$1;(statearr_25215_25239[2] = inst_25191);
(statearr_25215_25239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25196 === 16))
{var inst_25188 = (state_25195[2]);var state_25195__$1 = (function (){var statearr_25216 = state_25195;(statearr_25216[13] = inst_25188);
return statearr_25216;
})();var statearr_25217_25240 = state_25195__$1;(statearr_25217_25240[2] = null);
(statearr_25217_25240[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_25221 = (new Array(14));(statearr_25221[0] = state_machine__13894__auto__);
(statearr_25221[1] = 1);
return statearr_25221;
});
var state_machine__13894__auto____1 = (function (state_25195){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_25195);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e25222){if((e25222 instanceof Object))
{var ex__13897__auto__ = e25222;var statearr_25223_25241 = state_25195;(statearr_25223_25241[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25242 = state_25195;
state_25195 = G__25242;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_25195){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_25195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_25224 = f__13964__auto__.call(null);(statearr_25224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___25225);
return statearr_25224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___25350 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_25326){var state_val_25327 = (state_25326[1]);if((state_val_25327 === 1))
{var inst_25297 = cljs.core.vec.call(null,chs);var inst_25298 = inst_25297;var state_25326__$1 = (function (){var statearr_25328 = state_25326;(statearr_25328[7] = inst_25298);
return statearr_25328;
})();var statearr_25329_25351 = state_25326__$1;(statearr_25329_25351[2] = null);
(statearr_25329_25351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25327 === 2))
{var inst_25298 = (state_25326[7]);var inst_25300 = cljs.core.count.call(null,inst_25298);var inst_25301 = (inst_25300 > 0);var state_25326__$1 = state_25326;if(cljs.core.truth_(inst_25301))
{var statearr_25330_25352 = state_25326__$1;(statearr_25330_25352[1] = 4);
} else
{var statearr_25331_25353 = state_25326__$1;(statearr_25331_25353[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25327 === 3))
{var inst_25324 = (state_25326[2]);var state_25326__$1 = state_25326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25326__$1,inst_25324);
} else
{if((state_val_25327 === 4))
{var inst_25298 = (state_25326[7]);var state_25326__$1 = state_25326;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25326__$1,7,inst_25298);
} else
{if((state_val_25327 === 5))
{var inst_25320 = cljs.core.async.close_BANG_.call(null,out);var state_25326__$1 = state_25326;var statearr_25332_25354 = state_25326__$1;(statearr_25332_25354[2] = inst_25320);
(statearr_25332_25354[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25327 === 6))
{var inst_25322 = (state_25326[2]);var state_25326__$1 = state_25326;var statearr_25333_25355 = state_25326__$1;(statearr_25333_25355[2] = inst_25322);
(statearr_25333_25355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25327 === 7))
{var inst_25305 = (state_25326[8]);var inst_25306 = (state_25326[9]);var inst_25305__$1 = (state_25326[2]);var inst_25306__$1 = cljs.core.nth.call(null,inst_25305__$1,0,null);var inst_25307 = cljs.core.nth.call(null,inst_25305__$1,1,null);var inst_25308 = (inst_25306__$1 == null);var state_25326__$1 = (function (){var statearr_25334 = state_25326;(statearr_25334[8] = inst_25305__$1);
(statearr_25334[9] = inst_25306__$1);
(statearr_25334[10] = inst_25307);
return statearr_25334;
})();if(cljs.core.truth_(inst_25308))
{var statearr_25335_25356 = state_25326__$1;(statearr_25335_25356[1] = 8);
} else
{var statearr_25336_25357 = state_25326__$1;(statearr_25336_25357[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25327 === 8))
{var inst_25298 = (state_25326[7]);var inst_25305 = (state_25326[8]);var inst_25306 = (state_25326[9]);var inst_25307 = (state_25326[10]);var inst_25310 = (function (){var c = inst_25307;var v = inst_25306;var vec__25303 = inst_25305;var cs = inst_25298;return ((function (c,v,vec__25303,cs,inst_25298,inst_25305,inst_25306,inst_25307,state_val_25327){
return (function (p1__25243_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25243_SHARP_);
});
;})(c,v,vec__25303,cs,inst_25298,inst_25305,inst_25306,inst_25307,state_val_25327))
})();var inst_25311 = cljs.core.filterv.call(null,inst_25310,inst_25298);var inst_25298__$1 = inst_25311;var state_25326__$1 = (function (){var statearr_25337 = state_25326;(statearr_25337[7] = inst_25298__$1);
return statearr_25337;
})();var statearr_25338_25358 = state_25326__$1;(statearr_25338_25358[2] = null);
(statearr_25338_25358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25327 === 9))
{var inst_25306 = (state_25326[9]);var state_25326__$1 = state_25326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25326__$1,11,out,inst_25306);
} else
{if((state_val_25327 === 10))
{var inst_25318 = (state_25326[2]);var state_25326__$1 = state_25326;var statearr_25340_25359 = state_25326__$1;(statearr_25340_25359[2] = inst_25318);
(statearr_25340_25359[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25327 === 11))
{var inst_25298 = (state_25326[7]);var inst_25315 = (state_25326[2]);var tmp25339 = inst_25298;var inst_25298__$1 = tmp25339;var state_25326__$1 = (function (){var statearr_25341 = state_25326;(statearr_25341[7] = inst_25298__$1);
(statearr_25341[11] = inst_25315);
return statearr_25341;
})();var statearr_25342_25360 = state_25326__$1;(statearr_25342_25360[2] = null);
(statearr_25342_25360[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_25346 = (new Array(12));(statearr_25346[0] = state_machine__13894__auto__);
(statearr_25346[1] = 1);
return statearr_25346;
});
var state_machine__13894__auto____1 = (function (state_25326){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_25326);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e25347){if((e25347 instanceof Object))
{var ex__13897__auto__ = e25347;var statearr_25348_25361 = state_25326;(statearr_25348_25361[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25362 = state_25326;
state_25326 = G__25362;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_25326){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_25326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_25349 = f__13964__auto__.call(null);(statearr_25349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___25350);
return statearr_25349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___25455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_25432){var state_val_25433 = (state_25432[1]);if((state_val_25433 === 1))
{var inst_25409 = 0;var state_25432__$1 = (function (){var statearr_25434 = state_25432;(statearr_25434[7] = inst_25409);
return statearr_25434;
})();var statearr_25435_25456 = state_25432__$1;(statearr_25435_25456[2] = null);
(statearr_25435_25456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25433 === 2))
{var inst_25409 = (state_25432[7]);var inst_25411 = (inst_25409 < n);var state_25432__$1 = state_25432;if(cljs.core.truth_(inst_25411))
{var statearr_25436_25457 = state_25432__$1;(statearr_25436_25457[1] = 4);
} else
{var statearr_25437_25458 = state_25432__$1;(statearr_25437_25458[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25433 === 3))
{var inst_25429 = (state_25432[2]);var inst_25430 = cljs.core.async.close_BANG_.call(null,out);var state_25432__$1 = (function (){var statearr_25438 = state_25432;(statearr_25438[8] = inst_25429);
return statearr_25438;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25432__$1,inst_25430);
} else
{if((state_val_25433 === 4))
{var state_25432__$1 = state_25432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25432__$1,7,ch);
} else
{if((state_val_25433 === 5))
{var state_25432__$1 = state_25432;var statearr_25439_25459 = state_25432__$1;(statearr_25439_25459[2] = null);
(statearr_25439_25459[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25433 === 6))
{var inst_25427 = (state_25432[2]);var state_25432__$1 = state_25432;var statearr_25440_25460 = state_25432__$1;(statearr_25440_25460[2] = inst_25427);
(statearr_25440_25460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25433 === 7))
{var inst_25414 = (state_25432[9]);var inst_25414__$1 = (state_25432[2]);var inst_25415 = (inst_25414__$1 == null);var inst_25416 = cljs.core.not.call(null,inst_25415);var state_25432__$1 = (function (){var statearr_25441 = state_25432;(statearr_25441[9] = inst_25414__$1);
return statearr_25441;
})();if(inst_25416)
{var statearr_25442_25461 = state_25432__$1;(statearr_25442_25461[1] = 8);
} else
{var statearr_25443_25462 = state_25432__$1;(statearr_25443_25462[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25433 === 8))
{var inst_25414 = (state_25432[9]);var state_25432__$1 = state_25432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25432__$1,11,out,inst_25414);
} else
{if((state_val_25433 === 9))
{var state_25432__$1 = state_25432;var statearr_25444_25463 = state_25432__$1;(statearr_25444_25463[2] = null);
(statearr_25444_25463[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25433 === 10))
{var inst_25424 = (state_25432[2]);var state_25432__$1 = state_25432;var statearr_25445_25464 = state_25432__$1;(statearr_25445_25464[2] = inst_25424);
(statearr_25445_25464[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25433 === 11))
{var inst_25409 = (state_25432[7]);var inst_25419 = (state_25432[2]);var inst_25420 = (inst_25409 + 1);var inst_25409__$1 = inst_25420;var state_25432__$1 = (function (){var statearr_25446 = state_25432;(statearr_25446[7] = inst_25409__$1);
(statearr_25446[10] = inst_25419);
return statearr_25446;
})();var statearr_25447_25465 = state_25432__$1;(statearr_25447_25465[2] = null);
(statearr_25447_25465[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_25451 = (new Array(11));(statearr_25451[0] = state_machine__13894__auto__);
(statearr_25451[1] = 1);
return statearr_25451;
});
var state_machine__13894__auto____1 = (function (state_25432){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_25432);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e25452){if((e25452 instanceof Object))
{var ex__13897__auto__ = e25452;var statearr_25453_25466 = state_25432;(statearr_25453_25466[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25467 = state_25432;
state_25432 = G__25467;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_25432){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_25432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_25454 = f__13964__auto__.call(null);(statearr_25454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___25455);
return statearr_25454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___25564 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_25539){var state_val_25540 = (state_25539[1]);if((state_val_25540 === 1))
{var inst_25516 = null;var state_25539__$1 = (function (){var statearr_25541 = state_25539;(statearr_25541[7] = inst_25516);
return statearr_25541;
})();var statearr_25542_25565 = state_25539__$1;(statearr_25542_25565[2] = null);
(statearr_25542_25565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25540 === 2))
{var state_25539__$1 = state_25539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25539__$1,4,ch);
} else
{if((state_val_25540 === 3))
{var inst_25536 = (state_25539[2]);var inst_25537 = cljs.core.async.close_BANG_.call(null,out);var state_25539__$1 = (function (){var statearr_25543 = state_25539;(statearr_25543[8] = inst_25536);
return statearr_25543;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25539__$1,inst_25537);
} else
{if((state_val_25540 === 4))
{var inst_25519 = (state_25539[9]);var inst_25519__$1 = (state_25539[2]);var inst_25520 = (inst_25519__$1 == null);var inst_25521 = cljs.core.not.call(null,inst_25520);var state_25539__$1 = (function (){var statearr_25544 = state_25539;(statearr_25544[9] = inst_25519__$1);
return statearr_25544;
})();if(inst_25521)
{var statearr_25545_25566 = state_25539__$1;(statearr_25545_25566[1] = 5);
} else
{var statearr_25546_25567 = state_25539__$1;(statearr_25546_25567[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25540 === 5))
{var inst_25519 = (state_25539[9]);var inst_25516 = (state_25539[7]);var inst_25523 = cljs.core._EQ_.call(null,inst_25519,inst_25516);var state_25539__$1 = state_25539;if(inst_25523)
{var statearr_25547_25568 = state_25539__$1;(statearr_25547_25568[1] = 8);
} else
{var statearr_25548_25569 = state_25539__$1;(statearr_25548_25569[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25540 === 6))
{var state_25539__$1 = state_25539;var statearr_25550_25570 = state_25539__$1;(statearr_25550_25570[2] = null);
(statearr_25550_25570[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25540 === 7))
{var inst_25534 = (state_25539[2]);var state_25539__$1 = state_25539;var statearr_25551_25571 = state_25539__$1;(statearr_25551_25571[2] = inst_25534);
(statearr_25551_25571[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25540 === 8))
{var inst_25516 = (state_25539[7]);var tmp25549 = inst_25516;var inst_25516__$1 = tmp25549;var state_25539__$1 = (function (){var statearr_25552 = state_25539;(statearr_25552[7] = inst_25516__$1);
return statearr_25552;
})();var statearr_25553_25572 = state_25539__$1;(statearr_25553_25572[2] = null);
(statearr_25553_25572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25540 === 9))
{var inst_25519 = (state_25539[9]);var state_25539__$1 = state_25539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25539__$1,11,out,inst_25519);
} else
{if((state_val_25540 === 10))
{var inst_25531 = (state_25539[2]);var state_25539__$1 = state_25539;var statearr_25554_25573 = state_25539__$1;(statearr_25554_25573[2] = inst_25531);
(statearr_25554_25573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25540 === 11))
{var inst_25519 = (state_25539[9]);var inst_25528 = (state_25539[2]);var inst_25516 = inst_25519;var state_25539__$1 = (function (){var statearr_25555 = state_25539;(statearr_25555[10] = inst_25528);
(statearr_25555[7] = inst_25516);
return statearr_25555;
})();var statearr_25556_25574 = state_25539__$1;(statearr_25556_25574[2] = null);
(statearr_25556_25574[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_25560 = (new Array(11));(statearr_25560[0] = state_machine__13894__auto__);
(statearr_25560[1] = 1);
return statearr_25560;
});
var state_machine__13894__auto____1 = (function (state_25539){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_25539);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e25561){if((e25561 instanceof Object))
{var ex__13897__auto__ = e25561;var statearr_25562_25575 = state_25539;(statearr_25562_25575[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25539);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25576 = state_25539;
state_25539 = G__25576;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_25539){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_25539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_25563 = f__13964__auto__.call(null);(statearr_25563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___25564);
return statearr_25563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___25711 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_25681){var state_val_25682 = (state_25681[1]);if((state_val_25682 === 1))
{var inst_25644 = (new Array(n));var inst_25645 = inst_25644;var inst_25646 = 0;var state_25681__$1 = (function (){var statearr_25683 = state_25681;(statearr_25683[7] = inst_25646);
(statearr_25683[8] = inst_25645);
return statearr_25683;
})();var statearr_25684_25712 = state_25681__$1;(statearr_25684_25712[2] = null);
(statearr_25684_25712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25682 === 2))
{var state_25681__$1 = state_25681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25681__$1,4,ch);
} else
{if((state_val_25682 === 3))
{var inst_25679 = (state_25681[2]);var state_25681__$1 = state_25681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25681__$1,inst_25679);
} else
{if((state_val_25682 === 4))
{var inst_25649 = (state_25681[9]);var inst_25649__$1 = (state_25681[2]);var inst_25650 = (inst_25649__$1 == null);var inst_25651 = cljs.core.not.call(null,inst_25650);var state_25681__$1 = (function (){var statearr_25685 = state_25681;(statearr_25685[9] = inst_25649__$1);
return statearr_25685;
})();if(inst_25651)
{var statearr_25686_25713 = state_25681__$1;(statearr_25686_25713[1] = 5);
} else
{var statearr_25687_25714 = state_25681__$1;(statearr_25687_25714[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25682 === 5))
{var inst_25646 = (state_25681[7]);var inst_25654 = (state_25681[10]);var inst_25649 = (state_25681[9]);var inst_25645 = (state_25681[8]);var inst_25653 = (inst_25645[inst_25646] = inst_25649);var inst_25654__$1 = (inst_25646 + 1);var inst_25655 = (inst_25654__$1 < n);var state_25681__$1 = (function (){var statearr_25688 = state_25681;(statearr_25688[10] = inst_25654__$1);
(statearr_25688[11] = inst_25653);
return statearr_25688;
})();if(cljs.core.truth_(inst_25655))
{var statearr_25689_25715 = state_25681__$1;(statearr_25689_25715[1] = 8);
} else
{var statearr_25690_25716 = state_25681__$1;(statearr_25690_25716[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25682 === 6))
{var inst_25646 = (state_25681[7]);var inst_25667 = (inst_25646 > 0);var state_25681__$1 = state_25681;if(cljs.core.truth_(inst_25667))
{var statearr_25692_25717 = state_25681__$1;(statearr_25692_25717[1] = 12);
} else
{var statearr_25693_25718 = state_25681__$1;(statearr_25693_25718[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25682 === 7))
{var inst_25677 = (state_25681[2]);var state_25681__$1 = state_25681;var statearr_25694_25719 = state_25681__$1;(statearr_25694_25719[2] = inst_25677);
(statearr_25694_25719[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25682 === 8))
{var inst_25654 = (state_25681[10]);var inst_25645 = (state_25681[8]);var tmp25691 = inst_25645;var inst_25645__$1 = tmp25691;var inst_25646 = inst_25654;var state_25681__$1 = (function (){var statearr_25695 = state_25681;(statearr_25695[7] = inst_25646);
(statearr_25695[8] = inst_25645__$1);
return statearr_25695;
})();var statearr_25696_25720 = state_25681__$1;(statearr_25696_25720[2] = null);
(statearr_25696_25720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25682 === 9))
{var inst_25645 = (state_25681[8]);var inst_25659 = cljs.core.vec.call(null,inst_25645);var state_25681__$1 = state_25681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25681__$1,11,out,inst_25659);
} else
{if((state_val_25682 === 10))
{var inst_25665 = (state_25681[2]);var state_25681__$1 = state_25681;var statearr_25697_25721 = state_25681__$1;(statearr_25697_25721[2] = inst_25665);
(statearr_25697_25721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25682 === 11))
{var inst_25661 = (state_25681[2]);var inst_25662 = (new Array(n));var inst_25645 = inst_25662;var inst_25646 = 0;var state_25681__$1 = (function (){var statearr_25698 = state_25681;(statearr_25698[12] = inst_25661);
(statearr_25698[7] = inst_25646);
(statearr_25698[8] = inst_25645);
return statearr_25698;
})();var statearr_25699_25722 = state_25681__$1;(statearr_25699_25722[2] = null);
(statearr_25699_25722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25682 === 12))
{var inst_25645 = (state_25681[8]);var inst_25669 = cljs.core.vec.call(null,inst_25645);var state_25681__$1 = state_25681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25681__$1,15,out,inst_25669);
} else
{if((state_val_25682 === 13))
{var state_25681__$1 = state_25681;var statearr_25700_25723 = state_25681__$1;(statearr_25700_25723[2] = null);
(statearr_25700_25723[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25682 === 14))
{var inst_25674 = (state_25681[2]);var inst_25675 = cljs.core.async.close_BANG_.call(null,out);var state_25681__$1 = (function (){var statearr_25701 = state_25681;(statearr_25701[13] = inst_25674);
return statearr_25701;
})();var statearr_25702_25724 = state_25681__$1;(statearr_25702_25724[2] = inst_25675);
(statearr_25702_25724[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25682 === 15))
{var inst_25671 = (state_25681[2]);var state_25681__$1 = state_25681;var statearr_25703_25725 = state_25681__$1;(statearr_25703_25725[2] = inst_25671);
(statearr_25703_25725[1] = 14);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_25707 = (new Array(14));(statearr_25707[0] = state_machine__13894__auto__);
(statearr_25707[1] = 1);
return statearr_25707;
});
var state_machine__13894__auto____1 = (function (state_25681){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_25681);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e25708){if((e25708 instanceof Object))
{var ex__13897__auto__ = e25708;var statearr_25709_25726 = state_25681;(statearr_25709_25726[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25681);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25727 = state_25681;
state_25681 = G__25727;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_25681){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_25681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_25710 = f__13964__auto__.call(null);(statearr_25710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___25711);
return statearr_25710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___25870 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_25840){var state_val_25841 = (state_25840[1]);if((state_val_25841 === 1))
{var inst_25799 = (new Array(0));var inst_25800 = inst_25799;var inst_25801 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_25840__$1 = (function (){var statearr_25842 = state_25840;(statearr_25842[7] = inst_25800);
(statearr_25842[8] = inst_25801);
return statearr_25842;
})();var statearr_25843_25871 = state_25840__$1;(statearr_25843_25871[2] = null);
(statearr_25843_25871[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25841 === 2))
{var state_25840__$1 = state_25840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25840__$1,4,ch);
} else
{if((state_val_25841 === 3))
{var inst_25838 = (state_25840[2]);var state_25840__$1 = state_25840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25840__$1,inst_25838);
} else
{if((state_val_25841 === 4))
{var inst_25804 = (state_25840[9]);var inst_25804__$1 = (state_25840[2]);var inst_25805 = (inst_25804__$1 == null);var inst_25806 = cljs.core.not.call(null,inst_25805);var state_25840__$1 = (function (){var statearr_25844 = state_25840;(statearr_25844[9] = inst_25804__$1);
return statearr_25844;
})();if(inst_25806)
{var statearr_25845_25872 = state_25840__$1;(statearr_25845_25872[1] = 5);
} else
{var statearr_25846_25873 = state_25840__$1;(statearr_25846_25873[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25841 === 5))
{var inst_25801 = (state_25840[8]);var inst_25804 = (state_25840[9]);var inst_25808 = (state_25840[10]);var inst_25808__$1 = f.call(null,inst_25804);var inst_25809 = cljs.core._EQ_.call(null,inst_25808__$1,inst_25801);var inst_25810 = cljs.core.keyword_identical_QMARK_.call(null,inst_25801,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_25811 = (inst_25809) || (inst_25810);var state_25840__$1 = (function (){var statearr_25847 = state_25840;(statearr_25847[10] = inst_25808__$1);
return statearr_25847;
})();if(cljs.core.truth_(inst_25811))
{var statearr_25848_25874 = state_25840__$1;(statearr_25848_25874[1] = 8);
} else
{var statearr_25849_25875 = state_25840__$1;(statearr_25849_25875[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25841 === 6))
{var inst_25800 = (state_25840[7]);var inst_25825 = inst_25800.length;var inst_25826 = (inst_25825 > 0);var state_25840__$1 = state_25840;if(cljs.core.truth_(inst_25826))
{var statearr_25851_25876 = state_25840__$1;(statearr_25851_25876[1] = 12);
} else
{var statearr_25852_25877 = state_25840__$1;(statearr_25852_25877[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25841 === 7))
{var inst_25836 = (state_25840[2]);var state_25840__$1 = state_25840;var statearr_25853_25878 = state_25840__$1;(statearr_25853_25878[2] = inst_25836);
(statearr_25853_25878[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25841 === 8))
{var inst_25800 = (state_25840[7]);var inst_25804 = (state_25840[9]);var inst_25808 = (state_25840[10]);var inst_25813 = inst_25800.push(inst_25804);var tmp25850 = inst_25800;var inst_25800__$1 = tmp25850;var inst_25801 = inst_25808;var state_25840__$1 = (function (){var statearr_25854 = state_25840;(statearr_25854[11] = inst_25813);
(statearr_25854[7] = inst_25800__$1);
(statearr_25854[8] = inst_25801);
return statearr_25854;
})();var statearr_25855_25879 = state_25840__$1;(statearr_25855_25879[2] = null);
(statearr_25855_25879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25841 === 9))
{var inst_25800 = (state_25840[7]);var inst_25816 = cljs.core.vec.call(null,inst_25800);var state_25840__$1 = state_25840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25840__$1,11,out,inst_25816);
} else
{if((state_val_25841 === 10))
{var inst_25823 = (state_25840[2]);var state_25840__$1 = state_25840;var statearr_25856_25880 = state_25840__$1;(statearr_25856_25880[2] = inst_25823);
(statearr_25856_25880[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25841 === 11))
{var inst_25804 = (state_25840[9]);var inst_25808 = (state_25840[10]);var inst_25818 = (state_25840[2]);var inst_25819 = (new Array(0));var inst_25820 = inst_25819.push(inst_25804);var inst_25800 = inst_25819;var inst_25801 = inst_25808;var state_25840__$1 = (function (){var statearr_25857 = state_25840;(statearr_25857[12] = inst_25820);
(statearr_25857[7] = inst_25800);
(statearr_25857[8] = inst_25801);
(statearr_25857[13] = inst_25818);
return statearr_25857;
})();var statearr_25858_25881 = state_25840__$1;(statearr_25858_25881[2] = null);
(statearr_25858_25881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25841 === 12))
{var inst_25800 = (state_25840[7]);var inst_25828 = cljs.core.vec.call(null,inst_25800);var state_25840__$1 = state_25840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25840__$1,15,out,inst_25828);
} else
{if((state_val_25841 === 13))
{var state_25840__$1 = state_25840;var statearr_25859_25882 = state_25840__$1;(statearr_25859_25882[2] = null);
(statearr_25859_25882[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25841 === 14))
{var inst_25833 = (state_25840[2]);var inst_25834 = cljs.core.async.close_BANG_.call(null,out);var state_25840__$1 = (function (){var statearr_25860 = state_25840;(statearr_25860[14] = inst_25833);
return statearr_25860;
})();var statearr_25861_25883 = state_25840__$1;(statearr_25861_25883[2] = inst_25834);
(statearr_25861_25883[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25841 === 15))
{var inst_25830 = (state_25840[2]);var state_25840__$1 = state_25840;var statearr_25862_25884 = state_25840__$1;(statearr_25862_25884[2] = inst_25830);
(statearr_25862_25884[1] = 14);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_25866 = (new Array(15));(statearr_25866[0] = state_machine__13894__auto__);
(statearr_25866[1] = 1);
return statearr_25866;
});
var state_machine__13894__auto____1 = (function (state_25840){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_25840);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e25867){if((e25867 instanceof Object))
{var ex__13897__auto__ = e25867;var statearr_25868_25885 = state_25840;(statearr_25868_25885[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25886 = state_25840;
state_25840 = G__25886;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_25840){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_25840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_25869 = f__13964__auto__.call(null);(statearr_25869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___25870);
return statearr_25869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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