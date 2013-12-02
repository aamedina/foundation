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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15944 = (function (f,fn_handler,meta15945){
this.f = f;
this.fn_handler = fn_handler;
this.meta15945 = meta15945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15944.cljs$lang$type = true;
cljs.core.async.t15944.cljs$lang$ctorStr = "cljs.core.async/t15944";
cljs.core.async.t15944.cljs$lang$ctorPrWriter = (function (this__8265__auto__,writer__8266__auto__,opt__8267__auto__){return cljs.core._write.call(null,writer__8266__auto__,"cljs.core.async/t15944");
});
cljs.core.async.t15944.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15946){var self__ = this;
var _15946__$1 = this;return self__.meta15945;
});
cljs.core.async.t15944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15946,meta15945__$1){var self__ = this;
var _15946__$1 = this;return (new cljs.core.async.t15944(self__.f,self__.fn_handler,meta15945__$1));
});
cljs.core.async.__GT_t15944 = (function __GT_t15944(f__$1,fn_handler__$1,meta15945){return (new cljs.core.async.t15944(f__$1,fn_handler__$1,meta15945));
});
}
return (new cljs.core.async.t15944(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15948 = buff;if(G__15948)
{var bit__8347__auto__ = null;if(cljs.core.truth_((function (){var or__7721__auto__ = bit__8347__auto__;if(cljs.core.truth_(or__7721__auto__))
{return or__7721__auto__;
} else
{return G__15948.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15948.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15948);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15948);
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
{var val_15949 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15949);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_15949);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7709__auto__ = ret;if(cljs.core.truth_(and__7709__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7709__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8544__auto___15950 = n;var x_15951 = 0;while(true){
if((x_15951 < n__8544__auto___15950))
{(a[x_15951] = 0);
{
var G__15952 = (x_15951 + 1);
x_15951 = G__15952;
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
var G__15953 = (i + 1);
i = G__15953;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15957 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15957 = (function (flag,alt_flag,meta15958){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15958 = meta15958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15957.cljs$lang$type = true;
cljs.core.async.t15957.cljs$lang$ctorStr = "cljs.core.async/t15957";
cljs.core.async.t15957.cljs$lang$ctorPrWriter = (function (this__8265__auto__,writer__8266__auto__,opt__8267__auto__){return cljs.core._write.call(null,writer__8266__auto__,"cljs.core.async/t15957");
});
cljs.core.async.t15957.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t15957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t15957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15959){var self__ = this;
var _15959__$1 = this;return self__.meta15958;
});
cljs.core.async.t15957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15959,meta15958__$1){var self__ = this;
var _15959__$1 = this;return (new cljs.core.async.t15957(self__.flag,self__.alt_flag,meta15958__$1));
});
cljs.core.async.__GT_t15957 = (function __GT_t15957(flag__$1,alt_flag__$1,meta15958){return (new cljs.core.async.t15957(flag__$1,alt_flag__$1,meta15958));
});
}
return (new cljs.core.async.t15957(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15963 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15963 = (function (cb,flag,alt_handler,meta15964){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15964 = meta15964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15963.cljs$lang$type = true;
cljs.core.async.t15963.cljs$lang$ctorStr = "cljs.core.async/t15963";
cljs.core.async.t15963.cljs$lang$ctorPrWriter = (function (this__8265__auto__,writer__8266__auto__,opt__8267__auto__){return cljs.core._write.call(null,writer__8266__auto__,"cljs.core.async/t15963");
});
cljs.core.async.t15963.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15963.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15963.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15965){var self__ = this;
var _15965__$1 = this;return self__.meta15964;
});
cljs.core.async.t15963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15965,meta15964__$1){var self__ = this;
var _15965__$1 = this;return (new cljs.core.async.t15963(self__.cb,self__.flag,self__.alt_handler,meta15964__$1));
});
cljs.core.async.__GT_t15963 = (function __GT_t15963(cb__$1,flag__$1,alt_handler__$1,meta15964){return (new cljs.core.async.t15963(cb__$1,flag__$1,alt_handler__$1,meta15964));
});
}
return (new cljs.core.async.t15963(cb,flag,alt_handler,null));
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
return (function (p1__15966_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15966_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7721__auto__ = wport;if(cljs.core.truth_(or__7721__auto__))
{return or__7721__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15967 = (i + 1);
i = G__15967;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7721__auto__ = ret;if(cljs.core.truth_(or__7721__auto__))
{return or__7721__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__7709__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7709__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7709__auto__;
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
var alts_BANG___delegate = function (ports,p__15968){var map__15970 = p__15968;var map__15970__$1 = ((cljs.core.seq_QMARK_.call(null,map__15970))?cljs.core.apply.call(null,cljs.core.hash_map,map__15970):map__15970);var opts = map__15970__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15968 = null;if (arguments.length > 1) {
  p__15968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15968);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15971){
var ports = cljs.core.first(arglist__15971);
var p__15968 = cljs.core.rest(arglist__15971);
return alts_BANG___delegate(ports,p__15968);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15979 = (function (ch,f,map_LT_,meta15980){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15980 = meta15980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15979.cljs$lang$type = true;
cljs.core.async.t15979.cljs$lang$ctorStr = "cljs.core.async/t15979";
cljs.core.async.t15979.cljs$lang$ctorPrWriter = (function (this__8265__auto__,writer__8266__auto__,opt__8267__auto__){return cljs.core._write.call(null,writer__8266__auto__,"cljs.core.async/t15979");
});
cljs.core.async.t15979.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15979.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15982 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15982 = (function (fn1,_,meta15980,ch,f,map_LT_,meta15983){
this.fn1 = fn1;
this._ = _;
this.meta15980 = meta15980;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15983 = meta15983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15982.cljs$lang$type = true;
cljs.core.async.t15982.cljs$lang$ctorStr = "cljs.core.async/t15982";
cljs.core.async.t15982.cljs$lang$ctorPrWriter = (function (this__8265__auto__,writer__8266__auto__,opt__8267__auto__){return cljs.core._write.call(null,writer__8266__auto__,"cljs.core.async/t15982");
});
cljs.core.async.t15982.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15982.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__15972_SHARP_){return f1.call(null,(((p1__15972_SHARP_ == null))?null:self__.f.call(null,p1__15972_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15984){var self__ = this;
var _15984__$1 = this;return self__.meta15983;
});
cljs.core.async.t15982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15984,meta15983__$1){var self__ = this;
var _15984__$1 = this;return (new cljs.core.async.t15982(self__.fn1,self__._,self__.meta15980,self__.ch,self__.f,self__.map_LT_,meta15983__$1));
});
cljs.core.async.__GT_t15982 = (function __GT_t15982(fn1__$1,___$2,meta15980__$1,ch__$2,f__$2,map_LT___$2,meta15983){return (new cljs.core.async.t15982(fn1__$1,___$2,meta15980__$1,ch__$2,f__$2,map_LT___$2,meta15983));
});
}
return (new cljs.core.async.t15982(fn1,___$1,self__.meta15980,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7709__auto__ = ret;if(cljs.core.truth_(and__7709__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7709__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15979.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15981){var self__ = this;
var _15981__$1 = this;return self__.meta15980;
});
cljs.core.async.t15979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15981,meta15980__$1){var self__ = this;
var _15981__$1 = this;return (new cljs.core.async.t15979(self__.ch,self__.f,self__.map_LT_,meta15980__$1));
});
cljs.core.async.__GT_t15979 = (function __GT_t15979(ch__$1,f__$1,map_LT___$1,meta15980){return (new cljs.core.async.t15979(ch__$1,f__$1,map_LT___$1,meta15980));
});
}
return (new cljs.core.async.t15979(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15988 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15988 = (function (ch,f,map_GT_,meta15989){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15989 = meta15989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15988.cljs$lang$type = true;
cljs.core.async.t15988.cljs$lang$ctorStr = "cljs.core.async/t15988";
cljs.core.async.t15988.cljs$lang$ctorPrWriter = (function (this__8265__auto__,writer__8266__auto__,opt__8267__auto__){return cljs.core._write.call(null,writer__8266__auto__,"cljs.core.async/t15988");
});
cljs.core.async.t15988.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15988.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15988.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15990){var self__ = this;
var _15990__$1 = this;return self__.meta15989;
});
cljs.core.async.t15988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15990,meta15989__$1){var self__ = this;
var _15990__$1 = this;return (new cljs.core.async.t15988(self__.ch,self__.f,self__.map_GT_,meta15989__$1));
});
cljs.core.async.__GT_t15988 = (function __GT_t15988(ch__$1,f__$1,map_GT___$1,meta15989){return (new cljs.core.async.t15988(ch__$1,f__$1,map_GT___$1,meta15989));
});
}
return (new cljs.core.async.t15988(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15994 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15994 = (function (ch,p,filter_GT_,meta15995){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15995 = meta15995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15994.cljs$lang$type = true;
cljs.core.async.t15994.cljs$lang$ctorStr = "cljs.core.async/t15994";
cljs.core.async.t15994.cljs$lang$ctorPrWriter = (function (this__8265__auto__,writer__8266__auto__,opt__8267__auto__){return cljs.core._write.call(null,writer__8266__auto__,"cljs.core.async/t15994");
});
cljs.core.async.t15994.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15994.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15994.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15996){var self__ = this;
var _15996__$1 = this;return self__.meta15995;
});
cljs.core.async.t15994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15996,meta15995__$1){var self__ = this;
var _15996__$1 = this;return (new cljs.core.async.t15994(self__.ch,self__.p,self__.filter_GT_,meta15995__$1));
});
cljs.core.async.__GT_t15994 = (function __GT_t15994(ch__$1,p__$1,filter_GT___$1,meta15995){return (new cljs.core.async.t15994(ch__$1,p__$1,filter_GT___$1,meta15995));
});
}
return (new cljs.core.async.t15994(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11141__auto___16079 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_16058){var state_val_16059 = (state_16058[1]);if((state_val_16059 === 1))
{var state_16058__$1 = state_16058;var statearr_16060_16080 = state_16058__$1;(statearr_16060_16080[2] = null);
(statearr_16060_16080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 2))
{var state_16058__$1 = state_16058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16058__$1,4,ch);
} else
{if((state_val_16059 === 3))
{var inst_16056 = (state_16058[2]);var state_16058__$1 = state_16058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16058__$1,inst_16056);
} else
{if((state_val_16059 === 4))
{var inst_16040 = (state_16058[7]);var inst_16040__$1 = (state_16058[2]);var inst_16041 = (inst_16040__$1 == null);var state_16058__$1 = (function (){var statearr_16061 = state_16058;(statearr_16061[7] = inst_16040__$1);
return statearr_16061;
})();if(cljs.core.truth_(inst_16041))
{var statearr_16062_16081 = state_16058__$1;(statearr_16062_16081[1] = 5);
} else
{var statearr_16063_16082 = state_16058__$1;(statearr_16063_16082[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 5))
{var inst_16043 = cljs.core.async.close_BANG_.call(null,out);var state_16058__$1 = state_16058;var statearr_16064_16083 = state_16058__$1;(statearr_16064_16083[2] = inst_16043);
(statearr_16064_16083[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 6))
{var inst_16040 = (state_16058[7]);var inst_16045 = p.call(null,inst_16040);var state_16058__$1 = state_16058;if(cljs.core.truth_(inst_16045))
{var statearr_16065_16084 = state_16058__$1;(statearr_16065_16084[1] = 8);
} else
{var statearr_16066_16085 = state_16058__$1;(statearr_16066_16085[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 7))
{var inst_16054 = (state_16058[2]);var state_16058__$1 = state_16058;var statearr_16067_16086 = state_16058__$1;(statearr_16067_16086[2] = inst_16054);
(statearr_16067_16086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 8))
{var inst_16040 = (state_16058[7]);var state_16058__$1 = state_16058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16058__$1,11,out,inst_16040);
} else
{if((state_val_16059 === 9))
{var state_16058__$1 = state_16058;var statearr_16068_16087 = state_16058__$1;(statearr_16068_16087[2] = null);
(statearr_16068_16087[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 10))
{var inst_16051 = (state_16058[2]);var state_16058__$1 = (function (){var statearr_16069 = state_16058;(statearr_16069[8] = inst_16051);
return statearr_16069;
})();var statearr_16070_16088 = state_16058__$1;(statearr_16070_16088[2] = null);
(statearr_16070_16088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16059 === 11))
{var inst_16048 = (state_16058[2]);var state_16058__$1 = state_16058;var statearr_16071_16089 = state_16058__$1;(statearr_16071_16089[2] = inst_16048);
(statearr_16071_16089[1] = 10);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_16075 = (new Array(9));(statearr_16075[0] = state_machine__11054__auto__);
(statearr_16075[1] = 1);
return statearr_16075;
});
var state_machine__11054__auto____1 = (function (state_16058){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_16058);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e16076){if((e16076 instanceof Object))
{var ex__11057__auto__ = e16076;var statearr_16077_16090 = state_16058;(statearr_16077_16090[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16091 = state_16058;
state_16058 = G__16091;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_16058){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_16058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_16078 = f__11142__auto__.call(null);(statearr_16078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___16079);
return statearr_16078;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11141__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_16243){var state_val_16244 = (state_16243[1]);if((state_val_16244 === 1))
{var state_16243__$1 = state_16243;var statearr_16245_16282 = state_16243__$1;(statearr_16245_16282[2] = null);
(statearr_16245_16282[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 2))
{var state_16243__$1 = state_16243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16243__$1,4,in$);
} else
{if((state_val_16244 === 3))
{var inst_16241 = (state_16243[2]);var state_16243__$1 = state_16243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16243__$1,inst_16241);
} else
{if((state_val_16244 === 4))
{var inst_16189 = (state_16243[7]);var inst_16189__$1 = (state_16243[2]);var inst_16190 = (inst_16189__$1 == null);var state_16243__$1 = (function (){var statearr_16246 = state_16243;(statearr_16246[7] = inst_16189__$1);
return statearr_16246;
})();if(cljs.core.truth_(inst_16190))
{var statearr_16247_16283 = state_16243__$1;(statearr_16247_16283[1] = 5);
} else
{var statearr_16248_16284 = state_16243__$1;(statearr_16248_16284[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 5))
{var inst_16192 = cljs.core.async.close_BANG_.call(null,out);var state_16243__$1 = state_16243;var statearr_16249_16285 = state_16243__$1;(statearr_16249_16285[2] = inst_16192);
(statearr_16249_16285[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 6))
{var inst_16189 = (state_16243[7]);var inst_16194 = f.call(null,inst_16189);var inst_16199 = cljs.core.seq.call(null,inst_16194);var inst_16200 = inst_16199;var inst_16201 = null;var inst_16202 = 0;var inst_16203 = 0;var state_16243__$1 = (function (){var statearr_16250 = state_16243;(statearr_16250[8] = inst_16202);
(statearr_16250[9] = inst_16203);
(statearr_16250[10] = inst_16200);
(statearr_16250[11] = inst_16201);
return statearr_16250;
})();var statearr_16251_16286 = state_16243__$1;(statearr_16251_16286[2] = null);
(statearr_16251_16286[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 7))
{var inst_16239 = (state_16243[2]);var state_16243__$1 = state_16243;var statearr_16252_16287 = state_16243__$1;(statearr_16252_16287[2] = inst_16239);
(statearr_16252_16287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 8))
{var inst_16202 = (state_16243[8]);var inst_16203 = (state_16243[9]);var inst_16205 = (inst_16203 < inst_16202);var inst_16206 = inst_16205;var state_16243__$1 = state_16243;if(cljs.core.truth_(inst_16206))
{var statearr_16253_16288 = state_16243__$1;(statearr_16253_16288[1] = 10);
} else
{var statearr_16254_16289 = state_16243__$1;(statearr_16254_16289[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 9))
{var inst_16236 = (state_16243[2]);var state_16243__$1 = (function (){var statearr_16255 = state_16243;(statearr_16255[12] = inst_16236);
return statearr_16255;
})();var statearr_16256_16290 = state_16243__$1;(statearr_16256_16290[2] = null);
(statearr_16256_16290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 10))
{var inst_16203 = (state_16243[9]);var inst_16201 = (state_16243[11]);var inst_16208 = cljs.core._nth.call(null,inst_16201,inst_16203);var state_16243__$1 = state_16243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16243__$1,13,out,inst_16208);
} else
{if((state_val_16244 === 11))
{var inst_16200 = (state_16243[10]);var inst_16214 = (state_16243[13]);var inst_16214__$1 = cljs.core.seq.call(null,inst_16200);var state_16243__$1 = (function (){var statearr_16260 = state_16243;(statearr_16260[13] = inst_16214__$1);
return statearr_16260;
})();if(inst_16214__$1)
{var statearr_16261_16291 = state_16243__$1;(statearr_16261_16291[1] = 14);
} else
{var statearr_16262_16292 = state_16243__$1;(statearr_16262_16292[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 12))
{var inst_16234 = (state_16243[2]);var state_16243__$1 = state_16243;var statearr_16263_16293 = state_16243__$1;(statearr_16263_16293[2] = inst_16234);
(statearr_16263_16293[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 13))
{var inst_16202 = (state_16243[8]);var inst_16203 = (state_16243[9]);var inst_16200 = (state_16243[10]);var inst_16201 = (state_16243[11]);var inst_16210 = (state_16243[2]);var inst_16211 = (inst_16203 + 1);var tmp16257 = inst_16202;var tmp16258 = inst_16200;var tmp16259 = inst_16201;var inst_16200__$1 = tmp16258;var inst_16201__$1 = tmp16259;var inst_16202__$1 = tmp16257;var inst_16203__$1 = inst_16211;var state_16243__$1 = (function (){var statearr_16264 = state_16243;(statearr_16264[8] = inst_16202__$1);
(statearr_16264[9] = inst_16203__$1);
(statearr_16264[10] = inst_16200__$1);
(statearr_16264[11] = inst_16201__$1);
(statearr_16264[14] = inst_16210);
return statearr_16264;
})();var statearr_16265_16294 = state_16243__$1;(statearr_16265_16294[2] = null);
(statearr_16265_16294[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 14))
{var inst_16214 = (state_16243[13]);var inst_16216 = cljs.core.chunked_seq_QMARK_.call(null,inst_16214);var state_16243__$1 = state_16243;if(inst_16216)
{var statearr_16266_16295 = state_16243__$1;(statearr_16266_16295[1] = 17);
} else
{var statearr_16267_16296 = state_16243__$1;(statearr_16267_16296[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 15))
{var state_16243__$1 = state_16243;var statearr_16268_16297 = state_16243__$1;(statearr_16268_16297[2] = null);
(statearr_16268_16297[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 16))
{var inst_16232 = (state_16243[2]);var state_16243__$1 = state_16243;var statearr_16269_16298 = state_16243__$1;(statearr_16269_16298[2] = inst_16232);
(statearr_16269_16298[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 17))
{var inst_16214 = (state_16243[13]);var inst_16218 = cljs.core.chunk_first.call(null,inst_16214);var inst_16219 = cljs.core.chunk_rest.call(null,inst_16214);var inst_16220 = cljs.core.count.call(null,inst_16218);var inst_16200 = inst_16219;var inst_16201 = inst_16218;var inst_16202 = inst_16220;var inst_16203 = 0;var state_16243__$1 = (function (){var statearr_16270 = state_16243;(statearr_16270[8] = inst_16202);
(statearr_16270[9] = inst_16203);
(statearr_16270[10] = inst_16200);
(statearr_16270[11] = inst_16201);
return statearr_16270;
})();var statearr_16271_16299 = state_16243__$1;(statearr_16271_16299[2] = null);
(statearr_16271_16299[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 18))
{var inst_16214 = (state_16243[13]);var inst_16223 = cljs.core.first.call(null,inst_16214);var state_16243__$1 = state_16243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16243__$1,20,out,inst_16223);
} else
{if((state_val_16244 === 19))
{var inst_16229 = (state_16243[2]);var state_16243__$1 = state_16243;var statearr_16272_16300 = state_16243__$1;(statearr_16272_16300[2] = inst_16229);
(statearr_16272_16300[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16244 === 20))
{var inst_16214 = (state_16243[13]);var inst_16225 = (state_16243[2]);var inst_16226 = cljs.core.next.call(null,inst_16214);var inst_16200 = inst_16226;var inst_16201 = null;var inst_16202 = 0;var inst_16203 = 0;var state_16243__$1 = (function (){var statearr_16273 = state_16243;(statearr_16273[15] = inst_16225);
(statearr_16273[8] = inst_16202);
(statearr_16273[9] = inst_16203);
(statearr_16273[10] = inst_16200);
(statearr_16273[11] = inst_16201);
return statearr_16273;
})();var statearr_16274_16301 = state_16243__$1;(statearr_16274_16301[2] = null);
(statearr_16274_16301[1] = 8);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_16278 = (new Array(16));(statearr_16278[0] = state_machine__11054__auto__);
(statearr_16278[1] = 1);
return statearr_16278;
});
var state_machine__11054__auto____1 = (function (state_16243){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_16243);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e16279){if((e16279 instanceof Object))
{var ex__11057__auto__ = e16279;var statearr_16280_16302 = state_16243;(statearr_16280_16302[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16243);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16303 = state_16243;
state_16243 = G__16303;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_16243){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_16243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_16281 = f__11142__auto__.call(null);(statearr_16281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto__);
return statearr_16281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
}));
return c__11141__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11141__auto___16384 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_16363){var state_val_16364 = (state_16363[1]);if((state_val_16364 === 1))
{var state_16363__$1 = state_16363;var statearr_16365_16385 = state_16363__$1;(statearr_16365_16385[2] = null);
(statearr_16365_16385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16364 === 2))
{var state_16363__$1 = state_16363;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16363__$1,4,from);
} else
{if((state_val_16364 === 3))
{var inst_16361 = (state_16363[2]);var state_16363__$1 = state_16363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16363__$1,inst_16361);
} else
{if((state_val_16364 === 4))
{var inst_16346 = (state_16363[7]);var inst_16346__$1 = (state_16363[2]);var inst_16347 = (inst_16346__$1 == null);var state_16363__$1 = (function (){var statearr_16366 = state_16363;(statearr_16366[7] = inst_16346__$1);
return statearr_16366;
})();if(cljs.core.truth_(inst_16347))
{var statearr_16367_16386 = state_16363__$1;(statearr_16367_16386[1] = 5);
} else
{var statearr_16368_16387 = state_16363__$1;(statearr_16368_16387[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16364 === 5))
{var state_16363__$1 = state_16363;if(cljs.core.truth_(close_QMARK_))
{var statearr_16369_16388 = state_16363__$1;(statearr_16369_16388[1] = 8);
} else
{var statearr_16370_16389 = state_16363__$1;(statearr_16370_16389[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16364 === 6))
{var inst_16346 = (state_16363[7]);var state_16363__$1 = state_16363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16363__$1,11,to,inst_16346);
} else
{if((state_val_16364 === 7))
{var inst_16359 = (state_16363[2]);var state_16363__$1 = state_16363;var statearr_16371_16390 = state_16363__$1;(statearr_16371_16390[2] = inst_16359);
(statearr_16371_16390[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16364 === 8))
{var inst_16350 = cljs.core.async.close_BANG_.call(null,to);var state_16363__$1 = state_16363;var statearr_16372_16391 = state_16363__$1;(statearr_16372_16391[2] = inst_16350);
(statearr_16372_16391[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16364 === 9))
{var state_16363__$1 = state_16363;var statearr_16373_16392 = state_16363__$1;(statearr_16373_16392[2] = null);
(statearr_16373_16392[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16364 === 10))
{var inst_16353 = (state_16363[2]);var state_16363__$1 = state_16363;var statearr_16374_16393 = state_16363__$1;(statearr_16374_16393[2] = inst_16353);
(statearr_16374_16393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16364 === 11))
{var inst_16356 = (state_16363[2]);var state_16363__$1 = (function (){var statearr_16375 = state_16363;(statearr_16375[8] = inst_16356);
return statearr_16375;
})();var statearr_16376_16394 = state_16363__$1;(statearr_16376_16394[2] = null);
(statearr_16376_16394[1] = 2);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_16380 = (new Array(9));(statearr_16380[0] = state_machine__11054__auto__);
(statearr_16380[1] = 1);
return statearr_16380;
});
var state_machine__11054__auto____1 = (function (state_16363){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_16363);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e16381){if((e16381 instanceof Object))
{var ex__11057__auto__ = e16381;var statearr_16382_16395 = state_16363;(statearr_16382_16395[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16363);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16396 = state_16363;
state_16363 = G__16396;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_16363){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_16363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_16383 = f__11142__auto__.call(null);(statearr_16383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___16384);
return statearr_16383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11141__auto___16483 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_16461){var state_val_16462 = (state_16461[1]);if((state_val_16462 === 1))
{var state_16461__$1 = state_16461;var statearr_16463_16484 = state_16461__$1;(statearr_16463_16484[2] = null);
(statearr_16463_16484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 2))
{var state_16461__$1 = state_16461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16461__$1,4,ch);
} else
{if((state_val_16462 === 3))
{var inst_16459 = (state_16461[2]);var state_16461__$1 = state_16461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16461__$1,inst_16459);
} else
{if((state_val_16462 === 4))
{var inst_16442 = (state_16461[7]);var inst_16442__$1 = (state_16461[2]);var inst_16443 = (inst_16442__$1 == null);var state_16461__$1 = (function (){var statearr_16464 = state_16461;(statearr_16464[7] = inst_16442__$1);
return statearr_16464;
})();if(cljs.core.truth_(inst_16443))
{var statearr_16465_16485 = state_16461__$1;(statearr_16465_16485[1] = 5);
} else
{var statearr_16466_16486 = state_16461__$1;(statearr_16466_16486[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 5))
{var inst_16445 = cljs.core.async.close_BANG_.call(null,tc);var inst_16446 = cljs.core.async.close_BANG_.call(null,fc);var state_16461__$1 = (function (){var statearr_16467 = state_16461;(statearr_16467[8] = inst_16445);
return statearr_16467;
})();var statearr_16468_16487 = state_16461__$1;(statearr_16468_16487[2] = inst_16446);
(statearr_16468_16487[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 6))
{var inst_16442 = (state_16461[7]);var inst_16448 = p.call(null,inst_16442);var state_16461__$1 = state_16461;if(cljs.core.truth_(inst_16448))
{var statearr_16469_16488 = state_16461__$1;(statearr_16469_16488[1] = 9);
} else
{var statearr_16470_16489 = state_16461__$1;(statearr_16470_16489[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 7))
{var inst_16457 = (state_16461[2]);var state_16461__$1 = state_16461;var statearr_16471_16490 = state_16461__$1;(statearr_16471_16490[2] = inst_16457);
(statearr_16471_16490[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 8))
{var inst_16454 = (state_16461[2]);var state_16461__$1 = (function (){var statearr_16472 = state_16461;(statearr_16472[9] = inst_16454);
return statearr_16472;
})();var statearr_16473_16491 = state_16461__$1;(statearr_16473_16491[2] = null);
(statearr_16473_16491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 9))
{var state_16461__$1 = state_16461;var statearr_16474_16492 = state_16461__$1;(statearr_16474_16492[2] = tc);
(statearr_16474_16492[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 10))
{var state_16461__$1 = state_16461;var statearr_16475_16493 = state_16461__$1;(statearr_16475_16493[2] = fc);
(statearr_16475_16493[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16462 === 11))
{var inst_16442 = (state_16461[7]);var inst_16452 = (state_16461[2]);var state_16461__$1 = state_16461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16461__$1,8,inst_16452,inst_16442);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_16479 = (new Array(10));(statearr_16479[0] = state_machine__11054__auto__);
(statearr_16479[1] = 1);
return statearr_16479;
});
var state_machine__11054__auto____1 = (function (state_16461){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_16461);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e16480){if((e16480 instanceof Object))
{var ex__11057__auto__ = e16480;var statearr_16481_16494 = state_16461;(statearr_16481_16494[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16495 = state_16461;
state_16461 = G__16495;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_16461){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_16461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_16482 = f__11142__auto__.call(null);(statearr_16482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___16483);
return statearr_16482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11141__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_16542){var state_val_16543 = (state_16542[1]);if((state_val_16543 === 7))
{var inst_16538 = (state_16542[2]);var state_16542__$1 = state_16542;var statearr_16544_16560 = state_16542__$1;(statearr_16544_16560[2] = inst_16538);
(statearr_16544_16560[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16543 === 6))
{var inst_16528 = (state_16542[7]);var inst_16531 = (state_16542[8]);var inst_16535 = f.call(null,inst_16528,inst_16531);var inst_16528__$1 = inst_16535;var state_16542__$1 = (function (){var statearr_16545 = state_16542;(statearr_16545[7] = inst_16528__$1);
return statearr_16545;
})();var statearr_16546_16561 = state_16542__$1;(statearr_16546_16561[2] = null);
(statearr_16546_16561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16543 === 5))
{var inst_16528 = (state_16542[7]);var state_16542__$1 = state_16542;var statearr_16547_16562 = state_16542__$1;(statearr_16547_16562[2] = inst_16528);
(statearr_16547_16562[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16543 === 4))
{var inst_16531 = (state_16542[8]);var inst_16531__$1 = (state_16542[2]);var inst_16532 = (inst_16531__$1 == null);var state_16542__$1 = (function (){var statearr_16548 = state_16542;(statearr_16548[8] = inst_16531__$1);
return statearr_16548;
})();if(cljs.core.truth_(inst_16532))
{var statearr_16549_16563 = state_16542__$1;(statearr_16549_16563[1] = 5);
} else
{var statearr_16550_16564 = state_16542__$1;(statearr_16550_16564[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16543 === 3))
{var inst_16540 = (state_16542[2]);var state_16542__$1 = state_16542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16542__$1,inst_16540);
} else
{if((state_val_16543 === 2))
{var state_16542__$1 = state_16542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16542__$1,4,ch);
} else
{if((state_val_16543 === 1))
{var inst_16528 = init;var state_16542__$1 = (function (){var statearr_16551 = state_16542;(statearr_16551[7] = inst_16528);
return statearr_16551;
})();var statearr_16552_16565 = state_16542__$1;(statearr_16552_16565[2] = null);
(statearr_16552_16565[1] = 2);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_16556 = (new Array(9));(statearr_16556[0] = state_machine__11054__auto__);
(statearr_16556[1] = 1);
return statearr_16556;
});
var state_machine__11054__auto____1 = (function (state_16542){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_16542);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e16557){if((e16557 instanceof Object))
{var ex__11057__auto__ = e16557;var statearr_16558_16566 = state_16542;(statearr_16558_16566[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16542);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16567 = state_16542;
state_16542 = G__16567;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_16542){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_16542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_16559 = f__11142__auto__.call(null);(statearr_16559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto__);
return statearr_16559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
}));
return c__11141__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11141__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_16629){var state_val_16630 = (state_16629[1]);if((state_val_16630 === 1))
{var inst_16609 = cljs.core.seq.call(null,coll);var inst_16610 = inst_16609;var state_16629__$1 = (function (){var statearr_16631 = state_16629;(statearr_16631[7] = inst_16610);
return statearr_16631;
})();var statearr_16632_16650 = state_16629__$1;(statearr_16632_16650[2] = null);
(statearr_16632_16650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16630 === 2))
{var inst_16610 = (state_16629[7]);var state_16629__$1 = state_16629;if(cljs.core.truth_(inst_16610))
{var statearr_16633_16651 = state_16629__$1;(statearr_16633_16651[1] = 4);
} else
{var statearr_16634_16652 = state_16629__$1;(statearr_16634_16652[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16630 === 3))
{var inst_16627 = (state_16629[2]);var state_16629__$1 = state_16629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16629__$1,inst_16627);
} else
{if((state_val_16630 === 4))
{var inst_16610 = (state_16629[7]);var inst_16613 = cljs.core.first.call(null,inst_16610);var state_16629__$1 = state_16629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16629__$1,7,ch,inst_16613);
} else
{if((state_val_16630 === 5))
{var state_16629__$1 = state_16629;if(cljs.core.truth_(close_QMARK_))
{var statearr_16635_16653 = state_16629__$1;(statearr_16635_16653[1] = 8);
} else
{var statearr_16636_16654 = state_16629__$1;(statearr_16636_16654[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16630 === 6))
{var inst_16625 = (state_16629[2]);var state_16629__$1 = state_16629;var statearr_16637_16655 = state_16629__$1;(statearr_16637_16655[2] = inst_16625);
(statearr_16637_16655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16630 === 7))
{var inst_16610 = (state_16629[7]);var inst_16615 = (state_16629[2]);var inst_16616 = cljs.core.next.call(null,inst_16610);var inst_16610__$1 = inst_16616;var state_16629__$1 = (function (){var statearr_16638 = state_16629;(statearr_16638[8] = inst_16615);
(statearr_16638[7] = inst_16610__$1);
return statearr_16638;
})();var statearr_16639_16656 = state_16629__$1;(statearr_16639_16656[2] = null);
(statearr_16639_16656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16630 === 8))
{var inst_16620 = cljs.core.async.close_BANG_.call(null,ch);var state_16629__$1 = state_16629;var statearr_16640_16657 = state_16629__$1;(statearr_16640_16657[2] = inst_16620);
(statearr_16640_16657[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16630 === 9))
{var state_16629__$1 = state_16629;var statearr_16641_16658 = state_16629__$1;(statearr_16641_16658[2] = null);
(statearr_16641_16658[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16630 === 10))
{var inst_16623 = (state_16629[2]);var state_16629__$1 = state_16629;var statearr_16642_16659 = state_16629__$1;(statearr_16642_16659[2] = inst_16623);
(statearr_16642_16659[1] = 6);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_16646 = (new Array(9));(statearr_16646[0] = state_machine__11054__auto__);
(statearr_16646[1] = 1);
return statearr_16646;
});
var state_machine__11054__auto____1 = (function (state_16629){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_16629);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e16647){if((e16647 instanceof Object))
{var ex__11057__auto__ = e16647;var statearr_16648_16660 = state_16629;(statearr_16648_16660[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16629);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16661 = state_16629;
state_16629 = G__16661;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_16629){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_16629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_16649 = f__11142__auto__.call(null);(statearr_16649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto__);
return statearr_16649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
}));
return c__11141__auto__;
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
cljs.core.async.Mux = (function (){var obj16663 = {};return obj16663;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7709__auto__ = _;if(and__7709__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7709__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8324__auto__ = (((_ == null))?null:_);return (function (){var or__7721__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16665 = {};return obj16665;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7709__auto__ = m;if(and__7709__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7709__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8324__auto__ = (((m == null))?null:m);return (function (){var or__7721__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7709__auto__ = m;if(and__7709__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7709__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8324__auto__ = (((m == null))?null:m);return (function (){var or__7721__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7709__auto__ = m;if(and__7709__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7709__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8324__auto__ = (((m == null))?null:m);return (function (){var or__7721__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16880 = (function (cs,ch,mult,meta16881){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16881 = meta16881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16880.cljs$lang$type = true;
cljs.core.async.t16880.cljs$lang$ctorStr = "cljs.core.async/t16880";
cljs.core.async.t16880.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8265__auto__,writer__8266__auto__,opt__8267__auto__){return cljs.core._write.call(null,writer__8266__auto__,"cljs.core.async/t16880");
});})(cs))
;
cljs.core.async.t16880.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16880.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16880.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16880.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16880.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16880.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16882){var self__ = this;
var _16882__$1 = this;return self__.meta16881;
});})(cs))
;
cljs.core.async.t16880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16882,meta16881__$1){var self__ = this;
var _16882__$1 = this;return (new cljs.core.async.t16880(self__.cs,self__.ch,self__.mult,meta16881__$1));
});})(cs))
;
cljs.core.async.__GT_t16880 = ((function (cs){
return (function __GT_t16880(cs__$1,ch__$1,mult__$1,meta16881){return (new cljs.core.async.t16880(cs__$1,ch__$1,mult__$1,meta16881));
});})(cs))
;
}
return (new cljs.core.async.t16880(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11141__auto___17094 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_17012){var state_val_17013 = (state_17012[1]);if((state_val_17013 === 32))
{var inst_16961 = (state_17012[7]);var inst_16885 = (state_17012[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17012,31,Object,null,30);var inst_16968 = cljs.core.async.put_BANG_.call(null,inst_16961,inst_16885,done);var state_17012__$1 = state_17012;var statearr_17014_17095 = state_17012__$1;(statearr_17014_17095[2] = inst_16968);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17012__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 1))
{var state_17012__$1 = state_17012;var statearr_17015_17096 = state_17012__$1;(statearr_17015_17096[2] = null);
(statearr_17015_17096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 33))
{var inst_16974 = (state_17012[9]);var inst_16976 = cljs.core.chunked_seq_QMARK_.call(null,inst_16974);var state_17012__$1 = state_17012;if(inst_16976)
{var statearr_17016_17097 = state_17012__$1;(statearr_17016_17097[1] = 36);
} else
{var statearr_17017_17098 = state_17012__$1;(statearr_17017_17098[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 2))
{var state_17012__$1 = state_17012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17012__$1,4,ch);
} else
{if((state_val_17013 === 34))
{var state_17012__$1 = state_17012;var statearr_17018_17099 = state_17012__$1;(statearr_17018_17099[2] = null);
(statearr_17018_17099[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 3))
{var inst_17010 = (state_17012[2]);var state_17012__$1 = state_17012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17012__$1,inst_17010);
} else
{if((state_val_17013 === 35))
{var inst_16999 = (state_17012[2]);var state_17012__$1 = state_17012;var statearr_17019_17100 = state_17012__$1;(statearr_17019_17100[2] = inst_16999);
(statearr_17019_17100[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 4))
{var inst_16885 = (state_17012[8]);var inst_16885__$1 = (state_17012[2]);var inst_16886 = (inst_16885__$1 == null);var state_17012__$1 = (function (){var statearr_17020 = state_17012;(statearr_17020[8] = inst_16885__$1);
return statearr_17020;
})();if(cljs.core.truth_(inst_16886))
{var statearr_17021_17101 = state_17012__$1;(statearr_17021_17101[1] = 5);
} else
{var statearr_17022_17102 = state_17012__$1;(statearr_17022_17102[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 36))
{var inst_16974 = (state_17012[9]);var inst_16978 = cljs.core.chunk_first.call(null,inst_16974);var inst_16979 = cljs.core.chunk_rest.call(null,inst_16974);var inst_16980 = cljs.core.count.call(null,inst_16978);var inst_16953 = inst_16979;var inst_16954 = inst_16978;var inst_16955 = inst_16980;var inst_16956 = 0;var state_17012__$1 = (function (){var statearr_17023 = state_17012;(statearr_17023[10] = inst_16955);
(statearr_17023[11] = inst_16954);
(statearr_17023[12] = inst_16953);
(statearr_17023[13] = inst_16956);
return statearr_17023;
})();var statearr_17024_17103 = state_17012__$1;(statearr_17024_17103[2] = null);
(statearr_17024_17103[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 5))
{var inst_16892 = cljs.core.deref.call(null,cs);var inst_16893 = cljs.core.seq.call(null,inst_16892);var inst_16894 = inst_16893;var inst_16895 = null;var inst_16896 = 0;var inst_16897 = 0;var state_17012__$1 = (function (){var statearr_17025 = state_17012;(statearr_17025[14] = inst_16897);
(statearr_17025[15] = inst_16895);
(statearr_17025[16] = inst_16896);
(statearr_17025[17] = inst_16894);
return statearr_17025;
})();var statearr_17026_17104 = state_17012__$1;(statearr_17026_17104[2] = null);
(statearr_17026_17104[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 37))
{var inst_16974 = (state_17012[9]);var inst_16983 = cljs.core.first.call(null,inst_16974);var state_17012__$1 = (function (){var statearr_17027 = state_17012;(statearr_17027[18] = inst_16983);
return statearr_17027;
})();var statearr_17028_17105 = state_17012__$1;(statearr_17028_17105[2] = null);
(statearr_17028_17105[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 6))
{var inst_16944 = cljs.core.deref.call(null,cs);var inst_16945 = cljs.core.keys.call(null,inst_16944);var inst_16946 = cljs.core.count.call(null,inst_16945);var inst_16947 = cljs.core.reset_BANG_.call(null,dctr,inst_16946);var inst_16952 = cljs.core.seq.call(null,inst_16945);var inst_16953 = inst_16952;var inst_16954 = null;var inst_16955 = 0;var inst_16956 = 0;var state_17012__$1 = (function (){var statearr_17029 = state_17012;(statearr_17029[10] = inst_16955);
(statearr_17029[11] = inst_16954);
(statearr_17029[12] = inst_16953);
(statearr_17029[19] = inst_16947);
(statearr_17029[13] = inst_16956);
return statearr_17029;
})();var statearr_17030_17106 = state_17012__$1;(statearr_17030_17106[2] = null);
(statearr_17030_17106[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 38))
{var inst_16996 = (state_17012[2]);var state_17012__$1 = state_17012;var statearr_17031_17107 = state_17012__$1;(statearr_17031_17107[2] = inst_16996);
(statearr_17031_17107[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 7))
{var inst_17008 = (state_17012[2]);var state_17012__$1 = state_17012;var statearr_17032_17108 = state_17012__$1;(statearr_17032_17108[2] = inst_17008);
(statearr_17032_17108[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 39))
{var inst_16974 = (state_17012[9]);var inst_16992 = (state_17012[2]);var inst_16993 = cljs.core.next.call(null,inst_16974);var inst_16953 = inst_16993;var inst_16954 = null;var inst_16955 = 0;var inst_16956 = 0;var state_17012__$1 = (function (){var statearr_17033 = state_17012;(statearr_17033[10] = inst_16955);
(statearr_17033[11] = inst_16954);
(statearr_17033[12] = inst_16953);
(statearr_17033[20] = inst_16992);
(statearr_17033[13] = inst_16956);
return statearr_17033;
})();var statearr_17034_17109 = state_17012__$1;(statearr_17034_17109[2] = null);
(statearr_17034_17109[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 8))
{var inst_16897 = (state_17012[14]);var inst_16896 = (state_17012[16]);var inst_16899 = (inst_16897 < inst_16896);var inst_16900 = inst_16899;var state_17012__$1 = state_17012;if(cljs.core.truth_(inst_16900))
{var statearr_17035_17110 = state_17012__$1;(statearr_17035_17110[1] = 10);
} else
{var statearr_17036_17111 = state_17012__$1;(statearr_17036_17111[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 40))
{var inst_16983 = (state_17012[18]);var inst_16984 = (state_17012[2]);var inst_16985 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16986 = cljs.core.async.untap_STAR_.call(null,m,inst_16983);var state_17012__$1 = (function (){var statearr_17037 = state_17012;(statearr_17037[21] = inst_16984);
(statearr_17037[22] = inst_16985);
return statearr_17037;
})();var statearr_17038_17112 = state_17012__$1;(statearr_17038_17112[2] = inst_16986);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17012__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 9))
{var inst_16942 = (state_17012[2]);var state_17012__$1 = state_17012;var statearr_17039_17113 = state_17012__$1;(statearr_17039_17113[2] = inst_16942);
(statearr_17039_17113[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 41))
{var inst_16983 = (state_17012[18]);var inst_16885 = (state_17012[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17012,40,Object,null,39);var inst_16990 = cljs.core.async.put_BANG_.call(null,inst_16983,inst_16885,done);var state_17012__$1 = state_17012;var statearr_17040_17114 = state_17012__$1;(statearr_17040_17114[2] = inst_16990);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17012__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 10))
{var inst_16897 = (state_17012[14]);var inst_16895 = (state_17012[15]);var inst_16903 = cljs.core._nth.call(null,inst_16895,inst_16897);var inst_16904 = cljs.core.nth.call(null,inst_16903,0,null);var inst_16905 = cljs.core.nth.call(null,inst_16903,1,null);var state_17012__$1 = (function (){var statearr_17041 = state_17012;(statearr_17041[23] = inst_16904);
return statearr_17041;
})();if(cljs.core.truth_(inst_16905))
{var statearr_17042_17115 = state_17012__$1;(statearr_17042_17115[1] = 13);
} else
{var statearr_17043_17116 = state_17012__$1;(statearr_17043_17116[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 42))
{var inst_17005 = (state_17012[2]);var state_17012__$1 = (function (){var statearr_17044 = state_17012;(statearr_17044[24] = inst_17005);
return statearr_17044;
})();var statearr_17045_17117 = state_17012__$1;(statearr_17045_17117[2] = null);
(statearr_17045_17117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 11))
{var inst_16894 = (state_17012[17]);var inst_16914 = (state_17012[25]);var inst_16914__$1 = cljs.core.seq.call(null,inst_16894);var state_17012__$1 = (function (){var statearr_17046 = state_17012;(statearr_17046[25] = inst_16914__$1);
return statearr_17046;
})();if(inst_16914__$1)
{var statearr_17047_17118 = state_17012__$1;(statearr_17047_17118[1] = 16);
} else
{var statearr_17048_17119 = state_17012__$1;(statearr_17048_17119[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 12))
{var inst_16940 = (state_17012[2]);var state_17012__$1 = state_17012;var statearr_17049_17120 = state_17012__$1;(statearr_17049_17120[2] = inst_16940);
(statearr_17049_17120[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 13))
{var inst_16904 = (state_17012[23]);var inst_16907 = cljs.core.async.close_BANG_.call(null,inst_16904);var state_17012__$1 = state_17012;var statearr_17053_17121 = state_17012__$1;(statearr_17053_17121[2] = inst_16907);
(statearr_17053_17121[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 14))
{var state_17012__$1 = state_17012;var statearr_17054_17122 = state_17012__$1;(statearr_17054_17122[2] = null);
(statearr_17054_17122[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 15))
{var inst_16897 = (state_17012[14]);var inst_16895 = (state_17012[15]);var inst_16896 = (state_17012[16]);var inst_16894 = (state_17012[17]);var inst_16910 = (state_17012[2]);var inst_16911 = (inst_16897 + 1);var tmp17050 = inst_16895;var tmp17051 = inst_16896;var tmp17052 = inst_16894;var inst_16894__$1 = tmp17052;var inst_16895__$1 = tmp17050;var inst_16896__$1 = tmp17051;var inst_16897__$1 = inst_16911;var state_17012__$1 = (function (){var statearr_17055 = state_17012;(statearr_17055[26] = inst_16910);
(statearr_17055[14] = inst_16897__$1);
(statearr_17055[15] = inst_16895__$1);
(statearr_17055[16] = inst_16896__$1);
(statearr_17055[17] = inst_16894__$1);
return statearr_17055;
})();var statearr_17056_17123 = state_17012__$1;(statearr_17056_17123[2] = null);
(statearr_17056_17123[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 16))
{var inst_16914 = (state_17012[25]);var inst_16916 = cljs.core.chunked_seq_QMARK_.call(null,inst_16914);var state_17012__$1 = state_17012;if(inst_16916)
{var statearr_17057_17124 = state_17012__$1;(statearr_17057_17124[1] = 19);
} else
{var statearr_17058_17125 = state_17012__$1;(statearr_17058_17125[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 17))
{var state_17012__$1 = state_17012;var statearr_17059_17126 = state_17012__$1;(statearr_17059_17126[2] = null);
(statearr_17059_17126[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 18))
{var inst_16938 = (state_17012[2]);var state_17012__$1 = state_17012;var statearr_17060_17127 = state_17012__$1;(statearr_17060_17127[2] = inst_16938);
(statearr_17060_17127[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 19))
{var inst_16914 = (state_17012[25]);var inst_16918 = cljs.core.chunk_first.call(null,inst_16914);var inst_16919 = cljs.core.chunk_rest.call(null,inst_16914);var inst_16920 = cljs.core.count.call(null,inst_16918);var inst_16894 = inst_16919;var inst_16895 = inst_16918;var inst_16896 = inst_16920;var inst_16897 = 0;var state_17012__$1 = (function (){var statearr_17061 = state_17012;(statearr_17061[14] = inst_16897);
(statearr_17061[15] = inst_16895);
(statearr_17061[16] = inst_16896);
(statearr_17061[17] = inst_16894);
return statearr_17061;
})();var statearr_17062_17128 = state_17012__$1;(statearr_17062_17128[2] = null);
(statearr_17062_17128[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 20))
{var inst_16914 = (state_17012[25]);var inst_16924 = cljs.core.first.call(null,inst_16914);var inst_16925 = cljs.core.nth.call(null,inst_16924,0,null);var inst_16926 = cljs.core.nth.call(null,inst_16924,1,null);var state_17012__$1 = (function (){var statearr_17063 = state_17012;(statearr_17063[27] = inst_16925);
return statearr_17063;
})();if(cljs.core.truth_(inst_16926))
{var statearr_17064_17129 = state_17012__$1;(statearr_17064_17129[1] = 22);
} else
{var statearr_17065_17130 = state_17012__$1;(statearr_17065_17130[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 21))
{var inst_16935 = (state_17012[2]);var state_17012__$1 = state_17012;var statearr_17066_17131 = state_17012__$1;(statearr_17066_17131[2] = inst_16935);
(statearr_17066_17131[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 22))
{var inst_16925 = (state_17012[27]);var inst_16928 = cljs.core.async.close_BANG_.call(null,inst_16925);var state_17012__$1 = state_17012;var statearr_17067_17132 = state_17012__$1;(statearr_17067_17132[2] = inst_16928);
(statearr_17067_17132[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 23))
{var state_17012__$1 = state_17012;var statearr_17068_17133 = state_17012__$1;(statearr_17068_17133[2] = null);
(statearr_17068_17133[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 24))
{var inst_16914 = (state_17012[25]);var inst_16931 = (state_17012[2]);var inst_16932 = cljs.core.next.call(null,inst_16914);var inst_16894 = inst_16932;var inst_16895 = null;var inst_16896 = 0;var inst_16897 = 0;var state_17012__$1 = (function (){var statearr_17069 = state_17012;(statearr_17069[28] = inst_16931);
(statearr_17069[14] = inst_16897);
(statearr_17069[15] = inst_16895);
(statearr_17069[16] = inst_16896);
(statearr_17069[17] = inst_16894);
return statearr_17069;
})();var statearr_17070_17134 = state_17012__$1;(statearr_17070_17134[2] = null);
(statearr_17070_17134[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 25))
{var inst_16955 = (state_17012[10]);var inst_16956 = (state_17012[13]);var inst_16958 = (inst_16956 < inst_16955);var inst_16959 = inst_16958;var state_17012__$1 = state_17012;if(cljs.core.truth_(inst_16959))
{var statearr_17071_17135 = state_17012__$1;(statearr_17071_17135[1] = 27);
} else
{var statearr_17072_17136 = state_17012__$1;(statearr_17072_17136[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 26))
{var inst_17003 = (state_17012[2]);var state_17012__$1 = (function (){var statearr_17073 = state_17012;(statearr_17073[29] = inst_17003);
return statearr_17073;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17012__$1,42,dchan);
} else
{if((state_val_17013 === 27))
{var inst_16954 = (state_17012[11]);var inst_16956 = (state_17012[13]);var inst_16961 = cljs.core._nth.call(null,inst_16954,inst_16956);var state_17012__$1 = (function (){var statearr_17074 = state_17012;(statearr_17074[7] = inst_16961);
return statearr_17074;
})();var statearr_17075_17137 = state_17012__$1;(statearr_17075_17137[2] = null);
(statearr_17075_17137[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 28))
{var inst_16953 = (state_17012[12]);var inst_16974 = (state_17012[9]);var inst_16974__$1 = cljs.core.seq.call(null,inst_16953);var state_17012__$1 = (function (){var statearr_17079 = state_17012;(statearr_17079[9] = inst_16974__$1);
return statearr_17079;
})();if(inst_16974__$1)
{var statearr_17080_17138 = state_17012__$1;(statearr_17080_17138[1] = 33);
} else
{var statearr_17081_17139 = state_17012__$1;(statearr_17081_17139[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 29))
{var inst_17001 = (state_17012[2]);var state_17012__$1 = state_17012;var statearr_17082_17140 = state_17012__$1;(statearr_17082_17140[2] = inst_17001);
(statearr_17082_17140[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 30))
{var inst_16955 = (state_17012[10]);var inst_16954 = (state_17012[11]);var inst_16953 = (state_17012[12]);var inst_16956 = (state_17012[13]);var inst_16970 = (state_17012[2]);var inst_16971 = (inst_16956 + 1);var tmp17076 = inst_16955;var tmp17077 = inst_16954;var tmp17078 = inst_16953;var inst_16953__$1 = tmp17078;var inst_16954__$1 = tmp17077;var inst_16955__$1 = tmp17076;var inst_16956__$1 = inst_16971;var state_17012__$1 = (function (){var statearr_17083 = state_17012;(statearr_17083[10] = inst_16955__$1);
(statearr_17083[11] = inst_16954__$1);
(statearr_17083[12] = inst_16953__$1);
(statearr_17083[30] = inst_16970);
(statearr_17083[13] = inst_16956__$1);
return statearr_17083;
})();var statearr_17084_17141 = state_17012__$1;(statearr_17084_17141[2] = null);
(statearr_17084_17141[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17013 === 31))
{var inst_16961 = (state_17012[7]);var inst_16962 = (state_17012[2]);var inst_16963 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16964 = cljs.core.async.untap_STAR_.call(null,m,inst_16961);var state_17012__$1 = (function (){var statearr_17085 = state_17012;(statearr_17085[31] = inst_16962);
(statearr_17085[32] = inst_16963);
return statearr_17085;
})();var statearr_17086_17142 = state_17012__$1;(statearr_17086_17142[2] = inst_16964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17012__$1);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_17090 = (new Array(33));(statearr_17090[0] = state_machine__11054__auto__);
(statearr_17090[1] = 1);
return statearr_17090;
});
var state_machine__11054__auto____1 = (function (state_17012){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_17012);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e17091){if((e17091 instanceof Object))
{var ex__11057__auto__ = e17091;var statearr_17092_17143 = state_17012;(statearr_17092_17143[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17144 = state_17012;
state_17012 = G__17144;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_17012){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_17012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_17093 = f__11142__auto__.call(null);(statearr_17093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___17094);
return statearr_17093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
cljs.core.async.Mix = (function (){var obj17146 = {};return obj17146;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7709__auto__ = m;if(and__7709__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7709__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8324__auto__ = (((m == null))?null:m);return (function (){var or__7721__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7709__auto__ = m;if(and__7709__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7709__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8324__auto__ = (((m == null))?null:m);return (function (){var or__7721__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7709__auto__ = m;if(and__7709__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7709__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8324__auto__ = (((m == null))?null:m);return (function (){var or__7721__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7709__auto__ = m;if(and__7709__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7709__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8324__auto__ = (((m == null))?null:m);return (function (){var or__7721__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7709__auto__ = m;if(and__7709__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7709__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8324__auto__ = (((m == null))?null:m);return (function (){var or__7721__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t17256 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17256 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17257){
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
this.meta17257 = meta17257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17256.cljs$lang$type = true;
cljs.core.async.t17256.cljs$lang$ctorStr = "cljs.core.async/t17256";
cljs.core.async.t17256.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8265__auto__,writer__8266__auto__,opt__8267__auto__){return cljs.core._write.call(null,writer__8266__auto__,"cljs.core.async/t17256");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17256.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17256.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17256.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17256.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17256.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17256.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17256.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17256.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17258){var self__ = this;
var _17258__$1 = this;return self__.meta17257;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17258,meta17257__$1){var self__ = this;
var _17258__$1 = this;return (new cljs.core.async.t17256(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17257__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17256 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17256(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17257){return (new cljs.core.async.t17256(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17257));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17256(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__11141__auto___17365 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_17323){var state_val_17324 = (state_17323[1]);if((state_val_17324 === 1))
{var inst_17262 = (state_17323[7]);var inst_17262__$1 = calc_state.call(null);var inst_17263 = cljs.core.seq_QMARK_.call(null,inst_17262__$1);var state_17323__$1 = (function (){var statearr_17325 = state_17323;(statearr_17325[7] = inst_17262__$1);
return statearr_17325;
})();if(inst_17263)
{var statearr_17326_17366 = state_17323__$1;(statearr_17326_17366[1] = 2);
} else
{var statearr_17327_17367 = state_17323__$1;(statearr_17327_17367[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 2))
{var inst_17262 = (state_17323[7]);var inst_17265 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17262);var state_17323__$1 = state_17323;var statearr_17328_17368 = state_17323__$1;(statearr_17328_17368[2] = inst_17265);
(statearr_17328_17368[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 3))
{var inst_17262 = (state_17323[7]);var state_17323__$1 = state_17323;var statearr_17329_17369 = state_17323__$1;(statearr_17329_17369[2] = inst_17262);
(statearr_17329_17369[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 4))
{var inst_17262 = (state_17323[7]);var inst_17268 = (state_17323[2]);var inst_17269 = cljs.core.get.call(null,inst_17268,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17270 = cljs.core.get.call(null,inst_17268,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17271 = cljs.core.get.call(null,inst_17268,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17272 = inst_17262;var state_17323__$1 = (function (){var statearr_17330 = state_17323;(statearr_17330[8] = inst_17269);
(statearr_17330[9] = inst_17270);
(statearr_17330[10] = inst_17271);
(statearr_17330[11] = inst_17272);
return statearr_17330;
})();var statearr_17331_17370 = state_17323__$1;(statearr_17331_17370[2] = null);
(statearr_17331_17370[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 5))
{var inst_17272 = (state_17323[11]);var inst_17275 = cljs.core.seq_QMARK_.call(null,inst_17272);var state_17323__$1 = state_17323;if(inst_17275)
{var statearr_17332_17371 = state_17323__$1;(statearr_17332_17371[1] = 7);
} else
{var statearr_17333_17372 = state_17323__$1;(statearr_17333_17372[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 6))
{var inst_17321 = (state_17323[2]);var state_17323__$1 = state_17323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17323__$1,inst_17321);
} else
{if((state_val_17324 === 7))
{var inst_17272 = (state_17323[11]);var inst_17277 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17272);var state_17323__$1 = state_17323;var statearr_17334_17373 = state_17323__$1;(statearr_17334_17373[2] = inst_17277);
(statearr_17334_17373[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 8))
{var inst_17272 = (state_17323[11]);var state_17323__$1 = state_17323;var statearr_17335_17374 = state_17323__$1;(statearr_17335_17374[2] = inst_17272);
(statearr_17335_17374[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 9))
{var inst_17280 = (state_17323[12]);var inst_17280__$1 = (state_17323[2]);var inst_17281 = cljs.core.get.call(null,inst_17280__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17282 = cljs.core.get.call(null,inst_17280__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17283 = cljs.core.get.call(null,inst_17280__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17323__$1 = (function (){var statearr_17336 = state_17323;(statearr_17336[12] = inst_17280__$1);
(statearr_17336[13] = inst_17282);
(statearr_17336[14] = inst_17283);
return statearr_17336;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17323__$1,10,inst_17281);
} else
{if((state_val_17324 === 10))
{var inst_17288 = (state_17323[15]);var inst_17287 = (state_17323[16]);var inst_17286 = (state_17323[2]);var inst_17287__$1 = cljs.core.nth.call(null,inst_17286,0,null);var inst_17288__$1 = cljs.core.nth.call(null,inst_17286,1,null);var inst_17289 = (inst_17287__$1 == null);var inst_17290 = cljs.core._EQ_.call(null,inst_17288__$1,change);var inst_17291 = (inst_17289) || (inst_17290);var state_17323__$1 = (function (){var statearr_17337 = state_17323;(statearr_17337[15] = inst_17288__$1);
(statearr_17337[16] = inst_17287__$1);
return statearr_17337;
})();if(cljs.core.truth_(inst_17291))
{var statearr_17338_17375 = state_17323__$1;(statearr_17338_17375[1] = 11);
} else
{var statearr_17339_17376 = state_17323__$1;(statearr_17339_17376[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 11))
{var inst_17287 = (state_17323[16]);var inst_17293 = (inst_17287 == null);var state_17323__$1 = state_17323;if(cljs.core.truth_(inst_17293))
{var statearr_17340_17377 = state_17323__$1;(statearr_17340_17377[1] = 14);
} else
{var statearr_17341_17378 = state_17323__$1;(statearr_17341_17378[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 12))
{var inst_17288 = (state_17323[15]);var inst_17283 = (state_17323[14]);var inst_17302 = (state_17323[17]);var inst_17302__$1 = inst_17283.call(null,inst_17288);var state_17323__$1 = (function (){var statearr_17342 = state_17323;(statearr_17342[17] = inst_17302__$1);
return statearr_17342;
})();if(cljs.core.truth_(inst_17302__$1))
{var statearr_17343_17379 = state_17323__$1;(statearr_17343_17379[1] = 17);
} else
{var statearr_17344_17380 = state_17323__$1;(statearr_17344_17380[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 13))
{var inst_17319 = (state_17323[2]);var state_17323__$1 = state_17323;var statearr_17345_17381 = state_17323__$1;(statearr_17345_17381[2] = inst_17319);
(statearr_17345_17381[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 14))
{var inst_17288 = (state_17323[15]);var inst_17295 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17288);var state_17323__$1 = state_17323;var statearr_17346_17382 = state_17323__$1;(statearr_17346_17382[2] = inst_17295);
(statearr_17346_17382[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 15))
{var state_17323__$1 = state_17323;var statearr_17347_17383 = state_17323__$1;(statearr_17347_17383[2] = null);
(statearr_17347_17383[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 16))
{var inst_17298 = (state_17323[2]);var inst_17299 = calc_state.call(null);var inst_17272 = inst_17299;var state_17323__$1 = (function (){var statearr_17348 = state_17323;(statearr_17348[18] = inst_17298);
(statearr_17348[11] = inst_17272);
return statearr_17348;
})();var statearr_17349_17384 = state_17323__$1;(statearr_17349_17384[2] = null);
(statearr_17349_17384[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 17))
{var inst_17302 = (state_17323[17]);var state_17323__$1 = state_17323;var statearr_17350_17385 = state_17323__$1;(statearr_17350_17385[2] = inst_17302);
(statearr_17350_17385[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 18))
{var inst_17288 = (state_17323[15]);var inst_17282 = (state_17323[13]);var inst_17283 = (state_17323[14]);var inst_17305 = cljs.core.empty_QMARK_.call(null,inst_17283);var inst_17306 = inst_17282.call(null,inst_17288);var inst_17307 = cljs.core.not.call(null,inst_17306);var inst_17308 = (inst_17305) && (inst_17307);var state_17323__$1 = state_17323;var statearr_17351_17386 = state_17323__$1;(statearr_17351_17386[2] = inst_17308);
(statearr_17351_17386[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 19))
{var inst_17310 = (state_17323[2]);var state_17323__$1 = state_17323;if(cljs.core.truth_(inst_17310))
{var statearr_17352_17387 = state_17323__$1;(statearr_17352_17387[1] = 20);
} else
{var statearr_17353_17388 = state_17323__$1;(statearr_17353_17388[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 20))
{var inst_17287 = (state_17323[16]);var state_17323__$1 = state_17323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17323__$1,23,out,inst_17287);
} else
{if((state_val_17324 === 21))
{var state_17323__$1 = state_17323;var statearr_17354_17389 = state_17323__$1;(statearr_17354_17389[2] = null);
(statearr_17354_17389[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 22))
{var inst_17280 = (state_17323[12]);var inst_17316 = (state_17323[2]);var inst_17272 = inst_17280;var state_17323__$1 = (function (){var statearr_17355 = state_17323;(statearr_17355[19] = inst_17316);
(statearr_17355[11] = inst_17272);
return statearr_17355;
})();var statearr_17356_17390 = state_17323__$1;(statearr_17356_17390[2] = null);
(statearr_17356_17390[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17324 === 23))
{var inst_17313 = (state_17323[2]);var state_17323__$1 = state_17323;var statearr_17357_17391 = state_17323__$1;(statearr_17357_17391[2] = inst_17313);
(statearr_17357_17391[1] = 22);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_17361 = (new Array(20));(statearr_17361[0] = state_machine__11054__auto__);
(statearr_17361[1] = 1);
return statearr_17361;
});
var state_machine__11054__auto____1 = (function (state_17323){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_17323);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e17362){if((e17362 instanceof Object))
{var ex__11057__auto__ = e17362;var statearr_17363_17392 = state_17323;(statearr_17363_17392[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17393 = state_17323;
state_17323 = G__17393;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_17323){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_17323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_17364 = f__11142__auto__.call(null);(statearr_17364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___17365);
return statearr_17364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
cljs.core.async.Pub = (function (){var obj17395 = {};return obj17395;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7709__auto__ = p;if(and__7709__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7709__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8324__auto__ = (((p == null))?null:p);return (function (){var or__7721__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7709__auto__ = p;if(and__7709__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7709__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8324__auto__ = (((p == null))?null:p);return (function (){var or__7721__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7709__auto__ = p;if(and__7709__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7709__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8324__auto__ = (((p == null))?null:p);return (function (){var or__7721__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7709__auto__ = p;if(and__7709__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7709__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8324__auto__ = (((p == null))?null:p);return (function (){var or__7721__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8324__auto__)]);if(or__7721__auto__)
{return or__7721__auto__;
} else
{var or__7721__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7721__auto____$1)
{return or__7721__auto____$1;
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
return (function (topic){var or__7721__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7721__auto__))
{return or__7721__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7721__auto__,mults){
return (function (p1__17396_SHARP_){if(cljs.core.truth_(p1__17396_SHARP_.call(null,topic)))
{return p1__17396_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17396_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7721__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17521 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17521 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17522){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17522 = meta17522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17521.cljs$lang$type = true;
cljs.core.async.t17521.cljs$lang$ctorStr = "cljs.core.async/t17521";
cljs.core.async.t17521.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8265__auto__,writer__8266__auto__,opt__8267__auto__){return cljs.core._write.call(null,writer__8266__auto__,"cljs.core.async/t17521");
});})(mults,ensure_mult))
;
cljs.core.async.t17521.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17521.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17521.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17521.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17521.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17521.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17521.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17523){var self__ = this;
var _17523__$1 = this;return self__.meta17522;
});})(mults,ensure_mult))
;
cljs.core.async.t17521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17523,meta17522__$1){var self__ = this;
var _17523__$1 = this;return (new cljs.core.async.t17521(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17522__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17521 = ((function (mults,ensure_mult){
return (function __GT_t17521(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17522){return (new cljs.core.async.t17521(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17522));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17521(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11141__auto___17645 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_17597){var state_val_17598 = (state_17597[1]);if((state_val_17598 === 1))
{var state_17597__$1 = state_17597;var statearr_17599_17646 = state_17597__$1;(statearr_17599_17646[2] = null);
(statearr_17599_17646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 2))
{var state_17597__$1 = state_17597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17597__$1,4,ch);
} else
{if((state_val_17598 === 3))
{var inst_17595 = (state_17597[2]);var state_17597__$1 = state_17597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17597__$1,inst_17595);
} else
{if((state_val_17598 === 4))
{var inst_17526 = (state_17597[7]);var inst_17526__$1 = (state_17597[2]);var inst_17527 = (inst_17526__$1 == null);var state_17597__$1 = (function (){var statearr_17600 = state_17597;(statearr_17600[7] = inst_17526__$1);
return statearr_17600;
})();if(cljs.core.truth_(inst_17527))
{var statearr_17601_17647 = state_17597__$1;(statearr_17601_17647[1] = 5);
} else
{var statearr_17602_17648 = state_17597__$1;(statearr_17602_17648[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 5))
{var inst_17533 = cljs.core.deref.call(null,mults);var inst_17534 = cljs.core.vals.call(null,inst_17533);var inst_17535 = cljs.core.seq.call(null,inst_17534);var inst_17536 = inst_17535;var inst_17537 = null;var inst_17538 = 0;var inst_17539 = 0;var state_17597__$1 = (function (){var statearr_17603 = state_17597;(statearr_17603[8] = inst_17539);
(statearr_17603[9] = inst_17538);
(statearr_17603[10] = inst_17537);
(statearr_17603[11] = inst_17536);
return statearr_17603;
})();var statearr_17604_17649 = state_17597__$1;(statearr_17604_17649[2] = null);
(statearr_17604_17649[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 6))
{var inst_17526 = (state_17597[7]);var inst_17576 = (state_17597[12]);var inst_17574 = (state_17597[13]);var inst_17574__$1 = topic_fn.call(null,inst_17526);var inst_17575 = cljs.core.deref.call(null,mults);var inst_17576__$1 = cljs.core.get.call(null,inst_17575,inst_17574__$1);var state_17597__$1 = (function (){var statearr_17605 = state_17597;(statearr_17605[12] = inst_17576__$1);
(statearr_17605[13] = inst_17574__$1);
return statearr_17605;
})();if(cljs.core.truth_(inst_17576__$1))
{var statearr_17606_17650 = state_17597__$1;(statearr_17606_17650[1] = 19);
} else
{var statearr_17607_17651 = state_17597__$1;(statearr_17607_17651[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 7))
{var inst_17593 = (state_17597[2]);var state_17597__$1 = state_17597;var statearr_17608_17652 = state_17597__$1;(statearr_17608_17652[2] = inst_17593);
(statearr_17608_17652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 8))
{var inst_17539 = (state_17597[8]);var inst_17538 = (state_17597[9]);var inst_17541 = (inst_17539 < inst_17538);var inst_17542 = inst_17541;var state_17597__$1 = state_17597;if(cljs.core.truth_(inst_17542))
{var statearr_17612_17653 = state_17597__$1;(statearr_17612_17653[1] = 10);
} else
{var statearr_17613_17654 = state_17597__$1;(statearr_17613_17654[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 9))
{var inst_17572 = (state_17597[2]);var state_17597__$1 = state_17597;var statearr_17614_17655 = state_17597__$1;(statearr_17614_17655[2] = inst_17572);
(statearr_17614_17655[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 10))
{var inst_17539 = (state_17597[8]);var inst_17538 = (state_17597[9]);var inst_17537 = (state_17597[10]);var inst_17536 = (state_17597[11]);var inst_17544 = cljs.core._nth.call(null,inst_17537,inst_17539);var inst_17545 = cljs.core.async.muxch_STAR_.call(null,inst_17544);var inst_17546 = cljs.core.async.close_BANG_.call(null,inst_17545);var inst_17547 = (inst_17539 + 1);var tmp17609 = inst_17538;var tmp17610 = inst_17537;var tmp17611 = inst_17536;var inst_17536__$1 = tmp17611;var inst_17537__$1 = tmp17610;var inst_17538__$1 = tmp17609;var inst_17539__$1 = inst_17547;var state_17597__$1 = (function (){var statearr_17615 = state_17597;(statearr_17615[8] = inst_17539__$1);
(statearr_17615[14] = inst_17546);
(statearr_17615[9] = inst_17538__$1);
(statearr_17615[10] = inst_17537__$1);
(statearr_17615[11] = inst_17536__$1);
return statearr_17615;
})();var statearr_17616_17656 = state_17597__$1;(statearr_17616_17656[2] = null);
(statearr_17616_17656[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 11))
{var inst_17550 = (state_17597[15]);var inst_17536 = (state_17597[11]);var inst_17550__$1 = cljs.core.seq.call(null,inst_17536);var state_17597__$1 = (function (){var statearr_17617 = state_17597;(statearr_17617[15] = inst_17550__$1);
return statearr_17617;
})();if(inst_17550__$1)
{var statearr_17618_17657 = state_17597__$1;(statearr_17618_17657[1] = 13);
} else
{var statearr_17619_17658 = state_17597__$1;(statearr_17619_17658[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 12))
{var inst_17570 = (state_17597[2]);var state_17597__$1 = state_17597;var statearr_17620_17659 = state_17597__$1;(statearr_17620_17659[2] = inst_17570);
(statearr_17620_17659[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 13))
{var inst_17550 = (state_17597[15]);var inst_17552 = cljs.core.chunked_seq_QMARK_.call(null,inst_17550);var state_17597__$1 = state_17597;if(inst_17552)
{var statearr_17621_17660 = state_17597__$1;(statearr_17621_17660[1] = 16);
} else
{var statearr_17622_17661 = state_17597__$1;(statearr_17622_17661[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 14))
{var state_17597__$1 = state_17597;var statearr_17623_17662 = state_17597__$1;(statearr_17623_17662[2] = null);
(statearr_17623_17662[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 15))
{var inst_17568 = (state_17597[2]);var state_17597__$1 = state_17597;var statearr_17624_17663 = state_17597__$1;(statearr_17624_17663[2] = inst_17568);
(statearr_17624_17663[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 16))
{var inst_17550 = (state_17597[15]);var inst_17554 = cljs.core.chunk_first.call(null,inst_17550);var inst_17555 = cljs.core.chunk_rest.call(null,inst_17550);var inst_17556 = cljs.core.count.call(null,inst_17554);var inst_17536 = inst_17555;var inst_17537 = inst_17554;var inst_17538 = inst_17556;var inst_17539 = 0;var state_17597__$1 = (function (){var statearr_17625 = state_17597;(statearr_17625[8] = inst_17539);
(statearr_17625[9] = inst_17538);
(statearr_17625[10] = inst_17537);
(statearr_17625[11] = inst_17536);
return statearr_17625;
})();var statearr_17626_17664 = state_17597__$1;(statearr_17626_17664[2] = null);
(statearr_17626_17664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 17))
{var inst_17550 = (state_17597[15]);var inst_17559 = cljs.core.first.call(null,inst_17550);var inst_17560 = cljs.core.async.muxch_STAR_.call(null,inst_17559);var inst_17561 = cljs.core.async.close_BANG_.call(null,inst_17560);var inst_17562 = cljs.core.next.call(null,inst_17550);var inst_17536 = inst_17562;var inst_17537 = null;var inst_17538 = 0;var inst_17539 = 0;var state_17597__$1 = (function (){var statearr_17627 = state_17597;(statearr_17627[16] = inst_17561);
(statearr_17627[8] = inst_17539);
(statearr_17627[9] = inst_17538);
(statearr_17627[10] = inst_17537);
(statearr_17627[11] = inst_17536);
return statearr_17627;
})();var statearr_17628_17665 = state_17597__$1;(statearr_17628_17665[2] = null);
(statearr_17628_17665[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 18))
{var inst_17565 = (state_17597[2]);var state_17597__$1 = state_17597;var statearr_17629_17666 = state_17597__$1;(statearr_17629_17666[2] = inst_17565);
(statearr_17629_17666[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 19))
{var state_17597__$1 = state_17597;var statearr_17630_17667 = state_17597__$1;(statearr_17630_17667[2] = null);
(statearr_17630_17667[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 20))
{var state_17597__$1 = state_17597;var statearr_17631_17668 = state_17597__$1;(statearr_17631_17668[2] = null);
(statearr_17631_17668[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 21))
{var inst_17590 = (state_17597[2]);var state_17597__$1 = (function (){var statearr_17632 = state_17597;(statearr_17632[17] = inst_17590);
return statearr_17632;
})();var statearr_17633_17669 = state_17597__$1;(statearr_17633_17669[2] = null);
(statearr_17633_17669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 22))
{var inst_17587 = (state_17597[2]);var state_17597__$1 = state_17597;var statearr_17634_17670 = state_17597__$1;(statearr_17634_17670[2] = inst_17587);
(statearr_17634_17670[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 23))
{var inst_17574 = (state_17597[13]);var inst_17578 = (state_17597[2]);var inst_17579 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17574);var state_17597__$1 = (function (){var statearr_17635 = state_17597;(statearr_17635[18] = inst_17578);
return statearr_17635;
})();var statearr_17636_17671 = state_17597__$1;(statearr_17636_17671[2] = inst_17579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17597__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17598 === 24))
{var inst_17526 = (state_17597[7]);var inst_17576 = (state_17597[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17597,23,Object,null,22);var inst_17583 = cljs.core.async.muxch_STAR_.call(null,inst_17576);var state_17597__$1 = state_17597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17597__$1,25,inst_17583,inst_17526);
} else
{if((state_val_17598 === 25))
{var inst_17585 = (state_17597[2]);var state_17597__$1 = state_17597;var statearr_17637_17672 = state_17597__$1;(statearr_17637_17672[2] = inst_17585);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17597__$1);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_17641 = (new Array(19));(statearr_17641[0] = state_machine__11054__auto__);
(statearr_17641[1] = 1);
return statearr_17641;
});
var state_machine__11054__auto____1 = (function (state_17597){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_17597);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e17642){if((e17642 instanceof Object))
{var ex__11057__auto__ = e17642;var statearr_17643_17673 = state_17597;(statearr_17643_17673[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17674 = state_17597;
state_17597 = G__17674;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_17597){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_17597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_17644 = f__11142__auto__.call(null);(statearr_17644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___17645);
return statearr_17644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
,cljs.core.range.call(null,cnt));var c__11141__auto___17811 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_17781){var state_val_17782 = (state_17781[1]);if((state_val_17782 === 1))
{var state_17781__$1 = state_17781;var statearr_17783_17812 = state_17781__$1;(statearr_17783_17812[2] = null);
(statearr_17783_17812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 2))
{var inst_17744 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17745 = 0;var state_17781__$1 = (function (){var statearr_17784 = state_17781;(statearr_17784[7] = inst_17745);
(statearr_17784[8] = inst_17744);
return statearr_17784;
})();var statearr_17785_17813 = state_17781__$1;(statearr_17785_17813[2] = null);
(statearr_17785_17813[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 3))
{var inst_17779 = (state_17781[2]);var state_17781__$1 = state_17781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17781__$1,inst_17779);
} else
{if((state_val_17782 === 4))
{var inst_17745 = (state_17781[7]);var inst_17747 = (inst_17745 < cnt);var state_17781__$1 = state_17781;if(cljs.core.truth_(inst_17747))
{var statearr_17786_17814 = state_17781__$1;(statearr_17786_17814[1] = 6);
} else
{var statearr_17787_17815 = state_17781__$1;(statearr_17787_17815[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 5))
{var inst_17765 = (state_17781[2]);var state_17781__$1 = (function (){var statearr_17788 = state_17781;(statearr_17788[9] = inst_17765);
return statearr_17788;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17781__$1,12,dchan);
} else
{if((state_val_17782 === 6))
{var state_17781__$1 = state_17781;var statearr_17789_17816 = state_17781__$1;(statearr_17789_17816[2] = null);
(statearr_17789_17816[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 7))
{var state_17781__$1 = state_17781;var statearr_17790_17817 = state_17781__$1;(statearr_17790_17817[2] = null);
(statearr_17790_17817[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 8))
{var inst_17763 = (state_17781[2]);var state_17781__$1 = state_17781;var statearr_17791_17818 = state_17781__$1;(statearr_17791_17818[2] = inst_17763);
(statearr_17791_17818[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 9))
{var inst_17745 = (state_17781[7]);var inst_17758 = (state_17781[2]);var inst_17759 = (inst_17745 + 1);var inst_17745__$1 = inst_17759;var state_17781__$1 = (function (){var statearr_17792 = state_17781;(statearr_17792[10] = inst_17758);
(statearr_17792[7] = inst_17745__$1);
return statearr_17792;
})();var statearr_17793_17819 = state_17781__$1;(statearr_17793_17819[2] = null);
(statearr_17793_17819[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 10))
{var inst_17749 = (state_17781[2]);var inst_17750 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17781__$1 = (function (){var statearr_17794 = state_17781;(statearr_17794[11] = inst_17749);
return statearr_17794;
})();var statearr_17795_17820 = state_17781__$1;(statearr_17795_17820[2] = inst_17750);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17781__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 11))
{var inst_17745 = (state_17781[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17781,10,Object,null,9);var inst_17754 = chs__$1.call(null,inst_17745);var inst_17755 = done.call(null,inst_17745);var inst_17756 = cljs.core.async.take_BANG_.call(null,inst_17754,inst_17755);var state_17781__$1 = state_17781;var statearr_17796_17821 = state_17781__$1;(statearr_17796_17821[2] = inst_17756);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17781__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 12))
{var inst_17767 = (state_17781[12]);var inst_17767__$1 = (state_17781[2]);var inst_17768 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17767__$1);var state_17781__$1 = (function (){var statearr_17797 = state_17781;(statearr_17797[12] = inst_17767__$1);
return statearr_17797;
})();if(cljs.core.truth_(inst_17768))
{var statearr_17798_17822 = state_17781__$1;(statearr_17798_17822[1] = 13);
} else
{var statearr_17799_17823 = state_17781__$1;(statearr_17799_17823[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 13))
{var inst_17770 = cljs.core.async.close_BANG_.call(null,out);var state_17781__$1 = state_17781;var statearr_17800_17824 = state_17781__$1;(statearr_17800_17824[2] = inst_17770);
(statearr_17800_17824[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 14))
{var inst_17767 = (state_17781[12]);var inst_17772 = cljs.core.apply.call(null,f,inst_17767);var state_17781__$1 = state_17781;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17781__$1,16,out,inst_17772);
} else
{if((state_val_17782 === 15))
{var inst_17777 = (state_17781[2]);var state_17781__$1 = state_17781;var statearr_17801_17825 = state_17781__$1;(statearr_17801_17825[2] = inst_17777);
(statearr_17801_17825[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17782 === 16))
{var inst_17774 = (state_17781[2]);var state_17781__$1 = (function (){var statearr_17802 = state_17781;(statearr_17802[13] = inst_17774);
return statearr_17802;
})();var statearr_17803_17826 = state_17781__$1;(statearr_17803_17826[2] = null);
(statearr_17803_17826[1] = 2);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_17807 = (new Array(14));(statearr_17807[0] = state_machine__11054__auto__);
(statearr_17807[1] = 1);
return statearr_17807;
});
var state_machine__11054__auto____1 = (function (state_17781){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_17781);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e17808){if((e17808 instanceof Object))
{var ex__11057__auto__ = e17808;var statearr_17809_17827 = state_17781;(statearr_17809_17827[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17781);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17808;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17828 = state_17781;
state_17781 = G__17828;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_17781){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_17781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_17810 = f__11142__auto__.call(null);(statearr_17810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___17811);
return statearr_17810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11141__auto___17936 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_17912){var state_val_17913 = (state_17912[1]);if((state_val_17913 === 1))
{var inst_17883 = cljs.core.vec.call(null,chs);var inst_17884 = inst_17883;var state_17912__$1 = (function (){var statearr_17914 = state_17912;(statearr_17914[7] = inst_17884);
return statearr_17914;
})();var statearr_17915_17937 = state_17912__$1;(statearr_17915_17937[2] = null);
(statearr_17915_17937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17913 === 2))
{var inst_17884 = (state_17912[7]);var inst_17886 = cljs.core.count.call(null,inst_17884);var inst_17887 = (inst_17886 > 0);var state_17912__$1 = state_17912;if(cljs.core.truth_(inst_17887))
{var statearr_17916_17938 = state_17912__$1;(statearr_17916_17938[1] = 4);
} else
{var statearr_17917_17939 = state_17912__$1;(statearr_17917_17939[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17913 === 3))
{var inst_17910 = (state_17912[2]);var state_17912__$1 = state_17912;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17912__$1,inst_17910);
} else
{if((state_val_17913 === 4))
{var inst_17884 = (state_17912[7]);var state_17912__$1 = state_17912;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17912__$1,7,inst_17884);
} else
{if((state_val_17913 === 5))
{var inst_17906 = cljs.core.async.close_BANG_.call(null,out);var state_17912__$1 = state_17912;var statearr_17918_17940 = state_17912__$1;(statearr_17918_17940[2] = inst_17906);
(statearr_17918_17940[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17913 === 6))
{var inst_17908 = (state_17912[2]);var state_17912__$1 = state_17912;var statearr_17919_17941 = state_17912__$1;(statearr_17919_17941[2] = inst_17908);
(statearr_17919_17941[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17913 === 7))
{var inst_17891 = (state_17912[8]);var inst_17892 = (state_17912[9]);var inst_17891__$1 = (state_17912[2]);var inst_17892__$1 = cljs.core.nth.call(null,inst_17891__$1,0,null);var inst_17893 = cljs.core.nth.call(null,inst_17891__$1,1,null);var inst_17894 = (inst_17892__$1 == null);var state_17912__$1 = (function (){var statearr_17920 = state_17912;(statearr_17920[8] = inst_17891__$1);
(statearr_17920[10] = inst_17893);
(statearr_17920[9] = inst_17892__$1);
return statearr_17920;
})();if(cljs.core.truth_(inst_17894))
{var statearr_17921_17942 = state_17912__$1;(statearr_17921_17942[1] = 8);
} else
{var statearr_17922_17943 = state_17912__$1;(statearr_17922_17943[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17913 === 8))
{var inst_17884 = (state_17912[7]);var inst_17891 = (state_17912[8]);var inst_17893 = (state_17912[10]);var inst_17892 = (state_17912[9]);var inst_17896 = (function (){var c = inst_17893;var v = inst_17892;var vec__17889 = inst_17891;var cs = inst_17884;return ((function (c,v,vec__17889,cs,inst_17884,inst_17891,inst_17893,inst_17892,state_val_17913){
return (function (p1__17829_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17829_SHARP_);
});
;})(c,v,vec__17889,cs,inst_17884,inst_17891,inst_17893,inst_17892,state_val_17913))
})();var inst_17897 = cljs.core.filterv.call(null,inst_17896,inst_17884);var inst_17884__$1 = inst_17897;var state_17912__$1 = (function (){var statearr_17923 = state_17912;(statearr_17923[7] = inst_17884__$1);
return statearr_17923;
})();var statearr_17924_17944 = state_17912__$1;(statearr_17924_17944[2] = null);
(statearr_17924_17944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17913 === 9))
{var inst_17892 = (state_17912[9]);var state_17912__$1 = state_17912;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17912__$1,11,out,inst_17892);
} else
{if((state_val_17913 === 10))
{var inst_17904 = (state_17912[2]);var state_17912__$1 = state_17912;var statearr_17926_17945 = state_17912__$1;(statearr_17926_17945[2] = inst_17904);
(statearr_17926_17945[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17913 === 11))
{var inst_17884 = (state_17912[7]);var inst_17901 = (state_17912[2]);var tmp17925 = inst_17884;var inst_17884__$1 = tmp17925;var state_17912__$1 = (function (){var statearr_17927 = state_17912;(statearr_17927[7] = inst_17884__$1);
(statearr_17927[11] = inst_17901);
return statearr_17927;
})();var statearr_17928_17946 = state_17912__$1;(statearr_17928_17946[2] = null);
(statearr_17928_17946[1] = 2);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_17932 = (new Array(12));(statearr_17932[0] = state_machine__11054__auto__);
(statearr_17932[1] = 1);
return statearr_17932;
});
var state_machine__11054__auto____1 = (function (state_17912){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_17912);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e17933){if((e17933 instanceof Object))
{var ex__11057__auto__ = e17933;var statearr_17934_17947 = state_17912;(statearr_17934_17947[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17912);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17933;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17948 = state_17912;
state_17912 = G__17948;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_17912){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_17912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_17935 = f__11142__auto__.call(null);(statearr_17935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___17936);
return statearr_17935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11141__auto___18041 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_18018){var state_val_18019 = (state_18018[1]);if((state_val_18019 === 1))
{var inst_17995 = 0;var state_18018__$1 = (function (){var statearr_18020 = state_18018;(statearr_18020[7] = inst_17995);
return statearr_18020;
})();var statearr_18021_18042 = state_18018__$1;(statearr_18021_18042[2] = null);
(statearr_18021_18042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18019 === 2))
{var inst_17995 = (state_18018[7]);var inst_17997 = (inst_17995 < n);var state_18018__$1 = state_18018;if(cljs.core.truth_(inst_17997))
{var statearr_18022_18043 = state_18018__$1;(statearr_18022_18043[1] = 4);
} else
{var statearr_18023_18044 = state_18018__$1;(statearr_18023_18044[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18019 === 3))
{var inst_18015 = (state_18018[2]);var inst_18016 = cljs.core.async.close_BANG_.call(null,out);var state_18018__$1 = (function (){var statearr_18024 = state_18018;(statearr_18024[8] = inst_18015);
return statearr_18024;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18018__$1,inst_18016);
} else
{if((state_val_18019 === 4))
{var state_18018__$1 = state_18018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18018__$1,7,ch);
} else
{if((state_val_18019 === 5))
{var state_18018__$1 = state_18018;var statearr_18025_18045 = state_18018__$1;(statearr_18025_18045[2] = null);
(statearr_18025_18045[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18019 === 6))
{var inst_18013 = (state_18018[2]);var state_18018__$1 = state_18018;var statearr_18026_18046 = state_18018__$1;(statearr_18026_18046[2] = inst_18013);
(statearr_18026_18046[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18019 === 7))
{var inst_18000 = (state_18018[9]);var inst_18000__$1 = (state_18018[2]);var inst_18001 = (inst_18000__$1 == null);var inst_18002 = cljs.core.not.call(null,inst_18001);var state_18018__$1 = (function (){var statearr_18027 = state_18018;(statearr_18027[9] = inst_18000__$1);
return statearr_18027;
})();if(inst_18002)
{var statearr_18028_18047 = state_18018__$1;(statearr_18028_18047[1] = 8);
} else
{var statearr_18029_18048 = state_18018__$1;(statearr_18029_18048[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18019 === 8))
{var inst_18000 = (state_18018[9]);var state_18018__$1 = state_18018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18018__$1,11,out,inst_18000);
} else
{if((state_val_18019 === 9))
{var state_18018__$1 = state_18018;var statearr_18030_18049 = state_18018__$1;(statearr_18030_18049[2] = null);
(statearr_18030_18049[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18019 === 10))
{var inst_18010 = (state_18018[2]);var state_18018__$1 = state_18018;var statearr_18031_18050 = state_18018__$1;(statearr_18031_18050[2] = inst_18010);
(statearr_18031_18050[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18019 === 11))
{var inst_17995 = (state_18018[7]);var inst_18005 = (state_18018[2]);var inst_18006 = (inst_17995 + 1);var inst_17995__$1 = inst_18006;var state_18018__$1 = (function (){var statearr_18032 = state_18018;(statearr_18032[7] = inst_17995__$1);
(statearr_18032[10] = inst_18005);
return statearr_18032;
})();var statearr_18033_18051 = state_18018__$1;(statearr_18033_18051[2] = null);
(statearr_18033_18051[1] = 2);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_18037 = (new Array(11));(statearr_18037[0] = state_machine__11054__auto__);
(statearr_18037[1] = 1);
return statearr_18037;
});
var state_machine__11054__auto____1 = (function (state_18018){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_18018);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e18038){if((e18038 instanceof Object))
{var ex__11057__auto__ = e18038;var statearr_18039_18052 = state_18018;(statearr_18039_18052[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18018);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18053 = state_18018;
state_18018 = G__18053;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_18018){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_18018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_18040 = f__11142__auto__.call(null);(statearr_18040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___18041);
return statearr_18040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11141__auto___18150 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_18125){var state_val_18126 = (state_18125[1]);if((state_val_18126 === 1))
{var inst_18102 = null;var state_18125__$1 = (function (){var statearr_18127 = state_18125;(statearr_18127[7] = inst_18102);
return statearr_18127;
})();var statearr_18128_18151 = state_18125__$1;(statearr_18128_18151[2] = null);
(statearr_18128_18151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18126 === 2))
{var state_18125__$1 = state_18125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18125__$1,4,ch);
} else
{if((state_val_18126 === 3))
{var inst_18122 = (state_18125[2]);var inst_18123 = cljs.core.async.close_BANG_.call(null,out);var state_18125__$1 = (function (){var statearr_18129 = state_18125;(statearr_18129[8] = inst_18122);
return statearr_18129;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18125__$1,inst_18123);
} else
{if((state_val_18126 === 4))
{var inst_18105 = (state_18125[9]);var inst_18105__$1 = (state_18125[2]);var inst_18106 = (inst_18105__$1 == null);var inst_18107 = cljs.core.not.call(null,inst_18106);var state_18125__$1 = (function (){var statearr_18130 = state_18125;(statearr_18130[9] = inst_18105__$1);
return statearr_18130;
})();if(inst_18107)
{var statearr_18131_18152 = state_18125__$1;(statearr_18131_18152[1] = 5);
} else
{var statearr_18132_18153 = state_18125__$1;(statearr_18132_18153[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18126 === 5))
{var inst_18105 = (state_18125[9]);var inst_18102 = (state_18125[7]);var inst_18109 = cljs.core._EQ_.call(null,inst_18105,inst_18102);var state_18125__$1 = state_18125;if(inst_18109)
{var statearr_18133_18154 = state_18125__$1;(statearr_18133_18154[1] = 8);
} else
{var statearr_18134_18155 = state_18125__$1;(statearr_18134_18155[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18126 === 6))
{var state_18125__$1 = state_18125;var statearr_18136_18156 = state_18125__$1;(statearr_18136_18156[2] = null);
(statearr_18136_18156[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18126 === 7))
{var inst_18120 = (state_18125[2]);var state_18125__$1 = state_18125;var statearr_18137_18157 = state_18125__$1;(statearr_18137_18157[2] = inst_18120);
(statearr_18137_18157[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18126 === 8))
{var inst_18102 = (state_18125[7]);var tmp18135 = inst_18102;var inst_18102__$1 = tmp18135;var state_18125__$1 = (function (){var statearr_18138 = state_18125;(statearr_18138[7] = inst_18102__$1);
return statearr_18138;
})();var statearr_18139_18158 = state_18125__$1;(statearr_18139_18158[2] = null);
(statearr_18139_18158[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18126 === 9))
{var inst_18105 = (state_18125[9]);var state_18125__$1 = state_18125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18125__$1,11,out,inst_18105);
} else
{if((state_val_18126 === 10))
{var inst_18117 = (state_18125[2]);var state_18125__$1 = state_18125;var statearr_18140_18159 = state_18125__$1;(statearr_18140_18159[2] = inst_18117);
(statearr_18140_18159[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18126 === 11))
{var inst_18105 = (state_18125[9]);var inst_18114 = (state_18125[2]);var inst_18102 = inst_18105;var state_18125__$1 = (function (){var statearr_18141 = state_18125;(statearr_18141[7] = inst_18102);
(statearr_18141[10] = inst_18114);
return statearr_18141;
})();var statearr_18142_18160 = state_18125__$1;(statearr_18142_18160[2] = null);
(statearr_18142_18160[1] = 2);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_18146 = (new Array(11));(statearr_18146[0] = state_machine__11054__auto__);
(statearr_18146[1] = 1);
return statearr_18146;
});
var state_machine__11054__auto____1 = (function (state_18125){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_18125);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e18147){if((e18147 instanceof Object))
{var ex__11057__auto__ = e18147;var statearr_18148_18161 = state_18125;(statearr_18148_18161[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18147;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18162 = state_18125;
state_18125 = G__18162;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_18125){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_18125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_18149 = f__11142__auto__.call(null);(statearr_18149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___18150);
return statearr_18149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11141__auto___18297 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_18267){var state_val_18268 = (state_18267[1]);if((state_val_18268 === 1))
{var inst_18230 = (new Array(n));var inst_18231 = inst_18230;var inst_18232 = 0;var state_18267__$1 = (function (){var statearr_18269 = state_18267;(statearr_18269[7] = inst_18232);
(statearr_18269[8] = inst_18231);
return statearr_18269;
})();var statearr_18270_18298 = state_18267__$1;(statearr_18270_18298[2] = null);
(statearr_18270_18298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18268 === 2))
{var state_18267__$1 = state_18267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18267__$1,4,ch);
} else
{if((state_val_18268 === 3))
{var inst_18265 = (state_18267[2]);var state_18267__$1 = state_18267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18267__$1,inst_18265);
} else
{if((state_val_18268 === 4))
{var inst_18235 = (state_18267[9]);var inst_18235__$1 = (state_18267[2]);var inst_18236 = (inst_18235__$1 == null);var inst_18237 = cljs.core.not.call(null,inst_18236);var state_18267__$1 = (function (){var statearr_18271 = state_18267;(statearr_18271[9] = inst_18235__$1);
return statearr_18271;
})();if(inst_18237)
{var statearr_18272_18299 = state_18267__$1;(statearr_18272_18299[1] = 5);
} else
{var statearr_18273_18300 = state_18267__$1;(statearr_18273_18300[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18268 === 5))
{var inst_18235 = (state_18267[9]);var inst_18240 = (state_18267[10]);var inst_18232 = (state_18267[7]);var inst_18231 = (state_18267[8]);var inst_18239 = (inst_18231[inst_18232] = inst_18235);var inst_18240__$1 = (inst_18232 + 1);var inst_18241 = (inst_18240__$1 < n);var state_18267__$1 = (function (){var statearr_18274 = state_18267;(statearr_18274[11] = inst_18239);
(statearr_18274[10] = inst_18240__$1);
return statearr_18274;
})();if(cljs.core.truth_(inst_18241))
{var statearr_18275_18301 = state_18267__$1;(statearr_18275_18301[1] = 8);
} else
{var statearr_18276_18302 = state_18267__$1;(statearr_18276_18302[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18268 === 6))
{var inst_18232 = (state_18267[7]);var inst_18253 = (inst_18232 > 0);var state_18267__$1 = state_18267;if(cljs.core.truth_(inst_18253))
{var statearr_18278_18303 = state_18267__$1;(statearr_18278_18303[1] = 12);
} else
{var statearr_18279_18304 = state_18267__$1;(statearr_18279_18304[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18268 === 7))
{var inst_18263 = (state_18267[2]);var state_18267__$1 = state_18267;var statearr_18280_18305 = state_18267__$1;(statearr_18280_18305[2] = inst_18263);
(statearr_18280_18305[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18268 === 8))
{var inst_18240 = (state_18267[10]);var inst_18231 = (state_18267[8]);var tmp18277 = inst_18231;var inst_18231__$1 = tmp18277;var inst_18232 = inst_18240;var state_18267__$1 = (function (){var statearr_18281 = state_18267;(statearr_18281[7] = inst_18232);
(statearr_18281[8] = inst_18231__$1);
return statearr_18281;
})();var statearr_18282_18306 = state_18267__$1;(statearr_18282_18306[2] = null);
(statearr_18282_18306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18268 === 9))
{var inst_18231 = (state_18267[8]);var inst_18245 = cljs.core.vec.call(null,inst_18231);var state_18267__$1 = state_18267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18267__$1,11,out,inst_18245);
} else
{if((state_val_18268 === 10))
{var inst_18251 = (state_18267[2]);var state_18267__$1 = state_18267;var statearr_18283_18307 = state_18267__$1;(statearr_18283_18307[2] = inst_18251);
(statearr_18283_18307[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18268 === 11))
{var inst_18247 = (state_18267[2]);var inst_18248 = (new Array(n));var inst_18231 = inst_18248;var inst_18232 = 0;var state_18267__$1 = (function (){var statearr_18284 = state_18267;(statearr_18284[12] = inst_18247);
(statearr_18284[7] = inst_18232);
(statearr_18284[8] = inst_18231);
return statearr_18284;
})();var statearr_18285_18308 = state_18267__$1;(statearr_18285_18308[2] = null);
(statearr_18285_18308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18268 === 12))
{var inst_18231 = (state_18267[8]);var inst_18255 = cljs.core.vec.call(null,inst_18231);var state_18267__$1 = state_18267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18267__$1,15,out,inst_18255);
} else
{if((state_val_18268 === 13))
{var state_18267__$1 = state_18267;var statearr_18286_18309 = state_18267__$1;(statearr_18286_18309[2] = null);
(statearr_18286_18309[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18268 === 14))
{var inst_18260 = (state_18267[2]);var inst_18261 = cljs.core.async.close_BANG_.call(null,out);var state_18267__$1 = (function (){var statearr_18287 = state_18267;(statearr_18287[13] = inst_18260);
return statearr_18287;
})();var statearr_18288_18310 = state_18267__$1;(statearr_18288_18310[2] = inst_18261);
(statearr_18288_18310[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18268 === 15))
{var inst_18257 = (state_18267[2]);var state_18267__$1 = state_18267;var statearr_18289_18311 = state_18267__$1;(statearr_18289_18311[2] = inst_18257);
(statearr_18289_18311[1] = 14);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_18293 = (new Array(14));(statearr_18293[0] = state_machine__11054__auto__);
(statearr_18293[1] = 1);
return statearr_18293;
});
var state_machine__11054__auto____1 = (function (state_18267){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_18267);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e18294){if((e18294 instanceof Object))
{var ex__11057__auto__ = e18294;var statearr_18295_18312 = state_18267;(statearr_18295_18312[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18267);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18294;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18313 = state_18267;
state_18267 = G__18313;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_18267){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_18267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_18296 = f__11142__auto__.call(null);(statearr_18296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___18297);
return statearr_18296;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11141__auto___18456 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11142__auto__ = (function (){var switch__11053__auto__ = (function (state_18426){var state_val_18427 = (state_18426[1]);if((state_val_18427 === 1))
{var inst_18385 = (new Array(0));var inst_18386 = inst_18385;var inst_18387 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18426__$1 = (function (){var statearr_18428 = state_18426;(statearr_18428[7] = inst_18386);
(statearr_18428[8] = inst_18387);
return statearr_18428;
})();var statearr_18429_18457 = state_18426__$1;(statearr_18429_18457[2] = null);
(statearr_18429_18457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18427 === 2))
{var state_18426__$1 = state_18426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18426__$1,4,ch);
} else
{if((state_val_18427 === 3))
{var inst_18424 = (state_18426[2]);var state_18426__$1 = state_18426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18426__$1,inst_18424);
} else
{if((state_val_18427 === 4))
{var inst_18390 = (state_18426[9]);var inst_18390__$1 = (state_18426[2]);var inst_18391 = (inst_18390__$1 == null);var inst_18392 = cljs.core.not.call(null,inst_18391);var state_18426__$1 = (function (){var statearr_18430 = state_18426;(statearr_18430[9] = inst_18390__$1);
return statearr_18430;
})();if(inst_18392)
{var statearr_18431_18458 = state_18426__$1;(statearr_18431_18458[1] = 5);
} else
{var statearr_18432_18459 = state_18426__$1;(statearr_18432_18459[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18427 === 5))
{var inst_18390 = (state_18426[9]);var inst_18394 = (state_18426[10]);var inst_18387 = (state_18426[8]);var inst_18394__$1 = f.call(null,inst_18390);var inst_18395 = cljs.core._EQ_.call(null,inst_18394__$1,inst_18387);var inst_18396 = cljs.core.keyword_identical_QMARK_.call(null,inst_18387,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18397 = (inst_18395) || (inst_18396);var state_18426__$1 = (function (){var statearr_18433 = state_18426;(statearr_18433[10] = inst_18394__$1);
return statearr_18433;
})();if(cljs.core.truth_(inst_18397))
{var statearr_18434_18460 = state_18426__$1;(statearr_18434_18460[1] = 8);
} else
{var statearr_18435_18461 = state_18426__$1;(statearr_18435_18461[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18427 === 6))
{var inst_18386 = (state_18426[7]);var inst_18411 = inst_18386.length;var inst_18412 = (inst_18411 > 0);var state_18426__$1 = state_18426;if(cljs.core.truth_(inst_18412))
{var statearr_18437_18462 = state_18426__$1;(statearr_18437_18462[1] = 12);
} else
{var statearr_18438_18463 = state_18426__$1;(statearr_18438_18463[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18427 === 7))
{var inst_18422 = (state_18426[2]);var state_18426__$1 = state_18426;var statearr_18439_18464 = state_18426__$1;(statearr_18439_18464[2] = inst_18422);
(statearr_18439_18464[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18427 === 8))
{var inst_18390 = (state_18426[9]);var inst_18394 = (state_18426[10]);var inst_18386 = (state_18426[7]);var inst_18399 = inst_18386.push(inst_18390);var tmp18436 = inst_18386;var inst_18386__$1 = tmp18436;var inst_18387 = inst_18394;var state_18426__$1 = (function (){var statearr_18440 = state_18426;(statearr_18440[7] = inst_18386__$1);
(statearr_18440[8] = inst_18387);
(statearr_18440[11] = inst_18399);
return statearr_18440;
})();var statearr_18441_18465 = state_18426__$1;(statearr_18441_18465[2] = null);
(statearr_18441_18465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18427 === 9))
{var inst_18386 = (state_18426[7]);var inst_18402 = cljs.core.vec.call(null,inst_18386);var state_18426__$1 = state_18426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18426__$1,11,out,inst_18402);
} else
{if((state_val_18427 === 10))
{var inst_18409 = (state_18426[2]);var state_18426__$1 = state_18426;var statearr_18442_18466 = state_18426__$1;(statearr_18442_18466[2] = inst_18409);
(statearr_18442_18466[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18427 === 11))
{var inst_18390 = (state_18426[9]);var inst_18394 = (state_18426[10]);var inst_18404 = (state_18426[2]);var inst_18405 = (new Array(0));var inst_18406 = inst_18405.push(inst_18390);var inst_18386 = inst_18405;var inst_18387 = inst_18394;var state_18426__$1 = (function (){var statearr_18443 = state_18426;(statearr_18443[12] = inst_18406);
(statearr_18443[13] = inst_18404);
(statearr_18443[7] = inst_18386);
(statearr_18443[8] = inst_18387);
return statearr_18443;
})();var statearr_18444_18467 = state_18426__$1;(statearr_18444_18467[2] = null);
(statearr_18444_18467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18427 === 12))
{var inst_18386 = (state_18426[7]);var inst_18414 = cljs.core.vec.call(null,inst_18386);var state_18426__$1 = state_18426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18426__$1,15,out,inst_18414);
} else
{if((state_val_18427 === 13))
{var state_18426__$1 = state_18426;var statearr_18445_18468 = state_18426__$1;(statearr_18445_18468[2] = null);
(statearr_18445_18468[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18427 === 14))
{var inst_18419 = (state_18426[2]);var inst_18420 = cljs.core.async.close_BANG_.call(null,out);var state_18426__$1 = (function (){var statearr_18446 = state_18426;(statearr_18446[14] = inst_18419);
return statearr_18446;
})();var statearr_18447_18469 = state_18426__$1;(statearr_18447_18469[2] = inst_18420);
(statearr_18447_18469[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18427 === 15))
{var inst_18416 = (state_18426[2]);var state_18426__$1 = state_18426;var statearr_18448_18470 = state_18426__$1;(statearr_18448_18470[2] = inst_18416);
(statearr_18448_18470[1] = 14);
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
});return ((function (switch__11053__auto__){
return (function() {
var state_machine__11054__auto__ = null;
var state_machine__11054__auto____0 = (function (){var statearr_18452 = (new Array(15));(statearr_18452[0] = state_machine__11054__auto__);
(statearr_18452[1] = 1);
return statearr_18452;
});
var state_machine__11054__auto____1 = (function (state_18426){while(true){
var ret_value__11055__auto__ = (function (){try{while(true){
var result__11056__auto__ = switch__11053__auto__.call(null,state_18426);if(cljs.core.keyword_identical_QMARK_.call(null,result__11056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11056__auto__;
}
break;
}
}catch (e18453){if((e18453 instanceof Object))
{var ex__11057__auto__ = e18453;var statearr_18454_18471 = state_18426;(statearr_18454_18471[5] = ex__11057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18472 = state_18426;
state_18426 = G__18472;
continue;
}
} else
{return ret_value__11055__auto__;
}
break;
}
});
state_machine__11054__auto__ = function(state_18426){
switch(arguments.length){
case 0:
return state_machine__11054__auto____0.call(this);
case 1:
return state_machine__11054__auto____1.call(this,state_18426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11054__auto____0;
state_machine__11054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11054__auto____1;
return state_machine__11054__auto__;
})()
;})(switch__11053__auto__))
})();var state__11143__auto__ = (function (){var statearr_18455 = f__11142__auto__.call(null);(statearr_18455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11141__auto___18456);
return statearr_18455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11143__auto__);
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
