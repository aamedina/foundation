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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t474498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t474498 = (function (f,fn_handler,meta474499){
this.f = f;
this.fn_handler = fn_handler;
this.meta474499 = meta474499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t474498.cljs$lang$type = true;
cljs.core.async.t474498.cljs$lang$ctorStr = "cljs.core.async/t474498";
cljs.core.async.t474498.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t474498");
});
cljs.core.async.t474498.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t474498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t474498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t474498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_474500){var self__ = this;
var _474500__$1 = this;return self__.meta474499;
});
cljs.core.async.t474498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_474500,meta474499__$1){var self__ = this;
var _474500__$1 = this;return (new cljs.core.async.t474498(self__.f,self__.fn_handler,meta474499__$1));
});
cljs.core.async.__GT_t474498 = (function __GT_t474498(f__$1,fn_handler__$1,meta474499){return (new cljs.core.async.t474498(f__$1,fn_handler__$1,meta474499));
});
}
return (new cljs.core.async.t474498(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__474502 = buff;if(G__474502)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__474502.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__474502.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__474502);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__474502);
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
{var val_474503 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_474503);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_474503);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___474504 = n;var x_474505 = 0;while(true){
if((x_474505 < n__8553__auto___474504))
{(a[x_474505] = 0);
{
var G__474506 = (x_474505 + 1);
x_474505 = G__474506;
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
var G__474507 = (i + 1);
i = G__474507;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t474511 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t474511 = (function (flag,alt_flag,meta474512){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta474512 = meta474512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t474511.cljs$lang$type = true;
cljs.core.async.t474511.cljs$lang$ctorStr = "cljs.core.async/t474511";
cljs.core.async.t474511.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t474511");
});
cljs.core.async.t474511.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t474511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t474511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t474511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_474513){var self__ = this;
var _474513__$1 = this;return self__.meta474512;
});
cljs.core.async.t474511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_474513,meta474512__$1){var self__ = this;
var _474513__$1 = this;return (new cljs.core.async.t474511(self__.flag,self__.alt_flag,meta474512__$1));
});
cljs.core.async.__GT_t474511 = (function __GT_t474511(flag__$1,alt_flag__$1,meta474512){return (new cljs.core.async.t474511(flag__$1,alt_flag__$1,meta474512));
});
}
return (new cljs.core.async.t474511(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t474517 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t474517 = (function (cb,flag,alt_handler,meta474518){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta474518 = meta474518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t474517.cljs$lang$type = true;
cljs.core.async.t474517.cljs$lang$ctorStr = "cljs.core.async/t474517";
cljs.core.async.t474517.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t474517");
});
cljs.core.async.t474517.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t474517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t474517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t474517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_474519){var self__ = this;
var _474519__$1 = this;return self__.meta474518;
});
cljs.core.async.t474517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_474519,meta474518__$1){var self__ = this;
var _474519__$1 = this;return (new cljs.core.async.t474517(self__.cb,self__.flag,self__.alt_handler,meta474518__$1));
});
cljs.core.async.__GT_t474517 = (function __GT_t474517(cb__$1,flag__$1,alt_handler__$1,meta474518){return (new cljs.core.async.t474517(cb__$1,flag__$1,alt_handler__$1,meta474518));
});
}
return (new cljs.core.async.t474517(cb,flag,alt_handler,null));
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
return (function (p1__474520_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__474520_SHARP_,port], null));
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
var G__474521 = (i + 1);
i = G__474521;
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
var alts_BANG___delegate = function (ports,p__474522){var map__474524 = p__474522;var map__474524__$1 = ((cljs.core.seq_QMARK_.call(null,map__474524))?cljs.core.apply.call(null,cljs.core.hash_map,map__474524):map__474524);var opts = map__474524__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__474522 = null;if (arguments.length > 1) {
  p__474522 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__474522);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__474525){
var ports = cljs.core.first(arglist__474525);
var p__474522 = cljs.core.rest(arglist__474525);
return alts_BANG___delegate(ports,p__474522);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t474533 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t474533 = (function (ch,f,map_LT_,meta474534){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta474534 = meta474534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t474533.cljs$lang$type = true;
cljs.core.async.t474533.cljs$lang$ctorStr = "cljs.core.async/t474533";
cljs.core.async.t474533.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t474533");
});
cljs.core.async.t474533.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t474533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t474533.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t474533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t474536 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t474536 = (function (fn1,_,meta474534,ch,f,map_LT_,meta474537){
this.fn1 = fn1;
this._ = _;
this.meta474534 = meta474534;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta474537 = meta474537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t474536.cljs$lang$type = true;
cljs.core.async.t474536.cljs$lang$ctorStr = "cljs.core.async/t474536";
cljs.core.async.t474536.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t474536");
});
cljs.core.async.t474536.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t474536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t474536.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t474536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__474526_SHARP_){return f1.call(null,(((p1__474526_SHARP_ == null))?null:self__.f.call(null,p1__474526_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t474536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_474538){var self__ = this;
var _474538__$1 = this;return self__.meta474537;
});
cljs.core.async.t474536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_474538,meta474537__$1){var self__ = this;
var _474538__$1 = this;return (new cljs.core.async.t474536(self__.fn1,self__._,self__.meta474534,self__.ch,self__.f,self__.map_LT_,meta474537__$1));
});
cljs.core.async.__GT_t474536 = (function __GT_t474536(fn1__$1,___$2,meta474534__$1,ch__$2,f__$2,map_LT___$2,meta474537){return (new cljs.core.async.t474536(fn1__$1,___$2,meta474534__$1,ch__$2,f__$2,map_LT___$2,meta474537));
});
}
return (new cljs.core.async.t474536(fn1,___$1,self__.meta474534,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t474533.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t474533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t474533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_474535){var self__ = this;
var _474535__$1 = this;return self__.meta474534;
});
cljs.core.async.t474533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_474535,meta474534__$1){var self__ = this;
var _474535__$1 = this;return (new cljs.core.async.t474533(self__.ch,self__.f,self__.map_LT_,meta474534__$1));
});
cljs.core.async.__GT_t474533 = (function __GT_t474533(ch__$1,f__$1,map_LT___$1,meta474534){return (new cljs.core.async.t474533(ch__$1,f__$1,map_LT___$1,meta474534));
});
}
return (new cljs.core.async.t474533(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t474542 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t474542 = (function (ch,f,map_GT_,meta474543){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta474543 = meta474543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t474542.cljs$lang$type = true;
cljs.core.async.t474542.cljs$lang$ctorStr = "cljs.core.async/t474542";
cljs.core.async.t474542.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t474542");
});
cljs.core.async.t474542.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t474542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t474542.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t474542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t474542.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t474542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t474542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_474544){var self__ = this;
var _474544__$1 = this;return self__.meta474543;
});
cljs.core.async.t474542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_474544,meta474543__$1){var self__ = this;
var _474544__$1 = this;return (new cljs.core.async.t474542(self__.ch,self__.f,self__.map_GT_,meta474543__$1));
});
cljs.core.async.__GT_t474542 = (function __GT_t474542(ch__$1,f__$1,map_GT___$1,meta474543){return (new cljs.core.async.t474542(ch__$1,f__$1,map_GT___$1,meta474543));
});
}
return (new cljs.core.async.t474542(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t474548 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t474548 = (function (ch,p,filter_GT_,meta474549){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta474549 = meta474549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t474548.cljs$lang$type = true;
cljs.core.async.t474548.cljs$lang$ctorStr = "cljs.core.async/t474548";
cljs.core.async.t474548.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t474548");
});
cljs.core.async.t474548.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t474548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t474548.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t474548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t474548.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t474548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t474548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_474550){var self__ = this;
var _474550__$1 = this;return self__.meta474549;
});
cljs.core.async.t474548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_474550,meta474549__$1){var self__ = this;
var _474550__$1 = this;return (new cljs.core.async.t474548(self__.ch,self__.p,self__.filter_GT_,meta474549__$1));
});
cljs.core.async.__GT_t474548 = (function __GT_t474548(ch__$1,p__$1,filter_GT___$1,meta474549){return (new cljs.core.async.t474548(ch__$1,p__$1,filter_GT___$1,meta474549));
});
}
return (new cljs.core.async.t474548(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10297__auto___474633 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_474612){var state_val_474613 = (state_474612[1]);if((state_val_474613 === 1))
{var state_474612__$1 = state_474612;var statearr_474614_474634 = state_474612__$1;(statearr_474614_474634[2] = null);
(statearr_474614_474634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474613 === 2))
{var state_474612__$1 = state_474612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_474612__$1,4,ch);
} else
{if((state_val_474613 === 3))
{var inst_474610 = (state_474612[2]);var state_474612__$1 = state_474612;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_474612__$1,inst_474610);
} else
{if((state_val_474613 === 4))
{var inst_474594 = (state_474612[7]);var inst_474594__$1 = (state_474612[2]);var inst_474595 = (inst_474594__$1 == null);var state_474612__$1 = (function (){var statearr_474615 = state_474612;(statearr_474615[7] = inst_474594__$1);
return statearr_474615;
})();if(cljs.core.truth_(inst_474595))
{var statearr_474616_474635 = state_474612__$1;(statearr_474616_474635[1] = 5);
} else
{var statearr_474617_474636 = state_474612__$1;(statearr_474617_474636[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474613 === 5))
{var inst_474597 = cljs.core.async.close_BANG_.call(null,out);var state_474612__$1 = state_474612;var statearr_474618_474637 = state_474612__$1;(statearr_474618_474637[2] = inst_474597);
(statearr_474618_474637[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474613 === 6))
{var inst_474594 = (state_474612[7]);var inst_474599 = p.call(null,inst_474594);var state_474612__$1 = state_474612;if(cljs.core.truth_(inst_474599))
{var statearr_474619_474638 = state_474612__$1;(statearr_474619_474638[1] = 8);
} else
{var statearr_474620_474639 = state_474612__$1;(statearr_474620_474639[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474613 === 7))
{var inst_474608 = (state_474612[2]);var state_474612__$1 = state_474612;var statearr_474621_474640 = state_474612__$1;(statearr_474621_474640[2] = inst_474608);
(statearr_474621_474640[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474613 === 8))
{var inst_474594 = (state_474612[7]);var state_474612__$1 = state_474612;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_474612__$1,11,out,inst_474594);
} else
{if((state_val_474613 === 9))
{var state_474612__$1 = state_474612;var statearr_474622_474641 = state_474612__$1;(statearr_474622_474641[2] = null);
(statearr_474622_474641[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474613 === 10))
{var inst_474605 = (state_474612[2]);var state_474612__$1 = (function (){var statearr_474623 = state_474612;(statearr_474623[8] = inst_474605);
return statearr_474623;
})();var statearr_474624_474642 = state_474612__$1;(statearr_474624_474642[2] = null);
(statearr_474624_474642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474613 === 11))
{var inst_474602 = (state_474612[2]);var state_474612__$1 = state_474612;var statearr_474625_474643 = state_474612__$1;(statearr_474625_474643[2] = inst_474602);
(statearr_474625_474643[1] = 10);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_474629 = (new Array(9));(statearr_474629[0] = state_machine__10228__auto__);
(statearr_474629[1] = 1);
return statearr_474629;
});
var state_machine__10228__auto____1 = (function (state_474612){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_474612);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e474630){if((e474630 instanceof Object))
{var ex__10231__auto__ = e474630;var statearr_474631_474644 = state_474612;(statearr_474631_474644[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_474612);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e474630;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__474645 = state_474612;
state_474612 = G__474645;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_474612){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_474612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_474632 = f__10298__auto__.call(null);(statearr_474632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___474633);
return statearr_474632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_474797){var state_val_474798 = (state_474797[1]);if((state_val_474798 === 1))
{var state_474797__$1 = state_474797;var statearr_474799_474836 = state_474797__$1;(statearr_474799_474836[2] = null);
(statearr_474799_474836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 2))
{var state_474797__$1 = state_474797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_474797__$1,4,in$);
} else
{if((state_val_474798 === 3))
{var inst_474795 = (state_474797[2]);var state_474797__$1 = state_474797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_474797__$1,inst_474795);
} else
{if((state_val_474798 === 4))
{var inst_474743 = (state_474797[7]);var inst_474743__$1 = (state_474797[2]);var inst_474744 = (inst_474743__$1 == null);var state_474797__$1 = (function (){var statearr_474800 = state_474797;(statearr_474800[7] = inst_474743__$1);
return statearr_474800;
})();if(cljs.core.truth_(inst_474744))
{var statearr_474801_474837 = state_474797__$1;(statearr_474801_474837[1] = 5);
} else
{var statearr_474802_474838 = state_474797__$1;(statearr_474802_474838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 5))
{var inst_474746 = cljs.core.async.close_BANG_.call(null,out);var state_474797__$1 = state_474797;var statearr_474803_474839 = state_474797__$1;(statearr_474803_474839[2] = inst_474746);
(statearr_474803_474839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 6))
{var inst_474743 = (state_474797[7]);var inst_474748 = f.call(null,inst_474743);var inst_474753 = cljs.core.seq.call(null,inst_474748);var inst_474754 = inst_474753;var inst_474755 = null;var inst_474756 = 0;var inst_474757 = 0;var state_474797__$1 = (function (){var statearr_474804 = state_474797;(statearr_474804[8] = inst_474754);
(statearr_474804[9] = inst_474755);
(statearr_474804[10] = inst_474757);
(statearr_474804[11] = inst_474756);
return statearr_474804;
})();var statearr_474805_474840 = state_474797__$1;(statearr_474805_474840[2] = null);
(statearr_474805_474840[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 7))
{var inst_474793 = (state_474797[2]);var state_474797__$1 = state_474797;var statearr_474806_474841 = state_474797__$1;(statearr_474806_474841[2] = inst_474793);
(statearr_474806_474841[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 8))
{var inst_474757 = (state_474797[10]);var inst_474756 = (state_474797[11]);var inst_474759 = (inst_474757 < inst_474756);var inst_474760 = inst_474759;var state_474797__$1 = state_474797;if(cljs.core.truth_(inst_474760))
{var statearr_474807_474842 = state_474797__$1;(statearr_474807_474842[1] = 10);
} else
{var statearr_474808_474843 = state_474797__$1;(statearr_474808_474843[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 9))
{var inst_474790 = (state_474797[2]);var state_474797__$1 = (function (){var statearr_474809 = state_474797;(statearr_474809[12] = inst_474790);
return statearr_474809;
})();var statearr_474810_474844 = state_474797__$1;(statearr_474810_474844[2] = null);
(statearr_474810_474844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 10))
{var inst_474755 = (state_474797[9]);var inst_474757 = (state_474797[10]);var inst_474762 = cljs.core._nth.call(null,inst_474755,inst_474757);var state_474797__$1 = state_474797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_474797__$1,13,out,inst_474762);
} else
{if((state_val_474798 === 11))
{var inst_474768 = (state_474797[13]);var inst_474754 = (state_474797[8]);var inst_474768__$1 = cljs.core.seq.call(null,inst_474754);var state_474797__$1 = (function (){var statearr_474814 = state_474797;(statearr_474814[13] = inst_474768__$1);
return statearr_474814;
})();if(inst_474768__$1)
{var statearr_474815_474845 = state_474797__$1;(statearr_474815_474845[1] = 14);
} else
{var statearr_474816_474846 = state_474797__$1;(statearr_474816_474846[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 12))
{var inst_474788 = (state_474797[2]);var state_474797__$1 = state_474797;var statearr_474817_474847 = state_474797__$1;(statearr_474817_474847[2] = inst_474788);
(statearr_474817_474847[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 13))
{var inst_474754 = (state_474797[8]);var inst_474755 = (state_474797[9]);var inst_474757 = (state_474797[10]);var inst_474756 = (state_474797[11]);var inst_474764 = (state_474797[2]);var inst_474765 = (inst_474757 + 1);var tmp474811 = inst_474754;var tmp474812 = inst_474755;var tmp474813 = inst_474756;var inst_474754__$1 = tmp474811;var inst_474755__$1 = tmp474812;var inst_474756__$1 = tmp474813;var inst_474757__$1 = inst_474765;var state_474797__$1 = (function (){var statearr_474818 = state_474797;(statearr_474818[8] = inst_474754__$1);
(statearr_474818[9] = inst_474755__$1);
(statearr_474818[10] = inst_474757__$1);
(statearr_474818[11] = inst_474756__$1);
(statearr_474818[14] = inst_474764);
return statearr_474818;
})();var statearr_474819_474848 = state_474797__$1;(statearr_474819_474848[2] = null);
(statearr_474819_474848[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 14))
{var inst_474768 = (state_474797[13]);var inst_474770 = cljs.core.chunked_seq_QMARK_.call(null,inst_474768);var state_474797__$1 = state_474797;if(inst_474770)
{var statearr_474820_474849 = state_474797__$1;(statearr_474820_474849[1] = 17);
} else
{var statearr_474821_474850 = state_474797__$1;(statearr_474821_474850[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 15))
{var state_474797__$1 = state_474797;var statearr_474822_474851 = state_474797__$1;(statearr_474822_474851[2] = null);
(statearr_474822_474851[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 16))
{var inst_474786 = (state_474797[2]);var state_474797__$1 = state_474797;var statearr_474823_474852 = state_474797__$1;(statearr_474823_474852[2] = inst_474786);
(statearr_474823_474852[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 17))
{var inst_474768 = (state_474797[13]);var inst_474772 = cljs.core.chunk_first.call(null,inst_474768);var inst_474773 = cljs.core.chunk_rest.call(null,inst_474768);var inst_474774 = cljs.core.count.call(null,inst_474772);var inst_474754 = inst_474773;var inst_474755 = inst_474772;var inst_474756 = inst_474774;var inst_474757 = 0;var state_474797__$1 = (function (){var statearr_474824 = state_474797;(statearr_474824[8] = inst_474754);
(statearr_474824[9] = inst_474755);
(statearr_474824[10] = inst_474757);
(statearr_474824[11] = inst_474756);
return statearr_474824;
})();var statearr_474825_474853 = state_474797__$1;(statearr_474825_474853[2] = null);
(statearr_474825_474853[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 18))
{var inst_474768 = (state_474797[13]);var inst_474777 = cljs.core.first.call(null,inst_474768);var state_474797__$1 = state_474797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_474797__$1,20,out,inst_474777);
} else
{if((state_val_474798 === 19))
{var inst_474783 = (state_474797[2]);var state_474797__$1 = state_474797;var statearr_474826_474854 = state_474797__$1;(statearr_474826_474854[2] = inst_474783);
(statearr_474826_474854[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474798 === 20))
{var inst_474768 = (state_474797[13]);var inst_474779 = (state_474797[2]);var inst_474780 = cljs.core.next.call(null,inst_474768);var inst_474754 = inst_474780;var inst_474755 = null;var inst_474756 = 0;var inst_474757 = 0;var state_474797__$1 = (function (){var statearr_474827 = state_474797;(statearr_474827[8] = inst_474754);
(statearr_474827[9] = inst_474755);
(statearr_474827[15] = inst_474779);
(statearr_474827[10] = inst_474757);
(statearr_474827[11] = inst_474756);
return statearr_474827;
})();var statearr_474828_474855 = state_474797__$1;(statearr_474828_474855[2] = null);
(statearr_474828_474855[1] = 8);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_474832 = (new Array(16));(statearr_474832[0] = state_machine__10228__auto__);
(statearr_474832[1] = 1);
return statearr_474832;
});
var state_machine__10228__auto____1 = (function (state_474797){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_474797);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e474833){if((e474833 instanceof Object))
{var ex__10231__auto__ = e474833;var statearr_474834_474856 = state_474797;(statearr_474834_474856[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_474797);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e474833;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__474857 = state_474797;
state_474797 = G__474857;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_474797){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_474797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_474835 = f__10298__auto__.call(null);(statearr_474835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_474835;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10297__auto___474938 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_474917){var state_val_474918 = (state_474917[1]);if((state_val_474918 === 1))
{var state_474917__$1 = state_474917;var statearr_474919_474939 = state_474917__$1;(statearr_474919_474939[2] = null);
(statearr_474919_474939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474918 === 2))
{var state_474917__$1 = state_474917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_474917__$1,4,from);
} else
{if((state_val_474918 === 3))
{var inst_474915 = (state_474917[2]);var state_474917__$1 = state_474917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_474917__$1,inst_474915);
} else
{if((state_val_474918 === 4))
{var inst_474900 = (state_474917[7]);var inst_474900__$1 = (state_474917[2]);var inst_474901 = (inst_474900__$1 == null);var state_474917__$1 = (function (){var statearr_474920 = state_474917;(statearr_474920[7] = inst_474900__$1);
return statearr_474920;
})();if(cljs.core.truth_(inst_474901))
{var statearr_474921_474940 = state_474917__$1;(statearr_474921_474940[1] = 5);
} else
{var statearr_474922_474941 = state_474917__$1;(statearr_474922_474941[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474918 === 5))
{var state_474917__$1 = state_474917;if(cljs.core.truth_(close_QMARK_))
{var statearr_474923_474942 = state_474917__$1;(statearr_474923_474942[1] = 8);
} else
{var statearr_474924_474943 = state_474917__$1;(statearr_474924_474943[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474918 === 6))
{var inst_474900 = (state_474917[7]);var state_474917__$1 = state_474917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_474917__$1,11,to,inst_474900);
} else
{if((state_val_474918 === 7))
{var inst_474913 = (state_474917[2]);var state_474917__$1 = state_474917;var statearr_474925_474944 = state_474917__$1;(statearr_474925_474944[2] = inst_474913);
(statearr_474925_474944[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474918 === 8))
{var inst_474904 = cljs.core.async.close_BANG_.call(null,to);var state_474917__$1 = state_474917;var statearr_474926_474945 = state_474917__$1;(statearr_474926_474945[2] = inst_474904);
(statearr_474926_474945[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474918 === 9))
{var state_474917__$1 = state_474917;var statearr_474927_474946 = state_474917__$1;(statearr_474927_474946[2] = null);
(statearr_474927_474946[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474918 === 10))
{var inst_474907 = (state_474917[2]);var state_474917__$1 = state_474917;var statearr_474928_474947 = state_474917__$1;(statearr_474928_474947[2] = inst_474907);
(statearr_474928_474947[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_474918 === 11))
{var inst_474910 = (state_474917[2]);var state_474917__$1 = (function (){var statearr_474929 = state_474917;(statearr_474929[8] = inst_474910);
return statearr_474929;
})();var statearr_474930_474948 = state_474917__$1;(statearr_474930_474948[2] = null);
(statearr_474930_474948[1] = 2);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_474934 = (new Array(9));(statearr_474934[0] = state_machine__10228__auto__);
(statearr_474934[1] = 1);
return statearr_474934;
});
var state_machine__10228__auto____1 = (function (state_474917){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_474917);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e474935){if((e474935 instanceof Object))
{var ex__10231__auto__ = e474935;var statearr_474936_474949 = state_474917;(statearr_474936_474949[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_474917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e474935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__474950 = state_474917;
state_474917 = G__474950;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_474917){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_474917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_474937 = f__10298__auto__.call(null);(statearr_474937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___474938);
return statearr_474937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10297__auto___475037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_475015){var state_val_475016 = (state_475015[1]);if((state_val_475016 === 1))
{var state_475015__$1 = state_475015;var statearr_475017_475038 = state_475015__$1;(statearr_475017_475038[2] = null);
(statearr_475017_475038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475016 === 2))
{var state_475015__$1 = state_475015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_475015__$1,4,ch);
} else
{if((state_val_475016 === 3))
{var inst_475013 = (state_475015[2]);var state_475015__$1 = state_475015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_475015__$1,inst_475013);
} else
{if((state_val_475016 === 4))
{var inst_474996 = (state_475015[7]);var inst_474996__$1 = (state_475015[2]);var inst_474997 = (inst_474996__$1 == null);var state_475015__$1 = (function (){var statearr_475018 = state_475015;(statearr_475018[7] = inst_474996__$1);
return statearr_475018;
})();if(cljs.core.truth_(inst_474997))
{var statearr_475019_475039 = state_475015__$1;(statearr_475019_475039[1] = 5);
} else
{var statearr_475020_475040 = state_475015__$1;(statearr_475020_475040[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475016 === 5))
{var inst_474999 = cljs.core.async.close_BANG_.call(null,tc);var inst_475000 = cljs.core.async.close_BANG_.call(null,fc);var state_475015__$1 = (function (){var statearr_475021 = state_475015;(statearr_475021[8] = inst_474999);
return statearr_475021;
})();var statearr_475022_475041 = state_475015__$1;(statearr_475022_475041[2] = inst_475000);
(statearr_475022_475041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475016 === 6))
{var inst_474996 = (state_475015[7]);var inst_475002 = p.call(null,inst_474996);var state_475015__$1 = state_475015;if(cljs.core.truth_(inst_475002))
{var statearr_475023_475042 = state_475015__$1;(statearr_475023_475042[1] = 9);
} else
{var statearr_475024_475043 = state_475015__$1;(statearr_475024_475043[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475016 === 7))
{var inst_475011 = (state_475015[2]);var state_475015__$1 = state_475015;var statearr_475025_475044 = state_475015__$1;(statearr_475025_475044[2] = inst_475011);
(statearr_475025_475044[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475016 === 8))
{var inst_475008 = (state_475015[2]);var state_475015__$1 = (function (){var statearr_475026 = state_475015;(statearr_475026[9] = inst_475008);
return statearr_475026;
})();var statearr_475027_475045 = state_475015__$1;(statearr_475027_475045[2] = null);
(statearr_475027_475045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475016 === 9))
{var state_475015__$1 = state_475015;var statearr_475028_475046 = state_475015__$1;(statearr_475028_475046[2] = tc);
(statearr_475028_475046[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475016 === 10))
{var state_475015__$1 = state_475015;var statearr_475029_475047 = state_475015__$1;(statearr_475029_475047[2] = fc);
(statearr_475029_475047[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475016 === 11))
{var inst_474996 = (state_475015[7]);var inst_475006 = (state_475015[2]);var state_475015__$1 = state_475015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_475015__$1,8,inst_475006,inst_474996);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_475033 = (new Array(10));(statearr_475033[0] = state_machine__10228__auto__);
(statearr_475033[1] = 1);
return statearr_475033;
});
var state_machine__10228__auto____1 = (function (state_475015){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_475015);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e475034){if((e475034 instanceof Object))
{var ex__10231__auto__ = e475034;var statearr_475035_475048 = state_475015;(statearr_475035_475048[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_475015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e475034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__475049 = state_475015;
state_475015 = G__475049;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_475015){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_475015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_475036 = f__10298__auto__.call(null);(statearr_475036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___475037);
return statearr_475036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_475096){var state_val_475097 = (state_475096[1]);if((state_val_475097 === 7))
{var inst_475092 = (state_475096[2]);var state_475096__$1 = state_475096;var statearr_475098_475114 = state_475096__$1;(statearr_475098_475114[2] = inst_475092);
(statearr_475098_475114[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475097 === 6))
{var inst_475085 = (state_475096[7]);var inst_475082 = (state_475096[8]);var inst_475089 = f.call(null,inst_475082,inst_475085);var inst_475082__$1 = inst_475089;var state_475096__$1 = (function (){var statearr_475099 = state_475096;(statearr_475099[8] = inst_475082__$1);
return statearr_475099;
})();var statearr_475100_475115 = state_475096__$1;(statearr_475100_475115[2] = null);
(statearr_475100_475115[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475097 === 5))
{var inst_475082 = (state_475096[8]);var state_475096__$1 = state_475096;var statearr_475101_475116 = state_475096__$1;(statearr_475101_475116[2] = inst_475082);
(statearr_475101_475116[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475097 === 4))
{var inst_475085 = (state_475096[7]);var inst_475085__$1 = (state_475096[2]);var inst_475086 = (inst_475085__$1 == null);var state_475096__$1 = (function (){var statearr_475102 = state_475096;(statearr_475102[7] = inst_475085__$1);
return statearr_475102;
})();if(cljs.core.truth_(inst_475086))
{var statearr_475103_475117 = state_475096__$1;(statearr_475103_475117[1] = 5);
} else
{var statearr_475104_475118 = state_475096__$1;(statearr_475104_475118[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475097 === 3))
{var inst_475094 = (state_475096[2]);var state_475096__$1 = state_475096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_475096__$1,inst_475094);
} else
{if((state_val_475097 === 2))
{var state_475096__$1 = state_475096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_475096__$1,4,ch);
} else
{if((state_val_475097 === 1))
{var inst_475082 = init;var state_475096__$1 = (function (){var statearr_475105 = state_475096;(statearr_475105[8] = inst_475082);
return statearr_475105;
})();var statearr_475106_475119 = state_475096__$1;(statearr_475106_475119[2] = null);
(statearr_475106_475119[1] = 2);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_475110 = (new Array(9));(statearr_475110[0] = state_machine__10228__auto__);
(statearr_475110[1] = 1);
return statearr_475110;
});
var state_machine__10228__auto____1 = (function (state_475096){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_475096);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e475111){if((e475111 instanceof Object))
{var ex__10231__auto__ = e475111;var statearr_475112_475120 = state_475096;(statearr_475112_475120[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_475096);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e475111;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__475121 = state_475096;
state_475096 = G__475121;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_475096){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_475096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_475113 = f__10298__auto__.call(null);(statearr_475113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_475113;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_475183){var state_val_475184 = (state_475183[1]);if((state_val_475184 === 1))
{var inst_475163 = cljs.core.seq.call(null,coll);var inst_475164 = inst_475163;var state_475183__$1 = (function (){var statearr_475185 = state_475183;(statearr_475185[7] = inst_475164);
return statearr_475185;
})();var statearr_475186_475204 = state_475183__$1;(statearr_475186_475204[2] = null);
(statearr_475186_475204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475184 === 2))
{var inst_475164 = (state_475183[7]);var state_475183__$1 = state_475183;if(cljs.core.truth_(inst_475164))
{var statearr_475187_475205 = state_475183__$1;(statearr_475187_475205[1] = 4);
} else
{var statearr_475188_475206 = state_475183__$1;(statearr_475188_475206[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475184 === 3))
{var inst_475181 = (state_475183[2]);var state_475183__$1 = state_475183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_475183__$1,inst_475181);
} else
{if((state_val_475184 === 4))
{var inst_475164 = (state_475183[7]);var inst_475167 = cljs.core.first.call(null,inst_475164);var state_475183__$1 = state_475183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_475183__$1,7,ch,inst_475167);
} else
{if((state_val_475184 === 5))
{var state_475183__$1 = state_475183;if(cljs.core.truth_(close_QMARK_))
{var statearr_475189_475207 = state_475183__$1;(statearr_475189_475207[1] = 8);
} else
{var statearr_475190_475208 = state_475183__$1;(statearr_475190_475208[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475184 === 6))
{var inst_475179 = (state_475183[2]);var state_475183__$1 = state_475183;var statearr_475191_475209 = state_475183__$1;(statearr_475191_475209[2] = inst_475179);
(statearr_475191_475209[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475184 === 7))
{var inst_475164 = (state_475183[7]);var inst_475169 = (state_475183[2]);var inst_475170 = cljs.core.next.call(null,inst_475164);var inst_475164__$1 = inst_475170;var state_475183__$1 = (function (){var statearr_475192 = state_475183;(statearr_475192[7] = inst_475164__$1);
(statearr_475192[8] = inst_475169);
return statearr_475192;
})();var statearr_475193_475210 = state_475183__$1;(statearr_475193_475210[2] = null);
(statearr_475193_475210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475184 === 8))
{var inst_475174 = cljs.core.async.close_BANG_.call(null,ch);var state_475183__$1 = state_475183;var statearr_475194_475211 = state_475183__$1;(statearr_475194_475211[2] = inst_475174);
(statearr_475194_475211[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475184 === 9))
{var state_475183__$1 = state_475183;var statearr_475195_475212 = state_475183__$1;(statearr_475195_475212[2] = null);
(statearr_475195_475212[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475184 === 10))
{var inst_475177 = (state_475183[2]);var state_475183__$1 = state_475183;var statearr_475196_475213 = state_475183__$1;(statearr_475196_475213[2] = inst_475177);
(statearr_475196_475213[1] = 6);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_475200 = (new Array(9));(statearr_475200[0] = state_machine__10228__auto__);
(statearr_475200[1] = 1);
return statearr_475200;
});
var state_machine__10228__auto____1 = (function (state_475183){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_475183);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e475201){if((e475201 instanceof Object))
{var ex__10231__auto__ = e475201;var statearr_475202_475214 = state_475183;(statearr_475202_475214[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_475183);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e475201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__475215 = state_475183;
state_475183 = G__475215;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_475183){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_475183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_475203 = f__10298__auto__.call(null);(statearr_475203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_475203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
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
cljs.core.async.Mux = (function (){var obj475217 = {};return obj475217;
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
cljs.core.async.Mult = (function (){var obj475219 = {};return obj475219;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t475434 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t475434 = (function (cs,ch,mult,meta475435){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta475435 = meta475435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t475434.cljs$lang$type = true;
cljs.core.async.t475434.cljs$lang$ctorStr = "cljs.core.async/t475434";
cljs.core.async.t475434.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t475434");
});})(cs))
;
cljs.core.async.t475434.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t475434.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t475434.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t475434.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t475434.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t475434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t475434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_475436){var self__ = this;
var _475436__$1 = this;return self__.meta475435;
});})(cs))
;
cljs.core.async.t475434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_475436,meta475435__$1){var self__ = this;
var _475436__$1 = this;return (new cljs.core.async.t475434(self__.cs,self__.ch,self__.mult,meta475435__$1));
});})(cs))
;
cljs.core.async.__GT_t475434 = ((function (cs){
return (function __GT_t475434(cs__$1,ch__$1,mult__$1,meta475435){return (new cljs.core.async.t475434(cs__$1,ch__$1,mult__$1,meta475435));
});})(cs))
;
}
return (new cljs.core.async.t475434(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10297__auto___475648 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_475566){var state_val_475567 = (state_475566[1]);if((state_val_475567 === 32))
{var inst_475439 = (state_475566[7]);var inst_475515 = (state_475566[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_475566,31,Object,null,30);var inst_475522 = cljs.core.async.put_BANG_.call(null,inst_475515,inst_475439,done);var state_475566__$1 = state_475566;var statearr_475568_475649 = state_475566__$1;(statearr_475568_475649[2] = inst_475522);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_475566__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 1))
{var state_475566__$1 = state_475566;var statearr_475569_475650 = state_475566__$1;(statearr_475569_475650[2] = null);
(statearr_475569_475650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 33))
{var inst_475528 = (state_475566[9]);var inst_475530 = cljs.core.chunked_seq_QMARK_.call(null,inst_475528);var state_475566__$1 = state_475566;if(inst_475530)
{var statearr_475570_475651 = state_475566__$1;(statearr_475570_475651[1] = 36);
} else
{var statearr_475571_475652 = state_475566__$1;(statearr_475571_475652[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 2))
{var state_475566__$1 = state_475566;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_475566__$1,4,ch);
} else
{if((state_val_475567 === 34))
{var state_475566__$1 = state_475566;var statearr_475572_475653 = state_475566__$1;(statearr_475572_475653[2] = null);
(statearr_475572_475653[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 3))
{var inst_475564 = (state_475566[2]);var state_475566__$1 = state_475566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_475566__$1,inst_475564);
} else
{if((state_val_475567 === 35))
{var inst_475553 = (state_475566[2]);var state_475566__$1 = state_475566;var statearr_475573_475654 = state_475566__$1;(statearr_475573_475654[2] = inst_475553);
(statearr_475573_475654[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 4))
{var inst_475439 = (state_475566[7]);var inst_475439__$1 = (state_475566[2]);var inst_475440 = (inst_475439__$1 == null);var state_475566__$1 = (function (){var statearr_475574 = state_475566;(statearr_475574[7] = inst_475439__$1);
return statearr_475574;
})();if(cljs.core.truth_(inst_475440))
{var statearr_475575_475655 = state_475566__$1;(statearr_475575_475655[1] = 5);
} else
{var statearr_475576_475656 = state_475566__$1;(statearr_475576_475656[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 36))
{var inst_475528 = (state_475566[9]);var inst_475532 = cljs.core.chunk_first.call(null,inst_475528);var inst_475533 = cljs.core.chunk_rest.call(null,inst_475528);var inst_475534 = cljs.core.count.call(null,inst_475532);var inst_475507 = inst_475533;var inst_475508 = inst_475532;var inst_475509 = inst_475534;var inst_475510 = 0;var state_475566__$1 = (function (){var statearr_475577 = state_475566;(statearr_475577[10] = inst_475507);
(statearr_475577[11] = inst_475508);
(statearr_475577[12] = inst_475509);
(statearr_475577[13] = inst_475510);
return statearr_475577;
})();var statearr_475578_475657 = state_475566__$1;(statearr_475578_475657[2] = null);
(statearr_475578_475657[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 5))
{var inst_475446 = cljs.core.deref.call(null,cs);var inst_475447 = cljs.core.seq.call(null,inst_475446);var inst_475448 = inst_475447;var inst_475449 = null;var inst_475450 = 0;var inst_475451 = 0;var state_475566__$1 = (function (){var statearr_475579 = state_475566;(statearr_475579[14] = inst_475448);
(statearr_475579[15] = inst_475450);
(statearr_475579[16] = inst_475451);
(statearr_475579[17] = inst_475449);
return statearr_475579;
})();var statearr_475580_475658 = state_475566__$1;(statearr_475580_475658[2] = null);
(statearr_475580_475658[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 37))
{var inst_475528 = (state_475566[9]);var inst_475537 = cljs.core.first.call(null,inst_475528);var state_475566__$1 = (function (){var statearr_475581 = state_475566;(statearr_475581[18] = inst_475537);
return statearr_475581;
})();var statearr_475582_475659 = state_475566__$1;(statearr_475582_475659[2] = null);
(statearr_475582_475659[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 6))
{var inst_475498 = cljs.core.deref.call(null,cs);var inst_475499 = cljs.core.keys.call(null,inst_475498);var inst_475500 = cljs.core.count.call(null,inst_475499);var inst_475501 = cljs.core.reset_BANG_.call(null,dctr,inst_475500);var inst_475506 = cljs.core.seq.call(null,inst_475499);var inst_475507 = inst_475506;var inst_475508 = null;var inst_475509 = 0;var inst_475510 = 0;var state_475566__$1 = (function (){var statearr_475583 = state_475566;(statearr_475583[10] = inst_475507);
(statearr_475583[11] = inst_475508);
(statearr_475583[12] = inst_475509);
(statearr_475583[13] = inst_475510);
(statearr_475583[19] = inst_475501);
return statearr_475583;
})();var statearr_475584_475660 = state_475566__$1;(statearr_475584_475660[2] = null);
(statearr_475584_475660[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 38))
{var inst_475550 = (state_475566[2]);var state_475566__$1 = state_475566;var statearr_475585_475661 = state_475566__$1;(statearr_475585_475661[2] = inst_475550);
(statearr_475585_475661[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 7))
{var inst_475562 = (state_475566[2]);var state_475566__$1 = state_475566;var statearr_475586_475662 = state_475566__$1;(statearr_475586_475662[2] = inst_475562);
(statearr_475586_475662[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 39))
{var inst_475528 = (state_475566[9]);var inst_475546 = (state_475566[2]);var inst_475547 = cljs.core.next.call(null,inst_475528);var inst_475507 = inst_475547;var inst_475508 = null;var inst_475509 = 0;var inst_475510 = 0;var state_475566__$1 = (function (){var statearr_475587 = state_475566;(statearr_475587[10] = inst_475507);
(statearr_475587[11] = inst_475508);
(statearr_475587[12] = inst_475509);
(statearr_475587[13] = inst_475510);
(statearr_475587[20] = inst_475546);
return statearr_475587;
})();var statearr_475588_475663 = state_475566__$1;(statearr_475588_475663[2] = null);
(statearr_475588_475663[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 8))
{var inst_475450 = (state_475566[15]);var inst_475451 = (state_475566[16]);var inst_475453 = (inst_475451 < inst_475450);var inst_475454 = inst_475453;var state_475566__$1 = state_475566;if(cljs.core.truth_(inst_475454))
{var statearr_475589_475664 = state_475566__$1;(statearr_475589_475664[1] = 10);
} else
{var statearr_475590_475665 = state_475566__$1;(statearr_475590_475665[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 40))
{var inst_475537 = (state_475566[18]);var inst_475538 = (state_475566[2]);var inst_475539 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_475540 = cljs.core.async.untap_STAR_.call(null,m,inst_475537);var state_475566__$1 = (function (){var statearr_475591 = state_475566;(statearr_475591[21] = inst_475538);
(statearr_475591[22] = inst_475539);
return statearr_475591;
})();var statearr_475592_475666 = state_475566__$1;(statearr_475592_475666[2] = inst_475540);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_475566__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 9))
{var inst_475496 = (state_475566[2]);var state_475566__$1 = state_475566;var statearr_475593_475667 = state_475566__$1;(statearr_475593_475667[2] = inst_475496);
(statearr_475593_475667[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 41))
{var inst_475537 = (state_475566[18]);var inst_475439 = (state_475566[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_475566,40,Object,null,39);var inst_475544 = cljs.core.async.put_BANG_.call(null,inst_475537,inst_475439,done);var state_475566__$1 = state_475566;var statearr_475594_475668 = state_475566__$1;(statearr_475594_475668[2] = inst_475544);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_475566__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 10))
{var inst_475451 = (state_475566[16]);var inst_475449 = (state_475566[17]);var inst_475457 = cljs.core._nth.call(null,inst_475449,inst_475451);var inst_475458 = cljs.core.nth.call(null,inst_475457,0,null);var inst_475459 = cljs.core.nth.call(null,inst_475457,1,null);var state_475566__$1 = (function (){var statearr_475595 = state_475566;(statearr_475595[23] = inst_475458);
return statearr_475595;
})();if(cljs.core.truth_(inst_475459))
{var statearr_475596_475669 = state_475566__$1;(statearr_475596_475669[1] = 13);
} else
{var statearr_475597_475670 = state_475566__$1;(statearr_475597_475670[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 42))
{var inst_475559 = (state_475566[2]);var state_475566__$1 = (function (){var statearr_475598 = state_475566;(statearr_475598[24] = inst_475559);
return statearr_475598;
})();var statearr_475599_475671 = state_475566__$1;(statearr_475599_475671[2] = null);
(statearr_475599_475671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 11))
{var inst_475448 = (state_475566[14]);var inst_475468 = (state_475566[25]);var inst_475468__$1 = cljs.core.seq.call(null,inst_475448);var state_475566__$1 = (function (){var statearr_475600 = state_475566;(statearr_475600[25] = inst_475468__$1);
return statearr_475600;
})();if(inst_475468__$1)
{var statearr_475601_475672 = state_475566__$1;(statearr_475601_475672[1] = 16);
} else
{var statearr_475602_475673 = state_475566__$1;(statearr_475602_475673[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 12))
{var inst_475494 = (state_475566[2]);var state_475566__$1 = state_475566;var statearr_475603_475674 = state_475566__$1;(statearr_475603_475674[2] = inst_475494);
(statearr_475603_475674[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 13))
{var inst_475458 = (state_475566[23]);var inst_475461 = cljs.core.async.close_BANG_.call(null,inst_475458);var state_475566__$1 = state_475566;var statearr_475607_475675 = state_475566__$1;(statearr_475607_475675[2] = inst_475461);
(statearr_475607_475675[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 14))
{var state_475566__$1 = state_475566;var statearr_475608_475676 = state_475566__$1;(statearr_475608_475676[2] = null);
(statearr_475608_475676[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 15))
{var inst_475448 = (state_475566[14]);var inst_475450 = (state_475566[15]);var inst_475451 = (state_475566[16]);var inst_475449 = (state_475566[17]);var inst_475464 = (state_475566[2]);var inst_475465 = (inst_475451 + 1);var tmp475604 = inst_475448;var tmp475605 = inst_475450;var tmp475606 = inst_475449;var inst_475448__$1 = tmp475604;var inst_475449__$1 = tmp475606;var inst_475450__$1 = tmp475605;var inst_475451__$1 = inst_475465;var state_475566__$1 = (function (){var statearr_475609 = state_475566;(statearr_475609[14] = inst_475448__$1);
(statearr_475609[15] = inst_475450__$1);
(statearr_475609[16] = inst_475451__$1);
(statearr_475609[17] = inst_475449__$1);
(statearr_475609[26] = inst_475464);
return statearr_475609;
})();var statearr_475610_475677 = state_475566__$1;(statearr_475610_475677[2] = null);
(statearr_475610_475677[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 16))
{var inst_475468 = (state_475566[25]);var inst_475470 = cljs.core.chunked_seq_QMARK_.call(null,inst_475468);var state_475566__$1 = state_475566;if(inst_475470)
{var statearr_475611_475678 = state_475566__$1;(statearr_475611_475678[1] = 19);
} else
{var statearr_475612_475679 = state_475566__$1;(statearr_475612_475679[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 17))
{var state_475566__$1 = state_475566;var statearr_475613_475680 = state_475566__$1;(statearr_475613_475680[2] = null);
(statearr_475613_475680[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 18))
{var inst_475492 = (state_475566[2]);var state_475566__$1 = state_475566;var statearr_475614_475681 = state_475566__$1;(statearr_475614_475681[2] = inst_475492);
(statearr_475614_475681[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 19))
{var inst_475468 = (state_475566[25]);var inst_475472 = cljs.core.chunk_first.call(null,inst_475468);var inst_475473 = cljs.core.chunk_rest.call(null,inst_475468);var inst_475474 = cljs.core.count.call(null,inst_475472);var inst_475448 = inst_475473;var inst_475449 = inst_475472;var inst_475450 = inst_475474;var inst_475451 = 0;var state_475566__$1 = (function (){var statearr_475615 = state_475566;(statearr_475615[14] = inst_475448);
(statearr_475615[15] = inst_475450);
(statearr_475615[16] = inst_475451);
(statearr_475615[17] = inst_475449);
return statearr_475615;
})();var statearr_475616_475682 = state_475566__$1;(statearr_475616_475682[2] = null);
(statearr_475616_475682[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 20))
{var inst_475468 = (state_475566[25]);var inst_475478 = cljs.core.first.call(null,inst_475468);var inst_475479 = cljs.core.nth.call(null,inst_475478,0,null);var inst_475480 = cljs.core.nth.call(null,inst_475478,1,null);var state_475566__$1 = (function (){var statearr_475617 = state_475566;(statearr_475617[27] = inst_475479);
return statearr_475617;
})();if(cljs.core.truth_(inst_475480))
{var statearr_475618_475683 = state_475566__$1;(statearr_475618_475683[1] = 22);
} else
{var statearr_475619_475684 = state_475566__$1;(statearr_475619_475684[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 21))
{var inst_475489 = (state_475566[2]);var state_475566__$1 = state_475566;var statearr_475620_475685 = state_475566__$1;(statearr_475620_475685[2] = inst_475489);
(statearr_475620_475685[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 22))
{var inst_475479 = (state_475566[27]);var inst_475482 = cljs.core.async.close_BANG_.call(null,inst_475479);var state_475566__$1 = state_475566;var statearr_475621_475686 = state_475566__$1;(statearr_475621_475686[2] = inst_475482);
(statearr_475621_475686[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 23))
{var state_475566__$1 = state_475566;var statearr_475622_475687 = state_475566__$1;(statearr_475622_475687[2] = null);
(statearr_475622_475687[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 24))
{var inst_475468 = (state_475566[25]);var inst_475485 = (state_475566[2]);var inst_475486 = cljs.core.next.call(null,inst_475468);var inst_475448 = inst_475486;var inst_475449 = null;var inst_475450 = 0;var inst_475451 = 0;var state_475566__$1 = (function (){var statearr_475623 = state_475566;(statearr_475623[14] = inst_475448);
(statearr_475623[15] = inst_475450);
(statearr_475623[16] = inst_475451);
(statearr_475623[28] = inst_475485);
(statearr_475623[17] = inst_475449);
return statearr_475623;
})();var statearr_475624_475688 = state_475566__$1;(statearr_475624_475688[2] = null);
(statearr_475624_475688[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 25))
{var inst_475509 = (state_475566[12]);var inst_475510 = (state_475566[13]);var inst_475512 = (inst_475510 < inst_475509);var inst_475513 = inst_475512;var state_475566__$1 = state_475566;if(cljs.core.truth_(inst_475513))
{var statearr_475625_475689 = state_475566__$1;(statearr_475625_475689[1] = 27);
} else
{var statearr_475626_475690 = state_475566__$1;(statearr_475626_475690[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 26))
{var inst_475557 = (state_475566[2]);var state_475566__$1 = (function (){var statearr_475627 = state_475566;(statearr_475627[29] = inst_475557);
return statearr_475627;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_475566__$1,42,dchan);
} else
{if((state_val_475567 === 27))
{var inst_475508 = (state_475566[11]);var inst_475510 = (state_475566[13]);var inst_475515 = cljs.core._nth.call(null,inst_475508,inst_475510);var state_475566__$1 = (function (){var statearr_475628 = state_475566;(statearr_475628[8] = inst_475515);
return statearr_475628;
})();var statearr_475629_475691 = state_475566__$1;(statearr_475629_475691[2] = null);
(statearr_475629_475691[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 28))
{var inst_475507 = (state_475566[10]);var inst_475528 = (state_475566[9]);var inst_475528__$1 = cljs.core.seq.call(null,inst_475507);var state_475566__$1 = (function (){var statearr_475633 = state_475566;(statearr_475633[9] = inst_475528__$1);
return statearr_475633;
})();if(inst_475528__$1)
{var statearr_475634_475692 = state_475566__$1;(statearr_475634_475692[1] = 33);
} else
{var statearr_475635_475693 = state_475566__$1;(statearr_475635_475693[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 29))
{var inst_475555 = (state_475566[2]);var state_475566__$1 = state_475566;var statearr_475636_475694 = state_475566__$1;(statearr_475636_475694[2] = inst_475555);
(statearr_475636_475694[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 30))
{var inst_475507 = (state_475566[10]);var inst_475508 = (state_475566[11]);var inst_475509 = (state_475566[12]);var inst_475510 = (state_475566[13]);var inst_475524 = (state_475566[2]);var inst_475525 = (inst_475510 + 1);var tmp475630 = inst_475507;var tmp475631 = inst_475508;var tmp475632 = inst_475509;var inst_475507__$1 = tmp475630;var inst_475508__$1 = tmp475631;var inst_475509__$1 = tmp475632;var inst_475510__$1 = inst_475525;var state_475566__$1 = (function (){var statearr_475637 = state_475566;(statearr_475637[30] = inst_475524);
(statearr_475637[10] = inst_475507__$1);
(statearr_475637[11] = inst_475508__$1);
(statearr_475637[12] = inst_475509__$1);
(statearr_475637[13] = inst_475510__$1);
return statearr_475637;
})();var statearr_475638_475695 = state_475566__$1;(statearr_475638_475695[2] = null);
(statearr_475638_475695[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475567 === 31))
{var inst_475515 = (state_475566[8]);var inst_475516 = (state_475566[2]);var inst_475517 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_475518 = cljs.core.async.untap_STAR_.call(null,m,inst_475515);var state_475566__$1 = (function (){var statearr_475639 = state_475566;(statearr_475639[31] = inst_475516);
(statearr_475639[32] = inst_475517);
return statearr_475639;
})();var statearr_475640_475696 = state_475566__$1;(statearr_475640_475696[2] = inst_475518);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_475566__$1);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_475644 = (new Array(33));(statearr_475644[0] = state_machine__10228__auto__);
(statearr_475644[1] = 1);
return statearr_475644;
});
var state_machine__10228__auto____1 = (function (state_475566){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_475566);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e475645){if((e475645 instanceof Object))
{var ex__10231__auto__ = e475645;var statearr_475646_475697 = state_475566;(statearr_475646_475697[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_475566);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e475645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__475698 = state_475566;
state_475566 = G__475698;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_475566){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_475566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_475647 = f__10298__auto__.call(null);(statearr_475647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___475648);
return statearr_475647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
cljs.core.async.Mix = (function (){var obj475700 = {};return obj475700;
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
;var m = (function (){if(typeof cljs.core.async.t475810 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t475810 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta475811){
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
this.meta475811 = meta475811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t475810.cljs$lang$type = true;
cljs.core.async.t475810.cljs$lang$ctorStr = "cljs.core.async/t475810";
cljs.core.async.t475810.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t475810");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t475810.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t475810.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t475810.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t475810.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t475810.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t475810.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t475810.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t475810.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t475810.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_475812){var self__ = this;
var _475812__$1 = this;return self__.meta475811;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t475810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_475812,meta475811__$1){var self__ = this;
var _475812__$1 = this;return (new cljs.core.async.t475810(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta475811__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t475810 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t475810(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta475811){return (new cljs.core.async.t475810(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta475811));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t475810(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10297__auto___475919 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_475877){var state_val_475878 = (state_475877[1]);if((state_val_475878 === 1))
{var inst_475816 = (state_475877[7]);var inst_475816__$1 = calc_state.call(null);var inst_475817 = cljs.core.seq_QMARK_.call(null,inst_475816__$1);var state_475877__$1 = (function (){var statearr_475879 = state_475877;(statearr_475879[7] = inst_475816__$1);
return statearr_475879;
})();if(inst_475817)
{var statearr_475880_475920 = state_475877__$1;(statearr_475880_475920[1] = 2);
} else
{var statearr_475881_475921 = state_475877__$1;(statearr_475881_475921[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 2))
{var inst_475816 = (state_475877[7]);var inst_475819 = cljs.core.apply.call(null,cljs.core.hash_map,inst_475816);var state_475877__$1 = state_475877;var statearr_475882_475922 = state_475877__$1;(statearr_475882_475922[2] = inst_475819);
(statearr_475882_475922[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 3))
{var inst_475816 = (state_475877[7]);var state_475877__$1 = state_475877;var statearr_475883_475923 = state_475877__$1;(statearr_475883_475923[2] = inst_475816);
(statearr_475883_475923[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 4))
{var inst_475816 = (state_475877[7]);var inst_475822 = (state_475877[2]);var inst_475823 = cljs.core.get.call(null,inst_475822,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_475824 = cljs.core.get.call(null,inst_475822,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_475825 = cljs.core.get.call(null,inst_475822,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_475826 = inst_475816;var state_475877__$1 = (function (){var statearr_475884 = state_475877;(statearr_475884[8] = inst_475824);
(statearr_475884[9] = inst_475823);
(statearr_475884[10] = inst_475826);
(statearr_475884[11] = inst_475825);
return statearr_475884;
})();var statearr_475885_475924 = state_475877__$1;(statearr_475885_475924[2] = null);
(statearr_475885_475924[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 5))
{var inst_475826 = (state_475877[10]);var inst_475829 = cljs.core.seq_QMARK_.call(null,inst_475826);var state_475877__$1 = state_475877;if(inst_475829)
{var statearr_475886_475925 = state_475877__$1;(statearr_475886_475925[1] = 7);
} else
{var statearr_475887_475926 = state_475877__$1;(statearr_475887_475926[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 6))
{var inst_475875 = (state_475877[2]);var state_475877__$1 = state_475877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_475877__$1,inst_475875);
} else
{if((state_val_475878 === 7))
{var inst_475826 = (state_475877[10]);var inst_475831 = cljs.core.apply.call(null,cljs.core.hash_map,inst_475826);var state_475877__$1 = state_475877;var statearr_475888_475927 = state_475877__$1;(statearr_475888_475927[2] = inst_475831);
(statearr_475888_475927[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 8))
{var inst_475826 = (state_475877[10]);var state_475877__$1 = state_475877;var statearr_475889_475928 = state_475877__$1;(statearr_475889_475928[2] = inst_475826);
(statearr_475889_475928[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 9))
{var inst_475834 = (state_475877[12]);var inst_475834__$1 = (state_475877[2]);var inst_475835 = cljs.core.get.call(null,inst_475834__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_475836 = cljs.core.get.call(null,inst_475834__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_475837 = cljs.core.get.call(null,inst_475834__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_475877__$1 = (function (){var statearr_475890 = state_475877;(statearr_475890[12] = inst_475834__$1);
(statearr_475890[13] = inst_475837);
(statearr_475890[14] = inst_475836);
return statearr_475890;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_475877__$1,10,inst_475835);
} else
{if((state_val_475878 === 10))
{var inst_475841 = (state_475877[15]);var inst_475842 = (state_475877[16]);var inst_475840 = (state_475877[2]);var inst_475841__$1 = cljs.core.nth.call(null,inst_475840,0,null);var inst_475842__$1 = cljs.core.nth.call(null,inst_475840,1,null);var inst_475843 = (inst_475841__$1 == null);var inst_475844 = cljs.core._EQ_.call(null,inst_475842__$1,change);var inst_475845 = (inst_475843) || (inst_475844);var state_475877__$1 = (function (){var statearr_475891 = state_475877;(statearr_475891[15] = inst_475841__$1);
(statearr_475891[16] = inst_475842__$1);
return statearr_475891;
})();if(cljs.core.truth_(inst_475845))
{var statearr_475892_475929 = state_475877__$1;(statearr_475892_475929[1] = 11);
} else
{var statearr_475893_475930 = state_475877__$1;(statearr_475893_475930[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 11))
{var inst_475841 = (state_475877[15]);var inst_475847 = (inst_475841 == null);var state_475877__$1 = state_475877;if(cljs.core.truth_(inst_475847))
{var statearr_475894_475931 = state_475877__$1;(statearr_475894_475931[1] = 14);
} else
{var statearr_475895_475932 = state_475877__$1;(statearr_475895_475932[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 12))
{var inst_475856 = (state_475877[17]);var inst_475842 = (state_475877[16]);var inst_475837 = (state_475877[13]);var inst_475856__$1 = inst_475837.call(null,inst_475842);var state_475877__$1 = (function (){var statearr_475896 = state_475877;(statearr_475896[17] = inst_475856__$1);
return statearr_475896;
})();if(cljs.core.truth_(inst_475856__$1))
{var statearr_475897_475933 = state_475877__$1;(statearr_475897_475933[1] = 17);
} else
{var statearr_475898_475934 = state_475877__$1;(statearr_475898_475934[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 13))
{var inst_475873 = (state_475877[2]);var state_475877__$1 = state_475877;var statearr_475899_475935 = state_475877__$1;(statearr_475899_475935[2] = inst_475873);
(statearr_475899_475935[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 14))
{var inst_475842 = (state_475877[16]);var inst_475849 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_475842);var state_475877__$1 = state_475877;var statearr_475900_475936 = state_475877__$1;(statearr_475900_475936[2] = inst_475849);
(statearr_475900_475936[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 15))
{var state_475877__$1 = state_475877;var statearr_475901_475937 = state_475877__$1;(statearr_475901_475937[2] = null);
(statearr_475901_475937[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 16))
{var inst_475852 = (state_475877[2]);var inst_475853 = calc_state.call(null);var inst_475826 = inst_475853;var state_475877__$1 = (function (){var statearr_475902 = state_475877;(statearr_475902[10] = inst_475826);
(statearr_475902[18] = inst_475852);
return statearr_475902;
})();var statearr_475903_475938 = state_475877__$1;(statearr_475903_475938[2] = null);
(statearr_475903_475938[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 17))
{var inst_475856 = (state_475877[17]);var state_475877__$1 = state_475877;var statearr_475904_475939 = state_475877__$1;(statearr_475904_475939[2] = inst_475856);
(statearr_475904_475939[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 18))
{var inst_475842 = (state_475877[16]);var inst_475837 = (state_475877[13]);var inst_475836 = (state_475877[14]);var inst_475859 = cljs.core.empty_QMARK_.call(null,inst_475837);var inst_475860 = inst_475836.call(null,inst_475842);var inst_475861 = cljs.core.not.call(null,inst_475860);var inst_475862 = (inst_475859) && (inst_475861);var state_475877__$1 = state_475877;var statearr_475905_475940 = state_475877__$1;(statearr_475905_475940[2] = inst_475862);
(statearr_475905_475940[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 19))
{var inst_475864 = (state_475877[2]);var state_475877__$1 = state_475877;if(cljs.core.truth_(inst_475864))
{var statearr_475906_475941 = state_475877__$1;(statearr_475906_475941[1] = 20);
} else
{var statearr_475907_475942 = state_475877__$1;(statearr_475907_475942[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 20))
{var inst_475841 = (state_475877[15]);var state_475877__$1 = state_475877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_475877__$1,23,out,inst_475841);
} else
{if((state_val_475878 === 21))
{var state_475877__$1 = state_475877;var statearr_475908_475943 = state_475877__$1;(statearr_475908_475943[2] = null);
(statearr_475908_475943[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 22))
{var inst_475834 = (state_475877[12]);var inst_475870 = (state_475877[2]);var inst_475826 = inst_475834;var state_475877__$1 = (function (){var statearr_475909 = state_475877;(statearr_475909[10] = inst_475826);
(statearr_475909[19] = inst_475870);
return statearr_475909;
})();var statearr_475910_475944 = state_475877__$1;(statearr_475910_475944[2] = null);
(statearr_475910_475944[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_475878 === 23))
{var inst_475867 = (state_475877[2]);var state_475877__$1 = state_475877;var statearr_475911_475945 = state_475877__$1;(statearr_475911_475945[2] = inst_475867);
(statearr_475911_475945[1] = 22);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_475915 = (new Array(20));(statearr_475915[0] = state_machine__10228__auto__);
(statearr_475915[1] = 1);
return statearr_475915;
});
var state_machine__10228__auto____1 = (function (state_475877){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_475877);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e475916){if((e475916 instanceof Object))
{var ex__10231__auto__ = e475916;var statearr_475917_475946 = state_475877;(statearr_475917_475946[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_475877);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e475916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__475947 = state_475877;
state_475877 = G__475947;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_475877){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_475877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_475918 = f__10298__auto__.call(null);(statearr_475918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___475919);
return statearr_475918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
cljs.core.async.Pub = (function (){var obj475949 = {};return obj475949;
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
return (function (p1__475950_SHARP_){if(cljs.core.truth_(p1__475950_SHARP_.call(null,topic)))
{return p1__475950_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__475950_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t476075 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t476075 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta476076){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta476076 = meta476076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t476075.cljs$lang$type = true;
cljs.core.async.t476075.cljs$lang$ctorStr = "cljs.core.async/t476075";
cljs.core.async.t476075.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t476075");
});})(mults,ensure_mult))
;
cljs.core.async.t476075.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t476075.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t476075.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t476075.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t476075.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t476075.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t476075.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t476075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_476077){var self__ = this;
var _476077__$1 = this;return self__.meta476076;
});})(mults,ensure_mult))
;
cljs.core.async.t476075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_476077,meta476076__$1){var self__ = this;
var _476077__$1 = this;return (new cljs.core.async.t476075(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta476076__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t476075 = ((function (mults,ensure_mult){
return (function __GT_t476075(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta476076){return (new cljs.core.async.t476075(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta476076));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t476075(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10297__auto___476199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_476151){var state_val_476152 = (state_476151[1]);if((state_val_476152 === 1))
{var state_476151__$1 = state_476151;var statearr_476153_476200 = state_476151__$1;(statearr_476153_476200[2] = null);
(statearr_476153_476200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 2))
{var state_476151__$1 = state_476151;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_476151__$1,4,ch);
} else
{if((state_val_476152 === 3))
{var inst_476149 = (state_476151[2]);var state_476151__$1 = state_476151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_476151__$1,inst_476149);
} else
{if((state_val_476152 === 4))
{var inst_476080 = (state_476151[7]);var inst_476080__$1 = (state_476151[2]);var inst_476081 = (inst_476080__$1 == null);var state_476151__$1 = (function (){var statearr_476154 = state_476151;(statearr_476154[7] = inst_476080__$1);
return statearr_476154;
})();if(cljs.core.truth_(inst_476081))
{var statearr_476155_476201 = state_476151__$1;(statearr_476155_476201[1] = 5);
} else
{var statearr_476156_476202 = state_476151__$1;(statearr_476156_476202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 5))
{var inst_476087 = cljs.core.deref.call(null,mults);var inst_476088 = cljs.core.vals.call(null,inst_476087);var inst_476089 = cljs.core.seq.call(null,inst_476088);var inst_476090 = inst_476089;var inst_476091 = null;var inst_476092 = 0;var inst_476093 = 0;var state_476151__$1 = (function (){var statearr_476157 = state_476151;(statearr_476157[8] = inst_476093);
(statearr_476157[9] = inst_476090);
(statearr_476157[10] = inst_476091);
(statearr_476157[11] = inst_476092);
return statearr_476157;
})();var statearr_476158_476203 = state_476151__$1;(statearr_476158_476203[2] = null);
(statearr_476158_476203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 6))
{var inst_476130 = (state_476151[12]);var inst_476080 = (state_476151[7]);var inst_476128 = (state_476151[13]);var inst_476128__$1 = topic_fn.call(null,inst_476080);var inst_476129 = cljs.core.deref.call(null,mults);var inst_476130__$1 = cljs.core.get.call(null,inst_476129,inst_476128__$1);var state_476151__$1 = (function (){var statearr_476159 = state_476151;(statearr_476159[12] = inst_476130__$1);
(statearr_476159[13] = inst_476128__$1);
return statearr_476159;
})();if(cljs.core.truth_(inst_476130__$1))
{var statearr_476160_476204 = state_476151__$1;(statearr_476160_476204[1] = 19);
} else
{var statearr_476161_476205 = state_476151__$1;(statearr_476161_476205[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 7))
{var inst_476147 = (state_476151[2]);var state_476151__$1 = state_476151;var statearr_476162_476206 = state_476151__$1;(statearr_476162_476206[2] = inst_476147);
(statearr_476162_476206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 8))
{var inst_476093 = (state_476151[8]);var inst_476092 = (state_476151[11]);var inst_476095 = (inst_476093 < inst_476092);var inst_476096 = inst_476095;var state_476151__$1 = state_476151;if(cljs.core.truth_(inst_476096))
{var statearr_476166_476207 = state_476151__$1;(statearr_476166_476207[1] = 10);
} else
{var statearr_476167_476208 = state_476151__$1;(statearr_476167_476208[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 9))
{var inst_476126 = (state_476151[2]);var state_476151__$1 = state_476151;var statearr_476168_476209 = state_476151__$1;(statearr_476168_476209[2] = inst_476126);
(statearr_476168_476209[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 10))
{var inst_476093 = (state_476151[8]);var inst_476090 = (state_476151[9]);var inst_476091 = (state_476151[10]);var inst_476092 = (state_476151[11]);var inst_476098 = cljs.core._nth.call(null,inst_476091,inst_476093);var inst_476099 = cljs.core.async.muxch_STAR_.call(null,inst_476098);var inst_476100 = cljs.core.async.close_BANG_.call(null,inst_476099);var inst_476101 = (inst_476093 + 1);var tmp476163 = inst_476090;var tmp476164 = inst_476091;var tmp476165 = inst_476092;var inst_476090__$1 = tmp476163;var inst_476091__$1 = tmp476164;var inst_476092__$1 = tmp476165;var inst_476093__$1 = inst_476101;var state_476151__$1 = (function (){var statearr_476169 = state_476151;(statearr_476169[8] = inst_476093__$1);
(statearr_476169[14] = inst_476100);
(statearr_476169[9] = inst_476090__$1);
(statearr_476169[10] = inst_476091__$1);
(statearr_476169[11] = inst_476092__$1);
return statearr_476169;
})();var statearr_476170_476210 = state_476151__$1;(statearr_476170_476210[2] = null);
(statearr_476170_476210[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 11))
{var inst_476104 = (state_476151[15]);var inst_476090 = (state_476151[9]);var inst_476104__$1 = cljs.core.seq.call(null,inst_476090);var state_476151__$1 = (function (){var statearr_476171 = state_476151;(statearr_476171[15] = inst_476104__$1);
return statearr_476171;
})();if(inst_476104__$1)
{var statearr_476172_476211 = state_476151__$1;(statearr_476172_476211[1] = 13);
} else
{var statearr_476173_476212 = state_476151__$1;(statearr_476173_476212[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 12))
{var inst_476124 = (state_476151[2]);var state_476151__$1 = state_476151;var statearr_476174_476213 = state_476151__$1;(statearr_476174_476213[2] = inst_476124);
(statearr_476174_476213[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 13))
{var inst_476104 = (state_476151[15]);var inst_476106 = cljs.core.chunked_seq_QMARK_.call(null,inst_476104);var state_476151__$1 = state_476151;if(inst_476106)
{var statearr_476175_476214 = state_476151__$1;(statearr_476175_476214[1] = 16);
} else
{var statearr_476176_476215 = state_476151__$1;(statearr_476176_476215[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 14))
{var state_476151__$1 = state_476151;var statearr_476177_476216 = state_476151__$1;(statearr_476177_476216[2] = null);
(statearr_476177_476216[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 15))
{var inst_476122 = (state_476151[2]);var state_476151__$1 = state_476151;var statearr_476178_476217 = state_476151__$1;(statearr_476178_476217[2] = inst_476122);
(statearr_476178_476217[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 16))
{var inst_476104 = (state_476151[15]);var inst_476108 = cljs.core.chunk_first.call(null,inst_476104);var inst_476109 = cljs.core.chunk_rest.call(null,inst_476104);var inst_476110 = cljs.core.count.call(null,inst_476108);var inst_476090 = inst_476109;var inst_476091 = inst_476108;var inst_476092 = inst_476110;var inst_476093 = 0;var state_476151__$1 = (function (){var statearr_476179 = state_476151;(statearr_476179[8] = inst_476093);
(statearr_476179[9] = inst_476090);
(statearr_476179[10] = inst_476091);
(statearr_476179[11] = inst_476092);
return statearr_476179;
})();var statearr_476180_476218 = state_476151__$1;(statearr_476180_476218[2] = null);
(statearr_476180_476218[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 17))
{var inst_476104 = (state_476151[15]);var inst_476113 = cljs.core.first.call(null,inst_476104);var inst_476114 = cljs.core.async.muxch_STAR_.call(null,inst_476113);var inst_476115 = cljs.core.async.close_BANG_.call(null,inst_476114);var inst_476116 = cljs.core.next.call(null,inst_476104);var inst_476090 = inst_476116;var inst_476091 = null;var inst_476092 = 0;var inst_476093 = 0;var state_476151__$1 = (function (){var statearr_476181 = state_476151;(statearr_476181[8] = inst_476093);
(statearr_476181[9] = inst_476090);
(statearr_476181[10] = inst_476091);
(statearr_476181[11] = inst_476092);
(statearr_476181[16] = inst_476115);
return statearr_476181;
})();var statearr_476182_476219 = state_476151__$1;(statearr_476182_476219[2] = null);
(statearr_476182_476219[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 18))
{var inst_476119 = (state_476151[2]);var state_476151__$1 = state_476151;var statearr_476183_476220 = state_476151__$1;(statearr_476183_476220[2] = inst_476119);
(statearr_476183_476220[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 19))
{var state_476151__$1 = state_476151;var statearr_476184_476221 = state_476151__$1;(statearr_476184_476221[2] = null);
(statearr_476184_476221[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 20))
{var state_476151__$1 = state_476151;var statearr_476185_476222 = state_476151__$1;(statearr_476185_476222[2] = null);
(statearr_476185_476222[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 21))
{var inst_476144 = (state_476151[2]);var state_476151__$1 = (function (){var statearr_476186 = state_476151;(statearr_476186[17] = inst_476144);
return statearr_476186;
})();var statearr_476187_476223 = state_476151__$1;(statearr_476187_476223[2] = null);
(statearr_476187_476223[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 22))
{var inst_476141 = (state_476151[2]);var state_476151__$1 = state_476151;var statearr_476188_476224 = state_476151__$1;(statearr_476188_476224[2] = inst_476141);
(statearr_476188_476224[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 23))
{var inst_476128 = (state_476151[13]);var inst_476132 = (state_476151[2]);var inst_476133 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_476128);var state_476151__$1 = (function (){var statearr_476189 = state_476151;(statearr_476189[18] = inst_476132);
return statearr_476189;
})();var statearr_476190_476225 = state_476151__$1;(statearr_476190_476225[2] = inst_476133);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476151__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476152 === 24))
{var inst_476130 = (state_476151[12]);var inst_476080 = (state_476151[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_476151,23,Object,null,22);var inst_476137 = cljs.core.async.muxch_STAR_.call(null,inst_476130);var state_476151__$1 = state_476151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_476151__$1,25,inst_476137,inst_476080);
} else
{if((state_val_476152 === 25))
{var inst_476139 = (state_476151[2]);var state_476151__$1 = state_476151;var statearr_476191_476226 = state_476151__$1;(statearr_476191_476226[2] = inst_476139);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476151__$1);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_476195 = (new Array(19));(statearr_476195[0] = state_machine__10228__auto__);
(statearr_476195[1] = 1);
return statearr_476195;
});
var state_machine__10228__auto____1 = (function (state_476151){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_476151);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e476196){if((e476196 instanceof Object))
{var ex__10231__auto__ = e476196;var statearr_476197_476227 = state_476151;(statearr_476197_476227[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e476196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__476228 = state_476151;
state_476151 = G__476228;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_476151){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_476151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_476198 = f__10298__auto__.call(null);(statearr_476198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___476199);
return statearr_476198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
,cljs.core.range.call(null,cnt));var c__10297__auto___476365 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_476335){var state_val_476336 = (state_476335[1]);if((state_val_476336 === 1))
{var state_476335__$1 = state_476335;var statearr_476337_476366 = state_476335__$1;(statearr_476337_476366[2] = null);
(statearr_476337_476366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 2))
{var inst_476298 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_476299 = 0;var state_476335__$1 = (function (){var statearr_476338 = state_476335;(statearr_476338[7] = inst_476298);
(statearr_476338[8] = inst_476299);
return statearr_476338;
})();var statearr_476339_476367 = state_476335__$1;(statearr_476339_476367[2] = null);
(statearr_476339_476367[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 3))
{var inst_476333 = (state_476335[2]);var state_476335__$1 = state_476335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_476335__$1,inst_476333);
} else
{if((state_val_476336 === 4))
{var inst_476299 = (state_476335[8]);var inst_476301 = (inst_476299 < cnt);var state_476335__$1 = state_476335;if(cljs.core.truth_(inst_476301))
{var statearr_476340_476368 = state_476335__$1;(statearr_476340_476368[1] = 6);
} else
{var statearr_476341_476369 = state_476335__$1;(statearr_476341_476369[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 5))
{var inst_476319 = (state_476335[2]);var state_476335__$1 = (function (){var statearr_476342 = state_476335;(statearr_476342[9] = inst_476319);
return statearr_476342;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_476335__$1,12,dchan);
} else
{if((state_val_476336 === 6))
{var state_476335__$1 = state_476335;var statearr_476343_476370 = state_476335__$1;(statearr_476343_476370[2] = null);
(statearr_476343_476370[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 7))
{var state_476335__$1 = state_476335;var statearr_476344_476371 = state_476335__$1;(statearr_476344_476371[2] = null);
(statearr_476344_476371[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 8))
{var inst_476317 = (state_476335[2]);var state_476335__$1 = state_476335;var statearr_476345_476372 = state_476335__$1;(statearr_476345_476372[2] = inst_476317);
(statearr_476345_476372[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 9))
{var inst_476299 = (state_476335[8]);var inst_476312 = (state_476335[2]);var inst_476313 = (inst_476299 + 1);var inst_476299__$1 = inst_476313;var state_476335__$1 = (function (){var statearr_476346 = state_476335;(statearr_476346[8] = inst_476299__$1);
(statearr_476346[10] = inst_476312);
return statearr_476346;
})();var statearr_476347_476373 = state_476335__$1;(statearr_476347_476373[2] = null);
(statearr_476347_476373[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 10))
{var inst_476303 = (state_476335[2]);var inst_476304 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_476335__$1 = (function (){var statearr_476348 = state_476335;(statearr_476348[11] = inst_476303);
return statearr_476348;
})();var statearr_476349_476374 = state_476335__$1;(statearr_476349_476374[2] = inst_476304);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476335__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 11))
{var inst_476299 = (state_476335[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_476335,10,Object,null,9);var inst_476308 = chs__$1.call(null,inst_476299);var inst_476309 = done.call(null,inst_476299);var inst_476310 = cljs.core.async.take_BANG_.call(null,inst_476308,inst_476309);var state_476335__$1 = state_476335;var statearr_476350_476375 = state_476335__$1;(statearr_476350_476375[2] = inst_476310);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476335__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 12))
{var inst_476321 = (state_476335[12]);var inst_476321__$1 = (state_476335[2]);var inst_476322 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_476321__$1);var state_476335__$1 = (function (){var statearr_476351 = state_476335;(statearr_476351[12] = inst_476321__$1);
return statearr_476351;
})();if(cljs.core.truth_(inst_476322))
{var statearr_476352_476376 = state_476335__$1;(statearr_476352_476376[1] = 13);
} else
{var statearr_476353_476377 = state_476335__$1;(statearr_476353_476377[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 13))
{var inst_476324 = cljs.core.async.close_BANG_.call(null,out);var state_476335__$1 = state_476335;var statearr_476354_476378 = state_476335__$1;(statearr_476354_476378[2] = inst_476324);
(statearr_476354_476378[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 14))
{var inst_476321 = (state_476335[12]);var inst_476326 = cljs.core.apply.call(null,f,inst_476321);var state_476335__$1 = state_476335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_476335__$1,16,out,inst_476326);
} else
{if((state_val_476336 === 15))
{var inst_476331 = (state_476335[2]);var state_476335__$1 = state_476335;var statearr_476355_476379 = state_476335__$1;(statearr_476355_476379[2] = inst_476331);
(statearr_476355_476379[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476336 === 16))
{var inst_476328 = (state_476335[2]);var state_476335__$1 = (function (){var statearr_476356 = state_476335;(statearr_476356[13] = inst_476328);
return statearr_476356;
})();var statearr_476357_476380 = state_476335__$1;(statearr_476357_476380[2] = null);
(statearr_476357_476380[1] = 2);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_476361 = (new Array(14));(statearr_476361[0] = state_machine__10228__auto__);
(statearr_476361[1] = 1);
return statearr_476361;
});
var state_machine__10228__auto____1 = (function (state_476335){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_476335);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e476362){if((e476362 instanceof Object))
{var ex__10231__auto__ = e476362;var statearr_476363_476381 = state_476335;(statearr_476363_476381[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e476362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__476382 = state_476335;
state_476335 = G__476382;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_476335){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_476335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_476364 = f__10298__auto__.call(null);(statearr_476364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___476365);
return statearr_476364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10297__auto___476490 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_476466){var state_val_476467 = (state_476466[1]);if((state_val_476467 === 1))
{var inst_476437 = cljs.core.vec.call(null,chs);var inst_476438 = inst_476437;var state_476466__$1 = (function (){var statearr_476468 = state_476466;(statearr_476468[7] = inst_476438);
return statearr_476468;
})();var statearr_476469_476491 = state_476466__$1;(statearr_476469_476491[2] = null);
(statearr_476469_476491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476467 === 2))
{var inst_476438 = (state_476466[7]);var inst_476440 = cljs.core.count.call(null,inst_476438);var inst_476441 = (inst_476440 > 0);var state_476466__$1 = state_476466;if(cljs.core.truth_(inst_476441))
{var statearr_476470_476492 = state_476466__$1;(statearr_476470_476492[1] = 4);
} else
{var statearr_476471_476493 = state_476466__$1;(statearr_476471_476493[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476467 === 3))
{var inst_476464 = (state_476466[2]);var state_476466__$1 = state_476466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_476466__$1,inst_476464);
} else
{if((state_val_476467 === 4))
{var inst_476438 = (state_476466[7]);var state_476466__$1 = state_476466;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_476466__$1,7,inst_476438);
} else
{if((state_val_476467 === 5))
{var inst_476460 = cljs.core.async.close_BANG_.call(null,out);var state_476466__$1 = state_476466;var statearr_476472_476494 = state_476466__$1;(statearr_476472_476494[2] = inst_476460);
(statearr_476472_476494[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476467 === 6))
{var inst_476462 = (state_476466[2]);var state_476466__$1 = state_476466;var statearr_476473_476495 = state_476466__$1;(statearr_476473_476495[2] = inst_476462);
(statearr_476473_476495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476467 === 7))
{var inst_476446 = (state_476466[8]);var inst_476445 = (state_476466[9]);var inst_476445__$1 = (state_476466[2]);var inst_476446__$1 = cljs.core.nth.call(null,inst_476445__$1,0,null);var inst_476447 = cljs.core.nth.call(null,inst_476445__$1,1,null);var inst_476448 = (inst_476446__$1 == null);var state_476466__$1 = (function (){var statearr_476474 = state_476466;(statearr_476474[8] = inst_476446__$1);
(statearr_476474[10] = inst_476447);
(statearr_476474[9] = inst_476445__$1);
return statearr_476474;
})();if(cljs.core.truth_(inst_476448))
{var statearr_476475_476496 = state_476466__$1;(statearr_476475_476496[1] = 8);
} else
{var statearr_476476_476497 = state_476466__$1;(statearr_476476_476497[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476467 === 8))
{var inst_476446 = (state_476466[8]);var inst_476447 = (state_476466[10]);var inst_476445 = (state_476466[9]);var inst_476438 = (state_476466[7]);var inst_476450 = (function (){var c = inst_476447;var v = inst_476446;var vec__476443 = inst_476445;var cs = inst_476438;return ((function (c,v,vec__476443,cs,inst_476446,inst_476447,inst_476445,inst_476438,state_val_476467){
return (function (p1__476383_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__476383_SHARP_);
});
;})(c,v,vec__476443,cs,inst_476446,inst_476447,inst_476445,inst_476438,state_val_476467))
})();var inst_476451 = cljs.core.filterv.call(null,inst_476450,inst_476438);var inst_476438__$1 = inst_476451;var state_476466__$1 = (function (){var statearr_476477 = state_476466;(statearr_476477[7] = inst_476438__$1);
return statearr_476477;
})();var statearr_476478_476498 = state_476466__$1;(statearr_476478_476498[2] = null);
(statearr_476478_476498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476467 === 9))
{var inst_476446 = (state_476466[8]);var state_476466__$1 = state_476466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_476466__$1,11,out,inst_476446);
} else
{if((state_val_476467 === 10))
{var inst_476458 = (state_476466[2]);var state_476466__$1 = state_476466;var statearr_476480_476499 = state_476466__$1;(statearr_476480_476499[2] = inst_476458);
(statearr_476480_476499[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476467 === 11))
{var inst_476438 = (state_476466[7]);var inst_476455 = (state_476466[2]);var tmp476479 = inst_476438;var inst_476438__$1 = tmp476479;var state_476466__$1 = (function (){var statearr_476481 = state_476466;(statearr_476481[11] = inst_476455);
(statearr_476481[7] = inst_476438__$1);
return statearr_476481;
})();var statearr_476482_476500 = state_476466__$1;(statearr_476482_476500[2] = null);
(statearr_476482_476500[1] = 2);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_476486 = (new Array(12));(statearr_476486[0] = state_machine__10228__auto__);
(statearr_476486[1] = 1);
return statearr_476486;
});
var state_machine__10228__auto____1 = (function (state_476466){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_476466);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e476487){if((e476487 instanceof Object))
{var ex__10231__auto__ = e476487;var statearr_476488_476501 = state_476466;(statearr_476488_476501[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e476487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__476502 = state_476466;
state_476466 = G__476502;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_476466){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_476466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_476489 = f__10298__auto__.call(null);(statearr_476489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___476490);
return statearr_476489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10297__auto___476595 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_476572){var state_val_476573 = (state_476572[1]);if((state_val_476573 === 1))
{var inst_476549 = 0;var state_476572__$1 = (function (){var statearr_476574 = state_476572;(statearr_476574[7] = inst_476549);
return statearr_476574;
})();var statearr_476575_476596 = state_476572__$1;(statearr_476575_476596[2] = null);
(statearr_476575_476596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476573 === 2))
{var inst_476549 = (state_476572[7]);var inst_476551 = (inst_476549 < n);var state_476572__$1 = state_476572;if(cljs.core.truth_(inst_476551))
{var statearr_476576_476597 = state_476572__$1;(statearr_476576_476597[1] = 4);
} else
{var statearr_476577_476598 = state_476572__$1;(statearr_476577_476598[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476573 === 3))
{var inst_476569 = (state_476572[2]);var inst_476570 = cljs.core.async.close_BANG_.call(null,out);var state_476572__$1 = (function (){var statearr_476578 = state_476572;(statearr_476578[8] = inst_476569);
return statearr_476578;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_476572__$1,inst_476570);
} else
{if((state_val_476573 === 4))
{var state_476572__$1 = state_476572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_476572__$1,7,ch);
} else
{if((state_val_476573 === 5))
{var state_476572__$1 = state_476572;var statearr_476579_476599 = state_476572__$1;(statearr_476579_476599[2] = null);
(statearr_476579_476599[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476573 === 6))
{var inst_476567 = (state_476572[2]);var state_476572__$1 = state_476572;var statearr_476580_476600 = state_476572__$1;(statearr_476580_476600[2] = inst_476567);
(statearr_476580_476600[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476573 === 7))
{var inst_476554 = (state_476572[9]);var inst_476554__$1 = (state_476572[2]);var inst_476555 = (inst_476554__$1 == null);var inst_476556 = cljs.core.not.call(null,inst_476555);var state_476572__$1 = (function (){var statearr_476581 = state_476572;(statearr_476581[9] = inst_476554__$1);
return statearr_476581;
})();if(inst_476556)
{var statearr_476582_476601 = state_476572__$1;(statearr_476582_476601[1] = 8);
} else
{var statearr_476583_476602 = state_476572__$1;(statearr_476583_476602[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476573 === 8))
{var inst_476554 = (state_476572[9]);var state_476572__$1 = state_476572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_476572__$1,11,out,inst_476554);
} else
{if((state_val_476573 === 9))
{var state_476572__$1 = state_476572;var statearr_476584_476603 = state_476572__$1;(statearr_476584_476603[2] = null);
(statearr_476584_476603[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476573 === 10))
{var inst_476564 = (state_476572[2]);var state_476572__$1 = state_476572;var statearr_476585_476604 = state_476572__$1;(statearr_476585_476604[2] = inst_476564);
(statearr_476585_476604[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476573 === 11))
{var inst_476549 = (state_476572[7]);var inst_476559 = (state_476572[2]);var inst_476560 = (inst_476549 + 1);var inst_476549__$1 = inst_476560;var state_476572__$1 = (function (){var statearr_476586 = state_476572;(statearr_476586[7] = inst_476549__$1);
(statearr_476586[10] = inst_476559);
return statearr_476586;
})();var statearr_476587_476605 = state_476572__$1;(statearr_476587_476605[2] = null);
(statearr_476587_476605[1] = 2);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_476591 = (new Array(11));(statearr_476591[0] = state_machine__10228__auto__);
(statearr_476591[1] = 1);
return statearr_476591;
});
var state_machine__10228__auto____1 = (function (state_476572){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_476572);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e476592){if((e476592 instanceof Object))
{var ex__10231__auto__ = e476592;var statearr_476593_476606 = state_476572;(statearr_476593_476606[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476572);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e476592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__476607 = state_476572;
state_476572 = G__476607;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_476572){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_476572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_476594 = f__10298__auto__.call(null);(statearr_476594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___476595);
return statearr_476594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10297__auto___476704 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_476679){var state_val_476680 = (state_476679[1]);if((state_val_476680 === 1))
{var inst_476656 = null;var state_476679__$1 = (function (){var statearr_476681 = state_476679;(statearr_476681[7] = inst_476656);
return statearr_476681;
})();var statearr_476682_476705 = state_476679__$1;(statearr_476682_476705[2] = null);
(statearr_476682_476705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476680 === 2))
{var state_476679__$1 = state_476679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_476679__$1,4,ch);
} else
{if((state_val_476680 === 3))
{var inst_476676 = (state_476679[2]);var inst_476677 = cljs.core.async.close_BANG_.call(null,out);var state_476679__$1 = (function (){var statearr_476683 = state_476679;(statearr_476683[8] = inst_476676);
return statearr_476683;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_476679__$1,inst_476677);
} else
{if((state_val_476680 === 4))
{var inst_476659 = (state_476679[9]);var inst_476659__$1 = (state_476679[2]);var inst_476660 = (inst_476659__$1 == null);var inst_476661 = cljs.core.not.call(null,inst_476660);var state_476679__$1 = (function (){var statearr_476684 = state_476679;(statearr_476684[9] = inst_476659__$1);
return statearr_476684;
})();if(inst_476661)
{var statearr_476685_476706 = state_476679__$1;(statearr_476685_476706[1] = 5);
} else
{var statearr_476686_476707 = state_476679__$1;(statearr_476686_476707[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476680 === 5))
{var inst_476656 = (state_476679[7]);var inst_476659 = (state_476679[9]);var inst_476663 = cljs.core._EQ_.call(null,inst_476659,inst_476656);var state_476679__$1 = state_476679;if(inst_476663)
{var statearr_476687_476708 = state_476679__$1;(statearr_476687_476708[1] = 8);
} else
{var statearr_476688_476709 = state_476679__$1;(statearr_476688_476709[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476680 === 6))
{var state_476679__$1 = state_476679;var statearr_476690_476710 = state_476679__$1;(statearr_476690_476710[2] = null);
(statearr_476690_476710[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476680 === 7))
{var inst_476674 = (state_476679[2]);var state_476679__$1 = state_476679;var statearr_476691_476711 = state_476679__$1;(statearr_476691_476711[2] = inst_476674);
(statearr_476691_476711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476680 === 8))
{var inst_476656 = (state_476679[7]);var tmp476689 = inst_476656;var inst_476656__$1 = tmp476689;var state_476679__$1 = (function (){var statearr_476692 = state_476679;(statearr_476692[7] = inst_476656__$1);
return statearr_476692;
})();var statearr_476693_476712 = state_476679__$1;(statearr_476693_476712[2] = null);
(statearr_476693_476712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476680 === 9))
{var inst_476659 = (state_476679[9]);var state_476679__$1 = state_476679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_476679__$1,11,out,inst_476659);
} else
{if((state_val_476680 === 10))
{var inst_476671 = (state_476679[2]);var state_476679__$1 = state_476679;var statearr_476694_476713 = state_476679__$1;(statearr_476694_476713[2] = inst_476671);
(statearr_476694_476713[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476680 === 11))
{var inst_476659 = (state_476679[9]);var inst_476668 = (state_476679[2]);var inst_476656 = inst_476659;var state_476679__$1 = (function (){var statearr_476695 = state_476679;(statearr_476695[7] = inst_476656);
(statearr_476695[10] = inst_476668);
return statearr_476695;
})();var statearr_476696_476714 = state_476679__$1;(statearr_476696_476714[2] = null);
(statearr_476696_476714[1] = 2);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_476700 = (new Array(11));(statearr_476700[0] = state_machine__10228__auto__);
(statearr_476700[1] = 1);
return statearr_476700;
});
var state_machine__10228__auto____1 = (function (state_476679){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_476679);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e476701){if((e476701 instanceof Object))
{var ex__10231__auto__ = e476701;var statearr_476702_476715 = state_476679;(statearr_476702_476715[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476679);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e476701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__476716 = state_476679;
state_476679 = G__476716;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_476679){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_476679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_476703 = f__10298__auto__.call(null);(statearr_476703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___476704);
return statearr_476703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10297__auto___476851 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_476821){var state_val_476822 = (state_476821[1]);if((state_val_476822 === 1))
{var inst_476784 = (new Array(n));var inst_476785 = inst_476784;var inst_476786 = 0;var state_476821__$1 = (function (){var statearr_476823 = state_476821;(statearr_476823[7] = inst_476786);
(statearr_476823[8] = inst_476785);
return statearr_476823;
})();var statearr_476824_476852 = state_476821__$1;(statearr_476824_476852[2] = null);
(statearr_476824_476852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476822 === 2))
{var state_476821__$1 = state_476821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_476821__$1,4,ch);
} else
{if((state_val_476822 === 3))
{var inst_476819 = (state_476821[2]);var state_476821__$1 = state_476821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_476821__$1,inst_476819);
} else
{if((state_val_476822 === 4))
{var inst_476789 = (state_476821[9]);var inst_476789__$1 = (state_476821[2]);var inst_476790 = (inst_476789__$1 == null);var inst_476791 = cljs.core.not.call(null,inst_476790);var state_476821__$1 = (function (){var statearr_476825 = state_476821;(statearr_476825[9] = inst_476789__$1);
return statearr_476825;
})();if(inst_476791)
{var statearr_476826_476853 = state_476821__$1;(statearr_476826_476853[1] = 5);
} else
{var statearr_476827_476854 = state_476821__$1;(statearr_476827_476854[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476822 === 5))
{var inst_476786 = (state_476821[7]);var inst_476785 = (state_476821[8]);var inst_476789 = (state_476821[9]);var inst_476794 = (state_476821[10]);var inst_476793 = (inst_476785[inst_476786] = inst_476789);var inst_476794__$1 = (inst_476786 + 1);var inst_476795 = (inst_476794__$1 < n);var state_476821__$1 = (function (){var statearr_476828 = state_476821;(statearr_476828[11] = inst_476793);
(statearr_476828[10] = inst_476794__$1);
return statearr_476828;
})();if(cljs.core.truth_(inst_476795))
{var statearr_476829_476855 = state_476821__$1;(statearr_476829_476855[1] = 8);
} else
{var statearr_476830_476856 = state_476821__$1;(statearr_476830_476856[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476822 === 6))
{var inst_476786 = (state_476821[7]);var inst_476807 = (inst_476786 > 0);var state_476821__$1 = state_476821;if(cljs.core.truth_(inst_476807))
{var statearr_476832_476857 = state_476821__$1;(statearr_476832_476857[1] = 12);
} else
{var statearr_476833_476858 = state_476821__$1;(statearr_476833_476858[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476822 === 7))
{var inst_476817 = (state_476821[2]);var state_476821__$1 = state_476821;var statearr_476834_476859 = state_476821__$1;(statearr_476834_476859[2] = inst_476817);
(statearr_476834_476859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476822 === 8))
{var inst_476785 = (state_476821[8]);var inst_476794 = (state_476821[10]);var tmp476831 = inst_476785;var inst_476785__$1 = tmp476831;var inst_476786 = inst_476794;var state_476821__$1 = (function (){var statearr_476835 = state_476821;(statearr_476835[7] = inst_476786);
(statearr_476835[8] = inst_476785__$1);
return statearr_476835;
})();var statearr_476836_476860 = state_476821__$1;(statearr_476836_476860[2] = null);
(statearr_476836_476860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476822 === 9))
{var inst_476785 = (state_476821[8]);var inst_476799 = cljs.core.vec.call(null,inst_476785);var state_476821__$1 = state_476821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_476821__$1,11,out,inst_476799);
} else
{if((state_val_476822 === 10))
{var inst_476805 = (state_476821[2]);var state_476821__$1 = state_476821;var statearr_476837_476861 = state_476821__$1;(statearr_476837_476861[2] = inst_476805);
(statearr_476837_476861[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476822 === 11))
{var inst_476801 = (state_476821[2]);var inst_476802 = (new Array(n));var inst_476785 = inst_476802;var inst_476786 = 0;var state_476821__$1 = (function (){var statearr_476838 = state_476821;(statearr_476838[7] = inst_476786);
(statearr_476838[8] = inst_476785);
(statearr_476838[12] = inst_476801);
return statearr_476838;
})();var statearr_476839_476862 = state_476821__$1;(statearr_476839_476862[2] = null);
(statearr_476839_476862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476822 === 12))
{var inst_476785 = (state_476821[8]);var inst_476809 = cljs.core.vec.call(null,inst_476785);var state_476821__$1 = state_476821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_476821__$1,15,out,inst_476809);
} else
{if((state_val_476822 === 13))
{var state_476821__$1 = state_476821;var statearr_476840_476863 = state_476821__$1;(statearr_476840_476863[2] = null);
(statearr_476840_476863[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476822 === 14))
{var inst_476814 = (state_476821[2]);var inst_476815 = cljs.core.async.close_BANG_.call(null,out);var state_476821__$1 = (function (){var statearr_476841 = state_476821;(statearr_476841[13] = inst_476814);
return statearr_476841;
})();var statearr_476842_476864 = state_476821__$1;(statearr_476842_476864[2] = inst_476815);
(statearr_476842_476864[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476822 === 15))
{var inst_476811 = (state_476821[2]);var state_476821__$1 = state_476821;var statearr_476843_476865 = state_476821__$1;(statearr_476843_476865[2] = inst_476811);
(statearr_476843_476865[1] = 14);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_476847 = (new Array(14));(statearr_476847[0] = state_machine__10228__auto__);
(statearr_476847[1] = 1);
return statearr_476847;
});
var state_machine__10228__auto____1 = (function (state_476821){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_476821);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e476848){if((e476848 instanceof Object))
{var ex__10231__auto__ = e476848;var statearr_476849_476866 = state_476821;(statearr_476849_476866[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476821);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e476848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__476867 = state_476821;
state_476821 = G__476867;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_476821){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_476821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_476850 = f__10298__auto__.call(null);(statearr_476850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___476851);
return statearr_476850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10297__auto___477010 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_476980){var state_val_476981 = (state_476980[1]);if((state_val_476981 === 1))
{var inst_476939 = (new Array(0));var inst_476940 = inst_476939;var inst_476941 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_476980__$1 = (function (){var statearr_476982 = state_476980;(statearr_476982[7] = inst_476940);
(statearr_476982[8] = inst_476941);
return statearr_476982;
})();var statearr_476983_477011 = state_476980__$1;(statearr_476983_477011[2] = null);
(statearr_476983_477011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476981 === 2))
{var state_476980__$1 = state_476980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_476980__$1,4,ch);
} else
{if((state_val_476981 === 3))
{var inst_476978 = (state_476980[2]);var state_476980__$1 = state_476980;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_476980__$1,inst_476978);
} else
{if((state_val_476981 === 4))
{var inst_476944 = (state_476980[9]);var inst_476944__$1 = (state_476980[2]);var inst_476945 = (inst_476944__$1 == null);var inst_476946 = cljs.core.not.call(null,inst_476945);var state_476980__$1 = (function (){var statearr_476984 = state_476980;(statearr_476984[9] = inst_476944__$1);
return statearr_476984;
})();if(inst_476946)
{var statearr_476985_477012 = state_476980__$1;(statearr_476985_477012[1] = 5);
} else
{var statearr_476986_477013 = state_476980__$1;(statearr_476986_477013[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476981 === 5))
{var inst_476948 = (state_476980[10]);var inst_476941 = (state_476980[8]);var inst_476944 = (state_476980[9]);var inst_476948__$1 = f.call(null,inst_476944);var inst_476949 = cljs.core._EQ_.call(null,inst_476948__$1,inst_476941);var inst_476950 = cljs.core.keyword_identical_QMARK_.call(null,inst_476941,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_476951 = (inst_476949) || (inst_476950);var state_476980__$1 = (function (){var statearr_476987 = state_476980;(statearr_476987[10] = inst_476948__$1);
return statearr_476987;
})();if(cljs.core.truth_(inst_476951))
{var statearr_476988_477014 = state_476980__$1;(statearr_476988_477014[1] = 8);
} else
{var statearr_476989_477015 = state_476980__$1;(statearr_476989_477015[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476981 === 6))
{var inst_476940 = (state_476980[7]);var inst_476965 = inst_476940.length;var inst_476966 = (inst_476965 > 0);var state_476980__$1 = state_476980;if(cljs.core.truth_(inst_476966))
{var statearr_476991_477016 = state_476980__$1;(statearr_476991_477016[1] = 12);
} else
{var statearr_476992_477017 = state_476980__$1;(statearr_476992_477017[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476981 === 7))
{var inst_476976 = (state_476980[2]);var state_476980__$1 = state_476980;var statearr_476993_477018 = state_476980__$1;(statearr_476993_477018[2] = inst_476976);
(statearr_476993_477018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476981 === 8))
{var inst_476948 = (state_476980[10]);var inst_476940 = (state_476980[7]);var inst_476944 = (state_476980[9]);var inst_476953 = inst_476940.push(inst_476944);var tmp476990 = inst_476940;var inst_476940__$1 = tmp476990;var inst_476941 = inst_476948;var state_476980__$1 = (function (){var statearr_476994 = state_476980;(statearr_476994[7] = inst_476940__$1);
(statearr_476994[11] = inst_476953);
(statearr_476994[8] = inst_476941);
return statearr_476994;
})();var statearr_476995_477019 = state_476980__$1;(statearr_476995_477019[2] = null);
(statearr_476995_477019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476981 === 9))
{var inst_476940 = (state_476980[7]);var inst_476956 = cljs.core.vec.call(null,inst_476940);var state_476980__$1 = state_476980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_476980__$1,11,out,inst_476956);
} else
{if((state_val_476981 === 10))
{var inst_476963 = (state_476980[2]);var state_476980__$1 = state_476980;var statearr_476996_477020 = state_476980__$1;(statearr_476996_477020[2] = inst_476963);
(statearr_476996_477020[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476981 === 11))
{var inst_476948 = (state_476980[10]);var inst_476944 = (state_476980[9]);var inst_476958 = (state_476980[2]);var inst_476959 = (new Array(0));var inst_476960 = inst_476959.push(inst_476944);var inst_476940 = inst_476959;var inst_476941 = inst_476948;var state_476980__$1 = (function (){var statearr_476997 = state_476980;(statearr_476997[7] = inst_476940);
(statearr_476997[12] = inst_476958);
(statearr_476997[13] = inst_476960);
(statearr_476997[8] = inst_476941);
return statearr_476997;
})();var statearr_476998_477021 = state_476980__$1;(statearr_476998_477021[2] = null);
(statearr_476998_477021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476981 === 12))
{var inst_476940 = (state_476980[7]);var inst_476968 = cljs.core.vec.call(null,inst_476940);var state_476980__$1 = state_476980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_476980__$1,15,out,inst_476968);
} else
{if((state_val_476981 === 13))
{var state_476980__$1 = state_476980;var statearr_476999_477022 = state_476980__$1;(statearr_476999_477022[2] = null);
(statearr_476999_477022[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476981 === 14))
{var inst_476973 = (state_476980[2]);var inst_476974 = cljs.core.async.close_BANG_.call(null,out);var state_476980__$1 = (function (){var statearr_477000 = state_476980;(statearr_477000[14] = inst_476973);
return statearr_477000;
})();var statearr_477001_477023 = state_476980__$1;(statearr_477001_477023[2] = inst_476974);
(statearr_477001_477023[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_476981 === 15))
{var inst_476970 = (state_476980[2]);var state_476980__$1 = state_476980;var statearr_477002_477024 = state_476980__$1;(statearr_477002_477024[2] = inst_476970);
(statearr_477002_477024[1] = 14);
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
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_477006 = (new Array(15));(statearr_477006[0] = state_machine__10228__auto__);
(statearr_477006[1] = 1);
return statearr_477006;
});
var state_machine__10228__auto____1 = (function (state_476980){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_476980);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e477007){if((e477007 instanceof Object))
{var ex__10231__auto__ = e477007;var statearr_477008_477025 = state_476980;(statearr_477008_477025[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_476980);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e477007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__477026 = state_476980;
state_476980 = G__477026;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_476980){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_476980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_477009 = f__10298__auto__.call(null);(statearr_477009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto___477010);
return statearr_477009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
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