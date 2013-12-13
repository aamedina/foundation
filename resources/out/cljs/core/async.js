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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t297386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t297386 = (function (f,fn_handler,meta297387){
this.f = f;
this.fn_handler = fn_handler;
this.meta297387 = meta297387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t297386.cljs$lang$type = true;
cljs.core.async.t297386.cljs$lang$ctorStr = "cljs.core.async/t297386";
cljs.core.async.t297386.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t297386");
});
cljs.core.async.t297386.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t297386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t297386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t297386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_297388){var self__ = this;
var _297388__$1 = this;return self__.meta297387;
});
cljs.core.async.t297386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_297388,meta297387__$1){var self__ = this;
var _297388__$1 = this;return (new cljs.core.async.t297386(self__.f,self__.fn_handler,meta297387__$1));
});
cljs.core.async.__GT_t297386 = (function __GT_t297386(f__$1,fn_handler__$1,meta297387){return (new cljs.core.async.t297386(f__$1,fn_handler__$1,meta297387));
});
}
return (new cljs.core.async.t297386(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__297390 = buff;if(G__297390)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__297390.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__297390.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__297390);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__297390);
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
{var val_297391 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_297391);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_297391);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13813__auto__ = ret;if(cljs.core.truth_(and__13813__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13813__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14648__auto___297392 = n;var x_297393 = 0;while(true){
if((x_297393 < n__14648__auto___297392))
{(a[x_297393] = 0);
{
var G__297394 = (x_297393 + 1);
x_297393 = G__297394;
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
var G__297395 = (i + 1);
i = G__297395;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t297399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t297399 = (function (flag,alt_flag,meta297400){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta297400 = meta297400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t297399.cljs$lang$type = true;
cljs.core.async.t297399.cljs$lang$ctorStr = "cljs.core.async/t297399";
cljs.core.async.t297399.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t297399");
});
cljs.core.async.t297399.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t297399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t297399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t297399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_297401){var self__ = this;
var _297401__$1 = this;return self__.meta297400;
});
cljs.core.async.t297399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_297401,meta297400__$1){var self__ = this;
var _297401__$1 = this;return (new cljs.core.async.t297399(self__.flag,self__.alt_flag,meta297400__$1));
});
cljs.core.async.__GT_t297399 = (function __GT_t297399(flag__$1,alt_flag__$1,meta297400){return (new cljs.core.async.t297399(flag__$1,alt_flag__$1,meta297400));
});
}
return (new cljs.core.async.t297399(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t297405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t297405 = (function (cb,flag,alt_handler,meta297406){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta297406 = meta297406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t297405.cljs$lang$type = true;
cljs.core.async.t297405.cljs$lang$ctorStr = "cljs.core.async/t297405";
cljs.core.async.t297405.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t297405");
});
cljs.core.async.t297405.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t297405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t297405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t297405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_297407){var self__ = this;
var _297407__$1 = this;return self__.meta297406;
});
cljs.core.async.t297405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_297407,meta297406__$1){var self__ = this;
var _297407__$1 = this;return (new cljs.core.async.t297405(self__.cb,self__.flag,self__.alt_handler,meta297406__$1));
});
cljs.core.async.__GT_t297405 = (function __GT_t297405(cb__$1,flag__$1,alt_handler__$1,meta297406){return (new cljs.core.async.t297405(cb__$1,flag__$1,alt_handler__$1,meta297406));
});
}
return (new cljs.core.async.t297405(cb,flag,alt_handler,null));
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
return (function (p1__297408_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__297408_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13825__auto__ = wport;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__297409 = (i + 1);
i = G__297409;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13825__auto__ = ret;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13813__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13813__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13813__auto__;
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
var alts_BANG___delegate = function (ports,p__297410){var map__297412 = p__297410;var map__297412__$1 = ((cljs.core.seq_QMARK_.call(null,map__297412))?cljs.core.apply.call(null,cljs.core.hash_map,map__297412):map__297412);var opts = map__297412__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__297410 = null;if (arguments.length > 1) {
  p__297410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__297410);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__297413){
var ports = cljs.core.first(arglist__297413);
var p__297410 = cljs.core.rest(arglist__297413);
return alts_BANG___delegate(ports,p__297410);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t297421 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t297421 = (function (ch,f,map_LT_,meta297422){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta297422 = meta297422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t297421.cljs$lang$type = true;
cljs.core.async.t297421.cljs$lang$ctorStr = "cljs.core.async/t297421";
cljs.core.async.t297421.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t297421");
});
cljs.core.async.t297421.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t297421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t297421.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t297421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t297424 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t297424 = (function (fn1,_,meta297422,ch,f,map_LT_,meta297425){
this.fn1 = fn1;
this._ = _;
this.meta297422 = meta297422;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta297425 = meta297425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t297424.cljs$lang$type = true;
cljs.core.async.t297424.cljs$lang$ctorStr = "cljs.core.async/t297424";
cljs.core.async.t297424.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t297424");
});
cljs.core.async.t297424.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t297424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t297424.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t297424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__297414_SHARP_){return f1.call(null,(((p1__297414_SHARP_ == null))?null:self__.f.call(null,p1__297414_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t297424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_297426){var self__ = this;
var _297426__$1 = this;return self__.meta297425;
});
cljs.core.async.t297424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_297426,meta297425__$1){var self__ = this;
var _297426__$1 = this;return (new cljs.core.async.t297424(self__.fn1,self__._,self__.meta297422,self__.ch,self__.f,self__.map_LT_,meta297425__$1));
});
cljs.core.async.__GT_t297424 = (function __GT_t297424(fn1__$1,___$2,meta297422__$1,ch__$2,f__$2,map_LT___$2,meta297425){return (new cljs.core.async.t297424(fn1__$1,___$2,meta297422__$1,ch__$2,f__$2,map_LT___$2,meta297425));
});
}
return (new cljs.core.async.t297424(fn1,___$1,self__.meta297422,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13813__auto__ = ret;if(cljs.core.truth_(and__13813__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13813__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t297421.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t297421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t297421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_297423){var self__ = this;
var _297423__$1 = this;return self__.meta297422;
});
cljs.core.async.t297421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_297423,meta297422__$1){var self__ = this;
var _297423__$1 = this;return (new cljs.core.async.t297421(self__.ch,self__.f,self__.map_LT_,meta297422__$1));
});
cljs.core.async.__GT_t297421 = (function __GT_t297421(ch__$1,f__$1,map_LT___$1,meta297422){return (new cljs.core.async.t297421(ch__$1,f__$1,map_LT___$1,meta297422));
});
}
return (new cljs.core.async.t297421(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t297430 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t297430 = (function (ch,f,map_GT_,meta297431){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta297431 = meta297431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t297430.cljs$lang$type = true;
cljs.core.async.t297430.cljs$lang$ctorStr = "cljs.core.async/t297430";
cljs.core.async.t297430.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t297430");
});
cljs.core.async.t297430.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t297430.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t297430.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t297430.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t297430.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t297430.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t297430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_297432){var self__ = this;
var _297432__$1 = this;return self__.meta297431;
});
cljs.core.async.t297430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_297432,meta297431__$1){var self__ = this;
var _297432__$1 = this;return (new cljs.core.async.t297430(self__.ch,self__.f,self__.map_GT_,meta297431__$1));
});
cljs.core.async.__GT_t297430 = (function __GT_t297430(ch__$1,f__$1,map_GT___$1,meta297431){return (new cljs.core.async.t297430(ch__$1,f__$1,map_GT___$1,meta297431));
});
}
return (new cljs.core.async.t297430(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t297436 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t297436 = (function (ch,p,filter_GT_,meta297437){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta297437 = meta297437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t297436.cljs$lang$type = true;
cljs.core.async.t297436.cljs$lang$ctorStr = "cljs.core.async/t297436";
cljs.core.async.t297436.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t297436");
});
cljs.core.async.t297436.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t297436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t297436.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t297436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t297436.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t297436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t297436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_297438){var self__ = this;
var _297438__$1 = this;return self__.meta297437;
});
cljs.core.async.t297436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_297438,meta297437__$1){var self__ = this;
var _297438__$1 = this;return (new cljs.core.async.t297436(self__.ch,self__.p,self__.filter_GT_,meta297437__$1));
});
cljs.core.async.__GT_t297436 = (function __GT_t297436(ch__$1,p__$1,filter_GT___$1,meta297437){return (new cljs.core.async.t297436(ch__$1,p__$1,filter_GT___$1,meta297437));
});
}
return (new cljs.core.async.t297436(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___297521 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_297500){var state_val_297501 = (state_297500[1]);if((state_val_297501 === 1))
{var state_297500__$1 = state_297500;var statearr_297502_297522 = state_297500__$1;(statearr_297502_297522[2] = null);
(statearr_297502_297522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297501 === 2))
{var state_297500__$1 = state_297500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297500__$1,4,ch);
} else
{if((state_val_297501 === 3))
{var inst_297498 = (state_297500[2]);var state_297500__$1 = state_297500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297500__$1,inst_297498);
} else
{if((state_val_297501 === 4))
{var inst_297482 = (state_297500[7]);var inst_297482__$1 = (state_297500[2]);var inst_297483 = (inst_297482__$1 == null);var state_297500__$1 = (function (){var statearr_297503 = state_297500;(statearr_297503[7] = inst_297482__$1);
return statearr_297503;
})();if(cljs.core.truth_(inst_297483))
{var statearr_297504_297523 = state_297500__$1;(statearr_297504_297523[1] = 5);
} else
{var statearr_297505_297524 = state_297500__$1;(statearr_297505_297524[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297501 === 5))
{var inst_297485 = cljs.core.async.close_BANG_.call(null,out);var state_297500__$1 = state_297500;var statearr_297506_297525 = state_297500__$1;(statearr_297506_297525[2] = inst_297485);
(statearr_297506_297525[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297501 === 6))
{var inst_297482 = (state_297500[7]);var inst_297487 = p.call(null,inst_297482);var state_297500__$1 = state_297500;if(cljs.core.truth_(inst_297487))
{var statearr_297507_297526 = state_297500__$1;(statearr_297507_297526[1] = 8);
} else
{var statearr_297508_297527 = state_297500__$1;(statearr_297508_297527[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297501 === 7))
{var inst_297496 = (state_297500[2]);var state_297500__$1 = state_297500;var statearr_297509_297528 = state_297500__$1;(statearr_297509_297528[2] = inst_297496);
(statearr_297509_297528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297501 === 8))
{var inst_297482 = (state_297500[7]);var state_297500__$1 = state_297500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297500__$1,11,out,inst_297482);
} else
{if((state_val_297501 === 9))
{var state_297500__$1 = state_297500;var statearr_297510_297529 = state_297500__$1;(statearr_297510_297529[2] = null);
(statearr_297510_297529[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297501 === 10))
{var inst_297493 = (state_297500[2]);var state_297500__$1 = (function (){var statearr_297511 = state_297500;(statearr_297511[8] = inst_297493);
return statearr_297511;
})();var statearr_297512_297530 = state_297500__$1;(statearr_297512_297530[2] = null);
(statearr_297512_297530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297501 === 11))
{var inst_297490 = (state_297500[2]);var state_297500__$1 = state_297500;var statearr_297513_297531 = state_297500__$1;(statearr_297513_297531[2] = inst_297490);
(statearr_297513_297531[1] = 10);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_297517 = (new Array(9));(statearr_297517[0] = state_machine__18769__auto__);
(statearr_297517[1] = 1);
return statearr_297517;
});
var state_machine__18769__auto____1 = (function (state_297500){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_297500);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e297518){if((e297518 instanceof Object))
{var ex__18772__auto__ = e297518;var statearr_297519_297532 = state_297500;(statearr_297519_297532[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e297518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__297533 = state_297500;
state_297500 = G__297533;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_297500){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_297500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_297520 = f__18839__auto__.call(null);(statearr_297520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___297521);
return statearr_297520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_297685){var state_val_297686 = (state_297685[1]);if((state_val_297686 === 1))
{var state_297685__$1 = state_297685;var statearr_297687_297724 = state_297685__$1;(statearr_297687_297724[2] = null);
(statearr_297687_297724[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 2))
{var state_297685__$1 = state_297685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297685__$1,4,in$);
} else
{if((state_val_297686 === 3))
{var inst_297683 = (state_297685[2]);var state_297685__$1 = state_297685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297685__$1,inst_297683);
} else
{if((state_val_297686 === 4))
{var inst_297631 = (state_297685[7]);var inst_297631__$1 = (state_297685[2]);var inst_297632 = (inst_297631__$1 == null);var state_297685__$1 = (function (){var statearr_297688 = state_297685;(statearr_297688[7] = inst_297631__$1);
return statearr_297688;
})();if(cljs.core.truth_(inst_297632))
{var statearr_297689_297725 = state_297685__$1;(statearr_297689_297725[1] = 5);
} else
{var statearr_297690_297726 = state_297685__$1;(statearr_297690_297726[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 5))
{var inst_297634 = cljs.core.async.close_BANG_.call(null,out);var state_297685__$1 = state_297685;var statearr_297691_297727 = state_297685__$1;(statearr_297691_297727[2] = inst_297634);
(statearr_297691_297727[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 6))
{var inst_297631 = (state_297685[7]);var inst_297636 = f.call(null,inst_297631);var inst_297641 = cljs.core.seq.call(null,inst_297636);var inst_297642 = inst_297641;var inst_297643 = null;var inst_297644 = 0;var inst_297645 = 0;var state_297685__$1 = (function (){var statearr_297692 = state_297685;(statearr_297692[8] = inst_297642);
(statearr_297692[9] = inst_297643);
(statearr_297692[10] = inst_297644);
(statearr_297692[11] = inst_297645);
return statearr_297692;
})();var statearr_297693_297728 = state_297685__$1;(statearr_297693_297728[2] = null);
(statearr_297693_297728[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 7))
{var inst_297681 = (state_297685[2]);var state_297685__$1 = state_297685;var statearr_297694_297729 = state_297685__$1;(statearr_297694_297729[2] = inst_297681);
(statearr_297694_297729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 8))
{var inst_297644 = (state_297685[10]);var inst_297645 = (state_297685[11]);var inst_297647 = (inst_297645 < inst_297644);var inst_297648 = inst_297647;var state_297685__$1 = state_297685;if(cljs.core.truth_(inst_297648))
{var statearr_297695_297730 = state_297685__$1;(statearr_297695_297730[1] = 10);
} else
{var statearr_297696_297731 = state_297685__$1;(statearr_297696_297731[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 9))
{var inst_297678 = (state_297685[2]);var state_297685__$1 = (function (){var statearr_297697 = state_297685;(statearr_297697[12] = inst_297678);
return statearr_297697;
})();var statearr_297698_297732 = state_297685__$1;(statearr_297698_297732[2] = null);
(statearr_297698_297732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 10))
{var inst_297643 = (state_297685[9]);var inst_297645 = (state_297685[11]);var inst_297650 = cljs.core._nth.call(null,inst_297643,inst_297645);var state_297685__$1 = state_297685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297685__$1,13,out,inst_297650);
} else
{if((state_val_297686 === 11))
{var inst_297656 = (state_297685[13]);var inst_297642 = (state_297685[8]);var inst_297656__$1 = cljs.core.seq.call(null,inst_297642);var state_297685__$1 = (function (){var statearr_297702 = state_297685;(statearr_297702[13] = inst_297656__$1);
return statearr_297702;
})();if(inst_297656__$1)
{var statearr_297703_297733 = state_297685__$1;(statearr_297703_297733[1] = 14);
} else
{var statearr_297704_297734 = state_297685__$1;(statearr_297704_297734[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 12))
{var inst_297676 = (state_297685[2]);var state_297685__$1 = state_297685;var statearr_297705_297735 = state_297685__$1;(statearr_297705_297735[2] = inst_297676);
(statearr_297705_297735[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 13))
{var inst_297642 = (state_297685[8]);var inst_297643 = (state_297685[9]);var inst_297644 = (state_297685[10]);var inst_297645 = (state_297685[11]);var inst_297652 = (state_297685[2]);var inst_297653 = (inst_297645 + 1);var tmp297699 = inst_297642;var tmp297700 = inst_297643;var tmp297701 = inst_297644;var inst_297642__$1 = tmp297699;var inst_297643__$1 = tmp297700;var inst_297644__$1 = tmp297701;var inst_297645__$1 = inst_297653;var state_297685__$1 = (function (){var statearr_297706 = state_297685;(statearr_297706[8] = inst_297642__$1);
(statearr_297706[9] = inst_297643__$1);
(statearr_297706[10] = inst_297644__$1);
(statearr_297706[11] = inst_297645__$1);
(statearr_297706[14] = inst_297652);
return statearr_297706;
})();var statearr_297707_297736 = state_297685__$1;(statearr_297707_297736[2] = null);
(statearr_297707_297736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 14))
{var inst_297656 = (state_297685[13]);var inst_297658 = cljs.core.chunked_seq_QMARK_.call(null,inst_297656);var state_297685__$1 = state_297685;if(inst_297658)
{var statearr_297708_297737 = state_297685__$1;(statearr_297708_297737[1] = 17);
} else
{var statearr_297709_297738 = state_297685__$1;(statearr_297709_297738[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 15))
{var state_297685__$1 = state_297685;var statearr_297710_297739 = state_297685__$1;(statearr_297710_297739[2] = null);
(statearr_297710_297739[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 16))
{var inst_297674 = (state_297685[2]);var state_297685__$1 = state_297685;var statearr_297711_297740 = state_297685__$1;(statearr_297711_297740[2] = inst_297674);
(statearr_297711_297740[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 17))
{var inst_297656 = (state_297685[13]);var inst_297660 = cljs.core.chunk_first.call(null,inst_297656);var inst_297661 = cljs.core.chunk_rest.call(null,inst_297656);var inst_297662 = cljs.core.count.call(null,inst_297660);var inst_297642 = inst_297661;var inst_297643 = inst_297660;var inst_297644 = inst_297662;var inst_297645 = 0;var state_297685__$1 = (function (){var statearr_297712 = state_297685;(statearr_297712[8] = inst_297642);
(statearr_297712[9] = inst_297643);
(statearr_297712[10] = inst_297644);
(statearr_297712[11] = inst_297645);
return statearr_297712;
})();var statearr_297713_297741 = state_297685__$1;(statearr_297713_297741[2] = null);
(statearr_297713_297741[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 18))
{var inst_297656 = (state_297685[13]);var inst_297665 = cljs.core.first.call(null,inst_297656);var state_297685__$1 = state_297685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297685__$1,20,out,inst_297665);
} else
{if((state_val_297686 === 19))
{var inst_297671 = (state_297685[2]);var state_297685__$1 = state_297685;var statearr_297714_297742 = state_297685__$1;(statearr_297714_297742[2] = inst_297671);
(statearr_297714_297742[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297686 === 20))
{var inst_297656 = (state_297685[13]);var inst_297667 = (state_297685[2]);var inst_297668 = cljs.core.next.call(null,inst_297656);var inst_297642 = inst_297668;var inst_297643 = null;var inst_297644 = 0;var inst_297645 = 0;var state_297685__$1 = (function (){var statearr_297715 = state_297685;(statearr_297715[8] = inst_297642);
(statearr_297715[9] = inst_297643);
(statearr_297715[10] = inst_297644);
(statearr_297715[15] = inst_297667);
(statearr_297715[11] = inst_297645);
return statearr_297715;
})();var statearr_297716_297743 = state_297685__$1;(statearr_297716_297743[2] = null);
(statearr_297716_297743[1] = 8);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_297720 = (new Array(16));(statearr_297720[0] = state_machine__18769__auto__);
(statearr_297720[1] = 1);
return statearr_297720;
});
var state_machine__18769__auto____1 = (function (state_297685){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_297685);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e297721){if((e297721 instanceof Object))
{var ex__18772__auto__ = e297721;var statearr_297722_297744 = state_297685;(statearr_297722_297744[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297685);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e297721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__297745 = state_297685;
state_297685 = G__297745;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_297685){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_297685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_297723 = f__18839__auto__.call(null);(statearr_297723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_297723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18838__auto___297826 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_297805){var state_val_297806 = (state_297805[1]);if((state_val_297806 === 1))
{var state_297805__$1 = state_297805;var statearr_297807_297827 = state_297805__$1;(statearr_297807_297827[2] = null);
(statearr_297807_297827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297806 === 2))
{var state_297805__$1 = state_297805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297805__$1,4,from);
} else
{if((state_val_297806 === 3))
{var inst_297803 = (state_297805[2]);var state_297805__$1 = state_297805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297805__$1,inst_297803);
} else
{if((state_val_297806 === 4))
{var inst_297788 = (state_297805[7]);var inst_297788__$1 = (state_297805[2]);var inst_297789 = (inst_297788__$1 == null);var state_297805__$1 = (function (){var statearr_297808 = state_297805;(statearr_297808[7] = inst_297788__$1);
return statearr_297808;
})();if(cljs.core.truth_(inst_297789))
{var statearr_297809_297828 = state_297805__$1;(statearr_297809_297828[1] = 5);
} else
{var statearr_297810_297829 = state_297805__$1;(statearr_297810_297829[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297806 === 5))
{var state_297805__$1 = state_297805;if(cljs.core.truth_(close_QMARK_))
{var statearr_297811_297830 = state_297805__$1;(statearr_297811_297830[1] = 8);
} else
{var statearr_297812_297831 = state_297805__$1;(statearr_297812_297831[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297806 === 6))
{var inst_297788 = (state_297805[7]);var state_297805__$1 = state_297805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297805__$1,11,to,inst_297788);
} else
{if((state_val_297806 === 7))
{var inst_297801 = (state_297805[2]);var state_297805__$1 = state_297805;var statearr_297813_297832 = state_297805__$1;(statearr_297813_297832[2] = inst_297801);
(statearr_297813_297832[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297806 === 8))
{var inst_297792 = cljs.core.async.close_BANG_.call(null,to);var state_297805__$1 = state_297805;var statearr_297814_297833 = state_297805__$1;(statearr_297814_297833[2] = inst_297792);
(statearr_297814_297833[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297806 === 9))
{var state_297805__$1 = state_297805;var statearr_297815_297834 = state_297805__$1;(statearr_297815_297834[2] = null);
(statearr_297815_297834[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297806 === 10))
{var inst_297795 = (state_297805[2]);var state_297805__$1 = state_297805;var statearr_297816_297835 = state_297805__$1;(statearr_297816_297835[2] = inst_297795);
(statearr_297816_297835[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297806 === 11))
{var inst_297798 = (state_297805[2]);var state_297805__$1 = (function (){var statearr_297817 = state_297805;(statearr_297817[8] = inst_297798);
return statearr_297817;
})();var statearr_297818_297836 = state_297805__$1;(statearr_297818_297836[2] = null);
(statearr_297818_297836[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_297822 = (new Array(9));(statearr_297822[0] = state_machine__18769__auto__);
(statearr_297822[1] = 1);
return statearr_297822;
});
var state_machine__18769__auto____1 = (function (state_297805){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_297805);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e297823){if((e297823 instanceof Object))
{var ex__18772__auto__ = e297823;var statearr_297824_297837 = state_297805;(statearr_297824_297837[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e297823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__297838 = state_297805;
state_297805 = G__297838;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_297805){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_297805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_297825 = f__18839__auto__.call(null);(statearr_297825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___297826);
return statearr_297825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18838__auto___297925 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_297903){var state_val_297904 = (state_297903[1]);if((state_val_297904 === 1))
{var state_297903__$1 = state_297903;var statearr_297905_297926 = state_297903__$1;(statearr_297905_297926[2] = null);
(statearr_297905_297926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297904 === 2))
{var state_297903__$1 = state_297903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297903__$1,4,ch);
} else
{if((state_val_297904 === 3))
{var inst_297901 = (state_297903[2]);var state_297903__$1 = state_297903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297903__$1,inst_297901);
} else
{if((state_val_297904 === 4))
{var inst_297884 = (state_297903[7]);var inst_297884__$1 = (state_297903[2]);var inst_297885 = (inst_297884__$1 == null);var state_297903__$1 = (function (){var statearr_297906 = state_297903;(statearr_297906[7] = inst_297884__$1);
return statearr_297906;
})();if(cljs.core.truth_(inst_297885))
{var statearr_297907_297927 = state_297903__$1;(statearr_297907_297927[1] = 5);
} else
{var statearr_297908_297928 = state_297903__$1;(statearr_297908_297928[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297904 === 5))
{var inst_297887 = cljs.core.async.close_BANG_.call(null,tc);var inst_297888 = cljs.core.async.close_BANG_.call(null,fc);var state_297903__$1 = (function (){var statearr_297909 = state_297903;(statearr_297909[8] = inst_297887);
return statearr_297909;
})();var statearr_297910_297929 = state_297903__$1;(statearr_297910_297929[2] = inst_297888);
(statearr_297910_297929[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297904 === 6))
{var inst_297884 = (state_297903[7]);var inst_297890 = p.call(null,inst_297884);var state_297903__$1 = state_297903;if(cljs.core.truth_(inst_297890))
{var statearr_297911_297930 = state_297903__$1;(statearr_297911_297930[1] = 9);
} else
{var statearr_297912_297931 = state_297903__$1;(statearr_297912_297931[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297904 === 7))
{var inst_297899 = (state_297903[2]);var state_297903__$1 = state_297903;var statearr_297913_297932 = state_297903__$1;(statearr_297913_297932[2] = inst_297899);
(statearr_297913_297932[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297904 === 8))
{var inst_297896 = (state_297903[2]);var state_297903__$1 = (function (){var statearr_297914 = state_297903;(statearr_297914[9] = inst_297896);
return statearr_297914;
})();var statearr_297915_297933 = state_297903__$1;(statearr_297915_297933[2] = null);
(statearr_297915_297933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297904 === 9))
{var state_297903__$1 = state_297903;var statearr_297916_297934 = state_297903__$1;(statearr_297916_297934[2] = tc);
(statearr_297916_297934[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297904 === 10))
{var state_297903__$1 = state_297903;var statearr_297917_297935 = state_297903__$1;(statearr_297917_297935[2] = fc);
(statearr_297917_297935[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297904 === 11))
{var inst_297884 = (state_297903[7]);var inst_297894 = (state_297903[2]);var state_297903__$1 = state_297903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297903__$1,8,inst_297894,inst_297884);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_297921 = (new Array(10));(statearr_297921[0] = state_machine__18769__auto__);
(statearr_297921[1] = 1);
return statearr_297921;
});
var state_machine__18769__auto____1 = (function (state_297903){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_297903);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e297922){if((e297922 instanceof Object))
{var ex__18772__auto__ = e297922;var statearr_297923_297936 = state_297903;(statearr_297923_297936[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297903);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e297922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__297937 = state_297903;
state_297903 = G__297937;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_297903){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_297903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_297924 = f__18839__auto__.call(null);(statearr_297924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___297925);
return statearr_297924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_297984){var state_val_297985 = (state_297984[1]);if((state_val_297985 === 7))
{var inst_297980 = (state_297984[2]);var state_297984__$1 = state_297984;var statearr_297986_298002 = state_297984__$1;(statearr_297986_298002[2] = inst_297980);
(statearr_297986_298002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297985 === 6))
{var inst_297970 = (state_297984[7]);var inst_297973 = (state_297984[8]);var inst_297977 = f.call(null,inst_297970,inst_297973);var inst_297970__$1 = inst_297977;var state_297984__$1 = (function (){var statearr_297987 = state_297984;(statearr_297987[7] = inst_297970__$1);
return statearr_297987;
})();var statearr_297988_298003 = state_297984__$1;(statearr_297988_298003[2] = null);
(statearr_297988_298003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297985 === 5))
{var inst_297970 = (state_297984[7]);var state_297984__$1 = state_297984;var statearr_297989_298004 = state_297984__$1;(statearr_297989_298004[2] = inst_297970);
(statearr_297989_298004[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297985 === 4))
{var inst_297973 = (state_297984[8]);var inst_297973__$1 = (state_297984[2]);var inst_297974 = (inst_297973__$1 == null);var state_297984__$1 = (function (){var statearr_297990 = state_297984;(statearr_297990[8] = inst_297973__$1);
return statearr_297990;
})();if(cljs.core.truth_(inst_297974))
{var statearr_297991_298005 = state_297984__$1;(statearr_297991_298005[1] = 5);
} else
{var statearr_297992_298006 = state_297984__$1;(statearr_297992_298006[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_297985 === 3))
{var inst_297982 = (state_297984[2]);var state_297984__$1 = state_297984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297984__$1,inst_297982);
} else
{if((state_val_297985 === 2))
{var state_297984__$1 = state_297984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297984__$1,4,ch);
} else
{if((state_val_297985 === 1))
{var inst_297970 = init;var state_297984__$1 = (function (){var statearr_297993 = state_297984;(statearr_297993[7] = inst_297970);
return statearr_297993;
})();var statearr_297994_298007 = state_297984__$1;(statearr_297994_298007[2] = null);
(statearr_297994_298007[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_297998 = (new Array(9));(statearr_297998[0] = state_machine__18769__auto__);
(statearr_297998[1] = 1);
return statearr_297998;
});
var state_machine__18769__auto____1 = (function (state_297984){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_297984);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e297999){if((e297999 instanceof Object))
{var ex__18772__auto__ = e297999;var statearr_298000_298008 = state_297984;(statearr_298000_298008[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297984);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e297999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__298009 = state_297984;
state_297984 = G__298009;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_297984){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_297984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_298001 = f__18839__auto__.call(null);(statearr_298001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_298001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_298071){var state_val_298072 = (state_298071[1]);if((state_val_298072 === 1))
{var inst_298051 = cljs.core.seq.call(null,coll);var inst_298052 = inst_298051;var state_298071__$1 = (function (){var statearr_298073 = state_298071;(statearr_298073[7] = inst_298052);
return statearr_298073;
})();var statearr_298074_298092 = state_298071__$1;(statearr_298074_298092[2] = null);
(statearr_298074_298092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298072 === 2))
{var inst_298052 = (state_298071[7]);var state_298071__$1 = state_298071;if(cljs.core.truth_(inst_298052))
{var statearr_298075_298093 = state_298071__$1;(statearr_298075_298093[1] = 4);
} else
{var statearr_298076_298094 = state_298071__$1;(statearr_298076_298094[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298072 === 3))
{var inst_298069 = (state_298071[2]);var state_298071__$1 = state_298071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_298071__$1,inst_298069);
} else
{if((state_val_298072 === 4))
{var inst_298052 = (state_298071[7]);var inst_298055 = cljs.core.first.call(null,inst_298052);var state_298071__$1 = state_298071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_298071__$1,7,ch,inst_298055);
} else
{if((state_val_298072 === 5))
{var state_298071__$1 = state_298071;if(cljs.core.truth_(close_QMARK_))
{var statearr_298077_298095 = state_298071__$1;(statearr_298077_298095[1] = 8);
} else
{var statearr_298078_298096 = state_298071__$1;(statearr_298078_298096[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298072 === 6))
{var inst_298067 = (state_298071[2]);var state_298071__$1 = state_298071;var statearr_298079_298097 = state_298071__$1;(statearr_298079_298097[2] = inst_298067);
(statearr_298079_298097[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298072 === 7))
{var inst_298052 = (state_298071[7]);var inst_298057 = (state_298071[2]);var inst_298058 = cljs.core.next.call(null,inst_298052);var inst_298052__$1 = inst_298058;var state_298071__$1 = (function (){var statearr_298080 = state_298071;(statearr_298080[7] = inst_298052__$1);
(statearr_298080[8] = inst_298057);
return statearr_298080;
})();var statearr_298081_298098 = state_298071__$1;(statearr_298081_298098[2] = null);
(statearr_298081_298098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298072 === 8))
{var inst_298062 = cljs.core.async.close_BANG_.call(null,ch);var state_298071__$1 = state_298071;var statearr_298082_298099 = state_298071__$1;(statearr_298082_298099[2] = inst_298062);
(statearr_298082_298099[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298072 === 9))
{var state_298071__$1 = state_298071;var statearr_298083_298100 = state_298071__$1;(statearr_298083_298100[2] = null);
(statearr_298083_298100[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298072 === 10))
{var inst_298065 = (state_298071[2]);var state_298071__$1 = state_298071;var statearr_298084_298101 = state_298071__$1;(statearr_298084_298101[2] = inst_298065);
(statearr_298084_298101[1] = 6);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_298088 = (new Array(9));(statearr_298088[0] = state_machine__18769__auto__);
(statearr_298088[1] = 1);
return statearr_298088;
});
var state_machine__18769__auto____1 = (function (state_298071){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_298071);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e298089){if((e298089 instanceof Object))
{var ex__18772__auto__ = e298089;var statearr_298090_298102 = state_298071;(statearr_298090_298102[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298071);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e298089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__298103 = state_298071;
state_298071 = G__298103;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_298071){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_298071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_298091 = f__18839__auto__.call(null);(statearr_298091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_298091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
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
cljs.core.async.Mux = (function (){var obj298105 = {};return obj298105;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13813__auto__ = _;if(and__13813__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13813__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14428__auto__ = (((_ == null))?null:_);return (function (){var or__13825__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj298107 = {};return obj298107;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t298331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t298331 = (function (cs,ch,mult,meta298332){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta298332 = meta298332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t298331.cljs$lang$type = true;
cljs.core.async.t298331.cljs$lang$ctorStr = "cljs.core.async/t298331";
cljs.core.async.t298331.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t298331");
});})(cs))
;
cljs.core.async.t298331.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t298331.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t298331.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t298331.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t298331.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t298331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t298331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_298333){var self__ = this;
var _298333__$1 = this;return self__.meta298332;
});})(cs))
;
cljs.core.async.t298331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_298333,meta298332__$1){var self__ = this;
var _298333__$1 = this;return (new cljs.core.async.t298331(self__.cs,self__.ch,self__.mult,meta298332__$1));
});})(cs))
;
cljs.core.async.__GT_t298331 = ((function (cs){
return (function __GT_t298331(cs__$1,ch__$1,mult__$1,meta298332){return (new cljs.core.async.t298331(cs__$1,ch__$1,mult__$1,meta298332));
});})(cs))
;
}
return (new cljs.core.async.t298331(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18838__auto___298554 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_298468){var state_val_298469 = (state_298468[1]);if((state_val_298469 === 32))
{var inst_298412 = (state_298468[7]);var inst_298336 = (state_298468[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_298468,31,Object,null,30);var inst_298419 = cljs.core.async.put_BANG_.call(null,inst_298412,inst_298336,done);var state_298468__$1 = state_298468;var statearr_298470_298555 = state_298468__$1;(statearr_298470_298555[2] = inst_298419);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298468__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 1))
{var state_298468__$1 = state_298468;var statearr_298471_298556 = state_298468__$1;(statearr_298471_298556[2] = null);
(statearr_298471_298556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 33))
{var inst_298425 = (state_298468[9]);var inst_298427 = cljs.core.chunked_seq_QMARK_.call(null,inst_298425);var state_298468__$1 = state_298468;if(inst_298427)
{var statearr_298472_298557 = state_298468__$1;(statearr_298472_298557[1] = 36);
} else
{var statearr_298473_298558 = state_298468__$1;(statearr_298473_298558[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 2))
{var state_298468__$1 = state_298468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_298468__$1,4,ch);
} else
{if((state_val_298469 === 34))
{var state_298468__$1 = state_298468;var statearr_298474_298559 = state_298468__$1;(statearr_298474_298559[2] = null);
(statearr_298474_298559[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 3))
{var inst_298466 = (state_298468[2]);var state_298468__$1 = state_298468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_298468__$1,inst_298466);
} else
{if((state_val_298469 === 35))
{var inst_298450 = (state_298468[2]);var state_298468__$1 = state_298468;var statearr_298475_298560 = state_298468__$1;(statearr_298475_298560[2] = inst_298450);
(statearr_298475_298560[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 4))
{var inst_298336 = (state_298468[8]);var inst_298336__$1 = (state_298468[2]);var inst_298337 = (inst_298336__$1 == null);var state_298468__$1 = (function (){var statearr_298476 = state_298468;(statearr_298476[8] = inst_298336__$1);
return statearr_298476;
})();if(cljs.core.truth_(inst_298337))
{var statearr_298477_298561 = state_298468__$1;(statearr_298477_298561[1] = 5);
} else
{var statearr_298478_298562 = state_298468__$1;(statearr_298478_298562[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 36))
{var inst_298425 = (state_298468[9]);var inst_298429 = cljs.core.chunk_first.call(null,inst_298425);var inst_298430 = cljs.core.chunk_rest.call(null,inst_298425);var inst_298431 = cljs.core.count.call(null,inst_298429);var inst_298404 = inst_298430;var inst_298405 = inst_298429;var inst_298406 = inst_298431;var inst_298407 = 0;var state_298468__$1 = (function (){var statearr_298479 = state_298468;(statearr_298479[10] = inst_298405);
(statearr_298479[11] = inst_298404);
(statearr_298479[12] = inst_298407);
(statearr_298479[13] = inst_298406);
return statearr_298479;
})();var statearr_298480_298563 = state_298468__$1;(statearr_298480_298563[2] = null);
(statearr_298480_298563[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 5))
{var inst_298343 = cljs.core.deref.call(null,cs);var inst_298344 = cljs.core.seq.call(null,inst_298343);var inst_298345 = inst_298344;var inst_298346 = null;var inst_298347 = 0;var inst_298348 = 0;var state_298468__$1 = (function (){var statearr_298481 = state_298468;(statearr_298481[14] = inst_298345);
(statearr_298481[15] = inst_298346);
(statearr_298481[16] = inst_298347);
(statearr_298481[17] = inst_298348);
return statearr_298481;
})();var statearr_298482_298564 = state_298468__$1;(statearr_298482_298564[2] = null);
(statearr_298482_298564[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 37))
{var inst_298425 = (state_298468[9]);var inst_298434 = cljs.core.first.call(null,inst_298425);var state_298468__$1 = (function (){var statearr_298483 = state_298468;(statearr_298483[18] = inst_298434);
return statearr_298483;
})();var statearr_298484_298565 = state_298468__$1;(statearr_298484_298565[2] = null);
(statearr_298484_298565[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 6))
{var inst_298396 = (state_298468[19]);var inst_298395 = cljs.core.deref.call(null,cs);var inst_298396__$1 = cljs.core.keys.call(null,inst_298395);var inst_298397 = cljs.core.count.call(null,inst_298396__$1);var inst_298398 = cljs.core.reset_BANG_.call(null,dctr,inst_298397);var inst_298403 = cljs.core.seq.call(null,inst_298396__$1);var inst_298404 = inst_298403;var inst_298405 = null;var inst_298406 = 0;var inst_298407 = 0;var state_298468__$1 = (function (){var statearr_298485 = state_298468;(statearr_298485[10] = inst_298405);
(statearr_298485[11] = inst_298404);
(statearr_298485[12] = inst_298407);
(statearr_298485[13] = inst_298406);
(statearr_298485[20] = inst_298398);
(statearr_298485[19] = inst_298396__$1);
return statearr_298485;
})();var statearr_298486_298566 = state_298468__$1;(statearr_298486_298566[2] = null);
(statearr_298486_298566[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 38))
{var inst_298447 = (state_298468[2]);var state_298468__$1 = state_298468;var statearr_298487_298567 = state_298468__$1;(statearr_298487_298567[2] = inst_298447);
(statearr_298487_298567[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 7))
{var inst_298464 = (state_298468[2]);var state_298468__$1 = state_298468;var statearr_298488_298568 = state_298468__$1;(statearr_298488_298568[2] = inst_298464);
(statearr_298488_298568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 39))
{var inst_298425 = (state_298468[9]);var inst_298443 = (state_298468[2]);var inst_298444 = cljs.core.next.call(null,inst_298425);var inst_298404 = inst_298444;var inst_298405 = null;var inst_298406 = 0;var inst_298407 = 0;var state_298468__$1 = (function (){var statearr_298489 = state_298468;(statearr_298489[10] = inst_298405);
(statearr_298489[11] = inst_298404);
(statearr_298489[12] = inst_298407);
(statearr_298489[13] = inst_298406);
(statearr_298489[21] = inst_298443);
return statearr_298489;
})();var statearr_298490_298569 = state_298468__$1;(statearr_298490_298569[2] = null);
(statearr_298490_298569[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 8))
{var inst_298347 = (state_298468[16]);var inst_298348 = (state_298468[17]);var inst_298350 = (inst_298348 < inst_298347);var inst_298351 = inst_298350;var state_298468__$1 = state_298468;if(cljs.core.truth_(inst_298351))
{var statearr_298491_298570 = state_298468__$1;(statearr_298491_298570[1] = 10);
} else
{var statearr_298492_298571 = state_298468__$1;(statearr_298492_298571[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 40))
{var inst_298434 = (state_298468[18]);var inst_298435 = (state_298468[2]);var inst_298436 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_298437 = cljs.core.async.untap_STAR_.call(null,m,inst_298434);var state_298468__$1 = (function (){var statearr_298493 = state_298468;(statearr_298493[22] = inst_298435);
(statearr_298493[23] = inst_298436);
return statearr_298493;
})();var statearr_298494_298572 = state_298468__$1;(statearr_298494_298572[2] = inst_298437);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298468__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 9))
{var inst_298393 = (state_298468[2]);var state_298468__$1 = state_298468;var statearr_298495_298573 = state_298468__$1;(statearr_298495_298573[2] = inst_298393);
(statearr_298495_298573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 41))
{var inst_298336 = (state_298468[8]);var inst_298434 = (state_298468[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_298468,40,Object,null,39);var inst_298441 = cljs.core.async.put_BANG_.call(null,inst_298434,inst_298336,done);var state_298468__$1 = state_298468;var statearr_298496_298574 = state_298468__$1;(statearr_298496_298574[2] = inst_298441);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298468__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 10))
{var inst_298346 = (state_298468[15]);var inst_298348 = (state_298468[17]);var inst_298354 = cljs.core._nth.call(null,inst_298346,inst_298348);var inst_298355 = cljs.core.nth.call(null,inst_298354,0,null);var inst_298356 = cljs.core.nth.call(null,inst_298354,1,null);var state_298468__$1 = (function (){var statearr_298497 = state_298468;(statearr_298497[24] = inst_298355);
return statearr_298497;
})();if(cljs.core.truth_(inst_298356))
{var statearr_298498_298575 = state_298468__$1;(statearr_298498_298575[1] = 13);
} else
{var statearr_298499_298576 = state_298468__$1;(statearr_298499_298576[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 42))
{var state_298468__$1 = state_298468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_298468__$1,45,dchan);
} else
{if((state_val_298469 === 11))
{var inst_298365 = (state_298468[25]);var inst_298345 = (state_298468[14]);var inst_298365__$1 = cljs.core.seq.call(null,inst_298345);var state_298468__$1 = (function (){var statearr_298500 = state_298468;(statearr_298500[25] = inst_298365__$1);
return statearr_298500;
})();if(inst_298365__$1)
{var statearr_298501_298577 = state_298468__$1;(statearr_298501_298577[1] = 16);
} else
{var statearr_298502_298578 = state_298468__$1;(statearr_298502_298578[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 43))
{var state_298468__$1 = state_298468;var statearr_298503_298579 = state_298468__$1;(statearr_298503_298579[2] = null);
(statearr_298503_298579[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 12))
{var inst_298391 = (state_298468[2]);var state_298468__$1 = state_298468;var statearr_298504_298580 = state_298468__$1;(statearr_298504_298580[2] = inst_298391);
(statearr_298504_298580[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 44))
{var inst_298461 = (state_298468[2]);var state_298468__$1 = (function (){var statearr_298505 = state_298468;(statearr_298505[26] = inst_298461);
return statearr_298505;
})();var statearr_298506_298581 = state_298468__$1;(statearr_298506_298581[2] = null);
(statearr_298506_298581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 13))
{var inst_298355 = (state_298468[24]);var inst_298358 = cljs.core.async.close_BANG_.call(null,inst_298355);var state_298468__$1 = state_298468;var statearr_298507_298582 = state_298468__$1;(statearr_298507_298582[2] = inst_298358);
(statearr_298507_298582[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 45))
{var inst_298458 = (state_298468[2]);var state_298468__$1 = state_298468;var statearr_298511_298583 = state_298468__$1;(statearr_298511_298583[2] = inst_298458);
(statearr_298511_298583[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 14))
{var state_298468__$1 = state_298468;var statearr_298512_298584 = state_298468__$1;(statearr_298512_298584[2] = null);
(statearr_298512_298584[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 15))
{var inst_298345 = (state_298468[14]);var inst_298346 = (state_298468[15]);var inst_298347 = (state_298468[16]);var inst_298348 = (state_298468[17]);var inst_298361 = (state_298468[2]);var inst_298362 = (inst_298348 + 1);var tmp298508 = inst_298345;var tmp298509 = inst_298346;var tmp298510 = inst_298347;var inst_298345__$1 = tmp298508;var inst_298346__$1 = tmp298509;var inst_298347__$1 = tmp298510;var inst_298348__$1 = inst_298362;var state_298468__$1 = (function (){var statearr_298513 = state_298468;(statearr_298513[27] = inst_298361);
(statearr_298513[14] = inst_298345__$1);
(statearr_298513[15] = inst_298346__$1);
(statearr_298513[16] = inst_298347__$1);
(statearr_298513[17] = inst_298348__$1);
return statearr_298513;
})();var statearr_298514_298585 = state_298468__$1;(statearr_298514_298585[2] = null);
(statearr_298514_298585[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 16))
{var inst_298365 = (state_298468[25]);var inst_298367 = cljs.core.chunked_seq_QMARK_.call(null,inst_298365);var state_298468__$1 = state_298468;if(inst_298367)
{var statearr_298515_298586 = state_298468__$1;(statearr_298515_298586[1] = 19);
} else
{var statearr_298516_298587 = state_298468__$1;(statearr_298516_298587[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 17))
{var state_298468__$1 = state_298468;var statearr_298517_298588 = state_298468__$1;(statearr_298517_298588[2] = null);
(statearr_298517_298588[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 18))
{var inst_298389 = (state_298468[2]);var state_298468__$1 = state_298468;var statearr_298518_298589 = state_298468__$1;(statearr_298518_298589[2] = inst_298389);
(statearr_298518_298589[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 19))
{var inst_298365 = (state_298468[25]);var inst_298369 = cljs.core.chunk_first.call(null,inst_298365);var inst_298370 = cljs.core.chunk_rest.call(null,inst_298365);var inst_298371 = cljs.core.count.call(null,inst_298369);var inst_298345 = inst_298370;var inst_298346 = inst_298369;var inst_298347 = inst_298371;var inst_298348 = 0;var state_298468__$1 = (function (){var statearr_298519 = state_298468;(statearr_298519[14] = inst_298345);
(statearr_298519[15] = inst_298346);
(statearr_298519[16] = inst_298347);
(statearr_298519[17] = inst_298348);
return statearr_298519;
})();var statearr_298520_298590 = state_298468__$1;(statearr_298520_298590[2] = null);
(statearr_298520_298590[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 20))
{var inst_298365 = (state_298468[25]);var inst_298375 = cljs.core.first.call(null,inst_298365);var inst_298376 = cljs.core.nth.call(null,inst_298375,0,null);var inst_298377 = cljs.core.nth.call(null,inst_298375,1,null);var state_298468__$1 = (function (){var statearr_298521 = state_298468;(statearr_298521[28] = inst_298376);
return statearr_298521;
})();if(cljs.core.truth_(inst_298377))
{var statearr_298522_298591 = state_298468__$1;(statearr_298522_298591[1] = 22);
} else
{var statearr_298523_298592 = state_298468__$1;(statearr_298523_298592[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 21))
{var inst_298386 = (state_298468[2]);var state_298468__$1 = state_298468;var statearr_298524_298593 = state_298468__$1;(statearr_298524_298593[2] = inst_298386);
(statearr_298524_298593[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 22))
{var inst_298376 = (state_298468[28]);var inst_298379 = cljs.core.async.close_BANG_.call(null,inst_298376);var state_298468__$1 = state_298468;var statearr_298525_298594 = state_298468__$1;(statearr_298525_298594[2] = inst_298379);
(statearr_298525_298594[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 23))
{var state_298468__$1 = state_298468;var statearr_298526_298595 = state_298468__$1;(statearr_298526_298595[2] = null);
(statearr_298526_298595[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 24))
{var inst_298365 = (state_298468[25]);var inst_298382 = (state_298468[2]);var inst_298383 = cljs.core.next.call(null,inst_298365);var inst_298345 = inst_298383;var inst_298346 = null;var inst_298347 = 0;var inst_298348 = 0;var state_298468__$1 = (function (){var statearr_298527 = state_298468;(statearr_298527[29] = inst_298382);
(statearr_298527[14] = inst_298345);
(statearr_298527[15] = inst_298346);
(statearr_298527[16] = inst_298347);
(statearr_298527[17] = inst_298348);
return statearr_298527;
})();var statearr_298528_298596 = state_298468__$1;(statearr_298528_298596[2] = null);
(statearr_298528_298596[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 25))
{var inst_298407 = (state_298468[12]);var inst_298406 = (state_298468[13]);var inst_298409 = (inst_298407 < inst_298406);var inst_298410 = inst_298409;var state_298468__$1 = state_298468;if(cljs.core.truth_(inst_298410))
{var statearr_298529_298597 = state_298468__$1;(statearr_298529_298597[1] = 27);
} else
{var statearr_298530_298598 = state_298468__$1;(statearr_298530_298598[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 26))
{var inst_298396 = (state_298468[19]);var inst_298454 = (state_298468[2]);var inst_298455 = cljs.core.seq.call(null,inst_298396);var state_298468__$1 = (function (){var statearr_298531 = state_298468;(statearr_298531[30] = inst_298454);
return statearr_298531;
})();if(inst_298455)
{var statearr_298532_298599 = state_298468__$1;(statearr_298532_298599[1] = 42);
} else
{var statearr_298533_298600 = state_298468__$1;(statearr_298533_298600[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 27))
{var inst_298405 = (state_298468[10]);var inst_298407 = (state_298468[12]);var inst_298412 = cljs.core._nth.call(null,inst_298405,inst_298407);var state_298468__$1 = (function (){var statearr_298534 = state_298468;(statearr_298534[7] = inst_298412);
return statearr_298534;
})();var statearr_298535_298601 = state_298468__$1;(statearr_298535_298601[2] = null);
(statearr_298535_298601[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 28))
{var inst_298404 = (state_298468[11]);var inst_298425 = (state_298468[9]);var inst_298425__$1 = cljs.core.seq.call(null,inst_298404);var state_298468__$1 = (function (){var statearr_298539 = state_298468;(statearr_298539[9] = inst_298425__$1);
return statearr_298539;
})();if(inst_298425__$1)
{var statearr_298540_298602 = state_298468__$1;(statearr_298540_298602[1] = 33);
} else
{var statearr_298541_298603 = state_298468__$1;(statearr_298541_298603[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 29))
{var inst_298452 = (state_298468[2]);var state_298468__$1 = state_298468;var statearr_298542_298604 = state_298468__$1;(statearr_298542_298604[2] = inst_298452);
(statearr_298542_298604[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 30))
{var inst_298405 = (state_298468[10]);var inst_298404 = (state_298468[11]);var inst_298407 = (state_298468[12]);var inst_298406 = (state_298468[13]);var inst_298421 = (state_298468[2]);var inst_298422 = (inst_298407 + 1);var tmp298536 = inst_298405;var tmp298537 = inst_298404;var tmp298538 = inst_298406;var inst_298404__$1 = tmp298537;var inst_298405__$1 = tmp298536;var inst_298406__$1 = tmp298538;var inst_298407__$1 = inst_298422;var state_298468__$1 = (function (){var statearr_298543 = state_298468;(statearr_298543[31] = inst_298421);
(statearr_298543[10] = inst_298405__$1);
(statearr_298543[11] = inst_298404__$1);
(statearr_298543[12] = inst_298407__$1);
(statearr_298543[13] = inst_298406__$1);
return statearr_298543;
})();var statearr_298544_298605 = state_298468__$1;(statearr_298544_298605[2] = null);
(statearr_298544_298605[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298469 === 31))
{var inst_298412 = (state_298468[7]);var inst_298413 = (state_298468[2]);var inst_298414 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_298415 = cljs.core.async.untap_STAR_.call(null,m,inst_298412);var state_298468__$1 = (function (){var statearr_298545 = state_298468;(statearr_298545[32] = inst_298413);
(statearr_298545[33] = inst_298414);
return statearr_298545;
})();var statearr_298546_298606 = state_298468__$1;(statearr_298546_298606[2] = inst_298415);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298468__$1);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_298550 = (new Array(34));(statearr_298550[0] = state_machine__18769__auto__);
(statearr_298550[1] = 1);
return statearr_298550;
});
var state_machine__18769__auto____1 = (function (state_298468){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_298468);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e298551){if((e298551 instanceof Object))
{var ex__18772__auto__ = e298551;var statearr_298552_298607 = state_298468;(statearr_298552_298607[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298468);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e298551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__298608 = state_298468;
state_298468 = G__298608;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_298468){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_298468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_298553 = f__18839__auto__.call(null);(statearr_298553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___298554);
return statearr_298553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
cljs.core.async.Mix = (function (){var obj298610 = {};return obj298610;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13813__auto__ = m;if(and__13813__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14428__auto__ = (((m == null))?null:m);return (function (){var or__13825__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t298720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t298720 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta298721){
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
this.meta298721 = meta298721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t298720.cljs$lang$type = true;
cljs.core.async.t298720.cljs$lang$ctorStr = "cljs.core.async/t298720";
cljs.core.async.t298720.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t298720");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t298720.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t298720.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t298720.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t298720.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t298720.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t298720.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t298720.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t298720.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t298720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_298722){var self__ = this;
var _298722__$1 = this;return self__.meta298721;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t298720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_298722,meta298721__$1){var self__ = this;
var _298722__$1 = this;return (new cljs.core.async.t298720(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta298721__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t298720 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t298720(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta298721){return (new cljs.core.async.t298720(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta298721));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t298720(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18838__auto___298829 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_298787){var state_val_298788 = (state_298787[1]);if((state_val_298788 === 1))
{var inst_298726 = (state_298787[7]);var inst_298726__$1 = calc_state.call(null);var inst_298727 = cljs.core.seq_QMARK_.call(null,inst_298726__$1);var state_298787__$1 = (function (){var statearr_298789 = state_298787;(statearr_298789[7] = inst_298726__$1);
return statearr_298789;
})();if(inst_298727)
{var statearr_298790_298830 = state_298787__$1;(statearr_298790_298830[1] = 2);
} else
{var statearr_298791_298831 = state_298787__$1;(statearr_298791_298831[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 2))
{var inst_298726 = (state_298787[7]);var inst_298729 = cljs.core.apply.call(null,cljs.core.hash_map,inst_298726);var state_298787__$1 = state_298787;var statearr_298792_298832 = state_298787__$1;(statearr_298792_298832[2] = inst_298729);
(statearr_298792_298832[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 3))
{var inst_298726 = (state_298787[7]);var state_298787__$1 = state_298787;var statearr_298793_298833 = state_298787__$1;(statearr_298793_298833[2] = inst_298726);
(statearr_298793_298833[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 4))
{var inst_298726 = (state_298787[7]);var inst_298732 = (state_298787[2]);var inst_298733 = cljs.core.get.call(null,inst_298732,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_298734 = cljs.core.get.call(null,inst_298732,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_298735 = cljs.core.get.call(null,inst_298732,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_298736 = inst_298726;var state_298787__$1 = (function (){var statearr_298794 = state_298787;(statearr_298794[8] = inst_298733);
(statearr_298794[9] = inst_298735);
(statearr_298794[10] = inst_298734);
(statearr_298794[11] = inst_298736);
return statearr_298794;
})();var statearr_298795_298834 = state_298787__$1;(statearr_298795_298834[2] = null);
(statearr_298795_298834[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 5))
{var inst_298736 = (state_298787[11]);var inst_298739 = cljs.core.seq_QMARK_.call(null,inst_298736);var state_298787__$1 = state_298787;if(inst_298739)
{var statearr_298796_298835 = state_298787__$1;(statearr_298796_298835[1] = 7);
} else
{var statearr_298797_298836 = state_298787__$1;(statearr_298797_298836[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 6))
{var inst_298785 = (state_298787[2]);var state_298787__$1 = state_298787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_298787__$1,inst_298785);
} else
{if((state_val_298788 === 7))
{var inst_298736 = (state_298787[11]);var inst_298741 = cljs.core.apply.call(null,cljs.core.hash_map,inst_298736);var state_298787__$1 = state_298787;var statearr_298798_298837 = state_298787__$1;(statearr_298798_298837[2] = inst_298741);
(statearr_298798_298837[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 8))
{var inst_298736 = (state_298787[11]);var state_298787__$1 = state_298787;var statearr_298799_298838 = state_298787__$1;(statearr_298799_298838[2] = inst_298736);
(statearr_298799_298838[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 9))
{var inst_298744 = (state_298787[12]);var inst_298744__$1 = (state_298787[2]);var inst_298745 = cljs.core.get.call(null,inst_298744__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_298746 = cljs.core.get.call(null,inst_298744__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_298747 = cljs.core.get.call(null,inst_298744__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_298787__$1 = (function (){var statearr_298800 = state_298787;(statearr_298800[13] = inst_298746);
(statearr_298800[14] = inst_298747);
(statearr_298800[12] = inst_298744__$1);
return statearr_298800;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_298787__$1,10,inst_298745);
} else
{if((state_val_298788 === 10))
{var inst_298752 = (state_298787[15]);var inst_298751 = (state_298787[16]);var inst_298750 = (state_298787[2]);var inst_298751__$1 = cljs.core.nth.call(null,inst_298750,0,null);var inst_298752__$1 = cljs.core.nth.call(null,inst_298750,1,null);var inst_298753 = (inst_298751__$1 == null);var inst_298754 = cljs.core._EQ_.call(null,inst_298752__$1,change);var inst_298755 = (inst_298753) || (inst_298754);var state_298787__$1 = (function (){var statearr_298801 = state_298787;(statearr_298801[15] = inst_298752__$1);
(statearr_298801[16] = inst_298751__$1);
return statearr_298801;
})();if(cljs.core.truth_(inst_298755))
{var statearr_298802_298839 = state_298787__$1;(statearr_298802_298839[1] = 11);
} else
{var statearr_298803_298840 = state_298787__$1;(statearr_298803_298840[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 11))
{var inst_298751 = (state_298787[16]);var inst_298757 = (inst_298751 == null);var state_298787__$1 = state_298787;if(cljs.core.truth_(inst_298757))
{var statearr_298804_298841 = state_298787__$1;(statearr_298804_298841[1] = 14);
} else
{var statearr_298805_298842 = state_298787__$1;(statearr_298805_298842[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 12))
{var inst_298747 = (state_298787[14]);var inst_298766 = (state_298787[17]);var inst_298752 = (state_298787[15]);var inst_298766__$1 = inst_298747.call(null,inst_298752);var state_298787__$1 = (function (){var statearr_298806 = state_298787;(statearr_298806[17] = inst_298766__$1);
return statearr_298806;
})();if(cljs.core.truth_(inst_298766__$1))
{var statearr_298807_298843 = state_298787__$1;(statearr_298807_298843[1] = 17);
} else
{var statearr_298808_298844 = state_298787__$1;(statearr_298808_298844[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 13))
{var inst_298783 = (state_298787[2]);var state_298787__$1 = state_298787;var statearr_298809_298845 = state_298787__$1;(statearr_298809_298845[2] = inst_298783);
(statearr_298809_298845[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 14))
{var inst_298752 = (state_298787[15]);var inst_298759 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_298752);var state_298787__$1 = state_298787;var statearr_298810_298846 = state_298787__$1;(statearr_298810_298846[2] = inst_298759);
(statearr_298810_298846[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 15))
{var state_298787__$1 = state_298787;var statearr_298811_298847 = state_298787__$1;(statearr_298811_298847[2] = null);
(statearr_298811_298847[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 16))
{var inst_298762 = (state_298787[2]);var inst_298763 = calc_state.call(null);var inst_298736 = inst_298763;var state_298787__$1 = (function (){var statearr_298812 = state_298787;(statearr_298812[18] = inst_298762);
(statearr_298812[11] = inst_298736);
return statearr_298812;
})();var statearr_298813_298848 = state_298787__$1;(statearr_298813_298848[2] = null);
(statearr_298813_298848[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 17))
{var inst_298766 = (state_298787[17]);var state_298787__$1 = state_298787;var statearr_298814_298849 = state_298787__$1;(statearr_298814_298849[2] = inst_298766);
(statearr_298814_298849[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 18))
{var inst_298746 = (state_298787[13]);var inst_298747 = (state_298787[14]);var inst_298752 = (state_298787[15]);var inst_298769 = cljs.core.empty_QMARK_.call(null,inst_298747);var inst_298770 = inst_298746.call(null,inst_298752);var inst_298771 = cljs.core.not.call(null,inst_298770);var inst_298772 = (inst_298769) && (inst_298771);var state_298787__$1 = state_298787;var statearr_298815_298850 = state_298787__$1;(statearr_298815_298850[2] = inst_298772);
(statearr_298815_298850[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 19))
{var inst_298774 = (state_298787[2]);var state_298787__$1 = state_298787;if(cljs.core.truth_(inst_298774))
{var statearr_298816_298851 = state_298787__$1;(statearr_298816_298851[1] = 20);
} else
{var statearr_298817_298852 = state_298787__$1;(statearr_298817_298852[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 20))
{var inst_298751 = (state_298787[16]);var state_298787__$1 = state_298787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_298787__$1,23,out,inst_298751);
} else
{if((state_val_298788 === 21))
{var state_298787__$1 = state_298787;var statearr_298818_298853 = state_298787__$1;(statearr_298818_298853[2] = null);
(statearr_298818_298853[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 22))
{var inst_298744 = (state_298787[12]);var inst_298780 = (state_298787[2]);var inst_298736 = inst_298744;var state_298787__$1 = (function (){var statearr_298819 = state_298787;(statearr_298819[19] = inst_298780);
(statearr_298819[11] = inst_298736);
return statearr_298819;
})();var statearr_298820_298854 = state_298787__$1;(statearr_298820_298854[2] = null);
(statearr_298820_298854[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_298788 === 23))
{var inst_298777 = (state_298787[2]);var state_298787__$1 = state_298787;var statearr_298821_298855 = state_298787__$1;(statearr_298821_298855[2] = inst_298777);
(statearr_298821_298855[1] = 22);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_298825 = (new Array(20));(statearr_298825[0] = state_machine__18769__auto__);
(statearr_298825[1] = 1);
return statearr_298825;
});
var state_machine__18769__auto____1 = (function (state_298787){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_298787);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e298826){if((e298826 instanceof Object))
{var ex__18772__auto__ = e298826;var statearr_298827_298856 = state_298787;(statearr_298827_298856[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e298826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__298857 = state_298787;
state_298787 = G__298857;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_298787){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_298787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_298828 = f__18839__auto__.call(null);(statearr_298828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___298829);
return statearr_298828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
cljs.core.async.Pub = (function (){var obj298859 = {};return obj298859;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13813__auto__ = p;if(and__13813__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13813__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14428__auto__ = (((p == null))?null:p);return (function (){var or__13825__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13813__auto__ = p;if(and__13813__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13813__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14428__auto__ = (((p == null))?null:p);return (function (){var or__13825__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13813__auto__ = p;if(and__13813__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13813__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14428__auto__ = (((p == null))?null:p);return (function (){var or__13825__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13813__auto__ = p;if(and__13813__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14428__auto__ = (((p == null))?null:p);return (function (){var or__13825__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
return (function (topic){var or__13825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13825__auto__,mults){
return (function (p1__298860_SHARP_){if(cljs.core.truth_(p1__298860_SHARP_.call(null,topic)))
{return p1__298860_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__298860_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13825__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t298985 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t298985 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta298986){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta298986 = meta298986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t298985.cljs$lang$type = true;
cljs.core.async.t298985.cljs$lang$ctorStr = "cljs.core.async/t298985";
cljs.core.async.t298985.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t298985");
});})(mults,ensure_mult))
;
cljs.core.async.t298985.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t298985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t298985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t298985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t298985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t298985.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t298985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t298985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_298987){var self__ = this;
var _298987__$1 = this;return self__.meta298986;
});})(mults,ensure_mult))
;
cljs.core.async.t298985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_298987,meta298986__$1){var self__ = this;
var _298987__$1 = this;return (new cljs.core.async.t298985(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta298986__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t298985 = ((function (mults,ensure_mult){
return (function __GT_t298985(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta298986){return (new cljs.core.async.t298985(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta298986));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t298985(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18838__auto___299109 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_299061){var state_val_299062 = (state_299061[1]);if((state_val_299062 === 1))
{var state_299061__$1 = state_299061;var statearr_299063_299110 = state_299061__$1;(statearr_299063_299110[2] = null);
(statearr_299063_299110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 2))
{var state_299061__$1 = state_299061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_299061__$1,4,ch);
} else
{if((state_val_299062 === 3))
{var inst_299059 = (state_299061[2]);var state_299061__$1 = state_299061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_299061__$1,inst_299059);
} else
{if((state_val_299062 === 4))
{var inst_298990 = (state_299061[7]);var inst_298990__$1 = (state_299061[2]);var inst_298991 = (inst_298990__$1 == null);var state_299061__$1 = (function (){var statearr_299064 = state_299061;(statearr_299064[7] = inst_298990__$1);
return statearr_299064;
})();if(cljs.core.truth_(inst_298991))
{var statearr_299065_299111 = state_299061__$1;(statearr_299065_299111[1] = 5);
} else
{var statearr_299066_299112 = state_299061__$1;(statearr_299066_299112[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 5))
{var inst_298997 = cljs.core.deref.call(null,mults);var inst_298998 = cljs.core.vals.call(null,inst_298997);var inst_298999 = cljs.core.seq.call(null,inst_298998);var inst_299000 = inst_298999;var inst_299001 = null;var inst_299002 = 0;var inst_299003 = 0;var state_299061__$1 = (function (){var statearr_299067 = state_299061;(statearr_299067[8] = inst_299000);
(statearr_299067[9] = inst_299003);
(statearr_299067[10] = inst_299002);
(statearr_299067[11] = inst_299001);
return statearr_299067;
})();var statearr_299068_299113 = state_299061__$1;(statearr_299068_299113[2] = null);
(statearr_299068_299113[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 6))
{var inst_299040 = (state_299061[12]);var inst_299038 = (state_299061[13]);var inst_298990 = (state_299061[7]);var inst_299038__$1 = topic_fn.call(null,inst_298990);var inst_299039 = cljs.core.deref.call(null,mults);var inst_299040__$1 = cljs.core.get.call(null,inst_299039,inst_299038__$1);var state_299061__$1 = (function (){var statearr_299069 = state_299061;(statearr_299069[12] = inst_299040__$1);
(statearr_299069[13] = inst_299038__$1);
return statearr_299069;
})();if(cljs.core.truth_(inst_299040__$1))
{var statearr_299070_299114 = state_299061__$1;(statearr_299070_299114[1] = 19);
} else
{var statearr_299071_299115 = state_299061__$1;(statearr_299071_299115[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 7))
{var inst_299057 = (state_299061[2]);var state_299061__$1 = state_299061;var statearr_299072_299116 = state_299061__$1;(statearr_299072_299116[2] = inst_299057);
(statearr_299072_299116[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 8))
{var inst_299003 = (state_299061[9]);var inst_299002 = (state_299061[10]);var inst_299005 = (inst_299003 < inst_299002);var inst_299006 = inst_299005;var state_299061__$1 = state_299061;if(cljs.core.truth_(inst_299006))
{var statearr_299076_299117 = state_299061__$1;(statearr_299076_299117[1] = 10);
} else
{var statearr_299077_299118 = state_299061__$1;(statearr_299077_299118[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 9))
{var inst_299036 = (state_299061[2]);var state_299061__$1 = state_299061;var statearr_299078_299119 = state_299061__$1;(statearr_299078_299119[2] = inst_299036);
(statearr_299078_299119[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 10))
{var inst_299000 = (state_299061[8]);var inst_299003 = (state_299061[9]);var inst_299002 = (state_299061[10]);var inst_299001 = (state_299061[11]);var inst_299008 = cljs.core._nth.call(null,inst_299001,inst_299003);var inst_299009 = cljs.core.async.muxch_STAR_.call(null,inst_299008);var inst_299010 = cljs.core.async.close_BANG_.call(null,inst_299009);var inst_299011 = (inst_299003 + 1);var tmp299073 = inst_299000;var tmp299074 = inst_299002;var tmp299075 = inst_299001;var inst_299000__$1 = tmp299073;var inst_299001__$1 = tmp299075;var inst_299002__$1 = tmp299074;var inst_299003__$1 = inst_299011;var state_299061__$1 = (function (){var statearr_299079 = state_299061;(statearr_299079[8] = inst_299000__$1);
(statearr_299079[14] = inst_299010);
(statearr_299079[9] = inst_299003__$1);
(statearr_299079[10] = inst_299002__$1);
(statearr_299079[11] = inst_299001__$1);
return statearr_299079;
})();var statearr_299080_299120 = state_299061__$1;(statearr_299080_299120[2] = null);
(statearr_299080_299120[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 11))
{var inst_299000 = (state_299061[8]);var inst_299014 = (state_299061[15]);var inst_299014__$1 = cljs.core.seq.call(null,inst_299000);var state_299061__$1 = (function (){var statearr_299081 = state_299061;(statearr_299081[15] = inst_299014__$1);
return statearr_299081;
})();if(inst_299014__$1)
{var statearr_299082_299121 = state_299061__$1;(statearr_299082_299121[1] = 13);
} else
{var statearr_299083_299122 = state_299061__$1;(statearr_299083_299122[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 12))
{var inst_299034 = (state_299061[2]);var state_299061__$1 = state_299061;var statearr_299084_299123 = state_299061__$1;(statearr_299084_299123[2] = inst_299034);
(statearr_299084_299123[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 13))
{var inst_299014 = (state_299061[15]);var inst_299016 = cljs.core.chunked_seq_QMARK_.call(null,inst_299014);var state_299061__$1 = state_299061;if(inst_299016)
{var statearr_299085_299124 = state_299061__$1;(statearr_299085_299124[1] = 16);
} else
{var statearr_299086_299125 = state_299061__$1;(statearr_299086_299125[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 14))
{var state_299061__$1 = state_299061;var statearr_299087_299126 = state_299061__$1;(statearr_299087_299126[2] = null);
(statearr_299087_299126[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 15))
{var inst_299032 = (state_299061[2]);var state_299061__$1 = state_299061;var statearr_299088_299127 = state_299061__$1;(statearr_299088_299127[2] = inst_299032);
(statearr_299088_299127[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 16))
{var inst_299014 = (state_299061[15]);var inst_299018 = cljs.core.chunk_first.call(null,inst_299014);var inst_299019 = cljs.core.chunk_rest.call(null,inst_299014);var inst_299020 = cljs.core.count.call(null,inst_299018);var inst_299000 = inst_299019;var inst_299001 = inst_299018;var inst_299002 = inst_299020;var inst_299003 = 0;var state_299061__$1 = (function (){var statearr_299089 = state_299061;(statearr_299089[8] = inst_299000);
(statearr_299089[9] = inst_299003);
(statearr_299089[10] = inst_299002);
(statearr_299089[11] = inst_299001);
return statearr_299089;
})();var statearr_299090_299128 = state_299061__$1;(statearr_299090_299128[2] = null);
(statearr_299090_299128[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 17))
{var inst_299014 = (state_299061[15]);var inst_299023 = cljs.core.first.call(null,inst_299014);var inst_299024 = cljs.core.async.muxch_STAR_.call(null,inst_299023);var inst_299025 = cljs.core.async.close_BANG_.call(null,inst_299024);var inst_299026 = cljs.core.next.call(null,inst_299014);var inst_299000 = inst_299026;var inst_299001 = null;var inst_299002 = 0;var inst_299003 = 0;var state_299061__$1 = (function (){var statearr_299091 = state_299061;(statearr_299091[16] = inst_299025);
(statearr_299091[8] = inst_299000);
(statearr_299091[9] = inst_299003);
(statearr_299091[10] = inst_299002);
(statearr_299091[11] = inst_299001);
return statearr_299091;
})();var statearr_299092_299129 = state_299061__$1;(statearr_299092_299129[2] = null);
(statearr_299092_299129[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 18))
{var inst_299029 = (state_299061[2]);var state_299061__$1 = state_299061;var statearr_299093_299130 = state_299061__$1;(statearr_299093_299130[2] = inst_299029);
(statearr_299093_299130[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 19))
{var state_299061__$1 = state_299061;var statearr_299094_299131 = state_299061__$1;(statearr_299094_299131[2] = null);
(statearr_299094_299131[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 20))
{var state_299061__$1 = state_299061;var statearr_299095_299132 = state_299061__$1;(statearr_299095_299132[2] = null);
(statearr_299095_299132[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 21))
{var inst_299054 = (state_299061[2]);var state_299061__$1 = (function (){var statearr_299096 = state_299061;(statearr_299096[17] = inst_299054);
return statearr_299096;
})();var statearr_299097_299133 = state_299061__$1;(statearr_299097_299133[2] = null);
(statearr_299097_299133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 22))
{var inst_299051 = (state_299061[2]);var state_299061__$1 = state_299061;var statearr_299098_299134 = state_299061__$1;(statearr_299098_299134[2] = inst_299051);
(statearr_299098_299134[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 23))
{var inst_299038 = (state_299061[13]);var inst_299042 = (state_299061[2]);var inst_299043 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_299038);var state_299061__$1 = (function (){var statearr_299099 = state_299061;(statearr_299099[18] = inst_299042);
return statearr_299099;
})();var statearr_299100_299135 = state_299061__$1;(statearr_299100_299135[2] = inst_299043);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299061__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299062 === 24))
{var inst_299040 = (state_299061[12]);var inst_298990 = (state_299061[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_299061,23,Object,null,22);var inst_299047 = cljs.core.async.muxch_STAR_.call(null,inst_299040);var state_299061__$1 = state_299061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_299061__$1,25,inst_299047,inst_298990);
} else
{if((state_val_299062 === 25))
{var inst_299049 = (state_299061[2]);var state_299061__$1 = state_299061;var statearr_299101_299136 = state_299061__$1;(statearr_299101_299136[2] = inst_299049);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299061__$1);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_299105 = (new Array(19));(statearr_299105[0] = state_machine__18769__auto__);
(statearr_299105[1] = 1);
return statearr_299105;
});
var state_machine__18769__auto____1 = (function (state_299061){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_299061);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e299106){if((e299106 instanceof Object))
{var ex__18772__auto__ = e299106;var statearr_299107_299137 = state_299061;(statearr_299107_299137[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e299106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__299138 = state_299061;
state_299061 = G__299138;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_299061){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_299061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_299108 = f__18839__auto__.call(null);(statearr_299108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___299109);
return statearr_299108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
,cljs.core.range.call(null,cnt));var c__18838__auto___299275 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_299245){var state_val_299246 = (state_299245[1]);if((state_val_299246 === 1))
{var state_299245__$1 = state_299245;var statearr_299247_299276 = state_299245__$1;(statearr_299247_299276[2] = null);
(statearr_299247_299276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 2))
{var inst_299208 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_299209 = 0;var state_299245__$1 = (function (){var statearr_299248 = state_299245;(statearr_299248[7] = inst_299208);
(statearr_299248[8] = inst_299209);
return statearr_299248;
})();var statearr_299249_299277 = state_299245__$1;(statearr_299249_299277[2] = null);
(statearr_299249_299277[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 3))
{var inst_299243 = (state_299245[2]);var state_299245__$1 = state_299245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_299245__$1,inst_299243);
} else
{if((state_val_299246 === 4))
{var inst_299209 = (state_299245[8]);var inst_299211 = (inst_299209 < cnt);var state_299245__$1 = state_299245;if(cljs.core.truth_(inst_299211))
{var statearr_299250_299278 = state_299245__$1;(statearr_299250_299278[1] = 6);
} else
{var statearr_299251_299279 = state_299245__$1;(statearr_299251_299279[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 5))
{var inst_299229 = (state_299245[2]);var state_299245__$1 = (function (){var statearr_299252 = state_299245;(statearr_299252[9] = inst_299229);
return statearr_299252;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_299245__$1,12,dchan);
} else
{if((state_val_299246 === 6))
{var state_299245__$1 = state_299245;var statearr_299253_299280 = state_299245__$1;(statearr_299253_299280[2] = null);
(statearr_299253_299280[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 7))
{var state_299245__$1 = state_299245;var statearr_299254_299281 = state_299245__$1;(statearr_299254_299281[2] = null);
(statearr_299254_299281[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 8))
{var inst_299227 = (state_299245[2]);var state_299245__$1 = state_299245;var statearr_299255_299282 = state_299245__$1;(statearr_299255_299282[2] = inst_299227);
(statearr_299255_299282[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 9))
{var inst_299209 = (state_299245[8]);var inst_299222 = (state_299245[2]);var inst_299223 = (inst_299209 + 1);var inst_299209__$1 = inst_299223;var state_299245__$1 = (function (){var statearr_299256 = state_299245;(statearr_299256[8] = inst_299209__$1);
(statearr_299256[10] = inst_299222);
return statearr_299256;
})();var statearr_299257_299283 = state_299245__$1;(statearr_299257_299283[2] = null);
(statearr_299257_299283[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 10))
{var inst_299213 = (state_299245[2]);var inst_299214 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_299245__$1 = (function (){var statearr_299258 = state_299245;(statearr_299258[11] = inst_299213);
return statearr_299258;
})();var statearr_299259_299284 = state_299245__$1;(statearr_299259_299284[2] = inst_299214);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299245__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 11))
{var inst_299209 = (state_299245[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_299245,10,Object,null,9);var inst_299218 = chs__$1.call(null,inst_299209);var inst_299219 = done.call(null,inst_299209);var inst_299220 = cljs.core.async.take_BANG_.call(null,inst_299218,inst_299219);var state_299245__$1 = state_299245;var statearr_299260_299285 = state_299245__$1;(statearr_299260_299285[2] = inst_299220);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299245__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 12))
{var inst_299231 = (state_299245[12]);var inst_299231__$1 = (state_299245[2]);var inst_299232 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_299231__$1);var state_299245__$1 = (function (){var statearr_299261 = state_299245;(statearr_299261[12] = inst_299231__$1);
return statearr_299261;
})();if(cljs.core.truth_(inst_299232))
{var statearr_299262_299286 = state_299245__$1;(statearr_299262_299286[1] = 13);
} else
{var statearr_299263_299287 = state_299245__$1;(statearr_299263_299287[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 13))
{var inst_299234 = cljs.core.async.close_BANG_.call(null,out);var state_299245__$1 = state_299245;var statearr_299264_299288 = state_299245__$1;(statearr_299264_299288[2] = inst_299234);
(statearr_299264_299288[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 14))
{var inst_299231 = (state_299245[12]);var inst_299236 = cljs.core.apply.call(null,f,inst_299231);var state_299245__$1 = state_299245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_299245__$1,16,out,inst_299236);
} else
{if((state_val_299246 === 15))
{var inst_299241 = (state_299245[2]);var state_299245__$1 = state_299245;var statearr_299265_299289 = state_299245__$1;(statearr_299265_299289[2] = inst_299241);
(statearr_299265_299289[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299246 === 16))
{var inst_299238 = (state_299245[2]);var state_299245__$1 = (function (){var statearr_299266 = state_299245;(statearr_299266[13] = inst_299238);
return statearr_299266;
})();var statearr_299267_299290 = state_299245__$1;(statearr_299267_299290[2] = null);
(statearr_299267_299290[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_299271 = (new Array(14));(statearr_299271[0] = state_machine__18769__auto__);
(statearr_299271[1] = 1);
return statearr_299271;
});
var state_machine__18769__auto____1 = (function (state_299245){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_299245);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e299272){if((e299272 instanceof Object))
{var ex__18772__auto__ = e299272;var statearr_299273_299291 = state_299245;(statearr_299273_299291[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299245);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e299272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__299292 = state_299245;
state_299245 = G__299292;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_299245){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_299245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_299274 = f__18839__auto__.call(null);(statearr_299274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___299275);
return statearr_299274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___299400 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_299376){var state_val_299377 = (state_299376[1]);if((state_val_299377 === 1))
{var inst_299347 = cljs.core.vec.call(null,chs);var inst_299348 = inst_299347;var state_299376__$1 = (function (){var statearr_299378 = state_299376;(statearr_299378[7] = inst_299348);
return statearr_299378;
})();var statearr_299379_299401 = state_299376__$1;(statearr_299379_299401[2] = null);
(statearr_299379_299401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299377 === 2))
{var inst_299348 = (state_299376[7]);var inst_299350 = cljs.core.count.call(null,inst_299348);var inst_299351 = (inst_299350 > 0);var state_299376__$1 = state_299376;if(cljs.core.truth_(inst_299351))
{var statearr_299380_299402 = state_299376__$1;(statearr_299380_299402[1] = 4);
} else
{var statearr_299381_299403 = state_299376__$1;(statearr_299381_299403[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299377 === 3))
{var inst_299374 = (state_299376[2]);var state_299376__$1 = state_299376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_299376__$1,inst_299374);
} else
{if((state_val_299377 === 4))
{var inst_299348 = (state_299376[7]);var state_299376__$1 = state_299376;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_299376__$1,7,inst_299348);
} else
{if((state_val_299377 === 5))
{var inst_299370 = cljs.core.async.close_BANG_.call(null,out);var state_299376__$1 = state_299376;var statearr_299382_299404 = state_299376__$1;(statearr_299382_299404[2] = inst_299370);
(statearr_299382_299404[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299377 === 6))
{var inst_299372 = (state_299376[2]);var state_299376__$1 = state_299376;var statearr_299383_299405 = state_299376__$1;(statearr_299383_299405[2] = inst_299372);
(statearr_299383_299405[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299377 === 7))
{var inst_299356 = (state_299376[8]);var inst_299355 = (state_299376[9]);var inst_299355__$1 = (state_299376[2]);var inst_299356__$1 = cljs.core.nth.call(null,inst_299355__$1,0,null);var inst_299357 = cljs.core.nth.call(null,inst_299355__$1,1,null);var inst_299358 = (inst_299356__$1 == null);var state_299376__$1 = (function (){var statearr_299384 = state_299376;(statearr_299384[8] = inst_299356__$1);
(statearr_299384[9] = inst_299355__$1);
(statearr_299384[10] = inst_299357);
return statearr_299384;
})();if(cljs.core.truth_(inst_299358))
{var statearr_299385_299406 = state_299376__$1;(statearr_299385_299406[1] = 8);
} else
{var statearr_299386_299407 = state_299376__$1;(statearr_299386_299407[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299377 === 8))
{var inst_299356 = (state_299376[8]);var inst_299355 = (state_299376[9]);var inst_299348 = (state_299376[7]);var inst_299357 = (state_299376[10]);var inst_299360 = (function (){var c = inst_299357;var v = inst_299356;var vec__299353 = inst_299355;var cs = inst_299348;return ((function (c,v,vec__299353,cs,inst_299356,inst_299355,inst_299348,inst_299357,state_val_299377){
return (function (p1__299293_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__299293_SHARP_);
});
;})(c,v,vec__299353,cs,inst_299356,inst_299355,inst_299348,inst_299357,state_val_299377))
})();var inst_299361 = cljs.core.filterv.call(null,inst_299360,inst_299348);var inst_299348__$1 = inst_299361;var state_299376__$1 = (function (){var statearr_299387 = state_299376;(statearr_299387[7] = inst_299348__$1);
return statearr_299387;
})();var statearr_299388_299408 = state_299376__$1;(statearr_299388_299408[2] = null);
(statearr_299388_299408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299377 === 9))
{var inst_299356 = (state_299376[8]);var state_299376__$1 = state_299376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_299376__$1,11,out,inst_299356);
} else
{if((state_val_299377 === 10))
{var inst_299368 = (state_299376[2]);var state_299376__$1 = state_299376;var statearr_299390_299409 = state_299376__$1;(statearr_299390_299409[2] = inst_299368);
(statearr_299390_299409[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299377 === 11))
{var inst_299348 = (state_299376[7]);var inst_299365 = (state_299376[2]);var tmp299389 = inst_299348;var inst_299348__$1 = tmp299389;var state_299376__$1 = (function (){var statearr_299391 = state_299376;(statearr_299391[7] = inst_299348__$1);
(statearr_299391[11] = inst_299365);
return statearr_299391;
})();var statearr_299392_299410 = state_299376__$1;(statearr_299392_299410[2] = null);
(statearr_299392_299410[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_299396 = (new Array(12));(statearr_299396[0] = state_machine__18769__auto__);
(statearr_299396[1] = 1);
return statearr_299396;
});
var state_machine__18769__auto____1 = (function (state_299376){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_299376);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e299397){if((e299397 instanceof Object))
{var ex__18772__auto__ = e299397;var statearr_299398_299411 = state_299376;(statearr_299398_299411[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299376);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e299397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__299412 = state_299376;
state_299376 = G__299412;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_299376){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_299376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_299399 = f__18839__auto__.call(null);(statearr_299399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___299400);
return statearr_299399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___299505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_299482){var state_val_299483 = (state_299482[1]);if((state_val_299483 === 1))
{var inst_299459 = 0;var state_299482__$1 = (function (){var statearr_299484 = state_299482;(statearr_299484[7] = inst_299459);
return statearr_299484;
})();var statearr_299485_299506 = state_299482__$1;(statearr_299485_299506[2] = null);
(statearr_299485_299506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299483 === 2))
{var inst_299459 = (state_299482[7]);var inst_299461 = (inst_299459 < n);var state_299482__$1 = state_299482;if(cljs.core.truth_(inst_299461))
{var statearr_299486_299507 = state_299482__$1;(statearr_299486_299507[1] = 4);
} else
{var statearr_299487_299508 = state_299482__$1;(statearr_299487_299508[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299483 === 3))
{var inst_299479 = (state_299482[2]);var inst_299480 = cljs.core.async.close_BANG_.call(null,out);var state_299482__$1 = (function (){var statearr_299488 = state_299482;(statearr_299488[8] = inst_299479);
return statearr_299488;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_299482__$1,inst_299480);
} else
{if((state_val_299483 === 4))
{var state_299482__$1 = state_299482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_299482__$1,7,ch);
} else
{if((state_val_299483 === 5))
{var state_299482__$1 = state_299482;var statearr_299489_299509 = state_299482__$1;(statearr_299489_299509[2] = null);
(statearr_299489_299509[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299483 === 6))
{var inst_299477 = (state_299482[2]);var state_299482__$1 = state_299482;var statearr_299490_299510 = state_299482__$1;(statearr_299490_299510[2] = inst_299477);
(statearr_299490_299510[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299483 === 7))
{var inst_299464 = (state_299482[9]);var inst_299464__$1 = (state_299482[2]);var inst_299465 = (inst_299464__$1 == null);var inst_299466 = cljs.core.not.call(null,inst_299465);var state_299482__$1 = (function (){var statearr_299491 = state_299482;(statearr_299491[9] = inst_299464__$1);
return statearr_299491;
})();if(inst_299466)
{var statearr_299492_299511 = state_299482__$1;(statearr_299492_299511[1] = 8);
} else
{var statearr_299493_299512 = state_299482__$1;(statearr_299493_299512[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299483 === 8))
{var inst_299464 = (state_299482[9]);var state_299482__$1 = state_299482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_299482__$1,11,out,inst_299464);
} else
{if((state_val_299483 === 9))
{var state_299482__$1 = state_299482;var statearr_299494_299513 = state_299482__$1;(statearr_299494_299513[2] = null);
(statearr_299494_299513[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299483 === 10))
{var inst_299474 = (state_299482[2]);var state_299482__$1 = state_299482;var statearr_299495_299514 = state_299482__$1;(statearr_299495_299514[2] = inst_299474);
(statearr_299495_299514[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299483 === 11))
{var inst_299459 = (state_299482[7]);var inst_299469 = (state_299482[2]);var inst_299470 = (inst_299459 + 1);var inst_299459__$1 = inst_299470;var state_299482__$1 = (function (){var statearr_299496 = state_299482;(statearr_299496[10] = inst_299469);
(statearr_299496[7] = inst_299459__$1);
return statearr_299496;
})();var statearr_299497_299515 = state_299482__$1;(statearr_299497_299515[2] = null);
(statearr_299497_299515[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_299501 = (new Array(11));(statearr_299501[0] = state_machine__18769__auto__);
(statearr_299501[1] = 1);
return statearr_299501;
});
var state_machine__18769__auto____1 = (function (state_299482){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_299482);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e299502){if((e299502 instanceof Object))
{var ex__18772__auto__ = e299502;var statearr_299503_299516 = state_299482;(statearr_299503_299516[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299482);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e299502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__299517 = state_299482;
state_299482 = G__299517;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_299482){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_299482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_299504 = f__18839__auto__.call(null);(statearr_299504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___299505);
return statearr_299504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___299614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_299589){var state_val_299590 = (state_299589[1]);if((state_val_299590 === 1))
{var inst_299566 = null;var state_299589__$1 = (function (){var statearr_299591 = state_299589;(statearr_299591[7] = inst_299566);
return statearr_299591;
})();var statearr_299592_299615 = state_299589__$1;(statearr_299592_299615[2] = null);
(statearr_299592_299615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299590 === 2))
{var state_299589__$1 = state_299589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_299589__$1,4,ch);
} else
{if((state_val_299590 === 3))
{var inst_299586 = (state_299589[2]);var inst_299587 = cljs.core.async.close_BANG_.call(null,out);var state_299589__$1 = (function (){var statearr_299593 = state_299589;(statearr_299593[8] = inst_299586);
return statearr_299593;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_299589__$1,inst_299587);
} else
{if((state_val_299590 === 4))
{var inst_299569 = (state_299589[9]);var inst_299569__$1 = (state_299589[2]);var inst_299570 = (inst_299569__$1 == null);var inst_299571 = cljs.core.not.call(null,inst_299570);var state_299589__$1 = (function (){var statearr_299594 = state_299589;(statearr_299594[9] = inst_299569__$1);
return statearr_299594;
})();if(inst_299571)
{var statearr_299595_299616 = state_299589__$1;(statearr_299595_299616[1] = 5);
} else
{var statearr_299596_299617 = state_299589__$1;(statearr_299596_299617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299590 === 5))
{var inst_299566 = (state_299589[7]);var inst_299569 = (state_299589[9]);var inst_299573 = cljs.core._EQ_.call(null,inst_299569,inst_299566);var state_299589__$1 = state_299589;if(inst_299573)
{var statearr_299597_299618 = state_299589__$1;(statearr_299597_299618[1] = 8);
} else
{var statearr_299598_299619 = state_299589__$1;(statearr_299598_299619[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299590 === 6))
{var state_299589__$1 = state_299589;var statearr_299600_299620 = state_299589__$1;(statearr_299600_299620[2] = null);
(statearr_299600_299620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299590 === 7))
{var inst_299584 = (state_299589[2]);var state_299589__$1 = state_299589;var statearr_299601_299621 = state_299589__$1;(statearr_299601_299621[2] = inst_299584);
(statearr_299601_299621[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299590 === 8))
{var inst_299566 = (state_299589[7]);var tmp299599 = inst_299566;var inst_299566__$1 = tmp299599;var state_299589__$1 = (function (){var statearr_299602 = state_299589;(statearr_299602[7] = inst_299566__$1);
return statearr_299602;
})();var statearr_299603_299622 = state_299589__$1;(statearr_299603_299622[2] = null);
(statearr_299603_299622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299590 === 9))
{var inst_299569 = (state_299589[9]);var state_299589__$1 = state_299589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_299589__$1,11,out,inst_299569);
} else
{if((state_val_299590 === 10))
{var inst_299581 = (state_299589[2]);var state_299589__$1 = state_299589;var statearr_299604_299623 = state_299589__$1;(statearr_299604_299623[2] = inst_299581);
(statearr_299604_299623[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299590 === 11))
{var inst_299569 = (state_299589[9]);var inst_299578 = (state_299589[2]);var inst_299566 = inst_299569;var state_299589__$1 = (function (){var statearr_299605 = state_299589;(statearr_299605[10] = inst_299578);
(statearr_299605[7] = inst_299566);
return statearr_299605;
})();var statearr_299606_299624 = state_299589__$1;(statearr_299606_299624[2] = null);
(statearr_299606_299624[1] = 2);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_299610 = (new Array(11));(statearr_299610[0] = state_machine__18769__auto__);
(statearr_299610[1] = 1);
return statearr_299610;
});
var state_machine__18769__auto____1 = (function (state_299589){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_299589);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e299611){if((e299611 instanceof Object))
{var ex__18772__auto__ = e299611;var statearr_299612_299625 = state_299589;(statearr_299612_299625[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e299611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__299626 = state_299589;
state_299589 = G__299626;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_299589){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_299589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_299613 = f__18839__auto__.call(null);(statearr_299613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___299614);
return statearr_299613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___299761 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_299731){var state_val_299732 = (state_299731[1]);if((state_val_299732 === 1))
{var inst_299694 = (new Array(n));var inst_299695 = inst_299694;var inst_299696 = 0;var state_299731__$1 = (function (){var statearr_299733 = state_299731;(statearr_299733[7] = inst_299696);
(statearr_299733[8] = inst_299695);
return statearr_299733;
})();var statearr_299734_299762 = state_299731__$1;(statearr_299734_299762[2] = null);
(statearr_299734_299762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299732 === 2))
{var state_299731__$1 = state_299731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_299731__$1,4,ch);
} else
{if((state_val_299732 === 3))
{var inst_299729 = (state_299731[2]);var state_299731__$1 = state_299731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_299731__$1,inst_299729);
} else
{if((state_val_299732 === 4))
{var inst_299699 = (state_299731[9]);var inst_299699__$1 = (state_299731[2]);var inst_299700 = (inst_299699__$1 == null);var inst_299701 = cljs.core.not.call(null,inst_299700);var state_299731__$1 = (function (){var statearr_299735 = state_299731;(statearr_299735[9] = inst_299699__$1);
return statearr_299735;
})();if(inst_299701)
{var statearr_299736_299763 = state_299731__$1;(statearr_299736_299763[1] = 5);
} else
{var statearr_299737_299764 = state_299731__$1;(statearr_299737_299764[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299732 === 5))
{var inst_299699 = (state_299731[9]);var inst_299696 = (state_299731[7]);var inst_299695 = (state_299731[8]);var inst_299704 = (state_299731[10]);var inst_299703 = (inst_299695[inst_299696] = inst_299699);var inst_299704__$1 = (inst_299696 + 1);var inst_299705 = (inst_299704__$1 < n);var state_299731__$1 = (function (){var statearr_299738 = state_299731;(statearr_299738[11] = inst_299703);
(statearr_299738[10] = inst_299704__$1);
return statearr_299738;
})();if(cljs.core.truth_(inst_299705))
{var statearr_299739_299765 = state_299731__$1;(statearr_299739_299765[1] = 8);
} else
{var statearr_299740_299766 = state_299731__$1;(statearr_299740_299766[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299732 === 6))
{var inst_299696 = (state_299731[7]);var inst_299717 = (inst_299696 > 0);var state_299731__$1 = state_299731;if(cljs.core.truth_(inst_299717))
{var statearr_299742_299767 = state_299731__$1;(statearr_299742_299767[1] = 12);
} else
{var statearr_299743_299768 = state_299731__$1;(statearr_299743_299768[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299732 === 7))
{var inst_299727 = (state_299731[2]);var state_299731__$1 = state_299731;var statearr_299744_299769 = state_299731__$1;(statearr_299744_299769[2] = inst_299727);
(statearr_299744_299769[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299732 === 8))
{var inst_299695 = (state_299731[8]);var inst_299704 = (state_299731[10]);var tmp299741 = inst_299695;var inst_299695__$1 = tmp299741;var inst_299696 = inst_299704;var state_299731__$1 = (function (){var statearr_299745 = state_299731;(statearr_299745[7] = inst_299696);
(statearr_299745[8] = inst_299695__$1);
return statearr_299745;
})();var statearr_299746_299770 = state_299731__$1;(statearr_299746_299770[2] = null);
(statearr_299746_299770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299732 === 9))
{var inst_299695 = (state_299731[8]);var inst_299709 = cljs.core.vec.call(null,inst_299695);var state_299731__$1 = state_299731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_299731__$1,11,out,inst_299709);
} else
{if((state_val_299732 === 10))
{var inst_299715 = (state_299731[2]);var state_299731__$1 = state_299731;var statearr_299747_299771 = state_299731__$1;(statearr_299747_299771[2] = inst_299715);
(statearr_299747_299771[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299732 === 11))
{var inst_299711 = (state_299731[2]);var inst_299712 = (new Array(n));var inst_299695 = inst_299712;var inst_299696 = 0;var state_299731__$1 = (function (){var statearr_299748 = state_299731;(statearr_299748[7] = inst_299696);
(statearr_299748[8] = inst_299695);
(statearr_299748[12] = inst_299711);
return statearr_299748;
})();var statearr_299749_299772 = state_299731__$1;(statearr_299749_299772[2] = null);
(statearr_299749_299772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299732 === 12))
{var inst_299695 = (state_299731[8]);var inst_299719 = cljs.core.vec.call(null,inst_299695);var state_299731__$1 = state_299731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_299731__$1,15,out,inst_299719);
} else
{if((state_val_299732 === 13))
{var state_299731__$1 = state_299731;var statearr_299750_299773 = state_299731__$1;(statearr_299750_299773[2] = null);
(statearr_299750_299773[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299732 === 14))
{var inst_299724 = (state_299731[2]);var inst_299725 = cljs.core.async.close_BANG_.call(null,out);var state_299731__$1 = (function (){var statearr_299751 = state_299731;(statearr_299751[13] = inst_299724);
return statearr_299751;
})();var statearr_299752_299774 = state_299731__$1;(statearr_299752_299774[2] = inst_299725);
(statearr_299752_299774[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299732 === 15))
{var inst_299721 = (state_299731[2]);var state_299731__$1 = state_299731;var statearr_299753_299775 = state_299731__$1;(statearr_299753_299775[2] = inst_299721);
(statearr_299753_299775[1] = 14);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_299757 = (new Array(14));(statearr_299757[0] = state_machine__18769__auto__);
(statearr_299757[1] = 1);
return statearr_299757;
});
var state_machine__18769__auto____1 = (function (state_299731){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_299731);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e299758){if((e299758 instanceof Object))
{var ex__18772__auto__ = e299758;var statearr_299759_299776 = state_299731;(statearr_299759_299776[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299731);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e299758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__299777 = state_299731;
state_299731 = G__299777;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_299731){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_299731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_299760 = f__18839__auto__.call(null);(statearr_299760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___299761);
return statearr_299760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___299920 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_299890){var state_val_299891 = (state_299890[1]);if((state_val_299891 === 1))
{var inst_299849 = (new Array(0));var inst_299850 = inst_299849;var inst_299851 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_299890__$1 = (function (){var statearr_299892 = state_299890;(statearr_299892[7] = inst_299851);
(statearr_299892[8] = inst_299850);
return statearr_299892;
})();var statearr_299893_299921 = state_299890__$1;(statearr_299893_299921[2] = null);
(statearr_299893_299921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299891 === 2))
{var state_299890__$1 = state_299890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_299890__$1,4,ch);
} else
{if((state_val_299891 === 3))
{var inst_299888 = (state_299890[2]);var state_299890__$1 = state_299890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_299890__$1,inst_299888);
} else
{if((state_val_299891 === 4))
{var inst_299854 = (state_299890[9]);var inst_299854__$1 = (state_299890[2]);var inst_299855 = (inst_299854__$1 == null);var inst_299856 = cljs.core.not.call(null,inst_299855);var state_299890__$1 = (function (){var statearr_299894 = state_299890;(statearr_299894[9] = inst_299854__$1);
return statearr_299894;
})();if(inst_299856)
{var statearr_299895_299922 = state_299890__$1;(statearr_299895_299922[1] = 5);
} else
{var statearr_299896_299923 = state_299890__$1;(statearr_299896_299923[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299891 === 5))
{var inst_299854 = (state_299890[9]);var inst_299858 = (state_299890[10]);var inst_299851 = (state_299890[7]);var inst_299858__$1 = f.call(null,inst_299854);var inst_299859 = cljs.core._EQ_.call(null,inst_299858__$1,inst_299851);var inst_299860 = cljs.core.keyword_identical_QMARK_.call(null,inst_299851,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_299861 = (inst_299859) || (inst_299860);var state_299890__$1 = (function (){var statearr_299897 = state_299890;(statearr_299897[10] = inst_299858__$1);
return statearr_299897;
})();if(cljs.core.truth_(inst_299861))
{var statearr_299898_299924 = state_299890__$1;(statearr_299898_299924[1] = 8);
} else
{var statearr_299899_299925 = state_299890__$1;(statearr_299899_299925[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299891 === 6))
{var inst_299850 = (state_299890[8]);var inst_299875 = inst_299850.length;var inst_299876 = (inst_299875 > 0);var state_299890__$1 = state_299890;if(cljs.core.truth_(inst_299876))
{var statearr_299901_299926 = state_299890__$1;(statearr_299901_299926[1] = 12);
} else
{var statearr_299902_299927 = state_299890__$1;(statearr_299902_299927[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299891 === 7))
{var inst_299886 = (state_299890[2]);var state_299890__$1 = state_299890;var statearr_299903_299928 = state_299890__$1;(statearr_299903_299928[2] = inst_299886);
(statearr_299903_299928[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299891 === 8))
{var inst_299854 = (state_299890[9]);var inst_299858 = (state_299890[10]);var inst_299850 = (state_299890[8]);var inst_299863 = inst_299850.push(inst_299854);var tmp299900 = inst_299850;var inst_299850__$1 = tmp299900;var inst_299851 = inst_299858;var state_299890__$1 = (function (){var statearr_299904 = state_299890;(statearr_299904[11] = inst_299863);
(statearr_299904[7] = inst_299851);
(statearr_299904[8] = inst_299850__$1);
return statearr_299904;
})();var statearr_299905_299929 = state_299890__$1;(statearr_299905_299929[2] = null);
(statearr_299905_299929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299891 === 9))
{var inst_299850 = (state_299890[8]);var inst_299866 = cljs.core.vec.call(null,inst_299850);var state_299890__$1 = state_299890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_299890__$1,11,out,inst_299866);
} else
{if((state_val_299891 === 10))
{var inst_299873 = (state_299890[2]);var state_299890__$1 = state_299890;var statearr_299906_299930 = state_299890__$1;(statearr_299906_299930[2] = inst_299873);
(statearr_299906_299930[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299891 === 11))
{var inst_299854 = (state_299890[9]);var inst_299858 = (state_299890[10]);var inst_299868 = (state_299890[2]);var inst_299869 = (new Array(0));var inst_299870 = inst_299869.push(inst_299854);var inst_299850 = inst_299869;var inst_299851 = inst_299858;var state_299890__$1 = (function (){var statearr_299907 = state_299890;(statearr_299907[12] = inst_299870);
(statearr_299907[7] = inst_299851);
(statearr_299907[8] = inst_299850);
(statearr_299907[13] = inst_299868);
return statearr_299907;
})();var statearr_299908_299931 = state_299890__$1;(statearr_299908_299931[2] = null);
(statearr_299908_299931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299891 === 12))
{var inst_299850 = (state_299890[8]);var inst_299878 = cljs.core.vec.call(null,inst_299850);var state_299890__$1 = state_299890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_299890__$1,15,out,inst_299878);
} else
{if((state_val_299891 === 13))
{var state_299890__$1 = state_299890;var statearr_299909_299932 = state_299890__$1;(statearr_299909_299932[2] = null);
(statearr_299909_299932[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299891 === 14))
{var inst_299883 = (state_299890[2]);var inst_299884 = cljs.core.async.close_BANG_.call(null,out);var state_299890__$1 = (function (){var statearr_299910 = state_299890;(statearr_299910[14] = inst_299883);
return statearr_299910;
})();var statearr_299911_299933 = state_299890__$1;(statearr_299911_299933[2] = inst_299884);
(statearr_299911_299933[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_299891 === 15))
{var inst_299880 = (state_299890[2]);var state_299890__$1 = state_299890;var statearr_299912_299934 = state_299890__$1;(statearr_299912_299934[2] = inst_299880);
(statearr_299912_299934[1] = 14);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_299916 = (new Array(15));(statearr_299916[0] = state_machine__18769__auto__);
(statearr_299916[1] = 1);
return statearr_299916;
});
var state_machine__18769__auto____1 = (function (state_299890){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_299890);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e299917){if((e299917 instanceof Object))
{var ex__18772__auto__ = e299917;var statearr_299918_299935 = state_299890;(statearr_299918_299935[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299890);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e299917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__299936 = state_299890;
state_299890 = G__299936;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_299890){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_299890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_299919 = f__18839__auto__.call(null);(statearr_299919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___299920);
return statearr_299919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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