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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19942 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19942 = (function (f,fn_handler,meta19943){
this.f = f;
this.fn_handler = fn_handler;
this.meta19943 = meta19943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19942.cljs$lang$type = true;
cljs.core.async.t19942.cljs$lang$ctorStr = "cljs.core.async/t19942";
cljs.core.async.t19942.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t19942");
});
cljs.core.async.t19942.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19944){var self__ = this;
var _19944__$1 = this;return self__.meta19943;
});
cljs.core.async.t19942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19944,meta19943__$1){var self__ = this;
var _19944__$1 = this;return (new cljs.core.async.t19942(self__.f,self__.fn_handler,meta19943__$1));
});
cljs.core.async.__GT_t19942 = (function __GT_t19942(f__$1,fn_handler__$1,meta19943){return (new cljs.core.async.t19942(f__$1,fn_handler__$1,meta19943));
});
}
return (new cljs.core.async.t19942(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19946 = buff;if(G__19946)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__19946.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19946.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19946);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19946);
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
{var val_19947 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19947);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_19947);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___19948 = n;var x_19949 = 0;while(true){
if((x_19949 < n__7112__auto___19948))
{(a[x_19949] = 0);
{
var G__19950 = (x_19949 + 1);
x_19949 = G__19950;
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
var G__19951 = (i + 1);
i = G__19951;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19955 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19955 = (function (flag,alt_flag,meta19956){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19956 = meta19956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19955.cljs$lang$type = true;
cljs.core.async.t19955.cljs$lang$ctorStr = "cljs.core.async/t19955";
cljs.core.async.t19955.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t19955");
});
cljs.core.async.t19955.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t19955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t19955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19957){var self__ = this;
var _19957__$1 = this;return self__.meta19956;
});
cljs.core.async.t19955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19957,meta19956__$1){var self__ = this;
var _19957__$1 = this;return (new cljs.core.async.t19955(self__.flag,self__.alt_flag,meta19956__$1));
});
cljs.core.async.__GT_t19955 = (function __GT_t19955(flag__$1,alt_flag__$1,meta19956){return (new cljs.core.async.t19955(flag__$1,alt_flag__$1,meta19956));
});
}
return (new cljs.core.async.t19955(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19961 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19961 = (function (cb,flag,alt_handler,meta19962){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19962 = meta19962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19961.cljs$lang$type = true;
cljs.core.async.t19961.cljs$lang$ctorStr = "cljs.core.async/t19961";
cljs.core.async.t19961.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t19961");
});
cljs.core.async.t19961.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19963){var self__ = this;
var _19963__$1 = this;return self__.meta19962;
});
cljs.core.async.t19961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19963,meta19962__$1){var self__ = this;
var _19963__$1 = this;return (new cljs.core.async.t19961(self__.cb,self__.flag,self__.alt_handler,meta19962__$1));
});
cljs.core.async.__GT_t19961 = (function __GT_t19961(cb__$1,flag__$1,alt_handler__$1,meta19962){return (new cljs.core.async.t19961(cb__$1,flag__$1,alt_handler__$1,meta19962));
});
}
return (new cljs.core.async.t19961(cb,flag,alt_handler,null));
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
return (function (p1__19964_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19964_SHARP_,port], null));
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
var G__19965 = (i + 1);
i = G__19965;
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
var alts_BANG___delegate = function (ports,p__19966){var map__19968 = p__19966;var map__19968__$1 = ((cljs.core.seq_QMARK_.call(null,map__19968))?cljs.core.apply.call(null,cljs.core.hash_map,map__19968):map__19968);var opts = map__19968__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__19966 = null;if (arguments.length > 1) {
  p__19966 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19966);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19969){
var ports = cljs.core.first(arglist__19969);
var p__19966 = cljs.core.rest(arglist__19969);
return alts_BANG___delegate(ports,p__19966);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19977 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19977 = (function (ch,f,map_LT_,meta19978){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19978 = meta19978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19977.cljs$lang$type = true;
cljs.core.async.t19977.cljs$lang$ctorStr = "cljs.core.async/t19977";
cljs.core.async.t19977.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t19977");
});
cljs.core.async.t19977.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t19977.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19980 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19980 = (function (fn1,_,meta19978,ch,f,map_LT_,meta19981){
this.fn1 = fn1;
this._ = _;
this.meta19978 = meta19978;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19981 = meta19981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19980.cljs$lang$type = true;
cljs.core.async.t19980.cljs$lang$ctorStr = "cljs.core.async/t19980";
cljs.core.async.t19980.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t19980");
});
cljs.core.async.t19980.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t19980.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t19980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__19970_SHARP_){return f1.call(null,(((p1__19970_SHARP_ == null))?null:self__.f.call(null,p1__19970_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t19980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19982){var self__ = this;
var _19982__$1 = this;return self__.meta19981;
});
cljs.core.async.t19980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19982,meta19981__$1){var self__ = this;
var _19982__$1 = this;return (new cljs.core.async.t19980(self__.fn1,self__._,self__.meta19978,self__.ch,self__.f,self__.map_LT_,meta19981__$1));
});
cljs.core.async.__GT_t19980 = (function __GT_t19980(fn1__$1,___$2,meta19978__$1,ch__$2,f__$2,map_LT___$2,meta19981){return (new cljs.core.async.t19980(fn1__$1,___$2,meta19978__$1,ch__$2,f__$2,map_LT___$2,meta19981));
});
}
return (new cljs.core.async.t19980(fn1,___$1,self__.meta19978,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t19977.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19979){var self__ = this;
var _19979__$1 = this;return self__.meta19978;
});
cljs.core.async.t19977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19979,meta19978__$1){var self__ = this;
var _19979__$1 = this;return (new cljs.core.async.t19977(self__.ch,self__.f,self__.map_LT_,meta19978__$1));
});
cljs.core.async.__GT_t19977 = (function __GT_t19977(ch__$1,f__$1,map_LT___$1,meta19978){return (new cljs.core.async.t19977(ch__$1,f__$1,map_LT___$1,meta19978));
});
}
return (new cljs.core.async.t19977(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19986 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19986 = (function (ch,f,map_GT_,meta19987){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19987 = meta19987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19986.cljs$lang$type = true;
cljs.core.async.t19986.cljs$lang$ctorStr = "cljs.core.async/t19986";
cljs.core.async.t19986.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t19986");
});
cljs.core.async.t19986.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19986.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t19986.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19986.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19986.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19986.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19988){var self__ = this;
var _19988__$1 = this;return self__.meta19987;
});
cljs.core.async.t19986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19988,meta19987__$1){var self__ = this;
var _19988__$1 = this;return (new cljs.core.async.t19986(self__.ch,self__.f,self__.map_GT_,meta19987__$1));
});
cljs.core.async.__GT_t19986 = (function __GT_t19986(ch__$1,f__$1,map_GT___$1,meta19987){return (new cljs.core.async.t19986(ch__$1,f__$1,map_GT___$1,meta19987));
});
}
return (new cljs.core.async.t19986(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19992 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19992 = (function (ch,p,filter_GT_,meta19993){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19993 = meta19993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19992.cljs$lang$type = true;
cljs.core.async.t19992.cljs$lang$ctorStr = "cljs.core.async/t19992";
cljs.core.async.t19992.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t19992");
});
cljs.core.async.t19992.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19992.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t19992.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19992.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19992.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19992.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19994){var self__ = this;
var _19994__$1 = this;return self__.meta19993;
});
cljs.core.async.t19992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19994,meta19993__$1){var self__ = this;
var _19994__$1 = this;return (new cljs.core.async.t19992(self__.ch,self__.p,self__.filter_GT_,meta19993__$1));
});
cljs.core.async.__GT_t19992 = (function __GT_t19992(ch__$1,p__$1,filter_GT___$1,meta19993){return (new cljs.core.async.t19992(ch__$1,p__$1,filter_GT___$1,meta19993));
});
}
return (new cljs.core.async.t19992(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___20077 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_20056){var state_val_20057 = (state_20056[1]);if((state_val_20057 === 1))
{var state_20056__$1 = state_20056;var statearr_20058_20078 = state_20056__$1;(statearr_20058_20078[2] = null);
(statearr_20058_20078[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20057 === 2))
{var state_20056__$1 = state_20056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20056__$1,4,ch);
} else
{if((state_val_20057 === 3))
{var inst_20054 = (state_20056[2]);var state_20056__$1 = state_20056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20056__$1,inst_20054);
} else
{if((state_val_20057 === 4))
{var inst_20038 = (state_20056[7]);var inst_20038__$1 = (state_20056[2]);var inst_20039 = (inst_20038__$1 == null);var state_20056__$1 = (function (){var statearr_20059 = state_20056;(statearr_20059[7] = inst_20038__$1);
return statearr_20059;
})();if(cljs.core.truth_(inst_20039))
{var statearr_20060_20079 = state_20056__$1;(statearr_20060_20079[1] = 5);
} else
{var statearr_20061_20080 = state_20056__$1;(statearr_20061_20080[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20057 === 5))
{var inst_20041 = cljs.core.async.close_BANG_.call(null,out);var state_20056__$1 = state_20056;var statearr_20062_20081 = state_20056__$1;(statearr_20062_20081[2] = inst_20041);
(statearr_20062_20081[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20057 === 6))
{var inst_20038 = (state_20056[7]);var inst_20043 = p.call(null,inst_20038);var state_20056__$1 = state_20056;if(cljs.core.truth_(inst_20043))
{var statearr_20063_20082 = state_20056__$1;(statearr_20063_20082[1] = 8);
} else
{var statearr_20064_20083 = state_20056__$1;(statearr_20064_20083[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20057 === 7))
{var inst_20052 = (state_20056[2]);var state_20056__$1 = state_20056;var statearr_20065_20084 = state_20056__$1;(statearr_20065_20084[2] = inst_20052);
(statearr_20065_20084[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20057 === 8))
{var inst_20038 = (state_20056[7]);var state_20056__$1 = state_20056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20056__$1,11,out,inst_20038);
} else
{if((state_val_20057 === 9))
{var state_20056__$1 = state_20056;var statearr_20066_20085 = state_20056__$1;(statearr_20066_20085[2] = null);
(statearr_20066_20085[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20057 === 10))
{var inst_20049 = (state_20056[2]);var state_20056__$1 = (function (){var statearr_20067 = state_20056;(statearr_20067[8] = inst_20049);
return statearr_20067;
})();var statearr_20068_20086 = state_20056__$1;(statearr_20068_20086[2] = null);
(statearr_20068_20086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20057 === 11))
{var inst_20046 = (state_20056[2]);var state_20056__$1 = state_20056;var statearr_20069_20087 = state_20056__$1;(statearr_20069_20087[2] = inst_20046);
(statearr_20069_20087[1] = 10);
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
var state_machine__13310__auto____0 = (function (){var statearr_20073 = (new Array(9));(statearr_20073[0] = state_machine__13310__auto__);
(statearr_20073[1] = 1);
return statearr_20073;
});
var state_machine__13310__auto____1 = (function (state_20056){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_20056);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e20074){if((e20074 instanceof Object))
{var ex__13313__auto__ = e20074;var statearr_20075_20088 = state_20056;(statearr_20075_20088[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20089 = state_20056;
state_20056 = G__20089;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_20056){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_20056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_20076 = f__13410__auto__.call(null);(statearr_20076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___20077);
return statearr_20076;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_20241){var state_val_20242 = (state_20241[1]);if((state_val_20242 === 1))
{var state_20241__$1 = state_20241;var statearr_20243_20280 = state_20241__$1;(statearr_20243_20280[2] = null);
(statearr_20243_20280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 2))
{var state_20241__$1 = state_20241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20241__$1,4,in$);
} else
{if((state_val_20242 === 3))
{var inst_20239 = (state_20241[2]);var state_20241__$1 = state_20241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20241__$1,inst_20239);
} else
{if((state_val_20242 === 4))
{var inst_20187 = (state_20241[7]);var inst_20187__$1 = (state_20241[2]);var inst_20188 = (inst_20187__$1 == null);var state_20241__$1 = (function (){var statearr_20244 = state_20241;(statearr_20244[7] = inst_20187__$1);
return statearr_20244;
})();if(cljs.core.truth_(inst_20188))
{var statearr_20245_20281 = state_20241__$1;(statearr_20245_20281[1] = 5);
} else
{var statearr_20246_20282 = state_20241__$1;(statearr_20246_20282[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 5))
{var inst_20190 = cljs.core.async.close_BANG_.call(null,out);var state_20241__$1 = state_20241;var statearr_20247_20283 = state_20241__$1;(statearr_20247_20283[2] = inst_20190);
(statearr_20247_20283[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 6))
{var inst_20187 = (state_20241[7]);var inst_20192 = f.call(null,inst_20187);var inst_20197 = cljs.core.seq.call(null,inst_20192);var inst_20198 = inst_20197;var inst_20199 = null;var inst_20200 = 0;var inst_20201 = 0;var state_20241__$1 = (function (){var statearr_20248 = state_20241;(statearr_20248[8] = inst_20201);
(statearr_20248[9] = inst_20200);
(statearr_20248[10] = inst_20199);
(statearr_20248[11] = inst_20198);
return statearr_20248;
})();var statearr_20249_20284 = state_20241__$1;(statearr_20249_20284[2] = null);
(statearr_20249_20284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 7))
{var inst_20237 = (state_20241[2]);var state_20241__$1 = state_20241;var statearr_20250_20285 = state_20241__$1;(statearr_20250_20285[2] = inst_20237);
(statearr_20250_20285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 8))
{var inst_20201 = (state_20241[8]);var inst_20200 = (state_20241[9]);var inst_20203 = (inst_20201 < inst_20200);var inst_20204 = inst_20203;var state_20241__$1 = state_20241;if(cljs.core.truth_(inst_20204))
{var statearr_20251_20286 = state_20241__$1;(statearr_20251_20286[1] = 10);
} else
{var statearr_20252_20287 = state_20241__$1;(statearr_20252_20287[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 9))
{var inst_20234 = (state_20241[2]);var state_20241__$1 = (function (){var statearr_20253 = state_20241;(statearr_20253[12] = inst_20234);
return statearr_20253;
})();var statearr_20254_20288 = state_20241__$1;(statearr_20254_20288[2] = null);
(statearr_20254_20288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 10))
{var inst_20201 = (state_20241[8]);var inst_20199 = (state_20241[10]);var inst_20206 = cljs.core._nth.call(null,inst_20199,inst_20201);var state_20241__$1 = state_20241;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20241__$1,13,out,inst_20206);
} else
{if((state_val_20242 === 11))
{var inst_20198 = (state_20241[11]);var inst_20212 = (state_20241[13]);var inst_20212__$1 = cljs.core.seq.call(null,inst_20198);var state_20241__$1 = (function (){var statearr_20258 = state_20241;(statearr_20258[13] = inst_20212__$1);
return statearr_20258;
})();if(inst_20212__$1)
{var statearr_20259_20289 = state_20241__$1;(statearr_20259_20289[1] = 14);
} else
{var statearr_20260_20290 = state_20241__$1;(statearr_20260_20290[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 12))
{var inst_20232 = (state_20241[2]);var state_20241__$1 = state_20241;var statearr_20261_20291 = state_20241__$1;(statearr_20261_20291[2] = inst_20232);
(statearr_20261_20291[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 13))
{var inst_20201 = (state_20241[8]);var inst_20200 = (state_20241[9]);var inst_20199 = (state_20241[10]);var inst_20198 = (state_20241[11]);var inst_20208 = (state_20241[2]);var inst_20209 = (inst_20201 + 1);var tmp20255 = inst_20200;var tmp20256 = inst_20199;var tmp20257 = inst_20198;var inst_20198__$1 = tmp20257;var inst_20199__$1 = tmp20256;var inst_20200__$1 = tmp20255;var inst_20201__$1 = inst_20209;var state_20241__$1 = (function (){var statearr_20262 = state_20241;(statearr_20262[8] = inst_20201__$1);
(statearr_20262[9] = inst_20200__$1);
(statearr_20262[10] = inst_20199__$1);
(statearr_20262[11] = inst_20198__$1);
(statearr_20262[14] = inst_20208);
return statearr_20262;
})();var statearr_20263_20292 = state_20241__$1;(statearr_20263_20292[2] = null);
(statearr_20263_20292[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 14))
{var inst_20212 = (state_20241[13]);var inst_20214 = cljs.core.chunked_seq_QMARK_.call(null,inst_20212);var state_20241__$1 = state_20241;if(inst_20214)
{var statearr_20264_20293 = state_20241__$1;(statearr_20264_20293[1] = 17);
} else
{var statearr_20265_20294 = state_20241__$1;(statearr_20265_20294[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 15))
{var state_20241__$1 = state_20241;var statearr_20266_20295 = state_20241__$1;(statearr_20266_20295[2] = null);
(statearr_20266_20295[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 16))
{var inst_20230 = (state_20241[2]);var state_20241__$1 = state_20241;var statearr_20267_20296 = state_20241__$1;(statearr_20267_20296[2] = inst_20230);
(statearr_20267_20296[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 17))
{var inst_20212 = (state_20241[13]);var inst_20216 = cljs.core.chunk_first.call(null,inst_20212);var inst_20217 = cljs.core.chunk_rest.call(null,inst_20212);var inst_20218 = cljs.core.count.call(null,inst_20216);var inst_20198 = inst_20217;var inst_20199 = inst_20216;var inst_20200 = inst_20218;var inst_20201 = 0;var state_20241__$1 = (function (){var statearr_20268 = state_20241;(statearr_20268[8] = inst_20201);
(statearr_20268[9] = inst_20200);
(statearr_20268[10] = inst_20199);
(statearr_20268[11] = inst_20198);
return statearr_20268;
})();var statearr_20269_20297 = state_20241__$1;(statearr_20269_20297[2] = null);
(statearr_20269_20297[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 18))
{var inst_20212 = (state_20241[13]);var inst_20221 = cljs.core.first.call(null,inst_20212);var state_20241__$1 = state_20241;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20241__$1,20,out,inst_20221);
} else
{if((state_val_20242 === 19))
{var inst_20227 = (state_20241[2]);var state_20241__$1 = state_20241;var statearr_20270_20298 = state_20241__$1;(statearr_20270_20298[2] = inst_20227);
(statearr_20270_20298[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20242 === 20))
{var inst_20212 = (state_20241[13]);var inst_20223 = (state_20241[2]);var inst_20224 = cljs.core.next.call(null,inst_20212);var inst_20198 = inst_20224;var inst_20199 = null;var inst_20200 = 0;var inst_20201 = 0;var state_20241__$1 = (function (){var statearr_20271 = state_20241;(statearr_20271[8] = inst_20201);
(statearr_20271[9] = inst_20200);
(statearr_20271[15] = inst_20223);
(statearr_20271[10] = inst_20199);
(statearr_20271[11] = inst_20198);
return statearr_20271;
})();var statearr_20272_20299 = state_20241__$1;(statearr_20272_20299[2] = null);
(statearr_20272_20299[1] = 8);
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
var state_machine__13310__auto____0 = (function (){var statearr_20276 = (new Array(16));(statearr_20276[0] = state_machine__13310__auto__);
(statearr_20276[1] = 1);
return statearr_20276;
});
var state_machine__13310__auto____1 = (function (state_20241){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_20241);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e20277){if((e20277 instanceof Object))
{var ex__13313__auto__ = e20277;var statearr_20278_20300 = state_20241;(statearr_20278_20300[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20241);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20301 = state_20241;
state_20241 = G__20301;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_20241){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_20241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_20279 = f__13410__auto__.call(null);(statearr_20279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_20279;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___20382 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_20361){var state_val_20362 = (state_20361[1]);if((state_val_20362 === 1))
{var state_20361__$1 = state_20361;var statearr_20363_20383 = state_20361__$1;(statearr_20363_20383[2] = null);
(statearr_20363_20383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20362 === 2))
{var state_20361__$1 = state_20361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20361__$1,4,from);
} else
{if((state_val_20362 === 3))
{var inst_20359 = (state_20361[2]);var state_20361__$1 = state_20361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20361__$1,inst_20359);
} else
{if((state_val_20362 === 4))
{var inst_20344 = (state_20361[7]);var inst_20344__$1 = (state_20361[2]);var inst_20345 = (inst_20344__$1 == null);var state_20361__$1 = (function (){var statearr_20364 = state_20361;(statearr_20364[7] = inst_20344__$1);
return statearr_20364;
})();if(cljs.core.truth_(inst_20345))
{var statearr_20365_20384 = state_20361__$1;(statearr_20365_20384[1] = 5);
} else
{var statearr_20366_20385 = state_20361__$1;(statearr_20366_20385[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20362 === 5))
{var state_20361__$1 = state_20361;if(cljs.core.truth_(close_QMARK_))
{var statearr_20367_20386 = state_20361__$1;(statearr_20367_20386[1] = 8);
} else
{var statearr_20368_20387 = state_20361__$1;(statearr_20368_20387[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20362 === 6))
{var inst_20344 = (state_20361[7]);var state_20361__$1 = state_20361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20361__$1,11,to,inst_20344);
} else
{if((state_val_20362 === 7))
{var inst_20357 = (state_20361[2]);var state_20361__$1 = state_20361;var statearr_20369_20388 = state_20361__$1;(statearr_20369_20388[2] = inst_20357);
(statearr_20369_20388[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20362 === 8))
{var inst_20348 = cljs.core.async.close_BANG_.call(null,to);var state_20361__$1 = state_20361;var statearr_20370_20389 = state_20361__$1;(statearr_20370_20389[2] = inst_20348);
(statearr_20370_20389[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20362 === 9))
{var state_20361__$1 = state_20361;var statearr_20371_20390 = state_20361__$1;(statearr_20371_20390[2] = null);
(statearr_20371_20390[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20362 === 10))
{var inst_20351 = (state_20361[2]);var state_20361__$1 = state_20361;var statearr_20372_20391 = state_20361__$1;(statearr_20372_20391[2] = inst_20351);
(statearr_20372_20391[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20362 === 11))
{var inst_20354 = (state_20361[2]);var state_20361__$1 = (function (){var statearr_20373 = state_20361;(statearr_20373[8] = inst_20354);
return statearr_20373;
})();var statearr_20374_20392 = state_20361__$1;(statearr_20374_20392[2] = null);
(statearr_20374_20392[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_20378 = (new Array(9));(statearr_20378[0] = state_machine__13310__auto__);
(statearr_20378[1] = 1);
return statearr_20378;
});
var state_machine__13310__auto____1 = (function (state_20361){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_20361);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e20379){if((e20379 instanceof Object))
{var ex__13313__auto__ = e20379;var statearr_20380_20393 = state_20361;(statearr_20380_20393[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20361);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20394 = state_20361;
state_20361 = G__20394;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_20361){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_20361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_20381 = f__13410__auto__.call(null);(statearr_20381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___20382);
return statearr_20381;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___20481 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_20459){var state_val_20460 = (state_20459[1]);if((state_val_20460 === 1))
{var state_20459__$1 = state_20459;var statearr_20461_20482 = state_20459__$1;(statearr_20461_20482[2] = null);
(statearr_20461_20482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20460 === 2))
{var state_20459__$1 = state_20459;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20459__$1,4,ch);
} else
{if((state_val_20460 === 3))
{var inst_20457 = (state_20459[2]);var state_20459__$1 = state_20459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20459__$1,inst_20457);
} else
{if((state_val_20460 === 4))
{var inst_20440 = (state_20459[7]);var inst_20440__$1 = (state_20459[2]);var inst_20441 = (inst_20440__$1 == null);var state_20459__$1 = (function (){var statearr_20462 = state_20459;(statearr_20462[7] = inst_20440__$1);
return statearr_20462;
})();if(cljs.core.truth_(inst_20441))
{var statearr_20463_20483 = state_20459__$1;(statearr_20463_20483[1] = 5);
} else
{var statearr_20464_20484 = state_20459__$1;(statearr_20464_20484[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20460 === 5))
{var inst_20443 = cljs.core.async.close_BANG_.call(null,tc);var inst_20444 = cljs.core.async.close_BANG_.call(null,fc);var state_20459__$1 = (function (){var statearr_20465 = state_20459;(statearr_20465[8] = inst_20443);
return statearr_20465;
})();var statearr_20466_20485 = state_20459__$1;(statearr_20466_20485[2] = inst_20444);
(statearr_20466_20485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20460 === 6))
{var inst_20440 = (state_20459[7]);var inst_20446 = p.call(null,inst_20440);var state_20459__$1 = state_20459;if(cljs.core.truth_(inst_20446))
{var statearr_20467_20486 = state_20459__$1;(statearr_20467_20486[1] = 9);
} else
{var statearr_20468_20487 = state_20459__$1;(statearr_20468_20487[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20460 === 7))
{var inst_20455 = (state_20459[2]);var state_20459__$1 = state_20459;var statearr_20469_20488 = state_20459__$1;(statearr_20469_20488[2] = inst_20455);
(statearr_20469_20488[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20460 === 8))
{var inst_20452 = (state_20459[2]);var state_20459__$1 = (function (){var statearr_20470 = state_20459;(statearr_20470[9] = inst_20452);
return statearr_20470;
})();var statearr_20471_20489 = state_20459__$1;(statearr_20471_20489[2] = null);
(statearr_20471_20489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20460 === 9))
{var state_20459__$1 = state_20459;var statearr_20472_20490 = state_20459__$1;(statearr_20472_20490[2] = tc);
(statearr_20472_20490[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20460 === 10))
{var state_20459__$1 = state_20459;var statearr_20473_20491 = state_20459__$1;(statearr_20473_20491[2] = fc);
(statearr_20473_20491[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20460 === 11))
{var inst_20440 = (state_20459[7]);var inst_20450 = (state_20459[2]);var state_20459__$1 = state_20459;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20459__$1,8,inst_20450,inst_20440);
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
var state_machine__13310__auto____0 = (function (){var statearr_20477 = (new Array(10));(statearr_20477[0] = state_machine__13310__auto__);
(statearr_20477[1] = 1);
return statearr_20477;
});
var state_machine__13310__auto____1 = (function (state_20459){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_20459);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e20478){if((e20478 instanceof Object))
{var ex__13313__auto__ = e20478;var statearr_20479_20492 = state_20459;(statearr_20479_20492[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20459);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20493 = state_20459;
state_20459 = G__20493;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_20459){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_20459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_20480 = f__13410__auto__.call(null);(statearr_20480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___20481);
return statearr_20480;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_20540){var state_val_20541 = (state_20540[1]);if((state_val_20541 === 7))
{var inst_20536 = (state_20540[2]);var state_20540__$1 = state_20540;var statearr_20542_20558 = state_20540__$1;(statearr_20542_20558[2] = inst_20536);
(statearr_20542_20558[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20541 === 6))
{var inst_20526 = (state_20540[7]);var inst_20529 = (state_20540[8]);var inst_20533 = f.call(null,inst_20526,inst_20529);var inst_20526__$1 = inst_20533;var state_20540__$1 = (function (){var statearr_20543 = state_20540;(statearr_20543[7] = inst_20526__$1);
return statearr_20543;
})();var statearr_20544_20559 = state_20540__$1;(statearr_20544_20559[2] = null);
(statearr_20544_20559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20541 === 5))
{var inst_20526 = (state_20540[7]);var state_20540__$1 = state_20540;var statearr_20545_20560 = state_20540__$1;(statearr_20545_20560[2] = inst_20526);
(statearr_20545_20560[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20541 === 4))
{var inst_20529 = (state_20540[8]);var inst_20529__$1 = (state_20540[2]);var inst_20530 = (inst_20529__$1 == null);var state_20540__$1 = (function (){var statearr_20546 = state_20540;(statearr_20546[8] = inst_20529__$1);
return statearr_20546;
})();if(cljs.core.truth_(inst_20530))
{var statearr_20547_20561 = state_20540__$1;(statearr_20547_20561[1] = 5);
} else
{var statearr_20548_20562 = state_20540__$1;(statearr_20548_20562[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20541 === 3))
{var inst_20538 = (state_20540[2]);var state_20540__$1 = state_20540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20540__$1,inst_20538);
} else
{if((state_val_20541 === 2))
{var state_20540__$1 = state_20540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20540__$1,4,ch);
} else
{if((state_val_20541 === 1))
{var inst_20526 = init;var state_20540__$1 = (function (){var statearr_20549 = state_20540;(statearr_20549[7] = inst_20526);
return statearr_20549;
})();var statearr_20550_20563 = state_20540__$1;(statearr_20550_20563[2] = null);
(statearr_20550_20563[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_20554 = (new Array(9));(statearr_20554[0] = state_machine__13310__auto__);
(statearr_20554[1] = 1);
return statearr_20554;
});
var state_machine__13310__auto____1 = (function (state_20540){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_20540);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e20555){if((e20555 instanceof Object))
{var ex__13313__auto__ = e20555;var statearr_20556_20564 = state_20540;(statearr_20556_20564[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20565 = state_20540;
state_20540 = G__20565;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_20540){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_20540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_20557 = f__13410__auto__.call(null);(statearr_20557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_20557;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_20627){var state_val_20628 = (state_20627[1]);if((state_val_20628 === 1))
{var inst_20607 = cljs.core.seq.call(null,coll);var inst_20608 = inst_20607;var state_20627__$1 = (function (){var statearr_20629 = state_20627;(statearr_20629[7] = inst_20608);
return statearr_20629;
})();var statearr_20630_20648 = state_20627__$1;(statearr_20630_20648[2] = null);
(statearr_20630_20648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20628 === 2))
{var inst_20608 = (state_20627[7]);var state_20627__$1 = state_20627;if(cljs.core.truth_(inst_20608))
{var statearr_20631_20649 = state_20627__$1;(statearr_20631_20649[1] = 4);
} else
{var statearr_20632_20650 = state_20627__$1;(statearr_20632_20650[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20628 === 3))
{var inst_20625 = (state_20627[2]);var state_20627__$1 = state_20627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20627__$1,inst_20625);
} else
{if((state_val_20628 === 4))
{var inst_20608 = (state_20627[7]);var inst_20611 = cljs.core.first.call(null,inst_20608);var state_20627__$1 = state_20627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20627__$1,7,ch,inst_20611);
} else
{if((state_val_20628 === 5))
{var state_20627__$1 = state_20627;if(cljs.core.truth_(close_QMARK_))
{var statearr_20633_20651 = state_20627__$1;(statearr_20633_20651[1] = 8);
} else
{var statearr_20634_20652 = state_20627__$1;(statearr_20634_20652[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20628 === 6))
{var inst_20623 = (state_20627[2]);var state_20627__$1 = state_20627;var statearr_20635_20653 = state_20627__$1;(statearr_20635_20653[2] = inst_20623);
(statearr_20635_20653[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20628 === 7))
{var inst_20608 = (state_20627[7]);var inst_20613 = (state_20627[2]);var inst_20614 = cljs.core.next.call(null,inst_20608);var inst_20608__$1 = inst_20614;var state_20627__$1 = (function (){var statearr_20636 = state_20627;(statearr_20636[8] = inst_20613);
(statearr_20636[7] = inst_20608__$1);
return statearr_20636;
})();var statearr_20637_20654 = state_20627__$1;(statearr_20637_20654[2] = null);
(statearr_20637_20654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20628 === 8))
{var inst_20618 = cljs.core.async.close_BANG_.call(null,ch);var state_20627__$1 = state_20627;var statearr_20638_20655 = state_20627__$1;(statearr_20638_20655[2] = inst_20618);
(statearr_20638_20655[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20628 === 9))
{var state_20627__$1 = state_20627;var statearr_20639_20656 = state_20627__$1;(statearr_20639_20656[2] = null);
(statearr_20639_20656[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20628 === 10))
{var inst_20621 = (state_20627[2]);var state_20627__$1 = state_20627;var statearr_20640_20657 = state_20627__$1;(statearr_20640_20657[2] = inst_20621);
(statearr_20640_20657[1] = 6);
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
var state_machine__13310__auto____0 = (function (){var statearr_20644 = (new Array(9));(statearr_20644[0] = state_machine__13310__auto__);
(statearr_20644[1] = 1);
return statearr_20644;
});
var state_machine__13310__auto____1 = (function (state_20627){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_20627);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e20645){if((e20645 instanceof Object))
{var ex__13313__auto__ = e20645;var statearr_20646_20658 = state_20627;(statearr_20646_20658[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20659 = state_20627;
state_20627 = G__20659;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_20627){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_20627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_20647 = f__13410__auto__.call(null);(statearr_20647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_20647;
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
cljs.core.async.Mux = (function (){var obj20661 = {};return obj20661;
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
cljs.core.async.Mult = (function (){var obj20663 = {};return obj20663;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20878 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20878 = (function (cs,ch,mult,meta20879){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20879 = meta20879;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20878.cljs$lang$type = true;
cljs.core.async.t20878.cljs$lang$ctorStr = "cljs.core.async/t20878";
cljs.core.async.t20878.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t20878");
});})(cs))
;
cljs.core.async.t20878.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20878.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20878.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20878.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20878.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20880){var self__ = this;
var _20880__$1 = this;return self__.meta20879;
});})(cs))
;
cljs.core.async.t20878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20880,meta20879__$1){var self__ = this;
var _20880__$1 = this;return (new cljs.core.async.t20878(self__.cs,self__.ch,self__.mult,meta20879__$1));
});})(cs))
;
cljs.core.async.__GT_t20878 = ((function (cs){
return (function __GT_t20878(cs__$1,ch__$1,mult__$1,meta20879){return (new cljs.core.async.t20878(cs__$1,ch__$1,mult__$1,meta20879));
});})(cs))
;
}
return (new cljs.core.async.t20878(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___21092 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_21010){var state_val_21011 = (state_21010[1]);if((state_val_21011 === 32))
{var inst_20883 = (state_21010[7]);var inst_20959 = (state_21010[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21010,31,Object,null,30);var inst_20966 = cljs.core.async.put_BANG_.call(null,inst_20959,inst_20883,done);var state_21010__$1 = state_21010;var statearr_21012_21093 = state_21010__$1;(statearr_21012_21093[2] = inst_20966);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21010__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 1))
{var state_21010__$1 = state_21010;var statearr_21013_21094 = state_21010__$1;(statearr_21013_21094[2] = null);
(statearr_21013_21094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 33))
{var inst_20972 = (state_21010[9]);var inst_20974 = cljs.core.chunked_seq_QMARK_.call(null,inst_20972);var state_21010__$1 = state_21010;if(inst_20974)
{var statearr_21014_21095 = state_21010__$1;(statearr_21014_21095[1] = 36);
} else
{var statearr_21015_21096 = state_21010__$1;(statearr_21015_21096[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 2))
{var state_21010__$1 = state_21010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21010__$1,4,ch);
} else
{if((state_val_21011 === 34))
{var state_21010__$1 = state_21010;var statearr_21016_21097 = state_21010__$1;(statearr_21016_21097[2] = null);
(statearr_21016_21097[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 3))
{var inst_21008 = (state_21010[2]);var state_21010__$1 = state_21010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21010__$1,inst_21008);
} else
{if((state_val_21011 === 35))
{var inst_20997 = (state_21010[2]);var state_21010__$1 = state_21010;var statearr_21017_21098 = state_21010__$1;(statearr_21017_21098[2] = inst_20997);
(statearr_21017_21098[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 4))
{var inst_20883 = (state_21010[7]);var inst_20883__$1 = (state_21010[2]);var inst_20884 = (inst_20883__$1 == null);var state_21010__$1 = (function (){var statearr_21018 = state_21010;(statearr_21018[7] = inst_20883__$1);
return statearr_21018;
})();if(cljs.core.truth_(inst_20884))
{var statearr_21019_21099 = state_21010__$1;(statearr_21019_21099[1] = 5);
} else
{var statearr_21020_21100 = state_21010__$1;(statearr_21020_21100[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 36))
{var inst_20972 = (state_21010[9]);var inst_20976 = cljs.core.chunk_first.call(null,inst_20972);var inst_20977 = cljs.core.chunk_rest.call(null,inst_20972);var inst_20978 = cljs.core.count.call(null,inst_20976);var inst_20951 = inst_20977;var inst_20952 = inst_20976;var inst_20953 = inst_20978;var inst_20954 = 0;var state_21010__$1 = (function (){var statearr_21021 = state_21010;(statearr_21021[10] = inst_20951);
(statearr_21021[11] = inst_20952);
(statearr_21021[12] = inst_20954);
(statearr_21021[13] = inst_20953);
return statearr_21021;
})();var statearr_21022_21101 = state_21010__$1;(statearr_21022_21101[2] = null);
(statearr_21022_21101[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 5))
{var inst_20890 = cljs.core.deref.call(null,cs);var inst_20891 = cljs.core.seq.call(null,inst_20890);var inst_20892 = inst_20891;var inst_20893 = null;var inst_20894 = 0;var inst_20895 = 0;var state_21010__$1 = (function (){var statearr_21023 = state_21010;(statearr_21023[14] = inst_20893);
(statearr_21023[15] = inst_20892);
(statearr_21023[16] = inst_20894);
(statearr_21023[17] = inst_20895);
return statearr_21023;
})();var statearr_21024_21102 = state_21010__$1;(statearr_21024_21102[2] = null);
(statearr_21024_21102[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 37))
{var inst_20972 = (state_21010[9]);var inst_20981 = cljs.core.first.call(null,inst_20972);var state_21010__$1 = (function (){var statearr_21025 = state_21010;(statearr_21025[18] = inst_20981);
return statearr_21025;
})();var statearr_21026_21103 = state_21010__$1;(statearr_21026_21103[2] = null);
(statearr_21026_21103[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 6))
{var inst_20942 = cljs.core.deref.call(null,cs);var inst_20943 = cljs.core.keys.call(null,inst_20942);var inst_20944 = cljs.core.count.call(null,inst_20943);var inst_20945 = cljs.core.reset_BANG_.call(null,dctr,inst_20944);var inst_20950 = cljs.core.seq.call(null,inst_20943);var inst_20951 = inst_20950;var inst_20952 = null;var inst_20953 = 0;var inst_20954 = 0;var state_21010__$1 = (function (){var statearr_21027 = state_21010;(statearr_21027[19] = inst_20945);
(statearr_21027[10] = inst_20951);
(statearr_21027[11] = inst_20952);
(statearr_21027[12] = inst_20954);
(statearr_21027[13] = inst_20953);
return statearr_21027;
})();var statearr_21028_21104 = state_21010__$1;(statearr_21028_21104[2] = null);
(statearr_21028_21104[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 38))
{var inst_20994 = (state_21010[2]);var state_21010__$1 = state_21010;var statearr_21029_21105 = state_21010__$1;(statearr_21029_21105[2] = inst_20994);
(statearr_21029_21105[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 7))
{var inst_21006 = (state_21010[2]);var state_21010__$1 = state_21010;var statearr_21030_21106 = state_21010__$1;(statearr_21030_21106[2] = inst_21006);
(statearr_21030_21106[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 39))
{var inst_20972 = (state_21010[9]);var inst_20990 = (state_21010[2]);var inst_20991 = cljs.core.next.call(null,inst_20972);var inst_20951 = inst_20991;var inst_20952 = null;var inst_20953 = 0;var inst_20954 = 0;var state_21010__$1 = (function (){var statearr_21031 = state_21010;(statearr_21031[10] = inst_20951);
(statearr_21031[11] = inst_20952);
(statearr_21031[12] = inst_20954);
(statearr_21031[13] = inst_20953);
(statearr_21031[20] = inst_20990);
return statearr_21031;
})();var statearr_21032_21107 = state_21010__$1;(statearr_21032_21107[2] = null);
(statearr_21032_21107[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 8))
{var inst_20894 = (state_21010[16]);var inst_20895 = (state_21010[17]);var inst_20897 = (inst_20895 < inst_20894);var inst_20898 = inst_20897;var state_21010__$1 = state_21010;if(cljs.core.truth_(inst_20898))
{var statearr_21033_21108 = state_21010__$1;(statearr_21033_21108[1] = 10);
} else
{var statearr_21034_21109 = state_21010__$1;(statearr_21034_21109[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 40))
{var inst_20981 = (state_21010[18]);var inst_20982 = (state_21010[2]);var inst_20983 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20984 = cljs.core.async.untap_STAR_.call(null,m,inst_20981);var state_21010__$1 = (function (){var statearr_21035 = state_21010;(statearr_21035[21] = inst_20982);
(statearr_21035[22] = inst_20983);
return statearr_21035;
})();var statearr_21036_21110 = state_21010__$1;(statearr_21036_21110[2] = inst_20984);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21010__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 9))
{var inst_20940 = (state_21010[2]);var state_21010__$1 = state_21010;var statearr_21037_21111 = state_21010__$1;(statearr_21037_21111[2] = inst_20940);
(statearr_21037_21111[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 41))
{var inst_20883 = (state_21010[7]);var inst_20981 = (state_21010[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21010,40,Object,null,39);var inst_20988 = cljs.core.async.put_BANG_.call(null,inst_20981,inst_20883,done);var state_21010__$1 = state_21010;var statearr_21038_21112 = state_21010__$1;(statearr_21038_21112[2] = inst_20988);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21010__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 10))
{var inst_20893 = (state_21010[14]);var inst_20895 = (state_21010[17]);var inst_20901 = cljs.core._nth.call(null,inst_20893,inst_20895);var inst_20902 = cljs.core.nth.call(null,inst_20901,0,null);var inst_20903 = cljs.core.nth.call(null,inst_20901,1,null);var state_21010__$1 = (function (){var statearr_21039 = state_21010;(statearr_21039[23] = inst_20902);
return statearr_21039;
})();if(cljs.core.truth_(inst_20903))
{var statearr_21040_21113 = state_21010__$1;(statearr_21040_21113[1] = 13);
} else
{var statearr_21041_21114 = state_21010__$1;(statearr_21041_21114[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 42))
{var inst_21003 = (state_21010[2]);var state_21010__$1 = (function (){var statearr_21042 = state_21010;(statearr_21042[24] = inst_21003);
return statearr_21042;
})();var statearr_21043_21115 = state_21010__$1;(statearr_21043_21115[2] = null);
(statearr_21043_21115[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 11))
{var inst_20892 = (state_21010[15]);var inst_20912 = (state_21010[25]);var inst_20912__$1 = cljs.core.seq.call(null,inst_20892);var state_21010__$1 = (function (){var statearr_21044 = state_21010;(statearr_21044[25] = inst_20912__$1);
return statearr_21044;
})();if(inst_20912__$1)
{var statearr_21045_21116 = state_21010__$1;(statearr_21045_21116[1] = 16);
} else
{var statearr_21046_21117 = state_21010__$1;(statearr_21046_21117[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 12))
{var inst_20938 = (state_21010[2]);var state_21010__$1 = state_21010;var statearr_21047_21118 = state_21010__$1;(statearr_21047_21118[2] = inst_20938);
(statearr_21047_21118[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 13))
{var inst_20902 = (state_21010[23]);var inst_20905 = cljs.core.async.close_BANG_.call(null,inst_20902);var state_21010__$1 = state_21010;var statearr_21051_21119 = state_21010__$1;(statearr_21051_21119[2] = inst_20905);
(statearr_21051_21119[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 14))
{var state_21010__$1 = state_21010;var statearr_21052_21120 = state_21010__$1;(statearr_21052_21120[2] = null);
(statearr_21052_21120[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 15))
{var inst_20893 = (state_21010[14]);var inst_20892 = (state_21010[15]);var inst_20894 = (state_21010[16]);var inst_20895 = (state_21010[17]);var inst_20908 = (state_21010[2]);var inst_20909 = (inst_20895 + 1);var tmp21048 = inst_20893;var tmp21049 = inst_20892;var tmp21050 = inst_20894;var inst_20892__$1 = tmp21049;var inst_20893__$1 = tmp21048;var inst_20894__$1 = tmp21050;var inst_20895__$1 = inst_20909;var state_21010__$1 = (function (){var statearr_21053 = state_21010;(statearr_21053[26] = inst_20908);
(statearr_21053[14] = inst_20893__$1);
(statearr_21053[15] = inst_20892__$1);
(statearr_21053[16] = inst_20894__$1);
(statearr_21053[17] = inst_20895__$1);
return statearr_21053;
})();var statearr_21054_21121 = state_21010__$1;(statearr_21054_21121[2] = null);
(statearr_21054_21121[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 16))
{var inst_20912 = (state_21010[25]);var inst_20914 = cljs.core.chunked_seq_QMARK_.call(null,inst_20912);var state_21010__$1 = state_21010;if(inst_20914)
{var statearr_21055_21122 = state_21010__$1;(statearr_21055_21122[1] = 19);
} else
{var statearr_21056_21123 = state_21010__$1;(statearr_21056_21123[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 17))
{var state_21010__$1 = state_21010;var statearr_21057_21124 = state_21010__$1;(statearr_21057_21124[2] = null);
(statearr_21057_21124[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 18))
{var inst_20936 = (state_21010[2]);var state_21010__$1 = state_21010;var statearr_21058_21125 = state_21010__$1;(statearr_21058_21125[2] = inst_20936);
(statearr_21058_21125[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 19))
{var inst_20912 = (state_21010[25]);var inst_20916 = cljs.core.chunk_first.call(null,inst_20912);var inst_20917 = cljs.core.chunk_rest.call(null,inst_20912);var inst_20918 = cljs.core.count.call(null,inst_20916);var inst_20892 = inst_20917;var inst_20893 = inst_20916;var inst_20894 = inst_20918;var inst_20895 = 0;var state_21010__$1 = (function (){var statearr_21059 = state_21010;(statearr_21059[14] = inst_20893);
(statearr_21059[15] = inst_20892);
(statearr_21059[16] = inst_20894);
(statearr_21059[17] = inst_20895);
return statearr_21059;
})();var statearr_21060_21126 = state_21010__$1;(statearr_21060_21126[2] = null);
(statearr_21060_21126[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 20))
{var inst_20912 = (state_21010[25]);var inst_20922 = cljs.core.first.call(null,inst_20912);var inst_20923 = cljs.core.nth.call(null,inst_20922,0,null);var inst_20924 = cljs.core.nth.call(null,inst_20922,1,null);var state_21010__$1 = (function (){var statearr_21061 = state_21010;(statearr_21061[27] = inst_20923);
return statearr_21061;
})();if(cljs.core.truth_(inst_20924))
{var statearr_21062_21127 = state_21010__$1;(statearr_21062_21127[1] = 22);
} else
{var statearr_21063_21128 = state_21010__$1;(statearr_21063_21128[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 21))
{var inst_20933 = (state_21010[2]);var state_21010__$1 = state_21010;var statearr_21064_21129 = state_21010__$1;(statearr_21064_21129[2] = inst_20933);
(statearr_21064_21129[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 22))
{var inst_20923 = (state_21010[27]);var inst_20926 = cljs.core.async.close_BANG_.call(null,inst_20923);var state_21010__$1 = state_21010;var statearr_21065_21130 = state_21010__$1;(statearr_21065_21130[2] = inst_20926);
(statearr_21065_21130[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 23))
{var state_21010__$1 = state_21010;var statearr_21066_21131 = state_21010__$1;(statearr_21066_21131[2] = null);
(statearr_21066_21131[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 24))
{var inst_20912 = (state_21010[25]);var inst_20929 = (state_21010[2]);var inst_20930 = cljs.core.next.call(null,inst_20912);var inst_20892 = inst_20930;var inst_20893 = null;var inst_20894 = 0;var inst_20895 = 0;var state_21010__$1 = (function (){var statearr_21067 = state_21010;(statearr_21067[14] = inst_20893);
(statearr_21067[15] = inst_20892);
(statearr_21067[28] = inst_20929);
(statearr_21067[16] = inst_20894);
(statearr_21067[17] = inst_20895);
return statearr_21067;
})();var statearr_21068_21132 = state_21010__$1;(statearr_21068_21132[2] = null);
(statearr_21068_21132[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 25))
{var inst_20954 = (state_21010[12]);var inst_20953 = (state_21010[13]);var inst_20956 = (inst_20954 < inst_20953);var inst_20957 = inst_20956;var state_21010__$1 = state_21010;if(cljs.core.truth_(inst_20957))
{var statearr_21069_21133 = state_21010__$1;(statearr_21069_21133[1] = 27);
} else
{var statearr_21070_21134 = state_21010__$1;(statearr_21070_21134[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 26))
{var inst_21001 = (state_21010[2]);var state_21010__$1 = (function (){var statearr_21071 = state_21010;(statearr_21071[29] = inst_21001);
return statearr_21071;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21010__$1,42,dchan);
} else
{if((state_val_21011 === 27))
{var inst_20952 = (state_21010[11]);var inst_20954 = (state_21010[12]);var inst_20959 = cljs.core._nth.call(null,inst_20952,inst_20954);var state_21010__$1 = (function (){var statearr_21072 = state_21010;(statearr_21072[8] = inst_20959);
return statearr_21072;
})();var statearr_21073_21135 = state_21010__$1;(statearr_21073_21135[2] = null);
(statearr_21073_21135[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 28))
{var inst_20951 = (state_21010[10]);var inst_20972 = (state_21010[9]);var inst_20972__$1 = cljs.core.seq.call(null,inst_20951);var state_21010__$1 = (function (){var statearr_21077 = state_21010;(statearr_21077[9] = inst_20972__$1);
return statearr_21077;
})();if(inst_20972__$1)
{var statearr_21078_21136 = state_21010__$1;(statearr_21078_21136[1] = 33);
} else
{var statearr_21079_21137 = state_21010__$1;(statearr_21079_21137[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 29))
{var inst_20999 = (state_21010[2]);var state_21010__$1 = state_21010;var statearr_21080_21138 = state_21010__$1;(statearr_21080_21138[2] = inst_20999);
(statearr_21080_21138[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 30))
{var inst_20951 = (state_21010[10]);var inst_20952 = (state_21010[11]);var inst_20954 = (state_21010[12]);var inst_20953 = (state_21010[13]);var inst_20968 = (state_21010[2]);var inst_20969 = (inst_20954 + 1);var tmp21074 = inst_20951;var tmp21075 = inst_20952;var tmp21076 = inst_20953;var inst_20951__$1 = tmp21074;var inst_20952__$1 = tmp21075;var inst_20953__$1 = tmp21076;var inst_20954__$1 = inst_20969;var state_21010__$1 = (function (){var statearr_21081 = state_21010;(statearr_21081[10] = inst_20951__$1);
(statearr_21081[11] = inst_20952__$1);
(statearr_21081[12] = inst_20954__$1);
(statearr_21081[13] = inst_20953__$1);
(statearr_21081[30] = inst_20968);
return statearr_21081;
})();var statearr_21082_21139 = state_21010__$1;(statearr_21082_21139[2] = null);
(statearr_21082_21139[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21011 === 31))
{var inst_20959 = (state_21010[8]);var inst_20960 = (state_21010[2]);var inst_20961 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20962 = cljs.core.async.untap_STAR_.call(null,m,inst_20959);var state_21010__$1 = (function (){var statearr_21083 = state_21010;(statearr_21083[31] = inst_20960);
(statearr_21083[32] = inst_20961);
return statearr_21083;
})();var statearr_21084_21140 = state_21010__$1;(statearr_21084_21140[2] = inst_20962);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21010__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_21088 = (new Array(33));(statearr_21088[0] = state_machine__13310__auto__);
(statearr_21088[1] = 1);
return statearr_21088;
});
var state_machine__13310__auto____1 = (function (state_21010){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_21010);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e21089){if((e21089 instanceof Object))
{var ex__13313__auto__ = e21089;var statearr_21090_21141 = state_21010;(statearr_21090_21141[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21010);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21142 = state_21010;
state_21010 = G__21142;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_21010){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_21010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_21091 = f__13410__auto__.call(null);(statearr_21091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___21092);
return statearr_21091;
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
cljs.core.async.Mix = (function (){var obj21144 = {};return obj21144;
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
;var m = (function (){if(typeof cljs.core.async.t21254 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21254 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta21255){
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
this.meta21255 = meta21255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21254.cljs$lang$type = true;
cljs.core.async.t21254.cljs$lang$ctorStr = "cljs.core.async/t21254";
cljs.core.async.t21254.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t21254");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21254.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t21254.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21254.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21254.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21254.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21254.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21254.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21254.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21256){var self__ = this;
var _21256__$1 = this;return self__.meta21255;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21256,meta21255__$1){var self__ = this;
var _21256__$1 = this;return (new cljs.core.async.t21254(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta21255__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t21254 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21254(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21255){return (new cljs.core.async.t21254(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21255));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t21254(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___21363 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_21321){var state_val_21322 = (state_21321[1]);if((state_val_21322 === 1))
{var inst_21260 = (state_21321[7]);var inst_21260__$1 = calc_state.call(null);var inst_21261 = cljs.core.seq_QMARK_.call(null,inst_21260__$1);var state_21321__$1 = (function (){var statearr_21323 = state_21321;(statearr_21323[7] = inst_21260__$1);
return statearr_21323;
})();if(inst_21261)
{var statearr_21324_21364 = state_21321__$1;(statearr_21324_21364[1] = 2);
} else
{var statearr_21325_21365 = state_21321__$1;(statearr_21325_21365[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 2))
{var inst_21260 = (state_21321[7]);var inst_21263 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21260);var state_21321__$1 = state_21321;var statearr_21326_21366 = state_21321__$1;(statearr_21326_21366[2] = inst_21263);
(statearr_21326_21366[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 3))
{var inst_21260 = (state_21321[7]);var state_21321__$1 = state_21321;var statearr_21327_21367 = state_21321__$1;(statearr_21327_21367[2] = inst_21260);
(statearr_21327_21367[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 4))
{var inst_21260 = (state_21321[7]);var inst_21266 = (state_21321[2]);var inst_21267 = cljs.core.get.call(null,inst_21266,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_21268 = cljs.core.get.call(null,inst_21266,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_21269 = cljs.core.get.call(null,inst_21266,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_21270 = inst_21260;var state_21321__$1 = (function (){var statearr_21328 = state_21321;(statearr_21328[8] = inst_21267);
(statearr_21328[9] = inst_21270);
(statearr_21328[10] = inst_21268);
(statearr_21328[11] = inst_21269);
return statearr_21328;
})();var statearr_21329_21368 = state_21321__$1;(statearr_21329_21368[2] = null);
(statearr_21329_21368[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 5))
{var inst_21270 = (state_21321[9]);var inst_21273 = cljs.core.seq_QMARK_.call(null,inst_21270);var state_21321__$1 = state_21321;if(inst_21273)
{var statearr_21330_21369 = state_21321__$1;(statearr_21330_21369[1] = 7);
} else
{var statearr_21331_21370 = state_21321__$1;(statearr_21331_21370[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 6))
{var inst_21319 = (state_21321[2]);var state_21321__$1 = state_21321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21321__$1,inst_21319);
} else
{if((state_val_21322 === 7))
{var inst_21270 = (state_21321[9]);var inst_21275 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21270);var state_21321__$1 = state_21321;var statearr_21332_21371 = state_21321__$1;(statearr_21332_21371[2] = inst_21275);
(statearr_21332_21371[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 8))
{var inst_21270 = (state_21321[9]);var state_21321__$1 = state_21321;var statearr_21333_21372 = state_21321__$1;(statearr_21333_21372[2] = inst_21270);
(statearr_21333_21372[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 9))
{var inst_21278 = (state_21321[12]);var inst_21278__$1 = (state_21321[2]);var inst_21279 = cljs.core.get.call(null,inst_21278__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_21280 = cljs.core.get.call(null,inst_21278__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_21281 = cljs.core.get.call(null,inst_21278__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_21321__$1 = (function (){var statearr_21334 = state_21321;(statearr_21334[12] = inst_21278__$1);
(statearr_21334[13] = inst_21281);
(statearr_21334[14] = inst_21280);
return statearr_21334;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21321__$1,10,inst_21279);
} else
{if((state_val_21322 === 10))
{var inst_21286 = (state_21321[15]);var inst_21285 = (state_21321[16]);var inst_21284 = (state_21321[2]);var inst_21285__$1 = cljs.core.nth.call(null,inst_21284,0,null);var inst_21286__$1 = cljs.core.nth.call(null,inst_21284,1,null);var inst_21287 = (inst_21285__$1 == null);var inst_21288 = cljs.core._EQ_.call(null,inst_21286__$1,change);var inst_21289 = (inst_21287) || (inst_21288);var state_21321__$1 = (function (){var statearr_21335 = state_21321;(statearr_21335[15] = inst_21286__$1);
(statearr_21335[16] = inst_21285__$1);
return statearr_21335;
})();if(cljs.core.truth_(inst_21289))
{var statearr_21336_21373 = state_21321__$1;(statearr_21336_21373[1] = 11);
} else
{var statearr_21337_21374 = state_21321__$1;(statearr_21337_21374[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 11))
{var inst_21285 = (state_21321[16]);var inst_21291 = (inst_21285 == null);var state_21321__$1 = state_21321;if(cljs.core.truth_(inst_21291))
{var statearr_21338_21375 = state_21321__$1;(statearr_21338_21375[1] = 14);
} else
{var statearr_21339_21376 = state_21321__$1;(statearr_21339_21376[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 12))
{var inst_21300 = (state_21321[17]);var inst_21286 = (state_21321[15]);var inst_21281 = (state_21321[13]);var inst_21300__$1 = inst_21281.call(null,inst_21286);var state_21321__$1 = (function (){var statearr_21340 = state_21321;(statearr_21340[17] = inst_21300__$1);
return statearr_21340;
})();if(cljs.core.truth_(inst_21300__$1))
{var statearr_21341_21377 = state_21321__$1;(statearr_21341_21377[1] = 17);
} else
{var statearr_21342_21378 = state_21321__$1;(statearr_21342_21378[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 13))
{var inst_21317 = (state_21321[2]);var state_21321__$1 = state_21321;var statearr_21343_21379 = state_21321__$1;(statearr_21343_21379[2] = inst_21317);
(statearr_21343_21379[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 14))
{var inst_21286 = (state_21321[15]);var inst_21293 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21286);var state_21321__$1 = state_21321;var statearr_21344_21380 = state_21321__$1;(statearr_21344_21380[2] = inst_21293);
(statearr_21344_21380[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 15))
{var state_21321__$1 = state_21321;var statearr_21345_21381 = state_21321__$1;(statearr_21345_21381[2] = null);
(statearr_21345_21381[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 16))
{var inst_21296 = (state_21321[2]);var inst_21297 = calc_state.call(null);var inst_21270 = inst_21297;var state_21321__$1 = (function (){var statearr_21346 = state_21321;(statearr_21346[18] = inst_21296);
(statearr_21346[9] = inst_21270);
return statearr_21346;
})();var statearr_21347_21382 = state_21321__$1;(statearr_21347_21382[2] = null);
(statearr_21347_21382[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 17))
{var inst_21300 = (state_21321[17]);var state_21321__$1 = state_21321;var statearr_21348_21383 = state_21321__$1;(statearr_21348_21383[2] = inst_21300);
(statearr_21348_21383[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 18))
{var inst_21286 = (state_21321[15]);var inst_21281 = (state_21321[13]);var inst_21280 = (state_21321[14]);var inst_21303 = cljs.core.empty_QMARK_.call(null,inst_21281);var inst_21304 = inst_21280.call(null,inst_21286);var inst_21305 = cljs.core.not.call(null,inst_21304);var inst_21306 = (inst_21303) && (inst_21305);var state_21321__$1 = state_21321;var statearr_21349_21384 = state_21321__$1;(statearr_21349_21384[2] = inst_21306);
(statearr_21349_21384[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 19))
{var inst_21308 = (state_21321[2]);var state_21321__$1 = state_21321;if(cljs.core.truth_(inst_21308))
{var statearr_21350_21385 = state_21321__$1;(statearr_21350_21385[1] = 20);
} else
{var statearr_21351_21386 = state_21321__$1;(statearr_21351_21386[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 20))
{var inst_21285 = (state_21321[16]);var state_21321__$1 = state_21321;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21321__$1,23,out,inst_21285);
} else
{if((state_val_21322 === 21))
{var state_21321__$1 = state_21321;var statearr_21352_21387 = state_21321__$1;(statearr_21352_21387[2] = null);
(statearr_21352_21387[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 22))
{var inst_21278 = (state_21321[12]);var inst_21314 = (state_21321[2]);var inst_21270 = inst_21278;var state_21321__$1 = (function (){var statearr_21353 = state_21321;(statearr_21353[9] = inst_21270);
(statearr_21353[19] = inst_21314);
return statearr_21353;
})();var statearr_21354_21388 = state_21321__$1;(statearr_21354_21388[2] = null);
(statearr_21354_21388[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21322 === 23))
{var inst_21311 = (state_21321[2]);var state_21321__$1 = state_21321;var statearr_21355_21389 = state_21321__$1;(statearr_21355_21389[2] = inst_21311);
(statearr_21355_21389[1] = 22);
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
var state_machine__13310__auto____0 = (function (){var statearr_21359 = (new Array(20));(statearr_21359[0] = state_machine__13310__auto__);
(statearr_21359[1] = 1);
return statearr_21359;
});
var state_machine__13310__auto____1 = (function (state_21321){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_21321);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e21360){if((e21360 instanceof Object))
{var ex__13313__auto__ = e21360;var statearr_21361_21390 = state_21321;(statearr_21361_21390[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21321);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21391 = state_21321;
state_21321 = G__21391;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_21321){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_21321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_21362 = f__13410__auto__.call(null);(statearr_21362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___21363);
return statearr_21362;
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
cljs.core.async.Pub = (function (){var obj21393 = {};return obj21393;
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
return (function (p1__21394_SHARP_){if(cljs.core.truth_(p1__21394_SHARP_.call(null,topic)))
{return p1__21394_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__21394_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t21519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21519 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21520){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21520 = meta21520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21519.cljs$lang$type = true;
cljs.core.async.t21519.cljs$lang$ctorStr = "cljs.core.async/t21519";
cljs.core.async.t21519.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t21519");
});})(mults,ensure_mult))
;
cljs.core.async.t21519.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t21519.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t21519.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t21519.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t21519.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t21519.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t21519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21521){var self__ = this;
var _21521__$1 = this;return self__.meta21520;
});})(mults,ensure_mult))
;
cljs.core.async.t21519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21521,meta21520__$1){var self__ = this;
var _21521__$1 = this;return (new cljs.core.async.t21519(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21520__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t21519 = ((function (mults,ensure_mult){
return (function __GT_t21519(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21520){return (new cljs.core.async.t21519(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21520));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t21519(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___21643 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_21595){var state_val_21596 = (state_21595[1]);if((state_val_21596 === 1))
{var state_21595__$1 = state_21595;var statearr_21597_21644 = state_21595__$1;(statearr_21597_21644[2] = null);
(statearr_21597_21644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 2))
{var state_21595__$1 = state_21595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21595__$1,4,ch);
} else
{if((state_val_21596 === 3))
{var inst_21593 = (state_21595[2]);var state_21595__$1 = state_21595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21595__$1,inst_21593);
} else
{if((state_val_21596 === 4))
{var inst_21524 = (state_21595[7]);var inst_21524__$1 = (state_21595[2]);var inst_21525 = (inst_21524__$1 == null);var state_21595__$1 = (function (){var statearr_21598 = state_21595;(statearr_21598[7] = inst_21524__$1);
return statearr_21598;
})();if(cljs.core.truth_(inst_21525))
{var statearr_21599_21645 = state_21595__$1;(statearr_21599_21645[1] = 5);
} else
{var statearr_21600_21646 = state_21595__$1;(statearr_21600_21646[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 5))
{var inst_21531 = cljs.core.deref.call(null,mults);var inst_21532 = cljs.core.vals.call(null,inst_21531);var inst_21533 = cljs.core.seq.call(null,inst_21532);var inst_21534 = inst_21533;var inst_21535 = null;var inst_21536 = 0;var inst_21537 = 0;var state_21595__$1 = (function (){var statearr_21601 = state_21595;(statearr_21601[8] = inst_21534);
(statearr_21601[9] = inst_21535);
(statearr_21601[10] = inst_21537);
(statearr_21601[11] = inst_21536);
return statearr_21601;
})();var statearr_21602_21647 = state_21595__$1;(statearr_21602_21647[2] = null);
(statearr_21602_21647[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 6))
{var inst_21574 = (state_21595[12]);var inst_21524 = (state_21595[7]);var inst_21572 = (state_21595[13]);var inst_21572__$1 = topic_fn.call(null,inst_21524);var inst_21573 = cljs.core.deref.call(null,mults);var inst_21574__$1 = cljs.core.get.call(null,inst_21573,inst_21572__$1);var state_21595__$1 = (function (){var statearr_21603 = state_21595;(statearr_21603[12] = inst_21574__$1);
(statearr_21603[13] = inst_21572__$1);
return statearr_21603;
})();if(cljs.core.truth_(inst_21574__$1))
{var statearr_21604_21648 = state_21595__$1;(statearr_21604_21648[1] = 19);
} else
{var statearr_21605_21649 = state_21595__$1;(statearr_21605_21649[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 7))
{var inst_21591 = (state_21595[2]);var state_21595__$1 = state_21595;var statearr_21606_21650 = state_21595__$1;(statearr_21606_21650[2] = inst_21591);
(statearr_21606_21650[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 8))
{var inst_21537 = (state_21595[10]);var inst_21536 = (state_21595[11]);var inst_21539 = (inst_21537 < inst_21536);var inst_21540 = inst_21539;var state_21595__$1 = state_21595;if(cljs.core.truth_(inst_21540))
{var statearr_21610_21651 = state_21595__$1;(statearr_21610_21651[1] = 10);
} else
{var statearr_21611_21652 = state_21595__$1;(statearr_21611_21652[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 9))
{var inst_21570 = (state_21595[2]);var state_21595__$1 = state_21595;var statearr_21612_21653 = state_21595__$1;(statearr_21612_21653[2] = inst_21570);
(statearr_21612_21653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 10))
{var inst_21534 = (state_21595[8]);var inst_21535 = (state_21595[9]);var inst_21537 = (state_21595[10]);var inst_21536 = (state_21595[11]);var inst_21542 = cljs.core._nth.call(null,inst_21535,inst_21537);var inst_21543 = cljs.core.async.muxch_STAR_.call(null,inst_21542);var inst_21544 = cljs.core.async.close_BANG_.call(null,inst_21543);var inst_21545 = (inst_21537 + 1);var tmp21607 = inst_21534;var tmp21608 = inst_21535;var tmp21609 = inst_21536;var inst_21534__$1 = tmp21607;var inst_21535__$1 = tmp21608;var inst_21536__$1 = tmp21609;var inst_21537__$1 = inst_21545;var state_21595__$1 = (function (){var statearr_21613 = state_21595;(statearr_21613[8] = inst_21534__$1);
(statearr_21613[9] = inst_21535__$1);
(statearr_21613[10] = inst_21537__$1);
(statearr_21613[11] = inst_21536__$1);
(statearr_21613[14] = inst_21544);
return statearr_21613;
})();var statearr_21614_21654 = state_21595__$1;(statearr_21614_21654[2] = null);
(statearr_21614_21654[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 11))
{var inst_21548 = (state_21595[15]);var inst_21534 = (state_21595[8]);var inst_21548__$1 = cljs.core.seq.call(null,inst_21534);var state_21595__$1 = (function (){var statearr_21615 = state_21595;(statearr_21615[15] = inst_21548__$1);
return statearr_21615;
})();if(inst_21548__$1)
{var statearr_21616_21655 = state_21595__$1;(statearr_21616_21655[1] = 13);
} else
{var statearr_21617_21656 = state_21595__$1;(statearr_21617_21656[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 12))
{var inst_21568 = (state_21595[2]);var state_21595__$1 = state_21595;var statearr_21618_21657 = state_21595__$1;(statearr_21618_21657[2] = inst_21568);
(statearr_21618_21657[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 13))
{var inst_21548 = (state_21595[15]);var inst_21550 = cljs.core.chunked_seq_QMARK_.call(null,inst_21548);var state_21595__$1 = state_21595;if(inst_21550)
{var statearr_21619_21658 = state_21595__$1;(statearr_21619_21658[1] = 16);
} else
{var statearr_21620_21659 = state_21595__$1;(statearr_21620_21659[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 14))
{var state_21595__$1 = state_21595;var statearr_21621_21660 = state_21595__$1;(statearr_21621_21660[2] = null);
(statearr_21621_21660[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 15))
{var inst_21566 = (state_21595[2]);var state_21595__$1 = state_21595;var statearr_21622_21661 = state_21595__$1;(statearr_21622_21661[2] = inst_21566);
(statearr_21622_21661[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 16))
{var inst_21548 = (state_21595[15]);var inst_21552 = cljs.core.chunk_first.call(null,inst_21548);var inst_21553 = cljs.core.chunk_rest.call(null,inst_21548);var inst_21554 = cljs.core.count.call(null,inst_21552);var inst_21534 = inst_21553;var inst_21535 = inst_21552;var inst_21536 = inst_21554;var inst_21537 = 0;var state_21595__$1 = (function (){var statearr_21623 = state_21595;(statearr_21623[8] = inst_21534);
(statearr_21623[9] = inst_21535);
(statearr_21623[10] = inst_21537);
(statearr_21623[11] = inst_21536);
return statearr_21623;
})();var statearr_21624_21662 = state_21595__$1;(statearr_21624_21662[2] = null);
(statearr_21624_21662[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 17))
{var inst_21548 = (state_21595[15]);var inst_21557 = cljs.core.first.call(null,inst_21548);var inst_21558 = cljs.core.async.muxch_STAR_.call(null,inst_21557);var inst_21559 = cljs.core.async.close_BANG_.call(null,inst_21558);var inst_21560 = cljs.core.next.call(null,inst_21548);var inst_21534 = inst_21560;var inst_21535 = null;var inst_21536 = 0;var inst_21537 = 0;var state_21595__$1 = (function (){var statearr_21625 = state_21595;(statearr_21625[8] = inst_21534);
(statearr_21625[9] = inst_21535);
(statearr_21625[16] = inst_21559);
(statearr_21625[10] = inst_21537);
(statearr_21625[11] = inst_21536);
return statearr_21625;
})();var statearr_21626_21663 = state_21595__$1;(statearr_21626_21663[2] = null);
(statearr_21626_21663[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 18))
{var inst_21563 = (state_21595[2]);var state_21595__$1 = state_21595;var statearr_21627_21664 = state_21595__$1;(statearr_21627_21664[2] = inst_21563);
(statearr_21627_21664[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 19))
{var state_21595__$1 = state_21595;var statearr_21628_21665 = state_21595__$1;(statearr_21628_21665[2] = null);
(statearr_21628_21665[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 20))
{var state_21595__$1 = state_21595;var statearr_21629_21666 = state_21595__$1;(statearr_21629_21666[2] = null);
(statearr_21629_21666[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 21))
{var inst_21588 = (state_21595[2]);var state_21595__$1 = (function (){var statearr_21630 = state_21595;(statearr_21630[17] = inst_21588);
return statearr_21630;
})();var statearr_21631_21667 = state_21595__$1;(statearr_21631_21667[2] = null);
(statearr_21631_21667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 22))
{var inst_21585 = (state_21595[2]);var state_21595__$1 = state_21595;var statearr_21632_21668 = state_21595__$1;(statearr_21632_21668[2] = inst_21585);
(statearr_21632_21668[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 23))
{var inst_21572 = (state_21595[13]);var inst_21576 = (state_21595[2]);var inst_21577 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21572);var state_21595__$1 = (function (){var statearr_21633 = state_21595;(statearr_21633[18] = inst_21576);
return statearr_21633;
})();var statearr_21634_21669 = state_21595__$1;(statearr_21634_21669[2] = inst_21577);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21595__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21596 === 24))
{var inst_21574 = (state_21595[12]);var inst_21524 = (state_21595[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21595,23,Object,null,22);var inst_21581 = cljs.core.async.muxch_STAR_.call(null,inst_21574);var state_21595__$1 = state_21595;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21595__$1,25,inst_21581,inst_21524);
} else
{if((state_val_21596 === 25))
{var inst_21583 = (state_21595[2]);var state_21595__$1 = state_21595;var statearr_21635_21670 = state_21595__$1;(statearr_21635_21670[2] = inst_21583);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21595__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_21639 = (new Array(19));(statearr_21639[0] = state_machine__13310__auto__);
(statearr_21639[1] = 1);
return statearr_21639;
});
var state_machine__13310__auto____1 = (function (state_21595){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_21595);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e21640){if((e21640 instanceof Object))
{var ex__13313__auto__ = e21640;var statearr_21641_21671 = state_21595;(statearr_21641_21671[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21595);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21672 = state_21595;
state_21595 = G__21672;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_21595){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_21595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_21642 = f__13410__auto__.call(null);(statearr_21642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___21643);
return statearr_21642;
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
,cljs.core.range.call(null,cnt));var c__13409__auto___21809 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_21779){var state_val_21780 = (state_21779[1]);if((state_val_21780 === 1))
{var state_21779__$1 = state_21779;var statearr_21781_21810 = state_21779__$1;(statearr_21781_21810[2] = null);
(statearr_21781_21810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 2))
{var inst_21742 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21743 = 0;var state_21779__$1 = (function (){var statearr_21782 = state_21779;(statearr_21782[7] = inst_21742);
(statearr_21782[8] = inst_21743);
return statearr_21782;
})();var statearr_21783_21811 = state_21779__$1;(statearr_21783_21811[2] = null);
(statearr_21783_21811[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 3))
{var inst_21777 = (state_21779[2]);var state_21779__$1 = state_21779;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21779__$1,inst_21777);
} else
{if((state_val_21780 === 4))
{var inst_21743 = (state_21779[8]);var inst_21745 = (inst_21743 < cnt);var state_21779__$1 = state_21779;if(cljs.core.truth_(inst_21745))
{var statearr_21784_21812 = state_21779__$1;(statearr_21784_21812[1] = 6);
} else
{var statearr_21785_21813 = state_21779__$1;(statearr_21785_21813[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 5))
{var inst_21763 = (state_21779[2]);var state_21779__$1 = (function (){var statearr_21786 = state_21779;(statearr_21786[9] = inst_21763);
return statearr_21786;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21779__$1,12,dchan);
} else
{if((state_val_21780 === 6))
{var state_21779__$1 = state_21779;var statearr_21787_21814 = state_21779__$1;(statearr_21787_21814[2] = null);
(statearr_21787_21814[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 7))
{var state_21779__$1 = state_21779;var statearr_21788_21815 = state_21779__$1;(statearr_21788_21815[2] = null);
(statearr_21788_21815[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 8))
{var inst_21761 = (state_21779[2]);var state_21779__$1 = state_21779;var statearr_21789_21816 = state_21779__$1;(statearr_21789_21816[2] = inst_21761);
(statearr_21789_21816[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 9))
{var inst_21743 = (state_21779[8]);var inst_21756 = (state_21779[2]);var inst_21757 = (inst_21743 + 1);var inst_21743__$1 = inst_21757;var state_21779__$1 = (function (){var statearr_21790 = state_21779;(statearr_21790[10] = inst_21756);
(statearr_21790[8] = inst_21743__$1);
return statearr_21790;
})();var statearr_21791_21817 = state_21779__$1;(statearr_21791_21817[2] = null);
(statearr_21791_21817[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 10))
{var inst_21747 = (state_21779[2]);var inst_21748 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21779__$1 = (function (){var statearr_21792 = state_21779;(statearr_21792[11] = inst_21747);
return statearr_21792;
})();var statearr_21793_21818 = state_21779__$1;(statearr_21793_21818[2] = inst_21748);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21779__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 11))
{var inst_21743 = (state_21779[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21779,10,Object,null,9);var inst_21752 = chs__$1.call(null,inst_21743);var inst_21753 = done.call(null,inst_21743);var inst_21754 = cljs.core.async.take_BANG_.call(null,inst_21752,inst_21753);var state_21779__$1 = state_21779;var statearr_21794_21819 = state_21779__$1;(statearr_21794_21819[2] = inst_21754);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21779__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 12))
{var inst_21765 = (state_21779[12]);var inst_21765__$1 = (state_21779[2]);var inst_21766 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21765__$1);var state_21779__$1 = (function (){var statearr_21795 = state_21779;(statearr_21795[12] = inst_21765__$1);
return statearr_21795;
})();if(cljs.core.truth_(inst_21766))
{var statearr_21796_21820 = state_21779__$1;(statearr_21796_21820[1] = 13);
} else
{var statearr_21797_21821 = state_21779__$1;(statearr_21797_21821[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 13))
{var inst_21768 = cljs.core.async.close_BANG_.call(null,out);var state_21779__$1 = state_21779;var statearr_21798_21822 = state_21779__$1;(statearr_21798_21822[2] = inst_21768);
(statearr_21798_21822[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 14))
{var inst_21765 = (state_21779[12]);var inst_21770 = cljs.core.apply.call(null,f,inst_21765);var state_21779__$1 = state_21779;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21779__$1,16,out,inst_21770);
} else
{if((state_val_21780 === 15))
{var inst_21775 = (state_21779[2]);var state_21779__$1 = state_21779;var statearr_21799_21823 = state_21779__$1;(statearr_21799_21823[2] = inst_21775);
(statearr_21799_21823[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21780 === 16))
{var inst_21772 = (state_21779[2]);var state_21779__$1 = (function (){var statearr_21800 = state_21779;(statearr_21800[13] = inst_21772);
return statearr_21800;
})();var statearr_21801_21824 = state_21779__$1;(statearr_21801_21824[2] = null);
(statearr_21801_21824[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_21805 = (new Array(14));(statearr_21805[0] = state_machine__13310__auto__);
(statearr_21805[1] = 1);
return statearr_21805;
});
var state_machine__13310__auto____1 = (function (state_21779){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_21779);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e21806){if((e21806 instanceof Object))
{var ex__13313__auto__ = e21806;var statearr_21807_21825 = state_21779;(statearr_21807_21825[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21779);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21826 = state_21779;
state_21779 = G__21826;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_21779){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_21779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_21808 = f__13410__auto__.call(null);(statearr_21808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___21809);
return statearr_21808;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___21934 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_21910){var state_val_21911 = (state_21910[1]);if((state_val_21911 === 1))
{var inst_21881 = cljs.core.vec.call(null,chs);var inst_21882 = inst_21881;var state_21910__$1 = (function (){var statearr_21912 = state_21910;(statearr_21912[7] = inst_21882);
return statearr_21912;
})();var statearr_21913_21935 = state_21910__$1;(statearr_21913_21935[2] = null);
(statearr_21913_21935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21911 === 2))
{var inst_21882 = (state_21910[7]);var inst_21884 = cljs.core.count.call(null,inst_21882);var inst_21885 = (inst_21884 > 0);var state_21910__$1 = state_21910;if(cljs.core.truth_(inst_21885))
{var statearr_21914_21936 = state_21910__$1;(statearr_21914_21936[1] = 4);
} else
{var statearr_21915_21937 = state_21910__$1;(statearr_21915_21937[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21911 === 3))
{var inst_21908 = (state_21910[2]);var state_21910__$1 = state_21910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21910__$1,inst_21908);
} else
{if((state_val_21911 === 4))
{var inst_21882 = (state_21910[7]);var state_21910__$1 = state_21910;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21910__$1,7,inst_21882);
} else
{if((state_val_21911 === 5))
{var inst_21904 = cljs.core.async.close_BANG_.call(null,out);var state_21910__$1 = state_21910;var statearr_21916_21938 = state_21910__$1;(statearr_21916_21938[2] = inst_21904);
(statearr_21916_21938[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21911 === 6))
{var inst_21906 = (state_21910[2]);var state_21910__$1 = state_21910;var statearr_21917_21939 = state_21910__$1;(statearr_21917_21939[2] = inst_21906);
(statearr_21917_21939[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21911 === 7))
{var inst_21890 = (state_21910[8]);var inst_21889 = (state_21910[9]);var inst_21889__$1 = (state_21910[2]);var inst_21890__$1 = cljs.core.nth.call(null,inst_21889__$1,0,null);var inst_21891 = cljs.core.nth.call(null,inst_21889__$1,1,null);var inst_21892 = (inst_21890__$1 == null);var state_21910__$1 = (function (){var statearr_21918 = state_21910;(statearr_21918[8] = inst_21890__$1);
(statearr_21918[10] = inst_21891);
(statearr_21918[9] = inst_21889__$1);
return statearr_21918;
})();if(cljs.core.truth_(inst_21892))
{var statearr_21919_21940 = state_21910__$1;(statearr_21919_21940[1] = 8);
} else
{var statearr_21920_21941 = state_21910__$1;(statearr_21920_21941[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21911 === 8))
{var inst_21890 = (state_21910[8]);var inst_21891 = (state_21910[10]);var inst_21889 = (state_21910[9]);var inst_21882 = (state_21910[7]);var inst_21894 = (function (){var c = inst_21891;var v = inst_21890;var vec__21887 = inst_21889;var cs = inst_21882;return ((function (c,v,vec__21887,cs,inst_21890,inst_21891,inst_21889,inst_21882,state_val_21911){
return (function (p1__21827_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21827_SHARP_);
});
;})(c,v,vec__21887,cs,inst_21890,inst_21891,inst_21889,inst_21882,state_val_21911))
})();var inst_21895 = cljs.core.filterv.call(null,inst_21894,inst_21882);var inst_21882__$1 = inst_21895;var state_21910__$1 = (function (){var statearr_21921 = state_21910;(statearr_21921[7] = inst_21882__$1);
return statearr_21921;
})();var statearr_21922_21942 = state_21910__$1;(statearr_21922_21942[2] = null);
(statearr_21922_21942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21911 === 9))
{var inst_21890 = (state_21910[8]);var state_21910__$1 = state_21910;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21910__$1,11,out,inst_21890);
} else
{if((state_val_21911 === 10))
{var inst_21902 = (state_21910[2]);var state_21910__$1 = state_21910;var statearr_21924_21943 = state_21910__$1;(statearr_21924_21943[2] = inst_21902);
(statearr_21924_21943[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21911 === 11))
{var inst_21882 = (state_21910[7]);var inst_21899 = (state_21910[2]);var tmp21923 = inst_21882;var inst_21882__$1 = tmp21923;var state_21910__$1 = (function (){var statearr_21925 = state_21910;(statearr_21925[7] = inst_21882__$1);
(statearr_21925[11] = inst_21899);
return statearr_21925;
})();var statearr_21926_21944 = state_21910__$1;(statearr_21926_21944[2] = null);
(statearr_21926_21944[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_21930 = (new Array(12));(statearr_21930[0] = state_machine__13310__auto__);
(statearr_21930[1] = 1);
return statearr_21930;
});
var state_machine__13310__auto____1 = (function (state_21910){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_21910);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e21931){if((e21931 instanceof Object))
{var ex__13313__auto__ = e21931;var statearr_21932_21945 = state_21910;(statearr_21932_21945[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21910);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21946 = state_21910;
state_21910 = G__21946;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_21910){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_21910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_21933 = f__13410__auto__.call(null);(statearr_21933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___21934);
return statearr_21933;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___22039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_22016){var state_val_22017 = (state_22016[1]);if((state_val_22017 === 1))
{var inst_21993 = 0;var state_22016__$1 = (function (){var statearr_22018 = state_22016;(statearr_22018[7] = inst_21993);
return statearr_22018;
})();var statearr_22019_22040 = state_22016__$1;(statearr_22019_22040[2] = null);
(statearr_22019_22040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22017 === 2))
{var inst_21993 = (state_22016[7]);var inst_21995 = (inst_21993 < n);var state_22016__$1 = state_22016;if(cljs.core.truth_(inst_21995))
{var statearr_22020_22041 = state_22016__$1;(statearr_22020_22041[1] = 4);
} else
{var statearr_22021_22042 = state_22016__$1;(statearr_22021_22042[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22017 === 3))
{var inst_22013 = (state_22016[2]);var inst_22014 = cljs.core.async.close_BANG_.call(null,out);var state_22016__$1 = (function (){var statearr_22022 = state_22016;(statearr_22022[8] = inst_22013);
return statearr_22022;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22016__$1,inst_22014);
} else
{if((state_val_22017 === 4))
{var state_22016__$1 = state_22016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22016__$1,7,ch);
} else
{if((state_val_22017 === 5))
{var state_22016__$1 = state_22016;var statearr_22023_22043 = state_22016__$1;(statearr_22023_22043[2] = null);
(statearr_22023_22043[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22017 === 6))
{var inst_22011 = (state_22016[2]);var state_22016__$1 = state_22016;var statearr_22024_22044 = state_22016__$1;(statearr_22024_22044[2] = inst_22011);
(statearr_22024_22044[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22017 === 7))
{var inst_21998 = (state_22016[9]);var inst_21998__$1 = (state_22016[2]);var inst_21999 = (inst_21998__$1 == null);var inst_22000 = cljs.core.not.call(null,inst_21999);var state_22016__$1 = (function (){var statearr_22025 = state_22016;(statearr_22025[9] = inst_21998__$1);
return statearr_22025;
})();if(inst_22000)
{var statearr_22026_22045 = state_22016__$1;(statearr_22026_22045[1] = 8);
} else
{var statearr_22027_22046 = state_22016__$1;(statearr_22027_22046[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22017 === 8))
{var inst_21998 = (state_22016[9]);var state_22016__$1 = state_22016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22016__$1,11,out,inst_21998);
} else
{if((state_val_22017 === 9))
{var state_22016__$1 = state_22016;var statearr_22028_22047 = state_22016__$1;(statearr_22028_22047[2] = null);
(statearr_22028_22047[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22017 === 10))
{var inst_22008 = (state_22016[2]);var state_22016__$1 = state_22016;var statearr_22029_22048 = state_22016__$1;(statearr_22029_22048[2] = inst_22008);
(statearr_22029_22048[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22017 === 11))
{var inst_21993 = (state_22016[7]);var inst_22003 = (state_22016[2]);var inst_22004 = (inst_21993 + 1);var inst_21993__$1 = inst_22004;var state_22016__$1 = (function (){var statearr_22030 = state_22016;(statearr_22030[7] = inst_21993__$1);
(statearr_22030[10] = inst_22003);
return statearr_22030;
})();var statearr_22031_22049 = state_22016__$1;(statearr_22031_22049[2] = null);
(statearr_22031_22049[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_22035 = (new Array(11));(statearr_22035[0] = state_machine__13310__auto__);
(statearr_22035[1] = 1);
return statearr_22035;
});
var state_machine__13310__auto____1 = (function (state_22016){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_22016);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e22036){if((e22036 instanceof Object))
{var ex__13313__auto__ = e22036;var statearr_22037_22050 = state_22016;(statearr_22037_22050[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22051 = state_22016;
state_22016 = G__22051;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_22016){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_22016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_22038 = f__13410__auto__.call(null);(statearr_22038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___22039);
return statearr_22038;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___22148 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_22123){var state_val_22124 = (state_22123[1]);if((state_val_22124 === 1))
{var inst_22100 = null;var state_22123__$1 = (function (){var statearr_22125 = state_22123;(statearr_22125[7] = inst_22100);
return statearr_22125;
})();var statearr_22126_22149 = state_22123__$1;(statearr_22126_22149[2] = null);
(statearr_22126_22149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22124 === 2))
{var state_22123__$1 = state_22123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22123__$1,4,ch);
} else
{if((state_val_22124 === 3))
{var inst_22120 = (state_22123[2]);var inst_22121 = cljs.core.async.close_BANG_.call(null,out);var state_22123__$1 = (function (){var statearr_22127 = state_22123;(statearr_22127[8] = inst_22120);
return statearr_22127;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22123__$1,inst_22121);
} else
{if((state_val_22124 === 4))
{var inst_22103 = (state_22123[9]);var inst_22103__$1 = (state_22123[2]);var inst_22104 = (inst_22103__$1 == null);var inst_22105 = cljs.core.not.call(null,inst_22104);var state_22123__$1 = (function (){var statearr_22128 = state_22123;(statearr_22128[9] = inst_22103__$1);
return statearr_22128;
})();if(inst_22105)
{var statearr_22129_22150 = state_22123__$1;(statearr_22129_22150[1] = 5);
} else
{var statearr_22130_22151 = state_22123__$1;(statearr_22130_22151[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22124 === 5))
{var inst_22103 = (state_22123[9]);var inst_22100 = (state_22123[7]);var inst_22107 = cljs.core._EQ_.call(null,inst_22103,inst_22100);var state_22123__$1 = state_22123;if(inst_22107)
{var statearr_22131_22152 = state_22123__$1;(statearr_22131_22152[1] = 8);
} else
{var statearr_22132_22153 = state_22123__$1;(statearr_22132_22153[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22124 === 6))
{var state_22123__$1 = state_22123;var statearr_22134_22154 = state_22123__$1;(statearr_22134_22154[2] = null);
(statearr_22134_22154[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22124 === 7))
{var inst_22118 = (state_22123[2]);var state_22123__$1 = state_22123;var statearr_22135_22155 = state_22123__$1;(statearr_22135_22155[2] = inst_22118);
(statearr_22135_22155[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22124 === 8))
{var inst_22100 = (state_22123[7]);var tmp22133 = inst_22100;var inst_22100__$1 = tmp22133;var state_22123__$1 = (function (){var statearr_22136 = state_22123;(statearr_22136[7] = inst_22100__$1);
return statearr_22136;
})();var statearr_22137_22156 = state_22123__$1;(statearr_22137_22156[2] = null);
(statearr_22137_22156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22124 === 9))
{var inst_22103 = (state_22123[9]);var state_22123__$1 = state_22123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22123__$1,11,out,inst_22103);
} else
{if((state_val_22124 === 10))
{var inst_22115 = (state_22123[2]);var state_22123__$1 = state_22123;var statearr_22138_22157 = state_22123__$1;(statearr_22138_22157[2] = inst_22115);
(statearr_22138_22157[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22124 === 11))
{var inst_22103 = (state_22123[9]);var inst_22112 = (state_22123[2]);var inst_22100 = inst_22103;var state_22123__$1 = (function (){var statearr_22139 = state_22123;(statearr_22139[10] = inst_22112);
(statearr_22139[7] = inst_22100);
return statearr_22139;
})();var statearr_22140_22158 = state_22123__$1;(statearr_22140_22158[2] = null);
(statearr_22140_22158[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_22144 = (new Array(11));(statearr_22144[0] = state_machine__13310__auto__);
(statearr_22144[1] = 1);
return statearr_22144;
});
var state_machine__13310__auto____1 = (function (state_22123){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_22123);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e22145){if((e22145 instanceof Object))
{var ex__13313__auto__ = e22145;var statearr_22146_22159 = state_22123;(statearr_22146_22159[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22123);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22160 = state_22123;
state_22123 = G__22160;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_22123){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_22123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_22147 = f__13410__auto__.call(null);(statearr_22147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___22148);
return statearr_22147;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___22295 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_22265){var state_val_22266 = (state_22265[1]);if((state_val_22266 === 1))
{var inst_22228 = (new Array(n));var inst_22229 = inst_22228;var inst_22230 = 0;var state_22265__$1 = (function (){var statearr_22267 = state_22265;(statearr_22267[7] = inst_22230);
(statearr_22267[8] = inst_22229);
return statearr_22267;
})();var statearr_22268_22296 = state_22265__$1;(statearr_22268_22296[2] = null);
(statearr_22268_22296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22266 === 2))
{var state_22265__$1 = state_22265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22265__$1,4,ch);
} else
{if((state_val_22266 === 3))
{var inst_22263 = (state_22265[2]);var state_22265__$1 = state_22265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22265__$1,inst_22263);
} else
{if((state_val_22266 === 4))
{var inst_22233 = (state_22265[9]);var inst_22233__$1 = (state_22265[2]);var inst_22234 = (inst_22233__$1 == null);var inst_22235 = cljs.core.not.call(null,inst_22234);var state_22265__$1 = (function (){var statearr_22269 = state_22265;(statearr_22269[9] = inst_22233__$1);
return statearr_22269;
})();if(inst_22235)
{var statearr_22270_22297 = state_22265__$1;(statearr_22270_22297[1] = 5);
} else
{var statearr_22271_22298 = state_22265__$1;(statearr_22271_22298[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22266 === 5))
{var inst_22233 = (state_22265[9]);var inst_22230 = (state_22265[7]);var inst_22229 = (state_22265[8]);var inst_22238 = (state_22265[10]);var inst_22237 = (inst_22229[inst_22230] = inst_22233);var inst_22238__$1 = (inst_22230 + 1);var inst_22239 = (inst_22238__$1 < n);var state_22265__$1 = (function (){var statearr_22272 = state_22265;(statearr_22272[11] = inst_22237);
(statearr_22272[10] = inst_22238__$1);
return statearr_22272;
})();if(cljs.core.truth_(inst_22239))
{var statearr_22273_22299 = state_22265__$1;(statearr_22273_22299[1] = 8);
} else
{var statearr_22274_22300 = state_22265__$1;(statearr_22274_22300[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22266 === 6))
{var inst_22230 = (state_22265[7]);var inst_22251 = (inst_22230 > 0);var state_22265__$1 = state_22265;if(cljs.core.truth_(inst_22251))
{var statearr_22276_22301 = state_22265__$1;(statearr_22276_22301[1] = 12);
} else
{var statearr_22277_22302 = state_22265__$1;(statearr_22277_22302[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22266 === 7))
{var inst_22261 = (state_22265[2]);var state_22265__$1 = state_22265;var statearr_22278_22303 = state_22265__$1;(statearr_22278_22303[2] = inst_22261);
(statearr_22278_22303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22266 === 8))
{var inst_22229 = (state_22265[8]);var inst_22238 = (state_22265[10]);var tmp22275 = inst_22229;var inst_22229__$1 = tmp22275;var inst_22230 = inst_22238;var state_22265__$1 = (function (){var statearr_22279 = state_22265;(statearr_22279[7] = inst_22230);
(statearr_22279[8] = inst_22229__$1);
return statearr_22279;
})();var statearr_22280_22304 = state_22265__$1;(statearr_22280_22304[2] = null);
(statearr_22280_22304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22266 === 9))
{var inst_22229 = (state_22265[8]);var inst_22243 = cljs.core.vec.call(null,inst_22229);var state_22265__$1 = state_22265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22265__$1,11,out,inst_22243);
} else
{if((state_val_22266 === 10))
{var inst_22249 = (state_22265[2]);var state_22265__$1 = state_22265;var statearr_22281_22305 = state_22265__$1;(statearr_22281_22305[2] = inst_22249);
(statearr_22281_22305[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22266 === 11))
{var inst_22245 = (state_22265[2]);var inst_22246 = (new Array(n));var inst_22229 = inst_22246;var inst_22230 = 0;var state_22265__$1 = (function (){var statearr_22282 = state_22265;(statearr_22282[7] = inst_22230);
(statearr_22282[8] = inst_22229);
(statearr_22282[12] = inst_22245);
return statearr_22282;
})();var statearr_22283_22306 = state_22265__$1;(statearr_22283_22306[2] = null);
(statearr_22283_22306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22266 === 12))
{var inst_22229 = (state_22265[8]);var inst_22253 = cljs.core.vec.call(null,inst_22229);var state_22265__$1 = state_22265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22265__$1,15,out,inst_22253);
} else
{if((state_val_22266 === 13))
{var state_22265__$1 = state_22265;var statearr_22284_22307 = state_22265__$1;(statearr_22284_22307[2] = null);
(statearr_22284_22307[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22266 === 14))
{var inst_22258 = (state_22265[2]);var inst_22259 = cljs.core.async.close_BANG_.call(null,out);var state_22265__$1 = (function (){var statearr_22285 = state_22265;(statearr_22285[13] = inst_22258);
return statearr_22285;
})();var statearr_22286_22308 = state_22265__$1;(statearr_22286_22308[2] = inst_22259);
(statearr_22286_22308[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22266 === 15))
{var inst_22255 = (state_22265[2]);var state_22265__$1 = state_22265;var statearr_22287_22309 = state_22265__$1;(statearr_22287_22309[2] = inst_22255);
(statearr_22287_22309[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_22291 = (new Array(14));(statearr_22291[0] = state_machine__13310__auto__);
(statearr_22291[1] = 1);
return statearr_22291;
});
var state_machine__13310__auto____1 = (function (state_22265){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_22265);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e22292){if((e22292 instanceof Object))
{var ex__13313__auto__ = e22292;var statearr_22293_22310 = state_22265;(statearr_22293_22310[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22311 = state_22265;
state_22265 = G__22311;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_22265){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_22265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_22294 = f__13410__auto__.call(null);(statearr_22294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___22295);
return statearr_22294;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___22454 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_22424){var state_val_22425 = (state_22424[1]);if((state_val_22425 === 1))
{var inst_22383 = (new Array(0));var inst_22384 = inst_22383;var inst_22385 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_22424__$1 = (function (){var statearr_22426 = state_22424;(statearr_22426[7] = inst_22384);
(statearr_22426[8] = inst_22385);
return statearr_22426;
})();var statearr_22427_22455 = state_22424__$1;(statearr_22427_22455[2] = null);
(statearr_22427_22455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22425 === 2))
{var state_22424__$1 = state_22424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22424__$1,4,ch);
} else
{if((state_val_22425 === 3))
{var inst_22422 = (state_22424[2]);var state_22424__$1 = state_22424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22424__$1,inst_22422);
} else
{if((state_val_22425 === 4))
{var inst_22388 = (state_22424[9]);var inst_22388__$1 = (state_22424[2]);var inst_22389 = (inst_22388__$1 == null);var inst_22390 = cljs.core.not.call(null,inst_22389);var state_22424__$1 = (function (){var statearr_22428 = state_22424;(statearr_22428[9] = inst_22388__$1);
return statearr_22428;
})();if(inst_22390)
{var statearr_22429_22456 = state_22424__$1;(statearr_22429_22456[1] = 5);
} else
{var statearr_22430_22457 = state_22424__$1;(statearr_22430_22457[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22425 === 5))
{var inst_22385 = (state_22424[8]);var inst_22388 = (state_22424[9]);var inst_22392 = (state_22424[10]);var inst_22392__$1 = f.call(null,inst_22388);var inst_22393 = cljs.core._EQ_.call(null,inst_22392__$1,inst_22385);var inst_22394 = cljs.core.keyword_identical_QMARK_.call(null,inst_22385,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_22395 = (inst_22393) || (inst_22394);var state_22424__$1 = (function (){var statearr_22431 = state_22424;(statearr_22431[10] = inst_22392__$1);
return statearr_22431;
})();if(cljs.core.truth_(inst_22395))
{var statearr_22432_22458 = state_22424__$1;(statearr_22432_22458[1] = 8);
} else
{var statearr_22433_22459 = state_22424__$1;(statearr_22433_22459[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22425 === 6))
{var inst_22384 = (state_22424[7]);var inst_22409 = inst_22384.length;var inst_22410 = (inst_22409 > 0);var state_22424__$1 = state_22424;if(cljs.core.truth_(inst_22410))
{var statearr_22435_22460 = state_22424__$1;(statearr_22435_22460[1] = 12);
} else
{var statearr_22436_22461 = state_22424__$1;(statearr_22436_22461[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22425 === 7))
{var inst_22420 = (state_22424[2]);var state_22424__$1 = state_22424;var statearr_22437_22462 = state_22424__$1;(statearr_22437_22462[2] = inst_22420);
(statearr_22437_22462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22425 === 8))
{var inst_22384 = (state_22424[7]);var inst_22388 = (state_22424[9]);var inst_22392 = (state_22424[10]);var inst_22397 = inst_22384.push(inst_22388);var tmp22434 = inst_22384;var inst_22384__$1 = tmp22434;var inst_22385 = inst_22392;var state_22424__$1 = (function (){var statearr_22438 = state_22424;(statearr_22438[7] = inst_22384__$1);
(statearr_22438[8] = inst_22385);
(statearr_22438[11] = inst_22397);
return statearr_22438;
})();var statearr_22439_22463 = state_22424__$1;(statearr_22439_22463[2] = null);
(statearr_22439_22463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22425 === 9))
{var inst_22384 = (state_22424[7]);var inst_22400 = cljs.core.vec.call(null,inst_22384);var state_22424__$1 = state_22424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22424__$1,11,out,inst_22400);
} else
{if((state_val_22425 === 10))
{var inst_22407 = (state_22424[2]);var state_22424__$1 = state_22424;var statearr_22440_22464 = state_22424__$1;(statearr_22440_22464[2] = inst_22407);
(statearr_22440_22464[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22425 === 11))
{var inst_22388 = (state_22424[9]);var inst_22392 = (state_22424[10]);var inst_22402 = (state_22424[2]);var inst_22403 = (new Array(0));var inst_22404 = inst_22403.push(inst_22388);var inst_22384 = inst_22403;var inst_22385 = inst_22392;var state_22424__$1 = (function (){var statearr_22441 = state_22424;(statearr_22441[7] = inst_22384);
(statearr_22441[8] = inst_22385);
(statearr_22441[12] = inst_22402);
(statearr_22441[13] = inst_22404);
return statearr_22441;
})();var statearr_22442_22465 = state_22424__$1;(statearr_22442_22465[2] = null);
(statearr_22442_22465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22425 === 12))
{var inst_22384 = (state_22424[7]);var inst_22412 = cljs.core.vec.call(null,inst_22384);var state_22424__$1 = state_22424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22424__$1,15,out,inst_22412);
} else
{if((state_val_22425 === 13))
{var state_22424__$1 = state_22424;var statearr_22443_22466 = state_22424__$1;(statearr_22443_22466[2] = null);
(statearr_22443_22466[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22425 === 14))
{var inst_22417 = (state_22424[2]);var inst_22418 = cljs.core.async.close_BANG_.call(null,out);var state_22424__$1 = (function (){var statearr_22444 = state_22424;(statearr_22444[14] = inst_22417);
return statearr_22444;
})();var statearr_22445_22467 = state_22424__$1;(statearr_22445_22467[2] = inst_22418);
(statearr_22445_22467[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22425 === 15))
{var inst_22414 = (state_22424[2]);var state_22424__$1 = state_22424;var statearr_22446_22468 = state_22424__$1;(statearr_22446_22468[2] = inst_22414);
(statearr_22446_22468[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_22450 = (new Array(15));(statearr_22450[0] = state_machine__13310__auto__);
(statearr_22450[1] = 1);
return statearr_22450;
});
var state_machine__13310__auto____1 = (function (state_22424){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_22424);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e22451){if((e22451 instanceof Object))
{var ex__13313__auto__ = e22451;var statearr_22452_22469 = state_22424;(statearr_22452_22469[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22470 = state_22424;
state_22424 = G__22470;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_22424){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_22424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_22453 = f__13410__auto__.call(null);(statearr_22453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___22454);
return statearr_22453;
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
