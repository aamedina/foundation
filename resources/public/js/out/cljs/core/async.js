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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t186904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t186904 = (function (f,fn_handler,meta186905){
this.f = f;
this.fn_handler = fn_handler;
this.meta186905 = meta186905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t186904.cljs$lang$type = true;
cljs.core.async.t186904.cljs$lang$ctorStr = "cljs.core.async/t186904";
cljs.core.async.t186904.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t186904");
});
cljs.core.async.t186904.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t186904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t186904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t186904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_186906){var self__ = this;
var _186906__$1 = this;return self__.meta186905;
});
cljs.core.async.t186904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_186906,meta186905__$1){var self__ = this;
var _186906__$1 = this;return (new cljs.core.async.t186904(self__.f,self__.fn_handler,meta186905__$1));
});
cljs.core.async.__GT_t186904 = (function __GT_t186904(f__$1,fn_handler__$1,meta186905){return (new cljs.core.async.t186904(f__$1,fn_handler__$1,meta186905));
});
}
return (new cljs.core.async.t186904(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__186908 = buff;if(G__186908)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__186908.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__186908.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__186908);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__186908);
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
{var val_186909 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_186909);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_186909);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9051__auto___186910 = n;var x_186911 = 0;while(true){
if((x_186911 < n__9051__auto___186910))
{(a[x_186911] = 0);
{
var G__186912 = (x_186911 + 1);
x_186911 = G__186912;
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
var G__186913 = (i + 1);
i = G__186913;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t186917 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t186917 = (function (flag,alt_flag,meta186918){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta186918 = meta186918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t186917.cljs$lang$type = true;
cljs.core.async.t186917.cljs$lang$ctorStr = "cljs.core.async/t186917";
cljs.core.async.t186917.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t186917");
});
cljs.core.async.t186917.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t186917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t186917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t186917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_186919){var self__ = this;
var _186919__$1 = this;return self__.meta186918;
});
cljs.core.async.t186917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_186919,meta186918__$1){var self__ = this;
var _186919__$1 = this;return (new cljs.core.async.t186917(self__.flag,self__.alt_flag,meta186918__$1));
});
cljs.core.async.__GT_t186917 = (function __GT_t186917(flag__$1,alt_flag__$1,meta186918){return (new cljs.core.async.t186917(flag__$1,alt_flag__$1,meta186918));
});
}
return (new cljs.core.async.t186917(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t186923 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t186923 = (function (cb,flag,alt_handler,meta186924){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta186924 = meta186924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t186923.cljs$lang$type = true;
cljs.core.async.t186923.cljs$lang$ctorStr = "cljs.core.async/t186923";
cljs.core.async.t186923.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t186923");
});
cljs.core.async.t186923.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t186923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t186923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t186923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_186925){var self__ = this;
var _186925__$1 = this;return self__.meta186924;
});
cljs.core.async.t186923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_186925,meta186924__$1){var self__ = this;
var _186925__$1 = this;return (new cljs.core.async.t186923(self__.cb,self__.flag,self__.alt_handler,meta186924__$1));
});
cljs.core.async.__GT_t186923 = (function __GT_t186923(cb__$1,flag__$1,alt_handler__$1,meta186924){return (new cljs.core.async.t186923(cb__$1,flag__$1,alt_handler__$1,meta186924));
});
}
return (new cljs.core.async.t186923(cb,flag,alt_handler,null));
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
return (function (p1__186926_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__186926_SHARP_,port], null));
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
var G__186927 = (i + 1);
i = G__186927;
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
var alts_BANG___delegate = function (ports,p__186928){var map__186930 = p__186928;var map__186930__$1 = ((cljs.core.seq_QMARK_.call(null,map__186930))?cljs.core.apply.call(null,cljs.core.hash_map,map__186930):map__186930);var opts = map__186930__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__186928 = null;if (arguments.length > 1) {
  p__186928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__186928);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__186931){
var ports = cljs.core.first(arglist__186931);
var p__186928 = cljs.core.rest(arglist__186931);
return alts_BANG___delegate(ports,p__186928);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t186939 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t186939 = (function (ch,f,map_LT_,meta186940){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta186940 = meta186940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t186939.cljs$lang$type = true;
cljs.core.async.t186939.cljs$lang$ctorStr = "cljs.core.async/t186939";
cljs.core.async.t186939.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t186939");
});
cljs.core.async.t186939.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t186939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t186939.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t186939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t186942 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t186942 = (function (fn1,_,meta186940,ch,f,map_LT_,meta186943){
this.fn1 = fn1;
this._ = _;
this.meta186940 = meta186940;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta186943 = meta186943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t186942.cljs$lang$type = true;
cljs.core.async.t186942.cljs$lang$ctorStr = "cljs.core.async/t186942";
cljs.core.async.t186942.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t186942");
});
cljs.core.async.t186942.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t186942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t186942.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t186942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__186932_SHARP_){return f1.call(null,(((p1__186932_SHARP_ == null))?null:self__.f.call(null,p1__186932_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t186942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_186944){var self__ = this;
var _186944__$1 = this;return self__.meta186943;
});
cljs.core.async.t186942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_186944,meta186943__$1){var self__ = this;
var _186944__$1 = this;return (new cljs.core.async.t186942(self__.fn1,self__._,self__.meta186940,self__.ch,self__.f,self__.map_LT_,meta186943__$1));
});
cljs.core.async.__GT_t186942 = (function __GT_t186942(fn1__$1,___$2,meta186940__$1,ch__$2,f__$2,map_LT___$2,meta186943){return (new cljs.core.async.t186942(fn1__$1,___$2,meta186940__$1,ch__$2,f__$2,map_LT___$2,meta186943));
});
}
return (new cljs.core.async.t186942(fn1,___$1,self__.meta186940,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t186939.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t186939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t186939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_186941){var self__ = this;
var _186941__$1 = this;return self__.meta186940;
});
cljs.core.async.t186939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_186941,meta186940__$1){var self__ = this;
var _186941__$1 = this;return (new cljs.core.async.t186939(self__.ch,self__.f,self__.map_LT_,meta186940__$1));
});
cljs.core.async.__GT_t186939 = (function __GT_t186939(ch__$1,f__$1,map_LT___$1,meta186940){return (new cljs.core.async.t186939(ch__$1,f__$1,map_LT___$1,meta186940));
});
}
return (new cljs.core.async.t186939(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t186948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t186948 = (function (ch,f,map_GT_,meta186949){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta186949 = meta186949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t186948.cljs$lang$type = true;
cljs.core.async.t186948.cljs$lang$ctorStr = "cljs.core.async/t186948";
cljs.core.async.t186948.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t186948");
});
cljs.core.async.t186948.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t186948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t186948.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t186948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t186948.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t186948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t186948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_186950){var self__ = this;
var _186950__$1 = this;return self__.meta186949;
});
cljs.core.async.t186948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_186950,meta186949__$1){var self__ = this;
var _186950__$1 = this;return (new cljs.core.async.t186948(self__.ch,self__.f,self__.map_GT_,meta186949__$1));
});
cljs.core.async.__GT_t186948 = (function __GT_t186948(ch__$1,f__$1,map_GT___$1,meta186949){return (new cljs.core.async.t186948(ch__$1,f__$1,map_GT___$1,meta186949));
});
}
return (new cljs.core.async.t186948(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t186954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t186954 = (function (ch,p,filter_GT_,meta186955){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta186955 = meta186955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t186954.cljs$lang$type = true;
cljs.core.async.t186954.cljs$lang$ctorStr = "cljs.core.async/t186954";
cljs.core.async.t186954.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t186954");
});
cljs.core.async.t186954.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t186954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t186954.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t186954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t186954.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t186954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t186954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_186956){var self__ = this;
var _186956__$1 = this;return self__.meta186955;
});
cljs.core.async.t186954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_186956,meta186955__$1){var self__ = this;
var _186956__$1 = this;return (new cljs.core.async.t186954(self__.ch,self__.p,self__.filter_GT_,meta186955__$1));
});
cljs.core.async.__GT_t186954 = (function __GT_t186954(ch__$1,p__$1,filter_GT___$1,meta186955){return (new cljs.core.async.t186954(ch__$1,p__$1,filter_GT___$1,meta186955));
});
}
return (new cljs.core.async.t186954(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___187039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_187018){var state_val_187019 = (state_187018[1]);if((state_val_187019 === 1))
{var state_187018__$1 = state_187018;var statearr_187020_187040 = state_187018__$1;(statearr_187020_187040[2] = null);
(statearr_187020_187040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187019 === 2))
{var state_187018__$1 = state_187018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187018__$1,4,ch);
} else
{if((state_val_187019 === 3))
{var inst_187016 = (state_187018[2]);var state_187018__$1 = state_187018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187018__$1,inst_187016);
} else
{if((state_val_187019 === 4))
{var inst_187000 = (state_187018[7]);var inst_187000__$1 = (state_187018[2]);var inst_187001 = (inst_187000__$1 == null);var state_187018__$1 = (function (){var statearr_187021 = state_187018;(statearr_187021[7] = inst_187000__$1);
return statearr_187021;
})();if(cljs.core.truth_(inst_187001))
{var statearr_187022_187041 = state_187018__$1;(statearr_187022_187041[1] = 5);
} else
{var statearr_187023_187042 = state_187018__$1;(statearr_187023_187042[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187019 === 5))
{var inst_187003 = cljs.core.async.close_BANG_.call(null,out);var state_187018__$1 = state_187018;var statearr_187024_187043 = state_187018__$1;(statearr_187024_187043[2] = inst_187003);
(statearr_187024_187043[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187019 === 6))
{var inst_187000 = (state_187018[7]);var inst_187005 = p.call(null,inst_187000);var state_187018__$1 = state_187018;if(cljs.core.truth_(inst_187005))
{var statearr_187025_187044 = state_187018__$1;(statearr_187025_187044[1] = 8);
} else
{var statearr_187026_187045 = state_187018__$1;(statearr_187026_187045[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187019 === 7))
{var inst_187014 = (state_187018[2]);var state_187018__$1 = state_187018;var statearr_187027_187046 = state_187018__$1;(statearr_187027_187046[2] = inst_187014);
(statearr_187027_187046[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187019 === 8))
{var inst_187000 = (state_187018[7]);var state_187018__$1 = state_187018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187018__$1,11,out,inst_187000);
} else
{if((state_val_187019 === 9))
{var state_187018__$1 = state_187018;var statearr_187028_187047 = state_187018__$1;(statearr_187028_187047[2] = null);
(statearr_187028_187047[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187019 === 10))
{var inst_187011 = (state_187018[2]);var state_187018__$1 = (function (){var statearr_187029 = state_187018;(statearr_187029[8] = inst_187011);
return statearr_187029;
})();var statearr_187030_187048 = state_187018__$1;(statearr_187030_187048[2] = null);
(statearr_187030_187048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187019 === 11))
{var inst_187008 = (state_187018[2]);var state_187018__$1 = state_187018;var statearr_187031_187049 = state_187018__$1;(statearr_187031_187049[2] = inst_187008);
(statearr_187031_187049[1] = 10);
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
var state_machine__12118__auto____0 = (function (){var statearr_187035 = [null,null,null,null,null,null,null,null,null];(statearr_187035[0] = state_machine__12118__auto__);
(statearr_187035[1] = 1);
return statearr_187035;
});
var state_machine__12118__auto____1 = (function (state_187018){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_187018);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e187036){if((e187036 instanceof Object))
{var ex__12121__auto__ = e187036;var statearr_187037_187050 = state_187018;(statearr_187037_187050[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187018);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187051 = state_187018;
state_187018 = G__187051;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_187018){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_187018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_187038 = f__12188__auto__.call(null);(statearr_187038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___187039);
return statearr_187038;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_187203){var state_val_187204 = (state_187203[1]);if((state_val_187204 === 1))
{var state_187203__$1 = state_187203;var statearr_187205_187242 = state_187203__$1;(statearr_187205_187242[2] = null);
(statearr_187205_187242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 2))
{var state_187203__$1 = state_187203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187203__$1,4,in$);
} else
{if((state_val_187204 === 3))
{var inst_187201 = (state_187203[2]);var state_187203__$1 = state_187203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187203__$1,inst_187201);
} else
{if((state_val_187204 === 4))
{var inst_187149 = (state_187203[7]);var inst_187149__$1 = (state_187203[2]);var inst_187150 = (inst_187149__$1 == null);var state_187203__$1 = (function (){var statearr_187206 = state_187203;(statearr_187206[7] = inst_187149__$1);
return statearr_187206;
})();if(cljs.core.truth_(inst_187150))
{var statearr_187207_187243 = state_187203__$1;(statearr_187207_187243[1] = 5);
} else
{var statearr_187208_187244 = state_187203__$1;(statearr_187208_187244[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 5))
{var inst_187152 = cljs.core.async.close_BANG_.call(null,out);var state_187203__$1 = state_187203;var statearr_187209_187245 = state_187203__$1;(statearr_187209_187245[2] = inst_187152);
(statearr_187209_187245[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 6))
{var inst_187149 = (state_187203[7]);var inst_187154 = f.call(null,inst_187149);var inst_187159 = cljs.core.seq.call(null,inst_187154);var inst_187160 = inst_187159;var inst_187161 = null;var inst_187162 = 0;var inst_187163 = 0;var state_187203__$1 = (function (){var statearr_187210 = state_187203;(statearr_187210[8] = inst_187162);
(statearr_187210[9] = inst_187163);
(statearr_187210[10] = inst_187160);
(statearr_187210[11] = inst_187161);
return statearr_187210;
})();var statearr_187211_187246 = state_187203__$1;(statearr_187211_187246[2] = null);
(statearr_187211_187246[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 7))
{var inst_187199 = (state_187203[2]);var state_187203__$1 = state_187203;var statearr_187212_187247 = state_187203__$1;(statearr_187212_187247[2] = inst_187199);
(statearr_187212_187247[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 8))
{var inst_187162 = (state_187203[8]);var inst_187163 = (state_187203[9]);var inst_187165 = (inst_187163 < inst_187162);var inst_187166 = inst_187165;var state_187203__$1 = state_187203;if(cljs.core.truth_(inst_187166))
{var statearr_187213_187248 = state_187203__$1;(statearr_187213_187248[1] = 10);
} else
{var statearr_187214_187249 = state_187203__$1;(statearr_187214_187249[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 9))
{var inst_187196 = (state_187203[2]);var state_187203__$1 = (function (){var statearr_187215 = state_187203;(statearr_187215[12] = inst_187196);
return statearr_187215;
})();var statearr_187216_187250 = state_187203__$1;(statearr_187216_187250[2] = null);
(statearr_187216_187250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 10))
{var inst_187163 = (state_187203[9]);var inst_187161 = (state_187203[11]);var inst_187168 = cljs.core._nth.call(null,inst_187161,inst_187163);var state_187203__$1 = state_187203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187203__$1,13,out,inst_187168);
} else
{if((state_val_187204 === 11))
{var inst_187174 = (state_187203[13]);var inst_187160 = (state_187203[10]);var inst_187174__$1 = cljs.core.seq.call(null,inst_187160);var state_187203__$1 = (function (){var statearr_187220 = state_187203;(statearr_187220[13] = inst_187174__$1);
return statearr_187220;
})();if(inst_187174__$1)
{var statearr_187221_187251 = state_187203__$1;(statearr_187221_187251[1] = 14);
} else
{var statearr_187222_187252 = state_187203__$1;(statearr_187222_187252[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 12))
{var inst_187194 = (state_187203[2]);var state_187203__$1 = state_187203;var statearr_187223_187253 = state_187203__$1;(statearr_187223_187253[2] = inst_187194);
(statearr_187223_187253[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 13))
{var inst_187162 = (state_187203[8]);var inst_187163 = (state_187203[9]);var inst_187160 = (state_187203[10]);var inst_187161 = (state_187203[11]);var inst_187170 = (state_187203[2]);var inst_187171 = (inst_187163 + 1);var tmp187217 = inst_187162;var tmp187218 = inst_187160;var tmp187219 = inst_187161;var inst_187160__$1 = tmp187218;var inst_187161__$1 = tmp187219;var inst_187162__$1 = tmp187217;var inst_187163__$1 = inst_187171;var state_187203__$1 = (function (){var statearr_187224 = state_187203;(statearr_187224[14] = inst_187170);
(statearr_187224[8] = inst_187162__$1);
(statearr_187224[9] = inst_187163__$1);
(statearr_187224[10] = inst_187160__$1);
(statearr_187224[11] = inst_187161__$1);
return statearr_187224;
})();var statearr_187225_187254 = state_187203__$1;(statearr_187225_187254[2] = null);
(statearr_187225_187254[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 14))
{var inst_187174 = (state_187203[13]);var inst_187176 = cljs.core.chunked_seq_QMARK_.call(null,inst_187174);var state_187203__$1 = state_187203;if(inst_187176)
{var statearr_187226_187255 = state_187203__$1;(statearr_187226_187255[1] = 17);
} else
{var statearr_187227_187256 = state_187203__$1;(statearr_187227_187256[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 15))
{var state_187203__$1 = state_187203;var statearr_187228_187257 = state_187203__$1;(statearr_187228_187257[2] = null);
(statearr_187228_187257[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 16))
{var inst_187192 = (state_187203[2]);var state_187203__$1 = state_187203;var statearr_187229_187258 = state_187203__$1;(statearr_187229_187258[2] = inst_187192);
(statearr_187229_187258[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 17))
{var inst_187174 = (state_187203[13]);var inst_187178 = cljs.core.chunk_first.call(null,inst_187174);var inst_187179 = cljs.core.chunk_rest.call(null,inst_187174);var inst_187180 = cljs.core.count.call(null,inst_187178);var inst_187160 = inst_187179;var inst_187161 = inst_187178;var inst_187162 = inst_187180;var inst_187163 = 0;var state_187203__$1 = (function (){var statearr_187230 = state_187203;(statearr_187230[8] = inst_187162);
(statearr_187230[9] = inst_187163);
(statearr_187230[10] = inst_187160);
(statearr_187230[11] = inst_187161);
return statearr_187230;
})();var statearr_187231_187259 = state_187203__$1;(statearr_187231_187259[2] = null);
(statearr_187231_187259[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 18))
{var inst_187174 = (state_187203[13]);var inst_187183 = cljs.core.first.call(null,inst_187174);var state_187203__$1 = state_187203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187203__$1,20,out,inst_187183);
} else
{if((state_val_187204 === 19))
{var inst_187189 = (state_187203[2]);var state_187203__$1 = state_187203;var statearr_187232_187260 = state_187203__$1;(statearr_187232_187260[2] = inst_187189);
(statearr_187232_187260[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187204 === 20))
{var inst_187174 = (state_187203[13]);var inst_187185 = (state_187203[2]);var inst_187186 = cljs.core.next.call(null,inst_187174);var inst_187160 = inst_187186;var inst_187161 = null;var inst_187162 = 0;var inst_187163 = 0;var state_187203__$1 = (function (){var statearr_187233 = state_187203;(statearr_187233[15] = inst_187185);
(statearr_187233[8] = inst_187162);
(statearr_187233[9] = inst_187163);
(statearr_187233[10] = inst_187160);
(statearr_187233[11] = inst_187161);
return statearr_187233;
})();var statearr_187234_187261 = state_187203__$1;(statearr_187234_187261[2] = null);
(statearr_187234_187261[1] = 8);
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
var state_machine__12118__auto____0 = (function (){var statearr_187238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_187238[0] = state_machine__12118__auto__);
(statearr_187238[1] = 1);
return statearr_187238;
});
var state_machine__12118__auto____1 = (function (state_187203){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_187203);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e187239){if((e187239 instanceof Object))
{var ex__12121__auto__ = e187239;var statearr_187240_187262 = state_187203;(statearr_187240_187262[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187263 = state_187203;
state_187203 = G__187263;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_187203){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_187203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_187241 = f__12188__auto__.call(null);(statearr_187241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_187241;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12187__auto___187344 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_187323){var state_val_187324 = (state_187323[1]);if((state_val_187324 === 1))
{var state_187323__$1 = state_187323;var statearr_187325_187345 = state_187323__$1;(statearr_187325_187345[2] = null);
(statearr_187325_187345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187324 === 2))
{var state_187323__$1 = state_187323;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187323__$1,4,from);
} else
{if((state_val_187324 === 3))
{var inst_187321 = (state_187323[2]);var state_187323__$1 = state_187323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187323__$1,inst_187321);
} else
{if((state_val_187324 === 4))
{var inst_187306 = (state_187323[7]);var inst_187306__$1 = (state_187323[2]);var inst_187307 = (inst_187306__$1 == null);var state_187323__$1 = (function (){var statearr_187326 = state_187323;(statearr_187326[7] = inst_187306__$1);
return statearr_187326;
})();if(cljs.core.truth_(inst_187307))
{var statearr_187327_187346 = state_187323__$1;(statearr_187327_187346[1] = 5);
} else
{var statearr_187328_187347 = state_187323__$1;(statearr_187328_187347[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187324 === 5))
{var state_187323__$1 = state_187323;if(cljs.core.truth_(close_QMARK_))
{var statearr_187329_187348 = state_187323__$1;(statearr_187329_187348[1] = 8);
} else
{var statearr_187330_187349 = state_187323__$1;(statearr_187330_187349[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187324 === 6))
{var inst_187306 = (state_187323[7]);var state_187323__$1 = state_187323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187323__$1,11,to,inst_187306);
} else
{if((state_val_187324 === 7))
{var inst_187319 = (state_187323[2]);var state_187323__$1 = state_187323;var statearr_187331_187350 = state_187323__$1;(statearr_187331_187350[2] = inst_187319);
(statearr_187331_187350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187324 === 8))
{var inst_187310 = cljs.core.async.close_BANG_.call(null,to);var state_187323__$1 = state_187323;var statearr_187332_187351 = state_187323__$1;(statearr_187332_187351[2] = inst_187310);
(statearr_187332_187351[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187324 === 9))
{var state_187323__$1 = state_187323;var statearr_187333_187352 = state_187323__$1;(statearr_187333_187352[2] = null);
(statearr_187333_187352[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187324 === 10))
{var inst_187313 = (state_187323[2]);var state_187323__$1 = state_187323;var statearr_187334_187353 = state_187323__$1;(statearr_187334_187353[2] = inst_187313);
(statearr_187334_187353[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187324 === 11))
{var inst_187316 = (state_187323[2]);var state_187323__$1 = (function (){var statearr_187335 = state_187323;(statearr_187335[8] = inst_187316);
return statearr_187335;
})();var statearr_187336_187354 = state_187323__$1;(statearr_187336_187354[2] = null);
(statearr_187336_187354[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_187340 = [null,null,null,null,null,null,null,null,null];(statearr_187340[0] = state_machine__12118__auto__);
(statearr_187340[1] = 1);
return statearr_187340;
});
var state_machine__12118__auto____1 = (function (state_187323){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_187323);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e187341){if((e187341 instanceof Object))
{var ex__12121__auto__ = e187341;var statearr_187342_187355 = state_187323;(statearr_187342_187355[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187356 = state_187323;
state_187323 = G__187356;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_187323){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_187323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_187343 = f__12188__auto__.call(null);(statearr_187343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___187344);
return statearr_187343;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12187__auto___187443 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_187421){var state_val_187422 = (state_187421[1]);if((state_val_187422 === 1))
{var state_187421__$1 = state_187421;var statearr_187423_187444 = state_187421__$1;(statearr_187423_187444[2] = null);
(statearr_187423_187444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187422 === 2))
{var state_187421__$1 = state_187421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187421__$1,4,ch);
} else
{if((state_val_187422 === 3))
{var inst_187419 = (state_187421[2]);var state_187421__$1 = state_187421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187421__$1,inst_187419);
} else
{if((state_val_187422 === 4))
{var inst_187402 = (state_187421[7]);var inst_187402__$1 = (state_187421[2]);var inst_187403 = (inst_187402__$1 == null);var state_187421__$1 = (function (){var statearr_187424 = state_187421;(statearr_187424[7] = inst_187402__$1);
return statearr_187424;
})();if(cljs.core.truth_(inst_187403))
{var statearr_187425_187445 = state_187421__$1;(statearr_187425_187445[1] = 5);
} else
{var statearr_187426_187446 = state_187421__$1;(statearr_187426_187446[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187422 === 5))
{var inst_187405 = cljs.core.async.close_BANG_.call(null,tc);var inst_187406 = cljs.core.async.close_BANG_.call(null,fc);var state_187421__$1 = (function (){var statearr_187427 = state_187421;(statearr_187427[8] = inst_187405);
return statearr_187427;
})();var statearr_187428_187447 = state_187421__$1;(statearr_187428_187447[2] = inst_187406);
(statearr_187428_187447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187422 === 6))
{var inst_187402 = (state_187421[7]);var inst_187408 = p.call(null,inst_187402);var state_187421__$1 = state_187421;if(cljs.core.truth_(inst_187408))
{var statearr_187429_187448 = state_187421__$1;(statearr_187429_187448[1] = 9);
} else
{var statearr_187430_187449 = state_187421__$1;(statearr_187430_187449[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187422 === 7))
{var inst_187417 = (state_187421[2]);var state_187421__$1 = state_187421;var statearr_187431_187450 = state_187421__$1;(statearr_187431_187450[2] = inst_187417);
(statearr_187431_187450[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187422 === 8))
{var inst_187414 = (state_187421[2]);var state_187421__$1 = (function (){var statearr_187432 = state_187421;(statearr_187432[9] = inst_187414);
return statearr_187432;
})();var statearr_187433_187451 = state_187421__$1;(statearr_187433_187451[2] = null);
(statearr_187433_187451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187422 === 9))
{var state_187421__$1 = state_187421;var statearr_187434_187452 = state_187421__$1;(statearr_187434_187452[2] = tc);
(statearr_187434_187452[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187422 === 10))
{var state_187421__$1 = state_187421;var statearr_187435_187453 = state_187421__$1;(statearr_187435_187453[2] = fc);
(statearr_187435_187453[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187422 === 11))
{var inst_187402 = (state_187421[7]);var inst_187412 = (state_187421[2]);var state_187421__$1 = state_187421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187421__$1,8,inst_187412,inst_187402);
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
var state_machine__12118__auto____0 = (function (){var statearr_187439 = [null,null,null,null,null,null,null,null,null,null];(statearr_187439[0] = state_machine__12118__auto__);
(statearr_187439[1] = 1);
return statearr_187439;
});
var state_machine__12118__auto____1 = (function (state_187421){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_187421);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e187440){if((e187440 instanceof Object))
{var ex__12121__auto__ = e187440;var statearr_187441_187454 = state_187421;(statearr_187441_187454[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187421);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187455 = state_187421;
state_187421 = G__187455;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_187421){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_187421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_187442 = f__12188__auto__.call(null);(statearr_187442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___187443);
return statearr_187442;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_187502){var state_val_187503 = (state_187502[1]);if((state_val_187503 === 7))
{var inst_187498 = (state_187502[2]);var state_187502__$1 = state_187502;var statearr_187504_187520 = state_187502__$1;(statearr_187504_187520[2] = inst_187498);
(statearr_187504_187520[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187503 === 6))
{var inst_187491 = (state_187502[7]);var inst_187488 = (state_187502[8]);var inst_187495 = f.call(null,inst_187488,inst_187491);var inst_187488__$1 = inst_187495;var state_187502__$1 = (function (){var statearr_187505 = state_187502;(statearr_187505[8] = inst_187488__$1);
return statearr_187505;
})();var statearr_187506_187521 = state_187502__$1;(statearr_187506_187521[2] = null);
(statearr_187506_187521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187503 === 5))
{var inst_187488 = (state_187502[8]);var state_187502__$1 = state_187502;var statearr_187507_187522 = state_187502__$1;(statearr_187507_187522[2] = inst_187488);
(statearr_187507_187522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187503 === 4))
{var inst_187491 = (state_187502[7]);var inst_187491__$1 = (state_187502[2]);var inst_187492 = (inst_187491__$1 == null);var state_187502__$1 = (function (){var statearr_187508 = state_187502;(statearr_187508[7] = inst_187491__$1);
return statearr_187508;
})();if(cljs.core.truth_(inst_187492))
{var statearr_187509_187523 = state_187502__$1;(statearr_187509_187523[1] = 5);
} else
{var statearr_187510_187524 = state_187502__$1;(statearr_187510_187524[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187503 === 3))
{var inst_187500 = (state_187502[2]);var state_187502__$1 = state_187502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187502__$1,inst_187500);
} else
{if((state_val_187503 === 2))
{var state_187502__$1 = state_187502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187502__$1,4,ch);
} else
{if((state_val_187503 === 1))
{var inst_187488 = init;var state_187502__$1 = (function (){var statearr_187511 = state_187502;(statearr_187511[8] = inst_187488);
return statearr_187511;
})();var statearr_187512_187525 = state_187502__$1;(statearr_187512_187525[2] = null);
(statearr_187512_187525[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_187516 = [null,null,null,null,null,null,null,null,null];(statearr_187516[0] = state_machine__12118__auto__);
(statearr_187516[1] = 1);
return statearr_187516;
});
var state_machine__12118__auto____1 = (function (state_187502){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_187502);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e187517){if((e187517 instanceof Object))
{var ex__12121__auto__ = e187517;var statearr_187518_187526 = state_187502;(statearr_187518_187526[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187502);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187527 = state_187502;
state_187502 = G__187527;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_187502){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_187502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_187519 = f__12188__auto__.call(null);(statearr_187519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_187519;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_187589){var state_val_187590 = (state_187589[1]);if((state_val_187590 === 1))
{var inst_187569 = cljs.core.seq.call(null,coll);var inst_187570 = inst_187569;var state_187589__$1 = (function (){var statearr_187591 = state_187589;(statearr_187591[7] = inst_187570);
return statearr_187591;
})();var statearr_187592_187610 = state_187589__$1;(statearr_187592_187610[2] = null);
(statearr_187592_187610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187590 === 2))
{var inst_187570 = (state_187589[7]);var state_187589__$1 = state_187589;if(cljs.core.truth_(inst_187570))
{var statearr_187593_187611 = state_187589__$1;(statearr_187593_187611[1] = 4);
} else
{var statearr_187594_187612 = state_187589__$1;(statearr_187594_187612[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187590 === 3))
{var inst_187587 = (state_187589[2]);var state_187589__$1 = state_187589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187589__$1,inst_187587);
} else
{if((state_val_187590 === 4))
{var inst_187570 = (state_187589[7]);var inst_187573 = cljs.core.first.call(null,inst_187570);var state_187589__$1 = state_187589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_187589__$1,7,ch,inst_187573);
} else
{if((state_val_187590 === 5))
{var state_187589__$1 = state_187589;if(cljs.core.truth_(close_QMARK_))
{var statearr_187595_187613 = state_187589__$1;(statearr_187595_187613[1] = 8);
} else
{var statearr_187596_187614 = state_187589__$1;(statearr_187596_187614[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187590 === 6))
{var inst_187585 = (state_187589[2]);var state_187589__$1 = state_187589;var statearr_187597_187615 = state_187589__$1;(statearr_187597_187615[2] = inst_187585);
(statearr_187597_187615[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187590 === 7))
{var inst_187570 = (state_187589[7]);var inst_187575 = (state_187589[2]);var inst_187576 = cljs.core.next.call(null,inst_187570);var inst_187570__$1 = inst_187576;var state_187589__$1 = (function (){var statearr_187598 = state_187589;(statearr_187598[7] = inst_187570__$1);
(statearr_187598[8] = inst_187575);
return statearr_187598;
})();var statearr_187599_187616 = state_187589__$1;(statearr_187599_187616[2] = null);
(statearr_187599_187616[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187590 === 8))
{var inst_187580 = cljs.core.async.close_BANG_.call(null,ch);var state_187589__$1 = state_187589;var statearr_187600_187617 = state_187589__$1;(statearr_187600_187617[2] = inst_187580);
(statearr_187600_187617[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187590 === 9))
{var state_187589__$1 = state_187589;var statearr_187601_187618 = state_187589__$1;(statearr_187601_187618[2] = null);
(statearr_187601_187618[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187590 === 10))
{var inst_187583 = (state_187589[2]);var state_187589__$1 = state_187589;var statearr_187602_187619 = state_187589__$1;(statearr_187602_187619[2] = inst_187583);
(statearr_187602_187619[1] = 6);
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
var state_machine__12118__auto____0 = (function (){var statearr_187606 = [null,null,null,null,null,null,null,null,null];(statearr_187606[0] = state_machine__12118__auto__);
(statearr_187606[1] = 1);
return statearr_187606;
});
var state_machine__12118__auto____1 = (function (state_187589){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_187589);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e187607){if((e187607 instanceof Object))
{var ex__12121__auto__ = e187607;var statearr_187608_187620 = state_187589;(statearr_187608_187620[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e187607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__187621 = state_187589;
state_187589 = G__187621;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_187589){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_187589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_187609 = f__12188__auto__.call(null);(statearr_187609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_187609;
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
cljs.core.async.Mux = (function (){var obj187623 = {};return obj187623;
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
cljs.core.async.Mult = (function (){var obj187625 = {};return obj187625;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t187849 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t187849 = (function (cs,ch,mult,meta187850){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta187850 = meta187850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t187849.cljs$lang$type = true;
cljs.core.async.t187849.cljs$lang$ctorStr = "cljs.core.async/t187849";
cljs.core.async.t187849.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t187849");
});})(cs))
;
cljs.core.async.t187849.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t187849.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t187849.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t187849.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t187849.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t187849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t187849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_187851){var self__ = this;
var _187851__$1 = this;return self__.meta187850;
});})(cs))
;
cljs.core.async.t187849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_187851,meta187850__$1){var self__ = this;
var _187851__$1 = this;return (new cljs.core.async.t187849(self__.cs,self__.ch,self__.mult,meta187850__$1));
});})(cs))
;
cljs.core.async.__GT_t187849 = ((function (cs){
return (function __GT_t187849(cs__$1,ch__$1,mult__$1,meta187850){return (new cljs.core.async.t187849(cs__$1,ch__$1,mult__$1,meta187850));
});})(cs))
;
}
return (new cljs.core.async.t187849(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12187__auto___188072 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_187986){var state_val_187987 = (state_187986[1]);if((state_val_187987 === 32))
{var inst_187930 = (state_187986[7]);var inst_187854 = (state_187986[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_187986,31,Object,null,30);var inst_187937 = cljs.core.async.put_BANG_.call(null,inst_187930,inst_187854,done);var state_187986__$1 = state_187986;var statearr_187988_188073 = state_187986__$1;(statearr_187988_188073[2] = inst_187937);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187986__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 1))
{var state_187986__$1 = state_187986;var statearr_187989_188074 = state_187986__$1;(statearr_187989_188074[2] = null);
(statearr_187989_188074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 33))
{var inst_187943 = (state_187986[9]);var inst_187945 = cljs.core.chunked_seq_QMARK_.call(null,inst_187943);var state_187986__$1 = state_187986;if(inst_187945)
{var statearr_187990_188075 = state_187986__$1;(statearr_187990_188075[1] = 36);
} else
{var statearr_187991_188076 = state_187986__$1;(statearr_187991_188076[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 2))
{var state_187986__$1 = state_187986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187986__$1,4,ch);
} else
{if((state_val_187987 === 34))
{var state_187986__$1 = state_187986;var statearr_187992_188077 = state_187986__$1;(statearr_187992_188077[2] = null);
(statearr_187992_188077[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 3))
{var inst_187984 = (state_187986[2]);var state_187986__$1 = state_187986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_187986__$1,inst_187984);
} else
{if((state_val_187987 === 35))
{var inst_187968 = (state_187986[2]);var state_187986__$1 = state_187986;var statearr_187993_188078 = state_187986__$1;(statearr_187993_188078[2] = inst_187968);
(statearr_187993_188078[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 4))
{var inst_187854 = (state_187986[8]);var inst_187854__$1 = (state_187986[2]);var inst_187855 = (inst_187854__$1 == null);var state_187986__$1 = (function (){var statearr_187994 = state_187986;(statearr_187994[8] = inst_187854__$1);
return statearr_187994;
})();if(cljs.core.truth_(inst_187855))
{var statearr_187995_188079 = state_187986__$1;(statearr_187995_188079[1] = 5);
} else
{var statearr_187996_188080 = state_187986__$1;(statearr_187996_188080[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 36))
{var inst_187943 = (state_187986[9]);var inst_187947 = cljs.core.chunk_first.call(null,inst_187943);var inst_187948 = cljs.core.chunk_rest.call(null,inst_187943);var inst_187949 = cljs.core.count.call(null,inst_187947);var inst_187922 = inst_187948;var inst_187923 = inst_187947;var inst_187924 = inst_187949;var inst_187925 = 0;var state_187986__$1 = (function (){var statearr_187997 = state_187986;(statearr_187997[10] = inst_187923);
(statearr_187997[11] = inst_187922);
(statearr_187997[12] = inst_187924);
(statearr_187997[13] = inst_187925);
return statearr_187997;
})();var statearr_187998_188081 = state_187986__$1;(statearr_187998_188081[2] = null);
(statearr_187998_188081[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 5))
{var inst_187861 = cljs.core.deref.call(null,cs);var inst_187862 = cljs.core.seq.call(null,inst_187861);var inst_187863 = inst_187862;var inst_187864 = null;var inst_187865 = 0;var inst_187866 = 0;var state_187986__$1 = (function (){var statearr_187999 = state_187986;(statearr_187999[14] = inst_187866);
(statearr_187999[15] = inst_187865);
(statearr_187999[16] = inst_187863);
(statearr_187999[17] = inst_187864);
return statearr_187999;
})();var statearr_188000_188082 = state_187986__$1;(statearr_188000_188082[2] = null);
(statearr_188000_188082[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 37))
{var inst_187943 = (state_187986[9]);var inst_187952 = cljs.core.first.call(null,inst_187943);var state_187986__$1 = (function (){var statearr_188001 = state_187986;(statearr_188001[18] = inst_187952);
return statearr_188001;
})();var statearr_188002_188083 = state_187986__$1;(statearr_188002_188083[2] = null);
(statearr_188002_188083[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 6))
{var inst_187914 = (state_187986[19]);var inst_187913 = cljs.core.deref.call(null,cs);var inst_187914__$1 = cljs.core.keys.call(null,inst_187913);var inst_187915 = cljs.core.count.call(null,inst_187914__$1);var inst_187916 = cljs.core.reset_BANG_.call(null,dctr,inst_187915);var inst_187921 = cljs.core.seq.call(null,inst_187914__$1);var inst_187922 = inst_187921;var inst_187923 = null;var inst_187924 = 0;var inst_187925 = 0;var state_187986__$1 = (function (){var statearr_188003 = state_187986;(statearr_188003[20] = inst_187916);
(statearr_188003[19] = inst_187914__$1);
(statearr_188003[10] = inst_187923);
(statearr_188003[11] = inst_187922);
(statearr_188003[12] = inst_187924);
(statearr_188003[13] = inst_187925);
return statearr_188003;
})();var statearr_188004_188084 = state_187986__$1;(statearr_188004_188084[2] = null);
(statearr_188004_188084[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 38))
{var inst_187965 = (state_187986[2]);var state_187986__$1 = state_187986;var statearr_188005_188085 = state_187986__$1;(statearr_188005_188085[2] = inst_187965);
(statearr_188005_188085[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 7))
{var inst_187982 = (state_187986[2]);var state_187986__$1 = state_187986;var statearr_188006_188086 = state_187986__$1;(statearr_188006_188086[2] = inst_187982);
(statearr_188006_188086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 39))
{var inst_187943 = (state_187986[9]);var inst_187961 = (state_187986[2]);var inst_187962 = cljs.core.next.call(null,inst_187943);var inst_187922 = inst_187962;var inst_187923 = null;var inst_187924 = 0;var inst_187925 = 0;var state_187986__$1 = (function (){var statearr_188007 = state_187986;(statearr_188007[21] = inst_187961);
(statearr_188007[10] = inst_187923);
(statearr_188007[11] = inst_187922);
(statearr_188007[12] = inst_187924);
(statearr_188007[13] = inst_187925);
return statearr_188007;
})();var statearr_188008_188087 = state_187986__$1;(statearr_188008_188087[2] = null);
(statearr_188008_188087[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 8))
{var inst_187866 = (state_187986[14]);var inst_187865 = (state_187986[15]);var inst_187868 = (inst_187866 < inst_187865);var inst_187869 = inst_187868;var state_187986__$1 = state_187986;if(cljs.core.truth_(inst_187869))
{var statearr_188009_188088 = state_187986__$1;(statearr_188009_188088[1] = 10);
} else
{var statearr_188010_188089 = state_187986__$1;(statearr_188010_188089[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 40))
{var inst_187952 = (state_187986[18]);var inst_187953 = (state_187986[2]);var inst_187954 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_187955 = cljs.core.async.untap_STAR_.call(null,m,inst_187952);var state_187986__$1 = (function (){var statearr_188011 = state_187986;(statearr_188011[22] = inst_187954);
(statearr_188011[23] = inst_187953);
return statearr_188011;
})();var statearr_188012_188090 = state_187986__$1;(statearr_188012_188090[2] = inst_187955);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187986__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 9))
{var inst_187911 = (state_187986[2]);var state_187986__$1 = state_187986;var statearr_188013_188091 = state_187986__$1;(statearr_188013_188091[2] = inst_187911);
(statearr_188013_188091[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 41))
{var inst_187952 = (state_187986[18]);var inst_187854 = (state_187986[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_187986,40,Object,null,39);var inst_187959 = cljs.core.async.put_BANG_.call(null,inst_187952,inst_187854,done);var state_187986__$1 = state_187986;var statearr_188014_188092 = state_187986__$1;(statearr_188014_188092[2] = inst_187959);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187986__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 10))
{var inst_187866 = (state_187986[14]);var inst_187864 = (state_187986[17]);var inst_187872 = cljs.core._nth.call(null,inst_187864,inst_187866);var inst_187873 = cljs.core.nth.call(null,inst_187872,0,null);var inst_187874 = cljs.core.nth.call(null,inst_187872,1,null);var state_187986__$1 = (function (){var statearr_188015 = state_187986;(statearr_188015[24] = inst_187873);
return statearr_188015;
})();if(cljs.core.truth_(inst_187874))
{var statearr_188016_188093 = state_187986__$1;(statearr_188016_188093[1] = 13);
} else
{var statearr_188017_188094 = state_187986__$1;(statearr_188017_188094[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 42))
{var state_187986__$1 = state_187986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_187986__$1,45,dchan);
} else
{if((state_val_187987 === 11))
{var inst_187883 = (state_187986[25]);var inst_187863 = (state_187986[16]);var inst_187883__$1 = cljs.core.seq.call(null,inst_187863);var state_187986__$1 = (function (){var statearr_188018 = state_187986;(statearr_188018[25] = inst_187883__$1);
return statearr_188018;
})();if(inst_187883__$1)
{var statearr_188019_188095 = state_187986__$1;(statearr_188019_188095[1] = 16);
} else
{var statearr_188020_188096 = state_187986__$1;(statearr_188020_188096[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 43))
{var state_187986__$1 = state_187986;var statearr_188021_188097 = state_187986__$1;(statearr_188021_188097[2] = null);
(statearr_188021_188097[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 12))
{var inst_187909 = (state_187986[2]);var state_187986__$1 = state_187986;var statearr_188022_188098 = state_187986__$1;(statearr_188022_188098[2] = inst_187909);
(statearr_188022_188098[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 44))
{var inst_187979 = (state_187986[2]);var state_187986__$1 = (function (){var statearr_188023 = state_187986;(statearr_188023[26] = inst_187979);
return statearr_188023;
})();var statearr_188024_188099 = state_187986__$1;(statearr_188024_188099[2] = null);
(statearr_188024_188099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 13))
{var inst_187873 = (state_187986[24]);var inst_187876 = cljs.core.async.close_BANG_.call(null,inst_187873);var state_187986__$1 = state_187986;var statearr_188025_188100 = state_187986__$1;(statearr_188025_188100[2] = inst_187876);
(statearr_188025_188100[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 45))
{var inst_187976 = (state_187986[2]);var state_187986__$1 = state_187986;var statearr_188029_188101 = state_187986__$1;(statearr_188029_188101[2] = inst_187976);
(statearr_188029_188101[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 14))
{var state_187986__$1 = state_187986;var statearr_188030_188102 = state_187986__$1;(statearr_188030_188102[2] = null);
(statearr_188030_188102[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 15))
{var inst_187866 = (state_187986[14]);var inst_187865 = (state_187986[15]);var inst_187863 = (state_187986[16]);var inst_187864 = (state_187986[17]);var inst_187879 = (state_187986[2]);var inst_187880 = (inst_187866 + 1);var tmp188026 = inst_187865;var tmp188027 = inst_187863;var tmp188028 = inst_187864;var inst_187863__$1 = tmp188027;var inst_187864__$1 = tmp188028;var inst_187865__$1 = tmp188026;var inst_187866__$1 = inst_187880;var state_187986__$1 = (function (){var statearr_188031 = state_187986;(statearr_188031[14] = inst_187866__$1);
(statearr_188031[15] = inst_187865__$1);
(statearr_188031[27] = inst_187879);
(statearr_188031[16] = inst_187863__$1);
(statearr_188031[17] = inst_187864__$1);
return statearr_188031;
})();var statearr_188032_188103 = state_187986__$1;(statearr_188032_188103[2] = null);
(statearr_188032_188103[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 16))
{var inst_187883 = (state_187986[25]);var inst_187885 = cljs.core.chunked_seq_QMARK_.call(null,inst_187883);var state_187986__$1 = state_187986;if(inst_187885)
{var statearr_188033_188104 = state_187986__$1;(statearr_188033_188104[1] = 19);
} else
{var statearr_188034_188105 = state_187986__$1;(statearr_188034_188105[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 17))
{var state_187986__$1 = state_187986;var statearr_188035_188106 = state_187986__$1;(statearr_188035_188106[2] = null);
(statearr_188035_188106[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 18))
{var inst_187907 = (state_187986[2]);var state_187986__$1 = state_187986;var statearr_188036_188107 = state_187986__$1;(statearr_188036_188107[2] = inst_187907);
(statearr_188036_188107[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 19))
{var inst_187883 = (state_187986[25]);var inst_187887 = cljs.core.chunk_first.call(null,inst_187883);var inst_187888 = cljs.core.chunk_rest.call(null,inst_187883);var inst_187889 = cljs.core.count.call(null,inst_187887);var inst_187863 = inst_187888;var inst_187864 = inst_187887;var inst_187865 = inst_187889;var inst_187866 = 0;var state_187986__$1 = (function (){var statearr_188037 = state_187986;(statearr_188037[14] = inst_187866);
(statearr_188037[15] = inst_187865);
(statearr_188037[16] = inst_187863);
(statearr_188037[17] = inst_187864);
return statearr_188037;
})();var statearr_188038_188108 = state_187986__$1;(statearr_188038_188108[2] = null);
(statearr_188038_188108[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 20))
{var inst_187883 = (state_187986[25]);var inst_187893 = cljs.core.first.call(null,inst_187883);var inst_187894 = cljs.core.nth.call(null,inst_187893,0,null);var inst_187895 = cljs.core.nth.call(null,inst_187893,1,null);var state_187986__$1 = (function (){var statearr_188039 = state_187986;(statearr_188039[28] = inst_187894);
return statearr_188039;
})();if(cljs.core.truth_(inst_187895))
{var statearr_188040_188109 = state_187986__$1;(statearr_188040_188109[1] = 22);
} else
{var statearr_188041_188110 = state_187986__$1;(statearr_188041_188110[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 21))
{var inst_187904 = (state_187986[2]);var state_187986__$1 = state_187986;var statearr_188042_188111 = state_187986__$1;(statearr_188042_188111[2] = inst_187904);
(statearr_188042_188111[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 22))
{var inst_187894 = (state_187986[28]);var inst_187897 = cljs.core.async.close_BANG_.call(null,inst_187894);var state_187986__$1 = state_187986;var statearr_188043_188112 = state_187986__$1;(statearr_188043_188112[2] = inst_187897);
(statearr_188043_188112[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 23))
{var state_187986__$1 = state_187986;var statearr_188044_188113 = state_187986__$1;(statearr_188044_188113[2] = null);
(statearr_188044_188113[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 24))
{var inst_187883 = (state_187986[25]);var inst_187900 = (state_187986[2]);var inst_187901 = cljs.core.next.call(null,inst_187883);var inst_187863 = inst_187901;var inst_187864 = null;var inst_187865 = 0;var inst_187866 = 0;var state_187986__$1 = (function (){var statearr_188045 = state_187986;(statearr_188045[14] = inst_187866);
(statearr_188045[15] = inst_187865);
(statearr_188045[29] = inst_187900);
(statearr_188045[16] = inst_187863);
(statearr_188045[17] = inst_187864);
return statearr_188045;
})();var statearr_188046_188114 = state_187986__$1;(statearr_188046_188114[2] = null);
(statearr_188046_188114[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 25))
{var inst_187924 = (state_187986[12]);var inst_187925 = (state_187986[13]);var inst_187927 = (inst_187925 < inst_187924);var inst_187928 = inst_187927;var state_187986__$1 = state_187986;if(cljs.core.truth_(inst_187928))
{var statearr_188047_188115 = state_187986__$1;(statearr_188047_188115[1] = 27);
} else
{var statearr_188048_188116 = state_187986__$1;(statearr_188048_188116[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 26))
{var inst_187914 = (state_187986[19]);var inst_187972 = (state_187986[2]);var inst_187973 = cljs.core.seq.call(null,inst_187914);var state_187986__$1 = (function (){var statearr_188049 = state_187986;(statearr_188049[30] = inst_187972);
return statearr_188049;
})();if(inst_187973)
{var statearr_188050_188117 = state_187986__$1;(statearr_188050_188117[1] = 42);
} else
{var statearr_188051_188118 = state_187986__$1;(statearr_188051_188118[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 27))
{var inst_187923 = (state_187986[10]);var inst_187925 = (state_187986[13]);var inst_187930 = cljs.core._nth.call(null,inst_187923,inst_187925);var state_187986__$1 = (function (){var statearr_188052 = state_187986;(statearr_188052[7] = inst_187930);
return statearr_188052;
})();var statearr_188053_188119 = state_187986__$1;(statearr_188053_188119[2] = null);
(statearr_188053_188119[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 28))
{var inst_187943 = (state_187986[9]);var inst_187922 = (state_187986[11]);var inst_187943__$1 = cljs.core.seq.call(null,inst_187922);var state_187986__$1 = (function (){var statearr_188057 = state_187986;(statearr_188057[9] = inst_187943__$1);
return statearr_188057;
})();if(inst_187943__$1)
{var statearr_188058_188120 = state_187986__$1;(statearr_188058_188120[1] = 33);
} else
{var statearr_188059_188121 = state_187986__$1;(statearr_188059_188121[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 29))
{var inst_187970 = (state_187986[2]);var state_187986__$1 = state_187986;var statearr_188060_188122 = state_187986__$1;(statearr_188060_188122[2] = inst_187970);
(statearr_188060_188122[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 30))
{var inst_187923 = (state_187986[10]);var inst_187922 = (state_187986[11]);var inst_187924 = (state_187986[12]);var inst_187925 = (state_187986[13]);var inst_187939 = (state_187986[2]);var inst_187940 = (inst_187925 + 1);var tmp188054 = inst_187923;var tmp188055 = inst_187922;var tmp188056 = inst_187924;var inst_187922__$1 = tmp188055;var inst_187923__$1 = tmp188054;var inst_187924__$1 = tmp188056;var inst_187925__$1 = inst_187940;var state_187986__$1 = (function (){var statearr_188061 = state_187986;(statearr_188061[10] = inst_187923__$1);
(statearr_188061[11] = inst_187922__$1);
(statearr_188061[31] = inst_187939);
(statearr_188061[12] = inst_187924__$1);
(statearr_188061[13] = inst_187925__$1);
return statearr_188061;
})();var statearr_188062_188123 = state_187986__$1;(statearr_188062_188123[2] = null);
(statearr_188062_188123[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_187987 === 31))
{var inst_187930 = (state_187986[7]);var inst_187931 = (state_187986[2]);var inst_187932 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_187933 = cljs.core.async.untap_STAR_.call(null,m,inst_187930);var state_187986__$1 = (function (){var statearr_188063 = state_187986;(statearr_188063[32] = inst_187932);
(statearr_188063[33] = inst_187931);
return statearr_188063;
})();var statearr_188064_188124 = state_187986__$1;(statearr_188064_188124[2] = inst_187933);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187986__$1);
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
var state_machine__12118__auto____0 = (function (){var statearr_188068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_188068[0] = state_machine__12118__auto__);
(statearr_188068[1] = 1);
return statearr_188068;
});
var state_machine__12118__auto____1 = (function (state_187986){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_187986);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e188069){if((e188069 instanceof Object))
{var ex__12121__auto__ = e188069;var statearr_188070_188125 = state_187986;(statearr_188070_188125[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_187986);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e188069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__188126 = state_187986;
state_187986 = G__188126;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_187986){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_187986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_188071 = f__12188__auto__.call(null);(statearr_188071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___188072);
return statearr_188071;
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
cljs.core.async.Mix = (function (){var obj188128 = {};return obj188128;
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
;var m = (function (){if(typeof cljs.core.async.t188238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t188238 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta188239){
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
this.meta188239 = meta188239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t188238.cljs$lang$type = true;
cljs.core.async.t188238.cljs$lang$ctorStr = "cljs.core.async/t188238";
cljs.core.async.t188238.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t188238");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t188238.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t188238.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t188238.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t188238.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t188238.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t188238.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t188238.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t188238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t188238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_188240){var self__ = this;
var _188240__$1 = this;return self__.meta188239;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t188238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_188240,meta188239__$1){var self__ = this;
var _188240__$1 = this;return (new cljs.core.async.t188238(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta188239__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t188238 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t188238(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta188239){return (new cljs.core.async.t188238(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta188239));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t188238(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12187__auto___188347 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_188305){var state_val_188306 = (state_188305[1]);if((state_val_188306 === 1))
{var inst_188244 = (state_188305[7]);var inst_188244__$1 = calc_state.call(null);var inst_188245 = cljs.core.seq_QMARK_.call(null,inst_188244__$1);var state_188305__$1 = (function (){var statearr_188307 = state_188305;(statearr_188307[7] = inst_188244__$1);
return statearr_188307;
})();if(inst_188245)
{var statearr_188308_188348 = state_188305__$1;(statearr_188308_188348[1] = 2);
} else
{var statearr_188309_188349 = state_188305__$1;(statearr_188309_188349[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 2))
{var inst_188244 = (state_188305[7]);var inst_188247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_188244);var state_188305__$1 = state_188305;var statearr_188310_188350 = state_188305__$1;(statearr_188310_188350[2] = inst_188247);
(statearr_188310_188350[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 3))
{var inst_188244 = (state_188305[7]);var state_188305__$1 = state_188305;var statearr_188311_188351 = state_188305__$1;(statearr_188311_188351[2] = inst_188244);
(statearr_188311_188351[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 4))
{var inst_188244 = (state_188305[7]);var inst_188250 = (state_188305[2]);var inst_188251 = cljs.core.get.call(null,inst_188250,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_188252 = cljs.core.get.call(null,inst_188250,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_188253 = cljs.core.get.call(null,inst_188250,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_188254 = inst_188244;var state_188305__$1 = (function (){var statearr_188312 = state_188305;(statearr_188312[8] = inst_188254);
(statearr_188312[9] = inst_188253);
(statearr_188312[10] = inst_188251);
(statearr_188312[11] = inst_188252);
return statearr_188312;
})();var statearr_188313_188352 = state_188305__$1;(statearr_188313_188352[2] = null);
(statearr_188313_188352[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 5))
{var inst_188254 = (state_188305[8]);var inst_188257 = cljs.core.seq_QMARK_.call(null,inst_188254);var state_188305__$1 = state_188305;if(inst_188257)
{var statearr_188314_188353 = state_188305__$1;(statearr_188314_188353[1] = 7);
} else
{var statearr_188315_188354 = state_188305__$1;(statearr_188315_188354[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 6))
{var inst_188303 = (state_188305[2]);var state_188305__$1 = state_188305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_188305__$1,inst_188303);
} else
{if((state_val_188306 === 7))
{var inst_188254 = (state_188305[8]);var inst_188259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_188254);var state_188305__$1 = state_188305;var statearr_188316_188355 = state_188305__$1;(statearr_188316_188355[2] = inst_188259);
(statearr_188316_188355[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 8))
{var inst_188254 = (state_188305[8]);var state_188305__$1 = state_188305;var statearr_188317_188356 = state_188305__$1;(statearr_188317_188356[2] = inst_188254);
(statearr_188317_188356[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 9))
{var inst_188262 = (state_188305[12]);var inst_188262__$1 = (state_188305[2]);var inst_188263 = cljs.core.get.call(null,inst_188262__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_188264 = cljs.core.get.call(null,inst_188262__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_188265 = cljs.core.get.call(null,inst_188262__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_188305__$1 = (function (){var statearr_188318 = state_188305;(statearr_188318[12] = inst_188262__$1);
(statearr_188318[13] = inst_188265);
(statearr_188318[14] = inst_188264);
return statearr_188318;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_188305__$1,10,inst_188263);
} else
{if((state_val_188306 === 10))
{var inst_188269 = (state_188305[15]);var inst_188270 = (state_188305[16]);var inst_188268 = (state_188305[2]);var inst_188269__$1 = cljs.core.nth.call(null,inst_188268,0,null);var inst_188270__$1 = cljs.core.nth.call(null,inst_188268,1,null);var inst_188271 = (inst_188269__$1 == null);var inst_188272 = cljs.core._EQ_.call(null,inst_188270__$1,change);var inst_188273 = (inst_188271) || (inst_188272);var state_188305__$1 = (function (){var statearr_188319 = state_188305;(statearr_188319[15] = inst_188269__$1);
(statearr_188319[16] = inst_188270__$1);
return statearr_188319;
})();if(cljs.core.truth_(inst_188273))
{var statearr_188320_188357 = state_188305__$1;(statearr_188320_188357[1] = 11);
} else
{var statearr_188321_188358 = state_188305__$1;(statearr_188321_188358[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 11))
{var inst_188269 = (state_188305[15]);var inst_188275 = (inst_188269 == null);var state_188305__$1 = state_188305;if(cljs.core.truth_(inst_188275))
{var statearr_188322_188359 = state_188305__$1;(statearr_188322_188359[1] = 14);
} else
{var statearr_188323_188360 = state_188305__$1;(statearr_188323_188360[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 12))
{var inst_188265 = (state_188305[13]);var inst_188270 = (state_188305[16]);var inst_188284 = (state_188305[17]);var inst_188284__$1 = inst_188265.call(null,inst_188270);var state_188305__$1 = (function (){var statearr_188324 = state_188305;(statearr_188324[17] = inst_188284__$1);
return statearr_188324;
})();if(cljs.core.truth_(inst_188284__$1))
{var statearr_188325_188361 = state_188305__$1;(statearr_188325_188361[1] = 17);
} else
{var statearr_188326_188362 = state_188305__$1;(statearr_188326_188362[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 13))
{var inst_188301 = (state_188305[2]);var state_188305__$1 = state_188305;var statearr_188327_188363 = state_188305__$1;(statearr_188327_188363[2] = inst_188301);
(statearr_188327_188363[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 14))
{var inst_188270 = (state_188305[16]);var inst_188277 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_188270);var state_188305__$1 = state_188305;var statearr_188328_188364 = state_188305__$1;(statearr_188328_188364[2] = inst_188277);
(statearr_188328_188364[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 15))
{var state_188305__$1 = state_188305;var statearr_188329_188365 = state_188305__$1;(statearr_188329_188365[2] = null);
(statearr_188329_188365[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 16))
{var inst_188280 = (state_188305[2]);var inst_188281 = calc_state.call(null);var inst_188254 = inst_188281;var state_188305__$1 = (function (){var statearr_188330 = state_188305;(statearr_188330[8] = inst_188254);
(statearr_188330[18] = inst_188280);
return statearr_188330;
})();var statearr_188331_188366 = state_188305__$1;(statearr_188331_188366[2] = null);
(statearr_188331_188366[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 17))
{var inst_188284 = (state_188305[17]);var state_188305__$1 = state_188305;var statearr_188332_188367 = state_188305__$1;(statearr_188332_188367[2] = inst_188284);
(statearr_188332_188367[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 18))
{var inst_188265 = (state_188305[13]);var inst_188270 = (state_188305[16]);var inst_188264 = (state_188305[14]);var inst_188287 = cljs.core.empty_QMARK_.call(null,inst_188265);var inst_188288 = inst_188264.call(null,inst_188270);var inst_188289 = cljs.core.not.call(null,inst_188288);var inst_188290 = (inst_188287) && (inst_188289);var state_188305__$1 = state_188305;var statearr_188333_188368 = state_188305__$1;(statearr_188333_188368[2] = inst_188290);
(statearr_188333_188368[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 19))
{var inst_188292 = (state_188305[2]);var state_188305__$1 = state_188305;if(cljs.core.truth_(inst_188292))
{var statearr_188334_188369 = state_188305__$1;(statearr_188334_188369[1] = 20);
} else
{var statearr_188335_188370 = state_188305__$1;(statearr_188335_188370[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 20))
{var inst_188269 = (state_188305[15]);var state_188305__$1 = state_188305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_188305__$1,23,out,inst_188269);
} else
{if((state_val_188306 === 21))
{var state_188305__$1 = state_188305;var statearr_188336_188371 = state_188305__$1;(statearr_188336_188371[2] = null);
(statearr_188336_188371[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 22))
{var inst_188262 = (state_188305[12]);var inst_188298 = (state_188305[2]);var inst_188254 = inst_188262;var state_188305__$1 = (function (){var statearr_188337 = state_188305;(statearr_188337[19] = inst_188298);
(statearr_188337[8] = inst_188254);
return statearr_188337;
})();var statearr_188338_188372 = state_188305__$1;(statearr_188338_188372[2] = null);
(statearr_188338_188372[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188306 === 23))
{var inst_188295 = (state_188305[2]);var state_188305__$1 = state_188305;var statearr_188339_188373 = state_188305__$1;(statearr_188339_188373[2] = inst_188295);
(statearr_188339_188373[1] = 22);
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
var state_machine__12118__auto____0 = (function (){var statearr_188343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_188343[0] = state_machine__12118__auto__);
(statearr_188343[1] = 1);
return statearr_188343;
});
var state_machine__12118__auto____1 = (function (state_188305){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_188305);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e188344){if((e188344 instanceof Object))
{var ex__12121__auto__ = e188344;var statearr_188345_188374 = state_188305;(statearr_188345_188374[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188305);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e188344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__188375 = state_188305;
state_188305 = G__188375;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_188305){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_188305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_188346 = f__12188__auto__.call(null);(statearr_188346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___188347);
return statearr_188346;
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
cljs.core.async.Pub = (function (){var obj188377 = {};return obj188377;
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
return (function (p1__188378_SHARP_){if(cljs.core.truth_(p1__188378_SHARP_.call(null,topic)))
{return p1__188378_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__188378_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8223__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t188503 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t188503 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta188504){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta188504 = meta188504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t188503.cljs$lang$type = true;
cljs.core.async.t188503.cljs$lang$ctorStr = "cljs.core.async/t188503";
cljs.core.async.t188503.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t188503");
});})(mults,ensure_mult))
;
cljs.core.async.t188503.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t188503.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t188503.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t188503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t188503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t188503.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t188503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t188503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_188505){var self__ = this;
var _188505__$1 = this;return self__.meta188504;
});})(mults,ensure_mult))
;
cljs.core.async.t188503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_188505,meta188504__$1){var self__ = this;
var _188505__$1 = this;return (new cljs.core.async.t188503(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta188504__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t188503 = ((function (mults,ensure_mult){
return (function __GT_t188503(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta188504){return (new cljs.core.async.t188503(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta188504));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t188503(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12187__auto___188627 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_188579){var state_val_188580 = (state_188579[1]);if((state_val_188580 === 1))
{var state_188579__$1 = state_188579;var statearr_188581_188628 = state_188579__$1;(statearr_188581_188628[2] = null);
(statearr_188581_188628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 2))
{var state_188579__$1 = state_188579;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_188579__$1,4,ch);
} else
{if((state_val_188580 === 3))
{var inst_188577 = (state_188579[2]);var state_188579__$1 = state_188579;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_188579__$1,inst_188577);
} else
{if((state_val_188580 === 4))
{var inst_188508 = (state_188579[7]);var inst_188508__$1 = (state_188579[2]);var inst_188509 = (inst_188508__$1 == null);var state_188579__$1 = (function (){var statearr_188582 = state_188579;(statearr_188582[7] = inst_188508__$1);
return statearr_188582;
})();if(cljs.core.truth_(inst_188509))
{var statearr_188583_188629 = state_188579__$1;(statearr_188583_188629[1] = 5);
} else
{var statearr_188584_188630 = state_188579__$1;(statearr_188584_188630[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 5))
{var inst_188515 = cljs.core.deref.call(null,mults);var inst_188516 = cljs.core.vals.call(null,inst_188515);var inst_188517 = cljs.core.seq.call(null,inst_188516);var inst_188518 = inst_188517;var inst_188519 = null;var inst_188520 = 0;var inst_188521 = 0;var state_188579__$1 = (function (){var statearr_188585 = state_188579;(statearr_188585[8] = inst_188518);
(statearr_188585[9] = inst_188519);
(statearr_188585[10] = inst_188521);
(statearr_188585[11] = inst_188520);
return statearr_188585;
})();var statearr_188586_188631 = state_188579__$1;(statearr_188586_188631[2] = null);
(statearr_188586_188631[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 6))
{var inst_188558 = (state_188579[12]);var inst_188556 = (state_188579[13]);var inst_188508 = (state_188579[7]);var inst_188556__$1 = topic_fn.call(null,inst_188508);var inst_188557 = cljs.core.deref.call(null,mults);var inst_188558__$1 = cljs.core.get.call(null,inst_188557,inst_188556__$1);var state_188579__$1 = (function (){var statearr_188587 = state_188579;(statearr_188587[12] = inst_188558__$1);
(statearr_188587[13] = inst_188556__$1);
return statearr_188587;
})();if(cljs.core.truth_(inst_188558__$1))
{var statearr_188588_188632 = state_188579__$1;(statearr_188588_188632[1] = 19);
} else
{var statearr_188589_188633 = state_188579__$1;(statearr_188589_188633[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 7))
{var inst_188575 = (state_188579[2]);var state_188579__$1 = state_188579;var statearr_188590_188634 = state_188579__$1;(statearr_188590_188634[2] = inst_188575);
(statearr_188590_188634[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 8))
{var inst_188521 = (state_188579[10]);var inst_188520 = (state_188579[11]);var inst_188523 = (inst_188521 < inst_188520);var inst_188524 = inst_188523;var state_188579__$1 = state_188579;if(cljs.core.truth_(inst_188524))
{var statearr_188594_188635 = state_188579__$1;(statearr_188594_188635[1] = 10);
} else
{var statearr_188595_188636 = state_188579__$1;(statearr_188595_188636[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 9))
{var inst_188554 = (state_188579[2]);var state_188579__$1 = state_188579;var statearr_188596_188637 = state_188579__$1;(statearr_188596_188637[2] = inst_188554);
(statearr_188596_188637[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 10))
{var inst_188518 = (state_188579[8]);var inst_188519 = (state_188579[9]);var inst_188521 = (state_188579[10]);var inst_188520 = (state_188579[11]);var inst_188526 = cljs.core._nth.call(null,inst_188519,inst_188521);var inst_188527 = cljs.core.async.muxch_STAR_.call(null,inst_188526);var inst_188528 = cljs.core.async.close_BANG_.call(null,inst_188527);var inst_188529 = (inst_188521 + 1);var tmp188591 = inst_188518;var tmp188592 = inst_188519;var tmp188593 = inst_188520;var inst_188518__$1 = tmp188591;var inst_188519__$1 = tmp188592;var inst_188520__$1 = tmp188593;var inst_188521__$1 = inst_188529;var state_188579__$1 = (function (){var statearr_188597 = state_188579;(statearr_188597[8] = inst_188518__$1);
(statearr_188597[9] = inst_188519__$1);
(statearr_188597[14] = inst_188528);
(statearr_188597[10] = inst_188521__$1);
(statearr_188597[11] = inst_188520__$1);
return statearr_188597;
})();var statearr_188598_188638 = state_188579__$1;(statearr_188598_188638[2] = null);
(statearr_188598_188638[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 11))
{var inst_188518 = (state_188579[8]);var inst_188532 = (state_188579[15]);var inst_188532__$1 = cljs.core.seq.call(null,inst_188518);var state_188579__$1 = (function (){var statearr_188599 = state_188579;(statearr_188599[15] = inst_188532__$1);
return statearr_188599;
})();if(inst_188532__$1)
{var statearr_188600_188639 = state_188579__$1;(statearr_188600_188639[1] = 13);
} else
{var statearr_188601_188640 = state_188579__$1;(statearr_188601_188640[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 12))
{var inst_188552 = (state_188579[2]);var state_188579__$1 = state_188579;var statearr_188602_188641 = state_188579__$1;(statearr_188602_188641[2] = inst_188552);
(statearr_188602_188641[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 13))
{var inst_188532 = (state_188579[15]);var inst_188534 = cljs.core.chunked_seq_QMARK_.call(null,inst_188532);var state_188579__$1 = state_188579;if(inst_188534)
{var statearr_188603_188642 = state_188579__$1;(statearr_188603_188642[1] = 16);
} else
{var statearr_188604_188643 = state_188579__$1;(statearr_188604_188643[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 14))
{var state_188579__$1 = state_188579;var statearr_188605_188644 = state_188579__$1;(statearr_188605_188644[2] = null);
(statearr_188605_188644[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 15))
{var inst_188550 = (state_188579[2]);var state_188579__$1 = state_188579;var statearr_188606_188645 = state_188579__$1;(statearr_188606_188645[2] = inst_188550);
(statearr_188606_188645[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 16))
{var inst_188532 = (state_188579[15]);var inst_188536 = cljs.core.chunk_first.call(null,inst_188532);var inst_188537 = cljs.core.chunk_rest.call(null,inst_188532);var inst_188538 = cljs.core.count.call(null,inst_188536);var inst_188518 = inst_188537;var inst_188519 = inst_188536;var inst_188520 = inst_188538;var inst_188521 = 0;var state_188579__$1 = (function (){var statearr_188607 = state_188579;(statearr_188607[8] = inst_188518);
(statearr_188607[9] = inst_188519);
(statearr_188607[10] = inst_188521);
(statearr_188607[11] = inst_188520);
return statearr_188607;
})();var statearr_188608_188646 = state_188579__$1;(statearr_188608_188646[2] = null);
(statearr_188608_188646[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 17))
{var inst_188532 = (state_188579[15]);var inst_188541 = cljs.core.first.call(null,inst_188532);var inst_188542 = cljs.core.async.muxch_STAR_.call(null,inst_188541);var inst_188543 = cljs.core.async.close_BANG_.call(null,inst_188542);var inst_188544 = cljs.core.next.call(null,inst_188532);var inst_188518 = inst_188544;var inst_188519 = null;var inst_188520 = 0;var inst_188521 = 0;var state_188579__$1 = (function (){var statearr_188609 = state_188579;(statearr_188609[16] = inst_188543);
(statearr_188609[8] = inst_188518);
(statearr_188609[9] = inst_188519);
(statearr_188609[10] = inst_188521);
(statearr_188609[11] = inst_188520);
return statearr_188609;
})();var statearr_188610_188647 = state_188579__$1;(statearr_188610_188647[2] = null);
(statearr_188610_188647[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 18))
{var inst_188547 = (state_188579[2]);var state_188579__$1 = state_188579;var statearr_188611_188648 = state_188579__$1;(statearr_188611_188648[2] = inst_188547);
(statearr_188611_188648[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 19))
{var state_188579__$1 = state_188579;var statearr_188612_188649 = state_188579__$1;(statearr_188612_188649[2] = null);
(statearr_188612_188649[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 20))
{var state_188579__$1 = state_188579;var statearr_188613_188650 = state_188579__$1;(statearr_188613_188650[2] = null);
(statearr_188613_188650[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 21))
{var inst_188572 = (state_188579[2]);var state_188579__$1 = (function (){var statearr_188614 = state_188579;(statearr_188614[17] = inst_188572);
return statearr_188614;
})();var statearr_188615_188651 = state_188579__$1;(statearr_188615_188651[2] = null);
(statearr_188615_188651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 22))
{var inst_188569 = (state_188579[2]);var state_188579__$1 = state_188579;var statearr_188616_188652 = state_188579__$1;(statearr_188616_188652[2] = inst_188569);
(statearr_188616_188652[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 23))
{var inst_188556 = (state_188579[13]);var inst_188560 = (state_188579[2]);var inst_188561 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_188556);var state_188579__$1 = (function (){var statearr_188617 = state_188579;(statearr_188617[18] = inst_188560);
return statearr_188617;
})();var statearr_188618_188653 = state_188579__$1;(statearr_188618_188653[2] = inst_188561);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188579__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188580 === 24))
{var inst_188558 = (state_188579[12]);var inst_188508 = (state_188579[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_188579,23,Object,null,22);var inst_188565 = cljs.core.async.muxch_STAR_.call(null,inst_188558);var state_188579__$1 = state_188579;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_188579__$1,25,inst_188565,inst_188508);
} else
{if((state_val_188580 === 25))
{var inst_188567 = (state_188579[2]);var state_188579__$1 = state_188579;var statearr_188619_188654 = state_188579__$1;(statearr_188619_188654[2] = inst_188567);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188579__$1);
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
var state_machine__12118__auto____0 = (function (){var statearr_188623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_188623[0] = state_machine__12118__auto__);
(statearr_188623[1] = 1);
return statearr_188623;
});
var state_machine__12118__auto____1 = (function (state_188579){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_188579);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e188624){if((e188624 instanceof Object))
{var ex__12121__auto__ = e188624;var statearr_188625_188655 = state_188579;(statearr_188625_188655[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188579);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e188624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__188656 = state_188579;
state_188579 = G__188656;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_188579){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_188579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_188626 = f__12188__auto__.call(null);(statearr_188626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___188627);
return statearr_188626;
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
,cljs.core.range.call(null,cnt));var c__12187__auto___188793 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_188763){var state_val_188764 = (state_188763[1]);if((state_val_188764 === 1))
{var state_188763__$1 = state_188763;var statearr_188765_188794 = state_188763__$1;(statearr_188765_188794[2] = null);
(statearr_188765_188794[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 2))
{var inst_188726 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_188727 = 0;var state_188763__$1 = (function (){var statearr_188766 = state_188763;(statearr_188766[7] = inst_188726);
(statearr_188766[8] = inst_188727);
return statearr_188766;
})();var statearr_188767_188795 = state_188763__$1;(statearr_188767_188795[2] = null);
(statearr_188767_188795[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 3))
{var inst_188761 = (state_188763[2]);var state_188763__$1 = state_188763;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_188763__$1,inst_188761);
} else
{if((state_val_188764 === 4))
{var inst_188727 = (state_188763[8]);var inst_188729 = (inst_188727 < cnt);var state_188763__$1 = state_188763;if(cljs.core.truth_(inst_188729))
{var statearr_188768_188796 = state_188763__$1;(statearr_188768_188796[1] = 6);
} else
{var statearr_188769_188797 = state_188763__$1;(statearr_188769_188797[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 5))
{var inst_188747 = (state_188763[2]);var state_188763__$1 = (function (){var statearr_188770 = state_188763;(statearr_188770[9] = inst_188747);
return statearr_188770;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_188763__$1,12,dchan);
} else
{if((state_val_188764 === 6))
{var state_188763__$1 = state_188763;var statearr_188771_188798 = state_188763__$1;(statearr_188771_188798[2] = null);
(statearr_188771_188798[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 7))
{var state_188763__$1 = state_188763;var statearr_188772_188799 = state_188763__$1;(statearr_188772_188799[2] = null);
(statearr_188772_188799[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 8))
{var inst_188745 = (state_188763[2]);var state_188763__$1 = state_188763;var statearr_188773_188800 = state_188763__$1;(statearr_188773_188800[2] = inst_188745);
(statearr_188773_188800[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 9))
{var inst_188727 = (state_188763[8]);var inst_188740 = (state_188763[2]);var inst_188741 = (inst_188727 + 1);var inst_188727__$1 = inst_188741;var state_188763__$1 = (function (){var statearr_188774 = state_188763;(statearr_188774[10] = inst_188740);
(statearr_188774[8] = inst_188727__$1);
return statearr_188774;
})();var statearr_188775_188801 = state_188763__$1;(statearr_188775_188801[2] = null);
(statearr_188775_188801[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 10))
{var inst_188731 = (state_188763[2]);var inst_188732 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_188763__$1 = (function (){var statearr_188776 = state_188763;(statearr_188776[11] = inst_188731);
return statearr_188776;
})();var statearr_188777_188802 = state_188763__$1;(statearr_188777_188802[2] = inst_188732);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188763__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 11))
{var inst_188727 = (state_188763[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_188763,10,Object,null,9);var inst_188736 = chs__$1.call(null,inst_188727);var inst_188737 = done.call(null,inst_188727);var inst_188738 = cljs.core.async.take_BANG_.call(null,inst_188736,inst_188737);var state_188763__$1 = state_188763;var statearr_188778_188803 = state_188763__$1;(statearr_188778_188803[2] = inst_188738);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188763__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 12))
{var inst_188749 = (state_188763[12]);var inst_188749__$1 = (state_188763[2]);var inst_188750 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_188749__$1);var state_188763__$1 = (function (){var statearr_188779 = state_188763;(statearr_188779[12] = inst_188749__$1);
return statearr_188779;
})();if(cljs.core.truth_(inst_188750))
{var statearr_188780_188804 = state_188763__$1;(statearr_188780_188804[1] = 13);
} else
{var statearr_188781_188805 = state_188763__$1;(statearr_188781_188805[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 13))
{var inst_188752 = cljs.core.async.close_BANG_.call(null,out);var state_188763__$1 = state_188763;var statearr_188782_188806 = state_188763__$1;(statearr_188782_188806[2] = inst_188752);
(statearr_188782_188806[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 14))
{var inst_188749 = (state_188763[12]);var inst_188754 = cljs.core.apply.call(null,f,inst_188749);var state_188763__$1 = state_188763;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_188763__$1,16,out,inst_188754);
} else
{if((state_val_188764 === 15))
{var inst_188759 = (state_188763[2]);var state_188763__$1 = state_188763;var statearr_188783_188807 = state_188763__$1;(statearr_188783_188807[2] = inst_188759);
(statearr_188783_188807[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188764 === 16))
{var inst_188756 = (state_188763[2]);var state_188763__$1 = (function (){var statearr_188784 = state_188763;(statearr_188784[13] = inst_188756);
return statearr_188784;
})();var statearr_188785_188808 = state_188763__$1;(statearr_188785_188808[2] = null);
(statearr_188785_188808[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_188789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_188789[0] = state_machine__12118__auto__);
(statearr_188789[1] = 1);
return statearr_188789;
});
var state_machine__12118__auto____1 = (function (state_188763){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_188763);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e188790){if((e188790 instanceof Object))
{var ex__12121__auto__ = e188790;var statearr_188791_188809 = state_188763;(statearr_188791_188809[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188763);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e188790;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__188810 = state_188763;
state_188763 = G__188810;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_188763){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_188763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_188792 = f__12188__auto__.call(null);(statearr_188792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___188793);
return statearr_188792;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___188918 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_188894){var state_val_188895 = (state_188894[1]);if((state_val_188895 === 1))
{var inst_188865 = cljs.core.vec.call(null,chs);var inst_188866 = inst_188865;var state_188894__$1 = (function (){var statearr_188896 = state_188894;(statearr_188896[7] = inst_188866);
return statearr_188896;
})();var statearr_188897_188919 = state_188894__$1;(statearr_188897_188919[2] = null);
(statearr_188897_188919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188895 === 2))
{var inst_188866 = (state_188894[7]);var inst_188868 = cljs.core.count.call(null,inst_188866);var inst_188869 = (inst_188868 > 0);var state_188894__$1 = state_188894;if(cljs.core.truth_(inst_188869))
{var statearr_188898_188920 = state_188894__$1;(statearr_188898_188920[1] = 4);
} else
{var statearr_188899_188921 = state_188894__$1;(statearr_188899_188921[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188895 === 3))
{var inst_188892 = (state_188894[2]);var state_188894__$1 = state_188894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_188894__$1,inst_188892);
} else
{if((state_val_188895 === 4))
{var inst_188866 = (state_188894[7]);var state_188894__$1 = state_188894;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_188894__$1,7,inst_188866);
} else
{if((state_val_188895 === 5))
{var inst_188888 = cljs.core.async.close_BANG_.call(null,out);var state_188894__$1 = state_188894;var statearr_188900_188922 = state_188894__$1;(statearr_188900_188922[2] = inst_188888);
(statearr_188900_188922[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188895 === 6))
{var inst_188890 = (state_188894[2]);var state_188894__$1 = state_188894;var statearr_188901_188923 = state_188894__$1;(statearr_188901_188923[2] = inst_188890);
(statearr_188901_188923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188895 === 7))
{var inst_188873 = (state_188894[8]);var inst_188874 = (state_188894[9]);var inst_188873__$1 = (state_188894[2]);var inst_188874__$1 = cljs.core.nth.call(null,inst_188873__$1,0,null);var inst_188875 = cljs.core.nth.call(null,inst_188873__$1,1,null);var inst_188876 = (inst_188874__$1 == null);var state_188894__$1 = (function (){var statearr_188902 = state_188894;(statearr_188902[8] = inst_188873__$1);
(statearr_188902[9] = inst_188874__$1);
(statearr_188902[10] = inst_188875);
return statearr_188902;
})();if(cljs.core.truth_(inst_188876))
{var statearr_188903_188924 = state_188894__$1;(statearr_188903_188924[1] = 8);
} else
{var statearr_188904_188925 = state_188894__$1;(statearr_188904_188925[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188895 === 8))
{var inst_188866 = (state_188894[7]);var inst_188873 = (state_188894[8]);var inst_188874 = (state_188894[9]);var inst_188875 = (state_188894[10]);var inst_188878 = (function (){var c = inst_188875;var v = inst_188874;var vec__188871 = inst_188873;var cs = inst_188866;return ((function (c,v,vec__188871,cs,inst_188866,inst_188873,inst_188874,inst_188875,state_val_188895){
return (function (p1__188811_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__188811_SHARP_);
});
;})(c,v,vec__188871,cs,inst_188866,inst_188873,inst_188874,inst_188875,state_val_188895))
})();var inst_188879 = cljs.core.filterv.call(null,inst_188878,inst_188866);var inst_188866__$1 = inst_188879;var state_188894__$1 = (function (){var statearr_188905 = state_188894;(statearr_188905[7] = inst_188866__$1);
return statearr_188905;
})();var statearr_188906_188926 = state_188894__$1;(statearr_188906_188926[2] = null);
(statearr_188906_188926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188895 === 9))
{var inst_188874 = (state_188894[9]);var state_188894__$1 = state_188894;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_188894__$1,11,out,inst_188874);
} else
{if((state_val_188895 === 10))
{var inst_188886 = (state_188894[2]);var state_188894__$1 = state_188894;var statearr_188908_188927 = state_188894__$1;(statearr_188908_188927[2] = inst_188886);
(statearr_188908_188927[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_188895 === 11))
{var inst_188866 = (state_188894[7]);var inst_188883 = (state_188894[2]);var tmp188907 = inst_188866;var inst_188866__$1 = tmp188907;var state_188894__$1 = (function (){var statearr_188909 = state_188894;(statearr_188909[7] = inst_188866__$1);
(statearr_188909[11] = inst_188883);
return statearr_188909;
})();var statearr_188910_188928 = state_188894__$1;(statearr_188910_188928[2] = null);
(statearr_188910_188928[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_188914 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_188914[0] = state_machine__12118__auto__);
(statearr_188914[1] = 1);
return statearr_188914;
});
var state_machine__12118__auto____1 = (function (state_188894){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_188894);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e188915){if((e188915 instanceof Object))
{var ex__12121__auto__ = e188915;var statearr_188916_188929 = state_188894;(statearr_188916_188929[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188894);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e188915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__188930 = state_188894;
state_188894 = G__188930;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_188894){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_188894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_188917 = f__12188__auto__.call(null);(statearr_188917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___188918);
return statearr_188917;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___189023 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_189000){var state_val_189001 = (state_189000[1]);if((state_val_189001 === 1))
{var inst_188977 = 0;var state_189000__$1 = (function (){var statearr_189002 = state_189000;(statearr_189002[7] = inst_188977);
return statearr_189002;
})();var statearr_189003_189024 = state_189000__$1;(statearr_189003_189024[2] = null);
(statearr_189003_189024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189001 === 2))
{var inst_188977 = (state_189000[7]);var inst_188979 = (inst_188977 < n);var state_189000__$1 = state_189000;if(cljs.core.truth_(inst_188979))
{var statearr_189004_189025 = state_189000__$1;(statearr_189004_189025[1] = 4);
} else
{var statearr_189005_189026 = state_189000__$1;(statearr_189005_189026[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189001 === 3))
{var inst_188997 = (state_189000[2]);var inst_188998 = cljs.core.async.close_BANG_.call(null,out);var state_189000__$1 = (function (){var statearr_189006 = state_189000;(statearr_189006[8] = inst_188997);
return statearr_189006;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_189000__$1,inst_188998);
} else
{if((state_val_189001 === 4))
{var state_189000__$1 = state_189000;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189000__$1,7,ch);
} else
{if((state_val_189001 === 5))
{var state_189000__$1 = state_189000;var statearr_189007_189027 = state_189000__$1;(statearr_189007_189027[2] = null);
(statearr_189007_189027[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189001 === 6))
{var inst_188995 = (state_189000[2]);var state_189000__$1 = state_189000;var statearr_189008_189028 = state_189000__$1;(statearr_189008_189028[2] = inst_188995);
(statearr_189008_189028[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189001 === 7))
{var inst_188982 = (state_189000[9]);var inst_188982__$1 = (state_189000[2]);var inst_188983 = (inst_188982__$1 == null);var inst_188984 = cljs.core.not.call(null,inst_188983);var state_189000__$1 = (function (){var statearr_189009 = state_189000;(statearr_189009[9] = inst_188982__$1);
return statearr_189009;
})();if(inst_188984)
{var statearr_189010_189029 = state_189000__$1;(statearr_189010_189029[1] = 8);
} else
{var statearr_189011_189030 = state_189000__$1;(statearr_189011_189030[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189001 === 8))
{var inst_188982 = (state_189000[9]);var state_189000__$1 = state_189000;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_189000__$1,11,out,inst_188982);
} else
{if((state_val_189001 === 9))
{var state_189000__$1 = state_189000;var statearr_189012_189031 = state_189000__$1;(statearr_189012_189031[2] = null);
(statearr_189012_189031[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189001 === 10))
{var inst_188992 = (state_189000[2]);var state_189000__$1 = state_189000;var statearr_189013_189032 = state_189000__$1;(statearr_189013_189032[2] = inst_188992);
(statearr_189013_189032[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189001 === 11))
{var inst_188977 = (state_189000[7]);var inst_188987 = (state_189000[2]);var inst_188988 = (inst_188977 + 1);var inst_188977__$1 = inst_188988;var state_189000__$1 = (function (){var statearr_189014 = state_189000;(statearr_189014[7] = inst_188977__$1);
(statearr_189014[10] = inst_188987);
return statearr_189014;
})();var statearr_189015_189033 = state_189000__$1;(statearr_189015_189033[2] = null);
(statearr_189015_189033[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_189019 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_189019[0] = state_machine__12118__auto__);
(statearr_189019[1] = 1);
return statearr_189019;
});
var state_machine__12118__auto____1 = (function (state_189000){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_189000);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e189020){if((e189020 instanceof Object))
{var ex__12121__auto__ = e189020;var statearr_189021_189034 = state_189000;(statearr_189021_189034[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_189000);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e189020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__189035 = state_189000;
state_189000 = G__189035;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_189000){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_189000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_189022 = f__12188__auto__.call(null);(statearr_189022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___189023);
return statearr_189022;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___189132 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_189107){var state_val_189108 = (state_189107[1]);if((state_val_189108 === 1))
{var inst_189084 = null;var state_189107__$1 = (function (){var statearr_189109 = state_189107;(statearr_189109[7] = inst_189084);
return statearr_189109;
})();var statearr_189110_189133 = state_189107__$1;(statearr_189110_189133[2] = null);
(statearr_189110_189133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189108 === 2))
{var state_189107__$1 = state_189107;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189107__$1,4,ch);
} else
{if((state_val_189108 === 3))
{var inst_189104 = (state_189107[2]);var inst_189105 = cljs.core.async.close_BANG_.call(null,out);var state_189107__$1 = (function (){var statearr_189111 = state_189107;(statearr_189111[8] = inst_189104);
return statearr_189111;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_189107__$1,inst_189105);
} else
{if((state_val_189108 === 4))
{var inst_189087 = (state_189107[9]);var inst_189087__$1 = (state_189107[2]);var inst_189088 = (inst_189087__$1 == null);var inst_189089 = cljs.core.not.call(null,inst_189088);var state_189107__$1 = (function (){var statearr_189112 = state_189107;(statearr_189112[9] = inst_189087__$1);
return statearr_189112;
})();if(inst_189089)
{var statearr_189113_189134 = state_189107__$1;(statearr_189113_189134[1] = 5);
} else
{var statearr_189114_189135 = state_189107__$1;(statearr_189114_189135[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189108 === 5))
{var inst_189087 = (state_189107[9]);var inst_189084 = (state_189107[7]);var inst_189091 = cljs.core._EQ_.call(null,inst_189087,inst_189084);var state_189107__$1 = state_189107;if(inst_189091)
{var statearr_189115_189136 = state_189107__$1;(statearr_189115_189136[1] = 8);
} else
{var statearr_189116_189137 = state_189107__$1;(statearr_189116_189137[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189108 === 6))
{var state_189107__$1 = state_189107;var statearr_189118_189138 = state_189107__$1;(statearr_189118_189138[2] = null);
(statearr_189118_189138[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189108 === 7))
{var inst_189102 = (state_189107[2]);var state_189107__$1 = state_189107;var statearr_189119_189139 = state_189107__$1;(statearr_189119_189139[2] = inst_189102);
(statearr_189119_189139[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189108 === 8))
{var inst_189084 = (state_189107[7]);var tmp189117 = inst_189084;var inst_189084__$1 = tmp189117;var state_189107__$1 = (function (){var statearr_189120 = state_189107;(statearr_189120[7] = inst_189084__$1);
return statearr_189120;
})();var statearr_189121_189140 = state_189107__$1;(statearr_189121_189140[2] = null);
(statearr_189121_189140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189108 === 9))
{var inst_189087 = (state_189107[9]);var state_189107__$1 = state_189107;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_189107__$1,11,out,inst_189087);
} else
{if((state_val_189108 === 10))
{var inst_189099 = (state_189107[2]);var state_189107__$1 = state_189107;var statearr_189122_189141 = state_189107__$1;(statearr_189122_189141[2] = inst_189099);
(statearr_189122_189141[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189108 === 11))
{var inst_189087 = (state_189107[9]);var inst_189096 = (state_189107[2]);var inst_189084 = inst_189087;var state_189107__$1 = (function (){var statearr_189123 = state_189107;(statearr_189123[7] = inst_189084);
(statearr_189123[10] = inst_189096);
return statearr_189123;
})();var statearr_189124_189142 = state_189107__$1;(statearr_189124_189142[2] = null);
(statearr_189124_189142[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_189128 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_189128[0] = state_machine__12118__auto__);
(statearr_189128[1] = 1);
return statearr_189128;
});
var state_machine__12118__auto____1 = (function (state_189107){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_189107);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e189129){if((e189129 instanceof Object))
{var ex__12121__auto__ = e189129;var statearr_189130_189143 = state_189107;(statearr_189130_189143[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_189107);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e189129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__189144 = state_189107;
state_189107 = G__189144;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_189107){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_189107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_189131 = f__12188__auto__.call(null);(statearr_189131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___189132);
return statearr_189131;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___189279 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_189249){var state_val_189250 = (state_189249[1]);if((state_val_189250 === 1))
{var inst_189212 = (new Array(n));var inst_189213 = inst_189212;var inst_189214 = 0;var state_189249__$1 = (function (){var statearr_189251 = state_189249;(statearr_189251[7] = inst_189214);
(statearr_189251[8] = inst_189213);
return statearr_189251;
})();var statearr_189252_189280 = state_189249__$1;(statearr_189252_189280[2] = null);
(statearr_189252_189280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189250 === 2))
{var state_189249__$1 = state_189249;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189249__$1,4,ch);
} else
{if((state_val_189250 === 3))
{var inst_189247 = (state_189249[2]);var state_189249__$1 = state_189249;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_189249__$1,inst_189247);
} else
{if((state_val_189250 === 4))
{var inst_189217 = (state_189249[9]);var inst_189217__$1 = (state_189249[2]);var inst_189218 = (inst_189217__$1 == null);var inst_189219 = cljs.core.not.call(null,inst_189218);var state_189249__$1 = (function (){var statearr_189253 = state_189249;(statearr_189253[9] = inst_189217__$1);
return statearr_189253;
})();if(inst_189219)
{var statearr_189254_189281 = state_189249__$1;(statearr_189254_189281[1] = 5);
} else
{var statearr_189255_189282 = state_189249__$1;(statearr_189255_189282[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189250 === 5))
{var inst_189214 = (state_189249[7]);var inst_189222 = (state_189249[10]);var inst_189217 = (state_189249[9]);var inst_189213 = (state_189249[8]);var inst_189221 = (inst_189213[inst_189214] = inst_189217);var inst_189222__$1 = (inst_189214 + 1);var inst_189223 = (inst_189222__$1 < n);var state_189249__$1 = (function (){var statearr_189256 = state_189249;(statearr_189256[10] = inst_189222__$1);
(statearr_189256[11] = inst_189221);
return statearr_189256;
})();if(cljs.core.truth_(inst_189223))
{var statearr_189257_189283 = state_189249__$1;(statearr_189257_189283[1] = 8);
} else
{var statearr_189258_189284 = state_189249__$1;(statearr_189258_189284[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189250 === 6))
{var inst_189214 = (state_189249[7]);var inst_189235 = (inst_189214 > 0);var state_189249__$1 = state_189249;if(cljs.core.truth_(inst_189235))
{var statearr_189260_189285 = state_189249__$1;(statearr_189260_189285[1] = 12);
} else
{var statearr_189261_189286 = state_189249__$1;(statearr_189261_189286[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189250 === 7))
{var inst_189245 = (state_189249[2]);var state_189249__$1 = state_189249;var statearr_189262_189287 = state_189249__$1;(statearr_189262_189287[2] = inst_189245);
(statearr_189262_189287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189250 === 8))
{var inst_189222 = (state_189249[10]);var inst_189213 = (state_189249[8]);var tmp189259 = inst_189213;var inst_189213__$1 = tmp189259;var inst_189214 = inst_189222;var state_189249__$1 = (function (){var statearr_189263 = state_189249;(statearr_189263[7] = inst_189214);
(statearr_189263[8] = inst_189213__$1);
return statearr_189263;
})();var statearr_189264_189288 = state_189249__$1;(statearr_189264_189288[2] = null);
(statearr_189264_189288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189250 === 9))
{var inst_189213 = (state_189249[8]);var inst_189227 = cljs.core.vec.call(null,inst_189213);var state_189249__$1 = state_189249;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_189249__$1,11,out,inst_189227);
} else
{if((state_val_189250 === 10))
{var inst_189233 = (state_189249[2]);var state_189249__$1 = state_189249;var statearr_189265_189289 = state_189249__$1;(statearr_189265_189289[2] = inst_189233);
(statearr_189265_189289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189250 === 11))
{var inst_189229 = (state_189249[2]);var inst_189230 = (new Array(n));var inst_189213 = inst_189230;var inst_189214 = 0;var state_189249__$1 = (function (){var statearr_189266 = state_189249;(statearr_189266[12] = inst_189229);
(statearr_189266[7] = inst_189214);
(statearr_189266[8] = inst_189213);
return statearr_189266;
})();var statearr_189267_189290 = state_189249__$1;(statearr_189267_189290[2] = null);
(statearr_189267_189290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189250 === 12))
{var inst_189213 = (state_189249[8]);var inst_189237 = cljs.core.vec.call(null,inst_189213);var state_189249__$1 = state_189249;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_189249__$1,15,out,inst_189237);
} else
{if((state_val_189250 === 13))
{var state_189249__$1 = state_189249;var statearr_189268_189291 = state_189249__$1;(statearr_189268_189291[2] = null);
(statearr_189268_189291[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189250 === 14))
{var inst_189242 = (state_189249[2]);var inst_189243 = cljs.core.async.close_BANG_.call(null,out);var state_189249__$1 = (function (){var statearr_189269 = state_189249;(statearr_189269[13] = inst_189242);
return statearr_189269;
})();var statearr_189270_189292 = state_189249__$1;(statearr_189270_189292[2] = inst_189243);
(statearr_189270_189292[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189250 === 15))
{var inst_189239 = (state_189249[2]);var state_189249__$1 = state_189249;var statearr_189271_189293 = state_189249__$1;(statearr_189271_189293[2] = inst_189239);
(statearr_189271_189293[1] = 14);
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
var state_machine__12118__auto____0 = (function (){var statearr_189275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_189275[0] = state_machine__12118__auto__);
(statearr_189275[1] = 1);
return statearr_189275;
});
var state_machine__12118__auto____1 = (function (state_189249){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_189249);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e189276){if((e189276 instanceof Object))
{var ex__12121__auto__ = e189276;var statearr_189277_189294 = state_189249;(statearr_189277_189294[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_189249);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e189276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__189295 = state_189249;
state_189249 = G__189295;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_189249){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_189249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_189278 = f__12188__auto__.call(null);(statearr_189278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___189279);
return statearr_189278;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___189438 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_189408){var state_val_189409 = (state_189408[1]);if((state_val_189409 === 1))
{var inst_189367 = [];var inst_189368 = inst_189367;var inst_189369 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_189408__$1 = (function (){var statearr_189410 = state_189408;(statearr_189410[7] = inst_189368);
(statearr_189410[8] = inst_189369);
return statearr_189410;
})();var statearr_189411_189439 = state_189408__$1;(statearr_189411_189439[2] = null);
(statearr_189411_189439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189409 === 2))
{var state_189408__$1 = state_189408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189408__$1,4,ch);
} else
{if((state_val_189409 === 3))
{var inst_189406 = (state_189408[2]);var state_189408__$1 = state_189408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_189408__$1,inst_189406);
} else
{if((state_val_189409 === 4))
{var inst_189372 = (state_189408[9]);var inst_189372__$1 = (state_189408[2]);var inst_189373 = (inst_189372__$1 == null);var inst_189374 = cljs.core.not.call(null,inst_189373);var state_189408__$1 = (function (){var statearr_189412 = state_189408;(statearr_189412[9] = inst_189372__$1);
return statearr_189412;
})();if(inst_189374)
{var statearr_189413_189440 = state_189408__$1;(statearr_189413_189440[1] = 5);
} else
{var statearr_189414_189441 = state_189408__$1;(statearr_189414_189441[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189409 === 5))
{var inst_189372 = (state_189408[9]);var inst_189369 = (state_189408[8]);var inst_189376 = (state_189408[10]);var inst_189376__$1 = f.call(null,inst_189372);var inst_189377 = cljs.core._EQ_.call(null,inst_189376__$1,inst_189369);var inst_189378 = cljs.core.keyword_identical_QMARK_.call(null,inst_189369,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_189379 = (inst_189377) || (inst_189378);var state_189408__$1 = (function (){var statearr_189415 = state_189408;(statearr_189415[10] = inst_189376__$1);
return statearr_189415;
})();if(cljs.core.truth_(inst_189379))
{var statearr_189416_189442 = state_189408__$1;(statearr_189416_189442[1] = 8);
} else
{var statearr_189417_189443 = state_189408__$1;(statearr_189417_189443[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189409 === 6))
{var inst_189368 = (state_189408[7]);var inst_189393 = inst_189368.length;var inst_189394 = (inst_189393 > 0);var state_189408__$1 = state_189408;if(cljs.core.truth_(inst_189394))
{var statearr_189419_189444 = state_189408__$1;(statearr_189419_189444[1] = 12);
} else
{var statearr_189420_189445 = state_189408__$1;(statearr_189420_189445[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189409 === 7))
{var inst_189404 = (state_189408[2]);var state_189408__$1 = state_189408;var statearr_189421_189446 = state_189408__$1;(statearr_189421_189446[2] = inst_189404);
(statearr_189421_189446[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189409 === 8))
{var inst_189372 = (state_189408[9]);var inst_189368 = (state_189408[7]);var inst_189376 = (state_189408[10]);var inst_189381 = inst_189368.push(inst_189372);var tmp189418 = inst_189368;var inst_189368__$1 = tmp189418;var inst_189369 = inst_189376;var state_189408__$1 = (function (){var statearr_189422 = state_189408;(statearr_189422[7] = inst_189368__$1);
(statearr_189422[8] = inst_189369);
(statearr_189422[11] = inst_189381);
return statearr_189422;
})();var statearr_189423_189447 = state_189408__$1;(statearr_189423_189447[2] = null);
(statearr_189423_189447[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189409 === 9))
{var inst_189368 = (state_189408[7]);var inst_189384 = cljs.core.vec.call(null,inst_189368);var state_189408__$1 = state_189408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_189408__$1,11,out,inst_189384);
} else
{if((state_val_189409 === 10))
{var inst_189391 = (state_189408[2]);var state_189408__$1 = state_189408;var statearr_189424_189448 = state_189408__$1;(statearr_189424_189448[2] = inst_189391);
(statearr_189424_189448[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189409 === 11))
{var inst_189372 = (state_189408[9]);var inst_189376 = (state_189408[10]);var inst_189386 = (state_189408[2]);var inst_189387 = [];var inst_189388 = inst_189387.push(inst_189372);var inst_189368 = inst_189387;var inst_189369 = inst_189376;var state_189408__$1 = (function (){var statearr_189425 = state_189408;(statearr_189425[12] = inst_189388);
(statearr_189425[13] = inst_189386);
(statearr_189425[7] = inst_189368);
(statearr_189425[8] = inst_189369);
return statearr_189425;
})();var statearr_189426_189449 = state_189408__$1;(statearr_189426_189449[2] = null);
(statearr_189426_189449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189409 === 12))
{var inst_189368 = (state_189408[7]);var inst_189396 = cljs.core.vec.call(null,inst_189368);var state_189408__$1 = state_189408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_189408__$1,15,out,inst_189396);
} else
{if((state_val_189409 === 13))
{var state_189408__$1 = state_189408;var statearr_189427_189450 = state_189408__$1;(statearr_189427_189450[2] = null);
(statearr_189427_189450[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189409 === 14))
{var inst_189401 = (state_189408[2]);var inst_189402 = cljs.core.async.close_BANG_.call(null,out);var state_189408__$1 = (function (){var statearr_189428 = state_189408;(statearr_189428[14] = inst_189401);
return statearr_189428;
})();var statearr_189429_189451 = state_189408__$1;(statearr_189429_189451[2] = inst_189402);
(statearr_189429_189451[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_189409 === 15))
{var inst_189398 = (state_189408[2]);var state_189408__$1 = state_189408;var statearr_189430_189452 = state_189408__$1;(statearr_189430_189452[2] = inst_189398);
(statearr_189430_189452[1] = 14);
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
var state_machine__12118__auto____0 = (function (){var statearr_189434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_189434[0] = state_machine__12118__auto__);
(statearr_189434[1] = 1);
return statearr_189434;
});
var state_machine__12118__auto____1 = (function (state_189408){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_189408);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e189435){if((e189435 instanceof Object))
{var ex__12121__auto__ = e189435;var statearr_189436_189453 = state_189408;(statearr_189436_189453[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_189408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e189435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__189454 = state_189408;
state_189408 = G__189454;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_189408){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_189408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_189437 = f__12188__auto__.call(null);(statearr_189437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___189438);
return statearr_189437;
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