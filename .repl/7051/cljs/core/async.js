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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t29924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29924 = (function (f,fn_handler,meta29925){
this.f = f;
this.fn_handler = fn_handler;
this.meta29925 = meta29925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29924.cljs$lang$type = true;
cljs.core.async.t29924.cljs$lang$ctorStr = "cljs.core.async/t29924";
cljs.core.async.t29924.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t29924");
});
cljs.core.async.t29924.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t29924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t29924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29926){var self__ = this;
var _29926__$1 = this;return self__.meta29925;
});
cljs.core.async.t29924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29926,meta29925__$1){var self__ = this;
var _29926__$1 = this;return (new cljs.core.async.t29924(self__.f,self__.fn_handler,meta29925__$1));
});
cljs.core.async.__GT_t29924 = (function __GT_t29924(f__$1,fn_handler__$1,meta29925){return (new cljs.core.async.t29924(f__$1,fn_handler__$1,meta29925));
});
}
return (new cljs.core.async.t29924(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__29928 = buff;if(G__29928)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__29928.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__29928.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29928);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29928);
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
{var val_29929 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_29929);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_29929);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7430__auto__ = ret;if(cljs.core.truth_(and__7430__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7430__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8228__auto___29930 = n;var x_29931 = 0;while(true){
if((x_29931 < n__8228__auto___29930))
{(a[x_29931] = 0);
{
var G__29932 = (x_29931 + 1);
x_29931 = G__29932;
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
var G__29933 = (i + 1);
i = G__29933;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t29937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29937 = (function (flag,alt_flag,meta29938){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29938 = meta29938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29937.cljs$lang$type = true;
cljs.core.async.t29937.cljs$lang$ctorStr = "cljs.core.async/t29937";
cljs.core.async.t29937.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t29937");
});
cljs.core.async.t29937.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t29937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t29937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29939){var self__ = this;
var _29939__$1 = this;return self__.meta29938;
});
cljs.core.async.t29937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29939,meta29938__$1){var self__ = this;
var _29939__$1 = this;return (new cljs.core.async.t29937(self__.flag,self__.alt_flag,meta29938__$1));
});
cljs.core.async.__GT_t29937 = (function __GT_t29937(flag__$1,alt_flag__$1,meta29938){return (new cljs.core.async.t29937(flag__$1,alt_flag__$1,meta29938));
});
}
return (new cljs.core.async.t29937(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t29943 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29943 = (function (cb,flag,alt_handler,meta29944){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29944 = meta29944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29943.cljs$lang$type = true;
cljs.core.async.t29943.cljs$lang$ctorStr = "cljs.core.async/t29943";
cljs.core.async.t29943.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t29943");
});
cljs.core.async.t29943.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t29943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t29943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29945){var self__ = this;
var _29945__$1 = this;return self__.meta29944;
});
cljs.core.async.t29943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29945,meta29944__$1){var self__ = this;
var _29945__$1 = this;return (new cljs.core.async.t29943(self__.cb,self__.flag,self__.alt_handler,meta29944__$1));
});
cljs.core.async.__GT_t29943 = (function __GT_t29943(cb__$1,flag__$1,alt_handler__$1,meta29944){return (new cljs.core.async.t29943(cb__$1,flag__$1,alt_handler__$1,meta29944));
});
}
return (new cljs.core.async.t29943(cb,flag,alt_handler,null));
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
return (function (p1__29946_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__29946_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__7439__auto__ = wport;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__29947 = (i + 1);
i = G__29947;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7439__auto__ = ret;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7430__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7430__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7430__auto__;
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
var alts_BANG___delegate = function (ports,p__29948){var map__29950 = p__29948;var map__29950__$1 = ((cljs.core.seq_QMARK_.call(null,map__29950))?cljs.core.apply.call(null,cljs.core.hash_map,map__29950):map__29950);var opts = map__29950__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__29948 = null;if (arguments.length > 1) {
  p__29948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__29948);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29951){
var ports = cljs.core.first(arglist__29951);
var p__29948 = cljs.core.rest(arglist__29951);
return alts_BANG___delegate(ports,p__29948);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t29959 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29959 = (function (ch,f,map_LT_,meta29960){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29960 = meta29960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29959.cljs$lang$type = true;
cljs.core.async.t29959.cljs$lang$ctorStr = "cljs.core.async/t29959";
cljs.core.async.t29959.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t29959");
});
cljs.core.async.t29959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t29959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t29962 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29962 = (function (fn1,_,meta29960,ch,f,map_LT_,meta29963){
this.fn1 = fn1;
this._ = _;
this.meta29960 = meta29960;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29963 = meta29963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29962.cljs$lang$type = true;
cljs.core.async.t29962.cljs$lang$ctorStr = "cljs.core.async/t29962";
cljs.core.async.t29962.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t29962");
});
cljs.core.async.t29962.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t29962.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t29962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__29952_SHARP_){return f1.call(null,(((p1__29952_SHARP_ == null))?null:self__.f.call(null,p1__29952_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t29962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29964){var self__ = this;
var _29964__$1 = this;return self__.meta29963;
});
cljs.core.async.t29962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29964,meta29963__$1){var self__ = this;
var _29964__$1 = this;return (new cljs.core.async.t29962(self__.fn1,self__._,self__.meta29960,self__.ch,self__.f,self__.map_LT_,meta29963__$1));
});
cljs.core.async.__GT_t29962 = (function __GT_t29962(fn1__$1,___$2,meta29960__$1,ch__$2,f__$2,map_LT___$2,meta29963){return (new cljs.core.async.t29962(fn1__$1,___$2,meta29960__$1,ch__$2,f__$2,map_LT___$2,meta29963));
});
}
return (new cljs.core.async.t29962(fn1,___$1,self__.meta29960,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7430__auto__ = ret;if(cljs.core.truth_(and__7430__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7430__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t29959.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29961){var self__ = this;
var _29961__$1 = this;return self__.meta29960;
});
cljs.core.async.t29959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29961,meta29960__$1){var self__ = this;
var _29961__$1 = this;return (new cljs.core.async.t29959(self__.ch,self__.f,self__.map_LT_,meta29960__$1));
});
cljs.core.async.__GT_t29959 = (function __GT_t29959(ch__$1,f__$1,map_LT___$1,meta29960){return (new cljs.core.async.t29959(ch__$1,f__$1,map_LT___$1,meta29960));
});
}
return (new cljs.core.async.t29959(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t29968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29968 = (function (ch,f,map_GT_,meta29969){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29969 = meta29969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29968.cljs$lang$type = true;
cljs.core.async.t29968.cljs$lang$ctorStr = "cljs.core.async/t29968";
cljs.core.async.t29968.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t29968");
});
cljs.core.async.t29968.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t29968.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29968.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29970){var self__ = this;
var _29970__$1 = this;return self__.meta29969;
});
cljs.core.async.t29968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29970,meta29969__$1){var self__ = this;
var _29970__$1 = this;return (new cljs.core.async.t29968(self__.ch,self__.f,self__.map_GT_,meta29969__$1));
});
cljs.core.async.__GT_t29968 = (function __GT_t29968(ch__$1,f__$1,map_GT___$1,meta29969){return (new cljs.core.async.t29968(ch__$1,f__$1,map_GT___$1,meta29969));
});
}
return (new cljs.core.async.t29968(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t29974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29974 = (function (ch,p,filter_GT_,meta29975){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29975 = meta29975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29974.cljs$lang$type = true;
cljs.core.async.t29974.cljs$lang$ctorStr = "cljs.core.async/t29974";
cljs.core.async.t29974.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t29974");
});
cljs.core.async.t29974.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29974.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t29974.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29974.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29974.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29974.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29976){var self__ = this;
var _29976__$1 = this;return self__.meta29975;
});
cljs.core.async.t29974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29976,meta29975__$1){var self__ = this;
var _29976__$1 = this;return (new cljs.core.async.t29974(self__.ch,self__.p,self__.filter_GT_,meta29975__$1));
});
cljs.core.async.__GT_t29974 = (function __GT_t29974(ch__$1,p__$1,filter_GT___$1,meta29975){return (new cljs.core.async.t29974(ch__$1,p__$1,filter_GT___$1,meta29975));
});
}
return (new cljs.core.async.t29974(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___30059 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_30038){var state_val_30039 = (state_30038[1]);if((state_val_30039 === 1))
{var state_30038__$1 = state_30038;var statearr_30040_30060 = state_30038__$1;(statearr_30040_30060[2] = null);
(statearr_30040_30060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30039 === 2))
{var state_30038__$1 = state_30038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30038__$1,4,ch);
} else
{if((state_val_30039 === 3))
{var inst_30036 = (state_30038[2]);var state_30038__$1 = state_30038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30038__$1,inst_30036);
} else
{if((state_val_30039 === 4))
{var inst_30020 = (state_30038[7]);var inst_30020__$1 = (state_30038[2]);var inst_30021 = (inst_30020__$1 == null);var state_30038__$1 = (function (){var statearr_30041 = state_30038;(statearr_30041[7] = inst_30020__$1);
return statearr_30041;
})();if(cljs.core.truth_(inst_30021))
{var statearr_30042_30061 = state_30038__$1;(statearr_30042_30061[1] = 5);
} else
{var statearr_30043_30062 = state_30038__$1;(statearr_30043_30062[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30039 === 5))
{var inst_30023 = cljs.core.async.close_BANG_.call(null,out);var state_30038__$1 = state_30038;var statearr_30044_30063 = state_30038__$1;(statearr_30044_30063[2] = inst_30023);
(statearr_30044_30063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30039 === 6))
{var inst_30020 = (state_30038[7]);var inst_30025 = p.call(null,inst_30020);var state_30038__$1 = state_30038;if(cljs.core.truth_(inst_30025))
{var statearr_30045_30064 = state_30038__$1;(statearr_30045_30064[1] = 8);
} else
{var statearr_30046_30065 = state_30038__$1;(statearr_30046_30065[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30039 === 7))
{var inst_30034 = (state_30038[2]);var state_30038__$1 = state_30038;var statearr_30047_30066 = state_30038__$1;(statearr_30047_30066[2] = inst_30034);
(statearr_30047_30066[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30039 === 8))
{var inst_30020 = (state_30038[7]);var state_30038__$1 = state_30038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30038__$1,11,out,inst_30020);
} else
{if((state_val_30039 === 9))
{var state_30038__$1 = state_30038;var statearr_30048_30067 = state_30038__$1;(statearr_30048_30067[2] = null);
(statearr_30048_30067[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30039 === 10))
{var inst_30031 = (state_30038[2]);var state_30038__$1 = (function (){var statearr_30049 = state_30038;(statearr_30049[8] = inst_30031);
return statearr_30049;
})();var statearr_30050_30068 = state_30038__$1;(statearr_30050_30068[2] = null);
(statearr_30050_30068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30039 === 11))
{var inst_30028 = (state_30038[2]);var state_30038__$1 = state_30038;var statearr_30051_30069 = state_30038__$1;(statearr_30051_30069[2] = inst_30028);
(statearr_30051_30069[1] = 10);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_30055 = (new Array(9));(statearr_30055[0] = state_machine__11439__auto__);
(statearr_30055[1] = 1);
return statearr_30055;
});
var state_machine__11439__auto____1 = (function (state_30038){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_30038);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e30056){if((e30056 instanceof Object))
{var ex__11442__auto__ = e30056;var statearr_30057_30070 = state_30038;(statearr_30057_30070[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30038);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30071 = state_30038;
state_30038 = G__30071;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_30038){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_30038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_30058 = f__11509__auto__.call(null);(statearr_30058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___30059);
return statearr_30058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_30223){var state_val_30224 = (state_30223[1]);if((state_val_30224 === 1))
{var state_30223__$1 = state_30223;var statearr_30225_30262 = state_30223__$1;(statearr_30225_30262[2] = null);
(statearr_30225_30262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 2))
{var state_30223__$1 = state_30223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30223__$1,4,in$);
} else
{if((state_val_30224 === 3))
{var inst_30221 = (state_30223[2]);var state_30223__$1 = state_30223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30223__$1,inst_30221);
} else
{if((state_val_30224 === 4))
{var inst_30169 = (state_30223[7]);var inst_30169__$1 = (state_30223[2]);var inst_30170 = (inst_30169__$1 == null);var state_30223__$1 = (function (){var statearr_30226 = state_30223;(statearr_30226[7] = inst_30169__$1);
return statearr_30226;
})();if(cljs.core.truth_(inst_30170))
{var statearr_30227_30263 = state_30223__$1;(statearr_30227_30263[1] = 5);
} else
{var statearr_30228_30264 = state_30223__$1;(statearr_30228_30264[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 5))
{var inst_30172 = cljs.core.async.close_BANG_.call(null,out);var state_30223__$1 = state_30223;var statearr_30229_30265 = state_30223__$1;(statearr_30229_30265[2] = inst_30172);
(statearr_30229_30265[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 6))
{var inst_30169 = (state_30223[7]);var inst_30174 = f.call(null,inst_30169);var inst_30179 = cljs.core.seq.call(null,inst_30174);var inst_30180 = inst_30179;var inst_30181 = null;var inst_30182 = 0;var inst_30183 = 0;var state_30223__$1 = (function (){var statearr_30230 = state_30223;(statearr_30230[8] = inst_30183);
(statearr_30230[9] = inst_30181);
(statearr_30230[10] = inst_30182);
(statearr_30230[11] = inst_30180);
return statearr_30230;
})();var statearr_30231_30266 = state_30223__$1;(statearr_30231_30266[2] = null);
(statearr_30231_30266[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 7))
{var inst_30219 = (state_30223[2]);var state_30223__$1 = state_30223;var statearr_30232_30267 = state_30223__$1;(statearr_30232_30267[2] = inst_30219);
(statearr_30232_30267[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 8))
{var inst_30183 = (state_30223[8]);var inst_30182 = (state_30223[10]);var inst_30185 = (inst_30183 < inst_30182);var inst_30186 = inst_30185;var state_30223__$1 = state_30223;if(cljs.core.truth_(inst_30186))
{var statearr_30233_30268 = state_30223__$1;(statearr_30233_30268[1] = 10);
} else
{var statearr_30234_30269 = state_30223__$1;(statearr_30234_30269[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 9))
{var inst_30216 = (state_30223[2]);var state_30223__$1 = (function (){var statearr_30235 = state_30223;(statearr_30235[12] = inst_30216);
return statearr_30235;
})();var statearr_30236_30270 = state_30223__$1;(statearr_30236_30270[2] = null);
(statearr_30236_30270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 10))
{var inst_30183 = (state_30223[8]);var inst_30181 = (state_30223[9]);var inst_30188 = cljs.core._nth.call(null,inst_30181,inst_30183);var state_30223__$1 = state_30223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30223__$1,13,out,inst_30188);
} else
{if((state_val_30224 === 11))
{var inst_30180 = (state_30223[11]);var inst_30194 = (state_30223[13]);var inst_30194__$1 = cljs.core.seq.call(null,inst_30180);var state_30223__$1 = (function (){var statearr_30240 = state_30223;(statearr_30240[13] = inst_30194__$1);
return statearr_30240;
})();if(inst_30194__$1)
{var statearr_30241_30271 = state_30223__$1;(statearr_30241_30271[1] = 14);
} else
{var statearr_30242_30272 = state_30223__$1;(statearr_30242_30272[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 12))
{var inst_30214 = (state_30223[2]);var state_30223__$1 = state_30223;var statearr_30243_30273 = state_30223__$1;(statearr_30243_30273[2] = inst_30214);
(statearr_30243_30273[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 13))
{var inst_30183 = (state_30223[8]);var inst_30181 = (state_30223[9]);var inst_30182 = (state_30223[10]);var inst_30180 = (state_30223[11]);var inst_30190 = (state_30223[2]);var inst_30191 = (inst_30183 + 1);var tmp30237 = inst_30181;var tmp30238 = inst_30182;var tmp30239 = inst_30180;var inst_30180__$1 = tmp30239;var inst_30181__$1 = tmp30237;var inst_30182__$1 = tmp30238;var inst_30183__$1 = inst_30191;var state_30223__$1 = (function (){var statearr_30244 = state_30223;(statearr_30244[8] = inst_30183__$1);
(statearr_30244[9] = inst_30181__$1);
(statearr_30244[10] = inst_30182__$1);
(statearr_30244[11] = inst_30180__$1);
(statearr_30244[14] = inst_30190);
return statearr_30244;
})();var statearr_30245_30274 = state_30223__$1;(statearr_30245_30274[2] = null);
(statearr_30245_30274[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 14))
{var inst_30194 = (state_30223[13]);var inst_30196 = cljs.core.chunked_seq_QMARK_.call(null,inst_30194);var state_30223__$1 = state_30223;if(inst_30196)
{var statearr_30246_30275 = state_30223__$1;(statearr_30246_30275[1] = 17);
} else
{var statearr_30247_30276 = state_30223__$1;(statearr_30247_30276[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 15))
{var state_30223__$1 = state_30223;var statearr_30248_30277 = state_30223__$1;(statearr_30248_30277[2] = null);
(statearr_30248_30277[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 16))
{var inst_30212 = (state_30223[2]);var state_30223__$1 = state_30223;var statearr_30249_30278 = state_30223__$1;(statearr_30249_30278[2] = inst_30212);
(statearr_30249_30278[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 17))
{var inst_30194 = (state_30223[13]);var inst_30198 = cljs.core.chunk_first.call(null,inst_30194);var inst_30199 = cljs.core.chunk_rest.call(null,inst_30194);var inst_30200 = cljs.core.count.call(null,inst_30198);var inst_30180 = inst_30199;var inst_30181 = inst_30198;var inst_30182 = inst_30200;var inst_30183 = 0;var state_30223__$1 = (function (){var statearr_30250 = state_30223;(statearr_30250[8] = inst_30183);
(statearr_30250[9] = inst_30181);
(statearr_30250[10] = inst_30182);
(statearr_30250[11] = inst_30180);
return statearr_30250;
})();var statearr_30251_30279 = state_30223__$1;(statearr_30251_30279[2] = null);
(statearr_30251_30279[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 18))
{var inst_30194 = (state_30223[13]);var inst_30203 = cljs.core.first.call(null,inst_30194);var state_30223__$1 = state_30223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30223__$1,20,out,inst_30203);
} else
{if((state_val_30224 === 19))
{var inst_30209 = (state_30223[2]);var state_30223__$1 = state_30223;var statearr_30252_30280 = state_30223__$1;(statearr_30252_30280[2] = inst_30209);
(statearr_30252_30280[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30224 === 20))
{var inst_30194 = (state_30223[13]);var inst_30205 = (state_30223[2]);var inst_30206 = cljs.core.next.call(null,inst_30194);var inst_30180 = inst_30206;var inst_30181 = null;var inst_30182 = 0;var inst_30183 = 0;var state_30223__$1 = (function (){var statearr_30253 = state_30223;(statearr_30253[8] = inst_30183);
(statearr_30253[9] = inst_30181);
(statearr_30253[10] = inst_30182);
(statearr_30253[11] = inst_30180);
(statearr_30253[15] = inst_30205);
return statearr_30253;
})();var statearr_30254_30281 = state_30223__$1;(statearr_30254_30281[2] = null);
(statearr_30254_30281[1] = 8);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_30258 = (new Array(16));(statearr_30258[0] = state_machine__11439__auto__);
(statearr_30258[1] = 1);
return statearr_30258;
});
var state_machine__11439__auto____1 = (function (state_30223){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_30223);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e30259){if((e30259 instanceof Object))
{var ex__11442__auto__ = e30259;var statearr_30260_30282 = state_30223;(statearr_30260_30282[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30223);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30283 = state_30223;
state_30223 = G__30283;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_30223){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_30223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_30261 = f__11509__auto__.call(null);(statearr_30261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_30261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11508__auto___30364 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_30343){var state_val_30344 = (state_30343[1]);if((state_val_30344 === 1))
{var state_30343__$1 = state_30343;var statearr_30345_30365 = state_30343__$1;(statearr_30345_30365[2] = null);
(statearr_30345_30365[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30344 === 2))
{var state_30343__$1 = state_30343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30343__$1,4,from);
} else
{if((state_val_30344 === 3))
{var inst_30341 = (state_30343[2]);var state_30343__$1 = state_30343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30343__$1,inst_30341);
} else
{if((state_val_30344 === 4))
{var inst_30326 = (state_30343[7]);var inst_30326__$1 = (state_30343[2]);var inst_30327 = (inst_30326__$1 == null);var state_30343__$1 = (function (){var statearr_30346 = state_30343;(statearr_30346[7] = inst_30326__$1);
return statearr_30346;
})();if(cljs.core.truth_(inst_30327))
{var statearr_30347_30366 = state_30343__$1;(statearr_30347_30366[1] = 5);
} else
{var statearr_30348_30367 = state_30343__$1;(statearr_30348_30367[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30344 === 5))
{var state_30343__$1 = state_30343;if(cljs.core.truth_(close_QMARK_))
{var statearr_30349_30368 = state_30343__$1;(statearr_30349_30368[1] = 8);
} else
{var statearr_30350_30369 = state_30343__$1;(statearr_30350_30369[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30344 === 6))
{var inst_30326 = (state_30343[7]);var state_30343__$1 = state_30343;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30343__$1,11,to,inst_30326);
} else
{if((state_val_30344 === 7))
{var inst_30339 = (state_30343[2]);var state_30343__$1 = state_30343;var statearr_30351_30370 = state_30343__$1;(statearr_30351_30370[2] = inst_30339);
(statearr_30351_30370[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30344 === 8))
{var inst_30330 = cljs.core.async.close_BANG_.call(null,to);var state_30343__$1 = state_30343;var statearr_30352_30371 = state_30343__$1;(statearr_30352_30371[2] = inst_30330);
(statearr_30352_30371[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30344 === 9))
{var state_30343__$1 = state_30343;var statearr_30353_30372 = state_30343__$1;(statearr_30353_30372[2] = null);
(statearr_30353_30372[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30344 === 10))
{var inst_30333 = (state_30343[2]);var state_30343__$1 = state_30343;var statearr_30354_30373 = state_30343__$1;(statearr_30354_30373[2] = inst_30333);
(statearr_30354_30373[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30344 === 11))
{var inst_30336 = (state_30343[2]);var state_30343__$1 = (function (){var statearr_30355 = state_30343;(statearr_30355[8] = inst_30336);
return statearr_30355;
})();var statearr_30356_30374 = state_30343__$1;(statearr_30356_30374[2] = null);
(statearr_30356_30374[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_30360 = (new Array(9));(statearr_30360[0] = state_machine__11439__auto__);
(statearr_30360[1] = 1);
return statearr_30360;
});
var state_machine__11439__auto____1 = (function (state_30343){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_30343);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e30361){if((e30361 instanceof Object))
{var ex__11442__auto__ = e30361;var statearr_30362_30375 = state_30343;(statearr_30362_30375[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30343);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30376 = state_30343;
state_30343 = G__30376;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_30343){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_30343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_30363 = f__11509__auto__.call(null);(statearr_30363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___30364);
return statearr_30363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11508__auto___30463 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_30441){var state_val_30442 = (state_30441[1]);if((state_val_30442 === 1))
{var state_30441__$1 = state_30441;var statearr_30443_30464 = state_30441__$1;(statearr_30443_30464[2] = null);
(statearr_30443_30464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30442 === 2))
{var state_30441__$1 = state_30441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30441__$1,4,ch);
} else
{if((state_val_30442 === 3))
{var inst_30439 = (state_30441[2]);var state_30441__$1 = state_30441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30441__$1,inst_30439);
} else
{if((state_val_30442 === 4))
{var inst_30422 = (state_30441[7]);var inst_30422__$1 = (state_30441[2]);var inst_30423 = (inst_30422__$1 == null);var state_30441__$1 = (function (){var statearr_30444 = state_30441;(statearr_30444[7] = inst_30422__$1);
return statearr_30444;
})();if(cljs.core.truth_(inst_30423))
{var statearr_30445_30465 = state_30441__$1;(statearr_30445_30465[1] = 5);
} else
{var statearr_30446_30466 = state_30441__$1;(statearr_30446_30466[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30442 === 5))
{var inst_30425 = cljs.core.async.close_BANG_.call(null,tc);var inst_30426 = cljs.core.async.close_BANG_.call(null,fc);var state_30441__$1 = (function (){var statearr_30447 = state_30441;(statearr_30447[8] = inst_30425);
return statearr_30447;
})();var statearr_30448_30467 = state_30441__$1;(statearr_30448_30467[2] = inst_30426);
(statearr_30448_30467[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30442 === 6))
{var inst_30422 = (state_30441[7]);var inst_30428 = p.call(null,inst_30422);var state_30441__$1 = state_30441;if(cljs.core.truth_(inst_30428))
{var statearr_30449_30468 = state_30441__$1;(statearr_30449_30468[1] = 9);
} else
{var statearr_30450_30469 = state_30441__$1;(statearr_30450_30469[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30442 === 7))
{var inst_30437 = (state_30441[2]);var state_30441__$1 = state_30441;var statearr_30451_30470 = state_30441__$1;(statearr_30451_30470[2] = inst_30437);
(statearr_30451_30470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30442 === 8))
{var inst_30434 = (state_30441[2]);var state_30441__$1 = (function (){var statearr_30452 = state_30441;(statearr_30452[9] = inst_30434);
return statearr_30452;
})();var statearr_30453_30471 = state_30441__$1;(statearr_30453_30471[2] = null);
(statearr_30453_30471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30442 === 9))
{var state_30441__$1 = state_30441;var statearr_30454_30472 = state_30441__$1;(statearr_30454_30472[2] = tc);
(statearr_30454_30472[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30442 === 10))
{var state_30441__$1 = state_30441;var statearr_30455_30473 = state_30441__$1;(statearr_30455_30473[2] = fc);
(statearr_30455_30473[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30442 === 11))
{var inst_30422 = (state_30441[7]);var inst_30432 = (state_30441[2]);var state_30441__$1 = state_30441;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30441__$1,8,inst_30432,inst_30422);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_30459 = (new Array(10));(statearr_30459[0] = state_machine__11439__auto__);
(statearr_30459[1] = 1);
return statearr_30459;
});
var state_machine__11439__auto____1 = (function (state_30441){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_30441);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e30460){if((e30460 instanceof Object))
{var ex__11442__auto__ = e30460;var statearr_30461_30474 = state_30441;(statearr_30461_30474[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30441);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30475 = state_30441;
state_30441 = G__30475;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_30441){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_30441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_30462 = f__11509__auto__.call(null);(statearr_30462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___30463);
return statearr_30462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_30522){var state_val_30523 = (state_30522[1]);if((state_val_30523 === 7))
{var inst_30518 = (state_30522[2]);var state_30522__$1 = state_30522;var statearr_30524_30540 = state_30522__$1;(statearr_30524_30540[2] = inst_30518);
(statearr_30524_30540[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30523 === 6))
{var inst_30508 = (state_30522[7]);var inst_30511 = (state_30522[8]);var inst_30515 = f.call(null,inst_30508,inst_30511);var inst_30508__$1 = inst_30515;var state_30522__$1 = (function (){var statearr_30525 = state_30522;(statearr_30525[7] = inst_30508__$1);
return statearr_30525;
})();var statearr_30526_30541 = state_30522__$1;(statearr_30526_30541[2] = null);
(statearr_30526_30541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30523 === 5))
{var inst_30508 = (state_30522[7]);var state_30522__$1 = state_30522;var statearr_30527_30542 = state_30522__$1;(statearr_30527_30542[2] = inst_30508);
(statearr_30527_30542[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30523 === 4))
{var inst_30511 = (state_30522[8]);var inst_30511__$1 = (state_30522[2]);var inst_30512 = (inst_30511__$1 == null);var state_30522__$1 = (function (){var statearr_30528 = state_30522;(statearr_30528[8] = inst_30511__$1);
return statearr_30528;
})();if(cljs.core.truth_(inst_30512))
{var statearr_30529_30543 = state_30522__$1;(statearr_30529_30543[1] = 5);
} else
{var statearr_30530_30544 = state_30522__$1;(statearr_30530_30544[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30523 === 3))
{var inst_30520 = (state_30522[2]);var state_30522__$1 = state_30522;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30522__$1,inst_30520);
} else
{if((state_val_30523 === 2))
{var state_30522__$1 = state_30522;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30522__$1,4,ch);
} else
{if((state_val_30523 === 1))
{var inst_30508 = init;var state_30522__$1 = (function (){var statearr_30531 = state_30522;(statearr_30531[7] = inst_30508);
return statearr_30531;
})();var statearr_30532_30545 = state_30522__$1;(statearr_30532_30545[2] = null);
(statearr_30532_30545[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_30536 = (new Array(9));(statearr_30536[0] = state_machine__11439__auto__);
(statearr_30536[1] = 1);
return statearr_30536;
});
var state_machine__11439__auto____1 = (function (state_30522){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_30522);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e30537){if((e30537 instanceof Object))
{var ex__11442__auto__ = e30537;var statearr_30538_30546 = state_30522;(statearr_30538_30546[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30522);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30547 = state_30522;
state_30522 = G__30547;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_30522){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_30522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_30539 = f__11509__auto__.call(null);(statearr_30539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_30539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_30609){var state_val_30610 = (state_30609[1]);if((state_val_30610 === 1))
{var inst_30589 = cljs.core.seq.call(null,coll);var inst_30590 = inst_30589;var state_30609__$1 = (function (){var statearr_30611 = state_30609;(statearr_30611[7] = inst_30590);
return statearr_30611;
})();var statearr_30612_30630 = state_30609__$1;(statearr_30612_30630[2] = null);
(statearr_30612_30630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30610 === 2))
{var inst_30590 = (state_30609[7]);var state_30609__$1 = state_30609;if(cljs.core.truth_(inst_30590))
{var statearr_30613_30631 = state_30609__$1;(statearr_30613_30631[1] = 4);
} else
{var statearr_30614_30632 = state_30609__$1;(statearr_30614_30632[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30610 === 3))
{var inst_30607 = (state_30609[2]);var state_30609__$1 = state_30609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30609__$1,inst_30607);
} else
{if((state_val_30610 === 4))
{var inst_30590 = (state_30609[7]);var inst_30593 = cljs.core.first.call(null,inst_30590);var state_30609__$1 = state_30609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30609__$1,7,ch,inst_30593);
} else
{if((state_val_30610 === 5))
{var state_30609__$1 = state_30609;if(cljs.core.truth_(close_QMARK_))
{var statearr_30615_30633 = state_30609__$1;(statearr_30615_30633[1] = 8);
} else
{var statearr_30616_30634 = state_30609__$1;(statearr_30616_30634[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30610 === 6))
{var inst_30605 = (state_30609[2]);var state_30609__$1 = state_30609;var statearr_30617_30635 = state_30609__$1;(statearr_30617_30635[2] = inst_30605);
(statearr_30617_30635[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30610 === 7))
{var inst_30590 = (state_30609[7]);var inst_30595 = (state_30609[2]);var inst_30596 = cljs.core.next.call(null,inst_30590);var inst_30590__$1 = inst_30596;var state_30609__$1 = (function (){var statearr_30618 = state_30609;(statearr_30618[8] = inst_30595);
(statearr_30618[7] = inst_30590__$1);
return statearr_30618;
})();var statearr_30619_30636 = state_30609__$1;(statearr_30619_30636[2] = null);
(statearr_30619_30636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30610 === 8))
{var inst_30600 = cljs.core.async.close_BANG_.call(null,ch);var state_30609__$1 = state_30609;var statearr_30620_30637 = state_30609__$1;(statearr_30620_30637[2] = inst_30600);
(statearr_30620_30637[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30610 === 9))
{var state_30609__$1 = state_30609;var statearr_30621_30638 = state_30609__$1;(statearr_30621_30638[2] = null);
(statearr_30621_30638[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30610 === 10))
{var inst_30603 = (state_30609[2]);var state_30609__$1 = state_30609;var statearr_30622_30639 = state_30609__$1;(statearr_30622_30639[2] = inst_30603);
(statearr_30622_30639[1] = 6);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_30626 = (new Array(9));(statearr_30626[0] = state_machine__11439__auto__);
(statearr_30626[1] = 1);
return statearr_30626;
});
var state_machine__11439__auto____1 = (function (state_30609){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_30609);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e30627){if((e30627 instanceof Object))
{var ex__11442__auto__ = e30627;var statearr_30628_30640 = state_30609;(statearr_30628_30640[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30609);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30641 = state_30609;
state_30609 = G__30641;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_30609){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_30609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_30629 = f__11509__auto__.call(null);(statearr_30629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_30629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
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
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7430__auto__ = _;if(and__7430__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8035__auto__ = (((_ == null))?null:_);return (function (){var or__7439__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t30856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30856 = (function (cs,ch,mult,meta30857){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30857 = meta30857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30856.cljs$lang$type = true;
cljs.core.async.t30856.cljs$lang$ctorStr = "cljs.core.async/t30856";
cljs.core.async.t30856.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t30856");
});})(cs))
;
cljs.core.async.t30856.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t30856.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t30856.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t30856.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t30856.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t30856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30858){var self__ = this;
var _30858__$1 = this;return self__.meta30857;
});})(cs))
;
cljs.core.async.t30856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30858,meta30857__$1){var self__ = this;
var _30858__$1 = this;return (new cljs.core.async.t30856(self__.cs,self__.ch,self__.mult,meta30857__$1));
});})(cs))
;
cljs.core.async.__GT_t30856 = ((function (cs){
return (function __GT_t30856(cs__$1,ch__$1,mult__$1,meta30857){return (new cljs.core.async.t30856(cs__$1,ch__$1,mult__$1,meta30857));
});})(cs))
;
}
return (new cljs.core.async.t30856(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11508__auto___31070 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_30988){var state_val_30989 = (state_30988[1]);if((state_val_30989 === 32))
{var inst_30937 = (state_30988[7]);var inst_30861 = (state_30988[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30988,31,Object,null,30);var inst_30944 = cljs.core.async.put_BANG_.call(null,inst_30937,inst_30861,done);var state_30988__$1 = state_30988;var statearr_30990_31071 = state_30988__$1;(statearr_30990_31071[2] = inst_30944);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30988__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 1))
{var state_30988__$1 = state_30988;var statearr_30991_31072 = state_30988__$1;(statearr_30991_31072[2] = null);
(statearr_30991_31072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 33))
{var inst_30950 = (state_30988[9]);var inst_30952 = cljs.core.chunked_seq_QMARK_.call(null,inst_30950);var state_30988__$1 = state_30988;if(inst_30952)
{var statearr_30992_31073 = state_30988__$1;(statearr_30992_31073[1] = 36);
} else
{var statearr_30993_31074 = state_30988__$1;(statearr_30993_31074[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 2))
{var state_30988__$1 = state_30988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30988__$1,4,ch);
} else
{if((state_val_30989 === 34))
{var state_30988__$1 = state_30988;var statearr_30994_31075 = state_30988__$1;(statearr_30994_31075[2] = null);
(statearr_30994_31075[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 3))
{var inst_30986 = (state_30988[2]);var state_30988__$1 = state_30988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30988__$1,inst_30986);
} else
{if((state_val_30989 === 35))
{var inst_30975 = (state_30988[2]);var state_30988__$1 = state_30988;var statearr_30995_31076 = state_30988__$1;(statearr_30995_31076[2] = inst_30975);
(statearr_30995_31076[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 4))
{var inst_30861 = (state_30988[8]);var inst_30861__$1 = (state_30988[2]);var inst_30862 = (inst_30861__$1 == null);var state_30988__$1 = (function (){var statearr_30996 = state_30988;(statearr_30996[8] = inst_30861__$1);
return statearr_30996;
})();if(cljs.core.truth_(inst_30862))
{var statearr_30997_31077 = state_30988__$1;(statearr_30997_31077[1] = 5);
} else
{var statearr_30998_31078 = state_30988__$1;(statearr_30998_31078[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 36))
{var inst_30950 = (state_30988[9]);var inst_30954 = cljs.core.chunk_first.call(null,inst_30950);var inst_30955 = cljs.core.chunk_rest.call(null,inst_30950);var inst_30956 = cljs.core.count.call(null,inst_30954);var inst_30929 = inst_30955;var inst_30930 = inst_30954;var inst_30931 = inst_30956;var inst_30932 = 0;var state_30988__$1 = (function (){var statearr_30999 = state_30988;(statearr_30999[10] = inst_30931);
(statearr_30999[11] = inst_30930);
(statearr_30999[12] = inst_30932);
(statearr_30999[13] = inst_30929);
return statearr_30999;
})();var statearr_31000_31079 = state_30988__$1;(statearr_31000_31079[2] = null);
(statearr_31000_31079[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 5))
{var inst_30868 = cljs.core.deref.call(null,cs);var inst_30869 = cljs.core.seq.call(null,inst_30868);var inst_30870 = inst_30869;var inst_30871 = null;var inst_30872 = 0;var inst_30873 = 0;var state_30988__$1 = (function (){var statearr_31001 = state_30988;(statearr_31001[14] = inst_30871);
(statearr_31001[15] = inst_30872);
(statearr_31001[16] = inst_30873);
(statearr_31001[17] = inst_30870);
return statearr_31001;
})();var statearr_31002_31080 = state_30988__$1;(statearr_31002_31080[2] = null);
(statearr_31002_31080[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 37))
{var inst_30950 = (state_30988[9]);var inst_30959 = cljs.core.first.call(null,inst_30950);var state_30988__$1 = (function (){var statearr_31003 = state_30988;(statearr_31003[18] = inst_30959);
return statearr_31003;
})();var statearr_31004_31081 = state_30988__$1;(statearr_31004_31081[2] = null);
(statearr_31004_31081[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 6))
{var inst_30920 = cljs.core.deref.call(null,cs);var inst_30921 = cljs.core.keys.call(null,inst_30920);var inst_30922 = cljs.core.count.call(null,inst_30921);var inst_30923 = cljs.core.reset_BANG_.call(null,dctr,inst_30922);var inst_30928 = cljs.core.seq.call(null,inst_30921);var inst_30929 = inst_30928;var inst_30930 = null;var inst_30931 = 0;var inst_30932 = 0;var state_30988__$1 = (function (){var statearr_31005 = state_30988;(statearr_31005[10] = inst_30931);
(statearr_31005[11] = inst_30930);
(statearr_31005[12] = inst_30932);
(statearr_31005[13] = inst_30929);
(statearr_31005[19] = inst_30923);
return statearr_31005;
})();var statearr_31006_31082 = state_30988__$1;(statearr_31006_31082[2] = null);
(statearr_31006_31082[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 38))
{var inst_30972 = (state_30988[2]);var state_30988__$1 = state_30988;var statearr_31007_31083 = state_30988__$1;(statearr_31007_31083[2] = inst_30972);
(statearr_31007_31083[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 7))
{var inst_30984 = (state_30988[2]);var state_30988__$1 = state_30988;var statearr_31008_31084 = state_30988__$1;(statearr_31008_31084[2] = inst_30984);
(statearr_31008_31084[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 39))
{var inst_30950 = (state_30988[9]);var inst_30968 = (state_30988[2]);var inst_30969 = cljs.core.next.call(null,inst_30950);var inst_30929 = inst_30969;var inst_30930 = null;var inst_30931 = 0;var inst_30932 = 0;var state_30988__$1 = (function (){var statearr_31009 = state_30988;(statearr_31009[10] = inst_30931);
(statearr_31009[11] = inst_30930);
(statearr_31009[12] = inst_30932);
(statearr_31009[13] = inst_30929);
(statearr_31009[20] = inst_30968);
return statearr_31009;
})();var statearr_31010_31085 = state_30988__$1;(statearr_31010_31085[2] = null);
(statearr_31010_31085[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 8))
{var inst_30872 = (state_30988[15]);var inst_30873 = (state_30988[16]);var inst_30875 = (inst_30873 < inst_30872);var inst_30876 = inst_30875;var state_30988__$1 = state_30988;if(cljs.core.truth_(inst_30876))
{var statearr_31011_31086 = state_30988__$1;(statearr_31011_31086[1] = 10);
} else
{var statearr_31012_31087 = state_30988__$1;(statearr_31012_31087[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 40))
{var inst_30959 = (state_30988[18]);var inst_30960 = (state_30988[2]);var inst_30961 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30962 = cljs.core.async.untap_STAR_.call(null,m,inst_30959);var state_30988__$1 = (function (){var statearr_31013 = state_30988;(statearr_31013[21] = inst_30960);
(statearr_31013[22] = inst_30961);
return statearr_31013;
})();var statearr_31014_31088 = state_30988__$1;(statearr_31014_31088[2] = inst_30962);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30988__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 9))
{var inst_30918 = (state_30988[2]);var state_30988__$1 = state_30988;var statearr_31015_31089 = state_30988__$1;(statearr_31015_31089[2] = inst_30918);
(statearr_31015_31089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 41))
{var inst_30959 = (state_30988[18]);var inst_30861 = (state_30988[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30988,40,Object,null,39);var inst_30966 = cljs.core.async.put_BANG_.call(null,inst_30959,inst_30861,done);var state_30988__$1 = state_30988;var statearr_31016_31090 = state_30988__$1;(statearr_31016_31090[2] = inst_30966);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30988__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 10))
{var inst_30871 = (state_30988[14]);var inst_30873 = (state_30988[16]);var inst_30879 = cljs.core._nth.call(null,inst_30871,inst_30873);var inst_30880 = cljs.core.nth.call(null,inst_30879,0,null);var inst_30881 = cljs.core.nth.call(null,inst_30879,1,null);var state_30988__$1 = (function (){var statearr_31017 = state_30988;(statearr_31017[23] = inst_30880);
return statearr_31017;
})();if(cljs.core.truth_(inst_30881))
{var statearr_31018_31091 = state_30988__$1;(statearr_31018_31091[1] = 13);
} else
{var statearr_31019_31092 = state_30988__$1;(statearr_31019_31092[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 42))
{var inst_30981 = (state_30988[2]);var state_30988__$1 = (function (){var statearr_31020 = state_30988;(statearr_31020[24] = inst_30981);
return statearr_31020;
})();var statearr_31021_31093 = state_30988__$1;(statearr_31021_31093[2] = null);
(statearr_31021_31093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 11))
{var inst_30890 = (state_30988[25]);var inst_30870 = (state_30988[17]);var inst_30890__$1 = cljs.core.seq.call(null,inst_30870);var state_30988__$1 = (function (){var statearr_31022 = state_30988;(statearr_31022[25] = inst_30890__$1);
return statearr_31022;
})();if(inst_30890__$1)
{var statearr_31023_31094 = state_30988__$1;(statearr_31023_31094[1] = 16);
} else
{var statearr_31024_31095 = state_30988__$1;(statearr_31024_31095[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 12))
{var inst_30916 = (state_30988[2]);var state_30988__$1 = state_30988;var statearr_31025_31096 = state_30988__$1;(statearr_31025_31096[2] = inst_30916);
(statearr_31025_31096[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 13))
{var inst_30880 = (state_30988[23]);var inst_30883 = cljs.core.async.close_BANG_.call(null,inst_30880);var state_30988__$1 = state_30988;var statearr_31029_31097 = state_30988__$1;(statearr_31029_31097[2] = inst_30883);
(statearr_31029_31097[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 14))
{var state_30988__$1 = state_30988;var statearr_31030_31098 = state_30988__$1;(statearr_31030_31098[2] = null);
(statearr_31030_31098[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 15))
{var inst_30871 = (state_30988[14]);var inst_30872 = (state_30988[15]);var inst_30873 = (state_30988[16]);var inst_30870 = (state_30988[17]);var inst_30886 = (state_30988[2]);var inst_30887 = (inst_30873 + 1);var tmp31026 = inst_30871;var tmp31027 = inst_30872;var tmp31028 = inst_30870;var inst_30870__$1 = tmp31028;var inst_30871__$1 = tmp31026;var inst_30872__$1 = tmp31027;var inst_30873__$1 = inst_30887;var state_30988__$1 = (function (){var statearr_31031 = state_30988;(statearr_31031[14] = inst_30871__$1);
(statearr_31031[15] = inst_30872__$1);
(statearr_31031[16] = inst_30873__$1);
(statearr_31031[17] = inst_30870__$1);
(statearr_31031[26] = inst_30886);
return statearr_31031;
})();var statearr_31032_31099 = state_30988__$1;(statearr_31032_31099[2] = null);
(statearr_31032_31099[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 16))
{var inst_30890 = (state_30988[25]);var inst_30892 = cljs.core.chunked_seq_QMARK_.call(null,inst_30890);var state_30988__$1 = state_30988;if(inst_30892)
{var statearr_31033_31100 = state_30988__$1;(statearr_31033_31100[1] = 19);
} else
{var statearr_31034_31101 = state_30988__$1;(statearr_31034_31101[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 17))
{var state_30988__$1 = state_30988;var statearr_31035_31102 = state_30988__$1;(statearr_31035_31102[2] = null);
(statearr_31035_31102[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 18))
{var inst_30914 = (state_30988[2]);var state_30988__$1 = state_30988;var statearr_31036_31103 = state_30988__$1;(statearr_31036_31103[2] = inst_30914);
(statearr_31036_31103[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 19))
{var inst_30890 = (state_30988[25]);var inst_30894 = cljs.core.chunk_first.call(null,inst_30890);var inst_30895 = cljs.core.chunk_rest.call(null,inst_30890);var inst_30896 = cljs.core.count.call(null,inst_30894);var inst_30870 = inst_30895;var inst_30871 = inst_30894;var inst_30872 = inst_30896;var inst_30873 = 0;var state_30988__$1 = (function (){var statearr_31037 = state_30988;(statearr_31037[14] = inst_30871);
(statearr_31037[15] = inst_30872);
(statearr_31037[16] = inst_30873);
(statearr_31037[17] = inst_30870);
return statearr_31037;
})();var statearr_31038_31104 = state_30988__$1;(statearr_31038_31104[2] = null);
(statearr_31038_31104[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 20))
{var inst_30890 = (state_30988[25]);var inst_30900 = cljs.core.first.call(null,inst_30890);var inst_30901 = cljs.core.nth.call(null,inst_30900,0,null);var inst_30902 = cljs.core.nth.call(null,inst_30900,1,null);var state_30988__$1 = (function (){var statearr_31039 = state_30988;(statearr_31039[27] = inst_30901);
return statearr_31039;
})();if(cljs.core.truth_(inst_30902))
{var statearr_31040_31105 = state_30988__$1;(statearr_31040_31105[1] = 22);
} else
{var statearr_31041_31106 = state_30988__$1;(statearr_31041_31106[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 21))
{var inst_30911 = (state_30988[2]);var state_30988__$1 = state_30988;var statearr_31042_31107 = state_30988__$1;(statearr_31042_31107[2] = inst_30911);
(statearr_31042_31107[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 22))
{var inst_30901 = (state_30988[27]);var inst_30904 = cljs.core.async.close_BANG_.call(null,inst_30901);var state_30988__$1 = state_30988;var statearr_31043_31108 = state_30988__$1;(statearr_31043_31108[2] = inst_30904);
(statearr_31043_31108[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 23))
{var state_30988__$1 = state_30988;var statearr_31044_31109 = state_30988__$1;(statearr_31044_31109[2] = null);
(statearr_31044_31109[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 24))
{var inst_30890 = (state_30988[25]);var inst_30907 = (state_30988[2]);var inst_30908 = cljs.core.next.call(null,inst_30890);var inst_30870 = inst_30908;var inst_30871 = null;var inst_30872 = 0;var inst_30873 = 0;var state_30988__$1 = (function (){var statearr_31045 = state_30988;(statearr_31045[28] = inst_30907);
(statearr_31045[14] = inst_30871);
(statearr_31045[15] = inst_30872);
(statearr_31045[16] = inst_30873);
(statearr_31045[17] = inst_30870);
return statearr_31045;
})();var statearr_31046_31110 = state_30988__$1;(statearr_31046_31110[2] = null);
(statearr_31046_31110[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 25))
{var inst_30931 = (state_30988[10]);var inst_30932 = (state_30988[12]);var inst_30934 = (inst_30932 < inst_30931);var inst_30935 = inst_30934;var state_30988__$1 = state_30988;if(cljs.core.truth_(inst_30935))
{var statearr_31047_31111 = state_30988__$1;(statearr_31047_31111[1] = 27);
} else
{var statearr_31048_31112 = state_30988__$1;(statearr_31048_31112[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 26))
{var inst_30979 = (state_30988[2]);var state_30988__$1 = (function (){var statearr_31049 = state_30988;(statearr_31049[29] = inst_30979);
return statearr_31049;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30988__$1,42,dchan);
} else
{if((state_val_30989 === 27))
{var inst_30930 = (state_30988[11]);var inst_30932 = (state_30988[12]);var inst_30937 = cljs.core._nth.call(null,inst_30930,inst_30932);var state_30988__$1 = (function (){var statearr_31050 = state_30988;(statearr_31050[7] = inst_30937);
return statearr_31050;
})();var statearr_31051_31113 = state_30988__$1;(statearr_31051_31113[2] = null);
(statearr_31051_31113[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 28))
{var inst_30950 = (state_30988[9]);var inst_30929 = (state_30988[13]);var inst_30950__$1 = cljs.core.seq.call(null,inst_30929);var state_30988__$1 = (function (){var statearr_31055 = state_30988;(statearr_31055[9] = inst_30950__$1);
return statearr_31055;
})();if(inst_30950__$1)
{var statearr_31056_31114 = state_30988__$1;(statearr_31056_31114[1] = 33);
} else
{var statearr_31057_31115 = state_30988__$1;(statearr_31057_31115[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 29))
{var inst_30977 = (state_30988[2]);var state_30988__$1 = state_30988;var statearr_31058_31116 = state_30988__$1;(statearr_31058_31116[2] = inst_30977);
(statearr_31058_31116[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 30))
{var inst_30931 = (state_30988[10]);var inst_30930 = (state_30988[11]);var inst_30932 = (state_30988[12]);var inst_30929 = (state_30988[13]);var inst_30946 = (state_30988[2]);var inst_30947 = (inst_30932 + 1);var tmp31052 = inst_30931;var tmp31053 = inst_30930;var tmp31054 = inst_30929;var inst_30929__$1 = tmp31054;var inst_30930__$1 = tmp31053;var inst_30931__$1 = tmp31052;var inst_30932__$1 = inst_30947;var state_30988__$1 = (function (){var statearr_31059 = state_30988;(statearr_31059[10] = inst_30931__$1);
(statearr_31059[11] = inst_30930__$1);
(statearr_31059[12] = inst_30932__$1);
(statearr_31059[30] = inst_30946);
(statearr_31059[13] = inst_30929__$1);
return statearr_31059;
})();var statearr_31060_31117 = state_30988__$1;(statearr_31060_31117[2] = null);
(statearr_31060_31117[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30989 === 31))
{var inst_30937 = (state_30988[7]);var inst_30938 = (state_30988[2]);var inst_30939 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30940 = cljs.core.async.untap_STAR_.call(null,m,inst_30937);var state_30988__$1 = (function (){var statearr_31061 = state_30988;(statearr_31061[31] = inst_30939);
(statearr_31061[32] = inst_30938);
return statearr_31061;
})();var statearr_31062_31118 = state_30988__$1;(statearr_31062_31118[2] = inst_30940);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30988__$1);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_31066 = (new Array(33));(statearr_31066[0] = state_machine__11439__auto__);
(statearr_31066[1] = 1);
return statearr_31066;
});
var state_machine__11439__auto____1 = (function (state_30988){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_30988);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e31067){if((e31067 instanceof Object))
{var ex__11442__auto__ = e31067;var statearr_31068_31119 = state_30988;(statearr_31068_31119[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30988);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31120 = state_30988;
state_30988 = G__31120;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_30988){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_30988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_31069 = f__11509__auto__.call(null);(statearr_31069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___31070);
return statearr_31069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t31230 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31230 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta31231){
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
this.meta31231 = meta31231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31230.cljs$lang$type = true;
cljs.core.async.t31230.cljs$lang$ctorStr = "cljs.core.async/t31230";
cljs.core.async.t31230.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t31230");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31230.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t31230.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31230.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31230.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31230.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31230.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31230.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31230.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31232){var self__ = this;
var _31232__$1 = this;return self__.meta31231;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31232,meta31231__$1){var self__ = this;
var _31232__$1 = this;return (new cljs.core.async.t31230(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta31231__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t31230 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31230(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31231){return (new cljs.core.async.t31230(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31231));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t31230(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__11508__auto___31339 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_31297){var state_val_31298 = (state_31297[1]);if((state_val_31298 === 1))
{var inst_31236 = (state_31297[7]);var inst_31236__$1 = calc_state.call(null);var inst_31237 = cljs.core.seq_QMARK_.call(null,inst_31236__$1);var state_31297__$1 = (function (){var statearr_31299 = state_31297;(statearr_31299[7] = inst_31236__$1);
return statearr_31299;
})();if(inst_31237)
{var statearr_31300_31340 = state_31297__$1;(statearr_31300_31340[1] = 2);
} else
{var statearr_31301_31341 = state_31297__$1;(statearr_31301_31341[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 2))
{var inst_31236 = (state_31297[7]);var inst_31239 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31236);var state_31297__$1 = state_31297;var statearr_31302_31342 = state_31297__$1;(statearr_31302_31342[2] = inst_31239);
(statearr_31302_31342[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 3))
{var inst_31236 = (state_31297[7]);var state_31297__$1 = state_31297;var statearr_31303_31343 = state_31297__$1;(statearr_31303_31343[2] = inst_31236);
(statearr_31303_31343[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 4))
{var inst_31236 = (state_31297[7]);var inst_31242 = (state_31297[2]);var inst_31243 = cljs.core.get.call(null,inst_31242,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31244 = cljs.core.get.call(null,inst_31242,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31245 = cljs.core.get.call(null,inst_31242,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_31246 = inst_31236;var state_31297__$1 = (function (){var statearr_31304 = state_31297;(statearr_31304[8] = inst_31245);
(statearr_31304[9] = inst_31246);
(statearr_31304[10] = inst_31244);
(statearr_31304[11] = inst_31243);
return statearr_31304;
})();var statearr_31305_31344 = state_31297__$1;(statearr_31305_31344[2] = null);
(statearr_31305_31344[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 5))
{var inst_31246 = (state_31297[9]);var inst_31249 = cljs.core.seq_QMARK_.call(null,inst_31246);var state_31297__$1 = state_31297;if(inst_31249)
{var statearr_31306_31345 = state_31297__$1;(statearr_31306_31345[1] = 7);
} else
{var statearr_31307_31346 = state_31297__$1;(statearr_31307_31346[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 6))
{var inst_31295 = (state_31297[2]);var state_31297__$1 = state_31297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31297__$1,inst_31295);
} else
{if((state_val_31298 === 7))
{var inst_31246 = (state_31297[9]);var inst_31251 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31246);var state_31297__$1 = state_31297;var statearr_31308_31347 = state_31297__$1;(statearr_31308_31347[2] = inst_31251);
(statearr_31308_31347[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 8))
{var inst_31246 = (state_31297[9]);var state_31297__$1 = state_31297;var statearr_31309_31348 = state_31297__$1;(statearr_31309_31348[2] = inst_31246);
(statearr_31309_31348[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 9))
{var inst_31254 = (state_31297[12]);var inst_31254__$1 = (state_31297[2]);var inst_31255 = cljs.core.get.call(null,inst_31254__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31256 = cljs.core.get.call(null,inst_31254__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31257 = cljs.core.get.call(null,inst_31254__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_31297__$1 = (function (){var statearr_31310 = state_31297;(statearr_31310[13] = inst_31256);
(statearr_31310[14] = inst_31257);
(statearr_31310[12] = inst_31254__$1);
return statearr_31310;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31297__$1,10,inst_31255);
} else
{if((state_val_31298 === 10))
{var inst_31261 = (state_31297[15]);var inst_31262 = (state_31297[16]);var inst_31260 = (state_31297[2]);var inst_31261__$1 = cljs.core.nth.call(null,inst_31260,0,null);var inst_31262__$1 = cljs.core.nth.call(null,inst_31260,1,null);var inst_31263 = (inst_31261__$1 == null);var inst_31264 = cljs.core._EQ_.call(null,inst_31262__$1,change);var inst_31265 = (inst_31263) || (inst_31264);var state_31297__$1 = (function (){var statearr_31311 = state_31297;(statearr_31311[15] = inst_31261__$1);
(statearr_31311[16] = inst_31262__$1);
return statearr_31311;
})();if(cljs.core.truth_(inst_31265))
{var statearr_31312_31349 = state_31297__$1;(statearr_31312_31349[1] = 11);
} else
{var statearr_31313_31350 = state_31297__$1;(statearr_31313_31350[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 11))
{var inst_31261 = (state_31297[15]);var inst_31267 = (inst_31261 == null);var state_31297__$1 = state_31297;if(cljs.core.truth_(inst_31267))
{var statearr_31314_31351 = state_31297__$1;(statearr_31314_31351[1] = 14);
} else
{var statearr_31315_31352 = state_31297__$1;(statearr_31315_31352[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 12))
{var inst_31257 = (state_31297[14]);var inst_31262 = (state_31297[16]);var inst_31276 = (state_31297[17]);var inst_31276__$1 = inst_31257.call(null,inst_31262);var state_31297__$1 = (function (){var statearr_31316 = state_31297;(statearr_31316[17] = inst_31276__$1);
return statearr_31316;
})();if(cljs.core.truth_(inst_31276__$1))
{var statearr_31317_31353 = state_31297__$1;(statearr_31317_31353[1] = 17);
} else
{var statearr_31318_31354 = state_31297__$1;(statearr_31318_31354[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 13))
{var inst_31293 = (state_31297[2]);var state_31297__$1 = state_31297;var statearr_31319_31355 = state_31297__$1;(statearr_31319_31355[2] = inst_31293);
(statearr_31319_31355[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 14))
{var inst_31262 = (state_31297[16]);var inst_31269 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31262);var state_31297__$1 = state_31297;var statearr_31320_31356 = state_31297__$1;(statearr_31320_31356[2] = inst_31269);
(statearr_31320_31356[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 15))
{var state_31297__$1 = state_31297;var statearr_31321_31357 = state_31297__$1;(statearr_31321_31357[2] = null);
(statearr_31321_31357[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 16))
{var inst_31272 = (state_31297[2]);var inst_31273 = calc_state.call(null);var inst_31246 = inst_31273;var state_31297__$1 = (function (){var statearr_31322 = state_31297;(statearr_31322[9] = inst_31246);
(statearr_31322[18] = inst_31272);
return statearr_31322;
})();var statearr_31323_31358 = state_31297__$1;(statearr_31323_31358[2] = null);
(statearr_31323_31358[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 17))
{var inst_31276 = (state_31297[17]);var state_31297__$1 = state_31297;var statearr_31324_31359 = state_31297__$1;(statearr_31324_31359[2] = inst_31276);
(statearr_31324_31359[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 18))
{var inst_31256 = (state_31297[13]);var inst_31257 = (state_31297[14]);var inst_31262 = (state_31297[16]);var inst_31279 = cljs.core.empty_QMARK_.call(null,inst_31257);var inst_31280 = inst_31256.call(null,inst_31262);var inst_31281 = cljs.core.not.call(null,inst_31280);var inst_31282 = (inst_31279) && (inst_31281);var state_31297__$1 = state_31297;var statearr_31325_31360 = state_31297__$1;(statearr_31325_31360[2] = inst_31282);
(statearr_31325_31360[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 19))
{var inst_31284 = (state_31297[2]);var state_31297__$1 = state_31297;if(cljs.core.truth_(inst_31284))
{var statearr_31326_31361 = state_31297__$1;(statearr_31326_31361[1] = 20);
} else
{var statearr_31327_31362 = state_31297__$1;(statearr_31327_31362[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 20))
{var inst_31261 = (state_31297[15]);var state_31297__$1 = state_31297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31297__$1,23,out,inst_31261);
} else
{if((state_val_31298 === 21))
{var state_31297__$1 = state_31297;var statearr_31328_31363 = state_31297__$1;(statearr_31328_31363[2] = null);
(statearr_31328_31363[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 22))
{var inst_31254 = (state_31297[12]);var inst_31290 = (state_31297[2]);var inst_31246 = inst_31254;var state_31297__$1 = (function (){var statearr_31329 = state_31297;(statearr_31329[19] = inst_31290);
(statearr_31329[9] = inst_31246);
return statearr_31329;
})();var statearr_31330_31364 = state_31297__$1;(statearr_31330_31364[2] = null);
(statearr_31330_31364[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31298 === 23))
{var inst_31287 = (state_31297[2]);var state_31297__$1 = state_31297;var statearr_31331_31365 = state_31297__$1;(statearr_31331_31365[2] = inst_31287);
(statearr_31331_31365[1] = 22);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_31335 = (new Array(20));(statearr_31335[0] = state_machine__11439__auto__);
(statearr_31335[1] = 1);
return statearr_31335;
});
var state_machine__11439__auto____1 = (function (state_31297){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_31297);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e31336){if((e31336 instanceof Object))
{var ex__11442__auto__ = e31336;var statearr_31337_31366 = state_31297;(statearr_31337_31366[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31297);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31367 = state_31297;
state_31297 = G__31367;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_31297){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_31297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_31338 = f__11509__auto__.call(null);(statearr_31338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___31339);
return statearr_31338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
return (function (topic){var or__7439__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7439__auto__,mults){
return (function (p1__31368_SHARP_){if(cljs.core.truth_(p1__31368_SHARP_.call(null,topic)))
{return p1__31368_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__31368_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7439__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t31493 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31493 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31494){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31494 = meta31494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31493.cljs$lang$type = true;
cljs.core.async.t31493.cljs$lang$ctorStr = "cljs.core.async/t31493";
cljs.core.async.t31493.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t31493");
});})(mults,ensure_mult))
;
cljs.core.async.t31493.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t31493.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t31493.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t31493.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t31493.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t31493.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t31493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31495){var self__ = this;
var _31495__$1 = this;return self__.meta31494;
});})(mults,ensure_mult))
;
cljs.core.async.t31493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31495,meta31494__$1){var self__ = this;
var _31495__$1 = this;return (new cljs.core.async.t31493(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31494__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t31493 = ((function (mults,ensure_mult){
return (function __GT_t31493(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31494){return (new cljs.core.async.t31493(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31494));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t31493(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11508__auto___31617 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_31569){var state_val_31570 = (state_31569[1]);if((state_val_31570 === 1))
{var state_31569__$1 = state_31569;var statearr_31571_31618 = state_31569__$1;(statearr_31571_31618[2] = null);
(statearr_31571_31618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 2))
{var state_31569__$1 = state_31569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31569__$1,4,ch);
} else
{if((state_val_31570 === 3))
{var inst_31567 = (state_31569[2]);var state_31569__$1 = state_31569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31569__$1,inst_31567);
} else
{if((state_val_31570 === 4))
{var inst_31498 = (state_31569[7]);var inst_31498__$1 = (state_31569[2]);var inst_31499 = (inst_31498__$1 == null);var state_31569__$1 = (function (){var statearr_31572 = state_31569;(statearr_31572[7] = inst_31498__$1);
return statearr_31572;
})();if(cljs.core.truth_(inst_31499))
{var statearr_31573_31619 = state_31569__$1;(statearr_31573_31619[1] = 5);
} else
{var statearr_31574_31620 = state_31569__$1;(statearr_31574_31620[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 5))
{var inst_31505 = cljs.core.deref.call(null,mults);var inst_31506 = cljs.core.vals.call(null,inst_31505);var inst_31507 = cljs.core.seq.call(null,inst_31506);var inst_31508 = inst_31507;var inst_31509 = null;var inst_31510 = 0;var inst_31511 = 0;var state_31569__$1 = (function (){var statearr_31575 = state_31569;(statearr_31575[8] = inst_31508);
(statearr_31575[9] = inst_31509);
(statearr_31575[10] = inst_31510);
(statearr_31575[11] = inst_31511);
return statearr_31575;
})();var statearr_31576_31621 = state_31569__$1;(statearr_31576_31621[2] = null);
(statearr_31576_31621[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 6))
{var inst_31546 = (state_31569[12]);var inst_31548 = (state_31569[13]);var inst_31498 = (state_31569[7]);var inst_31546__$1 = topic_fn.call(null,inst_31498);var inst_31547 = cljs.core.deref.call(null,mults);var inst_31548__$1 = cljs.core.get.call(null,inst_31547,inst_31546__$1);var state_31569__$1 = (function (){var statearr_31577 = state_31569;(statearr_31577[12] = inst_31546__$1);
(statearr_31577[13] = inst_31548__$1);
return statearr_31577;
})();if(cljs.core.truth_(inst_31548__$1))
{var statearr_31578_31622 = state_31569__$1;(statearr_31578_31622[1] = 19);
} else
{var statearr_31579_31623 = state_31569__$1;(statearr_31579_31623[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 7))
{var inst_31565 = (state_31569[2]);var state_31569__$1 = state_31569;var statearr_31580_31624 = state_31569__$1;(statearr_31580_31624[2] = inst_31565);
(statearr_31580_31624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 8))
{var inst_31510 = (state_31569[10]);var inst_31511 = (state_31569[11]);var inst_31513 = (inst_31511 < inst_31510);var inst_31514 = inst_31513;var state_31569__$1 = state_31569;if(cljs.core.truth_(inst_31514))
{var statearr_31584_31625 = state_31569__$1;(statearr_31584_31625[1] = 10);
} else
{var statearr_31585_31626 = state_31569__$1;(statearr_31585_31626[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 9))
{var inst_31544 = (state_31569[2]);var state_31569__$1 = state_31569;var statearr_31586_31627 = state_31569__$1;(statearr_31586_31627[2] = inst_31544);
(statearr_31586_31627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 10))
{var inst_31508 = (state_31569[8]);var inst_31509 = (state_31569[9]);var inst_31510 = (state_31569[10]);var inst_31511 = (state_31569[11]);var inst_31516 = cljs.core._nth.call(null,inst_31509,inst_31511);var inst_31517 = cljs.core.async.muxch_STAR_.call(null,inst_31516);var inst_31518 = cljs.core.async.close_BANG_.call(null,inst_31517);var inst_31519 = (inst_31511 + 1);var tmp31581 = inst_31508;var tmp31582 = inst_31509;var tmp31583 = inst_31510;var inst_31508__$1 = tmp31581;var inst_31509__$1 = tmp31582;var inst_31510__$1 = tmp31583;var inst_31511__$1 = inst_31519;var state_31569__$1 = (function (){var statearr_31587 = state_31569;(statearr_31587[8] = inst_31508__$1);
(statearr_31587[9] = inst_31509__$1);
(statearr_31587[14] = inst_31518);
(statearr_31587[10] = inst_31510__$1);
(statearr_31587[11] = inst_31511__$1);
return statearr_31587;
})();var statearr_31588_31628 = state_31569__$1;(statearr_31588_31628[2] = null);
(statearr_31588_31628[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 11))
{var inst_31508 = (state_31569[8]);var inst_31522 = (state_31569[15]);var inst_31522__$1 = cljs.core.seq.call(null,inst_31508);var state_31569__$1 = (function (){var statearr_31589 = state_31569;(statearr_31589[15] = inst_31522__$1);
return statearr_31589;
})();if(inst_31522__$1)
{var statearr_31590_31629 = state_31569__$1;(statearr_31590_31629[1] = 13);
} else
{var statearr_31591_31630 = state_31569__$1;(statearr_31591_31630[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 12))
{var inst_31542 = (state_31569[2]);var state_31569__$1 = state_31569;var statearr_31592_31631 = state_31569__$1;(statearr_31592_31631[2] = inst_31542);
(statearr_31592_31631[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 13))
{var inst_31522 = (state_31569[15]);var inst_31524 = cljs.core.chunked_seq_QMARK_.call(null,inst_31522);var state_31569__$1 = state_31569;if(inst_31524)
{var statearr_31593_31632 = state_31569__$1;(statearr_31593_31632[1] = 16);
} else
{var statearr_31594_31633 = state_31569__$1;(statearr_31594_31633[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 14))
{var state_31569__$1 = state_31569;var statearr_31595_31634 = state_31569__$1;(statearr_31595_31634[2] = null);
(statearr_31595_31634[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 15))
{var inst_31540 = (state_31569[2]);var state_31569__$1 = state_31569;var statearr_31596_31635 = state_31569__$1;(statearr_31596_31635[2] = inst_31540);
(statearr_31596_31635[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 16))
{var inst_31522 = (state_31569[15]);var inst_31526 = cljs.core.chunk_first.call(null,inst_31522);var inst_31527 = cljs.core.chunk_rest.call(null,inst_31522);var inst_31528 = cljs.core.count.call(null,inst_31526);var inst_31508 = inst_31527;var inst_31509 = inst_31526;var inst_31510 = inst_31528;var inst_31511 = 0;var state_31569__$1 = (function (){var statearr_31597 = state_31569;(statearr_31597[8] = inst_31508);
(statearr_31597[9] = inst_31509);
(statearr_31597[10] = inst_31510);
(statearr_31597[11] = inst_31511);
return statearr_31597;
})();var statearr_31598_31636 = state_31569__$1;(statearr_31598_31636[2] = null);
(statearr_31598_31636[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 17))
{var inst_31522 = (state_31569[15]);var inst_31531 = cljs.core.first.call(null,inst_31522);var inst_31532 = cljs.core.async.muxch_STAR_.call(null,inst_31531);var inst_31533 = cljs.core.async.close_BANG_.call(null,inst_31532);var inst_31534 = cljs.core.next.call(null,inst_31522);var inst_31508 = inst_31534;var inst_31509 = null;var inst_31510 = 0;var inst_31511 = 0;var state_31569__$1 = (function (){var statearr_31599 = state_31569;(statearr_31599[8] = inst_31508);
(statearr_31599[9] = inst_31509);
(statearr_31599[16] = inst_31533);
(statearr_31599[10] = inst_31510);
(statearr_31599[11] = inst_31511);
return statearr_31599;
})();var statearr_31600_31637 = state_31569__$1;(statearr_31600_31637[2] = null);
(statearr_31600_31637[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 18))
{var inst_31537 = (state_31569[2]);var state_31569__$1 = state_31569;var statearr_31601_31638 = state_31569__$1;(statearr_31601_31638[2] = inst_31537);
(statearr_31601_31638[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 19))
{var state_31569__$1 = state_31569;var statearr_31602_31639 = state_31569__$1;(statearr_31602_31639[2] = null);
(statearr_31602_31639[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 20))
{var state_31569__$1 = state_31569;var statearr_31603_31640 = state_31569__$1;(statearr_31603_31640[2] = null);
(statearr_31603_31640[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 21))
{var inst_31562 = (state_31569[2]);var state_31569__$1 = (function (){var statearr_31604 = state_31569;(statearr_31604[17] = inst_31562);
return statearr_31604;
})();var statearr_31605_31641 = state_31569__$1;(statearr_31605_31641[2] = null);
(statearr_31605_31641[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 22))
{var inst_31559 = (state_31569[2]);var state_31569__$1 = state_31569;var statearr_31606_31642 = state_31569__$1;(statearr_31606_31642[2] = inst_31559);
(statearr_31606_31642[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 23))
{var inst_31546 = (state_31569[12]);var inst_31550 = (state_31569[2]);var inst_31551 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31546);var state_31569__$1 = (function (){var statearr_31607 = state_31569;(statearr_31607[18] = inst_31550);
return statearr_31607;
})();var statearr_31608_31643 = state_31569__$1;(statearr_31608_31643[2] = inst_31551);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31569__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 24))
{var inst_31548 = (state_31569[13]);var inst_31498 = (state_31569[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31569,23,Object,null,22);var inst_31555 = cljs.core.async.muxch_STAR_.call(null,inst_31548);var state_31569__$1 = state_31569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31569__$1,25,inst_31555,inst_31498);
} else
{if((state_val_31570 === 25))
{var inst_31557 = (state_31569[2]);var state_31569__$1 = state_31569;var statearr_31609_31644 = state_31569__$1;(statearr_31609_31644[2] = inst_31557);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31569__$1);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_31613 = (new Array(19));(statearr_31613[0] = state_machine__11439__auto__);
(statearr_31613[1] = 1);
return statearr_31613;
});
var state_machine__11439__auto____1 = (function (state_31569){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_31569);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e31614){if((e31614 instanceof Object))
{var ex__11442__auto__ = e31614;var statearr_31615_31645 = state_31569;(statearr_31615_31645[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31646 = state_31569;
state_31569 = G__31646;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_31569){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_31569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_31616 = f__11509__auto__.call(null);(statearr_31616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___31617);
return statearr_31616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
,cljs.core.range.call(null,cnt));var c__11508__auto___31783 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_31753){var state_val_31754 = (state_31753[1]);if((state_val_31754 === 1))
{var state_31753__$1 = state_31753;var statearr_31755_31784 = state_31753__$1;(statearr_31755_31784[2] = null);
(statearr_31755_31784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 2))
{var inst_31716 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_31717 = 0;var state_31753__$1 = (function (){var statearr_31756 = state_31753;(statearr_31756[7] = inst_31717);
(statearr_31756[8] = inst_31716);
return statearr_31756;
})();var statearr_31757_31785 = state_31753__$1;(statearr_31757_31785[2] = null);
(statearr_31757_31785[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 3))
{var inst_31751 = (state_31753[2]);var state_31753__$1 = state_31753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31753__$1,inst_31751);
} else
{if((state_val_31754 === 4))
{var inst_31717 = (state_31753[7]);var inst_31719 = (inst_31717 < cnt);var state_31753__$1 = state_31753;if(cljs.core.truth_(inst_31719))
{var statearr_31758_31786 = state_31753__$1;(statearr_31758_31786[1] = 6);
} else
{var statearr_31759_31787 = state_31753__$1;(statearr_31759_31787[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 5))
{var inst_31737 = (state_31753[2]);var state_31753__$1 = (function (){var statearr_31760 = state_31753;(statearr_31760[9] = inst_31737);
return statearr_31760;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31753__$1,12,dchan);
} else
{if((state_val_31754 === 6))
{var state_31753__$1 = state_31753;var statearr_31761_31788 = state_31753__$1;(statearr_31761_31788[2] = null);
(statearr_31761_31788[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 7))
{var state_31753__$1 = state_31753;var statearr_31762_31789 = state_31753__$1;(statearr_31762_31789[2] = null);
(statearr_31762_31789[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 8))
{var inst_31735 = (state_31753[2]);var state_31753__$1 = state_31753;var statearr_31763_31790 = state_31753__$1;(statearr_31763_31790[2] = inst_31735);
(statearr_31763_31790[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 9))
{var inst_31717 = (state_31753[7]);var inst_31730 = (state_31753[2]);var inst_31731 = (inst_31717 + 1);var inst_31717__$1 = inst_31731;var state_31753__$1 = (function (){var statearr_31764 = state_31753;(statearr_31764[10] = inst_31730);
(statearr_31764[7] = inst_31717__$1);
return statearr_31764;
})();var statearr_31765_31791 = state_31753__$1;(statearr_31765_31791[2] = null);
(statearr_31765_31791[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 10))
{var inst_31721 = (state_31753[2]);var inst_31722 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_31753__$1 = (function (){var statearr_31766 = state_31753;(statearr_31766[11] = inst_31721);
return statearr_31766;
})();var statearr_31767_31792 = state_31753__$1;(statearr_31767_31792[2] = inst_31722);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31753__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 11))
{var inst_31717 = (state_31753[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31753,10,Object,null,9);var inst_31726 = chs__$1.call(null,inst_31717);var inst_31727 = done.call(null,inst_31717);var inst_31728 = cljs.core.async.take_BANG_.call(null,inst_31726,inst_31727);var state_31753__$1 = state_31753;var statearr_31768_31793 = state_31753__$1;(statearr_31768_31793[2] = inst_31728);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31753__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 12))
{var inst_31739 = (state_31753[12]);var inst_31739__$1 = (state_31753[2]);var inst_31740 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31739__$1);var state_31753__$1 = (function (){var statearr_31769 = state_31753;(statearr_31769[12] = inst_31739__$1);
return statearr_31769;
})();if(cljs.core.truth_(inst_31740))
{var statearr_31770_31794 = state_31753__$1;(statearr_31770_31794[1] = 13);
} else
{var statearr_31771_31795 = state_31753__$1;(statearr_31771_31795[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 13))
{var inst_31742 = cljs.core.async.close_BANG_.call(null,out);var state_31753__$1 = state_31753;var statearr_31772_31796 = state_31753__$1;(statearr_31772_31796[2] = inst_31742);
(statearr_31772_31796[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 14))
{var inst_31739 = (state_31753[12]);var inst_31744 = cljs.core.apply.call(null,f,inst_31739);var state_31753__$1 = state_31753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31753__$1,16,out,inst_31744);
} else
{if((state_val_31754 === 15))
{var inst_31749 = (state_31753[2]);var state_31753__$1 = state_31753;var statearr_31773_31797 = state_31753__$1;(statearr_31773_31797[2] = inst_31749);
(statearr_31773_31797[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31754 === 16))
{var inst_31746 = (state_31753[2]);var state_31753__$1 = (function (){var statearr_31774 = state_31753;(statearr_31774[13] = inst_31746);
return statearr_31774;
})();var statearr_31775_31798 = state_31753__$1;(statearr_31775_31798[2] = null);
(statearr_31775_31798[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_31779 = (new Array(14));(statearr_31779[0] = state_machine__11439__auto__);
(statearr_31779[1] = 1);
return statearr_31779;
});
var state_machine__11439__auto____1 = (function (state_31753){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_31753);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e31780){if((e31780 instanceof Object))
{var ex__11442__auto__ = e31780;var statearr_31781_31799 = state_31753;(statearr_31781_31799[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31780;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31800 = state_31753;
state_31753 = G__31800;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_31753){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_31753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_31782 = f__11509__auto__.call(null);(statearr_31782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___31783);
return statearr_31782;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___31908 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_31884){var state_val_31885 = (state_31884[1]);if((state_val_31885 === 1))
{var inst_31855 = cljs.core.vec.call(null,chs);var inst_31856 = inst_31855;var state_31884__$1 = (function (){var statearr_31886 = state_31884;(statearr_31886[7] = inst_31856);
return statearr_31886;
})();var statearr_31887_31909 = state_31884__$1;(statearr_31887_31909[2] = null);
(statearr_31887_31909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31885 === 2))
{var inst_31856 = (state_31884[7]);var inst_31858 = cljs.core.count.call(null,inst_31856);var inst_31859 = (inst_31858 > 0);var state_31884__$1 = state_31884;if(cljs.core.truth_(inst_31859))
{var statearr_31888_31910 = state_31884__$1;(statearr_31888_31910[1] = 4);
} else
{var statearr_31889_31911 = state_31884__$1;(statearr_31889_31911[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31885 === 3))
{var inst_31882 = (state_31884[2]);var state_31884__$1 = state_31884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31884__$1,inst_31882);
} else
{if((state_val_31885 === 4))
{var inst_31856 = (state_31884[7]);var state_31884__$1 = state_31884;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31884__$1,7,inst_31856);
} else
{if((state_val_31885 === 5))
{var inst_31878 = cljs.core.async.close_BANG_.call(null,out);var state_31884__$1 = state_31884;var statearr_31890_31912 = state_31884__$1;(statearr_31890_31912[2] = inst_31878);
(statearr_31890_31912[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31885 === 6))
{var inst_31880 = (state_31884[2]);var state_31884__$1 = state_31884;var statearr_31891_31913 = state_31884__$1;(statearr_31891_31913[2] = inst_31880);
(statearr_31891_31913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31885 === 7))
{var inst_31863 = (state_31884[8]);var inst_31864 = (state_31884[9]);var inst_31863__$1 = (state_31884[2]);var inst_31864__$1 = cljs.core.nth.call(null,inst_31863__$1,0,null);var inst_31865 = cljs.core.nth.call(null,inst_31863__$1,1,null);var inst_31866 = (inst_31864__$1 == null);var state_31884__$1 = (function (){var statearr_31892 = state_31884;(statearr_31892[10] = inst_31865);
(statearr_31892[8] = inst_31863__$1);
(statearr_31892[9] = inst_31864__$1);
return statearr_31892;
})();if(cljs.core.truth_(inst_31866))
{var statearr_31893_31914 = state_31884__$1;(statearr_31893_31914[1] = 8);
} else
{var statearr_31894_31915 = state_31884__$1;(statearr_31894_31915[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31885 === 8))
{var inst_31865 = (state_31884[10]);var inst_31856 = (state_31884[7]);var inst_31863 = (state_31884[8]);var inst_31864 = (state_31884[9]);var inst_31868 = (function (){var c = inst_31865;var v = inst_31864;var vec__31861 = inst_31863;var cs = inst_31856;return ((function (c,v,vec__31861,cs,inst_31865,inst_31856,inst_31863,inst_31864,state_val_31885){
return (function (p1__31801_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__31801_SHARP_);
});
;})(c,v,vec__31861,cs,inst_31865,inst_31856,inst_31863,inst_31864,state_val_31885))
})();var inst_31869 = cljs.core.filterv.call(null,inst_31868,inst_31856);var inst_31856__$1 = inst_31869;var state_31884__$1 = (function (){var statearr_31895 = state_31884;(statearr_31895[7] = inst_31856__$1);
return statearr_31895;
})();var statearr_31896_31916 = state_31884__$1;(statearr_31896_31916[2] = null);
(statearr_31896_31916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31885 === 9))
{var inst_31864 = (state_31884[9]);var state_31884__$1 = state_31884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31884__$1,11,out,inst_31864);
} else
{if((state_val_31885 === 10))
{var inst_31876 = (state_31884[2]);var state_31884__$1 = state_31884;var statearr_31898_31917 = state_31884__$1;(statearr_31898_31917[2] = inst_31876);
(statearr_31898_31917[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31885 === 11))
{var inst_31856 = (state_31884[7]);var inst_31873 = (state_31884[2]);var tmp31897 = inst_31856;var inst_31856__$1 = tmp31897;var state_31884__$1 = (function (){var statearr_31899 = state_31884;(statearr_31899[11] = inst_31873);
(statearr_31899[7] = inst_31856__$1);
return statearr_31899;
})();var statearr_31900_31918 = state_31884__$1;(statearr_31900_31918[2] = null);
(statearr_31900_31918[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_31904 = (new Array(12));(statearr_31904[0] = state_machine__11439__auto__);
(statearr_31904[1] = 1);
return statearr_31904;
});
var state_machine__11439__auto____1 = (function (state_31884){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_31884);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e31905){if((e31905 instanceof Object))
{var ex__11442__auto__ = e31905;var statearr_31906_31919 = state_31884;(statearr_31906_31919[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31884);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31920 = state_31884;
state_31884 = G__31920;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_31884){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_31884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_31907 = f__11509__auto__.call(null);(statearr_31907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___31908);
return statearr_31907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___32013 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_31990){var state_val_31991 = (state_31990[1]);if((state_val_31991 === 1))
{var inst_31967 = 0;var state_31990__$1 = (function (){var statearr_31992 = state_31990;(statearr_31992[7] = inst_31967);
return statearr_31992;
})();var statearr_31993_32014 = state_31990__$1;(statearr_31993_32014[2] = null);
(statearr_31993_32014[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31991 === 2))
{var inst_31967 = (state_31990[7]);var inst_31969 = (inst_31967 < n);var state_31990__$1 = state_31990;if(cljs.core.truth_(inst_31969))
{var statearr_31994_32015 = state_31990__$1;(statearr_31994_32015[1] = 4);
} else
{var statearr_31995_32016 = state_31990__$1;(statearr_31995_32016[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31991 === 3))
{var inst_31987 = (state_31990[2]);var inst_31988 = cljs.core.async.close_BANG_.call(null,out);var state_31990__$1 = (function (){var statearr_31996 = state_31990;(statearr_31996[8] = inst_31987);
return statearr_31996;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31990__$1,inst_31988);
} else
{if((state_val_31991 === 4))
{var state_31990__$1 = state_31990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31990__$1,7,ch);
} else
{if((state_val_31991 === 5))
{var state_31990__$1 = state_31990;var statearr_31997_32017 = state_31990__$1;(statearr_31997_32017[2] = null);
(statearr_31997_32017[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31991 === 6))
{var inst_31985 = (state_31990[2]);var state_31990__$1 = state_31990;var statearr_31998_32018 = state_31990__$1;(statearr_31998_32018[2] = inst_31985);
(statearr_31998_32018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31991 === 7))
{var inst_31972 = (state_31990[9]);var inst_31972__$1 = (state_31990[2]);var inst_31973 = (inst_31972__$1 == null);var inst_31974 = cljs.core.not.call(null,inst_31973);var state_31990__$1 = (function (){var statearr_31999 = state_31990;(statearr_31999[9] = inst_31972__$1);
return statearr_31999;
})();if(inst_31974)
{var statearr_32000_32019 = state_31990__$1;(statearr_32000_32019[1] = 8);
} else
{var statearr_32001_32020 = state_31990__$1;(statearr_32001_32020[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31991 === 8))
{var inst_31972 = (state_31990[9]);var state_31990__$1 = state_31990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31990__$1,11,out,inst_31972);
} else
{if((state_val_31991 === 9))
{var state_31990__$1 = state_31990;var statearr_32002_32021 = state_31990__$1;(statearr_32002_32021[2] = null);
(statearr_32002_32021[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31991 === 10))
{var inst_31982 = (state_31990[2]);var state_31990__$1 = state_31990;var statearr_32003_32022 = state_31990__$1;(statearr_32003_32022[2] = inst_31982);
(statearr_32003_32022[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31991 === 11))
{var inst_31967 = (state_31990[7]);var inst_31977 = (state_31990[2]);var inst_31978 = (inst_31967 + 1);var inst_31967__$1 = inst_31978;var state_31990__$1 = (function (){var statearr_32004 = state_31990;(statearr_32004[7] = inst_31967__$1);
(statearr_32004[10] = inst_31977);
return statearr_32004;
})();var statearr_32005_32023 = state_31990__$1;(statearr_32005_32023[2] = null);
(statearr_32005_32023[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_32009 = (new Array(11));(statearr_32009[0] = state_machine__11439__auto__);
(statearr_32009[1] = 1);
return statearr_32009;
});
var state_machine__11439__auto____1 = (function (state_31990){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_31990);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e32010){if((e32010 instanceof Object))
{var ex__11442__auto__ = e32010;var statearr_32011_32024 = state_31990;(statearr_32011_32024[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31990);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32025 = state_31990;
state_31990 = G__32025;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_31990){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_31990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_32012 = f__11509__auto__.call(null);(statearr_32012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___32013);
return statearr_32012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___32122 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_32097){var state_val_32098 = (state_32097[1]);if((state_val_32098 === 1))
{var inst_32074 = null;var state_32097__$1 = (function (){var statearr_32099 = state_32097;(statearr_32099[7] = inst_32074);
return statearr_32099;
})();var statearr_32100_32123 = state_32097__$1;(statearr_32100_32123[2] = null);
(statearr_32100_32123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32098 === 2))
{var state_32097__$1 = state_32097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32097__$1,4,ch);
} else
{if((state_val_32098 === 3))
{var inst_32094 = (state_32097[2]);var inst_32095 = cljs.core.async.close_BANG_.call(null,out);var state_32097__$1 = (function (){var statearr_32101 = state_32097;(statearr_32101[8] = inst_32094);
return statearr_32101;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32097__$1,inst_32095);
} else
{if((state_val_32098 === 4))
{var inst_32077 = (state_32097[9]);var inst_32077__$1 = (state_32097[2]);var inst_32078 = (inst_32077__$1 == null);var inst_32079 = cljs.core.not.call(null,inst_32078);var state_32097__$1 = (function (){var statearr_32102 = state_32097;(statearr_32102[9] = inst_32077__$1);
return statearr_32102;
})();if(inst_32079)
{var statearr_32103_32124 = state_32097__$1;(statearr_32103_32124[1] = 5);
} else
{var statearr_32104_32125 = state_32097__$1;(statearr_32104_32125[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32098 === 5))
{var inst_32077 = (state_32097[9]);var inst_32074 = (state_32097[7]);var inst_32081 = cljs.core._EQ_.call(null,inst_32077,inst_32074);var state_32097__$1 = state_32097;if(inst_32081)
{var statearr_32105_32126 = state_32097__$1;(statearr_32105_32126[1] = 8);
} else
{var statearr_32106_32127 = state_32097__$1;(statearr_32106_32127[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32098 === 6))
{var state_32097__$1 = state_32097;var statearr_32108_32128 = state_32097__$1;(statearr_32108_32128[2] = null);
(statearr_32108_32128[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32098 === 7))
{var inst_32092 = (state_32097[2]);var state_32097__$1 = state_32097;var statearr_32109_32129 = state_32097__$1;(statearr_32109_32129[2] = inst_32092);
(statearr_32109_32129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32098 === 8))
{var inst_32074 = (state_32097[7]);var tmp32107 = inst_32074;var inst_32074__$1 = tmp32107;var state_32097__$1 = (function (){var statearr_32110 = state_32097;(statearr_32110[7] = inst_32074__$1);
return statearr_32110;
})();var statearr_32111_32130 = state_32097__$1;(statearr_32111_32130[2] = null);
(statearr_32111_32130[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32098 === 9))
{var inst_32077 = (state_32097[9]);var state_32097__$1 = state_32097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32097__$1,11,out,inst_32077);
} else
{if((state_val_32098 === 10))
{var inst_32089 = (state_32097[2]);var state_32097__$1 = state_32097;var statearr_32112_32131 = state_32097__$1;(statearr_32112_32131[2] = inst_32089);
(statearr_32112_32131[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32098 === 11))
{var inst_32077 = (state_32097[9]);var inst_32086 = (state_32097[2]);var inst_32074 = inst_32077;var state_32097__$1 = (function (){var statearr_32113 = state_32097;(statearr_32113[7] = inst_32074);
(statearr_32113[10] = inst_32086);
return statearr_32113;
})();var statearr_32114_32132 = state_32097__$1;(statearr_32114_32132[2] = null);
(statearr_32114_32132[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_32118 = (new Array(11));(statearr_32118[0] = state_machine__11439__auto__);
(statearr_32118[1] = 1);
return statearr_32118;
});
var state_machine__11439__auto____1 = (function (state_32097){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_32097);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e32119){if((e32119 instanceof Object))
{var ex__11442__auto__ = e32119;var statearr_32120_32133 = state_32097;(statearr_32120_32133[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32097);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32119;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32134 = state_32097;
state_32097 = G__32134;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_32097){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_32097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_32121 = f__11509__auto__.call(null);(statearr_32121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___32122);
return statearr_32121;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___32269 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_32239){var state_val_32240 = (state_32239[1]);if((state_val_32240 === 1))
{var inst_32202 = (new Array(n));var inst_32203 = inst_32202;var inst_32204 = 0;var state_32239__$1 = (function (){var statearr_32241 = state_32239;(statearr_32241[7] = inst_32203);
(statearr_32241[8] = inst_32204);
return statearr_32241;
})();var statearr_32242_32270 = state_32239__$1;(statearr_32242_32270[2] = null);
(statearr_32242_32270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32240 === 2))
{var state_32239__$1 = state_32239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32239__$1,4,ch);
} else
{if((state_val_32240 === 3))
{var inst_32237 = (state_32239[2]);var state_32239__$1 = state_32239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32239__$1,inst_32237);
} else
{if((state_val_32240 === 4))
{var inst_32207 = (state_32239[9]);var inst_32207__$1 = (state_32239[2]);var inst_32208 = (inst_32207__$1 == null);var inst_32209 = cljs.core.not.call(null,inst_32208);var state_32239__$1 = (function (){var statearr_32243 = state_32239;(statearr_32243[9] = inst_32207__$1);
return statearr_32243;
})();if(inst_32209)
{var statearr_32244_32271 = state_32239__$1;(statearr_32244_32271[1] = 5);
} else
{var statearr_32245_32272 = state_32239__$1;(statearr_32245_32272[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32240 === 5))
{var inst_32207 = (state_32239[9]);var inst_32212 = (state_32239[10]);var inst_32203 = (state_32239[7]);var inst_32204 = (state_32239[8]);var inst_32211 = (inst_32203[inst_32204] = inst_32207);var inst_32212__$1 = (inst_32204 + 1);var inst_32213 = (inst_32212__$1 < n);var state_32239__$1 = (function (){var statearr_32246 = state_32239;(statearr_32246[10] = inst_32212__$1);
(statearr_32246[11] = inst_32211);
return statearr_32246;
})();if(cljs.core.truth_(inst_32213))
{var statearr_32247_32273 = state_32239__$1;(statearr_32247_32273[1] = 8);
} else
{var statearr_32248_32274 = state_32239__$1;(statearr_32248_32274[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32240 === 6))
{var inst_32204 = (state_32239[8]);var inst_32225 = (inst_32204 > 0);var state_32239__$1 = state_32239;if(cljs.core.truth_(inst_32225))
{var statearr_32250_32275 = state_32239__$1;(statearr_32250_32275[1] = 12);
} else
{var statearr_32251_32276 = state_32239__$1;(statearr_32251_32276[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32240 === 7))
{var inst_32235 = (state_32239[2]);var state_32239__$1 = state_32239;var statearr_32252_32277 = state_32239__$1;(statearr_32252_32277[2] = inst_32235);
(statearr_32252_32277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32240 === 8))
{var inst_32212 = (state_32239[10]);var inst_32203 = (state_32239[7]);var tmp32249 = inst_32203;var inst_32203__$1 = tmp32249;var inst_32204 = inst_32212;var state_32239__$1 = (function (){var statearr_32253 = state_32239;(statearr_32253[7] = inst_32203__$1);
(statearr_32253[8] = inst_32204);
return statearr_32253;
})();var statearr_32254_32278 = state_32239__$1;(statearr_32254_32278[2] = null);
(statearr_32254_32278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32240 === 9))
{var inst_32203 = (state_32239[7]);var inst_32217 = cljs.core.vec.call(null,inst_32203);var state_32239__$1 = state_32239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32239__$1,11,out,inst_32217);
} else
{if((state_val_32240 === 10))
{var inst_32223 = (state_32239[2]);var state_32239__$1 = state_32239;var statearr_32255_32279 = state_32239__$1;(statearr_32255_32279[2] = inst_32223);
(statearr_32255_32279[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32240 === 11))
{var inst_32219 = (state_32239[2]);var inst_32220 = (new Array(n));var inst_32203 = inst_32220;var inst_32204 = 0;var state_32239__$1 = (function (){var statearr_32256 = state_32239;(statearr_32256[12] = inst_32219);
(statearr_32256[7] = inst_32203);
(statearr_32256[8] = inst_32204);
return statearr_32256;
})();var statearr_32257_32280 = state_32239__$1;(statearr_32257_32280[2] = null);
(statearr_32257_32280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32240 === 12))
{var inst_32203 = (state_32239[7]);var inst_32227 = cljs.core.vec.call(null,inst_32203);var state_32239__$1 = state_32239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32239__$1,15,out,inst_32227);
} else
{if((state_val_32240 === 13))
{var state_32239__$1 = state_32239;var statearr_32258_32281 = state_32239__$1;(statearr_32258_32281[2] = null);
(statearr_32258_32281[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32240 === 14))
{var inst_32232 = (state_32239[2]);var inst_32233 = cljs.core.async.close_BANG_.call(null,out);var state_32239__$1 = (function (){var statearr_32259 = state_32239;(statearr_32259[13] = inst_32232);
return statearr_32259;
})();var statearr_32260_32282 = state_32239__$1;(statearr_32260_32282[2] = inst_32233);
(statearr_32260_32282[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32240 === 15))
{var inst_32229 = (state_32239[2]);var state_32239__$1 = state_32239;var statearr_32261_32283 = state_32239__$1;(statearr_32261_32283[2] = inst_32229);
(statearr_32261_32283[1] = 14);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_32265 = (new Array(14));(statearr_32265[0] = state_machine__11439__auto__);
(statearr_32265[1] = 1);
return statearr_32265;
});
var state_machine__11439__auto____1 = (function (state_32239){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_32239);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e32266){if((e32266 instanceof Object))
{var ex__11442__auto__ = e32266;var statearr_32267_32284 = state_32239;(statearr_32267_32284[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32239);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32285 = state_32239;
state_32239 = G__32285;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_32239){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_32239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_32268 = f__11509__auto__.call(null);(statearr_32268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___32269);
return statearr_32268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___32428 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_32398){var state_val_32399 = (state_32398[1]);if((state_val_32399 === 1))
{var inst_32357 = (new Array(0));var inst_32358 = inst_32357;var inst_32359 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_32398__$1 = (function (){var statearr_32400 = state_32398;(statearr_32400[7] = inst_32358);
(statearr_32400[8] = inst_32359);
return statearr_32400;
})();var statearr_32401_32429 = state_32398__$1;(statearr_32401_32429[2] = null);
(statearr_32401_32429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 2))
{var state_32398__$1 = state_32398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32398__$1,4,ch);
} else
{if((state_val_32399 === 3))
{var inst_32396 = (state_32398[2]);var state_32398__$1 = state_32398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32398__$1,inst_32396);
} else
{if((state_val_32399 === 4))
{var inst_32362 = (state_32398[9]);var inst_32362__$1 = (state_32398[2]);var inst_32363 = (inst_32362__$1 == null);var inst_32364 = cljs.core.not.call(null,inst_32363);var state_32398__$1 = (function (){var statearr_32402 = state_32398;(statearr_32402[9] = inst_32362__$1);
return statearr_32402;
})();if(inst_32364)
{var statearr_32403_32430 = state_32398__$1;(statearr_32403_32430[1] = 5);
} else
{var statearr_32404_32431 = state_32398__$1;(statearr_32404_32431[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 5))
{var inst_32362 = (state_32398[9]);var inst_32366 = (state_32398[10]);var inst_32359 = (state_32398[8]);var inst_32366__$1 = f.call(null,inst_32362);var inst_32367 = cljs.core._EQ_.call(null,inst_32366__$1,inst_32359);var inst_32368 = cljs.core.keyword_identical_QMARK_.call(null,inst_32359,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_32369 = (inst_32367) || (inst_32368);var state_32398__$1 = (function (){var statearr_32405 = state_32398;(statearr_32405[10] = inst_32366__$1);
return statearr_32405;
})();if(cljs.core.truth_(inst_32369))
{var statearr_32406_32432 = state_32398__$1;(statearr_32406_32432[1] = 8);
} else
{var statearr_32407_32433 = state_32398__$1;(statearr_32407_32433[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 6))
{var inst_32358 = (state_32398[7]);var inst_32383 = inst_32358.length;var inst_32384 = (inst_32383 > 0);var state_32398__$1 = state_32398;if(cljs.core.truth_(inst_32384))
{var statearr_32409_32434 = state_32398__$1;(statearr_32409_32434[1] = 12);
} else
{var statearr_32410_32435 = state_32398__$1;(statearr_32410_32435[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 7))
{var inst_32394 = (state_32398[2]);var state_32398__$1 = state_32398;var statearr_32411_32436 = state_32398__$1;(statearr_32411_32436[2] = inst_32394);
(statearr_32411_32436[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 8))
{var inst_32362 = (state_32398[9]);var inst_32366 = (state_32398[10]);var inst_32358 = (state_32398[7]);var inst_32371 = inst_32358.push(inst_32362);var tmp32408 = inst_32358;var inst_32358__$1 = tmp32408;var inst_32359 = inst_32366;var state_32398__$1 = (function (){var statearr_32412 = state_32398;(statearr_32412[11] = inst_32371);
(statearr_32412[7] = inst_32358__$1);
(statearr_32412[8] = inst_32359);
return statearr_32412;
})();var statearr_32413_32437 = state_32398__$1;(statearr_32413_32437[2] = null);
(statearr_32413_32437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 9))
{var inst_32358 = (state_32398[7]);var inst_32374 = cljs.core.vec.call(null,inst_32358);var state_32398__$1 = state_32398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32398__$1,11,out,inst_32374);
} else
{if((state_val_32399 === 10))
{var inst_32381 = (state_32398[2]);var state_32398__$1 = state_32398;var statearr_32414_32438 = state_32398__$1;(statearr_32414_32438[2] = inst_32381);
(statearr_32414_32438[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 11))
{var inst_32362 = (state_32398[9]);var inst_32366 = (state_32398[10]);var inst_32376 = (state_32398[2]);var inst_32377 = (new Array(0));var inst_32378 = inst_32377.push(inst_32362);var inst_32358 = inst_32377;var inst_32359 = inst_32366;var state_32398__$1 = (function (){var statearr_32415 = state_32398;(statearr_32415[12] = inst_32378);
(statearr_32415[13] = inst_32376);
(statearr_32415[7] = inst_32358);
(statearr_32415[8] = inst_32359);
return statearr_32415;
})();var statearr_32416_32439 = state_32398__$1;(statearr_32416_32439[2] = null);
(statearr_32416_32439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 12))
{var inst_32358 = (state_32398[7]);var inst_32386 = cljs.core.vec.call(null,inst_32358);var state_32398__$1 = state_32398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32398__$1,15,out,inst_32386);
} else
{if((state_val_32399 === 13))
{var state_32398__$1 = state_32398;var statearr_32417_32440 = state_32398__$1;(statearr_32417_32440[2] = null);
(statearr_32417_32440[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 14))
{var inst_32391 = (state_32398[2]);var inst_32392 = cljs.core.async.close_BANG_.call(null,out);var state_32398__$1 = (function (){var statearr_32418 = state_32398;(statearr_32418[14] = inst_32391);
return statearr_32418;
})();var statearr_32419_32441 = state_32398__$1;(statearr_32419_32441[2] = inst_32392);
(statearr_32419_32441[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32399 === 15))
{var inst_32388 = (state_32398[2]);var state_32398__$1 = state_32398;var statearr_32420_32442 = state_32398__$1;(statearr_32420_32442[2] = inst_32388);
(statearr_32420_32442[1] = 14);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_32424 = (new Array(15));(statearr_32424[0] = state_machine__11439__auto__);
(statearr_32424[1] = 1);
return statearr_32424;
});
var state_machine__11439__auto____1 = (function (state_32398){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_32398);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e32425){if((e32425 instanceof Object))
{var ex__11442__auto__ = e32425;var statearr_32426_32443 = state_32398;(statearr_32426_32443[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32398);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32444 = state_32398;
state_32398 = G__32444;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_32398){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_32398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_32427 = f__11509__auto__.call(null);(statearr_32427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___32428);
return statearr_32427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
