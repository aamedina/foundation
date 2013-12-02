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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t314202 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t314202 = (function (f,fn_handler,meta314203){
this.f = f;
this.fn_handler = fn_handler;
this.meta314203 = meta314203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t314202.cljs$lang$type = true;
cljs.core.async.t314202.cljs$lang$ctorStr = "cljs.core.async/t314202";
cljs.core.async.t314202.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t314202");
});
cljs.core.async.t314202.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t314202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t314202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t314202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_314204){var self__ = this;
var _314204__$1 = this;return self__.meta314203;
});
cljs.core.async.t314202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_314204,meta314203__$1){var self__ = this;
var _314204__$1 = this;return (new cljs.core.async.t314202(self__.f,self__.fn_handler,meta314203__$1));
});
cljs.core.async.__GT_t314202 = (function __GT_t314202(f__$1,fn_handler__$1,meta314203){return (new cljs.core.async.t314202(f__$1,fn_handler__$1,meta314203));
});
}
return (new cljs.core.async.t314202(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__314206 = buff;if(G__314206)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__314206.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__314206.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__314206);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__314206);
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
{var val_314207 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_314207);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_314207);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___314208 = n;var x_314209 = 0;while(true){
if((x_314209 < n__8553__auto___314208))
{(a[x_314209] = 0);
{
var G__314210 = (x_314209 + 1);
x_314209 = G__314210;
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
var G__314211 = (i + 1);
i = G__314211;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t314215 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t314215 = (function (flag,alt_flag,meta314216){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta314216 = meta314216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t314215.cljs$lang$type = true;
cljs.core.async.t314215.cljs$lang$ctorStr = "cljs.core.async/t314215";
cljs.core.async.t314215.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t314215");
});
cljs.core.async.t314215.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t314215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t314215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t314215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_314217){var self__ = this;
var _314217__$1 = this;return self__.meta314216;
});
cljs.core.async.t314215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_314217,meta314216__$1){var self__ = this;
var _314217__$1 = this;return (new cljs.core.async.t314215(self__.flag,self__.alt_flag,meta314216__$1));
});
cljs.core.async.__GT_t314215 = (function __GT_t314215(flag__$1,alt_flag__$1,meta314216){return (new cljs.core.async.t314215(flag__$1,alt_flag__$1,meta314216));
});
}
return (new cljs.core.async.t314215(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t314221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t314221 = (function (cb,flag,alt_handler,meta314222){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta314222 = meta314222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t314221.cljs$lang$type = true;
cljs.core.async.t314221.cljs$lang$ctorStr = "cljs.core.async/t314221";
cljs.core.async.t314221.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t314221");
});
cljs.core.async.t314221.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t314221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t314221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t314221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_314223){var self__ = this;
var _314223__$1 = this;return self__.meta314222;
});
cljs.core.async.t314221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_314223,meta314222__$1){var self__ = this;
var _314223__$1 = this;return (new cljs.core.async.t314221(self__.cb,self__.flag,self__.alt_handler,meta314222__$1));
});
cljs.core.async.__GT_t314221 = (function __GT_t314221(cb__$1,flag__$1,alt_handler__$1,meta314222){return (new cljs.core.async.t314221(cb__$1,flag__$1,alt_handler__$1,meta314222));
});
}
return (new cljs.core.async.t314221(cb,flag,alt_handler,null));
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
return (function (p1__314224_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__314224_SHARP_,port], null));
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
var G__314225 = (i + 1);
i = G__314225;
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
var alts_BANG___delegate = function (ports,p__314226){var map__314228 = p__314226;var map__314228__$1 = ((cljs.core.seq_QMARK_.call(null,map__314228))?cljs.core.apply.call(null,cljs.core.hash_map,map__314228):map__314228);var opts = map__314228__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__314226 = null;if (arguments.length > 1) {
  p__314226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__314226);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__314229){
var ports = cljs.core.first(arglist__314229);
var p__314226 = cljs.core.rest(arglist__314229);
return alts_BANG___delegate(ports,p__314226);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t314237 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t314237 = (function (ch,f,map_LT_,meta314238){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta314238 = meta314238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t314237.cljs$lang$type = true;
cljs.core.async.t314237.cljs$lang$ctorStr = "cljs.core.async/t314237";
cljs.core.async.t314237.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t314237");
});
cljs.core.async.t314237.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t314237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t314237.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t314237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t314240 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t314240 = (function (fn1,_,meta314238,ch,f,map_LT_,meta314241){
this.fn1 = fn1;
this._ = _;
this.meta314238 = meta314238;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta314241 = meta314241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t314240.cljs$lang$type = true;
cljs.core.async.t314240.cljs$lang$ctorStr = "cljs.core.async/t314240";
cljs.core.async.t314240.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t314240");
});
cljs.core.async.t314240.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t314240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t314240.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t314240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__314230_SHARP_){return f1.call(null,(((p1__314230_SHARP_ == null))?null:self__.f.call(null,p1__314230_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t314240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_314242){var self__ = this;
var _314242__$1 = this;return self__.meta314241;
});
cljs.core.async.t314240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_314242,meta314241__$1){var self__ = this;
var _314242__$1 = this;return (new cljs.core.async.t314240(self__.fn1,self__._,self__.meta314238,self__.ch,self__.f,self__.map_LT_,meta314241__$1));
});
cljs.core.async.__GT_t314240 = (function __GT_t314240(fn1__$1,___$2,meta314238__$1,ch__$2,f__$2,map_LT___$2,meta314241){return (new cljs.core.async.t314240(fn1__$1,___$2,meta314238__$1,ch__$2,f__$2,map_LT___$2,meta314241));
});
}
return (new cljs.core.async.t314240(fn1,___$1,self__.meta314238,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t314237.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t314237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t314237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_314239){var self__ = this;
var _314239__$1 = this;return self__.meta314238;
});
cljs.core.async.t314237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_314239,meta314238__$1){var self__ = this;
var _314239__$1 = this;return (new cljs.core.async.t314237(self__.ch,self__.f,self__.map_LT_,meta314238__$1));
});
cljs.core.async.__GT_t314237 = (function __GT_t314237(ch__$1,f__$1,map_LT___$1,meta314238){return (new cljs.core.async.t314237(ch__$1,f__$1,map_LT___$1,meta314238));
});
}
return (new cljs.core.async.t314237(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t314246 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t314246 = (function (ch,f,map_GT_,meta314247){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta314247 = meta314247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t314246.cljs$lang$type = true;
cljs.core.async.t314246.cljs$lang$ctorStr = "cljs.core.async/t314246";
cljs.core.async.t314246.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t314246");
});
cljs.core.async.t314246.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t314246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t314246.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t314246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t314246.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t314246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t314246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_314248){var self__ = this;
var _314248__$1 = this;return self__.meta314247;
});
cljs.core.async.t314246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_314248,meta314247__$1){var self__ = this;
var _314248__$1 = this;return (new cljs.core.async.t314246(self__.ch,self__.f,self__.map_GT_,meta314247__$1));
});
cljs.core.async.__GT_t314246 = (function __GT_t314246(ch__$1,f__$1,map_GT___$1,meta314247){return (new cljs.core.async.t314246(ch__$1,f__$1,map_GT___$1,meta314247));
});
}
return (new cljs.core.async.t314246(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t314252 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t314252 = (function (ch,p,filter_GT_,meta314253){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta314253 = meta314253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t314252.cljs$lang$type = true;
cljs.core.async.t314252.cljs$lang$ctorStr = "cljs.core.async/t314252";
cljs.core.async.t314252.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t314252");
});
cljs.core.async.t314252.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t314252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t314252.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t314252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t314252.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t314252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t314252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_314254){var self__ = this;
var _314254__$1 = this;return self__.meta314253;
});
cljs.core.async.t314252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_314254,meta314253__$1){var self__ = this;
var _314254__$1 = this;return (new cljs.core.async.t314252(self__.ch,self__.p,self__.filter_GT_,meta314253__$1));
});
cljs.core.async.__GT_t314252 = (function __GT_t314252(ch__$1,p__$1,filter_GT___$1,meta314253){return (new cljs.core.async.t314252(ch__$1,p__$1,filter_GT___$1,meta314253));
});
}
return (new cljs.core.async.t314252(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___314337 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_314316){var state_val_314317 = (state_314316[1]);if((state_val_314317 === 1))
{var state_314316__$1 = state_314316;var statearr_314318_314338 = state_314316__$1;(statearr_314318_314338[2] = null);
(statearr_314318_314338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314317 === 2))
{var state_314316__$1 = state_314316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_314316__$1,4,ch);
} else
{if((state_val_314317 === 3))
{var inst_314314 = (state_314316[2]);var state_314316__$1 = state_314316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_314316__$1,inst_314314);
} else
{if((state_val_314317 === 4))
{var inst_314298 = (state_314316[7]);var inst_314298__$1 = (state_314316[2]);var inst_314299 = (inst_314298__$1 == null);var state_314316__$1 = (function (){var statearr_314319 = state_314316;(statearr_314319[7] = inst_314298__$1);
return statearr_314319;
})();if(cljs.core.truth_(inst_314299))
{var statearr_314320_314339 = state_314316__$1;(statearr_314320_314339[1] = 5);
} else
{var statearr_314321_314340 = state_314316__$1;(statearr_314321_314340[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314317 === 5))
{var inst_314301 = cljs.core.async.close_BANG_.call(null,out);var state_314316__$1 = state_314316;var statearr_314322_314341 = state_314316__$1;(statearr_314322_314341[2] = inst_314301);
(statearr_314322_314341[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314317 === 6))
{var inst_314298 = (state_314316[7]);var inst_314303 = p.call(null,inst_314298);var state_314316__$1 = state_314316;if(cljs.core.truth_(inst_314303))
{var statearr_314323_314342 = state_314316__$1;(statearr_314323_314342[1] = 8);
} else
{var statearr_314324_314343 = state_314316__$1;(statearr_314324_314343[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314317 === 7))
{var inst_314312 = (state_314316[2]);var state_314316__$1 = state_314316;var statearr_314325_314344 = state_314316__$1;(statearr_314325_314344[2] = inst_314312);
(statearr_314325_314344[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314317 === 8))
{var inst_314298 = (state_314316[7]);var state_314316__$1 = state_314316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_314316__$1,11,out,inst_314298);
} else
{if((state_val_314317 === 9))
{var state_314316__$1 = state_314316;var statearr_314326_314345 = state_314316__$1;(statearr_314326_314345[2] = null);
(statearr_314326_314345[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314317 === 10))
{var inst_314309 = (state_314316[2]);var state_314316__$1 = (function (){var statearr_314327 = state_314316;(statearr_314327[8] = inst_314309);
return statearr_314327;
})();var statearr_314328_314346 = state_314316__$1;(statearr_314328_314346[2] = null);
(statearr_314328_314346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314317 === 11))
{var inst_314306 = (state_314316[2]);var state_314316__$1 = state_314316;var statearr_314329_314347 = state_314316__$1;(statearr_314329_314347[2] = inst_314306);
(statearr_314329_314347[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_314333 = (new Array(9));(statearr_314333[0] = state_machine__10214__auto__);
(statearr_314333[1] = 1);
return statearr_314333;
});
var state_machine__10214__auto____1 = (function (state_314316){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_314316);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e314334){if((e314334 instanceof Object))
{var ex__10217__auto__ = e314334;var statearr_314335_314348 = state_314316;(statearr_314335_314348[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_314316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e314334;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__314349 = state_314316;
state_314316 = G__314349;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_314316){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_314316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_314336 = f__10284__auto__.call(null);(statearr_314336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___314337);
return statearr_314336;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_314501){var state_val_314502 = (state_314501[1]);if((state_val_314502 === 1))
{var state_314501__$1 = state_314501;var statearr_314503_314540 = state_314501__$1;(statearr_314503_314540[2] = null);
(statearr_314503_314540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 2))
{var state_314501__$1 = state_314501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_314501__$1,4,in$);
} else
{if((state_val_314502 === 3))
{var inst_314499 = (state_314501[2]);var state_314501__$1 = state_314501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_314501__$1,inst_314499);
} else
{if((state_val_314502 === 4))
{var inst_314447 = (state_314501[7]);var inst_314447__$1 = (state_314501[2]);var inst_314448 = (inst_314447__$1 == null);var state_314501__$1 = (function (){var statearr_314504 = state_314501;(statearr_314504[7] = inst_314447__$1);
return statearr_314504;
})();if(cljs.core.truth_(inst_314448))
{var statearr_314505_314541 = state_314501__$1;(statearr_314505_314541[1] = 5);
} else
{var statearr_314506_314542 = state_314501__$1;(statearr_314506_314542[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 5))
{var inst_314450 = cljs.core.async.close_BANG_.call(null,out);var state_314501__$1 = state_314501;var statearr_314507_314543 = state_314501__$1;(statearr_314507_314543[2] = inst_314450);
(statearr_314507_314543[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 6))
{var inst_314447 = (state_314501[7]);var inst_314452 = f.call(null,inst_314447);var inst_314457 = cljs.core.seq.call(null,inst_314452);var inst_314458 = inst_314457;var inst_314459 = null;var inst_314460 = 0;var inst_314461 = 0;var state_314501__$1 = (function (){var statearr_314508 = state_314501;(statearr_314508[8] = inst_314459);
(statearr_314508[9] = inst_314458);
(statearr_314508[10] = inst_314460);
(statearr_314508[11] = inst_314461);
return statearr_314508;
})();var statearr_314509_314544 = state_314501__$1;(statearr_314509_314544[2] = null);
(statearr_314509_314544[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 7))
{var inst_314497 = (state_314501[2]);var state_314501__$1 = state_314501;var statearr_314510_314545 = state_314501__$1;(statearr_314510_314545[2] = inst_314497);
(statearr_314510_314545[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 8))
{var inst_314460 = (state_314501[10]);var inst_314461 = (state_314501[11]);var inst_314463 = (inst_314461 < inst_314460);var inst_314464 = inst_314463;var state_314501__$1 = state_314501;if(cljs.core.truth_(inst_314464))
{var statearr_314511_314546 = state_314501__$1;(statearr_314511_314546[1] = 10);
} else
{var statearr_314512_314547 = state_314501__$1;(statearr_314512_314547[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 9))
{var inst_314494 = (state_314501[2]);var state_314501__$1 = (function (){var statearr_314513 = state_314501;(statearr_314513[12] = inst_314494);
return statearr_314513;
})();var statearr_314514_314548 = state_314501__$1;(statearr_314514_314548[2] = null);
(statearr_314514_314548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 10))
{var inst_314459 = (state_314501[8]);var inst_314461 = (state_314501[11]);var inst_314466 = cljs.core._nth.call(null,inst_314459,inst_314461);var state_314501__$1 = state_314501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_314501__$1,13,out,inst_314466);
} else
{if((state_val_314502 === 11))
{var inst_314458 = (state_314501[9]);var inst_314472 = (state_314501[13]);var inst_314472__$1 = cljs.core.seq.call(null,inst_314458);var state_314501__$1 = (function (){var statearr_314518 = state_314501;(statearr_314518[13] = inst_314472__$1);
return statearr_314518;
})();if(inst_314472__$1)
{var statearr_314519_314549 = state_314501__$1;(statearr_314519_314549[1] = 14);
} else
{var statearr_314520_314550 = state_314501__$1;(statearr_314520_314550[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 12))
{var inst_314492 = (state_314501[2]);var state_314501__$1 = state_314501;var statearr_314521_314551 = state_314501__$1;(statearr_314521_314551[2] = inst_314492);
(statearr_314521_314551[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 13))
{var inst_314459 = (state_314501[8]);var inst_314458 = (state_314501[9]);var inst_314460 = (state_314501[10]);var inst_314461 = (state_314501[11]);var inst_314468 = (state_314501[2]);var inst_314469 = (inst_314461 + 1);var tmp314515 = inst_314459;var tmp314516 = inst_314458;var tmp314517 = inst_314460;var inst_314458__$1 = tmp314516;var inst_314459__$1 = tmp314515;var inst_314460__$1 = tmp314517;var inst_314461__$1 = inst_314469;var state_314501__$1 = (function (){var statearr_314522 = state_314501;(statearr_314522[8] = inst_314459__$1);
(statearr_314522[9] = inst_314458__$1);
(statearr_314522[10] = inst_314460__$1);
(statearr_314522[11] = inst_314461__$1);
(statearr_314522[14] = inst_314468);
return statearr_314522;
})();var statearr_314523_314552 = state_314501__$1;(statearr_314523_314552[2] = null);
(statearr_314523_314552[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 14))
{var inst_314472 = (state_314501[13]);var inst_314474 = cljs.core.chunked_seq_QMARK_.call(null,inst_314472);var state_314501__$1 = state_314501;if(inst_314474)
{var statearr_314524_314553 = state_314501__$1;(statearr_314524_314553[1] = 17);
} else
{var statearr_314525_314554 = state_314501__$1;(statearr_314525_314554[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 15))
{var state_314501__$1 = state_314501;var statearr_314526_314555 = state_314501__$1;(statearr_314526_314555[2] = null);
(statearr_314526_314555[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 16))
{var inst_314490 = (state_314501[2]);var state_314501__$1 = state_314501;var statearr_314527_314556 = state_314501__$1;(statearr_314527_314556[2] = inst_314490);
(statearr_314527_314556[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 17))
{var inst_314472 = (state_314501[13]);var inst_314476 = cljs.core.chunk_first.call(null,inst_314472);var inst_314477 = cljs.core.chunk_rest.call(null,inst_314472);var inst_314478 = cljs.core.count.call(null,inst_314476);var inst_314458 = inst_314477;var inst_314459 = inst_314476;var inst_314460 = inst_314478;var inst_314461 = 0;var state_314501__$1 = (function (){var statearr_314528 = state_314501;(statearr_314528[8] = inst_314459);
(statearr_314528[9] = inst_314458);
(statearr_314528[10] = inst_314460);
(statearr_314528[11] = inst_314461);
return statearr_314528;
})();var statearr_314529_314557 = state_314501__$1;(statearr_314529_314557[2] = null);
(statearr_314529_314557[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 18))
{var inst_314472 = (state_314501[13]);var inst_314481 = cljs.core.first.call(null,inst_314472);var state_314501__$1 = state_314501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_314501__$1,20,out,inst_314481);
} else
{if((state_val_314502 === 19))
{var inst_314487 = (state_314501[2]);var state_314501__$1 = state_314501;var statearr_314530_314558 = state_314501__$1;(statearr_314530_314558[2] = inst_314487);
(statearr_314530_314558[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314502 === 20))
{var inst_314472 = (state_314501[13]);var inst_314483 = (state_314501[2]);var inst_314484 = cljs.core.next.call(null,inst_314472);var inst_314458 = inst_314484;var inst_314459 = null;var inst_314460 = 0;var inst_314461 = 0;var state_314501__$1 = (function (){var statearr_314531 = state_314501;(statearr_314531[8] = inst_314459);
(statearr_314531[9] = inst_314458);
(statearr_314531[15] = inst_314483);
(statearr_314531[10] = inst_314460);
(statearr_314531[11] = inst_314461);
return statearr_314531;
})();var statearr_314532_314559 = state_314501__$1;(statearr_314532_314559[2] = null);
(statearr_314532_314559[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_314536 = (new Array(16));(statearr_314536[0] = state_machine__10214__auto__);
(statearr_314536[1] = 1);
return statearr_314536;
});
var state_machine__10214__auto____1 = (function (state_314501){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_314501);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e314537){if((e314537 instanceof Object))
{var ex__10217__auto__ = e314537;var statearr_314538_314560 = state_314501;(statearr_314538_314560[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_314501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e314537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__314561 = state_314501;
state_314501 = G__314561;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_314501){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_314501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_314539 = f__10284__auto__.call(null);(statearr_314539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_314539;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___314642 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_314621){var state_val_314622 = (state_314621[1]);if((state_val_314622 === 1))
{var state_314621__$1 = state_314621;var statearr_314623_314643 = state_314621__$1;(statearr_314623_314643[2] = null);
(statearr_314623_314643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314622 === 2))
{var state_314621__$1 = state_314621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_314621__$1,4,from);
} else
{if((state_val_314622 === 3))
{var inst_314619 = (state_314621[2]);var state_314621__$1 = state_314621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_314621__$1,inst_314619);
} else
{if((state_val_314622 === 4))
{var inst_314604 = (state_314621[7]);var inst_314604__$1 = (state_314621[2]);var inst_314605 = (inst_314604__$1 == null);var state_314621__$1 = (function (){var statearr_314624 = state_314621;(statearr_314624[7] = inst_314604__$1);
return statearr_314624;
})();if(cljs.core.truth_(inst_314605))
{var statearr_314625_314644 = state_314621__$1;(statearr_314625_314644[1] = 5);
} else
{var statearr_314626_314645 = state_314621__$1;(statearr_314626_314645[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314622 === 5))
{var state_314621__$1 = state_314621;if(cljs.core.truth_(close_QMARK_))
{var statearr_314627_314646 = state_314621__$1;(statearr_314627_314646[1] = 8);
} else
{var statearr_314628_314647 = state_314621__$1;(statearr_314628_314647[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314622 === 6))
{var inst_314604 = (state_314621[7]);var state_314621__$1 = state_314621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_314621__$1,11,to,inst_314604);
} else
{if((state_val_314622 === 7))
{var inst_314617 = (state_314621[2]);var state_314621__$1 = state_314621;var statearr_314629_314648 = state_314621__$1;(statearr_314629_314648[2] = inst_314617);
(statearr_314629_314648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314622 === 8))
{var inst_314608 = cljs.core.async.close_BANG_.call(null,to);var state_314621__$1 = state_314621;var statearr_314630_314649 = state_314621__$1;(statearr_314630_314649[2] = inst_314608);
(statearr_314630_314649[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314622 === 9))
{var state_314621__$1 = state_314621;var statearr_314631_314650 = state_314621__$1;(statearr_314631_314650[2] = null);
(statearr_314631_314650[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314622 === 10))
{var inst_314611 = (state_314621[2]);var state_314621__$1 = state_314621;var statearr_314632_314651 = state_314621__$1;(statearr_314632_314651[2] = inst_314611);
(statearr_314632_314651[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314622 === 11))
{var inst_314614 = (state_314621[2]);var state_314621__$1 = (function (){var statearr_314633 = state_314621;(statearr_314633[8] = inst_314614);
return statearr_314633;
})();var statearr_314634_314652 = state_314621__$1;(statearr_314634_314652[2] = null);
(statearr_314634_314652[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_314638 = (new Array(9));(statearr_314638[0] = state_machine__10214__auto__);
(statearr_314638[1] = 1);
return statearr_314638;
});
var state_machine__10214__auto____1 = (function (state_314621){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_314621);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e314639){if((e314639 instanceof Object))
{var ex__10217__auto__ = e314639;var statearr_314640_314653 = state_314621;(statearr_314640_314653[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_314621);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e314639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__314654 = state_314621;
state_314621 = G__314654;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_314621){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_314621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_314641 = f__10284__auto__.call(null);(statearr_314641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___314642);
return statearr_314641;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___314741 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_314719){var state_val_314720 = (state_314719[1]);if((state_val_314720 === 1))
{var state_314719__$1 = state_314719;var statearr_314721_314742 = state_314719__$1;(statearr_314721_314742[2] = null);
(statearr_314721_314742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314720 === 2))
{var state_314719__$1 = state_314719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_314719__$1,4,ch);
} else
{if((state_val_314720 === 3))
{var inst_314717 = (state_314719[2]);var state_314719__$1 = state_314719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_314719__$1,inst_314717);
} else
{if((state_val_314720 === 4))
{var inst_314700 = (state_314719[7]);var inst_314700__$1 = (state_314719[2]);var inst_314701 = (inst_314700__$1 == null);var state_314719__$1 = (function (){var statearr_314722 = state_314719;(statearr_314722[7] = inst_314700__$1);
return statearr_314722;
})();if(cljs.core.truth_(inst_314701))
{var statearr_314723_314743 = state_314719__$1;(statearr_314723_314743[1] = 5);
} else
{var statearr_314724_314744 = state_314719__$1;(statearr_314724_314744[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314720 === 5))
{var inst_314703 = cljs.core.async.close_BANG_.call(null,tc);var inst_314704 = cljs.core.async.close_BANG_.call(null,fc);var state_314719__$1 = (function (){var statearr_314725 = state_314719;(statearr_314725[8] = inst_314703);
return statearr_314725;
})();var statearr_314726_314745 = state_314719__$1;(statearr_314726_314745[2] = inst_314704);
(statearr_314726_314745[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314720 === 6))
{var inst_314700 = (state_314719[7]);var inst_314706 = p.call(null,inst_314700);var state_314719__$1 = state_314719;if(cljs.core.truth_(inst_314706))
{var statearr_314727_314746 = state_314719__$1;(statearr_314727_314746[1] = 9);
} else
{var statearr_314728_314747 = state_314719__$1;(statearr_314728_314747[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314720 === 7))
{var inst_314715 = (state_314719[2]);var state_314719__$1 = state_314719;var statearr_314729_314748 = state_314719__$1;(statearr_314729_314748[2] = inst_314715);
(statearr_314729_314748[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314720 === 8))
{var inst_314712 = (state_314719[2]);var state_314719__$1 = (function (){var statearr_314730 = state_314719;(statearr_314730[9] = inst_314712);
return statearr_314730;
})();var statearr_314731_314749 = state_314719__$1;(statearr_314731_314749[2] = null);
(statearr_314731_314749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314720 === 9))
{var state_314719__$1 = state_314719;var statearr_314732_314750 = state_314719__$1;(statearr_314732_314750[2] = tc);
(statearr_314732_314750[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314720 === 10))
{var state_314719__$1 = state_314719;var statearr_314733_314751 = state_314719__$1;(statearr_314733_314751[2] = fc);
(statearr_314733_314751[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314720 === 11))
{var inst_314700 = (state_314719[7]);var inst_314710 = (state_314719[2]);var state_314719__$1 = state_314719;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_314719__$1,8,inst_314710,inst_314700);
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
var state_machine__10214__auto____0 = (function (){var statearr_314737 = (new Array(10));(statearr_314737[0] = state_machine__10214__auto__);
(statearr_314737[1] = 1);
return statearr_314737;
});
var state_machine__10214__auto____1 = (function (state_314719){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_314719);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e314738){if((e314738 instanceof Object))
{var ex__10217__auto__ = e314738;var statearr_314739_314752 = state_314719;(statearr_314739_314752[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_314719);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e314738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__314753 = state_314719;
state_314719 = G__314753;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_314719){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_314719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_314740 = f__10284__auto__.call(null);(statearr_314740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___314741);
return statearr_314740;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_314800){var state_val_314801 = (state_314800[1]);if((state_val_314801 === 7))
{var inst_314796 = (state_314800[2]);var state_314800__$1 = state_314800;var statearr_314802_314818 = state_314800__$1;(statearr_314802_314818[2] = inst_314796);
(statearr_314802_314818[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314801 === 6))
{var inst_314789 = (state_314800[7]);var inst_314786 = (state_314800[8]);var inst_314793 = f.call(null,inst_314786,inst_314789);var inst_314786__$1 = inst_314793;var state_314800__$1 = (function (){var statearr_314803 = state_314800;(statearr_314803[8] = inst_314786__$1);
return statearr_314803;
})();var statearr_314804_314819 = state_314800__$1;(statearr_314804_314819[2] = null);
(statearr_314804_314819[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314801 === 5))
{var inst_314786 = (state_314800[8]);var state_314800__$1 = state_314800;var statearr_314805_314820 = state_314800__$1;(statearr_314805_314820[2] = inst_314786);
(statearr_314805_314820[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314801 === 4))
{var inst_314789 = (state_314800[7]);var inst_314789__$1 = (state_314800[2]);var inst_314790 = (inst_314789__$1 == null);var state_314800__$1 = (function (){var statearr_314806 = state_314800;(statearr_314806[7] = inst_314789__$1);
return statearr_314806;
})();if(cljs.core.truth_(inst_314790))
{var statearr_314807_314821 = state_314800__$1;(statearr_314807_314821[1] = 5);
} else
{var statearr_314808_314822 = state_314800__$1;(statearr_314808_314822[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314801 === 3))
{var inst_314798 = (state_314800[2]);var state_314800__$1 = state_314800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_314800__$1,inst_314798);
} else
{if((state_val_314801 === 2))
{var state_314800__$1 = state_314800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_314800__$1,4,ch);
} else
{if((state_val_314801 === 1))
{var inst_314786 = init;var state_314800__$1 = (function (){var statearr_314809 = state_314800;(statearr_314809[8] = inst_314786);
return statearr_314809;
})();var statearr_314810_314823 = state_314800__$1;(statearr_314810_314823[2] = null);
(statearr_314810_314823[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_314814 = (new Array(9));(statearr_314814[0] = state_machine__10214__auto__);
(statearr_314814[1] = 1);
return statearr_314814;
});
var state_machine__10214__auto____1 = (function (state_314800){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_314800);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e314815){if((e314815 instanceof Object))
{var ex__10217__auto__ = e314815;var statearr_314816_314824 = state_314800;(statearr_314816_314824[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_314800);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e314815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__314825 = state_314800;
state_314800 = G__314825;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_314800){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_314800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_314817 = f__10284__auto__.call(null);(statearr_314817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_314817;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_314887){var state_val_314888 = (state_314887[1]);if((state_val_314888 === 1))
{var inst_314867 = cljs.core.seq.call(null,coll);var inst_314868 = inst_314867;var state_314887__$1 = (function (){var statearr_314889 = state_314887;(statearr_314889[7] = inst_314868);
return statearr_314889;
})();var statearr_314890_314908 = state_314887__$1;(statearr_314890_314908[2] = null);
(statearr_314890_314908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314888 === 2))
{var inst_314868 = (state_314887[7]);var state_314887__$1 = state_314887;if(cljs.core.truth_(inst_314868))
{var statearr_314891_314909 = state_314887__$1;(statearr_314891_314909[1] = 4);
} else
{var statearr_314892_314910 = state_314887__$1;(statearr_314892_314910[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314888 === 3))
{var inst_314885 = (state_314887[2]);var state_314887__$1 = state_314887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_314887__$1,inst_314885);
} else
{if((state_val_314888 === 4))
{var inst_314868 = (state_314887[7]);var inst_314871 = cljs.core.first.call(null,inst_314868);var state_314887__$1 = state_314887;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_314887__$1,7,ch,inst_314871);
} else
{if((state_val_314888 === 5))
{var state_314887__$1 = state_314887;if(cljs.core.truth_(close_QMARK_))
{var statearr_314893_314911 = state_314887__$1;(statearr_314893_314911[1] = 8);
} else
{var statearr_314894_314912 = state_314887__$1;(statearr_314894_314912[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314888 === 6))
{var inst_314883 = (state_314887[2]);var state_314887__$1 = state_314887;var statearr_314895_314913 = state_314887__$1;(statearr_314895_314913[2] = inst_314883);
(statearr_314895_314913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314888 === 7))
{var inst_314868 = (state_314887[7]);var inst_314873 = (state_314887[2]);var inst_314874 = cljs.core.next.call(null,inst_314868);var inst_314868__$1 = inst_314874;var state_314887__$1 = (function (){var statearr_314896 = state_314887;(statearr_314896[7] = inst_314868__$1);
(statearr_314896[8] = inst_314873);
return statearr_314896;
})();var statearr_314897_314914 = state_314887__$1;(statearr_314897_314914[2] = null);
(statearr_314897_314914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314888 === 8))
{var inst_314878 = cljs.core.async.close_BANG_.call(null,ch);var state_314887__$1 = state_314887;var statearr_314898_314915 = state_314887__$1;(statearr_314898_314915[2] = inst_314878);
(statearr_314898_314915[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314888 === 9))
{var state_314887__$1 = state_314887;var statearr_314899_314916 = state_314887__$1;(statearr_314899_314916[2] = null);
(statearr_314899_314916[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_314888 === 10))
{var inst_314881 = (state_314887[2]);var state_314887__$1 = state_314887;var statearr_314900_314917 = state_314887__$1;(statearr_314900_314917[2] = inst_314881);
(statearr_314900_314917[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_314904 = (new Array(9));(statearr_314904[0] = state_machine__10214__auto__);
(statearr_314904[1] = 1);
return statearr_314904;
});
var state_machine__10214__auto____1 = (function (state_314887){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_314887);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e314905){if((e314905 instanceof Object))
{var ex__10217__auto__ = e314905;var statearr_314906_314918 = state_314887;(statearr_314906_314918[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_314887);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e314905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__314919 = state_314887;
state_314887 = G__314919;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_314887){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_314887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_314907 = f__10284__auto__.call(null);(statearr_314907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_314907;
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
cljs.core.async.Mux = (function (){var obj314921 = {};return obj314921;
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
cljs.core.async.Mult = (function (){var obj314923 = {};return obj314923;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t315138 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t315138 = (function (cs,ch,mult,meta315139){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta315139 = meta315139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t315138.cljs$lang$type = true;
cljs.core.async.t315138.cljs$lang$ctorStr = "cljs.core.async/t315138";
cljs.core.async.t315138.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t315138");
});})(cs))
;
cljs.core.async.t315138.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t315138.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t315138.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t315138.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t315138.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t315138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t315138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_315140){var self__ = this;
var _315140__$1 = this;return self__.meta315139;
});})(cs))
;
cljs.core.async.t315138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_315140,meta315139__$1){var self__ = this;
var _315140__$1 = this;return (new cljs.core.async.t315138(self__.cs,self__.ch,self__.mult,meta315139__$1));
});})(cs))
;
cljs.core.async.__GT_t315138 = ((function (cs){
return (function __GT_t315138(cs__$1,ch__$1,mult__$1,meta315139){return (new cljs.core.async.t315138(cs__$1,ch__$1,mult__$1,meta315139));
});})(cs))
;
}
return (new cljs.core.async.t315138(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___315352 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_315270){var state_val_315271 = (state_315270[1]);if((state_val_315271 === 32))
{var inst_315219 = (state_315270[7]);var inst_315143 = (state_315270[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_315270,31,Object,null,30);var inst_315226 = cljs.core.async.put_BANG_.call(null,inst_315219,inst_315143,done);var state_315270__$1 = state_315270;var statearr_315272_315353 = state_315270__$1;(statearr_315272_315353[2] = inst_315226);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315270__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 1))
{var state_315270__$1 = state_315270;var statearr_315273_315354 = state_315270__$1;(statearr_315273_315354[2] = null);
(statearr_315273_315354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 33))
{var inst_315232 = (state_315270[9]);var inst_315234 = cljs.core.chunked_seq_QMARK_.call(null,inst_315232);var state_315270__$1 = state_315270;if(inst_315234)
{var statearr_315274_315355 = state_315270__$1;(statearr_315274_315355[1] = 36);
} else
{var statearr_315275_315356 = state_315270__$1;(statearr_315275_315356[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 2))
{var state_315270__$1 = state_315270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315270__$1,4,ch);
} else
{if((state_val_315271 === 34))
{var state_315270__$1 = state_315270;var statearr_315276_315357 = state_315270__$1;(statearr_315276_315357[2] = null);
(statearr_315276_315357[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 3))
{var inst_315268 = (state_315270[2]);var state_315270__$1 = state_315270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315270__$1,inst_315268);
} else
{if((state_val_315271 === 35))
{var inst_315257 = (state_315270[2]);var state_315270__$1 = state_315270;var statearr_315277_315358 = state_315270__$1;(statearr_315277_315358[2] = inst_315257);
(statearr_315277_315358[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 4))
{var inst_315143 = (state_315270[8]);var inst_315143__$1 = (state_315270[2]);var inst_315144 = (inst_315143__$1 == null);var state_315270__$1 = (function (){var statearr_315278 = state_315270;(statearr_315278[8] = inst_315143__$1);
return statearr_315278;
})();if(cljs.core.truth_(inst_315144))
{var statearr_315279_315359 = state_315270__$1;(statearr_315279_315359[1] = 5);
} else
{var statearr_315280_315360 = state_315270__$1;(statearr_315280_315360[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 36))
{var inst_315232 = (state_315270[9]);var inst_315236 = cljs.core.chunk_first.call(null,inst_315232);var inst_315237 = cljs.core.chunk_rest.call(null,inst_315232);var inst_315238 = cljs.core.count.call(null,inst_315236);var inst_315211 = inst_315237;var inst_315212 = inst_315236;var inst_315213 = inst_315238;var inst_315214 = 0;var state_315270__$1 = (function (){var statearr_315281 = state_315270;(statearr_315281[10] = inst_315213);
(statearr_315281[11] = inst_315214);
(statearr_315281[12] = inst_315211);
(statearr_315281[13] = inst_315212);
return statearr_315281;
})();var statearr_315282_315361 = state_315270__$1;(statearr_315282_315361[2] = null);
(statearr_315282_315361[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 5))
{var inst_315150 = cljs.core.deref.call(null,cs);var inst_315151 = cljs.core.seq.call(null,inst_315150);var inst_315152 = inst_315151;var inst_315153 = null;var inst_315154 = 0;var inst_315155 = 0;var state_315270__$1 = (function (){var statearr_315283 = state_315270;(statearr_315283[14] = inst_315153);
(statearr_315283[15] = inst_315152);
(statearr_315283[16] = inst_315155);
(statearr_315283[17] = inst_315154);
return statearr_315283;
})();var statearr_315284_315362 = state_315270__$1;(statearr_315284_315362[2] = null);
(statearr_315284_315362[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 37))
{var inst_315232 = (state_315270[9]);var inst_315241 = cljs.core.first.call(null,inst_315232);var state_315270__$1 = (function (){var statearr_315285 = state_315270;(statearr_315285[18] = inst_315241);
return statearr_315285;
})();var statearr_315286_315363 = state_315270__$1;(statearr_315286_315363[2] = null);
(statearr_315286_315363[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 6))
{var inst_315202 = cljs.core.deref.call(null,cs);var inst_315203 = cljs.core.keys.call(null,inst_315202);var inst_315204 = cljs.core.count.call(null,inst_315203);var inst_315205 = cljs.core.reset_BANG_.call(null,dctr,inst_315204);var inst_315210 = cljs.core.seq.call(null,inst_315203);var inst_315211 = inst_315210;var inst_315212 = null;var inst_315213 = 0;var inst_315214 = 0;var state_315270__$1 = (function (){var statearr_315287 = state_315270;(statearr_315287[10] = inst_315213);
(statearr_315287[11] = inst_315214);
(statearr_315287[12] = inst_315211);
(statearr_315287[13] = inst_315212);
(statearr_315287[19] = inst_315205);
return statearr_315287;
})();var statearr_315288_315364 = state_315270__$1;(statearr_315288_315364[2] = null);
(statearr_315288_315364[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 38))
{var inst_315254 = (state_315270[2]);var state_315270__$1 = state_315270;var statearr_315289_315365 = state_315270__$1;(statearr_315289_315365[2] = inst_315254);
(statearr_315289_315365[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 7))
{var inst_315266 = (state_315270[2]);var state_315270__$1 = state_315270;var statearr_315290_315366 = state_315270__$1;(statearr_315290_315366[2] = inst_315266);
(statearr_315290_315366[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 39))
{var inst_315232 = (state_315270[9]);var inst_315250 = (state_315270[2]);var inst_315251 = cljs.core.next.call(null,inst_315232);var inst_315211 = inst_315251;var inst_315212 = null;var inst_315213 = 0;var inst_315214 = 0;var state_315270__$1 = (function (){var statearr_315291 = state_315270;(statearr_315291[10] = inst_315213);
(statearr_315291[11] = inst_315214);
(statearr_315291[12] = inst_315211);
(statearr_315291[13] = inst_315212);
(statearr_315291[20] = inst_315250);
return statearr_315291;
})();var statearr_315292_315367 = state_315270__$1;(statearr_315292_315367[2] = null);
(statearr_315292_315367[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 8))
{var inst_315155 = (state_315270[16]);var inst_315154 = (state_315270[17]);var inst_315157 = (inst_315155 < inst_315154);var inst_315158 = inst_315157;var state_315270__$1 = state_315270;if(cljs.core.truth_(inst_315158))
{var statearr_315293_315368 = state_315270__$1;(statearr_315293_315368[1] = 10);
} else
{var statearr_315294_315369 = state_315270__$1;(statearr_315294_315369[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 40))
{var inst_315241 = (state_315270[18]);var inst_315242 = (state_315270[2]);var inst_315243 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_315244 = cljs.core.async.untap_STAR_.call(null,m,inst_315241);var state_315270__$1 = (function (){var statearr_315295 = state_315270;(statearr_315295[21] = inst_315243);
(statearr_315295[22] = inst_315242);
return statearr_315295;
})();var statearr_315296_315370 = state_315270__$1;(statearr_315296_315370[2] = inst_315244);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315270__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 9))
{var inst_315200 = (state_315270[2]);var state_315270__$1 = state_315270;var statearr_315297_315371 = state_315270__$1;(statearr_315297_315371[2] = inst_315200);
(statearr_315297_315371[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 41))
{var inst_315143 = (state_315270[8]);var inst_315241 = (state_315270[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_315270,40,Object,null,39);var inst_315248 = cljs.core.async.put_BANG_.call(null,inst_315241,inst_315143,done);var state_315270__$1 = state_315270;var statearr_315298_315372 = state_315270__$1;(statearr_315298_315372[2] = inst_315248);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315270__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 10))
{var inst_315153 = (state_315270[14]);var inst_315155 = (state_315270[16]);var inst_315161 = cljs.core._nth.call(null,inst_315153,inst_315155);var inst_315162 = cljs.core.nth.call(null,inst_315161,0,null);var inst_315163 = cljs.core.nth.call(null,inst_315161,1,null);var state_315270__$1 = (function (){var statearr_315299 = state_315270;(statearr_315299[23] = inst_315162);
return statearr_315299;
})();if(cljs.core.truth_(inst_315163))
{var statearr_315300_315373 = state_315270__$1;(statearr_315300_315373[1] = 13);
} else
{var statearr_315301_315374 = state_315270__$1;(statearr_315301_315374[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 42))
{var inst_315263 = (state_315270[2]);var state_315270__$1 = (function (){var statearr_315302 = state_315270;(statearr_315302[24] = inst_315263);
return statearr_315302;
})();var statearr_315303_315375 = state_315270__$1;(statearr_315303_315375[2] = null);
(statearr_315303_315375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 11))
{var inst_315152 = (state_315270[15]);var inst_315172 = (state_315270[25]);var inst_315172__$1 = cljs.core.seq.call(null,inst_315152);var state_315270__$1 = (function (){var statearr_315304 = state_315270;(statearr_315304[25] = inst_315172__$1);
return statearr_315304;
})();if(inst_315172__$1)
{var statearr_315305_315376 = state_315270__$1;(statearr_315305_315376[1] = 16);
} else
{var statearr_315306_315377 = state_315270__$1;(statearr_315306_315377[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 12))
{var inst_315198 = (state_315270[2]);var state_315270__$1 = state_315270;var statearr_315307_315378 = state_315270__$1;(statearr_315307_315378[2] = inst_315198);
(statearr_315307_315378[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 13))
{var inst_315162 = (state_315270[23]);var inst_315165 = cljs.core.async.close_BANG_.call(null,inst_315162);var state_315270__$1 = state_315270;var statearr_315311_315379 = state_315270__$1;(statearr_315311_315379[2] = inst_315165);
(statearr_315311_315379[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 14))
{var state_315270__$1 = state_315270;var statearr_315312_315380 = state_315270__$1;(statearr_315312_315380[2] = null);
(statearr_315312_315380[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 15))
{var inst_315153 = (state_315270[14]);var inst_315152 = (state_315270[15]);var inst_315155 = (state_315270[16]);var inst_315154 = (state_315270[17]);var inst_315168 = (state_315270[2]);var inst_315169 = (inst_315155 + 1);var tmp315308 = inst_315153;var tmp315309 = inst_315152;var tmp315310 = inst_315154;var inst_315152__$1 = tmp315309;var inst_315153__$1 = tmp315308;var inst_315154__$1 = tmp315310;var inst_315155__$1 = inst_315169;var state_315270__$1 = (function (){var statearr_315313 = state_315270;(statearr_315313[14] = inst_315153__$1);
(statearr_315313[15] = inst_315152__$1);
(statearr_315313[16] = inst_315155__$1);
(statearr_315313[17] = inst_315154__$1);
(statearr_315313[26] = inst_315168);
return statearr_315313;
})();var statearr_315314_315381 = state_315270__$1;(statearr_315314_315381[2] = null);
(statearr_315314_315381[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 16))
{var inst_315172 = (state_315270[25]);var inst_315174 = cljs.core.chunked_seq_QMARK_.call(null,inst_315172);var state_315270__$1 = state_315270;if(inst_315174)
{var statearr_315315_315382 = state_315270__$1;(statearr_315315_315382[1] = 19);
} else
{var statearr_315316_315383 = state_315270__$1;(statearr_315316_315383[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 17))
{var state_315270__$1 = state_315270;var statearr_315317_315384 = state_315270__$1;(statearr_315317_315384[2] = null);
(statearr_315317_315384[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 18))
{var inst_315196 = (state_315270[2]);var state_315270__$1 = state_315270;var statearr_315318_315385 = state_315270__$1;(statearr_315318_315385[2] = inst_315196);
(statearr_315318_315385[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 19))
{var inst_315172 = (state_315270[25]);var inst_315176 = cljs.core.chunk_first.call(null,inst_315172);var inst_315177 = cljs.core.chunk_rest.call(null,inst_315172);var inst_315178 = cljs.core.count.call(null,inst_315176);var inst_315152 = inst_315177;var inst_315153 = inst_315176;var inst_315154 = inst_315178;var inst_315155 = 0;var state_315270__$1 = (function (){var statearr_315319 = state_315270;(statearr_315319[14] = inst_315153);
(statearr_315319[15] = inst_315152);
(statearr_315319[16] = inst_315155);
(statearr_315319[17] = inst_315154);
return statearr_315319;
})();var statearr_315320_315386 = state_315270__$1;(statearr_315320_315386[2] = null);
(statearr_315320_315386[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 20))
{var inst_315172 = (state_315270[25]);var inst_315182 = cljs.core.first.call(null,inst_315172);var inst_315183 = cljs.core.nth.call(null,inst_315182,0,null);var inst_315184 = cljs.core.nth.call(null,inst_315182,1,null);var state_315270__$1 = (function (){var statearr_315321 = state_315270;(statearr_315321[27] = inst_315183);
return statearr_315321;
})();if(cljs.core.truth_(inst_315184))
{var statearr_315322_315387 = state_315270__$1;(statearr_315322_315387[1] = 22);
} else
{var statearr_315323_315388 = state_315270__$1;(statearr_315323_315388[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 21))
{var inst_315193 = (state_315270[2]);var state_315270__$1 = state_315270;var statearr_315324_315389 = state_315270__$1;(statearr_315324_315389[2] = inst_315193);
(statearr_315324_315389[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 22))
{var inst_315183 = (state_315270[27]);var inst_315186 = cljs.core.async.close_BANG_.call(null,inst_315183);var state_315270__$1 = state_315270;var statearr_315325_315390 = state_315270__$1;(statearr_315325_315390[2] = inst_315186);
(statearr_315325_315390[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 23))
{var state_315270__$1 = state_315270;var statearr_315326_315391 = state_315270__$1;(statearr_315326_315391[2] = null);
(statearr_315326_315391[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 24))
{var inst_315172 = (state_315270[25]);var inst_315189 = (state_315270[2]);var inst_315190 = cljs.core.next.call(null,inst_315172);var inst_315152 = inst_315190;var inst_315153 = null;var inst_315154 = 0;var inst_315155 = 0;var state_315270__$1 = (function (){var statearr_315327 = state_315270;(statearr_315327[28] = inst_315189);
(statearr_315327[14] = inst_315153);
(statearr_315327[15] = inst_315152);
(statearr_315327[16] = inst_315155);
(statearr_315327[17] = inst_315154);
return statearr_315327;
})();var statearr_315328_315392 = state_315270__$1;(statearr_315328_315392[2] = null);
(statearr_315328_315392[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 25))
{var inst_315213 = (state_315270[10]);var inst_315214 = (state_315270[11]);var inst_315216 = (inst_315214 < inst_315213);var inst_315217 = inst_315216;var state_315270__$1 = state_315270;if(cljs.core.truth_(inst_315217))
{var statearr_315329_315393 = state_315270__$1;(statearr_315329_315393[1] = 27);
} else
{var statearr_315330_315394 = state_315270__$1;(statearr_315330_315394[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 26))
{var inst_315261 = (state_315270[2]);var state_315270__$1 = (function (){var statearr_315331 = state_315270;(statearr_315331[29] = inst_315261);
return statearr_315331;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315270__$1,42,dchan);
} else
{if((state_val_315271 === 27))
{var inst_315214 = (state_315270[11]);var inst_315212 = (state_315270[13]);var inst_315219 = cljs.core._nth.call(null,inst_315212,inst_315214);var state_315270__$1 = (function (){var statearr_315332 = state_315270;(statearr_315332[7] = inst_315219);
return statearr_315332;
})();var statearr_315333_315395 = state_315270__$1;(statearr_315333_315395[2] = null);
(statearr_315333_315395[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 28))
{var inst_315211 = (state_315270[12]);var inst_315232 = (state_315270[9]);var inst_315232__$1 = cljs.core.seq.call(null,inst_315211);var state_315270__$1 = (function (){var statearr_315337 = state_315270;(statearr_315337[9] = inst_315232__$1);
return statearr_315337;
})();if(inst_315232__$1)
{var statearr_315338_315396 = state_315270__$1;(statearr_315338_315396[1] = 33);
} else
{var statearr_315339_315397 = state_315270__$1;(statearr_315339_315397[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 29))
{var inst_315259 = (state_315270[2]);var state_315270__$1 = state_315270;var statearr_315340_315398 = state_315270__$1;(statearr_315340_315398[2] = inst_315259);
(statearr_315340_315398[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 30))
{var inst_315213 = (state_315270[10]);var inst_315214 = (state_315270[11]);var inst_315211 = (state_315270[12]);var inst_315212 = (state_315270[13]);var inst_315228 = (state_315270[2]);var inst_315229 = (inst_315214 + 1);var tmp315334 = inst_315213;var tmp315335 = inst_315211;var tmp315336 = inst_315212;var inst_315211__$1 = tmp315335;var inst_315212__$1 = tmp315336;var inst_315213__$1 = tmp315334;var inst_315214__$1 = inst_315229;var state_315270__$1 = (function (){var statearr_315341 = state_315270;(statearr_315341[10] = inst_315213__$1);
(statearr_315341[11] = inst_315214__$1);
(statearr_315341[12] = inst_315211__$1);
(statearr_315341[13] = inst_315212__$1);
(statearr_315341[30] = inst_315228);
return statearr_315341;
})();var statearr_315342_315399 = state_315270__$1;(statearr_315342_315399[2] = null);
(statearr_315342_315399[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315271 === 31))
{var inst_315219 = (state_315270[7]);var inst_315220 = (state_315270[2]);var inst_315221 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_315222 = cljs.core.async.untap_STAR_.call(null,m,inst_315219);var state_315270__$1 = (function (){var statearr_315343 = state_315270;(statearr_315343[31] = inst_315221);
(statearr_315343[32] = inst_315220);
return statearr_315343;
})();var statearr_315344_315400 = state_315270__$1;(statearr_315344_315400[2] = inst_315222);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315270__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_315348 = (new Array(33));(statearr_315348[0] = state_machine__10214__auto__);
(statearr_315348[1] = 1);
return statearr_315348;
});
var state_machine__10214__auto____1 = (function (state_315270){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_315270);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e315349){if((e315349 instanceof Object))
{var ex__10217__auto__ = e315349;var statearr_315350_315401 = state_315270;(statearr_315350_315401[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e315349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__315402 = state_315270;
state_315270 = G__315402;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_315270){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_315270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_315351 = f__10284__auto__.call(null);(statearr_315351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___315352);
return statearr_315351;
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
cljs.core.async.Mix = (function (){var obj315404 = {};return obj315404;
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
;var m = (function (){if(typeof cljs.core.async.t315514 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t315514 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta315515){
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
this.meta315515 = meta315515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t315514.cljs$lang$type = true;
cljs.core.async.t315514.cljs$lang$ctorStr = "cljs.core.async/t315514";
cljs.core.async.t315514.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t315514");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t315514.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t315514.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t315514.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t315514.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t315514.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t315514.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t315514.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t315514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t315514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_315516){var self__ = this;
var _315516__$1 = this;return self__.meta315515;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t315514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_315516,meta315515__$1){var self__ = this;
var _315516__$1 = this;return (new cljs.core.async.t315514(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta315515__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t315514 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t315514(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta315515){return (new cljs.core.async.t315514(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta315515));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t315514(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___315623 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_315581){var state_val_315582 = (state_315581[1]);if((state_val_315582 === 1))
{var inst_315520 = (state_315581[7]);var inst_315520__$1 = calc_state.call(null);var inst_315521 = cljs.core.seq_QMARK_.call(null,inst_315520__$1);var state_315581__$1 = (function (){var statearr_315583 = state_315581;(statearr_315583[7] = inst_315520__$1);
return statearr_315583;
})();if(inst_315521)
{var statearr_315584_315624 = state_315581__$1;(statearr_315584_315624[1] = 2);
} else
{var statearr_315585_315625 = state_315581__$1;(statearr_315585_315625[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 2))
{var inst_315520 = (state_315581[7]);var inst_315523 = cljs.core.apply.call(null,cljs.core.hash_map,inst_315520);var state_315581__$1 = state_315581;var statearr_315586_315626 = state_315581__$1;(statearr_315586_315626[2] = inst_315523);
(statearr_315586_315626[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 3))
{var inst_315520 = (state_315581[7]);var state_315581__$1 = state_315581;var statearr_315587_315627 = state_315581__$1;(statearr_315587_315627[2] = inst_315520);
(statearr_315587_315627[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 4))
{var inst_315520 = (state_315581[7]);var inst_315526 = (state_315581[2]);var inst_315527 = cljs.core.get.call(null,inst_315526,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_315528 = cljs.core.get.call(null,inst_315526,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_315529 = cljs.core.get.call(null,inst_315526,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_315530 = inst_315520;var state_315581__$1 = (function (){var statearr_315588 = state_315581;(statearr_315588[8] = inst_315530);
(statearr_315588[9] = inst_315527);
(statearr_315588[10] = inst_315528);
(statearr_315588[11] = inst_315529);
return statearr_315588;
})();var statearr_315589_315628 = state_315581__$1;(statearr_315589_315628[2] = null);
(statearr_315589_315628[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 5))
{var inst_315530 = (state_315581[8]);var inst_315533 = cljs.core.seq_QMARK_.call(null,inst_315530);var state_315581__$1 = state_315581;if(inst_315533)
{var statearr_315590_315629 = state_315581__$1;(statearr_315590_315629[1] = 7);
} else
{var statearr_315591_315630 = state_315581__$1;(statearr_315591_315630[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 6))
{var inst_315579 = (state_315581[2]);var state_315581__$1 = state_315581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315581__$1,inst_315579);
} else
{if((state_val_315582 === 7))
{var inst_315530 = (state_315581[8]);var inst_315535 = cljs.core.apply.call(null,cljs.core.hash_map,inst_315530);var state_315581__$1 = state_315581;var statearr_315592_315631 = state_315581__$1;(statearr_315592_315631[2] = inst_315535);
(statearr_315592_315631[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 8))
{var inst_315530 = (state_315581[8]);var state_315581__$1 = state_315581;var statearr_315593_315632 = state_315581__$1;(statearr_315593_315632[2] = inst_315530);
(statearr_315593_315632[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 9))
{var inst_315538 = (state_315581[12]);var inst_315538__$1 = (state_315581[2]);var inst_315539 = cljs.core.get.call(null,inst_315538__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_315540 = cljs.core.get.call(null,inst_315538__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_315541 = cljs.core.get.call(null,inst_315538__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_315581__$1 = (function (){var statearr_315594 = state_315581;(statearr_315594[12] = inst_315538__$1);
(statearr_315594[13] = inst_315541);
(statearr_315594[14] = inst_315540);
return statearr_315594;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_315581__$1,10,inst_315539);
} else
{if((state_val_315582 === 10))
{var inst_315546 = (state_315581[15]);var inst_315545 = (state_315581[16]);var inst_315544 = (state_315581[2]);var inst_315545__$1 = cljs.core.nth.call(null,inst_315544,0,null);var inst_315546__$1 = cljs.core.nth.call(null,inst_315544,1,null);var inst_315547 = (inst_315545__$1 == null);var inst_315548 = cljs.core._EQ_.call(null,inst_315546__$1,change);var inst_315549 = (inst_315547) || (inst_315548);var state_315581__$1 = (function (){var statearr_315595 = state_315581;(statearr_315595[15] = inst_315546__$1);
(statearr_315595[16] = inst_315545__$1);
return statearr_315595;
})();if(cljs.core.truth_(inst_315549))
{var statearr_315596_315633 = state_315581__$1;(statearr_315596_315633[1] = 11);
} else
{var statearr_315597_315634 = state_315581__$1;(statearr_315597_315634[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 11))
{var inst_315545 = (state_315581[16]);var inst_315551 = (inst_315545 == null);var state_315581__$1 = state_315581;if(cljs.core.truth_(inst_315551))
{var statearr_315598_315635 = state_315581__$1;(statearr_315598_315635[1] = 14);
} else
{var statearr_315599_315636 = state_315581__$1;(statearr_315599_315636[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 12))
{var inst_315546 = (state_315581[15]);var inst_315541 = (state_315581[13]);var inst_315560 = (state_315581[17]);var inst_315560__$1 = inst_315541.call(null,inst_315546);var state_315581__$1 = (function (){var statearr_315600 = state_315581;(statearr_315600[17] = inst_315560__$1);
return statearr_315600;
})();if(cljs.core.truth_(inst_315560__$1))
{var statearr_315601_315637 = state_315581__$1;(statearr_315601_315637[1] = 17);
} else
{var statearr_315602_315638 = state_315581__$1;(statearr_315602_315638[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 13))
{var inst_315577 = (state_315581[2]);var state_315581__$1 = state_315581;var statearr_315603_315639 = state_315581__$1;(statearr_315603_315639[2] = inst_315577);
(statearr_315603_315639[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 14))
{var inst_315546 = (state_315581[15]);var inst_315553 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_315546);var state_315581__$1 = state_315581;var statearr_315604_315640 = state_315581__$1;(statearr_315604_315640[2] = inst_315553);
(statearr_315604_315640[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 15))
{var state_315581__$1 = state_315581;var statearr_315605_315641 = state_315581__$1;(statearr_315605_315641[2] = null);
(statearr_315605_315641[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 16))
{var inst_315556 = (state_315581[2]);var inst_315557 = calc_state.call(null);var inst_315530 = inst_315557;var state_315581__$1 = (function (){var statearr_315606 = state_315581;(statearr_315606[8] = inst_315530);
(statearr_315606[18] = inst_315556);
return statearr_315606;
})();var statearr_315607_315642 = state_315581__$1;(statearr_315607_315642[2] = null);
(statearr_315607_315642[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 17))
{var inst_315560 = (state_315581[17]);var state_315581__$1 = state_315581;var statearr_315608_315643 = state_315581__$1;(statearr_315608_315643[2] = inst_315560);
(statearr_315608_315643[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 18))
{var inst_315546 = (state_315581[15]);var inst_315541 = (state_315581[13]);var inst_315540 = (state_315581[14]);var inst_315563 = cljs.core.empty_QMARK_.call(null,inst_315541);var inst_315564 = inst_315540.call(null,inst_315546);var inst_315565 = cljs.core.not.call(null,inst_315564);var inst_315566 = (inst_315563) && (inst_315565);var state_315581__$1 = state_315581;var statearr_315609_315644 = state_315581__$1;(statearr_315609_315644[2] = inst_315566);
(statearr_315609_315644[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 19))
{var inst_315568 = (state_315581[2]);var state_315581__$1 = state_315581;if(cljs.core.truth_(inst_315568))
{var statearr_315610_315645 = state_315581__$1;(statearr_315610_315645[1] = 20);
} else
{var statearr_315611_315646 = state_315581__$1;(statearr_315611_315646[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 20))
{var inst_315545 = (state_315581[16]);var state_315581__$1 = state_315581;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315581__$1,23,out,inst_315545);
} else
{if((state_val_315582 === 21))
{var state_315581__$1 = state_315581;var statearr_315612_315647 = state_315581__$1;(statearr_315612_315647[2] = null);
(statearr_315612_315647[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 22))
{var inst_315538 = (state_315581[12]);var inst_315574 = (state_315581[2]);var inst_315530 = inst_315538;var state_315581__$1 = (function (){var statearr_315613 = state_315581;(statearr_315613[19] = inst_315574);
(statearr_315613[8] = inst_315530);
return statearr_315613;
})();var statearr_315614_315648 = state_315581__$1;(statearr_315614_315648[2] = null);
(statearr_315614_315648[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315582 === 23))
{var inst_315571 = (state_315581[2]);var state_315581__$1 = state_315581;var statearr_315615_315649 = state_315581__$1;(statearr_315615_315649[2] = inst_315571);
(statearr_315615_315649[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_315619 = (new Array(20));(statearr_315619[0] = state_machine__10214__auto__);
(statearr_315619[1] = 1);
return statearr_315619;
});
var state_machine__10214__auto____1 = (function (state_315581){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_315581);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e315620){if((e315620 instanceof Object))
{var ex__10217__auto__ = e315620;var statearr_315621_315650 = state_315581;(statearr_315621_315650[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315581);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e315620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__315651 = state_315581;
state_315581 = G__315651;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_315581){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_315581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_315622 = f__10284__auto__.call(null);(statearr_315622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___315623);
return statearr_315622;
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
cljs.core.async.Pub = (function (){var obj315653 = {};return obj315653;
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
return (function (p1__315654_SHARP_){if(cljs.core.truth_(p1__315654_SHARP_.call(null,topic)))
{return p1__315654_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__315654_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t315779 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t315779 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta315780){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta315780 = meta315780;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t315779.cljs$lang$type = true;
cljs.core.async.t315779.cljs$lang$ctorStr = "cljs.core.async/t315779";
cljs.core.async.t315779.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t315779");
});})(mults,ensure_mult))
;
cljs.core.async.t315779.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t315779.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t315779.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t315779.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t315779.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t315779.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t315779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t315779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_315781){var self__ = this;
var _315781__$1 = this;return self__.meta315780;
});})(mults,ensure_mult))
;
cljs.core.async.t315779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_315781,meta315780__$1){var self__ = this;
var _315781__$1 = this;return (new cljs.core.async.t315779(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta315780__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t315779 = ((function (mults,ensure_mult){
return (function __GT_t315779(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta315780){return (new cljs.core.async.t315779(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta315780));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t315779(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___315903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_315855){var state_val_315856 = (state_315855[1]);if((state_val_315856 === 1))
{var state_315855__$1 = state_315855;var statearr_315857_315904 = state_315855__$1;(statearr_315857_315904[2] = null);
(statearr_315857_315904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 2))
{var state_315855__$1 = state_315855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315855__$1,4,ch);
} else
{if((state_val_315856 === 3))
{var inst_315853 = (state_315855[2]);var state_315855__$1 = state_315855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315855__$1,inst_315853);
} else
{if((state_val_315856 === 4))
{var inst_315784 = (state_315855[7]);var inst_315784__$1 = (state_315855[2]);var inst_315785 = (inst_315784__$1 == null);var state_315855__$1 = (function (){var statearr_315858 = state_315855;(statearr_315858[7] = inst_315784__$1);
return statearr_315858;
})();if(cljs.core.truth_(inst_315785))
{var statearr_315859_315905 = state_315855__$1;(statearr_315859_315905[1] = 5);
} else
{var statearr_315860_315906 = state_315855__$1;(statearr_315860_315906[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 5))
{var inst_315791 = cljs.core.deref.call(null,mults);var inst_315792 = cljs.core.vals.call(null,inst_315791);var inst_315793 = cljs.core.seq.call(null,inst_315792);var inst_315794 = inst_315793;var inst_315795 = null;var inst_315796 = 0;var inst_315797 = 0;var state_315855__$1 = (function (){var statearr_315861 = state_315855;(statearr_315861[8] = inst_315796);
(statearr_315861[9] = inst_315797);
(statearr_315861[10] = inst_315794);
(statearr_315861[11] = inst_315795);
return statearr_315861;
})();var statearr_315862_315907 = state_315855__$1;(statearr_315862_315907[2] = null);
(statearr_315862_315907[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 6))
{var inst_315784 = (state_315855[7]);var inst_315834 = (state_315855[12]);var inst_315832 = (state_315855[13]);var inst_315832__$1 = topic_fn.call(null,inst_315784);var inst_315833 = cljs.core.deref.call(null,mults);var inst_315834__$1 = cljs.core.get.call(null,inst_315833,inst_315832__$1);var state_315855__$1 = (function (){var statearr_315863 = state_315855;(statearr_315863[12] = inst_315834__$1);
(statearr_315863[13] = inst_315832__$1);
return statearr_315863;
})();if(cljs.core.truth_(inst_315834__$1))
{var statearr_315864_315908 = state_315855__$1;(statearr_315864_315908[1] = 19);
} else
{var statearr_315865_315909 = state_315855__$1;(statearr_315865_315909[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 7))
{var inst_315851 = (state_315855[2]);var state_315855__$1 = state_315855;var statearr_315866_315910 = state_315855__$1;(statearr_315866_315910[2] = inst_315851);
(statearr_315866_315910[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 8))
{var inst_315796 = (state_315855[8]);var inst_315797 = (state_315855[9]);var inst_315799 = (inst_315797 < inst_315796);var inst_315800 = inst_315799;var state_315855__$1 = state_315855;if(cljs.core.truth_(inst_315800))
{var statearr_315870_315911 = state_315855__$1;(statearr_315870_315911[1] = 10);
} else
{var statearr_315871_315912 = state_315855__$1;(statearr_315871_315912[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 9))
{var inst_315830 = (state_315855[2]);var state_315855__$1 = state_315855;var statearr_315872_315913 = state_315855__$1;(statearr_315872_315913[2] = inst_315830);
(statearr_315872_315913[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 10))
{var inst_315796 = (state_315855[8]);var inst_315797 = (state_315855[9]);var inst_315794 = (state_315855[10]);var inst_315795 = (state_315855[11]);var inst_315802 = cljs.core._nth.call(null,inst_315795,inst_315797);var inst_315803 = cljs.core.async.muxch_STAR_.call(null,inst_315802);var inst_315804 = cljs.core.async.close_BANG_.call(null,inst_315803);var inst_315805 = (inst_315797 + 1);var tmp315867 = inst_315796;var tmp315868 = inst_315794;var tmp315869 = inst_315795;var inst_315794__$1 = tmp315868;var inst_315795__$1 = tmp315869;var inst_315796__$1 = tmp315867;var inst_315797__$1 = inst_315805;var state_315855__$1 = (function (){var statearr_315873 = state_315855;(statearr_315873[14] = inst_315804);
(statearr_315873[8] = inst_315796__$1);
(statearr_315873[9] = inst_315797__$1);
(statearr_315873[10] = inst_315794__$1);
(statearr_315873[11] = inst_315795__$1);
return statearr_315873;
})();var statearr_315874_315914 = state_315855__$1;(statearr_315874_315914[2] = null);
(statearr_315874_315914[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 11))
{var inst_315794 = (state_315855[10]);var inst_315808 = (state_315855[15]);var inst_315808__$1 = cljs.core.seq.call(null,inst_315794);var state_315855__$1 = (function (){var statearr_315875 = state_315855;(statearr_315875[15] = inst_315808__$1);
return statearr_315875;
})();if(inst_315808__$1)
{var statearr_315876_315915 = state_315855__$1;(statearr_315876_315915[1] = 13);
} else
{var statearr_315877_315916 = state_315855__$1;(statearr_315877_315916[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 12))
{var inst_315828 = (state_315855[2]);var state_315855__$1 = state_315855;var statearr_315878_315917 = state_315855__$1;(statearr_315878_315917[2] = inst_315828);
(statearr_315878_315917[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 13))
{var inst_315808 = (state_315855[15]);var inst_315810 = cljs.core.chunked_seq_QMARK_.call(null,inst_315808);var state_315855__$1 = state_315855;if(inst_315810)
{var statearr_315879_315918 = state_315855__$1;(statearr_315879_315918[1] = 16);
} else
{var statearr_315880_315919 = state_315855__$1;(statearr_315880_315919[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 14))
{var state_315855__$1 = state_315855;var statearr_315881_315920 = state_315855__$1;(statearr_315881_315920[2] = null);
(statearr_315881_315920[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 15))
{var inst_315826 = (state_315855[2]);var state_315855__$1 = state_315855;var statearr_315882_315921 = state_315855__$1;(statearr_315882_315921[2] = inst_315826);
(statearr_315882_315921[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 16))
{var inst_315808 = (state_315855[15]);var inst_315812 = cljs.core.chunk_first.call(null,inst_315808);var inst_315813 = cljs.core.chunk_rest.call(null,inst_315808);var inst_315814 = cljs.core.count.call(null,inst_315812);var inst_315794 = inst_315813;var inst_315795 = inst_315812;var inst_315796 = inst_315814;var inst_315797 = 0;var state_315855__$1 = (function (){var statearr_315883 = state_315855;(statearr_315883[8] = inst_315796);
(statearr_315883[9] = inst_315797);
(statearr_315883[10] = inst_315794);
(statearr_315883[11] = inst_315795);
return statearr_315883;
})();var statearr_315884_315922 = state_315855__$1;(statearr_315884_315922[2] = null);
(statearr_315884_315922[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 17))
{var inst_315808 = (state_315855[15]);var inst_315817 = cljs.core.first.call(null,inst_315808);var inst_315818 = cljs.core.async.muxch_STAR_.call(null,inst_315817);var inst_315819 = cljs.core.async.close_BANG_.call(null,inst_315818);var inst_315820 = cljs.core.next.call(null,inst_315808);var inst_315794 = inst_315820;var inst_315795 = null;var inst_315796 = 0;var inst_315797 = 0;var state_315855__$1 = (function (){var statearr_315885 = state_315855;(statearr_315885[8] = inst_315796);
(statearr_315885[9] = inst_315797);
(statearr_315885[10] = inst_315794);
(statearr_315885[11] = inst_315795);
(statearr_315885[16] = inst_315819);
return statearr_315885;
})();var statearr_315886_315923 = state_315855__$1;(statearr_315886_315923[2] = null);
(statearr_315886_315923[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 18))
{var inst_315823 = (state_315855[2]);var state_315855__$1 = state_315855;var statearr_315887_315924 = state_315855__$1;(statearr_315887_315924[2] = inst_315823);
(statearr_315887_315924[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 19))
{var state_315855__$1 = state_315855;var statearr_315888_315925 = state_315855__$1;(statearr_315888_315925[2] = null);
(statearr_315888_315925[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 20))
{var state_315855__$1 = state_315855;var statearr_315889_315926 = state_315855__$1;(statearr_315889_315926[2] = null);
(statearr_315889_315926[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 21))
{var inst_315848 = (state_315855[2]);var state_315855__$1 = (function (){var statearr_315890 = state_315855;(statearr_315890[17] = inst_315848);
return statearr_315890;
})();var statearr_315891_315927 = state_315855__$1;(statearr_315891_315927[2] = null);
(statearr_315891_315927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 22))
{var inst_315845 = (state_315855[2]);var state_315855__$1 = state_315855;var statearr_315892_315928 = state_315855__$1;(statearr_315892_315928[2] = inst_315845);
(statearr_315892_315928[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 23))
{var inst_315832 = (state_315855[13]);var inst_315836 = (state_315855[2]);var inst_315837 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_315832);var state_315855__$1 = (function (){var statearr_315893 = state_315855;(statearr_315893[18] = inst_315836);
return statearr_315893;
})();var statearr_315894_315929 = state_315855__$1;(statearr_315894_315929[2] = inst_315837);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315855__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315856 === 24))
{var inst_315784 = (state_315855[7]);var inst_315834 = (state_315855[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_315855,23,Object,null,22);var inst_315841 = cljs.core.async.muxch_STAR_.call(null,inst_315834);var state_315855__$1 = state_315855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315855__$1,25,inst_315841,inst_315784);
} else
{if((state_val_315856 === 25))
{var inst_315843 = (state_315855[2]);var state_315855__$1 = state_315855;var statearr_315895_315930 = state_315855__$1;(statearr_315895_315930[2] = inst_315843);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315855__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_315899 = (new Array(19));(statearr_315899[0] = state_machine__10214__auto__);
(statearr_315899[1] = 1);
return statearr_315899;
});
var state_machine__10214__auto____1 = (function (state_315855){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_315855);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e315900){if((e315900 instanceof Object))
{var ex__10217__auto__ = e315900;var statearr_315901_315931 = state_315855;(statearr_315901_315931[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315855);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e315900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__315932 = state_315855;
state_315855 = G__315932;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_315855){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_315855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_315902 = f__10284__auto__.call(null);(statearr_315902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___315903);
return statearr_315902;
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
,cljs.core.range.call(null,cnt));var c__10283__auto___316069 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_316039){var state_val_316040 = (state_316039[1]);if((state_val_316040 === 1))
{var state_316039__$1 = state_316039;var statearr_316041_316070 = state_316039__$1;(statearr_316041_316070[2] = null);
(statearr_316041_316070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 2))
{var inst_316002 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_316003 = 0;var state_316039__$1 = (function (){var statearr_316042 = state_316039;(statearr_316042[7] = inst_316003);
(statearr_316042[8] = inst_316002);
return statearr_316042;
})();var statearr_316043_316071 = state_316039__$1;(statearr_316043_316071[2] = null);
(statearr_316043_316071[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 3))
{var inst_316037 = (state_316039[2]);var state_316039__$1 = state_316039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_316039__$1,inst_316037);
} else
{if((state_val_316040 === 4))
{var inst_316003 = (state_316039[7]);var inst_316005 = (inst_316003 < cnt);var state_316039__$1 = state_316039;if(cljs.core.truth_(inst_316005))
{var statearr_316044_316072 = state_316039__$1;(statearr_316044_316072[1] = 6);
} else
{var statearr_316045_316073 = state_316039__$1;(statearr_316045_316073[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 5))
{var inst_316023 = (state_316039[2]);var state_316039__$1 = (function (){var statearr_316046 = state_316039;(statearr_316046[9] = inst_316023);
return statearr_316046;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_316039__$1,12,dchan);
} else
{if((state_val_316040 === 6))
{var state_316039__$1 = state_316039;var statearr_316047_316074 = state_316039__$1;(statearr_316047_316074[2] = null);
(statearr_316047_316074[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 7))
{var state_316039__$1 = state_316039;var statearr_316048_316075 = state_316039__$1;(statearr_316048_316075[2] = null);
(statearr_316048_316075[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 8))
{var inst_316021 = (state_316039[2]);var state_316039__$1 = state_316039;var statearr_316049_316076 = state_316039__$1;(statearr_316049_316076[2] = inst_316021);
(statearr_316049_316076[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 9))
{var inst_316003 = (state_316039[7]);var inst_316016 = (state_316039[2]);var inst_316017 = (inst_316003 + 1);var inst_316003__$1 = inst_316017;var state_316039__$1 = (function (){var statearr_316050 = state_316039;(statearr_316050[7] = inst_316003__$1);
(statearr_316050[10] = inst_316016);
return statearr_316050;
})();var statearr_316051_316077 = state_316039__$1;(statearr_316051_316077[2] = null);
(statearr_316051_316077[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 10))
{var inst_316007 = (state_316039[2]);var inst_316008 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_316039__$1 = (function (){var statearr_316052 = state_316039;(statearr_316052[11] = inst_316007);
return statearr_316052;
})();var statearr_316053_316078 = state_316039__$1;(statearr_316053_316078[2] = inst_316008);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_316039__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 11))
{var inst_316003 = (state_316039[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_316039,10,Object,null,9);var inst_316012 = chs__$1.call(null,inst_316003);var inst_316013 = done.call(null,inst_316003);var inst_316014 = cljs.core.async.take_BANG_.call(null,inst_316012,inst_316013);var state_316039__$1 = state_316039;var statearr_316054_316079 = state_316039__$1;(statearr_316054_316079[2] = inst_316014);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_316039__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 12))
{var inst_316025 = (state_316039[12]);var inst_316025__$1 = (state_316039[2]);var inst_316026 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_316025__$1);var state_316039__$1 = (function (){var statearr_316055 = state_316039;(statearr_316055[12] = inst_316025__$1);
return statearr_316055;
})();if(cljs.core.truth_(inst_316026))
{var statearr_316056_316080 = state_316039__$1;(statearr_316056_316080[1] = 13);
} else
{var statearr_316057_316081 = state_316039__$1;(statearr_316057_316081[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 13))
{var inst_316028 = cljs.core.async.close_BANG_.call(null,out);var state_316039__$1 = state_316039;var statearr_316058_316082 = state_316039__$1;(statearr_316058_316082[2] = inst_316028);
(statearr_316058_316082[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 14))
{var inst_316025 = (state_316039[12]);var inst_316030 = cljs.core.apply.call(null,f,inst_316025);var state_316039__$1 = state_316039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_316039__$1,16,out,inst_316030);
} else
{if((state_val_316040 === 15))
{var inst_316035 = (state_316039[2]);var state_316039__$1 = state_316039;var statearr_316059_316083 = state_316039__$1;(statearr_316059_316083[2] = inst_316035);
(statearr_316059_316083[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316040 === 16))
{var inst_316032 = (state_316039[2]);var state_316039__$1 = (function (){var statearr_316060 = state_316039;(statearr_316060[13] = inst_316032);
return statearr_316060;
})();var statearr_316061_316084 = state_316039__$1;(statearr_316061_316084[2] = null);
(statearr_316061_316084[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_316065 = (new Array(14));(statearr_316065[0] = state_machine__10214__auto__);
(statearr_316065[1] = 1);
return statearr_316065;
});
var state_machine__10214__auto____1 = (function (state_316039){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_316039);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e316066){if((e316066 instanceof Object))
{var ex__10217__auto__ = e316066;var statearr_316067_316085 = state_316039;(statearr_316067_316085[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_316039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e316066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__316086 = state_316039;
state_316039 = G__316086;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_316039){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_316039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_316068 = f__10284__auto__.call(null);(statearr_316068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___316069);
return statearr_316068;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___316194 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_316170){var state_val_316171 = (state_316170[1]);if((state_val_316171 === 1))
{var inst_316141 = cljs.core.vec.call(null,chs);var inst_316142 = inst_316141;var state_316170__$1 = (function (){var statearr_316172 = state_316170;(statearr_316172[7] = inst_316142);
return statearr_316172;
})();var statearr_316173_316195 = state_316170__$1;(statearr_316173_316195[2] = null);
(statearr_316173_316195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316171 === 2))
{var inst_316142 = (state_316170[7]);var inst_316144 = cljs.core.count.call(null,inst_316142);var inst_316145 = (inst_316144 > 0);var state_316170__$1 = state_316170;if(cljs.core.truth_(inst_316145))
{var statearr_316174_316196 = state_316170__$1;(statearr_316174_316196[1] = 4);
} else
{var statearr_316175_316197 = state_316170__$1;(statearr_316175_316197[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316171 === 3))
{var inst_316168 = (state_316170[2]);var state_316170__$1 = state_316170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_316170__$1,inst_316168);
} else
{if((state_val_316171 === 4))
{var inst_316142 = (state_316170[7]);var state_316170__$1 = state_316170;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_316170__$1,7,inst_316142);
} else
{if((state_val_316171 === 5))
{var inst_316164 = cljs.core.async.close_BANG_.call(null,out);var state_316170__$1 = state_316170;var statearr_316176_316198 = state_316170__$1;(statearr_316176_316198[2] = inst_316164);
(statearr_316176_316198[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316171 === 6))
{var inst_316166 = (state_316170[2]);var state_316170__$1 = state_316170;var statearr_316177_316199 = state_316170__$1;(statearr_316177_316199[2] = inst_316166);
(statearr_316177_316199[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316171 === 7))
{var inst_316149 = (state_316170[8]);var inst_316150 = (state_316170[9]);var inst_316149__$1 = (state_316170[2]);var inst_316150__$1 = cljs.core.nth.call(null,inst_316149__$1,0,null);var inst_316151 = cljs.core.nth.call(null,inst_316149__$1,1,null);var inst_316152 = (inst_316150__$1 == null);var state_316170__$1 = (function (){var statearr_316178 = state_316170;(statearr_316178[8] = inst_316149__$1);
(statearr_316178[9] = inst_316150__$1);
(statearr_316178[10] = inst_316151);
return statearr_316178;
})();if(cljs.core.truth_(inst_316152))
{var statearr_316179_316200 = state_316170__$1;(statearr_316179_316200[1] = 8);
} else
{var statearr_316180_316201 = state_316170__$1;(statearr_316180_316201[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316171 === 8))
{var inst_316149 = (state_316170[8]);var inst_316142 = (state_316170[7]);var inst_316150 = (state_316170[9]);var inst_316151 = (state_316170[10]);var inst_316154 = (function (){var c = inst_316151;var v = inst_316150;var vec__316147 = inst_316149;var cs = inst_316142;return ((function (c,v,vec__316147,cs,inst_316149,inst_316142,inst_316150,inst_316151,state_val_316171){
return (function (p1__316087_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__316087_SHARP_);
});
;})(c,v,vec__316147,cs,inst_316149,inst_316142,inst_316150,inst_316151,state_val_316171))
})();var inst_316155 = cljs.core.filterv.call(null,inst_316154,inst_316142);var inst_316142__$1 = inst_316155;var state_316170__$1 = (function (){var statearr_316181 = state_316170;(statearr_316181[7] = inst_316142__$1);
return statearr_316181;
})();var statearr_316182_316202 = state_316170__$1;(statearr_316182_316202[2] = null);
(statearr_316182_316202[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316171 === 9))
{var inst_316150 = (state_316170[9]);var state_316170__$1 = state_316170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_316170__$1,11,out,inst_316150);
} else
{if((state_val_316171 === 10))
{var inst_316162 = (state_316170[2]);var state_316170__$1 = state_316170;var statearr_316184_316203 = state_316170__$1;(statearr_316184_316203[2] = inst_316162);
(statearr_316184_316203[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316171 === 11))
{var inst_316142 = (state_316170[7]);var inst_316159 = (state_316170[2]);var tmp316183 = inst_316142;var inst_316142__$1 = tmp316183;var state_316170__$1 = (function (){var statearr_316185 = state_316170;(statearr_316185[7] = inst_316142__$1);
(statearr_316185[11] = inst_316159);
return statearr_316185;
})();var statearr_316186_316204 = state_316170__$1;(statearr_316186_316204[2] = null);
(statearr_316186_316204[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_316190 = (new Array(12));(statearr_316190[0] = state_machine__10214__auto__);
(statearr_316190[1] = 1);
return statearr_316190;
});
var state_machine__10214__auto____1 = (function (state_316170){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_316170);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e316191){if((e316191 instanceof Object))
{var ex__10217__auto__ = e316191;var statearr_316192_316205 = state_316170;(statearr_316192_316205[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_316170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e316191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__316206 = state_316170;
state_316170 = G__316206;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_316170){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_316170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_316193 = f__10284__auto__.call(null);(statearr_316193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___316194);
return statearr_316193;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___316299 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_316276){var state_val_316277 = (state_316276[1]);if((state_val_316277 === 1))
{var inst_316253 = 0;var state_316276__$1 = (function (){var statearr_316278 = state_316276;(statearr_316278[7] = inst_316253);
return statearr_316278;
})();var statearr_316279_316300 = state_316276__$1;(statearr_316279_316300[2] = null);
(statearr_316279_316300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316277 === 2))
{var inst_316253 = (state_316276[7]);var inst_316255 = (inst_316253 < n);var state_316276__$1 = state_316276;if(cljs.core.truth_(inst_316255))
{var statearr_316280_316301 = state_316276__$1;(statearr_316280_316301[1] = 4);
} else
{var statearr_316281_316302 = state_316276__$1;(statearr_316281_316302[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316277 === 3))
{var inst_316273 = (state_316276[2]);var inst_316274 = cljs.core.async.close_BANG_.call(null,out);var state_316276__$1 = (function (){var statearr_316282 = state_316276;(statearr_316282[8] = inst_316273);
return statearr_316282;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_316276__$1,inst_316274);
} else
{if((state_val_316277 === 4))
{var state_316276__$1 = state_316276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_316276__$1,7,ch);
} else
{if((state_val_316277 === 5))
{var state_316276__$1 = state_316276;var statearr_316283_316303 = state_316276__$1;(statearr_316283_316303[2] = null);
(statearr_316283_316303[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316277 === 6))
{var inst_316271 = (state_316276[2]);var state_316276__$1 = state_316276;var statearr_316284_316304 = state_316276__$1;(statearr_316284_316304[2] = inst_316271);
(statearr_316284_316304[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316277 === 7))
{var inst_316258 = (state_316276[9]);var inst_316258__$1 = (state_316276[2]);var inst_316259 = (inst_316258__$1 == null);var inst_316260 = cljs.core.not.call(null,inst_316259);var state_316276__$1 = (function (){var statearr_316285 = state_316276;(statearr_316285[9] = inst_316258__$1);
return statearr_316285;
})();if(inst_316260)
{var statearr_316286_316305 = state_316276__$1;(statearr_316286_316305[1] = 8);
} else
{var statearr_316287_316306 = state_316276__$1;(statearr_316287_316306[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316277 === 8))
{var inst_316258 = (state_316276[9]);var state_316276__$1 = state_316276;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_316276__$1,11,out,inst_316258);
} else
{if((state_val_316277 === 9))
{var state_316276__$1 = state_316276;var statearr_316288_316307 = state_316276__$1;(statearr_316288_316307[2] = null);
(statearr_316288_316307[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316277 === 10))
{var inst_316268 = (state_316276[2]);var state_316276__$1 = state_316276;var statearr_316289_316308 = state_316276__$1;(statearr_316289_316308[2] = inst_316268);
(statearr_316289_316308[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316277 === 11))
{var inst_316253 = (state_316276[7]);var inst_316263 = (state_316276[2]);var inst_316264 = (inst_316253 + 1);var inst_316253__$1 = inst_316264;var state_316276__$1 = (function (){var statearr_316290 = state_316276;(statearr_316290[10] = inst_316263);
(statearr_316290[7] = inst_316253__$1);
return statearr_316290;
})();var statearr_316291_316309 = state_316276__$1;(statearr_316291_316309[2] = null);
(statearr_316291_316309[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_316295 = (new Array(11));(statearr_316295[0] = state_machine__10214__auto__);
(statearr_316295[1] = 1);
return statearr_316295;
});
var state_machine__10214__auto____1 = (function (state_316276){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_316276);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e316296){if((e316296 instanceof Object))
{var ex__10217__auto__ = e316296;var statearr_316297_316310 = state_316276;(statearr_316297_316310[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_316276);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e316296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__316311 = state_316276;
state_316276 = G__316311;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_316276){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_316276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_316298 = f__10284__auto__.call(null);(statearr_316298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___316299);
return statearr_316298;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___316408 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_316383){var state_val_316384 = (state_316383[1]);if((state_val_316384 === 1))
{var inst_316360 = null;var state_316383__$1 = (function (){var statearr_316385 = state_316383;(statearr_316385[7] = inst_316360);
return statearr_316385;
})();var statearr_316386_316409 = state_316383__$1;(statearr_316386_316409[2] = null);
(statearr_316386_316409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316384 === 2))
{var state_316383__$1 = state_316383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_316383__$1,4,ch);
} else
{if((state_val_316384 === 3))
{var inst_316380 = (state_316383[2]);var inst_316381 = cljs.core.async.close_BANG_.call(null,out);var state_316383__$1 = (function (){var statearr_316387 = state_316383;(statearr_316387[8] = inst_316380);
return statearr_316387;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_316383__$1,inst_316381);
} else
{if((state_val_316384 === 4))
{var inst_316363 = (state_316383[9]);var inst_316363__$1 = (state_316383[2]);var inst_316364 = (inst_316363__$1 == null);var inst_316365 = cljs.core.not.call(null,inst_316364);var state_316383__$1 = (function (){var statearr_316388 = state_316383;(statearr_316388[9] = inst_316363__$1);
return statearr_316388;
})();if(inst_316365)
{var statearr_316389_316410 = state_316383__$1;(statearr_316389_316410[1] = 5);
} else
{var statearr_316390_316411 = state_316383__$1;(statearr_316390_316411[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316384 === 5))
{var inst_316360 = (state_316383[7]);var inst_316363 = (state_316383[9]);var inst_316367 = cljs.core._EQ_.call(null,inst_316363,inst_316360);var state_316383__$1 = state_316383;if(inst_316367)
{var statearr_316391_316412 = state_316383__$1;(statearr_316391_316412[1] = 8);
} else
{var statearr_316392_316413 = state_316383__$1;(statearr_316392_316413[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316384 === 6))
{var state_316383__$1 = state_316383;var statearr_316394_316414 = state_316383__$1;(statearr_316394_316414[2] = null);
(statearr_316394_316414[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316384 === 7))
{var inst_316378 = (state_316383[2]);var state_316383__$1 = state_316383;var statearr_316395_316415 = state_316383__$1;(statearr_316395_316415[2] = inst_316378);
(statearr_316395_316415[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316384 === 8))
{var inst_316360 = (state_316383[7]);var tmp316393 = inst_316360;var inst_316360__$1 = tmp316393;var state_316383__$1 = (function (){var statearr_316396 = state_316383;(statearr_316396[7] = inst_316360__$1);
return statearr_316396;
})();var statearr_316397_316416 = state_316383__$1;(statearr_316397_316416[2] = null);
(statearr_316397_316416[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316384 === 9))
{var inst_316363 = (state_316383[9]);var state_316383__$1 = state_316383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_316383__$1,11,out,inst_316363);
} else
{if((state_val_316384 === 10))
{var inst_316375 = (state_316383[2]);var state_316383__$1 = state_316383;var statearr_316398_316417 = state_316383__$1;(statearr_316398_316417[2] = inst_316375);
(statearr_316398_316417[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316384 === 11))
{var inst_316363 = (state_316383[9]);var inst_316372 = (state_316383[2]);var inst_316360 = inst_316363;var state_316383__$1 = (function (){var statearr_316399 = state_316383;(statearr_316399[10] = inst_316372);
(statearr_316399[7] = inst_316360);
return statearr_316399;
})();var statearr_316400_316418 = state_316383__$1;(statearr_316400_316418[2] = null);
(statearr_316400_316418[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_316404 = (new Array(11));(statearr_316404[0] = state_machine__10214__auto__);
(statearr_316404[1] = 1);
return statearr_316404;
});
var state_machine__10214__auto____1 = (function (state_316383){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_316383);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e316405){if((e316405 instanceof Object))
{var ex__10217__auto__ = e316405;var statearr_316406_316419 = state_316383;(statearr_316406_316419[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_316383);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e316405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__316420 = state_316383;
state_316383 = G__316420;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_316383){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_316383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_316407 = f__10284__auto__.call(null);(statearr_316407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___316408);
return statearr_316407;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___316555 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_316525){var state_val_316526 = (state_316525[1]);if((state_val_316526 === 1))
{var inst_316488 = (new Array(n));var inst_316489 = inst_316488;var inst_316490 = 0;var state_316525__$1 = (function (){var statearr_316527 = state_316525;(statearr_316527[7] = inst_316490);
(statearr_316527[8] = inst_316489);
return statearr_316527;
})();var statearr_316528_316556 = state_316525__$1;(statearr_316528_316556[2] = null);
(statearr_316528_316556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316526 === 2))
{var state_316525__$1 = state_316525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_316525__$1,4,ch);
} else
{if((state_val_316526 === 3))
{var inst_316523 = (state_316525[2]);var state_316525__$1 = state_316525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_316525__$1,inst_316523);
} else
{if((state_val_316526 === 4))
{var inst_316493 = (state_316525[9]);var inst_316493__$1 = (state_316525[2]);var inst_316494 = (inst_316493__$1 == null);var inst_316495 = cljs.core.not.call(null,inst_316494);var state_316525__$1 = (function (){var statearr_316529 = state_316525;(statearr_316529[9] = inst_316493__$1);
return statearr_316529;
})();if(inst_316495)
{var statearr_316530_316557 = state_316525__$1;(statearr_316530_316557[1] = 5);
} else
{var statearr_316531_316558 = state_316525__$1;(statearr_316531_316558[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316526 === 5))
{var inst_316490 = (state_316525[7]);var inst_316493 = (state_316525[9]);var inst_316489 = (state_316525[8]);var inst_316498 = (state_316525[10]);var inst_316497 = (inst_316489[inst_316490] = inst_316493);var inst_316498__$1 = (inst_316490 + 1);var inst_316499 = (inst_316498__$1 < n);var state_316525__$1 = (function (){var statearr_316532 = state_316525;(statearr_316532[10] = inst_316498__$1);
(statearr_316532[11] = inst_316497);
return statearr_316532;
})();if(cljs.core.truth_(inst_316499))
{var statearr_316533_316559 = state_316525__$1;(statearr_316533_316559[1] = 8);
} else
{var statearr_316534_316560 = state_316525__$1;(statearr_316534_316560[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316526 === 6))
{var inst_316490 = (state_316525[7]);var inst_316511 = (inst_316490 > 0);var state_316525__$1 = state_316525;if(cljs.core.truth_(inst_316511))
{var statearr_316536_316561 = state_316525__$1;(statearr_316536_316561[1] = 12);
} else
{var statearr_316537_316562 = state_316525__$1;(statearr_316537_316562[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316526 === 7))
{var inst_316521 = (state_316525[2]);var state_316525__$1 = state_316525;var statearr_316538_316563 = state_316525__$1;(statearr_316538_316563[2] = inst_316521);
(statearr_316538_316563[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316526 === 8))
{var inst_316489 = (state_316525[8]);var inst_316498 = (state_316525[10]);var tmp316535 = inst_316489;var inst_316489__$1 = tmp316535;var inst_316490 = inst_316498;var state_316525__$1 = (function (){var statearr_316539 = state_316525;(statearr_316539[7] = inst_316490);
(statearr_316539[8] = inst_316489__$1);
return statearr_316539;
})();var statearr_316540_316564 = state_316525__$1;(statearr_316540_316564[2] = null);
(statearr_316540_316564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316526 === 9))
{var inst_316489 = (state_316525[8]);var inst_316503 = cljs.core.vec.call(null,inst_316489);var state_316525__$1 = state_316525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_316525__$1,11,out,inst_316503);
} else
{if((state_val_316526 === 10))
{var inst_316509 = (state_316525[2]);var state_316525__$1 = state_316525;var statearr_316541_316565 = state_316525__$1;(statearr_316541_316565[2] = inst_316509);
(statearr_316541_316565[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316526 === 11))
{var inst_316505 = (state_316525[2]);var inst_316506 = (new Array(n));var inst_316489 = inst_316506;var inst_316490 = 0;var state_316525__$1 = (function (){var statearr_316542 = state_316525;(statearr_316542[7] = inst_316490);
(statearr_316542[12] = inst_316505);
(statearr_316542[8] = inst_316489);
return statearr_316542;
})();var statearr_316543_316566 = state_316525__$1;(statearr_316543_316566[2] = null);
(statearr_316543_316566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316526 === 12))
{var inst_316489 = (state_316525[8]);var inst_316513 = cljs.core.vec.call(null,inst_316489);var state_316525__$1 = state_316525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_316525__$1,15,out,inst_316513);
} else
{if((state_val_316526 === 13))
{var state_316525__$1 = state_316525;var statearr_316544_316567 = state_316525__$1;(statearr_316544_316567[2] = null);
(statearr_316544_316567[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316526 === 14))
{var inst_316518 = (state_316525[2]);var inst_316519 = cljs.core.async.close_BANG_.call(null,out);var state_316525__$1 = (function (){var statearr_316545 = state_316525;(statearr_316545[13] = inst_316518);
return statearr_316545;
})();var statearr_316546_316568 = state_316525__$1;(statearr_316546_316568[2] = inst_316519);
(statearr_316546_316568[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316526 === 15))
{var inst_316515 = (state_316525[2]);var state_316525__$1 = state_316525;var statearr_316547_316569 = state_316525__$1;(statearr_316547_316569[2] = inst_316515);
(statearr_316547_316569[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_316551 = (new Array(14));(statearr_316551[0] = state_machine__10214__auto__);
(statearr_316551[1] = 1);
return statearr_316551;
});
var state_machine__10214__auto____1 = (function (state_316525){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_316525);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e316552){if((e316552 instanceof Object))
{var ex__10217__auto__ = e316552;var statearr_316553_316570 = state_316525;(statearr_316553_316570[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_316525);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e316552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__316571 = state_316525;
state_316525 = G__316571;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_316525){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_316525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_316554 = f__10284__auto__.call(null);(statearr_316554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___316555);
return statearr_316554;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___316714 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_316684){var state_val_316685 = (state_316684[1]);if((state_val_316685 === 1))
{var inst_316643 = (new Array(0));var inst_316644 = inst_316643;var inst_316645 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_316684__$1 = (function (){var statearr_316686 = state_316684;(statearr_316686[7] = inst_316644);
(statearr_316686[8] = inst_316645);
return statearr_316686;
})();var statearr_316687_316715 = state_316684__$1;(statearr_316687_316715[2] = null);
(statearr_316687_316715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316685 === 2))
{var state_316684__$1 = state_316684;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_316684__$1,4,ch);
} else
{if((state_val_316685 === 3))
{var inst_316682 = (state_316684[2]);var state_316684__$1 = state_316684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_316684__$1,inst_316682);
} else
{if((state_val_316685 === 4))
{var inst_316648 = (state_316684[9]);var inst_316648__$1 = (state_316684[2]);var inst_316649 = (inst_316648__$1 == null);var inst_316650 = cljs.core.not.call(null,inst_316649);var state_316684__$1 = (function (){var statearr_316688 = state_316684;(statearr_316688[9] = inst_316648__$1);
return statearr_316688;
})();if(inst_316650)
{var statearr_316689_316716 = state_316684__$1;(statearr_316689_316716[1] = 5);
} else
{var statearr_316690_316717 = state_316684__$1;(statearr_316690_316717[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316685 === 5))
{var inst_316652 = (state_316684[10]);var inst_316648 = (state_316684[9]);var inst_316645 = (state_316684[8]);var inst_316652__$1 = f.call(null,inst_316648);var inst_316653 = cljs.core._EQ_.call(null,inst_316652__$1,inst_316645);var inst_316654 = cljs.core.keyword_identical_QMARK_.call(null,inst_316645,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_316655 = (inst_316653) || (inst_316654);var state_316684__$1 = (function (){var statearr_316691 = state_316684;(statearr_316691[10] = inst_316652__$1);
return statearr_316691;
})();if(cljs.core.truth_(inst_316655))
{var statearr_316692_316718 = state_316684__$1;(statearr_316692_316718[1] = 8);
} else
{var statearr_316693_316719 = state_316684__$1;(statearr_316693_316719[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316685 === 6))
{var inst_316644 = (state_316684[7]);var inst_316669 = inst_316644.length;var inst_316670 = (inst_316669 > 0);var state_316684__$1 = state_316684;if(cljs.core.truth_(inst_316670))
{var statearr_316695_316720 = state_316684__$1;(statearr_316695_316720[1] = 12);
} else
{var statearr_316696_316721 = state_316684__$1;(statearr_316696_316721[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316685 === 7))
{var inst_316680 = (state_316684[2]);var state_316684__$1 = state_316684;var statearr_316697_316722 = state_316684__$1;(statearr_316697_316722[2] = inst_316680);
(statearr_316697_316722[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316685 === 8))
{var inst_316644 = (state_316684[7]);var inst_316652 = (state_316684[10]);var inst_316648 = (state_316684[9]);var inst_316657 = inst_316644.push(inst_316648);var tmp316694 = inst_316644;var inst_316644__$1 = tmp316694;var inst_316645 = inst_316652;var state_316684__$1 = (function (){var statearr_316698 = state_316684;(statearr_316698[7] = inst_316644__$1);
(statearr_316698[11] = inst_316657);
(statearr_316698[8] = inst_316645);
return statearr_316698;
})();var statearr_316699_316723 = state_316684__$1;(statearr_316699_316723[2] = null);
(statearr_316699_316723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316685 === 9))
{var inst_316644 = (state_316684[7]);var inst_316660 = cljs.core.vec.call(null,inst_316644);var state_316684__$1 = state_316684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_316684__$1,11,out,inst_316660);
} else
{if((state_val_316685 === 10))
{var inst_316667 = (state_316684[2]);var state_316684__$1 = state_316684;var statearr_316700_316724 = state_316684__$1;(statearr_316700_316724[2] = inst_316667);
(statearr_316700_316724[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316685 === 11))
{var inst_316652 = (state_316684[10]);var inst_316648 = (state_316684[9]);var inst_316662 = (state_316684[2]);var inst_316663 = (new Array(0));var inst_316664 = inst_316663.push(inst_316648);var inst_316644 = inst_316663;var inst_316645 = inst_316652;var state_316684__$1 = (function (){var statearr_316701 = state_316684;(statearr_316701[12] = inst_316664);
(statearr_316701[13] = inst_316662);
(statearr_316701[7] = inst_316644);
(statearr_316701[8] = inst_316645);
return statearr_316701;
})();var statearr_316702_316725 = state_316684__$1;(statearr_316702_316725[2] = null);
(statearr_316702_316725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316685 === 12))
{var inst_316644 = (state_316684[7]);var inst_316672 = cljs.core.vec.call(null,inst_316644);var state_316684__$1 = state_316684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_316684__$1,15,out,inst_316672);
} else
{if((state_val_316685 === 13))
{var state_316684__$1 = state_316684;var statearr_316703_316726 = state_316684__$1;(statearr_316703_316726[2] = null);
(statearr_316703_316726[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316685 === 14))
{var inst_316677 = (state_316684[2]);var inst_316678 = cljs.core.async.close_BANG_.call(null,out);var state_316684__$1 = (function (){var statearr_316704 = state_316684;(statearr_316704[14] = inst_316677);
return statearr_316704;
})();var statearr_316705_316727 = state_316684__$1;(statearr_316705_316727[2] = inst_316678);
(statearr_316705_316727[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_316685 === 15))
{var inst_316674 = (state_316684[2]);var state_316684__$1 = state_316684;var statearr_316706_316728 = state_316684__$1;(statearr_316706_316728[2] = inst_316674);
(statearr_316706_316728[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_316710 = (new Array(15));(statearr_316710[0] = state_machine__10214__auto__);
(statearr_316710[1] = 1);
return statearr_316710;
});
var state_machine__10214__auto____1 = (function (state_316684){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_316684);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e316711){if((e316711 instanceof Object))
{var ex__10217__auto__ = e316711;var statearr_316712_316729 = state_316684;(statearr_316712_316729[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_316684);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e316711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__316730 = state_316684;
state_316684 = G__316730;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_316684){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_316684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_316713 = f__10284__auto__.call(null);(statearr_316713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___316714);
return statearr_316713;
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
