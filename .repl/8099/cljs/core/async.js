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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t67084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67084 = (function (f,fn_handler,meta67085){
this.f = f;
this.fn_handler = fn_handler;
this.meta67085 = meta67085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67084.cljs$lang$type = true;
cljs.core.async.t67084.cljs$lang$ctorStr = "cljs.core.async/t67084";
cljs.core.async.t67084.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t67084");
});
cljs.core.async.t67084.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t67084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t67084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t67084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67086){var self__ = this;
var _67086__$1 = this;return self__.meta67085;
});
cljs.core.async.t67084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67086,meta67085__$1){var self__ = this;
var _67086__$1 = this;return (new cljs.core.async.t67084(self__.f,self__.fn_handler,meta67085__$1));
});
cljs.core.async.__GT_t67084 = (function __GT_t67084(f__$1,fn_handler__$1,meta67085){return (new cljs.core.async.t67084(f__$1,fn_handler__$1,meta67085));
});
}
return (new cljs.core.async.t67084(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__67088 = buff;if(G__67088)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__67088.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__67088.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__67088);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__67088);
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
{var val_67089 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_67089);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_67089);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___67090 = n;var x_67091 = 0;while(true){
if((x_67091 < n__7112__auto___67090))
{(a[x_67091] = 0);
{
var G__67092 = (x_67091 + 1);
x_67091 = G__67092;
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
var G__67093 = (i + 1);
i = G__67093;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t67097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67097 = (function (flag,alt_flag,meta67098){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta67098 = meta67098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67097.cljs$lang$type = true;
cljs.core.async.t67097.cljs$lang$ctorStr = "cljs.core.async/t67097";
cljs.core.async.t67097.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t67097");
});
cljs.core.async.t67097.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t67097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t67097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t67097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67099){var self__ = this;
var _67099__$1 = this;return self__.meta67098;
});
cljs.core.async.t67097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67099,meta67098__$1){var self__ = this;
var _67099__$1 = this;return (new cljs.core.async.t67097(self__.flag,self__.alt_flag,meta67098__$1));
});
cljs.core.async.__GT_t67097 = (function __GT_t67097(flag__$1,alt_flag__$1,meta67098){return (new cljs.core.async.t67097(flag__$1,alt_flag__$1,meta67098));
});
}
return (new cljs.core.async.t67097(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t67103 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67103 = (function (cb,flag,alt_handler,meta67104){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta67104 = meta67104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67103.cljs$lang$type = true;
cljs.core.async.t67103.cljs$lang$ctorStr = "cljs.core.async/t67103";
cljs.core.async.t67103.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t67103");
});
cljs.core.async.t67103.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t67103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t67103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t67103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67105){var self__ = this;
var _67105__$1 = this;return self__.meta67104;
});
cljs.core.async.t67103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67105,meta67104__$1){var self__ = this;
var _67105__$1 = this;return (new cljs.core.async.t67103(self__.cb,self__.flag,self__.alt_handler,meta67104__$1));
});
cljs.core.async.__GT_t67103 = (function __GT_t67103(cb__$1,flag__$1,alt_handler__$1,meta67104){return (new cljs.core.async.t67103(cb__$1,flag__$1,alt_handler__$1,meta67104));
});
}
return (new cljs.core.async.t67103(cb,flag,alt_handler,null));
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
return (function (p1__67106_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67106_SHARP_,port], null));
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
var G__67107 = (i + 1);
i = G__67107;
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
var alts_BANG___delegate = function (ports,p__67108){var map__67110 = p__67108;var map__67110__$1 = ((cljs.core.seq_QMARK_.call(null,map__67110))?cljs.core.apply.call(null,cljs.core.hash_map,map__67110):map__67110);var opts = map__67110__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__67108 = null;if (arguments.length > 1) {
  p__67108 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__67108);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__67111){
var ports = cljs.core.first(arglist__67111);
var p__67108 = cljs.core.rest(arglist__67111);
return alts_BANG___delegate(ports,p__67108);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t67119 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67119 = (function (ch,f,map_LT_,meta67120){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta67120 = meta67120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67119.cljs$lang$type = true;
cljs.core.async.t67119.cljs$lang$ctorStr = "cljs.core.async/t67119";
cljs.core.async.t67119.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t67119");
});
cljs.core.async.t67119.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t67119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t67119.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t67119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t67122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67122 = (function (fn1,_,meta67120,ch,f,map_LT_,meta67123){
this.fn1 = fn1;
this._ = _;
this.meta67120 = meta67120;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta67123 = meta67123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67122.cljs$lang$type = true;
cljs.core.async.t67122.cljs$lang$ctorStr = "cljs.core.async/t67122";
cljs.core.async.t67122.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t67122");
});
cljs.core.async.t67122.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t67122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t67122.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t67122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__67112_SHARP_){return f1.call(null,(((p1__67112_SHARP_ == null))?null:self__.f.call(null,p1__67112_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t67122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67124){var self__ = this;
var _67124__$1 = this;return self__.meta67123;
});
cljs.core.async.t67122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67124,meta67123__$1){var self__ = this;
var _67124__$1 = this;return (new cljs.core.async.t67122(self__.fn1,self__._,self__.meta67120,self__.ch,self__.f,self__.map_LT_,meta67123__$1));
});
cljs.core.async.__GT_t67122 = (function __GT_t67122(fn1__$1,___$2,meta67120__$1,ch__$2,f__$2,map_LT___$2,meta67123){return (new cljs.core.async.t67122(fn1__$1,___$2,meta67120__$1,ch__$2,f__$2,map_LT___$2,meta67123));
});
}
return (new cljs.core.async.t67122(fn1,___$1,self__.meta67120,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t67119.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t67119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t67119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67121){var self__ = this;
var _67121__$1 = this;return self__.meta67120;
});
cljs.core.async.t67119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67121,meta67120__$1){var self__ = this;
var _67121__$1 = this;return (new cljs.core.async.t67119(self__.ch,self__.f,self__.map_LT_,meta67120__$1));
});
cljs.core.async.__GT_t67119 = (function __GT_t67119(ch__$1,f__$1,map_LT___$1,meta67120){return (new cljs.core.async.t67119(ch__$1,f__$1,map_LT___$1,meta67120));
});
}
return (new cljs.core.async.t67119(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t67128 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67128 = (function (ch,f,map_GT_,meta67129){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta67129 = meta67129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67128.cljs$lang$type = true;
cljs.core.async.t67128.cljs$lang$ctorStr = "cljs.core.async/t67128";
cljs.core.async.t67128.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t67128");
});
cljs.core.async.t67128.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t67128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t67128.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t67128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t67128.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t67128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t67128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67130){var self__ = this;
var _67130__$1 = this;return self__.meta67129;
});
cljs.core.async.t67128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67130,meta67129__$1){var self__ = this;
var _67130__$1 = this;return (new cljs.core.async.t67128(self__.ch,self__.f,self__.map_GT_,meta67129__$1));
});
cljs.core.async.__GT_t67128 = (function __GT_t67128(ch__$1,f__$1,map_GT___$1,meta67129){return (new cljs.core.async.t67128(ch__$1,f__$1,map_GT___$1,meta67129));
});
}
return (new cljs.core.async.t67128(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t67134 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67134 = (function (ch,p,filter_GT_,meta67135){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta67135 = meta67135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67134.cljs$lang$type = true;
cljs.core.async.t67134.cljs$lang$ctorStr = "cljs.core.async/t67134";
cljs.core.async.t67134.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t67134");
});
cljs.core.async.t67134.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t67134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t67134.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t67134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t67134.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t67134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t67134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67136){var self__ = this;
var _67136__$1 = this;return self__.meta67135;
});
cljs.core.async.t67134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67136,meta67135__$1){var self__ = this;
var _67136__$1 = this;return (new cljs.core.async.t67134(self__.ch,self__.p,self__.filter_GT_,meta67135__$1));
});
cljs.core.async.__GT_t67134 = (function __GT_t67134(ch__$1,p__$1,filter_GT___$1,meta67135){return (new cljs.core.async.t67134(ch__$1,p__$1,filter_GT___$1,meta67135));
});
}
return (new cljs.core.async.t67134(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___67219 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_67198){var state_val_67199 = (state_67198[1]);if((state_val_67199 === 1))
{var state_67198__$1 = state_67198;var statearr_67200_67220 = state_67198__$1;(statearr_67200_67220[2] = null);
(statearr_67200_67220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67199 === 2))
{var state_67198__$1 = state_67198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67198__$1,4,ch);
} else
{if((state_val_67199 === 3))
{var inst_67196 = (state_67198[2]);var state_67198__$1 = state_67198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67198__$1,inst_67196);
} else
{if((state_val_67199 === 4))
{var inst_67180 = (state_67198[7]);var inst_67180__$1 = (state_67198[2]);var inst_67181 = (inst_67180__$1 == null);var state_67198__$1 = (function (){var statearr_67201 = state_67198;(statearr_67201[7] = inst_67180__$1);
return statearr_67201;
})();if(cljs.core.truth_(inst_67181))
{var statearr_67202_67221 = state_67198__$1;(statearr_67202_67221[1] = 5);
} else
{var statearr_67203_67222 = state_67198__$1;(statearr_67203_67222[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67199 === 5))
{var inst_67183 = cljs.core.async.close_BANG_.call(null,out);var state_67198__$1 = state_67198;var statearr_67204_67223 = state_67198__$1;(statearr_67204_67223[2] = inst_67183);
(statearr_67204_67223[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67199 === 6))
{var inst_67180 = (state_67198[7]);var inst_67185 = p.call(null,inst_67180);var state_67198__$1 = state_67198;if(cljs.core.truth_(inst_67185))
{var statearr_67205_67224 = state_67198__$1;(statearr_67205_67224[1] = 8);
} else
{var statearr_67206_67225 = state_67198__$1;(statearr_67206_67225[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67199 === 7))
{var inst_67194 = (state_67198[2]);var state_67198__$1 = state_67198;var statearr_67207_67226 = state_67198__$1;(statearr_67207_67226[2] = inst_67194);
(statearr_67207_67226[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67199 === 8))
{var inst_67180 = (state_67198[7]);var state_67198__$1 = state_67198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67198__$1,11,out,inst_67180);
} else
{if((state_val_67199 === 9))
{var state_67198__$1 = state_67198;var statearr_67208_67227 = state_67198__$1;(statearr_67208_67227[2] = null);
(statearr_67208_67227[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67199 === 10))
{var inst_67191 = (state_67198[2]);var state_67198__$1 = (function (){var statearr_67209 = state_67198;(statearr_67209[8] = inst_67191);
return statearr_67209;
})();var statearr_67210_67228 = state_67198__$1;(statearr_67210_67228[2] = null);
(statearr_67210_67228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67199 === 11))
{var inst_67188 = (state_67198[2]);var state_67198__$1 = state_67198;var statearr_67211_67229 = state_67198__$1;(statearr_67211_67229[2] = inst_67188);
(statearr_67211_67229[1] = 10);
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
var state_machine__13310__auto____0 = (function (){var statearr_67215 = (new Array(9));(statearr_67215[0] = state_machine__13310__auto__);
(statearr_67215[1] = 1);
return statearr_67215;
});
var state_machine__13310__auto____1 = (function (state_67198){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_67198);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e67216){if((e67216 instanceof Object))
{var ex__13313__auto__ = e67216;var statearr_67217_67230 = state_67198;(statearr_67217_67230[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e67216;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__67231 = state_67198;
state_67198 = G__67231;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_67198){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_67198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_67218 = f__13410__auto__.call(null);(statearr_67218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___67219);
return statearr_67218;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_67383){var state_val_67384 = (state_67383[1]);if((state_val_67384 === 1))
{var state_67383__$1 = state_67383;var statearr_67385_67422 = state_67383__$1;(statearr_67385_67422[2] = null);
(statearr_67385_67422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 2))
{var state_67383__$1 = state_67383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67383__$1,4,in$);
} else
{if((state_val_67384 === 3))
{var inst_67381 = (state_67383[2]);var state_67383__$1 = state_67383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67383__$1,inst_67381);
} else
{if((state_val_67384 === 4))
{var inst_67329 = (state_67383[7]);var inst_67329__$1 = (state_67383[2]);var inst_67330 = (inst_67329__$1 == null);var state_67383__$1 = (function (){var statearr_67386 = state_67383;(statearr_67386[7] = inst_67329__$1);
return statearr_67386;
})();if(cljs.core.truth_(inst_67330))
{var statearr_67387_67423 = state_67383__$1;(statearr_67387_67423[1] = 5);
} else
{var statearr_67388_67424 = state_67383__$1;(statearr_67388_67424[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 5))
{var inst_67332 = cljs.core.async.close_BANG_.call(null,out);var state_67383__$1 = state_67383;var statearr_67389_67425 = state_67383__$1;(statearr_67389_67425[2] = inst_67332);
(statearr_67389_67425[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 6))
{var inst_67329 = (state_67383[7]);var inst_67334 = f.call(null,inst_67329);var inst_67339 = cljs.core.seq.call(null,inst_67334);var inst_67340 = inst_67339;var inst_67341 = null;var inst_67342 = 0;var inst_67343 = 0;var state_67383__$1 = (function (){var statearr_67390 = state_67383;(statearr_67390[8] = inst_67343);
(statearr_67390[9] = inst_67341);
(statearr_67390[10] = inst_67342);
(statearr_67390[11] = inst_67340);
return statearr_67390;
})();var statearr_67391_67426 = state_67383__$1;(statearr_67391_67426[2] = null);
(statearr_67391_67426[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 7))
{var inst_67379 = (state_67383[2]);var state_67383__$1 = state_67383;var statearr_67392_67427 = state_67383__$1;(statearr_67392_67427[2] = inst_67379);
(statearr_67392_67427[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 8))
{var inst_67343 = (state_67383[8]);var inst_67342 = (state_67383[10]);var inst_67345 = (inst_67343 < inst_67342);var inst_67346 = inst_67345;var state_67383__$1 = state_67383;if(cljs.core.truth_(inst_67346))
{var statearr_67393_67428 = state_67383__$1;(statearr_67393_67428[1] = 10);
} else
{var statearr_67394_67429 = state_67383__$1;(statearr_67394_67429[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 9))
{var inst_67376 = (state_67383[2]);var state_67383__$1 = (function (){var statearr_67395 = state_67383;(statearr_67395[12] = inst_67376);
return statearr_67395;
})();var statearr_67396_67430 = state_67383__$1;(statearr_67396_67430[2] = null);
(statearr_67396_67430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 10))
{var inst_67343 = (state_67383[8]);var inst_67341 = (state_67383[9]);var inst_67348 = cljs.core._nth.call(null,inst_67341,inst_67343);var state_67383__$1 = state_67383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67383__$1,13,out,inst_67348);
} else
{if((state_val_67384 === 11))
{var inst_67354 = (state_67383[13]);var inst_67340 = (state_67383[11]);var inst_67354__$1 = cljs.core.seq.call(null,inst_67340);var state_67383__$1 = (function (){var statearr_67400 = state_67383;(statearr_67400[13] = inst_67354__$1);
return statearr_67400;
})();if(inst_67354__$1)
{var statearr_67401_67431 = state_67383__$1;(statearr_67401_67431[1] = 14);
} else
{var statearr_67402_67432 = state_67383__$1;(statearr_67402_67432[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 12))
{var inst_67374 = (state_67383[2]);var state_67383__$1 = state_67383;var statearr_67403_67433 = state_67383__$1;(statearr_67403_67433[2] = inst_67374);
(statearr_67403_67433[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 13))
{var inst_67343 = (state_67383[8]);var inst_67341 = (state_67383[9]);var inst_67342 = (state_67383[10]);var inst_67340 = (state_67383[11]);var inst_67350 = (state_67383[2]);var inst_67351 = (inst_67343 + 1);var tmp67397 = inst_67341;var tmp67398 = inst_67342;var tmp67399 = inst_67340;var inst_67340__$1 = tmp67399;var inst_67341__$1 = tmp67397;var inst_67342__$1 = tmp67398;var inst_67343__$1 = inst_67351;var state_67383__$1 = (function (){var statearr_67404 = state_67383;(statearr_67404[14] = inst_67350);
(statearr_67404[8] = inst_67343__$1);
(statearr_67404[9] = inst_67341__$1);
(statearr_67404[10] = inst_67342__$1);
(statearr_67404[11] = inst_67340__$1);
return statearr_67404;
})();var statearr_67405_67434 = state_67383__$1;(statearr_67405_67434[2] = null);
(statearr_67405_67434[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 14))
{var inst_67354 = (state_67383[13]);var inst_67356 = cljs.core.chunked_seq_QMARK_.call(null,inst_67354);var state_67383__$1 = state_67383;if(inst_67356)
{var statearr_67406_67435 = state_67383__$1;(statearr_67406_67435[1] = 17);
} else
{var statearr_67407_67436 = state_67383__$1;(statearr_67407_67436[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 15))
{var state_67383__$1 = state_67383;var statearr_67408_67437 = state_67383__$1;(statearr_67408_67437[2] = null);
(statearr_67408_67437[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 16))
{var inst_67372 = (state_67383[2]);var state_67383__$1 = state_67383;var statearr_67409_67438 = state_67383__$1;(statearr_67409_67438[2] = inst_67372);
(statearr_67409_67438[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 17))
{var inst_67354 = (state_67383[13]);var inst_67358 = cljs.core.chunk_first.call(null,inst_67354);var inst_67359 = cljs.core.chunk_rest.call(null,inst_67354);var inst_67360 = cljs.core.count.call(null,inst_67358);var inst_67340 = inst_67359;var inst_67341 = inst_67358;var inst_67342 = inst_67360;var inst_67343 = 0;var state_67383__$1 = (function (){var statearr_67410 = state_67383;(statearr_67410[8] = inst_67343);
(statearr_67410[9] = inst_67341);
(statearr_67410[10] = inst_67342);
(statearr_67410[11] = inst_67340);
return statearr_67410;
})();var statearr_67411_67439 = state_67383__$1;(statearr_67411_67439[2] = null);
(statearr_67411_67439[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 18))
{var inst_67354 = (state_67383[13]);var inst_67363 = cljs.core.first.call(null,inst_67354);var state_67383__$1 = state_67383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67383__$1,20,out,inst_67363);
} else
{if((state_val_67384 === 19))
{var inst_67369 = (state_67383[2]);var state_67383__$1 = state_67383;var statearr_67412_67440 = state_67383__$1;(statearr_67412_67440[2] = inst_67369);
(statearr_67412_67440[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67384 === 20))
{var inst_67354 = (state_67383[13]);var inst_67365 = (state_67383[2]);var inst_67366 = cljs.core.next.call(null,inst_67354);var inst_67340 = inst_67366;var inst_67341 = null;var inst_67342 = 0;var inst_67343 = 0;var state_67383__$1 = (function (){var statearr_67413 = state_67383;(statearr_67413[15] = inst_67365);
(statearr_67413[8] = inst_67343);
(statearr_67413[9] = inst_67341);
(statearr_67413[10] = inst_67342);
(statearr_67413[11] = inst_67340);
return statearr_67413;
})();var statearr_67414_67441 = state_67383__$1;(statearr_67414_67441[2] = null);
(statearr_67414_67441[1] = 8);
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
var state_machine__13310__auto____0 = (function (){var statearr_67418 = (new Array(16));(statearr_67418[0] = state_machine__13310__auto__);
(statearr_67418[1] = 1);
return statearr_67418;
});
var state_machine__13310__auto____1 = (function (state_67383){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_67383);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e67419){if((e67419 instanceof Object))
{var ex__13313__auto__ = e67419;var statearr_67420_67442 = state_67383;(statearr_67420_67442[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67383);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e67419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__67443 = state_67383;
state_67383 = G__67443;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_67383){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_67383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_67421 = f__13410__auto__.call(null);(statearr_67421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_67421;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___67524 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_67503){var state_val_67504 = (state_67503[1]);if((state_val_67504 === 1))
{var state_67503__$1 = state_67503;var statearr_67505_67525 = state_67503__$1;(statearr_67505_67525[2] = null);
(statearr_67505_67525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67504 === 2))
{var state_67503__$1 = state_67503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67503__$1,4,from);
} else
{if((state_val_67504 === 3))
{var inst_67501 = (state_67503[2]);var state_67503__$1 = state_67503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67503__$1,inst_67501);
} else
{if((state_val_67504 === 4))
{var inst_67486 = (state_67503[7]);var inst_67486__$1 = (state_67503[2]);var inst_67487 = (inst_67486__$1 == null);var state_67503__$1 = (function (){var statearr_67506 = state_67503;(statearr_67506[7] = inst_67486__$1);
return statearr_67506;
})();if(cljs.core.truth_(inst_67487))
{var statearr_67507_67526 = state_67503__$1;(statearr_67507_67526[1] = 5);
} else
{var statearr_67508_67527 = state_67503__$1;(statearr_67508_67527[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67504 === 5))
{var state_67503__$1 = state_67503;if(cljs.core.truth_(close_QMARK_))
{var statearr_67509_67528 = state_67503__$1;(statearr_67509_67528[1] = 8);
} else
{var statearr_67510_67529 = state_67503__$1;(statearr_67510_67529[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67504 === 6))
{var inst_67486 = (state_67503[7]);var state_67503__$1 = state_67503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67503__$1,11,to,inst_67486);
} else
{if((state_val_67504 === 7))
{var inst_67499 = (state_67503[2]);var state_67503__$1 = state_67503;var statearr_67511_67530 = state_67503__$1;(statearr_67511_67530[2] = inst_67499);
(statearr_67511_67530[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67504 === 8))
{var inst_67490 = cljs.core.async.close_BANG_.call(null,to);var state_67503__$1 = state_67503;var statearr_67512_67531 = state_67503__$1;(statearr_67512_67531[2] = inst_67490);
(statearr_67512_67531[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67504 === 9))
{var state_67503__$1 = state_67503;var statearr_67513_67532 = state_67503__$1;(statearr_67513_67532[2] = null);
(statearr_67513_67532[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67504 === 10))
{var inst_67493 = (state_67503[2]);var state_67503__$1 = state_67503;var statearr_67514_67533 = state_67503__$1;(statearr_67514_67533[2] = inst_67493);
(statearr_67514_67533[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67504 === 11))
{var inst_67496 = (state_67503[2]);var state_67503__$1 = (function (){var statearr_67515 = state_67503;(statearr_67515[8] = inst_67496);
return statearr_67515;
})();var statearr_67516_67534 = state_67503__$1;(statearr_67516_67534[2] = null);
(statearr_67516_67534[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_67520 = (new Array(9));(statearr_67520[0] = state_machine__13310__auto__);
(statearr_67520[1] = 1);
return statearr_67520;
});
var state_machine__13310__auto____1 = (function (state_67503){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_67503);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e67521){if((e67521 instanceof Object))
{var ex__13313__auto__ = e67521;var statearr_67522_67535 = state_67503;(statearr_67522_67535[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e67521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__67536 = state_67503;
state_67503 = G__67536;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_67503){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_67503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_67523 = f__13410__auto__.call(null);(statearr_67523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___67524);
return statearr_67523;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___67623 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_67601){var state_val_67602 = (state_67601[1]);if((state_val_67602 === 1))
{var state_67601__$1 = state_67601;var statearr_67603_67624 = state_67601__$1;(statearr_67603_67624[2] = null);
(statearr_67603_67624[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67602 === 2))
{var state_67601__$1 = state_67601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67601__$1,4,ch);
} else
{if((state_val_67602 === 3))
{var inst_67599 = (state_67601[2]);var state_67601__$1 = state_67601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67601__$1,inst_67599);
} else
{if((state_val_67602 === 4))
{var inst_67582 = (state_67601[7]);var inst_67582__$1 = (state_67601[2]);var inst_67583 = (inst_67582__$1 == null);var state_67601__$1 = (function (){var statearr_67604 = state_67601;(statearr_67604[7] = inst_67582__$1);
return statearr_67604;
})();if(cljs.core.truth_(inst_67583))
{var statearr_67605_67625 = state_67601__$1;(statearr_67605_67625[1] = 5);
} else
{var statearr_67606_67626 = state_67601__$1;(statearr_67606_67626[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67602 === 5))
{var inst_67585 = cljs.core.async.close_BANG_.call(null,tc);var inst_67586 = cljs.core.async.close_BANG_.call(null,fc);var state_67601__$1 = (function (){var statearr_67607 = state_67601;(statearr_67607[8] = inst_67585);
return statearr_67607;
})();var statearr_67608_67627 = state_67601__$1;(statearr_67608_67627[2] = inst_67586);
(statearr_67608_67627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67602 === 6))
{var inst_67582 = (state_67601[7]);var inst_67588 = p.call(null,inst_67582);var state_67601__$1 = state_67601;if(cljs.core.truth_(inst_67588))
{var statearr_67609_67628 = state_67601__$1;(statearr_67609_67628[1] = 9);
} else
{var statearr_67610_67629 = state_67601__$1;(statearr_67610_67629[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67602 === 7))
{var inst_67597 = (state_67601[2]);var state_67601__$1 = state_67601;var statearr_67611_67630 = state_67601__$1;(statearr_67611_67630[2] = inst_67597);
(statearr_67611_67630[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67602 === 8))
{var inst_67594 = (state_67601[2]);var state_67601__$1 = (function (){var statearr_67612 = state_67601;(statearr_67612[9] = inst_67594);
return statearr_67612;
})();var statearr_67613_67631 = state_67601__$1;(statearr_67613_67631[2] = null);
(statearr_67613_67631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67602 === 9))
{var state_67601__$1 = state_67601;var statearr_67614_67632 = state_67601__$1;(statearr_67614_67632[2] = tc);
(statearr_67614_67632[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67602 === 10))
{var state_67601__$1 = state_67601;var statearr_67615_67633 = state_67601__$1;(statearr_67615_67633[2] = fc);
(statearr_67615_67633[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67602 === 11))
{var inst_67582 = (state_67601[7]);var inst_67592 = (state_67601[2]);var state_67601__$1 = state_67601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67601__$1,8,inst_67592,inst_67582);
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
var state_machine__13310__auto____0 = (function (){var statearr_67619 = (new Array(10));(statearr_67619[0] = state_machine__13310__auto__);
(statearr_67619[1] = 1);
return statearr_67619;
});
var state_machine__13310__auto____1 = (function (state_67601){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_67601);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e67620){if((e67620 instanceof Object))
{var ex__13313__auto__ = e67620;var statearr_67621_67634 = state_67601;(statearr_67621_67634[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e67620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__67635 = state_67601;
state_67601 = G__67635;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_67601){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_67601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_67622 = f__13410__auto__.call(null);(statearr_67622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___67623);
return statearr_67622;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_67682){var state_val_67683 = (state_67682[1]);if((state_val_67683 === 7))
{var inst_67678 = (state_67682[2]);var state_67682__$1 = state_67682;var statearr_67684_67700 = state_67682__$1;(statearr_67684_67700[2] = inst_67678);
(statearr_67684_67700[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67683 === 6))
{var inst_67671 = (state_67682[7]);var inst_67668 = (state_67682[8]);var inst_67675 = f.call(null,inst_67668,inst_67671);var inst_67668__$1 = inst_67675;var state_67682__$1 = (function (){var statearr_67685 = state_67682;(statearr_67685[8] = inst_67668__$1);
return statearr_67685;
})();var statearr_67686_67701 = state_67682__$1;(statearr_67686_67701[2] = null);
(statearr_67686_67701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67683 === 5))
{var inst_67668 = (state_67682[8]);var state_67682__$1 = state_67682;var statearr_67687_67702 = state_67682__$1;(statearr_67687_67702[2] = inst_67668);
(statearr_67687_67702[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67683 === 4))
{var inst_67671 = (state_67682[7]);var inst_67671__$1 = (state_67682[2]);var inst_67672 = (inst_67671__$1 == null);var state_67682__$1 = (function (){var statearr_67688 = state_67682;(statearr_67688[7] = inst_67671__$1);
return statearr_67688;
})();if(cljs.core.truth_(inst_67672))
{var statearr_67689_67703 = state_67682__$1;(statearr_67689_67703[1] = 5);
} else
{var statearr_67690_67704 = state_67682__$1;(statearr_67690_67704[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67683 === 3))
{var inst_67680 = (state_67682[2]);var state_67682__$1 = state_67682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67682__$1,inst_67680);
} else
{if((state_val_67683 === 2))
{var state_67682__$1 = state_67682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67682__$1,4,ch);
} else
{if((state_val_67683 === 1))
{var inst_67668 = init;var state_67682__$1 = (function (){var statearr_67691 = state_67682;(statearr_67691[8] = inst_67668);
return statearr_67691;
})();var statearr_67692_67705 = state_67682__$1;(statearr_67692_67705[2] = null);
(statearr_67692_67705[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_67696 = (new Array(9));(statearr_67696[0] = state_machine__13310__auto__);
(statearr_67696[1] = 1);
return statearr_67696;
});
var state_machine__13310__auto____1 = (function (state_67682){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_67682);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e67697){if((e67697 instanceof Object))
{var ex__13313__auto__ = e67697;var statearr_67698_67706 = state_67682;(statearr_67698_67706[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67682);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e67697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__67707 = state_67682;
state_67682 = G__67707;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_67682){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_67682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_67699 = f__13410__auto__.call(null);(statearr_67699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_67699;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_67769){var state_val_67770 = (state_67769[1]);if((state_val_67770 === 1))
{var inst_67749 = cljs.core.seq.call(null,coll);var inst_67750 = inst_67749;var state_67769__$1 = (function (){var statearr_67771 = state_67769;(statearr_67771[7] = inst_67750);
return statearr_67771;
})();var statearr_67772_67790 = state_67769__$1;(statearr_67772_67790[2] = null);
(statearr_67772_67790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67770 === 2))
{var inst_67750 = (state_67769[7]);var state_67769__$1 = state_67769;if(cljs.core.truth_(inst_67750))
{var statearr_67773_67791 = state_67769__$1;(statearr_67773_67791[1] = 4);
} else
{var statearr_67774_67792 = state_67769__$1;(statearr_67774_67792[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67770 === 3))
{var inst_67767 = (state_67769[2]);var state_67769__$1 = state_67769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67769__$1,inst_67767);
} else
{if((state_val_67770 === 4))
{var inst_67750 = (state_67769[7]);var inst_67753 = cljs.core.first.call(null,inst_67750);var state_67769__$1 = state_67769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67769__$1,7,ch,inst_67753);
} else
{if((state_val_67770 === 5))
{var state_67769__$1 = state_67769;if(cljs.core.truth_(close_QMARK_))
{var statearr_67775_67793 = state_67769__$1;(statearr_67775_67793[1] = 8);
} else
{var statearr_67776_67794 = state_67769__$1;(statearr_67776_67794[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67770 === 6))
{var inst_67765 = (state_67769[2]);var state_67769__$1 = state_67769;var statearr_67777_67795 = state_67769__$1;(statearr_67777_67795[2] = inst_67765);
(statearr_67777_67795[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67770 === 7))
{var inst_67750 = (state_67769[7]);var inst_67755 = (state_67769[2]);var inst_67756 = cljs.core.next.call(null,inst_67750);var inst_67750__$1 = inst_67756;var state_67769__$1 = (function (){var statearr_67778 = state_67769;(statearr_67778[8] = inst_67755);
(statearr_67778[7] = inst_67750__$1);
return statearr_67778;
})();var statearr_67779_67796 = state_67769__$1;(statearr_67779_67796[2] = null);
(statearr_67779_67796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67770 === 8))
{var inst_67760 = cljs.core.async.close_BANG_.call(null,ch);var state_67769__$1 = state_67769;var statearr_67780_67797 = state_67769__$1;(statearr_67780_67797[2] = inst_67760);
(statearr_67780_67797[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67770 === 9))
{var state_67769__$1 = state_67769;var statearr_67781_67798 = state_67769__$1;(statearr_67781_67798[2] = null);
(statearr_67781_67798[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_67770 === 10))
{var inst_67763 = (state_67769[2]);var state_67769__$1 = state_67769;var statearr_67782_67799 = state_67769__$1;(statearr_67782_67799[2] = inst_67763);
(statearr_67782_67799[1] = 6);
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
var state_machine__13310__auto____0 = (function (){var statearr_67786 = (new Array(9));(statearr_67786[0] = state_machine__13310__auto__);
(statearr_67786[1] = 1);
return statearr_67786;
});
var state_machine__13310__auto____1 = (function (state_67769){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_67769);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e67787){if((e67787 instanceof Object))
{var ex__13313__auto__ = e67787;var statearr_67788_67800 = state_67769;(statearr_67788_67800[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67769);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e67787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__67801 = state_67769;
state_67769 = G__67801;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_67769){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_67769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_67789 = f__13410__auto__.call(null);(statearr_67789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_67789;
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
cljs.core.async.Mux = (function (){var obj67803 = {};return obj67803;
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
cljs.core.async.Mult = (function (){var obj67805 = {};return obj67805;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t68020 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t68020 = (function (cs,ch,mult,meta68021){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta68021 = meta68021;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t68020.cljs$lang$type = true;
cljs.core.async.t68020.cljs$lang$ctorStr = "cljs.core.async/t68020";
cljs.core.async.t68020.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t68020");
});})(cs))
;
cljs.core.async.t68020.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t68020.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t68020.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t68020.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t68020.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t68020.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t68020.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_68022){var self__ = this;
var _68022__$1 = this;return self__.meta68021;
});})(cs))
;
cljs.core.async.t68020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_68022,meta68021__$1){var self__ = this;
var _68022__$1 = this;return (new cljs.core.async.t68020(self__.cs,self__.ch,self__.mult,meta68021__$1));
});})(cs))
;
cljs.core.async.__GT_t68020 = ((function (cs){
return (function __GT_t68020(cs__$1,ch__$1,mult__$1,meta68021){return (new cljs.core.async.t68020(cs__$1,ch__$1,mult__$1,meta68021));
});})(cs))
;
}
return (new cljs.core.async.t68020(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___68234 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_68152){var state_val_68153 = (state_68152[1]);if((state_val_68153 === 32))
{var inst_68101 = (state_68152[7]);var inst_68025 = (state_68152[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_68152,31,Object,null,30);var inst_68108 = cljs.core.async.put_BANG_.call(null,inst_68101,inst_68025,done);var state_68152__$1 = state_68152;var statearr_68154_68235 = state_68152__$1;(statearr_68154_68235[2] = inst_68108);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68152__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 1))
{var state_68152__$1 = state_68152;var statearr_68155_68236 = state_68152__$1;(statearr_68155_68236[2] = null);
(statearr_68155_68236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 33))
{var inst_68114 = (state_68152[9]);var inst_68116 = cljs.core.chunked_seq_QMARK_.call(null,inst_68114);var state_68152__$1 = state_68152;if(inst_68116)
{var statearr_68156_68237 = state_68152__$1;(statearr_68156_68237[1] = 36);
} else
{var statearr_68157_68238 = state_68152__$1;(statearr_68157_68238[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 2))
{var state_68152__$1 = state_68152;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68152__$1,4,ch);
} else
{if((state_val_68153 === 34))
{var state_68152__$1 = state_68152;var statearr_68158_68239 = state_68152__$1;(statearr_68158_68239[2] = null);
(statearr_68158_68239[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 3))
{var inst_68150 = (state_68152[2]);var state_68152__$1 = state_68152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68152__$1,inst_68150);
} else
{if((state_val_68153 === 35))
{var inst_68139 = (state_68152[2]);var state_68152__$1 = state_68152;var statearr_68159_68240 = state_68152__$1;(statearr_68159_68240[2] = inst_68139);
(statearr_68159_68240[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 4))
{var inst_68025 = (state_68152[8]);var inst_68025__$1 = (state_68152[2]);var inst_68026 = (inst_68025__$1 == null);var state_68152__$1 = (function (){var statearr_68160 = state_68152;(statearr_68160[8] = inst_68025__$1);
return statearr_68160;
})();if(cljs.core.truth_(inst_68026))
{var statearr_68161_68241 = state_68152__$1;(statearr_68161_68241[1] = 5);
} else
{var statearr_68162_68242 = state_68152__$1;(statearr_68162_68242[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 36))
{var inst_68114 = (state_68152[9]);var inst_68118 = cljs.core.chunk_first.call(null,inst_68114);var inst_68119 = cljs.core.chunk_rest.call(null,inst_68114);var inst_68120 = cljs.core.count.call(null,inst_68118);var inst_68093 = inst_68119;var inst_68094 = inst_68118;var inst_68095 = inst_68120;var inst_68096 = 0;var state_68152__$1 = (function (){var statearr_68163 = state_68152;(statearr_68163[10] = inst_68095);
(statearr_68163[11] = inst_68094);
(statearr_68163[12] = inst_68096);
(statearr_68163[13] = inst_68093);
return statearr_68163;
})();var statearr_68164_68243 = state_68152__$1;(statearr_68164_68243[2] = null);
(statearr_68164_68243[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 5))
{var inst_68032 = cljs.core.deref.call(null,cs);var inst_68033 = cljs.core.seq.call(null,inst_68032);var inst_68034 = inst_68033;var inst_68035 = null;var inst_68036 = 0;var inst_68037 = 0;var state_68152__$1 = (function (){var statearr_68165 = state_68152;(statearr_68165[14] = inst_68037);
(statearr_68165[15] = inst_68036);
(statearr_68165[16] = inst_68034);
(statearr_68165[17] = inst_68035);
return statearr_68165;
})();var statearr_68166_68244 = state_68152__$1;(statearr_68166_68244[2] = null);
(statearr_68166_68244[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 37))
{var inst_68114 = (state_68152[9]);var inst_68123 = cljs.core.first.call(null,inst_68114);var state_68152__$1 = (function (){var statearr_68167 = state_68152;(statearr_68167[18] = inst_68123);
return statearr_68167;
})();var statearr_68168_68245 = state_68152__$1;(statearr_68168_68245[2] = null);
(statearr_68168_68245[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 6))
{var inst_68084 = cljs.core.deref.call(null,cs);var inst_68085 = cljs.core.keys.call(null,inst_68084);var inst_68086 = cljs.core.count.call(null,inst_68085);var inst_68087 = cljs.core.reset_BANG_.call(null,dctr,inst_68086);var inst_68092 = cljs.core.seq.call(null,inst_68085);var inst_68093 = inst_68092;var inst_68094 = null;var inst_68095 = 0;var inst_68096 = 0;var state_68152__$1 = (function (){var statearr_68169 = state_68152;(statearr_68169[19] = inst_68087);
(statearr_68169[10] = inst_68095);
(statearr_68169[11] = inst_68094);
(statearr_68169[12] = inst_68096);
(statearr_68169[13] = inst_68093);
return statearr_68169;
})();var statearr_68170_68246 = state_68152__$1;(statearr_68170_68246[2] = null);
(statearr_68170_68246[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 38))
{var inst_68136 = (state_68152[2]);var state_68152__$1 = state_68152;var statearr_68171_68247 = state_68152__$1;(statearr_68171_68247[2] = inst_68136);
(statearr_68171_68247[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 7))
{var inst_68148 = (state_68152[2]);var state_68152__$1 = state_68152;var statearr_68172_68248 = state_68152__$1;(statearr_68172_68248[2] = inst_68148);
(statearr_68172_68248[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 39))
{var inst_68114 = (state_68152[9]);var inst_68132 = (state_68152[2]);var inst_68133 = cljs.core.next.call(null,inst_68114);var inst_68093 = inst_68133;var inst_68094 = null;var inst_68095 = 0;var inst_68096 = 0;var state_68152__$1 = (function (){var statearr_68173 = state_68152;(statearr_68173[20] = inst_68132);
(statearr_68173[10] = inst_68095);
(statearr_68173[11] = inst_68094);
(statearr_68173[12] = inst_68096);
(statearr_68173[13] = inst_68093);
return statearr_68173;
})();var statearr_68174_68249 = state_68152__$1;(statearr_68174_68249[2] = null);
(statearr_68174_68249[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 8))
{var inst_68037 = (state_68152[14]);var inst_68036 = (state_68152[15]);var inst_68039 = (inst_68037 < inst_68036);var inst_68040 = inst_68039;var state_68152__$1 = state_68152;if(cljs.core.truth_(inst_68040))
{var statearr_68175_68250 = state_68152__$1;(statearr_68175_68250[1] = 10);
} else
{var statearr_68176_68251 = state_68152__$1;(statearr_68176_68251[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 40))
{var inst_68123 = (state_68152[18]);var inst_68124 = (state_68152[2]);var inst_68125 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_68126 = cljs.core.async.untap_STAR_.call(null,m,inst_68123);var state_68152__$1 = (function (){var statearr_68177 = state_68152;(statearr_68177[21] = inst_68125);
(statearr_68177[22] = inst_68124);
return statearr_68177;
})();var statearr_68178_68252 = state_68152__$1;(statearr_68178_68252[2] = inst_68126);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68152__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 9))
{var inst_68082 = (state_68152[2]);var state_68152__$1 = state_68152;var statearr_68179_68253 = state_68152__$1;(statearr_68179_68253[2] = inst_68082);
(statearr_68179_68253[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 41))
{var inst_68123 = (state_68152[18]);var inst_68025 = (state_68152[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_68152,40,Object,null,39);var inst_68130 = cljs.core.async.put_BANG_.call(null,inst_68123,inst_68025,done);var state_68152__$1 = state_68152;var statearr_68180_68254 = state_68152__$1;(statearr_68180_68254[2] = inst_68130);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68152__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 10))
{var inst_68037 = (state_68152[14]);var inst_68035 = (state_68152[17]);var inst_68043 = cljs.core._nth.call(null,inst_68035,inst_68037);var inst_68044 = cljs.core.nth.call(null,inst_68043,0,null);var inst_68045 = cljs.core.nth.call(null,inst_68043,1,null);var state_68152__$1 = (function (){var statearr_68181 = state_68152;(statearr_68181[23] = inst_68044);
return statearr_68181;
})();if(cljs.core.truth_(inst_68045))
{var statearr_68182_68255 = state_68152__$1;(statearr_68182_68255[1] = 13);
} else
{var statearr_68183_68256 = state_68152__$1;(statearr_68183_68256[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 42))
{var inst_68145 = (state_68152[2]);var state_68152__$1 = (function (){var statearr_68184 = state_68152;(statearr_68184[24] = inst_68145);
return statearr_68184;
})();var statearr_68185_68257 = state_68152__$1;(statearr_68185_68257[2] = null);
(statearr_68185_68257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 11))
{var inst_68054 = (state_68152[25]);var inst_68034 = (state_68152[16]);var inst_68054__$1 = cljs.core.seq.call(null,inst_68034);var state_68152__$1 = (function (){var statearr_68186 = state_68152;(statearr_68186[25] = inst_68054__$1);
return statearr_68186;
})();if(inst_68054__$1)
{var statearr_68187_68258 = state_68152__$1;(statearr_68187_68258[1] = 16);
} else
{var statearr_68188_68259 = state_68152__$1;(statearr_68188_68259[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 12))
{var inst_68080 = (state_68152[2]);var state_68152__$1 = state_68152;var statearr_68189_68260 = state_68152__$1;(statearr_68189_68260[2] = inst_68080);
(statearr_68189_68260[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 13))
{var inst_68044 = (state_68152[23]);var inst_68047 = cljs.core.async.close_BANG_.call(null,inst_68044);var state_68152__$1 = state_68152;var statearr_68193_68261 = state_68152__$1;(statearr_68193_68261[2] = inst_68047);
(statearr_68193_68261[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 14))
{var state_68152__$1 = state_68152;var statearr_68194_68262 = state_68152__$1;(statearr_68194_68262[2] = null);
(statearr_68194_68262[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 15))
{var inst_68037 = (state_68152[14]);var inst_68036 = (state_68152[15]);var inst_68034 = (state_68152[16]);var inst_68035 = (state_68152[17]);var inst_68050 = (state_68152[2]);var inst_68051 = (inst_68037 + 1);var tmp68190 = inst_68036;var tmp68191 = inst_68034;var tmp68192 = inst_68035;var inst_68034__$1 = tmp68191;var inst_68035__$1 = tmp68192;var inst_68036__$1 = tmp68190;var inst_68037__$1 = inst_68051;var state_68152__$1 = (function (){var statearr_68195 = state_68152;(statearr_68195[26] = inst_68050);
(statearr_68195[14] = inst_68037__$1);
(statearr_68195[15] = inst_68036__$1);
(statearr_68195[16] = inst_68034__$1);
(statearr_68195[17] = inst_68035__$1);
return statearr_68195;
})();var statearr_68196_68263 = state_68152__$1;(statearr_68196_68263[2] = null);
(statearr_68196_68263[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 16))
{var inst_68054 = (state_68152[25]);var inst_68056 = cljs.core.chunked_seq_QMARK_.call(null,inst_68054);var state_68152__$1 = state_68152;if(inst_68056)
{var statearr_68197_68264 = state_68152__$1;(statearr_68197_68264[1] = 19);
} else
{var statearr_68198_68265 = state_68152__$1;(statearr_68198_68265[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 17))
{var state_68152__$1 = state_68152;var statearr_68199_68266 = state_68152__$1;(statearr_68199_68266[2] = null);
(statearr_68199_68266[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 18))
{var inst_68078 = (state_68152[2]);var state_68152__$1 = state_68152;var statearr_68200_68267 = state_68152__$1;(statearr_68200_68267[2] = inst_68078);
(statearr_68200_68267[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 19))
{var inst_68054 = (state_68152[25]);var inst_68058 = cljs.core.chunk_first.call(null,inst_68054);var inst_68059 = cljs.core.chunk_rest.call(null,inst_68054);var inst_68060 = cljs.core.count.call(null,inst_68058);var inst_68034 = inst_68059;var inst_68035 = inst_68058;var inst_68036 = inst_68060;var inst_68037 = 0;var state_68152__$1 = (function (){var statearr_68201 = state_68152;(statearr_68201[14] = inst_68037);
(statearr_68201[15] = inst_68036);
(statearr_68201[16] = inst_68034);
(statearr_68201[17] = inst_68035);
return statearr_68201;
})();var statearr_68202_68268 = state_68152__$1;(statearr_68202_68268[2] = null);
(statearr_68202_68268[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 20))
{var inst_68054 = (state_68152[25]);var inst_68064 = cljs.core.first.call(null,inst_68054);var inst_68065 = cljs.core.nth.call(null,inst_68064,0,null);var inst_68066 = cljs.core.nth.call(null,inst_68064,1,null);var state_68152__$1 = (function (){var statearr_68203 = state_68152;(statearr_68203[27] = inst_68065);
return statearr_68203;
})();if(cljs.core.truth_(inst_68066))
{var statearr_68204_68269 = state_68152__$1;(statearr_68204_68269[1] = 22);
} else
{var statearr_68205_68270 = state_68152__$1;(statearr_68205_68270[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 21))
{var inst_68075 = (state_68152[2]);var state_68152__$1 = state_68152;var statearr_68206_68271 = state_68152__$1;(statearr_68206_68271[2] = inst_68075);
(statearr_68206_68271[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 22))
{var inst_68065 = (state_68152[27]);var inst_68068 = cljs.core.async.close_BANG_.call(null,inst_68065);var state_68152__$1 = state_68152;var statearr_68207_68272 = state_68152__$1;(statearr_68207_68272[2] = inst_68068);
(statearr_68207_68272[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 23))
{var state_68152__$1 = state_68152;var statearr_68208_68273 = state_68152__$1;(statearr_68208_68273[2] = null);
(statearr_68208_68273[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 24))
{var inst_68054 = (state_68152[25]);var inst_68071 = (state_68152[2]);var inst_68072 = cljs.core.next.call(null,inst_68054);var inst_68034 = inst_68072;var inst_68035 = null;var inst_68036 = 0;var inst_68037 = 0;var state_68152__$1 = (function (){var statearr_68209 = state_68152;(statearr_68209[28] = inst_68071);
(statearr_68209[14] = inst_68037);
(statearr_68209[15] = inst_68036);
(statearr_68209[16] = inst_68034);
(statearr_68209[17] = inst_68035);
return statearr_68209;
})();var statearr_68210_68274 = state_68152__$1;(statearr_68210_68274[2] = null);
(statearr_68210_68274[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 25))
{var inst_68095 = (state_68152[10]);var inst_68096 = (state_68152[12]);var inst_68098 = (inst_68096 < inst_68095);var inst_68099 = inst_68098;var state_68152__$1 = state_68152;if(cljs.core.truth_(inst_68099))
{var statearr_68211_68275 = state_68152__$1;(statearr_68211_68275[1] = 27);
} else
{var statearr_68212_68276 = state_68152__$1;(statearr_68212_68276[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 26))
{var inst_68143 = (state_68152[2]);var state_68152__$1 = (function (){var statearr_68213 = state_68152;(statearr_68213[29] = inst_68143);
return statearr_68213;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68152__$1,42,dchan);
} else
{if((state_val_68153 === 27))
{var inst_68094 = (state_68152[11]);var inst_68096 = (state_68152[12]);var inst_68101 = cljs.core._nth.call(null,inst_68094,inst_68096);var state_68152__$1 = (function (){var statearr_68214 = state_68152;(statearr_68214[7] = inst_68101);
return statearr_68214;
})();var statearr_68215_68277 = state_68152__$1;(statearr_68215_68277[2] = null);
(statearr_68215_68277[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 28))
{var inst_68093 = (state_68152[13]);var inst_68114 = (state_68152[9]);var inst_68114__$1 = cljs.core.seq.call(null,inst_68093);var state_68152__$1 = (function (){var statearr_68219 = state_68152;(statearr_68219[9] = inst_68114__$1);
return statearr_68219;
})();if(inst_68114__$1)
{var statearr_68220_68278 = state_68152__$1;(statearr_68220_68278[1] = 33);
} else
{var statearr_68221_68279 = state_68152__$1;(statearr_68221_68279[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 29))
{var inst_68141 = (state_68152[2]);var state_68152__$1 = state_68152;var statearr_68222_68280 = state_68152__$1;(statearr_68222_68280[2] = inst_68141);
(statearr_68222_68280[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 30))
{var inst_68095 = (state_68152[10]);var inst_68094 = (state_68152[11]);var inst_68096 = (state_68152[12]);var inst_68093 = (state_68152[13]);var inst_68110 = (state_68152[2]);var inst_68111 = (inst_68096 + 1);var tmp68216 = inst_68095;var tmp68217 = inst_68094;var tmp68218 = inst_68093;var inst_68093__$1 = tmp68218;var inst_68094__$1 = tmp68217;var inst_68095__$1 = tmp68216;var inst_68096__$1 = inst_68111;var state_68152__$1 = (function (){var statearr_68223 = state_68152;(statearr_68223[10] = inst_68095__$1);
(statearr_68223[11] = inst_68094__$1);
(statearr_68223[12] = inst_68096__$1);
(statearr_68223[13] = inst_68093__$1);
(statearr_68223[30] = inst_68110);
return statearr_68223;
})();var statearr_68224_68281 = state_68152__$1;(statearr_68224_68281[2] = null);
(statearr_68224_68281[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68153 === 31))
{var inst_68101 = (state_68152[7]);var inst_68102 = (state_68152[2]);var inst_68103 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_68104 = cljs.core.async.untap_STAR_.call(null,m,inst_68101);var state_68152__$1 = (function (){var statearr_68225 = state_68152;(statearr_68225[31] = inst_68103);
(statearr_68225[32] = inst_68102);
return statearr_68225;
})();var statearr_68226_68282 = state_68152__$1;(statearr_68226_68282[2] = inst_68104);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68152__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_68230 = (new Array(33));(statearr_68230[0] = state_machine__13310__auto__);
(statearr_68230[1] = 1);
return statearr_68230;
});
var state_machine__13310__auto____1 = (function (state_68152){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_68152);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e68231){if((e68231 instanceof Object))
{var ex__13313__auto__ = e68231;var statearr_68232_68283 = state_68152;(statearr_68232_68283[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68152);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e68231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__68284 = state_68152;
state_68152 = G__68284;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_68152){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_68152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_68233 = f__13410__auto__.call(null);(statearr_68233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___68234);
return statearr_68233;
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
cljs.core.async.Mix = (function (){var obj68286 = {};return obj68286;
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
;var m = (function (){if(typeof cljs.core.async.t68396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t68396 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta68397){
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
this.meta68397 = meta68397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t68396.cljs$lang$type = true;
cljs.core.async.t68396.cljs$lang$ctorStr = "cljs.core.async/t68396";
cljs.core.async.t68396.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t68396");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t68396.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t68396.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t68396.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t68396.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t68396.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t68396.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t68396.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t68396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t68396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_68398){var self__ = this;
var _68398__$1 = this;return self__.meta68397;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t68396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_68398,meta68397__$1){var self__ = this;
var _68398__$1 = this;return (new cljs.core.async.t68396(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta68397__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t68396 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t68396(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta68397){return (new cljs.core.async.t68396(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta68397));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t68396(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___68505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_68463){var state_val_68464 = (state_68463[1]);if((state_val_68464 === 1))
{var inst_68402 = (state_68463[7]);var inst_68402__$1 = calc_state.call(null);var inst_68403 = cljs.core.seq_QMARK_.call(null,inst_68402__$1);var state_68463__$1 = (function (){var statearr_68465 = state_68463;(statearr_68465[7] = inst_68402__$1);
return statearr_68465;
})();if(inst_68403)
{var statearr_68466_68506 = state_68463__$1;(statearr_68466_68506[1] = 2);
} else
{var statearr_68467_68507 = state_68463__$1;(statearr_68467_68507[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 2))
{var inst_68402 = (state_68463[7]);var inst_68405 = cljs.core.apply.call(null,cljs.core.hash_map,inst_68402);var state_68463__$1 = state_68463;var statearr_68468_68508 = state_68463__$1;(statearr_68468_68508[2] = inst_68405);
(statearr_68468_68508[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 3))
{var inst_68402 = (state_68463[7]);var state_68463__$1 = state_68463;var statearr_68469_68509 = state_68463__$1;(statearr_68469_68509[2] = inst_68402);
(statearr_68469_68509[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 4))
{var inst_68402 = (state_68463[7]);var inst_68408 = (state_68463[2]);var inst_68409 = cljs.core.get.call(null,inst_68408,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_68410 = cljs.core.get.call(null,inst_68408,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_68411 = cljs.core.get.call(null,inst_68408,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_68412 = inst_68402;var state_68463__$1 = (function (){var statearr_68470 = state_68463;(statearr_68470[8] = inst_68412);
(statearr_68470[9] = inst_68411);
(statearr_68470[10] = inst_68410);
(statearr_68470[11] = inst_68409);
return statearr_68470;
})();var statearr_68471_68510 = state_68463__$1;(statearr_68471_68510[2] = null);
(statearr_68471_68510[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 5))
{var inst_68412 = (state_68463[8]);var inst_68415 = cljs.core.seq_QMARK_.call(null,inst_68412);var state_68463__$1 = state_68463;if(inst_68415)
{var statearr_68472_68511 = state_68463__$1;(statearr_68472_68511[1] = 7);
} else
{var statearr_68473_68512 = state_68463__$1;(statearr_68473_68512[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 6))
{var inst_68461 = (state_68463[2]);var state_68463__$1 = state_68463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68463__$1,inst_68461);
} else
{if((state_val_68464 === 7))
{var inst_68412 = (state_68463[8]);var inst_68417 = cljs.core.apply.call(null,cljs.core.hash_map,inst_68412);var state_68463__$1 = state_68463;var statearr_68474_68513 = state_68463__$1;(statearr_68474_68513[2] = inst_68417);
(statearr_68474_68513[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 8))
{var inst_68412 = (state_68463[8]);var state_68463__$1 = state_68463;var statearr_68475_68514 = state_68463__$1;(statearr_68475_68514[2] = inst_68412);
(statearr_68475_68514[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 9))
{var inst_68420 = (state_68463[12]);var inst_68420__$1 = (state_68463[2]);var inst_68421 = cljs.core.get.call(null,inst_68420__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_68422 = cljs.core.get.call(null,inst_68420__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_68423 = cljs.core.get.call(null,inst_68420__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_68463__$1 = (function (){var statearr_68476 = state_68463;(statearr_68476[12] = inst_68420__$1);
(statearr_68476[13] = inst_68423);
(statearr_68476[14] = inst_68422);
return statearr_68476;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_68463__$1,10,inst_68421);
} else
{if((state_val_68464 === 10))
{var inst_68427 = (state_68463[15]);var inst_68428 = (state_68463[16]);var inst_68426 = (state_68463[2]);var inst_68427__$1 = cljs.core.nth.call(null,inst_68426,0,null);var inst_68428__$1 = cljs.core.nth.call(null,inst_68426,1,null);var inst_68429 = (inst_68427__$1 == null);var inst_68430 = cljs.core._EQ_.call(null,inst_68428__$1,change);var inst_68431 = (inst_68429) || (inst_68430);var state_68463__$1 = (function (){var statearr_68477 = state_68463;(statearr_68477[15] = inst_68427__$1);
(statearr_68477[16] = inst_68428__$1);
return statearr_68477;
})();if(cljs.core.truth_(inst_68431))
{var statearr_68478_68515 = state_68463__$1;(statearr_68478_68515[1] = 11);
} else
{var statearr_68479_68516 = state_68463__$1;(statearr_68479_68516[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 11))
{var inst_68427 = (state_68463[15]);var inst_68433 = (inst_68427 == null);var state_68463__$1 = state_68463;if(cljs.core.truth_(inst_68433))
{var statearr_68480_68517 = state_68463__$1;(statearr_68480_68517[1] = 14);
} else
{var statearr_68481_68518 = state_68463__$1;(statearr_68481_68518[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 12))
{var inst_68442 = (state_68463[17]);var inst_68428 = (state_68463[16]);var inst_68423 = (state_68463[13]);var inst_68442__$1 = inst_68423.call(null,inst_68428);var state_68463__$1 = (function (){var statearr_68482 = state_68463;(statearr_68482[17] = inst_68442__$1);
return statearr_68482;
})();if(cljs.core.truth_(inst_68442__$1))
{var statearr_68483_68519 = state_68463__$1;(statearr_68483_68519[1] = 17);
} else
{var statearr_68484_68520 = state_68463__$1;(statearr_68484_68520[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 13))
{var inst_68459 = (state_68463[2]);var state_68463__$1 = state_68463;var statearr_68485_68521 = state_68463__$1;(statearr_68485_68521[2] = inst_68459);
(statearr_68485_68521[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 14))
{var inst_68428 = (state_68463[16]);var inst_68435 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_68428);var state_68463__$1 = state_68463;var statearr_68486_68522 = state_68463__$1;(statearr_68486_68522[2] = inst_68435);
(statearr_68486_68522[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 15))
{var state_68463__$1 = state_68463;var statearr_68487_68523 = state_68463__$1;(statearr_68487_68523[2] = null);
(statearr_68487_68523[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 16))
{var inst_68438 = (state_68463[2]);var inst_68439 = calc_state.call(null);var inst_68412 = inst_68439;var state_68463__$1 = (function (){var statearr_68488 = state_68463;(statearr_68488[8] = inst_68412);
(statearr_68488[18] = inst_68438);
return statearr_68488;
})();var statearr_68489_68524 = state_68463__$1;(statearr_68489_68524[2] = null);
(statearr_68489_68524[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 17))
{var inst_68442 = (state_68463[17]);var state_68463__$1 = state_68463;var statearr_68490_68525 = state_68463__$1;(statearr_68490_68525[2] = inst_68442);
(statearr_68490_68525[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 18))
{var inst_68428 = (state_68463[16]);var inst_68423 = (state_68463[13]);var inst_68422 = (state_68463[14]);var inst_68445 = cljs.core.empty_QMARK_.call(null,inst_68423);var inst_68446 = inst_68422.call(null,inst_68428);var inst_68447 = cljs.core.not.call(null,inst_68446);var inst_68448 = (inst_68445) && (inst_68447);var state_68463__$1 = state_68463;var statearr_68491_68526 = state_68463__$1;(statearr_68491_68526[2] = inst_68448);
(statearr_68491_68526[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 19))
{var inst_68450 = (state_68463[2]);var state_68463__$1 = state_68463;if(cljs.core.truth_(inst_68450))
{var statearr_68492_68527 = state_68463__$1;(statearr_68492_68527[1] = 20);
} else
{var statearr_68493_68528 = state_68463__$1;(statearr_68493_68528[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 20))
{var inst_68427 = (state_68463[15]);var state_68463__$1 = state_68463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68463__$1,23,out,inst_68427);
} else
{if((state_val_68464 === 21))
{var state_68463__$1 = state_68463;var statearr_68494_68529 = state_68463__$1;(statearr_68494_68529[2] = null);
(statearr_68494_68529[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 22))
{var inst_68420 = (state_68463[12]);var inst_68456 = (state_68463[2]);var inst_68412 = inst_68420;var state_68463__$1 = (function (){var statearr_68495 = state_68463;(statearr_68495[8] = inst_68412);
(statearr_68495[19] = inst_68456);
return statearr_68495;
})();var statearr_68496_68530 = state_68463__$1;(statearr_68496_68530[2] = null);
(statearr_68496_68530[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68464 === 23))
{var inst_68453 = (state_68463[2]);var state_68463__$1 = state_68463;var statearr_68497_68531 = state_68463__$1;(statearr_68497_68531[2] = inst_68453);
(statearr_68497_68531[1] = 22);
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
var state_machine__13310__auto____0 = (function (){var statearr_68501 = (new Array(20));(statearr_68501[0] = state_machine__13310__auto__);
(statearr_68501[1] = 1);
return statearr_68501;
});
var state_machine__13310__auto____1 = (function (state_68463){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_68463);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e68502){if((e68502 instanceof Object))
{var ex__13313__auto__ = e68502;var statearr_68503_68532 = state_68463;(statearr_68503_68532[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68463);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e68502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__68533 = state_68463;
state_68463 = G__68533;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_68463){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_68463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_68504 = f__13410__auto__.call(null);(statearr_68504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___68505);
return statearr_68504;
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
cljs.core.async.Pub = (function (){var obj68535 = {};return obj68535;
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
return (function (p1__68536_SHARP_){if(cljs.core.truth_(p1__68536_SHARP_.call(null,topic)))
{return p1__68536_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__68536_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t68661 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t68661 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta68662){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta68662 = meta68662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t68661.cljs$lang$type = true;
cljs.core.async.t68661.cljs$lang$ctorStr = "cljs.core.async/t68661";
cljs.core.async.t68661.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t68661");
});})(mults,ensure_mult))
;
cljs.core.async.t68661.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t68661.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t68661.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t68661.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t68661.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t68661.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t68661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t68661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_68663){var self__ = this;
var _68663__$1 = this;return self__.meta68662;
});})(mults,ensure_mult))
;
cljs.core.async.t68661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_68663,meta68662__$1){var self__ = this;
var _68663__$1 = this;return (new cljs.core.async.t68661(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta68662__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t68661 = ((function (mults,ensure_mult){
return (function __GT_t68661(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta68662){return (new cljs.core.async.t68661(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta68662));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t68661(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___68785 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_68737){var state_val_68738 = (state_68737[1]);if((state_val_68738 === 1))
{var state_68737__$1 = state_68737;var statearr_68739_68786 = state_68737__$1;(statearr_68739_68786[2] = null);
(statearr_68739_68786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 2))
{var state_68737__$1 = state_68737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68737__$1,4,ch);
} else
{if((state_val_68738 === 3))
{var inst_68735 = (state_68737[2]);var state_68737__$1 = state_68737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68737__$1,inst_68735);
} else
{if((state_val_68738 === 4))
{var inst_68666 = (state_68737[7]);var inst_68666__$1 = (state_68737[2]);var inst_68667 = (inst_68666__$1 == null);var state_68737__$1 = (function (){var statearr_68740 = state_68737;(statearr_68740[7] = inst_68666__$1);
return statearr_68740;
})();if(cljs.core.truth_(inst_68667))
{var statearr_68741_68787 = state_68737__$1;(statearr_68741_68787[1] = 5);
} else
{var statearr_68742_68788 = state_68737__$1;(statearr_68742_68788[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 5))
{var inst_68673 = cljs.core.deref.call(null,mults);var inst_68674 = cljs.core.vals.call(null,inst_68673);var inst_68675 = cljs.core.seq.call(null,inst_68674);var inst_68676 = inst_68675;var inst_68677 = null;var inst_68678 = 0;var inst_68679 = 0;var state_68737__$1 = (function (){var statearr_68743 = state_68737;(statearr_68743[8] = inst_68678);
(statearr_68743[9] = inst_68679);
(statearr_68743[10] = inst_68677);
(statearr_68743[11] = inst_68676);
return statearr_68743;
})();var statearr_68744_68789 = state_68737__$1;(statearr_68744_68789[2] = null);
(statearr_68744_68789[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 6))
{var inst_68714 = (state_68737[12]);var inst_68716 = (state_68737[13]);var inst_68666 = (state_68737[7]);var inst_68714__$1 = topic_fn.call(null,inst_68666);var inst_68715 = cljs.core.deref.call(null,mults);var inst_68716__$1 = cljs.core.get.call(null,inst_68715,inst_68714__$1);var state_68737__$1 = (function (){var statearr_68745 = state_68737;(statearr_68745[12] = inst_68714__$1);
(statearr_68745[13] = inst_68716__$1);
return statearr_68745;
})();if(cljs.core.truth_(inst_68716__$1))
{var statearr_68746_68790 = state_68737__$1;(statearr_68746_68790[1] = 19);
} else
{var statearr_68747_68791 = state_68737__$1;(statearr_68747_68791[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 7))
{var inst_68733 = (state_68737[2]);var state_68737__$1 = state_68737;var statearr_68748_68792 = state_68737__$1;(statearr_68748_68792[2] = inst_68733);
(statearr_68748_68792[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 8))
{var inst_68678 = (state_68737[8]);var inst_68679 = (state_68737[9]);var inst_68681 = (inst_68679 < inst_68678);var inst_68682 = inst_68681;var state_68737__$1 = state_68737;if(cljs.core.truth_(inst_68682))
{var statearr_68752_68793 = state_68737__$1;(statearr_68752_68793[1] = 10);
} else
{var statearr_68753_68794 = state_68737__$1;(statearr_68753_68794[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 9))
{var inst_68712 = (state_68737[2]);var state_68737__$1 = state_68737;var statearr_68754_68795 = state_68737__$1;(statearr_68754_68795[2] = inst_68712);
(statearr_68754_68795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 10))
{var inst_68678 = (state_68737[8]);var inst_68679 = (state_68737[9]);var inst_68677 = (state_68737[10]);var inst_68676 = (state_68737[11]);var inst_68684 = cljs.core._nth.call(null,inst_68677,inst_68679);var inst_68685 = cljs.core.async.muxch_STAR_.call(null,inst_68684);var inst_68686 = cljs.core.async.close_BANG_.call(null,inst_68685);var inst_68687 = (inst_68679 + 1);var tmp68749 = inst_68678;var tmp68750 = inst_68677;var tmp68751 = inst_68676;var inst_68676__$1 = tmp68751;var inst_68677__$1 = tmp68750;var inst_68678__$1 = tmp68749;var inst_68679__$1 = inst_68687;var state_68737__$1 = (function (){var statearr_68755 = state_68737;(statearr_68755[8] = inst_68678__$1);
(statearr_68755[9] = inst_68679__$1);
(statearr_68755[14] = inst_68686);
(statearr_68755[10] = inst_68677__$1);
(statearr_68755[11] = inst_68676__$1);
return statearr_68755;
})();var statearr_68756_68796 = state_68737__$1;(statearr_68756_68796[2] = null);
(statearr_68756_68796[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 11))
{var inst_68690 = (state_68737[15]);var inst_68676 = (state_68737[11]);var inst_68690__$1 = cljs.core.seq.call(null,inst_68676);var state_68737__$1 = (function (){var statearr_68757 = state_68737;(statearr_68757[15] = inst_68690__$1);
return statearr_68757;
})();if(inst_68690__$1)
{var statearr_68758_68797 = state_68737__$1;(statearr_68758_68797[1] = 13);
} else
{var statearr_68759_68798 = state_68737__$1;(statearr_68759_68798[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 12))
{var inst_68710 = (state_68737[2]);var state_68737__$1 = state_68737;var statearr_68760_68799 = state_68737__$1;(statearr_68760_68799[2] = inst_68710);
(statearr_68760_68799[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 13))
{var inst_68690 = (state_68737[15]);var inst_68692 = cljs.core.chunked_seq_QMARK_.call(null,inst_68690);var state_68737__$1 = state_68737;if(inst_68692)
{var statearr_68761_68800 = state_68737__$1;(statearr_68761_68800[1] = 16);
} else
{var statearr_68762_68801 = state_68737__$1;(statearr_68762_68801[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 14))
{var state_68737__$1 = state_68737;var statearr_68763_68802 = state_68737__$1;(statearr_68763_68802[2] = null);
(statearr_68763_68802[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 15))
{var inst_68708 = (state_68737[2]);var state_68737__$1 = state_68737;var statearr_68764_68803 = state_68737__$1;(statearr_68764_68803[2] = inst_68708);
(statearr_68764_68803[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 16))
{var inst_68690 = (state_68737[15]);var inst_68694 = cljs.core.chunk_first.call(null,inst_68690);var inst_68695 = cljs.core.chunk_rest.call(null,inst_68690);var inst_68696 = cljs.core.count.call(null,inst_68694);var inst_68676 = inst_68695;var inst_68677 = inst_68694;var inst_68678 = inst_68696;var inst_68679 = 0;var state_68737__$1 = (function (){var statearr_68765 = state_68737;(statearr_68765[8] = inst_68678);
(statearr_68765[9] = inst_68679);
(statearr_68765[10] = inst_68677);
(statearr_68765[11] = inst_68676);
return statearr_68765;
})();var statearr_68766_68804 = state_68737__$1;(statearr_68766_68804[2] = null);
(statearr_68766_68804[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 17))
{var inst_68690 = (state_68737[15]);var inst_68699 = cljs.core.first.call(null,inst_68690);var inst_68700 = cljs.core.async.muxch_STAR_.call(null,inst_68699);var inst_68701 = cljs.core.async.close_BANG_.call(null,inst_68700);var inst_68702 = cljs.core.next.call(null,inst_68690);var inst_68676 = inst_68702;var inst_68677 = null;var inst_68678 = 0;var inst_68679 = 0;var state_68737__$1 = (function (){var statearr_68767 = state_68737;(statearr_68767[8] = inst_68678);
(statearr_68767[9] = inst_68679);
(statearr_68767[10] = inst_68677);
(statearr_68767[16] = inst_68701);
(statearr_68767[11] = inst_68676);
return statearr_68767;
})();var statearr_68768_68805 = state_68737__$1;(statearr_68768_68805[2] = null);
(statearr_68768_68805[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 18))
{var inst_68705 = (state_68737[2]);var state_68737__$1 = state_68737;var statearr_68769_68806 = state_68737__$1;(statearr_68769_68806[2] = inst_68705);
(statearr_68769_68806[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 19))
{var state_68737__$1 = state_68737;var statearr_68770_68807 = state_68737__$1;(statearr_68770_68807[2] = null);
(statearr_68770_68807[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 20))
{var state_68737__$1 = state_68737;var statearr_68771_68808 = state_68737__$1;(statearr_68771_68808[2] = null);
(statearr_68771_68808[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 21))
{var inst_68730 = (state_68737[2]);var state_68737__$1 = (function (){var statearr_68772 = state_68737;(statearr_68772[17] = inst_68730);
return statearr_68772;
})();var statearr_68773_68809 = state_68737__$1;(statearr_68773_68809[2] = null);
(statearr_68773_68809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 22))
{var inst_68727 = (state_68737[2]);var state_68737__$1 = state_68737;var statearr_68774_68810 = state_68737__$1;(statearr_68774_68810[2] = inst_68727);
(statearr_68774_68810[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 23))
{var inst_68714 = (state_68737[12]);var inst_68718 = (state_68737[2]);var inst_68719 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_68714);var state_68737__$1 = (function (){var statearr_68775 = state_68737;(statearr_68775[18] = inst_68718);
return statearr_68775;
})();var statearr_68776_68811 = state_68737__$1;(statearr_68776_68811[2] = inst_68719);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68737__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68738 === 24))
{var inst_68716 = (state_68737[13]);var inst_68666 = (state_68737[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_68737,23,Object,null,22);var inst_68723 = cljs.core.async.muxch_STAR_.call(null,inst_68716);var state_68737__$1 = state_68737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68737__$1,25,inst_68723,inst_68666);
} else
{if((state_val_68738 === 25))
{var inst_68725 = (state_68737[2]);var state_68737__$1 = state_68737;var statearr_68777_68812 = state_68737__$1;(statearr_68777_68812[2] = inst_68725);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68737__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_68781 = (new Array(19));(statearr_68781[0] = state_machine__13310__auto__);
(statearr_68781[1] = 1);
return statearr_68781;
});
var state_machine__13310__auto____1 = (function (state_68737){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_68737);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e68782){if((e68782 instanceof Object))
{var ex__13313__auto__ = e68782;var statearr_68783_68813 = state_68737;(statearr_68783_68813[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e68782;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__68814 = state_68737;
state_68737 = G__68814;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_68737){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_68737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_68784 = f__13410__auto__.call(null);(statearr_68784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___68785);
return statearr_68784;
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
,cljs.core.range.call(null,cnt));var c__13409__auto___68951 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_68921){var state_val_68922 = (state_68921[1]);if((state_val_68922 === 1))
{var state_68921__$1 = state_68921;var statearr_68923_68952 = state_68921__$1;(statearr_68923_68952[2] = null);
(statearr_68923_68952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 2))
{var inst_68884 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_68885 = 0;var state_68921__$1 = (function (){var statearr_68924 = state_68921;(statearr_68924[7] = inst_68885);
(statearr_68924[8] = inst_68884);
return statearr_68924;
})();var statearr_68925_68953 = state_68921__$1;(statearr_68925_68953[2] = null);
(statearr_68925_68953[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 3))
{var inst_68919 = (state_68921[2]);var state_68921__$1 = state_68921;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68921__$1,inst_68919);
} else
{if((state_val_68922 === 4))
{var inst_68885 = (state_68921[7]);var inst_68887 = (inst_68885 < cnt);var state_68921__$1 = state_68921;if(cljs.core.truth_(inst_68887))
{var statearr_68926_68954 = state_68921__$1;(statearr_68926_68954[1] = 6);
} else
{var statearr_68927_68955 = state_68921__$1;(statearr_68927_68955[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 5))
{var inst_68905 = (state_68921[2]);var state_68921__$1 = (function (){var statearr_68928 = state_68921;(statearr_68928[9] = inst_68905);
return statearr_68928;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68921__$1,12,dchan);
} else
{if((state_val_68922 === 6))
{var state_68921__$1 = state_68921;var statearr_68929_68956 = state_68921__$1;(statearr_68929_68956[2] = null);
(statearr_68929_68956[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 7))
{var state_68921__$1 = state_68921;var statearr_68930_68957 = state_68921__$1;(statearr_68930_68957[2] = null);
(statearr_68930_68957[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 8))
{var inst_68903 = (state_68921[2]);var state_68921__$1 = state_68921;var statearr_68931_68958 = state_68921__$1;(statearr_68931_68958[2] = inst_68903);
(statearr_68931_68958[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 9))
{var inst_68885 = (state_68921[7]);var inst_68898 = (state_68921[2]);var inst_68899 = (inst_68885 + 1);var inst_68885__$1 = inst_68899;var state_68921__$1 = (function (){var statearr_68932 = state_68921;(statearr_68932[7] = inst_68885__$1);
(statearr_68932[10] = inst_68898);
return statearr_68932;
})();var statearr_68933_68959 = state_68921__$1;(statearr_68933_68959[2] = null);
(statearr_68933_68959[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 10))
{var inst_68889 = (state_68921[2]);var inst_68890 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_68921__$1 = (function (){var statearr_68934 = state_68921;(statearr_68934[11] = inst_68889);
return statearr_68934;
})();var statearr_68935_68960 = state_68921__$1;(statearr_68935_68960[2] = inst_68890);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68921__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 11))
{var inst_68885 = (state_68921[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_68921,10,Object,null,9);var inst_68894 = chs__$1.call(null,inst_68885);var inst_68895 = done.call(null,inst_68885);var inst_68896 = cljs.core.async.take_BANG_.call(null,inst_68894,inst_68895);var state_68921__$1 = state_68921;var statearr_68936_68961 = state_68921__$1;(statearr_68936_68961[2] = inst_68896);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68921__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 12))
{var inst_68907 = (state_68921[12]);var inst_68907__$1 = (state_68921[2]);var inst_68908 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_68907__$1);var state_68921__$1 = (function (){var statearr_68937 = state_68921;(statearr_68937[12] = inst_68907__$1);
return statearr_68937;
})();if(cljs.core.truth_(inst_68908))
{var statearr_68938_68962 = state_68921__$1;(statearr_68938_68962[1] = 13);
} else
{var statearr_68939_68963 = state_68921__$1;(statearr_68939_68963[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 13))
{var inst_68910 = cljs.core.async.close_BANG_.call(null,out);var state_68921__$1 = state_68921;var statearr_68940_68964 = state_68921__$1;(statearr_68940_68964[2] = inst_68910);
(statearr_68940_68964[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 14))
{var inst_68907 = (state_68921[12]);var inst_68912 = cljs.core.apply.call(null,f,inst_68907);var state_68921__$1 = state_68921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68921__$1,16,out,inst_68912);
} else
{if((state_val_68922 === 15))
{var inst_68917 = (state_68921[2]);var state_68921__$1 = state_68921;var statearr_68941_68965 = state_68921__$1;(statearr_68941_68965[2] = inst_68917);
(statearr_68941_68965[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68922 === 16))
{var inst_68914 = (state_68921[2]);var state_68921__$1 = (function (){var statearr_68942 = state_68921;(statearr_68942[13] = inst_68914);
return statearr_68942;
})();var statearr_68943_68966 = state_68921__$1;(statearr_68943_68966[2] = null);
(statearr_68943_68966[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_68947 = (new Array(14));(statearr_68947[0] = state_machine__13310__auto__);
(statearr_68947[1] = 1);
return statearr_68947;
});
var state_machine__13310__auto____1 = (function (state_68921){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_68921);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e68948){if((e68948 instanceof Object))
{var ex__13313__auto__ = e68948;var statearr_68949_68967 = state_68921;(statearr_68949_68967[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68921);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e68948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__68968 = state_68921;
state_68921 = G__68968;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_68921){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_68921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_68950 = f__13410__auto__.call(null);(statearr_68950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___68951);
return statearr_68950;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___69076 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_69052){var state_val_69053 = (state_69052[1]);if((state_val_69053 === 1))
{var inst_69023 = cljs.core.vec.call(null,chs);var inst_69024 = inst_69023;var state_69052__$1 = (function (){var statearr_69054 = state_69052;(statearr_69054[7] = inst_69024);
return statearr_69054;
})();var statearr_69055_69077 = state_69052__$1;(statearr_69055_69077[2] = null);
(statearr_69055_69077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69053 === 2))
{var inst_69024 = (state_69052[7]);var inst_69026 = cljs.core.count.call(null,inst_69024);var inst_69027 = (inst_69026 > 0);var state_69052__$1 = state_69052;if(cljs.core.truth_(inst_69027))
{var statearr_69056_69078 = state_69052__$1;(statearr_69056_69078[1] = 4);
} else
{var statearr_69057_69079 = state_69052__$1;(statearr_69057_69079[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69053 === 3))
{var inst_69050 = (state_69052[2]);var state_69052__$1 = state_69052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69052__$1,inst_69050);
} else
{if((state_val_69053 === 4))
{var inst_69024 = (state_69052[7]);var state_69052__$1 = state_69052;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_69052__$1,7,inst_69024);
} else
{if((state_val_69053 === 5))
{var inst_69046 = cljs.core.async.close_BANG_.call(null,out);var state_69052__$1 = state_69052;var statearr_69058_69080 = state_69052__$1;(statearr_69058_69080[2] = inst_69046);
(statearr_69058_69080[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69053 === 6))
{var inst_69048 = (state_69052[2]);var state_69052__$1 = state_69052;var statearr_69059_69081 = state_69052__$1;(statearr_69059_69081[2] = inst_69048);
(statearr_69059_69081[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69053 === 7))
{var inst_69032 = (state_69052[8]);var inst_69031 = (state_69052[9]);var inst_69031__$1 = (state_69052[2]);var inst_69032__$1 = cljs.core.nth.call(null,inst_69031__$1,0,null);var inst_69033 = cljs.core.nth.call(null,inst_69031__$1,1,null);var inst_69034 = (inst_69032__$1 == null);var state_69052__$1 = (function (){var statearr_69060 = state_69052;(statearr_69060[10] = inst_69033);
(statearr_69060[8] = inst_69032__$1);
(statearr_69060[9] = inst_69031__$1);
return statearr_69060;
})();if(cljs.core.truth_(inst_69034))
{var statearr_69061_69082 = state_69052__$1;(statearr_69061_69082[1] = 8);
} else
{var statearr_69062_69083 = state_69052__$1;(statearr_69062_69083[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69053 === 8))
{var inst_69024 = (state_69052[7]);var inst_69033 = (state_69052[10]);var inst_69032 = (state_69052[8]);var inst_69031 = (state_69052[9]);var inst_69036 = (function (){var c = inst_69033;var v = inst_69032;var vec__69029 = inst_69031;var cs = inst_69024;return ((function (c,v,vec__69029,cs,inst_69024,inst_69033,inst_69032,inst_69031,state_val_69053){
return (function (p1__68969_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__68969_SHARP_);
});
;})(c,v,vec__69029,cs,inst_69024,inst_69033,inst_69032,inst_69031,state_val_69053))
})();var inst_69037 = cljs.core.filterv.call(null,inst_69036,inst_69024);var inst_69024__$1 = inst_69037;var state_69052__$1 = (function (){var statearr_69063 = state_69052;(statearr_69063[7] = inst_69024__$1);
return statearr_69063;
})();var statearr_69064_69084 = state_69052__$1;(statearr_69064_69084[2] = null);
(statearr_69064_69084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69053 === 9))
{var inst_69032 = (state_69052[8]);var state_69052__$1 = state_69052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69052__$1,11,out,inst_69032);
} else
{if((state_val_69053 === 10))
{var inst_69044 = (state_69052[2]);var state_69052__$1 = state_69052;var statearr_69066_69085 = state_69052__$1;(statearr_69066_69085[2] = inst_69044);
(statearr_69066_69085[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69053 === 11))
{var inst_69024 = (state_69052[7]);var inst_69041 = (state_69052[2]);var tmp69065 = inst_69024;var inst_69024__$1 = tmp69065;var state_69052__$1 = (function (){var statearr_69067 = state_69052;(statearr_69067[7] = inst_69024__$1);
(statearr_69067[11] = inst_69041);
return statearr_69067;
})();var statearr_69068_69086 = state_69052__$1;(statearr_69068_69086[2] = null);
(statearr_69068_69086[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_69072 = (new Array(12));(statearr_69072[0] = state_machine__13310__auto__);
(statearr_69072[1] = 1);
return statearr_69072;
});
var state_machine__13310__auto____1 = (function (state_69052){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_69052);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e69073){if((e69073 instanceof Object))
{var ex__13313__auto__ = e69073;var statearr_69074_69087 = state_69052;(statearr_69074_69087[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e69073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__69088 = state_69052;
state_69052 = G__69088;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_69052){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_69052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_69075 = f__13410__auto__.call(null);(statearr_69075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___69076);
return statearr_69075;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___69181 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_69158){var state_val_69159 = (state_69158[1]);if((state_val_69159 === 1))
{var inst_69135 = 0;var state_69158__$1 = (function (){var statearr_69160 = state_69158;(statearr_69160[7] = inst_69135);
return statearr_69160;
})();var statearr_69161_69182 = state_69158__$1;(statearr_69161_69182[2] = null);
(statearr_69161_69182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69159 === 2))
{var inst_69135 = (state_69158[7]);var inst_69137 = (inst_69135 < n);var state_69158__$1 = state_69158;if(cljs.core.truth_(inst_69137))
{var statearr_69162_69183 = state_69158__$1;(statearr_69162_69183[1] = 4);
} else
{var statearr_69163_69184 = state_69158__$1;(statearr_69163_69184[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69159 === 3))
{var inst_69155 = (state_69158[2]);var inst_69156 = cljs.core.async.close_BANG_.call(null,out);var state_69158__$1 = (function (){var statearr_69164 = state_69158;(statearr_69164[8] = inst_69155);
return statearr_69164;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69158__$1,inst_69156);
} else
{if((state_val_69159 === 4))
{var state_69158__$1 = state_69158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69158__$1,7,ch);
} else
{if((state_val_69159 === 5))
{var state_69158__$1 = state_69158;var statearr_69165_69185 = state_69158__$1;(statearr_69165_69185[2] = null);
(statearr_69165_69185[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69159 === 6))
{var inst_69153 = (state_69158[2]);var state_69158__$1 = state_69158;var statearr_69166_69186 = state_69158__$1;(statearr_69166_69186[2] = inst_69153);
(statearr_69166_69186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69159 === 7))
{var inst_69140 = (state_69158[9]);var inst_69140__$1 = (state_69158[2]);var inst_69141 = (inst_69140__$1 == null);var inst_69142 = cljs.core.not.call(null,inst_69141);var state_69158__$1 = (function (){var statearr_69167 = state_69158;(statearr_69167[9] = inst_69140__$1);
return statearr_69167;
})();if(inst_69142)
{var statearr_69168_69187 = state_69158__$1;(statearr_69168_69187[1] = 8);
} else
{var statearr_69169_69188 = state_69158__$1;(statearr_69169_69188[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69159 === 8))
{var inst_69140 = (state_69158[9]);var state_69158__$1 = state_69158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69158__$1,11,out,inst_69140);
} else
{if((state_val_69159 === 9))
{var state_69158__$1 = state_69158;var statearr_69170_69189 = state_69158__$1;(statearr_69170_69189[2] = null);
(statearr_69170_69189[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69159 === 10))
{var inst_69150 = (state_69158[2]);var state_69158__$1 = state_69158;var statearr_69171_69190 = state_69158__$1;(statearr_69171_69190[2] = inst_69150);
(statearr_69171_69190[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69159 === 11))
{var inst_69135 = (state_69158[7]);var inst_69145 = (state_69158[2]);var inst_69146 = (inst_69135 + 1);var inst_69135__$1 = inst_69146;var state_69158__$1 = (function (){var statearr_69172 = state_69158;(statearr_69172[7] = inst_69135__$1);
(statearr_69172[10] = inst_69145);
return statearr_69172;
})();var statearr_69173_69191 = state_69158__$1;(statearr_69173_69191[2] = null);
(statearr_69173_69191[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_69177 = (new Array(11));(statearr_69177[0] = state_machine__13310__auto__);
(statearr_69177[1] = 1);
return statearr_69177;
});
var state_machine__13310__auto____1 = (function (state_69158){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_69158);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e69178){if((e69178 instanceof Object))
{var ex__13313__auto__ = e69178;var statearr_69179_69192 = state_69158;(statearr_69179_69192[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69158);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e69178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__69193 = state_69158;
state_69158 = G__69193;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_69158){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_69158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_69180 = f__13410__auto__.call(null);(statearr_69180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___69181);
return statearr_69180;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___69290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_69265){var state_val_69266 = (state_69265[1]);if((state_val_69266 === 1))
{var inst_69242 = null;var state_69265__$1 = (function (){var statearr_69267 = state_69265;(statearr_69267[7] = inst_69242);
return statearr_69267;
})();var statearr_69268_69291 = state_69265__$1;(statearr_69268_69291[2] = null);
(statearr_69268_69291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69266 === 2))
{var state_69265__$1 = state_69265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69265__$1,4,ch);
} else
{if((state_val_69266 === 3))
{var inst_69262 = (state_69265[2]);var inst_69263 = cljs.core.async.close_BANG_.call(null,out);var state_69265__$1 = (function (){var statearr_69269 = state_69265;(statearr_69269[8] = inst_69262);
return statearr_69269;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69265__$1,inst_69263);
} else
{if((state_val_69266 === 4))
{var inst_69245 = (state_69265[9]);var inst_69245__$1 = (state_69265[2]);var inst_69246 = (inst_69245__$1 == null);var inst_69247 = cljs.core.not.call(null,inst_69246);var state_69265__$1 = (function (){var statearr_69270 = state_69265;(statearr_69270[9] = inst_69245__$1);
return statearr_69270;
})();if(inst_69247)
{var statearr_69271_69292 = state_69265__$1;(statearr_69271_69292[1] = 5);
} else
{var statearr_69272_69293 = state_69265__$1;(statearr_69272_69293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69266 === 5))
{var inst_69245 = (state_69265[9]);var inst_69242 = (state_69265[7]);var inst_69249 = cljs.core._EQ_.call(null,inst_69245,inst_69242);var state_69265__$1 = state_69265;if(inst_69249)
{var statearr_69273_69294 = state_69265__$1;(statearr_69273_69294[1] = 8);
} else
{var statearr_69274_69295 = state_69265__$1;(statearr_69274_69295[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69266 === 6))
{var state_69265__$1 = state_69265;var statearr_69276_69296 = state_69265__$1;(statearr_69276_69296[2] = null);
(statearr_69276_69296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69266 === 7))
{var inst_69260 = (state_69265[2]);var state_69265__$1 = state_69265;var statearr_69277_69297 = state_69265__$1;(statearr_69277_69297[2] = inst_69260);
(statearr_69277_69297[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69266 === 8))
{var inst_69242 = (state_69265[7]);var tmp69275 = inst_69242;var inst_69242__$1 = tmp69275;var state_69265__$1 = (function (){var statearr_69278 = state_69265;(statearr_69278[7] = inst_69242__$1);
return statearr_69278;
})();var statearr_69279_69298 = state_69265__$1;(statearr_69279_69298[2] = null);
(statearr_69279_69298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69266 === 9))
{var inst_69245 = (state_69265[9]);var state_69265__$1 = state_69265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69265__$1,11,out,inst_69245);
} else
{if((state_val_69266 === 10))
{var inst_69257 = (state_69265[2]);var state_69265__$1 = state_69265;var statearr_69280_69299 = state_69265__$1;(statearr_69280_69299[2] = inst_69257);
(statearr_69280_69299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69266 === 11))
{var inst_69245 = (state_69265[9]);var inst_69254 = (state_69265[2]);var inst_69242 = inst_69245;var state_69265__$1 = (function (){var statearr_69281 = state_69265;(statearr_69281[10] = inst_69254);
(statearr_69281[7] = inst_69242);
return statearr_69281;
})();var statearr_69282_69300 = state_69265__$1;(statearr_69282_69300[2] = null);
(statearr_69282_69300[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_69286 = (new Array(11));(statearr_69286[0] = state_machine__13310__auto__);
(statearr_69286[1] = 1);
return statearr_69286;
});
var state_machine__13310__auto____1 = (function (state_69265){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_69265);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e69287){if((e69287 instanceof Object))
{var ex__13313__auto__ = e69287;var statearr_69288_69301 = state_69265;(statearr_69288_69301[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e69287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__69302 = state_69265;
state_69265 = G__69302;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_69265){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_69265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_69289 = f__13410__auto__.call(null);(statearr_69289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___69290);
return statearr_69289;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___69437 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_69407){var state_val_69408 = (state_69407[1]);if((state_val_69408 === 1))
{var inst_69370 = (new Array(n));var inst_69371 = inst_69370;var inst_69372 = 0;var state_69407__$1 = (function (){var statearr_69409 = state_69407;(statearr_69409[7] = inst_69371);
(statearr_69409[8] = inst_69372);
return statearr_69409;
})();var statearr_69410_69438 = state_69407__$1;(statearr_69410_69438[2] = null);
(statearr_69410_69438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69408 === 2))
{var state_69407__$1 = state_69407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69407__$1,4,ch);
} else
{if((state_val_69408 === 3))
{var inst_69405 = (state_69407[2]);var state_69407__$1 = state_69407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69407__$1,inst_69405);
} else
{if((state_val_69408 === 4))
{var inst_69375 = (state_69407[9]);var inst_69375__$1 = (state_69407[2]);var inst_69376 = (inst_69375__$1 == null);var inst_69377 = cljs.core.not.call(null,inst_69376);var state_69407__$1 = (function (){var statearr_69411 = state_69407;(statearr_69411[9] = inst_69375__$1);
return statearr_69411;
})();if(inst_69377)
{var statearr_69412_69439 = state_69407__$1;(statearr_69412_69439[1] = 5);
} else
{var statearr_69413_69440 = state_69407__$1;(statearr_69413_69440[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69408 === 5))
{var inst_69375 = (state_69407[9]);var inst_69371 = (state_69407[7]);var inst_69372 = (state_69407[8]);var inst_69380 = (state_69407[10]);var inst_69379 = (inst_69371[inst_69372] = inst_69375);var inst_69380__$1 = (inst_69372 + 1);var inst_69381 = (inst_69380__$1 < n);var state_69407__$1 = (function (){var statearr_69414 = state_69407;(statearr_69414[11] = inst_69379);
(statearr_69414[10] = inst_69380__$1);
return statearr_69414;
})();if(cljs.core.truth_(inst_69381))
{var statearr_69415_69441 = state_69407__$1;(statearr_69415_69441[1] = 8);
} else
{var statearr_69416_69442 = state_69407__$1;(statearr_69416_69442[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69408 === 6))
{var inst_69372 = (state_69407[8]);var inst_69393 = (inst_69372 > 0);var state_69407__$1 = state_69407;if(cljs.core.truth_(inst_69393))
{var statearr_69418_69443 = state_69407__$1;(statearr_69418_69443[1] = 12);
} else
{var statearr_69419_69444 = state_69407__$1;(statearr_69419_69444[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69408 === 7))
{var inst_69403 = (state_69407[2]);var state_69407__$1 = state_69407;var statearr_69420_69445 = state_69407__$1;(statearr_69420_69445[2] = inst_69403);
(statearr_69420_69445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69408 === 8))
{var inst_69371 = (state_69407[7]);var inst_69380 = (state_69407[10]);var tmp69417 = inst_69371;var inst_69371__$1 = tmp69417;var inst_69372 = inst_69380;var state_69407__$1 = (function (){var statearr_69421 = state_69407;(statearr_69421[7] = inst_69371__$1);
(statearr_69421[8] = inst_69372);
return statearr_69421;
})();var statearr_69422_69446 = state_69407__$1;(statearr_69422_69446[2] = null);
(statearr_69422_69446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69408 === 9))
{var inst_69371 = (state_69407[7]);var inst_69385 = cljs.core.vec.call(null,inst_69371);var state_69407__$1 = state_69407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69407__$1,11,out,inst_69385);
} else
{if((state_val_69408 === 10))
{var inst_69391 = (state_69407[2]);var state_69407__$1 = state_69407;var statearr_69423_69447 = state_69407__$1;(statearr_69423_69447[2] = inst_69391);
(statearr_69423_69447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69408 === 11))
{var inst_69387 = (state_69407[2]);var inst_69388 = (new Array(n));var inst_69371 = inst_69388;var inst_69372 = 0;var state_69407__$1 = (function (){var statearr_69424 = state_69407;(statearr_69424[7] = inst_69371);
(statearr_69424[8] = inst_69372);
(statearr_69424[12] = inst_69387);
return statearr_69424;
})();var statearr_69425_69448 = state_69407__$1;(statearr_69425_69448[2] = null);
(statearr_69425_69448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69408 === 12))
{var inst_69371 = (state_69407[7]);var inst_69395 = cljs.core.vec.call(null,inst_69371);var state_69407__$1 = state_69407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69407__$1,15,out,inst_69395);
} else
{if((state_val_69408 === 13))
{var state_69407__$1 = state_69407;var statearr_69426_69449 = state_69407__$1;(statearr_69426_69449[2] = null);
(statearr_69426_69449[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69408 === 14))
{var inst_69400 = (state_69407[2]);var inst_69401 = cljs.core.async.close_BANG_.call(null,out);var state_69407__$1 = (function (){var statearr_69427 = state_69407;(statearr_69427[13] = inst_69400);
return statearr_69427;
})();var statearr_69428_69450 = state_69407__$1;(statearr_69428_69450[2] = inst_69401);
(statearr_69428_69450[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69408 === 15))
{var inst_69397 = (state_69407[2]);var state_69407__$1 = state_69407;var statearr_69429_69451 = state_69407__$1;(statearr_69429_69451[2] = inst_69397);
(statearr_69429_69451[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_69433 = (new Array(14));(statearr_69433[0] = state_machine__13310__auto__);
(statearr_69433[1] = 1);
return statearr_69433;
});
var state_machine__13310__auto____1 = (function (state_69407){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_69407);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e69434){if((e69434 instanceof Object))
{var ex__13313__auto__ = e69434;var statearr_69435_69452 = state_69407;(statearr_69435_69452[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69407);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e69434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__69453 = state_69407;
state_69407 = G__69453;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_69407){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_69407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_69436 = f__13410__auto__.call(null);(statearr_69436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___69437);
return statearr_69436;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___69596 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_69566){var state_val_69567 = (state_69566[1]);if((state_val_69567 === 1))
{var inst_69525 = (new Array(0));var inst_69526 = inst_69525;var inst_69527 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_69566__$1 = (function (){var statearr_69568 = state_69566;(statearr_69568[7] = inst_69526);
(statearr_69568[8] = inst_69527);
return statearr_69568;
})();var statearr_69569_69597 = state_69566__$1;(statearr_69569_69597[2] = null);
(statearr_69569_69597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69567 === 2))
{var state_69566__$1 = state_69566;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69566__$1,4,ch);
} else
{if((state_val_69567 === 3))
{var inst_69564 = (state_69566[2]);var state_69566__$1 = state_69566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69566__$1,inst_69564);
} else
{if((state_val_69567 === 4))
{var inst_69530 = (state_69566[9]);var inst_69530__$1 = (state_69566[2]);var inst_69531 = (inst_69530__$1 == null);var inst_69532 = cljs.core.not.call(null,inst_69531);var state_69566__$1 = (function (){var statearr_69570 = state_69566;(statearr_69570[9] = inst_69530__$1);
return statearr_69570;
})();if(inst_69532)
{var statearr_69571_69598 = state_69566__$1;(statearr_69571_69598[1] = 5);
} else
{var statearr_69572_69599 = state_69566__$1;(statearr_69572_69599[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69567 === 5))
{var inst_69530 = (state_69566[9]);var inst_69534 = (state_69566[10]);var inst_69527 = (state_69566[8]);var inst_69534__$1 = f.call(null,inst_69530);var inst_69535 = cljs.core._EQ_.call(null,inst_69534__$1,inst_69527);var inst_69536 = cljs.core.keyword_identical_QMARK_.call(null,inst_69527,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_69537 = (inst_69535) || (inst_69536);var state_69566__$1 = (function (){var statearr_69573 = state_69566;(statearr_69573[10] = inst_69534__$1);
return statearr_69573;
})();if(cljs.core.truth_(inst_69537))
{var statearr_69574_69600 = state_69566__$1;(statearr_69574_69600[1] = 8);
} else
{var statearr_69575_69601 = state_69566__$1;(statearr_69575_69601[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69567 === 6))
{var inst_69526 = (state_69566[7]);var inst_69551 = inst_69526.length;var inst_69552 = (inst_69551 > 0);var state_69566__$1 = state_69566;if(cljs.core.truth_(inst_69552))
{var statearr_69577_69602 = state_69566__$1;(statearr_69577_69602[1] = 12);
} else
{var statearr_69578_69603 = state_69566__$1;(statearr_69578_69603[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69567 === 7))
{var inst_69562 = (state_69566[2]);var state_69566__$1 = state_69566;var statearr_69579_69604 = state_69566__$1;(statearr_69579_69604[2] = inst_69562);
(statearr_69579_69604[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69567 === 8))
{var inst_69530 = (state_69566[9]);var inst_69534 = (state_69566[10]);var inst_69526 = (state_69566[7]);var inst_69539 = inst_69526.push(inst_69530);var tmp69576 = inst_69526;var inst_69526__$1 = tmp69576;var inst_69527 = inst_69534;var state_69566__$1 = (function (){var statearr_69580 = state_69566;(statearr_69580[11] = inst_69539);
(statearr_69580[7] = inst_69526__$1);
(statearr_69580[8] = inst_69527);
return statearr_69580;
})();var statearr_69581_69605 = state_69566__$1;(statearr_69581_69605[2] = null);
(statearr_69581_69605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69567 === 9))
{var inst_69526 = (state_69566[7]);var inst_69542 = cljs.core.vec.call(null,inst_69526);var state_69566__$1 = state_69566;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69566__$1,11,out,inst_69542);
} else
{if((state_val_69567 === 10))
{var inst_69549 = (state_69566[2]);var state_69566__$1 = state_69566;var statearr_69582_69606 = state_69566__$1;(statearr_69582_69606[2] = inst_69549);
(statearr_69582_69606[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69567 === 11))
{var inst_69530 = (state_69566[9]);var inst_69534 = (state_69566[10]);var inst_69544 = (state_69566[2]);var inst_69545 = (new Array(0));var inst_69546 = inst_69545.push(inst_69530);var inst_69526 = inst_69545;var inst_69527 = inst_69534;var state_69566__$1 = (function (){var statearr_69583 = state_69566;(statearr_69583[12] = inst_69546);
(statearr_69583[13] = inst_69544);
(statearr_69583[7] = inst_69526);
(statearr_69583[8] = inst_69527);
return statearr_69583;
})();var statearr_69584_69607 = state_69566__$1;(statearr_69584_69607[2] = null);
(statearr_69584_69607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69567 === 12))
{var inst_69526 = (state_69566[7]);var inst_69554 = cljs.core.vec.call(null,inst_69526);var state_69566__$1 = state_69566;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69566__$1,15,out,inst_69554);
} else
{if((state_val_69567 === 13))
{var state_69566__$1 = state_69566;var statearr_69585_69608 = state_69566__$1;(statearr_69585_69608[2] = null);
(statearr_69585_69608[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69567 === 14))
{var inst_69559 = (state_69566[2]);var inst_69560 = cljs.core.async.close_BANG_.call(null,out);var state_69566__$1 = (function (){var statearr_69586 = state_69566;(statearr_69586[14] = inst_69559);
return statearr_69586;
})();var statearr_69587_69609 = state_69566__$1;(statearr_69587_69609[2] = inst_69560);
(statearr_69587_69609[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_69567 === 15))
{var inst_69556 = (state_69566[2]);var state_69566__$1 = state_69566;var statearr_69588_69610 = state_69566__$1;(statearr_69588_69610[2] = inst_69556);
(statearr_69588_69610[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_69592 = (new Array(15));(statearr_69592[0] = state_machine__13310__auto__);
(statearr_69592[1] = 1);
return statearr_69592;
});
var state_machine__13310__auto____1 = (function (state_69566){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_69566);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e69593){if((e69593 instanceof Object))
{var ex__13313__auto__ = e69593;var statearr_69594_69611 = state_69566;(statearr_69594_69611[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69566);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e69593;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__69612 = state_69566;
state_69566 = G__69612;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_69566){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_69566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_69595 = f__13410__auto__.call(null);(statearr_69595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___69596);
return statearr_69595;
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
