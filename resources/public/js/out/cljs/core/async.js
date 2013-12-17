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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t28029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28029 = (function (f,fn_handler,meta28030){
this.f = f;
this.fn_handler = fn_handler;
this.meta28030 = meta28030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28029.cljs$lang$type = true;
cljs.core.async.t28029.cljs$lang$ctorStr = "cljs.core.async/t28029";
cljs.core.async.t28029.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t28029");
});
cljs.core.async.t28029.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t28029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t28029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28031){var self__ = this;
var _28031__$1 = this;return self__.meta28030;
});
cljs.core.async.t28029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28031,meta28030__$1){var self__ = this;
var _28031__$1 = this;return (new cljs.core.async.t28029(self__.f,self__.fn_handler,meta28030__$1));
});
cljs.core.async.__GT_t28029 = (function __GT_t28029(f__$1,fn_handler__$1,meta28030){return (new cljs.core.async.t28029(f__$1,fn_handler__$1,meta28030));
});
}
return (new cljs.core.async.t28029(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__28033 = buff;if(G__28033)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__28033.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__28033.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28033);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28033);
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
{var val_28034 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28034);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_28034);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8186__auto__ = ret;if(cljs.core.truth_(and__8186__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8186__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9026__auto___28035 = n;var x_28036 = 0;while(true){
if((x_28036 < n__9026__auto___28035))
{(a[x_28036] = 0);
{
var G__28037 = (x_28036 + 1);
x_28036 = G__28037;
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
var G__28038 = (i + 1);
i = G__28038;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t28042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28042 = (function (flag,alt_flag,meta28043){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28043 = meta28043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28042.cljs$lang$type = true;
cljs.core.async.t28042.cljs$lang$ctorStr = "cljs.core.async/t28042";
cljs.core.async.t28042.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t28042");
});
cljs.core.async.t28042.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t28042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t28042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28044){var self__ = this;
var _28044__$1 = this;return self__.meta28043;
});
cljs.core.async.t28042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28044,meta28043__$1){var self__ = this;
var _28044__$1 = this;return (new cljs.core.async.t28042(self__.flag,self__.alt_flag,meta28043__$1));
});
cljs.core.async.__GT_t28042 = (function __GT_t28042(flag__$1,alt_flag__$1,meta28043){return (new cljs.core.async.t28042(flag__$1,alt_flag__$1,meta28043));
});
}
return (new cljs.core.async.t28042(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t28048 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28048 = (function (cb,flag,alt_handler,meta28049){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28049 = meta28049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28048.cljs$lang$type = true;
cljs.core.async.t28048.cljs$lang$ctorStr = "cljs.core.async/t28048";
cljs.core.async.t28048.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t28048");
});
cljs.core.async.t28048.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t28048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t28048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28050){var self__ = this;
var _28050__$1 = this;return self__.meta28049;
});
cljs.core.async.t28048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28050,meta28049__$1){var self__ = this;
var _28050__$1 = this;return (new cljs.core.async.t28048(self__.cb,self__.flag,self__.alt_handler,meta28049__$1));
});
cljs.core.async.__GT_t28048 = (function __GT_t28048(cb__$1,flag__$1,alt_handler__$1,meta28049){return (new cljs.core.async.t28048(cb__$1,flag__$1,alt_handler__$1,meta28049));
});
}
return (new cljs.core.async.t28048(cb,flag,alt_handler,null));
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
return (function (p1__28051_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28051_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8198__auto__ = wport;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__28052 = (i + 1);
i = G__28052;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8198__auto__ = ret;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8186__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8186__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8186__auto__;
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
var alts_BANG___delegate = function (ports,p__28053){var map__28055 = p__28053;var map__28055__$1 = ((cljs.core.seq_QMARK_.call(null,map__28055))?cljs.core.apply.call(null,cljs.core.hash_map,map__28055):map__28055);var opts = map__28055__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__28053 = null;if (arguments.length > 1) {
  p__28053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__28053);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28056){
var ports = cljs.core.first(arglist__28056);
var p__28053 = cljs.core.rest(arglist__28056);
return alts_BANG___delegate(ports,p__28053);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28064 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28064 = (function (ch,f,map_LT_,meta28065){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28065 = meta28065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28064.cljs$lang$type = true;
cljs.core.async.t28064.cljs$lang$ctorStr = "cljs.core.async/t28064";
cljs.core.async.t28064.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t28064");
});
cljs.core.async.t28064.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t28064.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t28067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28067 = (function (fn1,_,meta28065,ch,f,map_LT_,meta28068){
this.fn1 = fn1;
this._ = _;
this.meta28065 = meta28065;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28068 = meta28068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28067.cljs$lang$type = true;
cljs.core.async.t28067.cljs$lang$ctorStr = "cljs.core.async/t28067";
cljs.core.async.t28067.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t28067");
});
cljs.core.async.t28067.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t28067.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t28067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__28057_SHARP_){return f1.call(null,(((p1__28057_SHARP_ == null))?null:self__.f.call(null,p1__28057_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t28067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28069){var self__ = this;
var _28069__$1 = this;return self__.meta28068;
});
cljs.core.async.t28067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28069,meta28068__$1){var self__ = this;
var _28069__$1 = this;return (new cljs.core.async.t28067(self__.fn1,self__._,self__.meta28065,self__.ch,self__.f,self__.map_LT_,meta28068__$1));
});
cljs.core.async.__GT_t28067 = (function __GT_t28067(fn1__$1,___$2,meta28065__$1,ch__$2,f__$2,map_LT___$2,meta28068){return (new cljs.core.async.t28067(fn1__$1,___$2,meta28065__$1,ch__$2,f__$2,map_LT___$2,meta28068));
});
}
return (new cljs.core.async.t28067(fn1,___$1,self__.meta28065,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8186__auto__ = ret;if(cljs.core.truth_(and__8186__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8186__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t28064.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28066){var self__ = this;
var _28066__$1 = this;return self__.meta28065;
});
cljs.core.async.t28064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28066,meta28065__$1){var self__ = this;
var _28066__$1 = this;return (new cljs.core.async.t28064(self__.ch,self__.f,self__.map_LT_,meta28065__$1));
});
cljs.core.async.__GT_t28064 = (function __GT_t28064(ch__$1,f__$1,map_LT___$1,meta28065){return (new cljs.core.async.t28064(ch__$1,f__$1,map_LT___$1,meta28065));
});
}
return (new cljs.core.async.t28064(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28073 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28073 = (function (ch,f,map_GT_,meta28074){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28074 = meta28074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28073.cljs$lang$type = true;
cljs.core.async.t28073.cljs$lang$ctorStr = "cljs.core.async/t28073";
cljs.core.async.t28073.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t28073");
});
cljs.core.async.t28073.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t28073.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28073.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28075){var self__ = this;
var _28075__$1 = this;return self__.meta28074;
});
cljs.core.async.t28073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28075,meta28074__$1){var self__ = this;
var _28075__$1 = this;return (new cljs.core.async.t28073(self__.ch,self__.f,self__.map_GT_,meta28074__$1));
});
cljs.core.async.__GT_t28073 = (function __GT_t28073(ch__$1,f__$1,map_GT___$1,meta28074){return (new cljs.core.async.t28073(ch__$1,f__$1,map_GT___$1,meta28074));
});
}
return (new cljs.core.async.t28073(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28079 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28079 = (function (ch,p,filter_GT_,meta28080){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28080 = meta28080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28079.cljs$lang$type = true;
cljs.core.async.t28079.cljs$lang$ctorStr = "cljs.core.async/t28079";
cljs.core.async.t28079.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t28079");
});
cljs.core.async.t28079.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28079.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t28079.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28079.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28079.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28079.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28081){var self__ = this;
var _28081__$1 = this;return self__.meta28080;
});
cljs.core.async.t28079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28081,meta28080__$1){var self__ = this;
var _28081__$1 = this;return (new cljs.core.async.t28079(self__.ch,self__.p,self__.filter_GT_,meta28080__$1));
});
cljs.core.async.__GT_t28079 = (function __GT_t28079(ch__$1,p__$1,filter_GT___$1,meta28080){return (new cljs.core.async.t28079(ch__$1,p__$1,filter_GT___$1,meta28080));
});
}
return (new cljs.core.async.t28079(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___28164 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_28143){var state_val_28144 = (state_28143[1]);if((state_val_28144 === 1))
{var state_28143__$1 = state_28143;var statearr_28145_28165 = state_28143__$1;(statearr_28145_28165[2] = null);
(statearr_28145_28165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28144 === 2))
{var state_28143__$1 = state_28143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28143__$1,4,ch);
} else
{if((state_val_28144 === 3))
{var inst_28141 = (state_28143[2]);var state_28143__$1 = state_28143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28143__$1,inst_28141);
} else
{if((state_val_28144 === 4))
{var inst_28125 = (state_28143[7]);var inst_28125__$1 = (state_28143[2]);var inst_28126 = (inst_28125__$1 == null);var state_28143__$1 = (function (){var statearr_28146 = state_28143;(statearr_28146[7] = inst_28125__$1);
return statearr_28146;
})();if(cljs.core.truth_(inst_28126))
{var statearr_28147_28166 = state_28143__$1;(statearr_28147_28166[1] = 5);
} else
{var statearr_28148_28167 = state_28143__$1;(statearr_28148_28167[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28144 === 5))
{var inst_28128 = cljs.core.async.close_BANG_.call(null,out);var state_28143__$1 = state_28143;var statearr_28149_28168 = state_28143__$1;(statearr_28149_28168[2] = inst_28128);
(statearr_28149_28168[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28144 === 6))
{var inst_28125 = (state_28143[7]);var inst_28130 = p.call(null,inst_28125);var state_28143__$1 = state_28143;if(cljs.core.truth_(inst_28130))
{var statearr_28150_28169 = state_28143__$1;(statearr_28150_28169[1] = 8);
} else
{var statearr_28151_28170 = state_28143__$1;(statearr_28151_28170[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28144 === 7))
{var inst_28139 = (state_28143[2]);var state_28143__$1 = state_28143;var statearr_28152_28171 = state_28143__$1;(statearr_28152_28171[2] = inst_28139);
(statearr_28152_28171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28144 === 8))
{var inst_28125 = (state_28143[7]);var state_28143__$1 = state_28143;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28143__$1,11,out,inst_28125);
} else
{if((state_val_28144 === 9))
{var state_28143__$1 = state_28143;var statearr_28153_28172 = state_28143__$1;(statearr_28153_28172[2] = null);
(statearr_28153_28172[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28144 === 10))
{var inst_28136 = (state_28143[2]);var state_28143__$1 = (function (){var statearr_28154 = state_28143;(statearr_28154[8] = inst_28136);
return statearr_28154;
})();var statearr_28155_28173 = state_28143__$1;(statearr_28155_28173[2] = null);
(statearr_28155_28173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28144 === 11))
{var inst_28133 = (state_28143[2]);var state_28143__$1 = state_28143;var statearr_28156_28174 = state_28143__$1;(statearr_28156_28174[2] = inst_28133);
(statearr_28156_28174[1] = 10);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_28160 = [null,null,null,null,null,null,null,null,null];(statearr_28160[0] = state_machine__10730__auto__);
(statearr_28160[1] = 1);
return statearr_28160;
});
var state_machine__10730__auto____1 = (function (state_28143){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_28143);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e28161){if((e28161 instanceof Object))
{var ex__10733__auto__ = e28161;var statearr_28162_28175 = state_28143;(statearr_28162_28175[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28143);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28176 = state_28143;
state_28143 = G__28176;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_28143){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_28143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_28163 = f__10794__auto__.call(null);(statearr_28163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___28164);
return statearr_28163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10793__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_28328){var state_val_28329 = (state_28328[1]);if((state_val_28329 === 1))
{var state_28328__$1 = state_28328;var statearr_28330_28367 = state_28328__$1;(statearr_28330_28367[2] = null);
(statearr_28330_28367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 2))
{var state_28328__$1 = state_28328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28328__$1,4,in$);
} else
{if((state_val_28329 === 3))
{var inst_28326 = (state_28328[2]);var state_28328__$1 = state_28328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28328__$1,inst_28326);
} else
{if((state_val_28329 === 4))
{var inst_28274 = (state_28328[7]);var inst_28274__$1 = (state_28328[2]);var inst_28275 = (inst_28274__$1 == null);var state_28328__$1 = (function (){var statearr_28331 = state_28328;(statearr_28331[7] = inst_28274__$1);
return statearr_28331;
})();if(cljs.core.truth_(inst_28275))
{var statearr_28332_28368 = state_28328__$1;(statearr_28332_28368[1] = 5);
} else
{var statearr_28333_28369 = state_28328__$1;(statearr_28333_28369[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 5))
{var inst_28277 = cljs.core.async.close_BANG_.call(null,out);var state_28328__$1 = state_28328;var statearr_28334_28370 = state_28328__$1;(statearr_28334_28370[2] = inst_28277);
(statearr_28334_28370[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 6))
{var inst_28274 = (state_28328[7]);var inst_28279 = f.call(null,inst_28274);var inst_28284 = cljs.core.seq.call(null,inst_28279);var inst_28285 = inst_28284;var inst_28286 = null;var inst_28287 = 0;var inst_28288 = 0;var state_28328__$1 = (function (){var statearr_28335 = state_28328;(statearr_28335[8] = inst_28286);
(statearr_28335[9] = inst_28285);
(statearr_28335[10] = inst_28288);
(statearr_28335[11] = inst_28287);
return statearr_28335;
})();var statearr_28336_28371 = state_28328__$1;(statearr_28336_28371[2] = null);
(statearr_28336_28371[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 7))
{var inst_28324 = (state_28328[2]);var state_28328__$1 = state_28328;var statearr_28337_28372 = state_28328__$1;(statearr_28337_28372[2] = inst_28324);
(statearr_28337_28372[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 8))
{var inst_28288 = (state_28328[10]);var inst_28287 = (state_28328[11]);var inst_28290 = (inst_28288 < inst_28287);var inst_28291 = inst_28290;var state_28328__$1 = state_28328;if(cljs.core.truth_(inst_28291))
{var statearr_28338_28373 = state_28328__$1;(statearr_28338_28373[1] = 10);
} else
{var statearr_28339_28374 = state_28328__$1;(statearr_28339_28374[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 9))
{var inst_28321 = (state_28328[2]);var state_28328__$1 = (function (){var statearr_28340 = state_28328;(statearr_28340[12] = inst_28321);
return statearr_28340;
})();var statearr_28341_28375 = state_28328__$1;(statearr_28341_28375[2] = null);
(statearr_28341_28375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 10))
{var inst_28286 = (state_28328[8]);var inst_28288 = (state_28328[10]);var inst_28293 = cljs.core._nth.call(null,inst_28286,inst_28288);var state_28328__$1 = state_28328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28328__$1,13,out,inst_28293);
} else
{if((state_val_28329 === 11))
{var inst_28285 = (state_28328[9]);var inst_28299 = (state_28328[13]);var inst_28299__$1 = cljs.core.seq.call(null,inst_28285);var state_28328__$1 = (function (){var statearr_28345 = state_28328;(statearr_28345[13] = inst_28299__$1);
return statearr_28345;
})();if(inst_28299__$1)
{var statearr_28346_28376 = state_28328__$1;(statearr_28346_28376[1] = 14);
} else
{var statearr_28347_28377 = state_28328__$1;(statearr_28347_28377[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 12))
{var inst_28319 = (state_28328[2]);var state_28328__$1 = state_28328;var statearr_28348_28378 = state_28328__$1;(statearr_28348_28378[2] = inst_28319);
(statearr_28348_28378[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 13))
{var inst_28286 = (state_28328[8]);var inst_28285 = (state_28328[9]);var inst_28288 = (state_28328[10]);var inst_28287 = (state_28328[11]);var inst_28295 = (state_28328[2]);var inst_28296 = (inst_28288 + 1);var tmp28342 = inst_28286;var tmp28343 = inst_28285;var tmp28344 = inst_28287;var inst_28285__$1 = tmp28343;var inst_28286__$1 = tmp28342;var inst_28287__$1 = tmp28344;var inst_28288__$1 = inst_28296;var state_28328__$1 = (function (){var statearr_28349 = state_28328;(statearr_28349[8] = inst_28286__$1);
(statearr_28349[9] = inst_28285__$1);
(statearr_28349[10] = inst_28288__$1);
(statearr_28349[11] = inst_28287__$1);
(statearr_28349[14] = inst_28295);
return statearr_28349;
})();var statearr_28350_28379 = state_28328__$1;(statearr_28350_28379[2] = null);
(statearr_28350_28379[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 14))
{var inst_28299 = (state_28328[13]);var inst_28301 = cljs.core.chunked_seq_QMARK_.call(null,inst_28299);var state_28328__$1 = state_28328;if(inst_28301)
{var statearr_28351_28380 = state_28328__$1;(statearr_28351_28380[1] = 17);
} else
{var statearr_28352_28381 = state_28328__$1;(statearr_28352_28381[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 15))
{var state_28328__$1 = state_28328;var statearr_28353_28382 = state_28328__$1;(statearr_28353_28382[2] = null);
(statearr_28353_28382[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 16))
{var inst_28317 = (state_28328[2]);var state_28328__$1 = state_28328;var statearr_28354_28383 = state_28328__$1;(statearr_28354_28383[2] = inst_28317);
(statearr_28354_28383[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 17))
{var inst_28299 = (state_28328[13]);var inst_28303 = cljs.core.chunk_first.call(null,inst_28299);var inst_28304 = cljs.core.chunk_rest.call(null,inst_28299);var inst_28305 = cljs.core.count.call(null,inst_28303);var inst_28285 = inst_28304;var inst_28286 = inst_28303;var inst_28287 = inst_28305;var inst_28288 = 0;var state_28328__$1 = (function (){var statearr_28355 = state_28328;(statearr_28355[8] = inst_28286);
(statearr_28355[9] = inst_28285);
(statearr_28355[10] = inst_28288);
(statearr_28355[11] = inst_28287);
return statearr_28355;
})();var statearr_28356_28384 = state_28328__$1;(statearr_28356_28384[2] = null);
(statearr_28356_28384[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 18))
{var inst_28299 = (state_28328[13]);var inst_28308 = cljs.core.first.call(null,inst_28299);var state_28328__$1 = state_28328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28328__$1,20,out,inst_28308);
} else
{if((state_val_28329 === 19))
{var inst_28314 = (state_28328[2]);var state_28328__$1 = state_28328;var statearr_28357_28385 = state_28328__$1;(statearr_28357_28385[2] = inst_28314);
(statearr_28357_28385[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 20))
{var inst_28299 = (state_28328[13]);var inst_28310 = (state_28328[2]);var inst_28311 = cljs.core.next.call(null,inst_28299);var inst_28285 = inst_28311;var inst_28286 = null;var inst_28287 = 0;var inst_28288 = 0;var state_28328__$1 = (function (){var statearr_28358 = state_28328;(statearr_28358[8] = inst_28286);
(statearr_28358[9] = inst_28285);
(statearr_28358[10] = inst_28288);
(statearr_28358[11] = inst_28287);
(statearr_28358[15] = inst_28310);
return statearr_28358;
})();var statearr_28359_28386 = state_28328__$1;(statearr_28359_28386[2] = null);
(statearr_28359_28386[1] = 8);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_28363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28363[0] = state_machine__10730__auto__);
(statearr_28363[1] = 1);
return statearr_28363;
});
var state_machine__10730__auto____1 = (function (state_28328){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_28328);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e28364){if((e28364 instanceof Object))
{var ex__10733__auto__ = e28364;var statearr_28365_28387 = state_28328;(statearr_28365_28387[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28388 = state_28328;
state_28328 = G__28388;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_28328){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_28328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_28366 = f__10794__auto__.call(null);(statearr_28366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto__);
return statearr_28366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
}));
return c__10793__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10793__auto___28469 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_28448){var state_val_28449 = (state_28448[1]);if((state_val_28449 === 1))
{var state_28448__$1 = state_28448;var statearr_28450_28470 = state_28448__$1;(statearr_28450_28470[2] = null);
(statearr_28450_28470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28449 === 2))
{var state_28448__$1 = state_28448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28448__$1,4,from);
} else
{if((state_val_28449 === 3))
{var inst_28446 = (state_28448[2]);var state_28448__$1 = state_28448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28448__$1,inst_28446);
} else
{if((state_val_28449 === 4))
{var inst_28431 = (state_28448[7]);var inst_28431__$1 = (state_28448[2]);var inst_28432 = (inst_28431__$1 == null);var state_28448__$1 = (function (){var statearr_28451 = state_28448;(statearr_28451[7] = inst_28431__$1);
return statearr_28451;
})();if(cljs.core.truth_(inst_28432))
{var statearr_28452_28471 = state_28448__$1;(statearr_28452_28471[1] = 5);
} else
{var statearr_28453_28472 = state_28448__$1;(statearr_28453_28472[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28449 === 5))
{var state_28448__$1 = state_28448;if(cljs.core.truth_(close_QMARK_))
{var statearr_28454_28473 = state_28448__$1;(statearr_28454_28473[1] = 8);
} else
{var statearr_28455_28474 = state_28448__$1;(statearr_28455_28474[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28449 === 6))
{var inst_28431 = (state_28448[7]);var state_28448__$1 = state_28448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28448__$1,11,to,inst_28431);
} else
{if((state_val_28449 === 7))
{var inst_28444 = (state_28448[2]);var state_28448__$1 = state_28448;var statearr_28456_28475 = state_28448__$1;(statearr_28456_28475[2] = inst_28444);
(statearr_28456_28475[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28449 === 8))
{var inst_28435 = cljs.core.async.close_BANG_.call(null,to);var state_28448__$1 = state_28448;var statearr_28457_28476 = state_28448__$1;(statearr_28457_28476[2] = inst_28435);
(statearr_28457_28476[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28449 === 9))
{var state_28448__$1 = state_28448;var statearr_28458_28477 = state_28448__$1;(statearr_28458_28477[2] = null);
(statearr_28458_28477[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28449 === 10))
{var inst_28438 = (state_28448[2]);var state_28448__$1 = state_28448;var statearr_28459_28478 = state_28448__$1;(statearr_28459_28478[2] = inst_28438);
(statearr_28459_28478[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28449 === 11))
{var inst_28441 = (state_28448[2]);var state_28448__$1 = (function (){var statearr_28460 = state_28448;(statearr_28460[8] = inst_28441);
return statearr_28460;
})();var statearr_28461_28479 = state_28448__$1;(statearr_28461_28479[2] = null);
(statearr_28461_28479[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_28465 = [null,null,null,null,null,null,null,null,null];(statearr_28465[0] = state_machine__10730__auto__);
(statearr_28465[1] = 1);
return statearr_28465;
});
var state_machine__10730__auto____1 = (function (state_28448){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_28448);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e28466){if((e28466 instanceof Object))
{var ex__10733__auto__ = e28466;var statearr_28467_28480 = state_28448;(statearr_28467_28480[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28481 = state_28448;
state_28448 = G__28481;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_28448){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_28448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_28468 = f__10794__auto__.call(null);(statearr_28468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___28469);
return statearr_28468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10793__auto___28568 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_28546){var state_val_28547 = (state_28546[1]);if((state_val_28547 === 1))
{var state_28546__$1 = state_28546;var statearr_28548_28569 = state_28546__$1;(statearr_28548_28569[2] = null);
(statearr_28548_28569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28547 === 2))
{var state_28546__$1 = state_28546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28546__$1,4,ch);
} else
{if((state_val_28547 === 3))
{var inst_28544 = (state_28546[2]);var state_28546__$1 = state_28546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28546__$1,inst_28544);
} else
{if((state_val_28547 === 4))
{var inst_28527 = (state_28546[7]);var inst_28527__$1 = (state_28546[2]);var inst_28528 = (inst_28527__$1 == null);var state_28546__$1 = (function (){var statearr_28549 = state_28546;(statearr_28549[7] = inst_28527__$1);
return statearr_28549;
})();if(cljs.core.truth_(inst_28528))
{var statearr_28550_28570 = state_28546__$1;(statearr_28550_28570[1] = 5);
} else
{var statearr_28551_28571 = state_28546__$1;(statearr_28551_28571[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28547 === 5))
{var inst_28530 = cljs.core.async.close_BANG_.call(null,tc);var inst_28531 = cljs.core.async.close_BANG_.call(null,fc);var state_28546__$1 = (function (){var statearr_28552 = state_28546;(statearr_28552[8] = inst_28530);
return statearr_28552;
})();var statearr_28553_28572 = state_28546__$1;(statearr_28553_28572[2] = inst_28531);
(statearr_28553_28572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28547 === 6))
{var inst_28527 = (state_28546[7]);var inst_28533 = p.call(null,inst_28527);var state_28546__$1 = state_28546;if(cljs.core.truth_(inst_28533))
{var statearr_28554_28573 = state_28546__$1;(statearr_28554_28573[1] = 9);
} else
{var statearr_28555_28574 = state_28546__$1;(statearr_28555_28574[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28547 === 7))
{var inst_28542 = (state_28546[2]);var state_28546__$1 = state_28546;var statearr_28556_28575 = state_28546__$1;(statearr_28556_28575[2] = inst_28542);
(statearr_28556_28575[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28547 === 8))
{var inst_28539 = (state_28546[2]);var state_28546__$1 = (function (){var statearr_28557 = state_28546;(statearr_28557[9] = inst_28539);
return statearr_28557;
})();var statearr_28558_28576 = state_28546__$1;(statearr_28558_28576[2] = null);
(statearr_28558_28576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28547 === 9))
{var state_28546__$1 = state_28546;var statearr_28559_28577 = state_28546__$1;(statearr_28559_28577[2] = tc);
(statearr_28559_28577[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28547 === 10))
{var state_28546__$1 = state_28546;var statearr_28560_28578 = state_28546__$1;(statearr_28560_28578[2] = fc);
(statearr_28560_28578[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28547 === 11))
{var inst_28527 = (state_28546[7]);var inst_28537 = (state_28546[2]);var state_28546__$1 = state_28546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28546__$1,8,inst_28537,inst_28527);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_28564 = [null,null,null,null,null,null,null,null,null,null];(statearr_28564[0] = state_machine__10730__auto__);
(statearr_28564[1] = 1);
return statearr_28564;
});
var state_machine__10730__auto____1 = (function (state_28546){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_28546);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e28565){if((e28565 instanceof Object))
{var ex__10733__auto__ = e28565;var statearr_28566_28579 = state_28546;(statearr_28566_28579[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28546);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28580 = state_28546;
state_28546 = G__28580;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_28546){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_28546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_28567 = f__10794__auto__.call(null);(statearr_28567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___28568);
return statearr_28567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10793__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_28627){var state_val_28628 = (state_28627[1]);if((state_val_28628 === 7))
{var inst_28623 = (state_28627[2]);var state_28627__$1 = state_28627;var statearr_28629_28645 = state_28627__$1;(statearr_28629_28645[2] = inst_28623);
(statearr_28629_28645[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28628 === 6))
{var inst_28613 = (state_28627[7]);var inst_28616 = (state_28627[8]);var inst_28620 = f.call(null,inst_28613,inst_28616);var inst_28613__$1 = inst_28620;var state_28627__$1 = (function (){var statearr_28630 = state_28627;(statearr_28630[7] = inst_28613__$1);
return statearr_28630;
})();var statearr_28631_28646 = state_28627__$1;(statearr_28631_28646[2] = null);
(statearr_28631_28646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28628 === 5))
{var inst_28613 = (state_28627[7]);var state_28627__$1 = state_28627;var statearr_28632_28647 = state_28627__$1;(statearr_28632_28647[2] = inst_28613);
(statearr_28632_28647[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28628 === 4))
{var inst_28616 = (state_28627[8]);var inst_28616__$1 = (state_28627[2]);var inst_28617 = (inst_28616__$1 == null);var state_28627__$1 = (function (){var statearr_28633 = state_28627;(statearr_28633[8] = inst_28616__$1);
return statearr_28633;
})();if(cljs.core.truth_(inst_28617))
{var statearr_28634_28648 = state_28627__$1;(statearr_28634_28648[1] = 5);
} else
{var statearr_28635_28649 = state_28627__$1;(statearr_28635_28649[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28628 === 3))
{var inst_28625 = (state_28627[2]);var state_28627__$1 = state_28627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28627__$1,inst_28625);
} else
{if((state_val_28628 === 2))
{var state_28627__$1 = state_28627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28627__$1,4,ch);
} else
{if((state_val_28628 === 1))
{var inst_28613 = init;var state_28627__$1 = (function (){var statearr_28636 = state_28627;(statearr_28636[7] = inst_28613);
return statearr_28636;
})();var statearr_28637_28650 = state_28627__$1;(statearr_28637_28650[2] = null);
(statearr_28637_28650[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_28641 = [null,null,null,null,null,null,null,null,null];(statearr_28641[0] = state_machine__10730__auto__);
(statearr_28641[1] = 1);
return statearr_28641;
});
var state_machine__10730__auto____1 = (function (state_28627){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_28627);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e28642){if((e28642 instanceof Object))
{var ex__10733__auto__ = e28642;var statearr_28643_28651 = state_28627;(statearr_28643_28651[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28652 = state_28627;
state_28627 = G__28652;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_28627){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_28627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_28644 = f__10794__auto__.call(null);(statearr_28644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto__);
return statearr_28644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
}));
return c__10793__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10793__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_28714){var state_val_28715 = (state_28714[1]);if((state_val_28715 === 1))
{var inst_28694 = cljs.core.seq.call(null,coll);var inst_28695 = inst_28694;var state_28714__$1 = (function (){var statearr_28716 = state_28714;(statearr_28716[7] = inst_28695);
return statearr_28716;
})();var statearr_28717_28735 = state_28714__$1;(statearr_28717_28735[2] = null);
(statearr_28717_28735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28715 === 2))
{var inst_28695 = (state_28714[7]);var state_28714__$1 = state_28714;if(cljs.core.truth_(inst_28695))
{var statearr_28718_28736 = state_28714__$1;(statearr_28718_28736[1] = 4);
} else
{var statearr_28719_28737 = state_28714__$1;(statearr_28719_28737[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28715 === 3))
{var inst_28712 = (state_28714[2]);var state_28714__$1 = state_28714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28714__$1,inst_28712);
} else
{if((state_val_28715 === 4))
{var inst_28695 = (state_28714[7]);var inst_28698 = cljs.core.first.call(null,inst_28695);var state_28714__$1 = state_28714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28714__$1,7,ch,inst_28698);
} else
{if((state_val_28715 === 5))
{var state_28714__$1 = state_28714;if(cljs.core.truth_(close_QMARK_))
{var statearr_28720_28738 = state_28714__$1;(statearr_28720_28738[1] = 8);
} else
{var statearr_28721_28739 = state_28714__$1;(statearr_28721_28739[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28715 === 6))
{var inst_28710 = (state_28714[2]);var state_28714__$1 = state_28714;var statearr_28722_28740 = state_28714__$1;(statearr_28722_28740[2] = inst_28710);
(statearr_28722_28740[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28715 === 7))
{var inst_28695 = (state_28714[7]);var inst_28700 = (state_28714[2]);var inst_28701 = cljs.core.next.call(null,inst_28695);var inst_28695__$1 = inst_28701;var state_28714__$1 = (function (){var statearr_28723 = state_28714;(statearr_28723[7] = inst_28695__$1);
(statearr_28723[8] = inst_28700);
return statearr_28723;
})();var statearr_28724_28741 = state_28714__$1;(statearr_28724_28741[2] = null);
(statearr_28724_28741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28715 === 8))
{var inst_28705 = cljs.core.async.close_BANG_.call(null,ch);var state_28714__$1 = state_28714;var statearr_28725_28742 = state_28714__$1;(statearr_28725_28742[2] = inst_28705);
(statearr_28725_28742[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28715 === 9))
{var state_28714__$1 = state_28714;var statearr_28726_28743 = state_28714__$1;(statearr_28726_28743[2] = null);
(statearr_28726_28743[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28715 === 10))
{var inst_28708 = (state_28714[2]);var state_28714__$1 = state_28714;var statearr_28727_28744 = state_28714__$1;(statearr_28727_28744[2] = inst_28708);
(statearr_28727_28744[1] = 6);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_28731 = [null,null,null,null,null,null,null,null,null];(statearr_28731[0] = state_machine__10730__auto__);
(statearr_28731[1] = 1);
return statearr_28731;
});
var state_machine__10730__auto____1 = (function (state_28714){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_28714);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e28732){if((e28732 instanceof Object))
{var ex__10733__auto__ = e28732;var statearr_28733_28745 = state_28714;(statearr_28733_28745[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28746 = state_28714;
state_28714 = G__28746;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_28714){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_28714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_28734 = f__10794__auto__.call(null);(statearr_28734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto__);
return statearr_28734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
}));
return c__10793__auto__;
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
cljs.core.async.Mux = (function (){var obj28748 = {};return obj28748;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj28750 = {};return obj28750;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t28974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28974 = (function (cs,ch,mult,meta28975){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28975 = meta28975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28974.cljs$lang$type = true;
cljs.core.async.t28974.cljs$lang$ctorStr = "cljs.core.async/t28974";
cljs.core.async.t28974.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t28974");
});})(cs))
;
cljs.core.async.t28974.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t28974.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t28974.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t28974.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t28974.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28974.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t28974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28976){var self__ = this;
var _28976__$1 = this;return self__.meta28975;
});})(cs))
;
cljs.core.async.t28974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28976,meta28975__$1){var self__ = this;
var _28976__$1 = this;return (new cljs.core.async.t28974(self__.cs,self__.ch,self__.mult,meta28975__$1));
});})(cs))
;
cljs.core.async.__GT_t28974 = ((function (cs){
return (function __GT_t28974(cs__$1,ch__$1,mult__$1,meta28975){return (new cljs.core.async.t28974(cs__$1,ch__$1,mult__$1,meta28975));
});})(cs))
;
}
return (new cljs.core.async.t28974(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10793__auto___29197 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_29111){var state_val_29112 = (state_29111[1]);if((state_val_29112 === 32))
{var inst_29055 = (state_29111[7]);var inst_28979 = (state_29111[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29111,31,Object,null,30);var inst_29062 = cljs.core.async.put_BANG_.call(null,inst_29055,inst_28979,done);var state_29111__$1 = state_29111;var statearr_29113_29198 = state_29111__$1;(statearr_29113_29198[2] = inst_29062);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29111__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 1))
{var state_29111__$1 = state_29111;var statearr_29114_29199 = state_29111__$1;(statearr_29114_29199[2] = null);
(statearr_29114_29199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 33))
{var inst_29068 = (state_29111[9]);var inst_29070 = cljs.core.chunked_seq_QMARK_.call(null,inst_29068);var state_29111__$1 = state_29111;if(inst_29070)
{var statearr_29115_29200 = state_29111__$1;(statearr_29115_29200[1] = 36);
} else
{var statearr_29116_29201 = state_29111__$1;(statearr_29116_29201[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 2))
{var state_29111__$1 = state_29111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29111__$1,4,ch);
} else
{if((state_val_29112 === 34))
{var state_29111__$1 = state_29111;var statearr_29117_29202 = state_29111__$1;(statearr_29117_29202[2] = null);
(statearr_29117_29202[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 3))
{var inst_29109 = (state_29111[2]);var state_29111__$1 = state_29111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29111__$1,inst_29109);
} else
{if((state_val_29112 === 35))
{var inst_29093 = (state_29111[2]);var state_29111__$1 = state_29111;var statearr_29118_29203 = state_29111__$1;(statearr_29118_29203[2] = inst_29093);
(statearr_29118_29203[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 4))
{var inst_28979 = (state_29111[8]);var inst_28979__$1 = (state_29111[2]);var inst_28980 = (inst_28979__$1 == null);var state_29111__$1 = (function (){var statearr_29119 = state_29111;(statearr_29119[8] = inst_28979__$1);
return statearr_29119;
})();if(cljs.core.truth_(inst_28980))
{var statearr_29120_29204 = state_29111__$1;(statearr_29120_29204[1] = 5);
} else
{var statearr_29121_29205 = state_29111__$1;(statearr_29121_29205[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 36))
{var inst_29068 = (state_29111[9]);var inst_29072 = cljs.core.chunk_first.call(null,inst_29068);var inst_29073 = cljs.core.chunk_rest.call(null,inst_29068);var inst_29074 = cljs.core.count.call(null,inst_29072);var inst_29047 = inst_29073;var inst_29048 = inst_29072;var inst_29049 = inst_29074;var inst_29050 = 0;var state_29111__$1 = (function (){var statearr_29122 = state_29111;(statearr_29122[10] = inst_29050);
(statearr_29122[11] = inst_29048);
(statearr_29122[12] = inst_29049);
(statearr_29122[13] = inst_29047);
return statearr_29122;
})();var statearr_29123_29206 = state_29111__$1;(statearr_29123_29206[2] = null);
(statearr_29123_29206[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 5))
{var inst_28986 = cljs.core.deref.call(null,cs);var inst_28987 = cljs.core.seq.call(null,inst_28986);var inst_28988 = inst_28987;var inst_28989 = null;var inst_28990 = 0;var inst_28991 = 0;var state_29111__$1 = (function (){var statearr_29124 = state_29111;(statearr_29124[14] = inst_28989);
(statearr_29124[15] = inst_28990);
(statearr_29124[16] = inst_28988);
(statearr_29124[17] = inst_28991);
return statearr_29124;
})();var statearr_29125_29207 = state_29111__$1;(statearr_29125_29207[2] = null);
(statearr_29125_29207[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 37))
{var inst_29068 = (state_29111[9]);var inst_29077 = cljs.core.first.call(null,inst_29068);var state_29111__$1 = (function (){var statearr_29126 = state_29111;(statearr_29126[18] = inst_29077);
return statearr_29126;
})();var statearr_29127_29208 = state_29111__$1;(statearr_29127_29208[2] = null);
(statearr_29127_29208[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 6))
{var inst_29039 = (state_29111[19]);var inst_29038 = cljs.core.deref.call(null,cs);var inst_29039__$1 = cljs.core.keys.call(null,inst_29038);var inst_29040 = cljs.core.count.call(null,inst_29039__$1);var inst_29041 = cljs.core.reset_BANG_.call(null,dctr,inst_29040);var inst_29046 = cljs.core.seq.call(null,inst_29039__$1);var inst_29047 = inst_29046;var inst_29048 = null;var inst_29049 = 0;var inst_29050 = 0;var state_29111__$1 = (function (){var statearr_29128 = state_29111;(statearr_29128[20] = inst_29041);
(statearr_29128[19] = inst_29039__$1);
(statearr_29128[10] = inst_29050);
(statearr_29128[11] = inst_29048);
(statearr_29128[12] = inst_29049);
(statearr_29128[13] = inst_29047);
return statearr_29128;
})();var statearr_29129_29209 = state_29111__$1;(statearr_29129_29209[2] = null);
(statearr_29129_29209[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 38))
{var inst_29090 = (state_29111[2]);var state_29111__$1 = state_29111;var statearr_29130_29210 = state_29111__$1;(statearr_29130_29210[2] = inst_29090);
(statearr_29130_29210[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 7))
{var inst_29107 = (state_29111[2]);var state_29111__$1 = state_29111;var statearr_29131_29211 = state_29111__$1;(statearr_29131_29211[2] = inst_29107);
(statearr_29131_29211[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 39))
{var inst_29068 = (state_29111[9]);var inst_29086 = (state_29111[2]);var inst_29087 = cljs.core.next.call(null,inst_29068);var inst_29047 = inst_29087;var inst_29048 = null;var inst_29049 = 0;var inst_29050 = 0;var state_29111__$1 = (function (){var statearr_29132 = state_29111;(statearr_29132[21] = inst_29086);
(statearr_29132[10] = inst_29050);
(statearr_29132[11] = inst_29048);
(statearr_29132[12] = inst_29049);
(statearr_29132[13] = inst_29047);
return statearr_29132;
})();var statearr_29133_29212 = state_29111__$1;(statearr_29133_29212[2] = null);
(statearr_29133_29212[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 8))
{var inst_28990 = (state_29111[15]);var inst_28991 = (state_29111[17]);var inst_28993 = (inst_28991 < inst_28990);var inst_28994 = inst_28993;var state_29111__$1 = state_29111;if(cljs.core.truth_(inst_28994))
{var statearr_29134_29213 = state_29111__$1;(statearr_29134_29213[1] = 10);
} else
{var statearr_29135_29214 = state_29111__$1;(statearr_29135_29214[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 40))
{var inst_29077 = (state_29111[18]);var inst_29078 = (state_29111[2]);var inst_29079 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29080 = cljs.core.async.untap_STAR_.call(null,m,inst_29077);var state_29111__$1 = (function (){var statearr_29136 = state_29111;(statearr_29136[22] = inst_29078);
(statearr_29136[23] = inst_29079);
return statearr_29136;
})();var statearr_29137_29215 = state_29111__$1;(statearr_29137_29215[2] = inst_29080);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29111__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 9))
{var inst_29036 = (state_29111[2]);var state_29111__$1 = state_29111;var statearr_29138_29216 = state_29111__$1;(statearr_29138_29216[2] = inst_29036);
(statearr_29138_29216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 41))
{var inst_29077 = (state_29111[18]);var inst_28979 = (state_29111[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29111,40,Object,null,39);var inst_29084 = cljs.core.async.put_BANG_.call(null,inst_29077,inst_28979,done);var state_29111__$1 = state_29111;var statearr_29139_29217 = state_29111__$1;(statearr_29139_29217[2] = inst_29084);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29111__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 10))
{var inst_28989 = (state_29111[14]);var inst_28991 = (state_29111[17]);var inst_28997 = cljs.core._nth.call(null,inst_28989,inst_28991);var inst_28998 = cljs.core.nth.call(null,inst_28997,0,null);var inst_28999 = cljs.core.nth.call(null,inst_28997,1,null);var state_29111__$1 = (function (){var statearr_29140 = state_29111;(statearr_29140[24] = inst_28998);
return statearr_29140;
})();if(cljs.core.truth_(inst_28999))
{var statearr_29141_29218 = state_29111__$1;(statearr_29141_29218[1] = 13);
} else
{var statearr_29142_29219 = state_29111__$1;(statearr_29142_29219[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 42))
{var state_29111__$1 = state_29111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29111__$1,45,dchan);
} else
{if((state_val_29112 === 11))
{var inst_29008 = (state_29111[25]);var inst_28988 = (state_29111[16]);var inst_29008__$1 = cljs.core.seq.call(null,inst_28988);var state_29111__$1 = (function (){var statearr_29143 = state_29111;(statearr_29143[25] = inst_29008__$1);
return statearr_29143;
})();if(inst_29008__$1)
{var statearr_29144_29220 = state_29111__$1;(statearr_29144_29220[1] = 16);
} else
{var statearr_29145_29221 = state_29111__$1;(statearr_29145_29221[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 43))
{var state_29111__$1 = state_29111;var statearr_29146_29222 = state_29111__$1;(statearr_29146_29222[2] = null);
(statearr_29146_29222[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 12))
{var inst_29034 = (state_29111[2]);var state_29111__$1 = state_29111;var statearr_29147_29223 = state_29111__$1;(statearr_29147_29223[2] = inst_29034);
(statearr_29147_29223[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 44))
{var inst_29104 = (state_29111[2]);var state_29111__$1 = (function (){var statearr_29148 = state_29111;(statearr_29148[26] = inst_29104);
return statearr_29148;
})();var statearr_29149_29224 = state_29111__$1;(statearr_29149_29224[2] = null);
(statearr_29149_29224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 13))
{var inst_28998 = (state_29111[24]);var inst_29001 = cljs.core.async.close_BANG_.call(null,inst_28998);var state_29111__$1 = state_29111;var statearr_29150_29225 = state_29111__$1;(statearr_29150_29225[2] = inst_29001);
(statearr_29150_29225[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 45))
{var inst_29101 = (state_29111[2]);var state_29111__$1 = state_29111;var statearr_29154_29226 = state_29111__$1;(statearr_29154_29226[2] = inst_29101);
(statearr_29154_29226[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 14))
{var state_29111__$1 = state_29111;var statearr_29155_29227 = state_29111__$1;(statearr_29155_29227[2] = null);
(statearr_29155_29227[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 15))
{var inst_28989 = (state_29111[14]);var inst_28990 = (state_29111[15]);var inst_28988 = (state_29111[16]);var inst_28991 = (state_29111[17]);var inst_29004 = (state_29111[2]);var inst_29005 = (inst_28991 + 1);var tmp29151 = inst_28989;var tmp29152 = inst_28990;var tmp29153 = inst_28988;var inst_28988__$1 = tmp29153;var inst_28989__$1 = tmp29151;var inst_28990__$1 = tmp29152;var inst_28991__$1 = inst_29005;var state_29111__$1 = (function (){var statearr_29156 = state_29111;(statearr_29156[27] = inst_29004);
(statearr_29156[14] = inst_28989__$1);
(statearr_29156[15] = inst_28990__$1);
(statearr_29156[16] = inst_28988__$1);
(statearr_29156[17] = inst_28991__$1);
return statearr_29156;
})();var statearr_29157_29228 = state_29111__$1;(statearr_29157_29228[2] = null);
(statearr_29157_29228[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 16))
{var inst_29008 = (state_29111[25]);var inst_29010 = cljs.core.chunked_seq_QMARK_.call(null,inst_29008);var state_29111__$1 = state_29111;if(inst_29010)
{var statearr_29158_29229 = state_29111__$1;(statearr_29158_29229[1] = 19);
} else
{var statearr_29159_29230 = state_29111__$1;(statearr_29159_29230[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 17))
{var state_29111__$1 = state_29111;var statearr_29160_29231 = state_29111__$1;(statearr_29160_29231[2] = null);
(statearr_29160_29231[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 18))
{var inst_29032 = (state_29111[2]);var state_29111__$1 = state_29111;var statearr_29161_29232 = state_29111__$1;(statearr_29161_29232[2] = inst_29032);
(statearr_29161_29232[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 19))
{var inst_29008 = (state_29111[25]);var inst_29012 = cljs.core.chunk_first.call(null,inst_29008);var inst_29013 = cljs.core.chunk_rest.call(null,inst_29008);var inst_29014 = cljs.core.count.call(null,inst_29012);var inst_28988 = inst_29013;var inst_28989 = inst_29012;var inst_28990 = inst_29014;var inst_28991 = 0;var state_29111__$1 = (function (){var statearr_29162 = state_29111;(statearr_29162[14] = inst_28989);
(statearr_29162[15] = inst_28990);
(statearr_29162[16] = inst_28988);
(statearr_29162[17] = inst_28991);
return statearr_29162;
})();var statearr_29163_29233 = state_29111__$1;(statearr_29163_29233[2] = null);
(statearr_29163_29233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 20))
{var inst_29008 = (state_29111[25]);var inst_29018 = cljs.core.first.call(null,inst_29008);var inst_29019 = cljs.core.nth.call(null,inst_29018,0,null);var inst_29020 = cljs.core.nth.call(null,inst_29018,1,null);var state_29111__$1 = (function (){var statearr_29164 = state_29111;(statearr_29164[28] = inst_29019);
return statearr_29164;
})();if(cljs.core.truth_(inst_29020))
{var statearr_29165_29234 = state_29111__$1;(statearr_29165_29234[1] = 22);
} else
{var statearr_29166_29235 = state_29111__$1;(statearr_29166_29235[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 21))
{var inst_29029 = (state_29111[2]);var state_29111__$1 = state_29111;var statearr_29167_29236 = state_29111__$1;(statearr_29167_29236[2] = inst_29029);
(statearr_29167_29236[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 22))
{var inst_29019 = (state_29111[28]);var inst_29022 = cljs.core.async.close_BANG_.call(null,inst_29019);var state_29111__$1 = state_29111;var statearr_29168_29237 = state_29111__$1;(statearr_29168_29237[2] = inst_29022);
(statearr_29168_29237[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 23))
{var state_29111__$1 = state_29111;var statearr_29169_29238 = state_29111__$1;(statearr_29169_29238[2] = null);
(statearr_29169_29238[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 24))
{var inst_29008 = (state_29111[25]);var inst_29025 = (state_29111[2]);var inst_29026 = cljs.core.next.call(null,inst_29008);var inst_28988 = inst_29026;var inst_28989 = null;var inst_28990 = 0;var inst_28991 = 0;var state_29111__$1 = (function (){var statearr_29170 = state_29111;(statearr_29170[29] = inst_29025);
(statearr_29170[14] = inst_28989);
(statearr_29170[15] = inst_28990);
(statearr_29170[16] = inst_28988);
(statearr_29170[17] = inst_28991);
return statearr_29170;
})();var statearr_29171_29239 = state_29111__$1;(statearr_29171_29239[2] = null);
(statearr_29171_29239[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 25))
{var inst_29050 = (state_29111[10]);var inst_29049 = (state_29111[12]);var inst_29052 = (inst_29050 < inst_29049);var inst_29053 = inst_29052;var state_29111__$1 = state_29111;if(cljs.core.truth_(inst_29053))
{var statearr_29172_29240 = state_29111__$1;(statearr_29172_29240[1] = 27);
} else
{var statearr_29173_29241 = state_29111__$1;(statearr_29173_29241[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 26))
{var inst_29039 = (state_29111[19]);var inst_29097 = (state_29111[2]);var inst_29098 = cljs.core.seq.call(null,inst_29039);var state_29111__$1 = (function (){var statearr_29174 = state_29111;(statearr_29174[30] = inst_29097);
return statearr_29174;
})();if(inst_29098)
{var statearr_29175_29242 = state_29111__$1;(statearr_29175_29242[1] = 42);
} else
{var statearr_29176_29243 = state_29111__$1;(statearr_29176_29243[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 27))
{var inst_29050 = (state_29111[10]);var inst_29048 = (state_29111[11]);var inst_29055 = cljs.core._nth.call(null,inst_29048,inst_29050);var state_29111__$1 = (function (){var statearr_29177 = state_29111;(statearr_29177[7] = inst_29055);
return statearr_29177;
})();var statearr_29178_29244 = state_29111__$1;(statearr_29178_29244[2] = null);
(statearr_29178_29244[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 28))
{var inst_29068 = (state_29111[9]);var inst_29047 = (state_29111[13]);var inst_29068__$1 = cljs.core.seq.call(null,inst_29047);var state_29111__$1 = (function (){var statearr_29182 = state_29111;(statearr_29182[9] = inst_29068__$1);
return statearr_29182;
})();if(inst_29068__$1)
{var statearr_29183_29245 = state_29111__$1;(statearr_29183_29245[1] = 33);
} else
{var statearr_29184_29246 = state_29111__$1;(statearr_29184_29246[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 29))
{var inst_29095 = (state_29111[2]);var state_29111__$1 = state_29111;var statearr_29185_29247 = state_29111__$1;(statearr_29185_29247[2] = inst_29095);
(statearr_29185_29247[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 30))
{var inst_29050 = (state_29111[10]);var inst_29048 = (state_29111[11]);var inst_29049 = (state_29111[12]);var inst_29047 = (state_29111[13]);var inst_29064 = (state_29111[2]);var inst_29065 = (inst_29050 + 1);var tmp29179 = inst_29048;var tmp29180 = inst_29049;var tmp29181 = inst_29047;var inst_29047__$1 = tmp29181;var inst_29048__$1 = tmp29179;var inst_29049__$1 = tmp29180;var inst_29050__$1 = inst_29065;var state_29111__$1 = (function (){var statearr_29186 = state_29111;(statearr_29186[31] = inst_29064);
(statearr_29186[10] = inst_29050__$1);
(statearr_29186[11] = inst_29048__$1);
(statearr_29186[12] = inst_29049__$1);
(statearr_29186[13] = inst_29047__$1);
return statearr_29186;
})();var statearr_29187_29248 = state_29111__$1;(statearr_29187_29248[2] = null);
(statearr_29187_29248[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29112 === 31))
{var inst_29055 = (state_29111[7]);var inst_29056 = (state_29111[2]);var inst_29057 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29058 = cljs.core.async.untap_STAR_.call(null,m,inst_29055);var state_29111__$1 = (function (){var statearr_29188 = state_29111;(statearr_29188[32] = inst_29056);
(statearr_29188[33] = inst_29057);
return statearr_29188;
})();var statearr_29189_29249 = state_29111__$1;(statearr_29189_29249[2] = inst_29058);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29111__$1);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_29193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29193[0] = state_machine__10730__auto__);
(statearr_29193[1] = 1);
return statearr_29193;
});
var state_machine__10730__auto____1 = (function (state_29111){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_29111);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e29194){if((e29194 instanceof Object))
{var ex__10733__auto__ = e29194;var statearr_29195_29250 = state_29111;(statearr_29195_29250[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29251 = state_29111;
state_29111 = G__29251;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_29111){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_29111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_29196 = f__10794__auto__.call(null);(statearr_29196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___29197);
return statearr_29196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.Mix = (function (){var obj29253 = {};return obj29253;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t29363 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29363 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta29364){
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
this.meta29364 = meta29364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29363.cljs$lang$type = true;
cljs.core.async.t29363.cljs$lang$ctorStr = "cljs.core.async/t29363";
cljs.core.async.t29363.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t29363");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29363.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t29363.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29363.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29363.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29363.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29363.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29363.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29363.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29365){var self__ = this;
var _29365__$1 = this;return self__.meta29364;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29365,meta29364__$1){var self__ = this;
var _29365__$1 = this;return (new cljs.core.async.t29363(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta29364__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t29363 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29363(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta29364){return (new cljs.core.async.t29363(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta29364));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t29363(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10793__auto___29472 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_29430){var state_val_29431 = (state_29430[1]);if((state_val_29431 === 1))
{var inst_29369 = (state_29430[7]);var inst_29369__$1 = calc_state.call(null);var inst_29370 = cljs.core.seq_QMARK_.call(null,inst_29369__$1);var state_29430__$1 = (function (){var statearr_29432 = state_29430;(statearr_29432[7] = inst_29369__$1);
return statearr_29432;
})();if(inst_29370)
{var statearr_29433_29473 = state_29430__$1;(statearr_29433_29473[1] = 2);
} else
{var statearr_29434_29474 = state_29430__$1;(statearr_29434_29474[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 2))
{var inst_29369 = (state_29430[7]);var inst_29372 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29369);var state_29430__$1 = state_29430;var statearr_29435_29475 = state_29430__$1;(statearr_29435_29475[2] = inst_29372);
(statearr_29435_29475[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 3))
{var inst_29369 = (state_29430[7]);var state_29430__$1 = state_29430;var statearr_29436_29476 = state_29430__$1;(statearr_29436_29476[2] = inst_29369);
(statearr_29436_29476[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 4))
{var inst_29369 = (state_29430[7]);var inst_29375 = (state_29430[2]);var inst_29376 = cljs.core.get.call(null,inst_29375,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_29377 = cljs.core.get.call(null,inst_29375,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_29378 = cljs.core.get.call(null,inst_29375,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_29379 = inst_29369;var state_29430__$1 = (function (){var statearr_29437 = state_29430;(statearr_29437[8] = inst_29378);
(statearr_29437[9] = inst_29379);
(statearr_29437[10] = inst_29377);
(statearr_29437[11] = inst_29376);
return statearr_29437;
})();var statearr_29438_29477 = state_29430__$1;(statearr_29438_29477[2] = null);
(statearr_29438_29477[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 5))
{var inst_29379 = (state_29430[9]);var inst_29382 = cljs.core.seq_QMARK_.call(null,inst_29379);var state_29430__$1 = state_29430;if(inst_29382)
{var statearr_29439_29478 = state_29430__$1;(statearr_29439_29478[1] = 7);
} else
{var statearr_29440_29479 = state_29430__$1;(statearr_29440_29479[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 6))
{var inst_29428 = (state_29430[2]);var state_29430__$1 = state_29430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29430__$1,inst_29428);
} else
{if((state_val_29431 === 7))
{var inst_29379 = (state_29430[9]);var inst_29384 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29379);var state_29430__$1 = state_29430;var statearr_29441_29480 = state_29430__$1;(statearr_29441_29480[2] = inst_29384);
(statearr_29441_29480[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 8))
{var inst_29379 = (state_29430[9]);var state_29430__$1 = state_29430;var statearr_29442_29481 = state_29430__$1;(statearr_29442_29481[2] = inst_29379);
(statearr_29442_29481[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 9))
{var inst_29387 = (state_29430[12]);var inst_29387__$1 = (state_29430[2]);var inst_29388 = cljs.core.get.call(null,inst_29387__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_29389 = cljs.core.get.call(null,inst_29387__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_29390 = cljs.core.get.call(null,inst_29387__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_29430__$1 = (function (){var statearr_29443 = state_29430;(statearr_29443[13] = inst_29390);
(statearr_29443[14] = inst_29389);
(statearr_29443[12] = inst_29387__$1);
return statearr_29443;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29430__$1,10,inst_29388);
} else
{if((state_val_29431 === 10))
{var inst_29394 = (state_29430[15]);var inst_29395 = (state_29430[16]);var inst_29393 = (state_29430[2]);var inst_29394__$1 = cljs.core.nth.call(null,inst_29393,0,null);var inst_29395__$1 = cljs.core.nth.call(null,inst_29393,1,null);var inst_29396 = (inst_29394__$1 == null);var inst_29397 = cljs.core._EQ_.call(null,inst_29395__$1,change);var inst_29398 = (inst_29396) || (inst_29397);var state_29430__$1 = (function (){var statearr_29444 = state_29430;(statearr_29444[15] = inst_29394__$1);
(statearr_29444[16] = inst_29395__$1);
return statearr_29444;
})();if(cljs.core.truth_(inst_29398))
{var statearr_29445_29482 = state_29430__$1;(statearr_29445_29482[1] = 11);
} else
{var statearr_29446_29483 = state_29430__$1;(statearr_29446_29483[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 11))
{var inst_29394 = (state_29430[15]);var inst_29400 = (inst_29394 == null);var state_29430__$1 = state_29430;if(cljs.core.truth_(inst_29400))
{var statearr_29447_29484 = state_29430__$1;(statearr_29447_29484[1] = 14);
} else
{var statearr_29448_29485 = state_29430__$1;(statearr_29448_29485[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 12))
{var inst_29390 = (state_29430[13]);var inst_29395 = (state_29430[16]);var inst_29409 = (state_29430[17]);var inst_29409__$1 = inst_29390.call(null,inst_29395);var state_29430__$1 = (function (){var statearr_29449 = state_29430;(statearr_29449[17] = inst_29409__$1);
return statearr_29449;
})();if(cljs.core.truth_(inst_29409__$1))
{var statearr_29450_29486 = state_29430__$1;(statearr_29450_29486[1] = 17);
} else
{var statearr_29451_29487 = state_29430__$1;(statearr_29451_29487[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 13))
{var inst_29426 = (state_29430[2]);var state_29430__$1 = state_29430;var statearr_29452_29488 = state_29430__$1;(statearr_29452_29488[2] = inst_29426);
(statearr_29452_29488[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 14))
{var inst_29395 = (state_29430[16]);var inst_29402 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29395);var state_29430__$1 = state_29430;var statearr_29453_29489 = state_29430__$1;(statearr_29453_29489[2] = inst_29402);
(statearr_29453_29489[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 15))
{var state_29430__$1 = state_29430;var statearr_29454_29490 = state_29430__$1;(statearr_29454_29490[2] = null);
(statearr_29454_29490[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 16))
{var inst_29405 = (state_29430[2]);var inst_29406 = calc_state.call(null);var inst_29379 = inst_29406;var state_29430__$1 = (function (){var statearr_29455 = state_29430;(statearr_29455[9] = inst_29379);
(statearr_29455[18] = inst_29405);
return statearr_29455;
})();var statearr_29456_29491 = state_29430__$1;(statearr_29456_29491[2] = null);
(statearr_29456_29491[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 17))
{var inst_29409 = (state_29430[17]);var state_29430__$1 = state_29430;var statearr_29457_29492 = state_29430__$1;(statearr_29457_29492[2] = inst_29409);
(statearr_29457_29492[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 18))
{var inst_29390 = (state_29430[13]);var inst_29389 = (state_29430[14]);var inst_29395 = (state_29430[16]);var inst_29412 = cljs.core.empty_QMARK_.call(null,inst_29390);var inst_29413 = inst_29389.call(null,inst_29395);var inst_29414 = cljs.core.not.call(null,inst_29413);var inst_29415 = (inst_29412) && (inst_29414);var state_29430__$1 = state_29430;var statearr_29458_29493 = state_29430__$1;(statearr_29458_29493[2] = inst_29415);
(statearr_29458_29493[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 19))
{var inst_29417 = (state_29430[2]);var state_29430__$1 = state_29430;if(cljs.core.truth_(inst_29417))
{var statearr_29459_29494 = state_29430__$1;(statearr_29459_29494[1] = 20);
} else
{var statearr_29460_29495 = state_29430__$1;(statearr_29460_29495[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 20))
{var inst_29394 = (state_29430[15]);var state_29430__$1 = state_29430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29430__$1,23,out,inst_29394);
} else
{if((state_val_29431 === 21))
{var state_29430__$1 = state_29430;var statearr_29461_29496 = state_29430__$1;(statearr_29461_29496[2] = null);
(statearr_29461_29496[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 22))
{var inst_29387 = (state_29430[12]);var inst_29423 = (state_29430[2]);var inst_29379 = inst_29387;var state_29430__$1 = (function (){var statearr_29462 = state_29430;(statearr_29462[9] = inst_29379);
(statearr_29462[19] = inst_29423);
return statearr_29462;
})();var statearr_29463_29497 = state_29430__$1;(statearr_29463_29497[2] = null);
(statearr_29463_29497[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29431 === 23))
{var inst_29420 = (state_29430[2]);var state_29430__$1 = state_29430;var statearr_29464_29498 = state_29430__$1;(statearr_29464_29498[2] = inst_29420);
(statearr_29464_29498[1] = 22);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_29468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29468[0] = state_machine__10730__auto__);
(statearr_29468[1] = 1);
return statearr_29468;
});
var state_machine__10730__auto____1 = (function (state_29430){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_29430);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e29469){if((e29469 instanceof Object))
{var ex__10733__auto__ = e29469;var statearr_29470_29499 = state_29430;(statearr_29470_29499[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29500 = state_29430;
state_29430 = G__29500;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_29430){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_29430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_29471 = f__10794__auto__.call(null);(statearr_29471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___29472);
return statearr_29471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.Pub = (function (){var obj29502 = {};return obj29502;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
return (function (topic){var or__8198__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8198__auto__,mults){
return (function (p1__29503_SHARP_){if(cljs.core.truth_(p1__29503_SHARP_.call(null,topic)))
{return p1__29503_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29503_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8198__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29628 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29628 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29629){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29629 = meta29629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29628.cljs$lang$type = true;
cljs.core.async.t29628.cljs$lang$ctorStr = "cljs.core.async/t29628";
cljs.core.async.t29628.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t29628");
});})(mults,ensure_mult))
;
cljs.core.async.t29628.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29628.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29628.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29628.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29628.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29628.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29628.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29630){var self__ = this;
var _29630__$1 = this;return self__.meta29629;
});})(mults,ensure_mult))
;
cljs.core.async.t29628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29630,meta29629__$1){var self__ = this;
var _29630__$1 = this;return (new cljs.core.async.t29628(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29629__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29628 = ((function (mults,ensure_mult){
return (function __GT_t29628(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29629){return (new cljs.core.async.t29628(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29629));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29628(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10793__auto___29752 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_29704){var state_val_29705 = (state_29704[1]);if((state_val_29705 === 1))
{var state_29704__$1 = state_29704;var statearr_29706_29753 = state_29704__$1;(statearr_29706_29753[2] = null);
(statearr_29706_29753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 2))
{var state_29704__$1 = state_29704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29704__$1,4,ch);
} else
{if((state_val_29705 === 3))
{var inst_29702 = (state_29704[2]);var state_29704__$1 = state_29704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29704__$1,inst_29702);
} else
{if((state_val_29705 === 4))
{var inst_29633 = (state_29704[7]);var inst_29633__$1 = (state_29704[2]);var inst_29634 = (inst_29633__$1 == null);var state_29704__$1 = (function (){var statearr_29707 = state_29704;(statearr_29707[7] = inst_29633__$1);
return statearr_29707;
})();if(cljs.core.truth_(inst_29634))
{var statearr_29708_29754 = state_29704__$1;(statearr_29708_29754[1] = 5);
} else
{var statearr_29709_29755 = state_29704__$1;(statearr_29709_29755[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 5))
{var inst_29640 = cljs.core.deref.call(null,mults);var inst_29641 = cljs.core.vals.call(null,inst_29640);var inst_29642 = cljs.core.seq.call(null,inst_29641);var inst_29643 = inst_29642;var inst_29644 = null;var inst_29645 = 0;var inst_29646 = 0;var state_29704__$1 = (function (){var statearr_29710 = state_29704;(statearr_29710[8] = inst_29646);
(statearr_29710[9] = inst_29644);
(statearr_29710[10] = inst_29645);
(statearr_29710[11] = inst_29643);
return statearr_29710;
})();var statearr_29711_29756 = state_29704__$1;(statearr_29711_29756[2] = null);
(statearr_29711_29756[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 6))
{var inst_29681 = (state_29704[12]);var inst_29633 = (state_29704[7]);var inst_29683 = (state_29704[13]);var inst_29681__$1 = topic_fn.call(null,inst_29633);var inst_29682 = cljs.core.deref.call(null,mults);var inst_29683__$1 = cljs.core.get.call(null,inst_29682,inst_29681__$1);var state_29704__$1 = (function (){var statearr_29712 = state_29704;(statearr_29712[12] = inst_29681__$1);
(statearr_29712[13] = inst_29683__$1);
return statearr_29712;
})();if(cljs.core.truth_(inst_29683__$1))
{var statearr_29713_29757 = state_29704__$1;(statearr_29713_29757[1] = 19);
} else
{var statearr_29714_29758 = state_29704__$1;(statearr_29714_29758[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 7))
{var inst_29700 = (state_29704[2]);var state_29704__$1 = state_29704;var statearr_29715_29759 = state_29704__$1;(statearr_29715_29759[2] = inst_29700);
(statearr_29715_29759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 8))
{var inst_29646 = (state_29704[8]);var inst_29645 = (state_29704[10]);var inst_29648 = (inst_29646 < inst_29645);var inst_29649 = inst_29648;var state_29704__$1 = state_29704;if(cljs.core.truth_(inst_29649))
{var statearr_29719_29760 = state_29704__$1;(statearr_29719_29760[1] = 10);
} else
{var statearr_29720_29761 = state_29704__$1;(statearr_29720_29761[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 9))
{var inst_29679 = (state_29704[2]);var state_29704__$1 = state_29704;var statearr_29721_29762 = state_29704__$1;(statearr_29721_29762[2] = inst_29679);
(statearr_29721_29762[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 10))
{var inst_29646 = (state_29704[8]);var inst_29644 = (state_29704[9]);var inst_29645 = (state_29704[10]);var inst_29643 = (state_29704[11]);var inst_29651 = cljs.core._nth.call(null,inst_29644,inst_29646);var inst_29652 = cljs.core.async.muxch_STAR_.call(null,inst_29651);var inst_29653 = cljs.core.async.close_BANG_.call(null,inst_29652);var inst_29654 = (inst_29646 + 1);var tmp29716 = inst_29644;var tmp29717 = inst_29645;var tmp29718 = inst_29643;var inst_29643__$1 = tmp29718;var inst_29644__$1 = tmp29716;var inst_29645__$1 = tmp29717;var inst_29646__$1 = inst_29654;var state_29704__$1 = (function (){var statearr_29722 = state_29704;(statearr_29722[14] = inst_29653);
(statearr_29722[8] = inst_29646__$1);
(statearr_29722[9] = inst_29644__$1);
(statearr_29722[10] = inst_29645__$1);
(statearr_29722[11] = inst_29643__$1);
return statearr_29722;
})();var statearr_29723_29763 = state_29704__$1;(statearr_29723_29763[2] = null);
(statearr_29723_29763[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 11))
{var inst_29657 = (state_29704[15]);var inst_29643 = (state_29704[11]);var inst_29657__$1 = cljs.core.seq.call(null,inst_29643);var state_29704__$1 = (function (){var statearr_29724 = state_29704;(statearr_29724[15] = inst_29657__$1);
return statearr_29724;
})();if(inst_29657__$1)
{var statearr_29725_29764 = state_29704__$1;(statearr_29725_29764[1] = 13);
} else
{var statearr_29726_29765 = state_29704__$1;(statearr_29726_29765[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 12))
{var inst_29677 = (state_29704[2]);var state_29704__$1 = state_29704;var statearr_29727_29766 = state_29704__$1;(statearr_29727_29766[2] = inst_29677);
(statearr_29727_29766[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 13))
{var inst_29657 = (state_29704[15]);var inst_29659 = cljs.core.chunked_seq_QMARK_.call(null,inst_29657);var state_29704__$1 = state_29704;if(inst_29659)
{var statearr_29728_29767 = state_29704__$1;(statearr_29728_29767[1] = 16);
} else
{var statearr_29729_29768 = state_29704__$1;(statearr_29729_29768[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 14))
{var state_29704__$1 = state_29704;var statearr_29730_29769 = state_29704__$1;(statearr_29730_29769[2] = null);
(statearr_29730_29769[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 15))
{var inst_29675 = (state_29704[2]);var state_29704__$1 = state_29704;var statearr_29731_29770 = state_29704__$1;(statearr_29731_29770[2] = inst_29675);
(statearr_29731_29770[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 16))
{var inst_29657 = (state_29704[15]);var inst_29661 = cljs.core.chunk_first.call(null,inst_29657);var inst_29662 = cljs.core.chunk_rest.call(null,inst_29657);var inst_29663 = cljs.core.count.call(null,inst_29661);var inst_29643 = inst_29662;var inst_29644 = inst_29661;var inst_29645 = inst_29663;var inst_29646 = 0;var state_29704__$1 = (function (){var statearr_29732 = state_29704;(statearr_29732[8] = inst_29646);
(statearr_29732[9] = inst_29644);
(statearr_29732[10] = inst_29645);
(statearr_29732[11] = inst_29643);
return statearr_29732;
})();var statearr_29733_29771 = state_29704__$1;(statearr_29733_29771[2] = null);
(statearr_29733_29771[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 17))
{var inst_29657 = (state_29704[15]);var inst_29666 = cljs.core.first.call(null,inst_29657);var inst_29667 = cljs.core.async.muxch_STAR_.call(null,inst_29666);var inst_29668 = cljs.core.async.close_BANG_.call(null,inst_29667);var inst_29669 = cljs.core.next.call(null,inst_29657);var inst_29643 = inst_29669;var inst_29644 = null;var inst_29645 = 0;var inst_29646 = 0;var state_29704__$1 = (function (){var statearr_29734 = state_29704;(statearr_29734[16] = inst_29668);
(statearr_29734[8] = inst_29646);
(statearr_29734[9] = inst_29644);
(statearr_29734[10] = inst_29645);
(statearr_29734[11] = inst_29643);
return statearr_29734;
})();var statearr_29735_29772 = state_29704__$1;(statearr_29735_29772[2] = null);
(statearr_29735_29772[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 18))
{var inst_29672 = (state_29704[2]);var state_29704__$1 = state_29704;var statearr_29736_29773 = state_29704__$1;(statearr_29736_29773[2] = inst_29672);
(statearr_29736_29773[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 19))
{var state_29704__$1 = state_29704;var statearr_29737_29774 = state_29704__$1;(statearr_29737_29774[2] = null);
(statearr_29737_29774[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 20))
{var state_29704__$1 = state_29704;var statearr_29738_29775 = state_29704__$1;(statearr_29738_29775[2] = null);
(statearr_29738_29775[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 21))
{var inst_29697 = (state_29704[2]);var state_29704__$1 = (function (){var statearr_29739 = state_29704;(statearr_29739[17] = inst_29697);
return statearr_29739;
})();var statearr_29740_29776 = state_29704__$1;(statearr_29740_29776[2] = null);
(statearr_29740_29776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 22))
{var inst_29694 = (state_29704[2]);var state_29704__$1 = state_29704;var statearr_29741_29777 = state_29704__$1;(statearr_29741_29777[2] = inst_29694);
(statearr_29741_29777[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 23))
{var inst_29681 = (state_29704[12]);var inst_29685 = (state_29704[2]);var inst_29686 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29681);var state_29704__$1 = (function (){var statearr_29742 = state_29704;(statearr_29742[18] = inst_29685);
return statearr_29742;
})();var statearr_29743_29778 = state_29704__$1;(statearr_29743_29778[2] = inst_29686);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29704__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29705 === 24))
{var inst_29633 = (state_29704[7]);var inst_29683 = (state_29704[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29704,23,Object,null,22);var inst_29690 = cljs.core.async.muxch_STAR_.call(null,inst_29683);var state_29704__$1 = state_29704;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29704__$1,25,inst_29690,inst_29633);
} else
{if((state_val_29705 === 25))
{var inst_29692 = (state_29704[2]);var state_29704__$1 = state_29704;var statearr_29744_29779 = state_29704__$1;(statearr_29744_29779[2] = inst_29692);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29704__$1);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_29748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29748[0] = state_machine__10730__auto__);
(statearr_29748[1] = 1);
return statearr_29748;
});
var state_machine__10730__auto____1 = (function (state_29704){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_29704);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e29749){if((e29749 instanceof Object))
{var ex__10733__auto__ = e29749;var statearr_29750_29780 = state_29704;(statearr_29750_29780[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29704);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29781 = state_29704;
state_29704 = G__29781;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_29704){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_29704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_29751 = f__10794__auto__.call(null);(statearr_29751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___29752);
return statearr_29751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
,cljs.core.range.call(null,cnt));var c__10793__auto___29918 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_29888){var state_val_29889 = (state_29888[1]);if((state_val_29889 === 1))
{var state_29888__$1 = state_29888;var statearr_29890_29919 = state_29888__$1;(statearr_29890_29919[2] = null);
(statearr_29890_29919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 2))
{var inst_29851 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29852 = 0;var state_29888__$1 = (function (){var statearr_29891 = state_29888;(statearr_29891[7] = inst_29851);
(statearr_29891[8] = inst_29852);
return statearr_29891;
})();var statearr_29892_29920 = state_29888__$1;(statearr_29892_29920[2] = null);
(statearr_29892_29920[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 3))
{var inst_29886 = (state_29888[2]);var state_29888__$1 = state_29888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29888__$1,inst_29886);
} else
{if((state_val_29889 === 4))
{var inst_29852 = (state_29888[8]);var inst_29854 = (inst_29852 < cnt);var state_29888__$1 = state_29888;if(cljs.core.truth_(inst_29854))
{var statearr_29893_29921 = state_29888__$1;(statearr_29893_29921[1] = 6);
} else
{var statearr_29894_29922 = state_29888__$1;(statearr_29894_29922[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 5))
{var inst_29872 = (state_29888[2]);var state_29888__$1 = (function (){var statearr_29895 = state_29888;(statearr_29895[9] = inst_29872);
return statearr_29895;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29888__$1,12,dchan);
} else
{if((state_val_29889 === 6))
{var state_29888__$1 = state_29888;var statearr_29896_29923 = state_29888__$1;(statearr_29896_29923[2] = null);
(statearr_29896_29923[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 7))
{var state_29888__$1 = state_29888;var statearr_29897_29924 = state_29888__$1;(statearr_29897_29924[2] = null);
(statearr_29897_29924[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 8))
{var inst_29870 = (state_29888[2]);var state_29888__$1 = state_29888;var statearr_29898_29925 = state_29888__$1;(statearr_29898_29925[2] = inst_29870);
(statearr_29898_29925[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 9))
{var inst_29852 = (state_29888[8]);var inst_29865 = (state_29888[2]);var inst_29866 = (inst_29852 + 1);var inst_29852__$1 = inst_29866;var state_29888__$1 = (function (){var statearr_29899 = state_29888;(statearr_29899[8] = inst_29852__$1);
(statearr_29899[10] = inst_29865);
return statearr_29899;
})();var statearr_29900_29926 = state_29888__$1;(statearr_29900_29926[2] = null);
(statearr_29900_29926[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 10))
{var inst_29856 = (state_29888[2]);var inst_29857 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29888__$1 = (function (){var statearr_29901 = state_29888;(statearr_29901[11] = inst_29856);
return statearr_29901;
})();var statearr_29902_29927 = state_29888__$1;(statearr_29902_29927[2] = inst_29857);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29888__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 11))
{var inst_29852 = (state_29888[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29888,10,Object,null,9);var inst_29861 = chs__$1.call(null,inst_29852);var inst_29862 = done.call(null,inst_29852);var inst_29863 = cljs.core.async.take_BANG_.call(null,inst_29861,inst_29862);var state_29888__$1 = state_29888;var statearr_29903_29928 = state_29888__$1;(statearr_29903_29928[2] = inst_29863);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29888__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 12))
{var inst_29874 = (state_29888[12]);var inst_29874__$1 = (state_29888[2]);var inst_29875 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29874__$1);var state_29888__$1 = (function (){var statearr_29904 = state_29888;(statearr_29904[12] = inst_29874__$1);
return statearr_29904;
})();if(cljs.core.truth_(inst_29875))
{var statearr_29905_29929 = state_29888__$1;(statearr_29905_29929[1] = 13);
} else
{var statearr_29906_29930 = state_29888__$1;(statearr_29906_29930[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 13))
{var inst_29877 = cljs.core.async.close_BANG_.call(null,out);var state_29888__$1 = state_29888;var statearr_29907_29931 = state_29888__$1;(statearr_29907_29931[2] = inst_29877);
(statearr_29907_29931[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 14))
{var inst_29874 = (state_29888[12]);var inst_29879 = cljs.core.apply.call(null,f,inst_29874);var state_29888__$1 = state_29888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29888__$1,16,out,inst_29879);
} else
{if((state_val_29889 === 15))
{var inst_29884 = (state_29888[2]);var state_29888__$1 = state_29888;var statearr_29908_29932 = state_29888__$1;(statearr_29908_29932[2] = inst_29884);
(statearr_29908_29932[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29889 === 16))
{var inst_29881 = (state_29888[2]);var state_29888__$1 = (function (){var statearr_29909 = state_29888;(statearr_29909[13] = inst_29881);
return statearr_29909;
})();var statearr_29910_29933 = state_29888__$1;(statearr_29910_29933[2] = null);
(statearr_29910_29933[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_29914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29914[0] = state_machine__10730__auto__);
(statearr_29914[1] = 1);
return statearr_29914;
});
var state_machine__10730__auto____1 = (function (state_29888){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_29888);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e29915){if((e29915 instanceof Object))
{var ex__10733__auto__ = e29915;var statearr_29916_29934 = state_29888;(statearr_29916_29934[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29888);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29935 = state_29888;
state_29888 = G__29935;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_29888){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_29888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_29917 = f__10794__auto__.call(null);(statearr_29917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___29918);
return statearr_29917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___30043 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_30019){var state_val_30020 = (state_30019[1]);if((state_val_30020 === 1))
{var inst_29990 = cljs.core.vec.call(null,chs);var inst_29991 = inst_29990;var state_30019__$1 = (function (){var statearr_30021 = state_30019;(statearr_30021[7] = inst_29991);
return statearr_30021;
})();var statearr_30022_30044 = state_30019__$1;(statearr_30022_30044[2] = null);
(statearr_30022_30044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30020 === 2))
{var inst_29991 = (state_30019[7]);var inst_29993 = cljs.core.count.call(null,inst_29991);var inst_29994 = (inst_29993 > 0);var state_30019__$1 = state_30019;if(cljs.core.truth_(inst_29994))
{var statearr_30023_30045 = state_30019__$1;(statearr_30023_30045[1] = 4);
} else
{var statearr_30024_30046 = state_30019__$1;(statearr_30024_30046[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30020 === 3))
{var inst_30017 = (state_30019[2]);var state_30019__$1 = state_30019;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30019__$1,inst_30017);
} else
{if((state_val_30020 === 4))
{var inst_29991 = (state_30019[7]);var state_30019__$1 = state_30019;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30019__$1,7,inst_29991);
} else
{if((state_val_30020 === 5))
{var inst_30013 = cljs.core.async.close_BANG_.call(null,out);var state_30019__$1 = state_30019;var statearr_30025_30047 = state_30019__$1;(statearr_30025_30047[2] = inst_30013);
(statearr_30025_30047[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30020 === 6))
{var inst_30015 = (state_30019[2]);var state_30019__$1 = state_30019;var statearr_30026_30048 = state_30019__$1;(statearr_30026_30048[2] = inst_30015);
(statearr_30026_30048[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30020 === 7))
{var inst_29999 = (state_30019[8]);var inst_29998 = (state_30019[9]);var inst_29998__$1 = (state_30019[2]);var inst_29999__$1 = cljs.core.nth.call(null,inst_29998__$1,0,null);var inst_30000 = cljs.core.nth.call(null,inst_29998__$1,1,null);var inst_30001 = (inst_29999__$1 == null);var state_30019__$1 = (function (){var statearr_30027 = state_30019;(statearr_30027[10] = inst_30000);
(statearr_30027[8] = inst_29999__$1);
(statearr_30027[9] = inst_29998__$1);
return statearr_30027;
})();if(cljs.core.truth_(inst_30001))
{var statearr_30028_30049 = state_30019__$1;(statearr_30028_30049[1] = 8);
} else
{var statearr_30029_30050 = state_30019__$1;(statearr_30029_30050[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30020 === 8))
{var inst_30000 = (state_30019[10]);var inst_29991 = (state_30019[7]);var inst_29999 = (state_30019[8]);var inst_29998 = (state_30019[9]);var inst_30003 = (function (){var c = inst_30000;var v = inst_29999;var vec__29996 = inst_29998;var cs = inst_29991;return ((function (c,v,vec__29996,cs,inst_30000,inst_29991,inst_29999,inst_29998,state_val_30020){
return (function (p1__29936_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__29936_SHARP_);
});
;})(c,v,vec__29996,cs,inst_30000,inst_29991,inst_29999,inst_29998,state_val_30020))
})();var inst_30004 = cljs.core.filterv.call(null,inst_30003,inst_29991);var inst_29991__$1 = inst_30004;var state_30019__$1 = (function (){var statearr_30030 = state_30019;(statearr_30030[7] = inst_29991__$1);
return statearr_30030;
})();var statearr_30031_30051 = state_30019__$1;(statearr_30031_30051[2] = null);
(statearr_30031_30051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30020 === 9))
{var inst_29999 = (state_30019[8]);var state_30019__$1 = state_30019;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30019__$1,11,out,inst_29999);
} else
{if((state_val_30020 === 10))
{var inst_30011 = (state_30019[2]);var state_30019__$1 = state_30019;var statearr_30033_30052 = state_30019__$1;(statearr_30033_30052[2] = inst_30011);
(statearr_30033_30052[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30020 === 11))
{var inst_29991 = (state_30019[7]);var inst_30008 = (state_30019[2]);var tmp30032 = inst_29991;var inst_29991__$1 = tmp30032;var state_30019__$1 = (function (){var statearr_30034 = state_30019;(statearr_30034[7] = inst_29991__$1);
(statearr_30034[11] = inst_30008);
return statearr_30034;
})();var statearr_30035_30053 = state_30019__$1;(statearr_30035_30053[2] = null);
(statearr_30035_30053[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_30039 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30039[0] = state_machine__10730__auto__);
(statearr_30039[1] = 1);
return statearr_30039;
});
var state_machine__10730__auto____1 = (function (state_30019){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_30019);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e30040){if((e30040 instanceof Object))
{var ex__10733__auto__ = e30040;var statearr_30041_30054 = state_30019;(statearr_30041_30054[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30019);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30040;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30055 = state_30019;
state_30019 = G__30055;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_30019){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_30019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_30042 = f__10794__auto__.call(null);(statearr_30042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___30043);
return statearr_30042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___30148 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_30125){var state_val_30126 = (state_30125[1]);if((state_val_30126 === 1))
{var inst_30102 = 0;var state_30125__$1 = (function (){var statearr_30127 = state_30125;(statearr_30127[7] = inst_30102);
return statearr_30127;
})();var statearr_30128_30149 = state_30125__$1;(statearr_30128_30149[2] = null);
(statearr_30128_30149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30126 === 2))
{var inst_30102 = (state_30125[7]);var inst_30104 = (inst_30102 < n);var state_30125__$1 = state_30125;if(cljs.core.truth_(inst_30104))
{var statearr_30129_30150 = state_30125__$1;(statearr_30129_30150[1] = 4);
} else
{var statearr_30130_30151 = state_30125__$1;(statearr_30130_30151[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30126 === 3))
{var inst_30122 = (state_30125[2]);var inst_30123 = cljs.core.async.close_BANG_.call(null,out);var state_30125__$1 = (function (){var statearr_30131 = state_30125;(statearr_30131[8] = inst_30122);
return statearr_30131;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30125__$1,inst_30123);
} else
{if((state_val_30126 === 4))
{var state_30125__$1 = state_30125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30125__$1,7,ch);
} else
{if((state_val_30126 === 5))
{var state_30125__$1 = state_30125;var statearr_30132_30152 = state_30125__$1;(statearr_30132_30152[2] = null);
(statearr_30132_30152[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30126 === 6))
{var inst_30120 = (state_30125[2]);var state_30125__$1 = state_30125;var statearr_30133_30153 = state_30125__$1;(statearr_30133_30153[2] = inst_30120);
(statearr_30133_30153[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30126 === 7))
{var inst_30107 = (state_30125[9]);var inst_30107__$1 = (state_30125[2]);var inst_30108 = (inst_30107__$1 == null);var inst_30109 = cljs.core.not.call(null,inst_30108);var state_30125__$1 = (function (){var statearr_30134 = state_30125;(statearr_30134[9] = inst_30107__$1);
return statearr_30134;
})();if(inst_30109)
{var statearr_30135_30154 = state_30125__$1;(statearr_30135_30154[1] = 8);
} else
{var statearr_30136_30155 = state_30125__$1;(statearr_30136_30155[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30126 === 8))
{var inst_30107 = (state_30125[9]);var state_30125__$1 = state_30125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30125__$1,11,out,inst_30107);
} else
{if((state_val_30126 === 9))
{var state_30125__$1 = state_30125;var statearr_30137_30156 = state_30125__$1;(statearr_30137_30156[2] = null);
(statearr_30137_30156[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30126 === 10))
{var inst_30117 = (state_30125[2]);var state_30125__$1 = state_30125;var statearr_30138_30157 = state_30125__$1;(statearr_30138_30157[2] = inst_30117);
(statearr_30138_30157[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30126 === 11))
{var inst_30102 = (state_30125[7]);var inst_30112 = (state_30125[2]);var inst_30113 = (inst_30102 + 1);var inst_30102__$1 = inst_30113;var state_30125__$1 = (function (){var statearr_30139 = state_30125;(statearr_30139[10] = inst_30112);
(statearr_30139[7] = inst_30102__$1);
return statearr_30139;
})();var statearr_30140_30158 = state_30125__$1;(statearr_30140_30158[2] = null);
(statearr_30140_30158[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_30144 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30144[0] = state_machine__10730__auto__);
(statearr_30144[1] = 1);
return statearr_30144;
});
var state_machine__10730__auto____1 = (function (state_30125){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_30125);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e30145){if((e30145 instanceof Object))
{var ex__10733__auto__ = e30145;var statearr_30146_30159 = state_30125;(statearr_30146_30159[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30160 = state_30125;
state_30125 = G__30160;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_30125){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_30125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_30147 = f__10794__auto__.call(null);(statearr_30147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___30148);
return statearr_30147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___30257 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_30232){var state_val_30233 = (state_30232[1]);if((state_val_30233 === 1))
{var inst_30209 = null;var state_30232__$1 = (function (){var statearr_30234 = state_30232;(statearr_30234[7] = inst_30209);
return statearr_30234;
})();var statearr_30235_30258 = state_30232__$1;(statearr_30235_30258[2] = null);
(statearr_30235_30258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30233 === 2))
{var state_30232__$1 = state_30232;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30232__$1,4,ch);
} else
{if((state_val_30233 === 3))
{var inst_30229 = (state_30232[2]);var inst_30230 = cljs.core.async.close_BANG_.call(null,out);var state_30232__$1 = (function (){var statearr_30236 = state_30232;(statearr_30236[8] = inst_30229);
return statearr_30236;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30232__$1,inst_30230);
} else
{if((state_val_30233 === 4))
{var inst_30212 = (state_30232[9]);var inst_30212__$1 = (state_30232[2]);var inst_30213 = (inst_30212__$1 == null);var inst_30214 = cljs.core.not.call(null,inst_30213);var state_30232__$1 = (function (){var statearr_30237 = state_30232;(statearr_30237[9] = inst_30212__$1);
return statearr_30237;
})();if(inst_30214)
{var statearr_30238_30259 = state_30232__$1;(statearr_30238_30259[1] = 5);
} else
{var statearr_30239_30260 = state_30232__$1;(statearr_30239_30260[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30233 === 5))
{var inst_30212 = (state_30232[9]);var inst_30209 = (state_30232[7]);var inst_30216 = cljs.core._EQ_.call(null,inst_30212,inst_30209);var state_30232__$1 = state_30232;if(inst_30216)
{var statearr_30240_30261 = state_30232__$1;(statearr_30240_30261[1] = 8);
} else
{var statearr_30241_30262 = state_30232__$1;(statearr_30241_30262[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30233 === 6))
{var state_30232__$1 = state_30232;var statearr_30243_30263 = state_30232__$1;(statearr_30243_30263[2] = null);
(statearr_30243_30263[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30233 === 7))
{var inst_30227 = (state_30232[2]);var state_30232__$1 = state_30232;var statearr_30244_30264 = state_30232__$1;(statearr_30244_30264[2] = inst_30227);
(statearr_30244_30264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30233 === 8))
{var inst_30209 = (state_30232[7]);var tmp30242 = inst_30209;var inst_30209__$1 = tmp30242;var state_30232__$1 = (function (){var statearr_30245 = state_30232;(statearr_30245[7] = inst_30209__$1);
return statearr_30245;
})();var statearr_30246_30265 = state_30232__$1;(statearr_30246_30265[2] = null);
(statearr_30246_30265[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30233 === 9))
{var inst_30212 = (state_30232[9]);var state_30232__$1 = state_30232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30232__$1,11,out,inst_30212);
} else
{if((state_val_30233 === 10))
{var inst_30224 = (state_30232[2]);var state_30232__$1 = state_30232;var statearr_30247_30266 = state_30232__$1;(statearr_30247_30266[2] = inst_30224);
(statearr_30247_30266[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30233 === 11))
{var inst_30212 = (state_30232[9]);var inst_30221 = (state_30232[2]);var inst_30209 = inst_30212;var state_30232__$1 = (function (){var statearr_30248 = state_30232;(statearr_30248[10] = inst_30221);
(statearr_30248[7] = inst_30209);
return statearr_30248;
})();var statearr_30249_30267 = state_30232__$1;(statearr_30249_30267[2] = null);
(statearr_30249_30267[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_30253 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30253[0] = state_machine__10730__auto__);
(statearr_30253[1] = 1);
return statearr_30253;
});
var state_machine__10730__auto____1 = (function (state_30232){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_30232);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e30254){if((e30254 instanceof Object))
{var ex__10733__auto__ = e30254;var statearr_30255_30268 = state_30232;(statearr_30255_30268[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30232);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30269 = state_30232;
state_30232 = G__30269;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_30232){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_30232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_30256 = f__10794__auto__.call(null);(statearr_30256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___30257);
return statearr_30256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___30404 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_30374){var state_val_30375 = (state_30374[1]);if((state_val_30375 === 1))
{var inst_30337 = (new Array(n));var inst_30338 = inst_30337;var inst_30339 = 0;var state_30374__$1 = (function (){var statearr_30376 = state_30374;(statearr_30376[7] = inst_30339);
(statearr_30376[8] = inst_30338);
return statearr_30376;
})();var statearr_30377_30405 = state_30374__$1;(statearr_30377_30405[2] = null);
(statearr_30377_30405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30375 === 2))
{var state_30374__$1 = state_30374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30374__$1,4,ch);
} else
{if((state_val_30375 === 3))
{var inst_30372 = (state_30374[2]);var state_30374__$1 = state_30374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30374__$1,inst_30372);
} else
{if((state_val_30375 === 4))
{var inst_30342 = (state_30374[9]);var inst_30342__$1 = (state_30374[2]);var inst_30343 = (inst_30342__$1 == null);var inst_30344 = cljs.core.not.call(null,inst_30343);var state_30374__$1 = (function (){var statearr_30378 = state_30374;(statearr_30378[9] = inst_30342__$1);
return statearr_30378;
})();if(inst_30344)
{var statearr_30379_30406 = state_30374__$1;(statearr_30379_30406[1] = 5);
} else
{var statearr_30380_30407 = state_30374__$1;(statearr_30380_30407[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30375 === 5))
{var inst_30339 = (state_30374[7]);var inst_30338 = (state_30374[8]);var inst_30347 = (state_30374[10]);var inst_30342 = (state_30374[9]);var inst_30346 = (inst_30338[inst_30339] = inst_30342);var inst_30347__$1 = (inst_30339 + 1);var inst_30348 = (inst_30347__$1 < n);var state_30374__$1 = (function (){var statearr_30381 = state_30374;(statearr_30381[10] = inst_30347__$1);
(statearr_30381[11] = inst_30346);
return statearr_30381;
})();if(cljs.core.truth_(inst_30348))
{var statearr_30382_30408 = state_30374__$1;(statearr_30382_30408[1] = 8);
} else
{var statearr_30383_30409 = state_30374__$1;(statearr_30383_30409[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30375 === 6))
{var inst_30339 = (state_30374[7]);var inst_30360 = (inst_30339 > 0);var state_30374__$1 = state_30374;if(cljs.core.truth_(inst_30360))
{var statearr_30385_30410 = state_30374__$1;(statearr_30385_30410[1] = 12);
} else
{var statearr_30386_30411 = state_30374__$1;(statearr_30386_30411[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30375 === 7))
{var inst_30370 = (state_30374[2]);var state_30374__$1 = state_30374;var statearr_30387_30412 = state_30374__$1;(statearr_30387_30412[2] = inst_30370);
(statearr_30387_30412[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30375 === 8))
{var inst_30338 = (state_30374[8]);var inst_30347 = (state_30374[10]);var tmp30384 = inst_30338;var inst_30338__$1 = tmp30384;var inst_30339 = inst_30347;var state_30374__$1 = (function (){var statearr_30388 = state_30374;(statearr_30388[7] = inst_30339);
(statearr_30388[8] = inst_30338__$1);
return statearr_30388;
})();var statearr_30389_30413 = state_30374__$1;(statearr_30389_30413[2] = null);
(statearr_30389_30413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30375 === 9))
{var inst_30338 = (state_30374[8]);var inst_30352 = cljs.core.vec.call(null,inst_30338);var state_30374__$1 = state_30374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30374__$1,11,out,inst_30352);
} else
{if((state_val_30375 === 10))
{var inst_30358 = (state_30374[2]);var state_30374__$1 = state_30374;var statearr_30390_30414 = state_30374__$1;(statearr_30390_30414[2] = inst_30358);
(statearr_30390_30414[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30375 === 11))
{var inst_30354 = (state_30374[2]);var inst_30355 = (new Array(n));var inst_30338 = inst_30355;var inst_30339 = 0;var state_30374__$1 = (function (){var statearr_30391 = state_30374;(statearr_30391[7] = inst_30339);
(statearr_30391[8] = inst_30338);
(statearr_30391[12] = inst_30354);
return statearr_30391;
})();var statearr_30392_30415 = state_30374__$1;(statearr_30392_30415[2] = null);
(statearr_30392_30415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30375 === 12))
{var inst_30338 = (state_30374[8]);var inst_30362 = cljs.core.vec.call(null,inst_30338);var state_30374__$1 = state_30374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30374__$1,15,out,inst_30362);
} else
{if((state_val_30375 === 13))
{var state_30374__$1 = state_30374;var statearr_30393_30416 = state_30374__$1;(statearr_30393_30416[2] = null);
(statearr_30393_30416[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30375 === 14))
{var inst_30367 = (state_30374[2]);var inst_30368 = cljs.core.async.close_BANG_.call(null,out);var state_30374__$1 = (function (){var statearr_30394 = state_30374;(statearr_30394[13] = inst_30367);
return statearr_30394;
})();var statearr_30395_30417 = state_30374__$1;(statearr_30395_30417[2] = inst_30368);
(statearr_30395_30417[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30375 === 15))
{var inst_30364 = (state_30374[2]);var state_30374__$1 = state_30374;var statearr_30396_30418 = state_30374__$1;(statearr_30396_30418[2] = inst_30364);
(statearr_30396_30418[1] = 14);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_30400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30400[0] = state_machine__10730__auto__);
(statearr_30400[1] = 1);
return statearr_30400;
});
var state_machine__10730__auto____1 = (function (state_30374){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_30374);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e30401){if((e30401 instanceof Object))
{var ex__10733__auto__ = e30401;var statearr_30402_30419 = state_30374;(statearr_30402_30419[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30374);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30401;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30420 = state_30374;
state_30374 = G__30420;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_30374){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_30374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_30403 = f__10794__auto__.call(null);(statearr_30403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___30404);
return statearr_30403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___30563 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_30533){var state_val_30534 = (state_30533[1]);if((state_val_30534 === 1))
{var inst_30492 = [];var inst_30493 = inst_30492;var inst_30494 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_30533__$1 = (function (){var statearr_30535 = state_30533;(statearr_30535[7] = inst_30494);
(statearr_30535[8] = inst_30493);
return statearr_30535;
})();var statearr_30536_30564 = state_30533__$1;(statearr_30536_30564[2] = null);
(statearr_30536_30564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30534 === 2))
{var state_30533__$1 = state_30533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30533__$1,4,ch);
} else
{if((state_val_30534 === 3))
{var inst_30531 = (state_30533[2]);var state_30533__$1 = state_30533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30533__$1,inst_30531);
} else
{if((state_val_30534 === 4))
{var inst_30497 = (state_30533[9]);var inst_30497__$1 = (state_30533[2]);var inst_30498 = (inst_30497__$1 == null);var inst_30499 = cljs.core.not.call(null,inst_30498);var state_30533__$1 = (function (){var statearr_30537 = state_30533;(statearr_30537[9] = inst_30497__$1);
return statearr_30537;
})();if(inst_30499)
{var statearr_30538_30565 = state_30533__$1;(statearr_30538_30565[1] = 5);
} else
{var statearr_30539_30566 = state_30533__$1;(statearr_30539_30566[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30534 === 5))
{var inst_30494 = (state_30533[7]);var inst_30501 = (state_30533[10]);var inst_30497 = (state_30533[9]);var inst_30501__$1 = f.call(null,inst_30497);var inst_30502 = cljs.core._EQ_.call(null,inst_30501__$1,inst_30494);var inst_30503 = cljs.core.keyword_identical_QMARK_.call(null,inst_30494,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_30504 = (inst_30502) || (inst_30503);var state_30533__$1 = (function (){var statearr_30540 = state_30533;(statearr_30540[10] = inst_30501__$1);
return statearr_30540;
})();if(cljs.core.truth_(inst_30504))
{var statearr_30541_30567 = state_30533__$1;(statearr_30541_30567[1] = 8);
} else
{var statearr_30542_30568 = state_30533__$1;(statearr_30542_30568[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30534 === 6))
{var inst_30493 = (state_30533[8]);var inst_30518 = inst_30493.length;var inst_30519 = (inst_30518 > 0);var state_30533__$1 = state_30533;if(cljs.core.truth_(inst_30519))
{var statearr_30544_30569 = state_30533__$1;(statearr_30544_30569[1] = 12);
} else
{var statearr_30545_30570 = state_30533__$1;(statearr_30545_30570[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30534 === 7))
{var inst_30529 = (state_30533[2]);var state_30533__$1 = state_30533;var statearr_30546_30571 = state_30533__$1;(statearr_30546_30571[2] = inst_30529);
(statearr_30546_30571[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30534 === 8))
{var inst_30493 = (state_30533[8]);var inst_30501 = (state_30533[10]);var inst_30497 = (state_30533[9]);var inst_30506 = inst_30493.push(inst_30497);var tmp30543 = inst_30493;var inst_30493__$1 = tmp30543;var inst_30494 = inst_30501;var state_30533__$1 = (function (){var statearr_30547 = state_30533;(statearr_30547[7] = inst_30494);
(statearr_30547[8] = inst_30493__$1);
(statearr_30547[11] = inst_30506);
return statearr_30547;
})();var statearr_30548_30572 = state_30533__$1;(statearr_30548_30572[2] = null);
(statearr_30548_30572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30534 === 9))
{var inst_30493 = (state_30533[8]);var inst_30509 = cljs.core.vec.call(null,inst_30493);var state_30533__$1 = state_30533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30533__$1,11,out,inst_30509);
} else
{if((state_val_30534 === 10))
{var inst_30516 = (state_30533[2]);var state_30533__$1 = state_30533;var statearr_30549_30573 = state_30533__$1;(statearr_30549_30573[2] = inst_30516);
(statearr_30549_30573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30534 === 11))
{var inst_30501 = (state_30533[10]);var inst_30497 = (state_30533[9]);var inst_30511 = (state_30533[2]);var inst_30512 = [];var inst_30513 = inst_30512.push(inst_30497);var inst_30493 = inst_30512;var inst_30494 = inst_30501;var state_30533__$1 = (function (){var statearr_30550 = state_30533;(statearr_30550[7] = inst_30494);
(statearr_30550[8] = inst_30493);
(statearr_30550[12] = inst_30511);
(statearr_30550[13] = inst_30513);
return statearr_30550;
})();var statearr_30551_30574 = state_30533__$1;(statearr_30551_30574[2] = null);
(statearr_30551_30574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30534 === 12))
{var inst_30493 = (state_30533[8]);var inst_30521 = cljs.core.vec.call(null,inst_30493);var state_30533__$1 = state_30533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30533__$1,15,out,inst_30521);
} else
{if((state_val_30534 === 13))
{var state_30533__$1 = state_30533;var statearr_30552_30575 = state_30533__$1;(statearr_30552_30575[2] = null);
(statearr_30552_30575[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30534 === 14))
{var inst_30526 = (state_30533[2]);var inst_30527 = cljs.core.async.close_BANG_.call(null,out);var state_30533__$1 = (function (){var statearr_30553 = state_30533;(statearr_30553[14] = inst_30526);
return statearr_30553;
})();var statearr_30554_30576 = state_30533__$1;(statearr_30554_30576[2] = inst_30527);
(statearr_30554_30576[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30534 === 15))
{var inst_30523 = (state_30533[2]);var state_30533__$1 = state_30533;var statearr_30555_30577 = state_30533__$1;(statearr_30555_30577[2] = inst_30523);
(statearr_30555_30577[1] = 14);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_30559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30559[0] = state_machine__10730__auto__);
(statearr_30559[1] = 1);
return statearr_30559;
});
var state_machine__10730__auto____1 = (function (state_30533){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_30533);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e30560){if((e30560 instanceof Object))
{var ex__10733__auto__ = e30560;var statearr_30561_30578 = state_30533;(statearr_30561_30578[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30579 = state_30533;
state_30533 = G__30579;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_30533){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_30533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_30562 = f__10794__auto__.call(null);(statearr_30562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___30563);
return statearr_30562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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