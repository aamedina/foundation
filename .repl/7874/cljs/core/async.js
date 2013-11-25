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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t166363 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t166363 = (function (f,fn_handler,meta166364){
this.f = f;
this.fn_handler = fn_handler;
this.meta166364 = meta166364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t166363.cljs$lang$type = true;
cljs.core.async.t166363.cljs$lang$ctorStr = "cljs.core.async/t166363";
cljs.core.async.t166363.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t166363");
});
cljs.core.async.t166363.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t166363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t166363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t166363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_166365){var self__ = this;
var _166365__$1 = this;return self__.meta166364;
});
cljs.core.async.t166363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_166365,meta166364__$1){var self__ = this;
var _166365__$1 = this;return (new cljs.core.async.t166363(self__.f,self__.fn_handler,meta166364__$1));
});
cljs.core.async.__GT_t166363 = (function __GT_t166363(f__$1,fn_handler__$1,meta166364){return (new cljs.core.async.t166363(f__$1,fn_handler__$1,meta166364));
});
}
return (new cljs.core.async.t166363(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__166367 = buff;if(G__166367)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__166367.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__166367.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__166367);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__166367);
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
{var val_166368 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_166368);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_166368);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__6277__auto__ = ret;if(cljs.core.truth_(and__6277__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__6277__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___166369 = n;var x_166370 = 0;while(true){
if((x_166370 < n__7112__auto___166369))
{(a[x_166370] = 0);
{
var G__166371 = (x_166370 + 1);
x_166370 = G__166371;
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
var G__166372 = (i + 1);
i = G__166372;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t166376 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t166376 = (function (flag,alt_flag,meta166377){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta166377 = meta166377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t166376.cljs$lang$type = true;
cljs.core.async.t166376.cljs$lang$ctorStr = "cljs.core.async/t166376";
cljs.core.async.t166376.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t166376");
});
cljs.core.async.t166376.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t166376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t166376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t166376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_166378){var self__ = this;
var _166378__$1 = this;return self__.meta166377;
});
cljs.core.async.t166376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_166378,meta166377__$1){var self__ = this;
var _166378__$1 = this;return (new cljs.core.async.t166376(self__.flag,self__.alt_flag,meta166377__$1));
});
cljs.core.async.__GT_t166376 = (function __GT_t166376(flag__$1,alt_flag__$1,meta166377){return (new cljs.core.async.t166376(flag__$1,alt_flag__$1,meta166377));
});
}
return (new cljs.core.async.t166376(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t166382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t166382 = (function (cb,flag,alt_handler,meta166383){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta166383 = meta166383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t166382.cljs$lang$type = true;
cljs.core.async.t166382.cljs$lang$ctorStr = "cljs.core.async/t166382";
cljs.core.async.t166382.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t166382");
});
cljs.core.async.t166382.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t166382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t166382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t166382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_166384){var self__ = this;
var _166384__$1 = this;return self__.meta166383;
});
cljs.core.async.t166382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_166384,meta166383__$1){var self__ = this;
var _166384__$1 = this;return (new cljs.core.async.t166382(self__.cb,self__.flag,self__.alt_handler,meta166383__$1));
});
cljs.core.async.__GT_t166382 = (function __GT_t166382(cb__$1,flag__$1,alt_handler__$1,meta166383){return (new cljs.core.async.t166382(cb__$1,flag__$1,alt_handler__$1,meta166383));
});
}
return (new cljs.core.async.t166382(cb,flag,alt_handler,null));
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
return (function (p1__166385_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__166385_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6289__auto__ = wport;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__166386 = (i + 1);
i = G__166386;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__6289__auto__ = ret;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__6277__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__6277__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__6277__auto__;
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
var alts_BANG___delegate = function (ports,p__166387){var map__166389 = p__166387;var map__166389__$1 = ((cljs.core.seq_QMARK_.call(null,map__166389))?cljs.core.apply.call(null,cljs.core.hash_map,map__166389):map__166389);var opts = map__166389__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__166387 = null;if (arguments.length > 1) {
  p__166387 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__166387);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__166390){
var ports = cljs.core.first(arglist__166390);
var p__166387 = cljs.core.rest(arglist__166390);
return alts_BANG___delegate(ports,p__166387);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t166398 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t166398 = (function (ch,f,map_LT_,meta166399){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta166399 = meta166399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t166398.cljs$lang$type = true;
cljs.core.async.t166398.cljs$lang$ctorStr = "cljs.core.async/t166398";
cljs.core.async.t166398.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t166398");
});
cljs.core.async.t166398.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t166398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t166398.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t166398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t166401 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t166401 = (function (fn1,_,meta166399,ch,f,map_LT_,meta166402){
this.fn1 = fn1;
this._ = _;
this.meta166399 = meta166399;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta166402 = meta166402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t166401.cljs$lang$type = true;
cljs.core.async.t166401.cljs$lang$ctorStr = "cljs.core.async/t166401";
cljs.core.async.t166401.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t166401");
});
cljs.core.async.t166401.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t166401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t166401.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t166401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__166391_SHARP_){return f1.call(null,(((p1__166391_SHARP_ == null))?null:self__.f.call(null,p1__166391_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t166401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_166403){var self__ = this;
var _166403__$1 = this;return self__.meta166402;
});
cljs.core.async.t166401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_166403,meta166402__$1){var self__ = this;
var _166403__$1 = this;return (new cljs.core.async.t166401(self__.fn1,self__._,self__.meta166399,self__.ch,self__.f,self__.map_LT_,meta166402__$1));
});
cljs.core.async.__GT_t166401 = (function __GT_t166401(fn1__$1,___$2,meta166399__$1,ch__$2,f__$2,map_LT___$2,meta166402){return (new cljs.core.async.t166401(fn1__$1,___$2,meta166399__$1,ch__$2,f__$2,map_LT___$2,meta166402));
});
}
return (new cljs.core.async.t166401(fn1,___$1,self__.meta166399,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__6277__auto__ = ret;if(cljs.core.truth_(and__6277__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__6277__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t166398.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t166398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t166398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_166400){var self__ = this;
var _166400__$1 = this;return self__.meta166399;
});
cljs.core.async.t166398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_166400,meta166399__$1){var self__ = this;
var _166400__$1 = this;return (new cljs.core.async.t166398(self__.ch,self__.f,self__.map_LT_,meta166399__$1));
});
cljs.core.async.__GT_t166398 = (function __GT_t166398(ch__$1,f__$1,map_LT___$1,meta166399){return (new cljs.core.async.t166398(ch__$1,f__$1,map_LT___$1,meta166399));
});
}
return (new cljs.core.async.t166398(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t166407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t166407 = (function (ch,f,map_GT_,meta166408){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta166408 = meta166408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t166407.cljs$lang$type = true;
cljs.core.async.t166407.cljs$lang$ctorStr = "cljs.core.async/t166407";
cljs.core.async.t166407.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t166407");
});
cljs.core.async.t166407.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t166407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t166407.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t166407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t166407.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t166407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t166407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_166409){var self__ = this;
var _166409__$1 = this;return self__.meta166408;
});
cljs.core.async.t166407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_166409,meta166408__$1){var self__ = this;
var _166409__$1 = this;return (new cljs.core.async.t166407(self__.ch,self__.f,self__.map_GT_,meta166408__$1));
});
cljs.core.async.__GT_t166407 = (function __GT_t166407(ch__$1,f__$1,map_GT___$1,meta166408){return (new cljs.core.async.t166407(ch__$1,f__$1,map_GT___$1,meta166408));
});
}
return (new cljs.core.async.t166407(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t166413 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t166413 = (function (ch,p,filter_GT_,meta166414){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta166414 = meta166414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t166413.cljs$lang$type = true;
cljs.core.async.t166413.cljs$lang$ctorStr = "cljs.core.async/t166413";
cljs.core.async.t166413.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t166413");
});
cljs.core.async.t166413.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t166413.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t166413.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t166413.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t166413.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t166413.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t166413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_166415){var self__ = this;
var _166415__$1 = this;return self__.meta166414;
});
cljs.core.async.t166413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_166415,meta166414__$1){var self__ = this;
var _166415__$1 = this;return (new cljs.core.async.t166413(self__.ch,self__.p,self__.filter_GT_,meta166414__$1));
});
cljs.core.async.__GT_t166413 = (function __GT_t166413(ch__$1,p__$1,filter_GT___$1,meta166414){return (new cljs.core.async.t166413(ch__$1,p__$1,filter_GT___$1,meta166414));
});
}
return (new cljs.core.async.t166413(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___166498 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_166477){var state_val_166478 = (state_166477[1]);if((state_val_166478 === 1))
{var state_166477__$1 = state_166477;var statearr_166479_166499 = state_166477__$1;(statearr_166479_166499[2] = null);
(statearr_166479_166499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166478 === 2))
{var state_166477__$1 = state_166477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_166477__$1,4,ch);
} else
{if((state_val_166478 === 3))
{var inst_166475 = (state_166477[2]);var state_166477__$1 = state_166477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_166477__$1,inst_166475);
} else
{if((state_val_166478 === 4))
{var inst_166459 = (state_166477[7]);var inst_166459__$1 = (state_166477[2]);var inst_166460 = (inst_166459__$1 == null);var state_166477__$1 = (function (){var statearr_166480 = state_166477;(statearr_166480[7] = inst_166459__$1);
return statearr_166480;
})();if(cljs.core.truth_(inst_166460))
{var statearr_166481_166500 = state_166477__$1;(statearr_166481_166500[1] = 5);
} else
{var statearr_166482_166501 = state_166477__$1;(statearr_166482_166501[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166478 === 5))
{var inst_166462 = cljs.core.async.close_BANG_.call(null,out);var state_166477__$1 = state_166477;var statearr_166483_166502 = state_166477__$1;(statearr_166483_166502[2] = inst_166462);
(statearr_166483_166502[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166478 === 6))
{var inst_166459 = (state_166477[7]);var inst_166464 = p.call(null,inst_166459);var state_166477__$1 = state_166477;if(cljs.core.truth_(inst_166464))
{var statearr_166484_166503 = state_166477__$1;(statearr_166484_166503[1] = 8);
} else
{var statearr_166485_166504 = state_166477__$1;(statearr_166485_166504[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166478 === 7))
{var inst_166473 = (state_166477[2]);var state_166477__$1 = state_166477;var statearr_166486_166505 = state_166477__$1;(statearr_166486_166505[2] = inst_166473);
(statearr_166486_166505[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166478 === 8))
{var inst_166459 = (state_166477[7]);var state_166477__$1 = state_166477;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_166477__$1,11,out,inst_166459);
} else
{if((state_val_166478 === 9))
{var state_166477__$1 = state_166477;var statearr_166487_166506 = state_166477__$1;(statearr_166487_166506[2] = null);
(statearr_166487_166506[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166478 === 10))
{var inst_166470 = (state_166477[2]);var state_166477__$1 = (function (){var statearr_166488 = state_166477;(statearr_166488[8] = inst_166470);
return statearr_166488;
})();var statearr_166489_166507 = state_166477__$1;(statearr_166489_166507[2] = null);
(statearr_166489_166507[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166478 === 11))
{var inst_166467 = (state_166477[2]);var state_166477__$1 = state_166477;var statearr_166490_166508 = state_166477__$1;(statearr_166490_166508[2] = inst_166467);
(statearr_166490_166508[1] = 10);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_166494 = (new Array(9));(statearr_166494[0] = state_machine__13310__auto__);
(statearr_166494[1] = 1);
return statearr_166494;
});
var state_machine__13310__auto____1 = (function (state_166477){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_166477);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e166495){if((e166495 instanceof Object))
{var ex__13313__auto__ = e166495;var statearr_166496_166509 = state_166477;(statearr_166496_166509[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_166477);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e166495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__166510 = state_166477;
state_166477 = G__166510;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_166477){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_166477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_166497 = f__13410__auto__.call(null);(statearr_166497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___166498);
return statearr_166497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_166662){var state_val_166663 = (state_166662[1]);if((state_val_166663 === 1))
{var state_166662__$1 = state_166662;var statearr_166664_166701 = state_166662__$1;(statearr_166664_166701[2] = null);
(statearr_166664_166701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 2))
{var state_166662__$1 = state_166662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_166662__$1,4,in$);
} else
{if((state_val_166663 === 3))
{var inst_166660 = (state_166662[2]);var state_166662__$1 = state_166662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_166662__$1,inst_166660);
} else
{if((state_val_166663 === 4))
{var inst_166608 = (state_166662[7]);var inst_166608__$1 = (state_166662[2]);var inst_166609 = (inst_166608__$1 == null);var state_166662__$1 = (function (){var statearr_166665 = state_166662;(statearr_166665[7] = inst_166608__$1);
return statearr_166665;
})();if(cljs.core.truth_(inst_166609))
{var statearr_166666_166702 = state_166662__$1;(statearr_166666_166702[1] = 5);
} else
{var statearr_166667_166703 = state_166662__$1;(statearr_166667_166703[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 5))
{var inst_166611 = cljs.core.async.close_BANG_.call(null,out);var state_166662__$1 = state_166662;var statearr_166668_166704 = state_166662__$1;(statearr_166668_166704[2] = inst_166611);
(statearr_166668_166704[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 6))
{var inst_166608 = (state_166662[7]);var inst_166613 = f.call(null,inst_166608);var inst_166618 = cljs.core.seq.call(null,inst_166613);var inst_166619 = inst_166618;var inst_166620 = null;var inst_166621 = 0;var inst_166622 = 0;var state_166662__$1 = (function (){var statearr_166669 = state_166662;(statearr_166669[8] = inst_166619);
(statearr_166669[9] = inst_166620);
(statearr_166669[10] = inst_166621);
(statearr_166669[11] = inst_166622);
return statearr_166669;
})();var statearr_166670_166705 = state_166662__$1;(statearr_166670_166705[2] = null);
(statearr_166670_166705[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 7))
{var inst_166658 = (state_166662[2]);var state_166662__$1 = state_166662;var statearr_166671_166706 = state_166662__$1;(statearr_166671_166706[2] = inst_166658);
(statearr_166671_166706[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 8))
{var inst_166621 = (state_166662[10]);var inst_166622 = (state_166662[11]);var inst_166624 = (inst_166622 < inst_166621);var inst_166625 = inst_166624;var state_166662__$1 = state_166662;if(cljs.core.truth_(inst_166625))
{var statearr_166672_166707 = state_166662__$1;(statearr_166672_166707[1] = 10);
} else
{var statearr_166673_166708 = state_166662__$1;(statearr_166673_166708[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 9))
{var inst_166655 = (state_166662[2]);var state_166662__$1 = (function (){var statearr_166674 = state_166662;(statearr_166674[12] = inst_166655);
return statearr_166674;
})();var statearr_166675_166709 = state_166662__$1;(statearr_166675_166709[2] = null);
(statearr_166675_166709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 10))
{var inst_166620 = (state_166662[9]);var inst_166622 = (state_166662[11]);var inst_166627 = cljs.core._nth.call(null,inst_166620,inst_166622);var state_166662__$1 = state_166662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_166662__$1,13,out,inst_166627);
} else
{if((state_val_166663 === 11))
{var inst_166619 = (state_166662[8]);var inst_166633 = (state_166662[13]);var inst_166633__$1 = cljs.core.seq.call(null,inst_166619);var state_166662__$1 = (function (){var statearr_166679 = state_166662;(statearr_166679[13] = inst_166633__$1);
return statearr_166679;
})();if(inst_166633__$1)
{var statearr_166680_166710 = state_166662__$1;(statearr_166680_166710[1] = 14);
} else
{var statearr_166681_166711 = state_166662__$1;(statearr_166681_166711[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 12))
{var inst_166653 = (state_166662[2]);var state_166662__$1 = state_166662;var statearr_166682_166712 = state_166662__$1;(statearr_166682_166712[2] = inst_166653);
(statearr_166682_166712[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 13))
{var inst_166619 = (state_166662[8]);var inst_166620 = (state_166662[9]);var inst_166621 = (state_166662[10]);var inst_166622 = (state_166662[11]);var inst_166629 = (state_166662[2]);var inst_166630 = (inst_166622 + 1);var tmp166676 = inst_166619;var tmp166677 = inst_166620;var tmp166678 = inst_166621;var inst_166619__$1 = tmp166676;var inst_166620__$1 = tmp166677;var inst_166621__$1 = tmp166678;var inst_166622__$1 = inst_166630;var state_166662__$1 = (function (){var statearr_166683 = state_166662;(statearr_166683[8] = inst_166619__$1);
(statearr_166683[14] = inst_166629);
(statearr_166683[9] = inst_166620__$1);
(statearr_166683[10] = inst_166621__$1);
(statearr_166683[11] = inst_166622__$1);
return statearr_166683;
})();var statearr_166684_166713 = state_166662__$1;(statearr_166684_166713[2] = null);
(statearr_166684_166713[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 14))
{var inst_166633 = (state_166662[13]);var inst_166635 = cljs.core.chunked_seq_QMARK_.call(null,inst_166633);var state_166662__$1 = state_166662;if(inst_166635)
{var statearr_166685_166714 = state_166662__$1;(statearr_166685_166714[1] = 17);
} else
{var statearr_166686_166715 = state_166662__$1;(statearr_166686_166715[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 15))
{var state_166662__$1 = state_166662;var statearr_166687_166716 = state_166662__$1;(statearr_166687_166716[2] = null);
(statearr_166687_166716[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 16))
{var inst_166651 = (state_166662[2]);var state_166662__$1 = state_166662;var statearr_166688_166717 = state_166662__$1;(statearr_166688_166717[2] = inst_166651);
(statearr_166688_166717[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 17))
{var inst_166633 = (state_166662[13]);var inst_166637 = cljs.core.chunk_first.call(null,inst_166633);var inst_166638 = cljs.core.chunk_rest.call(null,inst_166633);var inst_166639 = cljs.core.count.call(null,inst_166637);var inst_166619 = inst_166638;var inst_166620 = inst_166637;var inst_166621 = inst_166639;var inst_166622 = 0;var state_166662__$1 = (function (){var statearr_166689 = state_166662;(statearr_166689[8] = inst_166619);
(statearr_166689[9] = inst_166620);
(statearr_166689[10] = inst_166621);
(statearr_166689[11] = inst_166622);
return statearr_166689;
})();var statearr_166690_166718 = state_166662__$1;(statearr_166690_166718[2] = null);
(statearr_166690_166718[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 18))
{var inst_166633 = (state_166662[13]);var inst_166642 = cljs.core.first.call(null,inst_166633);var state_166662__$1 = state_166662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_166662__$1,20,out,inst_166642);
} else
{if((state_val_166663 === 19))
{var inst_166648 = (state_166662[2]);var state_166662__$1 = state_166662;var statearr_166691_166719 = state_166662__$1;(statearr_166691_166719[2] = inst_166648);
(statearr_166691_166719[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166663 === 20))
{var inst_166633 = (state_166662[13]);var inst_166644 = (state_166662[2]);var inst_166645 = cljs.core.next.call(null,inst_166633);var inst_166619 = inst_166645;var inst_166620 = null;var inst_166621 = 0;var inst_166622 = 0;var state_166662__$1 = (function (){var statearr_166692 = state_166662;(statearr_166692[8] = inst_166619);
(statearr_166692[15] = inst_166644);
(statearr_166692[9] = inst_166620);
(statearr_166692[10] = inst_166621);
(statearr_166692[11] = inst_166622);
return statearr_166692;
})();var statearr_166693_166720 = state_166662__$1;(statearr_166693_166720[2] = null);
(statearr_166693_166720[1] = 8);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_166697 = (new Array(16));(statearr_166697[0] = state_machine__13310__auto__);
(statearr_166697[1] = 1);
return statearr_166697;
});
var state_machine__13310__auto____1 = (function (state_166662){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_166662);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e166698){if((e166698 instanceof Object))
{var ex__13313__auto__ = e166698;var statearr_166699_166721 = state_166662;(statearr_166699_166721[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_166662);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e166698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__166722 = state_166662;
state_166662 = G__166722;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_166662){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_166662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_166700 = f__13410__auto__.call(null);(statearr_166700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_166700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
}));
return c__13409__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___166803 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_166782){var state_val_166783 = (state_166782[1]);if((state_val_166783 === 1))
{var state_166782__$1 = state_166782;var statearr_166784_166804 = state_166782__$1;(statearr_166784_166804[2] = null);
(statearr_166784_166804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166783 === 2))
{var state_166782__$1 = state_166782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_166782__$1,4,from);
} else
{if((state_val_166783 === 3))
{var inst_166780 = (state_166782[2]);var state_166782__$1 = state_166782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_166782__$1,inst_166780);
} else
{if((state_val_166783 === 4))
{var inst_166765 = (state_166782[7]);var inst_166765__$1 = (state_166782[2]);var inst_166766 = (inst_166765__$1 == null);var state_166782__$1 = (function (){var statearr_166785 = state_166782;(statearr_166785[7] = inst_166765__$1);
return statearr_166785;
})();if(cljs.core.truth_(inst_166766))
{var statearr_166786_166805 = state_166782__$1;(statearr_166786_166805[1] = 5);
} else
{var statearr_166787_166806 = state_166782__$1;(statearr_166787_166806[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166783 === 5))
{var state_166782__$1 = state_166782;if(cljs.core.truth_(close_QMARK_))
{var statearr_166788_166807 = state_166782__$1;(statearr_166788_166807[1] = 8);
} else
{var statearr_166789_166808 = state_166782__$1;(statearr_166789_166808[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166783 === 6))
{var inst_166765 = (state_166782[7]);var state_166782__$1 = state_166782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_166782__$1,11,to,inst_166765);
} else
{if((state_val_166783 === 7))
{var inst_166778 = (state_166782[2]);var state_166782__$1 = state_166782;var statearr_166790_166809 = state_166782__$1;(statearr_166790_166809[2] = inst_166778);
(statearr_166790_166809[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166783 === 8))
{var inst_166769 = cljs.core.async.close_BANG_.call(null,to);var state_166782__$1 = state_166782;var statearr_166791_166810 = state_166782__$1;(statearr_166791_166810[2] = inst_166769);
(statearr_166791_166810[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166783 === 9))
{var state_166782__$1 = state_166782;var statearr_166792_166811 = state_166782__$1;(statearr_166792_166811[2] = null);
(statearr_166792_166811[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166783 === 10))
{var inst_166772 = (state_166782[2]);var state_166782__$1 = state_166782;var statearr_166793_166812 = state_166782__$1;(statearr_166793_166812[2] = inst_166772);
(statearr_166793_166812[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166783 === 11))
{var inst_166775 = (state_166782[2]);var state_166782__$1 = (function (){var statearr_166794 = state_166782;(statearr_166794[8] = inst_166775);
return statearr_166794;
})();var statearr_166795_166813 = state_166782__$1;(statearr_166795_166813[2] = null);
(statearr_166795_166813[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_166799 = (new Array(9));(statearr_166799[0] = state_machine__13310__auto__);
(statearr_166799[1] = 1);
return statearr_166799;
});
var state_machine__13310__auto____1 = (function (state_166782){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_166782);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e166800){if((e166800 instanceof Object))
{var ex__13313__auto__ = e166800;var statearr_166801_166814 = state_166782;(statearr_166801_166814[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_166782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e166800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__166815 = state_166782;
state_166782 = G__166815;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_166782){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_166782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_166802 = f__13410__auto__.call(null);(statearr_166802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___166803);
return statearr_166802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___166902 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_166880){var state_val_166881 = (state_166880[1]);if((state_val_166881 === 1))
{var state_166880__$1 = state_166880;var statearr_166882_166903 = state_166880__$1;(statearr_166882_166903[2] = null);
(statearr_166882_166903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166881 === 2))
{var state_166880__$1 = state_166880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_166880__$1,4,ch);
} else
{if((state_val_166881 === 3))
{var inst_166878 = (state_166880[2]);var state_166880__$1 = state_166880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_166880__$1,inst_166878);
} else
{if((state_val_166881 === 4))
{var inst_166861 = (state_166880[7]);var inst_166861__$1 = (state_166880[2]);var inst_166862 = (inst_166861__$1 == null);var state_166880__$1 = (function (){var statearr_166883 = state_166880;(statearr_166883[7] = inst_166861__$1);
return statearr_166883;
})();if(cljs.core.truth_(inst_166862))
{var statearr_166884_166904 = state_166880__$1;(statearr_166884_166904[1] = 5);
} else
{var statearr_166885_166905 = state_166880__$1;(statearr_166885_166905[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166881 === 5))
{var inst_166864 = cljs.core.async.close_BANG_.call(null,tc);var inst_166865 = cljs.core.async.close_BANG_.call(null,fc);var state_166880__$1 = (function (){var statearr_166886 = state_166880;(statearr_166886[8] = inst_166864);
return statearr_166886;
})();var statearr_166887_166906 = state_166880__$1;(statearr_166887_166906[2] = inst_166865);
(statearr_166887_166906[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166881 === 6))
{var inst_166861 = (state_166880[7]);var inst_166867 = p.call(null,inst_166861);var state_166880__$1 = state_166880;if(cljs.core.truth_(inst_166867))
{var statearr_166888_166907 = state_166880__$1;(statearr_166888_166907[1] = 9);
} else
{var statearr_166889_166908 = state_166880__$1;(statearr_166889_166908[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166881 === 7))
{var inst_166876 = (state_166880[2]);var state_166880__$1 = state_166880;var statearr_166890_166909 = state_166880__$1;(statearr_166890_166909[2] = inst_166876);
(statearr_166890_166909[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166881 === 8))
{var inst_166873 = (state_166880[2]);var state_166880__$1 = (function (){var statearr_166891 = state_166880;(statearr_166891[9] = inst_166873);
return statearr_166891;
})();var statearr_166892_166910 = state_166880__$1;(statearr_166892_166910[2] = null);
(statearr_166892_166910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166881 === 9))
{var state_166880__$1 = state_166880;var statearr_166893_166911 = state_166880__$1;(statearr_166893_166911[2] = tc);
(statearr_166893_166911[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166881 === 10))
{var state_166880__$1 = state_166880;var statearr_166894_166912 = state_166880__$1;(statearr_166894_166912[2] = fc);
(statearr_166894_166912[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166881 === 11))
{var inst_166861 = (state_166880[7]);var inst_166871 = (state_166880[2]);var state_166880__$1 = state_166880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_166880__$1,8,inst_166871,inst_166861);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_166898 = (new Array(10));(statearr_166898[0] = state_machine__13310__auto__);
(statearr_166898[1] = 1);
return statearr_166898;
});
var state_machine__13310__auto____1 = (function (state_166880){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_166880);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e166899){if((e166899 instanceof Object))
{var ex__13313__auto__ = e166899;var statearr_166900_166913 = state_166880;(statearr_166900_166913[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_166880);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e166899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__166914 = state_166880;
state_166880 = G__166914;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_166880){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_166880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_166901 = f__13410__auto__.call(null);(statearr_166901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___166902);
return statearr_166901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_166961){var state_val_166962 = (state_166961[1]);if((state_val_166962 === 7))
{var inst_166957 = (state_166961[2]);var state_166961__$1 = state_166961;var statearr_166963_166979 = state_166961__$1;(statearr_166963_166979[2] = inst_166957);
(statearr_166963_166979[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166962 === 6))
{var inst_166950 = (state_166961[7]);var inst_166947 = (state_166961[8]);var inst_166954 = f.call(null,inst_166947,inst_166950);var inst_166947__$1 = inst_166954;var state_166961__$1 = (function (){var statearr_166964 = state_166961;(statearr_166964[8] = inst_166947__$1);
return statearr_166964;
})();var statearr_166965_166980 = state_166961__$1;(statearr_166965_166980[2] = null);
(statearr_166965_166980[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166962 === 5))
{var inst_166947 = (state_166961[8]);var state_166961__$1 = state_166961;var statearr_166966_166981 = state_166961__$1;(statearr_166966_166981[2] = inst_166947);
(statearr_166966_166981[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166962 === 4))
{var inst_166950 = (state_166961[7]);var inst_166950__$1 = (state_166961[2]);var inst_166951 = (inst_166950__$1 == null);var state_166961__$1 = (function (){var statearr_166967 = state_166961;(statearr_166967[7] = inst_166950__$1);
return statearr_166967;
})();if(cljs.core.truth_(inst_166951))
{var statearr_166968_166982 = state_166961__$1;(statearr_166968_166982[1] = 5);
} else
{var statearr_166969_166983 = state_166961__$1;(statearr_166969_166983[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_166962 === 3))
{var inst_166959 = (state_166961[2]);var state_166961__$1 = state_166961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_166961__$1,inst_166959);
} else
{if((state_val_166962 === 2))
{var state_166961__$1 = state_166961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_166961__$1,4,ch);
} else
{if((state_val_166962 === 1))
{var inst_166947 = init;var state_166961__$1 = (function (){var statearr_166970 = state_166961;(statearr_166970[8] = inst_166947);
return statearr_166970;
})();var statearr_166971_166984 = state_166961__$1;(statearr_166971_166984[2] = null);
(statearr_166971_166984[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_166975 = (new Array(9));(statearr_166975[0] = state_machine__13310__auto__);
(statearr_166975[1] = 1);
return statearr_166975;
});
var state_machine__13310__auto____1 = (function (state_166961){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_166961);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e166976){if((e166976 instanceof Object))
{var ex__13313__auto__ = e166976;var statearr_166977_166985 = state_166961;(statearr_166977_166985[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_166961);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e166976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__166986 = state_166961;
state_166961 = G__166986;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_166961){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_166961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_166978 = f__13410__auto__.call(null);(statearr_166978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_166978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
}));
return c__13409__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_167048){var state_val_167049 = (state_167048[1]);if((state_val_167049 === 1))
{var inst_167028 = cljs.core.seq.call(null,coll);var inst_167029 = inst_167028;var state_167048__$1 = (function (){var statearr_167050 = state_167048;(statearr_167050[7] = inst_167029);
return statearr_167050;
})();var statearr_167051_167069 = state_167048__$1;(statearr_167051_167069[2] = null);
(statearr_167051_167069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167049 === 2))
{var inst_167029 = (state_167048[7]);var state_167048__$1 = state_167048;if(cljs.core.truth_(inst_167029))
{var statearr_167052_167070 = state_167048__$1;(statearr_167052_167070[1] = 4);
} else
{var statearr_167053_167071 = state_167048__$1;(statearr_167053_167071[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167049 === 3))
{var inst_167046 = (state_167048[2]);var state_167048__$1 = state_167048;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_167048__$1,inst_167046);
} else
{if((state_val_167049 === 4))
{var inst_167029 = (state_167048[7]);var inst_167032 = cljs.core.first.call(null,inst_167029);var state_167048__$1 = state_167048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_167048__$1,7,ch,inst_167032);
} else
{if((state_val_167049 === 5))
{var state_167048__$1 = state_167048;if(cljs.core.truth_(close_QMARK_))
{var statearr_167054_167072 = state_167048__$1;(statearr_167054_167072[1] = 8);
} else
{var statearr_167055_167073 = state_167048__$1;(statearr_167055_167073[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167049 === 6))
{var inst_167044 = (state_167048[2]);var state_167048__$1 = state_167048;var statearr_167056_167074 = state_167048__$1;(statearr_167056_167074[2] = inst_167044);
(statearr_167056_167074[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167049 === 7))
{var inst_167029 = (state_167048[7]);var inst_167034 = (state_167048[2]);var inst_167035 = cljs.core.next.call(null,inst_167029);var inst_167029__$1 = inst_167035;var state_167048__$1 = (function (){var statearr_167057 = state_167048;(statearr_167057[7] = inst_167029__$1);
(statearr_167057[8] = inst_167034);
return statearr_167057;
})();var statearr_167058_167075 = state_167048__$1;(statearr_167058_167075[2] = null);
(statearr_167058_167075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167049 === 8))
{var inst_167039 = cljs.core.async.close_BANG_.call(null,ch);var state_167048__$1 = state_167048;var statearr_167059_167076 = state_167048__$1;(statearr_167059_167076[2] = inst_167039);
(statearr_167059_167076[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167049 === 9))
{var state_167048__$1 = state_167048;var statearr_167060_167077 = state_167048__$1;(statearr_167060_167077[2] = null);
(statearr_167060_167077[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167049 === 10))
{var inst_167042 = (state_167048[2]);var state_167048__$1 = state_167048;var statearr_167061_167078 = state_167048__$1;(statearr_167061_167078[2] = inst_167042);
(statearr_167061_167078[1] = 6);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_167065 = (new Array(9));(statearr_167065[0] = state_machine__13310__auto__);
(statearr_167065[1] = 1);
return statearr_167065;
});
var state_machine__13310__auto____1 = (function (state_167048){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_167048);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e167066){if((e167066 instanceof Object))
{var ex__13313__auto__ = e167066;var statearr_167067_167079 = state_167048;(statearr_167067_167079[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_167048);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e167066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__167080 = state_167048;
state_167048 = G__167080;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_167048){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_167048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_167068 = f__13410__auto__.call(null);(statearr_167068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_167068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
}));
return c__13409__auto__;
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
cljs.core.async.Mux = (function (){var obj167082 = {};return obj167082;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__6277__auto__ = _;if(and__6277__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__6892__auto__ = (((_ == null))?null:_);return (function (){var or__6289__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj167084 = {};return obj167084;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t167299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t167299 = (function (cs,ch,mult,meta167300){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta167300 = meta167300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t167299.cljs$lang$type = true;
cljs.core.async.t167299.cljs$lang$ctorStr = "cljs.core.async/t167299";
cljs.core.async.t167299.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t167299");
});})(cs))
;
cljs.core.async.t167299.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t167299.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t167299.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t167299.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t167299.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t167299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t167299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_167301){var self__ = this;
var _167301__$1 = this;return self__.meta167300;
});})(cs))
;
cljs.core.async.t167299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_167301,meta167300__$1){var self__ = this;
var _167301__$1 = this;return (new cljs.core.async.t167299(self__.cs,self__.ch,self__.mult,meta167300__$1));
});})(cs))
;
cljs.core.async.__GT_t167299 = ((function (cs){
return (function __GT_t167299(cs__$1,ch__$1,mult__$1,meta167300){return (new cljs.core.async.t167299(cs__$1,ch__$1,mult__$1,meta167300));
});})(cs))
;
}
return (new cljs.core.async.t167299(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___167513 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_167431){var state_val_167432 = (state_167431[1]);if((state_val_167432 === 32))
{var inst_167380 = (state_167431[7]);var inst_167304 = (state_167431[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_167431,31,Object,null,30);var inst_167387 = cljs.core.async.put_BANG_.call(null,inst_167380,inst_167304,done);var state_167431__$1 = state_167431;var statearr_167433_167514 = state_167431__$1;(statearr_167433_167514[2] = inst_167387);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_167431__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 1))
{var state_167431__$1 = state_167431;var statearr_167434_167515 = state_167431__$1;(statearr_167434_167515[2] = null);
(statearr_167434_167515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 33))
{var inst_167393 = (state_167431[9]);var inst_167395 = cljs.core.chunked_seq_QMARK_.call(null,inst_167393);var state_167431__$1 = state_167431;if(inst_167395)
{var statearr_167435_167516 = state_167431__$1;(statearr_167435_167516[1] = 36);
} else
{var statearr_167436_167517 = state_167431__$1;(statearr_167436_167517[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 2))
{var state_167431__$1 = state_167431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_167431__$1,4,ch);
} else
{if((state_val_167432 === 34))
{var state_167431__$1 = state_167431;var statearr_167437_167518 = state_167431__$1;(statearr_167437_167518[2] = null);
(statearr_167437_167518[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 3))
{var inst_167429 = (state_167431[2]);var state_167431__$1 = state_167431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_167431__$1,inst_167429);
} else
{if((state_val_167432 === 35))
{var inst_167418 = (state_167431[2]);var state_167431__$1 = state_167431;var statearr_167438_167519 = state_167431__$1;(statearr_167438_167519[2] = inst_167418);
(statearr_167438_167519[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 4))
{var inst_167304 = (state_167431[8]);var inst_167304__$1 = (state_167431[2]);var inst_167305 = (inst_167304__$1 == null);var state_167431__$1 = (function (){var statearr_167439 = state_167431;(statearr_167439[8] = inst_167304__$1);
return statearr_167439;
})();if(cljs.core.truth_(inst_167305))
{var statearr_167440_167520 = state_167431__$1;(statearr_167440_167520[1] = 5);
} else
{var statearr_167441_167521 = state_167431__$1;(statearr_167441_167521[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 36))
{var inst_167393 = (state_167431[9]);var inst_167397 = cljs.core.chunk_first.call(null,inst_167393);var inst_167398 = cljs.core.chunk_rest.call(null,inst_167393);var inst_167399 = cljs.core.count.call(null,inst_167397);var inst_167372 = inst_167398;var inst_167373 = inst_167397;var inst_167374 = inst_167399;var inst_167375 = 0;var state_167431__$1 = (function (){var statearr_167442 = state_167431;(statearr_167442[10] = inst_167373);
(statearr_167442[11] = inst_167374);
(statearr_167442[12] = inst_167372);
(statearr_167442[13] = inst_167375);
return statearr_167442;
})();var statearr_167443_167522 = state_167431__$1;(statearr_167443_167522[2] = null);
(statearr_167443_167522[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 5))
{var inst_167311 = cljs.core.deref.call(null,cs);var inst_167312 = cljs.core.seq.call(null,inst_167311);var inst_167313 = inst_167312;var inst_167314 = null;var inst_167315 = 0;var inst_167316 = 0;var state_167431__$1 = (function (){var statearr_167444 = state_167431;(statearr_167444[14] = inst_167313);
(statearr_167444[15] = inst_167314);
(statearr_167444[16] = inst_167315);
(statearr_167444[17] = inst_167316);
return statearr_167444;
})();var statearr_167445_167523 = state_167431__$1;(statearr_167445_167523[2] = null);
(statearr_167445_167523[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 37))
{var inst_167393 = (state_167431[9]);var inst_167402 = cljs.core.first.call(null,inst_167393);var state_167431__$1 = (function (){var statearr_167446 = state_167431;(statearr_167446[18] = inst_167402);
return statearr_167446;
})();var statearr_167447_167524 = state_167431__$1;(statearr_167447_167524[2] = null);
(statearr_167447_167524[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 6))
{var inst_167363 = cljs.core.deref.call(null,cs);var inst_167364 = cljs.core.keys.call(null,inst_167363);var inst_167365 = cljs.core.count.call(null,inst_167364);var inst_167366 = cljs.core.reset_BANG_.call(null,dctr,inst_167365);var inst_167371 = cljs.core.seq.call(null,inst_167364);var inst_167372 = inst_167371;var inst_167373 = null;var inst_167374 = 0;var inst_167375 = 0;var state_167431__$1 = (function (){var statearr_167448 = state_167431;(statearr_167448[10] = inst_167373);
(statearr_167448[11] = inst_167374);
(statearr_167448[12] = inst_167372);
(statearr_167448[13] = inst_167375);
(statearr_167448[19] = inst_167366);
return statearr_167448;
})();var statearr_167449_167525 = state_167431__$1;(statearr_167449_167525[2] = null);
(statearr_167449_167525[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 38))
{var inst_167415 = (state_167431[2]);var state_167431__$1 = state_167431;var statearr_167450_167526 = state_167431__$1;(statearr_167450_167526[2] = inst_167415);
(statearr_167450_167526[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 7))
{var inst_167427 = (state_167431[2]);var state_167431__$1 = state_167431;var statearr_167451_167527 = state_167431__$1;(statearr_167451_167527[2] = inst_167427);
(statearr_167451_167527[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 39))
{var inst_167393 = (state_167431[9]);var inst_167411 = (state_167431[2]);var inst_167412 = cljs.core.next.call(null,inst_167393);var inst_167372 = inst_167412;var inst_167373 = null;var inst_167374 = 0;var inst_167375 = 0;var state_167431__$1 = (function (){var statearr_167452 = state_167431;(statearr_167452[10] = inst_167373);
(statearr_167452[11] = inst_167374);
(statearr_167452[12] = inst_167372);
(statearr_167452[20] = inst_167411);
(statearr_167452[13] = inst_167375);
return statearr_167452;
})();var statearr_167453_167528 = state_167431__$1;(statearr_167453_167528[2] = null);
(statearr_167453_167528[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 8))
{var inst_167315 = (state_167431[16]);var inst_167316 = (state_167431[17]);var inst_167318 = (inst_167316 < inst_167315);var inst_167319 = inst_167318;var state_167431__$1 = state_167431;if(cljs.core.truth_(inst_167319))
{var statearr_167454_167529 = state_167431__$1;(statearr_167454_167529[1] = 10);
} else
{var statearr_167455_167530 = state_167431__$1;(statearr_167455_167530[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 40))
{var inst_167402 = (state_167431[18]);var inst_167403 = (state_167431[2]);var inst_167404 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_167405 = cljs.core.async.untap_STAR_.call(null,m,inst_167402);var state_167431__$1 = (function (){var statearr_167456 = state_167431;(statearr_167456[21] = inst_167403);
(statearr_167456[22] = inst_167404);
return statearr_167456;
})();var statearr_167457_167531 = state_167431__$1;(statearr_167457_167531[2] = inst_167405);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_167431__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 9))
{var inst_167361 = (state_167431[2]);var state_167431__$1 = state_167431;var statearr_167458_167532 = state_167431__$1;(statearr_167458_167532[2] = inst_167361);
(statearr_167458_167532[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 41))
{var inst_167402 = (state_167431[18]);var inst_167304 = (state_167431[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_167431,40,Object,null,39);var inst_167409 = cljs.core.async.put_BANG_.call(null,inst_167402,inst_167304,done);var state_167431__$1 = state_167431;var statearr_167459_167533 = state_167431__$1;(statearr_167459_167533[2] = inst_167409);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_167431__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 10))
{var inst_167314 = (state_167431[15]);var inst_167316 = (state_167431[17]);var inst_167322 = cljs.core._nth.call(null,inst_167314,inst_167316);var inst_167323 = cljs.core.nth.call(null,inst_167322,0,null);var inst_167324 = cljs.core.nth.call(null,inst_167322,1,null);var state_167431__$1 = (function (){var statearr_167460 = state_167431;(statearr_167460[23] = inst_167323);
return statearr_167460;
})();if(cljs.core.truth_(inst_167324))
{var statearr_167461_167534 = state_167431__$1;(statearr_167461_167534[1] = 13);
} else
{var statearr_167462_167535 = state_167431__$1;(statearr_167462_167535[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 42))
{var inst_167424 = (state_167431[2]);var state_167431__$1 = (function (){var statearr_167463 = state_167431;(statearr_167463[24] = inst_167424);
return statearr_167463;
})();var statearr_167464_167536 = state_167431__$1;(statearr_167464_167536[2] = null);
(statearr_167464_167536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 11))
{var inst_167333 = (state_167431[25]);var inst_167313 = (state_167431[14]);var inst_167333__$1 = cljs.core.seq.call(null,inst_167313);var state_167431__$1 = (function (){var statearr_167465 = state_167431;(statearr_167465[25] = inst_167333__$1);
return statearr_167465;
})();if(inst_167333__$1)
{var statearr_167466_167537 = state_167431__$1;(statearr_167466_167537[1] = 16);
} else
{var statearr_167467_167538 = state_167431__$1;(statearr_167467_167538[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 12))
{var inst_167359 = (state_167431[2]);var state_167431__$1 = state_167431;var statearr_167468_167539 = state_167431__$1;(statearr_167468_167539[2] = inst_167359);
(statearr_167468_167539[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 13))
{var inst_167323 = (state_167431[23]);var inst_167326 = cljs.core.async.close_BANG_.call(null,inst_167323);var state_167431__$1 = state_167431;var statearr_167472_167540 = state_167431__$1;(statearr_167472_167540[2] = inst_167326);
(statearr_167472_167540[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 14))
{var state_167431__$1 = state_167431;var statearr_167473_167541 = state_167431__$1;(statearr_167473_167541[2] = null);
(statearr_167473_167541[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 15))
{var inst_167313 = (state_167431[14]);var inst_167314 = (state_167431[15]);var inst_167315 = (state_167431[16]);var inst_167316 = (state_167431[17]);var inst_167329 = (state_167431[2]);var inst_167330 = (inst_167316 + 1);var tmp167469 = inst_167313;var tmp167470 = inst_167314;var tmp167471 = inst_167315;var inst_167313__$1 = tmp167469;var inst_167314__$1 = tmp167470;var inst_167315__$1 = tmp167471;var inst_167316__$1 = inst_167330;var state_167431__$1 = (function (){var statearr_167474 = state_167431;(statearr_167474[26] = inst_167329);
(statearr_167474[14] = inst_167313__$1);
(statearr_167474[15] = inst_167314__$1);
(statearr_167474[16] = inst_167315__$1);
(statearr_167474[17] = inst_167316__$1);
return statearr_167474;
})();var statearr_167475_167542 = state_167431__$1;(statearr_167475_167542[2] = null);
(statearr_167475_167542[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 16))
{var inst_167333 = (state_167431[25]);var inst_167335 = cljs.core.chunked_seq_QMARK_.call(null,inst_167333);var state_167431__$1 = state_167431;if(inst_167335)
{var statearr_167476_167543 = state_167431__$1;(statearr_167476_167543[1] = 19);
} else
{var statearr_167477_167544 = state_167431__$1;(statearr_167477_167544[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 17))
{var state_167431__$1 = state_167431;var statearr_167478_167545 = state_167431__$1;(statearr_167478_167545[2] = null);
(statearr_167478_167545[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 18))
{var inst_167357 = (state_167431[2]);var state_167431__$1 = state_167431;var statearr_167479_167546 = state_167431__$1;(statearr_167479_167546[2] = inst_167357);
(statearr_167479_167546[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 19))
{var inst_167333 = (state_167431[25]);var inst_167337 = cljs.core.chunk_first.call(null,inst_167333);var inst_167338 = cljs.core.chunk_rest.call(null,inst_167333);var inst_167339 = cljs.core.count.call(null,inst_167337);var inst_167313 = inst_167338;var inst_167314 = inst_167337;var inst_167315 = inst_167339;var inst_167316 = 0;var state_167431__$1 = (function (){var statearr_167480 = state_167431;(statearr_167480[14] = inst_167313);
(statearr_167480[15] = inst_167314);
(statearr_167480[16] = inst_167315);
(statearr_167480[17] = inst_167316);
return statearr_167480;
})();var statearr_167481_167547 = state_167431__$1;(statearr_167481_167547[2] = null);
(statearr_167481_167547[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 20))
{var inst_167333 = (state_167431[25]);var inst_167343 = cljs.core.first.call(null,inst_167333);var inst_167344 = cljs.core.nth.call(null,inst_167343,0,null);var inst_167345 = cljs.core.nth.call(null,inst_167343,1,null);var state_167431__$1 = (function (){var statearr_167482 = state_167431;(statearr_167482[27] = inst_167344);
return statearr_167482;
})();if(cljs.core.truth_(inst_167345))
{var statearr_167483_167548 = state_167431__$1;(statearr_167483_167548[1] = 22);
} else
{var statearr_167484_167549 = state_167431__$1;(statearr_167484_167549[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 21))
{var inst_167354 = (state_167431[2]);var state_167431__$1 = state_167431;var statearr_167485_167550 = state_167431__$1;(statearr_167485_167550[2] = inst_167354);
(statearr_167485_167550[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 22))
{var inst_167344 = (state_167431[27]);var inst_167347 = cljs.core.async.close_BANG_.call(null,inst_167344);var state_167431__$1 = state_167431;var statearr_167486_167551 = state_167431__$1;(statearr_167486_167551[2] = inst_167347);
(statearr_167486_167551[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 23))
{var state_167431__$1 = state_167431;var statearr_167487_167552 = state_167431__$1;(statearr_167487_167552[2] = null);
(statearr_167487_167552[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 24))
{var inst_167333 = (state_167431[25]);var inst_167350 = (state_167431[2]);var inst_167351 = cljs.core.next.call(null,inst_167333);var inst_167313 = inst_167351;var inst_167314 = null;var inst_167315 = 0;var inst_167316 = 0;var state_167431__$1 = (function (){var statearr_167488 = state_167431;(statearr_167488[28] = inst_167350);
(statearr_167488[14] = inst_167313);
(statearr_167488[15] = inst_167314);
(statearr_167488[16] = inst_167315);
(statearr_167488[17] = inst_167316);
return statearr_167488;
})();var statearr_167489_167553 = state_167431__$1;(statearr_167489_167553[2] = null);
(statearr_167489_167553[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 25))
{var inst_167374 = (state_167431[11]);var inst_167375 = (state_167431[13]);var inst_167377 = (inst_167375 < inst_167374);var inst_167378 = inst_167377;var state_167431__$1 = state_167431;if(cljs.core.truth_(inst_167378))
{var statearr_167490_167554 = state_167431__$1;(statearr_167490_167554[1] = 27);
} else
{var statearr_167491_167555 = state_167431__$1;(statearr_167491_167555[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 26))
{var inst_167422 = (state_167431[2]);var state_167431__$1 = (function (){var statearr_167492 = state_167431;(statearr_167492[29] = inst_167422);
return statearr_167492;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_167431__$1,42,dchan);
} else
{if((state_val_167432 === 27))
{var inst_167373 = (state_167431[10]);var inst_167375 = (state_167431[13]);var inst_167380 = cljs.core._nth.call(null,inst_167373,inst_167375);var state_167431__$1 = (function (){var statearr_167493 = state_167431;(statearr_167493[7] = inst_167380);
return statearr_167493;
})();var statearr_167494_167556 = state_167431__$1;(statearr_167494_167556[2] = null);
(statearr_167494_167556[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 28))
{var inst_167372 = (state_167431[12]);var inst_167393 = (state_167431[9]);var inst_167393__$1 = cljs.core.seq.call(null,inst_167372);var state_167431__$1 = (function (){var statearr_167498 = state_167431;(statearr_167498[9] = inst_167393__$1);
return statearr_167498;
})();if(inst_167393__$1)
{var statearr_167499_167557 = state_167431__$1;(statearr_167499_167557[1] = 33);
} else
{var statearr_167500_167558 = state_167431__$1;(statearr_167500_167558[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 29))
{var inst_167420 = (state_167431[2]);var state_167431__$1 = state_167431;var statearr_167501_167559 = state_167431__$1;(statearr_167501_167559[2] = inst_167420);
(statearr_167501_167559[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 30))
{var inst_167373 = (state_167431[10]);var inst_167374 = (state_167431[11]);var inst_167372 = (state_167431[12]);var inst_167375 = (state_167431[13]);var inst_167389 = (state_167431[2]);var inst_167390 = (inst_167375 + 1);var tmp167495 = inst_167373;var tmp167496 = inst_167374;var tmp167497 = inst_167372;var inst_167372__$1 = tmp167497;var inst_167373__$1 = tmp167495;var inst_167374__$1 = tmp167496;var inst_167375__$1 = inst_167390;var state_167431__$1 = (function (){var statearr_167502 = state_167431;(statearr_167502[10] = inst_167373__$1);
(statearr_167502[11] = inst_167374__$1);
(statearr_167502[12] = inst_167372__$1);
(statearr_167502[30] = inst_167389);
(statearr_167502[13] = inst_167375__$1);
return statearr_167502;
})();var statearr_167503_167560 = state_167431__$1;(statearr_167503_167560[2] = null);
(statearr_167503_167560[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167432 === 31))
{var inst_167380 = (state_167431[7]);var inst_167381 = (state_167431[2]);var inst_167382 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_167383 = cljs.core.async.untap_STAR_.call(null,m,inst_167380);var state_167431__$1 = (function (){var statearr_167504 = state_167431;(statearr_167504[31] = inst_167382);
(statearr_167504[32] = inst_167381);
return statearr_167504;
})();var statearr_167505_167561 = state_167431__$1;(statearr_167505_167561[2] = inst_167383);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_167431__$1);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_167509 = (new Array(33));(statearr_167509[0] = state_machine__13310__auto__);
(statearr_167509[1] = 1);
return statearr_167509;
});
var state_machine__13310__auto____1 = (function (state_167431){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_167431);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e167510){if((e167510 instanceof Object))
{var ex__13313__auto__ = e167510;var statearr_167511_167562 = state_167431;(statearr_167511_167562[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_167431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e167510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__167563 = state_167431;
state_167431 = G__167563;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_167431){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_167431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_167512 = f__13410__auto__.call(null);(statearr_167512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___167513);
return statearr_167512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.Mix = (function (){var obj167565 = {};return obj167565;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t167675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t167675 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta167676){
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
this.meta167676 = meta167676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t167675.cljs$lang$type = true;
cljs.core.async.t167675.cljs$lang$ctorStr = "cljs.core.async/t167675";
cljs.core.async.t167675.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t167675");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t167675.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t167675.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t167675.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t167675.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t167675.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t167675.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t167675.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t167675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t167675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_167677){var self__ = this;
var _167677__$1 = this;return self__.meta167676;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t167675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_167677,meta167676__$1){var self__ = this;
var _167677__$1 = this;return (new cljs.core.async.t167675(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta167676__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t167675 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t167675(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta167676){return (new cljs.core.async.t167675(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta167676));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t167675(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___167784 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_167742){var state_val_167743 = (state_167742[1]);if((state_val_167743 === 1))
{var inst_167681 = (state_167742[7]);var inst_167681__$1 = calc_state.call(null);var inst_167682 = cljs.core.seq_QMARK_.call(null,inst_167681__$1);var state_167742__$1 = (function (){var statearr_167744 = state_167742;(statearr_167744[7] = inst_167681__$1);
return statearr_167744;
})();if(inst_167682)
{var statearr_167745_167785 = state_167742__$1;(statearr_167745_167785[1] = 2);
} else
{var statearr_167746_167786 = state_167742__$1;(statearr_167746_167786[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 2))
{var inst_167681 = (state_167742[7]);var inst_167684 = cljs.core.apply.call(null,cljs.core.hash_map,inst_167681);var state_167742__$1 = state_167742;var statearr_167747_167787 = state_167742__$1;(statearr_167747_167787[2] = inst_167684);
(statearr_167747_167787[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 3))
{var inst_167681 = (state_167742[7]);var state_167742__$1 = state_167742;var statearr_167748_167788 = state_167742__$1;(statearr_167748_167788[2] = inst_167681);
(statearr_167748_167788[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 4))
{var inst_167681 = (state_167742[7]);var inst_167687 = (state_167742[2]);var inst_167688 = cljs.core.get.call(null,inst_167687,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_167689 = cljs.core.get.call(null,inst_167687,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_167690 = cljs.core.get.call(null,inst_167687,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_167691 = inst_167681;var state_167742__$1 = (function (){var statearr_167749 = state_167742;(statearr_167749[8] = inst_167690);
(statearr_167749[9] = inst_167691);
(statearr_167749[10] = inst_167688);
(statearr_167749[11] = inst_167689);
return statearr_167749;
})();var statearr_167750_167789 = state_167742__$1;(statearr_167750_167789[2] = null);
(statearr_167750_167789[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 5))
{var inst_167691 = (state_167742[9]);var inst_167694 = cljs.core.seq_QMARK_.call(null,inst_167691);var state_167742__$1 = state_167742;if(inst_167694)
{var statearr_167751_167790 = state_167742__$1;(statearr_167751_167790[1] = 7);
} else
{var statearr_167752_167791 = state_167742__$1;(statearr_167752_167791[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 6))
{var inst_167740 = (state_167742[2]);var state_167742__$1 = state_167742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_167742__$1,inst_167740);
} else
{if((state_val_167743 === 7))
{var inst_167691 = (state_167742[9]);var inst_167696 = cljs.core.apply.call(null,cljs.core.hash_map,inst_167691);var state_167742__$1 = state_167742;var statearr_167753_167792 = state_167742__$1;(statearr_167753_167792[2] = inst_167696);
(statearr_167753_167792[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 8))
{var inst_167691 = (state_167742[9]);var state_167742__$1 = state_167742;var statearr_167754_167793 = state_167742__$1;(statearr_167754_167793[2] = inst_167691);
(statearr_167754_167793[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 9))
{var inst_167699 = (state_167742[12]);var inst_167699__$1 = (state_167742[2]);var inst_167700 = cljs.core.get.call(null,inst_167699__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_167701 = cljs.core.get.call(null,inst_167699__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_167702 = cljs.core.get.call(null,inst_167699__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_167742__$1 = (function (){var statearr_167755 = state_167742;(statearr_167755[13] = inst_167702);
(statearr_167755[12] = inst_167699__$1);
(statearr_167755[14] = inst_167701);
return statearr_167755;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_167742__$1,10,inst_167700);
} else
{if((state_val_167743 === 10))
{var inst_167706 = (state_167742[15]);var inst_167707 = (state_167742[16]);var inst_167705 = (state_167742[2]);var inst_167706__$1 = cljs.core.nth.call(null,inst_167705,0,null);var inst_167707__$1 = cljs.core.nth.call(null,inst_167705,1,null);var inst_167708 = (inst_167706__$1 == null);var inst_167709 = cljs.core._EQ_.call(null,inst_167707__$1,change);var inst_167710 = (inst_167708) || (inst_167709);var state_167742__$1 = (function (){var statearr_167756 = state_167742;(statearr_167756[15] = inst_167706__$1);
(statearr_167756[16] = inst_167707__$1);
return statearr_167756;
})();if(cljs.core.truth_(inst_167710))
{var statearr_167757_167794 = state_167742__$1;(statearr_167757_167794[1] = 11);
} else
{var statearr_167758_167795 = state_167742__$1;(statearr_167758_167795[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 11))
{var inst_167706 = (state_167742[15]);var inst_167712 = (inst_167706 == null);var state_167742__$1 = state_167742;if(cljs.core.truth_(inst_167712))
{var statearr_167759_167796 = state_167742__$1;(statearr_167759_167796[1] = 14);
} else
{var statearr_167760_167797 = state_167742__$1;(statearr_167760_167797[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 12))
{var inst_167702 = (state_167742[13]);var inst_167707 = (state_167742[16]);var inst_167721 = (state_167742[17]);var inst_167721__$1 = inst_167702.call(null,inst_167707);var state_167742__$1 = (function (){var statearr_167761 = state_167742;(statearr_167761[17] = inst_167721__$1);
return statearr_167761;
})();if(cljs.core.truth_(inst_167721__$1))
{var statearr_167762_167798 = state_167742__$1;(statearr_167762_167798[1] = 17);
} else
{var statearr_167763_167799 = state_167742__$1;(statearr_167763_167799[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 13))
{var inst_167738 = (state_167742[2]);var state_167742__$1 = state_167742;var statearr_167764_167800 = state_167742__$1;(statearr_167764_167800[2] = inst_167738);
(statearr_167764_167800[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 14))
{var inst_167707 = (state_167742[16]);var inst_167714 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_167707);var state_167742__$1 = state_167742;var statearr_167765_167801 = state_167742__$1;(statearr_167765_167801[2] = inst_167714);
(statearr_167765_167801[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 15))
{var state_167742__$1 = state_167742;var statearr_167766_167802 = state_167742__$1;(statearr_167766_167802[2] = null);
(statearr_167766_167802[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 16))
{var inst_167717 = (state_167742[2]);var inst_167718 = calc_state.call(null);var inst_167691 = inst_167718;var state_167742__$1 = (function (){var statearr_167767 = state_167742;(statearr_167767[9] = inst_167691);
(statearr_167767[18] = inst_167717);
return statearr_167767;
})();var statearr_167768_167803 = state_167742__$1;(statearr_167768_167803[2] = null);
(statearr_167768_167803[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 17))
{var inst_167721 = (state_167742[17]);var state_167742__$1 = state_167742;var statearr_167769_167804 = state_167742__$1;(statearr_167769_167804[2] = inst_167721);
(statearr_167769_167804[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 18))
{var inst_167702 = (state_167742[13]);var inst_167707 = (state_167742[16]);var inst_167701 = (state_167742[14]);var inst_167724 = cljs.core.empty_QMARK_.call(null,inst_167702);var inst_167725 = inst_167701.call(null,inst_167707);var inst_167726 = cljs.core.not.call(null,inst_167725);var inst_167727 = (inst_167724) && (inst_167726);var state_167742__$1 = state_167742;var statearr_167770_167805 = state_167742__$1;(statearr_167770_167805[2] = inst_167727);
(statearr_167770_167805[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 19))
{var inst_167729 = (state_167742[2]);var state_167742__$1 = state_167742;if(cljs.core.truth_(inst_167729))
{var statearr_167771_167806 = state_167742__$1;(statearr_167771_167806[1] = 20);
} else
{var statearr_167772_167807 = state_167742__$1;(statearr_167772_167807[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 20))
{var inst_167706 = (state_167742[15]);var state_167742__$1 = state_167742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_167742__$1,23,out,inst_167706);
} else
{if((state_val_167743 === 21))
{var state_167742__$1 = state_167742;var statearr_167773_167808 = state_167742__$1;(statearr_167773_167808[2] = null);
(statearr_167773_167808[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 22))
{var inst_167699 = (state_167742[12]);var inst_167735 = (state_167742[2]);var inst_167691 = inst_167699;var state_167742__$1 = (function (){var statearr_167774 = state_167742;(statearr_167774[9] = inst_167691);
(statearr_167774[19] = inst_167735);
return statearr_167774;
})();var statearr_167775_167809 = state_167742__$1;(statearr_167775_167809[2] = null);
(statearr_167775_167809[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_167743 === 23))
{var inst_167732 = (state_167742[2]);var state_167742__$1 = state_167742;var statearr_167776_167810 = state_167742__$1;(statearr_167776_167810[2] = inst_167732);
(statearr_167776_167810[1] = 22);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_167780 = (new Array(20));(statearr_167780[0] = state_machine__13310__auto__);
(statearr_167780[1] = 1);
return statearr_167780;
});
var state_machine__13310__auto____1 = (function (state_167742){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_167742);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e167781){if((e167781 instanceof Object))
{var ex__13313__auto__ = e167781;var statearr_167782_167811 = state_167742;(statearr_167782_167811[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_167742);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e167781;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__167812 = state_167742;
state_167742 = G__167812;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_167742){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_167742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_167783 = f__13410__auto__.call(null);(statearr_167783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___167784);
return statearr_167783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.Pub = (function (){var obj167814 = {};return obj167814;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
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
return (function (topic){var or__6289__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6289__auto__,mults){
return (function (p1__167815_SHARP_){if(cljs.core.truth_(p1__167815_SHARP_.call(null,topic)))
{return p1__167815_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__167815_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t167940 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t167940 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta167941){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta167941 = meta167941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t167940.cljs$lang$type = true;
cljs.core.async.t167940.cljs$lang$ctorStr = "cljs.core.async/t167940";
cljs.core.async.t167940.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t167940");
});})(mults,ensure_mult))
;
cljs.core.async.t167940.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t167940.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t167940.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t167940.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t167940.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t167940.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t167940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t167940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_167942){var self__ = this;
var _167942__$1 = this;return self__.meta167941;
});})(mults,ensure_mult))
;
cljs.core.async.t167940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_167942,meta167941__$1){var self__ = this;
var _167942__$1 = this;return (new cljs.core.async.t167940(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta167941__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t167940 = ((function (mults,ensure_mult){
return (function __GT_t167940(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta167941){return (new cljs.core.async.t167940(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta167941));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t167940(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___168064 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_168016){var state_val_168017 = (state_168016[1]);if((state_val_168017 === 1))
{var state_168016__$1 = state_168016;var statearr_168018_168065 = state_168016__$1;(statearr_168018_168065[2] = null);
(statearr_168018_168065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 2))
{var state_168016__$1 = state_168016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168016__$1,4,ch);
} else
{if((state_val_168017 === 3))
{var inst_168014 = (state_168016[2]);var state_168016__$1 = state_168016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_168016__$1,inst_168014);
} else
{if((state_val_168017 === 4))
{var inst_167945 = (state_168016[7]);var inst_167945__$1 = (state_168016[2]);var inst_167946 = (inst_167945__$1 == null);var state_168016__$1 = (function (){var statearr_168019 = state_168016;(statearr_168019[7] = inst_167945__$1);
return statearr_168019;
})();if(cljs.core.truth_(inst_167946))
{var statearr_168020_168066 = state_168016__$1;(statearr_168020_168066[1] = 5);
} else
{var statearr_168021_168067 = state_168016__$1;(statearr_168021_168067[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 5))
{var inst_167952 = cljs.core.deref.call(null,mults);var inst_167953 = cljs.core.vals.call(null,inst_167952);var inst_167954 = cljs.core.seq.call(null,inst_167953);var inst_167955 = inst_167954;var inst_167956 = null;var inst_167957 = 0;var inst_167958 = 0;var state_168016__$1 = (function (){var statearr_168022 = state_168016;(statearr_168022[8] = inst_167956);
(statearr_168022[9] = inst_167955);
(statearr_168022[10] = inst_167958);
(statearr_168022[11] = inst_167957);
return statearr_168022;
})();var statearr_168023_168068 = state_168016__$1;(statearr_168023_168068[2] = null);
(statearr_168023_168068[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 6))
{var inst_167945 = (state_168016[7]);var inst_167995 = (state_168016[12]);var inst_167993 = (state_168016[13]);var inst_167993__$1 = topic_fn.call(null,inst_167945);var inst_167994 = cljs.core.deref.call(null,mults);var inst_167995__$1 = cljs.core.get.call(null,inst_167994,inst_167993__$1);var state_168016__$1 = (function (){var statearr_168024 = state_168016;(statearr_168024[12] = inst_167995__$1);
(statearr_168024[13] = inst_167993__$1);
return statearr_168024;
})();if(cljs.core.truth_(inst_167995__$1))
{var statearr_168025_168069 = state_168016__$1;(statearr_168025_168069[1] = 19);
} else
{var statearr_168026_168070 = state_168016__$1;(statearr_168026_168070[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 7))
{var inst_168012 = (state_168016[2]);var state_168016__$1 = state_168016;var statearr_168027_168071 = state_168016__$1;(statearr_168027_168071[2] = inst_168012);
(statearr_168027_168071[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 8))
{var inst_167958 = (state_168016[10]);var inst_167957 = (state_168016[11]);var inst_167960 = (inst_167958 < inst_167957);var inst_167961 = inst_167960;var state_168016__$1 = state_168016;if(cljs.core.truth_(inst_167961))
{var statearr_168031_168072 = state_168016__$1;(statearr_168031_168072[1] = 10);
} else
{var statearr_168032_168073 = state_168016__$1;(statearr_168032_168073[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 9))
{var inst_167991 = (state_168016[2]);var state_168016__$1 = state_168016;var statearr_168033_168074 = state_168016__$1;(statearr_168033_168074[2] = inst_167991);
(statearr_168033_168074[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 10))
{var inst_167956 = (state_168016[8]);var inst_167955 = (state_168016[9]);var inst_167958 = (state_168016[10]);var inst_167957 = (state_168016[11]);var inst_167963 = cljs.core._nth.call(null,inst_167956,inst_167958);var inst_167964 = cljs.core.async.muxch_STAR_.call(null,inst_167963);var inst_167965 = cljs.core.async.close_BANG_.call(null,inst_167964);var inst_167966 = (inst_167958 + 1);var tmp168028 = inst_167956;var tmp168029 = inst_167955;var tmp168030 = inst_167957;var inst_167955__$1 = tmp168029;var inst_167956__$1 = tmp168028;var inst_167957__$1 = tmp168030;var inst_167958__$1 = inst_167966;var state_168016__$1 = (function (){var statearr_168034 = state_168016;(statearr_168034[8] = inst_167956__$1);
(statearr_168034[9] = inst_167955__$1);
(statearr_168034[10] = inst_167958__$1);
(statearr_168034[11] = inst_167957__$1);
(statearr_168034[14] = inst_167965);
return statearr_168034;
})();var statearr_168035_168075 = state_168016__$1;(statearr_168035_168075[2] = null);
(statearr_168035_168075[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 11))
{var inst_167955 = (state_168016[9]);var inst_167969 = (state_168016[15]);var inst_167969__$1 = cljs.core.seq.call(null,inst_167955);var state_168016__$1 = (function (){var statearr_168036 = state_168016;(statearr_168036[15] = inst_167969__$1);
return statearr_168036;
})();if(inst_167969__$1)
{var statearr_168037_168076 = state_168016__$1;(statearr_168037_168076[1] = 13);
} else
{var statearr_168038_168077 = state_168016__$1;(statearr_168038_168077[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 12))
{var inst_167989 = (state_168016[2]);var state_168016__$1 = state_168016;var statearr_168039_168078 = state_168016__$1;(statearr_168039_168078[2] = inst_167989);
(statearr_168039_168078[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 13))
{var inst_167969 = (state_168016[15]);var inst_167971 = cljs.core.chunked_seq_QMARK_.call(null,inst_167969);var state_168016__$1 = state_168016;if(inst_167971)
{var statearr_168040_168079 = state_168016__$1;(statearr_168040_168079[1] = 16);
} else
{var statearr_168041_168080 = state_168016__$1;(statearr_168041_168080[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 14))
{var state_168016__$1 = state_168016;var statearr_168042_168081 = state_168016__$1;(statearr_168042_168081[2] = null);
(statearr_168042_168081[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 15))
{var inst_167987 = (state_168016[2]);var state_168016__$1 = state_168016;var statearr_168043_168082 = state_168016__$1;(statearr_168043_168082[2] = inst_167987);
(statearr_168043_168082[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 16))
{var inst_167969 = (state_168016[15]);var inst_167973 = cljs.core.chunk_first.call(null,inst_167969);var inst_167974 = cljs.core.chunk_rest.call(null,inst_167969);var inst_167975 = cljs.core.count.call(null,inst_167973);var inst_167955 = inst_167974;var inst_167956 = inst_167973;var inst_167957 = inst_167975;var inst_167958 = 0;var state_168016__$1 = (function (){var statearr_168044 = state_168016;(statearr_168044[8] = inst_167956);
(statearr_168044[9] = inst_167955);
(statearr_168044[10] = inst_167958);
(statearr_168044[11] = inst_167957);
return statearr_168044;
})();var statearr_168045_168083 = state_168016__$1;(statearr_168045_168083[2] = null);
(statearr_168045_168083[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 17))
{var inst_167969 = (state_168016[15]);var inst_167978 = cljs.core.first.call(null,inst_167969);var inst_167979 = cljs.core.async.muxch_STAR_.call(null,inst_167978);var inst_167980 = cljs.core.async.close_BANG_.call(null,inst_167979);var inst_167981 = cljs.core.next.call(null,inst_167969);var inst_167955 = inst_167981;var inst_167956 = null;var inst_167957 = 0;var inst_167958 = 0;var state_168016__$1 = (function (){var statearr_168046 = state_168016;(statearr_168046[16] = inst_167980);
(statearr_168046[8] = inst_167956);
(statearr_168046[9] = inst_167955);
(statearr_168046[10] = inst_167958);
(statearr_168046[11] = inst_167957);
return statearr_168046;
})();var statearr_168047_168084 = state_168016__$1;(statearr_168047_168084[2] = null);
(statearr_168047_168084[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 18))
{var inst_167984 = (state_168016[2]);var state_168016__$1 = state_168016;var statearr_168048_168085 = state_168016__$1;(statearr_168048_168085[2] = inst_167984);
(statearr_168048_168085[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 19))
{var state_168016__$1 = state_168016;var statearr_168049_168086 = state_168016__$1;(statearr_168049_168086[2] = null);
(statearr_168049_168086[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 20))
{var state_168016__$1 = state_168016;var statearr_168050_168087 = state_168016__$1;(statearr_168050_168087[2] = null);
(statearr_168050_168087[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 21))
{var inst_168009 = (state_168016[2]);var state_168016__$1 = (function (){var statearr_168051 = state_168016;(statearr_168051[17] = inst_168009);
return statearr_168051;
})();var statearr_168052_168088 = state_168016__$1;(statearr_168052_168088[2] = null);
(statearr_168052_168088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 22))
{var inst_168006 = (state_168016[2]);var state_168016__$1 = state_168016;var statearr_168053_168089 = state_168016__$1;(statearr_168053_168089[2] = inst_168006);
(statearr_168053_168089[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 23))
{var inst_167993 = (state_168016[13]);var inst_167997 = (state_168016[2]);var inst_167998 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_167993);var state_168016__$1 = (function (){var statearr_168054 = state_168016;(statearr_168054[18] = inst_167997);
return statearr_168054;
})();var statearr_168055_168090 = state_168016__$1;(statearr_168055_168090[2] = inst_167998);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168016__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168017 === 24))
{var inst_167945 = (state_168016[7]);var inst_167995 = (state_168016[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_168016,23,Object,null,22);var inst_168002 = cljs.core.async.muxch_STAR_.call(null,inst_167995);var state_168016__$1 = state_168016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_168016__$1,25,inst_168002,inst_167945);
} else
{if((state_val_168017 === 25))
{var inst_168004 = (state_168016[2]);var state_168016__$1 = state_168016;var statearr_168056_168091 = state_168016__$1;(statearr_168056_168091[2] = inst_168004);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168016__$1);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_168060 = (new Array(19));(statearr_168060[0] = state_machine__13310__auto__);
(statearr_168060[1] = 1);
return statearr_168060;
});
var state_machine__13310__auto____1 = (function (state_168016){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_168016);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e168061){if((e168061 instanceof Object))
{var ex__13313__auto__ = e168061;var statearr_168062_168092 = state_168016;(statearr_168062_168092[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e168061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__168093 = state_168016;
state_168016 = G__168093;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_168016){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_168016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_168063 = f__13410__auto__.call(null);(statearr_168063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___168064);
return statearr_168063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
,cljs.core.range.call(null,cnt));var c__13409__auto___168230 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_168200){var state_val_168201 = (state_168200[1]);if((state_val_168201 === 1))
{var state_168200__$1 = state_168200;var statearr_168202_168231 = state_168200__$1;(statearr_168202_168231[2] = null);
(statearr_168202_168231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 2))
{var inst_168163 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_168164 = 0;var state_168200__$1 = (function (){var statearr_168203 = state_168200;(statearr_168203[7] = inst_168163);
(statearr_168203[8] = inst_168164);
return statearr_168203;
})();var statearr_168204_168232 = state_168200__$1;(statearr_168204_168232[2] = null);
(statearr_168204_168232[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 3))
{var inst_168198 = (state_168200[2]);var state_168200__$1 = state_168200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_168200__$1,inst_168198);
} else
{if((state_val_168201 === 4))
{var inst_168164 = (state_168200[8]);var inst_168166 = (inst_168164 < cnt);var state_168200__$1 = state_168200;if(cljs.core.truth_(inst_168166))
{var statearr_168205_168233 = state_168200__$1;(statearr_168205_168233[1] = 6);
} else
{var statearr_168206_168234 = state_168200__$1;(statearr_168206_168234[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 5))
{var inst_168184 = (state_168200[2]);var state_168200__$1 = (function (){var statearr_168207 = state_168200;(statearr_168207[9] = inst_168184);
return statearr_168207;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168200__$1,12,dchan);
} else
{if((state_val_168201 === 6))
{var state_168200__$1 = state_168200;var statearr_168208_168235 = state_168200__$1;(statearr_168208_168235[2] = null);
(statearr_168208_168235[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 7))
{var state_168200__$1 = state_168200;var statearr_168209_168236 = state_168200__$1;(statearr_168209_168236[2] = null);
(statearr_168209_168236[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 8))
{var inst_168182 = (state_168200[2]);var state_168200__$1 = state_168200;var statearr_168210_168237 = state_168200__$1;(statearr_168210_168237[2] = inst_168182);
(statearr_168210_168237[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 9))
{var inst_168164 = (state_168200[8]);var inst_168177 = (state_168200[2]);var inst_168178 = (inst_168164 + 1);var inst_168164__$1 = inst_168178;var state_168200__$1 = (function (){var statearr_168211 = state_168200;(statearr_168211[8] = inst_168164__$1);
(statearr_168211[10] = inst_168177);
return statearr_168211;
})();var statearr_168212_168238 = state_168200__$1;(statearr_168212_168238[2] = null);
(statearr_168212_168238[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 10))
{var inst_168168 = (state_168200[2]);var inst_168169 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_168200__$1 = (function (){var statearr_168213 = state_168200;(statearr_168213[11] = inst_168168);
return statearr_168213;
})();var statearr_168214_168239 = state_168200__$1;(statearr_168214_168239[2] = inst_168169);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168200__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 11))
{var inst_168164 = (state_168200[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_168200,10,Object,null,9);var inst_168173 = chs__$1.call(null,inst_168164);var inst_168174 = done.call(null,inst_168164);var inst_168175 = cljs.core.async.take_BANG_.call(null,inst_168173,inst_168174);var state_168200__$1 = state_168200;var statearr_168215_168240 = state_168200__$1;(statearr_168215_168240[2] = inst_168175);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168200__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 12))
{var inst_168186 = (state_168200[12]);var inst_168186__$1 = (state_168200[2]);var inst_168187 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_168186__$1);var state_168200__$1 = (function (){var statearr_168216 = state_168200;(statearr_168216[12] = inst_168186__$1);
return statearr_168216;
})();if(cljs.core.truth_(inst_168187))
{var statearr_168217_168241 = state_168200__$1;(statearr_168217_168241[1] = 13);
} else
{var statearr_168218_168242 = state_168200__$1;(statearr_168218_168242[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 13))
{var inst_168189 = cljs.core.async.close_BANG_.call(null,out);var state_168200__$1 = state_168200;var statearr_168219_168243 = state_168200__$1;(statearr_168219_168243[2] = inst_168189);
(statearr_168219_168243[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 14))
{var inst_168186 = (state_168200[12]);var inst_168191 = cljs.core.apply.call(null,f,inst_168186);var state_168200__$1 = state_168200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_168200__$1,16,out,inst_168191);
} else
{if((state_val_168201 === 15))
{var inst_168196 = (state_168200[2]);var state_168200__$1 = state_168200;var statearr_168220_168244 = state_168200__$1;(statearr_168220_168244[2] = inst_168196);
(statearr_168220_168244[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168201 === 16))
{var inst_168193 = (state_168200[2]);var state_168200__$1 = (function (){var statearr_168221 = state_168200;(statearr_168221[13] = inst_168193);
return statearr_168221;
})();var statearr_168222_168245 = state_168200__$1;(statearr_168222_168245[2] = null);
(statearr_168222_168245[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_168226 = (new Array(14));(statearr_168226[0] = state_machine__13310__auto__);
(statearr_168226[1] = 1);
return statearr_168226;
});
var state_machine__13310__auto____1 = (function (state_168200){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_168200);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e168227){if((e168227 instanceof Object))
{var ex__13313__auto__ = e168227;var statearr_168228_168246 = state_168200;(statearr_168228_168246[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e168227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__168247 = state_168200;
state_168200 = G__168247;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_168200){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_168200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_168229 = f__13410__auto__.call(null);(statearr_168229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___168230);
return statearr_168229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___168355 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_168331){var state_val_168332 = (state_168331[1]);if((state_val_168332 === 1))
{var inst_168302 = cljs.core.vec.call(null,chs);var inst_168303 = inst_168302;var state_168331__$1 = (function (){var statearr_168333 = state_168331;(statearr_168333[7] = inst_168303);
return statearr_168333;
})();var statearr_168334_168356 = state_168331__$1;(statearr_168334_168356[2] = null);
(statearr_168334_168356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168332 === 2))
{var inst_168303 = (state_168331[7]);var inst_168305 = cljs.core.count.call(null,inst_168303);var inst_168306 = (inst_168305 > 0);var state_168331__$1 = state_168331;if(cljs.core.truth_(inst_168306))
{var statearr_168335_168357 = state_168331__$1;(statearr_168335_168357[1] = 4);
} else
{var statearr_168336_168358 = state_168331__$1;(statearr_168336_168358[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168332 === 3))
{var inst_168329 = (state_168331[2]);var state_168331__$1 = state_168331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_168331__$1,inst_168329);
} else
{if((state_val_168332 === 4))
{var inst_168303 = (state_168331[7]);var state_168331__$1 = state_168331;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_168331__$1,7,inst_168303);
} else
{if((state_val_168332 === 5))
{var inst_168325 = cljs.core.async.close_BANG_.call(null,out);var state_168331__$1 = state_168331;var statearr_168337_168359 = state_168331__$1;(statearr_168337_168359[2] = inst_168325);
(statearr_168337_168359[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168332 === 6))
{var inst_168327 = (state_168331[2]);var state_168331__$1 = state_168331;var statearr_168338_168360 = state_168331__$1;(statearr_168338_168360[2] = inst_168327);
(statearr_168338_168360[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168332 === 7))
{var inst_168311 = (state_168331[8]);var inst_168310 = (state_168331[9]);var inst_168310__$1 = (state_168331[2]);var inst_168311__$1 = cljs.core.nth.call(null,inst_168310__$1,0,null);var inst_168312 = cljs.core.nth.call(null,inst_168310__$1,1,null);var inst_168313 = (inst_168311__$1 == null);var state_168331__$1 = (function (){var statearr_168339 = state_168331;(statearr_168339[10] = inst_168312);
(statearr_168339[8] = inst_168311__$1);
(statearr_168339[9] = inst_168310__$1);
return statearr_168339;
})();if(cljs.core.truth_(inst_168313))
{var statearr_168340_168361 = state_168331__$1;(statearr_168340_168361[1] = 8);
} else
{var statearr_168341_168362 = state_168331__$1;(statearr_168341_168362[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168332 === 8))
{var inst_168303 = (state_168331[7]);var inst_168312 = (state_168331[10]);var inst_168311 = (state_168331[8]);var inst_168310 = (state_168331[9]);var inst_168315 = (function (){var c = inst_168312;var v = inst_168311;var vec__168308 = inst_168310;var cs = inst_168303;return ((function (c,v,vec__168308,cs,inst_168303,inst_168312,inst_168311,inst_168310,state_val_168332){
return (function (p1__168248_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__168248_SHARP_);
});
;})(c,v,vec__168308,cs,inst_168303,inst_168312,inst_168311,inst_168310,state_val_168332))
})();var inst_168316 = cljs.core.filterv.call(null,inst_168315,inst_168303);var inst_168303__$1 = inst_168316;var state_168331__$1 = (function (){var statearr_168342 = state_168331;(statearr_168342[7] = inst_168303__$1);
return statearr_168342;
})();var statearr_168343_168363 = state_168331__$1;(statearr_168343_168363[2] = null);
(statearr_168343_168363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168332 === 9))
{var inst_168311 = (state_168331[8]);var state_168331__$1 = state_168331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_168331__$1,11,out,inst_168311);
} else
{if((state_val_168332 === 10))
{var inst_168323 = (state_168331[2]);var state_168331__$1 = state_168331;var statearr_168345_168364 = state_168331__$1;(statearr_168345_168364[2] = inst_168323);
(statearr_168345_168364[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168332 === 11))
{var inst_168303 = (state_168331[7]);var inst_168320 = (state_168331[2]);var tmp168344 = inst_168303;var inst_168303__$1 = tmp168344;var state_168331__$1 = (function (){var statearr_168346 = state_168331;(statearr_168346[7] = inst_168303__$1);
(statearr_168346[11] = inst_168320);
return statearr_168346;
})();var statearr_168347_168365 = state_168331__$1;(statearr_168347_168365[2] = null);
(statearr_168347_168365[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_168351 = (new Array(12));(statearr_168351[0] = state_machine__13310__auto__);
(statearr_168351[1] = 1);
return statearr_168351;
});
var state_machine__13310__auto____1 = (function (state_168331){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_168331);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e168352){if((e168352 instanceof Object))
{var ex__13313__auto__ = e168352;var statearr_168353_168366 = state_168331;(statearr_168353_168366[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168331);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e168352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__168367 = state_168331;
state_168331 = G__168367;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_168331){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_168331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_168354 = f__13410__auto__.call(null);(statearr_168354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___168355);
return statearr_168354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___168460 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_168437){var state_val_168438 = (state_168437[1]);if((state_val_168438 === 1))
{var inst_168414 = 0;var state_168437__$1 = (function (){var statearr_168439 = state_168437;(statearr_168439[7] = inst_168414);
return statearr_168439;
})();var statearr_168440_168461 = state_168437__$1;(statearr_168440_168461[2] = null);
(statearr_168440_168461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168438 === 2))
{var inst_168414 = (state_168437[7]);var inst_168416 = (inst_168414 < n);var state_168437__$1 = state_168437;if(cljs.core.truth_(inst_168416))
{var statearr_168441_168462 = state_168437__$1;(statearr_168441_168462[1] = 4);
} else
{var statearr_168442_168463 = state_168437__$1;(statearr_168442_168463[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168438 === 3))
{var inst_168434 = (state_168437[2]);var inst_168435 = cljs.core.async.close_BANG_.call(null,out);var state_168437__$1 = (function (){var statearr_168443 = state_168437;(statearr_168443[8] = inst_168434);
return statearr_168443;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_168437__$1,inst_168435);
} else
{if((state_val_168438 === 4))
{var state_168437__$1 = state_168437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168437__$1,7,ch);
} else
{if((state_val_168438 === 5))
{var state_168437__$1 = state_168437;var statearr_168444_168464 = state_168437__$1;(statearr_168444_168464[2] = null);
(statearr_168444_168464[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168438 === 6))
{var inst_168432 = (state_168437[2]);var state_168437__$1 = state_168437;var statearr_168445_168465 = state_168437__$1;(statearr_168445_168465[2] = inst_168432);
(statearr_168445_168465[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168438 === 7))
{var inst_168419 = (state_168437[9]);var inst_168419__$1 = (state_168437[2]);var inst_168420 = (inst_168419__$1 == null);var inst_168421 = cljs.core.not.call(null,inst_168420);var state_168437__$1 = (function (){var statearr_168446 = state_168437;(statearr_168446[9] = inst_168419__$1);
return statearr_168446;
})();if(inst_168421)
{var statearr_168447_168466 = state_168437__$1;(statearr_168447_168466[1] = 8);
} else
{var statearr_168448_168467 = state_168437__$1;(statearr_168448_168467[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168438 === 8))
{var inst_168419 = (state_168437[9]);var state_168437__$1 = state_168437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_168437__$1,11,out,inst_168419);
} else
{if((state_val_168438 === 9))
{var state_168437__$1 = state_168437;var statearr_168449_168468 = state_168437__$1;(statearr_168449_168468[2] = null);
(statearr_168449_168468[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168438 === 10))
{var inst_168429 = (state_168437[2]);var state_168437__$1 = state_168437;var statearr_168450_168469 = state_168437__$1;(statearr_168450_168469[2] = inst_168429);
(statearr_168450_168469[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168438 === 11))
{var inst_168414 = (state_168437[7]);var inst_168424 = (state_168437[2]);var inst_168425 = (inst_168414 + 1);var inst_168414__$1 = inst_168425;var state_168437__$1 = (function (){var statearr_168451 = state_168437;(statearr_168451[10] = inst_168424);
(statearr_168451[7] = inst_168414__$1);
return statearr_168451;
})();var statearr_168452_168470 = state_168437__$1;(statearr_168452_168470[2] = null);
(statearr_168452_168470[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_168456 = (new Array(11));(statearr_168456[0] = state_machine__13310__auto__);
(statearr_168456[1] = 1);
return statearr_168456;
});
var state_machine__13310__auto____1 = (function (state_168437){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_168437);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e168457){if((e168457 instanceof Object))
{var ex__13313__auto__ = e168457;var statearr_168458_168471 = state_168437;(statearr_168458_168471[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e168457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__168472 = state_168437;
state_168437 = G__168472;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_168437){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_168437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_168459 = f__13410__auto__.call(null);(statearr_168459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___168460);
return statearr_168459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___168569 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_168544){var state_val_168545 = (state_168544[1]);if((state_val_168545 === 1))
{var inst_168521 = null;var state_168544__$1 = (function (){var statearr_168546 = state_168544;(statearr_168546[7] = inst_168521);
return statearr_168546;
})();var statearr_168547_168570 = state_168544__$1;(statearr_168547_168570[2] = null);
(statearr_168547_168570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168545 === 2))
{var state_168544__$1 = state_168544;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168544__$1,4,ch);
} else
{if((state_val_168545 === 3))
{var inst_168541 = (state_168544[2]);var inst_168542 = cljs.core.async.close_BANG_.call(null,out);var state_168544__$1 = (function (){var statearr_168548 = state_168544;(statearr_168548[8] = inst_168541);
return statearr_168548;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_168544__$1,inst_168542);
} else
{if((state_val_168545 === 4))
{var inst_168524 = (state_168544[9]);var inst_168524__$1 = (state_168544[2]);var inst_168525 = (inst_168524__$1 == null);var inst_168526 = cljs.core.not.call(null,inst_168525);var state_168544__$1 = (function (){var statearr_168549 = state_168544;(statearr_168549[9] = inst_168524__$1);
return statearr_168549;
})();if(inst_168526)
{var statearr_168550_168571 = state_168544__$1;(statearr_168550_168571[1] = 5);
} else
{var statearr_168551_168572 = state_168544__$1;(statearr_168551_168572[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168545 === 5))
{var inst_168524 = (state_168544[9]);var inst_168521 = (state_168544[7]);var inst_168528 = cljs.core._EQ_.call(null,inst_168524,inst_168521);var state_168544__$1 = state_168544;if(inst_168528)
{var statearr_168552_168573 = state_168544__$1;(statearr_168552_168573[1] = 8);
} else
{var statearr_168553_168574 = state_168544__$1;(statearr_168553_168574[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168545 === 6))
{var state_168544__$1 = state_168544;var statearr_168555_168575 = state_168544__$1;(statearr_168555_168575[2] = null);
(statearr_168555_168575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168545 === 7))
{var inst_168539 = (state_168544[2]);var state_168544__$1 = state_168544;var statearr_168556_168576 = state_168544__$1;(statearr_168556_168576[2] = inst_168539);
(statearr_168556_168576[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168545 === 8))
{var inst_168521 = (state_168544[7]);var tmp168554 = inst_168521;var inst_168521__$1 = tmp168554;var state_168544__$1 = (function (){var statearr_168557 = state_168544;(statearr_168557[7] = inst_168521__$1);
return statearr_168557;
})();var statearr_168558_168577 = state_168544__$1;(statearr_168558_168577[2] = null);
(statearr_168558_168577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168545 === 9))
{var inst_168524 = (state_168544[9]);var state_168544__$1 = state_168544;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_168544__$1,11,out,inst_168524);
} else
{if((state_val_168545 === 10))
{var inst_168536 = (state_168544[2]);var state_168544__$1 = state_168544;var statearr_168559_168578 = state_168544__$1;(statearr_168559_168578[2] = inst_168536);
(statearr_168559_168578[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168545 === 11))
{var inst_168524 = (state_168544[9]);var inst_168533 = (state_168544[2]);var inst_168521 = inst_168524;var state_168544__$1 = (function (){var statearr_168560 = state_168544;(statearr_168560[10] = inst_168533);
(statearr_168560[7] = inst_168521);
return statearr_168560;
})();var statearr_168561_168579 = state_168544__$1;(statearr_168561_168579[2] = null);
(statearr_168561_168579[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_168565 = (new Array(11));(statearr_168565[0] = state_machine__13310__auto__);
(statearr_168565[1] = 1);
return statearr_168565;
});
var state_machine__13310__auto____1 = (function (state_168544){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_168544);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e168566){if((e168566 instanceof Object))
{var ex__13313__auto__ = e168566;var statearr_168567_168580 = state_168544;(statearr_168567_168580[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168544);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e168566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__168581 = state_168544;
state_168544 = G__168581;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_168544){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_168544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_168568 = f__13410__auto__.call(null);(statearr_168568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___168569);
return statearr_168568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___168716 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_168686){var state_val_168687 = (state_168686[1]);if((state_val_168687 === 1))
{var inst_168649 = (new Array(n));var inst_168650 = inst_168649;var inst_168651 = 0;var state_168686__$1 = (function (){var statearr_168688 = state_168686;(statearr_168688[7] = inst_168651);
(statearr_168688[8] = inst_168650);
return statearr_168688;
})();var statearr_168689_168717 = state_168686__$1;(statearr_168689_168717[2] = null);
(statearr_168689_168717[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168687 === 2))
{var state_168686__$1 = state_168686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168686__$1,4,ch);
} else
{if((state_val_168687 === 3))
{var inst_168684 = (state_168686[2]);var state_168686__$1 = state_168686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_168686__$1,inst_168684);
} else
{if((state_val_168687 === 4))
{var inst_168654 = (state_168686[9]);var inst_168654__$1 = (state_168686[2]);var inst_168655 = (inst_168654__$1 == null);var inst_168656 = cljs.core.not.call(null,inst_168655);var state_168686__$1 = (function (){var statearr_168690 = state_168686;(statearr_168690[9] = inst_168654__$1);
return statearr_168690;
})();if(inst_168656)
{var statearr_168691_168718 = state_168686__$1;(statearr_168691_168718[1] = 5);
} else
{var statearr_168692_168719 = state_168686__$1;(statearr_168692_168719[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168687 === 5))
{var inst_168659 = (state_168686[10]);var inst_168654 = (state_168686[9]);var inst_168651 = (state_168686[7]);var inst_168650 = (state_168686[8]);var inst_168658 = (inst_168650[inst_168651] = inst_168654);var inst_168659__$1 = (inst_168651 + 1);var inst_168660 = (inst_168659__$1 < n);var state_168686__$1 = (function (){var statearr_168693 = state_168686;(statearr_168693[11] = inst_168658);
(statearr_168693[10] = inst_168659__$1);
return statearr_168693;
})();if(cljs.core.truth_(inst_168660))
{var statearr_168694_168720 = state_168686__$1;(statearr_168694_168720[1] = 8);
} else
{var statearr_168695_168721 = state_168686__$1;(statearr_168695_168721[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168687 === 6))
{var inst_168651 = (state_168686[7]);var inst_168672 = (inst_168651 > 0);var state_168686__$1 = state_168686;if(cljs.core.truth_(inst_168672))
{var statearr_168697_168722 = state_168686__$1;(statearr_168697_168722[1] = 12);
} else
{var statearr_168698_168723 = state_168686__$1;(statearr_168698_168723[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168687 === 7))
{var inst_168682 = (state_168686[2]);var state_168686__$1 = state_168686;var statearr_168699_168724 = state_168686__$1;(statearr_168699_168724[2] = inst_168682);
(statearr_168699_168724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168687 === 8))
{var inst_168659 = (state_168686[10]);var inst_168650 = (state_168686[8]);var tmp168696 = inst_168650;var inst_168650__$1 = tmp168696;var inst_168651 = inst_168659;var state_168686__$1 = (function (){var statearr_168700 = state_168686;(statearr_168700[7] = inst_168651);
(statearr_168700[8] = inst_168650__$1);
return statearr_168700;
})();var statearr_168701_168725 = state_168686__$1;(statearr_168701_168725[2] = null);
(statearr_168701_168725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168687 === 9))
{var inst_168650 = (state_168686[8]);var inst_168664 = cljs.core.vec.call(null,inst_168650);var state_168686__$1 = state_168686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_168686__$1,11,out,inst_168664);
} else
{if((state_val_168687 === 10))
{var inst_168670 = (state_168686[2]);var state_168686__$1 = state_168686;var statearr_168702_168726 = state_168686__$1;(statearr_168702_168726[2] = inst_168670);
(statearr_168702_168726[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168687 === 11))
{var inst_168666 = (state_168686[2]);var inst_168667 = (new Array(n));var inst_168650 = inst_168667;var inst_168651 = 0;var state_168686__$1 = (function (){var statearr_168703 = state_168686;(statearr_168703[12] = inst_168666);
(statearr_168703[7] = inst_168651);
(statearr_168703[8] = inst_168650);
return statearr_168703;
})();var statearr_168704_168727 = state_168686__$1;(statearr_168704_168727[2] = null);
(statearr_168704_168727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168687 === 12))
{var inst_168650 = (state_168686[8]);var inst_168674 = cljs.core.vec.call(null,inst_168650);var state_168686__$1 = state_168686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_168686__$1,15,out,inst_168674);
} else
{if((state_val_168687 === 13))
{var state_168686__$1 = state_168686;var statearr_168705_168728 = state_168686__$1;(statearr_168705_168728[2] = null);
(statearr_168705_168728[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168687 === 14))
{var inst_168679 = (state_168686[2]);var inst_168680 = cljs.core.async.close_BANG_.call(null,out);var state_168686__$1 = (function (){var statearr_168706 = state_168686;(statearr_168706[13] = inst_168679);
return statearr_168706;
})();var statearr_168707_168729 = state_168686__$1;(statearr_168707_168729[2] = inst_168680);
(statearr_168707_168729[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168687 === 15))
{var inst_168676 = (state_168686[2]);var state_168686__$1 = state_168686;var statearr_168708_168730 = state_168686__$1;(statearr_168708_168730[2] = inst_168676);
(statearr_168708_168730[1] = 14);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_168712 = (new Array(14));(statearr_168712[0] = state_machine__13310__auto__);
(statearr_168712[1] = 1);
return statearr_168712;
});
var state_machine__13310__auto____1 = (function (state_168686){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_168686);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e168713){if((e168713 instanceof Object))
{var ex__13313__auto__ = e168713;var statearr_168714_168731 = state_168686;(statearr_168714_168731[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168686);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e168713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__168732 = state_168686;
state_168686 = G__168732;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_168686){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_168686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_168715 = f__13410__auto__.call(null);(statearr_168715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___168716);
return statearr_168715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___168875 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_168845){var state_val_168846 = (state_168845[1]);if((state_val_168846 === 1))
{var inst_168804 = (new Array(0));var inst_168805 = inst_168804;var inst_168806 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_168845__$1 = (function (){var statearr_168847 = state_168845;(statearr_168847[7] = inst_168805);
(statearr_168847[8] = inst_168806);
return statearr_168847;
})();var statearr_168848_168876 = state_168845__$1;(statearr_168848_168876[2] = null);
(statearr_168848_168876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168846 === 2))
{var state_168845__$1 = state_168845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_168845__$1,4,ch);
} else
{if((state_val_168846 === 3))
{var inst_168843 = (state_168845[2]);var state_168845__$1 = state_168845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_168845__$1,inst_168843);
} else
{if((state_val_168846 === 4))
{var inst_168809 = (state_168845[9]);var inst_168809__$1 = (state_168845[2]);var inst_168810 = (inst_168809__$1 == null);var inst_168811 = cljs.core.not.call(null,inst_168810);var state_168845__$1 = (function (){var statearr_168849 = state_168845;(statearr_168849[9] = inst_168809__$1);
return statearr_168849;
})();if(inst_168811)
{var statearr_168850_168877 = state_168845__$1;(statearr_168850_168877[1] = 5);
} else
{var statearr_168851_168878 = state_168845__$1;(statearr_168851_168878[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168846 === 5))
{var inst_168809 = (state_168845[9]);var inst_168806 = (state_168845[8]);var inst_168813 = (state_168845[10]);var inst_168813__$1 = f.call(null,inst_168809);var inst_168814 = cljs.core._EQ_.call(null,inst_168813__$1,inst_168806);var inst_168815 = cljs.core.keyword_identical_QMARK_.call(null,inst_168806,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_168816 = (inst_168814) || (inst_168815);var state_168845__$1 = (function (){var statearr_168852 = state_168845;(statearr_168852[10] = inst_168813__$1);
return statearr_168852;
})();if(cljs.core.truth_(inst_168816))
{var statearr_168853_168879 = state_168845__$1;(statearr_168853_168879[1] = 8);
} else
{var statearr_168854_168880 = state_168845__$1;(statearr_168854_168880[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168846 === 6))
{var inst_168805 = (state_168845[7]);var inst_168830 = inst_168805.length;var inst_168831 = (inst_168830 > 0);var state_168845__$1 = state_168845;if(cljs.core.truth_(inst_168831))
{var statearr_168856_168881 = state_168845__$1;(statearr_168856_168881[1] = 12);
} else
{var statearr_168857_168882 = state_168845__$1;(statearr_168857_168882[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168846 === 7))
{var inst_168841 = (state_168845[2]);var state_168845__$1 = state_168845;var statearr_168858_168883 = state_168845__$1;(statearr_168858_168883[2] = inst_168841);
(statearr_168858_168883[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168846 === 8))
{var inst_168805 = (state_168845[7]);var inst_168809 = (state_168845[9]);var inst_168813 = (state_168845[10]);var inst_168818 = inst_168805.push(inst_168809);var tmp168855 = inst_168805;var inst_168805__$1 = tmp168855;var inst_168806 = inst_168813;var state_168845__$1 = (function (){var statearr_168859 = state_168845;(statearr_168859[7] = inst_168805__$1);
(statearr_168859[8] = inst_168806);
(statearr_168859[11] = inst_168818);
return statearr_168859;
})();var statearr_168860_168884 = state_168845__$1;(statearr_168860_168884[2] = null);
(statearr_168860_168884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168846 === 9))
{var inst_168805 = (state_168845[7]);var inst_168821 = cljs.core.vec.call(null,inst_168805);var state_168845__$1 = state_168845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_168845__$1,11,out,inst_168821);
} else
{if((state_val_168846 === 10))
{var inst_168828 = (state_168845[2]);var state_168845__$1 = state_168845;var statearr_168861_168885 = state_168845__$1;(statearr_168861_168885[2] = inst_168828);
(statearr_168861_168885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168846 === 11))
{var inst_168809 = (state_168845[9]);var inst_168813 = (state_168845[10]);var inst_168823 = (state_168845[2]);var inst_168824 = (new Array(0));var inst_168825 = inst_168824.push(inst_168809);var inst_168805 = inst_168824;var inst_168806 = inst_168813;var state_168845__$1 = (function (){var statearr_168862 = state_168845;(statearr_168862[12] = inst_168823);
(statearr_168862[7] = inst_168805);
(statearr_168862[8] = inst_168806);
(statearr_168862[13] = inst_168825);
return statearr_168862;
})();var statearr_168863_168886 = state_168845__$1;(statearr_168863_168886[2] = null);
(statearr_168863_168886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168846 === 12))
{var inst_168805 = (state_168845[7]);var inst_168833 = cljs.core.vec.call(null,inst_168805);var state_168845__$1 = state_168845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_168845__$1,15,out,inst_168833);
} else
{if((state_val_168846 === 13))
{var state_168845__$1 = state_168845;var statearr_168864_168887 = state_168845__$1;(statearr_168864_168887[2] = null);
(statearr_168864_168887[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168846 === 14))
{var inst_168838 = (state_168845[2]);var inst_168839 = cljs.core.async.close_BANG_.call(null,out);var state_168845__$1 = (function (){var statearr_168865 = state_168845;(statearr_168865[14] = inst_168838);
return statearr_168865;
})();var statearr_168866_168888 = state_168845__$1;(statearr_168866_168888[2] = inst_168839);
(statearr_168866_168888[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_168846 === 15))
{var inst_168835 = (state_168845[2]);var state_168845__$1 = state_168845;var statearr_168867_168889 = state_168845__$1;(statearr_168867_168889[2] = inst_168835);
(statearr_168867_168889[1] = 14);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_168871 = (new Array(15));(statearr_168871[0] = state_machine__13310__auto__);
(statearr_168871[1] = 1);
return statearr_168871;
});
var state_machine__13310__auto____1 = (function (state_168845){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_168845);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e168872){if((e168872 instanceof Object))
{var ex__13313__auto__ = e168872;var statearr_168873_168890 = state_168845;(statearr_168873_168890[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_168845);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e168872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__168891 = state_168845;
state_168845 = G__168891;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_168845){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_168845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_168874 = f__13410__auto__.call(null);(statearr_168874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___168875);
return statearr_168874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
