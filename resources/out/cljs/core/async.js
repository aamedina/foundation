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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t27938 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27938 = (function (f,fn_handler,meta27939){
this.f = f;
this.fn_handler = fn_handler;
this.meta27939 = meta27939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27938.cljs$lang$type = true;
cljs.core.async.t27938.cljs$lang$ctorStr = "cljs.core.async/t27938";
cljs.core.async.t27938.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t27938");
});
cljs.core.async.t27938.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t27938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t27938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27940){var self__ = this;
var _27940__$1 = this;return self__.meta27939;
});
cljs.core.async.t27938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27940,meta27939__$1){var self__ = this;
var _27940__$1 = this;return (new cljs.core.async.t27938(self__.f,self__.fn_handler,meta27939__$1));
});
cljs.core.async.__GT_t27938 = (function __GT_t27938(f__$1,fn_handler__$1,meta27939){return (new cljs.core.async.t27938(f__$1,fn_handler__$1,meta27939));
});
}
return (new cljs.core.async.t27938(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__27942 = buff;if(G__27942)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__27942.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__27942.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27942);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27942);
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
{var val_27943 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_27943);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_27943);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___27944 = n;var x_27945 = 0;while(true){
if((x_27945 < n__8553__auto___27944))
{(a[x_27945] = 0);
{
var G__27946 = (x_27945 + 1);
x_27945 = G__27946;
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
var G__27947 = (i + 1);
i = G__27947;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t27951 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27951 = (function (flag,alt_flag,meta27952){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27952 = meta27952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27951.cljs$lang$type = true;
cljs.core.async.t27951.cljs$lang$ctorStr = "cljs.core.async/t27951";
cljs.core.async.t27951.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t27951");
});
cljs.core.async.t27951.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27951.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t27951.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t27951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27953){var self__ = this;
var _27953__$1 = this;return self__.meta27952;
});
cljs.core.async.t27951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27953,meta27952__$1){var self__ = this;
var _27953__$1 = this;return (new cljs.core.async.t27951(self__.flag,self__.alt_flag,meta27952__$1));
});
cljs.core.async.__GT_t27951 = (function __GT_t27951(flag__$1,alt_flag__$1,meta27952){return (new cljs.core.async.t27951(flag__$1,alt_flag__$1,meta27952));
});
}
return (new cljs.core.async.t27951(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t27957 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27957 = (function (cb,flag,alt_handler,meta27958){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27958 = meta27958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27957.cljs$lang$type = true;
cljs.core.async.t27957.cljs$lang$ctorStr = "cljs.core.async/t27957";
cljs.core.async.t27957.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t27957");
});
cljs.core.async.t27957.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t27957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t27957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27959){var self__ = this;
var _27959__$1 = this;return self__.meta27958;
});
cljs.core.async.t27957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27959,meta27958__$1){var self__ = this;
var _27959__$1 = this;return (new cljs.core.async.t27957(self__.cb,self__.flag,self__.alt_handler,meta27958__$1));
});
cljs.core.async.__GT_t27957 = (function __GT_t27957(cb__$1,flag__$1,alt_handler__$1,meta27958){return (new cljs.core.async.t27957(cb__$1,flag__$1,alt_handler__$1,meta27958));
});
}
return (new cljs.core.async.t27957(cb,flag,alt_handler,null));
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
return (function (p1__27960_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27960_SHARP_,port], null));
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
var G__27961 = (i + 1);
i = G__27961;
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
var alts_BANG___delegate = function (ports,p__27962){var map__27964 = p__27962;var map__27964__$1 = ((cljs.core.seq_QMARK_.call(null,map__27964))?cljs.core.apply.call(null,cljs.core.hash_map,map__27964):map__27964);var opts = map__27964__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__27962 = null;if (arguments.length > 1) {
  p__27962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__27962);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27965){
var ports = cljs.core.first(arglist__27965);
var p__27962 = cljs.core.rest(arglist__27965);
return alts_BANG___delegate(ports,p__27962);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27973 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27973 = (function (ch,f,map_LT_,meta27974){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27974 = meta27974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27973.cljs$lang$type = true;
cljs.core.async.t27973.cljs$lang$ctorStr = "cljs.core.async/t27973";
cljs.core.async.t27973.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t27973");
});
cljs.core.async.t27973.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t27973.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27976 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27976 = (function (fn1,_,meta27974,ch,f,map_LT_,meta27977){
this.fn1 = fn1;
this._ = _;
this.meta27974 = meta27974;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27977 = meta27977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27976.cljs$lang$type = true;
cljs.core.async.t27976.cljs$lang$ctorStr = "cljs.core.async/t27976";
cljs.core.async.t27976.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t27976");
});
cljs.core.async.t27976.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t27976.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t27976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__27966_SHARP_){return f1.call(null,(((p1__27966_SHARP_ == null))?null:self__.f.call(null,p1__27966_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t27976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27978){var self__ = this;
var _27978__$1 = this;return self__.meta27977;
});
cljs.core.async.t27976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27978,meta27977__$1){var self__ = this;
var _27978__$1 = this;return (new cljs.core.async.t27976(self__.fn1,self__._,self__.meta27974,self__.ch,self__.f,self__.map_LT_,meta27977__$1));
});
cljs.core.async.__GT_t27976 = (function __GT_t27976(fn1__$1,___$2,meta27974__$1,ch__$2,f__$2,map_LT___$2,meta27977){return (new cljs.core.async.t27976(fn1__$1,___$2,meta27974__$1,ch__$2,f__$2,map_LT___$2,meta27977));
});
}
return (new cljs.core.async.t27976(fn1,___$1,self__.meta27974,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t27973.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27975){var self__ = this;
var _27975__$1 = this;return self__.meta27974;
});
cljs.core.async.t27973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27975,meta27974__$1){var self__ = this;
var _27975__$1 = this;return (new cljs.core.async.t27973(self__.ch,self__.f,self__.map_LT_,meta27974__$1));
});
cljs.core.async.__GT_t27973 = (function __GT_t27973(ch__$1,f__$1,map_LT___$1,meta27974){return (new cljs.core.async.t27973(ch__$1,f__$1,map_LT___$1,meta27974));
});
}
return (new cljs.core.async.t27973(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27982 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27982 = (function (ch,f,map_GT_,meta27983){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27983 = meta27983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27982.cljs$lang$type = true;
cljs.core.async.t27982.cljs$lang$ctorStr = "cljs.core.async/t27982";
cljs.core.async.t27982.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t27982");
});
cljs.core.async.t27982.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t27982.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27982.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27984){var self__ = this;
var _27984__$1 = this;return self__.meta27983;
});
cljs.core.async.t27982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27984,meta27983__$1){var self__ = this;
var _27984__$1 = this;return (new cljs.core.async.t27982(self__.ch,self__.f,self__.map_GT_,meta27983__$1));
});
cljs.core.async.__GT_t27982 = (function __GT_t27982(ch__$1,f__$1,map_GT___$1,meta27983){return (new cljs.core.async.t27982(ch__$1,f__$1,map_GT___$1,meta27983));
});
}
return (new cljs.core.async.t27982(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27988 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27988 = (function (ch,p,filter_GT_,meta27989){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27989 = meta27989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27988.cljs$lang$type = true;
cljs.core.async.t27988.cljs$lang$ctorStr = "cljs.core.async/t27988";
cljs.core.async.t27988.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t27988");
});
cljs.core.async.t27988.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t27988.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27988.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27990){var self__ = this;
var _27990__$1 = this;return self__.meta27989;
});
cljs.core.async.t27988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27990,meta27989__$1){var self__ = this;
var _27990__$1 = this;return (new cljs.core.async.t27988(self__.ch,self__.p,self__.filter_GT_,meta27989__$1));
});
cljs.core.async.__GT_t27988 = (function __GT_t27988(ch__$1,p__$1,filter_GT___$1,meta27989){return (new cljs.core.async.t27988(ch__$1,p__$1,filter_GT___$1,meta27989));
});
}
return (new cljs.core.async.t27988(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10343__auto___28073 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_28052){var state_val_28053 = (state_28052[1]);if((state_val_28053 === 1))
{var state_28052__$1 = state_28052;var statearr_28054_28074 = state_28052__$1;(statearr_28054_28074[2] = null);
(statearr_28054_28074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28053 === 2))
{var state_28052__$1 = state_28052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28052__$1,4,ch);
} else
{if((state_val_28053 === 3))
{var inst_28050 = (state_28052[2]);var state_28052__$1 = state_28052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28052__$1,inst_28050);
} else
{if((state_val_28053 === 4))
{var inst_28034 = (state_28052[7]);var inst_28034__$1 = (state_28052[2]);var inst_28035 = (inst_28034__$1 == null);var state_28052__$1 = (function (){var statearr_28055 = state_28052;(statearr_28055[7] = inst_28034__$1);
return statearr_28055;
})();if(cljs.core.truth_(inst_28035))
{var statearr_28056_28075 = state_28052__$1;(statearr_28056_28075[1] = 5);
} else
{var statearr_28057_28076 = state_28052__$1;(statearr_28057_28076[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28053 === 5))
{var inst_28037 = cljs.core.async.close_BANG_.call(null,out);var state_28052__$1 = state_28052;var statearr_28058_28077 = state_28052__$1;(statearr_28058_28077[2] = inst_28037);
(statearr_28058_28077[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28053 === 6))
{var inst_28034 = (state_28052[7]);var inst_28039 = p.call(null,inst_28034);var state_28052__$1 = state_28052;if(cljs.core.truth_(inst_28039))
{var statearr_28059_28078 = state_28052__$1;(statearr_28059_28078[1] = 8);
} else
{var statearr_28060_28079 = state_28052__$1;(statearr_28060_28079[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28053 === 7))
{var inst_28048 = (state_28052[2]);var state_28052__$1 = state_28052;var statearr_28061_28080 = state_28052__$1;(statearr_28061_28080[2] = inst_28048);
(statearr_28061_28080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28053 === 8))
{var inst_28034 = (state_28052[7]);var state_28052__$1 = state_28052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28052__$1,11,out,inst_28034);
} else
{if((state_val_28053 === 9))
{var state_28052__$1 = state_28052;var statearr_28062_28081 = state_28052__$1;(statearr_28062_28081[2] = null);
(statearr_28062_28081[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28053 === 10))
{var inst_28045 = (state_28052[2]);var state_28052__$1 = (function (){var statearr_28063 = state_28052;(statearr_28063[8] = inst_28045);
return statearr_28063;
})();var statearr_28064_28082 = state_28052__$1;(statearr_28064_28082[2] = null);
(statearr_28064_28082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28053 === 11))
{var inst_28042 = (state_28052[2]);var state_28052__$1 = state_28052;var statearr_28065_28083 = state_28052__$1;(statearr_28065_28083[2] = inst_28042);
(statearr_28065_28083[1] = 10);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_28069 = (new Array(9));(statearr_28069[0] = state_machine__10274__auto__);
(statearr_28069[1] = 1);
return statearr_28069;
});
var state_machine__10274__auto____1 = (function (state_28052){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_28052);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e28070){if((e28070 instanceof Object))
{var ex__10277__auto__ = e28070;var statearr_28071_28084 = state_28052;(statearr_28071_28084[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28085 = state_28052;
state_28052 = G__28085;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_28052){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_28052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_28072 = f__10344__auto__.call(null);(statearr_28072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___28073);
return statearr_28072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10343__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_28237){var state_val_28238 = (state_28237[1]);if((state_val_28238 === 1))
{var state_28237__$1 = state_28237;var statearr_28239_28276 = state_28237__$1;(statearr_28239_28276[2] = null);
(statearr_28239_28276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 2))
{var state_28237__$1 = state_28237;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28237__$1,4,in$);
} else
{if((state_val_28238 === 3))
{var inst_28235 = (state_28237[2]);var state_28237__$1 = state_28237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28237__$1,inst_28235);
} else
{if((state_val_28238 === 4))
{var inst_28183 = (state_28237[7]);var inst_28183__$1 = (state_28237[2]);var inst_28184 = (inst_28183__$1 == null);var state_28237__$1 = (function (){var statearr_28240 = state_28237;(statearr_28240[7] = inst_28183__$1);
return statearr_28240;
})();if(cljs.core.truth_(inst_28184))
{var statearr_28241_28277 = state_28237__$1;(statearr_28241_28277[1] = 5);
} else
{var statearr_28242_28278 = state_28237__$1;(statearr_28242_28278[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 5))
{var inst_28186 = cljs.core.async.close_BANG_.call(null,out);var state_28237__$1 = state_28237;var statearr_28243_28279 = state_28237__$1;(statearr_28243_28279[2] = inst_28186);
(statearr_28243_28279[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 6))
{var inst_28183 = (state_28237[7]);var inst_28188 = f.call(null,inst_28183);var inst_28193 = cljs.core.seq.call(null,inst_28188);var inst_28194 = inst_28193;var inst_28195 = null;var inst_28196 = 0;var inst_28197 = 0;var state_28237__$1 = (function (){var statearr_28244 = state_28237;(statearr_28244[8] = inst_28194);
(statearr_28244[9] = inst_28195);
(statearr_28244[10] = inst_28196);
(statearr_28244[11] = inst_28197);
return statearr_28244;
})();var statearr_28245_28280 = state_28237__$1;(statearr_28245_28280[2] = null);
(statearr_28245_28280[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 7))
{var inst_28233 = (state_28237[2]);var state_28237__$1 = state_28237;var statearr_28246_28281 = state_28237__$1;(statearr_28246_28281[2] = inst_28233);
(statearr_28246_28281[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 8))
{var inst_28196 = (state_28237[10]);var inst_28197 = (state_28237[11]);var inst_28199 = (inst_28197 < inst_28196);var inst_28200 = inst_28199;var state_28237__$1 = state_28237;if(cljs.core.truth_(inst_28200))
{var statearr_28247_28282 = state_28237__$1;(statearr_28247_28282[1] = 10);
} else
{var statearr_28248_28283 = state_28237__$1;(statearr_28248_28283[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 9))
{var inst_28230 = (state_28237[2]);var state_28237__$1 = (function (){var statearr_28249 = state_28237;(statearr_28249[12] = inst_28230);
return statearr_28249;
})();var statearr_28250_28284 = state_28237__$1;(statearr_28250_28284[2] = null);
(statearr_28250_28284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 10))
{var inst_28195 = (state_28237[9]);var inst_28197 = (state_28237[11]);var inst_28202 = cljs.core._nth.call(null,inst_28195,inst_28197);var state_28237__$1 = state_28237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28237__$1,13,out,inst_28202);
} else
{if((state_val_28238 === 11))
{var inst_28194 = (state_28237[8]);var inst_28208 = (state_28237[13]);var inst_28208__$1 = cljs.core.seq.call(null,inst_28194);var state_28237__$1 = (function (){var statearr_28254 = state_28237;(statearr_28254[13] = inst_28208__$1);
return statearr_28254;
})();if(inst_28208__$1)
{var statearr_28255_28285 = state_28237__$1;(statearr_28255_28285[1] = 14);
} else
{var statearr_28256_28286 = state_28237__$1;(statearr_28256_28286[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 12))
{var inst_28228 = (state_28237[2]);var state_28237__$1 = state_28237;var statearr_28257_28287 = state_28237__$1;(statearr_28257_28287[2] = inst_28228);
(statearr_28257_28287[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 13))
{var inst_28194 = (state_28237[8]);var inst_28195 = (state_28237[9]);var inst_28196 = (state_28237[10]);var inst_28197 = (state_28237[11]);var inst_28204 = (state_28237[2]);var inst_28205 = (inst_28197 + 1);var tmp28251 = inst_28194;var tmp28252 = inst_28195;var tmp28253 = inst_28196;var inst_28194__$1 = tmp28251;var inst_28195__$1 = tmp28252;var inst_28196__$1 = tmp28253;var inst_28197__$1 = inst_28205;var state_28237__$1 = (function (){var statearr_28258 = state_28237;(statearr_28258[14] = inst_28204);
(statearr_28258[8] = inst_28194__$1);
(statearr_28258[9] = inst_28195__$1);
(statearr_28258[10] = inst_28196__$1);
(statearr_28258[11] = inst_28197__$1);
return statearr_28258;
})();var statearr_28259_28288 = state_28237__$1;(statearr_28259_28288[2] = null);
(statearr_28259_28288[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 14))
{var inst_28208 = (state_28237[13]);var inst_28210 = cljs.core.chunked_seq_QMARK_.call(null,inst_28208);var state_28237__$1 = state_28237;if(inst_28210)
{var statearr_28260_28289 = state_28237__$1;(statearr_28260_28289[1] = 17);
} else
{var statearr_28261_28290 = state_28237__$1;(statearr_28261_28290[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 15))
{var state_28237__$1 = state_28237;var statearr_28262_28291 = state_28237__$1;(statearr_28262_28291[2] = null);
(statearr_28262_28291[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 16))
{var inst_28226 = (state_28237[2]);var state_28237__$1 = state_28237;var statearr_28263_28292 = state_28237__$1;(statearr_28263_28292[2] = inst_28226);
(statearr_28263_28292[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 17))
{var inst_28208 = (state_28237[13]);var inst_28212 = cljs.core.chunk_first.call(null,inst_28208);var inst_28213 = cljs.core.chunk_rest.call(null,inst_28208);var inst_28214 = cljs.core.count.call(null,inst_28212);var inst_28194 = inst_28213;var inst_28195 = inst_28212;var inst_28196 = inst_28214;var inst_28197 = 0;var state_28237__$1 = (function (){var statearr_28264 = state_28237;(statearr_28264[8] = inst_28194);
(statearr_28264[9] = inst_28195);
(statearr_28264[10] = inst_28196);
(statearr_28264[11] = inst_28197);
return statearr_28264;
})();var statearr_28265_28293 = state_28237__$1;(statearr_28265_28293[2] = null);
(statearr_28265_28293[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 18))
{var inst_28208 = (state_28237[13]);var inst_28217 = cljs.core.first.call(null,inst_28208);var state_28237__$1 = state_28237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28237__$1,20,out,inst_28217);
} else
{if((state_val_28238 === 19))
{var inst_28223 = (state_28237[2]);var state_28237__$1 = state_28237;var statearr_28266_28294 = state_28237__$1;(statearr_28266_28294[2] = inst_28223);
(statearr_28266_28294[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28238 === 20))
{var inst_28208 = (state_28237[13]);var inst_28219 = (state_28237[2]);var inst_28220 = cljs.core.next.call(null,inst_28208);var inst_28194 = inst_28220;var inst_28195 = null;var inst_28196 = 0;var inst_28197 = 0;var state_28237__$1 = (function (){var statearr_28267 = state_28237;(statearr_28267[8] = inst_28194);
(statearr_28267[9] = inst_28195);
(statearr_28267[10] = inst_28196);
(statearr_28267[15] = inst_28219);
(statearr_28267[11] = inst_28197);
return statearr_28267;
})();var statearr_28268_28295 = state_28237__$1;(statearr_28268_28295[2] = null);
(statearr_28268_28295[1] = 8);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_28272 = (new Array(16));(statearr_28272[0] = state_machine__10274__auto__);
(statearr_28272[1] = 1);
return statearr_28272;
});
var state_machine__10274__auto____1 = (function (state_28237){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_28237);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e28273){if((e28273 instanceof Object))
{var ex__10277__auto__ = e28273;var statearr_28274_28296 = state_28237;(statearr_28274_28296[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28237);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28273;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28297 = state_28237;
state_28237 = G__28297;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_28237){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_28237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_28275 = f__10344__auto__.call(null);(statearr_28275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto__);
return statearr_28275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
}));
return c__10343__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10343__auto___28378 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_28357){var state_val_28358 = (state_28357[1]);if((state_val_28358 === 1))
{var state_28357__$1 = state_28357;var statearr_28359_28379 = state_28357__$1;(statearr_28359_28379[2] = null);
(statearr_28359_28379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 2))
{var state_28357__$1 = state_28357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28357__$1,4,from);
} else
{if((state_val_28358 === 3))
{var inst_28355 = (state_28357[2]);var state_28357__$1 = state_28357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28357__$1,inst_28355);
} else
{if((state_val_28358 === 4))
{var inst_28340 = (state_28357[7]);var inst_28340__$1 = (state_28357[2]);var inst_28341 = (inst_28340__$1 == null);var state_28357__$1 = (function (){var statearr_28360 = state_28357;(statearr_28360[7] = inst_28340__$1);
return statearr_28360;
})();if(cljs.core.truth_(inst_28341))
{var statearr_28361_28380 = state_28357__$1;(statearr_28361_28380[1] = 5);
} else
{var statearr_28362_28381 = state_28357__$1;(statearr_28362_28381[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 5))
{var state_28357__$1 = state_28357;if(cljs.core.truth_(close_QMARK_))
{var statearr_28363_28382 = state_28357__$1;(statearr_28363_28382[1] = 8);
} else
{var statearr_28364_28383 = state_28357__$1;(statearr_28364_28383[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 6))
{var inst_28340 = (state_28357[7]);var state_28357__$1 = state_28357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28357__$1,11,to,inst_28340);
} else
{if((state_val_28358 === 7))
{var inst_28353 = (state_28357[2]);var state_28357__$1 = state_28357;var statearr_28365_28384 = state_28357__$1;(statearr_28365_28384[2] = inst_28353);
(statearr_28365_28384[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 8))
{var inst_28344 = cljs.core.async.close_BANG_.call(null,to);var state_28357__$1 = state_28357;var statearr_28366_28385 = state_28357__$1;(statearr_28366_28385[2] = inst_28344);
(statearr_28366_28385[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 9))
{var state_28357__$1 = state_28357;var statearr_28367_28386 = state_28357__$1;(statearr_28367_28386[2] = null);
(statearr_28367_28386[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 10))
{var inst_28347 = (state_28357[2]);var state_28357__$1 = state_28357;var statearr_28368_28387 = state_28357__$1;(statearr_28368_28387[2] = inst_28347);
(statearr_28368_28387[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 11))
{var inst_28350 = (state_28357[2]);var state_28357__$1 = (function (){var statearr_28369 = state_28357;(statearr_28369[8] = inst_28350);
return statearr_28369;
})();var statearr_28370_28388 = state_28357__$1;(statearr_28370_28388[2] = null);
(statearr_28370_28388[1] = 2);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_28374 = (new Array(9));(statearr_28374[0] = state_machine__10274__auto__);
(statearr_28374[1] = 1);
return statearr_28374;
});
var state_machine__10274__auto____1 = (function (state_28357){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_28357);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e28375){if((e28375 instanceof Object))
{var ex__10277__auto__ = e28375;var statearr_28376_28389 = state_28357;(statearr_28376_28389[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28357);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28375;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28390 = state_28357;
state_28357 = G__28390;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_28357){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_28357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_28377 = f__10344__auto__.call(null);(statearr_28377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___28378);
return statearr_28377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10343__auto___28477 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_28455){var state_val_28456 = (state_28455[1]);if((state_val_28456 === 1))
{var state_28455__$1 = state_28455;var statearr_28457_28478 = state_28455__$1;(statearr_28457_28478[2] = null);
(statearr_28457_28478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28456 === 2))
{var state_28455__$1 = state_28455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28455__$1,4,ch);
} else
{if((state_val_28456 === 3))
{var inst_28453 = (state_28455[2]);var state_28455__$1 = state_28455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28455__$1,inst_28453);
} else
{if((state_val_28456 === 4))
{var inst_28436 = (state_28455[7]);var inst_28436__$1 = (state_28455[2]);var inst_28437 = (inst_28436__$1 == null);var state_28455__$1 = (function (){var statearr_28458 = state_28455;(statearr_28458[7] = inst_28436__$1);
return statearr_28458;
})();if(cljs.core.truth_(inst_28437))
{var statearr_28459_28479 = state_28455__$1;(statearr_28459_28479[1] = 5);
} else
{var statearr_28460_28480 = state_28455__$1;(statearr_28460_28480[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28456 === 5))
{var inst_28439 = cljs.core.async.close_BANG_.call(null,tc);var inst_28440 = cljs.core.async.close_BANG_.call(null,fc);var state_28455__$1 = (function (){var statearr_28461 = state_28455;(statearr_28461[8] = inst_28439);
return statearr_28461;
})();var statearr_28462_28481 = state_28455__$1;(statearr_28462_28481[2] = inst_28440);
(statearr_28462_28481[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28456 === 6))
{var inst_28436 = (state_28455[7]);var inst_28442 = p.call(null,inst_28436);var state_28455__$1 = state_28455;if(cljs.core.truth_(inst_28442))
{var statearr_28463_28482 = state_28455__$1;(statearr_28463_28482[1] = 9);
} else
{var statearr_28464_28483 = state_28455__$1;(statearr_28464_28483[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28456 === 7))
{var inst_28451 = (state_28455[2]);var state_28455__$1 = state_28455;var statearr_28465_28484 = state_28455__$1;(statearr_28465_28484[2] = inst_28451);
(statearr_28465_28484[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28456 === 8))
{var inst_28448 = (state_28455[2]);var state_28455__$1 = (function (){var statearr_28466 = state_28455;(statearr_28466[9] = inst_28448);
return statearr_28466;
})();var statearr_28467_28485 = state_28455__$1;(statearr_28467_28485[2] = null);
(statearr_28467_28485[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28456 === 9))
{var state_28455__$1 = state_28455;var statearr_28468_28486 = state_28455__$1;(statearr_28468_28486[2] = tc);
(statearr_28468_28486[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28456 === 10))
{var state_28455__$1 = state_28455;var statearr_28469_28487 = state_28455__$1;(statearr_28469_28487[2] = fc);
(statearr_28469_28487[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28456 === 11))
{var inst_28436 = (state_28455[7]);var inst_28446 = (state_28455[2]);var state_28455__$1 = state_28455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28455__$1,8,inst_28446,inst_28436);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_28473 = (new Array(10));(statearr_28473[0] = state_machine__10274__auto__);
(statearr_28473[1] = 1);
return statearr_28473;
});
var state_machine__10274__auto____1 = (function (state_28455){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_28455);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e28474){if((e28474 instanceof Object))
{var ex__10277__auto__ = e28474;var statearr_28475_28488 = state_28455;(statearr_28475_28488[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28489 = state_28455;
state_28455 = G__28489;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_28455){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_28455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_28476 = f__10344__auto__.call(null);(statearr_28476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___28477);
return statearr_28476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10343__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_28536){var state_val_28537 = (state_28536[1]);if((state_val_28537 === 7))
{var inst_28532 = (state_28536[2]);var state_28536__$1 = state_28536;var statearr_28538_28554 = state_28536__$1;(statearr_28538_28554[2] = inst_28532);
(statearr_28538_28554[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28537 === 6))
{var inst_28522 = (state_28536[7]);var inst_28525 = (state_28536[8]);var inst_28529 = f.call(null,inst_28522,inst_28525);var inst_28522__$1 = inst_28529;var state_28536__$1 = (function (){var statearr_28539 = state_28536;(statearr_28539[7] = inst_28522__$1);
return statearr_28539;
})();var statearr_28540_28555 = state_28536__$1;(statearr_28540_28555[2] = null);
(statearr_28540_28555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28537 === 5))
{var inst_28522 = (state_28536[7]);var state_28536__$1 = state_28536;var statearr_28541_28556 = state_28536__$1;(statearr_28541_28556[2] = inst_28522);
(statearr_28541_28556[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28537 === 4))
{var inst_28525 = (state_28536[8]);var inst_28525__$1 = (state_28536[2]);var inst_28526 = (inst_28525__$1 == null);var state_28536__$1 = (function (){var statearr_28542 = state_28536;(statearr_28542[8] = inst_28525__$1);
return statearr_28542;
})();if(cljs.core.truth_(inst_28526))
{var statearr_28543_28557 = state_28536__$1;(statearr_28543_28557[1] = 5);
} else
{var statearr_28544_28558 = state_28536__$1;(statearr_28544_28558[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28537 === 3))
{var inst_28534 = (state_28536[2]);var state_28536__$1 = state_28536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28536__$1,inst_28534);
} else
{if((state_val_28537 === 2))
{var state_28536__$1 = state_28536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28536__$1,4,ch);
} else
{if((state_val_28537 === 1))
{var inst_28522 = init;var state_28536__$1 = (function (){var statearr_28545 = state_28536;(statearr_28545[7] = inst_28522);
return statearr_28545;
})();var statearr_28546_28559 = state_28536__$1;(statearr_28546_28559[2] = null);
(statearr_28546_28559[1] = 2);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_28550 = (new Array(9));(statearr_28550[0] = state_machine__10274__auto__);
(statearr_28550[1] = 1);
return statearr_28550;
});
var state_machine__10274__auto____1 = (function (state_28536){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_28536);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e28551){if((e28551 instanceof Object))
{var ex__10277__auto__ = e28551;var statearr_28552_28560 = state_28536;(statearr_28552_28560[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28536);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28561 = state_28536;
state_28536 = G__28561;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_28536){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_28536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_28553 = f__10344__auto__.call(null);(statearr_28553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto__);
return statearr_28553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
}));
return c__10343__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10343__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_28623){var state_val_28624 = (state_28623[1]);if((state_val_28624 === 1))
{var inst_28603 = cljs.core.seq.call(null,coll);var inst_28604 = inst_28603;var state_28623__$1 = (function (){var statearr_28625 = state_28623;(statearr_28625[7] = inst_28604);
return statearr_28625;
})();var statearr_28626_28644 = state_28623__$1;(statearr_28626_28644[2] = null);
(statearr_28626_28644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 2))
{var inst_28604 = (state_28623[7]);var state_28623__$1 = state_28623;if(cljs.core.truth_(inst_28604))
{var statearr_28627_28645 = state_28623__$1;(statearr_28627_28645[1] = 4);
} else
{var statearr_28628_28646 = state_28623__$1;(statearr_28628_28646[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 3))
{var inst_28621 = (state_28623[2]);var state_28623__$1 = state_28623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28623__$1,inst_28621);
} else
{if((state_val_28624 === 4))
{var inst_28604 = (state_28623[7]);var inst_28607 = cljs.core.first.call(null,inst_28604);var state_28623__$1 = state_28623;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28623__$1,7,ch,inst_28607);
} else
{if((state_val_28624 === 5))
{var state_28623__$1 = state_28623;if(cljs.core.truth_(close_QMARK_))
{var statearr_28629_28647 = state_28623__$1;(statearr_28629_28647[1] = 8);
} else
{var statearr_28630_28648 = state_28623__$1;(statearr_28630_28648[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 6))
{var inst_28619 = (state_28623[2]);var state_28623__$1 = state_28623;var statearr_28631_28649 = state_28623__$1;(statearr_28631_28649[2] = inst_28619);
(statearr_28631_28649[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 7))
{var inst_28604 = (state_28623[7]);var inst_28609 = (state_28623[2]);var inst_28610 = cljs.core.next.call(null,inst_28604);var inst_28604__$1 = inst_28610;var state_28623__$1 = (function (){var statearr_28632 = state_28623;(statearr_28632[7] = inst_28604__$1);
(statearr_28632[8] = inst_28609);
return statearr_28632;
})();var statearr_28633_28650 = state_28623__$1;(statearr_28633_28650[2] = null);
(statearr_28633_28650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 8))
{var inst_28614 = cljs.core.async.close_BANG_.call(null,ch);var state_28623__$1 = state_28623;var statearr_28634_28651 = state_28623__$1;(statearr_28634_28651[2] = inst_28614);
(statearr_28634_28651[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 9))
{var state_28623__$1 = state_28623;var statearr_28635_28652 = state_28623__$1;(statearr_28635_28652[2] = null);
(statearr_28635_28652[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 10))
{var inst_28617 = (state_28623[2]);var state_28623__$1 = state_28623;var statearr_28636_28653 = state_28623__$1;(statearr_28636_28653[2] = inst_28617);
(statearr_28636_28653[1] = 6);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_28640 = (new Array(9));(statearr_28640[0] = state_machine__10274__auto__);
(statearr_28640[1] = 1);
return statearr_28640;
});
var state_machine__10274__auto____1 = (function (state_28623){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_28623);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e28641){if((e28641 instanceof Object))
{var ex__10277__auto__ = e28641;var statearr_28642_28654 = state_28623;(statearr_28642_28654[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28623);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28655 = state_28623;
state_28623 = G__28655;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_28623){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_28623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_28643 = f__10344__auto__.call(null);(statearr_28643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto__);
return statearr_28643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
}));
return c__10343__auto__;
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
cljs.core.async.Mux = (function (){var obj28657 = {};return obj28657;
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
cljs.core.async.Mult = (function (){var obj28659 = {};return obj28659;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t28874 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28874 = (function (cs,ch,mult,meta28875){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28875 = meta28875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28874.cljs$lang$type = true;
cljs.core.async.t28874.cljs$lang$ctorStr = "cljs.core.async/t28874";
cljs.core.async.t28874.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t28874");
});})(cs))
;
cljs.core.async.t28874.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t28874.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t28874.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t28874.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t28874.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t28874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28876){var self__ = this;
var _28876__$1 = this;return self__.meta28875;
});})(cs))
;
cljs.core.async.t28874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28876,meta28875__$1){var self__ = this;
var _28876__$1 = this;return (new cljs.core.async.t28874(self__.cs,self__.ch,self__.mult,meta28875__$1));
});})(cs))
;
cljs.core.async.__GT_t28874 = ((function (cs){
return (function __GT_t28874(cs__$1,ch__$1,mult__$1,meta28875){return (new cljs.core.async.t28874(cs__$1,ch__$1,mult__$1,meta28875));
});})(cs))
;
}
return (new cljs.core.async.t28874(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10343__auto___29088 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_29006){var state_val_29007 = (state_29006[1]);if((state_val_29007 === 32))
{var inst_28879 = (state_29006[7]);var inst_28955 = (state_29006[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29006,31,Object,null,30);var inst_28962 = cljs.core.async.put_BANG_.call(null,inst_28955,inst_28879,done);var state_29006__$1 = state_29006;var statearr_29008_29089 = state_29006__$1;(statearr_29008_29089[2] = inst_28962);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29006__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 1))
{var state_29006__$1 = state_29006;var statearr_29009_29090 = state_29006__$1;(statearr_29009_29090[2] = null);
(statearr_29009_29090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 33))
{var inst_28968 = (state_29006[9]);var inst_28970 = cljs.core.chunked_seq_QMARK_.call(null,inst_28968);var state_29006__$1 = state_29006;if(inst_28970)
{var statearr_29010_29091 = state_29006__$1;(statearr_29010_29091[1] = 36);
} else
{var statearr_29011_29092 = state_29006__$1;(statearr_29011_29092[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 2))
{var state_29006__$1 = state_29006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29006__$1,4,ch);
} else
{if((state_val_29007 === 34))
{var state_29006__$1 = state_29006;var statearr_29012_29093 = state_29006__$1;(statearr_29012_29093[2] = null);
(statearr_29012_29093[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 3))
{var inst_29004 = (state_29006[2]);var state_29006__$1 = state_29006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29006__$1,inst_29004);
} else
{if((state_val_29007 === 35))
{var inst_28993 = (state_29006[2]);var state_29006__$1 = state_29006;var statearr_29013_29094 = state_29006__$1;(statearr_29013_29094[2] = inst_28993);
(statearr_29013_29094[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 4))
{var inst_28879 = (state_29006[7]);var inst_28879__$1 = (state_29006[2]);var inst_28880 = (inst_28879__$1 == null);var state_29006__$1 = (function (){var statearr_29014 = state_29006;(statearr_29014[7] = inst_28879__$1);
return statearr_29014;
})();if(cljs.core.truth_(inst_28880))
{var statearr_29015_29095 = state_29006__$1;(statearr_29015_29095[1] = 5);
} else
{var statearr_29016_29096 = state_29006__$1;(statearr_29016_29096[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 36))
{var inst_28968 = (state_29006[9]);var inst_28972 = cljs.core.chunk_first.call(null,inst_28968);var inst_28973 = cljs.core.chunk_rest.call(null,inst_28968);var inst_28974 = cljs.core.count.call(null,inst_28972);var inst_28947 = inst_28973;var inst_28948 = inst_28972;var inst_28949 = inst_28974;var inst_28950 = 0;var state_29006__$1 = (function (){var statearr_29017 = state_29006;(statearr_29017[10] = inst_28947);
(statearr_29017[11] = inst_28948);
(statearr_29017[12] = inst_28949);
(statearr_29017[13] = inst_28950);
return statearr_29017;
})();var statearr_29018_29097 = state_29006__$1;(statearr_29018_29097[2] = null);
(statearr_29018_29097[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 5))
{var inst_28886 = cljs.core.deref.call(null,cs);var inst_28887 = cljs.core.seq.call(null,inst_28886);var inst_28888 = inst_28887;var inst_28889 = null;var inst_28890 = 0;var inst_28891 = 0;var state_29006__$1 = (function (){var statearr_29019 = state_29006;(statearr_29019[14] = inst_28891);
(statearr_29019[15] = inst_28890);
(statearr_29019[16] = inst_28889);
(statearr_29019[17] = inst_28888);
return statearr_29019;
})();var statearr_29020_29098 = state_29006__$1;(statearr_29020_29098[2] = null);
(statearr_29020_29098[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 37))
{var inst_28968 = (state_29006[9]);var inst_28977 = cljs.core.first.call(null,inst_28968);var state_29006__$1 = (function (){var statearr_29021 = state_29006;(statearr_29021[18] = inst_28977);
return statearr_29021;
})();var statearr_29022_29099 = state_29006__$1;(statearr_29022_29099[2] = null);
(statearr_29022_29099[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 6))
{var inst_28938 = cljs.core.deref.call(null,cs);var inst_28939 = cljs.core.keys.call(null,inst_28938);var inst_28940 = cljs.core.count.call(null,inst_28939);var inst_28941 = cljs.core.reset_BANG_.call(null,dctr,inst_28940);var inst_28946 = cljs.core.seq.call(null,inst_28939);var inst_28947 = inst_28946;var inst_28948 = null;var inst_28949 = 0;var inst_28950 = 0;var state_29006__$1 = (function (){var statearr_29023 = state_29006;(statearr_29023[19] = inst_28941);
(statearr_29023[10] = inst_28947);
(statearr_29023[11] = inst_28948);
(statearr_29023[12] = inst_28949);
(statearr_29023[13] = inst_28950);
return statearr_29023;
})();var statearr_29024_29100 = state_29006__$1;(statearr_29024_29100[2] = null);
(statearr_29024_29100[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 38))
{var inst_28990 = (state_29006[2]);var state_29006__$1 = state_29006;var statearr_29025_29101 = state_29006__$1;(statearr_29025_29101[2] = inst_28990);
(statearr_29025_29101[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 7))
{var inst_29002 = (state_29006[2]);var state_29006__$1 = state_29006;var statearr_29026_29102 = state_29006__$1;(statearr_29026_29102[2] = inst_29002);
(statearr_29026_29102[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 39))
{var inst_28968 = (state_29006[9]);var inst_28986 = (state_29006[2]);var inst_28987 = cljs.core.next.call(null,inst_28968);var inst_28947 = inst_28987;var inst_28948 = null;var inst_28949 = 0;var inst_28950 = 0;var state_29006__$1 = (function (){var statearr_29027 = state_29006;(statearr_29027[10] = inst_28947);
(statearr_29027[11] = inst_28948);
(statearr_29027[12] = inst_28949);
(statearr_29027[13] = inst_28950);
(statearr_29027[20] = inst_28986);
return statearr_29027;
})();var statearr_29028_29103 = state_29006__$1;(statearr_29028_29103[2] = null);
(statearr_29028_29103[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 8))
{var inst_28891 = (state_29006[14]);var inst_28890 = (state_29006[15]);var inst_28893 = (inst_28891 < inst_28890);var inst_28894 = inst_28893;var state_29006__$1 = state_29006;if(cljs.core.truth_(inst_28894))
{var statearr_29029_29104 = state_29006__$1;(statearr_29029_29104[1] = 10);
} else
{var statearr_29030_29105 = state_29006__$1;(statearr_29030_29105[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 40))
{var inst_28977 = (state_29006[18]);var inst_28978 = (state_29006[2]);var inst_28979 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28980 = cljs.core.async.untap_STAR_.call(null,m,inst_28977);var state_29006__$1 = (function (){var statearr_29031 = state_29006;(statearr_29031[21] = inst_28978);
(statearr_29031[22] = inst_28979);
return statearr_29031;
})();var statearr_29032_29106 = state_29006__$1;(statearr_29032_29106[2] = inst_28980);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29006__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 9))
{var inst_28936 = (state_29006[2]);var state_29006__$1 = state_29006;var statearr_29033_29107 = state_29006__$1;(statearr_29033_29107[2] = inst_28936);
(statearr_29033_29107[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 41))
{var inst_28977 = (state_29006[18]);var inst_28879 = (state_29006[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29006,40,Object,null,39);var inst_28984 = cljs.core.async.put_BANG_.call(null,inst_28977,inst_28879,done);var state_29006__$1 = state_29006;var statearr_29034_29108 = state_29006__$1;(statearr_29034_29108[2] = inst_28984);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29006__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 10))
{var inst_28891 = (state_29006[14]);var inst_28889 = (state_29006[16]);var inst_28897 = cljs.core._nth.call(null,inst_28889,inst_28891);var inst_28898 = cljs.core.nth.call(null,inst_28897,0,null);var inst_28899 = cljs.core.nth.call(null,inst_28897,1,null);var state_29006__$1 = (function (){var statearr_29035 = state_29006;(statearr_29035[23] = inst_28898);
return statearr_29035;
})();if(cljs.core.truth_(inst_28899))
{var statearr_29036_29109 = state_29006__$1;(statearr_29036_29109[1] = 13);
} else
{var statearr_29037_29110 = state_29006__$1;(statearr_29037_29110[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 42))
{var inst_28999 = (state_29006[2]);var state_29006__$1 = (function (){var statearr_29038 = state_29006;(statearr_29038[24] = inst_28999);
return statearr_29038;
})();var statearr_29039_29111 = state_29006__$1;(statearr_29039_29111[2] = null);
(statearr_29039_29111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 11))
{var inst_28908 = (state_29006[25]);var inst_28888 = (state_29006[17]);var inst_28908__$1 = cljs.core.seq.call(null,inst_28888);var state_29006__$1 = (function (){var statearr_29040 = state_29006;(statearr_29040[25] = inst_28908__$1);
return statearr_29040;
})();if(inst_28908__$1)
{var statearr_29041_29112 = state_29006__$1;(statearr_29041_29112[1] = 16);
} else
{var statearr_29042_29113 = state_29006__$1;(statearr_29042_29113[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 12))
{var inst_28934 = (state_29006[2]);var state_29006__$1 = state_29006;var statearr_29043_29114 = state_29006__$1;(statearr_29043_29114[2] = inst_28934);
(statearr_29043_29114[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 13))
{var inst_28898 = (state_29006[23]);var inst_28901 = cljs.core.async.close_BANG_.call(null,inst_28898);var state_29006__$1 = state_29006;var statearr_29047_29115 = state_29006__$1;(statearr_29047_29115[2] = inst_28901);
(statearr_29047_29115[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 14))
{var state_29006__$1 = state_29006;var statearr_29048_29116 = state_29006__$1;(statearr_29048_29116[2] = null);
(statearr_29048_29116[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 15))
{var inst_28891 = (state_29006[14]);var inst_28890 = (state_29006[15]);var inst_28889 = (state_29006[16]);var inst_28888 = (state_29006[17]);var inst_28904 = (state_29006[2]);var inst_28905 = (inst_28891 + 1);var tmp29044 = inst_28890;var tmp29045 = inst_28889;var tmp29046 = inst_28888;var inst_28888__$1 = tmp29046;var inst_28889__$1 = tmp29045;var inst_28890__$1 = tmp29044;var inst_28891__$1 = inst_28905;var state_29006__$1 = (function (){var statearr_29049 = state_29006;(statearr_29049[14] = inst_28891__$1);
(statearr_29049[15] = inst_28890__$1);
(statearr_29049[16] = inst_28889__$1);
(statearr_29049[17] = inst_28888__$1);
(statearr_29049[26] = inst_28904);
return statearr_29049;
})();var statearr_29050_29117 = state_29006__$1;(statearr_29050_29117[2] = null);
(statearr_29050_29117[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 16))
{var inst_28908 = (state_29006[25]);var inst_28910 = cljs.core.chunked_seq_QMARK_.call(null,inst_28908);var state_29006__$1 = state_29006;if(inst_28910)
{var statearr_29051_29118 = state_29006__$1;(statearr_29051_29118[1] = 19);
} else
{var statearr_29052_29119 = state_29006__$1;(statearr_29052_29119[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 17))
{var state_29006__$1 = state_29006;var statearr_29053_29120 = state_29006__$1;(statearr_29053_29120[2] = null);
(statearr_29053_29120[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 18))
{var inst_28932 = (state_29006[2]);var state_29006__$1 = state_29006;var statearr_29054_29121 = state_29006__$1;(statearr_29054_29121[2] = inst_28932);
(statearr_29054_29121[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 19))
{var inst_28908 = (state_29006[25]);var inst_28912 = cljs.core.chunk_first.call(null,inst_28908);var inst_28913 = cljs.core.chunk_rest.call(null,inst_28908);var inst_28914 = cljs.core.count.call(null,inst_28912);var inst_28888 = inst_28913;var inst_28889 = inst_28912;var inst_28890 = inst_28914;var inst_28891 = 0;var state_29006__$1 = (function (){var statearr_29055 = state_29006;(statearr_29055[14] = inst_28891);
(statearr_29055[15] = inst_28890);
(statearr_29055[16] = inst_28889);
(statearr_29055[17] = inst_28888);
return statearr_29055;
})();var statearr_29056_29122 = state_29006__$1;(statearr_29056_29122[2] = null);
(statearr_29056_29122[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 20))
{var inst_28908 = (state_29006[25]);var inst_28918 = cljs.core.first.call(null,inst_28908);var inst_28919 = cljs.core.nth.call(null,inst_28918,0,null);var inst_28920 = cljs.core.nth.call(null,inst_28918,1,null);var state_29006__$1 = (function (){var statearr_29057 = state_29006;(statearr_29057[27] = inst_28919);
return statearr_29057;
})();if(cljs.core.truth_(inst_28920))
{var statearr_29058_29123 = state_29006__$1;(statearr_29058_29123[1] = 22);
} else
{var statearr_29059_29124 = state_29006__$1;(statearr_29059_29124[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 21))
{var inst_28929 = (state_29006[2]);var state_29006__$1 = state_29006;var statearr_29060_29125 = state_29006__$1;(statearr_29060_29125[2] = inst_28929);
(statearr_29060_29125[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 22))
{var inst_28919 = (state_29006[27]);var inst_28922 = cljs.core.async.close_BANG_.call(null,inst_28919);var state_29006__$1 = state_29006;var statearr_29061_29126 = state_29006__$1;(statearr_29061_29126[2] = inst_28922);
(statearr_29061_29126[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 23))
{var state_29006__$1 = state_29006;var statearr_29062_29127 = state_29006__$1;(statearr_29062_29127[2] = null);
(statearr_29062_29127[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 24))
{var inst_28908 = (state_29006[25]);var inst_28925 = (state_29006[2]);var inst_28926 = cljs.core.next.call(null,inst_28908);var inst_28888 = inst_28926;var inst_28889 = null;var inst_28890 = 0;var inst_28891 = 0;var state_29006__$1 = (function (){var statearr_29063 = state_29006;(statearr_29063[28] = inst_28925);
(statearr_29063[14] = inst_28891);
(statearr_29063[15] = inst_28890);
(statearr_29063[16] = inst_28889);
(statearr_29063[17] = inst_28888);
return statearr_29063;
})();var statearr_29064_29128 = state_29006__$1;(statearr_29064_29128[2] = null);
(statearr_29064_29128[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 25))
{var inst_28949 = (state_29006[12]);var inst_28950 = (state_29006[13]);var inst_28952 = (inst_28950 < inst_28949);var inst_28953 = inst_28952;var state_29006__$1 = state_29006;if(cljs.core.truth_(inst_28953))
{var statearr_29065_29129 = state_29006__$1;(statearr_29065_29129[1] = 27);
} else
{var statearr_29066_29130 = state_29006__$1;(statearr_29066_29130[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 26))
{var inst_28997 = (state_29006[2]);var state_29006__$1 = (function (){var statearr_29067 = state_29006;(statearr_29067[29] = inst_28997);
return statearr_29067;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29006__$1,42,dchan);
} else
{if((state_val_29007 === 27))
{var inst_28948 = (state_29006[11]);var inst_28950 = (state_29006[13]);var inst_28955 = cljs.core._nth.call(null,inst_28948,inst_28950);var state_29006__$1 = (function (){var statearr_29068 = state_29006;(statearr_29068[8] = inst_28955);
return statearr_29068;
})();var statearr_29069_29131 = state_29006__$1;(statearr_29069_29131[2] = null);
(statearr_29069_29131[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 28))
{var inst_28968 = (state_29006[9]);var inst_28947 = (state_29006[10]);var inst_28968__$1 = cljs.core.seq.call(null,inst_28947);var state_29006__$1 = (function (){var statearr_29073 = state_29006;(statearr_29073[9] = inst_28968__$1);
return statearr_29073;
})();if(inst_28968__$1)
{var statearr_29074_29132 = state_29006__$1;(statearr_29074_29132[1] = 33);
} else
{var statearr_29075_29133 = state_29006__$1;(statearr_29075_29133[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 29))
{var inst_28995 = (state_29006[2]);var state_29006__$1 = state_29006;var statearr_29076_29134 = state_29006__$1;(statearr_29076_29134[2] = inst_28995);
(statearr_29076_29134[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 30))
{var inst_28947 = (state_29006[10]);var inst_28948 = (state_29006[11]);var inst_28949 = (state_29006[12]);var inst_28950 = (state_29006[13]);var inst_28964 = (state_29006[2]);var inst_28965 = (inst_28950 + 1);var tmp29070 = inst_28947;var tmp29071 = inst_28948;var tmp29072 = inst_28949;var inst_28947__$1 = tmp29070;var inst_28948__$1 = tmp29071;var inst_28949__$1 = tmp29072;var inst_28950__$1 = inst_28965;var state_29006__$1 = (function (){var statearr_29077 = state_29006;(statearr_29077[30] = inst_28964);
(statearr_29077[10] = inst_28947__$1);
(statearr_29077[11] = inst_28948__$1);
(statearr_29077[12] = inst_28949__$1);
(statearr_29077[13] = inst_28950__$1);
return statearr_29077;
})();var statearr_29078_29135 = state_29006__$1;(statearr_29078_29135[2] = null);
(statearr_29078_29135[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29007 === 31))
{var inst_28955 = (state_29006[8]);var inst_28956 = (state_29006[2]);var inst_28957 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28958 = cljs.core.async.untap_STAR_.call(null,m,inst_28955);var state_29006__$1 = (function (){var statearr_29079 = state_29006;(statearr_29079[31] = inst_28957);
(statearr_29079[32] = inst_28956);
return statearr_29079;
})();var statearr_29080_29136 = state_29006__$1;(statearr_29080_29136[2] = inst_28958);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29006__$1);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_29084 = (new Array(33));(statearr_29084[0] = state_machine__10274__auto__);
(statearr_29084[1] = 1);
return statearr_29084;
});
var state_machine__10274__auto____1 = (function (state_29006){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_29006);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e29085){if((e29085 instanceof Object))
{var ex__10277__auto__ = e29085;var statearr_29086_29137 = state_29006;(statearr_29086_29137[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29006);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29138 = state_29006;
state_29006 = G__29138;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_29006){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_29006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_29087 = f__10344__auto__.call(null);(statearr_29087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___29088);
return statearr_29087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
cljs.core.async.Mix = (function (){var obj29140 = {};return obj29140;
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
;var m = (function (){if(typeof cljs.core.async.t29250 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29250 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta29251){
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
this.meta29251 = meta29251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29250.cljs$lang$type = true;
cljs.core.async.t29250.cljs$lang$ctorStr = "cljs.core.async/t29250";
cljs.core.async.t29250.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t29250");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29250.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t29250.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29250.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29250.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29250.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29250.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29250.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29252){var self__ = this;
var _29252__$1 = this;return self__.meta29251;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29252,meta29251__$1){var self__ = this;
var _29252__$1 = this;return (new cljs.core.async.t29250(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta29251__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t29250 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29250(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta29251){return (new cljs.core.async.t29250(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta29251));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t29250(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10343__auto___29359 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_29317){var state_val_29318 = (state_29317[1]);if((state_val_29318 === 1))
{var inst_29256 = (state_29317[7]);var inst_29256__$1 = calc_state.call(null);var inst_29257 = cljs.core.seq_QMARK_.call(null,inst_29256__$1);var state_29317__$1 = (function (){var statearr_29319 = state_29317;(statearr_29319[7] = inst_29256__$1);
return statearr_29319;
})();if(inst_29257)
{var statearr_29320_29360 = state_29317__$1;(statearr_29320_29360[1] = 2);
} else
{var statearr_29321_29361 = state_29317__$1;(statearr_29321_29361[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 2))
{var inst_29256 = (state_29317[7]);var inst_29259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29256);var state_29317__$1 = state_29317;var statearr_29322_29362 = state_29317__$1;(statearr_29322_29362[2] = inst_29259);
(statearr_29322_29362[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 3))
{var inst_29256 = (state_29317[7]);var state_29317__$1 = state_29317;var statearr_29323_29363 = state_29317__$1;(statearr_29323_29363[2] = inst_29256);
(statearr_29323_29363[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 4))
{var inst_29256 = (state_29317[7]);var inst_29262 = (state_29317[2]);var inst_29263 = cljs.core.get.call(null,inst_29262,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_29264 = cljs.core.get.call(null,inst_29262,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_29265 = cljs.core.get.call(null,inst_29262,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_29266 = inst_29256;var state_29317__$1 = (function (){var statearr_29324 = state_29317;(statearr_29324[8] = inst_29265);
(statearr_29324[9] = inst_29264);
(statearr_29324[10] = inst_29266);
(statearr_29324[11] = inst_29263);
return statearr_29324;
})();var statearr_29325_29364 = state_29317__$1;(statearr_29325_29364[2] = null);
(statearr_29325_29364[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 5))
{var inst_29266 = (state_29317[10]);var inst_29269 = cljs.core.seq_QMARK_.call(null,inst_29266);var state_29317__$1 = state_29317;if(inst_29269)
{var statearr_29326_29365 = state_29317__$1;(statearr_29326_29365[1] = 7);
} else
{var statearr_29327_29366 = state_29317__$1;(statearr_29327_29366[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 6))
{var inst_29315 = (state_29317[2]);var state_29317__$1 = state_29317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29317__$1,inst_29315);
} else
{if((state_val_29318 === 7))
{var inst_29266 = (state_29317[10]);var inst_29271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29266);var state_29317__$1 = state_29317;var statearr_29328_29367 = state_29317__$1;(statearr_29328_29367[2] = inst_29271);
(statearr_29328_29367[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 8))
{var inst_29266 = (state_29317[10]);var state_29317__$1 = state_29317;var statearr_29329_29368 = state_29317__$1;(statearr_29329_29368[2] = inst_29266);
(statearr_29329_29368[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 9))
{var inst_29274 = (state_29317[12]);var inst_29274__$1 = (state_29317[2]);var inst_29275 = cljs.core.get.call(null,inst_29274__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_29276 = cljs.core.get.call(null,inst_29274__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_29277 = cljs.core.get.call(null,inst_29274__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_29317__$1 = (function (){var statearr_29330 = state_29317;(statearr_29330[12] = inst_29274__$1);
(statearr_29330[13] = inst_29276);
(statearr_29330[14] = inst_29277);
return statearr_29330;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29317__$1,10,inst_29275);
} else
{if((state_val_29318 === 10))
{var inst_29282 = (state_29317[15]);var inst_29281 = (state_29317[16]);var inst_29280 = (state_29317[2]);var inst_29281__$1 = cljs.core.nth.call(null,inst_29280,0,null);var inst_29282__$1 = cljs.core.nth.call(null,inst_29280,1,null);var inst_29283 = (inst_29281__$1 == null);var inst_29284 = cljs.core._EQ_.call(null,inst_29282__$1,change);var inst_29285 = (inst_29283) || (inst_29284);var state_29317__$1 = (function (){var statearr_29331 = state_29317;(statearr_29331[15] = inst_29282__$1);
(statearr_29331[16] = inst_29281__$1);
return statearr_29331;
})();if(cljs.core.truth_(inst_29285))
{var statearr_29332_29369 = state_29317__$1;(statearr_29332_29369[1] = 11);
} else
{var statearr_29333_29370 = state_29317__$1;(statearr_29333_29370[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 11))
{var inst_29281 = (state_29317[16]);var inst_29287 = (inst_29281 == null);var state_29317__$1 = state_29317;if(cljs.core.truth_(inst_29287))
{var statearr_29334_29371 = state_29317__$1;(statearr_29334_29371[1] = 14);
} else
{var statearr_29335_29372 = state_29317__$1;(statearr_29335_29372[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 12))
{var inst_29282 = (state_29317[15]);var inst_29277 = (state_29317[14]);var inst_29296 = (state_29317[17]);var inst_29296__$1 = inst_29277.call(null,inst_29282);var state_29317__$1 = (function (){var statearr_29336 = state_29317;(statearr_29336[17] = inst_29296__$1);
return statearr_29336;
})();if(cljs.core.truth_(inst_29296__$1))
{var statearr_29337_29373 = state_29317__$1;(statearr_29337_29373[1] = 17);
} else
{var statearr_29338_29374 = state_29317__$1;(statearr_29338_29374[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 13))
{var inst_29313 = (state_29317[2]);var state_29317__$1 = state_29317;var statearr_29339_29375 = state_29317__$1;(statearr_29339_29375[2] = inst_29313);
(statearr_29339_29375[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 14))
{var inst_29282 = (state_29317[15]);var inst_29289 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29282);var state_29317__$1 = state_29317;var statearr_29340_29376 = state_29317__$1;(statearr_29340_29376[2] = inst_29289);
(statearr_29340_29376[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 15))
{var state_29317__$1 = state_29317;var statearr_29341_29377 = state_29317__$1;(statearr_29341_29377[2] = null);
(statearr_29341_29377[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 16))
{var inst_29292 = (state_29317[2]);var inst_29293 = calc_state.call(null);var inst_29266 = inst_29293;var state_29317__$1 = (function (){var statearr_29342 = state_29317;(statearr_29342[10] = inst_29266);
(statearr_29342[18] = inst_29292);
return statearr_29342;
})();var statearr_29343_29378 = state_29317__$1;(statearr_29343_29378[2] = null);
(statearr_29343_29378[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 17))
{var inst_29296 = (state_29317[17]);var state_29317__$1 = state_29317;var statearr_29344_29379 = state_29317__$1;(statearr_29344_29379[2] = inst_29296);
(statearr_29344_29379[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 18))
{var inst_29282 = (state_29317[15]);var inst_29276 = (state_29317[13]);var inst_29277 = (state_29317[14]);var inst_29299 = cljs.core.empty_QMARK_.call(null,inst_29277);var inst_29300 = inst_29276.call(null,inst_29282);var inst_29301 = cljs.core.not.call(null,inst_29300);var inst_29302 = (inst_29299) && (inst_29301);var state_29317__$1 = state_29317;var statearr_29345_29380 = state_29317__$1;(statearr_29345_29380[2] = inst_29302);
(statearr_29345_29380[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 19))
{var inst_29304 = (state_29317[2]);var state_29317__$1 = state_29317;if(cljs.core.truth_(inst_29304))
{var statearr_29346_29381 = state_29317__$1;(statearr_29346_29381[1] = 20);
} else
{var statearr_29347_29382 = state_29317__$1;(statearr_29347_29382[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 20))
{var inst_29281 = (state_29317[16]);var state_29317__$1 = state_29317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29317__$1,23,out,inst_29281);
} else
{if((state_val_29318 === 21))
{var state_29317__$1 = state_29317;var statearr_29348_29383 = state_29317__$1;(statearr_29348_29383[2] = null);
(statearr_29348_29383[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 22))
{var inst_29274 = (state_29317[12]);var inst_29310 = (state_29317[2]);var inst_29266 = inst_29274;var state_29317__$1 = (function (){var statearr_29349 = state_29317;(statearr_29349[10] = inst_29266);
(statearr_29349[19] = inst_29310);
return statearr_29349;
})();var statearr_29350_29384 = state_29317__$1;(statearr_29350_29384[2] = null);
(statearr_29350_29384[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29318 === 23))
{var inst_29307 = (state_29317[2]);var state_29317__$1 = state_29317;var statearr_29351_29385 = state_29317__$1;(statearr_29351_29385[2] = inst_29307);
(statearr_29351_29385[1] = 22);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_29355 = (new Array(20));(statearr_29355[0] = state_machine__10274__auto__);
(statearr_29355[1] = 1);
return statearr_29355;
});
var state_machine__10274__auto____1 = (function (state_29317){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_29317);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e29356){if((e29356 instanceof Object))
{var ex__10277__auto__ = e29356;var statearr_29357_29386 = state_29317;(statearr_29357_29386[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29387 = state_29317;
state_29317 = G__29387;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_29317){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_29317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_29358 = f__10344__auto__.call(null);(statearr_29358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___29359);
return statearr_29358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
cljs.core.async.Pub = (function (){var obj29389 = {};return obj29389;
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
return (function (p1__29390_SHARP_){if(cljs.core.truth_(p1__29390_SHARP_.call(null,topic)))
{return p1__29390_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29390_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29515 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29515 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29516){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29516 = meta29516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29515.cljs$lang$type = true;
cljs.core.async.t29515.cljs$lang$ctorStr = "cljs.core.async/t29515";
cljs.core.async.t29515.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t29515");
});})(mults,ensure_mult))
;
cljs.core.async.t29515.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29515.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29515.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29515.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29515.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29515.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29517){var self__ = this;
var _29517__$1 = this;return self__.meta29516;
});})(mults,ensure_mult))
;
cljs.core.async.t29515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29517,meta29516__$1){var self__ = this;
var _29517__$1 = this;return (new cljs.core.async.t29515(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29516__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29515 = ((function (mults,ensure_mult){
return (function __GT_t29515(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29516){return (new cljs.core.async.t29515(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29516));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29515(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10343__auto___29639 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_29591){var state_val_29592 = (state_29591[1]);if((state_val_29592 === 1))
{var state_29591__$1 = state_29591;var statearr_29593_29640 = state_29591__$1;(statearr_29593_29640[2] = null);
(statearr_29593_29640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 2))
{var state_29591__$1 = state_29591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29591__$1,4,ch);
} else
{if((state_val_29592 === 3))
{var inst_29589 = (state_29591[2]);var state_29591__$1 = state_29591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29591__$1,inst_29589);
} else
{if((state_val_29592 === 4))
{var inst_29520 = (state_29591[7]);var inst_29520__$1 = (state_29591[2]);var inst_29521 = (inst_29520__$1 == null);var state_29591__$1 = (function (){var statearr_29594 = state_29591;(statearr_29594[7] = inst_29520__$1);
return statearr_29594;
})();if(cljs.core.truth_(inst_29521))
{var statearr_29595_29641 = state_29591__$1;(statearr_29595_29641[1] = 5);
} else
{var statearr_29596_29642 = state_29591__$1;(statearr_29596_29642[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 5))
{var inst_29527 = cljs.core.deref.call(null,mults);var inst_29528 = cljs.core.vals.call(null,inst_29527);var inst_29529 = cljs.core.seq.call(null,inst_29528);var inst_29530 = inst_29529;var inst_29531 = null;var inst_29532 = 0;var inst_29533 = 0;var state_29591__$1 = (function (){var statearr_29597 = state_29591;(statearr_29597[8] = inst_29532);
(statearr_29597[9] = inst_29533);
(statearr_29597[10] = inst_29531);
(statearr_29597[11] = inst_29530);
return statearr_29597;
})();var statearr_29598_29643 = state_29591__$1;(statearr_29598_29643[2] = null);
(statearr_29598_29643[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 6))
{var inst_29568 = (state_29591[12]);var inst_29570 = (state_29591[13]);var inst_29520 = (state_29591[7]);var inst_29568__$1 = topic_fn.call(null,inst_29520);var inst_29569 = cljs.core.deref.call(null,mults);var inst_29570__$1 = cljs.core.get.call(null,inst_29569,inst_29568__$1);var state_29591__$1 = (function (){var statearr_29599 = state_29591;(statearr_29599[12] = inst_29568__$1);
(statearr_29599[13] = inst_29570__$1);
return statearr_29599;
})();if(cljs.core.truth_(inst_29570__$1))
{var statearr_29600_29644 = state_29591__$1;(statearr_29600_29644[1] = 19);
} else
{var statearr_29601_29645 = state_29591__$1;(statearr_29601_29645[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 7))
{var inst_29587 = (state_29591[2]);var state_29591__$1 = state_29591;var statearr_29602_29646 = state_29591__$1;(statearr_29602_29646[2] = inst_29587);
(statearr_29602_29646[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 8))
{var inst_29532 = (state_29591[8]);var inst_29533 = (state_29591[9]);var inst_29535 = (inst_29533 < inst_29532);var inst_29536 = inst_29535;var state_29591__$1 = state_29591;if(cljs.core.truth_(inst_29536))
{var statearr_29606_29647 = state_29591__$1;(statearr_29606_29647[1] = 10);
} else
{var statearr_29607_29648 = state_29591__$1;(statearr_29607_29648[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 9))
{var inst_29566 = (state_29591[2]);var state_29591__$1 = state_29591;var statearr_29608_29649 = state_29591__$1;(statearr_29608_29649[2] = inst_29566);
(statearr_29608_29649[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 10))
{var inst_29532 = (state_29591[8]);var inst_29533 = (state_29591[9]);var inst_29531 = (state_29591[10]);var inst_29530 = (state_29591[11]);var inst_29538 = cljs.core._nth.call(null,inst_29531,inst_29533);var inst_29539 = cljs.core.async.muxch_STAR_.call(null,inst_29538);var inst_29540 = cljs.core.async.close_BANG_.call(null,inst_29539);var inst_29541 = (inst_29533 + 1);var tmp29603 = inst_29532;var tmp29604 = inst_29531;var tmp29605 = inst_29530;var inst_29530__$1 = tmp29605;var inst_29531__$1 = tmp29604;var inst_29532__$1 = tmp29603;var inst_29533__$1 = inst_29541;var state_29591__$1 = (function (){var statearr_29609 = state_29591;(statearr_29609[8] = inst_29532__$1);
(statearr_29609[9] = inst_29533__$1);
(statearr_29609[10] = inst_29531__$1);
(statearr_29609[11] = inst_29530__$1);
(statearr_29609[14] = inst_29540);
return statearr_29609;
})();var statearr_29610_29650 = state_29591__$1;(statearr_29610_29650[2] = null);
(statearr_29610_29650[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 11))
{var inst_29530 = (state_29591[11]);var inst_29544 = (state_29591[15]);var inst_29544__$1 = cljs.core.seq.call(null,inst_29530);var state_29591__$1 = (function (){var statearr_29611 = state_29591;(statearr_29611[15] = inst_29544__$1);
return statearr_29611;
})();if(inst_29544__$1)
{var statearr_29612_29651 = state_29591__$1;(statearr_29612_29651[1] = 13);
} else
{var statearr_29613_29652 = state_29591__$1;(statearr_29613_29652[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 12))
{var inst_29564 = (state_29591[2]);var state_29591__$1 = state_29591;var statearr_29614_29653 = state_29591__$1;(statearr_29614_29653[2] = inst_29564);
(statearr_29614_29653[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 13))
{var inst_29544 = (state_29591[15]);var inst_29546 = cljs.core.chunked_seq_QMARK_.call(null,inst_29544);var state_29591__$1 = state_29591;if(inst_29546)
{var statearr_29615_29654 = state_29591__$1;(statearr_29615_29654[1] = 16);
} else
{var statearr_29616_29655 = state_29591__$1;(statearr_29616_29655[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 14))
{var state_29591__$1 = state_29591;var statearr_29617_29656 = state_29591__$1;(statearr_29617_29656[2] = null);
(statearr_29617_29656[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 15))
{var inst_29562 = (state_29591[2]);var state_29591__$1 = state_29591;var statearr_29618_29657 = state_29591__$1;(statearr_29618_29657[2] = inst_29562);
(statearr_29618_29657[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 16))
{var inst_29544 = (state_29591[15]);var inst_29548 = cljs.core.chunk_first.call(null,inst_29544);var inst_29549 = cljs.core.chunk_rest.call(null,inst_29544);var inst_29550 = cljs.core.count.call(null,inst_29548);var inst_29530 = inst_29549;var inst_29531 = inst_29548;var inst_29532 = inst_29550;var inst_29533 = 0;var state_29591__$1 = (function (){var statearr_29619 = state_29591;(statearr_29619[8] = inst_29532);
(statearr_29619[9] = inst_29533);
(statearr_29619[10] = inst_29531);
(statearr_29619[11] = inst_29530);
return statearr_29619;
})();var statearr_29620_29658 = state_29591__$1;(statearr_29620_29658[2] = null);
(statearr_29620_29658[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 17))
{var inst_29544 = (state_29591[15]);var inst_29553 = cljs.core.first.call(null,inst_29544);var inst_29554 = cljs.core.async.muxch_STAR_.call(null,inst_29553);var inst_29555 = cljs.core.async.close_BANG_.call(null,inst_29554);var inst_29556 = cljs.core.next.call(null,inst_29544);var inst_29530 = inst_29556;var inst_29531 = null;var inst_29532 = 0;var inst_29533 = 0;var state_29591__$1 = (function (){var statearr_29621 = state_29591;(statearr_29621[8] = inst_29532);
(statearr_29621[9] = inst_29533);
(statearr_29621[10] = inst_29531);
(statearr_29621[11] = inst_29530);
(statearr_29621[16] = inst_29555);
return statearr_29621;
})();var statearr_29622_29659 = state_29591__$1;(statearr_29622_29659[2] = null);
(statearr_29622_29659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 18))
{var inst_29559 = (state_29591[2]);var state_29591__$1 = state_29591;var statearr_29623_29660 = state_29591__$1;(statearr_29623_29660[2] = inst_29559);
(statearr_29623_29660[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 19))
{var state_29591__$1 = state_29591;var statearr_29624_29661 = state_29591__$1;(statearr_29624_29661[2] = null);
(statearr_29624_29661[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 20))
{var state_29591__$1 = state_29591;var statearr_29625_29662 = state_29591__$1;(statearr_29625_29662[2] = null);
(statearr_29625_29662[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 21))
{var inst_29584 = (state_29591[2]);var state_29591__$1 = (function (){var statearr_29626 = state_29591;(statearr_29626[17] = inst_29584);
return statearr_29626;
})();var statearr_29627_29663 = state_29591__$1;(statearr_29627_29663[2] = null);
(statearr_29627_29663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 22))
{var inst_29581 = (state_29591[2]);var state_29591__$1 = state_29591;var statearr_29628_29664 = state_29591__$1;(statearr_29628_29664[2] = inst_29581);
(statearr_29628_29664[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 23))
{var inst_29568 = (state_29591[12]);var inst_29572 = (state_29591[2]);var inst_29573 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29568);var state_29591__$1 = (function (){var statearr_29629 = state_29591;(statearr_29629[18] = inst_29572);
return statearr_29629;
})();var statearr_29630_29665 = state_29591__$1;(statearr_29630_29665[2] = inst_29573);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29591__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29592 === 24))
{var inst_29570 = (state_29591[13]);var inst_29520 = (state_29591[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29591,23,Object,null,22);var inst_29577 = cljs.core.async.muxch_STAR_.call(null,inst_29570);var state_29591__$1 = state_29591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29591__$1,25,inst_29577,inst_29520);
} else
{if((state_val_29592 === 25))
{var inst_29579 = (state_29591[2]);var state_29591__$1 = state_29591;var statearr_29631_29666 = state_29591__$1;(statearr_29631_29666[2] = inst_29579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29591__$1);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_29635 = (new Array(19));(statearr_29635[0] = state_machine__10274__auto__);
(statearr_29635[1] = 1);
return statearr_29635;
});
var state_machine__10274__auto____1 = (function (state_29591){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_29591);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e29636){if((e29636 instanceof Object))
{var ex__10277__auto__ = e29636;var statearr_29637_29667 = state_29591;(statearr_29637_29667[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29668 = state_29591;
state_29591 = G__29668;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_29591){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_29591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_29638 = f__10344__auto__.call(null);(statearr_29638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___29639);
return statearr_29638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
,cljs.core.range.call(null,cnt));var c__10343__auto___29805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_29775){var state_val_29776 = (state_29775[1]);if((state_val_29776 === 1))
{var state_29775__$1 = state_29775;var statearr_29777_29806 = state_29775__$1;(statearr_29777_29806[2] = null);
(statearr_29777_29806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 2))
{var inst_29738 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29739 = 0;var state_29775__$1 = (function (){var statearr_29778 = state_29775;(statearr_29778[7] = inst_29738);
(statearr_29778[8] = inst_29739);
return statearr_29778;
})();var statearr_29779_29807 = state_29775__$1;(statearr_29779_29807[2] = null);
(statearr_29779_29807[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 3))
{var inst_29773 = (state_29775[2]);var state_29775__$1 = state_29775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29775__$1,inst_29773);
} else
{if((state_val_29776 === 4))
{var inst_29739 = (state_29775[8]);var inst_29741 = (inst_29739 < cnt);var state_29775__$1 = state_29775;if(cljs.core.truth_(inst_29741))
{var statearr_29780_29808 = state_29775__$1;(statearr_29780_29808[1] = 6);
} else
{var statearr_29781_29809 = state_29775__$1;(statearr_29781_29809[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 5))
{var inst_29759 = (state_29775[2]);var state_29775__$1 = (function (){var statearr_29782 = state_29775;(statearr_29782[9] = inst_29759);
return statearr_29782;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29775__$1,12,dchan);
} else
{if((state_val_29776 === 6))
{var state_29775__$1 = state_29775;var statearr_29783_29810 = state_29775__$1;(statearr_29783_29810[2] = null);
(statearr_29783_29810[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 7))
{var state_29775__$1 = state_29775;var statearr_29784_29811 = state_29775__$1;(statearr_29784_29811[2] = null);
(statearr_29784_29811[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 8))
{var inst_29757 = (state_29775[2]);var state_29775__$1 = state_29775;var statearr_29785_29812 = state_29775__$1;(statearr_29785_29812[2] = inst_29757);
(statearr_29785_29812[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 9))
{var inst_29739 = (state_29775[8]);var inst_29752 = (state_29775[2]);var inst_29753 = (inst_29739 + 1);var inst_29739__$1 = inst_29753;var state_29775__$1 = (function (){var statearr_29786 = state_29775;(statearr_29786[8] = inst_29739__$1);
(statearr_29786[10] = inst_29752);
return statearr_29786;
})();var statearr_29787_29813 = state_29775__$1;(statearr_29787_29813[2] = null);
(statearr_29787_29813[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 10))
{var inst_29743 = (state_29775[2]);var inst_29744 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29775__$1 = (function (){var statearr_29788 = state_29775;(statearr_29788[11] = inst_29743);
return statearr_29788;
})();var statearr_29789_29814 = state_29775__$1;(statearr_29789_29814[2] = inst_29744);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29775__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 11))
{var inst_29739 = (state_29775[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29775,10,Object,null,9);var inst_29748 = chs__$1.call(null,inst_29739);var inst_29749 = done.call(null,inst_29739);var inst_29750 = cljs.core.async.take_BANG_.call(null,inst_29748,inst_29749);var state_29775__$1 = state_29775;var statearr_29790_29815 = state_29775__$1;(statearr_29790_29815[2] = inst_29750);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29775__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 12))
{var inst_29761 = (state_29775[12]);var inst_29761__$1 = (state_29775[2]);var inst_29762 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29761__$1);var state_29775__$1 = (function (){var statearr_29791 = state_29775;(statearr_29791[12] = inst_29761__$1);
return statearr_29791;
})();if(cljs.core.truth_(inst_29762))
{var statearr_29792_29816 = state_29775__$1;(statearr_29792_29816[1] = 13);
} else
{var statearr_29793_29817 = state_29775__$1;(statearr_29793_29817[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 13))
{var inst_29764 = cljs.core.async.close_BANG_.call(null,out);var state_29775__$1 = state_29775;var statearr_29794_29818 = state_29775__$1;(statearr_29794_29818[2] = inst_29764);
(statearr_29794_29818[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 14))
{var inst_29761 = (state_29775[12]);var inst_29766 = cljs.core.apply.call(null,f,inst_29761);var state_29775__$1 = state_29775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29775__$1,16,out,inst_29766);
} else
{if((state_val_29776 === 15))
{var inst_29771 = (state_29775[2]);var state_29775__$1 = state_29775;var statearr_29795_29819 = state_29775__$1;(statearr_29795_29819[2] = inst_29771);
(statearr_29795_29819[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29776 === 16))
{var inst_29768 = (state_29775[2]);var state_29775__$1 = (function (){var statearr_29796 = state_29775;(statearr_29796[13] = inst_29768);
return statearr_29796;
})();var statearr_29797_29820 = state_29775__$1;(statearr_29797_29820[2] = null);
(statearr_29797_29820[1] = 2);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_29801 = (new Array(14));(statearr_29801[0] = state_machine__10274__auto__);
(statearr_29801[1] = 1);
return statearr_29801;
});
var state_machine__10274__auto____1 = (function (state_29775){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_29775);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e29802){if((e29802 instanceof Object))
{var ex__10277__auto__ = e29802;var statearr_29803_29821 = state_29775;(statearr_29803_29821[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29775);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29822 = state_29775;
state_29775 = G__29822;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_29775){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_29775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_29804 = f__10344__auto__.call(null);(statearr_29804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___29805);
return statearr_29804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10343__auto___29930 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_29906){var state_val_29907 = (state_29906[1]);if((state_val_29907 === 1))
{var inst_29877 = cljs.core.vec.call(null,chs);var inst_29878 = inst_29877;var state_29906__$1 = (function (){var statearr_29908 = state_29906;(statearr_29908[7] = inst_29878);
return statearr_29908;
})();var statearr_29909_29931 = state_29906__$1;(statearr_29909_29931[2] = null);
(statearr_29909_29931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29907 === 2))
{var inst_29878 = (state_29906[7]);var inst_29880 = cljs.core.count.call(null,inst_29878);var inst_29881 = (inst_29880 > 0);var state_29906__$1 = state_29906;if(cljs.core.truth_(inst_29881))
{var statearr_29910_29932 = state_29906__$1;(statearr_29910_29932[1] = 4);
} else
{var statearr_29911_29933 = state_29906__$1;(statearr_29911_29933[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29907 === 3))
{var inst_29904 = (state_29906[2]);var state_29906__$1 = state_29906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29906__$1,inst_29904);
} else
{if((state_val_29907 === 4))
{var inst_29878 = (state_29906[7]);var state_29906__$1 = state_29906;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29906__$1,7,inst_29878);
} else
{if((state_val_29907 === 5))
{var inst_29900 = cljs.core.async.close_BANG_.call(null,out);var state_29906__$1 = state_29906;var statearr_29912_29934 = state_29906__$1;(statearr_29912_29934[2] = inst_29900);
(statearr_29912_29934[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29907 === 6))
{var inst_29902 = (state_29906[2]);var state_29906__$1 = state_29906;var statearr_29913_29935 = state_29906__$1;(statearr_29913_29935[2] = inst_29902);
(statearr_29913_29935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29907 === 7))
{var inst_29886 = (state_29906[8]);var inst_29885 = (state_29906[9]);var inst_29885__$1 = (state_29906[2]);var inst_29886__$1 = cljs.core.nth.call(null,inst_29885__$1,0,null);var inst_29887 = cljs.core.nth.call(null,inst_29885__$1,1,null);var inst_29888 = (inst_29886__$1 == null);var state_29906__$1 = (function (){var statearr_29914 = state_29906;(statearr_29914[8] = inst_29886__$1);
(statearr_29914[10] = inst_29887);
(statearr_29914[9] = inst_29885__$1);
return statearr_29914;
})();if(cljs.core.truth_(inst_29888))
{var statearr_29915_29936 = state_29906__$1;(statearr_29915_29936[1] = 8);
} else
{var statearr_29916_29937 = state_29906__$1;(statearr_29916_29937[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29907 === 8))
{var inst_29886 = (state_29906[8]);var inst_29887 = (state_29906[10]);var inst_29885 = (state_29906[9]);var inst_29878 = (state_29906[7]);var inst_29890 = (function (){var c = inst_29887;var v = inst_29886;var vec__29883 = inst_29885;var cs = inst_29878;return ((function (c,v,vec__29883,cs,inst_29886,inst_29887,inst_29885,inst_29878,state_val_29907){
return (function (p1__29823_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__29823_SHARP_);
});
;})(c,v,vec__29883,cs,inst_29886,inst_29887,inst_29885,inst_29878,state_val_29907))
})();var inst_29891 = cljs.core.filterv.call(null,inst_29890,inst_29878);var inst_29878__$1 = inst_29891;var state_29906__$1 = (function (){var statearr_29917 = state_29906;(statearr_29917[7] = inst_29878__$1);
return statearr_29917;
})();var statearr_29918_29938 = state_29906__$1;(statearr_29918_29938[2] = null);
(statearr_29918_29938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29907 === 9))
{var inst_29886 = (state_29906[8]);var state_29906__$1 = state_29906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29906__$1,11,out,inst_29886);
} else
{if((state_val_29907 === 10))
{var inst_29898 = (state_29906[2]);var state_29906__$1 = state_29906;var statearr_29920_29939 = state_29906__$1;(statearr_29920_29939[2] = inst_29898);
(statearr_29920_29939[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29907 === 11))
{var inst_29878 = (state_29906[7]);var inst_29895 = (state_29906[2]);var tmp29919 = inst_29878;var inst_29878__$1 = tmp29919;var state_29906__$1 = (function (){var statearr_29921 = state_29906;(statearr_29921[11] = inst_29895);
(statearr_29921[7] = inst_29878__$1);
return statearr_29921;
})();var statearr_29922_29940 = state_29906__$1;(statearr_29922_29940[2] = null);
(statearr_29922_29940[1] = 2);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_29926 = (new Array(12));(statearr_29926[0] = state_machine__10274__auto__);
(statearr_29926[1] = 1);
return statearr_29926;
});
var state_machine__10274__auto____1 = (function (state_29906){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_29906);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e29927){if((e29927 instanceof Object))
{var ex__10277__auto__ = e29927;var statearr_29928_29941 = state_29906;(statearr_29928_29941[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29906);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29942 = state_29906;
state_29906 = G__29942;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_29906){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_29906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_29929 = f__10344__auto__.call(null);(statearr_29929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___29930);
return statearr_29929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10343__auto___30035 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_30012){var state_val_30013 = (state_30012[1]);if((state_val_30013 === 1))
{var inst_29989 = 0;var state_30012__$1 = (function (){var statearr_30014 = state_30012;(statearr_30014[7] = inst_29989);
return statearr_30014;
})();var statearr_30015_30036 = state_30012__$1;(statearr_30015_30036[2] = null);
(statearr_30015_30036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30013 === 2))
{var inst_29989 = (state_30012[7]);var inst_29991 = (inst_29989 < n);var state_30012__$1 = state_30012;if(cljs.core.truth_(inst_29991))
{var statearr_30016_30037 = state_30012__$1;(statearr_30016_30037[1] = 4);
} else
{var statearr_30017_30038 = state_30012__$1;(statearr_30017_30038[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30013 === 3))
{var inst_30009 = (state_30012[2]);var inst_30010 = cljs.core.async.close_BANG_.call(null,out);var state_30012__$1 = (function (){var statearr_30018 = state_30012;(statearr_30018[8] = inst_30009);
return statearr_30018;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30012__$1,inst_30010);
} else
{if((state_val_30013 === 4))
{var state_30012__$1 = state_30012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30012__$1,7,ch);
} else
{if((state_val_30013 === 5))
{var state_30012__$1 = state_30012;var statearr_30019_30039 = state_30012__$1;(statearr_30019_30039[2] = null);
(statearr_30019_30039[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30013 === 6))
{var inst_30007 = (state_30012[2]);var state_30012__$1 = state_30012;var statearr_30020_30040 = state_30012__$1;(statearr_30020_30040[2] = inst_30007);
(statearr_30020_30040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30013 === 7))
{var inst_29994 = (state_30012[9]);var inst_29994__$1 = (state_30012[2]);var inst_29995 = (inst_29994__$1 == null);var inst_29996 = cljs.core.not.call(null,inst_29995);var state_30012__$1 = (function (){var statearr_30021 = state_30012;(statearr_30021[9] = inst_29994__$1);
return statearr_30021;
})();if(inst_29996)
{var statearr_30022_30041 = state_30012__$1;(statearr_30022_30041[1] = 8);
} else
{var statearr_30023_30042 = state_30012__$1;(statearr_30023_30042[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30013 === 8))
{var inst_29994 = (state_30012[9]);var state_30012__$1 = state_30012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30012__$1,11,out,inst_29994);
} else
{if((state_val_30013 === 9))
{var state_30012__$1 = state_30012;var statearr_30024_30043 = state_30012__$1;(statearr_30024_30043[2] = null);
(statearr_30024_30043[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30013 === 10))
{var inst_30004 = (state_30012[2]);var state_30012__$1 = state_30012;var statearr_30025_30044 = state_30012__$1;(statearr_30025_30044[2] = inst_30004);
(statearr_30025_30044[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30013 === 11))
{var inst_29989 = (state_30012[7]);var inst_29999 = (state_30012[2]);var inst_30000 = (inst_29989 + 1);var inst_29989__$1 = inst_30000;var state_30012__$1 = (function (){var statearr_30026 = state_30012;(statearr_30026[7] = inst_29989__$1);
(statearr_30026[10] = inst_29999);
return statearr_30026;
})();var statearr_30027_30045 = state_30012__$1;(statearr_30027_30045[2] = null);
(statearr_30027_30045[1] = 2);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_30031 = (new Array(11));(statearr_30031[0] = state_machine__10274__auto__);
(statearr_30031[1] = 1);
return statearr_30031;
});
var state_machine__10274__auto____1 = (function (state_30012){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_30012);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e30032){if((e30032 instanceof Object))
{var ex__10277__auto__ = e30032;var statearr_30033_30046 = state_30012;(statearr_30033_30046[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30047 = state_30012;
state_30012 = G__30047;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_30012){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_30012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_30034 = f__10344__auto__.call(null);(statearr_30034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___30035);
return statearr_30034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10343__auto___30144 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_30119){var state_val_30120 = (state_30119[1]);if((state_val_30120 === 1))
{var inst_30096 = null;var state_30119__$1 = (function (){var statearr_30121 = state_30119;(statearr_30121[7] = inst_30096);
return statearr_30121;
})();var statearr_30122_30145 = state_30119__$1;(statearr_30122_30145[2] = null);
(statearr_30122_30145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30120 === 2))
{var state_30119__$1 = state_30119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30119__$1,4,ch);
} else
{if((state_val_30120 === 3))
{var inst_30116 = (state_30119[2]);var inst_30117 = cljs.core.async.close_BANG_.call(null,out);var state_30119__$1 = (function (){var statearr_30123 = state_30119;(statearr_30123[8] = inst_30116);
return statearr_30123;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30119__$1,inst_30117);
} else
{if((state_val_30120 === 4))
{var inst_30099 = (state_30119[9]);var inst_30099__$1 = (state_30119[2]);var inst_30100 = (inst_30099__$1 == null);var inst_30101 = cljs.core.not.call(null,inst_30100);var state_30119__$1 = (function (){var statearr_30124 = state_30119;(statearr_30124[9] = inst_30099__$1);
return statearr_30124;
})();if(inst_30101)
{var statearr_30125_30146 = state_30119__$1;(statearr_30125_30146[1] = 5);
} else
{var statearr_30126_30147 = state_30119__$1;(statearr_30126_30147[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30120 === 5))
{var inst_30099 = (state_30119[9]);var inst_30096 = (state_30119[7]);var inst_30103 = cljs.core._EQ_.call(null,inst_30099,inst_30096);var state_30119__$1 = state_30119;if(inst_30103)
{var statearr_30127_30148 = state_30119__$1;(statearr_30127_30148[1] = 8);
} else
{var statearr_30128_30149 = state_30119__$1;(statearr_30128_30149[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30120 === 6))
{var state_30119__$1 = state_30119;var statearr_30130_30150 = state_30119__$1;(statearr_30130_30150[2] = null);
(statearr_30130_30150[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30120 === 7))
{var inst_30114 = (state_30119[2]);var state_30119__$1 = state_30119;var statearr_30131_30151 = state_30119__$1;(statearr_30131_30151[2] = inst_30114);
(statearr_30131_30151[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30120 === 8))
{var inst_30096 = (state_30119[7]);var tmp30129 = inst_30096;var inst_30096__$1 = tmp30129;var state_30119__$1 = (function (){var statearr_30132 = state_30119;(statearr_30132[7] = inst_30096__$1);
return statearr_30132;
})();var statearr_30133_30152 = state_30119__$1;(statearr_30133_30152[2] = null);
(statearr_30133_30152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30120 === 9))
{var inst_30099 = (state_30119[9]);var state_30119__$1 = state_30119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30119__$1,11,out,inst_30099);
} else
{if((state_val_30120 === 10))
{var inst_30111 = (state_30119[2]);var state_30119__$1 = state_30119;var statearr_30134_30153 = state_30119__$1;(statearr_30134_30153[2] = inst_30111);
(statearr_30134_30153[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30120 === 11))
{var inst_30099 = (state_30119[9]);var inst_30108 = (state_30119[2]);var inst_30096 = inst_30099;var state_30119__$1 = (function (){var statearr_30135 = state_30119;(statearr_30135[7] = inst_30096);
(statearr_30135[10] = inst_30108);
return statearr_30135;
})();var statearr_30136_30154 = state_30119__$1;(statearr_30136_30154[2] = null);
(statearr_30136_30154[1] = 2);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_30140 = (new Array(11));(statearr_30140[0] = state_machine__10274__auto__);
(statearr_30140[1] = 1);
return statearr_30140;
});
var state_machine__10274__auto____1 = (function (state_30119){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_30119);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e30141){if((e30141 instanceof Object))
{var ex__10277__auto__ = e30141;var statearr_30142_30155 = state_30119;(statearr_30142_30155[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30156 = state_30119;
state_30119 = G__30156;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_30119){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_30119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_30143 = f__10344__auto__.call(null);(statearr_30143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___30144);
return statearr_30143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10343__auto___30291 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_30261){var state_val_30262 = (state_30261[1]);if((state_val_30262 === 1))
{var inst_30224 = (new Array(n));var inst_30225 = inst_30224;var inst_30226 = 0;var state_30261__$1 = (function (){var statearr_30263 = state_30261;(statearr_30263[7] = inst_30226);
(statearr_30263[8] = inst_30225);
return statearr_30263;
})();var statearr_30264_30292 = state_30261__$1;(statearr_30264_30292[2] = null);
(statearr_30264_30292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30262 === 2))
{var state_30261__$1 = state_30261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30261__$1,4,ch);
} else
{if((state_val_30262 === 3))
{var inst_30259 = (state_30261[2]);var state_30261__$1 = state_30261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30261__$1,inst_30259);
} else
{if((state_val_30262 === 4))
{var inst_30229 = (state_30261[9]);var inst_30229__$1 = (state_30261[2]);var inst_30230 = (inst_30229__$1 == null);var inst_30231 = cljs.core.not.call(null,inst_30230);var state_30261__$1 = (function (){var statearr_30265 = state_30261;(statearr_30265[9] = inst_30229__$1);
return statearr_30265;
})();if(inst_30231)
{var statearr_30266_30293 = state_30261__$1;(statearr_30266_30293[1] = 5);
} else
{var statearr_30267_30294 = state_30261__$1;(statearr_30267_30294[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30262 === 5))
{var inst_30226 = (state_30261[7]);var inst_30229 = (state_30261[9]);var inst_30234 = (state_30261[10]);var inst_30225 = (state_30261[8]);var inst_30233 = (inst_30225[inst_30226] = inst_30229);var inst_30234__$1 = (inst_30226 + 1);var inst_30235 = (inst_30234__$1 < n);var state_30261__$1 = (function (){var statearr_30268 = state_30261;(statearr_30268[11] = inst_30233);
(statearr_30268[10] = inst_30234__$1);
return statearr_30268;
})();if(cljs.core.truth_(inst_30235))
{var statearr_30269_30295 = state_30261__$1;(statearr_30269_30295[1] = 8);
} else
{var statearr_30270_30296 = state_30261__$1;(statearr_30270_30296[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30262 === 6))
{var inst_30226 = (state_30261[7]);var inst_30247 = (inst_30226 > 0);var state_30261__$1 = state_30261;if(cljs.core.truth_(inst_30247))
{var statearr_30272_30297 = state_30261__$1;(statearr_30272_30297[1] = 12);
} else
{var statearr_30273_30298 = state_30261__$1;(statearr_30273_30298[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30262 === 7))
{var inst_30257 = (state_30261[2]);var state_30261__$1 = state_30261;var statearr_30274_30299 = state_30261__$1;(statearr_30274_30299[2] = inst_30257);
(statearr_30274_30299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30262 === 8))
{var inst_30234 = (state_30261[10]);var inst_30225 = (state_30261[8]);var tmp30271 = inst_30225;var inst_30225__$1 = tmp30271;var inst_30226 = inst_30234;var state_30261__$1 = (function (){var statearr_30275 = state_30261;(statearr_30275[7] = inst_30226);
(statearr_30275[8] = inst_30225__$1);
return statearr_30275;
})();var statearr_30276_30300 = state_30261__$1;(statearr_30276_30300[2] = null);
(statearr_30276_30300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30262 === 9))
{var inst_30225 = (state_30261[8]);var inst_30239 = cljs.core.vec.call(null,inst_30225);var state_30261__$1 = state_30261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30261__$1,11,out,inst_30239);
} else
{if((state_val_30262 === 10))
{var inst_30245 = (state_30261[2]);var state_30261__$1 = state_30261;var statearr_30277_30301 = state_30261__$1;(statearr_30277_30301[2] = inst_30245);
(statearr_30277_30301[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30262 === 11))
{var inst_30241 = (state_30261[2]);var inst_30242 = (new Array(n));var inst_30225 = inst_30242;var inst_30226 = 0;var state_30261__$1 = (function (){var statearr_30278 = state_30261;(statearr_30278[7] = inst_30226);
(statearr_30278[12] = inst_30241);
(statearr_30278[8] = inst_30225);
return statearr_30278;
})();var statearr_30279_30302 = state_30261__$1;(statearr_30279_30302[2] = null);
(statearr_30279_30302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30262 === 12))
{var inst_30225 = (state_30261[8]);var inst_30249 = cljs.core.vec.call(null,inst_30225);var state_30261__$1 = state_30261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30261__$1,15,out,inst_30249);
} else
{if((state_val_30262 === 13))
{var state_30261__$1 = state_30261;var statearr_30280_30303 = state_30261__$1;(statearr_30280_30303[2] = null);
(statearr_30280_30303[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30262 === 14))
{var inst_30254 = (state_30261[2]);var inst_30255 = cljs.core.async.close_BANG_.call(null,out);var state_30261__$1 = (function (){var statearr_30281 = state_30261;(statearr_30281[13] = inst_30254);
return statearr_30281;
})();var statearr_30282_30304 = state_30261__$1;(statearr_30282_30304[2] = inst_30255);
(statearr_30282_30304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30262 === 15))
{var inst_30251 = (state_30261[2]);var state_30261__$1 = state_30261;var statearr_30283_30305 = state_30261__$1;(statearr_30283_30305[2] = inst_30251);
(statearr_30283_30305[1] = 14);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_30287 = (new Array(14));(statearr_30287[0] = state_machine__10274__auto__);
(statearr_30287[1] = 1);
return statearr_30287;
});
var state_machine__10274__auto____1 = (function (state_30261){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_30261);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e30288){if((e30288 instanceof Object))
{var ex__10277__auto__ = e30288;var statearr_30289_30306 = state_30261;(statearr_30289_30306[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30261);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30307 = state_30261;
state_30261 = G__30307;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_30261){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_30261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_30290 = f__10344__auto__.call(null);(statearr_30290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___30291);
return statearr_30290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10343__auto___30450 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_30420){var state_val_30421 = (state_30420[1]);if((state_val_30421 === 1))
{var inst_30379 = (new Array(0));var inst_30380 = inst_30379;var inst_30381 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_30420__$1 = (function (){var statearr_30422 = state_30420;(statearr_30422[7] = inst_30381);
(statearr_30422[8] = inst_30380);
return statearr_30422;
})();var statearr_30423_30451 = state_30420__$1;(statearr_30423_30451[2] = null);
(statearr_30423_30451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30421 === 2))
{var state_30420__$1 = state_30420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,4,ch);
} else
{if((state_val_30421 === 3))
{var inst_30418 = (state_30420[2]);var state_30420__$1 = state_30420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30420__$1,inst_30418);
} else
{if((state_val_30421 === 4))
{var inst_30384 = (state_30420[9]);var inst_30384__$1 = (state_30420[2]);var inst_30385 = (inst_30384__$1 == null);var inst_30386 = cljs.core.not.call(null,inst_30385);var state_30420__$1 = (function (){var statearr_30424 = state_30420;(statearr_30424[9] = inst_30384__$1);
return statearr_30424;
})();if(inst_30386)
{var statearr_30425_30452 = state_30420__$1;(statearr_30425_30452[1] = 5);
} else
{var statearr_30426_30453 = state_30420__$1;(statearr_30426_30453[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30421 === 5))
{var inst_30381 = (state_30420[7]);var inst_30388 = (state_30420[10]);var inst_30384 = (state_30420[9]);var inst_30388__$1 = f.call(null,inst_30384);var inst_30389 = cljs.core._EQ_.call(null,inst_30388__$1,inst_30381);var inst_30390 = cljs.core.keyword_identical_QMARK_.call(null,inst_30381,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_30391 = (inst_30389) || (inst_30390);var state_30420__$1 = (function (){var statearr_30427 = state_30420;(statearr_30427[10] = inst_30388__$1);
return statearr_30427;
})();if(cljs.core.truth_(inst_30391))
{var statearr_30428_30454 = state_30420__$1;(statearr_30428_30454[1] = 8);
} else
{var statearr_30429_30455 = state_30420__$1;(statearr_30429_30455[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30421 === 6))
{var inst_30380 = (state_30420[8]);var inst_30405 = inst_30380.length;var inst_30406 = (inst_30405 > 0);var state_30420__$1 = state_30420;if(cljs.core.truth_(inst_30406))
{var statearr_30431_30456 = state_30420__$1;(statearr_30431_30456[1] = 12);
} else
{var statearr_30432_30457 = state_30420__$1;(statearr_30432_30457[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30421 === 7))
{var inst_30416 = (state_30420[2]);var state_30420__$1 = state_30420;var statearr_30433_30458 = state_30420__$1;(statearr_30433_30458[2] = inst_30416);
(statearr_30433_30458[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30421 === 8))
{var inst_30380 = (state_30420[8]);var inst_30388 = (state_30420[10]);var inst_30384 = (state_30420[9]);var inst_30393 = inst_30380.push(inst_30384);var tmp30430 = inst_30380;var inst_30380__$1 = tmp30430;var inst_30381 = inst_30388;var state_30420__$1 = (function (){var statearr_30434 = state_30420;(statearr_30434[7] = inst_30381);
(statearr_30434[8] = inst_30380__$1);
(statearr_30434[11] = inst_30393);
return statearr_30434;
})();var statearr_30435_30459 = state_30420__$1;(statearr_30435_30459[2] = null);
(statearr_30435_30459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30421 === 9))
{var inst_30380 = (state_30420[8]);var inst_30396 = cljs.core.vec.call(null,inst_30380);var state_30420__$1 = state_30420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30420__$1,11,out,inst_30396);
} else
{if((state_val_30421 === 10))
{var inst_30403 = (state_30420[2]);var state_30420__$1 = state_30420;var statearr_30436_30460 = state_30420__$1;(statearr_30436_30460[2] = inst_30403);
(statearr_30436_30460[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30421 === 11))
{var inst_30388 = (state_30420[10]);var inst_30384 = (state_30420[9]);var inst_30398 = (state_30420[2]);var inst_30399 = (new Array(0));var inst_30400 = inst_30399.push(inst_30384);var inst_30380 = inst_30399;var inst_30381 = inst_30388;var state_30420__$1 = (function (){var statearr_30437 = state_30420;(statearr_30437[12] = inst_30400);
(statearr_30437[13] = inst_30398);
(statearr_30437[7] = inst_30381);
(statearr_30437[8] = inst_30380);
return statearr_30437;
})();var statearr_30438_30461 = state_30420__$1;(statearr_30438_30461[2] = null);
(statearr_30438_30461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30421 === 12))
{var inst_30380 = (state_30420[8]);var inst_30408 = cljs.core.vec.call(null,inst_30380);var state_30420__$1 = state_30420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30420__$1,15,out,inst_30408);
} else
{if((state_val_30421 === 13))
{var state_30420__$1 = state_30420;var statearr_30439_30462 = state_30420__$1;(statearr_30439_30462[2] = null);
(statearr_30439_30462[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30421 === 14))
{var inst_30413 = (state_30420[2]);var inst_30414 = cljs.core.async.close_BANG_.call(null,out);var state_30420__$1 = (function (){var statearr_30440 = state_30420;(statearr_30440[14] = inst_30413);
return statearr_30440;
})();var statearr_30441_30463 = state_30420__$1;(statearr_30441_30463[2] = inst_30414);
(statearr_30441_30463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30421 === 15))
{var inst_30410 = (state_30420[2]);var state_30420__$1 = state_30420;var statearr_30442_30464 = state_30420__$1;(statearr_30442_30464[2] = inst_30410);
(statearr_30442_30464[1] = 14);
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
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_30446 = (new Array(15));(statearr_30446[0] = state_machine__10274__auto__);
(statearr_30446[1] = 1);
return statearr_30446;
});
var state_machine__10274__auto____1 = (function (state_30420){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_30420);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e30447){if((e30447 instanceof Object))
{var ex__10277__auto__ = e30447;var statearr_30448_30465 = state_30420;(statearr_30448_30465[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30420);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30466 = state_30420;
state_30420 = G__30466;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_30420){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_30420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_30449 = f__10344__auto__.call(null);(statearr_30449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto___30450);
return statearr_30449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
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