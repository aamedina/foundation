// Compiled by ClojureScript 0.0-2030
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34318 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34318 = (function (f,fn_handler,meta34319){
this.f = f;
this.fn_handler = fn_handler;
this.meta34319 = meta34319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34318.cljs$lang$type = true;
cljs.core.async.t34318.cljs$lang$ctorStr = "cljs.core.async/t34318";
cljs.core.async.t34318.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t34318");
});
cljs.core.async.t34318.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34318.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34318.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34320){var self__ = this;
var _34320__$1 = this;return self__.meta34319;
});
cljs.core.async.t34318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34320,meta34319__$1){var self__ = this;
var _34320__$1 = this;return (new cljs.core.async.t34318(self__.f,self__.fn_handler,meta34319__$1));
});
cljs.core.async.__GT_t34318 = (function __GT_t34318(f__$1,fn_handler__$1,meta34319){return (new cljs.core.async.t34318(f__$1,fn_handler__$1,meta34319));
});
}
return (new cljs.core.async.t34318(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34322 = buff;if(G__34322)
{var bit__8257__auto__ = null;if(cljs.core.truth_((function (){var or__7638__auto__ = bit__8257__auto__;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return G__34322.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34322.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34322);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34322);
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
{var val_34323 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34323);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34323);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7629__auto__ = ret;if(cljs.core.truth_(and__7629__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7629__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8427__auto___34324 = n;var x_34325 = 0;while(true){
if((x_34325 < n__8427__auto___34324))
{(a[x_34325] = 0);
{
var G__34326 = (x_34325 + 1);
x_34325 = G__34326;
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
var G__34327 = (i + 1);
i = G__34327;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34331 = (function (flag,alt_flag,meta34332){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34332 = meta34332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34331.cljs$lang$type = true;
cljs.core.async.t34331.cljs$lang$ctorStr = "cljs.core.async/t34331";
cljs.core.async.t34331.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t34331");
});
cljs.core.async.t34331.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34333){var self__ = this;
var _34333__$1 = this;return self__.meta34332;
});
cljs.core.async.t34331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34333,meta34332__$1){var self__ = this;
var _34333__$1 = this;return (new cljs.core.async.t34331(self__.flag,self__.alt_flag,meta34332__$1));
});
cljs.core.async.__GT_t34331 = (function __GT_t34331(flag__$1,alt_flag__$1,meta34332){return (new cljs.core.async.t34331(flag__$1,alt_flag__$1,meta34332));
});
}
return (new cljs.core.async.t34331(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34337 = (function (cb,flag,alt_handler,meta34338){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34338 = meta34338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34337.cljs$lang$type = true;
cljs.core.async.t34337.cljs$lang$ctorStr = "cljs.core.async/t34337";
cljs.core.async.t34337.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t34337");
});
cljs.core.async.t34337.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34339){var self__ = this;
var _34339__$1 = this;return self__.meta34338;
});
cljs.core.async.t34337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34339,meta34338__$1){var self__ = this;
var _34339__$1 = this;return (new cljs.core.async.t34337(self__.cb,self__.flag,self__.alt_handler,meta34338__$1));
});
cljs.core.async.__GT_t34337 = (function __GT_t34337(cb__$1,flag__$1,alt_handler__$1,meta34338){return (new cljs.core.async.t34337(cb__$1,flag__$1,alt_handler__$1,meta34338));
});
}
return (new cljs.core.async.t34337(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34340_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__34340_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__7638__auto__ = wport;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__34341 = (i + 1);
i = G__34341;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7638__auto__ = ret;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7629__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7629__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7629__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
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
var alts_BANG___delegate = function (ports,p__34342){var map__34344 = p__34342;var map__34344__$1 = ((cljs.core.seq_QMARK_.call(null,map__34344))?cljs.core.apply.call(null,cljs.core.hash_map,map__34344):map__34344);var opts = map__34344__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34342 = null;if (arguments.length > 1) {
  p__34342 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34342);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34345){
var ports = cljs.core.first(arglist__34345);
var p__34342 = cljs.core.rest(arglist__34345);
return alts_BANG___delegate(ports,p__34342);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34353 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34353 = (function (ch,f,map_LT_,meta34354){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34354 = meta34354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34353.cljs$lang$type = true;
cljs.core.async.t34353.cljs$lang$ctorStr = "cljs.core.async/t34353";
cljs.core.async.t34353.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t34353");
});
cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34356 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34356 = (function (fn1,_,meta34354,ch,f,map_LT_,meta34357){
this.fn1 = fn1;
this._ = _;
this.meta34354 = meta34354;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34357 = meta34357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34356.cljs$lang$type = true;
cljs.core.async.t34356.cljs$lang$ctorStr = "cljs.core.async/t34356";
cljs.core.async.t34356.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t34356");
});
cljs.core.async.t34356.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34356.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34346_SHARP_){return f1.call(null,(((p1__34346_SHARP_ == null))?null:self__.f.call(null,p1__34346_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34358){var self__ = this;
var _34358__$1 = this;return self__.meta34357;
});
cljs.core.async.t34356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34358,meta34357__$1){var self__ = this;
var _34358__$1 = this;return (new cljs.core.async.t34356(self__.fn1,self__._,self__.meta34354,self__.ch,self__.f,self__.map_LT_,meta34357__$1));
});
cljs.core.async.__GT_t34356 = (function __GT_t34356(fn1__$1,___$2,meta34354__$1,ch__$2,f__$2,map_LT___$2,meta34357){return (new cljs.core.async.t34356(fn1__$1,___$2,meta34354__$1,ch__$2,f__$2,map_LT___$2,meta34357));
});
}
return (new cljs.core.async.t34356(fn1,___$1,self__.meta34354,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7629__auto__ = ret;if(cljs.core.truth_(and__7629__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7629__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34355){var self__ = this;
var _34355__$1 = this;return self__.meta34354;
});
cljs.core.async.t34353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34355,meta34354__$1){var self__ = this;
var _34355__$1 = this;return (new cljs.core.async.t34353(self__.ch,self__.f,self__.map_LT_,meta34354__$1));
});
cljs.core.async.__GT_t34353 = (function __GT_t34353(ch__$1,f__$1,map_LT___$1,meta34354){return (new cljs.core.async.t34353(ch__$1,f__$1,map_LT___$1,meta34354));
});
}
return (new cljs.core.async.t34353(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34362 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34362 = (function (ch,f,map_GT_,meta34363){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34363 = meta34363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34362.cljs$lang$type = true;
cljs.core.async.t34362.cljs$lang$ctorStr = "cljs.core.async/t34362";
cljs.core.async.t34362.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t34362");
});
cljs.core.async.t34362.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34362.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34362.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34364){var self__ = this;
var _34364__$1 = this;return self__.meta34363;
});
cljs.core.async.t34362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34364,meta34363__$1){var self__ = this;
var _34364__$1 = this;return (new cljs.core.async.t34362(self__.ch,self__.f,self__.map_GT_,meta34363__$1));
});
cljs.core.async.__GT_t34362 = (function __GT_t34362(ch__$1,f__$1,map_GT___$1,meta34363){return (new cljs.core.async.t34362(ch__$1,f__$1,map_GT___$1,meta34363));
});
}
return (new cljs.core.async.t34362(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34368 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34368 = (function (ch,p,filter_GT_,meta34369){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34369 = meta34369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34368.cljs$lang$type = true;
cljs.core.async.t34368.cljs$lang$ctorStr = "cljs.core.async/t34368";
cljs.core.async.t34368.cljs$lang$ctorPrWriter = (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t34368");
});
cljs.core.async.t34368.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34368.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34368.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34370){var self__ = this;
var _34370__$1 = this;return self__.meta34369;
});
cljs.core.async.t34368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34370,meta34369__$1){var self__ = this;
var _34370__$1 = this;return (new cljs.core.async.t34368(self__.ch,self__.p,self__.filter_GT_,meta34369__$1));
});
cljs.core.async.__GT_t34368 = (function __GT_t34368(ch__$1,p__$1,filter_GT___$1,meta34369){return (new cljs.core.async.t34368(ch__$1,p__$1,filter_GT___$1,meta34369));
});
}
return (new cljs.core.async.t34368(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___34453 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_34432){var state_val_34433 = (state_34432[1]);if((state_val_34433 === 1))
{var state_34432__$1 = state_34432;var statearr_34434_34454 = state_34432__$1;(statearr_34434_34454[2] = null);
(statearr_34434_34454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34433 === 2))
{var state_34432__$1 = state_34432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34432__$1,4,ch);
} else
{if((state_val_34433 === 3))
{var inst_34430 = (state_34432[2]);var state_34432__$1 = state_34432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34432__$1,inst_34430);
} else
{if((state_val_34433 === 4))
{var inst_34414 = (state_34432[7]);var inst_34414__$1 = (state_34432[2]);var inst_34415 = (inst_34414__$1 == null);var state_34432__$1 = (function (){var statearr_34435 = state_34432;(statearr_34435[7] = inst_34414__$1);
return statearr_34435;
})();if(cljs.core.truth_(inst_34415))
{var statearr_34436_34455 = state_34432__$1;(statearr_34436_34455[1] = 5);
} else
{var statearr_34437_34456 = state_34432__$1;(statearr_34437_34456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34433 === 5))
{var inst_34417 = cljs.core.async.close_BANG_.call(null,out);var state_34432__$1 = state_34432;var statearr_34438_34457 = state_34432__$1;(statearr_34438_34457[2] = inst_34417);
(statearr_34438_34457[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34433 === 6))
{var inst_34414 = (state_34432[7]);var inst_34419 = p.call(null,inst_34414);var state_34432__$1 = state_34432;if(cljs.core.truth_(inst_34419))
{var statearr_34439_34458 = state_34432__$1;(statearr_34439_34458[1] = 8);
} else
{var statearr_34440_34459 = state_34432__$1;(statearr_34440_34459[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34433 === 7))
{var inst_34428 = (state_34432[2]);var state_34432__$1 = state_34432;var statearr_34441_34460 = state_34432__$1;(statearr_34441_34460[2] = inst_34428);
(statearr_34441_34460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34433 === 8))
{var inst_34414 = (state_34432[7]);var state_34432__$1 = state_34432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34432__$1,11,out,inst_34414);
} else
{if((state_val_34433 === 9))
{var state_34432__$1 = state_34432;var statearr_34442_34461 = state_34432__$1;(statearr_34442_34461[2] = null);
(statearr_34442_34461[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34433 === 10))
{var inst_34425 = (state_34432[2]);var state_34432__$1 = (function (){var statearr_34443 = state_34432;(statearr_34443[8] = inst_34425);
return statearr_34443;
})();var statearr_34444_34462 = state_34432__$1;(statearr_34444_34462[2] = null);
(statearr_34444_34462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34433 === 11))
{var inst_34422 = (state_34432[2]);var state_34432__$1 = state_34432;var statearr_34445_34463 = state_34432__$1;(statearr_34445_34463[2] = inst_34422);
(statearr_34445_34463[1] = 10);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_34449 = (new Array(9));(statearr_34449[0] = state_machine__12859__auto__);
(statearr_34449[1] = 1);
return statearr_34449;
});
var state_machine__12859__auto____1 = (function (state_34432){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_34432);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e34450){if((e34450 instanceof Object))
{var ex__12862__auto__ = e34450;var statearr_34451_34464 = state_34432;(statearr_34451_34464[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34465 = state_34432;
state_34432 = G__34465;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_34432){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_34432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_34452 = f__12991__auto__.call(null);(statearr_34452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___34453);
return statearr_34452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12990__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_34617){var state_val_34618 = (state_34617[1]);if((state_val_34618 === 1))
{var state_34617__$1 = state_34617;var statearr_34619_34656 = state_34617__$1;(statearr_34619_34656[2] = null);
(statearr_34619_34656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 2))
{var state_34617__$1 = state_34617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34617__$1,4,in$);
} else
{if((state_val_34618 === 3))
{var inst_34615 = (state_34617[2]);var state_34617__$1 = state_34617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34617__$1,inst_34615);
} else
{if((state_val_34618 === 4))
{var inst_34563 = (state_34617[7]);var inst_34563__$1 = (state_34617[2]);var inst_34564 = (inst_34563__$1 == null);var state_34617__$1 = (function (){var statearr_34620 = state_34617;(statearr_34620[7] = inst_34563__$1);
return statearr_34620;
})();if(cljs.core.truth_(inst_34564))
{var statearr_34621_34657 = state_34617__$1;(statearr_34621_34657[1] = 5);
} else
{var statearr_34622_34658 = state_34617__$1;(statearr_34622_34658[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 5))
{var inst_34566 = cljs.core.async.close_BANG_.call(null,out);var state_34617__$1 = state_34617;var statearr_34623_34659 = state_34617__$1;(statearr_34623_34659[2] = inst_34566);
(statearr_34623_34659[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 6))
{var inst_34563 = (state_34617[7]);var inst_34568 = f.call(null,inst_34563);var inst_34573 = cljs.core.seq.call(null,inst_34568);var inst_34574 = inst_34573;var inst_34575 = null;var inst_34576 = 0;var inst_34577 = 0;var state_34617__$1 = (function (){var statearr_34624 = state_34617;(statearr_34624[8] = inst_34577);
(statearr_34624[9] = inst_34576);
(statearr_34624[10] = inst_34575);
(statearr_34624[11] = inst_34574);
return statearr_34624;
})();var statearr_34625_34660 = state_34617__$1;(statearr_34625_34660[2] = null);
(statearr_34625_34660[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 7))
{var inst_34613 = (state_34617[2]);var state_34617__$1 = state_34617;var statearr_34626_34661 = state_34617__$1;(statearr_34626_34661[2] = inst_34613);
(statearr_34626_34661[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 8))
{var inst_34577 = (state_34617[8]);var inst_34576 = (state_34617[9]);var inst_34579 = (inst_34577 < inst_34576);var inst_34580 = inst_34579;var state_34617__$1 = state_34617;if(cljs.core.truth_(inst_34580))
{var statearr_34627_34662 = state_34617__$1;(statearr_34627_34662[1] = 10);
} else
{var statearr_34628_34663 = state_34617__$1;(statearr_34628_34663[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 9))
{var inst_34610 = (state_34617[2]);var state_34617__$1 = (function (){var statearr_34629 = state_34617;(statearr_34629[12] = inst_34610);
return statearr_34629;
})();var statearr_34630_34664 = state_34617__$1;(statearr_34630_34664[2] = null);
(statearr_34630_34664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 10))
{var inst_34577 = (state_34617[8]);var inst_34575 = (state_34617[10]);var inst_34582 = cljs.core._nth.call(null,inst_34575,inst_34577);var state_34617__$1 = state_34617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34617__$1,13,out,inst_34582);
} else
{if((state_val_34618 === 11))
{var inst_34574 = (state_34617[11]);var inst_34588 = (state_34617[13]);var inst_34588__$1 = cljs.core.seq.call(null,inst_34574);var state_34617__$1 = (function (){var statearr_34634 = state_34617;(statearr_34634[13] = inst_34588__$1);
return statearr_34634;
})();if(inst_34588__$1)
{var statearr_34635_34665 = state_34617__$1;(statearr_34635_34665[1] = 14);
} else
{var statearr_34636_34666 = state_34617__$1;(statearr_34636_34666[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 12))
{var inst_34608 = (state_34617[2]);var state_34617__$1 = state_34617;var statearr_34637_34667 = state_34617__$1;(statearr_34637_34667[2] = inst_34608);
(statearr_34637_34667[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 13))
{var inst_34577 = (state_34617[8]);var inst_34576 = (state_34617[9]);var inst_34575 = (state_34617[10]);var inst_34574 = (state_34617[11]);var inst_34584 = (state_34617[2]);var inst_34585 = (inst_34577 + 1);var tmp34631 = inst_34576;var tmp34632 = inst_34575;var tmp34633 = inst_34574;var inst_34574__$1 = tmp34633;var inst_34575__$1 = tmp34632;var inst_34576__$1 = tmp34631;var inst_34577__$1 = inst_34585;var state_34617__$1 = (function (){var statearr_34638 = state_34617;(statearr_34638[8] = inst_34577__$1);
(statearr_34638[9] = inst_34576__$1);
(statearr_34638[10] = inst_34575__$1);
(statearr_34638[11] = inst_34574__$1);
(statearr_34638[14] = inst_34584);
return statearr_34638;
})();var statearr_34639_34668 = state_34617__$1;(statearr_34639_34668[2] = null);
(statearr_34639_34668[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 14))
{var inst_34588 = (state_34617[13]);var inst_34590 = cljs.core.chunked_seq_QMARK_.call(null,inst_34588);var state_34617__$1 = state_34617;if(inst_34590)
{var statearr_34640_34669 = state_34617__$1;(statearr_34640_34669[1] = 17);
} else
{var statearr_34641_34670 = state_34617__$1;(statearr_34641_34670[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 15))
{var state_34617__$1 = state_34617;var statearr_34642_34671 = state_34617__$1;(statearr_34642_34671[2] = null);
(statearr_34642_34671[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 16))
{var inst_34606 = (state_34617[2]);var state_34617__$1 = state_34617;var statearr_34643_34672 = state_34617__$1;(statearr_34643_34672[2] = inst_34606);
(statearr_34643_34672[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 17))
{var inst_34588 = (state_34617[13]);var inst_34592 = cljs.core.chunk_first.call(null,inst_34588);var inst_34593 = cljs.core.chunk_rest.call(null,inst_34588);var inst_34594 = cljs.core.count.call(null,inst_34592);var inst_34574 = inst_34593;var inst_34575 = inst_34592;var inst_34576 = inst_34594;var inst_34577 = 0;var state_34617__$1 = (function (){var statearr_34644 = state_34617;(statearr_34644[8] = inst_34577);
(statearr_34644[9] = inst_34576);
(statearr_34644[10] = inst_34575);
(statearr_34644[11] = inst_34574);
return statearr_34644;
})();var statearr_34645_34673 = state_34617__$1;(statearr_34645_34673[2] = null);
(statearr_34645_34673[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 18))
{var inst_34588 = (state_34617[13]);var inst_34597 = cljs.core.first.call(null,inst_34588);var state_34617__$1 = state_34617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34617__$1,20,out,inst_34597);
} else
{if((state_val_34618 === 19))
{var inst_34603 = (state_34617[2]);var state_34617__$1 = state_34617;var statearr_34646_34674 = state_34617__$1;(statearr_34646_34674[2] = inst_34603);
(statearr_34646_34674[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34618 === 20))
{var inst_34588 = (state_34617[13]);var inst_34599 = (state_34617[2]);var inst_34600 = cljs.core.next.call(null,inst_34588);var inst_34574 = inst_34600;var inst_34575 = null;var inst_34576 = 0;var inst_34577 = 0;var state_34617__$1 = (function (){var statearr_34647 = state_34617;(statearr_34647[8] = inst_34577);
(statearr_34647[9] = inst_34576);
(statearr_34647[10] = inst_34575);
(statearr_34647[11] = inst_34574);
(statearr_34647[15] = inst_34599);
return statearr_34647;
})();var statearr_34648_34675 = state_34617__$1;(statearr_34648_34675[2] = null);
(statearr_34648_34675[1] = 8);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_34652 = (new Array(16));(statearr_34652[0] = state_machine__12859__auto__);
(statearr_34652[1] = 1);
return statearr_34652;
});
var state_machine__12859__auto____1 = (function (state_34617){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_34617);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e34653){if((e34653 instanceof Object))
{var ex__12862__auto__ = e34653;var statearr_34654_34676 = state_34617;(statearr_34654_34676[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34617);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34677 = state_34617;
state_34617 = G__34677;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_34617){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_34617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_34655 = f__12991__auto__.call(null);(statearr_34655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto__);
return statearr_34655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
}));
return c__12990__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12990__auto___34758 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_34737){var state_val_34738 = (state_34737[1]);if((state_val_34738 === 1))
{var state_34737__$1 = state_34737;var statearr_34739_34759 = state_34737__$1;(statearr_34739_34759[2] = null);
(statearr_34739_34759[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34738 === 2))
{var state_34737__$1 = state_34737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34737__$1,4,from);
} else
{if((state_val_34738 === 3))
{var inst_34735 = (state_34737[2]);var state_34737__$1 = state_34737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34737__$1,inst_34735);
} else
{if((state_val_34738 === 4))
{var inst_34720 = (state_34737[7]);var inst_34720__$1 = (state_34737[2]);var inst_34721 = (inst_34720__$1 == null);var state_34737__$1 = (function (){var statearr_34740 = state_34737;(statearr_34740[7] = inst_34720__$1);
return statearr_34740;
})();if(cljs.core.truth_(inst_34721))
{var statearr_34741_34760 = state_34737__$1;(statearr_34741_34760[1] = 5);
} else
{var statearr_34742_34761 = state_34737__$1;(statearr_34742_34761[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34738 === 5))
{var state_34737__$1 = state_34737;if(cljs.core.truth_(close_QMARK_))
{var statearr_34743_34762 = state_34737__$1;(statearr_34743_34762[1] = 8);
} else
{var statearr_34744_34763 = state_34737__$1;(statearr_34744_34763[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34738 === 6))
{var inst_34720 = (state_34737[7]);var state_34737__$1 = state_34737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34737__$1,11,to,inst_34720);
} else
{if((state_val_34738 === 7))
{var inst_34733 = (state_34737[2]);var state_34737__$1 = state_34737;var statearr_34745_34764 = state_34737__$1;(statearr_34745_34764[2] = inst_34733);
(statearr_34745_34764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34738 === 8))
{var inst_34724 = cljs.core.async.close_BANG_.call(null,to);var state_34737__$1 = state_34737;var statearr_34746_34765 = state_34737__$1;(statearr_34746_34765[2] = inst_34724);
(statearr_34746_34765[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34738 === 9))
{var state_34737__$1 = state_34737;var statearr_34747_34766 = state_34737__$1;(statearr_34747_34766[2] = null);
(statearr_34747_34766[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34738 === 10))
{var inst_34727 = (state_34737[2]);var state_34737__$1 = state_34737;var statearr_34748_34767 = state_34737__$1;(statearr_34748_34767[2] = inst_34727);
(statearr_34748_34767[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34738 === 11))
{var inst_34730 = (state_34737[2]);var state_34737__$1 = (function (){var statearr_34749 = state_34737;(statearr_34749[8] = inst_34730);
return statearr_34749;
})();var statearr_34750_34768 = state_34737__$1;(statearr_34750_34768[2] = null);
(statearr_34750_34768[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_34754 = (new Array(9));(statearr_34754[0] = state_machine__12859__auto__);
(statearr_34754[1] = 1);
return statearr_34754;
});
var state_machine__12859__auto____1 = (function (state_34737){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_34737);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e34755){if((e34755 instanceof Object))
{var ex__12862__auto__ = e34755;var statearr_34756_34769 = state_34737;(statearr_34756_34769[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34770 = state_34737;
state_34737 = G__34770;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_34737){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_34737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_34757 = f__12991__auto__.call(null);(statearr_34757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___34758);
return statearr_34757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12990__auto___34857 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_34835){var state_val_34836 = (state_34835[1]);if((state_val_34836 === 1))
{var state_34835__$1 = state_34835;var statearr_34837_34858 = state_34835__$1;(statearr_34837_34858[2] = null);
(statearr_34837_34858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34836 === 2))
{var state_34835__$1 = state_34835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34835__$1,4,ch);
} else
{if((state_val_34836 === 3))
{var inst_34833 = (state_34835[2]);var state_34835__$1 = state_34835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34835__$1,inst_34833);
} else
{if((state_val_34836 === 4))
{var inst_34816 = (state_34835[7]);var inst_34816__$1 = (state_34835[2]);var inst_34817 = (inst_34816__$1 == null);var state_34835__$1 = (function (){var statearr_34838 = state_34835;(statearr_34838[7] = inst_34816__$1);
return statearr_34838;
})();if(cljs.core.truth_(inst_34817))
{var statearr_34839_34859 = state_34835__$1;(statearr_34839_34859[1] = 5);
} else
{var statearr_34840_34860 = state_34835__$1;(statearr_34840_34860[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34836 === 5))
{var inst_34819 = cljs.core.async.close_BANG_.call(null,tc);var inst_34820 = cljs.core.async.close_BANG_.call(null,fc);var state_34835__$1 = (function (){var statearr_34841 = state_34835;(statearr_34841[8] = inst_34819);
return statearr_34841;
})();var statearr_34842_34861 = state_34835__$1;(statearr_34842_34861[2] = inst_34820);
(statearr_34842_34861[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34836 === 6))
{var inst_34816 = (state_34835[7]);var inst_34822 = p.call(null,inst_34816);var state_34835__$1 = state_34835;if(cljs.core.truth_(inst_34822))
{var statearr_34843_34862 = state_34835__$1;(statearr_34843_34862[1] = 9);
} else
{var statearr_34844_34863 = state_34835__$1;(statearr_34844_34863[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34836 === 7))
{var inst_34831 = (state_34835[2]);var state_34835__$1 = state_34835;var statearr_34845_34864 = state_34835__$1;(statearr_34845_34864[2] = inst_34831);
(statearr_34845_34864[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34836 === 8))
{var inst_34828 = (state_34835[2]);var state_34835__$1 = (function (){var statearr_34846 = state_34835;(statearr_34846[9] = inst_34828);
return statearr_34846;
})();var statearr_34847_34865 = state_34835__$1;(statearr_34847_34865[2] = null);
(statearr_34847_34865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34836 === 9))
{var state_34835__$1 = state_34835;var statearr_34848_34866 = state_34835__$1;(statearr_34848_34866[2] = tc);
(statearr_34848_34866[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34836 === 10))
{var state_34835__$1 = state_34835;var statearr_34849_34867 = state_34835__$1;(statearr_34849_34867[2] = fc);
(statearr_34849_34867[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34836 === 11))
{var inst_34816 = (state_34835[7]);var inst_34826 = (state_34835[2]);var state_34835__$1 = state_34835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34835__$1,8,inst_34826,inst_34816);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_34853 = (new Array(10));(statearr_34853[0] = state_machine__12859__auto__);
(statearr_34853[1] = 1);
return statearr_34853;
});
var state_machine__12859__auto____1 = (function (state_34835){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_34835);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e34854){if((e34854 instanceof Object))
{var ex__12862__auto__ = e34854;var statearr_34855_34868 = state_34835;(statearr_34855_34868[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34869 = state_34835;
state_34835 = G__34869;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_34835){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_34835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_34856 = f__12991__auto__.call(null);(statearr_34856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___34857);
return statearr_34856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12990__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_34916){var state_val_34917 = (state_34916[1]);if((state_val_34917 === 7))
{var inst_34912 = (state_34916[2]);var state_34916__$1 = state_34916;var statearr_34918_34934 = state_34916__$1;(statearr_34918_34934[2] = inst_34912);
(statearr_34918_34934[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34917 === 6))
{var inst_34902 = (state_34916[7]);var inst_34905 = (state_34916[8]);var inst_34909 = f.call(null,inst_34902,inst_34905);var inst_34902__$1 = inst_34909;var state_34916__$1 = (function (){var statearr_34919 = state_34916;(statearr_34919[7] = inst_34902__$1);
return statearr_34919;
})();var statearr_34920_34935 = state_34916__$1;(statearr_34920_34935[2] = null);
(statearr_34920_34935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34917 === 5))
{var inst_34902 = (state_34916[7]);var state_34916__$1 = state_34916;var statearr_34921_34936 = state_34916__$1;(statearr_34921_34936[2] = inst_34902);
(statearr_34921_34936[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34917 === 4))
{var inst_34905 = (state_34916[8]);var inst_34905__$1 = (state_34916[2]);var inst_34906 = (inst_34905__$1 == null);var state_34916__$1 = (function (){var statearr_34922 = state_34916;(statearr_34922[8] = inst_34905__$1);
return statearr_34922;
})();if(cljs.core.truth_(inst_34906))
{var statearr_34923_34937 = state_34916__$1;(statearr_34923_34937[1] = 5);
} else
{var statearr_34924_34938 = state_34916__$1;(statearr_34924_34938[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34917 === 3))
{var inst_34914 = (state_34916[2]);var state_34916__$1 = state_34916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34916__$1,inst_34914);
} else
{if((state_val_34917 === 2))
{var state_34916__$1 = state_34916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34916__$1,4,ch);
} else
{if((state_val_34917 === 1))
{var inst_34902 = init;var state_34916__$1 = (function (){var statearr_34925 = state_34916;(statearr_34925[7] = inst_34902);
return statearr_34925;
})();var statearr_34926_34939 = state_34916__$1;(statearr_34926_34939[2] = null);
(statearr_34926_34939[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_34930 = (new Array(9));(statearr_34930[0] = state_machine__12859__auto__);
(statearr_34930[1] = 1);
return statearr_34930;
});
var state_machine__12859__auto____1 = (function (state_34916){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_34916);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e34931){if((e34931 instanceof Object))
{var ex__12862__auto__ = e34931;var statearr_34932_34940 = state_34916;(statearr_34932_34940[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34916);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34941 = state_34916;
state_34916 = G__34941;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_34916){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_34916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_34933 = f__12991__auto__.call(null);(statearr_34933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto__);
return statearr_34933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
}));
return c__12990__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12990__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_35003){var state_val_35004 = (state_35003[1]);if((state_val_35004 === 1))
{var inst_34983 = cljs.core.seq.call(null,coll);var inst_34984 = inst_34983;var state_35003__$1 = (function (){var statearr_35005 = state_35003;(statearr_35005[7] = inst_34984);
return statearr_35005;
})();var statearr_35006_35024 = state_35003__$1;(statearr_35006_35024[2] = null);
(statearr_35006_35024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35004 === 2))
{var inst_34984 = (state_35003[7]);var state_35003__$1 = state_35003;if(cljs.core.truth_(inst_34984))
{var statearr_35007_35025 = state_35003__$1;(statearr_35007_35025[1] = 4);
} else
{var statearr_35008_35026 = state_35003__$1;(statearr_35008_35026[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35004 === 3))
{var inst_35001 = (state_35003[2]);var state_35003__$1 = state_35003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35003__$1,inst_35001);
} else
{if((state_val_35004 === 4))
{var inst_34984 = (state_35003[7]);var inst_34987 = cljs.core.first.call(null,inst_34984);var state_35003__$1 = state_35003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35003__$1,7,ch,inst_34987);
} else
{if((state_val_35004 === 5))
{var state_35003__$1 = state_35003;if(cljs.core.truth_(close_QMARK_))
{var statearr_35009_35027 = state_35003__$1;(statearr_35009_35027[1] = 8);
} else
{var statearr_35010_35028 = state_35003__$1;(statearr_35010_35028[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35004 === 6))
{var inst_34999 = (state_35003[2]);var state_35003__$1 = state_35003;var statearr_35011_35029 = state_35003__$1;(statearr_35011_35029[2] = inst_34999);
(statearr_35011_35029[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35004 === 7))
{var inst_34984 = (state_35003[7]);var inst_34989 = (state_35003[2]);var inst_34990 = cljs.core.next.call(null,inst_34984);var inst_34984__$1 = inst_34990;var state_35003__$1 = (function (){var statearr_35012 = state_35003;(statearr_35012[8] = inst_34989);
(statearr_35012[7] = inst_34984__$1);
return statearr_35012;
})();var statearr_35013_35030 = state_35003__$1;(statearr_35013_35030[2] = null);
(statearr_35013_35030[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35004 === 8))
{var inst_34994 = cljs.core.async.close_BANG_.call(null,ch);var state_35003__$1 = state_35003;var statearr_35014_35031 = state_35003__$1;(statearr_35014_35031[2] = inst_34994);
(statearr_35014_35031[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35004 === 9))
{var state_35003__$1 = state_35003;var statearr_35015_35032 = state_35003__$1;(statearr_35015_35032[2] = null);
(statearr_35015_35032[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35004 === 10))
{var inst_34997 = (state_35003[2]);var state_35003__$1 = state_35003;var statearr_35016_35033 = state_35003__$1;(statearr_35016_35033[2] = inst_34997);
(statearr_35016_35033[1] = 6);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_35020 = (new Array(9));(statearr_35020[0] = state_machine__12859__auto__);
(statearr_35020[1] = 1);
return statearr_35020;
});
var state_machine__12859__auto____1 = (function (state_35003){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_35003);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e35021){if((e35021 instanceof Object))
{var ex__12862__auto__ = e35021;var statearr_35022_35034 = state_35003;(statearr_35022_35034[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35003);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35035 = state_35003;
state_35003 = G__35035;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_35003){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_35003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_35023 = f__12991__auto__.call(null);(statearr_35023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto__);
return statearr_35023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
}));
return c__12990__auto__;
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
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7629__auto__ = _;if(and__7629__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7629__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8234__auto__ = (((_ == null))?null:_);return (function (){var or__7638__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35250 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35250 = (function (cs,ch,mult,meta35251){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35251 = meta35251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35250.cljs$lang$type = true;
cljs.core.async.t35250.cljs$lang$ctorStr = "cljs.core.async/t35250";
cljs.core.async.t35250.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t35250");
});})(cs))
;
cljs.core.async.t35250.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35250.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35250.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35250.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35250.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35252){var self__ = this;
var _35252__$1 = this;return self__.meta35251;
});})(cs))
;
cljs.core.async.t35250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35252,meta35251__$1){var self__ = this;
var _35252__$1 = this;return (new cljs.core.async.t35250(self__.cs,self__.ch,self__.mult,meta35251__$1));
});})(cs))
;
cljs.core.async.__GT_t35250 = ((function (cs){
return (function __GT_t35250(cs__$1,ch__$1,mult__$1,meta35251){return (new cljs.core.async.t35250(cs__$1,ch__$1,mult__$1,meta35251));
});})(cs))
;
}
return (new cljs.core.async.t35250(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12990__auto___35464 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_35382){var state_val_35383 = (state_35382[1]);if((state_val_35383 === 32))
{var inst_35331 = (state_35382[7]);var inst_35255 = (state_35382[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35382,31,Object,null,30);var inst_35338 = cljs.core.async.put_BANG_.call(null,inst_35331,inst_35255,done);var state_35382__$1 = state_35382;var statearr_35384_35465 = state_35382__$1;(statearr_35384_35465[2] = inst_35338);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 1))
{var state_35382__$1 = state_35382;var statearr_35385_35466 = state_35382__$1;(statearr_35385_35466[2] = null);
(statearr_35385_35466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 33))
{var inst_35344 = (state_35382[9]);var inst_35346 = cljs.core.chunked_seq_QMARK_.call(null,inst_35344);var state_35382__$1 = state_35382;if(inst_35346)
{var statearr_35386_35467 = state_35382__$1;(statearr_35386_35467[1] = 36);
} else
{var statearr_35387_35468 = state_35382__$1;(statearr_35387_35468[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 2))
{var state_35382__$1 = state_35382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35382__$1,4,ch);
} else
{if((state_val_35383 === 34))
{var state_35382__$1 = state_35382;var statearr_35388_35469 = state_35382__$1;(statearr_35388_35469[2] = null);
(statearr_35388_35469[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 3))
{var inst_35380 = (state_35382[2]);var state_35382__$1 = state_35382;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35382__$1,inst_35380);
} else
{if((state_val_35383 === 35))
{var inst_35369 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35389_35470 = state_35382__$1;(statearr_35389_35470[2] = inst_35369);
(statearr_35389_35470[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 4))
{var inst_35255 = (state_35382[8]);var inst_35255__$1 = (state_35382[2]);var inst_35256 = (inst_35255__$1 == null);var state_35382__$1 = (function (){var statearr_35390 = state_35382;(statearr_35390[8] = inst_35255__$1);
return statearr_35390;
})();if(cljs.core.truth_(inst_35256))
{var statearr_35391_35471 = state_35382__$1;(statearr_35391_35471[1] = 5);
} else
{var statearr_35392_35472 = state_35382__$1;(statearr_35392_35472[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 36))
{var inst_35344 = (state_35382[9]);var inst_35348 = cljs.core.chunk_first.call(null,inst_35344);var inst_35349 = cljs.core.chunk_rest.call(null,inst_35344);var inst_35350 = cljs.core.count.call(null,inst_35348);var inst_35323 = inst_35349;var inst_35324 = inst_35348;var inst_35325 = inst_35350;var inst_35326 = 0;var state_35382__$1 = (function (){var statearr_35393 = state_35382;(statearr_35393[10] = inst_35326);
(statearr_35393[11] = inst_35325);
(statearr_35393[12] = inst_35324);
(statearr_35393[13] = inst_35323);
return statearr_35393;
})();var statearr_35394_35473 = state_35382__$1;(statearr_35394_35473[2] = null);
(statearr_35394_35473[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 5))
{var inst_35262 = cljs.core.deref.call(null,cs);var inst_35263 = cljs.core.seq.call(null,inst_35262);var inst_35264 = inst_35263;var inst_35265 = null;var inst_35266 = 0;var inst_35267 = 0;var state_35382__$1 = (function (){var statearr_35395 = state_35382;(statearr_35395[14] = inst_35267);
(statearr_35395[15] = inst_35265);
(statearr_35395[16] = inst_35266);
(statearr_35395[17] = inst_35264);
return statearr_35395;
})();var statearr_35396_35474 = state_35382__$1;(statearr_35396_35474[2] = null);
(statearr_35396_35474[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 37))
{var inst_35344 = (state_35382[9]);var inst_35353 = cljs.core.first.call(null,inst_35344);var state_35382__$1 = (function (){var statearr_35397 = state_35382;(statearr_35397[18] = inst_35353);
return statearr_35397;
})();var statearr_35398_35475 = state_35382__$1;(statearr_35398_35475[2] = null);
(statearr_35398_35475[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 6))
{var inst_35314 = cljs.core.deref.call(null,cs);var inst_35315 = cljs.core.keys.call(null,inst_35314);var inst_35316 = cljs.core.count.call(null,inst_35315);var inst_35317 = cljs.core.reset_BANG_.call(null,dctr,inst_35316);var inst_35322 = cljs.core.seq.call(null,inst_35315);var inst_35323 = inst_35322;var inst_35324 = null;var inst_35325 = 0;var inst_35326 = 0;var state_35382__$1 = (function (){var statearr_35399 = state_35382;(statearr_35399[10] = inst_35326);
(statearr_35399[11] = inst_35325);
(statearr_35399[12] = inst_35324);
(statearr_35399[13] = inst_35323);
(statearr_35399[19] = inst_35317);
return statearr_35399;
})();var statearr_35400_35476 = state_35382__$1;(statearr_35400_35476[2] = null);
(statearr_35400_35476[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 38))
{var inst_35366 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35401_35477 = state_35382__$1;(statearr_35401_35477[2] = inst_35366);
(statearr_35401_35477[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 7))
{var inst_35378 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35402_35478 = state_35382__$1;(statearr_35402_35478[2] = inst_35378);
(statearr_35402_35478[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 39))
{var inst_35344 = (state_35382[9]);var inst_35362 = (state_35382[2]);var inst_35363 = cljs.core.next.call(null,inst_35344);var inst_35323 = inst_35363;var inst_35324 = null;var inst_35325 = 0;var inst_35326 = 0;var state_35382__$1 = (function (){var statearr_35403 = state_35382;(statearr_35403[10] = inst_35326);
(statearr_35403[11] = inst_35325);
(statearr_35403[12] = inst_35324);
(statearr_35403[13] = inst_35323);
(statearr_35403[20] = inst_35362);
return statearr_35403;
})();var statearr_35404_35479 = state_35382__$1;(statearr_35404_35479[2] = null);
(statearr_35404_35479[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 8))
{var inst_35267 = (state_35382[14]);var inst_35266 = (state_35382[16]);var inst_35269 = (inst_35267 < inst_35266);var inst_35270 = inst_35269;var state_35382__$1 = state_35382;if(cljs.core.truth_(inst_35270))
{var statearr_35405_35480 = state_35382__$1;(statearr_35405_35480[1] = 10);
} else
{var statearr_35406_35481 = state_35382__$1;(statearr_35406_35481[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 40))
{var inst_35353 = (state_35382[18]);var inst_35354 = (state_35382[2]);var inst_35355 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35356 = cljs.core.async.untap_STAR_.call(null,m,inst_35353);var state_35382__$1 = (function (){var statearr_35407 = state_35382;(statearr_35407[21] = inst_35354);
(statearr_35407[22] = inst_35355);
return statearr_35407;
})();var statearr_35408_35482 = state_35382__$1;(statearr_35408_35482[2] = inst_35356);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 9))
{var inst_35312 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35409_35483 = state_35382__$1;(statearr_35409_35483[2] = inst_35312);
(statearr_35409_35483[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 41))
{var inst_35255 = (state_35382[8]);var inst_35353 = (state_35382[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35382,40,Object,null,39);var inst_35360 = cljs.core.async.put_BANG_.call(null,inst_35353,inst_35255,done);var state_35382__$1 = state_35382;var statearr_35410_35484 = state_35382__$1;(statearr_35410_35484[2] = inst_35360);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 10))
{var inst_35267 = (state_35382[14]);var inst_35265 = (state_35382[15]);var inst_35273 = cljs.core._nth.call(null,inst_35265,inst_35267);var inst_35274 = cljs.core.nth.call(null,inst_35273,0,null);var inst_35275 = cljs.core.nth.call(null,inst_35273,1,null);var state_35382__$1 = (function (){var statearr_35411 = state_35382;(statearr_35411[23] = inst_35274);
return statearr_35411;
})();if(cljs.core.truth_(inst_35275))
{var statearr_35412_35485 = state_35382__$1;(statearr_35412_35485[1] = 13);
} else
{var statearr_35413_35486 = state_35382__$1;(statearr_35413_35486[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 42))
{var inst_35375 = (state_35382[2]);var state_35382__$1 = (function (){var statearr_35414 = state_35382;(statearr_35414[24] = inst_35375);
return statearr_35414;
})();var statearr_35415_35487 = state_35382__$1;(statearr_35415_35487[2] = null);
(statearr_35415_35487[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 11))
{var inst_35264 = (state_35382[17]);var inst_35284 = (state_35382[25]);var inst_35284__$1 = cljs.core.seq.call(null,inst_35264);var state_35382__$1 = (function (){var statearr_35416 = state_35382;(statearr_35416[25] = inst_35284__$1);
return statearr_35416;
})();if(inst_35284__$1)
{var statearr_35417_35488 = state_35382__$1;(statearr_35417_35488[1] = 16);
} else
{var statearr_35418_35489 = state_35382__$1;(statearr_35418_35489[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 12))
{var inst_35310 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35419_35490 = state_35382__$1;(statearr_35419_35490[2] = inst_35310);
(statearr_35419_35490[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 13))
{var inst_35274 = (state_35382[23]);var inst_35277 = cljs.core.async.close_BANG_.call(null,inst_35274);var state_35382__$1 = state_35382;var statearr_35423_35491 = state_35382__$1;(statearr_35423_35491[2] = inst_35277);
(statearr_35423_35491[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 14))
{var state_35382__$1 = state_35382;var statearr_35424_35492 = state_35382__$1;(statearr_35424_35492[2] = null);
(statearr_35424_35492[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 15))
{var inst_35267 = (state_35382[14]);var inst_35265 = (state_35382[15]);var inst_35266 = (state_35382[16]);var inst_35264 = (state_35382[17]);var inst_35280 = (state_35382[2]);var inst_35281 = (inst_35267 + 1);var tmp35420 = inst_35265;var tmp35421 = inst_35266;var tmp35422 = inst_35264;var inst_35264__$1 = tmp35422;var inst_35265__$1 = tmp35420;var inst_35266__$1 = tmp35421;var inst_35267__$1 = inst_35281;var state_35382__$1 = (function (){var statearr_35425 = state_35382;(statearr_35425[26] = inst_35280);
(statearr_35425[14] = inst_35267__$1);
(statearr_35425[15] = inst_35265__$1);
(statearr_35425[16] = inst_35266__$1);
(statearr_35425[17] = inst_35264__$1);
return statearr_35425;
})();var statearr_35426_35493 = state_35382__$1;(statearr_35426_35493[2] = null);
(statearr_35426_35493[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 16))
{var inst_35284 = (state_35382[25]);var inst_35286 = cljs.core.chunked_seq_QMARK_.call(null,inst_35284);var state_35382__$1 = state_35382;if(inst_35286)
{var statearr_35427_35494 = state_35382__$1;(statearr_35427_35494[1] = 19);
} else
{var statearr_35428_35495 = state_35382__$1;(statearr_35428_35495[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 17))
{var state_35382__$1 = state_35382;var statearr_35429_35496 = state_35382__$1;(statearr_35429_35496[2] = null);
(statearr_35429_35496[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 18))
{var inst_35308 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35430_35497 = state_35382__$1;(statearr_35430_35497[2] = inst_35308);
(statearr_35430_35497[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 19))
{var inst_35284 = (state_35382[25]);var inst_35288 = cljs.core.chunk_first.call(null,inst_35284);var inst_35289 = cljs.core.chunk_rest.call(null,inst_35284);var inst_35290 = cljs.core.count.call(null,inst_35288);var inst_35264 = inst_35289;var inst_35265 = inst_35288;var inst_35266 = inst_35290;var inst_35267 = 0;var state_35382__$1 = (function (){var statearr_35431 = state_35382;(statearr_35431[14] = inst_35267);
(statearr_35431[15] = inst_35265);
(statearr_35431[16] = inst_35266);
(statearr_35431[17] = inst_35264);
return statearr_35431;
})();var statearr_35432_35498 = state_35382__$1;(statearr_35432_35498[2] = null);
(statearr_35432_35498[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 20))
{var inst_35284 = (state_35382[25]);var inst_35294 = cljs.core.first.call(null,inst_35284);var inst_35295 = cljs.core.nth.call(null,inst_35294,0,null);var inst_35296 = cljs.core.nth.call(null,inst_35294,1,null);var state_35382__$1 = (function (){var statearr_35433 = state_35382;(statearr_35433[27] = inst_35295);
return statearr_35433;
})();if(cljs.core.truth_(inst_35296))
{var statearr_35434_35499 = state_35382__$1;(statearr_35434_35499[1] = 22);
} else
{var statearr_35435_35500 = state_35382__$1;(statearr_35435_35500[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 21))
{var inst_35305 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35436_35501 = state_35382__$1;(statearr_35436_35501[2] = inst_35305);
(statearr_35436_35501[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 22))
{var inst_35295 = (state_35382[27]);var inst_35298 = cljs.core.async.close_BANG_.call(null,inst_35295);var state_35382__$1 = state_35382;var statearr_35437_35502 = state_35382__$1;(statearr_35437_35502[2] = inst_35298);
(statearr_35437_35502[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 23))
{var state_35382__$1 = state_35382;var statearr_35438_35503 = state_35382__$1;(statearr_35438_35503[2] = null);
(statearr_35438_35503[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 24))
{var inst_35284 = (state_35382[25]);var inst_35301 = (state_35382[2]);var inst_35302 = cljs.core.next.call(null,inst_35284);var inst_35264 = inst_35302;var inst_35265 = null;var inst_35266 = 0;var inst_35267 = 0;var state_35382__$1 = (function (){var statearr_35439 = state_35382;(statearr_35439[28] = inst_35301);
(statearr_35439[14] = inst_35267);
(statearr_35439[15] = inst_35265);
(statearr_35439[16] = inst_35266);
(statearr_35439[17] = inst_35264);
return statearr_35439;
})();var statearr_35440_35504 = state_35382__$1;(statearr_35440_35504[2] = null);
(statearr_35440_35504[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 25))
{var inst_35326 = (state_35382[10]);var inst_35325 = (state_35382[11]);var inst_35328 = (inst_35326 < inst_35325);var inst_35329 = inst_35328;var state_35382__$1 = state_35382;if(cljs.core.truth_(inst_35329))
{var statearr_35441_35505 = state_35382__$1;(statearr_35441_35505[1] = 27);
} else
{var statearr_35442_35506 = state_35382__$1;(statearr_35442_35506[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 26))
{var inst_35373 = (state_35382[2]);var state_35382__$1 = (function (){var statearr_35443 = state_35382;(statearr_35443[29] = inst_35373);
return statearr_35443;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35382__$1,42,dchan);
} else
{if((state_val_35383 === 27))
{var inst_35326 = (state_35382[10]);var inst_35324 = (state_35382[12]);var inst_35331 = cljs.core._nth.call(null,inst_35324,inst_35326);var state_35382__$1 = (function (){var statearr_35444 = state_35382;(statearr_35444[7] = inst_35331);
return statearr_35444;
})();var statearr_35445_35507 = state_35382__$1;(statearr_35445_35507[2] = null);
(statearr_35445_35507[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 28))
{var inst_35344 = (state_35382[9]);var inst_35323 = (state_35382[13]);var inst_35344__$1 = cljs.core.seq.call(null,inst_35323);var state_35382__$1 = (function (){var statearr_35449 = state_35382;(statearr_35449[9] = inst_35344__$1);
return statearr_35449;
})();if(inst_35344__$1)
{var statearr_35450_35508 = state_35382__$1;(statearr_35450_35508[1] = 33);
} else
{var statearr_35451_35509 = state_35382__$1;(statearr_35451_35509[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 29))
{var inst_35371 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35452_35510 = state_35382__$1;(statearr_35452_35510[2] = inst_35371);
(statearr_35452_35510[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 30))
{var inst_35326 = (state_35382[10]);var inst_35325 = (state_35382[11]);var inst_35324 = (state_35382[12]);var inst_35323 = (state_35382[13]);var inst_35340 = (state_35382[2]);var inst_35341 = (inst_35326 + 1);var tmp35446 = inst_35325;var tmp35447 = inst_35324;var tmp35448 = inst_35323;var inst_35323__$1 = tmp35448;var inst_35324__$1 = tmp35447;var inst_35325__$1 = tmp35446;var inst_35326__$1 = inst_35341;var state_35382__$1 = (function (){var statearr_35453 = state_35382;(statearr_35453[30] = inst_35340);
(statearr_35453[10] = inst_35326__$1);
(statearr_35453[11] = inst_35325__$1);
(statearr_35453[12] = inst_35324__$1);
(statearr_35453[13] = inst_35323__$1);
return statearr_35453;
})();var statearr_35454_35511 = state_35382__$1;(statearr_35454_35511[2] = null);
(statearr_35454_35511[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 31))
{var inst_35331 = (state_35382[7]);var inst_35332 = (state_35382[2]);var inst_35333 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35334 = cljs.core.async.untap_STAR_.call(null,m,inst_35331);var state_35382__$1 = (function (){var statearr_35455 = state_35382;(statearr_35455[31] = inst_35332);
(statearr_35455[32] = inst_35333);
return statearr_35455;
})();var statearr_35456_35512 = state_35382__$1;(statearr_35456_35512[2] = inst_35334);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382__$1);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_35460 = (new Array(33));(statearr_35460[0] = state_machine__12859__auto__);
(statearr_35460[1] = 1);
return statearr_35460;
});
var state_machine__12859__auto____1 = (function (state_35382){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_35382);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e35461){if((e35461 instanceof Object))
{var ex__12862__auto__ = e35461;var statearr_35462_35513 = state_35382;(statearr_35462_35513[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35514 = state_35382;
state_35382 = G__35514;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_35382){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_35382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_35463 = f__12991__auto__.call(null);(statearr_35463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___35464);
return statearr_35463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7629__auto__ = m;if(and__7629__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8234__auto__ = (((m == null))?null:m);return (function (){var or__7638__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t35624 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35624 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta35625){
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
this.meta35625 = meta35625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35624.cljs$lang$type = true;
cljs.core.async.t35624.cljs$lang$ctorStr = "cljs.core.async/t35624";
cljs.core.async.t35624.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t35624");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35624.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35624.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35624.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35624.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35624.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35624.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35624.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35624.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35626){var self__ = this;
var _35626__$1 = this;return self__.meta35625;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35626,meta35625__$1){var self__ = this;
var _35626__$1 = this;return (new cljs.core.async.t35624(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta35625__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35624 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35624(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35625){return (new cljs.core.async.t35624(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35625));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35624(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12990__auto___35733 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_35691){var state_val_35692 = (state_35691[1]);if((state_val_35692 === 1))
{var inst_35630 = (state_35691[7]);var inst_35630__$1 = calc_state.call(null);var inst_35631 = cljs.core.seq_QMARK_.call(null,inst_35630__$1);var state_35691__$1 = (function (){var statearr_35693 = state_35691;(statearr_35693[7] = inst_35630__$1);
return statearr_35693;
})();if(inst_35631)
{var statearr_35694_35734 = state_35691__$1;(statearr_35694_35734[1] = 2);
} else
{var statearr_35695_35735 = state_35691__$1;(statearr_35695_35735[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 2))
{var inst_35630 = (state_35691[7]);var inst_35633 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35630);var state_35691__$1 = state_35691;var statearr_35696_35736 = state_35691__$1;(statearr_35696_35736[2] = inst_35633);
(statearr_35696_35736[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 3))
{var inst_35630 = (state_35691[7]);var state_35691__$1 = state_35691;var statearr_35697_35737 = state_35691__$1;(statearr_35697_35737[2] = inst_35630);
(statearr_35697_35737[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 4))
{var inst_35630 = (state_35691[7]);var inst_35636 = (state_35691[2]);var inst_35637 = cljs.core.get.call(null,inst_35636,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35638 = cljs.core.get.call(null,inst_35636,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35639 = cljs.core.get.call(null,inst_35636,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_35640 = inst_35630;var state_35691__$1 = (function (){var statearr_35698 = state_35691;(statearr_35698[8] = inst_35639);
(statearr_35698[9] = inst_35638);
(statearr_35698[10] = inst_35637);
(statearr_35698[11] = inst_35640);
return statearr_35698;
})();var statearr_35699_35738 = state_35691__$1;(statearr_35699_35738[2] = null);
(statearr_35699_35738[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 5))
{var inst_35640 = (state_35691[11]);var inst_35643 = cljs.core.seq_QMARK_.call(null,inst_35640);var state_35691__$1 = state_35691;if(inst_35643)
{var statearr_35700_35739 = state_35691__$1;(statearr_35700_35739[1] = 7);
} else
{var statearr_35701_35740 = state_35691__$1;(statearr_35701_35740[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 6))
{var inst_35689 = (state_35691[2]);var state_35691__$1 = state_35691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35691__$1,inst_35689);
} else
{if((state_val_35692 === 7))
{var inst_35640 = (state_35691[11]);var inst_35645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35640);var state_35691__$1 = state_35691;var statearr_35702_35741 = state_35691__$1;(statearr_35702_35741[2] = inst_35645);
(statearr_35702_35741[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 8))
{var inst_35640 = (state_35691[11]);var state_35691__$1 = state_35691;var statearr_35703_35742 = state_35691__$1;(statearr_35703_35742[2] = inst_35640);
(statearr_35703_35742[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 9))
{var inst_35648 = (state_35691[12]);var inst_35648__$1 = (state_35691[2]);var inst_35649 = cljs.core.get.call(null,inst_35648__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35650 = cljs.core.get.call(null,inst_35648__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35651 = cljs.core.get.call(null,inst_35648__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_35691__$1 = (function (){var statearr_35704 = state_35691;(statearr_35704[13] = inst_35650);
(statearr_35704[14] = inst_35651);
(statearr_35704[12] = inst_35648__$1);
return statearr_35704;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35691__$1,10,inst_35649);
} else
{if((state_val_35692 === 10))
{var inst_35656 = (state_35691[15]);var inst_35655 = (state_35691[16]);var inst_35654 = (state_35691[2]);var inst_35655__$1 = cljs.core.nth.call(null,inst_35654,0,null);var inst_35656__$1 = cljs.core.nth.call(null,inst_35654,1,null);var inst_35657 = (inst_35655__$1 == null);var inst_35658 = cljs.core._EQ_.call(null,inst_35656__$1,change);var inst_35659 = (inst_35657) || (inst_35658);var state_35691__$1 = (function (){var statearr_35705 = state_35691;(statearr_35705[15] = inst_35656__$1);
(statearr_35705[16] = inst_35655__$1);
return statearr_35705;
})();if(cljs.core.truth_(inst_35659))
{var statearr_35706_35743 = state_35691__$1;(statearr_35706_35743[1] = 11);
} else
{var statearr_35707_35744 = state_35691__$1;(statearr_35707_35744[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 11))
{var inst_35655 = (state_35691[16]);var inst_35661 = (inst_35655 == null);var state_35691__$1 = state_35691;if(cljs.core.truth_(inst_35661))
{var statearr_35708_35745 = state_35691__$1;(statearr_35708_35745[1] = 14);
} else
{var statearr_35709_35746 = state_35691__$1;(statearr_35709_35746[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 12))
{var inst_35651 = (state_35691[14]);var inst_35656 = (state_35691[15]);var inst_35670 = (state_35691[17]);var inst_35670__$1 = inst_35651.call(null,inst_35656);var state_35691__$1 = (function (){var statearr_35710 = state_35691;(statearr_35710[17] = inst_35670__$1);
return statearr_35710;
})();if(cljs.core.truth_(inst_35670__$1))
{var statearr_35711_35747 = state_35691__$1;(statearr_35711_35747[1] = 17);
} else
{var statearr_35712_35748 = state_35691__$1;(statearr_35712_35748[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 13))
{var inst_35687 = (state_35691[2]);var state_35691__$1 = state_35691;var statearr_35713_35749 = state_35691__$1;(statearr_35713_35749[2] = inst_35687);
(statearr_35713_35749[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 14))
{var inst_35656 = (state_35691[15]);var inst_35663 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35656);var state_35691__$1 = state_35691;var statearr_35714_35750 = state_35691__$1;(statearr_35714_35750[2] = inst_35663);
(statearr_35714_35750[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 15))
{var state_35691__$1 = state_35691;var statearr_35715_35751 = state_35691__$1;(statearr_35715_35751[2] = null);
(statearr_35715_35751[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 16))
{var inst_35666 = (state_35691[2]);var inst_35667 = calc_state.call(null);var inst_35640 = inst_35667;var state_35691__$1 = (function (){var statearr_35716 = state_35691;(statearr_35716[18] = inst_35666);
(statearr_35716[11] = inst_35640);
return statearr_35716;
})();var statearr_35717_35752 = state_35691__$1;(statearr_35717_35752[2] = null);
(statearr_35717_35752[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 17))
{var inst_35670 = (state_35691[17]);var state_35691__$1 = state_35691;var statearr_35718_35753 = state_35691__$1;(statearr_35718_35753[2] = inst_35670);
(statearr_35718_35753[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 18))
{var inst_35650 = (state_35691[13]);var inst_35651 = (state_35691[14]);var inst_35656 = (state_35691[15]);var inst_35673 = cljs.core.empty_QMARK_.call(null,inst_35651);var inst_35674 = inst_35650.call(null,inst_35656);var inst_35675 = cljs.core.not.call(null,inst_35674);var inst_35676 = (inst_35673) && (inst_35675);var state_35691__$1 = state_35691;var statearr_35719_35754 = state_35691__$1;(statearr_35719_35754[2] = inst_35676);
(statearr_35719_35754[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 19))
{var inst_35678 = (state_35691[2]);var state_35691__$1 = state_35691;if(cljs.core.truth_(inst_35678))
{var statearr_35720_35755 = state_35691__$1;(statearr_35720_35755[1] = 20);
} else
{var statearr_35721_35756 = state_35691__$1;(statearr_35721_35756[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 20))
{var inst_35655 = (state_35691[16]);var state_35691__$1 = state_35691;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35691__$1,23,out,inst_35655);
} else
{if((state_val_35692 === 21))
{var state_35691__$1 = state_35691;var statearr_35722_35757 = state_35691__$1;(statearr_35722_35757[2] = null);
(statearr_35722_35757[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 22))
{var inst_35648 = (state_35691[12]);var inst_35684 = (state_35691[2]);var inst_35640 = inst_35648;var state_35691__$1 = (function (){var statearr_35723 = state_35691;(statearr_35723[19] = inst_35684);
(statearr_35723[11] = inst_35640);
return statearr_35723;
})();var statearr_35724_35758 = state_35691__$1;(statearr_35724_35758[2] = null);
(statearr_35724_35758[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 23))
{var inst_35681 = (state_35691[2]);var state_35691__$1 = state_35691;var statearr_35725_35759 = state_35691__$1;(statearr_35725_35759[2] = inst_35681);
(statearr_35725_35759[1] = 22);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_35729 = (new Array(20));(statearr_35729[0] = state_machine__12859__auto__);
(statearr_35729[1] = 1);
return statearr_35729;
});
var state_machine__12859__auto____1 = (function (state_35691){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_35691);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e35730){if((e35730 instanceof Object))
{var ex__12862__auto__ = e35730;var statearr_35731_35760 = state_35691;(statearr_35731_35760[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35691);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35761 = state_35691;
state_35691 = G__35761;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_35691){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_35691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_35732 = f__12991__auto__.call(null);(statearr_35732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___35733);
return statearr_35732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7629__auto__ = p;if(and__7629__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7629__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8234__auto__ = (((p == null))?null:p);return (function (){var or__7638__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7629__auto__ = p;if(and__7629__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7629__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8234__auto__ = (((p == null))?null:p);return (function (){var or__7638__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7629__auto__ = p;if(and__7629__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7629__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8234__auto__ = (((p == null))?null:p);return (function (){var or__7638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7629__auto__ = p;if(and__7629__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7629__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8234__auto__ = (((p == null))?null:p);return (function (){var or__7638__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
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
return (function (topic){var or__7638__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7638__auto__,mults){
return (function (p1__35762_SHARP_){if(cljs.core.truth_(p1__35762_SHARP_.call(null,topic)))
{return p1__35762_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35762_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7638__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35887 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35887 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35888){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35888 = meta35888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35887.cljs$lang$type = true;
cljs.core.async.t35887.cljs$lang$ctorStr = "cljs.core.async/t35887";
cljs.core.async.t35887.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8175__auto__,writer__8176__auto__,opt__8177__auto__){return cljs.core._write.call(null,writer__8176__auto__,"cljs.core.async/t35887");
});})(mults,ensure_mult))
;
cljs.core.async.t35887.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35887.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35887.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35887.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35889){var self__ = this;
var _35889__$1 = this;return self__.meta35888;
});})(mults,ensure_mult))
;
cljs.core.async.t35887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35889,meta35888__$1){var self__ = this;
var _35889__$1 = this;return (new cljs.core.async.t35887(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35888__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35887 = ((function (mults,ensure_mult){
return (function __GT_t35887(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35888){return (new cljs.core.async.t35887(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35888));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35887(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12990__auto___36011 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_35963){var state_val_35964 = (state_35963[1]);if((state_val_35964 === 1))
{var state_35963__$1 = state_35963;var statearr_35965_36012 = state_35963__$1;(statearr_35965_36012[2] = null);
(statearr_35965_36012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 2))
{var state_35963__$1 = state_35963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35963__$1,4,ch);
} else
{if((state_val_35964 === 3))
{var inst_35961 = (state_35963[2]);var state_35963__$1 = state_35963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35963__$1,inst_35961);
} else
{if((state_val_35964 === 4))
{var inst_35892 = (state_35963[7]);var inst_35892__$1 = (state_35963[2]);var inst_35893 = (inst_35892__$1 == null);var state_35963__$1 = (function (){var statearr_35966 = state_35963;(statearr_35966[7] = inst_35892__$1);
return statearr_35966;
})();if(cljs.core.truth_(inst_35893))
{var statearr_35967_36013 = state_35963__$1;(statearr_35967_36013[1] = 5);
} else
{var statearr_35968_36014 = state_35963__$1;(statearr_35968_36014[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 5))
{var inst_35899 = cljs.core.deref.call(null,mults);var inst_35900 = cljs.core.vals.call(null,inst_35899);var inst_35901 = cljs.core.seq.call(null,inst_35900);var inst_35902 = inst_35901;var inst_35903 = null;var inst_35904 = 0;var inst_35905 = 0;var state_35963__$1 = (function (){var statearr_35969 = state_35963;(statearr_35969[8] = inst_35903);
(statearr_35969[9] = inst_35902);
(statearr_35969[10] = inst_35905);
(statearr_35969[11] = inst_35904);
return statearr_35969;
})();var statearr_35970_36015 = state_35963__$1;(statearr_35970_36015[2] = null);
(statearr_35970_36015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 6))
{var inst_35892 = (state_35963[7]);var inst_35940 = (state_35963[12]);var inst_35942 = (state_35963[13]);var inst_35940__$1 = topic_fn.call(null,inst_35892);var inst_35941 = cljs.core.deref.call(null,mults);var inst_35942__$1 = cljs.core.get.call(null,inst_35941,inst_35940__$1);var state_35963__$1 = (function (){var statearr_35971 = state_35963;(statearr_35971[12] = inst_35940__$1);
(statearr_35971[13] = inst_35942__$1);
return statearr_35971;
})();if(cljs.core.truth_(inst_35942__$1))
{var statearr_35972_36016 = state_35963__$1;(statearr_35972_36016[1] = 19);
} else
{var statearr_35973_36017 = state_35963__$1;(statearr_35973_36017[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 7))
{var inst_35959 = (state_35963[2]);var state_35963__$1 = state_35963;var statearr_35974_36018 = state_35963__$1;(statearr_35974_36018[2] = inst_35959);
(statearr_35974_36018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 8))
{var inst_35905 = (state_35963[10]);var inst_35904 = (state_35963[11]);var inst_35907 = (inst_35905 < inst_35904);var inst_35908 = inst_35907;var state_35963__$1 = state_35963;if(cljs.core.truth_(inst_35908))
{var statearr_35978_36019 = state_35963__$1;(statearr_35978_36019[1] = 10);
} else
{var statearr_35979_36020 = state_35963__$1;(statearr_35979_36020[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 9))
{var inst_35938 = (state_35963[2]);var state_35963__$1 = state_35963;var statearr_35980_36021 = state_35963__$1;(statearr_35980_36021[2] = inst_35938);
(statearr_35980_36021[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 10))
{var inst_35903 = (state_35963[8]);var inst_35902 = (state_35963[9]);var inst_35905 = (state_35963[10]);var inst_35904 = (state_35963[11]);var inst_35910 = cljs.core._nth.call(null,inst_35903,inst_35905);var inst_35911 = cljs.core.async.muxch_STAR_.call(null,inst_35910);var inst_35912 = cljs.core.async.close_BANG_.call(null,inst_35911);var inst_35913 = (inst_35905 + 1);var tmp35975 = inst_35903;var tmp35976 = inst_35902;var tmp35977 = inst_35904;var inst_35902__$1 = tmp35976;var inst_35903__$1 = tmp35975;var inst_35904__$1 = tmp35977;var inst_35905__$1 = inst_35913;var state_35963__$1 = (function (){var statearr_35981 = state_35963;(statearr_35981[8] = inst_35903__$1);
(statearr_35981[9] = inst_35902__$1);
(statearr_35981[10] = inst_35905__$1);
(statearr_35981[11] = inst_35904__$1);
(statearr_35981[14] = inst_35912);
return statearr_35981;
})();var statearr_35982_36022 = state_35963__$1;(statearr_35982_36022[2] = null);
(statearr_35982_36022[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 11))
{var inst_35902 = (state_35963[9]);var inst_35916 = (state_35963[15]);var inst_35916__$1 = cljs.core.seq.call(null,inst_35902);var state_35963__$1 = (function (){var statearr_35983 = state_35963;(statearr_35983[15] = inst_35916__$1);
return statearr_35983;
})();if(inst_35916__$1)
{var statearr_35984_36023 = state_35963__$1;(statearr_35984_36023[1] = 13);
} else
{var statearr_35985_36024 = state_35963__$1;(statearr_35985_36024[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 12))
{var inst_35936 = (state_35963[2]);var state_35963__$1 = state_35963;var statearr_35986_36025 = state_35963__$1;(statearr_35986_36025[2] = inst_35936);
(statearr_35986_36025[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 13))
{var inst_35916 = (state_35963[15]);var inst_35918 = cljs.core.chunked_seq_QMARK_.call(null,inst_35916);var state_35963__$1 = state_35963;if(inst_35918)
{var statearr_35987_36026 = state_35963__$1;(statearr_35987_36026[1] = 16);
} else
{var statearr_35988_36027 = state_35963__$1;(statearr_35988_36027[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 14))
{var state_35963__$1 = state_35963;var statearr_35989_36028 = state_35963__$1;(statearr_35989_36028[2] = null);
(statearr_35989_36028[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 15))
{var inst_35934 = (state_35963[2]);var state_35963__$1 = state_35963;var statearr_35990_36029 = state_35963__$1;(statearr_35990_36029[2] = inst_35934);
(statearr_35990_36029[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 16))
{var inst_35916 = (state_35963[15]);var inst_35920 = cljs.core.chunk_first.call(null,inst_35916);var inst_35921 = cljs.core.chunk_rest.call(null,inst_35916);var inst_35922 = cljs.core.count.call(null,inst_35920);var inst_35902 = inst_35921;var inst_35903 = inst_35920;var inst_35904 = inst_35922;var inst_35905 = 0;var state_35963__$1 = (function (){var statearr_35991 = state_35963;(statearr_35991[8] = inst_35903);
(statearr_35991[9] = inst_35902);
(statearr_35991[10] = inst_35905);
(statearr_35991[11] = inst_35904);
return statearr_35991;
})();var statearr_35992_36030 = state_35963__$1;(statearr_35992_36030[2] = null);
(statearr_35992_36030[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 17))
{var inst_35916 = (state_35963[15]);var inst_35925 = cljs.core.first.call(null,inst_35916);var inst_35926 = cljs.core.async.muxch_STAR_.call(null,inst_35925);var inst_35927 = cljs.core.async.close_BANG_.call(null,inst_35926);var inst_35928 = cljs.core.next.call(null,inst_35916);var inst_35902 = inst_35928;var inst_35903 = null;var inst_35904 = 0;var inst_35905 = 0;var state_35963__$1 = (function (){var statearr_35993 = state_35963;(statearr_35993[8] = inst_35903);
(statearr_35993[9] = inst_35902);
(statearr_35993[10] = inst_35905);
(statearr_35993[11] = inst_35904);
(statearr_35993[16] = inst_35927);
return statearr_35993;
})();var statearr_35994_36031 = state_35963__$1;(statearr_35994_36031[2] = null);
(statearr_35994_36031[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 18))
{var inst_35931 = (state_35963[2]);var state_35963__$1 = state_35963;var statearr_35995_36032 = state_35963__$1;(statearr_35995_36032[2] = inst_35931);
(statearr_35995_36032[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 19))
{var state_35963__$1 = state_35963;var statearr_35996_36033 = state_35963__$1;(statearr_35996_36033[2] = null);
(statearr_35996_36033[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 20))
{var state_35963__$1 = state_35963;var statearr_35997_36034 = state_35963__$1;(statearr_35997_36034[2] = null);
(statearr_35997_36034[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 21))
{var inst_35956 = (state_35963[2]);var state_35963__$1 = (function (){var statearr_35998 = state_35963;(statearr_35998[17] = inst_35956);
return statearr_35998;
})();var statearr_35999_36035 = state_35963__$1;(statearr_35999_36035[2] = null);
(statearr_35999_36035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 22))
{var inst_35953 = (state_35963[2]);var state_35963__$1 = state_35963;var statearr_36000_36036 = state_35963__$1;(statearr_36000_36036[2] = inst_35953);
(statearr_36000_36036[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 23))
{var inst_35940 = (state_35963[12]);var inst_35944 = (state_35963[2]);var inst_35945 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35940);var state_35963__$1 = (function (){var statearr_36001 = state_35963;(statearr_36001[18] = inst_35944);
return statearr_36001;
})();var statearr_36002_36037 = state_35963__$1;(statearr_36002_36037[2] = inst_35945);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35963__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35964 === 24))
{var inst_35892 = (state_35963[7]);var inst_35942 = (state_35963[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35963,23,Object,null,22);var inst_35949 = cljs.core.async.muxch_STAR_.call(null,inst_35942);var state_35963__$1 = state_35963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35963__$1,25,inst_35949,inst_35892);
} else
{if((state_val_35964 === 25))
{var inst_35951 = (state_35963[2]);var state_35963__$1 = state_35963;var statearr_36003_36038 = state_35963__$1;(statearr_36003_36038[2] = inst_35951);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35963__$1);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_36007 = (new Array(19));(statearr_36007[0] = state_machine__12859__auto__);
(statearr_36007[1] = 1);
return statearr_36007;
});
var state_machine__12859__auto____1 = (function (state_35963){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_35963);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e36008){if((e36008 instanceof Object))
{var ex__12862__auto__ = e36008;var statearr_36009_36039 = state_35963;(statearr_36009_36039[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35963);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36040 = state_35963;
state_35963 = G__36040;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_35963){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_35963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_36010 = f__12991__auto__.call(null);(statearr_36010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___36011);
return statearr_36010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
,cljs.core.range.call(null,cnt));var c__12990__auto___36177 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_36147){var state_val_36148 = (state_36147[1]);if((state_val_36148 === 1))
{var state_36147__$1 = state_36147;var statearr_36149_36178 = state_36147__$1;(statearr_36149_36178[2] = null);
(statearr_36149_36178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 2))
{var inst_36110 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36111 = 0;var state_36147__$1 = (function (){var statearr_36150 = state_36147;(statearr_36150[7] = inst_36110);
(statearr_36150[8] = inst_36111);
return statearr_36150;
})();var statearr_36151_36179 = state_36147__$1;(statearr_36151_36179[2] = null);
(statearr_36151_36179[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 3))
{var inst_36145 = (state_36147[2]);var state_36147__$1 = state_36147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36147__$1,inst_36145);
} else
{if((state_val_36148 === 4))
{var inst_36111 = (state_36147[8]);var inst_36113 = (inst_36111 < cnt);var state_36147__$1 = state_36147;if(cljs.core.truth_(inst_36113))
{var statearr_36152_36180 = state_36147__$1;(statearr_36152_36180[1] = 6);
} else
{var statearr_36153_36181 = state_36147__$1;(statearr_36153_36181[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 5))
{var inst_36131 = (state_36147[2]);var state_36147__$1 = (function (){var statearr_36154 = state_36147;(statearr_36154[9] = inst_36131);
return statearr_36154;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36147__$1,12,dchan);
} else
{if((state_val_36148 === 6))
{var state_36147__$1 = state_36147;var statearr_36155_36182 = state_36147__$1;(statearr_36155_36182[2] = null);
(statearr_36155_36182[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 7))
{var state_36147__$1 = state_36147;var statearr_36156_36183 = state_36147__$1;(statearr_36156_36183[2] = null);
(statearr_36156_36183[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 8))
{var inst_36129 = (state_36147[2]);var state_36147__$1 = state_36147;var statearr_36157_36184 = state_36147__$1;(statearr_36157_36184[2] = inst_36129);
(statearr_36157_36184[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 9))
{var inst_36111 = (state_36147[8]);var inst_36124 = (state_36147[2]);var inst_36125 = (inst_36111 + 1);var inst_36111__$1 = inst_36125;var state_36147__$1 = (function (){var statearr_36158 = state_36147;(statearr_36158[8] = inst_36111__$1);
(statearr_36158[10] = inst_36124);
return statearr_36158;
})();var statearr_36159_36185 = state_36147__$1;(statearr_36159_36185[2] = null);
(statearr_36159_36185[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 10))
{var inst_36115 = (state_36147[2]);var inst_36116 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36147__$1 = (function (){var statearr_36160 = state_36147;(statearr_36160[11] = inst_36115);
return statearr_36160;
})();var statearr_36161_36186 = state_36147__$1;(statearr_36161_36186[2] = inst_36116);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36147__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 11))
{var inst_36111 = (state_36147[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36147,10,Object,null,9);var inst_36120 = chs__$1.call(null,inst_36111);var inst_36121 = done.call(null,inst_36111);var inst_36122 = cljs.core.async.take_BANG_.call(null,inst_36120,inst_36121);var state_36147__$1 = state_36147;var statearr_36162_36187 = state_36147__$1;(statearr_36162_36187[2] = inst_36122);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36147__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 12))
{var inst_36133 = (state_36147[12]);var inst_36133__$1 = (state_36147[2]);var inst_36134 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36133__$1);var state_36147__$1 = (function (){var statearr_36163 = state_36147;(statearr_36163[12] = inst_36133__$1);
return statearr_36163;
})();if(cljs.core.truth_(inst_36134))
{var statearr_36164_36188 = state_36147__$1;(statearr_36164_36188[1] = 13);
} else
{var statearr_36165_36189 = state_36147__$1;(statearr_36165_36189[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 13))
{var inst_36136 = cljs.core.async.close_BANG_.call(null,out);var state_36147__$1 = state_36147;var statearr_36166_36190 = state_36147__$1;(statearr_36166_36190[2] = inst_36136);
(statearr_36166_36190[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 14))
{var inst_36133 = (state_36147[12]);var inst_36138 = cljs.core.apply.call(null,f,inst_36133);var state_36147__$1 = state_36147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36147__$1,16,out,inst_36138);
} else
{if((state_val_36148 === 15))
{var inst_36143 = (state_36147[2]);var state_36147__$1 = state_36147;var statearr_36167_36191 = state_36147__$1;(statearr_36167_36191[2] = inst_36143);
(statearr_36167_36191[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36148 === 16))
{var inst_36140 = (state_36147[2]);var state_36147__$1 = (function (){var statearr_36168 = state_36147;(statearr_36168[13] = inst_36140);
return statearr_36168;
})();var statearr_36169_36192 = state_36147__$1;(statearr_36169_36192[2] = null);
(statearr_36169_36192[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_36173 = (new Array(14));(statearr_36173[0] = state_machine__12859__auto__);
(statearr_36173[1] = 1);
return statearr_36173;
});
var state_machine__12859__auto____1 = (function (state_36147){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_36147);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e36174){if((e36174 instanceof Object))
{var ex__12862__auto__ = e36174;var statearr_36175_36193 = state_36147;(statearr_36175_36193[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36147);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36194 = state_36147;
state_36147 = G__36194;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_36147){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_36147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_36176 = f__12991__auto__.call(null);(statearr_36176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___36177);
return statearr_36176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___36302 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_36278){var state_val_36279 = (state_36278[1]);if((state_val_36279 === 1))
{var inst_36249 = cljs.core.vec.call(null,chs);var inst_36250 = inst_36249;var state_36278__$1 = (function (){var statearr_36280 = state_36278;(statearr_36280[7] = inst_36250);
return statearr_36280;
})();var statearr_36281_36303 = state_36278__$1;(statearr_36281_36303[2] = null);
(statearr_36281_36303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36279 === 2))
{var inst_36250 = (state_36278[7]);var inst_36252 = cljs.core.count.call(null,inst_36250);var inst_36253 = (inst_36252 > 0);var state_36278__$1 = state_36278;if(cljs.core.truth_(inst_36253))
{var statearr_36282_36304 = state_36278__$1;(statearr_36282_36304[1] = 4);
} else
{var statearr_36283_36305 = state_36278__$1;(statearr_36283_36305[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36279 === 3))
{var inst_36276 = (state_36278[2]);var state_36278__$1 = state_36278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36278__$1,inst_36276);
} else
{if((state_val_36279 === 4))
{var inst_36250 = (state_36278[7]);var state_36278__$1 = state_36278;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36278__$1,7,inst_36250);
} else
{if((state_val_36279 === 5))
{var inst_36272 = cljs.core.async.close_BANG_.call(null,out);var state_36278__$1 = state_36278;var statearr_36284_36306 = state_36278__$1;(statearr_36284_36306[2] = inst_36272);
(statearr_36284_36306[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36279 === 6))
{var inst_36274 = (state_36278[2]);var state_36278__$1 = state_36278;var statearr_36285_36307 = state_36278__$1;(statearr_36285_36307[2] = inst_36274);
(statearr_36285_36307[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36279 === 7))
{var inst_36258 = (state_36278[8]);var inst_36257 = (state_36278[9]);var inst_36257__$1 = (state_36278[2]);var inst_36258__$1 = cljs.core.nth.call(null,inst_36257__$1,0,null);var inst_36259 = cljs.core.nth.call(null,inst_36257__$1,1,null);var inst_36260 = (inst_36258__$1 == null);var state_36278__$1 = (function (){var statearr_36286 = state_36278;(statearr_36286[10] = inst_36259);
(statearr_36286[8] = inst_36258__$1);
(statearr_36286[9] = inst_36257__$1);
return statearr_36286;
})();if(cljs.core.truth_(inst_36260))
{var statearr_36287_36308 = state_36278__$1;(statearr_36287_36308[1] = 8);
} else
{var statearr_36288_36309 = state_36278__$1;(statearr_36288_36309[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36279 === 8))
{var inst_36259 = (state_36278[10]);var inst_36258 = (state_36278[8]);var inst_36257 = (state_36278[9]);var inst_36250 = (state_36278[7]);var inst_36262 = (function (){var c = inst_36259;var v = inst_36258;var vec__36255 = inst_36257;var cs = inst_36250;return ((function (c,v,vec__36255,cs,inst_36259,inst_36258,inst_36257,inst_36250,state_val_36279){
return (function (p1__36195_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36195_SHARP_);
});
;})(c,v,vec__36255,cs,inst_36259,inst_36258,inst_36257,inst_36250,state_val_36279))
})();var inst_36263 = cljs.core.filterv.call(null,inst_36262,inst_36250);var inst_36250__$1 = inst_36263;var state_36278__$1 = (function (){var statearr_36289 = state_36278;(statearr_36289[7] = inst_36250__$1);
return statearr_36289;
})();var statearr_36290_36310 = state_36278__$1;(statearr_36290_36310[2] = null);
(statearr_36290_36310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36279 === 9))
{var inst_36258 = (state_36278[8]);var state_36278__$1 = state_36278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36278__$1,11,out,inst_36258);
} else
{if((state_val_36279 === 10))
{var inst_36270 = (state_36278[2]);var state_36278__$1 = state_36278;var statearr_36292_36311 = state_36278__$1;(statearr_36292_36311[2] = inst_36270);
(statearr_36292_36311[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36279 === 11))
{var inst_36250 = (state_36278[7]);var inst_36267 = (state_36278[2]);var tmp36291 = inst_36250;var inst_36250__$1 = tmp36291;var state_36278__$1 = (function (){var statearr_36293 = state_36278;(statearr_36293[11] = inst_36267);
(statearr_36293[7] = inst_36250__$1);
return statearr_36293;
})();var statearr_36294_36312 = state_36278__$1;(statearr_36294_36312[2] = null);
(statearr_36294_36312[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_36298 = (new Array(12));(statearr_36298[0] = state_machine__12859__auto__);
(statearr_36298[1] = 1);
return statearr_36298;
});
var state_machine__12859__auto____1 = (function (state_36278){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_36278);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e36299){if((e36299 instanceof Object))
{var ex__12862__auto__ = e36299;var statearr_36300_36313 = state_36278;(statearr_36300_36313[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36278);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36314 = state_36278;
state_36278 = G__36314;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_36278){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_36278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_36301 = f__12991__auto__.call(null);(statearr_36301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___36302);
return statearr_36301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___36407 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_36384){var state_val_36385 = (state_36384[1]);if((state_val_36385 === 1))
{var inst_36361 = 0;var state_36384__$1 = (function (){var statearr_36386 = state_36384;(statearr_36386[7] = inst_36361);
return statearr_36386;
})();var statearr_36387_36408 = state_36384__$1;(statearr_36387_36408[2] = null);
(statearr_36387_36408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36385 === 2))
{var inst_36361 = (state_36384[7]);var inst_36363 = (inst_36361 < n);var state_36384__$1 = state_36384;if(cljs.core.truth_(inst_36363))
{var statearr_36388_36409 = state_36384__$1;(statearr_36388_36409[1] = 4);
} else
{var statearr_36389_36410 = state_36384__$1;(statearr_36389_36410[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36385 === 3))
{var inst_36381 = (state_36384[2]);var inst_36382 = cljs.core.async.close_BANG_.call(null,out);var state_36384__$1 = (function (){var statearr_36390 = state_36384;(statearr_36390[8] = inst_36381);
return statearr_36390;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36384__$1,inst_36382);
} else
{if((state_val_36385 === 4))
{var state_36384__$1 = state_36384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36384__$1,7,ch);
} else
{if((state_val_36385 === 5))
{var state_36384__$1 = state_36384;var statearr_36391_36411 = state_36384__$1;(statearr_36391_36411[2] = null);
(statearr_36391_36411[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36385 === 6))
{var inst_36379 = (state_36384[2]);var state_36384__$1 = state_36384;var statearr_36392_36412 = state_36384__$1;(statearr_36392_36412[2] = inst_36379);
(statearr_36392_36412[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36385 === 7))
{var inst_36366 = (state_36384[9]);var inst_36366__$1 = (state_36384[2]);var inst_36367 = (inst_36366__$1 == null);var inst_36368 = cljs.core.not.call(null,inst_36367);var state_36384__$1 = (function (){var statearr_36393 = state_36384;(statearr_36393[9] = inst_36366__$1);
return statearr_36393;
})();if(inst_36368)
{var statearr_36394_36413 = state_36384__$1;(statearr_36394_36413[1] = 8);
} else
{var statearr_36395_36414 = state_36384__$1;(statearr_36395_36414[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36385 === 8))
{var inst_36366 = (state_36384[9]);var state_36384__$1 = state_36384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36384__$1,11,out,inst_36366);
} else
{if((state_val_36385 === 9))
{var state_36384__$1 = state_36384;var statearr_36396_36415 = state_36384__$1;(statearr_36396_36415[2] = null);
(statearr_36396_36415[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36385 === 10))
{var inst_36376 = (state_36384[2]);var state_36384__$1 = state_36384;var statearr_36397_36416 = state_36384__$1;(statearr_36397_36416[2] = inst_36376);
(statearr_36397_36416[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36385 === 11))
{var inst_36361 = (state_36384[7]);var inst_36371 = (state_36384[2]);var inst_36372 = (inst_36361 + 1);var inst_36361__$1 = inst_36372;var state_36384__$1 = (function (){var statearr_36398 = state_36384;(statearr_36398[7] = inst_36361__$1);
(statearr_36398[10] = inst_36371);
return statearr_36398;
})();var statearr_36399_36417 = state_36384__$1;(statearr_36399_36417[2] = null);
(statearr_36399_36417[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_36403 = (new Array(11));(statearr_36403[0] = state_machine__12859__auto__);
(statearr_36403[1] = 1);
return statearr_36403;
});
var state_machine__12859__auto____1 = (function (state_36384){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_36384);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e36404){if((e36404 instanceof Object))
{var ex__12862__auto__ = e36404;var statearr_36405_36418 = state_36384;(statearr_36405_36418[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36419 = state_36384;
state_36384 = G__36419;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_36384){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_36384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_36406 = f__12991__auto__.call(null);(statearr_36406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___36407);
return statearr_36406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___36516 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_36491){var state_val_36492 = (state_36491[1]);if((state_val_36492 === 1))
{var inst_36468 = null;var state_36491__$1 = (function (){var statearr_36493 = state_36491;(statearr_36493[7] = inst_36468);
return statearr_36493;
})();var statearr_36494_36517 = state_36491__$1;(statearr_36494_36517[2] = null);
(statearr_36494_36517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 2))
{var state_36491__$1 = state_36491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,4,ch);
} else
{if((state_val_36492 === 3))
{var inst_36488 = (state_36491[2]);var inst_36489 = cljs.core.async.close_BANG_.call(null,out);var state_36491__$1 = (function (){var statearr_36495 = state_36491;(statearr_36495[8] = inst_36488);
return statearr_36495;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36491__$1,inst_36489);
} else
{if((state_val_36492 === 4))
{var inst_36471 = (state_36491[9]);var inst_36471__$1 = (state_36491[2]);var inst_36472 = (inst_36471__$1 == null);var inst_36473 = cljs.core.not.call(null,inst_36472);var state_36491__$1 = (function (){var statearr_36496 = state_36491;(statearr_36496[9] = inst_36471__$1);
return statearr_36496;
})();if(inst_36473)
{var statearr_36497_36518 = state_36491__$1;(statearr_36497_36518[1] = 5);
} else
{var statearr_36498_36519 = state_36491__$1;(statearr_36498_36519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 5))
{var inst_36468 = (state_36491[7]);var inst_36471 = (state_36491[9]);var inst_36475 = cljs.core._EQ_.call(null,inst_36471,inst_36468);var state_36491__$1 = state_36491;if(inst_36475)
{var statearr_36499_36520 = state_36491__$1;(statearr_36499_36520[1] = 8);
} else
{var statearr_36500_36521 = state_36491__$1;(statearr_36500_36521[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 6))
{var state_36491__$1 = state_36491;var statearr_36502_36522 = state_36491__$1;(statearr_36502_36522[2] = null);
(statearr_36502_36522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 7))
{var inst_36486 = (state_36491[2]);var state_36491__$1 = state_36491;var statearr_36503_36523 = state_36491__$1;(statearr_36503_36523[2] = inst_36486);
(statearr_36503_36523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 8))
{var inst_36468 = (state_36491[7]);var tmp36501 = inst_36468;var inst_36468__$1 = tmp36501;var state_36491__$1 = (function (){var statearr_36504 = state_36491;(statearr_36504[7] = inst_36468__$1);
return statearr_36504;
})();var statearr_36505_36524 = state_36491__$1;(statearr_36505_36524[2] = null);
(statearr_36505_36524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 9))
{var inst_36471 = (state_36491[9]);var state_36491__$1 = state_36491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36491__$1,11,out,inst_36471);
} else
{if((state_val_36492 === 10))
{var inst_36483 = (state_36491[2]);var state_36491__$1 = state_36491;var statearr_36506_36525 = state_36491__$1;(statearr_36506_36525[2] = inst_36483);
(statearr_36506_36525[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 11))
{var inst_36471 = (state_36491[9]);var inst_36480 = (state_36491[2]);var inst_36468 = inst_36471;var state_36491__$1 = (function (){var statearr_36507 = state_36491;(statearr_36507[7] = inst_36468);
(statearr_36507[10] = inst_36480);
return statearr_36507;
})();var statearr_36508_36526 = state_36491__$1;(statearr_36508_36526[2] = null);
(statearr_36508_36526[1] = 2);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_36512 = (new Array(11));(statearr_36512[0] = state_machine__12859__auto__);
(statearr_36512[1] = 1);
return statearr_36512;
});
var state_machine__12859__auto____1 = (function (state_36491){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_36491);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e36513){if((e36513 instanceof Object))
{var ex__12862__auto__ = e36513;var statearr_36514_36527 = state_36491;(statearr_36514_36527[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36491);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36528 = state_36491;
state_36491 = G__36528;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_36491){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_36491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_36515 = f__12991__auto__.call(null);(statearr_36515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___36516);
return statearr_36515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___36663 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_36633){var state_val_36634 = (state_36633[1]);if((state_val_36634 === 1))
{var inst_36596 = (new Array(n));var inst_36597 = inst_36596;var inst_36598 = 0;var state_36633__$1 = (function (){var statearr_36635 = state_36633;(statearr_36635[7] = inst_36598);
(statearr_36635[8] = inst_36597);
return statearr_36635;
})();var statearr_36636_36664 = state_36633__$1;(statearr_36636_36664[2] = null);
(statearr_36636_36664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36634 === 2))
{var state_36633__$1 = state_36633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36633__$1,4,ch);
} else
{if((state_val_36634 === 3))
{var inst_36631 = (state_36633[2]);var state_36633__$1 = state_36633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36633__$1,inst_36631);
} else
{if((state_val_36634 === 4))
{var inst_36601 = (state_36633[9]);var inst_36601__$1 = (state_36633[2]);var inst_36602 = (inst_36601__$1 == null);var inst_36603 = cljs.core.not.call(null,inst_36602);var state_36633__$1 = (function (){var statearr_36637 = state_36633;(statearr_36637[9] = inst_36601__$1);
return statearr_36637;
})();if(inst_36603)
{var statearr_36638_36665 = state_36633__$1;(statearr_36638_36665[1] = 5);
} else
{var statearr_36639_36666 = state_36633__$1;(statearr_36639_36666[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36634 === 5))
{var inst_36598 = (state_36633[7]);var inst_36597 = (state_36633[8]);var inst_36606 = (state_36633[10]);var inst_36601 = (state_36633[9]);var inst_36605 = (inst_36597[inst_36598] = inst_36601);var inst_36606__$1 = (inst_36598 + 1);var inst_36607 = (inst_36606__$1 < n);var state_36633__$1 = (function (){var statearr_36640 = state_36633;(statearr_36640[10] = inst_36606__$1);
(statearr_36640[11] = inst_36605);
return statearr_36640;
})();if(cljs.core.truth_(inst_36607))
{var statearr_36641_36667 = state_36633__$1;(statearr_36641_36667[1] = 8);
} else
{var statearr_36642_36668 = state_36633__$1;(statearr_36642_36668[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36634 === 6))
{var inst_36598 = (state_36633[7]);var inst_36619 = (inst_36598 > 0);var state_36633__$1 = state_36633;if(cljs.core.truth_(inst_36619))
{var statearr_36644_36669 = state_36633__$1;(statearr_36644_36669[1] = 12);
} else
{var statearr_36645_36670 = state_36633__$1;(statearr_36645_36670[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36634 === 7))
{var inst_36629 = (state_36633[2]);var state_36633__$1 = state_36633;var statearr_36646_36671 = state_36633__$1;(statearr_36646_36671[2] = inst_36629);
(statearr_36646_36671[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36634 === 8))
{var inst_36597 = (state_36633[8]);var inst_36606 = (state_36633[10]);var tmp36643 = inst_36597;var inst_36597__$1 = tmp36643;var inst_36598 = inst_36606;var state_36633__$1 = (function (){var statearr_36647 = state_36633;(statearr_36647[7] = inst_36598);
(statearr_36647[8] = inst_36597__$1);
return statearr_36647;
})();var statearr_36648_36672 = state_36633__$1;(statearr_36648_36672[2] = null);
(statearr_36648_36672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36634 === 9))
{var inst_36597 = (state_36633[8]);var inst_36611 = cljs.core.vec.call(null,inst_36597);var state_36633__$1 = state_36633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36633__$1,11,out,inst_36611);
} else
{if((state_val_36634 === 10))
{var inst_36617 = (state_36633[2]);var state_36633__$1 = state_36633;var statearr_36649_36673 = state_36633__$1;(statearr_36649_36673[2] = inst_36617);
(statearr_36649_36673[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36634 === 11))
{var inst_36613 = (state_36633[2]);var inst_36614 = (new Array(n));var inst_36597 = inst_36614;var inst_36598 = 0;var state_36633__$1 = (function (){var statearr_36650 = state_36633;(statearr_36650[7] = inst_36598);
(statearr_36650[8] = inst_36597);
(statearr_36650[12] = inst_36613);
return statearr_36650;
})();var statearr_36651_36674 = state_36633__$1;(statearr_36651_36674[2] = null);
(statearr_36651_36674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36634 === 12))
{var inst_36597 = (state_36633[8]);var inst_36621 = cljs.core.vec.call(null,inst_36597);var state_36633__$1 = state_36633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36633__$1,15,out,inst_36621);
} else
{if((state_val_36634 === 13))
{var state_36633__$1 = state_36633;var statearr_36652_36675 = state_36633__$1;(statearr_36652_36675[2] = null);
(statearr_36652_36675[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36634 === 14))
{var inst_36626 = (state_36633[2]);var inst_36627 = cljs.core.async.close_BANG_.call(null,out);var state_36633__$1 = (function (){var statearr_36653 = state_36633;(statearr_36653[13] = inst_36626);
return statearr_36653;
})();var statearr_36654_36676 = state_36633__$1;(statearr_36654_36676[2] = inst_36627);
(statearr_36654_36676[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36634 === 15))
{var inst_36623 = (state_36633[2]);var state_36633__$1 = state_36633;var statearr_36655_36677 = state_36633__$1;(statearr_36655_36677[2] = inst_36623);
(statearr_36655_36677[1] = 14);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_36659 = (new Array(14));(statearr_36659[0] = state_machine__12859__auto__);
(statearr_36659[1] = 1);
return statearr_36659;
});
var state_machine__12859__auto____1 = (function (state_36633){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_36633);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e36660){if((e36660 instanceof Object))
{var ex__12862__auto__ = e36660;var statearr_36661_36678 = state_36633;(statearr_36661_36678[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36633);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36681 = state_36633;
state_36633 = G__36681;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_36633){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_36633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_36662 = f__12991__auto__.call(null);(statearr_36662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___36663);
return statearr_36662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12990__auto___36824 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12991__auto__ = (function (){var switch__12858__auto__ = (function (state_36794){var state_val_36795 = (state_36794[1]);if((state_val_36795 === 1))
{var inst_36753 = (new Array(0));var inst_36754 = inst_36753;var inst_36755 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_36794__$1 = (function (){var statearr_36796 = state_36794;(statearr_36796[7] = inst_36755);
(statearr_36796[8] = inst_36754);
return statearr_36796;
})();var statearr_36797_36825 = state_36794__$1;(statearr_36797_36825[2] = null);
(statearr_36797_36825[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36795 === 2))
{var state_36794__$1 = state_36794;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36794__$1,4,ch);
} else
{if((state_val_36795 === 3))
{var inst_36792 = (state_36794[2]);var state_36794__$1 = state_36794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36794__$1,inst_36792);
} else
{if((state_val_36795 === 4))
{var inst_36758 = (state_36794[9]);var inst_36758__$1 = (state_36794[2]);var inst_36759 = (inst_36758__$1 == null);var inst_36760 = cljs.core.not.call(null,inst_36759);var state_36794__$1 = (function (){var statearr_36798 = state_36794;(statearr_36798[9] = inst_36758__$1);
return statearr_36798;
})();if(inst_36760)
{var statearr_36799_36826 = state_36794__$1;(statearr_36799_36826[1] = 5);
} else
{var statearr_36800_36827 = state_36794__$1;(statearr_36800_36827[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36795 === 5))
{var inst_36755 = (state_36794[7]);var inst_36762 = (state_36794[10]);var inst_36758 = (state_36794[9]);var inst_36762__$1 = f.call(null,inst_36758);var inst_36763 = cljs.core._EQ_.call(null,inst_36762__$1,inst_36755);var inst_36764 = cljs.core.keyword_identical_QMARK_.call(null,inst_36755,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_36765 = (inst_36763) || (inst_36764);var state_36794__$1 = (function (){var statearr_36801 = state_36794;(statearr_36801[10] = inst_36762__$1);
return statearr_36801;
})();if(cljs.core.truth_(inst_36765))
{var statearr_36802_36828 = state_36794__$1;(statearr_36802_36828[1] = 8);
} else
{var statearr_36803_36829 = state_36794__$1;(statearr_36803_36829[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36795 === 6))
{var inst_36754 = (state_36794[8]);var inst_36779 = inst_36754.length;var inst_36780 = (inst_36779 > 0);var state_36794__$1 = state_36794;if(cljs.core.truth_(inst_36780))
{var statearr_36805_36830 = state_36794__$1;(statearr_36805_36830[1] = 12);
} else
{var statearr_36806_36831 = state_36794__$1;(statearr_36806_36831[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36795 === 7))
{var inst_36790 = (state_36794[2]);var state_36794__$1 = state_36794;var statearr_36807_36832 = state_36794__$1;(statearr_36807_36832[2] = inst_36790);
(statearr_36807_36832[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36795 === 8))
{var inst_36754 = (state_36794[8]);var inst_36762 = (state_36794[10]);var inst_36758 = (state_36794[9]);var inst_36767 = inst_36754.push(inst_36758);var tmp36804 = inst_36754;var inst_36754__$1 = tmp36804;var inst_36755 = inst_36762;var state_36794__$1 = (function (){var statearr_36808 = state_36794;(statearr_36808[7] = inst_36755);
(statearr_36808[8] = inst_36754__$1);
(statearr_36808[11] = inst_36767);
return statearr_36808;
})();var statearr_36809_36833 = state_36794__$1;(statearr_36809_36833[2] = null);
(statearr_36809_36833[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36795 === 9))
{var inst_36754 = (state_36794[8]);var inst_36770 = cljs.core.vec.call(null,inst_36754);var state_36794__$1 = state_36794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36794__$1,11,out,inst_36770);
} else
{if((state_val_36795 === 10))
{var inst_36777 = (state_36794[2]);var state_36794__$1 = state_36794;var statearr_36810_36834 = state_36794__$1;(statearr_36810_36834[2] = inst_36777);
(statearr_36810_36834[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36795 === 11))
{var inst_36762 = (state_36794[10]);var inst_36758 = (state_36794[9]);var inst_36772 = (state_36794[2]);var inst_36773 = (new Array(0));var inst_36774 = inst_36773.push(inst_36758);var inst_36754 = inst_36773;var inst_36755 = inst_36762;var state_36794__$1 = (function (){var statearr_36811 = state_36794;(statearr_36811[7] = inst_36755);
(statearr_36811[8] = inst_36754);
(statearr_36811[12] = inst_36774);
(statearr_36811[13] = inst_36772);
return statearr_36811;
})();var statearr_36812_36835 = state_36794__$1;(statearr_36812_36835[2] = null);
(statearr_36812_36835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36795 === 12))
{var inst_36754 = (state_36794[8]);var inst_36782 = cljs.core.vec.call(null,inst_36754);var state_36794__$1 = state_36794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36794__$1,15,out,inst_36782);
} else
{if((state_val_36795 === 13))
{var state_36794__$1 = state_36794;var statearr_36813_36836 = state_36794__$1;(statearr_36813_36836[2] = null);
(statearr_36813_36836[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36795 === 14))
{var inst_36787 = (state_36794[2]);var inst_36788 = cljs.core.async.close_BANG_.call(null,out);var state_36794__$1 = (function (){var statearr_36814 = state_36794;(statearr_36814[14] = inst_36787);
return statearr_36814;
})();var statearr_36815_36837 = state_36794__$1;(statearr_36815_36837[2] = inst_36788);
(statearr_36815_36837[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36795 === 15))
{var inst_36784 = (state_36794[2]);var state_36794__$1 = state_36794;var statearr_36816_36838 = state_36794__$1;(statearr_36816_36838[2] = inst_36784);
(statearr_36816_36838[1] = 14);
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
});return ((function (switch__12858__auto__){
return (function() {
var state_machine__12859__auto__ = null;
var state_machine__12859__auto____0 = (function (){var statearr_36820 = (new Array(15));(statearr_36820[0] = state_machine__12859__auto__);
(statearr_36820[1] = 1);
return statearr_36820;
});
var state_machine__12859__auto____1 = (function (state_36794){while(true){
var ret_value__12860__auto__ = (function (){try{while(true){
var result__12861__auto__ = switch__12858__auto__.call(null,state_36794);if(cljs.core.keyword_identical_QMARK_.call(null,result__12861__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12861__auto__;
}
break;
}
}catch (e36821){if((e36821 instanceof Object))
{var ex__12862__auto__ = e36821;var statearr_36822_36839 = state_36794;(statearr_36822_36839[5] = ex__12862__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36794);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12860__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36840 = state_36794;
state_36794 = G__36840;
continue;
}
} else
{return ret_value__12860__auto__;
}
break;
}
});
state_machine__12859__auto__ = function(state_36794){
switch(arguments.length){
case 0:
return state_machine__12859__auto____0.call(this);
case 1:
return state_machine__12859__auto____1.call(this,state_36794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12859__auto____0;
state_machine__12859__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12859__auto____1;
return state_machine__12859__auto__;
})()
;})(switch__12858__auto__))
})();var state__12992__auto__ = (function (){var statearr_36823 = f__12991__auto__.call(null);(statearr_36823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12990__auto___36824);
return statearr_36823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12992__auto__);
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
