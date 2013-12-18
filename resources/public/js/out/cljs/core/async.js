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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t82003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82003 = (function (f,fn_handler,meta82004){
this.f = f;
this.fn_handler = fn_handler;
this.meta82004 = meta82004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82003.cljs$lang$type = true;
cljs.core.async.t82003.cljs$lang$ctorStr = "cljs.core.async/t82003";
cljs.core.async.t82003.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t82003");
});
cljs.core.async.t82003.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t82003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t82003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t82003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82005){var self__ = this;
var _82005__$1 = this;return self__.meta82004;
});
cljs.core.async.t82003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82005,meta82004__$1){var self__ = this;
var _82005__$1 = this;return (new cljs.core.async.t82003(self__.f,self__.fn_handler,meta82004__$1));
});
cljs.core.async.__GT_t82003 = (function __GT_t82003(f__$1,fn_handler__$1,meta82004){return (new cljs.core.async.t82003(f__$1,fn_handler__$1,meta82004));
});
}
return (new cljs.core.async.t82003(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__82007 = buff;if(G__82007)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__82007.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__82007.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__82007);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__82007);
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
{var val_82008 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_82008);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_82008);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8216__auto__ = ret;if(cljs.core.truth_(and__8216__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8216__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9056__auto___82009 = n;var x_82010 = 0;while(true){
if((x_82010 < n__9056__auto___82009))
{(a[x_82010] = 0);
{
var G__82011 = (x_82010 + 1);
x_82010 = G__82011;
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
var G__82012 = (i + 1);
i = G__82012;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t82016 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82016 = (function (flag,alt_flag,meta82017){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta82017 = meta82017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82016.cljs$lang$type = true;
cljs.core.async.t82016.cljs$lang$ctorStr = "cljs.core.async/t82016";
cljs.core.async.t82016.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t82016");
});
cljs.core.async.t82016.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t82016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t82016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t82016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82018){var self__ = this;
var _82018__$1 = this;return self__.meta82017;
});
cljs.core.async.t82016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82018,meta82017__$1){var self__ = this;
var _82018__$1 = this;return (new cljs.core.async.t82016(self__.flag,self__.alt_flag,meta82017__$1));
});
cljs.core.async.__GT_t82016 = (function __GT_t82016(flag__$1,alt_flag__$1,meta82017){return (new cljs.core.async.t82016(flag__$1,alt_flag__$1,meta82017));
});
}
return (new cljs.core.async.t82016(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t82022 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82022 = (function (cb,flag,alt_handler,meta82023){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta82023 = meta82023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82022.cljs$lang$type = true;
cljs.core.async.t82022.cljs$lang$ctorStr = "cljs.core.async/t82022";
cljs.core.async.t82022.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t82022");
});
cljs.core.async.t82022.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t82022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t82022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t82022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82024){var self__ = this;
var _82024__$1 = this;return self__.meta82023;
});
cljs.core.async.t82022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82024,meta82023__$1){var self__ = this;
var _82024__$1 = this;return (new cljs.core.async.t82022(self__.cb,self__.flag,self__.alt_handler,meta82023__$1));
});
cljs.core.async.__GT_t82022 = (function __GT_t82022(cb__$1,flag__$1,alt_handler__$1,meta82023){return (new cljs.core.async.t82022(cb__$1,flag__$1,alt_handler__$1,meta82023));
});
}
return (new cljs.core.async.t82022(cb,flag,alt_handler,null));
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
return (function (p1__82025_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__82025_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8228__auto__ = wport;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__82026 = (i + 1);
i = G__82026;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8228__auto__ = ret;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8216__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8216__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8216__auto__;
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
var alts_BANG___delegate = function (ports,p__82027){var map__82029 = p__82027;var map__82029__$1 = ((cljs.core.seq_QMARK_.call(null,map__82029))?cljs.core.apply.call(null,cljs.core.hash_map,map__82029):map__82029);var opts = map__82029__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__82027 = null;if (arguments.length > 1) {
  p__82027 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__82027);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__82030){
var ports = cljs.core.first(arglist__82030);
var p__82027 = cljs.core.rest(arglist__82030);
return alts_BANG___delegate(ports,p__82027);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t82038 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82038 = (function (ch,f,map_LT_,meta82039){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta82039 = meta82039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82038.cljs$lang$type = true;
cljs.core.async.t82038.cljs$lang$ctorStr = "cljs.core.async/t82038";
cljs.core.async.t82038.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t82038");
});
cljs.core.async.t82038.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t82038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t82038.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t82038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t82041 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82041 = (function (fn1,_,meta82039,ch,f,map_LT_,meta82042){
this.fn1 = fn1;
this._ = _;
this.meta82039 = meta82039;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta82042 = meta82042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82041.cljs$lang$type = true;
cljs.core.async.t82041.cljs$lang$ctorStr = "cljs.core.async/t82041";
cljs.core.async.t82041.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t82041");
});
cljs.core.async.t82041.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t82041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t82041.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t82041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__82031_SHARP_){return f1.call(null,(((p1__82031_SHARP_ == null))?null:self__.f.call(null,p1__82031_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t82041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82043){var self__ = this;
var _82043__$1 = this;return self__.meta82042;
});
cljs.core.async.t82041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82043,meta82042__$1){var self__ = this;
var _82043__$1 = this;return (new cljs.core.async.t82041(self__.fn1,self__._,self__.meta82039,self__.ch,self__.f,self__.map_LT_,meta82042__$1));
});
cljs.core.async.__GT_t82041 = (function __GT_t82041(fn1__$1,___$2,meta82039__$1,ch__$2,f__$2,map_LT___$2,meta82042){return (new cljs.core.async.t82041(fn1__$1,___$2,meta82039__$1,ch__$2,f__$2,map_LT___$2,meta82042));
});
}
return (new cljs.core.async.t82041(fn1,___$1,self__.meta82039,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8216__auto__ = ret;if(cljs.core.truth_(and__8216__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8216__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t82038.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t82038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t82038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82040){var self__ = this;
var _82040__$1 = this;return self__.meta82039;
});
cljs.core.async.t82038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82040,meta82039__$1){var self__ = this;
var _82040__$1 = this;return (new cljs.core.async.t82038(self__.ch,self__.f,self__.map_LT_,meta82039__$1));
});
cljs.core.async.__GT_t82038 = (function __GT_t82038(ch__$1,f__$1,map_LT___$1,meta82039){return (new cljs.core.async.t82038(ch__$1,f__$1,map_LT___$1,meta82039));
});
}
return (new cljs.core.async.t82038(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t82047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82047 = (function (ch,f,map_GT_,meta82048){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta82048 = meta82048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82047.cljs$lang$type = true;
cljs.core.async.t82047.cljs$lang$ctorStr = "cljs.core.async/t82047";
cljs.core.async.t82047.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t82047");
});
cljs.core.async.t82047.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t82047.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t82047.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t82047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t82047.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t82047.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t82047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82049){var self__ = this;
var _82049__$1 = this;return self__.meta82048;
});
cljs.core.async.t82047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82049,meta82048__$1){var self__ = this;
var _82049__$1 = this;return (new cljs.core.async.t82047(self__.ch,self__.f,self__.map_GT_,meta82048__$1));
});
cljs.core.async.__GT_t82047 = (function __GT_t82047(ch__$1,f__$1,map_GT___$1,meta82048){return (new cljs.core.async.t82047(ch__$1,f__$1,map_GT___$1,meta82048));
});
}
return (new cljs.core.async.t82047(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t82053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82053 = (function (ch,p,filter_GT_,meta82054){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta82054 = meta82054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82053.cljs$lang$type = true;
cljs.core.async.t82053.cljs$lang$ctorStr = "cljs.core.async/t82053";
cljs.core.async.t82053.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t82053");
});
cljs.core.async.t82053.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t82053.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t82053.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t82053.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t82053.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t82053.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t82053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82055){var self__ = this;
var _82055__$1 = this;return self__.meta82054;
});
cljs.core.async.t82053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82055,meta82054__$1){var self__ = this;
var _82055__$1 = this;return (new cljs.core.async.t82053(self__.ch,self__.p,self__.filter_GT_,meta82054__$1));
});
cljs.core.async.__GT_t82053 = (function __GT_t82053(ch__$1,p__$1,filter_GT___$1,meta82054){return (new cljs.core.async.t82053(ch__$1,p__$1,filter_GT___$1,meta82054));
});
}
return (new cljs.core.async.t82053(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___82138 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_82117){var state_val_82118 = (state_82117[1]);if((state_val_82118 === 1))
{var state_82117__$1 = state_82117;var statearr_82119_82139 = state_82117__$1;(statearr_82119_82139[2] = null);
(statearr_82119_82139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82118 === 2))
{var state_82117__$1 = state_82117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82117__$1,4,ch);
} else
{if((state_val_82118 === 3))
{var inst_82115 = (state_82117[2]);var state_82117__$1 = state_82117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82117__$1,inst_82115);
} else
{if((state_val_82118 === 4))
{var inst_82099 = (state_82117[7]);var inst_82099__$1 = (state_82117[2]);var inst_82100 = (inst_82099__$1 == null);var state_82117__$1 = (function (){var statearr_82120 = state_82117;(statearr_82120[7] = inst_82099__$1);
return statearr_82120;
})();if(cljs.core.truth_(inst_82100))
{var statearr_82121_82140 = state_82117__$1;(statearr_82121_82140[1] = 5);
} else
{var statearr_82122_82141 = state_82117__$1;(statearr_82122_82141[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82118 === 5))
{var inst_82102 = cljs.core.async.close_BANG_.call(null,out);var state_82117__$1 = state_82117;var statearr_82123_82142 = state_82117__$1;(statearr_82123_82142[2] = inst_82102);
(statearr_82123_82142[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82118 === 6))
{var inst_82099 = (state_82117[7]);var inst_82104 = p.call(null,inst_82099);var state_82117__$1 = state_82117;if(cljs.core.truth_(inst_82104))
{var statearr_82124_82143 = state_82117__$1;(statearr_82124_82143[1] = 8);
} else
{var statearr_82125_82144 = state_82117__$1;(statearr_82125_82144[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82118 === 7))
{var inst_82113 = (state_82117[2]);var state_82117__$1 = state_82117;var statearr_82126_82145 = state_82117__$1;(statearr_82126_82145[2] = inst_82113);
(statearr_82126_82145[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82118 === 8))
{var inst_82099 = (state_82117[7]);var state_82117__$1 = state_82117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82117__$1,11,out,inst_82099);
} else
{if((state_val_82118 === 9))
{var state_82117__$1 = state_82117;var statearr_82127_82146 = state_82117__$1;(statearr_82127_82146[2] = null);
(statearr_82127_82146[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82118 === 10))
{var inst_82110 = (state_82117[2]);var state_82117__$1 = (function (){var statearr_82128 = state_82117;(statearr_82128[8] = inst_82110);
return statearr_82128;
})();var statearr_82129_82147 = state_82117__$1;(statearr_82129_82147[2] = null);
(statearr_82129_82147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82118 === 11))
{var inst_82107 = (state_82117[2]);var state_82117__$1 = state_82117;var statearr_82130_82148 = state_82117__$1;(statearr_82130_82148[2] = inst_82107);
(statearr_82130_82148[1] = 10);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_82134 = [null,null,null,null,null,null,null,null,null];(statearr_82134[0] = state_machine__12116__auto__);
(statearr_82134[1] = 1);
return statearr_82134;
});
var state_machine__12116__auto____1 = (function (state_82117){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_82117);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e82135){if((e82135 instanceof Object))
{var ex__12119__auto__ = e82135;var statearr_82136_82149 = state_82117;(statearr_82136_82149[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82117);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82150 = state_82117;
state_82117 = G__82150;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_82117){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_82117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_82137 = f__12186__auto__.call(null);(statearr_82137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___82138);
return statearr_82137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12185__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_82302){var state_val_82303 = (state_82302[1]);if((state_val_82303 === 1))
{var state_82302__$1 = state_82302;var statearr_82304_82341 = state_82302__$1;(statearr_82304_82341[2] = null);
(statearr_82304_82341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 2))
{var state_82302__$1 = state_82302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82302__$1,4,in$);
} else
{if((state_val_82303 === 3))
{var inst_82300 = (state_82302[2]);var state_82302__$1 = state_82302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82302__$1,inst_82300);
} else
{if((state_val_82303 === 4))
{var inst_82248 = (state_82302[7]);var inst_82248__$1 = (state_82302[2]);var inst_82249 = (inst_82248__$1 == null);var state_82302__$1 = (function (){var statearr_82305 = state_82302;(statearr_82305[7] = inst_82248__$1);
return statearr_82305;
})();if(cljs.core.truth_(inst_82249))
{var statearr_82306_82342 = state_82302__$1;(statearr_82306_82342[1] = 5);
} else
{var statearr_82307_82343 = state_82302__$1;(statearr_82307_82343[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 5))
{var inst_82251 = cljs.core.async.close_BANG_.call(null,out);var state_82302__$1 = state_82302;var statearr_82308_82344 = state_82302__$1;(statearr_82308_82344[2] = inst_82251);
(statearr_82308_82344[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 6))
{var inst_82248 = (state_82302[7]);var inst_82253 = f.call(null,inst_82248);var inst_82258 = cljs.core.seq.call(null,inst_82253);var inst_82259 = inst_82258;var inst_82260 = null;var inst_82261 = 0;var inst_82262 = 0;var state_82302__$1 = (function (){var statearr_82309 = state_82302;(statearr_82309[8] = inst_82262);
(statearr_82309[9] = inst_82261);
(statearr_82309[10] = inst_82260);
(statearr_82309[11] = inst_82259);
return statearr_82309;
})();var statearr_82310_82345 = state_82302__$1;(statearr_82310_82345[2] = null);
(statearr_82310_82345[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 7))
{var inst_82298 = (state_82302[2]);var state_82302__$1 = state_82302;var statearr_82311_82346 = state_82302__$1;(statearr_82311_82346[2] = inst_82298);
(statearr_82311_82346[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 8))
{var inst_82262 = (state_82302[8]);var inst_82261 = (state_82302[9]);var inst_82264 = (inst_82262 < inst_82261);var inst_82265 = inst_82264;var state_82302__$1 = state_82302;if(cljs.core.truth_(inst_82265))
{var statearr_82312_82347 = state_82302__$1;(statearr_82312_82347[1] = 10);
} else
{var statearr_82313_82348 = state_82302__$1;(statearr_82313_82348[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 9))
{var inst_82295 = (state_82302[2]);var state_82302__$1 = (function (){var statearr_82314 = state_82302;(statearr_82314[12] = inst_82295);
return statearr_82314;
})();var statearr_82315_82349 = state_82302__$1;(statearr_82315_82349[2] = null);
(statearr_82315_82349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 10))
{var inst_82262 = (state_82302[8]);var inst_82260 = (state_82302[10]);var inst_82267 = cljs.core._nth.call(null,inst_82260,inst_82262);var state_82302__$1 = state_82302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82302__$1,13,out,inst_82267);
} else
{if((state_val_82303 === 11))
{var inst_82273 = (state_82302[13]);var inst_82259 = (state_82302[11]);var inst_82273__$1 = cljs.core.seq.call(null,inst_82259);var state_82302__$1 = (function (){var statearr_82319 = state_82302;(statearr_82319[13] = inst_82273__$1);
return statearr_82319;
})();if(inst_82273__$1)
{var statearr_82320_82350 = state_82302__$1;(statearr_82320_82350[1] = 14);
} else
{var statearr_82321_82351 = state_82302__$1;(statearr_82321_82351[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 12))
{var inst_82293 = (state_82302[2]);var state_82302__$1 = state_82302;var statearr_82322_82352 = state_82302__$1;(statearr_82322_82352[2] = inst_82293);
(statearr_82322_82352[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 13))
{var inst_82262 = (state_82302[8]);var inst_82261 = (state_82302[9]);var inst_82260 = (state_82302[10]);var inst_82259 = (state_82302[11]);var inst_82269 = (state_82302[2]);var inst_82270 = (inst_82262 + 1);var tmp82316 = inst_82261;var tmp82317 = inst_82260;var tmp82318 = inst_82259;var inst_82259__$1 = tmp82318;var inst_82260__$1 = tmp82317;var inst_82261__$1 = tmp82316;var inst_82262__$1 = inst_82270;var state_82302__$1 = (function (){var statearr_82323 = state_82302;(statearr_82323[8] = inst_82262__$1);
(statearr_82323[9] = inst_82261__$1);
(statearr_82323[10] = inst_82260__$1);
(statearr_82323[11] = inst_82259__$1);
(statearr_82323[14] = inst_82269);
return statearr_82323;
})();var statearr_82324_82353 = state_82302__$1;(statearr_82324_82353[2] = null);
(statearr_82324_82353[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 14))
{var inst_82273 = (state_82302[13]);var inst_82275 = cljs.core.chunked_seq_QMARK_.call(null,inst_82273);var state_82302__$1 = state_82302;if(inst_82275)
{var statearr_82325_82354 = state_82302__$1;(statearr_82325_82354[1] = 17);
} else
{var statearr_82326_82355 = state_82302__$1;(statearr_82326_82355[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 15))
{var state_82302__$1 = state_82302;var statearr_82327_82356 = state_82302__$1;(statearr_82327_82356[2] = null);
(statearr_82327_82356[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 16))
{var inst_82291 = (state_82302[2]);var state_82302__$1 = state_82302;var statearr_82328_82357 = state_82302__$1;(statearr_82328_82357[2] = inst_82291);
(statearr_82328_82357[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 17))
{var inst_82273 = (state_82302[13]);var inst_82277 = cljs.core.chunk_first.call(null,inst_82273);var inst_82278 = cljs.core.chunk_rest.call(null,inst_82273);var inst_82279 = cljs.core.count.call(null,inst_82277);var inst_82259 = inst_82278;var inst_82260 = inst_82277;var inst_82261 = inst_82279;var inst_82262 = 0;var state_82302__$1 = (function (){var statearr_82329 = state_82302;(statearr_82329[8] = inst_82262);
(statearr_82329[9] = inst_82261);
(statearr_82329[10] = inst_82260);
(statearr_82329[11] = inst_82259);
return statearr_82329;
})();var statearr_82330_82358 = state_82302__$1;(statearr_82330_82358[2] = null);
(statearr_82330_82358[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 18))
{var inst_82273 = (state_82302[13]);var inst_82282 = cljs.core.first.call(null,inst_82273);var state_82302__$1 = state_82302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82302__$1,20,out,inst_82282);
} else
{if((state_val_82303 === 19))
{var inst_82288 = (state_82302[2]);var state_82302__$1 = state_82302;var statearr_82331_82359 = state_82302__$1;(statearr_82331_82359[2] = inst_82288);
(statearr_82331_82359[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82303 === 20))
{var inst_82273 = (state_82302[13]);var inst_82284 = (state_82302[2]);var inst_82285 = cljs.core.next.call(null,inst_82273);var inst_82259 = inst_82285;var inst_82260 = null;var inst_82261 = 0;var inst_82262 = 0;var state_82302__$1 = (function (){var statearr_82332 = state_82302;(statearr_82332[8] = inst_82262);
(statearr_82332[9] = inst_82261);
(statearr_82332[10] = inst_82260);
(statearr_82332[11] = inst_82259);
(statearr_82332[15] = inst_82284);
return statearr_82332;
})();var statearr_82333_82360 = state_82302__$1;(statearr_82333_82360[2] = null);
(statearr_82333_82360[1] = 8);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_82337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_82337[0] = state_machine__12116__auto__);
(statearr_82337[1] = 1);
return statearr_82337;
});
var state_machine__12116__auto____1 = (function (state_82302){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_82302);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e82338){if((e82338 instanceof Object))
{var ex__12119__auto__ = e82338;var statearr_82339_82361 = state_82302;(statearr_82339_82361[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82302);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82362 = state_82302;
state_82302 = G__82362;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_82302){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_82302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_82340 = f__12186__auto__.call(null);(statearr_82340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto__);
return statearr_82340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
}));
return c__12185__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12185__auto___82443 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_82422){var state_val_82423 = (state_82422[1]);if((state_val_82423 === 1))
{var state_82422__$1 = state_82422;var statearr_82424_82444 = state_82422__$1;(statearr_82424_82444[2] = null);
(statearr_82424_82444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82423 === 2))
{var state_82422__$1 = state_82422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82422__$1,4,from);
} else
{if((state_val_82423 === 3))
{var inst_82420 = (state_82422[2]);var state_82422__$1 = state_82422;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82422__$1,inst_82420);
} else
{if((state_val_82423 === 4))
{var inst_82405 = (state_82422[7]);var inst_82405__$1 = (state_82422[2]);var inst_82406 = (inst_82405__$1 == null);var state_82422__$1 = (function (){var statearr_82425 = state_82422;(statearr_82425[7] = inst_82405__$1);
return statearr_82425;
})();if(cljs.core.truth_(inst_82406))
{var statearr_82426_82445 = state_82422__$1;(statearr_82426_82445[1] = 5);
} else
{var statearr_82427_82446 = state_82422__$1;(statearr_82427_82446[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82423 === 5))
{var state_82422__$1 = state_82422;if(cljs.core.truth_(close_QMARK_))
{var statearr_82428_82447 = state_82422__$1;(statearr_82428_82447[1] = 8);
} else
{var statearr_82429_82448 = state_82422__$1;(statearr_82429_82448[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82423 === 6))
{var inst_82405 = (state_82422[7]);var state_82422__$1 = state_82422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82422__$1,11,to,inst_82405);
} else
{if((state_val_82423 === 7))
{var inst_82418 = (state_82422[2]);var state_82422__$1 = state_82422;var statearr_82430_82449 = state_82422__$1;(statearr_82430_82449[2] = inst_82418);
(statearr_82430_82449[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82423 === 8))
{var inst_82409 = cljs.core.async.close_BANG_.call(null,to);var state_82422__$1 = state_82422;var statearr_82431_82450 = state_82422__$1;(statearr_82431_82450[2] = inst_82409);
(statearr_82431_82450[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82423 === 9))
{var state_82422__$1 = state_82422;var statearr_82432_82451 = state_82422__$1;(statearr_82432_82451[2] = null);
(statearr_82432_82451[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82423 === 10))
{var inst_82412 = (state_82422[2]);var state_82422__$1 = state_82422;var statearr_82433_82452 = state_82422__$1;(statearr_82433_82452[2] = inst_82412);
(statearr_82433_82452[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82423 === 11))
{var inst_82415 = (state_82422[2]);var state_82422__$1 = (function (){var statearr_82434 = state_82422;(statearr_82434[8] = inst_82415);
return statearr_82434;
})();var statearr_82435_82453 = state_82422__$1;(statearr_82435_82453[2] = null);
(statearr_82435_82453[1] = 2);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_82439 = [null,null,null,null,null,null,null,null,null];(statearr_82439[0] = state_machine__12116__auto__);
(statearr_82439[1] = 1);
return statearr_82439;
});
var state_machine__12116__auto____1 = (function (state_82422){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_82422);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e82440){if((e82440 instanceof Object))
{var ex__12119__auto__ = e82440;var statearr_82441_82454 = state_82422;(statearr_82441_82454[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82422);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82455 = state_82422;
state_82422 = G__82455;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_82422){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_82422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_82442 = f__12186__auto__.call(null);(statearr_82442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___82443);
return statearr_82442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12185__auto___82542 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_82520){var state_val_82521 = (state_82520[1]);if((state_val_82521 === 1))
{var state_82520__$1 = state_82520;var statearr_82522_82543 = state_82520__$1;(statearr_82522_82543[2] = null);
(statearr_82522_82543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82521 === 2))
{var state_82520__$1 = state_82520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82520__$1,4,ch);
} else
{if((state_val_82521 === 3))
{var inst_82518 = (state_82520[2]);var state_82520__$1 = state_82520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82520__$1,inst_82518);
} else
{if((state_val_82521 === 4))
{var inst_82501 = (state_82520[7]);var inst_82501__$1 = (state_82520[2]);var inst_82502 = (inst_82501__$1 == null);var state_82520__$1 = (function (){var statearr_82523 = state_82520;(statearr_82523[7] = inst_82501__$1);
return statearr_82523;
})();if(cljs.core.truth_(inst_82502))
{var statearr_82524_82544 = state_82520__$1;(statearr_82524_82544[1] = 5);
} else
{var statearr_82525_82545 = state_82520__$1;(statearr_82525_82545[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82521 === 5))
{var inst_82504 = cljs.core.async.close_BANG_.call(null,tc);var inst_82505 = cljs.core.async.close_BANG_.call(null,fc);var state_82520__$1 = (function (){var statearr_82526 = state_82520;(statearr_82526[8] = inst_82504);
return statearr_82526;
})();var statearr_82527_82546 = state_82520__$1;(statearr_82527_82546[2] = inst_82505);
(statearr_82527_82546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82521 === 6))
{var inst_82501 = (state_82520[7]);var inst_82507 = p.call(null,inst_82501);var state_82520__$1 = state_82520;if(cljs.core.truth_(inst_82507))
{var statearr_82528_82547 = state_82520__$1;(statearr_82528_82547[1] = 9);
} else
{var statearr_82529_82548 = state_82520__$1;(statearr_82529_82548[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82521 === 7))
{var inst_82516 = (state_82520[2]);var state_82520__$1 = state_82520;var statearr_82530_82549 = state_82520__$1;(statearr_82530_82549[2] = inst_82516);
(statearr_82530_82549[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82521 === 8))
{var inst_82513 = (state_82520[2]);var state_82520__$1 = (function (){var statearr_82531 = state_82520;(statearr_82531[9] = inst_82513);
return statearr_82531;
})();var statearr_82532_82550 = state_82520__$1;(statearr_82532_82550[2] = null);
(statearr_82532_82550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82521 === 9))
{var state_82520__$1 = state_82520;var statearr_82533_82551 = state_82520__$1;(statearr_82533_82551[2] = tc);
(statearr_82533_82551[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82521 === 10))
{var state_82520__$1 = state_82520;var statearr_82534_82552 = state_82520__$1;(statearr_82534_82552[2] = fc);
(statearr_82534_82552[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82521 === 11))
{var inst_82501 = (state_82520[7]);var inst_82511 = (state_82520[2]);var state_82520__$1 = state_82520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82520__$1,8,inst_82511,inst_82501);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_82538 = [null,null,null,null,null,null,null,null,null,null];(statearr_82538[0] = state_machine__12116__auto__);
(statearr_82538[1] = 1);
return statearr_82538;
});
var state_machine__12116__auto____1 = (function (state_82520){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_82520);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e82539){if((e82539 instanceof Object))
{var ex__12119__auto__ = e82539;var statearr_82540_82553 = state_82520;(statearr_82540_82553[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82554 = state_82520;
state_82520 = G__82554;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_82520){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_82520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_82541 = f__12186__auto__.call(null);(statearr_82541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___82542);
return statearr_82541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12185__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_82601){var state_val_82602 = (state_82601[1]);if((state_val_82602 === 7))
{var inst_82597 = (state_82601[2]);var state_82601__$1 = state_82601;var statearr_82603_82619 = state_82601__$1;(statearr_82603_82619[2] = inst_82597);
(statearr_82603_82619[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82602 === 6))
{var inst_82590 = (state_82601[7]);var inst_82587 = (state_82601[8]);var inst_82594 = f.call(null,inst_82587,inst_82590);var inst_82587__$1 = inst_82594;var state_82601__$1 = (function (){var statearr_82604 = state_82601;(statearr_82604[8] = inst_82587__$1);
return statearr_82604;
})();var statearr_82605_82620 = state_82601__$1;(statearr_82605_82620[2] = null);
(statearr_82605_82620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82602 === 5))
{var inst_82587 = (state_82601[8]);var state_82601__$1 = state_82601;var statearr_82606_82621 = state_82601__$1;(statearr_82606_82621[2] = inst_82587);
(statearr_82606_82621[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82602 === 4))
{var inst_82590 = (state_82601[7]);var inst_82590__$1 = (state_82601[2]);var inst_82591 = (inst_82590__$1 == null);var state_82601__$1 = (function (){var statearr_82607 = state_82601;(statearr_82607[7] = inst_82590__$1);
return statearr_82607;
})();if(cljs.core.truth_(inst_82591))
{var statearr_82608_82622 = state_82601__$1;(statearr_82608_82622[1] = 5);
} else
{var statearr_82609_82623 = state_82601__$1;(statearr_82609_82623[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82602 === 3))
{var inst_82599 = (state_82601[2]);var state_82601__$1 = state_82601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82601__$1,inst_82599);
} else
{if((state_val_82602 === 2))
{var state_82601__$1 = state_82601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82601__$1,4,ch);
} else
{if((state_val_82602 === 1))
{var inst_82587 = init;var state_82601__$1 = (function (){var statearr_82610 = state_82601;(statearr_82610[8] = inst_82587);
return statearr_82610;
})();var statearr_82611_82624 = state_82601__$1;(statearr_82611_82624[2] = null);
(statearr_82611_82624[1] = 2);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_82615 = [null,null,null,null,null,null,null,null,null];(statearr_82615[0] = state_machine__12116__auto__);
(statearr_82615[1] = 1);
return statearr_82615;
});
var state_machine__12116__auto____1 = (function (state_82601){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_82601);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e82616){if((e82616 instanceof Object))
{var ex__12119__auto__ = e82616;var statearr_82617_82625 = state_82601;(statearr_82617_82625[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82626 = state_82601;
state_82601 = G__82626;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_82601){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_82601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_82618 = f__12186__auto__.call(null);(statearr_82618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto__);
return statearr_82618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
}));
return c__12185__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12185__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_82688){var state_val_82689 = (state_82688[1]);if((state_val_82689 === 1))
{var inst_82668 = cljs.core.seq.call(null,coll);var inst_82669 = inst_82668;var state_82688__$1 = (function (){var statearr_82690 = state_82688;(statearr_82690[7] = inst_82669);
return statearr_82690;
})();var statearr_82691_82709 = state_82688__$1;(statearr_82691_82709[2] = null);
(statearr_82691_82709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82689 === 2))
{var inst_82669 = (state_82688[7]);var state_82688__$1 = state_82688;if(cljs.core.truth_(inst_82669))
{var statearr_82692_82710 = state_82688__$1;(statearr_82692_82710[1] = 4);
} else
{var statearr_82693_82711 = state_82688__$1;(statearr_82693_82711[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82689 === 3))
{var inst_82686 = (state_82688[2]);var state_82688__$1 = state_82688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82688__$1,inst_82686);
} else
{if((state_val_82689 === 4))
{var inst_82669 = (state_82688[7]);var inst_82672 = cljs.core.first.call(null,inst_82669);var state_82688__$1 = state_82688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82688__$1,7,ch,inst_82672);
} else
{if((state_val_82689 === 5))
{var state_82688__$1 = state_82688;if(cljs.core.truth_(close_QMARK_))
{var statearr_82694_82712 = state_82688__$1;(statearr_82694_82712[1] = 8);
} else
{var statearr_82695_82713 = state_82688__$1;(statearr_82695_82713[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82689 === 6))
{var inst_82684 = (state_82688[2]);var state_82688__$1 = state_82688;var statearr_82696_82714 = state_82688__$1;(statearr_82696_82714[2] = inst_82684);
(statearr_82696_82714[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82689 === 7))
{var inst_82669 = (state_82688[7]);var inst_82674 = (state_82688[2]);var inst_82675 = cljs.core.next.call(null,inst_82669);var inst_82669__$1 = inst_82675;var state_82688__$1 = (function (){var statearr_82697 = state_82688;(statearr_82697[8] = inst_82674);
(statearr_82697[7] = inst_82669__$1);
return statearr_82697;
})();var statearr_82698_82715 = state_82688__$1;(statearr_82698_82715[2] = null);
(statearr_82698_82715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82689 === 8))
{var inst_82679 = cljs.core.async.close_BANG_.call(null,ch);var state_82688__$1 = state_82688;var statearr_82699_82716 = state_82688__$1;(statearr_82699_82716[2] = inst_82679);
(statearr_82699_82716[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82689 === 9))
{var state_82688__$1 = state_82688;var statearr_82700_82717 = state_82688__$1;(statearr_82700_82717[2] = null);
(statearr_82700_82717[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82689 === 10))
{var inst_82682 = (state_82688[2]);var state_82688__$1 = state_82688;var statearr_82701_82718 = state_82688__$1;(statearr_82701_82718[2] = inst_82682);
(statearr_82701_82718[1] = 6);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_82705 = [null,null,null,null,null,null,null,null,null];(statearr_82705[0] = state_machine__12116__auto__);
(statearr_82705[1] = 1);
return statearr_82705;
});
var state_machine__12116__auto____1 = (function (state_82688){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_82688);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e82706){if((e82706 instanceof Object))
{var ex__12119__auto__ = e82706;var statearr_82707_82719 = state_82688;(statearr_82707_82719[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82688);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82720 = state_82688;
state_82688 = G__82720;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_82688){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_82688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_82708 = f__12186__auto__.call(null);(statearr_82708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto__);
return statearr_82708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
}));
return c__12185__auto__;
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
cljs.core.async.Mux = (function (){var obj82722 = {};return obj82722;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8216__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj82724 = {};return obj82724;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8216__auto__ = m;if(and__8216__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8216__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8836__auto__ = (((m == null))?null:m);return (function (){var or__8228__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8216__auto__ = m;if(and__8216__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8216__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8836__auto__ = (((m == null))?null:m);return (function (){var or__8228__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8216__auto__ = m;if(and__8216__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8216__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8836__auto__ = (((m == null))?null:m);return (function (){var or__8228__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t82948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82948 = (function (cs,ch,mult,meta82949){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta82949 = meta82949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82948.cljs$lang$type = true;
cljs.core.async.t82948.cljs$lang$ctorStr = "cljs.core.async/t82948";
cljs.core.async.t82948.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t82948");
});})(cs))
;
cljs.core.async.t82948.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t82948.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t82948.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t82948.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t82948.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t82948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t82948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_82950){var self__ = this;
var _82950__$1 = this;return self__.meta82949;
});})(cs))
;
cljs.core.async.t82948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_82950,meta82949__$1){var self__ = this;
var _82950__$1 = this;return (new cljs.core.async.t82948(self__.cs,self__.ch,self__.mult,meta82949__$1));
});})(cs))
;
cljs.core.async.__GT_t82948 = ((function (cs){
return (function __GT_t82948(cs__$1,ch__$1,mult__$1,meta82949){return (new cljs.core.async.t82948(cs__$1,ch__$1,mult__$1,meta82949));
});})(cs))
;
}
return (new cljs.core.async.t82948(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12185__auto___83171 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_83085){var state_val_83086 = (state_83085[1]);if((state_val_83086 === 32))
{var inst_82953 = (state_83085[7]);var inst_83029 = (state_83085[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_83085,31,Object,null,30);var inst_83036 = cljs.core.async.put_BANG_.call(null,inst_83029,inst_82953,done);var state_83085__$1 = state_83085;var statearr_83087_83172 = state_83085__$1;(statearr_83087_83172[2] = inst_83036);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83085__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 1))
{var state_83085__$1 = state_83085;var statearr_83088_83173 = state_83085__$1;(statearr_83088_83173[2] = null);
(statearr_83088_83173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 33))
{var inst_83042 = (state_83085[9]);var inst_83044 = cljs.core.chunked_seq_QMARK_.call(null,inst_83042);var state_83085__$1 = state_83085;if(inst_83044)
{var statearr_83089_83174 = state_83085__$1;(statearr_83089_83174[1] = 36);
} else
{var statearr_83090_83175 = state_83085__$1;(statearr_83090_83175[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 2))
{var state_83085__$1 = state_83085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83085__$1,4,ch);
} else
{if((state_val_83086 === 34))
{var state_83085__$1 = state_83085;var statearr_83091_83176 = state_83085__$1;(statearr_83091_83176[2] = null);
(statearr_83091_83176[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 3))
{var inst_83083 = (state_83085[2]);var state_83085__$1 = state_83085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83085__$1,inst_83083);
} else
{if((state_val_83086 === 35))
{var inst_83067 = (state_83085[2]);var state_83085__$1 = state_83085;var statearr_83092_83177 = state_83085__$1;(statearr_83092_83177[2] = inst_83067);
(statearr_83092_83177[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 4))
{var inst_82953 = (state_83085[7]);var inst_82953__$1 = (state_83085[2]);var inst_82954 = (inst_82953__$1 == null);var state_83085__$1 = (function (){var statearr_83093 = state_83085;(statearr_83093[7] = inst_82953__$1);
return statearr_83093;
})();if(cljs.core.truth_(inst_82954))
{var statearr_83094_83178 = state_83085__$1;(statearr_83094_83178[1] = 5);
} else
{var statearr_83095_83179 = state_83085__$1;(statearr_83095_83179[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 36))
{var inst_83042 = (state_83085[9]);var inst_83046 = cljs.core.chunk_first.call(null,inst_83042);var inst_83047 = cljs.core.chunk_rest.call(null,inst_83042);var inst_83048 = cljs.core.count.call(null,inst_83046);var inst_83021 = inst_83047;var inst_83022 = inst_83046;var inst_83023 = inst_83048;var inst_83024 = 0;var state_83085__$1 = (function (){var statearr_83096 = state_83085;(statearr_83096[10] = inst_83022);
(statearr_83096[11] = inst_83023);
(statearr_83096[12] = inst_83024);
(statearr_83096[13] = inst_83021);
return statearr_83096;
})();var statearr_83097_83180 = state_83085__$1;(statearr_83097_83180[2] = null);
(statearr_83097_83180[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 5))
{var inst_82960 = cljs.core.deref.call(null,cs);var inst_82961 = cljs.core.seq.call(null,inst_82960);var inst_82962 = inst_82961;var inst_82963 = null;var inst_82964 = 0;var inst_82965 = 0;var state_83085__$1 = (function (){var statearr_83098 = state_83085;(statearr_83098[14] = inst_82963);
(statearr_83098[15] = inst_82962);
(statearr_83098[16] = inst_82964);
(statearr_83098[17] = inst_82965);
return statearr_83098;
})();var statearr_83099_83181 = state_83085__$1;(statearr_83099_83181[2] = null);
(statearr_83099_83181[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 37))
{var inst_83042 = (state_83085[9]);var inst_83051 = cljs.core.first.call(null,inst_83042);var state_83085__$1 = (function (){var statearr_83100 = state_83085;(statearr_83100[18] = inst_83051);
return statearr_83100;
})();var statearr_83101_83182 = state_83085__$1;(statearr_83101_83182[2] = null);
(statearr_83101_83182[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 6))
{var inst_83013 = (state_83085[19]);var inst_83012 = cljs.core.deref.call(null,cs);var inst_83013__$1 = cljs.core.keys.call(null,inst_83012);var inst_83014 = cljs.core.count.call(null,inst_83013__$1);var inst_83015 = cljs.core.reset_BANG_.call(null,dctr,inst_83014);var inst_83020 = cljs.core.seq.call(null,inst_83013__$1);var inst_83021 = inst_83020;var inst_83022 = null;var inst_83023 = 0;var inst_83024 = 0;var state_83085__$1 = (function (){var statearr_83102 = state_83085;(statearr_83102[20] = inst_83015);
(statearr_83102[10] = inst_83022);
(statearr_83102[11] = inst_83023);
(statearr_83102[12] = inst_83024);
(statearr_83102[13] = inst_83021);
(statearr_83102[19] = inst_83013__$1);
return statearr_83102;
})();var statearr_83103_83183 = state_83085__$1;(statearr_83103_83183[2] = null);
(statearr_83103_83183[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 38))
{var inst_83064 = (state_83085[2]);var state_83085__$1 = state_83085;var statearr_83104_83184 = state_83085__$1;(statearr_83104_83184[2] = inst_83064);
(statearr_83104_83184[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 7))
{var inst_83081 = (state_83085[2]);var state_83085__$1 = state_83085;var statearr_83105_83185 = state_83085__$1;(statearr_83105_83185[2] = inst_83081);
(statearr_83105_83185[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 39))
{var inst_83042 = (state_83085[9]);var inst_83060 = (state_83085[2]);var inst_83061 = cljs.core.next.call(null,inst_83042);var inst_83021 = inst_83061;var inst_83022 = null;var inst_83023 = 0;var inst_83024 = 0;var state_83085__$1 = (function (){var statearr_83106 = state_83085;(statearr_83106[10] = inst_83022);
(statearr_83106[11] = inst_83023);
(statearr_83106[12] = inst_83024);
(statearr_83106[13] = inst_83021);
(statearr_83106[21] = inst_83060);
return statearr_83106;
})();var statearr_83107_83186 = state_83085__$1;(statearr_83107_83186[2] = null);
(statearr_83107_83186[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 8))
{var inst_82964 = (state_83085[16]);var inst_82965 = (state_83085[17]);var inst_82967 = (inst_82965 < inst_82964);var inst_82968 = inst_82967;var state_83085__$1 = state_83085;if(cljs.core.truth_(inst_82968))
{var statearr_83108_83187 = state_83085__$1;(statearr_83108_83187[1] = 10);
} else
{var statearr_83109_83188 = state_83085__$1;(statearr_83109_83188[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 40))
{var inst_83051 = (state_83085[18]);var inst_83052 = (state_83085[2]);var inst_83053 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_83054 = cljs.core.async.untap_STAR_.call(null,m,inst_83051);var state_83085__$1 = (function (){var statearr_83110 = state_83085;(statearr_83110[22] = inst_83053);
(statearr_83110[23] = inst_83052);
return statearr_83110;
})();var statearr_83111_83189 = state_83085__$1;(statearr_83111_83189[2] = inst_83054);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83085__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 9))
{var inst_83010 = (state_83085[2]);var state_83085__$1 = state_83085;var statearr_83112_83190 = state_83085__$1;(statearr_83112_83190[2] = inst_83010);
(statearr_83112_83190[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 41))
{var inst_82953 = (state_83085[7]);var inst_83051 = (state_83085[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_83085,40,Object,null,39);var inst_83058 = cljs.core.async.put_BANG_.call(null,inst_83051,inst_82953,done);var state_83085__$1 = state_83085;var statearr_83113_83191 = state_83085__$1;(statearr_83113_83191[2] = inst_83058);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83085__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 10))
{var inst_82963 = (state_83085[14]);var inst_82965 = (state_83085[17]);var inst_82971 = cljs.core._nth.call(null,inst_82963,inst_82965);var inst_82972 = cljs.core.nth.call(null,inst_82971,0,null);var inst_82973 = cljs.core.nth.call(null,inst_82971,1,null);var state_83085__$1 = (function (){var statearr_83114 = state_83085;(statearr_83114[24] = inst_82972);
return statearr_83114;
})();if(cljs.core.truth_(inst_82973))
{var statearr_83115_83192 = state_83085__$1;(statearr_83115_83192[1] = 13);
} else
{var statearr_83116_83193 = state_83085__$1;(statearr_83116_83193[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 42))
{var state_83085__$1 = state_83085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83085__$1,45,dchan);
} else
{if((state_val_83086 === 11))
{var inst_82962 = (state_83085[15]);var inst_82982 = (state_83085[25]);var inst_82982__$1 = cljs.core.seq.call(null,inst_82962);var state_83085__$1 = (function (){var statearr_83117 = state_83085;(statearr_83117[25] = inst_82982__$1);
return statearr_83117;
})();if(inst_82982__$1)
{var statearr_83118_83194 = state_83085__$1;(statearr_83118_83194[1] = 16);
} else
{var statearr_83119_83195 = state_83085__$1;(statearr_83119_83195[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 43))
{var state_83085__$1 = state_83085;var statearr_83120_83196 = state_83085__$1;(statearr_83120_83196[2] = null);
(statearr_83120_83196[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 12))
{var inst_83008 = (state_83085[2]);var state_83085__$1 = state_83085;var statearr_83121_83197 = state_83085__$1;(statearr_83121_83197[2] = inst_83008);
(statearr_83121_83197[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 44))
{var inst_83078 = (state_83085[2]);var state_83085__$1 = (function (){var statearr_83122 = state_83085;(statearr_83122[26] = inst_83078);
return statearr_83122;
})();var statearr_83123_83198 = state_83085__$1;(statearr_83123_83198[2] = null);
(statearr_83123_83198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 13))
{var inst_82972 = (state_83085[24]);var inst_82975 = cljs.core.async.close_BANG_.call(null,inst_82972);var state_83085__$1 = state_83085;var statearr_83124_83199 = state_83085__$1;(statearr_83124_83199[2] = inst_82975);
(statearr_83124_83199[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 45))
{var inst_83075 = (state_83085[2]);var state_83085__$1 = state_83085;var statearr_83128_83200 = state_83085__$1;(statearr_83128_83200[2] = inst_83075);
(statearr_83128_83200[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 14))
{var state_83085__$1 = state_83085;var statearr_83129_83201 = state_83085__$1;(statearr_83129_83201[2] = null);
(statearr_83129_83201[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 15))
{var inst_82963 = (state_83085[14]);var inst_82962 = (state_83085[15]);var inst_82964 = (state_83085[16]);var inst_82965 = (state_83085[17]);var inst_82978 = (state_83085[2]);var inst_82979 = (inst_82965 + 1);var tmp83125 = inst_82963;var tmp83126 = inst_82962;var tmp83127 = inst_82964;var inst_82962__$1 = tmp83126;var inst_82963__$1 = tmp83125;var inst_82964__$1 = tmp83127;var inst_82965__$1 = inst_82979;var state_83085__$1 = (function (){var statearr_83130 = state_83085;(statearr_83130[14] = inst_82963__$1);
(statearr_83130[15] = inst_82962__$1);
(statearr_83130[16] = inst_82964__$1);
(statearr_83130[17] = inst_82965__$1);
(statearr_83130[27] = inst_82978);
return statearr_83130;
})();var statearr_83131_83202 = state_83085__$1;(statearr_83131_83202[2] = null);
(statearr_83131_83202[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 16))
{var inst_82982 = (state_83085[25]);var inst_82984 = cljs.core.chunked_seq_QMARK_.call(null,inst_82982);var state_83085__$1 = state_83085;if(inst_82984)
{var statearr_83132_83203 = state_83085__$1;(statearr_83132_83203[1] = 19);
} else
{var statearr_83133_83204 = state_83085__$1;(statearr_83133_83204[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 17))
{var state_83085__$1 = state_83085;var statearr_83134_83205 = state_83085__$1;(statearr_83134_83205[2] = null);
(statearr_83134_83205[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 18))
{var inst_83006 = (state_83085[2]);var state_83085__$1 = state_83085;var statearr_83135_83206 = state_83085__$1;(statearr_83135_83206[2] = inst_83006);
(statearr_83135_83206[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 19))
{var inst_82982 = (state_83085[25]);var inst_82986 = cljs.core.chunk_first.call(null,inst_82982);var inst_82987 = cljs.core.chunk_rest.call(null,inst_82982);var inst_82988 = cljs.core.count.call(null,inst_82986);var inst_82962 = inst_82987;var inst_82963 = inst_82986;var inst_82964 = inst_82988;var inst_82965 = 0;var state_83085__$1 = (function (){var statearr_83136 = state_83085;(statearr_83136[14] = inst_82963);
(statearr_83136[15] = inst_82962);
(statearr_83136[16] = inst_82964);
(statearr_83136[17] = inst_82965);
return statearr_83136;
})();var statearr_83137_83207 = state_83085__$1;(statearr_83137_83207[2] = null);
(statearr_83137_83207[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 20))
{var inst_82982 = (state_83085[25]);var inst_82992 = cljs.core.first.call(null,inst_82982);var inst_82993 = cljs.core.nth.call(null,inst_82992,0,null);var inst_82994 = cljs.core.nth.call(null,inst_82992,1,null);var state_83085__$1 = (function (){var statearr_83138 = state_83085;(statearr_83138[28] = inst_82993);
return statearr_83138;
})();if(cljs.core.truth_(inst_82994))
{var statearr_83139_83208 = state_83085__$1;(statearr_83139_83208[1] = 22);
} else
{var statearr_83140_83209 = state_83085__$1;(statearr_83140_83209[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 21))
{var inst_83003 = (state_83085[2]);var state_83085__$1 = state_83085;var statearr_83141_83210 = state_83085__$1;(statearr_83141_83210[2] = inst_83003);
(statearr_83141_83210[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 22))
{var inst_82993 = (state_83085[28]);var inst_82996 = cljs.core.async.close_BANG_.call(null,inst_82993);var state_83085__$1 = state_83085;var statearr_83142_83211 = state_83085__$1;(statearr_83142_83211[2] = inst_82996);
(statearr_83142_83211[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 23))
{var state_83085__$1 = state_83085;var statearr_83143_83212 = state_83085__$1;(statearr_83143_83212[2] = null);
(statearr_83143_83212[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 24))
{var inst_82982 = (state_83085[25]);var inst_82999 = (state_83085[2]);var inst_83000 = cljs.core.next.call(null,inst_82982);var inst_82962 = inst_83000;var inst_82963 = null;var inst_82964 = 0;var inst_82965 = 0;var state_83085__$1 = (function (){var statearr_83144 = state_83085;(statearr_83144[29] = inst_82999);
(statearr_83144[14] = inst_82963);
(statearr_83144[15] = inst_82962);
(statearr_83144[16] = inst_82964);
(statearr_83144[17] = inst_82965);
return statearr_83144;
})();var statearr_83145_83213 = state_83085__$1;(statearr_83145_83213[2] = null);
(statearr_83145_83213[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 25))
{var inst_83023 = (state_83085[11]);var inst_83024 = (state_83085[12]);var inst_83026 = (inst_83024 < inst_83023);var inst_83027 = inst_83026;var state_83085__$1 = state_83085;if(cljs.core.truth_(inst_83027))
{var statearr_83146_83214 = state_83085__$1;(statearr_83146_83214[1] = 27);
} else
{var statearr_83147_83215 = state_83085__$1;(statearr_83147_83215[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 26))
{var inst_83013 = (state_83085[19]);var inst_83071 = (state_83085[2]);var inst_83072 = cljs.core.seq.call(null,inst_83013);var state_83085__$1 = (function (){var statearr_83148 = state_83085;(statearr_83148[30] = inst_83071);
return statearr_83148;
})();if(inst_83072)
{var statearr_83149_83216 = state_83085__$1;(statearr_83149_83216[1] = 42);
} else
{var statearr_83150_83217 = state_83085__$1;(statearr_83150_83217[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 27))
{var inst_83022 = (state_83085[10]);var inst_83024 = (state_83085[12]);var inst_83029 = cljs.core._nth.call(null,inst_83022,inst_83024);var state_83085__$1 = (function (){var statearr_83151 = state_83085;(statearr_83151[8] = inst_83029);
return statearr_83151;
})();var statearr_83152_83218 = state_83085__$1;(statearr_83152_83218[2] = null);
(statearr_83152_83218[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 28))
{var inst_83042 = (state_83085[9]);var inst_83021 = (state_83085[13]);var inst_83042__$1 = cljs.core.seq.call(null,inst_83021);var state_83085__$1 = (function (){var statearr_83156 = state_83085;(statearr_83156[9] = inst_83042__$1);
return statearr_83156;
})();if(inst_83042__$1)
{var statearr_83157_83219 = state_83085__$1;(statearr_83157_83219[1] = 33);
} else
{var statearr_83158_83220 = state_83085__$1;(statearr_83158_83220[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 29))
{var inst_83069 = (state_83085[2]);var state_83085__$1 = state_83085;var statearr_83159_83221 = state_83085__$1;(statearr_83159_83221[2] = inst_83069);
(statearr_83159_83221[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 30))
{var inst_83022 = (state_83085[10]);var inst_83023 = (state_83085[11]);var inst_83024 = (state_83085[12]);var inst_83021 = (state_83085[13]);var inst_83038 = (state_83085[2]);var inst_83039 = (inst_83024 + 1);var tmp83153 = inst_83022;var tmp83154 = inst_83023;var tmp83155 = inst_83021;var inst_83021__$1 = tmp83155;var inst_83022__$1 = tmp83153;var inst_83023__$1 = tmp83154;var inst_83024__$1 = inst_83039;var state_83085__$1 = (function (){var statearr_83160 = state_83085;(statearr_83160[10] = inst_83022__$1);
(statearr_83160[11] = inst_83023__$1);
(statearr_83160[12] = inst_83024__$1);
(statearr_83160[13] = inst_83021__$1);
(statearr_83160[31] = inst_83038);
return statearr_83160;
})();var statearr_83161_83222 = state_83085__$1;(statearr_83161_83222[2] = null);
(statearr_83161_83222[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83086 === 31))
{var inst_83029 = (state_83085[8]);var inst_83030 = (state_83085[2]);var inst_83031 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_83032 = cljs.core.async.untap_STAR_.call(null,m,inst_83029);var state_83085__$1 = (function (){var statearr_83162 = state_83085;(statearr_83162[32] = inst_83031);
(statearr_83162[33] = inst_83030);
return statearr_83162;
})();var statearr_83163_83223 = state_83085__$1;(statearr_83163_83223[2] = inst_83032);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83085__$1);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_83167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_83167[0] = state_machine__12116__auto__);
(statearr_83167[1] = 1);
return statearr_83167;
});
var state_machine__12116__auto____1 = (function (state_83085){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_83085);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e83168){if((e83168 instanceof Object))
{var ex__12119__auto__ = e83168;var statearr_83169_83224 = state_83085;(statearr_83169_83224[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83085);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83168;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83225 = state_83085;
state_83085 = G__83225;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_83085){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_83085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_83170 = f__12186__auto__.call(null);(statearr_83170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___83171);
return statearr_83170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
cljs.core.async.Mix = (function (){var obj83227 = {};return obj83227;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8216__auto__ = m;if(and__8216__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8216__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8836__auto__ = (((m == null))?null:m);return (function (){var or__8228__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8216__auto__ = m;if(and__8216__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8216__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8836__auto__ = (((m == null))?null:m);return (function (){var or__8228__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8216__auto__ = m;if(and__8216__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8216__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8836__auto__ = (((m == null))?null:m);return (function (){var or__8228__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8216__auto__ = m;if(and__8216__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8216__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8836__auto__ = (((m == null))?null:m);return (function (){var or__8228__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8216__auto__ = m;if(and__8216__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8216__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8836__auto__ = (((m == null))?null:m);return (function (){var or__8228__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t83337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t83337 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta83338){
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
this.meta83338 = meta83338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t83337.cljs$lang$type = true;
cljs.core.async.t83337.cljs$lang$ctorStr = "cljs.core.async/t83337";
cljs.core.async.t83337.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t83337");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t83337.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t83337.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t83337.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t83337.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t83337.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t83337.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t83337.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t83337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t83337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_83339){var self__ = this;
var _83339__$1 = this;return self__.meta83338;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t83337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_83339,meta83338__$1){var self__ = this;
var _83339__$1 = this;return (new cljs.core.async.t83337(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta83338__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t83337 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t83337(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta83338){return (new cljs.core.async.t83337(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta83338));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t83337(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12185__auto___83446 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_83404){var state_val_83405 = (state_83404[1]);if((state_val_83405 === 1))
{var inst_83343 = (state_83404[7]);var inst_83343__$1 = calc_state.call(null);var inst_83344 = cljs.core.seq_QMARK_.call(null,inst_83343__$1);var state_83404__$1 = (function (){var statearr_83406 = state_83404;(statearr_83406[7] = inst_83343__$1);
return statearr_83406;
})();if(inst_83344)
{var statearr_83407_83447 = state_83404__$1;(statearr_83407_83447[1] = 2);
} else
{var statearr_83408_83448 = state_83404__$1;(statearr_83408_83448[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 2))
{var inst_83343 = (state_83404[7]);var inst_83346 = cljs.core.apply.call(null,cljs.core.hash_map,inst_83343);var state_83404__$1 = state_83404;var statearr_83409_83449 = state_83404__$1;(statearr_83409_83449[2] = inst_83346);
(statearr_83409_83449[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 3))
{var inst_83343 = (state_83404[7]);var state_83404__$1 = state_83404;var statearr_83410_83450 = state_83404__$1;(statearr_83410_83450[2] = inst_83343);
(statearr_83410_83450[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 4))
{var inst_83343 = (state_83404[7]);var inst_83349 = (state_83404[2]);var inst_83350 = cljs.core.get.call(null,inst_83349,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_83351 = cljs.core.get.call(null,inst_83349,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_83352 = cljs.core.get.call(null,inst_83349,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_83353 = inst_83343;var state_83404__$1 = (function (){var statearr_83411 = state_83404;(statearr_83411[8] = inst_83352);
(statearr_83411[9] = inst_83353);
(statearr_83411[10] = inst_83351);
(statearr_83411[11] = inst_83350);
return statearr_83411;
})();var statearr_83412_83451 = state_83404__$1;(statearr_83412_83451[2] = null);
(statearr_83412_83451[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 5))
{var inst_83353 = (state_83404[9]);var inst_83356 = cljs.core.seq_QMARK_.call(null,inst_83353);var state_83404__$1 = state_83404;if(inst_83356)
{var statearr_83413_83452 = state_83404__$1;(statearr_83413_83452[1] = 7);
} else
{var statearr_83414_83453 = state_83404__$1;(statearr_83414_83453[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 6))
{var inst_83402 = (state_83404[2]);var state_83404__$1 = state_83404;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83404__$1,inst_83402);
} else
{if((state_val_83405 === 7))
{var inst_83353 = (state_83404[9]);var inst_83358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_83353);var state_83404__$1 = state_83404;var statearr_83415_83454 = state_83404__$1;(statearr_83415_83454[2] = inst_83358);
(statearr_83415_83454[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 8))
{var inst_83353 = (state_83404[9]);var state_83404__$1 = state_83404;var statearr_83416_83455 = state_83404__$1;(statearr_83416_83455[2] = inst_83353);
(statearr_83416_83455[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 9))
{var inst_83361 = (state_83404[12]);var inst_83361__$1 = (state_83404[2]);var inst_83362 = cljs.core.get.call(null,inst_83361__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_83363 = cljs.core.get.call(null,inst_83361__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_83364 = cljs.core.get.call(null,inst_83361__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_83404__$1 = (function (){var statearr_83417 = state_83404;(statearr_83417[12] = inst_83361__$1);
(statearr_83417[13] = inst_83363);
(statearr_83417[14] = inst_83364);
return statearr_83417;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_83404__$1,10,inst_83362);
} else
{if((state_val_83405 === 10))
{var inst_83368 = (state_83404[15]);var inst_83369 = (state_83404[16]);var inst_83367 = (state_83404[2]);var inst_83368__$1 = cljs.core.nth.call(null,inst_83367,0,null);var inst_83369__$1 = cljs.core.nth.call(null,inst_83367,1,null);var inst_83370 = (inst_83368__$1 == null);var inst_83371 = cljs.core._EQ_.call(null,inst_83369__$1,change);var inst_83372 = (inst_83370) || (inst_83371);var state_83404__$1 = (function (){var statearr_83418 = state_83404;(statearr_83418[15] = inst_83368__$1);
(statearr_83418[16] = inst_83369__$1);
return statearr_83418;
})();if(cljs.core.truth_(inst_83372))
{var statearr_83419_83456 = state_83404__$1;(statearr_83419_83456[1] = 11);
} else
{var statearr_83420_83457 = state_83404__$1;(statearr_83420_83457[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 11))
{var inst_83368 = (state_83404[15]);var inst_83374 = (inst_83368 == null);var state_83404__$1 = state_83404;if(cljs.core.truth_(inst_83374))
{var statearr_83421_83458 = state_83404__$1;(statearr_83421_83458[1] = 14);
} else
{var statearr_83422_83459 = state_83404__$1;(statearr_83422_83459[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 12))
{var inst_83369 = (state_83404[16]);var inst_83383 = (state_83404[17]);var inst_83364 = (state_83404[14]);var inst_83383__$1 = inst_83364.call(null,inst_83369);var state_83404__$1 = (function (){var statearr_83423 = state_83404;(statearr_83423[17] = inst_83383__$1);
return statearr_83423;
})();if(cljs.core.truth_(inst_83383__$1))
{var statearr_83424_83460 = state_83404__$1;(statearr_83424_83460[1] = 17);
} else
{var statearr_83425_83461 = state_83404__$1;(statearr_83425_83461[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 13))
{var inst_83400 = (state_83404[2]);var state_83404__$1 = state_83404;var statearr_83426_83462 = state_83404__$1;(statearr_83426_83462[2] = inst_83400);
(statearr_83426_83462[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 14))
{var inst_83369 = (state_83404[16]);var inst_83376 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_83369);var state_83404__$1 = state_83404;var statearr_83427_83463 = state_83404__$1;(statearr_83427_83463[2] = inst_83376);
(statearr_83427_83463[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 15))
{var state_83404__$1 = state_83404;var statearr_83428_83464 = state_83404__$1;(statearr_83428_83464[2] = null);
(statearr_83428_83464[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 16))
{var inst_83379 = (state_83404[2]);var inst_83380 = calc_state.call(null);var inst_83353 = inst_83380;var state_83404__$1 = (function (){var statearr_83429 = state_83404;(statearr_83429[9] = inst_83353);
(statearr_83429[18] = inst_83379);
return statearr_83429;
})();var statearr_83430_83465 = state_83404__$1;(statearr_83430_83465[2] = null);
(statearr_83430_83465[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 17))
{var inst_83383 = (state_83404[17]);var state_83404__$1 = state_83404;var statearr_83431_83466 = state_83404__$1;(statearr_83431_83466[2] = inst_83383);
(statearr_83431_83466[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 18))
{var inst_83369 = (state_83404[16]);var inst_83363 = (state_83404[13]);var inst_83364 = (state_83404[14]);var inst_83386 = cljs.core.empty_QMARK_.call(null,inst_83364);var inst_83387 = inst_83363.call(null,inst_83369);var inst_83388 = cljs.core.not.call(null,inst_83387);var inst_83389 = (inst_83386) && (inst_83388);var state_83404__$1 = state_83404;var statearr_83432_83467 = state_83404__$1;(statearr_83432_83467[2] = inst_83389);
(statearr_83432_83467[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 19))
{var inst_83391 = (state_83404[2]);var state_83404__$1 = state_83404;if(cljs.core.truth_(inst_83391))
{var statearr_83433_83468 = state_83404__$1;(statearr_83433_83468[1] = 20);
} else
{var statearr_83434_83469 = state_83404__$1;(statearr_83434_83469[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 20))
{var inst_83368 = (state_83404[15]);var state_83404__$1 = state_83404;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83404__$1,23,out,inst_83368);
} else
{if((state_val_83405 === 21))
{var state_83404__$1 = state_83404;var statearr_83435_83470 = state_83404__$1;(statearr_83435_83470[2] = null);
(statearr_83435_83470[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 22))
{var inst_83361 = (state_83404[12]);var inst_83397 = (state_83404[2]);var inst_83353 = inst_83361;var state_83404__$1 = (function (){var statearr_83436 = state_83404;(statearr_83436[19] = inst_83397);
(statearr_83436[9] = inst_83353);
return statearr_83436;
})();var statearr_83437_83471 = state_83404__$1;(statearr_83437_83471[2] = null);
(statearr_83437_83471[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83405 === 23))
{var inst_83394 = (state_83404[2]);var state_83404__$1 = state_83404;var statearr_83438_83472 = state_83404__$1;(statearr_83438_83472[2] = inst_83394);
(statearr_83438_83472[1] = 22);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_83442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_83442[0] = state_machine__12116__auto__);
(statearr_83442[1] = 1);
return statearr_83442;
});
var state_machine__12116__auto____1 = (function (state_83404){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_83404);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e83443){if((e83443 instanceof Object))
{var ex__12119__auto__ = e83443;var statearr_83444_83473 = state_83404;(statearr_83444_83473[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83404);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83443;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83474 = state_83404;
state_83404 = G__83474;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_83404){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_83404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_83445 = f__12186__auto__.call(null);(statearr_83445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___83446);
return statearr_83445;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
cljs.core.async.Pub = (function (){var obj83476 = {};return obj83476;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8216__auto__ = p;if(and__8216__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8216__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8836__auto__ = (((p == null))?null:p);return (function (){var or__8228__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8216__auto__ = p;if(and__8216__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8216__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8836__auto__ = (((p == null))?null:p);return (function (){var or__8228__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8216__auto__ = p;if(and__8216__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8216__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8836__auto__ = (((p == null))?null:p);return (function (){var or__8228__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8216__auto__ = p;if(and__8216__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8216__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8836__auto__ = (((p == null))?null:p);return (function (){var or__8228__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
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
return (function (topic){var or__8228__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8228__auto__,mults){
return (function (p1__83477_SHARP_){if(cljs.core.truth_(p1__83477_SHARP_.call(null,topic)))
{return p1__83477_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__83477_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8228__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t83602 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t83602 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta83603){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta83603 = meta83603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t83602.cljs$lang$type = true;
cljs.core.async.t83602.cljs$lang$ctorStr = "cljs.core.async/t83602";
cljs.core.async.t83602.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t83602");
});})(mults,ensure_mult))
;
cljs.core.async.t83602.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t83602.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t83602.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t83602.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t83602.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t83602.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t83602.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t83602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_83604){var self__ = this;
var _83604__$1 = this;return self__.meta83603;
});})(mults,ensure_mult))
;
cljs.core.async.t83602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_83604,meta83603__$1){var self__ = this;
var _83604__$1 = this;return (new cljs.core.async.t83602(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta83603__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t83602 = ((function (mults,ensure_mult){
return (function __GT_t83602(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta83603){return (new cljs.core.async.t83602(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta83603));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t83602(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12185__auto___83726 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_83678){var state_val_83679 = (state_83678[1]);if((state_val_83679 === 1))
{var state_83678__$1 = state_83678;var statearr_83680_83727 = state_83678__$1;(statearr_83680_83727[2] = null);
(statearr_83680_83727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 2))
{var state_83678__$1 = state_83678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83678__$1,4,ch);
} else
{if((state_val_83679 === 3))
{var inst_83676 = (state_83678[2]);var state_83678__$1 = state_83678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83678__$1,inst_83676);
} else
{if((state_val_83679 === 4))
{var inst_83607 = (state_83678[7]);var inst_83607__$1 = (state_83678[2]);var inst_83608 = (inst_83607__$1 == null);var state_83678__$1 = (function (){var statearr_83681 = state_83678;(statearr_83681[7] = inst_83607__$1);
return statearr_83681;
})();if(cljs.core.truth_(inst_83608))
{var statearr_83682_83728 = state_83678__$1;(statearr_83682_83728[1] = 5);
} else
{var statearr_83683_83729 = state_83678__$1;(statearr_83683_83729[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 5))
{var inst_83614 = cljs.core.deref.call(null,mults);var inst_83615 = cljs.core.vals.call(null,inst_83614);var inst_83616 = cljs.core.seq.call(null,inst_83615);var inst_83617 = inst_83616;var inst_83618 = null;var inst_83619 = 0;var inst_83620 = 0;var state_83678__$1 = (function (){var statearr_83684 = state_83678;(statearr_83684[8] = inst_83619);
(statearr_83684[9] = inst_83618);
(statearr_83684[10] = inst_83617);
(statearr_83684[11] = inst_83620);
return statearr_83684;
})();var statearr_83685_83730 = state_83678__$1;(statearr_83685_83730[2] = null);
(statearr_83685_83730[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 6))
{var inst_83607 = (state_83678[7]);var inst_83655 = (state_83678[12]);var inst_83657 = (state_83678[13]);var inst_83655__$1 = topic_fn.call(null,inst_83607);var inst_83656 = cljs.core.deref.call(null,mults);var inst_83657__$1 = cljs.core.get.call(null,inst_83656,inst_83655__$1);var state_83678__$1 = (function (){var statearr_83686 = state_83678;(statearr_83686[12] = inst_83655__$1);
(statearr_83686[13] = inst_83657__$1);
return statearr_83686;
})();if(cljs.core.truth_(inst_83657__$1))
{var statearr_83687_83731 = state_83678__$1;(statearr_83687_83731[1] = 19);
} else
{var statearr_83688_83732 = state_83678__$1;(statearr_83688_83732[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 7))
{var inst_83674 = (state_83678[2]);var state_83678__$1 = state_83678;var statearr_83689_83733 = state_83678__$1;(statearr_83689_83733[2] = inst_83674);
(statearr_83689_83733[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 8))
{var inst_83619 = (state_83678[8]);var inst_83620 = (state_83678[11]);var inst_83622 = (inst_83620 < inst_83619);var inst_83623 = inst_83622;var state_83678__$1 = state_83678;if(cljs.core.truth_(inst_83623))
{var statearr_83693_83734 = state_83678__$1;(statearr_83693_83734[1] = 10);
} else
{var statearr_83694_83735 = state_83678__$1;(statearr_83694_83735[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 9))
{var inst_83653 = (state_83678[2]);var state_83678__$1 = state_83678;var statearr_83695_83736 = state_83678__$1;(statearr_83695_83736[2] = inst_83653);
(statearr_83695_83736[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 10))
{var inst_83619 = (state_83678[8]);var inst_83618 = (state_83678[9]);var inst_83617 = (state_83678[10]);var inst_83620 = (state_83678[11]);var inst_83625 = cljs.core._nth.call(null,inst_83618,inst_83620);var inst_83626 = cljs.core.async.muxch_STAR_.call(null,inst_83625);var inst_83627 = cljs.core.async.close_BANG_.call(null,inst_83626);var inst_83628 = (inst_83620 + 1);var tmp83690 = inst_83619;var tmp83691 = inst_83618;var tmp83692 = inst_83617;var inst_83617__$1 = tmp83692;var inst_83618__$1 = tmp83691;var inst_83619__$1 = tmp83690;var inst_83620__$1 = inst_83628;var state_83678__$1 = (function (){var statearr_83696 = state_83678;(statearr_83696[8] = inst_83619__$1);
(statearr_83696[9] = inst_83618__$1);
(statearr_83696[10] = inst_83617__$1);
(statearr_83696[11] = inst_83620__$1);
(statearr_83696[14] = inst_83627);
return statearr_83696;
})();var statearr_83697_83737 = state_83678__$1;(statearr_83697_83737[2] = null);
(statearr_83697_83737[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 11))
{var inst_83617 = (state_83678[10]);var inst_83631 = (state_83678[15]);var inst_83631__$1 = cljs.core.seq.call(null,inst_83617);var state_83678__$1 = (function (){var statearr_83698 = state_83678;(statearr_83698[15] = inst_83631__$1);
return statearr_83698;
})();if(inst_83631__$1)
{var statearr_83699_83738 = state_83678__$1;(statearr_83699_83738[1] = 13);
} else
{var statearr_83700_83739 = state_83678__$1;(statearr_83700_83739[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 12))
{var inst_83651 = (state_83678[2]);var state_83678__$1 = state_83678;var statearr_83701_83740 = state_83678__$1;(statearr_83701_83740[2] = inst_83651);
(statearr_83701_83740[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 13))
{var inst_83631 = (state_83678[15]);var inst_83633 = cljs.core.chunked_seq_QMARK_.call(null,inst_83631);var state_83678__$1 = state_83678;if(inst_83633)
{var statearr_83702_83741 = state_83678__$1;(statearr_83702_83741[1] = 16);
} else
{var statearr_83703_83742 = state_83678__$1;(statearr_83703_83742[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 14))
{var state_83678__$1 = state_83678;var statearr_83704_83743 = state_83678__$1;(statearr_83704_83743[2] = null);
(statearr_83704_83743[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 15))
{var inst_83649 = (state_83678[2]);var state_83678__$1 = state_83678;var statearr_83705_83744 = state_83678__$1;(statearr_83705_83744[2] = inst_83649);
(statearr_83705_83744[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 16))
{var inst_83631 = (state_83678[15]);var inst_83635 = cljs.core.chunk_first.call(null,inst_83631);var inst_83636 = cljs.core.chunk_rest.call(null,inst_83631);var inst_83637 = cljs.core.count.call(null,inst_83635);var inst_83617 = inst_83636;var inst_83618 = inst_83635;var inst_83619 = inst_83637;var inst_83620 = 0;var state_83678__$1 = (function (){var statearr_83706 = state_83678;(statearr_83706[8] = inst_83619);
(statearr_83706[9] = inst_83618);
(statearr_83706[10] = inst_83617);
(statearr_83706[11] = inst_83620);
return statearr_83706;
})();var statearr_83707_83745 = state_83678__$1;(statearr_83707_83745[2] = null);
(statearr_83707_83745[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 17))
{var inst_83631 = (state_83678[15]);var inst_83640 = cljs.core.first.call(null,inst_83631);var inst_83641 = cljs.core.async.muxch_STAR_.call(null,inst_83640);var inst_83642 = cljs.core.async.close_BANG_.call(null,inst_83641);var inst_83643 = cljs.core.next.call(null,inst_83631);var inst_83617 = inst_83643;var inst_83618 = null;var inst_83619 = 0;var inst_83620 = 0;var state_83678__$1 = (function (){var statearr_83708 = state_83678;(statearr_83708[8] = inst_83619);
(statearr_83708[16] = inst_83642);
(statearr_83708[9] = inst_83618);
(statearr_83708[10] = inst_83617);
(statearr_83708[11] = inst_83620);
return statearr_83708;
})();var statearr_83709_83746 = state_83678__$1;(statearr_83709_83746[2] = null);
(statearr_83709_83746[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 18))
{var inst_83646 = (state_83678[2]);var state_83678__$1 = state_83678;var statearr_83710_83747 = state_83678__$1;(statearr_83710_83747[2] = inst_83646);
(statearr_83710_83747[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 19))
{var state_83678__$1 = state_83678;var statearr_83711_83748 = state_83678__$1;(statearr_83711_83748[2] = null);
(statearr_83711_83748[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 20))
{var state_83678__$1 = state_83678;var statearr_83712_83749 = state_83678__$1;(statearr_83712_83749[2] = null);
(statearr_83712_83749[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 21))
{var inst_83671 = (state_83678[2]);var state_83678__$1 = (function (){var statearr_83713 = state_83678;(statearr_83713[17] = inst_83671);
return statearr_83713;
})();var statearr_83714_83750 = state_83678__$1;(statearr_83714_83750[2] = null);
(statearr_83714_83750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 22))
{var inst_83668 = (state_83678[2]);var state_83678__$1 = state_83678;var statearr_83715_83751 = state_83678__$1;(statearr_83715_83751[2] = inst_83668);
(statearr_83715_83751[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 23))
{var inst_83655 = (state_83678[12]);var inst_83659 = (state_83678[2]);var inst_83660 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_83655);var state_83678__$1 = (function (){var statearr_83716 = state_83678;(statearr_83716[18] = inst_83659);
return statearr_83716;
})();var statearr_83717_83752 = state_83678__$1;(statearr_83717_83752[2] = inst_83660);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83678__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83679 === 24))
{var inst_83607 = (state_83678[7]);var inst_83657 = (state_83678[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_83678,23,Object,null,22);var inst_83664 = cljs.core.async.muxch_STAR_.call(null,inst_83657);var state_83678__$1 = state_83678;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83678__$1,25,inst_83664,inst_83607);
} else
{if((state_val_83679 === 25))
{var inst_83666 = (state_83678[2]);var state_83678__$1 = state_83678;var statearr_83718_83753 = state_83678__$1;(statearr_83718_83753[2] = inst_83666);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83678__$1);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_83722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_83722[0] = state_machine__12116__auto__);
(statearr_83722[1] = 1);
return statearr_83722;
});
var state_machine__12116__auto____1 = (function (state_83678){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_83678);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e83723){if((e83723 instanceof Object))
{var ex__12119__auto__ = e83723;var statearr_83724_83754 = state_83678;(statearr_83724_83754[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83678);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83755 = state_83678;
state_83678 = G__83755;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_83678){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_83678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_83725 = f__12186__auto__.call(null);(statearr_83725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___83726);
return statearr_83725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
,cljs.core.range.call(null,cnt));var c__12185__auto___83892 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_83862){var state_val_83863 = (state_83862[1]);if((state_val_83863 === 1))
{var state_83862__$1 = state_83862;var statearr_83864_83893 = state_83862__$1;(statearr_83864_83893[2] = null);
(statearr_83864_83893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 2))
{var inst_83825 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_83826 = 0;var state_83862__$1 = (function (){var statearr_83865 = state_83862;(statearr_83865[7] = inst_83825);
(statearr_83865[8] = inst_83826);
return statearr_83865;
})();var statearr_83866_83894 = state_83862__$1;(statearr_83866_83894[2] = null);
(statearr_83866_83894[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 3))
{var inst_83860 = (state_83862[2]);var state_83862__$1 = state_83862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83862__$1,inst_83860);
} else
{if((state_val_83863 === 4))
{var inst_83826 = (state_83862[8]);var inst_83828 = (inst_83826 < cnt);var state_83862__$1 = state_83862;if(cljs.core.truth_(inst_83828))
{var statearr_83867_83895 = state_83862__$1;(statearr_83867_83895[1] = 6);
} else
{var statearr_83868_83896 = state_83862__$1;(statearr_83868_83896[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 5))
{var inst_83846 = (state_83862[2]);var state_83862__$1 = (function (){var statearr_83869 = state_83862;(statearr_83869[9] = inst_83846);
return statearr_83869;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83862__$1,12,dchan);
} else
{if((state_val_83863 === 6))
{var state_83862__$1 = state_83862;var statearr_83870_83897 = state_83862__$1;(statearr_83870_83897[2] = null);
(statearr_83870_83897[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 7))
{var state_83862__$1 = state_83862;var statearr_83871_83898 = state_83862__$1;(statearr_83871_83898[2] = null);
(statearr_83871_83898[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 8))
{var inst_83844 = (state_83862[2]);var state_83862__$1 = state_83862;var statearr_83872_83899 = state_83862__$1;(statearr_83872_83899[2] = inst_83844);
(statearr_83872_83899[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 9))
{var inst_83826 = (state_83862[8]);var inst_83839 = (state_83862[2]);var inst_83840 = (inst_83826 + 1);var inst_83826__$1 = inst_83840;var state_83862__$1 = (function (){var statearr_83873 = state_83862;(statearr_83873[10] = inst_83839);
(statearr_83873[8] = inst_83826__$1);
return statearr_83873;
})();var statearr_83874_83900 = state_83862__$1;(statearr_83874_83900[2] = null);
(statearr_83874_83900[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 10))
{var inst_83830 = (state_83862[2]);var inst_83831 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_83862__$1 = (function (){var statearr_83875 = state_83862;(statearr_83875[11] = inst_83830);
return statearr_83875;
})();var statearr_83876_83901 = state_83862__$1;(statearr_83876_83901[2] = inst_83831);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83862__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 11))
{var inst_83826 = (state_83862[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_83862,10,Object,null,9);var inst_83835 = chs__$1.call(null,inst_83826);var inst_83836 = done.call(null,inst_83826);var inst_83837 = cljs.core.async.take_BANG_.call(null,inst_83835,inst_83836);var state_83862__$1 = state_83862;var statearr_83877_83902 = state_83862__$1;(statearr_83877_83902[2] = inst_83837);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83862__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 12))
{var inst_83848 = (state_83862[12]);var inst_83848__$1 = (state_83862[2]);var inst_83849 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_83848__$1);var state_83862__$1 = (function (){var statearr_83878 = state_83862;(statearr_83878[12] = inst_83848__$1);
return statearr_83878;
})();if(cljs.core.truth_(inst_83849))
{var statearr_83879_83903 = state_83862__$1;(statearr_83879_83903[1] = 13);
} else
{var statearr_83880_83904 = state_83862__$1;(statearr_83880_83904[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 13))
{var inst_83851 = cljs.core.async.close_BANG_.call(null,out);var state_83862__$1 = state_83862;var statearr_83881_83905 = state_83862__$1;(statearr_83881_83905[2] = inst_83851);
(statearr_83881_83905[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 14))
{var inst_83848 = (state_83862[12]);var inst_83853 = cljs.core.apply.call(null,f,inst_83848);var state_83862__$1 = state_83862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83862__$1,16,out,inst_83853);
} else
{if((state_val_83863 === 15))
{var inst_83858 = (state_83862[2]);var state_83862__$1 = state_83862;var statearr_83882_83906 = state_83862__$1;(statearr_83882_83906[2] = inst_83858);
(statearr_83882_83906[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83863 === 16))
{var inst_83855 = (state_83862[2]);var state_83862__$1 = (function (){var statearr_83883 = state_83862;(statearr_83883[13] = inst_83855);
return statearr_83883;
})();var statearr_83884_83907 = state_83862__$1;(statearr_83884_83907[2] = null);
(statearr_83884_83907[1] = 2);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_83888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_83888[0] = state_machine__12116__auto__);
(statearr_83888[1] = 1);
return statearr_83888;
});
var state_machine__12116__auto____1 = (function (state_83862){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_83862);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e83889){if((e83889 instanceof Object))
{var ex__12119__auto__ = e83889;var statearr_83890_83908 = state_83862;(statearr_83890_83908[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83862);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83909 = state_83862;
state_83862 = G__83909;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_83862){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_83862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_83891 = f__12186__auto__.call(null);(statearr_83891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___83892);
return statearr_83891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___84017 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_83993){var state_val_83994 = (state_83993[1]);if((state_val_83994 === 1))
{var inst_83964 = cljs.core.vec.call(null,chs);var inst_83965 = inst_83964;var state_83993__$1 = (function (){var statearr_83995 = state_83993;(statearr_83995[7] = inst_83965);
return statearr_83995;
})();var statearr_83996_84018 = state_83993__$1;(statearr_83996_84018[2] = null);
(statearr_83996_84018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83994 === 2))
{var inst_83965 = (state_83993[7]);var inst_83967 = cljs.core.count.call(null,inst_83965);var inst_83968 = (inst_83967 > 0);var state_83993__$1 = state_83993;if(cljs.core.truth_(inst_83968))
{var statearr_83997_84019 = state_83993__$1;(statearr_83997_84019[1] = 4);
} else
{var statearr_83998_84020 = state_83993__$1;(statearr_83998_84020[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83994 === 3))
{var inst_83991 = (state_83993[2]);var state_83993__$1 = state_83993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83993__$1,inst_83991);
} else
{if((state_val_83994 === 4))
{var inst_83965 = (state_83993[7]);var state_83993__$1 = state_83993;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_83993__$1,7,inst_83965);
} else
{if((state_val_83994 === 5))
{var inst_83987 = cljs.core.async.close_BANG_.call(null,out);var state_83993__$1 = state_83993;var statearr_83999_84021 = state_83993__$1;(statearr_83999_84021[2] = inst_83987);
(statearr_83999_84021[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83994 === 6))
{var inst_83989 = (state_83993[2]);var state_83993__$1 = state_83993;var statearr_84000_84022 = state_83993__$1;(statearr_84000_84022[2] = inst_83989);
(statearr_84000_84022[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83994 === 7))
{var inst_83973 = (state_83993[8]);var inst_83972 = (state_83993[9]);var inst_83972__$1 = (state_83993[2]);var inst_83973__$1 = cljs.core.nth.call(null,inst_83972__$1,0,null);var inst_83974 = cljs.core.nth.call(null,inst_83972__$1,1,null);var inst_83975 = (inst_83973__$1 == null);var state_83993__$1 = (function (){var statearr_84001 = state_83993;(statearr_84001[8] = inst_83973__$1);
(statearr_84001[9] = inst_83972__$1);
(statearr_84001[10] = inst_83974);
return statearr_84001;
})();if(cljs.core.truth_(inst_83975))
{var statearr_84002_84023 = state_83993__$1;(statearr_84002_84023[1] = 8);
} else
{var statearr_84003_84024 = state_83993__$1;(statearr_84003_84024[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83994 === 8))
{var inst_83965 = (state_83993[7]);var inst_83973 = (state_83993[8]);var inst_83972 = (state_83993[9]);var inst_83974 = (state_83993[10]);var inst_83977 = (function (){var c = inst_83974;var v = inst_83973;var vec__83970 = inst_83972;var cs = inst_83965;return ((function (c,v,vec__83970,cs,inst_83965,inst_83973,inst_83972,inst_83974,state_val_83994){
return (function (p1__83910_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__83910_SHARP_);
});
;})(c,v,vec__83970,cs,inst_83965,inst_83973,inst_83972,inst_83974,state_val_83994))
})();var inst_83978 = cljs.core.filterv.call(null,inst_83977,inst_83965);var inst_83965__$1 = inst_83978;var state_83993__$1 = (function (){var statearr_84004 = state_83993;(statearr_84004[7] = inst_83965__$1);
return statearr_84004;
})();var statearr_84005_84025 = state_83993__$1;(statearr_84005_84025[2] = null);
(statearr_84005_84025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83994 === 9))
{var inst_83973 = (state_83993[8]);var state_83993__$1 = state_83993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83993__$1,11,out,inst_83973);
} else
{if((state_val_83994 === 10))
{var inst_83985 = (state_83993[2]);var state_83993__$1 = state_83993;var statearr_84007_84026 = state_83993__$1;(statearr_84007_84026[2] = inst_83985);
(statearr_84007_84026[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83994 === 11))
{var inst_83965 = (state_83993[7]);var inst_83982 = (state_83993[2]);var tmp84006 = inst_83965;var inst_83965__$1 = tmp84006;var state_83993__$1 = (function (){var statearr_84008 = state_83993;(statearr_84008[7] = inst_83965__$1);
(statearr_84008[11] = inst_83982);
return statearr_84008;
})();var statearr_84009_84027 = state_83993__$1;(statearr_84009_84027[2] = null);
(statearr_84009_84027[1] = 2);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_84013 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_84013[0] = state_machine__12116__auto__);
(statearr_84013[1] = 1);
return statearr_84013;
});
var state_machine__12116__auto____1 = (function (state_83993){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_83993);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e84014){if((e84014 instanceof Object))
{var ex__12119__auto__ = e84014;var statearr_84015_84028 = state_83993;(statearr_84015_84028[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e84014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__84029 = state_83993;
state_83993 = G__84029;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_83993){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_83993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_84016 = f__12186__auto__.call(null);(statearr_84016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___84017);
return statearr_84016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___84122 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_84099){var state_val_84100 = (state_84099[1]);if((state_val_84100 === 1))
{var inst_84076 = 0;var state_84099__$1 = (function (){var statearr_84101 = state_84099;(statearr_84101[7] = inst_84076);
return statearr_84101;
})();var statearr_84102_84123 = state_84099__$1;(statearr_84102_84123[2] = null);
(statearr_84102_84123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84100 === 2))
{var inst_84076 = (state_84099[7]);var inst_84078 = (inst_84076 < n);var state_84099__$1 = state_84099;if(cljs.core.truth_(inst_84078))
{var statearr_84103_84124 = state_84099__$1;(statearr_84103_84124[1] = 4);
} else
{var statearr_84104_84125 = state_84099__$1;(statearr_84104_84125[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84100 === 3))
{var inst_84096 = (state_84099[2]);var inst_84097 = cljs.core.async.close_BANG_.call(null,out);var state_84099__$1 = (function (){var statearr_84105 = state_84099;(statearr_84105[8] = inst_84096);
return statearr_84105;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84099__$1,inst_84097);
} else
{if((state_val_84100 === 4))
{var state_84099__$1 = state_84099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84099__$1,7,ch);
} else
{if((state_val_84100 === 5))
{var state_84099__$1 = state_84099;var statearr_84106_84126 = state_84099__$1;(statearr_84106_84126[2] = null);
(statearr_84106_84126[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84100 === 6))
{var inst_84094 = (state_84099[2]);var state_84099__$1 = state_84099;var statearr_84107_84127 = state_84099__$1;(statearr_84107_84127[2] = inst_84094);
(statearr_84107_84127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84100 === 7))
{var inst_84081 = (state_84099[9]);var inst_84081__$1 = (state_84099[2]);var inst_84082 = (inst_84081__$1 == null);var inst_84083 = cljs.core.not.call(null,inst_84082);var state_84099__$1 = (function (){var statearr_84108 = state_84099;(statearr_84108[9] = inst_84081__$1);
return statearr_84108;
})();if(inst_84083)
{var statearr_84109_84128 = state_84099__$1;(statearr_84109_84128[1] = 8);
} else
{var statearr_84110_84129 = state_84099__$1;(statearr_84110_84129[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84100 === 8))
{var inst_84081 = (state_84099[9]);var state_84099__$1 = state_84099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84099__$1,11,out,inst_84081);
} else
{if((state_val_84100 === 9))
{var state_84099__$1 = state_84099;var statearr_84111_84130 = state_84099__$1;(statearr_84111_84130[2] = null);
(statearr_84111_84130[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84100 === 10))
{var inst_84091 = (state_84099[2]);var state_84099__$1 = state_84099;var statearr_84112_84131 = state_84099__$1;(statearr_84112_84131[2] = inst_84091);
(statearr_84112_84131[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84100 === 11))
{var inst_84076 = (state_84099[7]);var inst_84086 = (state_84099[2]);var inst_84087 = (inst_84076 + 1);var inst_84076__$1 = inst_84087;var state_84099__$1 = (function (){var statearr_84113 = state_84099;(statearr_84113[10] = inst_84086);
(statearr_84113[7] = inst_84076__$1);
return statearr_84113;
})();var statearr_84114_84132 = state_84099__$1;(statearr_84114_84132[2] = null);
(statearr_84114_84132[1] = 2);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_84118 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_84118[0] = state_machine__12116__auto__);
(statearr_84118[1] = 1);
return statearr_84118;
});
var state_machine__12116__auto____1 = (function (state_84099){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_84099);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e84119){if((e84119 instanceof Object))
{var ex__12119__auto__ = e84119;var statearr_84120_84133 = state_84099;(statearr_84120_84133[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84099);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e84119;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__84134 = state_84099;
state_84099 = G__84134;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_84099){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_84099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_84121 = f__12186__auto__.call(null);(statearr_84121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___84122);
return statearr_84121;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___84231 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_84206){var state_val_84207 = (state_84206[1]);if((state_val_84207 === 1))
{var inst_84183 = null;var state_84206__$1 = (function (){var statearr_84208 = state_84206;(statearr_84208[7] = inst_84183);
return statearr_84208;
})();var statearr_84209_84232 = state_84206__$1;(statearr_84209_84232[2] = null);
(statearr_84209_84232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84207 === 2))
{var state_84206__$1 = state_84206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84206__$1,4,ch);
} else
{if((state_val_84207 === 3))
{var inst_84203 = (state_84206[2]);var inst_84204 = cljs.core.async.close_BANG_.call(null,out);var state_84206__$1 = (function (){var statearr_84210 = state_84206;(statearr_84210[8] = inst_84203);
return statearr_84210;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84206__$1,inst_84204);
} else
{if((state_val_84207 === 4))
{var inst_84186 = (state_84206[9]);var inst_84186__$1 = (state_84206[2]);var inst_84187 = (inst_84186__$1 == null);var inst_84188 = cljs.core.not.call(null,inst_84187);var state_84206__$1 = (function (){var statearr_84211 = state_84206;(statearr_84211[9] = inst_84186__$1);
return statearr_84211;
})();if(inst_84188)
{var statearr_84212_84233 = state_84206__$1;(statearr_84212_84233[1] = 5);
} else
{var statearr_84213_84234 = state_84206__$1;(statearr_84213_84234[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84207 === 5))
{var inst_84183 = (state_84206[7]);var inst_84186 = (state_84206[9]);var inst_84190 = cljs.core._EQ_.call(null,inst_84186,inst_84183);var state_84206__$1 = state_84206;if(inst_84190)
{var statearr_84214_84235 = state_84206__$1;(statearr_84214_84235[1] = 8);
} else
{var statearr_84215_84236 = state_84206__$1;(statearr_84215_84236[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84207 === 6))
{var state_84206__$1 = state_84206;var statearr_84217_84237 = state_84206__$1;(statearr_84217_84237[2] = null);
(statearr_84217_84237[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84207 === 7))
{var inst_84201 = (state_84206[2]);var state_84206__$1 = state_84206;var statearr_84218_84238 = state_84206__$1;(statearr_84218_84238[2] = inst_84201);
(statearr_84218_84238[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84207 === 8))
{var inst_84183 = (state_84206[7]);var tmp84216 = inst_84183;var inst_84183__$1 = tmp84216;var state_84206__$1 = (function (){var statearr_84219 = state_84206;(statearr_84219[7] = inst_84183__$1);
return statearr_84219;
})();var statearr_84220_84239 = state_84206__$1;(statearr_84220_84239[2] = null);
(statearr_84220_84239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84207 === 9))
{var inst_84186 = (state_84206[9]);var state_84206__$1 = state_84206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84206__$1,11,out,inst_84186);
} else
{if((state_val_84207 === 10))
{var inst_84198 = (state_84206[2]);var state_84206__$1 = state_84206;var statearr_84221_84240 = state_84206__$1;(statearr_84221_84240[2] = inst_84198);
(statearr_84221_84240[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84207 === 11))
{var inst_84186 = (state_84206[9]);var inst_84195 = (state_84206[2]);var inst_84183 = inst_84186;var state_84206__$1 = (function (){var statearr_84222 = state_84206;(statearr_84222[7] = inst_84183);
(statearr_84222[10] = inst_84195);
return statearr_84222;
})();var statearr_84223_84241 = state_84206__$1;(statearr_84223_84241[2] = null);
(statearr_84223_84241[1] = 2);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_84227 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_84227[0] = state_machine__12116__auto__);
(statearr_84227[1] = 1);
return statearr_84227;
});
var state_machine__12116__auto____1 = (function (state_84206){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_84206);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e84228){if((e84228 instanceof Object))
{var ex__12119__auto__ = e84228;var statearr_84229_84242 = state_84206;(statearr_84229_84242[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e84228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__84243 = state_84206;
state_84206 = G__84243;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_84206){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_84206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_84230 = f__12186__auto__.call(null);(statearr_84230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___84231);
return statearr_84230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___84378 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_84348){var state_val_84349 = (state_84348[1]);if((state_val_84349 === 1))
{var inst_84311 = (new Array(n));var inst_84312 = inst_84311;var inst_84313 = 0;var state_84348__$1 = (function (){var statearr_84350 = state_84348;(statearr_84350[7] = inst_84312);
(statearr_84350[8] = inst_84313);
return statearr_84350;
})();var statearr_84351_84379 = state_84348__$1;(statearr_84351_84379[2] = null);
(statearr_84351_84379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84349 === 2))
{var state_84348__$1 = state_84348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84348__$1,4,ch);
} else
{if((state_val_84349 === 3))
{var inst_84346 = (state_84348[2]);var state_84348__$1 = state_84348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84348__$1,inst_84346);
} else
{if((state_val_84349 === 4))
{var inst_84316 = (state_84348[9]);var inst_84316__$1 = (state_84348[2]);var inst_84317 = (inst_84316__$1 == null);var inst_84318 = cljs.core.not.call(null,inst_84317);var state_84348__$1 = (function (){var statearr_84352 = state_84348;(statearr_84352[9] = inst_84316__$1);
return statearr_84352;
})();if(inst_84318)
{var statearr_84353_84380 = state_84348__$1;(statearr_84353_84380[1] = 5);
} else
{var statearr_84354_84381 = state_84348__$1;(statearr_84354_84381[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84349 === 5))
{var inst_84321 = (state_84348[10]);var inst_84312 = (state_84348[7]);var inst_84313 = (state_84348[8]);var inst_84316 = (state_84348[9]);var inst_84320 = (inst_84312[inst_84313] = inst_84316);var inst_84321__$1 = (inst_84313 + 1);var inst_84322 = (inst_84321__$1 < n);var state_84348__$1 = (function (){var statearr_84355 = state_84348;(statearr_84355[11] = inst_84320);
(statearr_84355[10] = inst_84321__$1);
return statearr_84355;
})();if(cljs.core.truth_(inst_84322))
{var statearr_84356_84382 = state_84348__$1;(statearr_84356_84382[1] = 8);
} else
{var statearr_84357_84383 = state_84348__$1;(statearr_84357_84383[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84349 === 6))
{var inst_84313 = (state_84348[8]);var inst_84334 = (inst_84313 > 0);var state_84348__$1 = state_84348;if(cljs.core.truth_(inst_84334))
{var statearr_84359_84384 = state_84348__$1;(statearr_84359_84384[1] = 12);
} else
{var statearr_84360_84385 = state_84348__$1;(statearr_84360_84385[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84349 === 7))
{var inst_84344 = (state_84348[2]);var state_84348__$1 = state_84348;var statearr_84361_84386 = state_84348__$1;(statearr_84361_84386[2] = inst_84344);
(statearr_84361_84386[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84349 === 8))
{var inst_84321 = (state_84348[10]);var inst_84312 = (state_84348[7]);var tmp84358 = inst_84312;var inst_84312__$1 = tmp84358;var inst_84313 = inst_84321;var state_84348__$1 = (function (){var statearr_84362 = state_84348;(statearr_84362[7] = inst_84312__$1);
(statearr_84362[8] = inst_84313);
return statearr_84362;
})();var statearr_84363_84387 = state_84348__$1;(statearr_84363_84387[2] = null);
(statearr_84363_84387[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84349 === 9))
{var inst_84312 = (state_84348[7]);var inst_84326 = cljs.core.vec.call(null,inst_84312);var state_84348__$1 = state_84348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84348__$1,11,out,inst_84326);
} else
{if((state_val_84349 === 10))
{var inst_84332 = (state_84348[2]);var state_84348__$1 = state_84348;var statearr_84364_84388 = state_84348__$1;(statearr_84364_84388[2] = inst_84332);
(statearr_84364_84388[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84349 === 11))
{var inst_84328 = (state_84348[2]);var inst_84329 = (new Array(n));var inst_84312 = inst_84329;var inst_84313 = 0;var state_84348__$1 = (function (){var statearr_84365 = state_84348;(statearr_84365[7] = inst_84312);
(statearr_84365[8] = inst_84313);
(statearr_84365[12] = inst_84328);
return statearr_84365;
})();var statearr_84366_84389 = state_84348__$1;(statearr_84366_84389[2] = null);
(statearr_84366_84389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84349 === 12))
{var inst_84312 = (state_84348[7]);var inst_84336 = cljs.core.vec.call(null,inst_84312);var state_84348__$1 = state_84348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84348__$1,15,out,inst_84336);
} else
{if((state_val_84349 === 13))
{var state_84348__$1 = state_84348;var statearr_84367_84390 = state_84348__$1;(statearr_84367_84390[2] = null);
(statearr_84367_84390[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84349 === 14))
{var inst_84341 = (state_84348[2]);var inst_84342 = cljs.core.async.close_BANG_.call(null,out);var state_84348__$1 = (function (){var statearr_84368 = state_84348;(statearr_84368[13] = inst_84341);
return statearr_84368;
})();var statearr_84369_84391 = state_84348__$1;(statearr_84369_84391[2] = inst_84342);
(statearr_84369_84391[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84349 === 15))
{var inst_84338 = (state_84348[2]);var state_84348__$1 = state_84348;var statearr_84370_84392 = state_84348__$1;(statearr_84370_84392[2] = inst_84338);
(statearr_84370_84392[1] = 14);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_84374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_84374[0] = state_machine__12116__auto__);
(statearr_84374[1] = 1);
return statearr_84374;
});
var state_machine__12116__auto____1 = (function (state_84348){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_84348);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e84375){if((e84375 instanceof Object))
{var ex__12119__auto__ = e84375;var statearr_84376_84393 = state_84348;(statearr_84376_84393[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84348);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e84375;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__84394 = state_84348;
state_84348 = G__84394;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_84348){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_84348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_84377 = f__12186__auto__.call(null);(statearr_84377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___84378);
return statearr_84377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___84537 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_84507){var state_val_84508 = (state_84507[1]);if((state_val_84508 === 1))
{var inst_84466 = [];var inst_84467 = inst_84466;var inst_84468 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_84507__$1 = (function (){var statearr_84509 = state_84507;(statearr_84509[7] = inst_84468);
(statearr_84509[8] = inst_84467);
return statearr_84509;
})();var statearr_84510_84538 = state_84507__$1;(statearr_84510_84538[2] = null);
(statearr_84510_84538[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84508 === 2))
{var state_84507__$1 = state_84507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84507__$1,4,ch);
} else
{if((state_val_84508 === 3))
{var inst_84505 = (state_84507[2]);var state_84507__$1 = state_84507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84507__$1,inst_84505);
} else
{if((state_val_84508 === 4))
{var inst_84471 = (state_84507[9]);var inst_84471__$1 = (state_84507[2]);var inst_84472 = (inst_84471__$1 == null);var inst_84473 = cljs.core.not.call(null,inst_84472);var state_84507__$1 = (function (){var statearr_84511 = state_84507;(statearr_84511[9] = inst_84471__$1);
return statearr_84511;
})();if(inst_84473)
{var statearr_84512_84539 = state_84507__$1;(statearr_84512_84539[1] = 5);
} else
{var statearr_84513_84540 = state_84507__$1;(statearr_84513_84540[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84508 === 5))
{var inst_84468 = (state_84507[7]);var inst_84475 = (state_84507[10]);var inst_84471 = (state_84507[9]);var inst_84475__$1 = f.call(null,inst_84471);var inst_84476 = cljs.core._EQ_.call(null,inst_84475__$1,inst_84468);var inst_84477 = cljs.core.keyword_identical_QMARK_.call(null,inst_84468,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_84478 = (inst_84476) || (inst_84477);var state_84507__$1 = (function (){var statearr_84514 = state_84507;(statearr_84514[10] = inst_84475__$1);
return statearr_84514;
})();if(cljs.core.truth_(inst_84478))
{var statearr_84515_84541 = state_84507__$1;(statearr_84515_84541[1] = 8);
} else
{var statearr_84516_84542 = state_84507__$1;(statearr_84516_84542[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84508 === 6))
{var inst_84467 = (state_84507[8]);var inst_84492 = inst_84467.length;var inst_84493 = (inst_84492 > 0);var state_84507__$1 = state_84507;if(cljs.core.truth_(inst_84493))
{var statearr_84518_84543 = state_84507__$1;(statearr_84518_84543[1] = 12);
} else
{var statearr_84519_84544 = state_84507__$1;(statearr_84519_84544[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84508 === 7))
{var inst_84503 = (state_84507[2]);var state_84507__$1 = state_84507;var statearr_84520_84545 = state_84507__$1;(statearr_84520_84545[2] = inst_84503);
(statearr_84520_84545[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84508 === 8))
{var inst_84467 = (state_84507[8]);var inst_84475 = (state_84507[10]);var inst_84471 = (state_84507[9]);var inst_84480 = inst_84467.push(inst_84471);var tmp84517 = inst_84467;var inst_84467__$1 = tmp84517;var inst_84468 = inst_84475;var state_84507__$1 = (function (){var statearr_84521 = state_84507;(statearr_84521[11] = inst_84480);
(statearr_84521[7] = inst_84468);
(statearr_84521[8] = inst_84467__$1);
return statearr_84521;
})();var statearr_84522_84546 = state_84507__$1;(statearr_84522_84546[2] = null);
(statearr_84522_84546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84508 === 9))
{var inst_84467 = (state_84507[8]);var inst_84483 = cljs.core.vec.call(null,inst_84467);var state_84507__$1 = state_84507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84507__$1,11,out,inst_84483);
} else
{if((state_val_84508 === 10))
{var inst_84490 = (state_84507[2]);var state_84507__$1 = state_84507;var statearr_84523_84547 = state_84507__$1;(statearr_84523_84547[2] = inst_84490);
(statearr_84523_84547[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84508 === 11))
{var inst_84475 = (state_84507[10]);var inst_84471 = (state_84507[9]);var inst_84485 = (state_84507[2]);var inst_84486 = [];var inst_84487 = inst_84486.push(inst_84471);var inst_84467 = inst_84486;var inst_84468 = inst_84475;var state_84507__$1 = (function (){var statearr_84524 = state_84507;(statearr_84524[12] = inst_84485);
(statearr_84524[13] = inst_84487);
(statearr_84524[7] = inst_84468);
(statearr_84524[8] = inst_84467);
return statearr_84524;
})();var statearr_84525_84548 = state_84507__$1;(statearr_84525_84548[2] = null);
(statearr_84525_84548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84508 === 12))
{var inst_84467 = (state_84507[8]);var inst_84495 = cljs.core.vec.call(null,inst_84467);var state_84507__$1 = state_84507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84507__$1,15,out,inst_84495);
} else
{if((state_val_84508 === 13))
{var state_84507__$1 = state_84507;var statearr_84526_84549 = state_84507__$1;(statearr_84526_84549[2] = null);
(statearr_84526_84549[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84508 === 14))
{var inst_84500 = (state_84507[2]);var inst_84501 = cljs.core.async.close_BANG_.call(null,out);var state_84507__$1 = (function (){var statearr_84527 = state_84507;(statearr_84527[14] = inst_84500);
return statearr_84527;
})();var statearr_84528_84550 = state_84507__$1;(statearr_84528_84550[2] = inst_84501);
(statearr_84528_84550[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84508 === 15))
{var inst_84497 = (state_84507[2]);var state_84507__$1 = state_84507;var statearr_84529_84551 = state_84507__$1;(statearr_84529_84551[2] = inst_84497);
(statearr_84529_84551[1] = 14);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_84533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_84533[0] = state_machine__12116__auto__);
(statearr_84533[1] = 1);
return statearr_84533;
});
var state_machine__12116__auto____1 = (function (state_84507){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_84507);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e84534){if((e84534 instanceof Object))
{var ex__12119__auto__ = e84534;var statearr_84535_84552 = state_84507;(statearr_84535_84552[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e84534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__84553 = state_84507;
state_84507 = G__84553;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_84507){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_84507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_84536 = f__12186__auto__.call(null);(statearr_84536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___84537);
return statearr_84536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
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