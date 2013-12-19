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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t179028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179028 = (function (f,fn_handler,meta179029){
this.f = f;
this.fn_handler = fn_handler;
this.meta179029 = meta179029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179028.cljs$lang$type = true;
cljs.core.async.t179028.cljs$lang$ctorStr = "cljs.core.async/t179028";
cljs.core.async.t179028.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t179028");
});
cljs.core.async.t179028.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t179028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t179028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t179028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179030){var self__ = this;
var _179030__$1 = this;return self__.meta179029;
});
cljs.core.async.t179028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179030,meta179029__$1){var self__ = this;
var _179030__$1 = this;return (new cljs.core.async.t179028(self__.f,self__.fn_handler,meta179029__$1));
});
cljs.core.async.__GT_t179028 = (function __GT_t179028(f__$1,fn_handler__$1,meta179029){return (new cljs.core.async.t179028(f__$1,fn_handler__$1,meta179029));
});
}
return (new cljs.core.async.t179028(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__179032 = buff;if(G__179032)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__179032.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__179032.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__179032);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__179032);
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
{var val_179033 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_179033);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_179033);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9051__auto___179034 = n;var x_179035 = 0;while(true){
if((x_179035 < n__9051__auto___179034))
{(a[x_179035] = 0);
{
var G__179036 = (x_179035 + 1);
x_179035 = G__179036;
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
var G__179037 = (i + 1);
i = G__179037;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t179041 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179041 = (function (flag,alt_flag,meta179042){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta179042 = meta179042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179041.cljs$lang$type = true;
cljs.core.async.t179041.cljs$lang$ctorStr = "cljs.core.async/t179041";
cljs.core.async.t179041.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t179041");
});
cljs.core.async.t179041.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t179041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t179041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t179041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179043){var self__ = this;
var _179043__$1 = this;return self__.meta179042;
});
cljs.core.async.t179041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179043,meta179042__$1){var self__ = this;
var _179043__$1 = this;return (new cljs.core.async.t179041(self__.flag,self__.alt_flag,meta179042__$1));
});
cljs.core.async.__GT_t179041 = (function __GT_t179041(flag__$1,alt_flag__$1,meta179042){return (new cljs.core.async.t179041(flag__$1,alt_flag__$1,meta179042));
});
}
return (new cljs.core.async.t179041(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t179047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179047 = (function (cb,flag,alt_handler,meta179048){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta179048 = meta179048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179047.cljs$lang$type = true;
cljs.core.async.t179047.cljs$lang$ctorStr = "cljs.core.async/t179047";
cljs.core.async.t179047.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t179047");
});
cljs.core.async.t179047.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t179047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t179047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t179047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179049){var self__ = this;
var _179049__$1 = this;return self__.meta179048;
});
cljs.core.async.t179047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179049,meta179048__$1){var self__ = this;
var _179049__$1 = this;return (new cljs.core.async.t179047(self__.cb,self__.flag,self__.alt_handler,meta179048__$1));
});
cljs.core.async.__GT_t179047 = (function __GT_t179047(cb__$1,flag__$1,alt_handler__$1,meta179048){return (new cljs.core.async.t179047(cb__$1,flag__$1,alt_handler__$1,meta179048));
});
}
return (new cljs.core.async.t179047(cb,flag,alt_handler,null));
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
return (function (p1__179050_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__179050_SHARP_,port], null));
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
var G__179051 = (i + 1);
i = G__179051;
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
var alts_BANG___delegate = function (ports,p__179052){var map__179054 = p__179052;var map__179054__$1 = ((cljs.core.seq_QMARK_.call(null,map__179054))?cljs.core.apply.call(null,cljs.core.hash_map,map__179054):map__179054);var opts = map__179054__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__179052 = null;if (arguments.length > 1) {
  p__179052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__179052);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__179055){
var ports = cljs.core.first(arglist__179055);
var p__179052 = cljs.core.rest(arglist__179055);
return alts_BANG___delegate(ports,p__179052);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t179063 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179063 = (function (ch,f,map_LT_,meta179064){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta179064 = meta179064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179063.cljs$lang$type = true;
cljs.core.async.t179063.cljs$lang$ctorStr = "cljs.core.async/t179063";
cljs.core.async.t179063.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t179063");
});
cljs.core.async.t179063.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t179063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t179063.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t179063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t179066 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179066 = (function (fn1,_,meta179064,ch,f,map_LT_,meta179067){
this.fn1 = fn1;
this._ = _;
this.meta179064 = meta179064;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta179067 = meta179067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179066.cljs$lang$type = true;
cljs.core.async.t179066.cljs$lang$ctorStr = "cljs.core.async/t179066";
cljs.core.async.t179066.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t179066");
});
cljs.core.async.t179066.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t179066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t179066.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t179066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__179056_SHARP_){return f1.call(null,(((p1__179056_SHARP_ == null))?null:self__.f.call(null,p1__179056_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t179066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179068){var self__ = this;
var _179068__$1 = this;return self__.meta179067;
});
cljs.core.async.t179066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179068,meta179067__$1){var self__ = this;
var _179068__$1 = this;return (new cljs.core.async.t179066(self__.fn1,self__._,self__.meta179064,self__.ch,self__.f,self__.map_LT_,meta179067__$1));
});
cljs.core.async.__GT_t179066 = (function __GT_t179066(fn1__$1,___$2,meta179064__$1,ch__$2,f__$2,map_LT___$2,meta179067){return (new cljs.core.async.t179066(fn1__$1,___$2,meta179064__$1,ch__$2,f__$2,map_LT___$2,meta179067));
});
}
return (new cljs.core.async.t179066(fn1,___$1,self__.meta179064,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t179063.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t179063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t179063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179065){var self__ = this;
var _179065__$1 = this;return self__.meta179064;
});
cljs.core.async.t179063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179065,meta179064__$1){var self__ = this;
var _179065__$1 = this;return (new cljs.core.async.t179063(self__.ch,self__.f,self__.map_LT_,meta179064__$1));
});
cljs.core.async.__GT_t179063 = (function __GT_t179063(ch__$1,f__$1,map_LT___$1,meta179064){return (new cljs.core.async.t179063(ch__$1,f__$1,map_LT___$1,meta179064));
});
}
return (new cljs.core.async.t179063(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t179072 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179072 = (function (ch,f,map_GT_,meta179073){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta179073 = meta179073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179072.cljs$lang$type = true;
cljs.core.async.t179072.cljs$lang$ctorStr = "cljs.core.async/t179072";
cljs.core.async.t179072.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t179072");
});
cljs.core.async.t179072.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t179072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t179072.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t179072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t179072.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t179072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t179072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179074){var self__ = this;
var _179074__$1 = this;return self__.meta179073;
});
cljs.core.async.t179072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179074,meta179073__$1){var self__ = this;
var _179074__$1 = this;return (new cljs.core.async.t179072(self__.ch,self__.f,self__.map_GT_,meta179073__$1));
});
cljs.core.async.__GT_t179072 = (function __GT_t179072(ch__$1,f__$1,map_GT___$1,meta179073){return (new cljs.core.async.t179072(ch__$1,f__$1,map_GT___$1,meta179073));
});
}
return (new cljs.core.async.t179072(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t179078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179078 = (function (ch,p,filter_GT_,meta179079){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta179079 = meta179079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179078.cljs$lang$type = true;
cljs.core.async.t179078.cljs$lang$ctorStr = "cljs.core.async/t179078";
cljs.core.async.t179078.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t179078");
});
cljs.core.async.t179078.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t179078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t179078.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t179078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t179078.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t179078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t179078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_179080){var self__ = this;
var _179080__$1 = this;return self__.meta179079;
});
cljs.core.async.t179078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_179080,meta179079__$1){var self__ = this;
var _179080__$1 = this;return (new cljs.core.async.t179078(self__.ch,self__.p,self__.filter_GT_,meta179079__$1));
});
cljs.core.async.__GT_t179078 = (function __GT_t179078(ch__$1,p__$1,filter_GT___$1,meta179079){return (new cljs.core.async.t179078(ch__$1,p__$1,filter_GT___$1,meta179079));
});
}
return (new cljs.core.async.t179078(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___179163 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_179142){var state_val_179143 = (state_179142[1]);if((state_val_179143 === 1))
{var state_179142__$1 = state_179142;var statearr_179144_179164 = state_179142__$1;(statearr_179144_179164[2] = null);
(statearr_179144_179164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179143 === 2))
{var state_179142__$1 = state_179142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179142__$1,4,ch);
} else
{if((state_val_179143 === 3))
{var inst_179140 = (state_179142[2]);var state_179142__$1 = state_179142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179142__$1,inst_179140);
} else
{if((state_val_179143 === 4))
{var inst_179124 = (state_179142[7]);var inst_179124__$1 = (state_179142[2]);var inst_179125 = (inst_179124__$1 == null);var state_179142__$1 = (function (){var statearr_179145 = state_179142;(statearr_179145[7] = inst_179124__$1);
return statearr_179145;
})();if(cljs.core.truth_(inst_179125))
{var statearr_179146_179165 = state_179142__$1;(statearr_179146_179165[1] = 5);
} else
{var statearr_179147_179166 = state_179142__$1;(statearr_179147_179166[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179143 === 5))
{var inst_179127 = cljs.core.async.close_BANG_.call(null,out);var state_179142__$1 = state_179142;var statearr_179148_179167 = state_179142__$1;(statearr_179148_179167[2] = inst_179127);
(statearr_179148_179167[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179143 === 6))
{var inst_179124 = (state_179142[7]);var inst_179129 = p.call(null,inst_179124);var state_179142__$1 = state_179142;if(cljs.core.truth_(inst_179129))
{var statearr_179149_179168 = state_179142__$1;(statearr_179149_179168[1] = 8);
} else
{var statearr_179150_179169 = state_179142__$1;(statearr_179150_179169[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179143 === 7))
{var inst_179138 = (state_179142[2]);var state_179142__$1 = state_179142;var statearr_179151_179170 = state_179142__$1;(statearr_179151_179170[2] = inst_179138);
(statearr_179151_179170[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179143 === 8))
{var inst_179124 = (state_179142[7]);var state_179142__$1 = state_179142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179142__$1,11,out,inst_179124);
} else
{if((state_val_179143 === 9))
{var state_179142__$1 = state_179142;var statearr_179152_179171 = state_179142__$1;(statearr_179152_179171[2] = null);
(statearr_179152_179171[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179143 === 10))
{var inst_179135 = (state_179142[2]);var state_179142__$1 = (function (){var statearr_179153 = state_179142;(statearr_179153[8] = inst_179135);
return statearr_179153;
})();var statearr_179154_179172 = state_179142__$1;(statearr_179154_179172[2] = null);
(statearr_179154_179172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179143 === 11))
{var inst_179132 = (state_179142[2]);var state_179142__$1 = state_179142;var statearr_179155_179173 = state_179142__$1;(statearr_179155_179173[2] = inst_179132);
(statearr_179155_179173[1] = 10);
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
var state_machine__12118__auto____0 = (function (){var statearr_179159 = [null,null,null,null,null,null,null,null,null];(statearr_179159[0] = state_machine__12118__auto__);
(statearr_179159[1] = 1);
return statearr_179159;
});
var state_machine__12118__auto____1 = (function (state_179142){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_179142);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e179160){if((e179160 instanceof Object))
{var ex__12121__auto__ = e179160;var statearr_179161_179174 = state_179142;(statearr_179161_179174[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179142);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179175 = state_179142;
state_179142 = G__179175;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_179142){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_179142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_179162 = f__12188__auto__.call(null);(statearr_179162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___179163);
return statearr_179162;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_179327){var state_val_179328 = (state_179327[1]);if((state_val_179328 === 1))
{var state_179327__$1 = state_179327;var statearr_179329_179366 = state_179327__$1;(statearr_179329_179366[2] = null);
(statearr_179329_179366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 2))
{var state_179327__$1 = state_179327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179327__$1,4,in$);
} else
{if((state_val_179328 === 3))
{var inst_179325 = (state_179327[2]);var state_179327__$1 = state_179327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179327__$1,inst_179325);
} else
{if((state_val_179328 === 4))
{var inst_179273 = (state_179327[7]);var inst_179273__$1 = (state_179327[2]);var inst_179274 = (inst_179273__$1 == null);var state_179327__$1 = (function (){var statearr_179330 = state_179327;(statearr_179330[7] = inst_179273__$1);
return statearr_179330;
})();if(cljs.core.truth_(inst_179274))
{var statearr_179331_179367 = state_179327__$1;(statearr_179331_179367[1] = 5);
} else
{var statearr_179332_179368 = state_179327__$1;(statearr_179332_179368[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 5))
{var inst_179276 = cljs.core.async.close_BANG_.call(null,out);var state_179327__$1 = state_179327;var statearr_179333_179369 = state_179327__$1;(statearr_179333_179369[2] = inst_179276);
(statearr_179333_179369[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 6))
{var inst_179273 = (state_179327[7]);var inst_179278 = f.call(null,inst_179273);var inst_179283 = cljs.core.seq.call(null,inst_179278);var inst_179284 = inst_179283;var inst_179285 = null;var inst_179286 = 0;var inst_179287 = 0;var state_179327__$1 = (function (){var statearr_179334 = state_179327;(statearr_179334[8] = inst_179286);
(statearr_179334[9] = inst_179287);
(statearr_179334[10] = inst_179284);
(statearr_179334[11] = inst_179285);
return statearr_179334;
})();var statearr_179335_179370 = state_179327__$1;(statearr_179335_179370[2] = null);
(statearr_179335_179370[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 7))
{var inst_179323 = (state_179327[2]);var state_179327__$1 = state_179327;var statearr_179336_179371 = state_179327__$1;(statearr_179336_179371[2] = inst_179323);
(statearr_179336_179371[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 8))
{var inst_179286 = (state_179327[8]);var inst_179287 = (state_179327[9]);var inst_179289 = (inst_179287 < inst_179286);var inst_179290 = inst_179289;var state_179327__$1 = state_179327;if(cljs.core.truth_(inst_179290))
{var statearr_179337_179372 = state_179327__$1;(statearr_179337_179372[1] = 10);
} else
{var statearr_179338_179373 = state_179327__$1;(statearr_179338_179373[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 9))
{var inst_179320 = (state_179327[2]);var state_179327__$1 = (function (){var statearr_179339 = state_179327;(statearr_179339[12] = inst_179320);
return statearr_179339;
})();var statearr_179340_179374 = state_179327__$1;(statearr_179340_179374[2] = null);
(statearr_179340_179374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 10))
{var inst_179287 = (state_179327[9]);var inst_179285 = (state_179327[11]);var inst_179292 = cljs.core._nth.call(null,inst_179285,inst_179287);var state_179327__$1 = state_179327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179327__$1,13,out,inst_179292);
} else
{if((state_val_179328 === 11))
{var inst_179284 = (state_179327[10]);var inst_179298 = (state_179327[13]);var inst_179298__$1 = cljs.core.seq.call(null,inst_179284);var state_179327__$1 = (function (){var statearr_179344 = state_179327;(statearr_179344[13] = inst_179298__$1);
return statearr_179344;
})();if(inst_179298__$1)
{var statearr_179345_179375 = state_179327__$1;(statearr_179345_179375[1] = 14);
} else
{var statearr_179346_179376 = state_179327__$1;(statearr_179346_179376[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 12))
{var inst_179318 = (state_179327[2]);var state_179327__$1 = state_179327;var statearr_179347_179377 = state_179327__$1;(statearr_179347_179377[2] = inst_179318);
(statearr_179347_179377[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 13))
{var inst_179286 = (state_179327[8]);var inst_179287 = (state_179327[9]);var inst_179284 = (state_179327[10]);var inst_179285 = (state_179327[11]);var inst_179294 = (state_179327[2]);var inst_179295 = (inst_179287 + 1);var tmp179341 = inst_179286;var tmp179342 = inst_179284;var tmp179343 = inst_179285;var inst_179284__$1 = tmp179342;var inst_179285__$1 = tmp179343;var inst_179286__$1 = tmp179341;var inst_179287__$1 = inst_179295;var state_179327__$1 = (function (){var statearr_179348 = state_179327;(statearr_179348[8] = inst_179286__$1);
(statearr_179348[9] = inst_179287__$1);
(statearr_179348[10] = inst_179284__$1);
(statearr_179348[11] = inst_179285__$1);
(statearr_179348[14] = inst_179294);
return statearr_179348;
})();var statearr_179349_179378 = state_179327__$1;(statearr_179349_179378[2] = null);
(statearr_179349_179378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 14))
{var inst_179298 = (state_179327[13]);var inst_179300 = cljs.core.chunked_seq_QMARK_.call(null,inst_179298);var state_179327__$1 = state_179327;if(inst_179300)
{var statearr_179350_179379 = state_179327__$1;(statearr_179350_179379[1] = 17);
} else
{var statearr_179351_179380 = state_179327__$1;(statearr_179351_179380[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 15))
{var state_179327__$1 = state_179327;var statearr_179352_179381 = state_179327__$1;(statearr_179352_179381[2] = null);
(statearr_179352_179381[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 16))
{var inst_179316 = (state_179327[2]);var state_179327__$1 = state_179327;var statearr_179353_179382 = state_179327__$1;(statearr_179353_179382[2] = inst_179316);
(statearr_179353_179382[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 17))
{var inst_179298 = (state_179327[13]);var inst_179302 = cljs.core.chunk_first.call(null,inst_179298);var inst_179303 = cljs.core.chunk_rest.call(null,inst_179298);var inst_179304 = cljs.core.count.call(null,inst_179302);var inst_179284 = inst_179303;var inst_179285 = inst_179302;var inst_179286 = inst_179304;var inst_179287 = 0;var state_179327__$1 = (function (){var statearr_179354 = state_179327;(statearr_179354[8] = inst_179286);
(statearr_179354[9] = inst_179287);
(statearr_179354[10] = inst_179284);
(statearr_179354[11] = inst_179285);
return statearr_179354;
})();var statearr_179355_179383 = state_179327__$1;(statearr_179355_179383[2] = null);
(statearr_179355_179383[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 18))
{var inst_179298 = (state_179327[13]);var inst_179307 = cljs.core.first.call(null,inst_179298);var state_179327__$1 = state_179327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179327__$1,20,out,inst_179307);
} else
{if((state_val_179328 === 19))
{var inst_179313 = (state_179327[2]);var state_179327__$1 = state_179327;var statearr_179356_179384 = state_179327__$1;(statearr_179356_179384[2] = inst_179313);
(statearr_179356_179384[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179328 === 20))
{var inst_179298 = (state_179327[13]);var inst_179309 = (state_179327[2]);var inst_179310 = cljs.core.next.call(null,inst_179298);var inst_179284 = inst_179310;var inst_179285 = null;var inst_179286 = 0;var inst_179287 = 0;var state_179327__$1 = (function (){var statearr_179357 = state_179327;(statearr_179357[8] = inst_179286);
(statearr_179357[9] = inst_179287);
(statearr_179357[10] = inst_179284);
(statearr_179357[11] = inst_179285);
(statearr_179357[15] = inst_179309);
return statearr_179357;
})();var statearr_179358_179385 = state_179327__$1;(statearr_179358_179385[2] = null);
(statearr_179358_179385[1] = 8);
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
var state_machine__12118__auto____0 = (function (){var statearr_179362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_179362[0] = state_machine__12118__auto__);
(statearr_179362[1] = 1);
return statearr_179362;
});
var state_machine__12118__auto____1 = (function (state_179327){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_179327);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e179363){if((e179363 instanceof Object))
{var ex__12121__auto__ = e179363;var statearr_179364_179386 = state_179327;(statearr_179364_179386[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179327);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179387 = state_179327;
state_179327 = G__179387;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_179327){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_179327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_179365 = f__12188__auto__.call(null);(statearr_179365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_179365;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12187__auto___179468 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_179447){var state_val_179448 = (state_179447[1]);if((state_val_179448 === 1))
{var state_179447__$1 = state_179447;var statearr_179449_179469 = state_179447__$1;(statearr_179449_179469[2] = null);
(statearr_179449_179469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179448 === 2))
{var state_179447__$1 = state_179447;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179447__$1,4,from);
} else
{if((state_val_179448 === 3))
{var inst_179445 = (state_179447[2]);var state_179447__$1 = state_179447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179447__$1,inst_179445);
} else
{if((state_val_179448 === 4))
{var inst_179430 = (state_179447[7]);var inst_179430__$1 = (state_179447[2]);var inst_179431 = (inst_179430__$1 == null);var state_179447__$1 = (function (){var statearr_179450 = state_179447;(statearr_179450[7] = inst_179430__$1);
return statearr_179450;
})();if(cljs.core.truth_(inst_179431))
{var statearr_179451_179470 = state_179447__$1;(statearr_179451_179470[1] = 5);
} else
{var statearr_179452_179471 = state_179447__$1;(statearr_179452_179471[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179448 === 5))
{var state_179447__$1 = state_179447;if(cljs.core.truth_(close_QMARK_))
{var statearr_179453_179472 = state_179447__$1;(statearr_179453_179472[1] = 8);
} else
{var statearr_179454_179473 = state_179447__$1;(statearr_179454_179473[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179448 === 6))
{var inst_179430 = (state_179447[7]);var state_179447__$1 = state_179447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179447__$1,11,to,inst_179430);
} else
{if((state_val_179448 === 7))
{var inst_179443 = (state_179447[2]);var state_179447__$1 = state_179447;var statearr_179455_179474 = state_179447__$1;(statearr_179455_179474[2] = inst_179443);
(statearr_179455_179474[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179448 === 8))
{var inst_179434 = cljs.core.async.close_BANG_.call(null,to);var state_179447__$1 = state_179447;var statearr_179456_179475 = state_179447__$1;(statearr_179456_179475[2] = inst_179434);
(statearr_179456_179475[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179448 === 9))
{var state_179447__$1 = state_179447;var statearr_179457_179476 = state_179447__$1;(statearr_179457_179476[2] = null);
(statearr_179457_179476[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179448 === 10))
{var inst_179437 = (state_179447[2]);var state_179447__$1 = state_179447;var statearr_179458_179477 = state_179447__$1;(statearr_179458_179477[2] = inst_179437);
(statearr_179458_179477[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179448 === 11))
{var inst_179440 = (state_179447[2]);var state_179447__$1 = (function (){var statearr_179459 = state_179447;(statearr_179459[8] = inst_179440);
return statearr_179459;
})();var statearr_179460_179478 = state_179447__$1;(statearr_179460_179478[2] = null);
(statearr_179460_179478[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_179464 = [null,null,null,null,null,null,null,null,null];(statearr_179464[0] = state_machine__12118__auto__);
(statearr_179464[1] = 1);
return statearr_179464;
});
var state_machine__12118__auto____1 = (function (state_179447){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_179447);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e179465){if((e179465 instanceof Object))
{var ex__12121__auto__ = e179465;var statearr_179466_179479 = state_179447;(statearr_179466_179479[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179447);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179480 = state_179447;
state_179447 = G__179480;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_179447){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_179447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_179467 = f__12188__auto__.call(null);(statearr_179467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___179468);
return statearr_179467;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12187__auto___179567 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_179545){var state_val_179546 = (state_179545[1]);if((state_val_179546 === 1))
{var state_179545__$1 = state_179545;var statearr_179547_179568 = state_179545__$1;(statearr_179547_179568[2] = null);
(statearr_179547_179568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179546 === 2))
{var state_179545__$1 = state_179545;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179545__$1,4,ch);
} else
{if((state_val_179546 === 3))
{var inst_179543 = (state_179545[2]);var state_179545__$1 = state_179545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179545__$1,inst_179543);
} else
{if((state_val_179546 === 4))
{var inst_179526 = (state_179545[7]);var inst_179526__$1 = (state_179545[2]);var inst_179527 = (inst_179526__$1 == null);var state_179545__$1 = (function (){var statearr_179548 = state_179545;(statearr_179548[7] = inst_179526__$1);
return statearr_179548;
})();if(cljs.core.truth_(inst_179527))
{var statearr_179549_179569 = state_179545__$1;(statearr_179549_179569[1] = 5);
} else
{var statearr_179550_179570 = state_179545__$1;(statearr_179550_179570[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179546 === 5))
{var inst_179529 = cljs.core.async.close_BANG_.call(null,tc);var inst_179530 = cljs.core.async.close_BANG_.call(null,fc);var state_179545__$1 = (function (){var statearr_179551 = state_179545;(statearr_179551[8] = inst_179529);
return statearr_179551;
})();var statearr_179552_179571 = state_179545__$1;(statearr_179552_179571[2] = inst_179530);
(statearr_179552_179571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179546 === 6))
{var inst_179526 = (state_179545[7]);var inst_179532 = p.call(null,inst_179526);var state_179545__$1 = state_179545;if(cljs.core.truth_(inst_179532))
{var statearr_179553_179572 = state_179545__$1;(statearr_179553_179572[1] = 9);
} else
{var statearr_179554_179573 = state_179545__$1;(statearr_179554_179573[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179546 === 7))
{var inst_179541 = (state_179545[2]);var state_179545__$1 = state_179545;var statearr_179555_179574 = state_179545__$1;(statearr_179555_179574[2] = inst_179541);
(statearr_179555_179574[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179546 === 8))
{var inst_179538 = (state_179545[2]);var state_179545__$1 = (function (){var statearr_179556 = state_179545;(statearr_179556[9] = inst_179538);
return statearr_179556;
})();var statearr_179557_179575 = state_179545__$1;(statearr_179557_179575[2] = null);
(statearr_179557_179575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179546 === 9))
{var state_179545__$1 = state_179545;var statearr_179558_179576 = state_179545__$1;(statearr_179558_179576[2] = tc);
(statearr_179558_179576[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179546 === 10))
{var state_179545__$1 = state_179545;var statearr_179559_179577 = state_179545__$1;(statearr_179559_179577[2] = fc);
(statearr_179559_179577[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179546 === 11))
{var inst_179526 = (state_179545[7]);var inst_179536 = (state_179545[2]);var state_179545__$1 = state_179545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179545__$1,8,inst_179536,inst_179526);
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
var state_machine__12118__auto____0 = (function (){var statearr_179563 = [null,null,null,null,null,null,null,null,null,null];(statearr_179563[0] = state_machine__12118__auto__);
(statearr_179563[1] = 1);
return statearr_179563;
});
var state_machine__12118__auto____1 = (function (state_179545){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_179545);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e179564){if((e179564 instanceof Object))
{var ex__12121__auto__ = e179564;var statearr_179565_179578 = state_179545;(statearr_179565_179578[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179545);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179579 = state_179545;
state_179545 = G__179579;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_179545){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_179545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_179566 = f__12188__auto__.call(null);(statearr_179566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___179567);
return statearr_179566;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_179626){var state_val_179627 = (state_179626[1]);if((state_val_179627 === 7))
{var inst_179622 = (state_179626[2]);var state_179626__$1 = state_179626;var statearr_179628_179644 = state_179626__$1;(statearr_179628_179644[2] = inst_179622);
(statearr_179628_179644[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179627 === 6))
{var inst_179615 = (state_179626[7]);var inst_179612 = (state_179626[8]);var inst_179619 = f.call(null,inst_179612,inst_179615);var inst_179612__$1 = inst_179619;var state_179626__$1 = (function (){var statearr_179629 = state_179626;(statearr_179629[8] = inst_179612__$1);
return statearr_179629;
})();var statearr_179630_179645 = state_179626__$1;(statearr_179630_179645[2] = null);
(statearr_179630_179645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179627 === 5))
{var inst_179612 = (state_179626[8]);var state_179626__$1 = state_179626;var statearr_179631_179646 = state_179626__$1;(statearr_179631_179646[2] = inst_179612);
(statearr_179631_179646[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179627 === 4))
{var inst_179615 = (state_179626[7]);var inst_179615__$1 = (state_179626[2]);var inst_179616 = (inst_179615__$1 == null);var state_179626__$1 = (function (){var statearr_179632 = state_179626;(statearr_179632[7] = inst_179615__$1);
return statearr_179632;
})();if(cljs.core.truth_(inst_179616))
{var statearr_179633_179647 = state_179626__$1;(statearr_179633_179647[1] = 5);
} else
{var statearr_179634_179648 = state_179626__$1;(statearr_179634_179648[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179627 === 3))
{var inst_179624 = (state_179626[2]);var state_179626__$1 = state_179626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179626__$1,inst_179624);
} else
{if((state_val_179627 === 2))
{var state_179626__$1 = state_179626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_179626__$1,4,ch);
} else
{if((state_val_179627 === 1))
{var inst_179612 = init;var state_179626__$1 = (function (){var statearr_179635 = state_179626;(statearr_179635[8] = inst_179612);
return statearr_179635;
})();var statearr_179636_179649 = state_179626__$1;(statearr_179636_179649[2] = null);
(statearr_179636_179649[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_179640 = [null,null,null,null,null,null,null,null,null];(statearr_179640[0] = state_machine__12118__auto__);
(statearr_179640[1] = 1);
return statearr_179640;
});
var state_machine__12118__auto____1 = (function (state_179626){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_179626);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e179641){if((e179641 instanceof Object))
{var ex__12121__auto__ = e179641;var statearr_179642_179650 = state_179626;(statearr_179642_179650[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179651 = state_179626;
state_179626 = G__179651;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_179626){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_179626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_179643 = f__12188__auto__.call(null);(statearr_179643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_179643;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_179713){var state_val_179714 = (state_179713[1]);if((state_val_179714 === 1))
{var inst_179693 = cljs.core.seq.call(null,coll);var inst_179694 = inst_179693;var state_179713__$1 = (function (){var statearr_179715 = state_179713;(statearr_179715[7] = inst_179694);
return statearr_179715;
})();var statearr_179716_179734 = state_179713__$1;(statearr_179716_179734[2] = null);
(statearr_179716_179734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179714 === 2))
{var inst_179694 = (state_179713[7]);var state_179713__$1 = state_179713;if(cljs.core.truth_(inst_179694))
{var statearr_179717_179735 = state_179713__$1;(statearr_179717_179735[1] = 4);
} else
{var statearr_179718_179736 = state_179713__$1;(statearr_179718_179736[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179714 === 3))
{var inst_179711 = (state_179713[2]);var state_179713__$1 = state_179713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_179713__$1,inst_179711);
} else
{if((state_val_179714 === 4))
{var inst_179694 = (state_179713[7]);var inst_179697 = cljs.core.first.call(null,inst_179694);var state_179713__$1 = state_179713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_179713__$1,7,ch,inst_179697);
} else
{if((state_val_179714 === 5))
{var state_179713__$1 = state_179713;if(cljs.core.truth_(close_QMARK_))
{var statearr_179719_179737 = state_179713__$1;(statearr_179719_179737[1] = 8);
} else
{var statearr_179720_179738 = state_179713__$1;(statearr_179720_179738[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179714 === 6))
{var inst_179709 = (state_179713[2]);var state_179713__$1 = state_179713;var statearr_179721_179739 = state_179713__$1;(statearr_179721_179739[2] = inst_179709);
(statearr_179721_179739[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179714 === 7))
{var inst_179694 = (state_179713[7]);var inst_179699 = (state_179713[2]);var inst_179700 = cljs.core.next.call(null,inst_179694);var inst_179694__$1 = inst_179700;var state_179713__$1 = (function (){var statearr_179722 = state_179713;(statearr_179722[7] = inst_179694__$1);
(statearr_179722[8] = inst_179699);
return statearr_179722;
})();var statearr_179723_179740 = state_179713__$1;(statearr_179723_179740[2] = null);
(statearr_179723_179740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179714 === 8))
{var inst_179704 = cljs.core.async.close_BANG_.call(null,ch);var state_179713__$1 = state_179713;var statearr_179724_179741 = state_179713__$1;(statearr_179724_179741[2] = inst_179704);
(statearr_179724_179741[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179714 === 9))
{var state_179713__$1 = state_179713;var statearr_179725_179742 = state_179713__$1;(statearr_179725_179742[2] = null);
(statearr_179725_179742[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_179714 === 10))
{var inst_179707 = (state_179713[2]);var state_179713__$1 = state_179713;var statearr_179726_179743 = state_179713__$1;(statearr_179726_179743[2] = inst_179707);
(statearr_179726_179743[1] = 6);
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
var state_machine__12118__auto____0 = (function (){var statearr_179730 = [null,null,null,null,null,null,null,null,null];(statearr_179730[0] = state_machine__12118__auto__);
(statearr_179730[1] = 1);
return statearr_179730;
});
var state_machine__12118__auto____1 = (function (state_179713){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_179713);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e179731){if((e179731 instanceof Object))
{var ex__12121__auto__ = e179731;var statearr_179732_179744 = state_179713;(statearr_179732_179744[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_179713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e179731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__179745 = state_179713;
state_179713 = G__179745;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_179713){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_179713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_179733 = f__12188__auto__.call(null);(statearr_179733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_179733;
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
cljs.core.async.Mux = (function (){var obj179747 = {};return obj179747;
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
cljs.core.async.Mult = (function (){var obj179749 = {};return obj179749;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t179973 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t179973 = (function (cs,ch,mult,meta179974){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta179974 = meta179974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t179973.cljs$lang$type = true;
cljs.core.async.t179973.cljs$lang$ctorStr = "cljs.core.async/t179973";
cljs.core.async.t179973.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t179973");
});})(cs))
;
cljs.core.async.t179973.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t179973.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t179973.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t179973.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t179973.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t179973.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t179973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_179975){var self__ = this;
var _179975__$1 = this;return self__.meta179974;
});})(cs))
;
cljs.core.async.t179973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_179975,meta179974__$1){var self__ = this;
var _179975__$1 = this;return (new cljs.core.async.t179973(self__.cs,self__.ch,self__.mult,meta179974__$1));
});})(cs))
;
cljs.core.async.__GT_t179973 = ((function (cs){
return (function __GT_t179973(cs__$1,ch__$1,mult__$1,meta179974){return (new cljs.core.async.t179973(cs__$1,ch__$1,mult__$1,meta179974));
});})(cs))
;
}
return (new cljs.core.async.t179973(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12187__auto___180196 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_180110){var state_val_180111 = (state_180110[1]);if((state_val_180111 === 32))
{var inst_179978 = (state_180110[7]);var inst_180054 = (state_180110[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_180110,31,Object,null,30);var inst_180061 = cljs.core.async.put_BANG_.call(null,inst_180054,inst_179978,done);var state_180110__$1 = state_180110;var statearr_180112_180197 = state_180110__$1;(statearr_180112_180197[2] = inst_180061);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180110__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 1))
{var state_180110__$1 = state_180110;var statearr_180113_180198 = state_180110__$1;(statearr_180113_180198[2] = null);
(statearr_180113_180198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 33))
{var inst_180067 = (state_180110[9]);var inst_180069 = cljs.core.chunked_seq_QMARK_.call(null,inst_180067);var state_180110__$1 = state_180110;if(inst_180069)
{var statearr_180114_180199 = state_180110__$1;(statearr_180114_180199[1] = 36);
} else
{var statearr_180115_180200 = state_180110__$1;(statearr_180115_180200[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 2))
{var state_180110__$1 = state_180110;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180110__$1,4,ch);
} else
{if((state_val_180111 === 34))
{var state_180110__$1 = state_180110;var statearr_180116_180201 = state_180110__$1;(statearr_180116_180201[2] = null);
(statearr_180116_180201[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 3))
{var inst_180108 = (state_180110[2]);var state_180110__$1 = state_180110;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180110__$1,inst_180108);
} else
{if((state_val_180111 === 35))
{var inst_180092 = (state_180110[2]);var state_180110__$1 = state_180110;var statearr_180117_180202 = state_180110__$1;(statearr_180117_180202[2] = inst_180092);
(statearr_180117_180202[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 4))
{var inst_179978 = (state_180110[7]);var inst_179978__$1 = (state_180110[2]);var inst_179979 = (inst_179978__$1 == null);var state_180110__$1 = (function (){var statearr_180118 = state_180110;(statearr_180118[7] = inst_179978__$1);
return statearr_180118;
})();if(cljs.core.truth_(inst_179979))
{var statearr_180119_180203 = state_180110__$1;(statearr_180119_180203[1] = 5);
} else
{var statearr_180120_180204 = state_180110__$1;(statearr_180120_180204[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 36))
{var inst_180067 = (state_180110[9]);var inst_180071 = cljs.core.chunk_first.call(null,inst_180067);var inst_180072 = cljs.core.chunk_rest.call(null,inst_180067);var inst_180073 = cljs.core.count.call(null,inst_180071);var inst_180046 = inst_180072;var inst_180047 = inst_180071;var inst_180048 = inst_180073;var inst_180049 = 0;var state_180110__$1 = (function (){var statearr_180121 = state_180110;(statearr_180121[10] = inst_180047);
(statearr_180121[11] = inst_180046);
(statearr_180121[12] = inst_180048);
(statearr_180121[13] = inst_180049);
return statearr_180121;
})();var statearr_180122_180205 = state_180110__$1;(statearr_180122_180205[2] = null);
(statearr_180122_180205[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 5))
{var inst_179985 = cljs.core.deref.call(null,cs);var inst_179986 = cljs.core.seq.call(null,inst_179985);var inst_179987 = inst_179986;var inst_179988 = null;var inst_179989 = 0;var inst_179990 = 0;var state_180110__$1 = (function (){var statearr_180123 = state_180110;(statearr_180123[14] = inst_179990);
(statearr_180123[15] = inst_179987);
(statearr_180123[16] = inst_179988);
(statearr_180123[17] = inst_179989);
return statearr_180123;
})();var statearr_180124_180206 = state_180110__$1;(statearr_180124_180206[2] = null);
(statearr_180124_180206[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 37))
{var inst_180067 = (state_180110[9]);var inst_180076 = cljs.core.first.call(null,inst_180067);var state_180110__$1 = (function (){var statearr_180125 = state_180110;(statearr_180125[18] = inst_180076);
return statearr_180125;
})();var statearr_180126_180207 = state_180110__$1;(statearr_180126_180207[2] = null);
(statearr_180126_180207[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 6))
{var inst_180038 = (state_180110[19]);var inst_180037 = cljs.core.deref.call(null,cs);var inst_180038__$1 = cljs.core.keys.call(null,inst_180037);var inst_180039 = cljs.core.count.call(null,inst_180038__$1);var inst_180040 = cljs.core.reset_BANG_.call(null,dctr,inst_180039);var inst_180045 = cljs.core.seq.call(null,inst_180038__$1);var inst_180046 = inst_180045;var inst_180047 = null;var inst_180048 = 0;var inst_180049 = 0;var state_180110__$1 = (function (){var statearr_180127 = state_180110;(statearr_180127[19] = inst_180038__$1);
(statearr_180127[10] = inst_180047);
(statearr_180127[11] = inst_180046);
(statearr_180127[12] = inst_180048);
(statearr_180127[13] = inst_180049);
(statearr_180127[20] = inst_180040);
return statearr_180127;
})();var statearr_180128_180208 = state_180110__$1;(statearr_180128_180208[2] = null);
(statearr_180128_180208[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 38))
{var inst_180089 = (state_180110[2]);var state_180110__$1 = state_180110;var statearr_180129_180209 = state_180110__$1;(statearr_180129_180209[2] = inst_180089);
(statearr_180129_180209[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 7))
{var inst_180106 = (state_180110[2]);var state_180110__$1 = state_180110;var statearr_180130_180210 = state_180110__$1;(statearr_180130_180210[2] = inst_180106);
(statearr_180130_180210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 39))
{var inst_180067 = (state_180110[9]);var inst_180085 = (state_180110[2]);var inst_180086 = cljs.core.next.call(null,inst_180067);var inst_180046 = inst_180086;var inst_180047 = null;var inst_180048 = 0;var inst_180049 = 0;var state_180110__$1 = (function (){var statearr_180131 = state_180110;(statearr_180131[10] = inst_180047);
(statearr_180131[11] = inst_180046);
(statearr_180131[12] = inst_180048);
(statearr_180131[13] = inst_180049);
(statearr_180131[21] = inst_180085);
return statearr_180131;
})();var statearr_180132_180211 = state_180110__$1;(statearr_180132_180211[2] = null);
(statearr_180132_180211[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 8))
{var inst_179990 = (state_180110[14]);var inst_179989 = (state_180110[17]);var inst_179992 = (inst_179990 < inst_179989);var inst_179993 = inst_179992;var state_180110__$1 = state_180110;if(cljs.core.truth_(inst_179993))
{var statearr_180133_180212 = state_180110__$1;(statearr_180133_180212[1] = 10);
} else
{var statearr_180134_180213 = state_180110__$1;(statearr_180134_180213[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 40))
{var inst_180076 = (state_180110[18]);var inst_180077 = (state_180110[2]);var inst_180078 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_180079 = cljs.core.async.untap_STAR_.call(null,m,inst_180076);var state_180110__$1 = (function (){var statearr_180135 = state_180110;(statearr_180135[22] = inst_180078);
(statearr_180135[23] = inst_180077);
return statearr_180135;
})();var statearr_180136_180214 = state_180110__$1;(statearr_180136_180214[2] = inst_180079);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180110__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 9))
{var inst_180035 = (state_180110[2]);var state_180110__$1 = state_180110;var statearr_180137_180215 = state_180110__$1;(statearr_180137_180215[2] = inst_180035);
(statearr_180137_180215[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 41))
{var inst_179978 = (state_180110[7]);var inst_180076 = (state_180110[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_180110,40,Object,null,39);var inst_180083 = cljs.core.async.put_BANG_.call(null,inst_180076,inst_179978,done);var state_180110__$1 = state_180110;var statearr_180138_180216 = state_180110__$1;(statearr_180138_180216[2] = inst_180083);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180110__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 10))
{var inst_179990 = (state_180110[14]);var inst_179988 = (state_180110[16]);var inst_179996 = cljs.core._nth.call(null,inst_179988,inst_179990);var inst_179997 = cljs.core.nth.call(null,inst_179996,0,null);var inst_179998 = cljs.core.nth.call(null,inst_179996,1,null);var state_180110__$1 = (function (){var statearr_180139 = state_180110;(statearr_180139[24] = inst_179997);
return statearr_180139;
})();if(cljs.core.truth_(inst_179998))
{var statearr_180140_180217 = state_180110__$1;(statearr_180140_180217[1] = 13);
} else
{var statearr_180141_180218 = state_180110__$1;(statearr_180141_180218[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 42))
{var state_180110__$1 = state_180110;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180110__$1,45,dchan);
} else
{if((state_val_180111 === 11))
{var inst_180007 = (state_180110[25]);var inst_179987 = (state_180110[15]);var inst_180007__$1 = cljs.core.seq.call(null,inst_179987);var state_180110__$1 = (function (){var statearr_180142 = state_180110;(statearr_180142[25] = inst_180007__$1);
return statearr_180142;
})();if(inst_180007__$1)
{var statearr_180143_180219 = state_180110__$1;(statearr_180143_180219[1] = 16);
} else
{var statearr_180144_180220 = state_180110__$1;(statearr_180144_180220[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 43))
{var state_180110__$1 = state_180110;var statearr_180145_180221 = state_180110__$1;(statearr_180145_180221[2] = null);
(statearr_180145_180221[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 12))
{var inst_180033 = (state_180110[2]);var state_180110__$1 = state_180110;var statearr_180146_180222 = state_180110__$1;(statearr_180146_180222[2] = inst_180033);
(statearr_180146_180222[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 44))
{var inst_180103 = (state_180110[2]);var state_180110__$1 = (function (){var statearr_180147 = state_180110;(statearr_180147[26] = inst_180103);
return statearr_180147;
})();var statearr_180148_180223 = state_180110__$1;(statearr_180148_180223[2] = null);
(statearr_180148_180223[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 13))
{var inst_179997 = (state_180110[24]);var inst_180000 = cljs.core.async.close_BANG_.call(null,inst_179997);var state_180110__$1 = state_180110;var statearr_180149_180224 = state_180110__$1;(statearr_180149_180224[2] = inst_180000);
(statearr_180149_180224[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 45))
{var inst_180100 = (state_180110[2]);var state_180110__$1 = state_180110;var statearr_180153_180225 = state_180110__$1;(statearr_180153_180225[2] = inst_180100);
(statearr_180153_180225[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 14))
{var state_180110__$1 = state_180110;var statearr_180154_180226 = state_180110__$1;(statearr_180154_180226[2] = null);
(statearr_180154_180226[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 15))
{var inst_179990 = (state_180110[14]);var inst_179987 = (state_180110[15]);var inst_179988 = (state_180110[16]);var inst_179989 = (state_180110[17]);var inst_180003 = (state_180110[2]);var inst_180004 = (inst_179990 + 1);var tmp180150 = inst_179987;var tmp180151 = inst_179988;var tmp180152 = inst_179989;var inst_179987__$1 = tmp180150;var inst_179988__$1 = tmp180151;var inst_179989__$1 = tmp180152;var inst_179990__$1 = inst_180004;var state_180110__$1 = (function (){var statearr_180155 = state_180110;(statearr_180155[14] = inst_179990__$1);
(statearr_180155[27] = inst_180003);
(statearr_180155[15] = inst_179987__$1);
(statearr_180155[16] = inst_179988__$1);
(statearr_180155[17] = inst_179989__$1);
return statearr_180155;
})();var statearr_180156_180227 = state_180110__$1;(statearr_180156_180227[2] = null);
(statearr_180156_180227[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 16))
{var inst_180007 = (state_180110[25]);var inst_180009 = cljs.core.chunked_seq_QMARK_.call(null,inst_180007);var state_180110__$1 = state_180110;if(inst_180009)
{var statearr_180157_180228 = state_180110__$1;(statearr_180157_180228[1] = 19);
} else
{var statearr_180158_180229 = state_180110__$1;(statearr_180158_180229[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 17))
{var state_180110__$1 = state_180110;var statearr_180159_180230 = state_180110__$1;(statearr_180159_180230[2] = null);
(statearr_180159_180230[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 18))
{var inst_180031 = (state_180110[2]);var state_180110__$1 = state_180110;var statearr_180160_180231 = state_180110__$1;(statearr_180160_180231[2] = inst_180031);
(statearr_180160_180231[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 19))
{var inst_180007 = (state_180110[25]);var inst_180011 = cljs.core.chunk_first.call(null,inst_180007);var inst_180012 = cljs.core.chunk_rest.call(null,inst_180007);var inst_180013 = cljs.core.count.call(null,inst_180011);var inst_179987 = inst_180012;var inst_179988 = inst_180011;var inst_179989 = inst_180013;var inst_179990 = 0;var state_180110__$1 = (function (){var statearr_180161 = state_180110;(statearr_180161[14] = inst_179990);
(statearr_180161[15] = inst_179987);
(statearr_180161[16] = inst_179988);
(statearr_180161[17] = inst_179989);
return statearr_180161;
})();var statearr_180162_180232 = state_180110__$1;(statearr_180162_180232[2] = null);
(statearr_180162_180232[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 20))
{var inst_180007 = (state_180110[25]);var inst_180017 = cljs.core.first.call(null,inst_180007);var inst_180018 = cljs.core.nth.call(null,inst_180017,0,null);var inst_180019 = cljs.core.nth.call(null,inst_180017,1,null);var state_180110__$1 = (function (){var statearr_180163 = state_180110;(statearr_180163[28] = inst_180018);
return statearr_180163;
})();if(cljs.core.truth_(inst_180019))
{var statearr_180164_180233 = state_180110__$1;(statearr_180164_180233[1] = 22);
} else
{var statearr_180165_180234 = state_180110__$1;(statearr_180165_180234[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 21))
{var inst_180028 = (state_180110[2]);var state_180110__$1 = state_180110;var statearr_180166_180235 = state_180110__$1;(statearr_180166_180235[2] = inst_180028);
(statearr_180166_180235[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 22))
{var inst_180018 = (state_180110[28]);var inst_180021 = cljs.core.async.close_BANG_.call(null,inst_180018);var state_180110__$1 = state_180110;var statearr_180167_180236 = state_180110__$1;(statearr_180167_180236[2] = inst_180021);
(statearr_180167_180236[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 23))
{var state_180110__$1 = state_180110;var statearr_180168_180237 = state_180110__$1;(statearr_180168_180237[2] = null);
(statearr_180168_180237[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 24))
{var inst_180007 = (state_180110[25]);var inst_180024 = (state_180110[2]);var inst_180025 = cljs.core.next.call(null,inst_180007);var inst_179987 = inst_180025;var inst_179988 = null;var inst_179989 = 0;var inst_179990 = 0;var state_180110__$1 = (function (){var statearr_180169 = state_180110;(statearr_180169[14] = inst_179990);
(statearr_180169[15] = inst_179987);
(statearr_180169[16] = inst_179988);
(statearr_180169[17] = inst_179989);
(statearr_180169[29] = inst_180024);
return statearr_180169;
})();var statearr_180170_180238 = state_180110__$1;(statearr_180170_180238[2] = null);
(statearr_180170_180238[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 25))
{var inst_180048 = (state_180110[12]);var inst_180049 = (state_180110[13]);var inst_180051 = (inst_180049 < inst_180048);var inst_180052 = inst_180051;var state_180110__$1 = state_180110;if(cljs.core.truth_(inst_180052))
{var statearr_180171_180239 = state_180110__$1;(statearr_180171_180239[1] = 27);
} else
{var statearr_180172_180240 = state_180110__$1;(statearr_180172_180240[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 26))
{var inst_180038 = (state_180110[19]);var inst_180096 = (state_180110[2]);var inst_180097 = cljs.core.seq.call(null,inst_180038);var state_180110__$1 = (function (){var statearr_180173 = state_180110;(statearr_180173[30] = inst_180096);
return statearr_180173;
})();if(inst_180097)
{var statearr_180174_180241 = state_180110__$1;(statearr_180174_180241[1] = 42);
} else
{var statearr_180175_180242 = state_180110__$1;(statearr_180175_180242[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 27))
{var inst_180047 = (state_180110[10]);var inst_180049 = (state_180110[13]);var inst_180054 = cljs.core._nth.call(null,inst_180047,inst_180049);var state_180110__$1 = (function (){var statearr_180176 = state_180110;(statearr_180176[8] = inst_180054);
return statearr_180176;
})();var statearr_180177_180243 = state_180110__$1;(statearr_180177_180243[2] = null);
(statearr_180177_180243[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 28))
{var inst_180046 = (state_180110[11]);var inst_180067 = (state_180110[9]);var inst_180067__$1 = cljs.core.seq.call(null,inst_180046);var state_180110__$1 = (function (){var statearr_180181 = state_180110;(statearr_180181[9] = inst_180067__$1);
return statearr_180181;
})();if(inst_180067__$1)
{var statearr_180182_180244 = state_180110__$1;(statearr_180182_180244[1] = 33);
} else
{var statearr_180183_180245 = state_180110__$1;(statearr_180183_180245[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 29))
{var inst_180094 = (state_180110[2]);var state_180110__$1 = state_180110;var statearr_180184_180246 = state_180110__$1;(statearr_180184_180246[2] = inst_180094);
(statearr_180184_180246[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 30))
{var inst_180047 = (state_180110[10]);var inst_180046 = (state_180110[11]);var inst_180048 = (state_180110[12]);var inst_180049 = (state_180110[13]);var inst_180063 = (state_180110[2]);var inst_180064 = (inst_180049 + 1);var tmp180178 = inst_180047;var tmp180179 = inst_180046;var tmp180180 = inst_180048;var inst_180046__$1 = tmp180179;var inst_180047__$1 = tmp180178;var inst_180048__$1 = tmp180180;var inst_180049__$1 = inst_180064;var state_180110__$1 = (function (){var statearr_180185 = state_180110;(statearr_180185[31] = inst_180063);
(statearr_180185[10] = inst_180047__$1);
(statearr_180185[11] = inst_180046__$1);
(statearr_180185[12] = inst_180048__$1);
(statearr_180185[13] = inst_180049__$1);
return statearr_180185;
})();var statearr_180186_180247 = state_180110__$1;(statearr_180186_180247[2] = null);
(statearr_180186_180247[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180111 === 31))
{var inst_180054 = (state_180110[8]);var inst_180055 = (state_180110[2]);var inst_180056 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_180057 = cljs.core.async.untap_STAR_.call(null,m,inst_180054);var state_180110__$1 = (function (){var statearr_180187 = state_180110;(statearr_180187[32] = inst_180056);
(statearr_180187[33] = inst_180055);
return statearr_180187;
})();var statearr_180188_180248 = state_180110__$1;(statearr_180188_180248[2] = inst_180057);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180110__$1);
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
var state_machine__12118__auto____0 = (function (){var statearr_180192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_180192[0] = state_machine__12118__auto__);
(statearr_180192[1] = 1);
return statearr_180192;
});
var state_machine__12118__auto____1 = (function (state_180110){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_180110);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e180193){if((e180193 instanceof Object))
{var ex__12121__auto__ = e180193;var statearr_180194_180249 = state_180110;(statearr_180194_180249[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180110);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180250 = state_180110;
state_180110 = G__180250;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_180110){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_180110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_180195 = f__12188__auto__.call(null);(statearr_180195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___180196);
return statearr_180195;
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
cljs.core.async.Mix = (function (){var obj180252 = {};return obj180252;
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
;var m = (function (){if(typeof cljs.core.async.t180362 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t180362 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta180363){
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
this.meta180363 = meta180363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t180362.cljs$lang$type = true;
cljs.core.async.t180362.cljs$lang$ctorStr = "cljs.core.async/t180362";
cljs.core.async.t180362.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t180362");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t180362.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t180362.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t180362.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t180362.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t180362.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t180362.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t180362.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t180362.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t180362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_180364){var self__ = this;
var _180364__$1 = this;return self__.meta180363;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t180362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_180364,meta180363__$1){var self__ = this;
var _180364__$1 = this;return (new cljs.core.async.t180362(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta180363__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t180362 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t180362(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta180363){return (new cljs.core.async.t180362(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta180363));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t180362(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12187__auto___180471 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_180429){var state_val_180430 = (state_180429[1]);if((state_val_180430 === 1))
{var inst_180368 = (state_180429[7]);var inst_180368__$1 = calc_state.call(null);var inst_180369 = cljs.core.seq_QMARK_.call(null,inst_180368__$1);var state_180429__$1 = (function (){var statearr_180431 = state_180429;(statearr_180431[7] = inst_180368__$1);
return statearr_180431;
})();if(inst_180369)
{var statearr_180432_180472 = state_180429__$1;(statearr_180432_180472[1] = 2);
} else
{var statearr_180433_180473 = state_180429__$1;(statearr_180433_180473[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 2))
{var inst_180368 = (state_180429[7]);var inst_180371 = cljs.core.apply.call(null,cljs.core.hash_map,inst_180368);var state_180429__$1 = state_180429;var statearr_180434_180474 = state_180429__$1;(statearr_180434_180474[2] = inst_180371);
(statearr_180434_180474[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 3))
{var inst_180368 = (state_180429[7]);var state_180429__$1 = state_180429;var statearr_180435_180475 = state_180429__$1;(statearr_180435_180475[2] = inst_180368);
(statearr_180435_180475[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 4))
{var inst_180368 = (state_180429[7]);var inst_180374 = (state_180429[2]);var inst_180375 = cljs.core.get.call(null,inst_180374,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_180376 = cljs.core.get.call(null,inst_180374,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_180377 = cljs.core.get.call(null,inst_180374,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_180378 = inst_180368;var state_180429__$1 = (function (){var statearr_180436 = state_180429;(statearr_180436[8] = inst_180375);
(statearr_180436[9] = inst_180377);
(statearr_180436[10] = inst_180376);
(statearr_180436[11] = inst_180378);
return statearr_180436;
})();var statearr_180437_180476 = state_180429__$1;(statearr_180437_180476[2] = null);
(statearr_180437_180476[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 5))
{var inst_180378 = (state_180429[11]);var inst_180381 = cljs.core.seq_QMARK_.call(null,inst_180378);var state_180429__$1 = state_180429;if(inst_180381)
{var statearr_180438_180477 = state_180429__$1;(statearr_180438_180477[1] = 7);
} else
{var statearr_180439_180478 = state_180429__$1;(statearr_180439_180478[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 6))
{var inst_180427 = (state_180429[2]);var state_180429__$1 = state_180429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180429__$1,inst_180427);
} else
{if((state_val_180430 === 7))
{var inst_180378 = (state_180429[11]);var inst_180383 = cljs.core.apply.call(null,cljs.core.hash_map,inst_180378);var state_180429__$1 = state_180429;var statearr_180440_180479 = state_180429__$1;(statearr_180440_180479[2] = inst_180383);
(statearr_180440_180479[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 8))
{var inst_180378 = (state_180429[11]);var state_180429__$1 = state_180429;var statearr_180441_180480 = state_180429__$1;(statearr_180441_180480[2] = inst_180378);
(statearr_180441_180480[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 9))
{var inst_180386 = (state_180429[12]);var inst_180386__$1 = (state_180429[2]);var inst_180387 = cljs.core.get.call(null,inst_180386__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_180388 = cljs.core.get.call(null,inst_180386__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_180389 = cljs.core.get.call(null,inst_180386__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_180429__$1 = (function (){var statearr_180442 = state_180429;(statearr_180442[12] = inst_180386__$1);
(statearr_180442[13] = inst_180388);
(statearr_180442[14] = inst_180389);
return statearr_180442;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_180429__$1,10,inst_180387);
} else
{if((state_val_180430 === 10))
{var inst_180393 = (state_180429[15]);var inst_180394 = (state_180429[16]);var inst_180392 = (state_180429[2]);var inst_180393__$1 = cljs.core.nth.call(null,inst_180392,0,null);var inst_180394__$1 = cljs.core.nth.call(null,inst_180392,1,null);var inst_180395 = (inst_180393__$1 == null);var inst_180396 = cljs.core._EQ_.call(null,inst_180394__$1,change);var inst_180397 = (inst_180395) || (inst_180396);var state_180429__$1 = (function (){var statearr_180443 = state_180429;(statearr_180443[15] = inst_180393__$1);
(statearr_180443[16] = inst_180394__$1);
return statearr_180443;
})();if(cljs.core.truth_(inst_180397))
{var statearr_180444_180481 = state_180429__$1;(statearr_180444_180481[1] = 11);
} else
{var statearr_180445_180482 = state_180429__$1;(statearr_180445_180482[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 11))
{var inst_180393 = (state_180429[15]);var inst_180399 = (inst_180393 == null);var state_180429__$1 = state_180429;if(cljs.core.truth_(inst_180399))
{var statearr_180446_180483 = state_180429__$1;(statearr_180446_180483[1] = 14);
} else
{var statearr_180447_180484 = state_180429__$1;(statearr_180447_180484[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 12))
{var inst_180408 = (state_180429[17]);var inst_180389 = (state_180429[14]);var inst_180394 = (state_180429[16]);var inst_180408__$1 = inst_180389.call(null,inst_180394);var state_180429__$1 = (function (){var statearr_180448 = state_180429;(statearr_180448[17] = inst_180408__$1);
return statearr_180448;
})();if(cljs.core.truth_(inst_180408__$1))
{var statearr_180449_180485 = state_180429__$1;(statearr_180449_180485[1] = 17);
} else
{var statearr_180450_180486 = state_180429__$1;(statearr_180450_180486[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 13))
{var inst_180425 = (state_180429[2]);var state_180429__$1 = state_180429;var statearr_180451_180487 = state_180429__$1;(statearr_180451_180487[2] = inst_180425);
(statearr_180451_180487[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 14))
{var inst_180394 = (state_180429[16]);var inst_180401 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_180394);var state_180429__$1 = state_180429;var statearr_180452_180488 = state_180429__$1;(statearr_180452_180488[2] = inst_180401);
(statearr_180452_180488[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 15))
{var state_180429__$1 = state_180429;var statearr_180453_180489 = state_180429__$1;(statearr_180453_180489[2] = null);
(statearr_180453_180489[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 16))
{var inst_180404 = (state_180429[2]);var inst_180405 = calc_state.call(null);var inst_180378 = inst_180405;var state_180429__$1 = (function (){var statearr_180454 = state_180429;(statearr_180454[18] = inst_180404);
(statearr_180454[11] = inst_180378);
return statearr_180454;
})();var statearr_180455_180490 = state_180429__$1;(statearr_180455_180490[2] = null);
(statearr_180455_180490[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 17))
{var inst_180408 = (state_180429[17]);var state_180429__$1 = state_180429;var statearr_180456_180491 = state_180429__$1;(statearr_180456_180491[2] = inst_180408);
(statearr_180456_180491[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 18))
{var inst_180388 = (state_180429[13]);var inst_180389 = (state_180429[14]);var inst_180394 = (state_180429[16]);var inst_180411 = cljs.core.empty_QMARK_.call(null,inst_180389);var inst_180412 = inst_180388.call(null,inst_180394);var inst_180413 = cljs.core.not.call(null,inst_180412);var inst_180414 = (inst_180411) && (inst_180413);var state_180429__$1 = state_180429;var statearr_180457_180492 = state_180429__$1;(statearr_180457_180492[2] = inst_180414);
(statearr_180457_180492[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 19))
{var inst_180416 = (state_180429[2]);var state_180429__$1 = state_180429;if(cljs.core.truth_(inst_180416))
{var statearr_180458_180493 = state_180429__$1;(statearr_180458_180493[1] = 20);
} else
{var statearr_180459_180494 = state_180429__$1;(statearr_180459_180494[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 20))
{var inst_180393 = (state_180429[15]);var state_180429__$1 = state_180429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180429__$1,23,out,inst_180393);
} else
{if((state_val_180430 === 21))
{var state_180429__$1 = state_180429;var statearr_180460_180495 = state_180429__$1;(statearr_180460_180495[2] = null);
(statearr_180460_180495[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 22))
{var inst_180386 = (state_180429[12]);var inst_180422 = (state_180429[2]);var inst_180378 = inst_180386;var state_180429__$1 = (function (){var statearr_180461 = state_180429;(statearr_180461[11] = inst_180378);
(statearr_180461[19] = inst_180422);
return statearr_180461;
})();var statearr_180462_180496 = state_180429__$1;(statearr_180462_180496[2] = null);
(statearr_180462_180496[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180430 === 23))
{var inst_180419 = (state_180429[2]);var state_180429__$1 = state_180429;var statearr_180463_180497 = state_180429__$1;(statearr_180463_180497[2] = inst_180419);
(statearr_180463_180497[1] = 22);
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
var state_machine__12118__auto____0 = (function (){var statearr_180467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_180467[0] = state_machine__12118__auto__);
(statearr_180467[1] = 1);
return statearr_180467;
});
var state_machine__12118__auto____1 = (function (state_180429){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_180429);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e180468){if((e180468 instanceof Object))
{var ex__12121__auto__ = e180468;var statearr_180469_180498 = state_180429;(statearr_180469_180498[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180429);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180468;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180499 = state_180429;
state_180429 = G__180499;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_180429){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_180429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_180470 = f__12188__auto__.call(null);(statearr_180470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___180471);
return statearr_180470;
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
cljs.core.async.Pub = (function (){var obj180501 = {};return obj180501;
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
return (function (p1__180502_SHARP_){if(cljs.core.truth_(p1__180502_SHARP_.call(null,topic)))
{return p1__180502_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__180502_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8223__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t180627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t180627 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta180628){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta180628 = meta180628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t180627.cljs$lang$type = true;
cljs.core.async.t180627.cljs$lang$ctorStr = "cljs.core.async/t180627";
cljs.core.async.t180627.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"cljs.core.async/t180627");
});})(mults,ensure_mult))
;
cljs.core.async.t180627.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t180627.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t180627.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t180627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t180627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t180627.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t180627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t180627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_180629){var self__ = this;
var _180629__$1 = this;return self__.meta180628;
});})(mults,ensure_mult))
;
cljs.core.async.t180627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_180629,meta180628__$1){var self__ = this;
var _180629__$1 = this;return (new cljs.core.async.t180627(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta180628__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t180627 = ((function (mults,ensure_mult){
return (function __GT_t180627(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta180628){return (new cljs.core.async.t180627(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta180628));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t180627(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12187__auto___180751 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_180703){var state_val_180704 = (state_180703[1]);if((state_val_180704 === 1))
{var state_180703__$1 = state_180703;var statearr_180705_180752 = state_180703__$1;(statearr_180705_180752[2] = null);
(statearr_180705_180752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 2))
{var state_180703__$1 = state_180703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180703__$1,4,ch);
} else
{if((state_val_180704 === 3))
{var inst_180701 = (state_180703[2]);var state_180703__$1 = state_180703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180703__$1,inst_180701);
} else
{if((state_val_180704 === 4))
{var inst_180632 = (state_180703[7]);var inst_180632__$1 = (state_180703[2]);var inst_180633 = (inst_180632__$1 == null);var state_180703__$1 = (function (){var statearr_180706 = state_180703;(statearr_180706[7] = inst_180632__$1);
return statearr_180706;
})();if(cljs.core.truth_(inst_180633))
{var statearr_180707_180753 = state_180703__$1;(statearr_180707_180753[1] = 5);
} else
{var statearr_180708_180754 = state_180703__$1;(statearr_180708_180754[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 5))
{var inst_180639 = cljs.core.deref.call(null,mults);var inst_180640 = cljs.core.vals.call(null,inst_180639);var inst_180641 = cljs.core.seq.call(null,inst_180640);var inst_180642 = inst_180641;var inst_180643 = null;var inst_180644 = 0;var inst_180645 = 0;var state_180703__$1 = (function (){var statearr_180709 = state_180703;(statearr_180709[8] = inst_180644);
(statearr_180709[9] = inst_180645);
(statearr_180709[10] = inst_180642);
(statearr_180709[11] = inst_180643);
return statearr_180709;
})();var statearr_180710_180755 = state_180703__$1;(statearr_180710_180755[2] = null);
(statearr_180710_180755[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 6))
{var inst_180632 = (state_180703[7]);var inst_180682 = (state_180703[12]);var inst_180680 = (state_180703[13]);var inst_180680__$1 = topic_fn.call(null,inst_180632);var inst_180681 = cljs.core.deref.call(null,mults);var inst_180682__$1 = cljs.core.get.call(null,inst_180681,inst_180680__$1);var state_180703__$1 = (function (){var statearr_180711 = state_180703;(statearr_180711[12] = inst_180682__$1);
(statearr_180711[13] = inst_180680__$1);
return statearr_180711;
})();if(cljs.core.truth_(inst_180682__$1))
{var statearr_180712_180756 = state_180703__$1;(statearr_180712_180756[1] = 19);
} else
{var statearr_180713_180757 = state_180703__$1;(statearr_180713_180757[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 7))
{var inst_180699 = (state_180703[2]);var state_180703__$1 = state_180703;var statearr_180714_180758 = state_180703__$1;(statearr_180714_180758[2] = inst_180699);
(statearr_180714_180758[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 8))
{var inst_180644 = (state_180703[8]);var inst_180645 = (state_180703[9]);var inst_180647 = (inst_180645 < inst_180644);var inst_180648 = inst_180647;var state_180703__$1 = state_180703;if(cljs.core.truth_(inst_180648))
{var statearr_180718_180759 = state_180703__$1;(statearr_180718_180759[1] = 10);
} else
{var statearr_180719_180760 = state_180703__$1;(statearr_180719_180760[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 9))
{var inst_180678 = (state_180703[2]);var state_180703__$1 = state_180703;var statearr_180720_180761 = state_180703__$1;(statearr_180720_180761[2] = inst_180678);
(statearr_180720_180761[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 10))
{var inst_180644 = (state_180703[8]);var inst_180645 = (state_180703[9]);var inst_180642 = (state_180703[10]);var inst_180643 = (state_180703[11]);var inst_180650 = cljs.core._nth.call(null,inst_180643,inst_180645);var inst_180651 = cljs.core.async.muxch_STAR_.call(null,inst_180650);var inst_180652 = cljs.core.async.close_BANG_.call(null,inst_180651);var inst_180653 = (inst_180645 + 1);var tmp180715 = inst_180644;var tmp180716 = inst_180642;var tmp180717 = inst_180643;var inst_180642__$1 = tmp180716;var inst_180643__$1 = tmp180717;var inst_180644__$1 = tmp180715;var inst_180645__$1 = inst_180653;var state_180703__$1 = (function (){var statearr_180721 = state_180703;(statearr_180721[8] = inst_180644__$1);
(statearr_180721[9] = inst_180645__$1);
(statearr_180721[10] = inst_180642__$1);
(statearr_180721[11] = inst_180643__$1);
(statearr_180721[14] = inst_180652);
return statearr_180721;
})();var statearr_180722_180762 = state_180703__$1;(statearr_180722_180762[2] = null);
(statearr_180722_180762[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 11))
{var inst_180642 = (state_180703[10]);var inst_180656 = (state_180703[15]);var inst_180656__$1 = cljs.core.seq.call(null,inst_180642);var state_180703__$1 = (function (){var statearr_180723 = state_180703;(statearr_180723[15] = inst_180656__$1);
return statearr_180723;
})();if(inst_180656__$1)
{var statearr_180724_180763 = state_180703__$1;(statearr_180724_180763[1] = 13);
} else
{var statearr_180725_180764 = state_180703__$1;(statearr_180725_180764[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 12))
{var inst_180676 = (state_180703[2]);var state_180703__$1 = state_180703;var statearr_180726_180765 = state_180703__$1;(statearr_180726_180765[2] = inst_180676);
(statearr_180726_180765[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 13))
{var inst_180656 = (state_180703[15]);var inst_180658 = cljs.core.chunked_seq_QMARK_.call(null,inst_180656);var state_180703__$1 = state_180703;if(inst_180658)
{var statearr_180727_180766 = state_180703__$1;(statearr_180727_180766[1] = 16);
} else
{var statearr_180728_180767 = state_180703__$1;(statearr_180728_180767[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 14))
{var state_180703__$1 = state_180703;var statearr_180729_180768 = state_180703__$1;(statearr_180729_180768[2] = null);
(statearr_180729_180768[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 15))
{var inst_180674 = (state_180703[2]);var state_180703__$1 = state_180703;var statearr_180730_180769 = state_180703__$1;(statearr_180730_180769[2] = inst_180674);
(statearr_180730_180769[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 16))
{var inst_180656 = (state_180703[15]);var inst_180660 = cljs.core.chunk_first.call(null,inst_180656);var inst_180661 = cljs.core.chunk_rest.call(null,inst_180656);var inst_180662 = cljs.core.count.call(null,inst_180660);var inst_180642 = inst_180661;var inst_180643 = inst_180660;var inst_180644 = inst_180662;var inst_180645 = 0;var state_180703__$1 = (function (){var statearr_180731 = state_180703;(statearr_180731[8] = inst_180644);
(statearr_180731[9] = inst_180645);
(statearr_180731[10] = inst_180642);
(statearr_180731[11] = inst_180643);
return statearr_180731;
})();var statearr_180732_180770 = state_180703__$1;(statearr_180732_180770[2] = null);
(statearr_180732_180770[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 17))
{var inst_180656 = (state_180703[15]);var inst_180665 = cljs.core.first.call(null,inst_180656);var inst_180666 = cljs.core.async.muxch_STAR_.call(null,inst_180665);var inst_180667 = cljs.core.async.close_BANG_.call(null,inst_180666);var inst_180668 = cljs.core.next.call(null,inst_180656);var inst_180642 = inst_180668;var inst_180643 = null;var inst_180644 = 0;var inst_180645 = 0;var state_180703__$1 = (function (){var statearr_180733 = state_180703;(statearr_180733[8] = inst_180644);
(statearr_180733[9] = inst_180645);
(statearr_180733[10] = inst_180642);
(statearr_180733[11] = inst_180643);
(statearr_180733[16] = inst_180667);
return statearr_180733;
})();var statearr_180734_180771 = state_180703__$1;(statearr_180734_180771[2] = null);
(statearr_180734_180771[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 18))
{var inst_180671 = (state_180703[2]);var state_180703__$1 = state_180703;var statearr_180735_180772 = state_180703__$1;(statearr_180735_180772[2] = inst_180671);
(statearr_180735_180772[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 19))
{var state_180703__$1 = state_180703;var statearr_180736_180773 = state_180703__$1;(statearr_180736_180773[2] = null);
(statearr_180736_180773[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 20))
{var state_180703__$1 = state_180703;var statearr_180737_180774 = state_180703__$1;(statearr_180737_180774[2] = null);
(statearr_180737_180774[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 21))
{var inst_180696 = (state_180703[2]);var state_180703__$1 = (function (){var statearr_180738 = state_180703;(statearr_180738[17] = inst_180696);
return statearr_180738;
})();var statearr_180739_180775 = state_180703__$1;(statearr_180739_180775[2] = null);
(statearr_180739_180775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 22))
{var inst_180693 = (state_180703[2]);var state_180703__$1 = state_180703;var statearr_180740_180776 = state_180703__$1;(statearr_180740_180776[2] = inst_180693);
(statearr_180740_180776[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 23))
{var inst_180680 = (state_180703[13]);var inst_180684 = (state_180703[2]);var inst_180685 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_180680);var state_180703__$1 = (function (){var statearr_180741 = state_180703;(statearr_180741[18] = inst_180684);
return statearr_180741;
})();var statearr_180742_180777 = state_180703__$1;(statearr_180742_180777[2] = inst_180685);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180703__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180704 === 24))
{var inst_180632 = (state_180703[7]);var inst_180682 = (state_180703[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_180703,23,Object,null,22);var inst_180689 = cljs.core.async.muxch_STAR_.call(null,inst_180682);var state_180703__$1 = state_180703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180703__$1,25,inst_180689,inst_180632);
} else
{if((state_val_180704 === 25))
{var inst_180691 = (state_180703[2]);var state_180703__$1 = state_180703;var statearr_180743_180778 = state_180703__$1;(statearr_180743_180778[2] = inst_180691);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180703__$1);
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
var state_machine__12118__auto____0 = (function (){var statearr_180747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_180747[0] = state_machine__12118__auto__);
(statearr_180747[1] = 1);
return statearr_180747;
});
var state_machine__12118__auto____1 = (function (state_180703){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_180703);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e180748){if((e180748 instanceof Object))
{var ex__12121__auto__ = e180748;var statearr_180749_180779 = state_180703;(statearr_180749_180779[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180703);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180748;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180780 = state_180703;
state_180703 = G__180780;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_180703){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_180703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_180750 = f__12188__auto__.call(null);(statearr_180750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___180751);
return statearr_180750;
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
,cljs.core.range.call(null,cnt));var c__12187__auto___180917 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_180887){var state_val_180888 = (state_180887[1]);if((state_val_180888 === 1))
{var state_180887__$1 = state_180887;var statearr_180889_180918 = state_180887__$1;(statearr_180889_180918[2] = null);
(statearr_180889_180918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 2))
{var inst_180850 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_180851 = 0;var state_180887__$1 = (function (){var statearr_180890 = state_180887;(statearr_180890[7] = inst_180850);
(statearr_180890[8] = inst_180851);
return statearr_180890;
})();var statearr_180891_180919 = state_180887__$1;(statearr_180891_180919[2] = null);
(statearr_180891_180919[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 3))
{var inst_180885 = (state_180887[2]);var state_180887__$1 = state_180887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_180887__$1,inst_180885);
} else
{if((state_val_180888 === 4))
{var inst_180851 = (state_180887[8]);var inst_180853 = (inst_180851 < cnt);var state_180887__$1 = state_180887;if(cljs.core.truth_(inst_180853))
{var statearr_180892_180920 = state_180887__$1;(statearr_180892_180920[1] = 6);
} else
{var statearr_180893_180921 = state_180887__$1;(statearr_180893_180921[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 5))
{var inst_180871 = (state_180887[2]);var state_180887__$1 = (function (){var statearr_180894 = state_180887;(statearr_180894[9] = inst_180871);
return statearr_180894;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_180887__$1,12,dchan);
} else
{if((state_val_180888 === 6))
{var state_180887__$1 = state_180887;var statearr_180895_180922 = state_180887__$1;(statearr_180895_180922[2] = null);
(statearr_180895_180922[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 7))
{var state_180887__$1 = state_180887;var statearr_180896_180923 = state_180887__$1;(statearr_180896_180923[2] = null);
(statearr_180896_180923[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 8))
{var inst_180869 = (state_180887[2]);var state_180887__$1 = state_180887;var statearr_180897_180924 = state_180887__$1;(statearr_180897_180924[2] = inst_180869);
(statearr_180897_180924[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 9))
{var inst_180851 = (state_180887[8]);var inst_180864 = (state_180887[2]);var inst_180865 = (inst_180851 + 1);var inst_180851__$1 = inst_180865;var state_180887__$1 = (function (){var statearr_180898 = state_180887;(statearr_180898[8] = inst_180851__$1);
(statearr_180898[10] = inst_180864);
return statearr_180898;
})();var statearr_180899_180925 = state_180887__$1;(statearr_180899_180925[2] = null);
(statearr_180899_180925[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 10))
{var inst_180855 = (state_180887[2]);var inst_180856 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_180887__$1 = (function (){var statearr_180900 = state_180887;(statearr_180900[11] = inst_180855);
return statearr_180900;
})();var statearr_180901_180926 = state_180887__$1;(statearr_180901_180926[2] = inst_180856);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180887__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 11))
{var inst_180851 = (state_180887[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_180887,10,Object,null,9);var inst_180860 = chs__$1.call(null,inst_180851);var inst_180861 = done.call(null,inst_180851);var inst_180862 = cljs.core.async.take_BANG_.call(null,inst_180860,inst_180861);var state_180887__$1 = state_180887;var statearr_180902_180927 = state_180887__$1;(statearr_180902_180927[2] = inst_180862);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180887__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 12))
{var inst_180873 = (state_180887[12]);var inst_180873__$1 = (state_180887[2]);var inst_180874 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_180873__$1);var state_180887__$1 = (function (){var statearr_180903 = state_180887;(statearr_180903[12] = inst_180873__$1);
return statearr_180903;
})();if(cljs.core.truth_(inst_180874))
{var statearr_180904_180928 = state_180887__$1;(statearr_180904_180928[1] = 13);
} else
{var statearr_180905_180929 = state_180887__$1;(statearr_180905_180929[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 13))
{var inst_180876 = cljs.core.async.close_BANG_.call(null,out);var state_180887__$1 = state_180887;var statearr_180906_180930 = state_180887__$1;(statearr_180906_180930[2] = inst_180876);
(statearr_180906_180930[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 14))
{var inst_180873 = (state_180887[12]);var inst_180878 = cljs.core.apply.call(null,f,inst_180873);var state_180887__$1 = state_180887;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_180887__$1,16,out,inst_180878);
} else
{if((state_val_180888 === 15))
{var inst_180883 = (state_180887[2]);var state_180887__$1 = state_180887;var statearr_180907_180931 = state_180887__$1;(statearr_180907_180931[2] = inst_180883);
(statearr_180907_180931[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_180888 === 16))
{var inst_180880 = (state_180887[2]);var state_180887__$1 = (function (){var statearr_180908 = state_180887;(statearr_180908[13] = inst_180880);
return statearr_180908;
})();var statearr_180909_180932 = state_180887__$1;(statearr_180909_180932[2] = null);
(statearr_180909_180932[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_180913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_180913[0] = state_machine__12118__auto__);
(statearr_180913[1] = 1);
return statearr_180913;
});
var state_machine__12118__auto____1 = (function (state_180887){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_180887);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e180914){if((e180914 instanceof Object))
{var ex__12121__auto__ = e180914;var statearr_180915_180933 = state_180887;(statearr_180915_180933[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_180887);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e180914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__180934 = state_180887;
state_180887 = G__180934;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_180887){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_180887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_180916 = f__12188__auto__.call(null);(statearr_180916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___180917);
return statearr_180916;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___181042 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_181018){var state_val_181019 = (state_181018[1]);if((state_val_181019 === 1))
{var inst_180989 = cljs.core.vec.call(null,chs);var inst_180990 = inst_180989;var state_181018__$1 = (function (){var statearr_181020 = state_181018;(statearr_181020[7] = inst_180990);
return statearr_181020;
})();var statearr_181021_181043 = state_181018__$1;(statearr_181021_181043[2] = null);
(statearr_181021_181043[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181019 === 2))
{var inst_180990 = (state_181018[7]);var inst_180992 = cljs.core.count.call(null,inst_180990);var inst_180993 = (inst_180992 > 0);var state_181018__$1 = state_181018;if(cljs.core.truth_(inst_180993))
{var statearr_181022_181044 = state_181018__$1;(statearr_181022_181044[1] = 4);
} else
{var statearr_181023_181045 = state_181018__$1;(statearr_181023_181045[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181019 === 3))
{var inst_181016 = (state_181018[2]);var state_181018__$1 = state_181018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181018__$1,inst_181016);
} else
{if((state_val_181019 === 4))
{var inst_180990 = (state_181018[7]);var state_181018__$1 = state_181018;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_181018__$1,7,inst_180990);
} else
{if((state_val_181019 === 5))
{var inst_181012 = cljs.core.async.close_BANG_.call(null,out);var state_181018__$1 = state_181018;var statearr_181024_181046 = state_181018__$1;(statearr_181024_181046[2] = inst_181012);
(statearr_181024_181046[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181019 === 6))
{var inst_181014 = (state_181018[2]);var state_181018__$1 = state_181018;var statearr_181025_181047 = state_181018__$1;(statearr_181025_181047[2] = inst_181014);
(statearr_181025_181047[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181019 === 7))
{var inst_180997 = (state_181018[8]);var inst_180998 = (state_181018[9]);var inst_180997__$1 = (state_181018[2]);var inst_180998__$1 = cljs.core.nth.call(null,inst_180997__$1,0,null);var inst_180999 = cljs.core.nth.call(null,inst_180997__$1,1,null);var inst_181000 = (inst_180998__$1 == null);var state_181018__$1 = (function (){var statearr_181026 = state_181018;(statearr_181026[8] = inst_180997__$1);
(statearr_181026[10] = inst_180999);
(statearr_181026[9] = inst_180998__$1);
return statearr_181026;
})();if(cljs.core.truth_(inst_181000))
{var statearr_181027_181048 = state_181018__$1;(statearr_181027_181048[1] = 8);
} else
{var statearr_181028_181049 = state_181018__$1;(statearr_181028_181049[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181019 === 8))
{var inst_180990 = (state_181018[7]);var inst_180997 = (state_181018[8]);var inst_180999 = (state_181018[10]);var inst_180998 = (state_181018[9]);var inst_181002 = (function (){var c = inst_180999;var v = inst_180998;var vec__180995 = inst_180997;var cs = inst_180990;return ((function (c,v,vec__180995,cs,inst_180990,inst_180997,inst_180999,inst_180998,state_val_181019){
return (function (p1__180935_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__180935_SHARP_);
});
;})(c,v,vec__180995,cs,inst_180990,inst_180997,inst_180999,inst_180998,state_val_181019))
})();var inst_181003 = cljs.core.filterv.call(null,inst_181002,inst_180990);var inst_180990__$1 = inst_181003;var state_181018__$1 = (function (){var statearr_181029 = state_181018;(statearr_181029[7] = inst_180990__$1);
return statearr_181029;
})();var statearr_181030_181050 = state_181018__$1;(statearr_181030_181050[2] = null);
(statearr_181030_181050[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181019 === 9))
{var inst_180998 = (state_181018[9]);var state_181018__$1 = state_181018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181018__$1,11,out,inst_180998);
} else
{if((state_val_181019 === 10))
{var inst_181010 = (state_181018[2]);var state_181018__$1 = state_181018;var statearr_181032_181051 = state_181018__$1;(statearr_181032_181051[2] = inst_181010);
(statearr_181032_181051[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181019 === 11))
{var inst_180990 = (state_181018[7]);var inst_181007 = (state_181018[2]);var tmp181031 = inst_180990;var inst_180990__$1 = tmp181031;var state_181018__$1 = (function (){var statearr_181033 = state_181018;(statearr_181033[7] = inst_180990__$1);
(statearr_181033[11] = inst_181007);
return statearr_181033;
})();var statearr_181034_181052 = state_181018__$1;(statearr_181034_181052[2] = null);
(statearr_181034_181052[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_181038 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_181038[0] = state_machine__12118__auto__);
(statearr_181038[1] = 1);
return statearr_181038;
});
var state_machine__12118__auto____1 = (function (state_181018){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_181018);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e181039){if((e181039 instanceof Object))
{var ex__12121__auto__ = e181039;var statearr_181040_181053 = state_181018;(statearr_181040_181053[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181018);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e181039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__181054 = state_181018;
state_181018 = G__181054;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_181018){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_181018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_181041 = f__12188__auto__.call(null);(statearr_181041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___181042);
return statearr_181041;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___181147 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_181124){var state_val_181125 = (state_181124[1]);if((state_val_181125 === 1))
{var inst_181101 = 0;var state_181124__$1 = (function (){var statearr_181126 = state_181124;(statearr_181126[7] = inst_181101);
return statearr_181126;
})();var statearr_181127_181148 = state_181124__$1;(statearr_181127_181148[2] = null);
(statearr_181127_181148[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181125 === 2))
{var inst_181101 = (state_181124[7]);var inst_181103 = (inst_181101 < n);var state_181124__$1 = state_181124;if(cljs.core.truth_(inst_181103))
{var statearr_181128_181149 = state_181124__$1;(statearr_181128_181149[1] = 4);
} else
{var statearr_181129_181150 = state_181124__$1;(statearr_181129_181150[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181125 === 3))
{var inst_181121 = (state_181124[2]);var inst_181122 = cljs.core.async.close_BANG_.call(null,out);var state_181124__$1 = (function (){var statearr_181130 = state_181124;(statearr_181130[8] = inst_181121);
return statearr_181130;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181124__$1,inst_181122);
} else
{if((state_val_181125 === 4))
{var state_181124__$1 = state_181124;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181124__$1,7,ch);
} else
{if((state_val_181125 === 5))
{var state_181124__$1 = state_181124;var statearr_181131_181151 = state_181124__$1;(statearr_181131_181151[2] = null);
(statearr_181131_181151[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181125 === 6))
{var inst_181119 = (state_181124[2]);var state_181124__$1 = state_181124;var statearr_181132_181152 = state_181124__$1;(statearr_181132_181152[2] = inst_181119);
(statearr_181132_181152[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181125 === 7))
{var inst_181106 = (state_181124[9]);var inst_181106__$1 = (state_181124[2]);var inst_181107 = (inst_181106__$1 == null);var inst_181108 = cljs.core.not.call(null,inst_181107);var state_181124__$1 = (function (){var statearr_181133 = state_181124;(statearr_181133[9] = inst_181106__$1);
return statearr_181133;
})();if(inst_181108)
{var statearr_181134_181153 = state_181124__$1;(statearr_181134_181153[1] = 8);
} else
{var statearr_181135_181154 = state_181124__$1;(statearr_181135_181154[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181125 === 8))
{var inst_181106 = (state_181124[9]);var state_181124__$1 = state_181124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181124__$1,11,out,inst_181106);
} else
{if((state_val_181125 === 9))
{var state_181124__$1 = state_181124;var statearr_181136_181155 = state_181124__$1;(statearr_181136_181155[2] = null);
(statearr_181136_181155[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181125 === 10))
{var inst_181116 = (state_181124[2]);var state_181124__$1 = state_181124;var statearr_181137_181156 = state_181124__$1;(statearr_181137_181156[2] = inst_181116);
(statearr_181137_181156[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181125 === 11))
{var inst_181101 = (state_181124[7]);var inst_181111 = (state_181124[2]);var inst_181112 = (inst_181101 + 1);var inst_181101__$1 = inst_181112;var state_181124__$1 = (function (){var statearr_181138 = state_181124;(statearr_181138[7] = inst_181101__$1);
(statearr_181138[10] = inst_181111);
return statearr_181138;
})();var statearr_181139_181157 = state_181124__$1;(statearr_181139_181157[2] = null);
(statearr_181139_181157[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_181143 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_181143[0] = state_machine__12118__auto__);
(statearr_181143[1] = 1);
return statearr_181143;
});
var state_machine__12118__auto____1 = (function (state_181124){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_181124);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e181144){if((e181144 instanceof Object))
{var ex__12121__auto__ = e181144;var statearr_181145_181158 = state_181124;(statearr_181145_181158[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181124);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e181144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__181159 = state_181124;
state_181124 = G__181159;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_181124){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_181124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_181146 = f__12188__auto__.call(null);(statearr_181146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___181147);
return statearr_181146;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___181256 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_181231){var state_val_181232 = (state_181231[1]);if((state_val_181232 === 1))
{var inst_181208 = null;var state_181231__$1 = (function (){var statearr_181233 = state_181231;(statearr_181233[7] = inst_181208);
return statearr_181233;
})();var statearr_181234_181257 = state_181231__$1;(statearr_181234_181257[2] = null);
(statearr_181234_181257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181232 === 2))
{var state_181231__$1 = state_181231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181231__$1,4,ch);
} else
{if((state_val_181232 === 3))
{var inst_181228 = (state_181231[2]);var inst_181229 = cljs.core.async.close_BANG_.call(null,out);var state_181231__$1 = (function (){var statearr_181235 = state_181231;(statearr_181235[8] = inst_181228);
return statearr_181235;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181231__$1,inst_181229);
} else
{if((state_val_181232 === 4))
{var inst_181211 = (state_181231[9]);var inst_181211__$1 = (state_181231[2]);var inst_181212 = (inst_181211__$1 == null);var inst_181213 = cljs.core.not.call(null,inst_181212);var state_181231__$1 = (function (){var statearr_181236 = state_181231;(statearr_181236[9] = inst_181211__$1);
return statearr_181236;
})();if(inst_181213)
{var statearr_181237_181258 = state_181231__$1;(statearr_181237_181258[1] = 5);
} else
{var statearr_181238_181259 = state_181231__$1;(statearr_181238_181259[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181232 === 5))
{var inst_181211 = (state_181231[9]);var inst_181208 = (state_181231[7]);var inst_181215 = cljs.core._EQ_.call(null,inst_181211,inst_181208);var state_181231__$1 = state_181231;if(inst_181215)
{var statearr_181239_181260 = state_181231__$1;(statearr_181239_181260[1] = 8);
} else
{var statearr_181240_181261 = state_181231__$1;(statearr_181240_181261[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181232 === 6))
{var state_181231__$1 = state_181231;var statearr_181242_181262 = state_181231__$1;(statearr_181242_181262[2] = null);
(statearr_181242_181262[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181232 === 7))
{var inst_181226 = (state_181231[2]);var state_181231__$1 = state_181231;var statearr_181243_181263 = state_181231__$1;(statearr_181243_181263[2] = inst_181226);
(statearr_181243_181263[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181232 === 8))
{var inst_181208 = (state_181231[7]);var tmp181241 = inst_181208;var inst_181208__$1 = tmp181241;var state_181231__$1 = (function (){var statearr_181244 = state_181231;(statearr_181244[7] = inst_181208__$1);
return statearr_181244;
})();var statearr_181245_181264 = state_181231__$1;(statearr_181245_181264[2] = null);
(statearr_181245_181264[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181232 === 9))
{var inst_181211 = (state_181231[9]);var state_181231__$1 = state_181231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181231__$1,11,out,inst_181211);
} else
{if((state_val_181232 === 10))
{var inst_181223 = (state_181231[2]);var state_181231__$1 = state_181231;var statearr_181246_181265 = state_181231__$1;(statearr_181246_181265[2] = inst_181223);
(statearr_181246_181265[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181232 === 11))
{var inst_181211 = (state_181231[9]);var inst_181220 = (state_181231[2]);var inst_181208 = inst_181211;var state_181231__$1 = (function (){var statearr_181247 = state_181231;(statearr_181247[7] = inst_181208);
(statearr_181247[10] = inst_181220);
return statearr_181247;
})();var statearr_181248_181266 = state_181231__$1;(statearr_181248_181266[2] = null);
(statearr_181248_181266[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_181252 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_181252[0] = state_machine__12118__auto__);
(statearr_181252[1] = 1);
return statearr_181252;
});
var state_machine__12118__auto____1 = (function (state_181231){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_181231);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e181253){if((e181253 instanceof Object))
{var ex__12121__auto__ = e181253;var statearr_181254_181267 = state_181231;(statearr_181254_181267[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181231);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e181253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__181268 = state_181231;
state_181231 = G__181268;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_181231){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_181231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_181255 = f__12188__auto__.call(null);(statearr_181255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___181256);
return statearr_181255;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___181403 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_181373){var state_val_181374 = (state_181373[1]);if((state_val_181374 === 1))
{var inst_181336 = (new Array(n));var inst_181337 = inst_181336;var inst_181338 = 0;var state_181373__$1 = (function (){var statearr_181375 = state_181373;(statearr_181375[7] = inst_181337);
(statearr_181375[8] = inst_181338);
return statearr_181375;
})();var statearr_181376_181404 = state_181373__$1;(statearr_181376_181404[2] = null);
(statearr_181376_181404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181374 === 2))
{var state_181373__$1 = state_181373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181373__$1,4,ch);
} else
{if((state_val_181374 === 3))
{var inst_181371 = (state_181373[2]);var state_181373__$1 = state_181373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181373__$1,inst_181371);
} else
{if((state_val_181374 === 4))
{var inst_181341 = (state_181373[9]);var inst_181341__$1 = (state_181373[2]);var inst_181342 = (inst_181341__$1 == null);var inst_181343 = cljs.core.not.call(null,inst_181342);var state_181373__$1 = (function (){var statearr_181377 = state_181373;(statearr_181377[9] = inst_181341__$1);
return statearr_181377;
})();if(inst_181343)
{var statearr_181378_181405 = state_181373__$1;(statearr_181378_181405[1] = 5);
} else
{var statearr_181379_181406 = state_181373__$1;(statearr_181379_181406[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181374 === 5))
{var inst_181337 = (state_181373[7]);var inst_181338 = (state_181373[8]);var inst_181341 = (state_181373[9]);var inst_181346 = (state_181373[10]);var inst_181345 = (inst_181337[inst_181338] = inst_181341);var inst_181346__$1 = (inst_181338 + 1);var inst_181347 = (inst_181346__$1 < n);var state_181373__$1 = (function (){var statearr_181380 = state_181373;(statearr_181380[11] = inst_181345);
(statearr_181380[10] = inst_181346__$1);
return statearr_181380;
})();if(cljs.core.truth_(inst_181347))
{var statearr_181381_181407 = state_181373__$1;(statearr_181381_181407[1] = 8);
} else
{var statearr_181382_181408 = state_181373__$1;(statearr_181382_181408[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181374 === 6))
{var inst_181338 = (state_181373[8]);var inst_181359 = (inst_181338 > 0);var state_181373__$1 = state_181373;if(cljs.core.truth_(inst_181359))
{var statearr_181384_181409 = state_181373__$1;(statearr_181384_181409[1] = 12);
} else
{var statearr_181385_181410 = state_181373__$1;(statearr_181385_181410[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181374 === 7))
{var inst_181369 = (state_181373[2]);var state_181373__$1 = state_181373;var statearr_181386_181411 = state_181373__$1;(statearr_181386_181411[2] = inst_181369);
(statearr_181386_181411[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181374 === 8))
{var inst_181337 = (state_181373[7]);var inst_181346 = (state_181373[10]);var tmp181383 = inst_181337;var inst_181337__$1 = tmp181383;var inst_181338 = inst_181346;var state_181373__$1 = (function (){var statearr_181387 = state_181373;(statearr_181387[7] = inst_181337__$1);
(statearr_181387[8] = inst_181338);
return statearr_181387;
})();var statearr_181388_181412 = state_181373__$1;(statearr_181388_181412[2] = null);
(statearr_181388_181412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181374 === 9))
{var inst_181337 = (state_181373[7]);var inst_181351 = cljs.core.vec.call(null,inst_181337);var state_181373__$1 = state_181373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181373__$1,11,out,inst_181351);
} else
{if((state_val_181374 === 10))
{var inst_181357 = (state_181373[2]);var state_181373__$1 = state_181373;var statearr_181389_181413 = state_181373__$1;(statearr_181389_181413[2] = inst_181357);
(statearr_181389_181413[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181374 === 11))
{var inst_181353 = (state_181373[2]);var inst_181354 = (new Array(n));var inst_181337 = inst_181354;var inst_181338 = 0;var state_181373__$1 = (function (){var statearr_181390 = state_181373;(statearr_181390[7] = inst_181337);
(statearr_181390[8] = inst_181338);
(statearr_181390[12] = inst_181353);
return statearr_181390;
})();var statearr_181391_181414 = state_181373__$1;(statearr_181391_181414[2] = null);
(statearr_181391_181414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181374 === 12))
{var inst_181337 = (state_181373[7]);var inst_181361 = cljs.core.vec.call(null,inst_181337);var state_181373__$1 = state_181373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181373__$1,15,out,inst_181361);
} else
{if((state_val_181374 === 13))
{var state_181373__$1 = state_181373;var statearr_181392_181415 = state_181373__$1;(statearr_181392_181415[2] = null);
(statearr_181392_181415[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181374 === 14))
{var inst_181366 = (state_181373[2]);var inst_181367 = cljs.core.async.close_BANG_.call(null,out);var state_181373__$1 = (function (){var statearr_181393 = state_181373;(statearr_181393[13] = inst_181366);
return statearr_181393;
})();var statearr_181394_181416 = state_181373__$1;(statearr_181394_181416[2] = inst_181367);
(statearr_181394_181416[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181374 === 15))
{var inst_181363 = (state_181373[2]);var state_181373__$1 = state_181373;var statearr_181395_181417 = state_181373__$1;(statearr_181395_181417[2] = inst_181363);
(statearr_181395_181417[1] = 14);
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
var state_machine__12118__auto____0 = (function (){var statearr_181399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_181399[0] = state_machine__12118__auto__);
(statearr_181399[1] = 1);
return statearr_181399;
});
var state_machine__12118__auto____1 = (function (state_181373){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_181373);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e181400){if((e181400 instanceof Object))
{var ex__12121__auto__ = e181400;var statearr_181401_181418 = state_181373;(statearr_181401_181418[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181373);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e181400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__181419 = state_181373;
state_181373 = G__181419;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_181373){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_181373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_181402 = f__12188__auto__.call(null);(statearr_181402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___181403);
return statearr_181402;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12187__auto___181562 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_181532){var state_val_181533 = (state_181532[1]);if((state_val_181533 === 1))
{var inst_181491 = [];var inst_181492 = inst_181491;var inst_181493 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_181532__$1 = (function (){var statearr_181534 = state_181532;(statearr_181534[7] = inst_181492);
(statearr_181534[8] = inst_181493);
return statearr_181534;
})();var statearr_181535_181563 = state_181532__$1;(statearr_181535_181563[2] = null);
(statearr_181535_181563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181533 === 2))
{var state_181532__$1 = state_181532;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181532__$1,4,ch);
} else
{if((state_val_181533 === 3))
{var inst_181530 = (state_181532[2]);var state_181532__$1 = state_181532;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181532__$1,inst_181530);
} else
{if((state_val_181533 === 4))
{var inst_181496 = (state_181532[9]);var inst_181496__$1 = (state_181532[2]);var inst_181497 = (inst_181496__$1 == null);var inst_181498 = cljs.core.not.call(null,inst_181497);var state_181532__$1 = (function (){var statearr_181536 = state_181532;(statearr_181536[9] = inst_181496__$1);
return statearr_181536;
})();if(inst_181498)
{var statearr_181537_181564 = state_181532__$1;(statearr_181537_181564[1] = 5);
} else
{var statearr_181538_181565 = state_181532__$1;(statearr_181538_181565[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181533 === 5))
{var inst_181496 = (state_181532[9]);var inst_181493 = (state_181532[8]);var inst_181500 = (state_181532[10]);var inst_181500__$1 = f.call(null,inst_181496);var inst_181501 = cljs.core._EQ_.call(null,inst_181500__$1,inst_181493);var inst_181502 = cljs.core.keyword_identical_QMARK_.call(null,inst_181493,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_181503 = (inst_181501) || (inst_181502);var state_181532__$1 = (function (){var statearr_181539 = state_181532;(statearr_181539[10] = inst_181500__$1);
return statearr_181539;
})();if(cljs.core.truth_(inst_181503))
{var statearr_181540_181566 = state_181532__$1;(statearr_181540_181566[1] = 8);
} else
{var statearr_181541_181567 = state_181532__$1;(statearr_181541_181567[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181533 === 6))
{var inst_181492 = (state_181532[7]);var inst_181517 = inst_181492.length;var inst_181518 = (inst_181517 > 0);var state_181532__$1 = state_181532;if(cljs.core.truth_(inst_181518))
{var statearr_181543_181568 = state_181532__$1;(statearr_181543_181568[1] = 12);
} else
{var statearr_181544_181569 = state_181532__$1;(statearr_181544_181569[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181533 === 7))
{var inst_181528 = (state_181532[2]);var state_181532__$1 = state_181532;var statearr_181545_181570 = state_181532__$1;(statearr_181545_181570[2] = inst_181528);
(statearr_181545_181570[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181533 === 8))
{var inst_181496 = (state_181532[9]);var inst_181492 = (state_181532[7]);var inst_181500 = (state_181532[10]);var inst_181505 = inst_181492.push(inst_181496);var tmp181542 = inst_181492;var inst_181492__$1 = tmp181542;var inst_181493 = inst_181500;var state_181532__$1 = (function (){var statearr_181546 = state_181532;(statearr_181546[7] = inst_181492__$1);
(statearr_181546[8] = inst_181493);
(statearr_181546[11] = inst_181505);
return statearr_181546;
})();var statearr_181547_181571 = state_181532__$1;(statearr_181547_181571[2] = null);
(statearr_181547_181571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181533 === 9))
{var inst_181492 = (state_181532[7]);var inst_181508 = cljs.core.vec.call(null,inst_181492);var state_181532__$1 = state_181532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181532__$1,11,out,inst_181508);
} else
{if((state_val_181533 === 10))
{var inst_181515 = (state_181532[2]);var state_181532__$1 = state_181532;var statearr_181548_181572 = state_181532__$1;(statearr_181548_181572[2] = inst_181515);
(statearr_181548_181572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181533 === 11))
{var inst_181496 = (state_181532[9]);var inst_181500 = (state_181532[10]);var inst_181510 = (state_181532[2]);var inst_181511 = [];var inst_181512 = inst_181511.push(inst_181496);var inst_181492 = inst_181511;var inst_181493 = inst_181500;var state_181532__$1 = (function (){var statearr_181549 = state_181532;(statearr_181549[7] = inst_181492);
(statearr_181549[8] = inst_181493);
(statearr_181549[12] = inst_181510);
(statearr_181549[13] = inst_181512);
return statearr_181549;
})();var statearr_181550_181573 = state_181532__$1;(statearr_181550_181573[2] = null);
(statearr_181550_181573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181533 === 12))
{var inst_181492 = (state_181532[7]);var inst_181520 = cljs.core.vec.call(null,inst_181492);var state_181532__$1 = state_181532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181532__$1,15,out,inst_181520);
} else
{if((state_val_181533 === 13))
{var state_181532__$1 = state_181532;var statearr_181551_181574 = state_181532__$1;(statearr_181551_181574[2] = null);
(statearr_181551_181574[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181533 === 14))
{var inst_181525 = (state_181532[2]);var inst_181526 = cljs.core.async.close_BANG_.call(null,out);var state_181532__$1 = (function (){var statearr_181552 = state_181532;(statearr_181552[14] = inst_181525);
return statearr_181552;
})();var statearr_181553_181575 = state_181532__$1;(statearr_181553_181575[2] = inst_181526);
(statearr_181553_181575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_181533 === 15))
{var inst_181522 = (state_181532[2]);var state_181532__$1 = state_181532;var statearr_181554_181576 = state_181532__$1;(statearr_181554_181576[2] = inst_181522);
(statearr_181554_181576[1] = 14);
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
var state_machine__12118__auto____0 = (function (){var statearr_181558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_181558[0] = state_machine__12118__auto__);
(statearr_181558[1] = 1);
return statearr_181558;
});
var state_machine__12118__auto____1 = (function (state_181532){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_181532);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e181559){if((e181559 instanceof Object))
{var ex__12121__auto__ = e181559;var statearr_181560_181577 = state_181532;(statearr_181560_181577[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181532);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e181559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__181578 = state_181532;
state_181532 = G__181578;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_181532){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_181532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_181561 = f__12188__auto__.call(null);(statearr_181561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___181562);
return statearr_181561;
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