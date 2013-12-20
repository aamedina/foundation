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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t271508 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t271508 = (function (f,fn_handler,meta271509){
this.f = f;
this.fn_handler = fn_handler;
this.meta271509 = meta271509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t271508.cljs$lang$type = true;
cljs.core.async.t271508.cljs$lang$ctorStr = "cljs.core.async/t271508";
cljs.core.async.t271508.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t271508");
});
cljs.core.async.t271508.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t271508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t271508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t271508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_271510){var self__ = this;
var _271510__$1 = this;return self__.meta271509;
});
cljs.core.async.t271508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_271510,meta271509__$1){var self__ = this;
var _271510__$1 = this;return (new cljs.core.async.t271508(self__.f,self__.fn_handler,meta271509__$1));
});
cljs.core.async.__GT_t271508 = (function __GT_t271508(f__$1,fn_handler__$1,meta271509){return (new cljs.core.async.t271508(f__$1,fn_handler__$1,meta271509));
});
}
return (new cljs.core.async.t271508(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__271512 = buff;if(G__271512)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__271512.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__271512.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__271512);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__271512);
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
{var val_271513 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_271513);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_271513);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8211__auto__ = ret;if(cljs.core.truth_(and__8211__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8211__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9051__auto___271514 = n;var x_271515 = 0;while(true){
if((x_271515 < n__9051__auto___271514))
{(a[x_271515] = 0);
{
var G__271516 = (x_271515 + 1);
x_271515 = G__271516;
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
var G__271517 = (i + 1);
i = G__271517;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t271521 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t271521 = (function (flag,alt_flag,meta271522){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta271522 = meta271522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t271521.cljs$lang$type = true;
cljs.core.async.t271521.cljs$lang$ctorStr = "cljs.core.async/t271521";
cljs.core.async.t271521.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t271521");
});
cljs.core.async.t271521.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t271521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t271521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t271521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_271523){var self__ = this;
var _271523__$1 = this;return self__.meta271522;
});
cljs.core.async.t271521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_271523,meta271522__$1){var self__ = this;
var _271523__$1 = this;return (new cljs.core.async.t271521(self__.flag,self__.alt_flag,meta271522__$1));
});
cljs.core.async.__GT_t271521 = (function __GT_t271521(flag__$1,alt_flag__$1,meta271522){return (new cljs.core.async.t271521(flag__$1,alt_flag__$1,meta271522));
});
}
return (new cljs.core.async.t271521(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t271527 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t271527 = (function (cb,flag,alt_handler,meta271528){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta271528 = meta271528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t271527.cljs$lang$type = true;
cljs.core.async.t271527.cljs$lang$ctorStr = "cljs.core.async/t271527";
cljs.core.async.t271527.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t271527");
});
cljs.core.async.t271527.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t271527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t271527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t271527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_271529){var self__ = this;
var _271529__$1 = this;return self__.meta271528;
});
cljs.core.async.t271527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_271529,meta271528__$1){var self__ = this;
var _271529__$1 = this;return (new cljs.core.async.t271527(self__.cb,self__.flag,self__.alt_handler,meta271528__$1));
});
cljs.core.async.__GT_t271527 = (function __GT_t271527(cb__$1,flag__$1,alt_handler__$1,meta271528){return (new cljs.core.async.t271527(cb__$1,flag__$1,alt_handler__$1,meta271528));
});
}
return (new cljs.core.async.t271527(cb,flag,alt_handler,null));
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
return (function (p1__271530_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__271530_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8223__auto__ = wport;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__271531 = (i + 1);
i = G__271531;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8223__auto__ = ret;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8211__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8211__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8211__auto__;
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
var alts_BANG___delegate = function (ports,p__271532){var map__271534 = p__271532;var map__271534__$1 = ((cljs.core.seq_QMARK_.call(null,map__271534))?cljs.core.apply.call(null,cljs.core.hash_map,map__271534):map__271534);var opts = map__271534__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__271532 = null;if (arguments.length > 1) {
  p__271532 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__271532);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__271535){
var ports = cljs.core.first(arglist__271535);
var p__271532 = cljs.core.rest(arglist__271535);
return alts_BANG___delegate(ports,p__271532);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t271543 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t271543 = (function (ch,f,map_LT_,meta271544){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta271544 = meta271544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t271543.cljs$lang$type = true;
cljs.core.async.t271543.cljs$lang$ctorStr = "cljs.core.async/t271543";
cljs.core.async.t271543.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t271543");
});
cljs.core.async.t271543.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t271543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t271543.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t271543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t271546 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t271546 = (function (fn1,_,meta271544,ch,f,map_LT_,meta271547){
this.fn1 = fn1;
this._ = _;
this.meta271544 = meta271544;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta271547 = meta271547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t271546.cljs$lang$type = true;
cljs.core.async.t271546.cljs$lang$ctorStr = "cljs.core.async/t271546";
cljs.core.async.t271546.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t271546");
});
cljs.core.async.t271546.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t271546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t271546.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t271546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__271536_SHARP_){return f1.call(null,(((p1__271536_SHARP_ == null))?null:self__.f.call(null,p1__271536_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t271546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_271548){var self__ = this;
var _271548__$1 = this;return self__.meta271547;
});
cljs.core.async.t271546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_271548,meta271547__$1){var self__ = this;
var _271548__$1 = this;return (new cljs.core.async.t271546(self__.fn1,self__._,self__.meta271544,self__.ch,self__.f,self__.map_LT_,meta271547__$1));
});
cljs.core.async.__GT_t271546 = (function __GT_t271546(fn1__$1,___$2,meta271544__$1,ch__$2,f__$2,map_LT___$2,meta271547){return (new cljs.core.async.t271546(fn1__$1,___$2,meta271544__$1,ch__$2,f__$2,map_LT___$2,meta271547));
});
}
return (new cljs.core.async.t271546(fn1,___$1,self__.meta271544,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8211__auto__ = ret;if(cljs.core.truth_(and__8211__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8211__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t271543.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t271543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t271543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_271545){var self__ = this;
var _271545__$1 = this;return self__.meta271544;
});
cljs.core.async.t271543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_271545,meta271544__$1){var self__ = this;
var _271545__$1 = this;return (new cljs.core.async.t271543(self__.ch,self__.f,self__.map_LT_,meta271544__$1));
});
cljs.core.async.__GT_t271543 = (function __GT_t271543(ch__$1,f__$1,map_LT___$1,meta271544){return (new cljs.core.async.t271543(ch__$1,f__$1,map_LT___$1,meta271544));
});
}
return (new cljs.core.async.t271543(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t271552 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t271552 = (function (ch,f,map_GT_,meta271553){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta271553 = meta271553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t271552.cljs$lang$type = true;
cljs.core.async.t271552.cljs$lang$ctorStr = "cljs.core.async/t271552";
cljs.core.async.t271552.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t271552");
});
cljs.core.async.t271552.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t271552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t271552.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t271552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t271552.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t271552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t271552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_271554){var self__ = this;
var _271554__$1 = this;return self__.meta271553;
});
cljs.core.async.t271552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_271554,meta271553__$1){var self__ = this;
var _271554__$1 = this;return (new cljs.core.async.t271552(self__.ch,self__.f,self__.map_GT_,meta271553__$1));
});
cljs.core.async.__GT_t271552 = (function __GT_t271552(ch__$1,f__$1,map_GT___$1,meta271553){return (new cljs.core.async.t271552(ch__$1,f__$1,map_GT___$1,meta271553));
});
}
return (new cljs.core.async.t271552(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t271558 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t271558 = (function (ch,p,filter_GT_,meta271559){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta271559 = meta271559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t271558.cljs$lang$type = true;
cljs.core.async.t271558.cljs$lang$ctorStr = "cljs.core.async/t271558";
cljs.core.async.t271558.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t271558");
});
cljs.core.async.t271558.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t271558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t271558.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t271558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t271558.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t271558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t271558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_271560){var self__ = this;
var _271560__$1 = this;return self__.meta271559;
});
cljs.core.async.t271558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_271560,meta271559__$1){var self__ = this;
var _271560__$1 = this;return (new cljs.core.async.t271558(self__.ch,self__.p,self__.filter_GT_,meta271559__$1));
});
cljs.core.async.__GT_t271558 = (function __GT_t271558(ch__$1,p__$1,filter_GT___$1,meta271559){return (new cljs.core.async.t271558(ch__$1,p__$1,filter_GT___$1,meta271559));
});
}
return (new cljs.core.async.t271558(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___271643 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_271622){var state_val_271623 = (state_271622[1]);if((state_val_271623 === 1))
{var state_271622__$1 = state_271622;var statearr_271624_271644 = state_271622__$1;(statearr_271624_271644[2] = null);
(statearr_271624_271644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271623 === 2))
{var state_271622__$1 = state_271622;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_271622__$1,4,ch);
} else
{if((state_val_271623 === 3))
{var inst_271620 = (state_271622[2]);var state_271622__$1 = state_271622;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_271622__$1,inst_271620);
} else
{if((state_val_271623 === 4))
{var inst_271604 = (state_271622[7]);var inst_271604__$1 = (state_271622[2]);var inst_271605 = (inst_271604__$1 == null);var state_271622__$1 = (function (){var statearr_271625 = state_271622;(statearr_271625[7] = inst_271604__$1);
return statearr_271625;
})();if(cljs.core.truth_(inst_271605))
{var statearr_271626_271645 = state_271622__$1;(statearr_271626_271645[1] = 5);
} else
{var statearr_271627_271646 = state_271622__$1;(statearr_271627_271646[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271623 === 5))
{var inst_271607 = cljs.core.async.close_BANG_.call(null,out);var state_271622__$1 = state_271622;var statearr_271628_271647 = state_271622__$1;(statearr_271628_271647[2] = inst_271607);
(statearr_271628_271647[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271623 === 6))
{var inst_271604 = (state_271622[7]);var inst_271609 = p.call(null,inst_271604);var state_271622__$1 = state_271622;if(cljs.core.truth_(inst_271609))
{var statearr_271629_271648 = state_271622__$1;(statearr_271629_271648[1] = 8);
} else
{var statearr_271630_271649 = state_271622__$1;(statearr_271630_271649[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271623 === 7))
{var inst_271618 = (state_271622[2]);var state_271622__$1 = state_271622;var statearr_271631_271650 = state_271622__$1;(statearr_271631_271650[2] = inst_271618);
(statearr_271631_271650[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271623 === 8))
{var inst_271604 = (state_271622[7]);var state_271622__$1 = state_271622;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_271622__$1,11,out,inst_271604);
} else
{if((state_val_271623 === 9))
{var state_271622__$1 = state_271622;var statearr_271632_271651 = state_271622__$1;(statearr_271632_271651[2] = null);
(statearr_271632_271651[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271623 === 10))
{var inst_271615 = (state_271622[2]);var state_271622__$1 = (function (){var statearr_271633 = state_271622;(statearr_271633[8] = inst_271615);
return statearr_271633;
})();var statearr_271634_271652 = state_271622__$1;(statearr_271634_271652[2] = null);
(statearr_271634_271652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271623 === 11))
{var inst_271612 = (state_271622[2]);var state_271622__$1 = state_271622;var statearr_271635_271653 = state_271622__$1;(statearr_271635_271653[2] = inst_271612);
(statearr_271635_271653[1] = 10);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_271639 = [null,null,null,null,null,null,null,null,null];(statearr_271639[0] = state_machine__12118__auto__);
(statearr_271639[1] = 1);
return statearr_271639;
});
var state_machine__12118__auto____1 = (function (state_271622){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_271622);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e271640){if((e271640 instanceof Object))
{var ex__12121__auto__ = e271640;var statearr_271641_271654 = state_271622;(statearr_271641_271654[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_271622);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e271640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__271655 = state_271622;
state_271622 = G__271655;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_271622){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_271622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_271642 = f__12188__auto__.call(null);(statearr_271642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___271643);
return statearr_271642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_271807){var state_val_271808 = (state_271807[1]);if((state_val_271808 === 1))
{var state_271807__$1 = state_271807;var statearr_271809_271846 = state_271807__$1;(statearr_271809_271846[2] = null);
(statearr_271809_271846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 2))
{var state_271807__$1 = state_271807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_271807__$1,4,in$);
} else
{if((state_val_271808 === 3))
{var inst_271805 = (state_271807[2]);var state_271807__$1 = state_271807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_271807__$1,inst_271805);
} else
{if((state_val_271808 === 4))
{var inst_271753 = (state_271807[7]);var inst_271753__$1 = (state_271807[2]);var inst_271754 = (inst_271753__$1 == null);var state_271807__$1 = (function (){var statearr_271810 = state_271807;(statearr_271810[7] = inst_271753__$1);
return statearr_271810;
})();if(cljs.core.truth_(inst_271754))
{var statearr_271811_271847 = state_271807__$1;(statearr_271811_271847[1] = 5);
} else
{var statearr_271812_271848 = state_271807__$1;(statearr_271812_271848[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 5))
{var inst_271756 = cljs.core.async.close_BANG_.call(null,out);var state_271807__$1 = state_271807;var statearr_271813_271849 = state_271807__$1;(statearr_271813_271849[2] = inst_271756);
(statearr_271813_271849[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 6))
{var inst_271753 = (state_271807[7]);var inst_271758 = f.call(null,inst_271753);var inst_271763 = cljs.core.seq.call(null,inst_271758);var inst_271764 = inst_271763;var inst_271765 = null;var inst_271766 = 0;var inst_271767 = 0;var state_271807__$1 = (function (){var statearr_271814 = state_271807;(statearr_271814[8] = inst_271765);
(statearr_271814[9] = inst_271764);
(statearr_271814[10] = inst_271766);
(statearr_271814[11] = inst_271767);
return statearr_271814;
})();var statearr_271815_271850 = state_271807__$1;(statearr_271815_271850[2] = null);
(statearr_271815_271850[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 7))
{var inst_271803 = (state_271807[2]);var state_271807__$1 = state_271807;var statearr_271816_271851 = state_271807__$1;(statearr_271816_271851[2] = inst_271803);
(statearr_271816_271851[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 8))
{var inst_271766 = (state_271807[10]);var inst_271767 = (state_271807[11]);var inst_271769 = (inst_271767 < inst_271766);var inst_271770 = inst_271769;var state_271807__$1 = state_271807;if(cljs.core.truth_(inst_271770))
{var statearr_271817_271852 = state_271807__$1;(statearr_271817_271852[1] = 10);
} else
{var statearr_271818_271853 = state_271807__$1;(statearr_271818_271853[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 9))
{var inst_271800 = (state_271807[2]);var state_271807__$1 = (function (){var statearr_271819 = state_271807;(statearr_271819[12] = inst_271800);
return statearr_271819;
})();var statearr_271820_271854 = state_271807__$1;(statearr_271820_271854[2] = null);
(statearr_271820_271854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 10))
{var inst_271765 = (state_271807[8]);var inst_271767 = (state_271807[11]);var inst_271772 = cljs.core._nth.call(null,inst_271765,inst_271767);var state_271807__$1 = state_271807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_271807__$1,13,out,inst_271772);
} else
{if((state_val_271808 === 11))
{var inst_271764 = (state_271807[9]);var inst_271778 = (state_271807[13]);var inst_271778__$1 = cljs.core.seq.call(null,inst_271764);var state_271807__$1 = (function (){var statearr_271824 = state_271807;(statearr_271824[13] = inst_271778__$1);
return statearr_271824;
})();if(inst_271778__$1)
{var statearr_271825_271855 = state_271807__$1;(statearr_271825_271855[1] = 14);
} else
{var statearr_271826_271856 = state_271807__$1;(statearr_271826_271856[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 12))
{var inst_271798 = (state_271807[2]);var state_271807__$1 = state_271807;var statearr_271827_271857 = state_271807__$1;(statearr_271827_271857[2] = inst_271798);
(statearr_271827_271857[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 13))
{var inst_271765 = (state_271807[8]);var inst_271764 = (state_271807[9]);var inst_271766 = (state_271807[10]);var inst_271767 = (state_271807[11]);var inst_271774 = (state_271807[2]);var inst_271775 = (inst_271767 + 1);var tmp271821 = inst_271765;var tmp271822 = inst_271764;var tmp271823 = inst_271766;var inst_271764__$1 = tmp271822;var inst_271765__$1 = tmp271821;var inst_271766__$1 = tmp271823;var inst_271767__$1 = inst_271775;var state_271807__$1 = (function (){var statearr_271828 = state_271807;(statearr_271828[8] = inst_271765__$1);
(statearr_271828[9] = inst_271764__$1);
(statearr_271828[10] = inst_271766__$1);
(statearr_271828[11] = inst_271767__$1);
(statearr_271828[14] = inst_271774);
return statearr_271828;
})();var statearr_271829_271858 = state_271807__$1;(statearr_271829_271858[2] = null);
(statearr_271829_271858[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 14))
{var inst_271778 = (state_271807[13]);var inst_271780 = cljs.core.chunked_seq_QMARK_.call(null,inst_271778);var state_271807__$1 = state_271807;if(inst_271780)
{var statearr_271830_271859 = state_271807__$1;(statearr_271830_271859[1] = 17);
} else
{var statearr_271831_271860 = state_271807__$1;(statearr_271831_271860[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 15))
{var state_271807__$1 = state_271807;var statearr_271832_271861 = state_271807__$1;(statearr_271832_271861[2] = null);
(statearr_271832_271861[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 16))
{var inst_271796 = (state_271807[2]);var state_271807__$1 = state_271807;var statearr_271833_271862 = state_271807__$1;(statearr_271833_271862[2] = inst_271796);
(statearr_271833_271862[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 17))
{var inst_271778 = (state_271807[13]);var inst_271782 = cljs.core.chunk_first.call(null,inst_271778);var inst_271783 = cljs.core.chunk_rest.call(null,inst_271778);var inst_271784 = cljs.core.count.call(null,inst_271782);var inst_271764 = inst_271783;var inst_271765 = inst_271782;var inst_271766 = inst_271784;var inst_271767 = 0;var state_271807__$1 = (function (){var statearr_271834 = state_271807;(statearr_271834[8] = inst_271765);
(statearr_271834[9] = inst_271764);
(statearr_271834[10] = inst_271766);
(statearr_271834[11] = inst_271767);
return statearr_271834;
})();var statearr_271835_271863 = state_271807__$1;(statearr_271835_271863[2] = null);
(statearr_271835_271863[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 18))
{var inst_271778 = (state_271807[13]);var inst_271787 = cljs.core.first.call(null,inst_271778);var state_271807__$1 = state_271807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_271807__$1,20,out,inst_271787);
} else
{if((state_val_271808 === 19))
{var inst_271793 = (state_271807[2]);var state_271807__$1 = state_271807;var statearr_271836_271864 = state_271807__$1;(statearr_271836_271864[2] = inst_271793);
(statearr_271836_271864[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271808 === 20))
{var inst_271778 = (state_271807[13]);var inst_271789 = (state_271807[2]);var inst_271790 = cljs.core.next.call(null,inst_271778);var inst_271764 = inst_271790;var inst_271765 = null;var inst_271766 = 0;var inst_271767 = 0;var state_271807__$1 = (function (){var statearr_271837 = state_271807;(statearr_271837[8] = inst_271765);
(statearr_271837[9] = inst_271764);
(statearr_271837[10] = inst_271766);
(statearr_271837[11] = inst_271767);
(statearr_271837[15] = inst_271789);
return statearr_271837;
})();var statearr_271838_271865 = state_271807__$1;(statearr_271838_271865[2] = null);
(statearr_271838_271865[1] = 8);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_271842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_271842[0] = state_machine__12118__auto__);
(statearr_271842[1] = 1);
return statearr_271842;
});
var state_machine__12118__auto____1 = (function (state_271807){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_271807);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e271843){if((e271843 instanceof Object))
{var ex__12121__auto__ = e271843;var statearr_271844_271866 = state_271807;(statearr_271844_271866[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_271807);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e271843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__271867 = state_271807;
state_271807 = G__271867;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_271807){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_271807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_271845 = f__12188__auto__.call(null);(statearr_271845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_271845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12187__auto___271948 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_271927){var state_val_271928 = (state_271927[1]);if((state_val_271928 === 1))
{var state_271927__$1 = state_271927;var statearr_271929_271949 = state_271927__$1;(statearr_271929_271949[2] = null);
(statearr_271929_271949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271928 === 2))
{var state_271927__$1 = state_271927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_271927__$1,4,from);
} else
{if((state_val_271928 === 3))
{var inst_271925 = (state_271927[2]);var state_271927__$1 = state_271927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_271927__$1,inst_271925);
} else
{if((state_val_271928 === 4))
{var inst_271910 = (state_271927[7]);var inst_271910__$1 = (state_271927[2]);var inst_271911 = (inst_271910__$1 == null);var state_271927__$1 = (function (){var statearr_271930 = state_271927;(statearr_271930[7] = inst_271910__$1);
return statearr_271930;
})();if(cljs.core.truth_(inst_271911))
{var statearr_271931_271950 = state_271927__$1;(statearr_271931_271950[1] = 5);
} else
{var statearr_271932_271951 = state_271927__$1;(statearr_271932_271951[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271928 === 5))
{var state_271927__$1 = state_271927;if(cljs.core.truth_(close_QMARK_))
{var statearr_271933_271952 = state_271927__$1;(statearr_271933_271952[1] = 8);
} else
{var statearr_271934_271953 = state_271927__$1;(statearr_271934_271953[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271928 === 6))
{var inst_271910 = (state_271927[7]);var state_271927__$1 = state_271927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_271927__$1,11,to,inst_271910);
} else
{if((state_val_271928 === 7))
{var inst_271923 = (state_271927[2]);var state_271927__$1 = state_271927;var statearr_271935_271954 = state_271927__$1;(statearr_271935_271954[2] = inst_271923);
(statearr_271935_271954[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271928 === 8))
{var inst_271914 = cljs.core.async.close_BANG_.call(null,to);var state_271927__$1 = state_271927;var statearr_271936_271955 = state_271927__$1;(statearr_271936_271955[2] = inst_271914);
(statearr_271936_271955[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271928 === 9))
{var state_271927__$1 = state_271927;var statearr_271937_271956 = state_271927__$1;(statearr_271937_271956[2] = null);
(statearr_271937_271956[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271928 === 10))
{var inst_271917 = (state_271927[2]);var state_271927__$1 = state_271927;var statearr_271938_271957 = state_271927__$1;(statearr_271938_271957[2] = inst_271917);
(statearr_271938_271957[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_271928 === 11))
{var inst_271920 = (state_271927[2]);var state_271927__$1 = (function (){var statearr_271939 = state_271927;(statearr_271939[8] = inst_271920);
return statearr_271939;
})();var statearr_271940_271958 = state_271927__$1;(statearr_271940_271958[2] = null);
(statearr_271940_271958[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_271944 = [null,null,null,null,null,null,null,null,null];(statearr_271944[0] = state_machine__12118__auto__);
(statearr_271944[1] = 1);
return statearr_271944;
});
var state_machine__12118__auto____1 = (function (state_271927){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_271927);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e271945){if((e271945 instanceof Object))
{var ex__12121__auto__ = e271945;var statearr_271946_271959 = state_271927;(statearr_271946_271959[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_271927);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e271945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__271960 = state_271927;
state_271927 = G__271960;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_271927){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_271927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_271947 = f__12188__auto__.call(null);(statearr_271947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___271948);
return statearr_271947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12187__auto___272047 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_272025){var state_val_272026 = (state_272025[1]);if((state_val_272026 === 1))
{var state_272025__$1 = state_272025;var statearr_272027_272048 = state_272025__$1;(statearr_272027_272048[2] = null);
(statearr_272027_272048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272026 === 2))
{var state_272025__$1 = state_272025;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_272025__$1,4,ch);
} else
{if((state_val_272026 === 3))
{var inst_272023 = (state_272025[2]);var state_272025__$1 = state_272025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_272025__$1,inst_272023);
} else
{if((state_val_272026 === 4))
{var inst_272006 = (state_272025[7]);var inst_272006__$1 = (state_272025[2]);var inst_272007 = (inst_272006__$1 == null);var state_272025__$1 = (function (){var statearr_272028 = state_272025;(statearr_272028[7] = inst_272006__$1);
return statearr_272028;
})();if(cljs.core.truth_(inst_272007))
{var statearr_272029_272049 = state_272025__$1;(statearr_272029_272049[1] = 5);
} else
{var statearr_272030_272050 = state_272025__$1;(statearr_272030_272050[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272026 === 5))
{var inst_272009 = cljs.core.async.close_BANG_.call(null,tc);var inst_272010 = cljs.core.async.close_BANG_.call(null,fc);var state_272025__$1 = (function (){var statearr_272031 = state_272025;(statearr_272031[8] = inst_272009);
return statearr_272031;
})();var statearr_272032_272051 = state_272025__$1;(statearr_272032_272051[2] = inst_272010);
(statearr_272032_272051[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272026 === 6))
{var inst_272006 = (state_272025[7]);var inst_272012 = p.call(null,inst_272006);var state_272025__$1 = state_272025;if(cljs.core.truth_(inst_272012))
{var statearr_272033_272052 = state_272025__$1;(statearr_272033_272052[1] = 9);
} else
{var statearr_272034_272053 = state_272025__$1;(statearr_272034_272053[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272026 === 7))
{var inst_272021 = (state_272025[2]);var state_272025__$1 = state_272025;var statearr_272035_272054 = state_272025__$1;(statearr_272035_272054[2] = inst_272021);
(statearr_272035_272054[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272026 === 8))
{var inst_272018 = (state_272025[2]);var state_272025__$1 = (function (){var statearr_272036 = state_272025;(statearr_272036[9] = inst_272018);
return statearr_272036;
})();var statearr_272037_272055 = state_272025__$1;(statearr_272037_272055[2] = null);
(statearr_272037_272055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272026 === 9))
{var state_272025__$1 = state_272025;var statearr_272038_272056 = state_272025__$1;(statearr_272038_272056[2] = tc);
(statearr_272038_272056[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272026 === 10))
{var state_272025__$1 = state_272025;var statearr_272039_272057 = state_272025__$1;(statearr_272039_272057[2] = fc);
(statearr_272039_272057[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272026 === 11))
{var inst_272006 = (state_272025[7]);var inst_272016 = (state_272025[2]);var state_272025__$1 = state_272025;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_272025__$1,8,inst_272016,inst_272006);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_272043 = [null,null,null,null,null,null,null,null,null,null];(statearr_272043[0] = state_machine__12118__auto__);
(statearr_272043[1] = 1);
return statearr_272043;
});
var state_machine__12118__auto____1 = (function (state_272025){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_272025);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e272044){if((e272044 instanceof Object))
{var ex__12121__auto__ = e272044;var statearr_272045_272058 = state_272025;(statearr_272045_272058[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_272025);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e272044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__272059 = state_272025;
state_272025 = G__272059;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_272025){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_272025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_272046 = f__12188__auto__.call(null);(statearr_272046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___272047);
return statearr_272046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_272106){var state_val_272107 = (state_272106[1]);if((state_val_272107 === 7))
{var inst_272102 = (state_272106[2]);var state_272106__$1 = state_272106;var statearr_272108_272124 = state_272106__$1;(statearr_272108_272124[2] = inst_272102);
(statearr_272108_272124[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272107 === 6))
{var inst_272092 = (state_272106[7]);var inst_272095 = (state_272106[8]);var inst_272099 = f.call(null,inst_272092,inst_272095);var inst_272092__$1 = inst_272099;var state_272106__$1 = (function (){var statearr_272109 = state_272106;(statearr_272109[7] = inst_272092__$1);
return statearr_272109;
})();var statearr_272110_272125 = state_272106__$1;(statearr_272110_272125[2] = null);
(statearr_272110_272125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272107 === 5))
{var inst_272092 = (state_272106[7]);var state_272106__$1 = state_272106;var statearr_272111_272126 = state_272106__$1;(statearr_272111_272126[2] = inst_272092);
(statearr_272111_272126[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272107 === 4))
{var inst_272095 = (state_272106[8]);var inst_272095__$1 = (state_272106[2]);var inst_272096 = (inst_272095__$1 == null);var state_272106__$1 = (function (){var statearr_272112 = state_272106;(statearr_272112[8] = inst_272095__$1);
return statearr_272112;
})();if(cljs.core.truth_(inst_272096))
{var statearr_272113_272127 = state_272106__$1;(statearr_272113_272127[1] = 5);
} else
{var statearr_272114_272128 = state_272106__$1;(statearr_272114_272128[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272107 === 3))
{var inst_272104 = (state_272106[2]);var state_272106__$1 = state_272106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_272106__$1,inst_272104);
} else
{if((state_val_272107 === 2))
{var state_272106__$1 = state_272106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_272106__$1,4,ch);
} else
{if((state_val_272107 === 1))
{var inst_272092 = init;var state_272106__$1 = (function (){var statearr_272115 = state_272106;(statearr_272115[7] = inst_272092);
return statearr_272115;
})();var statearr_272116_272129 = state_272106__$1;(statearr_272116_272129[2] = null);
(statearr_272116_272129[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_272120 = [null,null,null,null,null,null,null,null,null];(statearr_272120[0] = state_machine__12118__auto__);
(statearr_272120[1] = 1);
return statearr_272120;
});
var state_machine__12118__auto____1 = (function (state_272106){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_272106);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e272121){if((e272121 instanceof Object))
{var ex__12121__auto__ = e272121;var statearr_272122_272130 = state_272106;(statearr_272122_272130[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_272106);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e272121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__272131 = state_272106;
state_272106 = G__272131;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_272106){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_272106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_272123 = f__12188__auto__.call(null);(statearr_272123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_272123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_272193){var state_val_272194 = (state_272193[1]);if((state_val_272194 === 1))
{var inst_272173 = cljs.core.seq.call(null,coll);var inst_272174 = inst_272173;var state_272193__$1 = (function (){var statearr_272195 = state_272193;(statearr_272195[7] = inst_272174);
return statearr_272195;
})();var statearr_272196_272214 = state_272193__$1;(statearr_272196_272214[2] = null);
(statearr_272196_272214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272194 === 2))
{var inst_272174 = (state_272193[7]);var state_272193__$1 = state_272193;if(cljs.core.truth_(inst_272174))
{var statearr_272197_272215 = state_272193__$1;(statearr_272197_272215[1] = 4);
} else
{var statearr_272198_272216 = state_272193__$1;(statearr_272198_272216[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272194 === 3))
{var inst_272191 = (state_272193[2]);var state_272193__$1 = state_272193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_272193__$1,inst_272191);
} else
{if((state_val_272194 === 4))
{var inst_272174 = (state_272193[7]);var inst_272177 = cljs.core.first.call(null,inst_272174);var state_272193__$1 = state_272193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_272193__$1,7,ch,inst_272177);
} else
{if((state_val_272194 === 5))
{var state_272193__$1 = state_272193;if(cljs.core.truth_(close_QMARK_))
{var statearr_272199_272217 = state_272193__$1;(statearr_272199_272217[1] = 8);
} else
{var statearr_272200_272218 = state_272193__$1;(statearr_272200_272218[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272194 === 6))
{var inst_272189 = (state_272193[2]);var state_272193__$1 = state_272193;var statearr_272201_272219 = state_272193__$1;(statearr_272201_272219[2] = inst_272189);
(statearr_272201_272219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272194 === 7))
{var inst_272174 = (state_272193[7]);var inst_272179 = (state_272193[2]);var inst_272180 = cljs.core.next.call(null,inst_272174);var inst_272174__$1 = inst_272180;var state_272193__$1 = (function (){var statearr_272202 = state_272193;(statearr_272202[8] = inst_272179);
(statearr_272202[7] = inst_272174__$1);
return statearr_272202;
})();var statearr_272203_272220 = state_272193__$1;(statearr_272203_272220[2] = null);
(statearr_272203_272220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272194 === 8))
{var inst_272184 = cljs.core.async.close_BANG_.call(null,ch);var state_272193__$1 = state_272193;var statearr_272204_272221 = state_272193__$1;(statearr_272204_272221[2] = inst_272184);
(statearr_272204_272221[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272194 === 9))
{var state_272193__$1 = state_272193;var statearr_272205_272222 = state_272193__$1;(statearr_272205_272222[2] = null);
(statearr_272205_272222[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272194 === 10))
{var inst_272187 = (state_272193[2]);var state_272193__$1 = state_272193;var statearr_272206_272223 = state_272193__$1;(statearr_272206_272223[2] = inst_272187);
(statearr_272206_272223[1] = 6);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_272210 = [null,null,null,null,null,null,null,null,null];(statearr_272210[0] = state_machine__12118__auto__);
(statearr_272210[1] = 1);
return statearr_272210;
});
var state_machine__12118__auto____1 = (function (state_272193){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_272193);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e272211){if((e272211 instanceof Object))
{var ex__12121__auto__ = e272211;var statearr_272212_272224 = state_272193;(statearr_272212_272224[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_272193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e272211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__272225 = state_272193;
state_272193 = G__272225;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_272193){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_272193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_272213 = f__12188__auto__.call(null);(statearr_272213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_272213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
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
cljs.core.async.Mux = (function (){var obj272227 = {};return obj272227;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8211__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj272229 = {};return obj272229;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8211__auto__ = m;if(and__8211__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8211__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8831__auto__ = (((m == null))?null:m);return (function (){var or__8223__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8211__auto__ = m;if(and__8211__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8211__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8831__auto__ = (((m == null))?null:m);return (function (){var or__8223__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8211__auto__ = m;if(and__8211__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8211__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8831__auto__ = (((m == null))?null:m);return (function (){var or__8223__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t272453 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t272453 = (function (cs,ch,mult,meta272454){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta272454 = meta272454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t272453.cljs$lang$type = true;
cljs.core.async.t272453.cljs$lang$ctorStr = "cljs.core.async/t272453";
cljs.core.async.t272453.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t272453");
});})(cs))
;
cljs.core.async.t272453.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t272453.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t272453.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t272453.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t272453.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t272453.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t272453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_272455){var self__ = this;
var _272455__$1 = this;return self__.meta272454;
});})(cs))
;
cljs.core.async.t272453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_272455,meta272454__$1){var self__ = this;
var _272455__$1 = this;return (new cljs.core.async.t272453(self__.cs,self__.ch,self__.mult,meta272454__$1));
});})(cs))
;
cljs.core.async.__GT_t272453 = ((function (cs){
return (function __GT_t272453(cs__$1,ch__$1,mult__$1,meta272454){return (new cljs.core.async.t272453(cs__$1,ch__$1,mult__$1,meta272454));
});})(cs))
;
}
return (new cljs.core.async.t272453(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12187__auto___272676 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_272590){var state_val_272591 = (state_272590[1]);if((state_val_272591 === 32))
{var inst_272458 = (state_272590[7]);var inst_272534 = (state_272590[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_272590,31,Object,null,30);var inst_272541 = cljs.core.async.put_BANG_.call(null,inst_272534,inst_272458,done);var state_272590__$1 = state_272590;var statearr_272592_272677 = state_272590__$1;(statearr_272592_272677[2] = inst_272541);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_272590__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 1))
{var state_272590__$1 = state_272590;var statearr_272593_272678 = state_272590__$1;(statearr_272593_272678[2] = null);
(statearr_272593_272678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 33))
{var inst_272547 = (state_272590[9]);var inst_272549 = cljs.core.chunked_seq_QMARK_.call(null,inst_272547);var state_272590__$1 = state_272590;if(inst_272549)
{var statearr_272594_272679 = state_272590__$1;(statearr_272594_272679[1] = 36);
} else
{var statearr_272595_272680 = state_272590__$1;(statearr_272595_272680[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 2))
{var state_272590__$1 = state_272590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_272590__$1,4,ch);
} else
{if((state_val_272591 === 34))
{var state_272590__$1 = state_272590;var statearr_272596_272681 = state_272590__$1;(statearr_272596_272681[2] = null);
(statearr_272596_272681[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 3))
{var inst_272588 = (state_272590[2]);var state_272590__$1 = state_272590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_272590__$1,inst_272588);
} else
{if((state_val_272591 === 35))
{var inst_272572 = (state_272590[2]);var state_272590__$1 = state_272590;var statearr_272597_272682 = state_272590__$1;(statearr_272597_272682[2] = inst_272572);
(statearr_272597_272682[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 4))
{var inst_272458 = (state_272590[7]);var inst_272458__$1 = (state_272590[2]);var inst_272459 = (inst_272458__$1 == null);var state_272590__$1 = (function (){var statearr_272598 = state_272590;(statearr_272598[7] = inst_272458__$1);
return statearr_272598;
})();if(cljs.core.truth_(inst_272459))
{var statearr_272599_272683 = state_272590__$1;(statearr_272599_272683[1] = 5);
} else
{var statearr_272600_272684 = state_272590__$1;(statearr_272600_272684[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 36))
{var inst_272547 = (state_272590[9]);var inst_272551 = cljs.core.chunk_first.call(null,inst_272547);var inst_272552 = cljs.core.chunk_rest.call(null,inst_272547);var inst_272553 = cljs.core.count.call(null,inst_272551);var inst_272526 = inst_272552;var inst_272527 = inst_272551;var inst_272528 = inst_272553;var inst_272529 = 0;var state_272590__$1 = (function (){var statearr_272601 = state_272590;(statearr_272601[10] = inst_272527);
(statearr_272601[11] = inst_272528);
(statearr_272601[12] = inst_272526);
(statearr_272601[13] = inst_272529);
return statearr_272601;
})();var statearr_272602_272685 = state_272590__$1;(statearr_272602_272685[2] = null);
(statearr_272602_272685[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 5))
{var inst_272465 = cljs.core.deref.call(null,cs);var inst_272466 = cljs.core.seq.call(null,inst_272465);var inst_272467 = inst_272466;var inst_272468 = null;var inst_272469 = 0;var inst_272470 = 0;var state_272590__$1 = (function (){var statearr_272603 = state_272590;(statearr_272603[14] = inst_272470);
(statearr_272603[15] = inst_272467);
(statearr_272603[16] = inst_272469);
(statearr_272603[17] = inst_272468);
return statearr_272603;
})();var statearr_272604_272686 = state_272590__$1;(statearr_272604_272686[2] = null);
(statearr_272604_272686[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 37))
{var inst_272547 = (state_272590[9]);var inst_272556 = cljs.core.first.call(null,inst_272547);var state_272590__$1 = (function (){var statearr_272605 = state_272590;(statearr_272605[18] = inst_272556);
return statearr_272605;
})();var statearr_272606_272687 = state_272590__$1;(statearr_272606_272687[2] = null);
(statearr_272606_272687[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 6))
{var inst_272518 = (state_272590[19]);var inst_272517 = cljs.core.deref.call(null,cs);var inst_272518__$1 = cljs.core.keys.call(null,inst_272517);var inst_272519 = cljs.core.count.call(null,inst_272518__$1);var inst_272520 = cljs.core.reset_BANG_.call(null,dctr,inst_272519);var inst_272525 = cljs.core.seq.call(null,inst_272518__$1);var inst_272526 = inst_272525;var inst_272527 = null;var inst_272528 = 0;var inst_272529 = 0;var state_272590__$1 = (function (){var statearr_272607 = state_272590;(statearr_272607[10] = inst_272527);
(statearr_272607[11] = inst_272528);
(statearr_272607[12] = inst_272526);
(statearr_272607[13] = inst_272529);
(statearr_272607[19] = inst_272518__$1);
(statearr_272607[20] = inst_272520);
return statearr_272607;
})();var statearr_272608_272688 = state_272590__$1;(statearr_272608_272688[2] = null);
(statearr_272608_272688[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 38))
{var inst_272569 = (state_272590[2]);var state_272590__$1 = state_272590;var statearr_272609_272689 = state_272590__$1;(statearr_272609_272689[2] = inst_272569);
(statearr_272609_272689[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 7))
{var inst_272586 = (state_272590[2]);var state_272590__$1 = state_272590;var statearr_272610_272690 = state_272590__$1;(statearr_272610_272690[2] = inst_272586);
(statearr_272610_272690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 39))
{var inst_272547 = (state_272590[9]);var inst_272565 = (state_272590[2]);var inst_272566 = cljs.core.next.call(null,inst_272547);var inst_272526 = inst_272566;var inst_272527 = null;var inst_272528 = 0;var inst_272529 = 0;var state_272590__$1 = (function (){var statearr_272611 = state_272590;(statearr_272611[21] = inst_272565);
(statearr_272611[10] = inst_272527);
(statearr_272611[11] = inst_272528);
(statearr_272611[12] = inst_272526);
(statearr_272611[13] = inst_272529);
return statearr_272611;
})();var statearr_272612_272691 = state_272590__$1;(statearr_272612_272691[2] = null);
(statearr_272612_272691[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 8))
{var inst_272470 = (state_272590[14]);var inst_272469 = (state_272590[16]);var inst_272472 = (inst_272470 < inst_272469);var inst_272473 = inst_272472;var state_272590__$1 = state_272590;if(cljs.core.truth_(inst_272473))
{var statearr_272613_272692 = state_272590__$1;(statearr_272613_272692[1] = 10);
} else
{var statearr_272614_272693 = state_272590__$1;(statearr_272614_272693[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 40))
{var inst_272556 = (state_272590[18]);var inst_272557 = (state_272590[2]);var inst_272558 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_272559 = cljs.core.async.untap_STAR_.call(null,m,inst_272556);var state_272590__$1 = (function (){var statearr_272615 = state_272590;(statearr_272615[22] = inst_272557);
(statearr_272615[23] = inst_272558);
return statearr_272615;
})();var statearr_272616_272694 = state_272590__$1;(statearr_272616_272694[2] = inst_272559);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_272590__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 9))
{var inst_272515 = (state_272590[2]);var state_272590__$1 = state_272590;var statearr_272617_272695 = state_272590__$1;(statearr_272617_272695[2] = inst_272515);
(statearr_272617_272695[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 41))
{var inst_272458 = (state_272590[7]);var inst_272556 = (state_272590[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_272590,40,Object,null,39);var inst_272563 = cljs.core.async.put_BANG_.call(null,inst_272556,inst_272458,done);var state_272590__$1 = state_272590;var statearr_272618_272696 = state_272590__$1;(statearr_272618_272696[2] = inst_272563);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_272590__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 10))
{var inst_272470 = (state_272590[14]);var inst_272468 = (state_272590[17]);var inst_272476 = cljs.core._nth.call(null,inst_272468,inst_272470);var inst_272477 = cljs.core.nth.call(null,inst_272476,0,null);var inst_272478 = cljs.core.nth.call(null,inst_272476,1,null);var state_272590__$1 = (function (){var statearr_272619 = state_272590;(statearr_272619[24] = inst_272477);
return statearr_272619;
})();if(cljs.core.truth_(inst_272478))
{var statearr_272620_272697 = state_272590__$1;(statearr_272620_272697[1] = 13);
} else
{var statearr_272621_272698 = state_272590__$1;(statearr_272621_272698[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 42))
{var state_272590__$1 = state_272590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_272590__$1,45,dchan);
} else
{if((state_val_272591 === 11))
{var inst_272467 = (state_272590[15]);var inst_272487 = (state_272590[25]);var inst_272487__$1 = cljs.core.seq.call(null,inst_272467);var state_272590__$1 = (function (){var statearr_272622 = state_272590;(statearr_272622[25] = inst_272487__$1);
return statearr_272622;
})();if(inst_272487__$1)
{var statearr_272623_272699 = state_272590__$1;(statearr_272623_272699[1] = 16);
} else
{var statearr_272624_272700 = state_272590__$1;(statearr_272624_272700[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 43))
{var state_272590__$1 = state_272590;var statearr_272625_272701 = state_272590__$1;(statearr_272625_272701[2] = null);
(statearr_272625_272701[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 12))
{var inst_272513 = (state_272590[2]);var state_272590__$1 = state_272590;var statearr_272626_272702 = state_272590__$1;(statearr_272626_272702[2] = inst_272513);
(statearr_272626_272702[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 44))
{var inst_272583 = (state_272590[2]);var state_272590__$1 = (function (){var statearr_272627 = state_272590;(statearr_272627[26] = inst_272583);
return statearr_272627;
})();var statearr_272628_272703 = state_272590__$1;(statearr_272628_272703[2] = null);
(statearr_272628_272703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 13))
{var inst_272477 = (state_272590[24]);var inst_272480 = cljs.core.async.close_BANG_.call(null,inst_272477);var state_272590__$1 = state_272590;var statearr_272629_272704 = state_272590__$1;(statearr_272629_272704[2] = inst_272480);
(statearr_272629_272704[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 45))
{var inst_272580 = (state_272590[2]);var state_272590__$1 = state_272590;var statearr_272633_272705 = state_272590__$1;(statearr_272633_272705[2] = inst_272580);
(statearr_272633_272705[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 14))
{var state_272590__$1 = state_272590;var statearr_272634_272706 = state_272590__$1;(statearr_272634_272706[2] = null);
(statearr_272634_272706[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 15))
{var inst_272470 = (state_272590[14]);var inst_272467 = (state_272590[15]);var inst_272469 = (state_272590[16]);var inst_272468 = (state_272590[17]);var inst_272483 = (state_272590[2]);var inst_272484 = (inst_272470 + 1);var tmp272630 = inst_272467;var tmp272631 = inst_272469;var tmp272632 = inst_272468;var inst_272467__$1 = tmp272630;var inst_272468__$1 = tmp272632;var inst_272469__$1 = tmp272631;var inst_272470__$1 = inst_272484;var state_272590__$1 = (function (){var statearr_272635 = state_272590;(statearr_272635[27] = inst_272483);
(statearr_272635[14] = inst_272470__$1);
(statearr_272635[15] = inst_272467__$1);
(statearr_272635[16] = inst_272469__$1);
(statearr_272635[17] = inst_272468__$1);
return statearr_272635;
})();var statearr_272636_272707 = state_272590__$1;(statearr_272636_272707[2] = null);
(statearr_272636_272707[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 16))
{var inst_272487 = (state_272590[25]);var inst_272489 = cljs.core.chunked_seq_QMARK_.call(null,inst_272487);var state_272590__$1 = state_272590;if(inst_272489)
{var statearr_272637_272708 = state_272590__$1;(statearr_272637_272708[1] = 19);
} else
{var statearr_272638_272709 = state_272590__$1;(statearr_272638_272709[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 17))
{var state_272590__$1 = state_272590;var statearr_272639_272710 = state_272590__$1;(statearr_272639_272710[2] = null);
(statearr_272639_272710[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 18))
{var inst_272511 = (state_272590[2]);var state_272590__$1 = state_272590;var statearr_272640_272711 = state_272590__$1;(statearr_272640_272711[2] = inst_272511);
(statearr_272640_272711[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 19))
{var inst_272487 = (state_272590[25]);var inst_272491 = cljs.core.chunk_first.call(null,inst_272487);var inst_272492 = cljs.core.chunk_rest.call(null,inst_272487);var inst_272493 = cljs.core.count.call(null,inst_272491);var inst_272467 = inst_272492;var inst_272468 = inst_272491;var inst_272469 = inst_272493;var inst_272470 = 0;var state_272590__$1 = (function (){var statearr_272641 = state_272590;(statearr_272641[14] = inst_272470);
(statearr_272641[15] = inst_272467);
(statearr_272641[16] = inst_272469);
(statearr_272641[17] = inst_272468);
return statearr_272641;
})();var statearr_272642_272712 = state_272590__$1;(statearr_272642_272712[2] = null);
(statearr_272642_272712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 20))
{var inst_272487 = (state_272590[25]);var inst_272497 = cljs.core.first.call(null,inst_272487);var inst_272498 = cljs.core.nth.call(null,inst_272497,0,null);var inst_272499 = cljs.core.nth.call(null,inst_272497,1,null);var state_272590__$1 = (function (){var statearr_272643 = state_272590;(statearr_272643[28] = inst_272498);
return statearr_272643;
})();if(cljs.core.truth_(inst_272499))
{var statearr_272644_272713 = state_272590__$1;(statearr_272644_272713[1] = 22);
} else
{var statearr_272645_272714 = state_272590__$1;(statearr_272645_272714[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 21))
{var inst_272508 = (state_272590[2]);var state_272590__$1 = state_272590;var statearr_272646_272715 = state_272590__$1;(statearr_272646_272715[2] = inst_272508);
(statearr_272646_272715[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 22))
{var inst_272498 = (state_272590[28]);var inst_272501 = cljs.core.async.close_BANG_.call(null,inst_272498);var state_272590__$1 = state_272590;var statearr_272647_272716 = state_272590__$1;(statearr_272647_272716[2] = inst_272501);
(statearr_272647_272716[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 23))
{var state_272590__$1 = state_272590;var statearr_272648_272717 = state_272590__$1;(statearr_272648_272717[2] = null);
(statearr_272648_272717[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 24))
{var inst_272487 = (state_272590[25]);var inst_272504 = (state_272590[2]);var inst_272505 = cljs.core.next.call(null,inst_272487);var inst_272467 = inst_272505;var inst_272468 = null;var inst_272469 = 0;var inst_272470 = 0;var state_272590__$1 = (function (){var statearr_272649 = state_272590;(statearr_272649[14] = inst_272470);
(statearr_272649[15] = inst_272467);
(statearr_272649[16] = inst_272469);
(statearr_272649[17] = inst_272468);
(statearr_272649[29] = inst_272504);
return statearr_272649;
})();var statearr_272650_272718 = state_272590__$1;(statearr_272650_272718[2] = null);
(statearr_272650_272718[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 25))
{var inst_272528 = (state_272590[11]);var inst_272529 = (state_272590[13]);var inst_272531 = (inst_272529 < inst_272528);var inst_272532 = inst_272531;var state_272590__$1 = state_272590;if(cljs.core.truth_(inst_272532))
{var statearr_272651_272719 = state_272590__$1;(statearr_272651_272719[1] = 27);
} else
{var statearr_272652_272720 = state_272590__$1;(statearr_272652_272720[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 26))
{var inst_272518 = (state_272590[19]);var inst_272576 = (state_272590[2]);var inst_272577 = cljs.core.seq.call(null,inst_272518);var state_272590__$1 = (function (){var statearr_272653 = state_272590;(statearr_272653[30] = inst_272576);
return statearr_272653;
})();if(inst_272577)
{var statearr_272654_272721 = state_272590__$1;(statearr_272654_272721[1] = 42);
} else
{var statearr_272655_272722 = state_272590__$1;(statearr_272655_272722[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 27))
{var inst_272527 = (state_272590[10]);var inst_272529 = (state_272590[13]);var inst_272534 = cljs.core._nth.call(null,inst_272527,inst_272529);var state_272590__$1 = (function (){var statearr_272656 = state_272590;(statearr_272656[8] = inst_272534);
return statearr_272656;
})();var statearr_272657_272723 = state_272590__$1;(statearr_272657_272723[2] = null);
(statearr_272657_272723[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 28))
{var inst_272526 = (state_272590[12]);var inst_272547 = (state_272590[9]);var inst_272547__$1 = cljs.core.seq.call(null,inst_272526);var state_272590__$1 = (function (){var statearr_272661 = state_272590;(statearr_272661[9] = inst_272547__$1);
return statearr_272661;
})();if(inst_272547__$1)
{var statearr_272662_272724 = state_272590__$1;(statearr_272662_272724[1] = 33);
} else
{var statearr_272663_272725 = state_272590__$1;(statearr_272663_272725[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 29))
{var inst_272574 = (state_272590[2]);var state_272590__$1 = state_272590;var statearr_272664_272726 = state_272590__$1;(statearr_272664_272726[2] = inst_272574);
(statearr_272664_272726[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 30))
{var inst_272527 = (state_272590[10]);var inst_272528 = (state_272590[11]);var inst_272526 = (state_272590[12]);var inst_272529 = (state_272590[13]);var inst_272543 = (state_272590[2]);var inst_272544 = (inst_272529 + 1);var tmp272658 = inst_272527;var tmp272659 = inst_272528;var tmp272660 = inst_272526;var inst_272526__$1 = tmp272660;var inst_272527__$1 = tmp272658;var inst_272528__$1 = tmp272659;var inst_272529__$1 = inst_272544;var state_272590__$1 = (function (){var statearr_272665 = state_272590;(statearr_272665[10] = inst_272527__$1);
(statearr_272665[11] = inst_272528__$1);
(statearr_272665[12] = inst_272526__$1);
(statearr_272665[13] = inst_272529__$1);
(statearr_272665[31] = inst_272543);
return statearr_272665;
})();var statearr_272666_272727 = state_272590__$1;(statearr_272666_272727[2] = null);
(statearr_272666_272727[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272591 === 31))
{var inst_272534 = (state_272590[8]);var inst_272535 = (state_272590[2]);var inst_272536 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_272537 = cljs.core.async.untap_STAR_.call(null,m,inst_272534);var state_272590__$1 = (function (){var statearr_272667 = state_272590;(statearr_272667[32] = inst_272535);
(statearr_272667[33] = inst_272536);
return statearr_272667;
})();var statearr_272668_272728 = state_272590__$1;(statearr_272668_272728[2] = inst_272537);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_272590__$1);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_272672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_272672[0] = state_machine__12118__auto__);
(statearr_272672[1] = 1);
return statearr_272672;
});
var state_machine__12118__auto____1 = (function (state_272590){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_272590);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e272673){if((e272673 instanceof Object))
{var ex__12121__auto__ = e272673;var statearr_272674_272729 = state_272590;(statearr_272674_272729[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_272590);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e272673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__272730 = state_272590;
state_272590 = G__272730;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_272590){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_272590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_272675 = f__12188__auto__.call(null);(statearr_272675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___272676);
return statearr_272675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
cljs.core.async.Mix = (function (){var obj272732 = {};return obj272732;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8211__auto__ = m;if(and__8211__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8211__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8831__auto__ = (((m == null))?null:m);return (function (){var or__8223__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8211__auto__ = m;if(and__8211__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8211__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8831__auto__ = (((m == null))?null:m);return (function (){var or__8223__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8211__auto__ = m;if(and__8211__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8211__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8831__auto__ = (((m == null))?null:m);return (function (){var or__8223__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8211__auto__ = m;if(and__8211__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8211__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8831__auto__ = (((m == null))?null:m);return (function (){var or__8223__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8211__auto__ = m;if(and__8211__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8211__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8831__auto__ = (((m == null))?null:m);return (function (){var or__8223__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t272842 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t272842 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta272843){
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
this.meta272843 = meta272843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t272842.cljs$lang$type = true;
cljs.core.async.t272842.cljs$lang$ctorStr = "cljs.core.async/t272842";
cljs.core.async.t272842.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t272842");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t272842.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t272842.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t272842.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t272842.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t272842.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t272842.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t272842.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t272842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t272842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_272844){var self__ = this;
var _272844__$1 = this;return self__.meta272843;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t272842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_272844,meta272843__$1){var self__ = this;
var _272844__$1 = this;return (new cljs.core.async.t272842(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta272843__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t272842 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t272842(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta272843){return (new cljs.core.async.t272842(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta272843));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t272842(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12187__auto___272951 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_272909){var state_val_272910 = (state_272909[1]);if((state_val_272910 === 1))
{var inst_272848 = (state_272909[7]);var inst_272848__$1 = calc_state.call(null);var inst_272849 = cljs.core.seq_QMARK_.call(null,inst_272848__$1);var state_272909__$1 = (function (){var statearr_272911 = state_272909;(statearr_272911[7] = inst_272848__$1);
return statearr_272911;
})();if(inst_272849)
{var statearr_272912_272952 = state_272909__$1;(statearr_272912_272952[1] = 2);
} else
{var statearr_272913_272953 = state_272909__$1;(statearr_272913_272953[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 2))
{var inst_272848 = (state_272909[7]);var inst_272851 = cljs.core.apply.call(null,cljs.core.hash_map,inst_272848);var state_272909__$1 = state_272909;var statearr_272914_272954 = state_272909__$1;(statearr_272914_272954[2] = inst_272851);
(statearr_272914_272954[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 3))
{var inst_272848 = (state_272909[7]);var state_272909__$1 = state_272909;var statearr_272915_272955 = state_272909__$1;(statearr_272915_272955[2] = inst_272848);
(statearr_272915_272955[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 4))
{var inst_272848 = (state_272909[7]);var inst_272854 = (state_272909[2]);var inst_272855 = cljs.core.get.call(null,inst_272854,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_272856 = cljs.core.get.call(null,inst_272854,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_272857 = cljs.core.get.call(null,inst_272854,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_272858 = inst_272848;var state_272909__$1 = (function (){var statearr_272916 = state_272909;(statearr_272916[8] = inst_272857);
(statearr_272916[9] = inst_272858);
(statearr_272916[10] = inst_272855);
(statearr_272916[11] = inst_272856);
return statearr_272916;
})();var statearr_272917_272956 = state_272909__$1;(statearr_272917_272956[2] = null);
(statearr_272917_272956[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 5))
{var inst_272858 = (state_272909[9]);var inst_272861 = cljs.core.seq_QMARK_.call(null,inst_272858);var state_272909__$1 = state_272909;if(inst_272861)
{var statearr_272918_272957 = state_272909__$1;(statearr_272918_272957[1] = 7);
} else
{var statearr_272919_272958 = state_272909__$1;(statearr_272919_272958[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 6))
{var inst_272907 = (state_272909[2]);var state_272909__$1 = state_272909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_272909__$1,inst_272907);
} else
{if((state_val_272910 === 7))
{var inst_272858 = (state_272909[9]);var inst_272863 = cljs.core.apply.call(null,cljs.core.hash_map,inst_272858);var state_272909__$1 = state_272909;var statearr_272920_272959 = state_272909__$1;(statearr_272920_272959[2] = inst_272863);
(statearr_272920_272959[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 8))
{var inst_272858 = (state_272909[9]);var state_272909__$1 = state_272909;var statearr_272921_272960 = state_272909__$1;(statearr_272921_272960[2] = inst_272858);
(statearr_272921_272960[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 9))
{var inst_272866 = (state_272909[12]);var inst_272866__$1 = (state_272909[2]);var inst_272867 = cljs.core.get.call(null,inst_272866__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_272868 = cljs.core.get.call(null,inst_272866__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_272869 = cljs.core.get.call(null,inst_272866__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_272909__$1 = (function (){var statearr_272922 = state_272909;(statearr_272922[13] = inst_272868);
(statearr_272922[14] = inst_272869);
(statearr_272922[12] = inst_272866__$1);
return statearr_272922;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_272909__$1,10,inst_272867);
} else
{if((state_val_272910 === 10))
{var inst_272874 = (state_272909[15]);var inst_272873 = (state_272909[16]);var inst_272872 = (state_272909[2]);var inst_272873__$1 = cljs.core.nth.call(null,inst_272872,0,null);var inst_272874__$1 = cljs.core.nth.call(null,inst_272872,1,null);var inst_272875 = (inst_272873__$1 == null);var inst_272876 = cljs.core._EQ_.call(null,inst_272874__$1,change);var inst_272877 = (inst_272875) || (inst_272876);var state_272909__$1 = (function (){var statearr_272923 = state_272909;(statearr_272923[15] = inst_272874__$1);
(statearr_272923[16] = inst_272873__$1);
return statearr_272923;
})();if(cljs.core.truth_(inst_272877))
{var statearr_272924_272961 = state_272909__$1;(statearr_272924_272961[1] = 11);
} else
{var statearr_272925_272962 = state_272909__$1;(statearr_272925_272962[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 11))
{var inst_272873 = (state_272909[16]);var inst_272879 = (inst_272873 == null);var state_272909__$1 = state_272909;if(cljs.core.truth_(inst_272879))
{var statearr_272926_272963 = state_272909__$1;(statearr_272926_272963[1] = 14);
} else
{var statearr_272927_272964 = state_272909__$1;(statearr_272927_272964[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 12))
{var inst_272888 = (state_272909[17]);var inst_272869 = (state_272909[14]);var inst_272874 = (state_272909[15]);var inst_272888__$1 = inst_272869.call(null,inst_272874);var state_272909__$1 = (function (){var statearr_272928 = state_272909;(statearr_272928[17] = inst_272888__$1);
return statearr_272928;
})();if(cljs.core.truth_(inst_272888__$1))
{var statearr_272929_272965 = state_272909__$1;(statearr_272929_272965[1] = 17);
} else
{var statearr_272930_272966 = state_272909__$1;(statearr_272930_272966[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 13))
{var inst_272905 = (state_272909[2]);var state_272909__$1 = state_272909;var statearr_272931_272967 = state_272909__$1;(statearr_272931_272967[2] = inst_272905);
(statearr_272931_272967[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 14))
{var inst_272874 = (state_272909[15]);var inst_272881 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_272874);var state_272909__$1 = state_272909;var statearr_272932_272968 = state_272909__$1;(statearr_272932_272968[2] = inst_272881);
(statearr_272932_272968[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 15))
{var state_272909__$1 = state_272909;var statearr_272933_272969 = state_272909__$1;(statearr_272933_272969[2] = null);
(statearr_272933_272969[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 16))
{var inst_272884 = (state_272909[2]);var inst_272885 = calc_state.call(null);var inst_272858 = inst_272885;var state_272909__$1 = (function (){var statearr_272934 = state_272909;(statearr_272934[18] = inst_272884);
(statearr_272934[9] = inst_272858);
return statearr_272934;
})();var statearr_272935_272970 = state_272909__$1;(statearr_272935_272970[2] = null);
(statearr_272935_272970[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 17))
{var inst_272888 = (state_272909[17]);var state_272909__$1 = state_272909;var statearr_272936_272971 = state_272909__$1;(statearr_272936_272971[2] = inst_272888);
(statearr_272936_272971[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 18))
{var inst_272868 = (state_272909[13]);var inst_272869 = (state_272909[14]);var inst_272874 = (state_272909[15]);var inst_272891 = cljs.core.empty_QMARK_.call(null,inst_272869);var inst_272892 = inst_272868.call(null,inst_272874);var inst_272893 = cljs.core.not.call(null,inst_272892);var inst_272894 = (inst_272891) && (inst_272893);var state_272909__$1 = state_272909;var statearr_272937_272972 = state_272909__$1;(statearr_272937_272972[2] = inst_272894);
(statearr_272937_272972[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 19))
{var inst_272896 = (state_272909[2]);var state_272909__$1 = state_272909;if(cljs.core.truth_(inst_272896))
{var statearr_272938_272973 = state_272909__$1;(statearr_272938_272973[1] = 20);
} else
{var statearr_272939_272974 = state_272909__$1;(statearr_272939_272974[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 20))
{var inst_272873 = (state_272909[16]);var state_272909__$1 = state_272909;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_272909__$1,23,out,inst_272873);
} else
{if((state_val_272910 === 21))
{var state_272909__$1 = state_272909;var statearr_272940_272975 = state_272909__$1;(statearr_272940_272975[2] = null);
(statearr_272940_272975[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 22))
{var inst_272866 = (state_272909[12]);var inst_272902 = (state_272909[2]);var inst_272858 = inst_272866;var state_272909__$1 = (function (){var statearr_272941 = state_272909;(statearr_272941[9] = inst_272858);
(statearr_272941[19] = inst_272902);
return statearr_272941;
})();var statearr_272942_272976 = state_272909__$1;(statearr_272942_272976[2] = null);
(statearr_272942_272976[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_272910 === 23))
{var inst_272899 = (state_272909[2]);var state_272909__$1 = state_272909;var statearr_272943_272977 = state_272909__$1;(statearr_272943_272977[2] = inst_272899);
(statearr_272943_272977[1] = 22);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_272947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_272947[0] = state_machine__12118__auto__);
(statearr_272947[1] = 1);
return statearr_272947;
});
var state_machine__12118__auto____1 = (function (state_272909){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_272909);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e272948){if((e272948 instanceof Object))
{var ex__12121__auto__ = e272948;var statearr_272949_272978 = state_272909;(statearr_272949_272978[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_272909);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e272948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__272979 = state_272909;
state_272909 = G__272979;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_272909){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_272909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_272950 = f__12188__auto__.call(null);(statearr_272950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___272951);
return statearr_272950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
cljs.core.async.Pub = (function (){var obj272981 = {};return obj272981;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8211__auto__ = p;if(and__8211__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8211__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8831__auto__ = (((p == null))?null:p);return (function (){var or__8223__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8211__auto__ = p;if(and__8211__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8211__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8831__auto__ = (((p == null))?null:p);return (function (){var or__8223__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8211__auto__ = p;if(and__8211__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8211__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8831__auto__ = (((p == null))?null:p);return (function (){var or__8223__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8211__auto__ = p;if(and__8211__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8211__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8831__auto__ = (((p == null))?null:p);return (function (){var or__8223__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
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
return (function (topic){var or__8223__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8223__auto__,mults){
return (function (p1__272982_SHARP_){if(cljs.core.truth_(p1__272982_SHARP_.call(null,topic)))
{return p1__272982_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__272982_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8223__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t273107 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t273107 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta273108){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta273108 = meta273108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t273107.cljs$lang$type = true;
cljs.core.async.t273107.cljs$lang$ctorStr = "cljs.core.async/t273107";
cljs.core.async.t273107.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t273107");
});})(mults,ensure_mult))
;
cljs.core.async.t273107.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t273107.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t273107.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t273107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t273107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t273107.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t273107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t273107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_273109){var self__ = this;
var _273109__$1 = this;return self__.meta273108;
});})(mults,ensure_mult))
;
cljs.core.async.t273107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_273109,meta273108__$1){var self__ = this;
var _273109__$1 = this;return (new cljs.core.async.t273107(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta273108__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t273107 = ((function (mults,ensure_mult){
return (function __GT_t273107(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta273108){return (new cljs.core.async.t273107(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta273108));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t273107(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12187__auto___273231 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_273183){var state_val_273184 = (state_273183[1]);if((state_val_273184 === 1))
{var state_273183__$1 = state_273183;var statearr_273185_273232 = state_273183__$1;(statearr_273185_273232[2] = null);
(statearr_273185_273232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 2))
{var state_273183__$1 = state_273183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_273183__$1,4,ch);
} else
{if((state_val_273184 === 3))
{var inst_273181 = (state_273183[2]);var state_273183__$1 = state_273183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_273183__$1,inst_273181);
} else
{if((state_val_273184 === 4))
{var inst_273112 = (state_273183[7]);var inst_273112__$1 = (state_273183[2]);var inst_273113 = (inst_273112__$1 == null);var state_273183__$1 = (function (){var statearr_273186 = state_273183;(statearr_273186[7] = inst_273112__$1);
return statearr_273186;
})();if(cljs.core.truth_(inst_273113))
{var statearr_273187_273233 = state_273183__$1;(statearr_273187_273233[1] = 5);
} else
{var statearr_273188_273234 = state_273183__$1;(statearr_273188_273234[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 5))
{var inst_273119 = cljs.core.deref.call(null,mults);var inst_273120 = cljs.core.vals.call(null,inst_273119);var inst_273121 = cljs.core.seq.call(null,inst_273120);var inst_273122 = inst_273121;var inst_273123 = null;var inst_273124 = 0;var inst_273125 = 0;var state_273183__$1 = (function (){var statearr_273189 = state_273183;(statearr_273189[8] = inst_273122);
(statearr_273189[9] = inst_273123);
(statearr_273189[10] = inst_273124);
(statearr_273189[11] = inst_273125);
return statearr_273189;
})();var statearr_273190_273235 = state_273183__$1;(statearr_273190_273235[2] = null);
(statearr_273190_273235[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 6))
{var inst_273160 = (state_273183[12]);var inst_273112 = (state_273183[7]);var inst_273162 = (state_273183[13]);var inst_273160__$1 = topic_fn.call(null,inst_273112);var inst_273161 = cljs.core.deref.call(null,mults);var inst_273162__$1 = cljs.core.get.call(null,inst_273161,inst_273160__$1);var state_273183__$1 = (function (){var statearr_273191 = state_273183;(statearr_273191[12] = inst_273160__$1);
(statearr_273191[13] = inst_273162__$1);
return statearr_273191;
})();if(cljs.core.truth_(inst_273162__$1))
{var statearr_273192_273236 = state_273183__$1;(statearr_273192_273236[1] = 19);
} else
{var statearr_273193_273237 = state_273183__$1;(statearr_273193_273237[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 7))
{var inst_273179 = (state_273183[2]);var state_273183__$1 = state_273183;var statearr_273194_273238 = state_273183__$1;(statearr_273194_273238[2] = inst_273179);
(statearr_273194_273238[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 8))
{var inst_273124 = (state_273183[10]);var inst_273125 = (state_273183[11]);var inst_273127 = (inst_273125 < inst_273124);var inst_273128 = inst_273127;var state_273183__$1 = state_273183;if(cljs.core.truth_(inst_273128))
{var statearr_273198_273239 = state_273183__$1;(statearr_273198_273239[1] = 10);
} else
{var statearr_273199_273240 = state_273183__$1;(statearr_273199_273240[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 9))
{var inst_273158 = (state_273183[2]);var state_273183__$1 = state_273183;var statearr_273200_273241 = state_273183__$1;(statearr_273200_273241[2] = inst_273158);
(statearr_273200_273241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 10))
{var inst_273122 = (state_273183[8]);var inst_273123 = (state_273183[9]);var inst_273124 = (state_273183[10]);var inst_273125 = (state_273183[11]);var inst_273130 = cljs.core._nth.call(null,inst_273123,inst_273125);var inst_273131 = cljs.core.async.muxch_STAR_.call(null,inst_273130);var inst_273132 = cljs.core.async.close_BANG_.call(null,inst_273131);var inst_273133 = (inst_273125 + 1);var tmp273195 = inst_273122;var tmp273196 = inst_273123;var tmp273197 = inst_273124;var inst_273122__$1 = tmp273195;var inst_273123__$1 = tmp273196;var inst_273124__$1 = tmp273197;var inst_273125__$1 = inst_273133;var state_273183__$1 = (function (){var statearr_273201 = state_273183;(statearr_273201[14] = inst_273132);
(statearr_273201[8] = inst_273122__$1);
(statearr_273201[9] = inst_273123__$1);
(statearr_273201[10] = inst_273124__$1);
(statearr_273201[11] = inst_273125__$1);
return statearr_273201;
})();var statearr_273202_273242 = state_273183__$1;(statearr_273202_273242[2] = null);
(statearr_273202_273242[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 11))
{var inst_273122 = (state_273183[8]);var inst_273136 = (state_273183[15]);var inst_273136__$1 = cljs.core.seq.call(null,inst_273122);var state_273183__$1 = (function (){var statearr_273203 = state_273183;(statearr_273203[15] = inst_273136__$1);
return statearr_273203;
})();if(inst_273136__$1)
{var statearr_273204_273243 = state_273183__$1;(statearr_273204_273243[1] = 13);
} else
{var statearr_273205_273244 = state_273183__$1;(statearr_273205_273244[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 12))
{var inst_273156 = (state_273183[2]);var state_273183__$1 = state_273183;var statearr_273206_273245 = state_273183__$1;(statearr_273206_273245[2] = inst_273156);
(statearr_273206_273245[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 13))
{var inst_273136 = (state_273183[15]);var inst_273138 = cljs.core.chunked_seq_QMARK_.call(null,inst_273136);var state_273183__$1 = state_273183;if(inst_273138)
{var statearr_273207_273246 = state_273183__$1;(statearr_273207_273246[1] = 16);
} else
{var statearr_273208_273247 = state_273183__$1;(statearr_273208_273247[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 14))
{var state_273183__$1 = state_273183;var statearr_273209_273248 = state_273183__$1;(statearr_273209_273248[2] = null);
(statearr_273209_273248[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 15))
{var inst_273154 = (state_273183[2]);var state_273183__$1 = state_273183;var statearr_273210_273249 = state_273183__$1;(statearr_273210_273249[2] = inst_273154);
(statearr_273210_273249[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 16))
{var inst_273136 = (state_273183[15]);var inst_273140 = cljs.core.chunk_first.call(null,inst_273136);var inst_273141 = cljs.core.chunk_rest.call(null,inst_273136);var inst_273142 = cljs.core.count.call(null,inst_273140);var inst_273122 = inst_273141;var inst_273123 = inst_273140;var inst_273124 = inst_273142;var inst_273125 = 0;var state_273183__$1 = (function (){var statearr_273211 = state_273183;(statearr_273211[8] = inst_273122);
(statearr_273211[9] = inst_273123);
(statearr_273211[10] = inst_273124);
(statearr_273211[11] = inst_273125);
return statearr_273211;
})();var statearr_273212_273250 = state_273183__$1;(statearr_273212_273250[2] = null);
(statearr_273212_273250[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 17))
{var inst_273136 = (state_273183[15]);var inst_273145 = cljs.core.first.call(null,inst_273136);var inst_273146 = cljs.core.async.muxch_STAR_.call(null,inst_273145);var inst_273147 = cljs.core.async.close_BANG_.call(null,inst_273146);var inst_273148 = cljs.core.next.call(null,inst_273136);var inst_273122 = inst_273148;var inst_273123 = null;var inst_273124 = 0;var inst_273125 = 0;var state_273183__$1 = (function (){var statearr_273213 = state_273183;(statearr_273213[8] = inst_273122);
(statearr_273213[9] = inst_273123);
(statearr_273213[10] = inst_273124);
(statearr_273213[11] = inst_273125);
(statearr_273213[16] = inst_273147);
return statearr_273213;
})();var statearr_273214_273251 = state_273183__$1;(statearr_273214_273251[2] = null);
(statearr_273214_273251[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 18))
{var inst_273151 = (state_273183[2]);var state_273183__$1 = state_273183;var statearr_273215_273252 = state_273183__$1;(statearr_273215_273252[2] = inst_273151);
(statearr_273215_273252[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 19))
{var state_273183__$1 = state_273183;var statearr_273216_273253 = state_273183__$1;(statearr_273216_273253[2] = null);
(statearr_273216_273253[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 20))
{var state_273183__$1 = state_273183;var statearr_273217_273254 = state_273183__$1;(statearr_273217_273254[2] = null);
(statearr_273217_273254[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 21))
{var inst_273176 = (state_273183[2]);var state_273183__$1 = (function (){var statearr_273218 = state_273183;(statearr_273218[17] = inst_273176);
return statearr_273218;
})();var statearr_273219_273255 = state_273183__$1;(statearr_273219_273255[2] = null);
(statearr_273219_273255[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 22))
{var inst_273173 = (state_273183[2]);var state_273183__$1 = state_273183;var statearr_273220_273256 = state_273183__$1;(statearr_273220_273256[2] = inst_273173);
(statearr_273220_273256[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 23))
{var inst_273160 = (state_273183[12]);var inst_273164 = (state_273183[2]);var inst_273165 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_273160);var state_273183__$1 = (function (){var statearr_273221 = state_273183;(statearr_273221[18] = inst_273164);
return statearr_273221;
})();var statearr_273222_273257 = state_273183__$1;(statearr_273222_273257[2] = inst_273165);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_273183__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273184 === 24))
{var inst_273112 = (state_273183[7]);var inst_273162 = (state_273183[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_273183,23,Object,null,22);var inst_273169 = cljs.core.async.muxch_STAR_.call(null,inst_273162);var state_273183__$1 = state_273183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_273183__$1,25,inst_273169,inst_273112);
} else
{if((state_val_273184 === 25))
{var inst_273171 = (state_273183[2]);var state_273183__$1 = state_273183;var statearr_273223_273258 = state_273183__$1;(statearr_273223_273258[2] = inst_273171);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_273183__$1);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_273227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_273227[0] = state_machine__12118__auto__);
(statearr_273227[1] = 1);
return statearr_273227;
});
var state_machine__12118__auto____1 = (function (state_273183){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_273183);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e273228){if((e273228 instanceof Object))
{var ex__12121__auto__ = e273228;var statearr_273229_273259 = state_273183;(statearr_273229_273259[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_273183);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e273228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__273260 = state_273183;
state_273183 = G__273260;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_273183){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_273183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_273230 = f__12188__auto__.call(null);(statearr_273230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___273231);
return statearr_273230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
,cljs.core.range.call(null,cnt));var c__12187__auto___273397 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_273367){var state_val_273368 = (state_273367[1]);if((state_val_273368 === 1))
{var state_273367__$1 = state_273367;var statearr_273369_273398 = state_273367__$1;(statearr_273369_273398[2] = null);
(statearr_273369_273398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 2))
{var inst_273330 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_273331 = 0;var state_273367__$1 = (function (){var statearr_273370 = state_273367;(statearr_273370[7] = inst_273330);
(statearr_273370[8] = inst_273331);
return statearr_273370;
})();var statearr_273371_273399 = state_273367__$1;(statearr_273371_273399[2] = null);
(statearr_273371_273399[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 3))
{var inst_273365 = (state_273367[2]);var state_273367__$1 = state_273367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_273367__$1,inst_273365);
} else
{if((state_val_273368 === 4))
{var inst_273331 = (state_273367[8]);var inst_273333 = (inst_273331 < cnt);var state_273367__$1 = state_273367;if(cljs.core.truth_(inst_273333))
{var statearr_273372_273400 = state_273367__$1;(statearr_273372_273400[1] = 6);
} else
{var statearr_273373_273401 = state_273367__$1;(statearr_273373_273401[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 5))
{var inst_273351 = (state_273367[2]);var state_273367__$1 = (function (){var statearr_273374 = state_273367;(statearr_273374[9] = inst_273351);
return statearr_273374;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_273367__$1,12,dchan);
} else
{if((state_val_273368 === 6))
{var state_273367__$1 = state_273367;var statearr_273375_273402 = state_273367__$1;(statearr_273375_273402[2] = null);
(statearr_273375_273402[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 7))
{var state_273367__$1 = state_273367;var statearr_273376_273403 = state_273367__$1;(statearr_273376_273403[2] = null);
(statearr_273376_273403[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 8))
{var inst_273349 = (state_273367[2]);var state_273367__$1 = state_273367;var statearr_273377_273404 = state_273367__$1;(statearr_273377_273404[2] = inst_273349);
(statearr_273377_273404[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 9))
{var inst_273331 = (state_273367[8]);var inst_273344 = (state_273367[2]);var inst_273345 = (inst_273331 + 1);var inst_273331__$1 = inst_273345;var state_273367__$1 = (function (){var statearr_273378 = state_273367;(statearr_273378[10] = inst_273344);
(statearr_273378[8] = inst_273331__$1);
return statearr_273378;
})();var statearr_273379_273405 = state_273367__$1;(statearr_273379_273405[2] = null);
(statearr_273379_273405[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 10))
{var inst_273335 = (state_273367[2]);var inst_273336 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_273367__$1 = (function (){var statearr_273380 = state_273367;(statearr_273380[11] = inst_273335);
return statearr_273380;
})();var statearr_273381_273406 = state_273367__$1;(statearr_273381_273406[2] = inst_273336);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_273367__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 11))
{var inst_273331 = (state_273367[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_273367,10,Object,null,9);var inst_273340 = chs__$1.call(null,inst_273331);var inst_273341 = done.call(null,inst_273331);var inst_273342 = cljs.core.async.take_BANG_.call(null,inst_273340,inst_273341);var state_273367__$1 = state_273367;var statearr_273382_273407 = state_273367__$1;(statearr_273382_273407[2] = inst_273342);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_273367__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 12))
{var inst_273353 = (state_273367[12]);var inst_273353__$1 = (state_273367[2]);var inst_273354 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_273353__$1);var state_273367__$1 = (function (){var statearr_273383 = state_273367;(statearr_273383[12] = inst_273353__$1);
return statearr_273383;
})();if(cljs.core.truth_(inst_273354))
{var statearr_273384_273408 = state_273367__$1;(statearr_273384_273408[1] = 13);
} else
{var statearr_273385_273409 = state_273367__$1;(statearr_273385_273409[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 13))
{var inst_273356 = cljs.core.async.close_BANG_.call(null,out);var state_273367__$1 = state_273367;var statearr_273386_273410 = state_273367__$1;(statearr_273386_273410[2] = inst_273356);
(statearr_273386_273410[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 14))
{var inst_273353 = (state_273367[12]);var inst_273358 = cljs.core.apply.call(null,f,inst_273353);var state_273367__$1 = state_273367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_273367__$1,16,out,inst_273358);
} else
{if((state_val_273368 === 15))
{var inst_273363 = (state_273367[2]);var state_273367__$1 = state_273367;var statearr_273387_273411 = state_273367__$1;(statearr_273387_273411[2] = inst_273363);
(statearr_273387_273411[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273368 === 16))
{var inst_273360 = (state_273367[2]);var state_273367__$1 = (function (){var statearr_273388 = state_273367;(statearr_273388[13] = inst_273360);
return statearr_273388;
})();var statearr_273389_273412 = state_273367__$1;(statearr_273389_273412[2] = null);
(statearr_273389_273412[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_273393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_273393[0] = state_machine__12118__auto__);
(statearr_273393[1] = 1);
return statearr_273393;
});
var state_machine__12118__auto____1 = (function (state_273367){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_273367);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e273394){if((e273394 instanceof Object))
{var ex__12121__auto__ = e273394;var statearr_273395_273413 = state_273367;(statearr_273395_273413[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_273367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e273394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__273414 = state_273367;
state_273367 = G__273414;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_273367){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_273367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_273396 = f__12188__auto__.call(null);(statearr_273396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___273397);
return statearr_273396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___273522 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_273498){var state_val_273499 = (state_273498[1]);if((state_val_273499 === 1))
{var inst_273469 = cljs.core.vec.call(null,chs);var inst_273470 = inst_273469;var state_273498__$1 = (function (){var statearr_273500 = state_273498;(statearr_273500[7] = inst_273470);
return statearr_273500;
})();var statearr_273501_273523 = state_273498__$1;(statearr_273501_273523[2] = null);
(statearr_273501_273523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273499 === 2))
{var inst_273470 = (state_273498[7]);var inst_273472 = cljs.core.count.call(null,inst_273470);var inst_273473 = (inst_273472 > 0);var state_273498__$1 = state_273498;if(cljs.core.truth_(inst_273473))
{var statearr_273502_273524 = state_273498__$1;(statearr_273502_273524[1] = 4);
} else
{var statearr_273503_273525 = state_273498__$1;(statearr_273503_273525[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273499 === 3))
{var inst_273496 = (state_273498[2]);var state_273498__$1 = state_273498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_273498__$1,inst_273496);
} else
{if((state_val_273499 === 4))
{var inst_273470 = (state_273498[7]);var state_273498__$1 = state_273498;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_273498__$1,7,inst_273470);
} else
{if((state_val_273499 === 5))
{var inst_273492 = cljs.core.async.close_BANG_.call(null,out);var state_273498__$1 = state_273498;var statearr_273504_273526 = state_273498__$1;(statearr_273504_273526[2] = inst_273492);
(statearr_273504_273526[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273499 === 6))
{var inst_273494 = (state_273498[2]);var state_273498__$1 = state_273498;var statearr_273505_273527 = state_273498__$1;(statearr_273505_273527[2] = inst_273494);
(statearr_273505_273527[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273499 === 7))
{var inst_273477 = (state_273498[8]);var inst_273478 = (state_273498[9]);var inst_273477__$1 = (state_273498[2]);var inst_273478__$1 = cljs.core.nth.call(null,inst_273477__$1,0,null);var inst_273479 = cljs.core.nth.call(null,inst_273477__$1,1,null);var inst_273480 = (inst_273478__$1 == null);var state_273498__$1 = (function (){var statearr_273506 = state_273498;(statearr_273506[8] = inst_273477__$1);
(statearr_273506[10] = inst_273479);
(statearr_273506[9] = inst_273478__$1);
return statearr_273506;
})();if(cljs.core.truth_(inst_273480))
{var statearr_273507_273528 = state_273498__$1;(statearr_273507_273528[1] = 8);
} else
{var statearr_273508_273529 = state_273498__$1;(statearr_273508_273529[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273499 === 8))
{var inst_273477 = (state_273498[8]);var inst_273479 = (state_273498[10]);var inst_273478 = (state_273498[9]);var inst_273470 = (state_273498[7]);var inst_273482 = (function (){var c = inst_273479;var v = inst_273478;var vec__273475 = inst_273477;var cs = inst_273470;return ((function (c,v,vec__273475,cs,inst_273477,inst_273479,inst_273478,inst_273470,state_val_273499){
return (function (p1__273415_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__273415_SHARP_);
});
;})(c,v,vec__273475,cs,inst_273477,inst_273479,inst_273478,inst_273470,state_val_273499))
})();var inst_273483 = cljs.core.filterv.call(null,inst_273482,inst_273470);var inst_273470__$1 = inst_273483;var state_273498__$1 = (function (){var statearr_273509 = state_273498;(statearr_273509[7] = inst_273470__$1);
return statearr_273509;
})();var statearr_273510_273530 = state_273498__$1;(statearr_273510_273530[2] = null);
(statearr_273510_273530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273499 === 9))
{var inst_273478 = (state_273498[9]);var state_273498__$1 = state_273498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_273498__$1,11,out,inst_273478);
} else
{if((state_val_273499 === 10))
{var inst_273490 = (state_273498[2]);var state_273498__$1 = state_273498;var statearr_273512_273531 = state_273498__$1;(statearr_273512_273531[2] = inst_273490);
(statearr_273512_273531[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273499 === 11))
{var inst_273470 = (state_273498[7]);var inst_273487 = (state_273498[2]);var tmp273511 = inst_273470;var inst_273470__$1 = tmp273511;var state_273498__$1 = (function (){var statearr_273513 = state_273498;(statearr_273513[11] = inst_273487);
(statearr_273513[7] = inst_273470__$1);
return statearr_273513;
})();var statearr_273514_273532 = state_273498__$1;(statearr_273514_273532[2] = null);
(statearr_273514_273532[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_273518 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_273518[0] = state_machine__12118__auto__);
(statearr_273518[1] = 1);
return statearr_273518;
});
var state_machine__12118__auto____1 = (function (state_273498){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_273498);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e273519){if((e273519 instanceof Object))
{var ex__12121__auto__ = e273519;var statearr_273520_273533 = state_273498;(statearr_273520_273533[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_273498);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e273519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__273534 = state_273498;
state_273498 = G__273534;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_273498){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_273498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_273521 = f__12188__auto__.call(null);(statearr_273521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___273522);
return statearr_273521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___273627 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_273604){var state_val_273605 = (state_273604[1]);if((state_val_273605 === 1))
{var inst_273581 = 0;var state_273604__$1 = (function (){var statearr_273606 = state_273604;(statearr_273606[7] = inst_273581);
return statearr_273606;
})();var statearr_273607_273628 = state_273604__$1;(statearr_273607_273628[2] = null);
(statearr_273607_273628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273605 === 2))
{var inst_273581 = (state_273604[7]);var inst_273583 = (inst_273581 < n);var state_273604__$1 = state_273604;if(cljs.core.truth_(inst_273583))
{var statearr_273608_273629 = state_273604__$1;(statearr_273608_273629[1] = 4);
} else
{var statearr_273609_273630 = state_273604__$1;(statearr_273609_273630[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273605 === 3))
{var inst_273601 = (state_273604[2]);var inst_273602 = cljs.core.async.close_BANG_.call(null,out);var state_273604__$1 = (function (){var statearr_273610 = state_273604;(statearr_273610[8] = inst_273601);
return statearr_273610;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_273604__$1,inst_273602);
} else
{if((state_val_273605 === 4))
{var state_273604__$1 = state_273604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_273604__$1,7,ch);
} else
{if((state_val_273605 === 5))
{var state_273604__$1 = state_273604;var statearr_273611_273631 = state_273604__$1;(statearr_273611_273631[2] = null);
(statearr_273611_273631[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273605 === 6))
{var inst_273599 = (state_273604[2]);var state_273604__$1 = state_273604;var statearr_273612_273632 = state_273604__$1;(statearr_273612_273632[2] = inst_273599);
(statearr_273612_273632[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273605 === 7))
{var inst_273586 = (state_273604[9]);var inst_273586__$1 = (state_273604[2]);var inst_273587 = (inst_273586__$1 == null);var inst_273588 = cljs.core.not.call(null,inst_273587);var state_273604__$1 = (function (){var statearr_273613 = state_273604;(statearr_273613[9] = inst_273586__$1);
return statearr_273613;
})();if(inst_273588)
{var statearr_273614_273633 = state_273604__$1;(statearr_273614_273633[1] = 8);
} else
{var statearr_273615_273634 = state_273604__$1;(statearr_273615_273634[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273605 === 8))
{var inst_273586 = (state_273604[9]);var state_273604__$1 = state_273604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_273604__$1,11,out,inst_273586);
} else
{if((state_val_273605 === 9))
{var state_273604__$1 = state_273604;var statearr_273616_273635 = state_273604__$1;(statearr_273616_273635[2] = null);
(statearr_273616_273635[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273605 === 10))
{var inst_273596 = (state_273604[2]);var state_273604__$1 = state_273604;var statearr_273617_273636 = state_273604__$1;(statearr_273617_273636[2] = inst_273596);
(statearr_273617_273636[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273605 === 11))
{var inst_273581 = (state_273604[7]);var inst_273591 = (state_273604[2]);var inst_273592 = (inst_273581 + 1);var inst_273581__$1 = inst_273592;var state_273604__$1 = (function (){var statearr_273618 = state_273604;(statearr_273618[10] = inst_273591);
(statearr_273618[7] = inst_273581__$1);
return statearr_273618;
})();var statearr_273619_273637 = state_273604__$1;(statearr_273619_273637[2] = null);
(statearr_273619_273637[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_273623 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_273623[0] = state_machine__12118__auto__);
(statearr_273623[1] = 1);
return statearr_273623;
});
var state_machine__12118__auto____1 = (function (state_273604){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_273604);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e273624){if((e273624 instanceof Object))
{var ex__12121__auto__ = e273624;var statearr_273625_273638 = state_273604;(statearr_273625_273638[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_273604);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e273624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__273639 = state_273604;
state_273604 = G__273639;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_273604){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_273604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_273626 = f__12188__auto__.call(null);(statearr_273626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___273627);
return statearr_273626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___273736 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_273711){var state_val_273712 = (state_273711[1]);if((state_val_273712 === 1))
{var inst_273688 = null;var state_273711__$1 = (function (){var statearr_273713 = state_273711;(statearr_273713[7] = inst_273688);
return statearr_273713;
})();var statearr_273714_273737 = state_273711__$1;(statearr_273714_273737[2] = null);
(statearr_273714_273737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273712 === 2))
{var state_273711__$1 = state_273711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_273711__$1,4,ch);
} else
{if((state_val_273712 === 3))
{var inst_273708 = (state_273711[2]);var inst_273709 = cljs.core.async.close_BANG_.call(null,out);var state_273711__$1 = (function (){var statearr_273715 = state_273711;(statearr_273715[8] = inst_273708);
return statearr_273715;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_273711__$1,inst_273709);
} else
{if((state_val_273712 === 4))
{var inst_273691 = (state_273711[9]);var inst_273691__$1 = (state_273711[2]);var inst_273692 = (inst_273691__$1 == null);var inst_273693 = cljs.core.not.call(null,inst_273692);var state_273711__$1 = (function (){var statearr_273716 = state_273711;(statearr_273716[9] = inst_273691__$1);
return statearr_273716;
})();if(inst_273693)
{var statearr_273717_273738 = state_273711__$1;(statearr_273717_273738[1] = 5);
} else
{var statearr_273718_273739 = state_273711__$1;(statearr_273718_273739[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273712 === 5))
{var inst_273691 = (state_273711[9]);var inst_273688 = (state_273711[7]);var inst_273695 = cljs.core._EQ_.call(null,inst_273691,inst_273688);var state_273711__$1 = state_273711;if(inst_273695)
{var statearr_273719_273740 = state_273711__$1;(statearr_273719_273740[1] = 8);
} else
{var statearr_273720_273741 = state_273711__$1;(statearr_273720_273741[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273712 === 6))
{var state_273711__$1 = state_273711;var statearr_273722_273742 = state_273711__$1;(statearr_273722_273742[2] = null);
(statearr_273722_273742[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273712 === 7))
{var inst_273706 = (state_273711[2]);var state_273711__$1 = state_273711;var statearr_273723_273743 = state_273711__$1;(statearr_273723_273743[2] = inst_273706);
(statearr_273723_273743[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273712 === 8))
{var inst_273688 = (state_273711[7]);var tmp273721 = inst_273688;var inst_273688__$1 = tmp273721;var state_273711__$1 = (function (){var statearr_273724 = state_273711;(statearr_273724[7] = inst_273688__$1);
return statearr_273724;
})();var statearr_273725_273744 = state_273711__$1;(statearr_273725_273744[2] = null);
(statearr_273725_273744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273712 === 9))
{var inst_273691 = (state_273711[9]);var state_273711__$1 = state_273711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_273711__$1,11,out,inst_273691);
} else
{if((state_val_273712 === 10))
{var inst_273703 = (state_273711[2]);var state_273711__$1 = state_273711;var statearr_273726_273745 = state_273711__$1;(statearr_273726_273745[2] = inst_273703);
(statearr_273726_273745[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273712 === 11))
{var inst_273691 = (state_273711[9]);var inst_273700 = (state_273711[2]);var inst_273688 = inst_273691;var state_273711__$1 = (function (){var statearr_273727 = state_273711;(statearr_273727[10] = inst_273700);
(statearr_273727[7] = inst_273688);
return statearr_273727;
})();var statearr_273728_273746 = state_273711__$1;(statearr_273728_273746[2] = null);
(statearr_273728_273746[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_273732 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_273732[0] = state_machine__12118__auto__);
(statearr_273732[1] = 1);
return statearr_273732;
});
var state_machine__12118__auto____1 = (function (state_273711){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_273711);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e273733){if((e273733 instanceof Object))
{var ex__12121__auto__ = e273733;var statearr_273734_273747 = state_273711;(statearr_273734_273747[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_273711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e273733;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__273748 = state_273711;
state_273711 = G__273748;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_273711){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_273711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_273735 = f__12188__auto__.call(null);(statearr_273735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___273736);
return statearr_273735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___273883 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_273853){var state_val_273854 = (state_273853[1]);if((state_val_273854 === 1))
{var inst_273816 = (new Array(n));var inst_273817 = inst_273816;var inst_273818 = 0;var state_273853__$1 = (function (){var statearr_273855 = state_273853;(statearr_273855[7] = inst_273818);
(statearr_273855[8] = inst_273817);
return statearr_273855;
})();var statearr_273856_273884 = state_273853__$1;(statearr_273856_273884[2] = null);
(statearr_273856_273884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273854 === 2))
{var state_273853__$1 = state_273853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_273853__$1,4,ch);
} else
{if((state_val_273854 === 3))
{var inst_273851 = (state_273853[2]);var state_273853__$1 = state_273853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_273853__$1,inst_273851);
} else
{if((state_val_273854 === 4))
{var inst_273821 = (state_273853[9]);var inst_273821__$1 = (state_273853[2]);var inst_273822 = (inst_273821__$1 == null);var inst_273823 = cljs.core.not.call(null,inst_273822);var state_273853__$1 = (function (){var statearr_273857 = state_273853;(statearr_273857[9] = inst_273821__$1);
return statearr_273857;
})();if(inst_273823)
{var statearr_273858_273885 = state_273853__$1;(statearr_273858_273885[1] = 5);
} else
{var statearr_273859_273886 = state_273853__$1;(statearr_273859_273886[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273854 === 5))
{var inst_273818 = (state_273853[7]);var inst_273817 = (state_273853[8]);var inst_273821 = (state_273853[9]);var inst_273826 = (state_273853[10]);var inst_273825 = (inst_273817[inst_273818] = inst_273821);var inst_273826__$1 = (inst_273818 + 1);var inst_273827 = (inst_273826__$1 < n);var state_273853__$1 = (function (){var statearr_273860 = state_273853;(statearr_273860[11] = inst_273825);
(statearr_273860[10] = inst_273826__$1);
return statearr_273860;
})();if(cljs.core.truth_(inst_273827))
{var statearr_273861_273887 = state_273853__$1;(statearr_273861_273887[1] = 8);
} else
{var statearr_273862_273888 = state_273853__$1;(statearr_273862_273888[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273854 === 6))
{var inst_273818 = (state_273853[7]);var inst_273839 = (inst_273818 > 0);var state_273853__$1 = state_273853;if(cljs.core.truth_(inst_273839))
{var statearr_273864_273889 = state_273853__$1;(statearr_273864_273889[1] = 12);
} else
{var statearr_273865_273890 = state_273853__$1;(statearr_273865_273890[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273854 === 7))
{var inst_273849 = (state_273853[2]);var state_273853__$1 = state_273853;var statearr_273866_273891 = state_273853__$1;(statearr_273866_273891[2] = inst_273849);
(statearr_273866_273891[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273854 === 8))
{var inst_273817 = (state_273853[8]);var inst_273826 = (state_273853[10]);var tmp273863 = inst_273817;var inst_273817__$1 = tmp273863;var inst_273818 = inst_273826;var state_273853__$1 = (function (){var statearr_273867 = state_273853;(statearr_273867[7] = inst_273818);
(statearr_273867[8] = inst_273817__$1);
return statearr_273867;
})();var statearr_273868_273892 = state_273853__$1;(statearr_273868_273892[2] = null);
(statearr_273868_273892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273854 === 9))
{var inst_273817 = (state_273853[8]);var inst_273831 = cljs.core.vec.call(null,inst_273817);var state_273853__$1 = state_273853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_273853__$1,11,out,inst_273831);
} else
{if((state_val_273854 === 10))
{var inst_273837 = (state_273853[2]);var state_273853__$1 = state_273853;var statearr_273869_273893 = state_273853__$1;(statearr_273869_273893[2] = inst_273837);
(statearr_273869_273893[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273854 === 11))
{var inst_273833 = (state_273853[2]);var inst_273834 = (new Array(n));var inst_273817 = inst_273834;var inst_273818 = 0;var state_273853__$1 = (function (){var statearr_273870 = state_273853;(statearr_273870[7] = inst_273818);
(statearr_273870[8] = inst_273817);
(statearr_273870[12] = inst_273833);
return statearr_273870;
})();var statearr_273871_273894 = state_273853__$1;(statearr_273871_273894[2] = null);
(statearr_273871_273894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273854 === 12))
{var inst_273817 = (state_273853[8]);var inst_273841 = cljs.core.vec.call(null,inst_273817);var state_273853__$1 = state_273853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_273853__$1,15,out,inst_273841);
} else
{if((state_val_273854 === 13))
{var state_273853__$1 = state_273853;var statearr_273872_273895 = state_273853__$1;(statearr_273872_273895[2] = null);
(statearr_273872_273895[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273854 === 14))
{var inst_273846 = (state_273853[2]);var inst_273847 = cljs.core.async.close_BANG_.call(null,out);var state_273853__$1 = (function (){var statearr_273873 = state_273853;(statearr_273873[13] = inst_273846);
return statearr_273873;
})();var statearr_273874_273896 = state_273853__$1;(statearr_273874_273896[2] = inst_273847);
(statearr_273874_273896[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_273854 === 15))
{var inst_273843 = (state_273853[2]);var state_273853__$1 = state_273853;var statearr_273875_273897 = state_273853__$1;(statearr_273875_273897[2] = inst_273843);
(statearr_273875_273897[1] = 14);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_273879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_273879[0] = state_machine__12118__auto__);
(statearr_273879[1] = 1);
return statearr_273879;
});
var state_machine__12118__auto____1 = (function (state_273853){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_273853);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e273880){if((e273880 instanceof Object))
{var ex__12121__auto__ = e273880;var statearr_273881_273898 = state_273853;(statearr_273881_273898[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_273853);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e273880;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__273899 = state_273853;
state_273853 = G__273899;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_273853){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_273853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_273882 = f__12188__auto__.call(null);(statearr_273882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___273883);
return statearr_273882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___274042 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_274012){var state_val_274013 = (state_274012[1]);if((state_val_274013 === 1))
{var inst_273971 = [];var inst_273972 = inst_273971;var inst_273973 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_274012__$1 = (function (){var statearr_274014 = state_274012;(statearr_274014[7] = inst_273973);
(statearr_274014[8] = inst_273972);
return statearr_274014;
})();var statearr_274015_274043 = state_274012__$1;(statearr_274015_274043[2] = null);
(statearr_274015_274043[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_274013 === 2))
{var state_274012__$1 = state_274012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_274012__$1,4,ch);
} else
{if((state_val_274013 === 3))
{var inst_274010 = (state_274012[2]);var state_274012__$1 = state_274012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_274012__$1,inst_274010);
} else
{if((state_val_274013 === 4))
{var inst_273976 = (state_274012[9]);var inst_273976__$1 = (state_274012[2]);var inst_273977 = (inst_273976__$1 == null);var inst_273978 = cljs.core.not.call(null,inst_273977);var state_274012__$1 = (function (){var statearr_274016 = state_274012;(statearr_274016[9] = inst_273976__$1);
return statearr_274016;
})();if(inst_273978)
{var statearr_274017_274044 = state_274012__$1;(statearr_274017_274044[1] = 5);
} else
{var statearr_274018_274045 = state_274012__$1;(statearr_274018_274045[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_274013 === 5))
{var inst_273973 = (state_274012[7]);var inst_273976 = (state_274012[9]);var inst_273980 = (state_274012[10]);var inst_273980__$1 = f.call(null,inst_273976);var inst_273981 = cljs.core._EQ_.call(null,inst_273980__$1,inst_273973);var inst_273982 = cljs.core.keyword_identical_QMARK_.call(null,inst_273973,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_273983 = (inst_273981) || (inst_273982);var state_274012__$1 = (function (){var statearr_274019 = state_274012;(statearr_274019[10] = inst_273980__$1);
return statearr_274019;
})();if(cljs.core.truth_(inst_273983))
{var statearr_274020_274046 = state_274012__$1;(statearr_274020_274046[1] = 8);
} else
{var statearr_274021_274047 = state_274012__$1;(statearr_274021_274047[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_274013 === 6))
{var inst_273972 = (state_274012[8]);var inst_273997 = inst_273972.length;var inst_273998 = (inst_273997 > 0);var state_274012__$1 = state_274012;if(cljs.core.truth_(inst_273998))
{var statearr_274023_274048 = state_274012__$1;(statearr_274023_274048[1] = 12);
} else
{var statearr_274024_274049 = state_274012__$1;(statearr_274024_274049[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_274013 === 7))
{var inst_274008 = (state_274012[2]);var state_274012__$1 = state_274012;var statearr_274025_274050 = state_274012__$1;(statearr_274025_274050[2] = inst_274008);
(statearr_274025_274050[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_274013 === 8))
{var inst_273976 = (state_274012[9]);var inst_273980 = (state_274012[10]);var inst_273972 = (state_274012[8]);var inst_273985 = inst_273972.push(inst_273976);var tmp274022 = inst_273972;var inst_273972__$1 = tmp274022;var inst_273973 = inst_273980;var state_274012__$1 = (function (){var statearr_274026 = state_274012;(statearr_274026[7] = inst_273973);
(statearr_274026[11] = inst_273985);
(statearr_274026[8] = inst_273972__$1);
return statearr_274026;
})();var statearr_274027_274051 = state_274012__$1;(statearr_274027_274051[2] = null);
(statearr_274027_274051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_274013 === 9))
{var inst_273972 = (state_274012[8]);var inst_273988 = cljs.core.vec.call(null,inst_273972);var state_274012__$1 = state_274012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_274012__$1,11,out,inst_273988);
} else
{if((state_val_274013 === 10))
{var inst_273995 = (state_274012[2]);var state_274012__$1 = state_274012;var statearr_274028_274052 = state_274012__$1;(statearr_274028_274052[2] = inst_273995);
(statearr_274028_274052[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_274013 === 11))
{var inst_273976 = (state_274012[9]);var inst_273980 = (state_274012[10]);var inst_273990 = (state_274012[2]);var inst_273991 = [];var inst_273992 = inst_273991.push(inst_273976);var inst_273972 = inst_273991;var inst_273973 = inst_273980;var state_274012__$1 = (function (){var statearr_274029 = state_274012;(statearr_274029[7] = inst_273973);
(statearr_274029[12] = inst_273992);
(statearr_274029[13] = inst_273990);
(statearr_274029[8] = inst_273972);
return statearr_274029;
})();var statearr_274030_274053 = state_274012__$1;(statearr_274030_274053[2] = null);
(statearr_274030_274053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_274013 === 12))
{var inst_273972 = (state_274012[8]);var inst_274000 = cljs.core.vec.call(null,inst_273972);var state_274012__$1 = state_274012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_274012__$1,15,out,inst_274000);
} else
{if((state_val_274013 === 13))
{var state_274012__$1 = state_274012;var statearr_274031_274054 = state_274012__$1;(statearr_274031_274054[2] = null);
(statearr_274031_274054[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_274013 === 14))
{var inst_274005 = (state_274012[2]);var inst_274006 = cljs.core.async.close_BANG_.call(null,out);var state_274012__$1 = (function (){var statearr_274032 = state_274012;(statearr_274032[14] = inst_274005);
return statearr_274032;
})();var statearr_274033_274055 = state_274012__$1;(statearr_274033_274055[2] = inst_274006);
(statearr_274033_274055[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_274013 === 15))
{var inst_274002 = (state_274012[2]);var state_274012__$1 = state_274012;var statearr_274034_274056 = state_274012__$1;(statearr_274034_274056[2] = inst_274002);
(statearr_274034_274056[1] = 14);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_274038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_274038[0] = state_machine__12118__auto__);
(statearr_274038[1] = 1);
return statearr_274038;
});
var state_machine__12118__auto____1 = (function (state_274012){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_274012);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e274039){if((e274039 instanceof Object))
{var ex__12121__auto__ = e274039;var statearr_274040_274057 = state_274012;(statearr_274040_274057[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_274012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e274039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__274058 = state_274012;
state_274012 = G__274058;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_274012){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_274012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_274041 = f__12188__auto__.call(null);(statearr_274041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___274042);
return statearr_274041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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