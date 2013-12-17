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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t327036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t327036 = (function (f,fn_handler,meta327037){
this.f = f;
this.fn_handler = fn_handler;
this.meta327037 = meta327037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t327036.cljs$lang$type = true;
cljs.core.async.t327036.cljs$lang$ctorStr = "cljs.core.async/t327036";
cljs.core.async.t327036.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t327036");
});
cljs.core.async.t327036.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t327036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t327036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t327036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_327038){var self__ = this;
var _327038__$1 = this;return self__.meta327037;
});
cljs.core.async.t327036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_327038,meta327037__$1){var self__ = this;
var _327038__$1 = this;return (new cljs.core.async.t327036(self__.f,self__.fn_handler,meta327037__$1));
});
cljs.core.async.__GT_t327036 = (function __GT_t327036(f__$1,fn_handler__$1,meta327037){return (new cljs.core.async.t327036(f__$1,fn_handler__$1,meta327037));
});
}
return (new cljs.core.async.t327036(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__327040 = buff;if(G__327040)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__327040.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__327040.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__327040);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__327040);
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
{var val_327041 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_327041);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_327041);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13811__auto__ = ret;if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13811__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14646__auto___327042 = n;var x_327043 = 0;while(true){
if((x_327043 < n__14646__auto___327042))
{(a[x_327043] = 0);
{
var G__327044 = (x_327043 + 1);
x_327043 = G__327044;
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
var G__327045 = (i + 1);
i = G__327045;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t327049 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t327049 = (function (flag,alt_flag,meta327050){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta327050 = meta327050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t327049.cljs$lang$type = true;
cljs.core.async.t327049.cljs$lang$ctorStr = "cljs.core.async/t327049";
cljs.core.async.t327049.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t327049");
});
cljs.core.async.t327049.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t327049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t327049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t327049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_327051){var self__ = this;
var _327051__$1 = this;return self__.meta327050;
});
cljs.core.async.t327049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_327051,meta327050__$1){var self__ = this;
var _327051__$1 = this;return (new cljs.core.async.t327049(self__.flag,self__.alt_flag,meta327050__$1));
});
cljs.core.async.__GT_t327049 = (function __GT_t327049(flag__$1,alt_flag__$1,meta327050){return (new cljs.core.async.t327049(flag__$1,alt_flag__$1,meta327050));
});
}
return (new cljs.core.async.t327049(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t327055 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t327055 = (function (cb,flag,alt_handler,meta327056){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta327056 = meta327056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t327055.cljs$lang$type = true;
cljs.core.async.t327055.cljs$lang$ctorStr = "cljs.core.async/t327055";
cljs.core.async.t327055.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t327055");
});
cljs.core.async.t327055.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t327055.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t327055.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t327055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_327057){var self__ = this;
var _327057__$1 = this;return self__.meta327056;
});
cljs.core.async.t327055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_327057,meta327056__$1){var self__ = this;
var _327057__$1 = this;return (new cljs.core.async.t327055(self__.cb,self__.flag,self__.alt_handler,meta327056__$1));
});
cljs.core.async.__GT_t327055 = (function __GT_t327055(cb__$1,flag__$1,alt_handler__$1,meta327056){return (new cljs.core.async.t327055(cb__$1,flag__$1,alt_handler__$1,meta327056));
});
}
return (new cljs.core.async.t327055(cb,flag,alt_handler,null));
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
return (function (p1__327058_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__327058_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13823__auto__ = wport;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__327059 = (i + 1);
i = G__327059;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13823__auto__ = ret;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13811__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13811__auto__;
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
var alts_BANG___delegate = function (ports,p__327060){var map__327062 = p__327060;var map__327062__$1 = ((cljs.core.seq_QMARK_.call(null,map__327062))?cljs.core.apply.call(null,cljs.core.hash_map,map__327062):map__327062);var opts = map__327062__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__327060 = null;if (arguments.length > 1) {
  p__327060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__327060);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__327063){
var ports = cljs.core.first(arglist__327063);
var p__327060 = cljs.core.rest(arglist__327063);
return alts_BANG___delegate(ports,p__327060);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t327071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t327071 = (function (ch,f,map_LT_,meta327072){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta327072 = meta327072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t327071.cljs$lang$type = true;
cljs.core.async.t327071.cljs$lang$ctorStr = "cljs.core.async/t327071";
cljs.core.async.t327071.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t327071");
});
cljs.core.async.t327071.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t327071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t327071.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t327071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t327074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t327074 = (function (fn1,_,meta327072,ch,f,map_LT_,meta327075){
this.fn1 = fn1;
this._ = _;
this.meta327072 = meta327072;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta327075 = meta327075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t327074.cljs$lang$type = true;
cljs.core.async.t327074.cljs$lang$ctorStr = "cljs.core.async/t327074";
cljs.core.async.t327074.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t327074");
});
cljs.core.async.t327074.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t327074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t327074.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t327074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__327064_SHARP_){return f1.call(null,(((p1__327064_SHARP_ == null))?null:self__.f.call(null,p1__327064_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t327074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_327076){var self__ = this;
var _327076__$1 = this;return self__.meta327075;
});
cljs.core.async.t327074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_327076,meta327075__$1){var self__ = this;
var _327076__$1 = this;return (new cljs.core.async.t327074(self__.fn1,self__._,self__.meta327072,self__.ch,self__.f,self__.map_LT_,meta327075__$1));
});
cljs.core.async.__GT_t327074 = (function __GT_t327074(fn1__$1,___$2,meta327072__$1,ch__$2,f__$2,map_LT___$2,meta327075){return (new cljs.core.async.t327074(fn1__$1,___$2,meta327072__$1,ch__$2,f__$2,map_LT___$2,meta327075));
});
}
return (new cljs.core.async.t327074(fn1,___$1,self__.meta327072,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13811__auto__ = ret;if(cljs.core.truth_(and__13811__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13811__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t327071.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t327071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t327071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_327073){var self__ = this;
var _327073__$1 = this;return self__.meta327072;
});
cljs.core.async.t327071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_327073,meta327072__$1){var self__ = this;
var _327073__$1 = this;return (new cljs.core.async.t327071(self__.ch,self__.f,self__.map_LT_,meta327072__$1));
});
cljs.core.async.__GT_t327071 = (function __GT_t327071(ch__$1,f__$1,map_LT___$1,meta327072){return (new cljs.core.async.t327071(ch__$1,f__$1,map_LT___$1,meta327072));
});
}
return (new cljs.core.async.t327071(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t327080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t327080 = (function (ch,f,map_GT_,meta327081){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta327081 = meta327081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t327080.cljs$lang$type = true;
cljs.core.async.t327080.cljs$lang$ctorStr = "cljs.core.async/t327080";
cljs.core.async.t327080.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t327080");
});
cljs.core.async.t327080.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t327080.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t327080.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t327080.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t327080.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t327080.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t327080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_327082){var self__ = this;
var _327082__$1 = this;return self__.meta327081;
});
cljs.core.async.t327080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_327082,meta327081__$1){var self__ = this;
var _327082__$1 = this;return (new cljs.core.async.t327080(self__.ch,self__.f,self__.map_GT_,meta327081__$1));
});
cljs.core.async.__GT_t327080 = (function __GT_t327080(ch__$1,f__$1,map_GT___$1,meta327081){return (new cljs.core.async.t327080(ch__$1,f__$1,map_GT___$1,meta327081));
});
}
return (new cljs.core.async.t327080(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t327086 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t327086 = (function (ch,p,filter_GT_,meta327087){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta327087 = meta327087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t327086.cljs$lang$type = true;
cljs.core.async.t327086.cljs$lang$ctorStr = "cljs.core.async/t327086";
cljs.core.async.t327086.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t327086");
});
cljs.core.async.t327086.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t327086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t327086.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t327086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t327086.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t327086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t327086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_327088){var self__ = this;
var _327088__$1 = this;return self__.meta327087;
});
cljs.core.async.t327086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_327088,meta327087__$1){var self__ = this;
var _327088__$1 = this;return (new cljs.core.async.t327086(self__.ch,self__.p,self__.filter_GT_,meta327087__$1));
});
cljs.core.async.__GT_t327086 = (function __GT_t327086(ch__$1,p__$1,filter_GT___$1,meta327087){return (new cljs.core.async.t327086(ch__$1,p__$1,filter_GT___$1,meta327087));
});
}
return (new cljs.core.async.t327086(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___327171 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_327150){var state_val_327151 = (state_327150[1]);if((state_val_327151 === 1))
{var state_327150__$1 = state_327150;var statearr_327152_327172 = state_327150__$1;(statearr_327152_327172[2] = null);
(statearr_327152_327172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327151 === 2))
{var state_327150__$1 = state_327150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_327150__$1,4,ch);
} else
{if((state_val_327151 === 3))
{var inst_327148 = (state_327150[2]);var state_327150__$1 = state_327150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_327150__$1,inst_327148);
} else
{if((state_val_327151 === 4))
{var inst_327132 = (state_327150[7]);var inst_327132__$1 = (state_327150[2]);var inst_327133 = (inst_327132__$1 == null);var state_327150__$1 = (function (){var statearr_327153 = state_327150;(statearr_327153[7] = inst_327132__$1);
return statearr_327153;
})();if(cljs.core.truth_(inst_327133))
{var statearr_327154_327173 = state_327150__$1;(statearr_327154_327173[1] = 5);
} else
{var statearr_327155_327174 = state_327150__$1;(statearr_327155_327174[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327151 === 5))
{var inst_327135 = cljs.core.async.close_BANG_.call(null,out);var state_327150__$1 = state_327150;var statearr_327156_327175 = state_327150__$1;(statearr_327156_327175[2] = inst_327135);
(statearr_327156_327175[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327151 === 6))
{var inst_327132 = (state_327150[7]);var inst_327137 = p.call(null,inst_327132);var state_327150__$1 = state_327150;if(cljs.core.truth_(inst_327137))
{var statearr_327157_327176 = state_327150__$1;(statearr_327157_327176[1] = 8);
} else
{var statearr_327158_327177 = state_327150__$1;(statearr_327158_327177[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327151 === 7))
{var inst_327146 = (state_327150[2]);var state_327150__$1 = state_327150;var statearr_327159_327178 = state_327150__$1;(statearr_327159_327178[2] = inst_327146);
(statearr_327159_327178[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327151 === 8))
{var inst_327132 = (state_327150[7]);var state_327150__$1 = state_327150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_327150__$1,11,out,inst_327132);
} else
{if((state_val_327151 === 9))
{var state_327150__$1 = state_327150;var statearr_327160_327179 = state_327150__$1;(statearr_327160_327179[2] = null);
(statearr_327160_327179[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327151 === 10))
{var inst_327143 = (state_327150[2]);var state_327150__$1 = (function (){var statearr_327161 = state_327150;(statearr_327161[8] = inst_327143);
return statearr_327161;
})();var statearr_327162_327180 = state_327150__$1;(statearr_327162_327180[2] = null);
(statearr_327162_327180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327151 === 11))
{var inst_327140 = (state_327150[2]);var state_327150__$1 = state_327150;var statearr_327163_327181 = state_327150__$1;(statearr_327163_327181[2] = inst_327140);
(statearr_327163_327181[1] = 10);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_327167 = (new Array(9));(statearr_327167[0] = state_machine__17982__auto__);
(statearr_327167[1] = 1);
return statearr_327167;
});
var state_machine__17982__auto____1 = (function (state_327150){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_327150);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e327168){if((e327168 instanceof Object))
{var ex__17985__auto__ = e327168;var statearr_327169_327182 = state_327150;(statearr_327169_327182[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_327150);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e327168;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__327183 = state_327150;
state_327150 = G__327183;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_327150){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_327150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_327170 = f__18052__auto__.call(null);(statearr_327170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___327171);
return statearr_327170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_327335){var state_val_327336 = (state_327335[1]);if((state_val_327336 === 1))
{var state_327335__$1 = state_327335;var statearr_327337_327374 = state_327335__$1;(statearr_327337_327374[2] = null);
(statearr_327337_327374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 2))
{var state_327335__$1 = state_327335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_327335__$1,4,in$);
} else
{if((state_val_327336 === 3))
{var inst_327333 = (state_327335[2]);var state_327335__$1 = state_327335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_327335__$1,inst_327333);
} else
{if((state_val_327336 === 4))
{var inst_327281 = (state_327335[7]);var inst_327281__$1 = (state_327335[2]);var inst_327282 = (inst_327281__$1 == null);var state_327335__$1 = (function (){var statearr_327338 = state_327335;(statearr_327338[7] = inst_327281__$1);
return statearr_327338;
})();if(cljs.core.truth_(inst_327282))
{var statearr_327339_327375 = state_327335__$1;(statearr_327339_327375[1] = 5);
} else
{var statearr_327340_327376 = state_327335__$1;(statearr_327340_327376[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 5))
{var inst_327284 = cljs.core.async.close_BANG_.call(null,out);var state_327335__$1 = state_327335;var statearr_327341_327377 = state_327335__$1;(statearr_327341_327377[2] = inst_327284);
(statearr_327341_327377[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 6))
{var inst_327281 = (state_327335[7]);var inst_327286 = f.call(null,inst_327281);var inst_327291 = cljs.core.seq.call(null,inst_327286);var inst_327292 = inst_327291;var inst_327293 = null;var inst_327294 = 0;var inst_327295 = 0;var state_327335__$1 = (function (){var statearr_327342 = state_327335;(statearr_327342[8] = inst_327292);
(statearr_327342[9] = inst_327293);
(statearr_327342[10] = inst_327294);
(statearr_327342[11] = inst_327295);
return statearr_327342;
})();var statearr_327343_327378 = state_327335__$1;(statearr_327343_327378[2] = null);
(statearr_327343_327378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 7))
{var inst_327331 = (state_327335[2]);var state_327335__$1 = state_327335;var statearr_327344_327379 = state_327335__$1;(statearr_327344_327379[2] = inst_327331);
(statearr_327344_327379[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 8))
{var inst_327294 = (state_327335[10]);var inst_327295 = (state_327335[11]);var inst_327297 = (inst_327295 < inst_327294);var inst_327298 = inst_327297;var state_327335__$1 = state_327335;if(cljs.core.truth_(inst_327298))
{var statearr_327345_327380 = state_327335__$1;(statearr_327345_327380[1] = 10);
} else
{var statearr_327346_327381 = state_327335__$1;(statearr_327346_327381[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 9))
{var inst_327328 = (state_327335[2]);var state_327335__$1 = (function (){var statearr_327347 = state_327335;(statearr_327347[12] = inst_327328);
return statearr_327347;
})();var statearr_327348_327382 = state_327335__$1;(statearr_327348_327382[2] = null);
(statearr_327348_327382[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 10))
{var inst_327293 = (state_327335[9]);var inst_327295 = (state_327335[11]);var inst_327300 = cljs.core._nth.call(null,inst_327293,inst_327295);var state_327335__$1 = state_327335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_327335__$1,13,out,inst_327300);
} else
{if((state_val_327336 === 11))
{var inst_327292 = (state_327335[8]);var inst_327306 = (state_327335[13]);var inst_327306__$1 = cljs.core.seq.call(null,inst_327292);var state_327335__$1 = (function (){var statearr_327352 = state_327335;(statearr_327352[13] = inst_327306__$1);
return statearr_327352;
})();if(inst_327306__$1)
{var statearr_327353_327383 = state_327335__$1;(statearr_327353_327383[1] = 14);
} else
{var statearr_327354_327384 = state_327335__$1;(statearr_327354_327384[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 12))
{var inst_327326 = (state_327335[2]);var state_327335__$1 = state_327335;var statearr_327355_327385 = state_327335__$1;(statearr_327355_327385[2] = inst_327326);
(statearr_327355_327385[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 13))
{var inst_327292 = (state_327335[8]);var inst_327293 = (state_327335[9]);var inst_327294 = (state_327335[10]);var inst_327295 = (state_327335[11]);var inst_327302 = (state_327335[2]);var inst_327303 = (inst_327295 + 1);var tmp327349 = inst_327292;var tmp327350 = inst_327293;var tmp327351 = inst_327294;var inst_327292__$1 = tmp327349;var inst_327293__$1 = tmp327350;var inst_327294__$1 = tmp327351;var inst_327295__$1 = inst_327303;var state_327335__$1 = (function (){var statearr_327356 = state_327335;(statearr_327356[8] = inst_327292__$1);
(statearr_327356[9] = inst_327293__$1);
(statearr_327356[10] = inst_327294__$1);
(statearr_327356[11] = inst_327295__$1);
(statearr_327356[14] = inst_327302);
return statearr_327356;
})();var statearr_327357_327386 = state_327335__$1;(statearr_327357_327386[2] = null);
(statearr_327357_327386[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 14))
{var inst_327306 = (state_327335[13]);var inst_327308 = cljs.core.chunked_seq_QMARK_.call(null,inst_327306);var state_327335__$1 = state_327335;if(inst_327308)
{var statearr_327358_327387 = state_327335__$1;(statearr_327358_327387[1] = 17);
} else
{var statearr_327359_327388 = state_327335__$1;(statearr_327359_327388[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 15))
{var state_327335__$1 = state_327335;var statearr_327360_327389 = state_327335__$1;(statearr_327360_327389[2] = null);
(statearr_327360_327389[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 16))
{var inst_327324 = (state_327335[2]);var state_327335__$1 = state_327335;var statearr_327361_327390 = state_327335__$1;(statearr_327361_327390[2] = inst_327324);
(statearr_327361_327390[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 17))
{var inst_327306 = (state_327335[13]);var inst_327310 = cljs.core.chunk_first.call(null,inst_327306);var inst_327311 = cljs.core.chunk_rest.call(null,inst_327306);var inst_327312 = cljs.core.count.call(null,inst_327310);var inst_327292 = inst_327311;var inst_327293 = inst_327310;var inst_327294 = inst_327312;var inst_327295 = 0;var state_327335__$1 = (function (){var statearr_327362 = state_327335;(statearr_327362[8] = inst_327292);
(statearr_327362[9] = inst_327293);
(statearr_327362[10] = inst_327294);
(statearr_327362[11] = inst_327295);
return statearr_327362;
})();var statearr_327363_327391 = state_327335__$1;(statearr_327363_327391[2] = null);
(statearr_327363_327391[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 18))
{var inst_327306 = (state_327335[13]);var inst_327315 = cljs.core.first.call(null,inst_327306);var state_327335__$1 = state_327335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_327335__$1,20,out,inst_327315);
} else
{if((state_val_327336 === 19))
{var inst_327321 = (state_327335[2]);var state_327335__$1 = state_327335;var statearr_327364_327392 = state_327335__$1;(statearr_327364_327392[2] = inst_327321);
(statearr_327364_327392[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327336 === 20))
{var inst_327306 = (state_327335[13]);var inst_327317 = (state_327335[2]);var inst_327318 = cljs.core.next.call(null,inst_327306);var inst_327292 = inst_327318;var inst_327293 = null;var inst_327294 = 0;var inst_327295 = 0;var state_327335__$1 = (function (){var statearr_327365 = state_327335;(statearr_327365[8] = inst_327292);
(statearr_327365[9] = inst_327293);
(statearr_327365[10] = inst_327294);
(statearr_327365[11] = inst_327295);
(statearr_327365[15] = inst_327317);
return statearr_327365;
})();var statearr_327366_327393 = state_327335__$1;(statearr_327366_327393[2] = null);
(statearr_327366_327393[1] = 8);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_327370 = (new Array(16));(statearr_327370[0] = state_machine__17982__auto__);
(statearr_327370[1] = 1);
return statearr_327370;
});
var state_machine__17982__auto____1 = (function (state_327335){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_327335);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e327371){if((e327371 instanceof Object))
{var ex__17985__auto__ = e327371;var statearr_327372_327394 = state_327335;(statearr_327372_327394[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_327335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e327371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__327395 = state_327335;
state_327335 = G__327395;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_327335){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_327335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_327373 = f__18052__auto__.call(null);(statearr_327373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_327373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18051__auto___327476 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_327455){var state_val_327456 = (state_327455[1]);if((state_val_327456 === 1))
{var state_327455__$1 = state_327455;var statearr_327457_327477 = state_327455__$1;(statearr_327457_327477[2] = null);
(statearr_327457_327477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327456 === 2))
{var state_327455__$1 = state_327455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_327455__$1,4,from);
} else
{if((state_val_327456 === 3))
{var inst_327453 = (state_327455[2]);var state_327455__$1 = state_327455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_327455__$1,inst_327453);
} else
{if((state_val_327456 === 4))
{var inst_327438 = (state_327455[7]);var inst_327438__$1 = (state_327455[2]);var inst_327439 = (inst_327438__$1 == null);var state_327455__$1 = (function (){var statearr_327458 = state_327455;(statearr_327458[7] = inst_327438__$1);
return statearr_327458;
})();if(cljs.core.truth_(inst_327439))
{var statearr_327459_327478 = state_327455__$1;(statearr_327459_327478[1] = 5);
} else
{var statearr_327460_327479 = state_327455__$1;(statearr_327460_327479[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327456 === 5))
{var state_327455__$1 = state_327455;if(cljs.core.truth_(close_QMARK_))
{var statearr_327461_327480 = state_327455__$1;(statearr_327461_327480[1] = 8);
} else
{var statearr_327462_327481 = state_327455__$1;(statearr_327462_327481[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327456 === 6))
{var inst_327438 = (state_327455[7]);var state_327455__$1 = state_327455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_327455__$1,11,to,inst_327438);
} else
{if((state_val_327456 === 7))
{var inst_327451 = (state_327455[2]);var state_327455__$1 = state_327455;var statearr_327463_327482 = state_327455__$1;(statearr_327463_327482[2] = inst_327451);
(statearr_327463_327482[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327456 === 8))
{var inst_327442 = cljs.core.async.close_BANG_.call(null,to);var state_327455__$1 = state_327455;var statearr_327464_327483 = state_327455__$1;(statearr_327464_327483[2] = inst_327442);
(statearr_327464_327483[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327456 === 9))
{var state_327455__$1 = state_327455;var statearr_327465_327484 = state_327455__$1;(statearr_327465_327484[2] = null);
(statearr_327465_327484[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327456 === 10))
{var inst_327445 = (state_327455[2]);var state_327455__$1 = state_327455;var statearr_327466_327485 = state_327455__$1;(statearr_327466_327485[2] = inst_327445);
(statearr_327466_327485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327456 === 11))
{var inst_327448 = (state_327455[2]);var state_327455__$1 = (function (){var statearr_327467 = state_327455;(statearr_327467[8] = inst_327448);
return statearr_327467;
})();var statearr_327468_327486 = state_327455__$1;(statearr_327468_327486[2] = null);
(statearr_327468_327486[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_327472 = (new Array(9));(statearr_327472[0] = state_machine__17982__auto__);
(statearr_327472[1] = 1);
return statearr_327472;
});
var state_machine__17982__auto____1 = (function (state_327455){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_327455);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e327473){if((e327473 instanceof Object))
{var ex__17985__auto__ = e327473;var statearr_327474_327487 = state_327455;(statearr_327474_327487[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_327455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e327473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__327488 = state_327455;
state_327455 = G__327488;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_327455){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_327455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_327475 = f__18052__auto__.call(null);(statearr_327475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___327476);
return statearr_327475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18051__auto___327575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_327553){var state_val_327554 = (state_327553[1]);if((state_val_327554 === 1))
{var state_327553__$1 = state_327553;var statearr_327555_327576 = state_327553__$1;(statearr_327555_327576[2] = null);
(statearr_327555_327576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327554 === 2))
{var state_327553__$1 = state_327553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_327553__$1,4,ch);
} else
{if((state_val_327554 === 3))
{var inst_327551 = (state_327553[2]);var state_327553__$1 = state_327553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_327553__$1,inst_327551);
} else
{if((state_val_327554 === 4))
{var inst_327534 = (state_327553[7]);var inst_327534__$1 = (state_327553[2]);var inst_327535 = (inst_327534__$1 == null);var state_327553__$1 = (function (){var statearr_327556 = state_327553;(statearr_327556[7] = inst_327534__$1);
return statearr_327556;
})();if(cljs.core.truth_(inst_327535))
{var statearr_327557_327577 = state_327553__$1;(statearr_327557_327577[1] = 5);
} else
{var statearr_327558_327578 = state_327553__$1;(statearr_327558_327578[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327554 === 5))
{var inst_327537 = cljs.core.async.close_BANG_.call(null,tc);var inst_327538 = cljs.core.async.close_BANG_.call(null,fc);var state_327553__$1 = (function (){var statearr_327559 = state_327553;(statearr_327559[8] = inst_327537);
return statearr_327559;
})();var statearr_327560_327579 = state_327553__$1;(statearr_327560_327579[2] = inst_327538);
(statearr_327560_327579[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327554 === 6))
{var inst_327534 = (state_327553[7]);var inst_327540 = p.call(null,inst_327534);var state_327553__$1 = state_327553;if(cljs.core.truth_(inst_327540))
{var statearr_327561_327580 = state_327553__$1;(statearr_327561_327580[1] = 9);
} else
{var statearr_327562_327581 = state_327553__$1;(statearr_327562_327581[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327554 === 7))
{var inst_327549 = (state_327553[2]);var state_327553__$1 = state_327553;var statearr_327563_327582 = state_327553__$1;(statearr_327563_327582[2] = inst_327549);
(statearr_327563_327582[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327554 === 8))
{var inst_327546 = (state_327553[2]);var state_327553__$1 = (function (){var statearr_327564 = state_327553;(statearr_327564[9] = inst_327546);
return statearr_327564;
})();var statearr_327565_327583 = state_327553__$1;(statearr_327565_327583[2] = null);
(statearr_327565_327583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327554 === 9))
{var state_327553__$1 = state_327553;var statearr_327566_327584 = state_327553__$1;(statearr_327566_327584[2] = tc);
(statearr_327566_327584[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327554 === 10))
{var state_327553__$1 = state_327553;var statearr_327567_327585 = state_327553__$1;(statearr_327567_327585[2] = fc);
(statearr_327567_327585[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327554 === 11))
{var inst_327534 = (state_327553[7]);var inst_327544 = (state_327553[2]);var state_327553__$1 = state_327553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_327553__$1,8,inst_327544,inst_327534);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_327571 = (new Array(10));(statearr_327571[0] = state_machine__17982__auto__);
(statearr_327571[1] = 1);
return statearr_327571;
});
var state_machine__17982__auto____1 = (function (state_327553){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_327553);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e327572){if((e327572 instanceof Object))
{var ex__17985__auto__ = e327572;var statearr_327573_327586 = state_327553;(statearr_327573_327586[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_327553);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e327572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__327587 = state_327553;
state_327553 = G__327587;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_327553){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_327553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_327574 = f__18052__auto__.call(null);(statearr_327574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___327575);
return statearr_327574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_327634){var state_val_327635 = (state_327634[1]);if((state_val_327635 === 7))
{var inst_327630 = (state_327634[2]);var state_327634__$1 = state_327634;var statearr_327636_327652 = state_327634__$1;(statearr_327636_327652[2] = inst_327630);
(statearr_327636_327652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327635 === 6))
{var inst_327623 = (state_327634[7]);var inst_327620 = (state_327634[8]);var inst_327627 = f.call(null,inst_327620,inst_327623);var inst_327620__$1 = inst_327627;var state_327634__$1 = (function (){var statearr_327637 = state_327634;(statearr_327637[8] = inst_327620__$1);
return statearr_327637;
})();var statearr_327638_327653 = state_327634__$1;(statearr_327638_327653[2] = null);
(statearr_327638_327653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327635 === 5))
{var inst_327620 = (state_327634[8]);var state_327634__$1 = state_327634;var statearr_327639_327654 = state_327634__$1;(statearr_327639_327654[2] = inst_327620);
(statearr_327639_327654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327635 === 4))
{var inst_327623 = (state_327634[7]);var inst_327623__$1 = (state_327634[2]);var inst_327624 = (inst_327623__$1 == null);var state_327634__$1 = (function (){var statearr_327640 = state_327634;(statearr_327640[7] = inst_327623__$1);
return statearr_327640;
})();if(cljs.core.truth_(inst_327624))
{var statearr_327641_327655 = state_327634__$1;(statearr_327641_327655[1] = 5);
} else
{var statearr_327642_327656 = state_327634__$1;(statearr_327642_327656[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327635 === 3))
{var inst_327632 = (state_327634[2]);var state_327634__$1 = state_327634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_327634__$1,inst_327632);
} else
{if((state_val_327635 === 2))
{var state_327634__$1 = state_327634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_327634__$1,4,ch);
} else
{if((state_val_327635 === 1))
{var inst_327620 = init;var state_327634__$1 = (function (){var statearr_327643 = state_327634;(statearr_327643[8] = inst_327620);
return statearr_327643;
})();var statearr_327644_327657 = state_327634__$1;(statearr_327644_327657[2] = null);
(statearr_327644_327657[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_327648 = (new Array(9));(statearr_327648[0] = state_machine__17982__auto__);
(statearr_327648[1] = 1);
return statearr_327648;
});
var state_machine__17982__auto____1 = (function (state_327634){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_327634);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e327649){if((e327649 instanceof Object))
{var ex__17985__auto__ = e327649;var statearr_327650_327658 = state_327634;(statearr_327650_327658[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_327634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e327649;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__327659 = state_327634;
state_327634 = G__327659;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_327634){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_327634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_327651 = f__18052__auto__.call(null);(statearr_327651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_327651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_327721){var state_val_327722 = (state_327721[1]);if((state_val_327722 === 1))
{var inst_327701 = cljs.core.seq.call(null,coll);var inst_327702 = inst_327701;var state_327721__$1 = (function (){var statearr_327723 = state_327721;(statearr_327723[7] = inst_327702);
return statearr_327723;
})();var statearr_327724_327742 = state_327721__$1;(statearr_327724_327742[2] = null);
(statearr_327724_327742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327722 === 2))
{var inst_327702 = (state_327721[7]);var state_327721__$1 = state_327721;if(cljs.core.truth_(inst_327702))
{var statearr_327725_327743 = state_327721__$1;(statearr_327725_327743[1] = 4);
} else
{var statearr_327726_327744 = state_327721__$1;(statearr_327726_327744[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327722 === 3))
{var inst_327719 = (state_327721[2]);var state_327721__$1 = state_327721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_327721__$1,inst_327719);
} else
{if((state_val_327722 === 4))
{var inst_327702 = (state_327721[7]);var inst_327705 = cljs.core.first.call(null,inst_327702);var state_327721__$1 = state_327721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_327721__$1,7,ch,inst_327705);
} else
{if((state_val_327722 === 5))
{var state_327721__$1 = state_327721;if(cljs.core.truth_(close_QMARK_))
{var statearr_327727_327745 = state_327721__$1;(statearr_327727_327745[1] = 8);
} else
{var statearr_327728_327746 = state_327721__$1;(statearr_327728_327746[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327722 === 6))
{var inst_327717 = (state_327721[2]);var state_327721__$1 = state_327721;var statearr_327729_327747 = state_327721__$1;(statearr_327729_327747[2] = inst_327717);
(statearr_327729_327747[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327722 === 7))
{var inst_327702 = (state_327721[7]);var inst_327707 = (state_327721[2]);var inst_327708 = cljs.core.next.call(null,inst_327702);var inst_327702__$1 = inst_327708;var state_327721__$1 = (function (){var statearr_327730 = state_327721;(statearr_327730[8] = inst_327707);
(statearr_327730[7] = inst_327702__$1);
return statearr_327730;
})();var statearr_327731_327748 = state_327721__$1;(statearr_327731_327748[2] = null);
(statearr_327731_327748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327722 === 8))
{var inst_327712 = cljs.core.async.close_BANG_.call(null,ch);var state_327721__$1 = state_327721;var statearr_327732_327749 = state_327721__$1;(statearr_327732_327749[2] = inst_327712);
(statearr_327732_327749[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327722 === 9))
{var state_327721__$1 = state_327721;var statearr_327733_327750 = state_327721__$1;(statearr_327733_327750[2] = null);
(statearr_327733_327750[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_327722 === 10))
{var inst_327715 = (state_327721[2]);var state_327721__$1 = state_327721;var statearr_327734_327751 = state_327721__$1;(statearr_327734_327751[2] = inst_327715);
(statearr_327734_327751[1] = 6);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_327738 = (new Array(9));(statearr_327738[0] = state_machine__17982__auto__);
(statearr_327738[1] = 1);
return statearr_327738;
});
var state_machine__17982__auto____1 = (function (state_327721){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_327721);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e327739){if((e327739 instanceof Object))
{var ex__17985__auto__ = e327739;var statearr_327740_327752 = state_327721;(statearr_327740_327752[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_327721);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e327739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__327753 = state_327721;
state_327721 = G__327753;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_327721){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_327721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_327741 = f__18052__auto__.call(null);(statearr_327741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_327741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
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
cljs.core.async.Mux = (function (){var obj327755 = {};return obj327755;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13811__auto__ = _;if(and__13811__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14426__auto__ = (((_ == null))?null:_);return (function (){var or__13823__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj327757 = {};return obj327757;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t327981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t327981 = (function (cs,ch,mult,meta327982){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta327982 = meta327982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t327981.cljs$lang$type = true;
cljs.core.async.t327981.cljs$lang$ctorStr = "cljs.core.async/t327981";
cljs.core.async.t327981.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t327981");
});})(cs))
;
cljs.core.async.t327981.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t327981.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t327981.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t327981.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t327981.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t327981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t327981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_327983){var self__ = this;
var _327983__$1 = this;return self__.meta327982;
});})(cs))
;
cljs.core.async.t327981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_327983,meta327982__$1){var self__ = this;
var _327983__$1 = this;return (new cljs.core.async.t327981(self__.cs,self__.ch,self__.mult,meta327982__$1));
});})(cs))
;
cljs.core.async.__GT_t327981 = ((function (cs){
return (function __GT_t327981(cs__$1,ch__$1,mult__$1,meta327982){return (new cljs.core.async.t327981(cs__$1,ch__$1,mult__$1,meta327982));
});})(cs))
;
}
return (new cljs.core.async.t327981(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18051__auto___328204 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_328118){var state_val_328119 = (state_328118[1]);if((state_val_328119 === 32))
{var inst_328062 = (state_328118[7]);var inst_327986 = (state_328118[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_328118,31,Object,null,30);var inst_328069 = cljs.core.async.put_BANG_.call(null,inst_328062,inst_327986,done);var state_328118__$1 = state_328118;var statearr_328120_328205 = state_328118__$1;(statearr_328120_328205[2] = inst_328069);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328118__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 1))
{var state_328118__$1 = state_328118;var statearr_328121_328206 = state_328118__$1;(statearr_328121_328206[2] = null);
(statearr_328121_328206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 33))
{var inst_328075 = (state_328118[9]);var inst_328077 = cljs.core.chunked_seq_QMARK_.call(null,inst_328075);var state_328118__$1 = state_328118;if(inst_328077)
{var statearr_328122_328207 = state_328118__$1;(statearr_328122_328207[1] = 36);
} else
{var statearr_328123_328208 = state_328118__$1;(statearr_328123_328208[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 2))
{var state_328118__$1 = state_328118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_328118__$1,4,ch);
} else
{if((state_val_328119 === 34))
{var state_328118__$1 = state_328118;var statearr_328124_328209 = state_328118__$1;(statearr_328124_328209[2] = null);
(statearr_328124_328209[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 3))
{var inst_328116 = (state_328118[2]);var state_328118__$1 = state_328118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_328118__$1,inst_328116);
} else
{if((state_val_328119 === 35))
{var inst_328100 = (state_328118[2]);var state_328118__$1 = state_328118;var statearr_328125_328210 = state_328118__$1;(statearr_328125_328210[2] = inst_328100);
(statearr_328125_328210[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 4))
{var inst_327986 = (state_328118[8]);var inst_327986__$1 = (state_328118[2]);var inst_327987 = (inst_327986__$1 == null);var state_328118__$1 = (function (){var statearr_328126 = state_328118;(statearr_328126[8] = inst_327986__$1);
return statearr_328126;
})();if(cljs.core.truth_(inst_327987))
{var statearr_328127_328211 = state_328118__$1;(statearr_328127_328211[1] = 5);
} else
{var statearr_328128_328212 = state_328118__$1;(statearr_328128_328212[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 36))
{var inst_328075 = (state_328118[9]);var inst_328079 = cljs.core.chunk_first.call(null,inst_328075);var inst_328080 = cljs.core.chunk_rest.call(null,inst_328075);var inst_328081 = cljs.core.count.call(null,inst_328079);var inst_328054 = inst_328080;var inst_328055 = inst_328079;var inst_328056 = inst_328081;var inst_328057 = 0;var state_328118__$1 = (function (){var statearr_328129 = state_328118;(statearr_328129[10] = inst_328056);
(statearr_328129[11] = inst_328055);
(statearr_328129[12] = inst_328057);
(statearr_328129[13] = inst_328054);
return statearr_328129;
})();var statearr_328130_328213 = state_328118__$1;(statearr_328130_328213[2] = null);
(statearr_328130_328213[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 5))
{var inst_327993 = cljs.core.deref.call(null,cs);var inst_327994 = cljs.core.seq.call(null,inst_327993);var inst_327995 = inst_327994;var inst_327996 = null;var inst_327997 = 0;var inst_327998 = 0;var state_328118__$1 = (function (){var statearr_328131 = state_328118;(statearr_328131[14] = inst_327995);
(statearr_328131[15] = inst_327996);
(statearr_328131[16] = inst_327998);
(statearr_328131[17] = inst_327997);
return statearr_328131;
})();var statearr_328132_328214 = state_328118__$1;(statearr_328132_328214[2] = null);
(statearr_328132_328214[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 37))
{var inst_328075 = (state_328118[9]);var inst_328084 = cljs.core.first.call(null,inst_328075);var state_328118__$1 = (function (){var statearr_328133 = state_328118;(statearr_328133[18] = inst_328084);
return statearr_328133;
})();var statearr_328134_328215 = state_328118__$1;(statearr_328134_328215[2] = null);
(statearr_328134_328215[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 6))
{var inst_328046 = (state_328118[19]);var inst_328045 = cljs.core.deref.call(null,cs);var inst_328046__$1 = cljs.core.keys.call(null,inst_328045);var inst_328047 = cljs.core.count.call(null,inst_328046__$1);var inst_328048 = cljs.core.reset_BANG_.call(null,dctr,inst_328047);var inst_328053 = cljs.core.seq.call(null,inst_328046__$1);var inst_328054 = inst_328053;var inst_328055 = null;var inst_328056 = 0;var inst_328057 = 0;var state_328118__$1 = (function (){var statearr_328135 = state_328118;(statearr_328135[20] = inst_328048);
(statearr_328135[19] = inst_328046__$1);
(statearr_328135[10] = inst_328056);
(statearr_328135[11] = inst_328055);
(statearr_328135[12] = inst_328057);
(statearr_328135[13] = inst_328054);
return statearr_328135;
})();var statearr_328136_328216 = state_328118__$1;(statearr_328136_328216[2] = null);
(statearr_328136_328216[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 38))
{var inst_328097 = (state_328118[2]);var state_328118__$1 = state_328118;var statearr_328137_328217 = state_328118__$1;(statearr_328137_328217[2] = inst_328097);
(statearr_328137_328217[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 7))
{var inst_328114 = (state_328118[2]);var state_328118__$1 = state_328118;var statearr_328138_328218 = state_328118__$1;(statearr_328138_328218[2] = inst_328114);
(statearr_328138_328218[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 39))
{var inst_328075 = (state_328118[9]);var inst_328093 = (state_328118[2]);var inst_328094 = cljs.core.next.call(null,inst_328075);var inst_328054 = inst_328094;var inst_328055 = null;var inst_328056 = 0;var inst_328057 = 0;var state_328118__$1 = (function (){var statearr_328139 = state_328118;(statearr_328139[10] = inst_328056);
(statearr_328139[11] = inst_328055);
(statearr_328139[12] = inst_328057);
(statearr_328139[21] = inst_328093);
(statearr_328139[13] = inst_328054);
return statearr_328139;
})();var statearr_328140_328219 = state_328118__$1;(statearr_328140_328219[2] = null);
(statearr_328140_328219[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 8))
{var inst_327998 = (state_328118[16]);var inst_327997 = (state_328118[17]);var inst_328000 = (inst_327998 < inst_327997);var inst_328001 = inst_328000;var state_328118__$1 = state_328118;if(cljs.core.truth_(inst_328001))
{var statearr_328141_328220 = state_328118__$1;(statearr_328141_328220[1] = 10);
} else
{var statearr_328142_328221 = state_328118__$1;(statearr_328142_328221[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 40))
{var inst_328084 = (state_328118[18]);var inst_328085 = (state_328118[2]);var inst_328086 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_328087 = cljs.core.async.untap_STAR_.call(null,m,inst_328084);var state_328118__$1 = (function (){var statearr_328143 = state_328118;(statearr_328143[22] = inst_328085);
(statearr_328143[23] = inst_328086);
return statearr_328143;
})();var statearr_328144_328222 = state_328118__$1;(statearr_328144_328222[2] = inst_328087);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328118__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 9))
{var inst_328043 = (state_328118[2]);var state_328118__$1 = state_328118;var statearr_328145_328223 = state_328118__$1;(statearr_328145_328223[2] = inst_328043);
(statearr_328145_328223[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 41))
{var inst_327986 = (state_328118[8]);var inst_328084 = (state_328118[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_328118,40,Object,null,39);var inst_328091 = cljs.core.async.put_BANG_.call(null,inst_328084,inst_327986,done);var state_328118__$1 = state_328118;var statearr_328146_328224 = state_328118__$1;(statearr_328146_328224[2] = inst_328091);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328118__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 10))
{var inst_327996 = (state_328118[15]);var inst_327998 = (state_328118[16]);var inst_328004 = cljs.core._nth.call(null,inst_327996,inst_327998);var inst_328005 = cljs.core.nth.call(null,inst_328004,0,null);var inst_328006 = cljs.core.nth.call(null,inst_328004,1,null);var state_328118__$1 = (function (){var statearr_328147 = state_328118;(statearr_328147[24] = inst_328005);
return statearr_328147;
})();if(cljs.core.truth_(inst_328006))
{var statearr_328148_328225 = state_328118__$1;(statearr_328148_328225[1] = 13);
} else
{var statearr_328149_328226 = state_328118__$1;(statearr_328149_328226[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 42))
{var state_328118__$1 = state_328118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_328118__$1,45,dchan);
} else
{if((state_val_328119 === 11))
{var inst_327995 = (state_328118[14]);var inst_328015 = (state_328118[25]);var inst_328015__$1 = cljs.core.seq.call(null,inst_327995);var state_328118__$1 = (function (){var statearr_328150 = state_328118;(statearr_328150[25] = inst_328015__$1);
return statearr_328150;
})();if(inst_328015__$1)
{var statearr_328151_328227 = state_328118__$1;(statearr_328151_328227[1] = 16);
} else
{var statearr_328152_328228 = state_328118__$1;(statearr_328152_328228[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 43))
{var state_328118__$1 = state_328118;var statearr_328153_328229 = state_328118__$1;(statearr_328153_328229[2] = null);
(statearr_328153_328229[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 12))
{var inst_328041 = (state_328118[2]);var state_328118__$1 = state_328118;var statearr_328154_328230 = state_328118__$1;(statearr_328154_328230[2] = inst_328041);
(statearr_328154_328230[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 44))
{var inst_328111 = (state_328118[2]);var state_328118__$1 = (function (){var statearr_328155 = state_328118;(statearr_328155[26] = inst_328111);
return statearr_328155;
})();var statearr_328156_328231 = state_328118__$1;(statearr_328156_328231[2] = null);
(statearr_328156_328231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 13))
{var inst_328005 = (state_328118[24]);var inst_328008 = cljs.core.async.close_BANG_.call(null,inst_328005);var state_328118__$1 = state_328118;var statearr_328157_328232 = state_328118__$1;(statearr_328157_328232[2] = inst_328008);
(statearr_328157_328232[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 45))
{var inst_328108 = (state_328118[2]);var state_328118__$1 = state_328118;var statearr_328161_328233 = state_328118__$1;(statearr_328161_328233[2] = inst_328108);
(statearr_328161_328233[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 14))
{var state_328118__$1 = state_328118;var statearr_328162_328234 = state_328118__$1;(statearr_328162_328234[2] = null);
(statearr_328162_328234[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 15))
{var inst_327995 = (state_328118[14]);var inst_327996 = (state_328118[15]);var inst_327998 = (state_328118[16]);var inst_327997 = (state_328118[17]);var inst_328011 = (state_328118[2]);var inst_328012 = (inst_327998 + 1);var tmp328158 = inst_327995;var tmp328159 = inst_327996;var tmp328160 = inst_327997;var inst_327995__$1 = tmp328158;var inst_327996__$1 = tmp328159;var inst_327997__$1 = tmp328160;var inst_327998__$1 = inst_328012;var state_328118__$1 = (function (){var statearr_328163 = state_328118;(statearr_328163[14] = inst_327995__$1);
(statearr_328163[15] = inst_327996__$1);
(statearr_328163[27] = inst_328011);
(statearr_328163[16] = inst_327998__$1);
(statearr_328163[17] = inst_327997__$1);
return statearr_328163;
})();var statearr_328164_328235 = state_328118__$1;(statearr_328164_328235[2] = null);
(statearr_328164_328235[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 16))
{var inst_328015 = (state_328118[25]);var inst_328017 = cljs.core.chunked_seq_QMARK_.call(null,inst_328015);var state_328118__$1 = state_328118;if(inst_328017)
{var statearr_328165_328236 = state_328118__$1;(statearr_328165_328236[1] = 19);
} else
{var statearr_328166_328237 = state_328118__$1;(statearr_328166_328237[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 17))
{var state_328118__$1 = state_328118;var statearr_328167_328238 = state_328118__$1;(statearr_328167_328238[2] = null);
(statearr_328167_328238[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 18))
{var inst_328039 = (state_328118[2]);var state_328118__$1 = state_328118;var statearr_328168_328239 = state_328118__$1;(statearr_328168_328239[2] = inst_328039);
(statearr_328168_328239[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 19))
{var inst_328015 = (state_328118[25]);var inst_328019 = cljs.core.chunk_first.call(null,inst_328015);var inst_328020 = cljs.core.chunk_rest.call(null,inst_328015);var inst_328021 = cljs.core.count.call(null,inst_328019);var inst_327995 = inst_328020;var inst_327996 = inst_328019;var inst_327997 = inst_328021;var inst_327998 = 0;var state_328118__$1 = (function (){var statearr_328169 = state_328118;(statearr_328169[14] = inst_327995);
(statearr_328169[15] = inst_327996);
(statearr_328169[16] = inst_327998);
(statearr_328169[17] = inst_327997);
return statearr_328169;
})();var statearr_328170_328240 = state_328118__$1;(statearr_328170_328240[2] = null);
(statearr_328170_328240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 20))
{var inst_328015 = (state_328118[25]);var inst_328025 = cljs.core.first.call(null,inst_328015);var inst_328026 = cljs.core.nth.call(null,inst_328025,0,null);var inst_328027 = cljs.core.nth.call(null,inst_328025,1,null);var state_328118__$1 = (function (){var statearr_328171 = state_328118;(statearr_328171[28] = inst_328026);
return statearr_328171;
})();if(cljs.core.truth_(inst_328027))
{var statearr_328172_328241 = state_328118__$1;(statearr_328172_328241[1] = 22);
} else
{var statearr_328173_328242 = state_328118__$1;(statearr_328173_328242[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 21))
{var inst_328036 = (state_328118[2]);var state_328118__$1 = state_328118;var statearr_328174_328243 = state_328118__$1;(statearr_328174_328243[2] = inst_328036);
(statearr_328174_328243[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 22))
{var inst_328026 = (state_328118[28]);var inst_328029 = cljs.core.async.close_BANG_.call(null,inst_328026);var state_328118__$1 = state_328118;var statearr_328175_328244 = state_328118__$1;(statearr_328175_328244[2] = inst_328029);
(statearr_328175_328244[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 23))
{var state_328118__$1 = state_328118;var statearr_328176_328245 = state_328118__$1;(statearr_328176_328245[2] = null);
(statearr_328176_328245[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 24))
{var inst_328015 = (state_328118[25]);var inst_328032 = (state_328118[2]);var inst_328033 = cljs.core.next.call(null,inst_328015);var inst_327995 = inst_328033;var inst_327996 = null;var inst_327997 = 0;var inst_327998 = 0;var state_328118__$1 = (function (){var statearr_328177 = state_328118;(statearr_328177[14] = inst_327995);
(statearr_328177[15] = inst_327996);
(statearr_328177[29] = inst_328032);
(statearr_328177[16] = inst_327998);
(statearr_328177[17] = inst_327997);
return statearr_328177;
})();var statearr_328178_328246 = state_328118__$1;(statearr_328178_328246[2] = null);
(statearr_328178_328246[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 25))
{var inst_328056 = (state_328118[10]);var inst_328057 = (state_328118[12]);var inst_328059 = (inst_328057 < inst_328056);var inst_328060 = inst_328059;var state_328118__$1 = state_328118;if(cljs.core.truth_(inst_328060))
{var statearr_328179_328247 = state_328118__$1;(statearr_328179_328247[1] = 27);
} else
{var statearr_328180_328248 = state_328118__$1;(statearr_328180_328248[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 26))
{var inst_328046 = (state_328118[19]);var inst_328104 = (state_328118[2]);var inst_328105 = cljs.core.seq.call(null,inst_328046);var state_328118__$1 = (function (){var statearr_328181 = state_328118;(statearr_328181[30] = inst_328104);
return statearr_328181;
})();if(inst_328105)
{var statearr_328182_328249 = state_328118__$1;(statearr_328182_328249[1] = 42);
} else
{var statearr_328183_328250 = state_328118__$1;(statearr_328183_328250[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 27))
{var inst_328055 = (state_328118[11]);var inst_328057 = (state_328118[12]);var inst_328062 = cljs.core._nth.call(null,inst_328055,inst_328057);var state_328118__$1 = (function (){var statearr_328184 = state_328118;(statearr_328184[7] = inst_328062);
return statearr_328184;
})();var statearr_328185_328251 = state_328118__$1;(statearr_328185_328251[2] = null);
(statearr_328185_328251[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 28))
{var inst_328075 = (state_328118[9]);var inst_328054 = (state_328118[13]);var inst_328075__$1 = cljs.core.seq.call(null,inst_328054);var state_328118__$1 = (function (){var statearr_328189 = state_328118;(statearr_328189[9] = inst_328075__$1);
return statearr_328189;
})();if(inst_328075__$1)
{var statearr_328190_328252 = state_328118__$1;(statearr_328190_328252[1] = 33);
} else
{var statearr_328191_328253 = state_328118__$1;(statearr_328191_328253[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 29))
{var inst_328102 = (state_328118[2]);var state_328118__$1 = state_328118;var statearr_328192_328254 = state_328118__$1;(statearr_328192_328254[2] = inst_328102);
(statearr_328192_328254[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 30))
{var inst_328056 = (state_328118[10]);var inst_328055 = (state_328118[11]);var inst_328057 = (state_328118[12]);var inst_328054 = (state_328118[13]);var inst_328071 = (state_328118[2]);var inst_328072 = (inst_328057 + 1);var tmp328186 = inst_328056;var tmp328187 = inst_328055;var tmp328188 = inst_328054;var inst_328054__$1 = tmp328188;var inst_328055__$1 = tmp328187;var inst_328056__$1 = tmp328186;var inst_328057__$1 = inst_328072;var state_328118__$1 = (function (){var statearr_328193 = state_328118;(statearr_328193[31] = inst_328071);
(statearr_328193[10] = inst_328056__$1);
(statearr_328193[11] = inst_328055__$1);
(statearr_328193[12] = inst_328057__$1);
(statearr_328193[13] = inst_328054__$1);
return statearr_328193;
})();var statearr_328194_328255 = state_328118__$1;(statearr_328194_328255[2] = null);
(statearr_328194_328255[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328119 === 31))
{var inst_328062 = (state_328118[7]);var inst_328063 = (state_328118[2]);var inst_328064 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_328065 = cljs.core.async.untap_STAR_.call(null,m,inst_328062);var state_328118__$1 = (function (){var statearr_328195 = state_328118;(statearr_328195[32] = inst_328063);
(statearr_328195[33] = inst_328064);
return statearr_328195;
})();var statearr_328196_328256 = state_328118__$1;(statearr_328196_328256[2] = inst_328065);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328118__$1);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_328200 = (new Array(34));(statearr_328200[0] = state_machine__17982__auto__);
(statearr_328200[1] = 1);
return statearr_328200;
});
var state_machine__17982__auto____1 = (function (state_328118){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_328118);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e328201){if((e328201 instanceof Object))
{var ex__17985__auto__ = e328201;var statearr_328202_328257 = state_328118;(statearr_328202_328257[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328118);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e328201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__328258 = state_328118;
state_328118 = G__328258;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_328118){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_328118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_328203 = f__18052__auto__.call(null);(statearr_328203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___328204);
return statearr_328203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.Mix = (function (){var obj328260 = {};return obj328260;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t328370 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t328370 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta328371){
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
this.meta328371 = meta328371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t328370.cljs$lang$type = true;
cljs.core.async.t328370.cljs$lang$ctorStr = "cljs.core.async/t328370";
cljs.core.async.t328370.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t328370");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t328370.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t328370.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t328370.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t328370.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t328370.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t328370.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t328370.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t328370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t328370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_328372){var self__ = this;
var _328372__$1 = this;return self__.meta328371;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t328370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_328372,meta328371__$1){var self__ = this;
var _328372__$1 = this;return (new cljs.core.async.t328370(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta328371__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t328370 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t328370(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta328371){return (new cljs.core.async.t328370(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta328371));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t328370(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18051__auto___328479 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_328437){var state_val_328438 = (state_328437[1]);if((state_val_328438 === 1))
{var inst_328376 = (state_328437[7]);var inst_328376__$1 = calc_state.call(null);var inst_328377 = cljs.core.seq_QMARK_.call(null,inst_328376__$1);var state_328437__$1 = (function (){var statearr_328439 = state_328437;(statearr_328439[7] = inst_328376__$1);
return statearr_328439;
})();if(inst_328377)
{var statearr_328440_328480 = state_328437__$1;(statearr_328440_328480[1] = 2);
} else
{var statearr_328441_328481 = state_328437__$1;(statearr_328441_328481[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 2))
{var inst_328376 = (state_328437[7]);var inst_328379 = cljs.core.apply.call(null,cljs.core.hash_map,inst_328376);var state_328437__$1 = state_328437;var statearr_328442_328482 = state_328437__$1;(statearr_328442_328482[2] = inst_328379);
(statearr_328442_328482[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 3))
{var inst_328376 = (state_328437[7]);var state_328437__$1 = state_328437;var statearr_328443_328483 = state_328437__$1;(statearr_328443_328483[2] = inst_328376);
(statearr_328443_328483[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 4))
{var inst_328376 = (state_328437[7]);var inst_328382 = (state_328437[2]);var inst_328383 = cljs.core.get.call(null,inst_328382,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_328384 = cljs.core.get.call(null,inst_328382,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_328385 = cljs.core.get.call(null,inst_328382,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_328386 = inst_328376;var state_328437__$1 = (function (){var statearr_328444 = state_328437;(statearr_328444[8] = inst_328383);
(statearr_328444[9] = inst_328384);
(statearr_328444[10] = inst_328386);
(statearr_328444[11] = inst_328385);
return statearr_328444;
})();var statearr_328445_328484 = state_328437__$1;(statearr_328445_328484[2] = null);
(statearr_328445_328484[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 5))
{var inst_328386 = (state_328437[10]);var inst_328389 = cljs.core.seq_QMARK_.call(null,inst_328386);var state_328437__$1 = state_328437;if(inst_328389)
{var statearr_328446_328485 = state_328437__$1;(statearr_328446_328485[1] = 7);
} else
{var statearr_328447_328486 = state_328437__$1;(statearr_328447_328486[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 6))
{var inst_328435 = (state_328437[2]);var state_328437__$1 = state_328437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_328437__$1,inst_328435);
} else
{if((state_val_328438 === 7))
{var inst_328386 = (state_328437[10]);var inst_328391 = cljs.core.apply.call(null,cljs.core.hash_map,inst_328386);var state_328437__$1 = state_328437;var statearr_328448_328487 = state_328437__$1;(statearr_328448_328487[2] = inst_328391);
(statearr_328448_328487[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 8))
{var inst_328386 = (state_328437[10]);var state_328437__$1 = state_328437;var statearr_328449_328488 = state_328437__$1;(statearr_328449_328488[2] = inst_328386);
(statearr_328449_328488[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 9))
{var inst_328394 = (state_328437[12]);var inst_328394__$1 = (state_328437[2]);var inst_328395 = cljs.core.get.call(null,inst_328394__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_328396 = cljs.core.get.call(null,inst_328394__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_328397 = cljs.core.get.call(null,inst_328394__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_328437__$1 = (function (){var statearr_328450 = state_328437;(statearr_328450[12] = inst_328394__$1);
(statearr_328450[13] = inst_328397);
(statearr_328450[14] = inst_328396);
return statearr_328450;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_328437__$1,10,inst_328395);
} else
{if((state_val_328438 === 10))
{var inst_328402 = (state_328437[15]);var inst_328401 = (state_328437[16]);var inst_328400 = (state_328437[2]);var inst_328401__$1 = cljs.core.nth.call(null,inst_328400,0,null);var inst_328402__$1 = cljs.core.nth.call(null,inst_328400,1,null);var inst_328403 = (inst_328401__$1 == null);var inst_328404 = cljs.core._EQ_.call(null,inst_328402__$1,change);var inst_328405 = (inst_328403) || (inst_328404);var state_328437__$1 = (function (){var statearr_328451 = state_328437;(statearr_328451[15] = inst_328402__$1);
(statearr_328451[16] = inst_328401__$1);
return statearr_328451;
})();if(cljs.core.truth_(inst_328405))
{var statearr_328452_328489 = state_328437__$1;(statearr_328452_328489[1] = 11);
} else
{var statearr_328453_328490 = state_328437__$1;(statearr_328453_328490[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 11))
{var inst_328401 = (state_328437[16]);var inst_328407 = (inst_328401 == null);var state_328437__$1 = state_328437;if(cljs.core.truth_(inst_328407))
{var statearr_328454_328491 = state_328437__$1;(statearr_328454_328491[1] = 14);
} else
{var statearr_328455_328492 = state_328437__$1;(statearr_328455_328492[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 12))
{var inst_328402 = (state_328437[15]);var inst_328416 = (state_328437[17]);var inst_328397 = (state_328437[13]);var inst_328416__$1 = inst_328397.call(null,inst_328402);var state_328437__$1 = (function (){var statearr_328456 = state_328437;(statearr_328456[17] = inst_328416__$1);
return statearr_328456;
})();if(cljs.core.truth_(inst_328416__$1))
{var statearr_328457_328493 = state_328437__$1;(statearr_328457_328493[1] = 17);
} else
{var statearr_328458_328494 = state_328437__$1;(statearr_328458_328494[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 13))
{var inst_328433 = (state_328437[2]);var state_328437__$1 = state_328437;var statearr_328459_328495 = state_328437__$1;(statearr_328459_328495[2] = inst_328433);
(statearr_328459_328495[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 14))
{var inst_328402 = (state_328437[15]);var inst_328409 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_328402);var state_328437__$1 = state_328437;var statearr_328460_328496 = state_328437__$1;(statearr_328460_328496[2] = inst_328409);
(statearr_328460_328496[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 15))
{var state_328437__$1 = state_328437;var statearr_328461_328497 = state_328437__$1;(statearr_328461_328497[2] = null);
(statearr_328461_328497[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 16))
{var inst_328412 = (state_328437[2]);var inst_328413 = calc_state.call(null);var inst_328386 = inst_328413;var state_328437__$1 = (function (){var statearr_328462 = state_328437;(statearr_328462[18] = inst_328412);
(statearr_328462[10] = inst_328386);
return statearr_328462;
})();var statearr_328463_328498 = state_328437__$1;(statearr_328463_328498[2] = null);
(statearr_328463_328498[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 17))
{var inst_328416 = (state_328437[17]);var state_328437__$1 = state_328437;var statearr_328464_328499 = state_328437__$1;(statearr_328464_328499[2] = inst_328416);
(statearr_328464_328499[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 18))
{var inst_328402 = (state_328437[15]);var inst_328397 = (state_328437[13]);var inst_328396 = (state_328437[14]);var inst_328419 = cljs.core.empty_QMARK_.call(null,inst_328397);var inst_328420 = inst_328396.call(null,inst_328402);var inst_328421 = cljs.core.not.call(null,inst_328420);var inst_328422 = (inst_328419) && (inst_328421);var state_328437__$1 = state_328437;var statearr_328465_328500 = state_328437__$1;(statearr_328465_328500[2] = inst_328422);
(statearr_328465_328500[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 19))
{var inst_328424 = (state_328437[2]);var state_328437__$1 = state_328437;if(cljs.core.truth_(inst_328424))
{var statearr_328466_328501 = state_328437__$1;(statearr_328466_328501[1] = 20);
} else
{var statearr_328467_328502 = state_328437__$1;(statearr_328467_328502[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 20))
{var inst_328401 = (state_328437[16]);var state_328437__$1 = state_328437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_328437__$1,23,out,inst_328401);
} else
{if((state_val_328438 === 21))
{var state_328437__$1 = state_328437;var statearr_328468_328503 = state_328437__$1;(statearr_328468_328503[2] = null);
(statearr_328468_328503[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 22))
{var inst_328394 = (state_328437[12]);var inst_328430 = (state_328437[2]);var inst_328386 = inst_328394;var state_328437__$1 = (function (){var statearr_328469 = state_328437;(statearr_328469[10] = inst_328386);
(statearr_328469[19] = inst_328430);
return statearr_328469;
})();var statearr_328470_328504 = state_328437__$1;(statearr_328470_328504[2] = null);
(statearr_328470_328504[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328438 === 23))
{var inst_328427 = (state_328437[2]);var state_328437__$1 = state_328437;var statearr_328471_328505 = state_328437__$1;(statearr_328471_328505[2] = inst_328427);
(statearr_328471_328505[1] = 22);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_328475 = (new Array(20));(statearr_328475[0] = state_machine__17982__auto__);
(statearr_328475[1] = 1);
return statearr_328475;
});
var state_machine__17982__auto____1 = (function (state_328437){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_328437);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e328476){if((e328476 instanceof Object))
{var ex__17985__auto__ = e328476;var statearr_328477_328506 = state_328437;(statearr_328477_328506[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e328476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__328507 = state_328437;
state_328437 = G__328507;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_328437){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_328437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_328478 = f__18052__auto__.call(null);(statearr_328478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___328479);
return statearr_328478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.Pub = (function (){var obj328509 = {};return obj328509;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
return (function (topic){var or__13823__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13823__auto__,mults){
return (function (p1__328510_SHARP_){if(cljs.core.truth_(p1__328510_SHARP_.call(null,topic)))
{return p1__328510_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__328510_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13823__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t328635 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t328635 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta328636){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta328636 = meta328636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t328635.cljs$lang$type = true;
cljs.core.async.t328635.cljs$lang$ctorStr = "cljs.core.async/t328635";
cljs.core.async.t328635.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t328635");
});})(mults,ensure_mult))
;
cljs.core.async.t328635.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t328635.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t328635.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t328635.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t328635.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t328635.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t328635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t328635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_328637){var self__ = this;
var _328637__$1 = this;return self__.meta328636;
});})(mults,ensure_mult))
;
cljs.core.async.t328635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_328637,meta328636__$1){var self__ = this;
var _328637__$1 = this;return (new cljs.core.async.t328635(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta328636__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t328635 = ((function (mults,ensure_mult){
return (function __GT_t328635(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta328636){return (new cljs.core.async.t328635(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta328636));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t328635(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18051__auto___328759 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_328711){var state_val_328712 = (state_328711[1]);if((state_val_328712 === 1))
{var state_328711__$1 = state_328711;var statearr_328713_328760 = state_328711__$1;(statearr_328713_328760[2] = null);
(statearr_328713_328760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 2))
{var state_328711__$1 = state_328711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_328711__$1,4,ch);
} else
{if((state_val_328712 === 3))
{var inst_328709 = (state_328711[2]);var state_328711__$1 = state_328711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_328711__$1,inst_328709);
} else
{if((state_val_328712 === 4))
{var inst_328640 = (state_328711[7]);var inst_328640__$1 = (state_328711[2]);var inst_328641 = (inst_328640__$1 == null);var state_328711__$1 = (function (){var statearr_328714 = state_328711;(statearr_328714[7] = inst_328640__$1);
return statearr_328714;
})();if(cljs.core.truth_(inst_328641))
{var statearr_328715_328761 = state_328711__$1;(statearr_328715_328761[1] = 5);
} else
{var statearr_328716_328762 = state_328711__$1;(statearr_328716_328762[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 5))
{var inst_328647 = cljs.core.deref.call(null,mults);var inst_328648 = cljs.core.vals.call(null,inst_328647);var inst_328649 = cljs.core.seq.call(null,inst_328648);var inst_328650 = inst_328649;var inst_328651 = null;var inst_328652 = 0;var inst_328653 = 0;var state_328711__$1 = (function (){var statearr_328717 = state_328711;(statearr_328717[8] = inst_328653);
(statearr_328717[9] = inst_328650);
(statearr_328717[10] = inst_328652);
(statearr_328717[11] = inst_328651);
return statearr_328717;
})();var statearr_328718_328763 = state_328711__$1;(statearr_328718_328763[2] = null);
(statearr_328718_328763[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 6))
{var inst_328688 = (state_328711[12]);var inst_328640 = (state_328711[7]);var inst_328690 = (state_328711[13]);var inst_328688__$1 = topic_fn.call(null,inst_328640);var inst_328689 = cljs.core.deref.call(null,mults);var inst_328690__$1 = cljs.core.get.call(null,inst_328689,inst_328688__$1);var state_328711__$1 = (function (){var statearr_328719 = state_328711;(statearr_328719[12] = inst_328688__$1);
(statearr_328719[13] = inst_328690__$1);
return statearr_328719;
})();if(cljs.core.truth_(inst_328690__$1))
{var statearr_328720_328764 = state_328711__$1;(statearr_328720_328764[1] = 19);
} else
{var statearr_328721_328765 = state_328711__$1;(statearr_328721_328765[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 7))
{var inst_328707 = (state_328711[2]);var state_328711__$1 = state_328711;var statearr_328722_328766 = state_328711__$1;(statearr_328722_328766[2] = inst_328707);
(statearr_328722_328766[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 8))
{var inst_328653 = (state_328711[8]);var inst_328652 = (state_328711[10]);var inst_328655 = (inst_328653 < inst_328652);var inst_328656 = inst_328655;var state_328711__$1 = state_328711;if(cljs.core.truth_(inst_328656))
{var statearr_328726_328767 = state_328711__$1;(statearr_328726_328767[1] = 10);
} else
{var statearr_328727_328768 = state_328711__$1;(statearr_328727_328768[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 9))
{var inst_328686 = (state_328711[2]);var state_328711__$1 = state_328711;var statearr_328728_328769 = state_328711__$1;(statearr_328728_328769[2] = inst_328686);
(statearr_328728_328769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 10))
{var inst_328653 = (state_328711[8]);var inst_328650 = (state_328711[9]);var inst_328652 = (state_328711[10]);var inst_328651 = (state_328711[11]);var inst_328658 = cljs.core._nth.call(null,inst_328651,inst_328653);var inst_328659 = cljs.core.async.muxch_STAR_.call(null,inst_328658);var inst_328660 = cljs.core.async.close_BANG_.call(null,inst_328659);var inst_328661 = (inst_328653 + 1);var tmp328723 = inst_328650;var tmp328724 = inst_328652;var tmp328725 = inst_328651;var inst_328650__$1 = tmp328723;var inst_328651__$1 = tmp328725;var inst_328652__$1 = tmp328724;var inst_328653__$1 = inst_328661;var state_328711__$1 = (function (){var statearr_328729 = state_328711;(statearr_328729[8] = inst_328653__$1);
(statearr_328729[9] = inst_328650__$1);
(statearr_328729[10] = inst_328652__$1);
(statearr_328729[11] = inst_328651__$1);
(statearr_328729[14] = inst_328660);
return statearr_328729;
})();var statearr_328730_328770 = state_328711__$1;(statearr_328730_328770[2] = null);
(statearr_328730_328770[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 11))
{var inst_328650 = (state_328711[9]);var inst_328664 = (state_328711[15]);var inst_328664__$1 = cljs.core.seq.call(null,inst_328650);var state_328711__$1 = (function (){var statearr_328731 = state_328711;(statearr_328731[15] = inst_328664__$1);
return statearr_328731;
})();if(inst_328664__$1)
{var statearr_328732_328771 = state_328711__$1;(statearr_328732_328771[1] = 13);
} else
{var statearr_328733_328772 = state_328711__$1;(statearr_328733_328772[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 12))
{var inst_328684 = (state_328711[2]);var state_328711__$1 = state_328711;var statearr_328734_328773 = state_328711__$1;(statearr_328734_328773[2] = inst_328684);
(statearr_328734_328773[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 13))
{var inst_328664 = (state_328711[15]);var inst_328666 = cljs.core.chunked_seq_QMARK_.call(null,inst_328664);var state_328711__$1 = state_328711;if(inst_328666)
{var statearr_328735_328774 = state_328711__$1;(statearr_328735_328774[1] = 16);
} else
{var statearr_328736_328775 = state_328711__$1;(statearr_328736_328775[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 14))
{var state_328711__$1 = state_328711;var statearr_328737_328776 = state_328711__$1;(statearr_328737_328776[2] = null);
(statearr_328737_328776[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 15))
{var inst_328682 = (state_328711[2]);var state_328711__$1 = state_328711;var statearr_328738_328777 = state_328711__$1;(statearr_328738_328777[2] = inst_328682);
(statearr_328738_328777[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 16))
{var inst_328664 = (state_328711[15]);var inst_328668 = cljs.core.chunk_first.call(null,inst_328664);var inst_328669 = cljs.core.chunk_rest.call(null,inst_328664);var inst_328670 = cljs.core.count.call(null,inst_328668);var inst_328650 = inst_328669;var inst_328651 = inst_328668;var inst_328652 = inst_328670;var inst_328653 = 0;var state_328711__$1 = (function (){var statearr_328739 = state_328711;(statearr_328739[8] = inst_328653);
(statearr_328739[9] = inst_328650);
(statearr_328739[10] = inst_328652);
(statearr_328739[11] = inst_328651);
return statearr_328739;
})();var statearr_328740_328778 = state_328711__$1;(statearr_328740_328778[2] = null);
(statearr_328740_328778[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 17))
{var inst_328664 = (state_328711[15]);var inst_328673 = cljs.core.first.call(null,inst_328664);var inst_328674 = cljs.core.async.muxch_STAR_.call(null,inst_328673);var inst_328675 = cljs.core.async.close_BANG_.call(null,inst_328674);var inst_328676 = cljs.core.next.call(null,inst_328664);var inst_328650 = inst_328676;var inst_328651 = null;var inst_328652 = 0;var inst_328653 = 0;var state_328711__$1 = (function (){var statearr_328741 = state_328711;(statearr_328741[8] = inst_328653);
(statearr_328741[9] = inst_328650);
(statearr_328741[10] = inst_328652);
(statearr_328741[11] = inst_328651);
(statearr_328741[16] = inst_328675);
return statearr_328741;
})();var statearr_328742_328779 = state_328711__$1;(statearr_328742_328779[2] = null);
(statearr_328742_328779[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 18))
{var inst_328679 = (state_328711[2]);var state_328711__$1 = state_328711;var statearr_328743_328780 = state_328711__$1;(statearr_328743_328780[2] = inst_328679);
(statearr_328743_328780[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 19))
{var state_328711__$1 = state_328711;var statearr_328744_328781 = state_328711__$1;(statearr_328744_328781[2] = null);
(statearr_328744_328781[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 20))
{var state_328711__$1 = state_328711;var statearr_328745_328782 = state_328711__$1;(statearr_328745_328782[2] = null);
(statearr_328745_328782[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 21))
{var inst_328704 = (state_328711[2]);var state_328711__$1 = (function (){var statearr_328746 = state_328711;(statearr_328746[17] = inst_328704);
return statearr_328746;
})();var statearr_328747_328783 = state_328711__$1;(statearr_328747_328783[2] = null);
(statearr_328747_328783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 22))
{var inst_328701 = (state_328711[2]);var state_328711__$1 = state_328711;var statearr_328748_328784 = state_328711__$1;(statearr_328748_328784[2] = inst_328701);
(statearr_328748_328784[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 23))
{var inst_328688 = (state_328711[12]);var inst_328692 = (state_328711[2]);var inst_328693 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_328688);var state_328711__$1 = (function (){var statearr_328749 = state_328711;(statearr_328749[18] = inst_328692);
return statearr_328749;
})();var statearr_328750_328785 = state_328711__$1;(statearr_328750_328785[2] = inst_328693);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328711__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328712 === 24))
{var inst_328640 = (state_328711[7]);var inst_328690 = (state_328711[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_328711,23,Object,null,22);var inst_328697 = cljs.core.async.muxch_STAR_.call(null,inst_328690);var state_328711__$1 = state_328711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_328711__$1,25,inst_328697,inst_328640);
} else
{if((state_val_328712 === 25))
{var inst_328699 = (state_328711[2]);var state_328711__$1 = state_328711;var statearr_328751_328786 = state_328711__$1;(statearr_328751_328786[2] = inst_328699);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328711__$1);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_328755 = (new Array(19));(statearr_328755[0] = state_machine__17982__auto__);
(statearr_328755[1] = 1);
return statearr_328755;
});
var state_machine__17982__auto____1 = (function (state_328711){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_328711);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e328756){if((e328756 instanceof Object))
{var ex__17985__auto__ = e328756;var statearr_328757_328787 = state_328711;(statearr_328757_328787[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e328756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__328788 = state_328711;
state_328711 = G__328788;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_328711){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_328711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_328758 = f__18052__auto__.call(null);(statearr_328758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___328759);
return statearr_328758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
,cljs.core.range.call(null,cnt));var c__18051__auto___328925 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_328895){var state_val_328896 = (state_328895[1]);if((state_val_328896 === 1))
{var state_328895__$1 = state_328895;var statearr_328897_328926 = state_328895__$1;(statearr_328897_328926[2] = null);
(statearr_328897_328926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 2))
{var inst_328858 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_328859 = 0;var state_328895__$1 = (function (){var statearr_328898 = state_328895;(statearr_328898[7] = inst_328858);
(statearr_328898[8] = inst_328859);
return statearr_328898;
})();var statearr_328899_328927 = state_328895__$1;(statearr_328899_328927[2] = null);
(statearr_328899_328927[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 3))
{var inst_328893 = (state_328895[2]);var state_328895__$1 = state_328895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_328895__$1,inst_328893);
} else
{if((state_val_328896 === 4))
{var inst_328859 = (state_328895[8]);var inst_328861 = (inst_328859 < cnt);var state_328895__$1 = state_328895;if(cljs.core.truth_(inst_328861))
{var statearr_328900_328928 = state_328895__$1;(statearr_328900_328928[1] = 6);
} else
{var statearr_328901_328929 = state_328895__$1;(statearr_328901_328929[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 5))
{var inst_328879 = (state_328895[2]);var state_328895__$1 = (function (){var statearr_328902 = state_328895;(statearr_328902[9] = inst_328879);
return statearr_328902;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_328895__$1,12,dchan);
} else
{if((state_val_328896 === 6))
{var state_328895__$1 = state_328895;var statearr_328903_328930 = state_328895__$1;(statearr_328903_328930[2] = null);
(statearr_328903_328930[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 7))
{var state_328895__$1 = state_328895;var statearr_328904_328931 = state_328895__$1;(statearr_328904_328931[2] = null);
(statearr_328904_328931[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 8))
{var inst_328877 = (state_328895[2]);var state_328895__$1 = state_328895;var statearr_328905_328932 = state_328895__$1;(statearr_328905_328932[2] = inst_328877);
(statearr_328905_328932[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 9))
{var inst_328859 = (state_328895[8]);var inst_328872 = (state_328895[2]);var inst_328873 = (inst_328859 + 1);var inst_328859__$1 = inst_328873;var state_328895__$1 = (function (){var statearr_328906 = state_328895;(statearr_328906[8] = inst_328859__$1);
(statearr_328906[10] = inst_328872);
return statearr_328906;
})();var statearr_328907_328933 = state_328895__$1;(statearr_328907_328933[2] = null);
(statearr_328907_328933[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 10))
{var inst_328863 = (state_328895[2]);var inst_328864 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_328895__$1 = (function (){var statearr_328908 = state_328895;(statearr_328908[11] = inst_328863);
return statearr_328908;
})();var statearr_328909_328934 = state_328895__$1;(statearr_328909_328934[2] = inst_328864);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328895__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 11))
{var inst_328859 = (state_328895[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_328895,10,Object,null,9);var inst_328868 = chs__$1.call(null,inst_328859);var inst_328869 = done.call(null,inst_328859);var inst_328870 = cljs.core.async.take_BANG_.call(null,inst_328868,inst_328869);var state_328895__$1 = state_328895;var statearr_328910_328935 = state_328895__$1;(statearr_328910_328935[2] = inst_328870);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328895__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 12))
{var inst_328881 = (state_328895[12]);var inst_328881__$1 = (state_328895[2]);var inst_328882 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_328881__$1);var state_328895__$1 = (function (){var statearr_328911 = state_328895;(statearr_328911[12] = inst_328881__$1);
return statearr_328911;
})();if(cljs.core.truth_(inst_328882))
{var statearr_328912_328936 = state_328895__$1;(statearr_328912_328936[1] = 13);
} else
{var statearr_328913_328937 = state_328895__$1;(statearr_328913_328937[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 13))
{var inst_328884 = cljs.core.async.close_BANG_.call(null,out);var state_328895__$1 = state_328895;var statearr_328914_328938 = state_328895__$1;(statearr_328914_328938[2] = inst_328884);
(statearr_328914_328938[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 14))
{var inst_328881 = (state_328895[12]);var inst_328886 = cljs.core.apply.call(null,f,inst_328881);var state_328895__$1 = state_328895;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_328895__$1,16,out,inst_328886);
} else
{if((state_val_328896 === 15))
{var inst_328891 = (state_328895[2]);var state_328895__$1 = state_328895;var statearr_328915_328939 = state_328895__$1;(statearr_328915_328939[2] = inst_328891);
(statearr_328915_328939[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_328896 === 16))
{var inst_328888 = (state_328895[2]);var state_328895__$1 = (function (){var statearr_328916 = state_328895;(statearr_328916[13] = inst_328888);
return statearr_328916;
})();var statearr_328917_328940 = state_328895__$1;(statearr_328917_328940[2] = null);
(statearr_328917_328940[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_328921 = (new Array(14));(statearr_328921[0] = state_machine__17982__auto__);
(statearr_328921[1] = 1);
return statearr_328921;
});
var state_machine__17982__auto____1 = (function (state_328895){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_328895);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e328922){if((e328922 instanceof Object))
{var ex__17985__auto__ = e328922;var statearr_328923_328941 = state_328895;(statearr_328923_328941[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328895);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e328922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__328942 = state_328895;
state_328895 = G__328942;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_328895){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_328895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_328924 = f__18052__auto__.call(null);(statearr_328924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___328925);
return statearr_328924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___329050 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_329026){var state_val_329027 = (state_329026[1]);if((state_val_329027 === 1))
{var inst_328997 = cljs.core.vec.call(null,chs);var inst_328998 = inst_328997;var state_329026__$1 = (function (){var statearr_329028 = state_329026;(statearr_329028[7] = inst_328998);
return statearr_329028;
})();var statearr_329029_329051 = state_329026__$1;(statearr_329029_329051[2] = null);
(statearr_329029_329051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329027 === 2))
{var inst_328998 = (state_329026[7]);var inst_329000 = cljs.core.count.call(null,inst_328998);var inst_329001 = (inst_329000 > 0);var state_329026__$1 = state_329026;if(cljs.core.truth_(inst_329001))
{var statearr_329030_329052 = state_329026__$1;(statearr_329030_329052[1] = 4);
} else
{var statearr_329031_329053 = state_329026__$1;(statearr_329031_329053[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329027 === 3))
{var inst_329024 = (state_329026[2]);var state_329026__$1 = state_329026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329026__$1,inst_329024);
} else
{if((state_val_329027 === 4))
{var inst_328998 = (state_329026[7]);var state_329026__$1 = state_329026;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_329026__$1,7,inst_328998);
} else
{if((state_val_329027 === 5))
{var inst_329020 = cljs.core.async.close_BANG_.call(null,out);var state_329026__$1 = state_329026;var statearr_329032_329054 = state_329026__$1;(statearr_329032_329054[2] = inst_329020);
(statearr_329032_329054[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329027 === 6))
{var inst_329022 = (state_329026[2]);var state_329026__$1 = state_329026;var statearr_329033_329055 = state_329026__$1;(statearr_329033_329055[2] = inst_329022);
(statearr_329033_329055[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329027 === 7))
{var inst_329005 = (state_329026[8]);var inst_329006 = (state_329026[9]);var inst_329005__$1 = (state_329026[2]);var inst_329006__$1 = cljs.core.nth.call(null,inst_329005__$1,0,null);var inst_329007 = cljs.core.nth.call(null,inst_329005__$1,1,null);var inst_329008 = (inst_329006__$1 == null);var state_329026__$1 = (function (){var statearr_329034 = state_329026;(statearr_329034[10] = inst_329007);
(statearr_329034[8] = inst_329005__$1);
(statearr_329034[9] = inst_329006__$1);
return statearr_329034;
})();if(cljs.core.truth_(inst_329008))
{var statearr_329035_329056 = state_329026__$1;(statearr_329035_329056[1] = 8);
} else
{var statearr_329036_329057 = state_329026__$1;(statearr_329036_329057[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329027 === 8))
{var inst_328998 = (state_329026[7]);var inst_329007 = (state_329026[10]);var inst_329005 = (state_329026[8]);var inst_329006 = (state_329026[9]);var inst_329010 = (function (){var c = inst_329007;var v = inst_329006;var vec__329003 = inst_329005;var cs = inst_328998;return ((function (c,v,vec__329003,cs,inst_328998,inst_329007,inst_329005,inst_329006,state_val_329027){
return (function (p1__328943_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__328943_SHARP_);
});
;})(c,v,vec__329003,cs,inst_328998,inst_329007,inst_329005,inst_329006,state_val_329027))
})();var inst_329011 = cljs.core.filterv.call(null,inst_329010,inst_328998);var inst_328998__$1 = inst_329011;var state_329026__$1 = (function (){var statearr_329037 = state_329026;(statearr_329037[7] = inst_328998__$1);
return statearr_329037;
})();var statearr_329038_329058 = state_329026__$1;(statearr_329038_329058[2] = null);
(statearr_329038_329058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329027 === 9))
{var inst_329006 = (state_329026[9]);var state_329026__$1 = state_329026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329026__$1,11,out,inst_329006);
} else
{if((state_val_329027 === 10))
{var inst_329018 = (state_329026[2]);var state_329026__$1 = state_329026;var statearr_329040_329059 = state_329026__$1;(statearr_329040_329059[2] = inst_329018);
(statearr_329040_329059[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329027 === 11))
{var inst_328998 = (state_329026[7]);var inst_329015 = (state_329026[2]);var tmp329039 = inst_328998;var inst_328998__$1 = tmp329039;var state_329026__$1 = (function (){var statearr_329041 = state_329026;(statearr_329041[11] = inst_329015);
(statearr_329041[7] = inst_328998__$1);
return statearr_329041;
})();var statearr_329042_329060 = state_329026__$1;(statearr_329042_329060[2] = null);
(statearr_329042_329060[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_329046 = (new Array(12));(statearr_329046[0] = state_machine__17982__auto__);
(statearr_329046[1] = 1);
return statearr_329046;
});
var state_machine__17982__auto____1 = (function (state_329026){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_329026);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e329047){if((e329047 instanceof Object))
{var ex__17985__auto__ = e329047;var statearr_329048_329061 = state_329026;(statearr_329048_329061[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329026);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e329047;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__329062 = state_329026;
state_329026 = G__329062;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_329026){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_329026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_329049 = f__18052__auto__.call(null);(statearr_329049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___329050);
return statearr_329049;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___329155 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_329132){var state_val_329133 = (state_329132[1]);if((state_val_329133 === 1))
{var inst_329109 = 0;var state_329132__$1 = (function (){var statearr_329134 = state_329132;(statearr_329134[7] = inst_329109);
return statearr_329134;
})();var statearr_329135_329156 = state_329132__$1;(statearr_329135_329156[2] = null);
(statearr_329135_329156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329133 === 2))
{var inst_329109 = (state_329132[7]);var inst_329111 = (inst_329109 < n);var state_329132__$1 = state_329132;if(cljs.core.truth_(inst_329111))
{var statearr_329136_329157 = state_329132__$1;(statearr_329136_329157[1] = 4);
} else
{var statearr_329137_329158 = state_329132__$1;(statearr_329137_329158[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329133 === 3))
{var inst_329129 = (state_329132[2]);var inst_329130 = cljs.core.async.close_BANG_.call(null,out);var state_329132__$1 = (function (){var statearr_329138 = state_329132;(statearr_329138[8] = inst_329129);
return statearr_329138;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329132__$1,inst_329130);
} else
{if((state_val_329133 === 4))
{var state_329132__$1 = state_329132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329132__$1,7,ch);
} else
{if((state_val_329133 === 5))
{var state_329132__$1 = state_329132;var statearr_329139_329159 = state_329132__$1;(statearr_329139_329159[2] = null);
(statearr_329139_329159[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329133 === 6))
{var inst_329127 = (state_329132[2]);var state_329132__$1 = state_329132;var statearr_329140_329160 = state_329132__$1;(statearr_329140_329160[2] = inst_329127);
(statearr_329140_329160[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329133 === 7))
{var inst_329114 = (state_329132[9]);var inst_329114__$1 = (state_329132[2]);var inst_329115 = (inst_329114__$1 == null);var inst_329116 = cljs.core.not.call(null,inst_329115);var state_329132__$1 = (function (){var statearr_329141 = state_329132;(statearr_329141[9] = inst_329114__$1);
return statearr_329141;
})();if(inst_329116)
{var statearr_329142_329161 = state_329132__$1;(statearr_329142_329161[1] = 8);
} else
{var statearr_329143_329162 = state_329132__$1;(statearr_329143_329162[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329133 === 8))
{var inst_329114 = (state_329132[9]);var state_329132__$1 = state_329132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329132__$1,11,out,inst_329114);
} else
{if((state_val_329133 === 9))
{var state_329132__$1 = state_329132;var statearr_329144_329163 = state_329132__$1;(statearr_329144_329163[2] = null);
(statearr_329144_329163[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329133 === 10))
{var inst_329124 = (state_329132[2]);var state_329132__$1 = state_329132;var statearr_329145_329164 = state_329132__$1;(statearr_329145_329164[2] = inst_329124);
(statearr_329145_329164[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329133 === 11))
{var inst_329109 = (state_329132[7]);var inst_329119 = (state_329132[2]);var inst_329120 = (inst_329109 + 1);var inst_329109__$1 = inst_329120;var state_329132__$1 = (function (){var statearr_329146 = state_329132;(statearr_329146[7] = inst_329109__$1);
(statearr_329146[10] = inst_329119);
return statearr_329146;
})();var statearr_329147_329165 = state_329132__$1;(statearr_329147_329165[2] = null);
(statearr_329147_329165[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_329151 = (new Array(11));(statearr_329151[0] = state_machine__17982__auto__);
(statearr_329151[1] = 1);
return statearr_329151;
});
var state_machine__17982__auto____1 = (function (state_329132){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_329132);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e329152){if((e329152 instanceof Object))
{var ex__17985__auto__ = e329152;var statearr_329153_329166 = state_329132;(statearr_329153_329166[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329132);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e329152;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__329167 = state_329132;
state_329132 = G__329167;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_329132){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_329132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_329154 = f__18052__auto__.call(null);(statearr_329154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___329155);
return statearr_329154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___329264 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_329239){var state_val_329240 = (state_329239[1]);if((state_val_329240 === 1))
{var inst_329216 = null;var state_329239__$1 = (function (){var statearr_329241 = state_329239;(statearr_329241[7] = inst_329216);
return statearr_329241;
})();var statearr_329242_329265 = state_329239__$1;(statearr_329242_329265[2] = null);
(statearr_329242_329265[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329240 === 2))
{var state_329239__$1 = state_329239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329239__$1,4,ch);
} else
{if((state_val_329240 === 3))
{var inst_329236 = (state_329239[2]);var inst_329237 = cljs.core.async.close_BANG_.call(null,out);var state_329239__$1 = (function (){var statearr_329243 = state_329239;(statearr_329243[8] = inst_329236);
return statearr_329243;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329239__$1,inst_329237);
} else
{if((state_val_329240 === 4))
{var inst_329219 = (state_329239[9]);var inst_329219__$1 = (state_329239[2]);var inst_329220 = (inst_329219__$1 == null);var inst_329221 = cljs.core.not.call(null,inst_329220);var state_329239__$1 = (function (){var statearr_329244 = state_329239;(statearr_329244[9] = inst_329219__$1);
return statearr_329244;
})();if(inst_329221)
{var statearr_329245_329266 = state_329239__$1;(statearr_329245_329266[1] = 5);
} else
{var statearr_329246_329267 = state_329239__$1;(statearr_329246_329267[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329240 === 5))
{var inst_329216 = (state_329239[7]);var inst_329219 = (state_329239[9]);var inst_329223 = cljs.core._EQ_.call(null,inst_329219,inst_329216);var state_329239__$1 = state_329239;if(inst_329223)
{var statearr_329247_329268 = state_329239__$1;(statearr_329247_329268[1] = 8);
} else
{var statearr_329248_329269 = state_329239__$1;(statearr_329248_329269[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329240 === 6))
{var state_329239__$1 = state_329239;var statearr_329250_329270 = state_329239__$1;(statearr_329250_329270[2] = null);
(statearr_329250_329270[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329240 === 7))
{var inst_329234 = (state_329239[2]);var state_329239__$1 = state_329239;var statearr_329251_329271 = state_329239__$1;(statearr_329251_329271[2] = inst_329234);
(statearr_329251_329271[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329240 === 8))
{var inst_329216 = (state_329239[7]);var tmp329249 = inst_329216;var inst_329216__$1 = tmp329249;var state_329239__$1 = (function (){var statearr_329252 = state_329239;(statearr_329252[7] = inst_329216__$1);
return statearr_329252;
})();var statearr_329253_329272 = state_329239__$1;(statearr_329253_329272[2] = null);
(statearr_329253_329272[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329240 === 9))
{var inst_329219 = (state_329239[9]);var state_329239__$1 = state_329239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329239__$1,11,out,inst_329219);
} else
{if((state_val_329240 === 10))
{var inst_329231 = (state_329239[2]);var state_329239__$1 = state_329239;var statearr_329254_329273 = state_329239__$1;(statearr_329254_329273[2] = inst_329231);
(statearr_329254_329273[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329240 === 11))
{var inst_329219 = (state_329239[9]);var inst_329228 = (state_329239[2]);var inst_329216 = inst_329219;var state_329239__$1 = (function (){var statearr_329255 = state_329239;(statearr_329255[7] = inst_329216);
(statearr_329255[10] = inst_329228);
return statearr_329255;
})();var statearr_329256_329274 = state_329239__$1;(statearr_329256_329274[2] = null);
(statearr_329256_329274[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_329260 = (new Array(11));(statearr_329260[0] = state_machine__17982__auto__);
(statearr_329260[1] = 1);
return statearr_329260;
});
var state_machine__17982__auto____1 = (function (state_329239){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_329239);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e329261){if((e329261 instanceof Object))
{var ex__17985__auto__ = e329261;var statearr_329262_329275 = state_329239;(statearr_329262_329275[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329239);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e329261;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__329276 = state_329239;
state_329239 = G__329276;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_329239){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_329239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_329263 = f__18052__auto__.call(null);(statearr_329263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___329264);
return statearr_329263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___329411 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_329381){var state_val_329382 = (state_329381[1]);if((state_val_329382 === 1))
{var inst_329344 = (new Array(n));var inst_329345 = inst_329344;var inst_329346 = 0;var state_329381__$1 = (function (){var statearr_329383 = state_329381;(statearr_329383[7] = inst_329346);
(statearr_329383[8] = inst_329345);
return statearr_329383;
})();var statearr_329384_329412 = state_329381__$1;(statearr_329384_329412[2] = null);
(statearr_329384_329412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329382 === 2))
{var state_329381__$1 = state_329381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329381__$1,4,ch);
} else
{if((state_val_329382 === 3))
{var inst_329379 = (state_329381[2]);var state_329381__$1 = state_329381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329381__$1,inst_329379);
} else
{if((state_val_329382 === 4))
{var inst_329349 = (state_329381[9]);var inst_329349__$1 = (state_329381[2]);var inst_329350 = (inst_329349__$1 == null);var inst_329351 = cljs.core.not.call(null,inst_329350);var state_329381__$1 = (function (){var statearr_329385 = state_329381;(statearr_329385[9] = inst_329349__$1);
return statearr_329385;
})();if(inst_329351)
{var statearr_329386_329413 = state_329381__$1;(statearr_329386_329413[1] = 5);
} else
{var statearr_329387_329414 = state_329381__$1;(statearr_329387_329414[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329382 === 5))
{var inst_329349 = (state_329381[9]);var inst_329346 = (state_329381[7]);var inst_329345 = (state_329381[8]);var inst_329354 = (state_329381[10]);var inst_329353 = (inst_329345[inst_329346] = inst_329349);var inst_329354__$1 = (inst_329346 + 1);var inst_329355 = (inst_329354__$1 < n);var state_329381__$1 = (function (){var statearr_329388 = state_329381;(statearr_329388[10] = inst_329354__$1);
(statearr_329388[11] = inst_329353);
return statearr_329388;
})();if(cljs.core.truth_(inst_329355))
{var statearr_329389_329415 = state_329381__$1;(statearr_329389_329415[1] = 8);
} else
{var statearr_329390_329416 = state_329381__$1;(statearr_329390_329416[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329382 === 6))
{var inst_329346 = (state_329381[7]);var inst_329367 = (inst_329346 > 0);var state_329381__$1 = state_329381;if(cljs.core.truth_(inst_329367))
{var statearr_329392_329417 = state_329381__$1;(statearr_329392_329417[1] = 12);
} else
{var statearr_329393_329418 = state_329381__$1;(statearr_329393_329418[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329382 === 7))
{var inst_329377 = (state_329381[2]);var state_329381__$1 = state_329381;var statearr_329394_329419 = state_329381__$1;(statearr_329394_329419[2] = inst_329377);
(statearr_329394_329419[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329382 === 8))
{var inst_329345 = (state_329381[8]);var inst_329354 = (state_329381[10]);var tmp329391 = inst_329345;var inst_329345__$1 = tmp329391;var inst_329346 = inst_329354;var state_329381__$1 = (function (){var statearr_329395 = state_329381;(statearr_329395[7] = inst_329346);
(statearr_329395[8] = inst_329345__$1);
return statearr_329395;
})();var statearr_329396_329420 = state_329381__$1;(statearr_329396_329420[2] = null);
(statearr_329396_329420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329382 === 9))
{var inst_329345 = (state_329381[8]);var inst_329359 = cljs.core.vec.call(null,inst_329345);var state_329381__$1 = state_329381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329381__$1,11,out,inst_329359);
} else
{if((state_val_329382 === 10))
{var inst_329365 = (state_329381[2]);var state_329381__$1 = state_329381;var statearr_329397_329421 = state_329381__$1;(statearr_329397_329421[2] = inst_329365);
(statearr_329397_329421[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329382 === 11))
{var inst_329361 = (state_329381[2]);var inst_329362 = (new Array(n));var inst_329345 = inst_329362;var inst_329346 = 0;var state_329381__$1 = (function (){var statearr_329398 = state_329381;(statearr_329398[12] = inst_329361);
(statearr_329398[7] = inst_329346);
(statearr_329398[8] = inst_329345);
return statearr_329398;
})();var statearr_329399_329422 = state_329381__$1;(statearr_329399_329422[2] = null);
(statearr_329399_329422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329382 === 12))
{var inst_329345 = (state_329381[8]);var inst_329369 = cljs.core.vec.call(null,inst_329345);var state_329381__$1 = state_329381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329381__$1,15,out,inst_329369);
} else
{if((state_val_329382 === 13))
{var state_329381__$1 = state_329381;var statearr_329400_329423 = state_329381__$1;(statearr_329400_329423[2] = null);
(statearr_329400_329423[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329382 === 14))
{var inst_329374 = (state_329381[2]);var inst_329375 = cljs.core.async.close_BANG_.call(null,out);var state_329381__$1 = (function (){var statearr_329401 = state_329381;(statearr_329401[13] = inst_329374);
return statearr_329401;
})();var statearr_329402_329424 = state_329381__$1;(statearr_329402_329424[2] = inst_329375);
(statearr_329402_329424[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329382 === 15))
{var inst_329371 = (state_329381[2]);var state_329381__$1 = state_329381;var statearr_329403_329425 = state_329381__$1;(statearr_329403_329425[2] = inst_329371);
(statearr_329403_329425[1] = 14);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_329407 = (new Array(14));(statearr_329407[0] = state_machine__17982__auto__);
(statearr_329407[1] = 1);
return statearr_329407;
});
var state_machine__17982__auto____1 = (function (state_329381){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_329381);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e329408){if((e329408 instanceof Object))
{var ex__17985__auto__ = e329408;var statearr_329409_329426 = state_329381;(statearr_329409_329426[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329381);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e329408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__329427 = state_329381;
state_329381 = G__329427;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_329381){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_329381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_329410 = f__18052__auto__.call(null);(statearr_329410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___329411);
return statearr_329410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___329570 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_329540){var state_val_329541 = (state_329540[1]);if((state_val_329541 === 1))
{var inst_329499 = (new Array(0));var inst_329500 = inst_329499;var inst_329501 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_329540__$1 = (function (){var statearr_329542 = state_329540;(statearr_329542[7] = inst_329500);
(statearr_329542[8] = inst_329501);
return statearr_329542;
})();var statearr_329543_329571 = state_329540__$1;(statearr_329543_329571[2] = null);
(statearr_329543_329571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329541 === 2))
{var state_329540__$1 = state_329540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329540__$1,4,ch);
} else
{if((state_val_329541 === 3))
{var inst_329538 = (state_329540[2]);var state_329540__$1 = state_329540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329540__$1,inst_329538);
} else
{if((state_val_329541 === 4))
{var inst_329504 = (state_329540[9]);var inst_329504__$1 = (state_329540[2]);var inst_329505 = (inst_329504__$1 == null);var inst_329506 = cljs.core.not.call(null,inst_329505);var state_329540__$1 = (function (){var statearr_329544 = state_329540;(statearr_329544[9] = inst_329504__$1);
return statearr_329544;
})();if(inst_329506)
{var statearr_329545_329572 = state_329540__$1;(statearr_329545_329572[1] = 5);
} else
{var statearr_329546_329573 = state_329540__$1;(statearr_329546_329573[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329541 === 5))
{var inst_329504 = (state_329540[9]);var inst_329501 = (state_329540[8]);var inst_329508 = (state_329540[10]);var inst_329508__$1 = f.call(null,inst_329504);var inst_329509 = cljs.core._EQ_.call(null,inst_329508__$1,inst_329501);var inst_329510 = cljs.core.keyword_identical_QMARK_.call(null,inst_329501,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_329511 = (inst_329509) || (inst_329510);var state_329540__$1 = (function (){var statearr_329547 = state_329540;(statearr_329547[10] = inst_329508__$1);
return statearr_329547;
})();if(cljs.core.truth_(inst_329511))
{var statearr_329548_329574 = state_329540__$1;(statearr_329548_329574[1] = 8);
} else
{var statearr_329549_329575 = state_329540__$1;(statearr_329549_329575[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329541 === 6))
{var inst_329500 = (state_329540[7]);var inst_329525 = inst_329500.length;var inst_329526 = (inst_329525 > 0);var state_329540__$1 = state_329540;if(cljs.core.truth_(inst_329526))
{var statearr_329551_329576 = state_329540__$1;(statearr_329551_329576[1] = 12);
} else
{var statearr_329552_329577 = state_329540__$1;(statearr_329552_329577[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329541 === 7))
{var inst_329536 = (state_329540[2]);var state_329540__$1 = state_329540;var statearr_329553_329578 = state_329540__$1;(statearr_329553_329578[2] = inst_329536);
(statearr_329553_329578[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329541 === 8))
{var inst_329504 = (state_329540[9]);var inst_329500 = (state_329540[7]);var inst_329508 = (state_329540[10]);var inst_329513 = inst_329500.push(inst_329504);var tmp329550 = inst_329500;var inst_329500__$1 = tmp329550;var inst_329501 = inst_329508;var state_329540__$1 = (function (){var statearr_329554 = state_329540;(statearr_329554[7] = inst_329500__$1);
(statearr_329554[8] = inst_329501);
(statearr_329554[11] = inst_329513);
return statearr_329554;
})();var statearr_329555_329579 = state_329540__$1;(statearr_329555_329579[2] = null);
(statearr_329555_329579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329541 === 9))
{var inst_329500 = (state_329540[7]);var inst_329516 = cljs.core.vec.call(null,inst_329500);var state_329540__$1 = state_329540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329540__$1,11,out,inst_329516);
} else
{if((state_val_329541 === 10))
{var inst_329523 = (state_329540[2]);var state_329540__$1 = state_329540;var statearr_329556_329580 = state_329540__$1;(statearr_329556_329580[2] = inst_329523);
(statearr_329556_329580[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329541 === 11))
{var inst_329504 = (state_329540[9]);var inst_329508 = (state_329540[10]);var inst_329518 = (state_329540[2]);var inst_329519 = (new Array(0));var inst_329520 = inst_329519.push(inst_329504);var inst_329500 = inst_329519;var inst_329501 = inst_329508;var state_329540__$1 = (function (){var statearr_329557 = state_329540;(statearr_329557[7] = inst_329500);
(statearr_329557[8] = inst_329501);
(statearr_329557[12] = inst_329518);
(statearr_329557[13] = inst_329520);
return statearr_329557;
})();var statearr_329558_329581 = state_329540__$1;(statearr_329558_329581[2] = null);
(statearr_329558_329581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329541 === 12))
{var inst_329500 = (state_329540[7]);var inst_329528 = cljs.core.vec.call(null,inst_329500);var state_329540__$1 = state_329540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329540__$1,15,out,inst_329528);
} else
{if((state_val_329541 === 13))
{var state_329540__$1 = state_329540;var statearr_329559_329582 = state_329540__$1;(statearr_329559_329582[2] = null);
(statearr_329559_329582[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329541 === 14))
{var inst_329533 = (state_329540[2]);var inst_329534 = cljs.core.async.close_BANG_.call(null,out);var state_329540__$1 = (function (){var statearr_329560 = state_329540;(statearr_329560[14] = inst_329533);
return statearr_329560;
})();var statearr_329561_329583 = state_329540__$1;(statearr_329561_329583[2] = inst_329534);
(statearr_329561_329583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_329541 === 15))
{var inst_329530 = (state_329540[2]);var state_329540__$1 = state_329540;var statearr_329562_329584 = state_329540__$1;(statearr_329562_329584[2] = inst_329530);
(statearr_329562_329584[1] = 14);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_329566 = (new Array(15));(statearr_329566[0] = state_machine__17982__auto__);
(statearr_329566[1] = 1);
return statearr_329566;
});
var state_machine__17982__auto____1 = (function (state_329540){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_329540);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e329567){if((e329567 instanceof Object))
{var ex__17985__auto__ = e329567;var statearr_329568_329585 = state_329540;(statearr_329568_329585[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e329567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__329586 = state_329540;
state_329540 = G__329586;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_329540){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_329540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_329569 = f__18052__auto__.call(null);(statearr_329569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___329570);
return statearr_329569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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