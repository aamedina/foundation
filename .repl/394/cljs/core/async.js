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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19925 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19925 = (function (f,fn_handler,meta19926){
this.f = f;
this.fn_handler = fn_handler;
this.meta19926 = meta19926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19925.cljs$lang$type = true;
cljs.core.async.t19925.cljs$lang$ctorStr = "cljs.core.async/t19925";
cljs.core.async.t19925.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"cljs.core.async/t19925");
});
cljs.core.async.t19925.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19927){var self__ = this;
var _19927__$1 = this;return self__.meta19926;
});
cljs.core.async.t19925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19927,meta19926__$1){var self__ = this;
var _19927__$1 = this;return (new cljs.core.async.t19925(self__.f,self__.fn_handler,meta19926__$1));
});
cljs.core.async.__GT_t19925 = (function __GT_t19925(f__$1,fn_handler__$1,meta19926){return (new cljs.core.async.t19925(f__$1,fn_handler__$1,meta19926));
});
}
return (new cljs.core.async.t19925(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19929 = buff;if(G__19929)
{var bit__8473__auto__ = null;if(cljs.core.truth_((function (){var or__7847__auto__ = bit__8473__auto__;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return G__19929.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19929.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19929);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19929);
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
{var val_19930 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19930);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_19930);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7835__auto__ = ret;if(cljs.core.truth_(and__7835__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7835__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8670__auto___19931 = n;var x_19932 = 0;while(true){
if((x_19932 < n__8670__auto___19931))
{(a[x_19932] = 0);
{
var G__19933 = (x_19932 + 1);
x_19932 = G__19933;
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
var G__19934 = (i + 1);
i = G__19934;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19938 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19938 = (function (flag,alt_flag,meta19939){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19939 = meta19939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19938.cljs$lang$type = true;
cljs.core.async.t19938.cljs$lang$ctorStr = "cljs.core.async/t19938";
cljs.core.async.t19938.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"cljs.core.async/t19938");
});
cljs.core.async.t19938.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t19938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t19938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19940){var self__ = this;
var _19940__$1 = this;return self__.meta19939;
});
cljs.core.async.t19938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19940,meta19939__$1){var self__ = this;
var _19940__$1 = this;return (new cljs.core.async.t19938(self__.flag,self__.alt_flag,meta19939__$1));
});
cljs.core.async.__GT_t19938 = (function __GT_t19938(flag__$1,alt_flag__$1,meta19939){return (new cljs.core.async.t19938(flag__$1,alt_flag__$1,meta19939));
});
}
return (new cljs.core.async.t19938(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19944 = (function (cb,flag,alt_handler,meta19945){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19945 = meta19945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19944.cljs$lang$type = true;
cljs.core.async.t19944.cljs$lang$ctorStr = "cljs.core.async/t19944";
cljs.core.async.t19944.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"cljs.core.async/t19944");
});
cljs.core.async.t19944.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19946){var self__ = this;
var _19946__$1 = this;return self__.meta19945;
});
cljs.core.async.t19944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19946,meta19945__$1){var self__ = this;
var _19946__$1 = this;return (new cljs.core.async.t19944(self__.cb,self__.flag,self__.alt_handler,meta19945__$1));
});
cljs.core.async.__GT_t19944 = (function __GT_t19944(cb__$1,flag__$1,alt_handler__$1,meta19945){return (new cljs.core.async.t19944(cb__$1,flag__$1,alt_handler__$1,meta19945));
});
}
return (new cljs.core.async.t19944(cb,flag,alt_handler,null));
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
return (function (p1__19947_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19947_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7847__auto__ = wport;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__19948 = (i + 1);
i = G__19948;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7847__auto__ = ret;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7835__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7835__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7835__auto__;
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
var alts_BANG___delegate = function (ports,p__19949){var map__19951 = p__19949;var map__19951__$1 = ((cljs.core.seq_QMARK_.call(null,map__19951))?cljs.core.apply.call(null,cljs.core.hash_map,map__19951):map__19951);var opts = map__19951__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__19949 = null;if (arguments.length > 1) {
  p__19949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19949);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19952){
var ports = cljs.core.first(arglist__19952);
var p__19949 = cljs.core.rest(arglist__19952);
return alts_BANG___delegate(ports,p__19949);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19960 = (function (ch,f,map_LT_,meta19961){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19961 = meta19961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19960.cljs$lang$type = true;
cljs.core.async.t19960.cljs$lang$ctorStr = "cljs.core.async/t19960";
cljs.core.async.t19960.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"cljs.core.async/t19960");
});
cljs.core.async.t19960.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t19960.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19963 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19963 = (function (fn1,_,meta19961,ch,f,map_LT_,meta19964){
this.fn1 = fn1;
this._ = _;
this.meta19961 = meta19961;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19964 = meta19964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19963.cljs$lang$type = true;
cljs.core.async.t19963.cljs$lang$ctorStr = "cljs.core.async/t19963";
cljs.core.async.t19963.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"cljs.core.async/t19963");
});
cljs.core.async.t19963.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19963.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t19963.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t19963.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__19953_SHARP_){return f1.call(null,(((p1__19953_SHARP_ == null))?null:self__.f.call(null,p1__19953_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t19963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19965){var self__ = this;
var _19965__$1 = this;return self__.meta19964;
});
cljs.core.async.t19963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19965,meta19964__$1){var self__ = this;
var _19965__$1 = this;return (new cljs.core.async.t19963(self__.fn1,self__._,self__.meta19961,self__.ch,self__.f,self__.map_LT_,meta19964__$1));
});
cljs.core.async.__GT_t19963 = (function __GT_t19963(fn1__$1,___$2,meta19961__$1,ch__$2,f__$2,map_LT___$2,meta19964){return (new cljs.core.async.t19963(fn1__$1,___$2,meta19961__$1,ch__$2,f__$2,map_LT___$2,meta19964));
});
}
return (new cljs.core.async.t19963(fn1,___$1,self__.meta19961,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7835__auto__ = ret;if(cljs.core.truth_(and__7835__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7835__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t19960.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19962){var self__ = this;
var _19962__$1 = this;return self__.meta19961;
});
cljs.core.async.t19960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19962,meta19961__$1){var self__ = this;
var _19962__$1 = this;return (new cljs.core.async.t19960(self__.ch,self__.f,self__.map_LT_,meta19961__$1));
});
cljs.core.async.__GT_t19960 = (function __GT_t19960(ch__$1,f__$1,map_LT___$1,meta19961){return (new cljs.core.async.t19960(ch__$1,f__$1,map_LT___$1,meta19961));
});
}
return (new cljs.core.async.t19960(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19969 = (function (ch,f,map_GT_,meta19970){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19970 = meta19970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19969.cljs$lang$type = true;
cljs.core.async.t19969.cljs$lang$ctorStr = "cljs.core.async/t19969";
cljs.core.async.t19969.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"cljs.core.async/t19969");
});
cljs.core.async.t19969.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t19969.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19969.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19971){var self__ = this;
var _19971__$1 = this;return self__.meta19970;
});
cljs.core.async.t19969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19971,meta19970__$1){var self__ = this;
var _19971__$1 = this;return (new cljs.core.async.t19969(self__.ch,self__.f,self__.map_GT_,meta19970__$1));
});
cljs.core.async.__GT_t19969 = (function __GT_t19969(ch__$1,f__$1,map_GT___$1,meta19970){return (new cljs.core.async.t19969(ch__$1,f__$1,map_GT___$1,meta19970));
});
}
return (new cljs.core.async.t19969(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19975 = (function (ch,p,filter_GT_,meta19976){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19976 = meta19976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19975.cljs$lang$type = true;
cljs.core.async.t19975.cljs$lang$ctorStr = "cljs.core.async/t19975";
cljs.core.async.t19975.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"cljs.core.async/t19975");
});
cljs.core.async.t19975.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t19975.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19975.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19977){var self__ = this;
var _19977__$1 = this;return self__.meta19976;
});
cljs.core.async.t19975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19977,meta19976__$1){var self__ = this;
var _19977__$1 = this;return (new cljs.core.async.t19975(self__.ch,self__.p,self__.filter_GT_,meta19976__$1));
});
cljs.core.async.__GT_t19975 = (function __GT_t19975(ch__$1,p__$1,filter_GT___$1,meta19976){return (new cljs.core.async.t19975(ch__$1,p__$1,filter_GT___$1,meta19976));
});
}
return (new cljs.core.async.t19975(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13612__auto___20060 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_20039){var state_val_20040 = (state_20039[1]);if((state_val_20040 === 1))
{var state_20039__$1 = state_20039;var statearr_20041_20061 = state_20039__$1;(statearr_20041_20061[2] = null);
(statearr_20041_20061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20040 === 2))
{var state_20039__$1 = state_20039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20039__$1,4,ch);
} else
{if((state_val_20040 === 3))
{var inst_20037 = (state_20039[2]);var state_20039__$1 = state_20039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20039__$1,inst_20037);
} else
{if((state_val_20040 === 4))
{var inst_20021 = (state_20039[7]);var inst_20021__$1 = (state_20039[2]);var inst_20022 = (inst_20021__$1 == null);var state_20039__$1 = (function (){var statearr_20042 = state_20039;(statearr_20042[7] = inst_20021__$1);
return statearr_20042;
})();if(cljs.core.truth_(inst_20022))
{var statearr_20043_20062 = state_20039__$1;(statearr_20043_20062[1] = 5);
} else
{var statearr_20044_20063 = state_20039__$1;(statearr_20044_20063[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20040 === 5))
{var inst_20024 = cljs.core.async.close_BANG_.call(null,out);var state_20039__$1 = state_20039;var statearr_20045_20064 = state_20039__$1;(statearr_20045_20064[2] = inst_20024);
(statearr_20045_20064[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20040 === 6))
{var inst_20021 = (state_20039[7]);var inst_20026 = p.call(null,inst_20021);var state_20039__$1 = state_20039;if(cljs.core.truth_(inst_20026))
{var statearr_20046_20065 = state_20039__$1;(statearr_20046_20065[1] = 8);
} else
{var statearr_20047_20066 = state_20039__$1;(statearr_20047_20066[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20040 === 7))
{var inst_20035 = (state_20039[2]);var state_20039__$1 = state_20039;var statearr_20048_20067 = state_20039__$1;(statearr_20048_20067[2] = inst_20035);
(statearr_20048_20067[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20040 === 8))
{var inst_20021 = (state_20039[7]);var state_20039__$1 = state_20039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20039__$1,11,out,inst_20021);
} else
{if((state_val_20040 === 9))
{var state_20039__$1 = state_20039;var statearr_20049_20068 = state_20039__$1;(statearr_20049_20068[2] = null);
(statearr_20049_20068[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20040 === 10))
{var inst_20032 = (state_20039[2]);var state_20039__$1 = (function (){var statearr_20050 = state_20039;(statearr_20050[8] = inst_20032);
return statearr_20050;
})();var statearr_20051_20069 = state_20039__$1;(statearr_20051_20069[2] = null);
(statearr_20051_20069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20040 === 11))
{var inst_20029 = (state_20039[2]);var state_20039__$1 = state_20039;var statearr_20052_20070 = state_20039__$1;(statearr_20052_20070[2] = inst_20029);
(statearr_20052_20070[1] = 10);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_20056 = (new Array(9));(statearr_20056[0] = state_machine__13486__auto__);
(statearr_20056[1] = 1);
return statearr_20056;
});
var state_machine__13486__auto____1 = (function (state_20039){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_20039);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e20057){if((e20057 instanceof Object))
{var ex__13489__auto__ = e20057;var statearr_20058_20071 = state_20039;(statearr_20058_20071[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20072 = state_20039;
state_20039 = G__20072;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_20039){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_20039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_20059 = f__13613__auto__.call(null);(statearr_20059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___20060);
return statearr_20059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13612__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_20224){var state_val_20225 = (state_20224[1]);if((state_val_20225 === 1))
{var state_20224__$1 = state_20224;var statearr_20226_20263 = state_20224__$1;(statearr_20226_20263[2] = null);
(statearr_20226_20263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 2))
{var state_20224__$1 = state_20224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20224__$1,4,in$);
} else
{if((state_val_20225 === 3))
{var inst_20222 = (state_20224[2]);var state_20224__$1 = state_20224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20224__$1,inst_20222);
} else
{if((state_val_20225 === 4))
{var inst_20170 = (state_20224[7]);var inst_20170__$1 = (state_20224[2]);var inst_20171 = (inst_20170__$1 == null);var state_20224__$1 = (function (){var statearr_20227 = state_20224;(statearr_20227[7] = inst_20170__$1);
return statearr_20227;
})();if(cljs.core.truth_(inst_20171))
{var statearr_20228_20264 = state_20224__$1;(statearr_20228_20264[1] = 5);
} else
{var statearr_20229_20265 = state_20224__$1;(statearr_20229_20265[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 5))
{var inst_20173 = cljs.core.async.close_BANG_.call(null,out);var state_20224__$1 = state_20224;var statearr_20230_20266 = state_20224__$1;(statearr_20230_20266[2] = inst_20173);
(statearr_20230_20266[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 6))
{var inst_20170 = (state_20224[7]);var inst_20175 = f.call(null,inst_20170);var inst_20180 = cljs.core.seq.call(null,inst_20175);var inst_20181 = inst_20180;var inst_20182 = null;var inst_20183 = 0;var inst_20184 = 0;var state_20224__$1 = (function (){var statearr_20231 = state_20224;(statearr_20231[8] = inst_20184);
(statearr_20231[9] = inst_20182);
(statearr_20231[10] = inst_20183);
(statearr_20231[11] = inst_20181);
return statearr_20231;
})();var statearr_20232_20267 = state_20224__$1;(statearr_20232_20267[2] = null);
(statearr_20232_20267[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 7))
{var inst_20220 = (state_20224[2]);var state_20224__$1 = state_20224;var statearr_20233_20268 = state_20224__$1;(statearr_20233_20268[2] = inst_20220);
(statearr_20233_20268[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 8))
{var inst_20184 = (state_20224[8]);var inst_20183 = (state_20224[10]);var inst_20186 = (inst_20184 < inst_20183);var inst_20187 = inst_20186;var state_20224__$1 = state_20224;if(cljs.core.truth_(inst_20187))
{var statearr_20234_20269 = state_20224__$1;(statearr_20234_20269[1] = 10);
} else
{var statearr_20235_20270 = state_20224__$1;(statearr_20235_20270[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 9))
{var inst_20217 = (state_20224[2]);var state_20224__$1 = (function (){var statearr_20236 = state_20224;(statearr_20236[12] = inst_20217);
return statearr_20236;
})();var statearr_20237_20271 = state_20224__$1;(statearr_20237_20271[2] = null);
(statearr_20237_20271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 10))
{var inst_20184 = (state_20224[8]);var inst_20182 = (state_20224[9]);var inst_20189 = cljs.core._nth.call(null,inst_20182,inst_20184);var state_20224__$1 = state_20224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20224__$1,13,out,inst_20189);
} else
{if((state_val_20225 === 11))
{var inst_20181 = (state_20224[11]);var inst_20195 = (state_20224[13]);var inst_20195__$1 = cljs.core.seq.call(null,inst_20181);var state_20224__$1 = (function (){var statearr_20241 = state_20224;(statearr_20241[13] = inst_20195__$1);
return statearr_20241;
})();if(inst_20195__$1)
{var statearr_20242_20272 = state_20224__$1;(statearr_20242_20272[1] = 14);
} else
{var statearr_20243_20273 = state_20224__$1;(statearr_20243_20273[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 12))
{var inst_20215 = (state_20224[2]);var state_20224__$1 = state_20224;var statearr_20244_20274 = state_20224__$1;(statearr_20244_20274[2] = inst_20215);
(statearr_20244_20274[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 13))
{var inst_20184 = (state_20224[8]);var inst_20182 = (state_20224[9]);var inst_20183 = (state_20224[10]);var inst_20181 = (state_20224[11]);var inst_20191 = (state_20224[2]);var inst_20192 = (inst_20184 + 1);var tmp20238 = inst_20182;var tmp20239 = inst_20183;var tmp20240 = inst_20181;var inst_20181__$1 = tmp20240;var inst_20182__$1 = tmp20238;var inst_20183__$1 = tmp20239;var inst_20184__$1 = inst_20192;var state_20224__$1 = (function (){var statearr_20245 = state_20224;(statearr_20245[8] = inst_20184__$1);
(statearr_20245[9] = inst_20182__$1);
(statearr_20245[10] = inst_20183__$1);
(statearr_20245[11] = inst_20181__$1);
(statearr_20245[14] = inst_20191);
return statearr_20245;
})();var statearr_20246_20275 = state_20224__$1;(statearr_20246_20275[2] = null);
(statearr_20246_20275[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 14))
{var inst_20195 = (state_20224[13]);var inst_20197 = cljs.core.chunked_seq_QMARK_.call(null,inst_20195);var state_20224__$1 = state_20224;if(inst_20197)
{var statearr_20247_20276 = state_20224__$1;(statearr_20247_20276[1] = 17);
} else
{var statearr_20248_20277 = state_20224__$1;(statearr_20248_20277[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 15))
{var state_20224__$1 = state_20224;var statearr_20249_20278 = state_20224__$1;(statearr_20249_20278[2] = null);
(statearr_20249_20278[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 16))
{var inst_20213 = (state_20224[2]);var state_20224__$1 = state_20224;var statearr_20250_20279 = state_20224__$1;(statearr_20250_20279[2] = inst_20213);
(statearr_20250_20279[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 17))
{var inst_20195 = (state_20224[13]);var inst_20199 = cljs.core.chunk_first.call(null,inst_20195);var inst_20200 = cljs.core.chunk_rest.call(null,inst_20195);var inst_20201 = cljs.core.count.call(null,inst_20199);var inst_20181 = inst_20200;var inst_20182 = inst_20199;var inst_20183 = inst_20201;var inst_20184 = 0;var state_20224__$1 = (function (){var statearr_20251 = state_20224;(statearr_20251[8] = inst_20184);
(statearr_20251[9] = inst_20182);
(statearr_20251[10] = inst_20183);
(statearr_20251[11] = inst_20181);
return statearr_20251;
})();var statearr_20252_20280 = state_20224__$1;(statearr_20252_20280[2] = null);
(statearr_20252_20280[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 18))
{var inst_20195 = (state_20224[13]);var inst_20204 = cljs.core.first.call(null,inst_20195);var state_20224__$1 = state_20224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20224__$1,20,out,inst_20204);
} else
{if((state_val_20225 === 19))
{var inst_20210 = (state_20224[2]);var state_20224__$1 = state_20224;var statearr_20253_20281 = state_20224__$1;(statearr_20253_20281[2] = inst_20210);
(statearr_20253_20281[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20225 === 20))
{var inst_20195 = (state_20224[13]);var inst_20206 = (state_20224[2]);var inst_20207 = cljs.core.next.call(null,inst_20195);var inst_20181 = inst_20207;var inst_20182 = null;var inst_20183 = 0;var inst_20184 = 0;var state_20224__$1 = (function (){var statearr_20254 = state_20224;(statearr_20254[8] = inst_20184);
(statearr_20254[9] = inst_20182);
(statearr_20254[10] = inst_20183);
(statearr_20254[11] = inst_20181);
(statearr_20254[15] = inst_20206);
return statearr_20254;
})();var statearr_20255_20282 = state_20224__$1;(statearr_20255_20282[2] = null);
(statearr_20255_20282[1] = 8);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_20259 = (new Array(16));(statearr_20259[0] = state_machine__13486__auto__);
(statearr_20259[1] = 1);
return statearr_20259;
});
var state_machine__13486__auto____1 = (function (state_20224){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_20224);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e20260){if((e20260 instanceof Object))
{var ex__13489__auto__ = e20260;var statearr_20261_20283 = state_20224;(statearr_20261_20283[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20260;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20284 = state_20224;
state_20224 = G__20284;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_20224){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_20224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_20262 = f__13613__auto__.call(null);(statearr_20262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto__);
return statearr_20262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
}));
return c__13612__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13612__auto___20365 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_20344){var state_val_20345 = (state_20344[1]);if((state_val_20345 === 1))
{var state_20344__$1 = state_20344;var statearr_20346_20366 = state_20344__$1;(statearr_20346_20366[2] = null);
(statearr_20346_20366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20345 === 2))
{var state_20344__$1 = state_20344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20344__$1,4,from);
} else
{if((state_val_20345 === 3))
{var inst_20342 = (state_20344[2]);var state_20344__$1 = state_20344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20344__$1,inst_20342);
} else
{if((state_val_20345 === 4))
{var inst_20327 = (state_20344[7]);var inst_20327__$1 = (state_20344[2]);var inst_20328 = (inst_20327__$1 == null);var state_20344__$1 = (function (){var statearr_20347 = state_20344;(statearr_20347[7] = inst_20327__$1);
return statearr_20347;
})();if(cljs.core.truth_(inst_20328))
{var statearr_20348_20367 = state_20344__$1;(statearr_20348_20367[1] = 5);
} else
{var statearr_20349_20368 = state_20344__$1;(statearr_20349_20368[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20345 === 5))
{var state_20344__$1 = state_20344;if(cljs.core.truth_(close_QMARK_))
{var statearr_20350_20369 = state_20344__$1;(statearr_20350_20369[1] = 8);
} else
{var statearr_20351_20370 = state_20344__$1;(statearr_20351_20370[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20345 === 6))
{var inst_20327 = (state_20344[7]);var state_20344__$1 = state_20344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20344__$1,11,to,inst_20327);
} else
{if((state_val_20345 === 7))
{var inst_20340 = (state_20344[2]);var state_20344__$1 = state_20344;var statearr_20352_20371 = state_20344__$1;(statearr_20352_20371[2] = inst_20340);
(statearr_20352_20371[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20345 === 8))
{var inst_20331 = cljs.core.async.close_BANG_.call(null,to);var state_20344__$1 = state_20344;var statearr_20353_20372 = state_20344__$1;(statearr_20353_20372[2] = inst_20331);
(statearr_20353_20372[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20345 === 9))
{var state_20344__$1 = state_20344;var statearr_20354_20373 = state_20344__$1;(statearr_20354_20373[2] = null);
(statearr_20354_20373[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20345 === 10))
{var inst_20334 = (state_20344[2]);var state_20344__$1 = state_20344;var statearr_20355_20374 = state_20344__$1;(statearr_20355_20374[2] = inst_20334);
(statearr_20355_20374[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20345 === 11))
{var inst_20337 = (state_20344[2]);var state_20344__$1 = (function (){var statearr_20356 = state_20344;(statearr_20356[8] = inst_20337);
return statearr_20356;
})();var statearr_20357_20375 = state_20344__$1;(statearr_20357_20375[2] = null);
(statearr_20357_20375[1] = 2);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_20361 = (new Array(9));(statearr_20361[0] = state_machine__13486__auto__);
(statearr_20361[1] = 1);
return statearr_20361;
});
var state_machine__13486__auto____1 = (function (state_20344){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_20344);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e20362){if((e20362 instanceof Object))
{var ex__13489__auto__ = e20362;var statearr_20363_20376 = state_20344;(statearr_20363_20376[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20344);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20377 = state_20344;
state_20344 = G__20377;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_20344){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_20344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_20364 = f__13613__auto__.call(null);(statearr_20364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___20365);
return statearr_20364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13612__auto___20464 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_20442){var state_val_20443 = (state_20442[1]);if((state_val_20443 === 1))
{var state_20442__$1 = state_20442;var statearr_20444_20465 = state_20442__$1;(statearr_20444_20465[2] = null);
(statearr_20444_20465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20443 === 2))
{var state_20442__$1 = state_20442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20442__$1,4,ch);
} else
{if((state_val_20443 === 3))
{var inst_20440 = (state_20442[2]);var state_20442__$1 = state_20442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20442__$1,inst_20440);
} else
{if((state_val_20443 === 4))
{var inst_20423 = (state_20442[7]);var inst_20423__$1 = (state_20442[2]);var inst_20424 = (inst_20423__$1 == null);var state_20442__$1 = (function (){var statearr_20445 = state_20442;(statearr_20445[7] = inst_20423__$1);
return statearr_20445;
})();if(cljs.core.truth_(inst_20424))
{var statearr_20446_20466 = state_20442__$1;(statearr_20446_20466[1] = 5);
} else
{var statearr_20447_20467 = state_20442__$1;(statearr_20447_20467[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20443 === 5))
{var inst_20426 = cljs.core.async.close_BANG_.call(null,tc);var inst_20427 = cljs.core.async.close_BANG_.call(null,fc);var state_20442__$1 = (function (){var statearr_20448 = state_20442;(statearr_20448[8] = inst_20426);
return statearr_20448;
})();var statearr_20449_20468 = state_20442__$1;(statearr_20449_20468[2] = inst_20427);
(statearr_20449_20468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20443 === 6))
{var inst_20423 = (state_20442[7]);var inst_20429 = p.call(null,inst_20423);var state_20442__$1 = state_20442;if(cljs.core.truth_(inst_20429))
{var statearr_20450_20469 = state_20442__$1;(statearr_20450_20469[1] = 9);
} else
{var statearr_20451_20470 = state_20442__$1;(statearr_20451_20470[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20443 === 7))
{var inst_20438 = (state_20442[2]);var state_20442__$1 = state_20442;var statearr_20452_20471 = state_20442__$1;(statearr_20452_20471[2] = inst_20438);
(statearr_20452_20471[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20443 === 8))
{var inst_20435 = (state_20442[2]);var state_20442__$1 = (function (){var statearr_20453 = state_20442;(statearr_20453[9] = inst_20435);
return statearr_20453;
})();var statearr_20454_20472 = state_20442__$1;(statearr_20454_20472[2] = null);
(statearr_20454_20472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20443 === 9))
{var state_20442__$1 = state_20442;var statearr_20455_20473 = state_20442__$1;(statearr_20455_20473[2] = tc);
(statearr_20455_20473[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20443 === 10))
{var state_20442__$1 = state_20442;var statearr_20456_20474 = state_20442__$1;(statearr_20456_20474[2] = fc);
(statearr_20456_20474[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20443 === 11))
{var inst_20423 = (state_20442[7]);var inst_20433 = (state_20442[2]);var state_20442__$1 = state_20442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20442__$1,8,inst_20433,inst_20423);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_20460 = (new Array(10));(statearr_20460[0] = state_machine__13486__auto__);
(statearr_20460[1] = 1);
return statearr_20460;
});
var state_machine__13486__auto____1 = (function (state_20442){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_20442);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e20461){if((e20461 instanceof Object))
{var ex__13489__auto__ = e20461;var statearr_20462_20475 = state_20442;(statearr_20462_20475[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20476 = state_20442;
state_20442 = G__20476;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_20442){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_20442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_20463 = f__13613__auto__.call(null);(statearr_20463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___20464);
return statearr_20463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13612__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_20523){var state_val_20524 = (state_20523[1]);if((state_val_20524 === 7))
{var inst_20519 = (state_20523[2]);var state_20523__$1 = state_20523;var statearr_20525_20541 = state_20523__$1;(statearr_20525_20541[2] = inst_20519);
(statearr_20525_20541[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20524 === 6))
{var inst_20509 = (state_20523[7]);var inst_20512 = (state_20523[8]);var inst_20516 = f.call(null,inst_20509,inst_20512);var inst_20509__$1 = inst_20516;var state_20523__$1 = (function (){var statearr_20526 = state_20523;(statearr_20526[7] = inst_20509__$1);
return statearr_20526;
})();var statearr_20527_20542 = state_20523__$1;(statearr_20527_20542[2] = null);
(statearr_20527_20542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20524 === 5))
{var inst_20509 = (state_20523[7]);var state_20523__$1 = state_20523;var statearr_20528_20543 = state_20523__$1;(statearr_20528_20543[2] = inst_20509);
(statearr_20528_20543[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20524 === 4))
{var inst_20512 = (state_20523[8]);var inst_20512__$1 = (state_20523[2]);var inst_20513 = (inst_20512__$1 == null);var state_20523__$1 = (function (){var statearr_20529 = state_20523;(statearr_20529[8] = inst_20512__$1);
return statearr_20529;
})();if(cljs.core.truth_(inst_20513))
{var statearr_20530_20544 = state_20523__$1;(statearr_20530_20544[1] = 5);
} else
{var statearr_20531_20545 = state_20523__$1;(statearr_20531_20545[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20524 === 3))
{var inst_20521 = (state_20523[2]);var state_20523__$1 = state_20523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20523__$1,inst_20521);
} else
{if((state_val_20524 === 2))
{var state_20523__$1 = state_20523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20523__$1,4,ch);
} else
{if((state_val_20524 === 1))
{var inst_20509 = init;var state_20523__$1 = (function (){var statearr_20532 = state_20523;(statearr_20532[7] = inst_20509);
return statearr_20532;
})();var statearr_20533_20546 = state_20523__$1;(statearr_20533_20546[2] = null);
(statearr_20533_20546[1] = 2);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_20537 = (new Array(9));(statearr_20537[0] = state_machine__13486__auto__);
(statearr_20537[1] = 1);
return statearr_20537;
});
var state_machine__13486__auto____1 = (function (state_20523){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_20523);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e20538){if((e20538 instanceof Object))
{var ex__13489__auto__ = e20538;var statearr_20539_20547 = state_20523;(statearr_20539_20547[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20538;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20548 = state_20523;
state_20523 = G__20548;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_20523){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_20523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_20540 = f__13613__auto__.call(null);(statearr_20540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto__);
return statearr_20540;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
}));
return c__13612__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13612__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_20610){var state_val_20611 = (state_20610[1]);if((state_val_20611 === 1))
{var inst_20590 = cljs.core.seq.call(null,coll);var inst_20591 = inst_20590;var state_20610__$1 = (function (){var statearr_20612 = state_20610;(statearr_20612[7] = inst_20591);
return statearr_20612;
})();var statearr_20613_20631 = state_20610__$1;(statearr_20613_20631[2] = null);
(statearr_20613_20631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20611 === 2))
{var inst_20591 = (state_20610[7]);var state_20610__$1 = state_20610;if(cljs.core.truth_(inst_20591))
{var statearr_20614_20632 = state_20610__$1;(statearr_20614_20632[1] = 4);
} else
{var statearr_20615_20633 = state_20610__$1;(statearr_20615_20633[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20611 === 3))
{var inst_20608 = (state_20610[2]);var state_20610__$1 = state_20610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20610__$1,inst_20608);
} else
{if((state_val_20611 === 4))
{var inst_20591 = (state_20610[7]);var inst_20594 = cljs.core.first.call(null,inst_20591);var state_20610__$1 = state_20610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20610__$1,7,ch,inst_20594);
} else
{if((state_val_20611 === 5))
{var state_20610__$1 = state_20610;if(cljs.core.truth_(close_QMARK_))
{var statearr_20616_20634 = state_20610__$1;(statearr_20616_20634[1] = 8);
} else
{var statearr_20617_20635 = state_20610__$1;(statearr_20617_20635[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20611 === 6))
{var inst_20606 = (state_20610[2]);var state_20610__$1 = state_20610;var statearr_20618_20636 = state_20610__$1;(statearr_20618_20636[2] = inst_20606);
(statearr_20618_20636[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20611 === 7))
{var inst_20591 = (state_20610[7]);var inst_20596 = (state_20610[2]);var inst_20597 = cljs.core.next.call(null,inst_20591);var inst_20591__$1 = inst_20597;var state_20610__$1 = (function (){var statearr_20619 = state_20610;(statearr_20619[8] = inst_20596);
(statearr_20619[7] = inst_20591__$1);
return statearr_20619;
})();var statearr_20620_20637 = state_20610__$1;(statearr_20620_20637[2] = null);
(statearr_20620_20637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20611 === 8))
{var inst_20601 = cljs.core.async.close_BANG_.call(null,ch);var state_20610__$1 = state_20610;var statearr_20621_20638 = state_20610__$1;(statearr_20621_20638[2] = inst_20601);
(statearr_20621_20638[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20611 === 9))
{var state_20610__$1 = state_20610;var statearr_20622_20639 = state_20610__$1;(statearr_20622_20639[2] = null);
(statearr_20622_20639[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20611 === 10))
{var inst_20604 = (state_20610[2]);var state_20610__$1 = state_20610;var statearr_20623_20640 = state_20610__$1;(statearr_20623_20640[2] = inst_20604);
(statearr_20623_20640[1] = 6);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_20627 = (new Array(9));(statearr_20627[0] = state_machine__13486__auto__);
(statearr_20627[1] = 1);
return statearr_20627;
});
var state_machine__13486__auto____1 = (function (state_20610){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_20610);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e20628){if((e20628 instanceof Object))
{var ex__13489__auto__ = e20628;var statearr_20629_20641 = state_20610;(statearr_20629_20641[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20610);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20642 = state_20610;
state_20610 = G__20642;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_20610){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_20610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_20630 = f__13613__auto__.call(null);(statearr_20630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto__);
return statearr_20630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
}));
return c__13612__auto__;
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
cljs.core.async.Mux = (function (){var obj20644 = {};return obj20644;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7835__auto__ = _;if(and__7835__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7835__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8450__auto__ = (((_ == null))?null:_);return (function (){var or__7847__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj20646 = {};return obj20646;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7835__auto__ = m;if(and__7835__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7835__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8450__auto__ = (((m == null))?null:m);return (function (){var or__7847__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7835__auto__ = m;if(and__7835__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7835__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8450__auto__ = (((m == null))?null:m);return (function (){var or__7847__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7835__auto__ = m;if(and__7835__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7835__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8450__auto__ = (((m == null))?null:m);return (function (){var or__7847__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20870 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20870 = (function (cs,ch,mult,meta20871){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20871 = meta20871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20870.cljs$lang$type = true;
cljs.core.async.t20870.cljs$lang$ctorStr = "cljs.core.async/t20870";
cljs.core.async.t20870.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"cljs.core.async/t20870");
});})(cs))
;
cljs.core.async.t20870.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20870.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20870.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20870.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20870.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20872){var self__ = this;
var _20872__$1 = this;return self__.meta20871;
});})(cs))
;
cljs.core.async.t20870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20872,meta20871__$1){var self__ = this;
var _20872__$1 = this;return (new cljs.core.async.t20870(self__.cs,self__.ch,self__.mult,meta20871__$1));
});})(cs))
;
cljs.core.async.__GT_t20870 = ((function (cs){
return (function __GT_t20870(cs__$1,ch__$1,mult__$1,meta20871){return (new cljs.core.async.t20870(cs__$1,ch__$1,mult__$1,meta20871));
});})(cs))
;
}
return (new cljs.core.async.t20870(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13612__auto___21093 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_21007){var state_val_21008 = (state_21007[1]);if((state_val_21008 === 32))
{var inst_20951 = (state_21007[7]);var inst_20875 = (state_21007[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21007,31,Object,null,30);var inst_20958 = cljs.core.async.put_BANG_.call(null,inst_20951,inst_20875,done);var state_21007__$1 = state_21007;var statearr_21009_21094 = state_21007__$1;(statearr_21009_21094[2] = inst_20958);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21007__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 1))
{var state_21007__$1 = state_21007;var statearr_21010_21095 = state_21007__$1;(statearr_21010_21095[2] = null);
(statearr_21010_21095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 33))
{var inst_20964 = (state_21007[9]);var inst_20966 = cljs.core.chunked_seq_QMARK_.call(null,inst_20964);var state_21007__$1 = state_21007;if(inst_20966)
{var statearr_21011_21096 = state_21007__$1;(statearr_21011_21096[1] = 36);
} else
{var statearr_21012_21097 = state_21007__$1;(statearr_21012_21097[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 2))
{var state_21007__$1 = state_21007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21007__$1,4,ch);
} else
{if((state_val_21008 === 34))
{var state_21007__$1 = state_21007;var statearr_21013_21098 = state_21007__$1;(statearr_21013_21098[2] = null);
(statearr_21013_21098[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 3))
{var inst_21005 = (state_21007[2]);var state_21007__$1 = state_21007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21007__$1,inst_21005);
} else
{if((state_val_21008 === 35))
{var inst_20989 = (state_21007[2]);var state_21007__$1 = state_21007;var statearr_21014_21099 = state_21007__$1;(statearr_21014_21099[2] = inst_20989);
(statearr_21014_21099[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 4))
{var inst_20875 = (state_21007[8]);var inst_20875__$1 = (state_21007[2]);var inst_20876 = (inst_20875__$1 == null);var state_21007__$1 = (function (){var statearr_21015 = state_21007;(statearr_21015[8] = inst_20875__$1);
return statearr_21015;
})();if(cljs.core.truth_(inst_20876))
{var statearr_21016_21100 = state_21007__$1;(statearr_21016_21100[1] = 5);
} else
{var statearr_21017_21101 = state_21007__$1;(statearr_21017_21101[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 36))
{var inst_20964 = (state_21007[9]);var inst_20968 = cljs.core.chunk_first.call(null,inst_20964);var inst_20969 = cljs.core.chunk_rest.call(null,inst_20964);var inst_20970 = cljs.core.count.call(null,inst_20968);var inst_20943 = inst_20969;var inst_20944 = inst_20968;var inst_20945 = inst_20970;var inst_20946 = 0;var state_21007__$1 = (function (){var statearr_21018 = state_21007;(statearr_21018[10] = inst_20943);
(statearr_21018[11] = inst_20945);
(statearr_21018[12] = inst_20944);
(statearr_21018[13] = inst_20946);
return statearr_21018;
})();var statearr_21019_21102 = state_21007__$1;(statearr_21019_21102[2] = null);
(statearr_21019_21102[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 5))
{var inst_20882 = cljs.core.deref.call(null,cs);var inst_20883 = cljs.core.seq.call(null,inst_20882);var inst_20884 = inst_20883;var inst_20885 = null;var inst_20886 = 0;var inst_20887 = 0;var state_21007__$1 = (function (){var statearr_21020 = state_21007;(statearr_21020[14] = inst_20884);
(statearr_21020[15] = inst_20885);
(statearr_21020[16] = inst_20886);
(statearr_21020[17] = inst_20887);
return statearr_21020;
})();var statearr_21021_21103 = state_21007__$1;(statearr_21021_21103[2] = null);
(statearr_21021_21103[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 37))
{var inst_20964 = (state_21007[9]);var inst_20973 = cljs.core.first.call(null,inst_20964);var state_21007__$1 = (function (){var statearr_21022 = state_21007;(statearr_21022[18] = inst_20973);
return statearr_21022;
})();var statearr_21023_21104 = state_21007__$1;(statearr_21023_21104[2] = null);
(statearr_21023_21104[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 6))
{var inst_20935 = (state_21007[19]);var inst_20934 = cljs.core.deref.call(null,cs);var inst_20935__$1 = cljs.core.keys.call(null,inst_20934);var inst_20936 = cljs.core.count.call(null,inst_20935__$1);var inst_20937 = cljs.core.reset_BANG_.call(null,dctr,inst_20936);var inst_20942 = cljs.core.seq.call(null,inst_20935__$1);var inst_20943 = inst_20942;var inst_20944 = null;var inst_20945 = 0;var inst_20946 = 0;var state_21007__$1 = (function (){var statearr_21024 = state_21007;(statearr_21024[20] = inst_20937);
(statearr_21024[19] = inst_20935__$1);
(statearr_21024[10] = inst_20943);
(statearr_21024[11] = inst_20945);
(statearr_21024[12] = inst_20944);
(statearr_21024[13] = inst_20946);
return statearr_21024;
})();var statearr_21025_21105 = state_21007__$1;(statearr_21025_21105[2] = null);
(statearr_21025_21105[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 38))
{var inst_20986 = (state_21007[2]);var state_21007__$1 = state_21007;var statearr_21026_21106 = state_21007__$1;(statearr_21026_21106[2] = inst_20986);
(statearr_21026_21106[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 7))
{var inst_21003 = (state_21007[2]);var state_21007__$1 = state_21007;var statearr_21027_21107 = state_21007__$1;(statearr_21027_21107[2] = inst_21003);
(statearr_21027_21107[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 39))
{var inst_20964 = (state_21007[9]);var inst_20982 = (state_21007[2]);var inst_20983 = cljs.core.next.call(null,inst_20964);var inst_20943 = inst_20983;var inst_20944 = null;var inst_20945 = 0;var inst_20946 = 0;var state_21007__$1 = (function (){var statearr_21028 = state_21007;(statearr_21028[10] = inst_20943);
(statearr_21028[11] = inst_20945);
(statearr_21028[12] = inst_20944);
(statearr_21028[13] = inst_20946);
(statearr_21028[21] = inst_20982);
return statearr_21028;
})();var statearr_21029_21108 = state_21007__$1;(statearr_21029_21108[2] = null);
(statearr_21029_21108[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 8))
{var inst_20886 = (state_21007[16]);var inst_20887 = (state_21007[17]);var inst_20889 = (inst_20887 < inst_20886);var inst_20890 = inst_20889;var state_21007__$1 = state_21007;if(cljs.core.truth_(inst_20890))
{var statearr_21030_21109 = state_21007__$1;(statearr_21030_21109[1] = 10);
} else
{var statearr_21031_21110 = state_21007__$1;(statearr_21031_21110[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 40))
{var inst_20973 = (state_21007[18]);var inst_20974 = (state_21007[2]);var inst_20975 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20976 = cljs.core.async.untap_STAR_.call(null,m,inst_20973);var state_21007__$1 = (function (){var statearr_21032 = state_21007;(statearr_21032[22] = inst_20975);
(statearr_21032[23] = inst_20974);
return statearr_21032;
})();var statearr_21033_21111 = state_21007__$1;(statearr_21033_21111[2] = inst_20976);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21007__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 9))
{var inst_20932 = (state_21007[2]);var state_21007__$1 = state_21007;var statearr_21034_21112 = state_21007__$1;(statearr_21034_21112[2] = inst_20932);
(statearr_21034_21112[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 41))
{var inst_20875 = (state_21007[8]);var inst_20973 = (state_21007[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21007,40,Object,null,39);var inst_20980 = cljs.core.async.put_BANG_.call(null,inst_20973,inst_20875,done);var state_21007__$1 = state_21007;var statearr_21035_21113 = state_21007__$1;(statearr_21035_21113[2] = inst_20980);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21007__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 10))
{var inst_20885 = (state_21007[15]);var inst_20887 = (state_21007[17]);var inst_20893 = cljs.core._nth.call(null,inst_20885,inst_20887);var inst_20894 = cljs.core.nth.call(null,inst_20893,0,null);var inst_20895 = cljs.core.nth.call(null,inst_20893,1,null);var state_21007__$1 = (function (){var statearr_21036 = state_21007;(statearr_21036[24] = inst_20894);
return statearr_21036;
})();if(cljs.core.truth_(inst_20895))
{var statearr_21037_21114 = state_21007__$1;(statearr_21037_21114[1] = 13);
} else
{var statearr_21038_21115 = state_21007__$1;(statearr_21038_21115[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 42))
{var state_21007__$1 = state_21007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21007__$1,45,dchan);
} else
{if((state_val_21008 === 11))
{var inst_20884 = (state_21007[14]);var inst_20904 = (state_21007[25]);var inst_20904__$1 = cljs.core.seq.call(null,inst_20884);var state_21007__$1 = (function (){var statearr_21039 = state_21007;(statearr_21039[25] = inst_20904__$1);
return statearr_21039;
})();if(inst_20904__$1)
{var statearr_21040_21116 = state_21007__$1;(statearr_21040_21116[1] = 16);
} else
{var statearr_21041_21117 = state_21007__$1;(statearr_21041_21117[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 43))
{var state_21007__$1 = state_21007;var statearr_21042_21118 = state_21007__$1;(statearr_21042_21118[2] = null);
(statearr_21042_21118[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 12))
{var inst_20930 = (state_21007[2]);var state_21007__$1 = state_21007;var statearr_21043_21119 = state_21007__$1;(statearr_21043_21119[2] = inst_20930);
(statearr_21043_21119[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 44))
{var inst_21000 = (state_21007[2]);var state_21007__$1 = (function (){var statearr_21044 = state_21007;(statearr_21044[26] = inst_21000);
return statearr_21044;
})();var statearr_21045_21120 = state_21007__$1;(statearr_21045_21120[2] = null);
(statearr_21045_21120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 13))
{var inst_20894 = (state_21007[24]);var inst_20897 = cljs.core.async.close_BANG_.call(null,inst_20894);var state_21007__$1 = state_21007;var statearr_21046_21121 = state_21007__$1;(statearr_21046_21121[2] = inst_20897);
(statearr_21046_21121[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 45))
{var inst_20997 = (state_21007[2]);var state_21007__$1 = state_21007;var statearr_21050_21122 = state_21007__$1;(statearr_21050_21122[2] = inst_20997);
(statearr_21050_21122[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 14))
{var state_21007__$1 = state_21007;var statearr_21051_21123 = state_21007__$1;(statearr_21051_21123[2] = null);
(statearr_21051_21123[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 15))
{var inst_20884 = (state_21007[14]);var inst_20885 = (state_21007[15]);var inst_20886 = (state_21007[16]);var inst_20887 = (state_21007[17]);var inst_20900 = (state_21007[2]);var inst_20901 = (inst_20887 + 1);var tmp21047 = inst_20884;var tmp21048 = inst_20885;var tmp21049 = inst_20886;var inst_20884__$1 = tmp21047;var inst_20885__$1 = tmp21048;var inst_20886__$1 = tmp21049;var inst_20887__$1 = inst_20901;var state_21007__$1 = (function (){var statearr_21052 = state_21007;(statearr_21052[14] = inst_20884__$1);
(statearr_21052[15] = inst_20885__$1);
(statearr_21052[16] = inst_20886__$1);
(statearr_21052[27] = inst_20900);
(statearr_21052[17] = inst_20887__$1);
return statearr_21052;
})();var statearr_21053_21124 = state_21007__$1;(statearr_21053_21124[2] = null);
(statearr_21053_21124[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 16))
{var inst_20904 = (state_21007[25]);var inst_20906 = cljs.core.chunked_seq_QMARK_.call(null,inst_20904);var state_21007__$1 = state_21007;if(inst_20906)
{var statearr_21054_21125 = state_21007__$1;(statearr_21054_21125[1] = 19);
} else
{var statearr_21055_21126 = state_21007__$1;(statearr_21055_21126[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 17))
{var state_21007__$1 = state_21007;var statearr_21056_21127 = state_21007__$1;(statearr_21056_21127[2] = null);
(statearr_21056_21127[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 18))
{var inst_20928 = (state_21007[2]);var state_21007__$1 = state_21007;var statearr_21057_21128 = state_21007__$1;(statearr_21057_21128[2] = inst_20928);
(statearr_21057_21128[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 19))
{var inst_20904 = (state_21007[25]);var inst_20908 = cljs.core.chunk_first.call(null,inst_20904);var inst_20909 = cljs.core.chunk_rest.call(null,inst_20904);var inst_20910 = cljs.core.count.call(null,inst_20908);var inst_20884 = inst_20909;var inst_20885 = inst_20908;var inst_20886 = inst_20910;var inst_20887 = 0;var state_21007__$1 = (function (){var statearr_21058 = state_21007;(statearr_21058[14] = inst_20884);
(statearr_21058[15] = inst_20885);
(statearr_21058[16] = inst_20886);
(statearr_21058[17] = inst_20887);
return statearr_21058;
})();var statearr_21059_21129 = state_21007__$1;(statearr_21059_21129[2] = null);
(statearr_21059_21129[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 20))
{var inst_20904 = (state_21007[25]);var inst_20914 = cljs.core.first.call(null,inst_20904);var inst_20915 = cljs.core.nth.call(null,inst_20914,0,null);var inst_20916 = cljs.core.nth.call(null,inst_20914,1,null);var state_21007__$1 = (function (){var statearr_21060 = state_21007;(statearr_21060[28] = inst_20915);
return statearr_21060;
})();if(cljs.core.truth_(inst_20916))
{var statearr_21061_21130 = state_21007__$1;(statearr_21061_21130[1] = 22);
} else
{var statearr_21062_21131 = state_21007__$1;(statearr_21062_21131[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 21))
{var inst_20925 = (state_21007[2]);var state_21007__$1 = state_21007;var statearr_21063_21132 = state_21007__$1;(statearr_21063_21132[2] = inst_20925);
(statearr_21063_21132[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 22))
{var inst_20915 = (state_21007[28]);var inst_20918 = cljs.core.async.close_BANG_.call(null,inst_20915);var state_21007__$1 = state_21007;var statearr_21064_21133 = state_21007__$1;(statearr_21064_21133[2] = inst_20918);
(statearr_21064_21133[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 23))
{var state_21007__$1 = state_21007;var statearr_21065_21134 = state_21007__$1;(statearr_21065_21134[2] = null);
(statearr_21065_21134[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 24))
{var inst_20904 = (state_21007[25]);var inst_20921 = (state_21007[2]);var inst_20922 = cljs.core.next.call(null,inst_20904);var inst_20884 = inst_20922;var inst_20885 = null;var inst_20886 = 0;var inst_20887 = 0;var state_21007__$1 = (function (){var statearr_21066 = state_21007;(statearr_21066[14] = inst_20884);
(statearr_21066[15] = inst_20885);
(statearr_21066[16] = inst_20886);
(statearr_21066[29] = inst_20921);
(statearr_21066[17] = inst_20887);
return statearr_21066;
})();var statearr_21067_21135 = state_21007__$1;(statearr_21067_21135[2] = null);
(statearr_21067_21135[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 25))
{var inst_20945 = (state_21007[11]);var inst_20946 = (state_21007[13]);var inst_20948 = (inst_20946 < inst_20945);var inst_20949 = inst_20948;var state_21007__$1 = state_21007;if(cljs.core.truth_(inst_20949))
{var statearr_21068_21136 = state_21007__$1;(statearr_21068_21136[1] = 27);
} else
{var statearr_21069_21137 = state_21007__$1;(statearr_21069_21137[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 26))
{var inst_20935 = (state_21007[19]);var inst_20993 = (state_21007[2]);var inst_20994 = cljs.core.seq.call(null,inst_20935);var state_21007__$1 = (function (){var statearr_21070 = state_21007;(statearr_21070[30] = inst_20993);
return statearr_21070;
})();if(inst_20994)
{var statearr_21071_21138 = state_21007__$1;(statearr_21071_21138[1] = 42);
} else
{var statearr_21072_21139 = state_21007__$1;(statearr_21072_21139[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 27))
{var inst_20944 = (state_21007[12]);var inst_20946 = (state_21007[13]);var inst_20951 = cljs.core._nth.call(null,inst_20944,inst_20946);var state_21007__$1 = (function (){var statearr_21073 = state_21007;(statearr_21073[7] = inst_20951);
return statearr_21073;
})();var statearr_21074_21140 = state_21007__$1;(statearr_21074_21140[2] = null);
(statearr_21074_21140[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 28))
{var inst_20943 = (state_21007[10]);var inst_20964 = (state_21007[9]);var inst_20964__$1 = cljs.core.seq.call(null,inst_20943);var state_21007__$1 = (function (){var statearr_21078 = state_21007;(statearr_21078[9] = inst_20964__$1);
return statearr_21078;
})();if(inst_20964__$1)
{var statearr_21079_21141 = state_21007__$1;(statearr_21079_21141[1] = 33);
} else
{var statearr_21080_21142 = state_21007__$1;(statearr_21080_21142[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 29))
{var inst_20991 = (state_21007[2]);var state_21007__$1 = state_21007;var statearr_21081_21143 = state_21007__$1;(statearr_21081_21143[2] = inst_20991);
(statearr_21081_21143[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 30))
{var inst_20943 = (state_21007[10]);var inst_20945 = (state_21007[11]);var inst_20944 = (state_21007[12]);var inst_20946 = (state_21007[13]);var inst_20960 = (state_21007[2]);var inst_20961 = (inst_20946 + 1);var tmp21075 = inst_20943;var tmp21076 = inst_20945;var tmp21077 = inst_20944;var inst_20943__$1 = tmp21075;var inst_20944__$1 = tmp21077;var inst_20945__$1 = tmp21076;var inst_20946__$1 = inst_20961;var state_21007__$1 = (function (){var statearr_21082 = state_21007;(statearr_21082[31] = inst_20960);
(statearr_21082[10] = inst_20943__$1);
(statearr_21082[11] = inst_20945__$1);
(statearr_21082[12] = inst_20944__$1);
(statearr_21082[13] = inst_20946__$1);
return statearr_21082;
})();var statearr_21083_21144 = state_21007__$1;(statearr_21083_21144[2] = null);
(statearr_21083_21144[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21008 === 31))
{var inst_20951 = (state_21007[7]);var inst_20952 = (state_21007[2]);var inst_20953 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20954 = cljs.core.async.untap_STAR_.call(null,m,inst_20951);var state_21007__$1 = (function (){var statearr_21084 = state_21007;(statearr_21084[32] = inst_20952);
(statearr_21084[33] = inst_20953);
return statearr_21084;
})();var statearr_21085_21145 = state_21007__$1;(statearr_21085_21145[2] = inst_20954);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21007__$1);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_21089 = (new Array(34));(statearr_21089[0] = state_machine__13486__auto__);
(statearr_21089[1] = 1);
return statearr_21089;
});
var state_machine__13486__auto____1 = (function (state_21007){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_21007);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e21090){if((e21090 instanceof Object))
{var ex__13489__auto__ = e21090;var statearr_21091_21146 = state_21007;(statearr_21091_21146[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21007);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21090;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21147 = state_21007;
state_21007 = G__21147;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_21007){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_21007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_21092 = f__13613__auto__.call(null);(statearr_21092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___21093);
return statearr_21092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
cljs.core.async.Mix = (function (){var obj21149 = {};return obj21149;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7835__auto__ = m;if(and__7835__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7835__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8450__auto__ = (((m == null))?null:m);return (function (){var or__7847__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7835__auto__ = m;if(and__7835__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7835__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8450__auto__ = (((m == null))?null:m);return (function (){var or__7847__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7835__auto__ = m;if(and__7835__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7835__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8450__auto__ = (((m == null))?null:m);return (function (){var or__7847__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7835__auto__ = m;if(and__7835__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7835__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8450__auto__ = (((m == null))?null:m);return (function (){var or__7847__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7835__auto__ = m;if(and__7835__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7835__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8450__auto__ = (((m == null))?null:m);return (function (){var or__7847__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t21259 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21259 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta21260){
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
this.meta21260 = meta21260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21259.cljs$lang$type = true;
cljs.core.async.t21259.cljs$lang$ctorStr = "cljs.core.async/t21259";
cljs.core.async.t21259.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"cljs.core.async/t21259");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21259.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t21259.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21259.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21259.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21259.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21259.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21259.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21261){var self__ = this;
var _21261__$1 = this;return self__.meta21260;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21261,meta21260__$1){var self__ = this;
var _21261__$1 = this;return (new cljs.core.async.t21259(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta21260__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t21259 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21259(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21260){return (new cljs.core.async.t21259(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21260));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t21259(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13612__auto___21368 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_21326){var state_val_21327 = (state_21326[1]);if((state_val_21327 === 1))
{var inst_21265 = (state_21326[7]);var inst_21265__$1 = calc_state.call(null);var inst_21266 = cljs.core.seq_QMARK_.call(null,inst_21265__$1);var state_21326__$1 = (function (){var statearr_21328 = state_21326;(statearr_21328[7] = inst_21265__$1);
return statearr_21328;
})();if(inst_21266)
{var statearr_21329_21369 = state_21326__$1;(statearr_21329_21369[1] = 2);
} else
{var statearr_21330_21370 = state_21326__$1;(statearr_21330_21370[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 2))
{var inst_21265 = (state_21326[7]);var inst_21268 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21265);var state_21326__$1 = state_21326;var statearr_21331_21371 = state_21326__$1;(statearr_21331_21371[2] = inst_21268);
(statearr_21331_21371[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 3))
{var inst_21265 = (state_21326[7]);var state_21326__$1 = state_21326;var statearr_21332_21372 = state_21326__$1;(statearr_21332_21372[2] = inst_21265);
(statearr_21332_21372[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 4))
{var inst_21265 = (state_21326[7]);var inst_21271 = (state_21326[2]);var inst_21272 = cljs.core.get.call(null,inst_21271,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_21273 = cljs.core.get.call(null,inst_21271,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_21274 = cljs.core.get.call(null,inst_21271,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_21275 = inst_21265;var state_21326__$1 = (function (){var statearr_21333 = state_21326;(statearr_21333[8] = inst_21273);
(statearr_21333[9] = inst_21274);
(statearr_21333[10] = inst_21272);
(statearr_21333[11] = inst_21275);
return statearr_21333;
})();var statearr_21334_21373 = state_21326__$1;(statearr_21334_21373[2] = null);
(statearr_21334_21373[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 5))
{var inst_21275 = (state_21326[11]);var inst_21278 = cljs.core.seq_QMARK_.call(null,inst_21275);var state_21326__$1 = state_21326;if(inst_21278)
{var statearr_21335_21374 = state_21326__$1;(statearr_21335_21374[1] = 7);
} else
{var statearr_21336_21375 = state_21326__$1;(statearr_21336_21375[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 6))
{var inst_21324 = (state_21326[2]);var state_21326__$1 = state_21326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21326__$1,inst_21324);
} else
{if((state_val_21327 === 7))
{var inst_21275 = (state_21326[11]);var inst_21280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21275);var state_21326__$1 = state_21326;var statearr_21337_21376 = state_21326__$1;(statearr_21337_21376[2] = inst_21280);
(statearr_21337_21376[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 8))
{var inst_21275 = (state_21326[11]);var state_21326__$1 = state_21326;var statearr_21338_21377 = state_21326__$1;(statearr_21338_21377[2] = inst_21275);
(statearr_21338_21377[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 9))
{var inst_21283 = (state_21326[12]);var inst_21283__$1 = (state_21326[2]);var inst_21284 = cljs.core.get.call(null,inst_21283__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_21285 = cljs.core.get.call(null,inst_21283__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_21286 = cljs.core.get.call(null,inst_21283__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_21326__$1 = (function (){var statearr_21339 = state_21326;(statearr_21339[13] = inst_21286);
(statearr_21339[14] = inst_21285);
(statearr_21339[12] = inst_21283__$1);
return statearr_21339;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21326__$1,10,inst_21284);
} else
{if((state_val_21327 === 10))
{var inst_21290 = (state_21326[15]);var inst_21291 = (state_21326[16]);var inst_21289 = (state_21326[2]);var inst_21290__$1 = cljs.core.nth.call(null,inst_21289,0,null);var inst_21291__$1 = cljs.core.nth.call(null,inst_21289,1,null);var inst_21292 = (inst_21290__$1 == null);var inst_21293 = cljs.core._EQ_.call(null,inst_21291__$1,change);var inst_21294 = (inst_21292) || (inst_21293);var state_21326__$1 = (function (){var statearr_21340 = state_21326;(statearr_21340[15] = inst_21290__$1);
(statearr_21340[16] = inst_21291__$1);
return statearr_21340;
})();if(cljs.core.truth_(inst_21294))
{var statearr_21341_21378 = state_21326__$1;(statearr_21341_21378[1] = 11);
} else
{var statearr_21342_21379 = state_21326__$1;(statearr_21342_21379[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 11))
{var inst_21290 = (state_21326[15]);var inst_21296 = (inst_21290 == null);var state_21326__$1 = state_21326;if(cljs.core.truth_(inst_21296))
{var statearr_21343_21380 = state_21326__$1;(statearr_21343_21380[1] = 14);
} else
{var statearr_21344_21381 = state_21326__$1;(statearr_21344_21381[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 12))
{var inst_21305 = (state_21326[17]);var inst_21291 = (state_21326[16]);var inst_21286 = (state_21326[13]);var inst_21305__$1 = inst_21286.call(null,inst_21291);var state_21326__$1 = (function (){var statearr_21345 = state_21326;(statearr_21345[17] = inst_21305__$1);
return statearr_21345;
})();if(cljs.core.truth_(inst_21305__$1))
{var statearr_21346_21382 = state_21326__$1;(statearr_21346_21382[1] = 17);
} else
{var statearr_21347_21383 = state_21326__$1;(statearr_21347_21383[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 13))
{var inst_21322 = (state_21326[2]);var state_21326__$1 = state_21326;var statearr_21348_21384 = state_21326__$1;(statearr_21348_21384[2] = inst_21322);
(statearr_21348_21384[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 14))
{var inst_21291 = (state_21326[16]);var inst_21298 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21291);var state_21326__$1 = state_21326;var statearr_21349_21385 = state_21326__$1;(statearr_21349_21385[2] = inst_21298);
(statearr_21349_21385[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 15))
{var state_21326__$1 = state_21326;var statearr_21350_21386 = state_21326__$1;(statearr_21350_21386[2] = null);
(statearr_21350_21386[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 16))
{var inst_21301 = (state_21326[2]);var inst_21302 = calc_state.call(null);var inst_21275 = inst_21302;var state_21326__$1 = (function (){var statearr_21351 = state_21326;(statearr_21351[18] = inst_21301);
(statearr_21351[11] = inst_21275);
return statearr_21351;
})();var statearr_21352_21387 = state_21326__$1;(statearr_21352_21387[2] = null);
(statearr_21352_21387[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 17))
{var inst_21305 = (state_21326[17]);var state_21326__$1 = state_21326;var statearr_21353_21388 = state_21326__$1;(statearr_21353_21388[2] = inst_21305);
(statearr_21353_21388[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 18))
{var inst_21291 = (state_21326[16]);var inst_21286 = (state_21326[13]);var inst_21285 = (state_21326[14]);var inst_21308 = cljs.core.empty_QMARK_.call(null,inst_21286);var inst_21309 = inst_21285.call(null,inst_21291);var inst_21310 = cljs.core.not.call(null,inst_21309);var inst_21311 = (inst_21308) && (inst_21310);var state_21326__$1 = state_21326;var statearr_21354_21389 = state_21326__$1;(statearr_21354_21389[2] = inst_21311);
(statearr_21354_21389[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 19))
{var inst_21313 = (state_21326[2]);var state_21326__$1 = state_21326;if(cljs.core.truth_(inst_21313))
{var statearr_21355_21390 = state_21326__$1;(statearr_21355_21390[1] = 20);
} else
{var statearr_21356_21391 = state_21326__$1;(statearr_21356_21391[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 20))
{var inst_21290 = (state_21326[15]);var state_21326__$1 = state_21326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21326__$1,23,out,inst_21290);
} else
{if((state_val_21327 === 21))
{var state_21326__$1 = state_21326;var statearr_21357_21392 = state_21326__$1;(statearr_21357_21392[2] = null);
(statearr_21357_21392[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 22))
{var inst_21283 = (state_21326[12]);var inst_21319 = (state_21326[2]);var inst_21275 = inst_21283;var state_21326__$1 = (function (){var statearr_21358 = state_21326;(statearr_21358[19] = inst_21319);
(statearr_21358[11] = inst_21275);
return statearr_21358;
})();var statearr_21359_21393 = state_21326__$1;(statearr_21359_21393[2] = null);
(statearr_21359_21393[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21327 === 23))
{var inst_21316 = (state_21326[2]);var state_21326__$1 = state_21326;var statearr_21360_21394 = state_21326__$1;(statearr_21360_21394[2] = inst_21316);
(statearr_21360_21394[1] = 22);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_21364 = (new Array(20));(statearr_21364[0] = state_machine__13486__auto__);
(statearr_21364[1] = 1);
return statearr_21364;
});
var state_machine__13486__auto____1 = (function (state_21326){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_21326);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e21365){if((e21365 instanceof Object))
{var ex__13489__auto__ = e21365;var statearr_21366_21395 = state_21326;(statearr_21366_21395[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21396 = state_21326;
state_21326 = G__21396;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_21326){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_21326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_21367 = f__13613__auto__.call(null);(statearr_21367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___21368);
return statearr_21367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
cljs.core.async.Pub = (function (){var obj21398 = {};return obj21398;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7835__auto__ = p;if(and__7835__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7835__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8450__auto__ = (((p == null))?null:p);return (function (){var or__7847__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7835__auto__ = p;if(and__7835__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7835__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8450__auto__ = (((p == null))?null:p);return (function (){var or__7847__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7835__auto__ = p;if(and__7835__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7835__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8450__auto__ = (((p == null))?null:p);return (function (){var or__7847__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7835__auto__ = p;if(and__7835__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7835__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8450__auto__ = (((p == null))?null:p);return (function (){var or__7847__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
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
return (function (topic){var or__7847__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7847__auto__,mults){
return (function (p1__21399_SHARP_){if(cljs.core.truth_(p1__21399_SHARP_.call(null,topic)))
{return p1__21399_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__21399_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7847__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t21524 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21524 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21525){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21525 = meta21525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21524.cljs$lang$type = true;
cljs.core.async.t21524.cljs$lang$ctorStr = "cljs.core.async/t21524";
cljs.core.async.t21524.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"cljs.core.async/t21524");
});})(mults,ensure_mult))
;
cljs.core.async.t21524.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t21524.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t21524.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t21524.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t21524.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t21524.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t21524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21526){var self__ = this;
var _21526__$1 = this;return self__.meta21525;
});})(mults,ensure_mult))
;
cljs.core.async.t21524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21526,meta21525__$1){var self__ = this;
var _21526__$1 = this;return (new cljs.core.async.t21524(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21525__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t21524 = ((function (mults,ensure_mult){
return (function __GT_t21524(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21525){return (new cljs.core.async.t21524(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21525));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t21524(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13612__auto___21648 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_21600){var state_val_21601 = (state_21600[1]);if((state_val_21601 === 1))
{var state_21600__$1 = state_21600;var statearr_21602_21649 = state_21600__$1;(statearr_21602_21649[2] = null);
(statearr_21602_21649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 2))
{var state_21600__$1 = state_21600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21600__$1,4,ch);
} else
{if((state_val_21601 === 3))
{var inst_21598 = (state_21600[2]);var state_21600__$1 = state_21600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21600__$1,inst_21598);
} else
{if((state_val_21601 === 4))
{var inst_21529 = (state_21600[7]);var inst_21529__$1 = (state_21600[2]);var inst_21530 = (inst_21529__$1 == null);var state_21600__$1 = (function (){var statearr_21603 = state_21600;(statearr_21603[7] = inst_21529__$1);
return statearr_21603;
})();if(cljs.core.truth_(inst_21530))
{var statearr_21604_21650 = state_21600__$1;(statearr_21604_21650[1] = 5);
} else
{var statearr_21605_21651 = state_21600__$1;(statearr_21605_21651[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 5))
{var inst_21536 = cljs.core.deref.call(null,mults);var inst_21537 = cljs.core.vals.call(null,inst_21536);var inst_21538 = cljs.core.seq.call(null,inst_21537);var inst_21539 = inst_21538;var inst_21540 = null;var inst_21541 = 0;var inst_21542 = 0;var state_21600__$1 = (function (){var statearr_21606 = state_21600;(statearr_21606[8] = inst_21542);
(statearr_21606[9] = inst_21541);
(statearr_21606[10] = inst_21540);
(statearr_21606[11] = inst_21539);
return statearr_21606;
})();var statearr_21607_21652 = state_21600__$1;(statearr_21607_21652[2] = null);
(statearr_21607_21652[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 6))
{var inst_21577 = (state_21600[12]);var inst_21579 = (state_21600[13]);var inst_21529 = (state_21600[7]);var inst_21577__$1 = topic_fn.call(null,inst_21529);var inst_21578 = cljs.core.deref.call(null,mults);var inst_21579__$1 = cljs.core.get.call(null,inst_21578,inst_21577__$1);var state_21600__$1 = (function (){var statearr_21608 = state_21600;(statearr_21608[12] = inst_21577__$1);
(statearr_21608[13] = inst_21579__$1);
return statearr_21608;
})();if(cljs.core.truth_(inst_21579__$1))
{var statearr_21609_21653 = state_21600__$1;(statearr_21609_21653[1] = 19);
} else
{var statearr_21610_21654 = state_21600__$1;(statearr_21610_21654[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 7))
{var inst_21596 = (state_21600[2]);var state_21600__$1 = state_21600;var statearr_21611_21655 = state_21600__$1;(statearr_21611_21655[2] = inst_21596);
(statearr_21611_21655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 8))
{var inst_21542 = (state_21600[8]);var inst_21541 = (state_21600[9]);var inst_21544 = (inst_21542 < inst_21541);var inst_21545 = inst_21544;var state_21600__$1 = state_21600;if(cljs.core.truth_(inst_21545))
{var statearr_21615_21656 = state_21600__$1;(statearr_21615_21656[1] = 10);
} else
{var statearr_21616_21657 = state_21600__$1;(statearr_21616_21657[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 9))
{var inst_21575 = (state_21600[2]);var state_21600__$1 = state_21600;var statearr_21617_21658 = state_21600__$1;(statearr_21617_21658[2] = inst_21575);
(statearr_21617_21658[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 10))
{var inst_21542 = (state_21600[8]);var inst_21541 = (state_21600[9]);var inst_21540 = (state_21600[10]);var inst_21539 = (state_21600[11]);var inst_21547 = cljs.core._nth.call(null,inst_21540,inst_21542);var inst_21548 = cljs.core.async.muxch_STAR_.call(null,inst_21547);var inst_21549 = cljs.core.async.close_BANG_.call(null,inst_21548);var inst_21550 = (inst_21542 + 1);var tmp21612 = inst_21541;var tmp21613 = inst_21540;var tmp21614 = inst_21539;var inst_21539__$1 = tmp21614;var inst_21540__$1 = tmp21613;var inst_21541__$1 = tmp21612;var inst_21542__$1 = inst_21550;var state_21600__$1 = (function (){var statearr_21618 = state_21600;(statearr_21618[14] = inst_21549);
(statearr_21618[8] = inst_21542__$1);
(statearr_21618[9] = inst_21541__$1);
(statearr_21618[10] = inst_21540__$1);
(statearr_21618[11] = inst_21539__$1);
return statearr_21618;
})();var statearr_21619_21659 = state_21600__$1;(statearr_21619_21659[2] = null);
(statearr_21619_21659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 11))
{var inst_21539 = (state_21600[11]);var inst_21553 = (state_21600[15]);var inst_21553__$1 = cljs.core.seq.call(null,inst_21539);var state_21600__$1 = (function (){var statearr_21620 = state_21600;(statearr_21620[15] = inst_21553__$1);
return statearr_21620;
})();if(inst_21553__$1)
{var statearr_21621_21660 = state_21600__$1;(statearr_21621_21660[1] = 13);
} else
{var statearr_21622_21661 = state_21600__$1;(statearr_21622_21661[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 12))
{var inst_21573 = (state_21600[2]);var state_21600__$1 = state_21600;var statearr_21623_21662 = state_21600__$1;(statearr_21623_21662[2] = inst_21573);
(statearr_21623_21662[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 13))
{var inst_21553 = (state_21600[15]);var inst_21555 = cljs.core.chunked_seq_QMARK_.call(null,inst_21553);var state_21600__$1 = state_21600;if(inst_21555)
{var statearr_21624_21663 = state_21600__$1;(statearr_21624_21663[1] = 16);
} else
{var statearr_21625_21664 = state_21600__$1;(statearr_21625_21664[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 14))
{var state_21600__$1 = state_21600;var statearr_21626_21665 = state_21600__$1;(statearr_21626_21665[2] = null);
(statearr_21626_21665[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 15))
{var inst_21571 = (state_21600[2]);var state_21600__$1 = state_21600;var statearr_21627_21666 = state_21600__$1;(statearr_21627_21666[2] = inst_21571);
(statearr_21627_21666[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 16))
{var inst_21553 = (state_21600[15]);var inst_21557 = cljs.core.chunk_first.call(null,inst_21553);var inst_21558 = cljs.core.chunk_rest.call(null,inst_21553);var inst_21559 = cljs.core.count.call(null,inst_21557);var inst_21539 = inst_21558;var inst_21540 = inst_21557;var inst_21541 = inst_21559;var inst_21542 = 0;var state_21600__$1 = (function (){var statearr_21628 = state_21600;(statearr_21628[8] = inst_21542);
(statearr_21628[9] = inst_21541);
(statearr_21628[10] = inst_21540);
(statearr_21628[11] = inst_21539);
return statearr_21628;
})();var statearr_21629_21667 = state_21600__$1;(statearr_21629_21667[2] = null);
(statearr_21629_21667[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 17))
{var inst_21553 = (state_21600[15]);var inst_21562 = cljs.core.first.call(null,inst_21553);var inst_21563 = cljs.core.async.muxch_STAR_.call(null,inst_21562);var inst_21564 = cljs.core.async.close_BANG_.call(null,inst_21563);var inst_21565 = cljs.core.next.call(null,inst_21553);var inst_21539 = inst_21565;var inst_21540 = null;var inst_21541 = 0;var inst_21542 = 0;var state_21600__$1 = (function (){var statearr_21630 = state_21600;(statearr_21630[8] = inst_21542);
(statearr_21630[9] = inst_21541);
(statearr_21630[10] = inst_21540);
(statearr_21630[16] = inst_21564);
(statearr_21630[11] = inst_21539);
return statearr_21630;
})();var statearr_21631_21668 = state_21600__$1;(statearr_21631_21668[2] = null);
(statearr_21631_21668[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 18))
{var inst_21568 = (state_21600[2]);var state_21600__$1 = state_21600;var statearr_21632_21669 = state_21600__$1;(statearr_21632_21669[2] = inst_21568);
(statearr_21632_21669[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 19))
{var state_21600__$1 = state_21600;var statearr_21633_21670 = state_21600__$1;(statearr_21633_21670[2] = null);
(statearr_21633_21670[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 20))
{var state_21600__$1 = state_21600;var statearr_21634_21671 = state_21600__$1;(statearr_21634_21671[2] = null);
(statearr_21634_21671[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 21))
{var inst_21593 = (state_21600[2]);var state_21600__$1 = (function (){var statearr_21635 = state_21600;(statearr_21635[17] = inst_21593);
return statearr_21635;
})();var statearr_21636_21672 = state_21600__$1;(statearr_21636_21672[2] = null);
(statearr_21636_21672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 22))
{var inst_21590 = (state_21600[2]);var state_21600__$1 = state_21600;var statearr_21637_21673 = state_21600__$1;(statearr_21637_21673[2] = inst_21590);
(statearr_21637_21673[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 23))
{var inst_21577 = (state_21600[12]);var inst_21581 = (state_21600[2]);var inst_21582 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21577);var state_21600__$1 = (function (){var statearr_21638 = state_21600;(statearr_21638[18] = inst_21581);
return statearr_21638;
})();var statearr_21639_21674 = state_21600__$1;(statearr_21639_21674[2] = inst_21582);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21600__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21601 === 24))
{var inst_21579 = (state_21600[13]);var inst_21529 = (state_21600[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21600,23,Object,null,22);var inst_21586 = cljs.core.async.muxch_STAR_.call(null,inst_21579);var state_21600__$1 = state_21600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21600__$1,25,inst_21586,inst_21529);
} else
{if((state_val_21601 === 25))
{var inst_21588 = (state_21600[2]);var state_21600__$1 = state_21600;var statearr_21640_21675 = state_21600__$1;(statearr_21640_21675[2] = inst_21588);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21600__$1);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_21644 = (new Array(19));(statearr_21644[0] = state_machine__13486__auto__);
(statearr_21644[1] = 1);
return statearr_21644;
});
var state_machine__13486__auto____1 = (function (state_21600){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_21600);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e21645){if((e21645 instanceof Object))
{var ex__13489__auto__ = e21645;var statearr_21646_21676 = state_21600;(statearr_21646_21676[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21600);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21677 = state_21600;
state_21600 = G__21677;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_21600){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_21600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_21647 = f__13613__auto__.call(null);(statearr_21647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___21648);
return statearr_21647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
,cljs.core.range.call(null,cnt));var c__13612__auto___21814 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_21784){var state_val_21785 = (state_21784[1]);if((state_val_21785 === 1))
{var state_21784__$1 = state_21784;var statearr_21786_21815 = state_21784__$1;(statearr_21786_21815[2] = null);
(statearr_21786_21815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 2))
{var inst_21747 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21748 = 0;var state_21784__$1 = (function (){var statearr_21787 = state_21784;(statearr_21787[7] = inst_21748);
(statearr_21787[8] = inst_21747);
return statearr_21787;
})();var statearr_21788_21816 = state_21784__$1;(statearr_21788_21816[2] = null);
(statearr_21788_21816[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 3))
{var inst_21782 = (state_21784[2]);var state_21784__$1 = state_21784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21784__$1,inst_21782);
} else
{if((state_val_21785 === 4))
{var inst_21748 = (state_21784[7]);var inst_21750 = (inst_21748 < cnt);var state_21784__$1 = state_21784;if(cljs.core.truth_(inst_21750))
{var statearr_21789_21817 = state_21784__$1;(statearr_21789_21817[1] = 6);
} else
{var statearr_21790_21818 = state_21784__$1;(statearr_21790_21818[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 5))
{var inst_21768 = (state_21784[2]);var state_21784__$1 = (function (){var statearr_21791 = state_21784;(statearr_21791[9] = inst_21768);
return statearr_21791;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21784__$1,12,dchan);
} else
{if((state_val_21785 === 6))
{var state_21784__$1 = state_21784;var statearr_21792_21819 = state_21784__$1;(statearr_21792_21819[2] = null);
(statearr_21792_21819[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 7))
{var state_21784__$1 = state_21784;var statearr_21793_21820 = state_21784__$1;(statearr_21793_21820[2] = null);
(statearr_21793_21820[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 8))
{var inst_21766 = (state_21784[2]);var state_21784__$1 = state_21784;var statearr_21794_21821 = state_21784__$1;(statearr_21794_21821[2] = inst_21766);
(statearr_21794_21821[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 9))
{var inst_21748 = (state_21784[7]);var inst_21761 = (state_21784[2]);var inst_21762 = (inst_21748 + 1);var inst_21748__$1 = inst_21762;var state_21784__$1 = (function (){var statearr_21795 = state_21784;(statearr_21795[7] = inst_21748__$1);
(statearr_21795[10] = inst_21761);
return statearr_21795;
})();var statearr_21796_21822 = state_21784__$1;(statearr_21796_21822[2] = null);
(statearr_21796_21822[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 10))
{var inst_21752 = (state_21784[2]);var inst_21753 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21784__$1 = (function (){var statearr_21797 = state_21784;(statearr_21797[11] = inst_21752);
return statearr_21797;
})();var statearr_21798_21823 = state_21784__$1;(statearr_21798_21823[2] = inst_21753);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21784__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 11))
{var inst_21748 = (state_21784[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21784,10,Object,null,9);var inst_21757 = chs__$1.call(null,inst_21748);var inst_21758 = done.call(null,inst_21748);var inst_21759 = cljs.core.async.take_BANG_.call(null,inst_21757,inst_21758);var state_21784__$1 = state_21784;var statearr_21799_21824 = state_21784__$1;(statearr_21799_21824[2] = inst_21759);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21784__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 12))
{var inst_21770 = (state_21784[12]);var inst_21770__$1 = (state_21784[2]);var inst_21771 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21770__$1);var state_21784__$1 = (function (){var statearr_21800 = state_21784;(statearr_21800[12] = inst_21770__$1);
return statearr_21800;
})();if(cljs.core.truth_(inst_21771))
{var statearr_21801_21825 = state_21784__$1;(statearr_21801_21825[1] = 13);
} else
{var statearr_21802_21826 = state_21784__$1;(statearr_21802_21826[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 13))
{var inst_21773 = cljs.core.async.close_BANG_.call(null,out);var state_21784__$1 = state_21784;var statearr_21803_21827 = state_21784__$1;(statearr_21803_21827[2] = inst_21773);
(statearr_21803_21827[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 14))
{var inst_21770 = (state_21784[12]);var inst_21775 = cljs.core.apply.call(null,f,inst_21770);var state_21784__$1 = state_21784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21784__$1,16,out,inst_21775);
} else
{if((state_val_21785 === 15))
{var inst_21780 = (state_21784[2]);var state_21784__$1 = state_21784;var statearr_21804_21828 = state_21784__$1;(statearr_21804_21828[2] = inst_21780);
(statearr_21804_21828[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21785 === 16))
{var inst_21777 = (state_21784[2]);var state_21784__$1 = (function (){var statearr_21805 = state_21784;(statearr_21805[13] = inst_21777);
return statearr_21805;
})();var statearr_21806_21829 = state_21784__$1;(statearr_21806_21829[2] = null);
(statearr_21806_21829[1] = 2);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_21810 = (new Array(14));(statearr_21810[0] = state_machine__13486__auto__);
(statearr_21810[1] = 1);
return statearr_21810;
});
var state_machine__13486__auto____1 = (function (state_21784){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_21784);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e21811){if((e21811 instanceof Object))
{var ex__13489__auto__ = e21811;var statearr_21812_21830 = state_21784;(statearr_21812_21830[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21784);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21831 = state_21784;
state_21784 = G__21831;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_21784){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_21784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_21813 = f__13613__auto__.call(null);(statearr_21813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___21814);
return statearr_21813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13612__auto___21939 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_21915){var state_val_21916 = (state_21915[1]);if((state_val_21916 === 1))
{var inst_21886 = cljs.core.vec.call(null,chs);var inst_21887 = inst_21886;var state_21915__$1 = (function (){var statearr_21917 = state_21915;(statearr_21917[7] = inst_21887);
return statearr_21917;
})();var statearr_21918_21940 = state_21915__$1;(statearr_21918_21940[2] = null);
(statearr_21918_21940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21916 === 2))
{var inst_21887 = (state_21915[7]);var inst_21889 = cljs.core.count.call(null,inst_21887);var inst_21890 = (inst_21889 > 0);var state_21915__$1 = state_21915;if(cljs.core.truth_(inst_21890))
{var statearr_21919_21941 = state_21915__$1;(statearr_21919_21941[1] = 4);
} else
{var statearr_21920_21942 = state_21915__$1;(statearr_21920_21942[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21916 === 3))
{var inst_21913 = (state_21915[2]);var state_21915__$1 = state_21915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21915__$1,inst_21913);
} else
{if((state_val_21916 === 4))
{var inst_21887 = (state_21915[7]);var state_21915__$1 = state_21915;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21915__$1,7,inst_21887);
} else
{if((state_val_21916 === 5))
{var inst_21909 = cljs.core.async.close_BANG_.call(null,out);var state_21915__$1 = state_21915;var statearr_21921_21943 = state_21915__$1;(statearr_21921_21943[2] = inst_21909);
(statearr_21921_21943[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21916 === 6))
{var inst_21911 = (state_21915[2]);var state_21915__$1 = state_21915;var statearr_21922_21944 = state_21915__$1;(statearr_21922_21944[2] = inst_21911);
(statearr_21922_21944[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21916 === 7))
{var inst_21895 = (state_21915[8]);var inst_21894 = (state_21915[9]);var inst_21894__$1 = (state_21915[2]);var inst_21895__$1 = cljs.core.nth.call(null,inst_21894__$1,0,null);var inst_21896 = cljs.core.nth.call(null,inst_21894__$1,1,null);var inst_21897 = (inst_21895__$1 == null);var state_21915__$1 = (function (){var statearr_21923 = state_21915;(statearr_21923[8] = inst_21895__$1);
(statearr_21923[10] = inst_21896);
(statearr_21923[9] = inst_21894__$1);
return statearr_21923;
})();if(cljs.core.truth_(inst_21897))
{var statearr_21924_21945 = state_21915__$1;(statearr_21924_21945[1] = 8);
} else
{var statearr_21925_21946 = state_21915__$1;(statearr_21925_21946[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21916 === 8))
{var inst_21895 = (state_21915[8]);var inst_21896 = (state_21915[10]);var inst_21894 = (state_21915[9]);var inst_21887 = (state_21915[7]);var inst_21899 = (function (){var c = inst_21896;var v = inst_21895;var vec__21892 = inst_21894;var cs = inst_21887;return ((function (c,v,vec__21892,cs,inst_21895,inst_21896,inst_21894,inst_21887,state_val_21916){
return (function (p1__21832_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21832_SHARP_);
});
;})(c,v,vec__21892,cs,inst_21895,inst_21896,inst_21894,inst_21887,state_val_21916))
})();var inst_21900 = cljs.core.filterv.call(null,inst_21899,inst_21887);var inst_21887__$1 = inst_21900;var state_21915__$1 = (function (){var statearr_21926 = state_21915;(statearr_21926[7] = inst_21887__$1);
return statearr_21926;
})();var statearr_21927_21947 = state_21915__$1;(statearr_21927_21947[2] = null);
(statearr_21927_21947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21916 === 9))
{var inst_21895 = (state_21915[8]);var state_21915__$1 = state_21915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21915__$1,11,out,inst_21895);
} else
{if((state_val_21916 === 10))
{var inst_21907 = (state_21915[2]);var state_21915__$1 = state_21915;var statearr_21929_21948 = state_21915__$1;(statearr_21929_21948[2] = inst_21907);
(statearr_21929_21948[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21916 === 11))
{var inst_21887 = (state_21915[7]);var inst_21904 = (state_21915[2]);var tmp21928 = inst_21887;var inst_21887__$1 = tmp21928;var state_21915__$1 = (function (){var statearr_21930 = state_21915;(statearr_21930[11] = inst_21904);
(statearr_21930[7] = inst_21887__$1);
return statearr_21930;
})();var statearr_21931_21949 = state_21915__$1;(statearr_21931_21949[2] = null);
(statearr_21931_21949[1] = 2);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_21935 = (new Array(12));(statearr_21935[0] = state_machine__13486__auto__);
(statearr_21935[1] = 1);
return statearr_21935;
});
var state_machine__13486__auto____1 = (function (state_21915){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_21915);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e21936){if((e21936 instanceof Object))
{var ex__13489__auto__ = e21936;var statearr_21937_21950 = state_21915;(statearr_21937_21950[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21915);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21936;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21951 = state_21915;
state_21915 = G__21951;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_21915){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_21915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_21938 = f__13613__auto__.call(null);(statearr_21938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___21939);
return statearr_21938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13612__auto___22044 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_22021){var state_val_22022 = (state_22021[1]);if((state_val_22022 === 1))
{var inst_21998 = 0;var state_22021__$1 = (function (){var statearr_22023 = state_22021;(statearr_22023[7] = inst_21998);
return statearr_22023;
})();var statearr_22024_22045 = state_22021__$1;(statearr_22024_22045[2] = null);
(statearr_22024_22045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22022 === 2))
{var inst_21998 = (state_22021[7]);var inst_22000 = (inst_21998 < n);var state_22021__$1 = state_22021;if(cljs.core.truth_(inst_22000))
{var statearr_22025_22046 = state_22021__$1;(statearr_22025_22046[1] = 4);
} else
{var statearr_22026_22047 = state_22021__$1;(statearr_22026_22047[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22022 === 3))
{var inst_22018 = (state_22021[2]);var inst_22019 = cljs.core.async.close_BANG_.call(null,out);var state_22021__$1 = (function (){var statearr_22027 = state_22021;(statearr_22027[8] = inst_22018);
return statearr_22027;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22021__$1,inst_22019);
} else
{if((state_val_22022 === 4))
{var state_22021__$1 = state_22021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22021__$1,7,ch);
} else
{if((state_val_22022 === 5))
{var state_22021__$1 = state_22021;var statearr_22028_22048 = state_22021__$1;(statearr_22028_22048[2] = null);
(statearr_22028_22048[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22022 === 6))
{var inst_22016 = (state_22021[2]);var state_22021__$1 = state_22021;var statearr_22029_22049 = state_22021__$1;(statearr_22029_22049[2] = inst_22016);
(statearr_22029_22049[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22022 === 7))
{var inst_22003 = (state_22021[9]);var inst_22003__$1 = (state_22021[2]);var inst_22004 = (inst_22003__$1 == null);var inst_22005 = cljs.core.not.call(null,inst_22004);var state_22021__$1 = (function (){var statearr_22030 = state_22021;(statearr_22030[9] = inst_22003__$1);
return statearr_22030;
})();if(inst_22005)
{var statearr_22031_22050 = state_22021__$1;(statearr_22031_22050[1] = 8);
} else
{var statearr_22032_22051 = state_22021__$1;(statearr_22032_22051[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22022 === 8))
{var inst_22003 = (state_22021[9]);var state_22021__$1 = state_22021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22021__$1,11,out,inst_22003);
} else
{if((state_val_22022 === 9))
{var state_22021__$1 = state_22021;var statearr_22033_22052 = state_22021__$1;(statearr_22033_22052[2] = null);
(statearr_22033_22052[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22022 === 10))
{var inst_22013 = (state_22021[2]);var state_22021__$1 = state_22021;var statearr_22034_22053 = state_22021__$1;(statearr_22034_22053[2] = inst_22013);
(statearr_22034_22053[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22022 === 11))
{var inst_21998 = (state_22021[7]);var inst_22008 = (state_22021[2]);var inst_22009 = (inst_21998 + 1);var inst_21998__$1 = inst_22009;var state_22021__$1 = (function (){var statearr_22035 = state_22021;(statearr_22035[7] = inst_21998__$1);
(statearr_22035[10] = inst_22008);
return statearr_22035;
})();var statearr_22036_22054 = state_22021__$1;(statearr_22036_22054[2] = null);
(statearr_22036_22054[1] = 2);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_22040 = (new Array(11));(statearr_22040[0] = state_machine__13486__auto__);
(statearr_22040[1] = 1);
return statearr_22040;
});
var state_machine__13486__auto____1 = (function (state_22021){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_22021);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e22041){if((e22041 instanceof Object))
{var ex__13489__auto__ = e22041;var statearr_22042_22055 = state_22021;(statearr_22042_22055[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22021);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22056 = state_22021;
state_22021 = G__22056;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_22021){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_22021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_22043 = f__13613__auto__.call(null);(statearr_22043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___22044);
return statearr_22043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13612__auto___22153 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_22128){var state_val_22129 = (state_22128[1]);if((state_val_22129 === 1))
{var inst_22105 = null;var state_22128__$1 = (function (){var statearr_22130 = state_22128;(statearr_22130[7] = inst_22105);
return statearr_22130;
})();var statearr_22131_22154 = state_22128__$1;(statearr_22131_22154[2] = null);
(statearr_22131_22154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22129 === 2))
{var state_22128__$1 = state_22128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22128__$1,4,ch);
} else
{if((state_val_22129 === 3))
{var inst_22125 = (state_22128[2]);var inst_22126 = cljs.core.async.close_BANG_.call(null,out);var state_22128__$1 = (function (){var statearr_22132 = state_22128;(statearr_22132[8] = inst_22125);
return statearr_22132;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22128__$1,inst_22126);
} else
{if((state_val_22129 === 4))
{var inst_22108 = (state_22128[9]);var inst_22108__$1 = (state_22128[2]);var inst_22109 = (inst_22108__$1 == null);var inst_22110 = cljs.core.not.call(null,inst_22109);var state_22128__$1 = (function (){var statearr_22133 = state_22128;(statearr_22133[9] = inst_22108__$1);
return statearr_22133;
})();if(inst_22110)
{var statearr_22134_22155 = state_22128__$1;(statearr_22134_22155[1] = 5);
} else
{var statearr_22135_22156 = state_22128__$1;(statearr_22135_22156[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22129 === 5))
{var inst_22105 = (state_22128[7]);var inst_22108 = (state_22128[9]);var inst_22112 = cljs.core._EQ_.call(null,inst_22108,inst_22105);var state_22128__$1 = state_22128;if(inst_22112)
{var statearr_22136_22157 = state_22128__$1;(statearr_22136_22157[1] = 8);
} else
{var statearr_22137_22158 = state_22128__$1;(statearr_22137_22158[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22129 === 6))
{var state_22128__$1 = state_22128;var statearr_22139_22159 = state_22128__$1;(statearr_22139_22159[2] = null);
(statearr_22139_22159[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22129 === 7))
{var inst_22123 = (state_22128[2]);var state_22128__$1 = state_22128;var statearr_22140_22160 = state_22128__$1;(statearr_22140_22160[2] = inst_22123);
(statearr_22140_22160[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22129 === 8))
{var inst_22105 = (state_22128[7]);var tmp22138 = inst_22105;var inst_22105__$1 = tmp22138;var state_22128__$1 = (function (){var statearr_22141 = state_22128;(statearr_22141[7] = inst_22105__$1);
return statearr_22141;
})();var statearr_22142_22161 = state_22128__$1;(statearr_22142_22161[2] = null);
(statearr_22142_22161[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22129 === 9))
{var inst_22108 = (state_22128[9]);var state_22128__$1 = state_22128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22128__$1,11,out,inst_22108);
} else
{if((state_val_22129 === 10))
{var inst_22120 = (state_22128[2]);var state_22128__$1 = state_22128;var statearr_22143_22162 = state_22128__$1;(statearr_22143_22162[2] = inst_22120);
(statearr_22143_22162[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22129 === 11))
{var inst_22108 = (state_22128[9]);var inst_22117 = (state_22128[2]);var inst_22105 = inst_22108;var state_22128__$1 = (function (){var statearr_22144 = state_22128;(statearr_22144[7] = inst_22105);
(statearr_22144[10] = inst_22117);
return statearr_22144;
})();var statearr_22145_22163 = state_22128__$1;(statearr_22145_22163[2] = null);
(statearr_22145_22163[1] = 2);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_22149 = (new Array(11));(statearr_22149[0] = state_machine__13486__auto__);
(statearr_22149[1] = 1);
return statearr_22149;
});
var state_machine__13486__auto____1 = (function (state_22128){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_22128);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e22150){if((e22150 instanceof Object))
{var ex__13489__auto__ = e22150;var statearr_22151_22164 = state_22128;(statearr_22151_22164[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22128);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22150;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22165 = state_22128;
state_22128 = G__22165;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_22128){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_22128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_22152 = f__13613__auto__.call(null);(statearr_22152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___22153);
return statearr_22152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13612__auto___22300 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_22270){var state_val_22271 = (state_22270[1]);if((state_val_22271 === 1))
{var inst_22233 = (new Array(n));var inst_22234 = inst_22233;var inst_22235 = 0;var state_22270__$1 = (function (){var statearr_22272 = state_22270;(statearr_22272[7] = inst_22235);
(statearr_22272[8] = inst_22234);
return statearr_22272;
})();var statearr_22273_22301 = state_22270__$1;(statearr_22273_22301[2] = null);
(statearr_22273_22301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22271 === 2))
{var state_22270__$1 = state_22270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22270__$1,4,ch);
} else
{if((state_val_22271 === 3))
{var inst_22268 = (state_22270[2]);var state_22270__$1 = state_22270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22270__$1,inst_22268);
} else
{if((state_val_22271 === 4))
{var inst_22238 = (state_22270[9]);var inst_22238__$1 = (state_22270[2]);var inst_22239 = (inst_22238__$1 == null);var inst_22240 = cljs.core.not.call(null,inst_22239);var state_22270__$1 = (function (){var statearr_22274 = state_22270;(statearr_22274[9] = inst_22238__$1);
return statearr_22274;
})();if(inst_22240)
{var statearr_22275_22302 = state_22270__$1;(statearr_22275_22302[1] = 5);
} else
{var statearr_22276_22303 = state_22270__$1;(statearr_22276_22303[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22271 === 5))
{var inst_22235 = (state_22270[7]);var inst_22234 = (state_22270[8]);var inst_22238 = (state_22270[9]);var inst_22243 = (state_22270[10]);var inst_22242 = (inst_22234[inst_22235] = inst_22238);var inst_22243__$1 = (inst_22235 + 1);var inst_22244 = (inst_22243__$1 < n);var state_22270__$1 = (function (){var statearr_22277 = state_22270;(statearr_22277[11] = inst_22242);
(statearr_22277[10] = inst_22243__$1);
return statearr_22277;
})();if(cljs.core.truth_(inst_22244))
{var statearr_22278_22304 = state_22270__$1;(statearr_22278_22304[1] = 8);
} else
{var statearr_22279_22305 = state_22270__$1;(statearr_22279_22305[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22271 === 6))
{var inst_22235 = (state_22270[7]);var inst_22256 = (inst_22235 > 0);var state_22270__$1 = state_22270;if(cljs.core.truth_(inst_22256))
{var statearr_22281_22306 = state_22270__$1;(statearr_22281_22306[1] = 12);
} else
{var statearr_22282_22307 = state_22270__$1;(statearr_22282_22307[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22271 === 7))
{var inst_22266 = (state_22270[2]);var state_22270__$1 = state_22270;var statearr_22283_22308 = state_22270__$1;(statearr_22283_22308[2] = inst_22266);
(statearr_22283_22308[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22271 === 8))
{var inst_22234 = (state_22270[8]);var inst_22243 = (state_22270[10]);var tmp22280 = inst_22234;var inst_22234__$1 = tmp22280;var inst_22235 = inst_22243;var state_22270__$1 = (function (){var statearr_22284 = state_22270;(statearr_22284[7] = inst_22235);
(statearr_22284[8] = inst_22234__$1);
return statearr_22284;
})();var statearr_22285_22309 = state_22270__$1;(statearr_22285_22309[2] = null);
(statearr_22285_22309[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22271 === 9))
{var inst_22234 = (state_22270[8]);var inst_22248 = cljs.core.vec.call(null,inst_22234);var state_22270__$1 = state_22270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22270__$1,11,out,inst_22248);
} else
{if((state_val_22271 === 10))
{var inst_22254 = (state_22270[2]);var state_22270__$1 = state_22270;var statearr_22286_22310 = state_22270__$1;(statearr_22286_22310[2] = inst_22254);
(statearr_22286_22310[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22271 === 11))
{var inst_22250 = (state_22270[2]);var inst_22251 = (new Array(n));var inst_22234 = inst_22251;var inst_22235 = 0;var state_22270__$1 = (function (){var statearr_22287 = state_22270;(statearr_22287[7] = inst_22235);
(statearr_22287[8] = inst_22234);
(statearr_22287[12] = inst_22250);
return statearr_22287;
})();var statearr_22288_22311 = state_22270__$1;(statearr_22288_22311[2] = null);
(statearr_22288_22311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22271 === 12))
{var inst_22234 = (state_22270[8]);var inst_22258 = cljs.core.vec.call(null,inst_22234);var state_22270__$1 = state_22270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22270__$1,15,out,inst_22258);
} else
{if((state_val_22271 === 13))
{var state_22270__$1 = state_22270;var statearr_22289_22312 = state_22270__$1;(statearr_22289_22312[2] = null);
(statearr_22289_22312[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22271 === 14))
{var inst_22263 = (state_22270[2]);var inst_22264 = cljs.core.async.close_BANG_.call(null,out);var state_22270__$1 = (function (){var statearr_22290 = state_22270;(statearr_22290[13] = inst_22263);
return statearr_22290;
})();var statearr_22291_22313 = state_22270__$1;(statearr_22291_22313[2] = inst_22264);
(statearr_22291_22313[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22271 === 15))
{var inst_22260 = (state_22270[2]);var state_22270__$1 = state_22270;var statearr_22292_22314 = state_22270__$1;(statearr_22292_22314[2] = inst_22260);
(statearr_22292_22314[1] = 14);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_22296 = (new Array(14));(statearr_22296[0] = state_machine__13486__auto__);
(statearr_22296[1] = 1);
return statearr_22296;
});
var state_machine__13486__auto____1 = (function (state_22270){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_22270);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e22297){if((e22297 instanceof Object))
{var ex__13489__auto__ = e22297;var statearr_22298_22315 = state_22270;(statearr_22298_22315[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22316 = state_22270;
state_22270 = G__22316;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_22270){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_22270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_22299 = f__13613__auto__.call(null);(statearr_22299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___22300);
return statearr_22299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13612__auto___22459 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_22429){var state_val_22430 = (state_22429[1]);if((state_val_22430 === 1))
{var inst_22388 = (new Array(0));var inst_22389 = inst_22388;var inst_22390 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_22429__$1 = (function (){var statearr_22431 = state_22429;(statearr_22431[7] = inst_22389);
(statearr_22431[8] = inst_22390);
return statearr_22431;
})();var statearr_22432_22460 = state_22429__$1;(statearr_22432_22460[2] = null);
(statearr_22432_22460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22430 === 2))
{var state_22429__$1 = state_22429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22429__$1,4,ch);
} else
{if((state_val_22430 === 3))
{var inst_22427 = (state_22429[2]);var state_22429__$1 = state_22429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22429__$1,inst_22427);
} else
{if((state_val_22430 === 4))
{var inst_22393 = (state_22429[9]);var inst_22393__$1 = (state_22429[2]);var inst_22394 = (inst_22393__$1 == null);var inst_22395 = cljs.core.not.call(null,inst_22394);var state_22429__$1 = (function (){var statearr_22433 = state_22429;(statearr_22433[9] = inst_22393__$1);
return statearr_22433;
})();if(inst_22395)
{var statearr_22434_22461 = state_22429__$1;(statearr_22434_22461[1] = 5);
} else
{var statearr_22435_22462 = state_22429__$1;(statearr_22435_22462[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22430 === 5))
{var inst_22397 = (state_22429[10]);var inst_22393 = (state_22429[9]);var inst_22390 = (state_22429[8]);var inst_22397__$1 = f.call(null,inst_22393);var inst_22398 = cljs.core._EQ_.call(null,inst_22397__$1,inst_22390);var inst_22399 = cljs.core.keyword_identical_QMARK_.call(null,inst_22390,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_22400 = (inst_22398) || (inst_22399);var state_22429__$1 = (function (){var statearr_22436 = state_22429;(statearr_22436[10] = inst_22397__$1);
return statearr_22436;
})();if(cljs.core.truth_(inst_22400))
{var statearr_22437_22463 = state_22429__$1;(statearr_22437_22463[1] = 8);
} else
{var statearr_22438_22464 = state_22429__$1;(statearr_22438_22464[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22430 === 6))
{var inst_22389 = (state_22429[7]);var inst_22414 = inst_22389.length;var inst_22415 = (inst_22414 > 0);var state_22429__$1 = state_22429;if(cljs.core.truth_(inst_22415))
{var statearr_22440_22465 = state_22429__$1;(statearr_22440_22465[1] = 12);
} else
{var statearr_22441_22466 = state_22429__$1;(statearr_22441_22466[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22430 === 7))
{var inst_22425 = (state_22429[2]);var state_22429__$1 = state_22429;var statearr_22442_22467 = state_22429__$1;(statearr_22442_22467[2] = inst_22425);
(statearr_22442_22467[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22430 === 8))
{var inst_22397 = (state_22429[10]);var inst_22393 = (state_22429[9]);var inst_22389 = (state_22429[7]);var inst_22402 = inst_22389.push(inst_22393);var tmp22439 = inst_22389;var inst_22389__$1 = tmp22439;var inst_22390 = inst_22397;var state_22429__$1 = (function (){var statearr_22443 = state_22429;(statearr_22443[7] = inst_22389__$1);
(statearr_22443[8] = inst_22390);
(statearr_22443[11] = inst_22402);
return statearr_22443;
})();var statearr_22444_22468 = state_22429__$1;(statearr_22444_22468[2] = null);
(statearr_22444_22468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22430 === 9))
{var inst_22389 = (state_22429[7]);var inst_22405 = cljs.core.vec.call(null,inst_22389);var state_22429__$1 = state_22429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22429__$1,11,out,inst_22405);
} else
{if((state_val_22430 === 10))
{var inst_22412 = (state_22429[2]);var state_22429__$1 = state_22429;var statearr_22445_22469 = state_22429__$1;(statearr_22445_22469[2] = inst_22412);
(statearr_22445_22469[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22430 === 11))
{var inst_22397 = (state_22429[10]);var inst_22393 = (state_22429[9]);var inst_22407 = (state_22429[2]);var inst_22408 = (new Array(0));var inst_22409 = inst_22408.push(inst_22393);var inst_22389 = inst_22408;var inst_22390 = inst_22397;var state_22429__$1 = (function (){var statearr_22446 = state_22429;(statearr_22446[12] = inst_22407);
(statearr_22446[7] = inst_22389);
(statearr_22446[8] = inst_22390);
(statearr_22446[13] = inst_22409);
return statearr_22446;
})();var statearr_22447_22470 = state_22429__$1;(statearr_22447_22470[2] = null);
(statearr_22447_22470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22430 === 12))
{var inst_22389 = (state_22429[7]);var inst_22417 = cljs.core.vec.call(null,inst_22389);var state_22429__$1 = state_22429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22429__$1,15,out,inst_22417);
} else
{if((state_val_22430 === 13))
{var state_22429__$1 = state_22429;var statearr_22448_22471 = state_22429__$1;(statearr_22448_22471[2] = null);
(statearr_22448_22471[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22430 === 14))
{var inst_22422 = (state_22429[2]);var inst_22423 = cljs.core.async.close_BANG_.call(null,out);var state_22429__$1 = (function (){var statearr_22449 = state_22429;(statearr_22449[14] = inst_22422);
return statearr_22449;
})();var statearr_22450_22472 = state_22429__$1;(statearr_22450_22472[2] = inst_22423);
(statearr_22450_22472[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22430 === 15))
{var inst_22419 = (state_22429[2]);var state_22429__$1 = state_22429;var statearr_22451_22473 = state_22429__$1;(statearr_22451_22473[2] = inst_22419);
(statearr_22451_22473[1] = 14);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_22455 = (new Array(15));(statearr_22455[0] = state_machine__13486__auto__);
(statearr_22455[1] = 1);
return statearr_22455;
});
var state_machine__13486__auto____1 = (function (state_22429){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_22429);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e22456){if((e22456 instanceof Object))
{var ex__13489__auto__ = e22456;var statearr_22457_22474 = state_22429;(statearr_22457_22474[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22429);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22475 = state_22429;
state_22429 = G__22475;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_22429){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_22429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_22458 = f__13613__auto__.call(null);(statearr_22458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___22459);
return statearr_22458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
