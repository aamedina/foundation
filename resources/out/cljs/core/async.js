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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t88174 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88174 = (function (f,fn_handler,meta88175){
this.f = f;
this.fn_handler = fn_handler;
this.meta88175 = meta88175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88174.cljs$lang$type = true;
cljs.core.async.t88174.cljs$lang$ctorStr = "cljs.core.async/t88174";
cljs.core.async.t88174.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t88174");
});
cljs.core.async.t88174.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t88174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t88174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t88174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88176){var self__ = this;
var _88176__$1 = this;return self__.meta88175;
});
cljs.core.async.t88174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88176,meta88175__$1){var self__ = this;
var _88176__$1 = this;return (new cljs.core.async.t88174(self__.f,self__.fn_handler,meta88175__$1));
});
cljs.core.async.__GT_t88174 = (function __GT_t88174(f__$1,fn_handler__$1,meta88175){return (new cljs.core.async.t88174(f__$1,fn_handler__$1,meta88175));
});
}
return (new cljs.core.async.t88174(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__88178 = buff;if(G__88178)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__88178.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__88178.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__88178);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__88178);
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
{var val_88179 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_88179);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_88179);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14648__auto___88180 = n;var x_88181 = 0;while(true){
if((x_88181 < n__14648__auto___88180))
{(a[x_88181] = 0);
{
var G__88182 = (x_88181 + 1);
x_88181 = G__88182;
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
var G__88183 = (i + 1);
i = G__88183;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t88187 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88187 = (function (flag,alt_flag,meta88188){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta88188 = meta88188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88187.cljs$lang$type = true;
cljs.core.async.t88187.cljs$lang$ctorStr = "cljs.core.async/t88187";
cljs.core.async.t88187.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t88187");
});
cljs.core.async.t88187.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t88187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t88187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t88187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88189){var self__ = this;
var _88189__$1 = this;return self__.meta88188;
});
cljs.core.async.t88187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88189,meta88188__$1){var self__ = this;
var _88189__$1 = this;return (new cljs.core.async.t88187(self__.flag,self__.alt_flag,meta88188__$1));
});
cljs.core.async.__GT_t88187 = (function __GT_t88187(flag__$1,alt_flag__$1,meta88188){return (new cljs.core.async.t88187(flag__$1,alt_flag__$1,meta88188));
});
}
return (new cljs.core.async.t88187(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t88193 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88193 = (function (cb,flag,alt_handler,meta88194){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta88194 = meta88194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88193.cljs$lang$type = true;
cljs.core.async.t88193.cljs$lang$ctorStr = "cljs.core.async/t88193";
cljs.core.async.t88193.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t88193");
});
cljs.core.async.t88193.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t88193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t88193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t88193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88195){var self__ = this;
var _88195__$1 = this;return self__.meta88194;
});
cljs.core.async.t88193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88195,meta88194__$1){var self__ = this;
var _88195__$1 = this;return (new cljs.core.async.t88193(self__.cb,self__.flag,self__.alt_handler,meta88194__$1));
});
cljs.core.async.__GT_t88193 = (function __GT_t88193(cb__$1,flag__$1,alt_handler__$1,meta88194){return (new cljs.core.async.t88193(cb__$1,flag__$1,alt_handler__$1,meta88194));
});
}
return (new cljs.core.async.t88193(cb,flag,alt_handler,null));
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
return (function (p1__88196_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__88196_SHARP_,port], null));
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
var G__88197 = (i + 1);
i = G__88197;
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
var alts_BANG___delegate = function (ports,p__88198){var map__88200 = p__88198;var map__88200__$1 = ((cljs.core.seq_QMARK_.call(null,map__88200))?cljs.core.apply.call(null,cljs.core.hash_map,map__88200):map__88200);var opts = map__88200__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__88198 = null;if (arguments.length > 1) {
  p__88198 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__88198);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__88201){
var ports = cljs.core.first(arglist__88201);
var p__88198 = cljs.core.rest(arglist__88201);
return alts_BANG___delegate(ports,p__88198);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t88209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88209 = (function (ch,f,map_LT_,meta88210){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta88210 = meta88210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88209.cljs$lang$type = true;
cljs.core.async.t88209.cljs$lang$ctorStr = "cljs.core.async/t88209";
cljs.core.async.t88209.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t88209");
});
cljs.core.async.t88209.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t88209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t88209.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t88209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t88212 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88212 = (function (fn1,_,meta88210,ch,f,map_LT_,meta88213){
this.fn1 = fn1;
this._ = _;
this.meta88210 = meta88210;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta88213 = meta88213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88212.cljs$lang$type = true;
cljs.core.async.t88212.cljs$lang$ctorStr = "cljs.core.async/t88212";
cljs.core.async.t88212.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t88212");
});
cljs.core.async.t88212.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t88212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t88212.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t88212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__88202_SHARP_){return f1.call(null,(((p1__88202_SHARP_ == null))?null:self__.f.call(null,p1__88202_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t88212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88214){var self__ = this;
var _88214__$1 = this;return self__.meta88213;
});
cljs.core.async.t88212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88214,meta88213__$1){var self__ = this;
var _88214__$1 = this;return (new cljs.core.async.t88212(self__.fn1,self__._,self__.meta88210,self__.ch,self__.f,self__.map_LT_,meta88213__$1));
});
cljs.core.async.__GT_t88212 = (function __GT_t88212(fn1__$1,___$2,meta88210__$1,ch__$2,f__$2,map_LT___$2,meta88213){return (new cljs.core.async.t88212(fn1__$1,___$2,meta88210__$1,ch__$2,f__$2,map_LT___$2,meta88213));
});
}
return (new cljs.core.async.t88212(fn1,___$1,self__.meta88210,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t88209.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t88209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t88209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88211){var self__ = this;
var _88211__$1 = this;return self__.meta88210;
});
cljs.core.async.t88209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88211,meta88210__$1){var self__ = this;
var _88211__$1 = this;return (new cljs.core.async.t88209(self__.ch,self__.f,self__.map_LT_,meta88210__$1));
});
cljs.core.async.__GT_t88209 = (function __GT_t88209(ch__$1,f__$1,map_LT___$1,meta88210){return (new cljs.core.async.t88209(ch__$1,f__$1,map_LT___$1,meta88210));
});
}
return (new cljs.core.async.t88209(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t88218 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88218 = (function (ch,f,map_GT_,meta88219){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta88219 = meta88219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88218.cljs$lang$type = true;
cljs.core.async.t88218.cljs$lang$ctorStr = "cljs.core.async/t88218";
cljs.core.async.t88218.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t88218");
});
cljs.core.async.t88218.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t88218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t88218.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t88218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t88218.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t88218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t88218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88220){var self__ = this;
var _88220__$1 = this;return self__.meta88219;
});
cljs.core.async.t88218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88220,meta88219__$1){var self__ = this;
var _88220__$1 = this;return (new cljs.core.async.t88218(self__.ch,self__.f,self__.map_GT_,meta88219__$1));
});
cljs.core.async.__GT_t88218 = (function __GT_t88218(ch__$1,f__$1,map_GT___$1,meta88219){return (new cljs.core.async.t88218(ch__$1,f__$1,map_GT___$1,meta88219));
});
}
return (new cljs.core.async.t88218(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t88224 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88224 = (function (ch,p,filter_GT_,meta88225){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta88225 = meta88225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88224.cljs$lang$type = true;
cljs.core.async.t88224.cljs$lang$ctorStr = "cljs.core.async/t88224";
cljs.core.async.t88224.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t88224");
});
cljs.core.async.t88224.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t88224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t88224.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t88224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t88224.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t88224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t88224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88226){var self__ = this;
var _88226__$1 = this;return self__.meta88225;
});
cljs.core.async.t88224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88226,meta88225__$1){var self__ = this;
var _88226__$1 = this;return (new cljs.core.async.t88224(self__.ch,self__.p,self__.filter_GT_,meta88225__$1));
});
cljs.core.async.__GT_t88224 = (function __GT_t88224(ch__$1,p__$1,filter_GT___$1,meta88225){return (new cljs.core.async.t88224(ch__$1,p__$1,filter_GT___$1,meta88225));
});
}
return (new cljs.core.async.t88224(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___88309 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_88288){var state_val_88289 = (state_88288[1]);if((state_val_88289 === 1))
{var state_88288__$1 = state_88288;var statearr_88290_88310 = state_88288__$1;(statearr_88290_88310[2] = null);
(statearr_88290_88310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88289 === 2))
{var state_88288__$1 = state_88288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88288__$1,4,ch);
} else
{if((state_val_88289 === 3))
{var inst_88286 = (state_88288[2]);var state_88288__$1 = state_88288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88288__$1,inst_88286);
} else
{if((state_val_88289 === 4))
{var inst_88270 = (state_88288[7]);var inst_88270__$1 = (state_88288[2]);var inst_88271 = (inst_88270__$1 == null);var state_88288__$1 = (function (){var statearr_88291 = state_88288;(statearr_88291[7] = inst_88270__$1);
return statearr_88291;
})();if(cljs.core.truth_(inst_88271))
{var statearr_88292_88311 = state_88288__$1;(statearr_88292_88311[1] = 5);
} else
{var statearr_88293_88312 = state_88288__$1;(statearr_88293_88312[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88289 === 5))
{var inst_88273 = cljs.core.async.close_BANG_.call(null,out);var state_88288__$1 = state_88288;var statearr_88294_88313 = state_88288__$1;(statearr_88294_88313[2] = inst_88273);
(statearr_88294_88313[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88289 === 6))
{var inst_88270 = (state_88288[7]);var inst_88275 = p.call(null,inst_88270);var state_88288__$1 = state_88288;if(cljs.core.truth_(inst_88275))
{var statearr_88295_88314 = state_88288__$1;(statearr_88295_88314[1] = 8);
} else
{var statearr_88296_88315 = state_88288__$1;(statearr_88296_88315[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88289 === 7))
{var inst_88284 = (state_88288[2]);var state_88288__$1 = state_88288;var statearr_88297_88316 = state_88288__$1;(statearr_88297_88316[2] = inst_88284);
(statearr_88297_88316[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88289 === 8))
{var inst_88270 = (state_88288[7]);var state_88288__$1 = state_88288;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88288__$1,11,out,inst_88270);
} else
{if((state_val_88289 === 9))
{var state_88288__$1 = state_88288;var statearr_88298_88317 = state_88288__$1;(statearr_88298_88317[2] = null);
(statearr_88298_88317[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88289 === 10))
{var inst_88281 = (state_88288[2]);var state_88288__$1 = (function (){var statearr_88299 = state_88288;(statearr_88299[8] = inst_88281);
return statearr_88299;
})();var statearr_88300_88318 = state_88288__$1;(statearr_88300_88318[2] = null);
(statearr_88300_88318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88289 === 11))
{var inst_88278 = (state_88288[2]);var state_88288__$1 = state_88288;var statearr_88301_88319 = state_88288__$1;(statearr_88301_88319[2] = inst_88278);
(statearr_88301_88319[1] = 10);
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
var state_machine__18769__auto____0 = (function (){var statearr_88305 = (new Array(9));(statearr_88305[0] = state_machine__18769__auto__);
(statearr_88305[1] = 1);
return statearr_88305;
});
var state_machine__18769__auto____1 = (function (state_88288){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_88288);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e88306){if((e88306 instanceof Object))
{var ex__18772__auto__ = e88306;var statearr_88307_88320 = state_88288;(statearr_88307_88320[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88288);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88321 = state_88288;
state_88288 = G__88321;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_88288){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_88288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_88308 = f__18839__auto__.call(null);(statearr_88308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___88309);
return statearr_88308;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_88473){var state_val_88474 = (state_88473[1]);if((state_val_88474 === 1))
{var state_88473__$1 = state_88473;var statearr_88475_88512 = state_88473__$1;(statearr_88475_88512[2] = null);
(statearr_88475_88512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 2))
{var state_88473__$1 = state_88473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88473__$1,4,in$);
} else
{if((state_val_88474 === 3))
{var inst_88471 = (state_88473[2]);var state_88473__$1 = state_88473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88473__$1,inst_88471);
} else
{if((state_val_88474 === 4))
{var inst_88419 = (state_88473[7]);var inst_88419__$1 = (state_88473[2]);var inst_88420 = (inst_88419__$1 == null);var state_88473__$1 = (function (){var statearr_88476 = state_88473;(statearr_88476[7] = inst_88419__$1);
return statearr_88476;
})();if(cljs.core.truth_(inst_88420))
{var statearr_88477_88513 = state_88473__$1;(statearr_88477_88513[1] = 5);
} else
{var statearr_88478_88514 = state_88473__$1;(statearr_88478_88514[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 5))
{var inst_88422 = cljs.core.async.close_BANG_.call(null,out);var state_88473__$1 = state_88473;var statearr_88479_88515 = state_88473__$1;(statearr_88479_88515[2] = inst_88422);
(statearr_88479_88515[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 6))
{var inst_88419 = (state_88473[7]);var inst_88424 = f.call(null,inst_88419);var inst_88429 = cljs.core.seq.call(null,inst_88424);var inst_88430 = inst_88429;var inst_88431 = null;var inst_88432 = 0;var inst_88433 = 0;var state_88473__$1 = (function (){var statearr_88480 = state_88473;(statearr_88480[8] = inst_88433);
(statearr_88480[9] = inst_88432);
(statearr_88480[10] = inst_88431);
(statearr_88480[11] = inst_88430);
return statearr_88480;
})();var statearr_88481_88516 = state_88473__$1;(statearr_88481_88516[2] = null);
(statearr_88481_88516[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 7))
{var inst_88469 = (state_88473[2]);var state_88473__$1 = state_88473;var statearr_88482_88517 = state_88473__$1;(statearr_88482_88517[2] = inst_88469);
(statearr_88482_88517[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 8))
{var inst_88433 = (state_88473[8]);var inst_88432 = (state_88473[9]);var inst_88435 = (inst_88433 < inst_88432);var inst_88436 = inst_88435;var state_88473__$1 = state_88473;if(cljs.core.truth_(inst_88436))
{var statearr_88483_88518 = state_88473__$1;(statearr_88483_88518[1] = 10);
} else
{var statearr_88484_88519 = state_88473__$1;(statearr_88484_88519[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 9))
{var inst_88466 = (state_88473[2]);var state_88473__$1 = (function (){var statearr_88485 = state_88473;(statearr_88485[12] = inst_88466);
return statearr_88485;
})();var statearr_88486_88520 = state_88473__$1;(statearr_88486_88520[2] = null);
(statearr_88486_88520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 10))
{var inst_88433 = (state_88473[8]);var inst_88431 = (state_88473[10]);var inst_88438 = cljs.core._nth.call(null,inst_88431,inst_88433);var state_88473__$1 = state_88473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88473__$1,13,out,inst_88438);
} else
{if((state_val_88474 === 11))
{var inst_88444 = (state_88473[13]);var inst_88430 = (state_88473[11]);var inst_88444__$1 = cljs.core.seq.call(null,inst_88430);var state_88473__$1 = (function (){var statearr_88490 = state_88473;(statearr_88490[13] = inst_88444__$1);
return statearr_88490;
})();if(inst_88444__$1)
{var statearr_88491_88521 = state_88473__$1;(statearr_88491_88521[1] = 14);
} else
{var statearr_88492_88522 = state_88473__$1;(statearr_88492_88522[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 12))
{var inst_88464 = (state_88473[2]);var state_88473__$1 = state_88473;var statearr_88493_88523 = state_88473__$1;(statearr_88493_88523[2] = inst_88464);
(statearr_88493_88523[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 13))
{var inst_88433 = (state_88473[8]);var inst_88432 = (state_88473[9]);var inst_88431 = (state_88473[10]);var inst_88430 = (state_88473[11]);var inst_88440 = (state_88473[2]);var inst_88441 = (inst_88433 + 1);var tmp88487 = inst_88432;var tmp88488 = inst_88431;var tmp88489 = inst_88430;var inst_88430__$1 = tmp88489;var inst_88431__$1 = tmp88488;var inst_88432__$1 = tmp88487;var inst_88433__$1 = inst_88441;var state_88473__$1 = (function (){var statearr_88494 = state_88473;(statearr_88494[14] = inst_88440);
(statearr_88494[8] = inst_88433__$1);
(statearr_88494[9] = inst_88432__$1);
(statearr_88494[10] = inst_88431__$1);
(statearr_88494[11] = inst_88430__$1);
return statearr_88494;
})();var statearr_88495_88524 = state_88473__$1;(statearr_88495_88524[2] = null);
(statearr_88495_88524[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 14))
{var inst_88444 = (state_88473[13]);var inst_88446 = cljs.core.chunked_seq_QMARK_.call(null,inst_88444);var state_88473__$1 = state_88473;if(inst_88446)
{var statearr_88496_88525 = state_88473__$1;(statearr_88496_88525[1] = 17);
} else
{var statearr_88497_88526 = state_88473__$1;(statearr_88497_88526[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 15))
{var state_88473__$1 = state_88473;var statearr_88498_88527 = state_88473__$1;(statearr_88498_88527[2] = null);
(statearr_88498_88527[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 16))
{var inst_88462 = (state_88473[2]);var state_88473__$1 = state_88473;var statearr_88499_88528 = state_88473__$1;(statearr_88499_88528[2] = inst_88462);
(statearr_88499_88528[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 17))
{var inst_88444 = (state_88473[13]);var inst_88448 = cljs.core.chunk_first.call(null,inst_88444);var inst_88449 = cljs.core.chunk_rest.call(null,inst_88444);var inst_88450 = cljs.core.count.call(null,inst_88448);var inst_88430 = inst_88449;var inst_88431 = inst_88448;var inst_88432 = inst_88450;var inst_88433 = 0;var state_88473__$1 = (function (){var statearr_88500 = state_88473;(statearr_88500[8] = inst_88433);
(statearr_88500[9] = inst_88432);
(statearr_88500[10] = inst_88431);
(statearr_88500[11] = inst_88430);
return statearr_88500;
})();var statearr_88501_88529 = state_88473__$1;(statearr_88501_88529[2] = null);
(statearr_88501_88529[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 18))
{var inst_88444 = (state_88473[13]);var inst_88453 = cljs.core.first.call(null,inst_88444);var state_88473__$1 = state_88473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88473__$1,20,out,inst_88453);
} else
{if((state_val_88474 === 19))
{var inst_88459 = (state_88473[2]);var state_88473__$1 = state_88473;var statearr_88502_88530 = state_88473__$1;(statearr_88502_88530[2] = inst_88459);
(statearr_88502_88530[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88474 === 20))
{var inst_88444 = (state_88473[13]);var inst_88455 = (state_88473[2]);var inst_88456 = cljs.core.next.call(null,inst_88444);var inst_88430 = inst_88456;var inst_88431 = null;var inst_88432 = 0;var inst_88433 = 0;var state_88473__$1 = (function (){var statearr_88503 = state_88473;(statearr_88503[15] = inst_88455);
(statearr_88503[8] = inst_88433);
(statearr_88503[9] = inst_88432);
(statearr_88503[10] = inst_88431);
(statearr_88503[11] = inst_88430);
return statearr_88503;
})();var statearr_88504_88531 = state_88473__$1;(statearr_88504_88531[2] = null);
(statearr_88504_88531[1] = 8);
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
var state_machine__18769__auto____0 = (function (){var statearr_88508 = (new Array(16));(statearr_88508[0] = state_machine__18769__auto__);
(statearr_88508[1] = 1);
return statearr_88508;
});
var state_machine__18769__auto____1 = (function (state_88473){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_88473);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e88509){if((e88509 instanceof Object))
{var ex__18772__auto__ = e88509;var statearr_88510_88532 = state_88473;(statearr_88510_88532[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88473);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88533 = state_88473;
state_88473 = G__88533;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_88473){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_88473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_88511 = f__18839__auto__.call(null);(statearr_88511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_88511;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18838__auto___88614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_88593){var state_val_88594 = (state_88593[1]);if((state_val_88594 === 1))
{var state_88593__$1 = state_88593;var statearr_88595_88615 = state_88593__$1;(statearr_88595_88615[2] = null);
(statearr_88595_88615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88594 === 2))
{var state_88593__$1 = state_88593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88593__$1,4,from);
} else
{if((state_val_88594 === 3))
{var inst_88591 = (state_88593[2]);var state_88593__$1 = state_88593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88593__$1,inst_88591);
} else
{if((state_val_88594 === 4))
{var inst_88576 = (state_88593[7]);var inst_88576__$1 = (state_88593[2]);var inst_88577 = (inst_88576__$1 == null);var state_88593__$1 = (function (){var statearr_88596 = state_88593;(statearr_88596[7] = inst_88576__$1);
return statearr_88596;
})();if(cljs.core.truth_(inst_88577))
{var statearr_88597_88616 = state_88593__$1;(statearr_88597_88616[1] = 5);
} else
{var statearr_88598_88617 = state_88593__$1;(statearr_88598_88617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88594 === 5))
{var state_88593__$1 = state_88593;if(cljs.core.truth_(close_QMARK_))
{var statearr_88599_88618 = state_88593__$1;(statearr_88599_88618[1] = 8);
} else
{var statearr_88600_88619 = state_88593__$1;(statearr_88600_88619[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88594 === 6))
{var inst_88576 = (state_88593[7]);var state_88593__$1 = state_88593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88593__$1,11,to,inst_88576);
} else
{if((state_val_88594 === 7))
{var inst_88589 = (state_88593[2]);var state_88593__$1 = state_88593;var statearr_88601_88620 = state_88593__$1;(statearr_88601_88620[2] = inst_88589);
(statearr_88601_88620[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88594 === 8))
{var inst_88580 = cljs.core.async.close_BANG_.call(null,to);var state_88593__$1 = state_88593;var statearr_88602_88621 = state_88593__$1;(statearr_88602_88621[2] = inst_88580);
(statearr_88602_88621[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88594 === 9))
{var state_88593__$1 = state_88593;var statearr_88603_88622 = state_88593__$1;(statearr_88603_88622[2] = null);
(statearr_88603_88622[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88594 === 10))
{var inst_88583 = (state_88593[2]);var state_88593__$1 = state_88593;var statearr_88604_88623 = state_88593__$1;(statearr_88604_88623[2] = inst_88583);
(statearr_88604_88623[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88594 === 11))
{var inst_88586 = (state_88593[2]);var state_88593__$1 = (function (){var statearr_88605 = state_88593;(statearr_88605[8] = inst_88586);
return statearr_88605;
})();var statearr_88606_88624 = state_88593__$1;(statearr_88606_88624[2] = null);
(statearr_88606_88624[1] = 2);
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
var state_machine__18769__auto____0 = (function (){var statearr_88610 = (new Array(9));(statearr_88610[0] = state_machine__18769__auto__);
(statearr_88610[1] = 1);
return statearr_88610;
});
var state_machine__18769__auto____1 = (function (state_88593){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_88593);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e88611){if((e88611 instanceof Object))
{var ex__18772__auto__ = e88611;var statearr_88612_88625 = state_88593;(statearr_88612_88625[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88626 = state_88593;
state_88593 = G__88626;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_88593){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_88593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_88613 = f__18839__auto__.call(null);(statearr_88613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___88614);
return statearr_88613;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18838__auto___88713 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_88691){var state_val_88692 = (state_88691[1]);if((state_val_88692 === 1))
{var state_88691__$1 = state_88691;var statearr_88693_88714 = state_88691__$1;(statearr_88693_88714[2] = null);
(statearr_88693_88714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88692 === 2))
{var state_88691__$1 = state_88691;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88691__$1,4,ch);
} else
{if((state_val_88692 === 3))
{var inst_88689 = (state_88691[2]);var state_88691__$1 = state_88691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88691__$1,inst_88689);
} else
{if((state_val_88692 === 4))
{var inst_88672 = (state_88691[7]);var inst_88672__$1 = (state_88691[2]);var inst_88673 = (inst_88672__$1 == null);var state_88691__$1 = (function (){var statearr_88694 = state_88691;(statearr_88694[7] = inst_88672__$1);
return statearr_88694;
})();if(cljs.core.truth_(inst_88673))
{var statearr_88695_88715 = state_88691__$1;(statearr_88695_88715[1] = 5);
} else
{var statearr_88696_88716 = state_88691__$1;(statearr_88696_88716[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88692 === 5))
{var inst_88675 = cljs.core.async.close_BANG_.call(null,tc);var inst_88676 = cljs.core.async.close_BANG_.call(null,fc);var state_88691__$1 = (function (){var statearr_88697 = state_88691;(statearr_88697[8] = inst_88675);
return statearr_88697;
})();var statearr_88698_88717 = state_88691__$1;(statearr_88698_88717[2] = inst_88676);
(statearr_88698_88717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88692 === 6))
{var inst_88672 = (state_88691[7]);var inst_88678 = p.call(null,inst_88672);var state_88691__$1 = state_88691;if(cljs.core.truth_(inst_88678))
{var statearr_88699_88718 = state_88691__$1;(statearr_88699_88718[1] = 9);
} else
{var statearr_88700_88719 = state_88691__$1;(statearr_88700_88719[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88692 === 7))
{var inst_88687 = (state_88691[2]);var state_88691__$1 = state_88691;var statearr_88701_88720 = state_88691__$1;(statearr_88701_88720[2] = inst_88687);
(statearr_88701_88720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88692 === 8))
{var inst_88684 = (state_88691[2]);var state_88691__$1 = (function (){var statearr_88702 = state_88691;(statearr_88702[9] = inst_88684);
return statearr_88702;
})();var statearr_88703_88721 = state_88691__$1;(statearr_88703_88721[2] = null);
(statearr_88703_88721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88692 === 9))
{var state_88691__$1 = state_88691;var statearr_88704_88722 = state_88691__$1;(statearr_88704_88722[2] = tc);
(statearr_88704_88722[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88692 === 10))
{var state_88691__$1 = state_88691;var statearr_88705_88723 = state_88691__$1;(statearr_88705_88723[2] = fc);
(statearr_88705_88723[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88692 === 11))
{var inst_88672 = (state_88691[7]);var inst_88682 = (state_88691[2]);var state_88691__$1 = state_88691;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88691__$1,8,inst_88682,inst_88672);
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
var state_machine__18769__auto____0 = (function (){var statearr_88709 = (new Array(10));(statearr_88709[0] = state_machine__18769__auto__);
(statearr_88709[1] = 1);
return statearr_88709;
});
var state_machine__18769__auto____1 = (function (state_88691){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_88691);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e88710){if((e88710 instanceof Object))
{var ex__18772__auto__ = e88710;var statearr_88711_88724 = state_88691;(statearr_88711_88724[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88691);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88725 = state_88691;
state_88691 = G__88725;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_88691){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_88691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_88712 = f__18839__auto__.call(null);(statearr_88712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___88713);
return statearr_88712;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_88772){var state_val_88773 = (state_88772[1]);if((state_val_88773 === 7))
{var inst_88768 = (state_88772[2]);var state_88772__$1 = state_88772;var statearr_88774_88790 = state_88772__$1;(statearr_88774_88790[2] = inst_88768);
(statearr_88774_88790[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88773 === 6))
{var inst_88761 = (state_88772[7]);var inst_88758 = (state_88772[8]);var inst_88765 = f.call(null,inst_88758,inst_88761);var inst_88758__$1 = inst_88765;var state_88772__$1 = (function (){var statearr_88775 = state_88772;(statearr_88775[8] = inst_88758__$1);
return statearr_88775;
})();var statearr_88776_88791 = state_88772__$1;(statearr_88776_88791[2] = null);
(statearr_88776_88791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88773 === 5))
{var inst_88758 = (state_88772[8]);var state_88772__$1 = state_88772;var statearr_88777_88792 = state_88772__$1;(statearr_88777_88792[2] = inst_88758);
(statearr_88777_88792[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88773 === 4))
{var inst_88761 = (state_88772[7]);var inst_88761__$1 = (state_88772[2]);var inst_88762 = (inst_88761__$1 == null);var state_88772__$1 = (function (){var statearr_88778 = state_88772;(statearr_88778[7] = inst_88761__$1);
return statearr_88778;
})();if(cljs.core.truth_(inst_88762))
{var statearr_88779_88793 = state_88772__$1;(statearr_88779_88793[1] = 5);
} else
{var statearr_88780_88794 = state_88772__$1;(statearr_88780_88794[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88773 === 3))
{var inst_88770 = (state_88772[2]);var state_88772__$1 = state_88772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88772__$1,inst_88770);
} else
{if((state_val_88773 === 2))
{var state_88772__$1 = state_88772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88772__$1,4,ch);
} else
{if((state_val_88773 === 1))
{var inst_88758 = init;var state_88772__$1 = (function (){var statearr_88781 = state_88772;(statearr_88781[8] = inst_88758);
return statearr_88781;
})();var statearr_88782_88795 = state_88772__$1;(statearr_88782_88795[2] = null);
(statearr_88782_88795[1] = 2);
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
var state_machine__18769__auto____0 = (function (){var statearr_88786 = (new Array(9));(statearr_88786[0] = state_machine__18769__auto__);
(statearr_88786[1] = 1);
return statearr_88786;
});
var state_machine__18769__auto____1 = (function (state_88772){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_88772);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e88787){if((e88787 instanceof Object))
{var ex__18772__auto__ = e88787;var statearr_88788_88796 = state_88772;(statearr_88788_88796[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88772);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88797 = state_88772;
state_88772 = G__88797;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_88772){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_88772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_88789 = f__18839__auto__.call(null);(statearr_88789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_88789;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_88859){var state_val_88860 = (state_88859[1]);if((state_val_88860 === 1))
{var inst_88839 = cljs.core.seq.call(null,coll);var inst_88840 = inst_88839;var state_88859__$1 = (function (){var statearr_88861 = state_88859;(statearr_88861[7] = inst_88840);
return statearr_88861;
})();var statearr_88862_88880 = state_88859__$1;(statearr_88862_88880[2] = null);
(statearr_88862_88880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88860 === 2))
{var inst_88840 = (state_88859[7]);var state_88859__$1 = state_88859;if(cljs.core.truth_(inst_88840))
{var statearr_88863_88881 = state_88859__$1;(statearr_88863_88881[1] = 4);
} else
{var statearr_88864_88882 = state_88859__$1;(statearr_88864_88882[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88860 === 3))
{var inst_88857 = (state_88859[2]);var state_88859__$1 = state_88859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88859__$1,inst_88857);
} else
{if((state_val_88860 === 4))
{var inst_88840 = (state_88859[7]);var inst_88843 = cljs.core.first.call(null,inst_88840);var state_88859__$1 = state_88859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88859__$1,7,ch,inst_88843);
} else
{if((state_val_88860 === 5))
{var state_88859__$1 = state_88859;if(cljs.core.truth_(close_QMARK_))
{var statearr_88865_88883 = state_88859__$1;(statearr_88865_88883[1] = 8);
} else
{var statearr_88866_88884 = state_88859__$1;(statearr_88866_88884[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88860 === 6))
{var inst_88855 = (state_88859[2]);var state_88859__$1 = state_88859;var statearr_88867_88885 = state_88859__$1;(statearr_88867_88885[2] = inst_88855);
(statearr_88867_88885[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88860 === 7))
{var inst_88840 = (state_88859[7]);var inst_88845 = (state_88859[2]);var inst_88846 = cljs.core.next.call(null,inst_88840);var inst_88840__$1 = inst_88846;var state_88859__$1 = (function (){var statearr_88868 = state_88859;(statearr_88868[7] = inst_88840__$1);
(statearr_88868[8] = inst_88845);
return statearr_88868;
})();var statearr_88869_88886 = state_88859__$1;(statearr_88869_88886[2] = null);
(statearr_88869_88886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88860 === 8))
{var inst_88850 = cljs.core.async.close_BANG_.call(null,ch);var state_88859__$1 = state_88859;var statearr_88870_88887 = state_88859__$1;(statearr_88870_88887[2] = inst_88850);
(statearr_88870_88887[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88860 === 9))
{var state_88859__$1 = state_88859;var statearr_88871_88888 = state_88859__$1;(statearr_88871_88888[2] = null);
(statearr_88871_88888[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88860 === 10))
{var inst_88853 = (state_88859[2]);var state_88859__$1 = state_88859;var statearr_88872_88889 = state_88859__$1;(statearr_88872_88889[2] = inst_88853);
(statearr_88872_88889[1] = 6);
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
var state_machine__18769__auto____0 = (function (){var statearr_88876 = (new Array(9));(statearr_88876[0] = state_machine__18769__auto__);
(statearr_88876[1] = 1);
return statearr_88876;
});
var state_machine__18769__auto____1 = (function (state_88859){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_88859);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e88877){if((e88877 instanceof Object))
{var ex__18772__auto__ = e88877;var statearr_88878_88890 = state_88859;(statearr_88878_88890[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88859);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88891 = state_88859;
state_88859 = G__88891;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_88859){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_88859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_88879 = f__18839__auto__.call(null);(statearr_88879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_88879;
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
cljs.core.async.Mux = (function (){var obj88893 = {};return obj88893;
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
cljs.core.async.Mult = (function (){var obj88895 = {};return obj88895;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t89119 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t89119 = (function (cs,ch,mult,meta89120){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta89120 = meta89120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t89119.cljs$lang$type = true;
cljs.core.async.t89119.cljs$lang$ctorStr = "cljs.core.async/t89119";
cljs.core.async.t89119.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t89119");
});})(cs))
;
cljs.core.async.t89119.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t89119.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t89119.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t89119.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t89119.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t89119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t89119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_89121){var self__ = this;
var _89121__$1 = this;return self__.meta89120;
});})(cs))
;
cljs.core.async.t89119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_89121,meta89120__$1){var self__ = this;
var _89121__$1 = this;return (new cljs.core.async.t89119(self__.cs,self__.ch,self__.mult,meta89120__$1));
});})(cs))
;
cljs.core.async.__GT_t89119 = ((function (cs){
return (function __GT_t89119(cs__$1,ch__$1,mult__$1,meta89120){return (new cljs.core.async.t89119(cs__$1,ch__$1,mult__$1,meta89120));
});})(cs))
;
}
return (new cljs.core.async.t89119(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18838__auto___89342 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_89256){var state_val_89257 = (state_89256[1]);if((state_val_89257 === 32))
{var inst_89124 = (state_89256[7]);var inst_89200 = (state_89256[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89256,31,Object,null,30);var inst_89207 = cljs.core.async.put_BANG_.call(null,inst_89200,inst_89124,done);var state_89256__$1 = state_89256;var statearr_89258_89343 = state_89256__$1;(statearr_89258_89343[2] = inst_89207);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89256__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 1))
{var state_89256__$1 = state_89256;var statearr_89259_89344 = state_89256__$1;(statearr_89259_89344[2] = null);
(statearr_89259_89344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 33))
{var inst_89213 = (state_89256[9]);var inst_89215 = cljs.core.chunked_seq_QMARK_.call(null,inst_89213);var state_89256__$1 = state_89256;if(inst_89215)
{var statearr_89260_89345 = state_89256__$1;(statearr_89260_89345[1] = 36);
} else
{var statearr_89261_89346 = state_89256__$1;(statearr_89261_89346[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 2))
{var state_89256__$1 = state_89256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89256__$1,4,ch);
} else
{if((state_val_89257 === 34))
{var state_89256__$1 = state_89256;var statearr_89262_89347 = state_89256__$1;(statearr_89262_89347[2] = null);
(statearr_89262_89347[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 3))
{var inst_89254 = (state_89256[2]);var state_89256__$1 = state_89256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89256__$1,inst_89254);
} else
{if((state_val_89257 === 35))
{var inst_89238 = (state_89256[2]);var state_89256__$1 = state_89256;var statearr_89263_89348 = state_89256__$1;(statearr_89263_89348[2] = inst_89238);
(statearr_89263_89348[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 4))
{var inst_89124 = (state_89256[7]);var inst_89124__$1 = (state_89256[2]);var inst_89125 = (inst_89124__$1 == null);var state_89256__$1 = (function (){var statearr_89264 = state_89256;(statearr_89264[7] = inst_89124__$1);
return statearr_89264;
})();if(cljs.core.truth_(inst_89125))
{var statearr_89265_89349 = state_89256__$1;(statearr_89265_89349[1] = 5);
} else
{var statearr_89266_89350 = state_89256__$1;(statearr_89266_89350[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 36))
{var inst_89213 = (state_89256[9]);var inst_89217 = cljs.core.chunk_first.call(null,inst_89213);var inst_89218 = cljs.core.chunk_rest.call(null,inst_89213);var inst_89219 = cljs.core.count.call(null,inst_89217);var inst_89192 = inst_89218;var inst_89193 = inst_89217;var inst_89194 = inst_89219;var inst_89195 = 0;var state_89256__$1 = (function (){var statearr_89267 = state_89256;(statearr_89267[10] = inst_89193);
(statearr_89267[11] = inst_89192);
(statearr_89267[12] = inst_89195);
(statearr_89267[13] = inst_89194);
return statearr_89267;
})();var statearr_89268_89351 = state_89256__$1;(statearr_89268_89351[2] = null);
(statearr_89268_89351[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 5))
{var inst_89131 = cljs.core.deref.call(null,cs);var inst_89132 = cljs.core.seq.call(null,inst_89131);var inst_89133 = inst_89132;var inst_89134 = null;var inst_89135 = 0;var inst_89136 = 0;var state_89256__$1 = (function (){var statearr_89269 = state_89256;(statearr_89269[14] = inst_89133);
(statearr_89269[15] = inst_89136);
(statearr_89269[16] = inst_89135);
(statearr_89269[17] = inst_89134);
return statearr_89269;
})();var statearr_89270_89352 = state_89256__$1;(statearr_89270_89352[2] = null);
(statearr_89270_89352[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 37))
{var inst_89213 = (state_89256[9]);var inst_89222 = cljs.core.first.call(null,inst_89213);var state_89256__$1 = (function (){var statearr_89271 = state_89256;(statearr_89271[18] = inst_89222);
return statearr_89271;
})();var statearr_89272_89353 = state_89256__$1;(statearr_89272_89353[2] = null);
(statearr_89272_89353[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 6))
{var inst_89184 = (state_89256[19]);var inst_89183 = cljs.core.deref.call(null,cs);var inst_89184__$1 = cljs.core.keys.call(null,inst_89183);var inst_89185 = cljs.core.count.call(null,inst_89184__$1);var inst_89186 = cljs.core.reset_BANG_.call(null,dctr,inst_89185);var inst_89191 = cljs.core.seq.call(null,inst_89184__$1);var inst_89192 = inst_89191;var inst_89193 = null;var inst_89194 = 0;var inst_89195 = 0;var state_89256__$1 = (function (){var statearr_89273 = state_89256;(statearr_89273[20] = inst_89186);
(statearr_89273[19] = inst_89184__$1);
(statearr_89273[10] = inst_89193);
(statearr_89273[11] = inst_89192);
(statearr_89273[12] = inst_89195);
(statearr_89273[13] = inst_89194);
return statearr_89273;
})();var statearr_89274_89354 = state_89256__$1;(statearr_89274_89354[2] = null);
(statearr_89274_89354[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 38))
{var inst_89235 = (state_89256[2]);var state_89256__$1 = state_89256;var statearr_89275_89355 = state_89256__$1;(statearr_89275_89355[2] = inst_89235);
(statearr_89275_89355[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 7))
{var inst_89252 = (state_89256[2]);var state_89256__$1 = state_89256;var statearr_89276_89356 = state_89256__$1;(statearr_89276_89356[2] = inst_89252);
(statearr_89276_89356[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 39))
{var inst_89213 = (state_89256[9]);var inst_89231 = (state_89256[2]);var inst_89232 = cljs.core.next.call(null,inst_89213);var inst_89192 = inst_89232;var inst_89193 = null;var inst_89194 = 0;var inst_89195 = 0;var state_89256__$1 = (function (){var statearr_89277 = state_89256;(statearr_89277[21] = inst_89231);
(statearr_89277[10] = inst_89193);
(statearr_89277[11] = inst_89192);
(statearr_89277[12] = inst_89195);
(statearr_89277[13] = inst_89194);
return statearr_89277;
})();var statearr_89278_89357 = state_89256__$1;(statearr_89278_89357[2] = null);
(statearr_89278_89357[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 8))
{var inst_89136 = (state_89256[15]);var inst_89135 = (state_89256[16]);var inst_89138 = (inst_89136 < inst_89135);var inst_89139 = inst_89138;var state_89256__$1 = state_89256;if(cljs.core.truth_(inst_89139))
{var statearr_89279_89358 = state_89256__$1;(statearr_89279_89358[1] = 10);
} else
{var statearr_89280_89359 = state_89256__$1;(statearr_89280_89359[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 40))
{var inst_89222 = (state_89256[18]);var inst_89223 = (state_89256[2]);var inst_89224 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_89225 = cljs.core.async.untap_STAR_.call(null,m,inst_89222);var state_89256__$1 = (function (){var statearr_89281 = state_89256;(statearr_89281[22] = inst_89224);
(statearr_89281[23] = inst_89223);
return statearr_89281;
})();var statearr_89282_89360 = state_89256__$1;(statearr_89282_89360[2] = inst_89225);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89256__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 9))
{var inst_89181 = (state_89256[2]);var state_89256__$1 = state_89256;var statearr_89283_89361 = state_89256__$1;(statearr_89283_89361[2] = inst_89181);
(statearr_89283_89361[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 41))
{var inst_89222 = (state_89256[18]);var inst_89124 = (state_89256[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89256,40,Object,null,39);var inst_89229 = cljs.core.async.put_BANG_.call(null,inst_89222,inst_89124,done);var state_89256__$1 = state_89256;var statearr_89284_89362 = state_89256__$1;(statearr_89284_89362[2] = inst_89229);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89256__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 10))
{var inst_89136 = (state_89256[15]);var inst_89134 = (state_89256[17]);var inst_89142 = cljs.core._nth.call(null,inst_89134,inst_89136);var inst_89143 = cljs.core.nth.call(null,inst_89142,0,null);var inst_89144 = cljs.core.nth.call(null,inst_89142,1,null);var state_89256__$1 = (function (){var statearr_89285 = state_89256;(statearr_89285[24] = inst_89143);
return statearr_89285;
})();if(cljs.core.truth_(inst_89144))
{var statearr_89286_89363 = state_89256__$1;(statearr_89286_89363[1] = 13);
} else
{var statearr_89287_89364 = state_89256__$1;(statearr_89287_89364[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 42))
{var state_89256__$1 = state_89256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89256__$1,45,dchan);
} else
{if((state_val_89257 === 11))
{var inst_89133 = (state_89256[14]);var inst_89153 = (state_89256[25]);var inst_89153__$1 = cljs.core.seq.call(null,inst_89133);var state_89256__$1 = (function (){var statearr_89288 = state_89256;(statearr_89288[25] = inst_89153__$1);
return statearr_89288;
})();if(inst_89153__$1)
{var statearr_89289_89365 = state_89256__$1;(statearr_89289_89365[1] = 16);
} else
{var statearr_89290_89366 = state_89256__$1;(statearr_89290_89366[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 43))
{var state_89256__$1 = state_89256;var statearr_89291_89367 = state_89256__$1;(statearr_89291_89367[2] = null);
(statearr_89291_89367[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 12))
{var inst_89179 = (state_89256[2]);var state_89256__$1 = state_89256;var statearr_89292_89368 = state_89256__$1;(statearr_89292_89368[2] = inst_89179);
(statearr_89292_89368[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 44))
{var inst_89249 = (state_89256[2]);var state_89256__$1 = (function (){var statearr_89293 = state_89256;(statearr_89293[26] = inst_89249);
return statearr_89293;
})();var statearr_89294_89369 = state_89256__$1;(statearr_89294_89369[2] = null);
(statearr_89294_89369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 13))
{var inst_89143 = (state_89256[24]);var inst_89146 = cljs.core.async.close_BANG_.call(null,inst_89143);var state_89256__$1 = state_89256;var statearr_89295_89370 = state_89256__$1;(statearr_89295_89370[2] = inst_89146);
(statearr_89295_89370[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 45))
{var inst_89246 = (state_89256[2]);var state_89256__$1 = state_89256;var statearr_89299_89371 = state_89256__$1;(statearr_89299_89371[2] = inst_89246);
(statearr_89299_89371[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 14))
{var state_89256__$1 = state_89256;var statearr_89300_89372 = state_89256__$1;(statearr_89300_89372[2] = null);
(statearr_89300_89372[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 15))
{var inst_89133 = (state_89256[14]);var inst_89136 = (state_89256[15]);var inst_89135 = (state_89256[16]);var inst_89134 = (state_89256[17]);var inst_89149 = (state_89256[2]);var inst_89150 = (inst_89136 + 1);var tmp89296 = inst_89133;var tmp89297 = inst_89135;var tmp89298 = inst_89134;var inst_89133__$1 = tmp89296;var inst_89134__$1 = tmp89298;var inst_89135__$1 = tmp89297;var inst_89136__$1 = inst_89150;var state_89256__$1 = (function (){var statearr_89301 = state_89256;(statearr_89301[14] = inst_89133__$1);
(statearr_89301[15] = inst_89136__$1);
(statearr_89301[16] = inst_89135__$1);
(statearr_89301[17] = inst_89134__$1);
(statearr_89301[27] = inst_89149);
return statearr_89301;
})();var statearr_89302_89373 = state_89256__$1;(statearr_89302_89373[2] = null);
(statearr_89302_89373[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 16))
{var inst_89153 = (state_89256[25]);var inst_89155 = cljs.core.chunked_seq_QMARK_.call(null,inst_89153);var state_89256__$1 = state_89256;if(inst_89155)
{var statearr_89303_89374 = state_89256__$1;(statearr_89303_89374[1] = 19);
} else
{var statearr_89304_89375 = state_89256__$1;(statearr_89304_89375[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 17))
{var state_89256__$1 = state_89256;var statearr_89305_89376 = state_89256__$1;(statearr_89305_89376[2] = null);
(statearr_89305_89376[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 18))
{var inst_89177 = (state_89256[2]);var state_89256__$1 = state_89256;var statearr_89306_89377 = state_89256__$1;(statearr_89306_89377[2] = inst_89177);
(statearr_89306_89377[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 19))
{var inst_89153 = (state_89256[25]);var inst_89157 = cljs.core.chunk_first.call(null,inst_89153);var inst_89158 = cljs.core.chunk_rest.call(null,inst_89153);var inst_89159 = cljs.core.count.call(null,inst_89157);var inst_89133 = inst_89158;var inst_89134 = inst_89157;var inst_89135 = inst_89159;var inst_89136 = 0;var state_89256__$1 = (function (){var statearr_89307 = state_89256;(statearr_89307[14] = inst_89133);
(statearr_89307[15] = inst_89136);
(statearr_89307[16] = inst_89135);
(statearr_89307[17] = inst_89134);
return statearr_89307;
})();var statearr_89308_89378 = state_89256__$1;(statearr_89308_89378[2] = null);
(statearr_89308_89378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 20))
{var inst_89153 = (state_89256[25]);var inst_89163 = cljs.core.first.call(null,inst_89153);var inst_89164 = cljs.core.nth.call(null,inst_89163,0,null);var inst_89165 = cljs.core.nth.call(null,inst_89163,1,null);var state_89256__$1 = (function (){var statearr_89309 = state_89256;(statearr_89309[28] = inst_89164);
return statearr_89309;
})();if(cljs.core.truth_(inst_89165))
{var statearr_89310_89379 = state_89256__$1;(statearr_89310_89379[1] = 22);
} else
{var statearr_89311_89380 = state_89256__$1;(statearr_89311_89380[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 21))
{var inst_89174 = (state_89256[2]);var state_89256__$1 = state_89256;var statearr_89312_89381 = state_89256__$1;(statearr_89312_89381[2] = inst_89174);
(statearr_89312_89381[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 22))
{var inst_89164 = (state_89256[28]);var inst_89167 = cljs.core.async.close_BANG_.call(null,inst_89164);var state_89256__$1 = state_89256;var statearr_89313_89382 = state_89256__$1;(statearr_89313_89382[2] = inst_89167);
(statearr_89313_89382[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 23))
{var state_89256__$1 = state_89256;var statearr_89314_89383 = state_89256__$1;(statearr_89314_89383[2] = null);
(statearr_89314_89383[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 24))
{var inst_89153 = (state_89256[25]);var inst_89170 = (state_89256[2]);var inst_89171 = cljs.core.next.call(null,inst_89153);var inst_89133 = inst_89171;var inst_89134 = null;var inst_89135 = 0;var inst_89136 = 0;var state_89256__$1 = (function (){var statearr_89315 = state_89256;(statearr_89315[14] = inst_89133);
(statearr_89315[29] = inst_89170);
(statearr_89315[15] = inst_89136);
(statearr_89315[16] = inst_89135);
(statearr_89315[17] = inst_89134);
return statearr_89315;
})();var statearr_89316_89384 = state_89256__$1;(statearr_89316_89384[2] = null);
(statearr_89316_89384[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 25))
{var inst_89195 = (state_89256[12]);var inst_89194 = (state_89256[13]);var inst_89197 = (inst_89195 < inst_89194);var inst_89198 = inst_89197;var state_89256__$1 = state_89256;if(cljs.core.truth_(inst_89198))
{var statearr_89317_89385 = state_89256__$1;(statearr_89317_89385[1] = 27);
} else
{var statearr_89318_89386 = state_89256__$1;(statearr_89318_89386[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 26))
{var inst_89184 = (state_89256[19]);var inst_89242 = (state_89256[2]);var inst_89243 = cljs.core.seq.call(null,inst_89184);var state_89256__$1 = (function (){var statearr_89319 = state_89256;(statearr_89319[30] = inst_89242);
return statearr_89319;
})();if(inst_89243)
{var statearr_89320_89387 = state_89256__$1;(statearr_89320_89387[1] = 42);
} else
{var statearr_89321_89388 = state_89256__$1;(statearr_89321_89388[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 27))
{var inst_89193 = (state_89256[10]);var inst_89195 = (state_89256[12]);var inst_89200 = cljs.core._nth.call(null,inst_89193,inst_89195);var state_89256__$1 = (function (){var statearr_89322 = state_89256;(statearr_89322[8] = inst_89200);
return statearr_89322;
})();var statearr_89323_89389 = state_89256__$1;(statearr_89323_89389[2] = null);
(statearr_89323_89389[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 28))
{var inst_89213 = (state_89256[9]);var inst_89192 = (state_89256[11]);var inst_89213__$1 = cljs.core.seq.call(null,inst_89192);var state_89256__$1 = (function (){var statearr_89327 = state_89256;(statearr_89327[9] = inst_89213__$1);
return statearr_89327;
})();if(inst_89213__$1)
{var statearr_89328_89390 = state_89256__$1;(statearr_89328_89390[1] = 33);
} else
{var statearr_89329_89391 = state_89256__$1;(statearr_89329_89391[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 29))
{var inst_89240 = (state_89256[2]);var state_89256__$1 = state_89256;var statearr_89330_89392 = state_89256__$1;(statearr_89330_89392[2] = inst_89240);
(statearr_89330_89392[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 30))
{var inst_89193 = (state_89256[10]);var inst_89192 = (state_89256[11]);var inst_89195 = (state_89256[12]);var inst_89194 = (state_89256[13]);var inst_89209 = (state_89256[2]);var inst_89210 = (inst_89195 + 1);var tmp89324 = inst_89193;var tmp89325 = inst_89192;var tmp89326 = inst_89194;var inst_89192__$1 = tmp89325;var inst_89193__$1 = tmp89324;var inst_89194__$1 = tmp89326;var inst_89195__$1 = inst_89210;var state_89256__$1 = (function (){var statearr_89331 = state_89256;(statearr_89331[31] = inst_89209);
(statearr_89331[10] = inst_89193__$1);
(statearr_89331[11] = inst_89192__$1);
(statearr_89331[12] = inst_89195__$1);
(statearr_89331[13] = inst_89194__$1);
return statearr_89331;
})();var statearr_89332_89393 = state_89256__$1;(statearr_89332_89393[2] = null);
(statearr_89332_89393[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89257 === 31))
{var inst_89200 = (state_89256[8]);var inst_89201 = (state_89256[2]);var inst_89202 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_89203 = cljs.core.async.untap_STAR_.call(null,m,inst_89200);var state_89256__$1 = (function (){var statearr_89333 = state_89256;(statearr_89333[32] = inst_89202);
(statearr_89333[33] = inst_89201);
return statearr_89333;
})();var statearr_89334_89394 = state_89256__$1;(statearr_89334_89394[2] = inst_89203);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89256__$1);
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
var state_machine__18769__auto____0 = (function (){var statearr_89338 = (new Array(34));(statearr_89338[0] = state_machine__18769__auto__);
(statearr_89338[1] = 1);
return statearr_89338;
});
var state_machine__18769__auto____1 = (function (state_89256){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_89256);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e89339){if((e89339 instanceof Object))
{var ex__18772__auto__ = e89339;var statearr_89340_89395 = state_89256;(statearr_89340_89395[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e89339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__89396 = state_89256;
state_89256 = G__89396;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_89256){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_89256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_89341 = f__18839__auto__.call(null);(statearr_89341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___89342);
return statearr_89341;
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
cljs.core.async.Mix = (function (){var obj89398 = {};return obj89398;
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
;var m = (function (){if(typeof cljs.core.async.t89508 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t89508 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta89509){
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
this.meta89509 = meta89509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t89508.cljs$lang$type = true;
cljs.core.async.t89508.cljs$lang$ctorStr = "cljs.core.async/t89508";
cljs.core.async.t89508.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t89508");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t89508.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t89508.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t89508.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t89508.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t89508.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t89508.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t89508.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t89508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t89508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_89510){var self__ = this;
var _89510__$1 = this;return self__.meta89509;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t89508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_89510,meta89509__$1){var self__ = this;
var _89510__$1 = this;return (new cljs.core.async.t89508(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta89509__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t89508 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t89508(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta89509){return (new cljs.core.async.t89508(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta89509));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t89508(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18838__auto___89617 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_89575){var state_val_89576 = (state_89575[1]);if((state_val_89576 === 1))
{var inst_89514 = (state_89575[7]);var inst_89514__$1 = calc_state.call(null);var inst_89515 = cljs.core.seq_QMARK_.call(null,inst_89514__$1);var state_89575__$1 = (function (){var statearr_89577 = state_89575;(statearr_89577[7] = inst_89514__$1);
return statearr_89577;
})();if(inst_89515)
{var statearr_89578_89618 = state_89575__$1;(statearr_89578_89618[1] = 2);
} else
{var statearr_89579_89619 = state_89575__$1;(statearr_89579_89619[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 2))
{var inst_89514 = (state_89575[7]);var inst_89517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89514);var state_89575__$1 = state_89575;var statearr_89580_89620 = state_89575__$1;(statearr_89580_89620[2] = inst_89517);
(statearr_89580_89620[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 3))
{var inst_89514 = (state_89575[7]);var state_89575__$1 = state_89575;var statearr_89581_89621 = state_89575__$1;(statearr_89581_89621[2] = inst_89514);
(statearr_89581_89621[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 4))
{var inst_89514 = (state_89575[7]);var inst_89520 = (state_89575[2]);var inst_89521 = cljs.core.get.call(null,inst_89520,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_89522 = cljs.core.get.call(null,inst_89520,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_89523 = cljs.core.get.call(null,inst_89520,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_89524 = inst_89514;var state_89575__$1 = (function (){var statearr_89582 = state_89575;(statearr_89582[8] = inst_89523);
(statearr_89582[9] = inst_89524);
(statearr_89582[10] = inst_89522);
(statearr_89582[11] = inst_89521);
return statearr_89582;
})();var statearr_89583_89622 = state_89575__$1;(statearr_89583_89622[2] = null);
(statearr_89583_89622[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 5))
{var inst_89524 = (state_89575[9]);var inst_89527 = cljs.core.seq_QMARK_.call(null,inst_89524);var state_89575__$1 = state_89575;if(inst_89527)
{var statearr_89584_89623 = state_89575__$1;(statearr_89584_89623[1] = 7);
} else
{var statearr_89585_89624 = state_89575__$1;(statearr_89585_89624[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 6))
{var inst_89573 = (state_89575[2]);var state_89575__$1 = state_89575;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89575__$1,inst_89573);
} else
{if((state_val_89576 === 7))
{var inst_89524 = (state_89575[9]);var inst_89529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89524);var state_89575__$1 = state_89575;var statearr_89586_89625 = state_89575__$1;(statearr_89586_89625[2] = inst_89529);
(statearr_89586_89625[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 8))
{var inst_89524 = (state_89575[9]);var state_89575__$1 = state_89575;var statearr_89587_89626 = state_89575__$1;(statearr_89587_89626[2] = inst_89524);
(statearr_89587_89626[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 9))
{var inst_89532 = (state_89575[12]);var inst_89532__$1 = (state_89575[2]);var inst_89533 = cljs.core.get.call(null,inst_89532__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_89534 = cljs.core.get.call(null,inst_89532__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_89535 = cljs.core.get.call(null,inst_89532__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_89575__$1 = (function (){var statearr_89588 = state_89575;(statearr_89588[13] = inst_89534);
(statearr_89588[14] = inst_89535);
(statearr_89588[12] = inst_89532__$1);
return statearr_89588;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_89575__$1,10,inst_89533);
} else
{if((state_val_89576 === 10))
{var inst_89540 = (state_89575[15]);var inst_89539 = (state_89575[16]);var inst_89538 = (state_89575[2]);var inst_89539__$1 = cljs.core.nth.call(null,inst_89538,0,null);var inst_89540__$1 = cljs.core.nth.call(null,inst_89538,1,null);var inst_89541 = (inst_89539__$1 == null);var inst_89542 = cljs.core._EQ_.call(null,inst_89540__$1,change);var inst_89543 = (inst_89541) || (inst_89542);var state_89575__$1 = (function (){var statearr_89589 = state_89575;(statearr_89589[15] = inst_89540__$1);
(statearr_89589[16] = inst_89539__$1);
return statearr_89589;
})();if(cljs.core.truth_(inst_89543))
{var statearr_89590_89627 = state_89575__$1;(statearr_89590_89627[1] = 11);
} else
{var statearr_89591_89628 = state_89575__$1;(statearr_89591_89628[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 11))
{var inst_89539 = (state_89575[16]);var inst_89545 = (inst_89539 == null);var state_89575__$1 = state_89575;if(cljs.core.truth_(inst_89545))
{var statearr_89592_89629 = state_89575__$1;(statearr_89592_89629[1] = 14);
} else
{var statearr_89593_89630 = state_89575__$1;(statearr_89593_89630[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 12))
{var inst_89535 = (state_89575[14]);var inst_89540 = (state_89575[15]);var inst_89554 = (state_89575[17]);var inst_89554__$1 = inst_89535.call(null,inst_89540);var state_89575__$1 = (function (){var statearr_89594 = state_89575;(statearr_89594[17] = inst_89554__$1);
return statearr_89594;
})();if(cljs.core.truth_(inst_89554__$1))
{var statearr_89595_89631 = state_89575__$1;(statearr_89595_89631[1] = 17);
} else
{var statearr_89596_89632 = state_89575__$1;(statearr_89596_89632[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 13))
{var inst_89571 = (state_89575[2]);var state_89575__$1 = state_89575;var statearr_89597_89633 = state_89575__$1;(statearr_89597_89633[2] = inst_89571);
(statearr_89597_89633[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 14))
{var inst_89540 = (state_89575[15]);var inst_89547 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_89540);var state_89575__$1 = state_89575;var statearr_89598_89634 = state_89575__$1;(statearr_89598_89634[2] = inst_89547);
(statearr_89598_89634[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 15))
{var state_89575__$1 = state_89575;var statearr_89599_89635 = state_89575__$1;(statearr_89599_89635[2] = null);
(statearr_89599_89635[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 16))
{var inst_89550 = (state_89575[2]);var inst_89551 = calc_state.call(null);var inst_89524 = inst_89551;var state_89575__$1 = (function (){var statearr_89600 = state_89575;(statearr_89600[9] = inst_89524);
(statearr_89600[18] = inst_89550);
return statearr_89600;
})();var statearr_89601_89636 = state_89575__$1;(statearr_89601_89636[2] = null);
(statearr_89601_89636[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 17))
{var inst_89554 = (state_89575[17]);var state_89575__$1 = state_89575;var statearr_89602_89637 = state_89575__$1;(statearr_89602_89637[2] = inst_89554);
(statearr_89602_89637[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 18))
{var inst_89534 = (state_89575[13]);var inst_89535 = (state_89575[14]);var inst_89540 = (state_89575[15]);var inst_89557 = cljs.core.empty_QMARK_.call(null,inst_89535);var inst_89558 = inst_89534.call(null,inst_89540);var inst_89559 = cljs.core.not.call(null,inst_89558);var inst_89560 = (inst_89557) && (inst_89559);var state_89575__$1 = state_89575;var statearr_89603_89638 = state_89575__$1;(statearr_89603_89638[2] = inst_89560);
(statearr_89603_89638[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 19))
{var inst_89562 = (state_89575[2]);var state_89575__$1 = state_89575;if(cljs.core.truth_(inst_89562))
{var statearr_89604_89639 = state_89575__$1;(statearr_89604_89639[1] = 20);
} else
{var statearr_89605_89640 = state_89575__$1;(statearr_89605_89640[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 20))
{var inst_89539 = (state_89575[16]);var state_89575__$1 = state_89575;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89575__$1,23,out,inst_89539);
} else
{if((state_val_89576 === 21))
{var state_89575__$1 = state_89575;var statearr_89606_89641 = state_89575__$1;(statearr_89606_89641[2] = null);
(statearr_89606_89641[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 22))
{var inst_89532 = (state_89575[12]);var inst_89568 = (state_89575[2]);var inst_89524 = inst_89532;var state_89575__$1 = (function (){var statearr_89607 = state_89575;(statearr_89607[19] = inst_89568);
(statearr_89607[9] = inst_89524);
return statearr_89607;
})();var statearr_89608_89642 = state_89575__$1;(statearr_89608_89642[2] = null);
(statearr_89608_89642[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89576 === 23))
{var inst_89565 = (state_89575[2]);var state_89575__$1 = state_89575;var statearr_89609_89643 = state_89575__$1;(statearr_89609_89643[2] = inst_89565);
(statearr_89609_89643[1] = 22);
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
var state_machine__18769__auto____0 = (function (){var statearr_89613 = (new Array(20));(statearr_89613[0] = state_machine__18769__auto__);
(statearr_89613[1] = 1);
return statearr_89613;
});
var state_machine__18769__auto____1 = (function (state_89575){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_89575);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e89614){if((e89614 instanceof Object))
{var ex__18772__auto__ = e89614;var statearr_89615_89644 = state_89575;(statearr_89615_89644[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89575);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e89614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__89645 = state_89575;
state_89575 = G__89645;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_89575){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_89575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_89616 = f__18839__auto__.call(null);(statearr_89616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___89617);
return statearr_89616;
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
cljs.core.async.Pub = (function (){var obj89647 = {};return obj89647;
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
return (function (p1__89648_SHARP_){if(cljs.core.truth_(p1__89648_SHARP_.call(null,topic)))
{return p1__89648_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__89648_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13825__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t89773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t89773 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta89774){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta89774 = meta89774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t89773.cljs$lang$type = true;
cljs.core.async.t89773.cljs$lang$ctorStr = "cljs.core.async/t89773";
cljs.core.async.t89773.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"cljs.core.async/t89773");
});})(mults,ensure_mult))
;
cljs.core.async.t89773.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t89773.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t89773.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t89773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t89773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t89773.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t89773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t89773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_89775){var self__ = this;
var _89775__$1 = this;return self__.meta89774;
});})(mults,ensure_mult))
;
cljs.core.async.t89773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_89775,meta89774__$1){var self__ = this;
var _89775__$1 = this;return (new cljs.core.async.t89773(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta89774__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t89773 = ((function (mults,ensure_mult){
return (function __GT_t89773(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta89774){return (new cljs.core.async.t89773(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta89774));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t89773(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18838__auto___89897 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_89849){var state_val_89850 = (state_89849[1]);if((state_val_89850 === 1))
{var state_89849__$1 = state_89849;var statearr_89851_89898 = state_89849__$1;(statearr_89851_89898[2] = null);
(statearr_89851_89898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 2))
{var state_89849__$1 = state_89849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89849__$1,4,ch);
} else
{if((state_val_89850 === 3))
{var inst_89847 = (state_89849[2]);var state_89849__$1 = state_89849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89849__$1,inst_89847);
} else
{if((state_val_89850 === 4))
{var inst_89778 = (state_89849[7]);var inst_89778__$1 = (state_89849[2]);var inst_89779 = (inst_89778__$1 == null);var state_89849__$1 = (function (){var statearr_89852 = state_89849;(statearr_89852[7] = inst_89778__$1);
return statearr_89852;
})();if(cljs.core.truth_(inst_89779))
{var statearr_89853_89899 = state_89849__$1;(statearr_89853_89899[1] = 5);
} else
{var statearr_89854_89900 = state_89849__$1;(statearr_89854_89900[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 5))
{var inst_89785 = cljs.core.deref.call(null,mults);var inst_89786 = cljs.core.vals.call(null,inst_89785);var inst_89787 = cljs.core.seq.call(null,inst_89786);var inst_89788 = inst_89787;var inst_89789 = null;var inst_89790 = 0;var inst_89791 = 0;var state_89849__$1 = (function (){var statearr_89855 = state_89849;(statearr_89855[8] = inst_89790);
(statearr_89855[9] = inst_89791);
(statearr_89855[10] = inst_89788);
(statearr_89855[11] = inst_89789);
return statearr_89855;
})();var statearr_89856_89901 = state_89849__$1;(statearr_89856_89901[2] = null);
(statearr_89856_89901[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 6))
{var inst_89826 = (state_89849[12]);var inst_89828 = (state_89849[13]);var inst_89778 = (state_89849[7]);var inst_89826__$1 = topic_fn.call(null,inst_89778);var inst_89827 = cljs.core.deref.call(null,mults);var inst_89828__$1 = cljs.core.get.call(null,inst_89827,inst_89826__$1);var state_89849__$1 = (function (){var statearr_89857 = state_89849;(statearr_89857[12] = inst_89826__$1);
(statearr_89857[13] = inst_89828__$1);
return statearr_89857;
})();if(cljs.core.truth_(inst_89828__$1))
{var statearr_89858_89902 = state_89849__$1;(statearr_89858_89902[1] = 19);
} else
{var statearr_89859_89903 = state_89849__$1;(statearr_89859_89903[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 7))
{var inst_89845 = (state_89849[2]);var state_89849__$1 = state_89849;var statearr_89860_89904 = state_89849__$1;(statearr_89860_89904[2] = inst_89845);
(statearr_89860_89904[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 8))
{var inst_89790 = (state_89849[8]);var inst_89791 = (state_89849[9]);var inst_89793 = (inst_89791 < inst_89790);var inst_89794 = inst_89793;var state_89849__$1 = state_89849;if(cljs.core.truth_(inst_89794))
{var statearr_89864_89905 = state_89849__$1;(statearr_89864_89905[1] = 10);
} else
{var statearr_89865_89906 = state_89849__$1;(statearr_89865_89906[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 9))
{var inst_89824 = (state_89849[2]);var state_89849__$1 = state_89849;var statearr_89866_89907 = state_89849__$1;(statearr_89866_89907[2] = inst_89824);
(statearr_89866_89907[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 10))
{var inst_89790 = (state_89849[8]);var inst_89791 = (state_89849[9]);var inst_89788 = (state_89849[10]);var inst_89789 = (state_89849[11]);var inst_89796 = cljs.core._nth.call(null,inst_89789,inst_89791);var inst_89797 = cljs.core.async.muxch_STAR_.call(null,inst_89796);var inst_89798 = cljs.core.async.close_BANG_.call(null,inst_89797);var inst_89799 = (inst_89791 + 1);var tmp89861 = inst_89790;var tmp89862 = inst_89788;var tmp89863 = inst_89789;var inst_89788__$1 = tmp89862;var inst_89789__$1 = tmp89863;var inst_89790__$1 = tmp89861;var inst_89791__$1 = inst_89799;var state_89849__$1 = (function (){var statearr_89867 = state_89849;(statearr_89867[8] = inst_89790__$1);
(statearr_89867[9] = inst_89791__$1);
(statearr_89867[14] = inst_89798);
(statearr_89867[10] = inst_89788__$1);
(statearr_89867[11] = inst_89789__$1);
return statearr_89867;
})();var statearr_89868_89908 = state_89849__$1;(statearr_89868_89908[2] = null);
(statearr_89868_89908[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 11))
{var inst_89802 = (state_89849[15]);var inst_89788 = (state_89849[10]);var inst_89802__$1 = cljs.core.seq.call(null,inst_89788);var state_89849__$1 = (function (){var statearr_89869 = state_89849;(statearr_89869[15] = inst_89802__$1);
return statearr_89869;
})();if(inst_89802__$1)
{var statearr_89870_89909 = state_89849__$1;(statearr_89870_89909[1] = 13);
} else
{var statearr_89871_89910 = state_89849__$1;(statearr_89871_89910[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 12))
{var inst_89822 = (state_89849[2]);var state_89849__$1 = state_89849;var statearr_89872_89911 = state_89849__$1;(statearr_89872_89911[2] = inst_89822);
(statearr_89872_89911[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 13))
{var inst_89802 = (state_89849[15]);var inst_89804 = cljs.core.chunked_seq_QMARK_.call(null,inst_89802);var state_89849__$1 = state_89849;if(inst_89804)
{var statearr_89873_89912 = state_89849__$1;(statearr_89873_89912[1] = 16);
} else
{var statearr_89874_89913 = state_89849__$1;(statearr_89874_89913[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 14))
{var state_89849__$1 = state_89849;var statearr_89875_89914 = state_89849__$1;(statearr_89875_89914[2] = null);
(statearr_89875_89914[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 15))
{var inst_89820 = (state_89849[2]);var state_89849__$1 = state_89849;var statearr_89876_89915 = state_89849__$1;(statearr_89876_89915[2] = inst_89820);
(statearr_89876_89915[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 16))
{var inst_89802 = (state_89849[15]);var inst_89806 = cljs.core.chunk_first.call(null,inst_89802);var inst_89807 = cljs.core.chunk_rest.call(null,inst_89802);var inst_89808 = cljs.core.count.call(null,inst_89806);var inst_89788 = inst_89807;var inst_89789 = inst_89806;var inst_89790 = inst_89808;var inst_89791 = 0;var state_89849__$1 = (function (){var statearr_89877 = state_89849;(statearr_89877[8] = inst_89790);
(statearr_89877[9] = inst_89791);
(statearr_89877[10] = inst_89788);
(statearr_89877[11] = inst_89789);
return statearr_89877;
})();var statearr_89878_89916 = state_89849__$1;(statearr_89878_89916[2] = null);
(statearr_89878_89916[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 17))
{var inst_89802 = (state_89849[15]);var inst_89811 = cljs.core.first.call(null,inst_89802);var inst_89812 = cljs.core.async.muxch_STAR_.call(null,inst_89811);var inst_89813 = cljs.core.async.close_BANG_.call(null,inst_89812);var inst_89814 = cljs.core.next.call(null,inst_89802);var inst_89788 = inst_89814;var inst_89789 = null;var inst_89790 = 0;var inst_89791 = 0;var state_89849__$1 = (function (){var statearr_89879 = state_89849;(statearr_89879[8] = inst_89790);
(statearr_89879[9] = inst_89791);
(statearr_89879[16] = inst_89813);
(statearr_89879[10] = inst_89788);
(statearr_89879[11] = inst_89789);
return statearr_89879;
})();var statearr_89880_89917 = state_89849__$1;(statearr_89880_89917[2] = null);
(statearr_89880_89917[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 18))
{var inst_89817 = (state_89849[2]);var state_89849__$1 = state_89849;var statearr_89881_89918 = state_89849__$1;(statearr_89881_89918[2] = inst_89817);
(statearr_89881_89918[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 19))
{var state_89849__$1 = state_89849;var statearr_89882_89919 = state_89849__$1;(statearr_89882_89919[2] = null);
(statearr_89882_89919[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 20))
{var state_89849__$1 = state_89849;var statearr_89883_89920 = state_89849__$1;(statearr_89883_89920[2] = null);
(statearr_89883_89920[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 21))
{var inst_89842 = (state_89849[2]);var state_89849__$1 = (function (){var statearr_89884 = state_89849;(statearr_89884[17] = inst_89842);
return statearr_89884;
})();var statearr_89885_89921 = state_89849__$1;(statearr_89885_89921[2] = null);
(statearr_89885_89921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 22))
{var inst_89839 = (state_89849[2]);var state_89849__$1 = state_89849;var statearr_89886_89922 = state_89849__$1;(statearr_89886_89922[2] = inst_89839);
(statearr_89886_89922[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 23))
{var inst_89826 = (state_89849[12]);var inst_89830 = (state_89849[2]);var inst_89831 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_89826);var state_89849__$1 = (function (){var statearr_89887 = state_89849;(statearr_89887[18] = inst_89830);
return statearr_89887;
})();var statearr_89888_89923 = state_89849__$1;(statearr_89888_89923[2] = inst_89831);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89849__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89850 === 24))
{var inst_89828 = (state_89849[13]);var inst_89778 = (state_89849[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89849,23,Object,null,22);var inst_89835 = cljs.core.async.muxch_STAR_.call(null,inst_89828);var state_89849__$1 = state_89849;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89849__$1,25,inst_89835,inst_89778);
} else
{if((state_val_89850 === 25))
{var inst_89837 = (state_89849[2]);var state_89849__$1 = state_89849;var statearr_89889_89924 = state_89849__$1;(statearr_89889_89924[2] = inst_89837);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89849__$1);
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
var state_machine__18769__auto____0 = (function (){var statearr_89893 = (new Array(19));(statearr_89893[0] = state_machine__18769__auto__);
(statearr_89893[1] = 1);
return statearr_89893;
});
var state_machine__18769__auto____1 = (function (state_89849){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_89849);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e89894){if((e89894 instanceof Object))
{var ex__18772__auto__ = e89894;var statearr_89895_89925 = state_89849;(statearr_89895_89925[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89849);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e89894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__89926 = state_89849;
state_89849 = G__89926;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_89849){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_89849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_89896 = f__18839__auto__.call(null);(statearr_89896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___89897);
return statearr_89896;
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
,cljs.core.range.call(null,cnt));var c__18838__auto___90063 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_90033){var state_val_90034 = (state_90033[1]);if((state_val_90034 === 1))
{var state_90033__$1 = state_90033;var statearr_90035_90064 = state_90033__$1;(statearr_90035_90064[2] = null);
(statearr_90035_90064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 2))
{var inst_89996 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_89997 = 0;var state_90033__$1 = (function (){var statearr_90036 = state_90033;(statearr_90036[7] = inst_89996);
(statearr_90036[8] = inst_89997);
return statearr_90036;
})();var statearr_90037_90065 = state_90033__$1;(statearr_90037_90065[2] = null);
(statearr_90037_90065[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 3))
{var inst_90031 = (state_90033[2]);var state_90033__$1 = state_90033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90033__$1,inst_90031);
} else
{if((state_val_90034 === 4))
{var inst_89997 = (state_90033[8]);var inst_89999 = (inst_89997 < cnt);var state_90033__$1 = state_90033;if(cljs.core.truth_(inst_89999))
{var statearr_90038_90066 = state_90033__$1;(statearr_90038_90066[1] = 6);
} else
{var statearr_90039_90067 = state_90033__$1;(statearr_90039_90067[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 5))
{var inst_90017 = (state_90033[2]);var state_90033__$1 = (function (){var statearr_90040 = state_90033;(statearr_90040[9] = inst_90017);
return statearr_90040;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90033__$1,12,dchan);
} else
{if((state_val_90034 === 6))
{var state_90033__$1 = state_90033;var statearr_90041_90068 = state_90033__$1;(statearr_90041_90068[2] = null);
(statearr_90041_90068[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 7))
{var state_90033__$1 = state_90033;var statearr_90042_90069 = state_90033__$1;(statearr_90042_90069[2] = null);
(statearr_90042_90069[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 8))
{var inst_90015 = (state_90033[2]);var state_90033__$1 = state_90033;var statearr_90043_90070 = state_90033__$1;(statearr_90043_90070[2] = inst_90015);
(statearr_90043_90070[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 9))
{var inst_89997 = (state_90033[8]);var inst_90010 = (state_90033[2]);var inst_90011 = (inst_89997 + 1);var inst_89997__$1 = inst_90011;var state_90033__$1 = (function (){var statearr_90044 = state_90033;(statearr_90044[8] = inst_89997__$1);
(statearr_90044[10] = inst_90010);
return statearr_90044;
})();var statearr_90045_90071 = state_90033__$1;(statearr_90045_90071[2] = null);
(statearr_90045_90071[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 10))
{var inst_90001 = (state_90033[2]);var inst_90002 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_90033__$1 = (function (){var statearr_90046 = state_90033;(statearr_90046[11] = inst_90001);
return statearr_90046;
})();var statearr_90047_90072 = state_90033__$1;(statearr_90047_90072[2] = inst_90002);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90033__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 11))
{var inst_89997 = (state_90033[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_90033,10,Object,null,9);var inst_90006 = chs__$1.call(null,inst_89997);var inst_90007 = done.call(null,inst_89997);var inst_90008 = cljs.core.async.take_BANG_.call(null,inst_90006,inst_90007);var state_90033__$1 = state_90033;var statearr_90048_90073 = state_90033__$1;(statearr_90048_90073[2] = inst_90008);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90033__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 12))
{var inst_90019 = (state_90033[12]);var inst_90019__$1 = (state_90033[2]);var inst_90020 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_90019__$1);var state_90033__$1 = (function (){var statearr_90049 = state_90033;(statearr_90049[12] = inst_90019__$1);
return statearr_90049;
})();if(cljs.core.truth_(inst_90020))
{var statearr_90050_90074 = state_90033__$1;(statearr_90050_90074[1] = 13);
} else
{var statearr_90051_90075 = state_90033__$1;(statearr_90051_90075[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 13))
{var inst_90022 = cljs.core.async.close_BANG_.call(null,out);var state_90033__$1 = state_90033;var statearr_90052_90076 = state_90033__$1;(statearr_90052_90076[2] = inst_90022);
(statearr_90052_90076[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 14))
{var inst_90019 = (state_90033[12]);var inst_90024 = cljs.core.apply.call(null,f,inst_90019);var state_90033__$1 = state_90033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90033__$1,16,out,inst_90024);
} else
{if((state_val_90034 === 15))
{var inst_90029 = (state_90033[2]);var state_90033__$1 = state_90033;var statearr_90053_90077 = state_90033__$1;(statearr_90053_90077[2] = inst_90029);
(statearr_90053_90077[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90034 === 16))
{var inst_90026 = (state_90033[2]);var state_90033__$1 = (function (){var statearr_90054 = state_90033;(statearr_90054[13] = inst_90026);
return statearr_90054;
})();var statearr_90055_90078 = state_90033__$1;(statearr_90055_90078[2] = null);
(statearr_90055_90078[1] = 2);
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
var state_machine__18769__auto____0 = (function (){var statearr_90059 = (new Array(14));(statearr_90059[0] = state_machine__18769__auto__);
(statearr_90059[1] = 1);
return statearr_90059;
});
var state_machine__18769__auto____1 = (function (state_90033){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_90033);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e90060){if((e90060 instanceof Object))
{var ex__18772__auto__ = e90060;var statearr_90061_90079 = state_90033;(statearr_90061_90079[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e90060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__90080 = state_90033;
state_90033 = G__90080;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_90033){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_90033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_90062 = f__18839__auto__.call(null);(statearr_90062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___90063);
return statearr_90062;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___90188 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_90164){var state_val_90165 = (state_90164[1]);if((state_val_90165 === 1))
{var inst_90135 = cljs.core.vec.call(null,chs);var inst_90136 = inst_90135;var state_90164__$1 = (function (){var statearr_90166 = state_90164;(statearr_90166[7] = inst_90136);
return statearr_90166;
})();var statearr_90167_90189 = state_90164__$1;(statearr_90167_90189[2] = null);
(statearr_90167_90189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90165 === 2))
{var inst_90136 = (state_90164[7]);var inst_90138 = cljs.core.count.call(null,inst_90136);var inst_90139 = (inst_90138 > 0);var state_90164__$1 = state_90164;if(cljs.core.truth_(inst_90139))
{var statearr_90168_90190 = state_90164__$1;(statearr_90168_90190[1] = 4);
} else
{var statearr_90169_90191 = state_90164__$1;(statearr_90169_90191[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90165 === 3))
{var inst_90162 = (state_90164[2]);var state_90164__$1 = state_90164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90164__$1,inst_90162);
} else
{if((state_val_90165 === 4))
{var inst_90136 = (state_90164[7]);var state_90164__$1 = state_90164;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_90164__$1,7,inst_90136);
} else
{if((state_val_90165 === 5))
{var inst_90158 = cljs.core.async.close_BANG_.call(null,out);var state_90164__$1 = state_90164;var statearr_90170_90192 = state_90164__$1;(statearr_90170_90192[2] = inst_90158);
(statearr_90170_90192[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90165 === 6))
{var inst_90160 = (state_90164[2]);var state_90164__$1 = state_90164;var statearr_90171_90193 = state_90164__$1;(statearr_90171_90193[2] = inst_90160);
(statearr_90171_90193[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90165 === 7))
{var inst_90144 = (state_90164[8]);var inst_90143 = (state_90164[9]);var inst_90143__$1 = (state_90164[2]);var inst_90144__$1 = cljs.core.nth.call(null,inst_90143__$1,0,null);var inst_90145 = cljs.core.nth.call(null,inst_90143__$1,1,null);var inst_90146 = (inst_90144__$1 == null);var state_90164__$1 = (function (){var statearr_90172 = state_90164;(statearr_90172[8] = inst_90144__$1);
(statearr_90172[9] = inst_90143__$1);
(statearr_90172[10] = inst_90145);
return statearr_90172;
})();if(cljs.core.truth_(inst_90146))
{var statearr_90173_90194 = state_90164__$1;(statearr_90173_90194[1] = 8);
} else
{var statearr_90174_90195 = state_90164__$1;(statearr_90174_90195[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90165 === 8))
{var inst_90136 = (state_90164[7]);var inst_90144 = (state_90164[8]);var inst_90143 = (state_90164[9]);var inst_90145 = (state_90164[10]);var inst_90148 = (function (){var c = inst_90145;var v = inst_90144;var vec__90141 = inst_90143;var cs = inst_90136;return ((function (c,v,vec__90141,cs,inst_90136,inst_90144,inst_90143,inst_90145,state_val_90165){
return (function (p1__90081_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__90081_SHARP_);
});
;})(c,v,vec__90141,cs,inst_90136,inst_90144,inst_90143,inst_90145,state_val_90165))
})();var inst_90149 = cljs.core.filterv.call(null,inst_90148,inst_90136);var inst_90136__$1 = inst_90149;var state_90164__$1 = (function (){var statearr_90175 = state_90164;(statearr_90175[7] = inst_90136__$1);
return statearr_90175;
})();var statearr_90176_90196 = state_90164__$1;(statearr_90176_90196[2] = null);
(statearr_90176_90196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90165 === 9))
{var inst_90144 = (state_90164[8]);var state_90164__$1 = state_90164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90164__$1,11,out,inst_90144);
} else
{if((state_val_90165 === 10))
{var inst_90156 = (state_90164[2]);var state_90164__$1 = state_90164;var statearr_90178_90197 = state_90164__$1;(statearr_90178_90197[2] = inst_90156);
(statearr_90178_90197[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90165 === 11))
{var inst_90136 = (state_90164[7]);var inst_90153 = (state_90164[2]);var tmp90177 = inst_90136;var inst_90136__$1 = tmp90177;var state_90164__$1 = (function (){var statearr_90179 = state_90164;(statearr_90179[7] = inst_90136__$1);
(statearr_90179[11] = inst_90153);
return statearr_90179;
})();var statearr_90180_90198 = state_90164__$1;(statearr_90180_90198[2] = null);
(statearr_90180_90198[1] = 2);
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
var state_machine__18769__auto____0 = (function (){var statearr_90184 = (new Array(12));(statearr_90184[0] = state_machine__18769__auto__);
(statearr_90184[1] = 1);
return statearr_90184;
});
var state_machine__18769__auto____1 = (function (state_90164){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_90164);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e90185){if((e90185 instanceof Object))
{var ex__18772__auto__ = e90185;var statearr_90186_90199 = state_90164;(statearr_90186_90199[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90164);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e90185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__90200 = state_90164;
state_90164 = G__90200;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_90164){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_90164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_90187 = f__18839__auto__.call(null);(statearr_90187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___90188);
return statearr_90187;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___90293 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_90270){var state_val_90271 = (state_90270[1]);if((state_val_90271 === 1))
{var inst_90247 = 0;var state_90270__$1 = (function (){var statearr_90272 = state_90270;(statearr_90272[7] = inst_90247);
return statearr_90272;
})();var statearr_90273_90294 = state_90270__$1;(statearr_90273_90294[2] = null);
(statearr_90273_90294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90271 === 2))
{var inst_90247 = (state_90270[7]);var inst_90249 = (inst_90247 < n);var state_90270__$1 = state_90270;if(cljs.core.truth_(inst_90249))
{var statearr_90274_90295 = state_90270__$1;(statearr_90274_90295[1] = 4);
} else
{var statearr_90275_90296 = state_90270__$1;(statearr_90275_90296[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90271 === 3))
{var inst_90267 = (state_90270[2]);var inst_90268 = cljs.core.async.close_BANG_.call(null,out);var state_90270__$1 = (function (){var statearr_90276 = state_90270;(statearr_90276[8] = inst_90267);
return statearr_90276;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90270__$1,inst_90268);
} else
{if((state_val_90271 === 4))
{var state_90270__$1 = state_90270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90270__$1,7,ch);
} else
{if((state_val_90271 === 5))
{var state_90270__$1 = state_90270;var statearr_90277_90297 = state_90270__$1;(statearr_90277_90297[2] = null);
(statearr_90277_90297[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90271 === 6))
{var inst_90265 = (state_90270[2]);var state_90270__$1 = state_90270;var statearr_90278_90298 = state_90270__$1;(statearr_90278_90298[2] = inst_90265);
(statearr_90278_90298[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90271 === 7))
{var inst_90252 = (state_90270[9]);var inst_90252__$1 = (state_90270[2]);var inst_90253 = (inst_90252__$1 == null);var inst_90254 = cljs.core.not.call(null,inst_90253);var state_90270__$1 = (function (){var statearr_90279 = state_90270;(statearr_90279[9] = inst_90252__$1);
return statearr_90279;
})();if(inst_90254)
{var statearr_90280_90299 = state_90270__$1;(statearr_90280_90299[1] = 8);
} else
{var statearr_90281_90300 = state_90270__$1;(statearr_90281_90300[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90271 === 8))
{var inst_90252 = (state_90270[9]);var state_90270__$1 = state_90270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90270__$1,11,out,inst_90252);
} else
{if((state_val_90271 === 9))
{var state_90270__$1 = state_90270;var statearr_90282_90301 = state_90270__$1;(statearr_90282_90301[2] = null);
(statearr_90282_90301[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90271 === 10))
{var inst_90262 = (state_90270[2]);var state_90270__$1 = state_90270;var statearr_90283_90302 = state_90270__$1;(statearr_90283_90302[2] = inst_90262);
(statearr_90283_90302[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90271 === 11))
{var inst_90247 = (state_90270[7]);var inst_90257 = (state_90270[2]);var inst_90258 = (inst_90247 + 1);var inst_90247__$1 = inst_90258;var state_90270__$1 = (function (){var statearr_90284 = state_90270;(statearr_90284[10] = inst_90257);
(statearr_90284[7] = inst_90247__$1);
return statearr_90284;
})();var statearr_90285_90303 = state_90270__$1;(statearr_90285_90303[2] = null);
(statearr_90285_90303[1] = 2);
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
var state_machine__18769__auto____0 = (function (){var statearr_90289 = (new Array(11));(statearr_90289[0] = state_machine__18769__auto__);
(statearr_90289[1] = 1);
return statearr_90289;
});
var state_machine__18769__auto____1 = (function (state_90270){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_90270);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e90290){if((e90290 instanceof Object))
{var ex__18772__auto__ = e90290;var statearr_90291_90304 = state_90270;(statearr_90291_90304[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e90290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__90305 = state_90270;
state_90270 = G__90305;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_90270){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_90270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_90292 = f__18839__auto__.call(null);(statearr_90292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___90293);
return statearr_90292;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___90402 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_90377){var state_val_90378 = (state_90377[1]);if((state_val_90378 === 1))
{var inst_90354 = null;var state_90377__$1 = (function (){var statearr_90379 = state_90377;(statearr_90379[7] = inst_90354);
return statearr_90379;
})();var statearr_90380_90403 = state_90377__$1;(statearr_90380_90403[2] = null);
(statearr_90380_90403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90378 === 2))
{var state_90377__$1 = state_90377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90377__$1,4,ch);
} else
{if((state_val_90378 === 3))
{var inst_90374 = (state_90377[2]);var inst_90375 = cljs.core.async.close_BANG_.call(null,out);var state_90377__$1 = (function (){var statearr_90381 = state_90377;(statearr_90381[8] = inst_90374);
return statearr_90381;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90377__$1,inst_90375);
} else
{if((state_val_90378 === 4))
{var inst_90357 = (state_90377[9]);var inst_90357__$1 = (state_90377[2]);var inst_90358 = (inst_90357__$1 == null);var inst_90359 = cljs.core.not.call(null,inst_90358);var state_90377__$1 = (function (){var statearr_90382 = state_90377;(statearr_90382[9] = inst_90357__$1);
return statearr_90382;
})();if(inst_90359)
{var statearr_90383_90404 = state_90377__$1;(statearr_90383_90404[1] = 5);
} else
{var statearr_90384_90405 = state_90377__$1;(statearr_90384_90405[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90378 === 5))
{var inst_90354 = (state_90377[7]);var inst_90357 = (state_90377[9]);var inst_90361 = cljs.core._EQ_.call(null,inst_90357,inst_90354);var state_90377__$1 = state_90377;if(inst_90361)
{var statearr_90385_90406 = state_90377__$1;(statearr_90385_90406[1] = 8);
} else
{var statearr_90386_90407 = state_90377__$1;(statearr_90386_90407[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90378 === 6))
{var state_90377__$1 = state_90377;var statearr_90388_90408 = state_90377__$1;(statearr_90388_90408[2] = null);
(statearr_90388_90408[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90378 === 7))
{var inst_90372 = (state_90377[2]);var state_90377__$1 = state_90377;var statearr_90389_90409 = state_90377__$1;(statearr_90389_90409[2] = inst_90372);
(statearr_90389_90409[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90378 === 8))
{var inst_90354 = (state_90377[7]);var tmp90387 = inst_90354;var inst_90354__$1 = tmp90387;var state_90377__$1 = (function (){var statearr_90390 = state_90377;(statearr_90390[7] = inst_90354__$1);
return statearr_90390;
})();var statearr_90391_90410 = state_90377__$1;(statearr_90391_90410[2] = null);
(statearr_90391_90410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90378 === 9))
{var inst_90357 = (state_90377[9]);var state_90377__$1 = state_90377;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90377__$1,11,out,inst_90357);
} else
{if((state_val_90378 === 10))
{var inst_90369 = (state_90377[2]);var state_90377__$1 = state_90377;var statearr_90392_90411 = state_90377__$1;(statearr_90392_90411[2] = inst_90369);
(statearr_90392_90411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90378 === 11))
{var inst_90357 = (state_90377[9]);var inst_90366 = (state_90377[2]);var inst_90354 = inst_90357;var state_90377__$1 = (function (){var statearr_90393 = state_90377;(statearr_90393[7] = inst_90354);
(statearr_90393[10] = inst_90366);
return statearr_90393;
})();var statearr_90394_90412 = state_90377__$1;(statearr_90394_90412[2] = null);
(statearr_90394_90412[1] = 2);
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
var state_machine__18769__auto____0 = (function (){var statearr_90398 = (new Array(11));(statearr_90398[0] = state_machine__18769__auto__);
(statearr_90398[1] = 1);
return statearr_90398;
});
var state_machine__18769__auto____1 = (function (state_90377){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_90377);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e90399){if((e90399 instanceof Object))
{var ex__18772__auto__ = e90399;var statearr_90400_90413 = state_90377;(statearr_90400_90413[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90377);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e90399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__90414 = state_90377;
state_90377 = G__90414;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_90377){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_90377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_90401 = f__18839__auto__.call(null);(statearr_90401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___90402);
return statearr_90401;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___90549 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_90519){var state_val_90520 = (state_90519[1]);if((state_val_90520 === 1))
{var inst_90482 = (new Array(n));var inst_90483 = inst_90482;var inst_90484 = 0;var state_90519__$1 = (function (){var statearr_90521 = state_90519;(statearr_90521[7] = inst_90483);
(statearr_90521[8] = inst_90484);
return statearr_90521;
})();var statearr_90522_90550 = state_90519__$1;(statearr_90522_90550[2] = null);
(statearr_90522_90550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90520 === 2))
{var state_90519__$1 = state_90519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90519__$1,4,ch);
} else
{if((state_val_90520 === 3))
{var inst_90517 = (state_90519[2]);var state_90519__$1 = state_90519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90519__$1,inst_90517);
} else
{if((state_val_90520 === 4))
{var inst_90487 = (state_90519[9]);var inst_90487__$1 = (state_90519[2]);var inst_90488 = (inst_90487__$1 == null);var inst_90489 = cljs.core.not.call(null,inst_90488);var state_90519__$1 = (function (){var statearr_90523 = state_90519;(statearr_90523[9] = inst_90487__$1);
return statearr_90523;
})();if(inst_90489)
{var statearr_90524_90551 = state_90519__$1;(statearr_90524_90551[1] = 5);
} else
{var statearr_90525_90552 = state_90519__$1;(statearr_90525_90552[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90520 === 5))
{var inst_90483 = (state_90519[7]);var inst_90484 = (state_90519[8]);var inst_90487 = (state_90519[9]);var inst_90492 = (state_90519[10]);var inst_90491 = (inst_90483[inst_90484] = inst_90487);var inst_90492__$1 = (inst_90484 + 1);var inst_90493 = (inst_90492__$1 < n);var state_90519__$1 = (function (){var statearr_90526 = state_90519;(statearr_90526[11] = inst_90491);
(statearr_90526[10] = inst_90492__$1);
return statearr_90526;
})();if(cljs.core.truth_(inst_90493))
{var statearr_90527_90553 = state_90519__$1;(statearr_90527_90553[1] = 8);
} else
{var statearr_90528_90554 = state_90519__$1;(statearr_90528_90554[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90520 === 6))
{var inst_90484 = (state_90519[8]);var inst_90505 = (inst_90484 > 0);var state_90519__$1 = state_90519;if(cljs.core.truth_(inst_90505))
{var statearr_90530_90555 = state_90519__$1;(statearr_90530_90555[1] = 12);
} else
{var statearr_90531_90556 = state_90519__$1;(statearr_90531_90556[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90520 === 7))
{var inst_90515 = (state_90519[2]);var state_90519__$1 = state_90519;var statearr_90532_90557 = state_90519__$1;(statearr_90532_90557[2] = inst_90515);
(statearr_90532_90557[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90520 === 8))
{var inst_90483 = (state_90519[7]);var inst_90492 = (state_90519[10]);var tmp90529 = inst_90483;var inst_90483__$1 = tmp90529;var inst_90484 = inst_90492;var state_90519__$1 = (function (){var statearr_90533 = state_90519;(statearr_90533[7] = inst_90483__$1);
(statearr_90533[8] = inst_90484);
return statearr_90533;
})();var statearr_90534_90558 = state_90519__$1;(statearr_90534_90558[2] = null);
(statearr_90534_90558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90520 === 9))
{var inst_90483 = (state_90519[7]);var inst_90497 = cljs.core.vec.call(null,inst_90483);var state_90519__$1 = state_90519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90519__$1,11,out,inst_90497);
} else
{if((state_val_90520 === 10))
{var inst_90503 = (state_90519[2]);var state_90519__$1 = state_90519;var statearr_90535_90559 = state_90519__$1;(statearr_90535_90559[2] = inst_90503);
(statearr_90535_90559[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90520 === 11))
{var inst_90499 = (state_90519[2]);var inst_90500 = (new Array(n));var inst_90483 = inst_90500;var inst_90484 = 0;var state_90519__$1 = (function (){var statearr_90536 = state_90519;(statearr_90536[12] = inst_90499);
(statearr_90536[7] = inst_90483);
(statearr_90536[8] = inst_90484);
return statearr_90536;
})();var statearr_90537_90560 = state_90519__$1;(statearr_90537_90560[2] = null);
(statearr_90537_90560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90520 === 12))
{var inst_90483 = (state_90519[7]);var inst_90507 = cljs.core.vec.call(null,inst_90483);var state_90519__$1 = state_90519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90519__$1,15,out,inst_90507);
} else
{if((state_val_90520 === 13))
{var state_90519__$1 = state_90519;var statearr_90538_90561 = state_90519__$1;(statearr_90538_90561[2] = null);
(statearr_90538_90561[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90520 === 14))
{var inst_90512 = (state_90519[2]);var inst_90513 = cljs.core.async.close_BANG_.call(null,out);var state_90519__$1 = (function (){var statearr_90539 = state_90519;(statearr_90539[13] = inst_90512);
return statearr_90539;
})();var statearr_90540_90562 = state_90519__$1;(statearr_90540_90562[2] = inst_90513);
(statearr_90540_90562[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90520 === 15))
{var inst_90509 = (state_90519[2]);var state_90519__$1 = state_90519;var statearr_90541_90563 = state_90519__$1;(statearr_90541_90563[2] = inst_90509);
(statearr_90541_90563[1] = 14);
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
var state_machine__18769__auto____0 = (function (){var statearr_90545 = (new Array(14));(statearr_90545[0] = state_machine__18769__auto__);
(statearr_90545[1] = 1);
return statearr_90545;
});
var state_machine__18769__auto____1 = (function (state_90519){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_90519);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e90546){if((e90546 instanceof Object))
{var ex__18772__auto__ = e90546;var statearr_90547_90564 = state_90519;(statearr_90547_90564[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90519);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e90546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__90565 = state_90519;
state_90519 = G__90565;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_90519){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_90519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_90548 = f__18839__auto__.call(null);(statearr_90548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___90549);
return statearr_90548;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18838__auto___90708 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_90678){var state_val_90679 = (state_90678[1]);if((state_val_90679 === 1))
{var inst_90637 = (new Array(0));var inst_90638 = inst_90637;var inst_90639 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_90678__$1 = (function (){var statearr_90680 = state_90678;(statearr_90680[7] = inst_90638);
(statearr_90680[8] = inst_90639);
return statearr_90680;
})();var statearr_90681_90709 = state_90678__$1;(statearr_90681_90709[2] = null);
(statearr_90681_90709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90679 === 2))
{var state_90678__$1 = state_90678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90678__$1,4,ch);
} else
{if((state_val_90679 === 3))
{var inst_90676 = (state_90678[2]);var state_90678__$1 = state_90678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90678__$1,inst_90676);
} else
{if((state_val_90679 === 4))
{var inst_90642 = (state_90678[9]);var inst_90642__$1 = (state_90678[2]);var inst_90643 = (inst_90642__$1 == null);var inst_90644 = cljs.core.not.call(null,inst_90643);var state_90678__$1 = (function (){var statearr_90682 = state_90678;(statearr_90682[9] = inst_90642__$1);
return statearr_90682;
})();if(inst_90644)
{var statearr_90683_90710 = state_90678__$1;(statearr_90683_90710[1] = 5);
} else
{var statearr_90684_90711 = state_90678__$1;(statearr_90684_90711[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90679 === 5))
{var inst_90646 = (state_90678[10]);var inst_90639 = (state_90678[8]);var inst_90642 = (state_90678[9]);var inst_90646__$1 = f.call(null,inst_90642);var inst_90647 = cljs.core._EQ_.call(null,inst_90646__$1,inst_90639);var inst_90648 = cljs.core.keyword_identical_QMARK_.call(null,inst_90639,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_90649 = (inst_90647) || (inst_90648);var state_90678__$1 = (function (){var statearr_90685 = state_90678;(statearr_90685[10] = inst_90646__$1);
return statearr_90685;
})();if(cljs.core.truth_(inst_90649))
{var statearr_90686_90712 = state_90678__$1;(statearr_90686_90712[1] = 8);
} else
{var statearr_90687_90713 = state_90678__$1;(statearr_90687_90713[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90679 === 6))
{var inst_90638 = (state_90678[7]);var inst_90663 = inst_90638.length;var inst_90664 = (inst_90663 > 0);var state_90678__$1 = state_90678;if(cljs.core.truth_(inst_90664))
{var statearr_90689_90714 = state_90678__$1;(statearr_90689_90714[1] = 12);
} else
{var statearr_90690_90715 = state_90678__$1;(statearr_90690_90715[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90679 === 7))
{var inst_90674 = (state_90678[2]);var state_90678__$1 = state_90678;var statearr_90691_90716 = state_90678__$1;(statearr_90691_90716[2] = inst_90674);
(statearr_90691_90716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90679 === 8))
{var inst_90646 = (state_90678[10]);var inst_90638 = (state_90678[7]);var inst_90642 = (state_90678[9]);var inst_90651 = inst_90638.push(inst_90642);var tmp90688 = inst_90638;var inst_90638__$1 = tmp90688;var inst_90639 = inst_90646;var state_90678__$1 = (function (){var statearr_90692 = state_90678;(statearr_90692[11] = inst_90651);
(statearr_90692[7] = inst_90638__$1);
(statearr_90692[8] = inst_90639);
return statearr_90692;
})();var statearr_90693_90717 = state_90678__$1;(statearr_90693_90717[2] = null);
(statearr_90693_90717[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90679 === 9))
{var inst_90638 = (state_90678[7]);var inst_90654 = cljs.core.vec.call(null,inst_90638);var state_90678__$1 = state_90678;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90678__$1,11,out,inst_90654);
} else
{if((state_val_90679 === 10))
{var inst_90661 = (state_90678[2]);var state_90678__$1 = state_90678;var statearr_90694_90718 = state_90678__$1;(statearr_90694_90718[2] = inst_90661);
(statearr_90694_90718[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90679 === 11))
{var inst_90646 = (state_90678[10]);var inst_90642 = (state_90678[9]);var inst_90656 = (state_90678[2]);var inst_90657 = (new Array(0));var inst_90658 = inst_90657.push(inst_90642);var inst_90638 = inst_90657;var inst_90639 = inst_90646;var state_90678__$1 = (function (){var statearr_90695 = state_90678;(statearr_90695[12] = inst_90656);
(statearr_90695[13] = inst_90658);
(statearr_90695[7] = inst_90638);
(statearr_90695[8] = inst_90639);
return statearr_90695;
})();var statearr_90696_90719 = state_90678__$1;(statearr_90696_90719[2] = null);
(statearr_90696_90719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90679 === 12))
{var inst_90638 = (state_90678[7]);var inst_90666 = cljs.core.vec.call(null,inst_90638);var state_90678__$1 = state_90678;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90678__$1,15,out,inst_90666);
} else
{if((state_val_90679 === 13))
{var state_90678__$1 = state_90678;var statearr_90697_90720 = state_90678__$1;(statearr_90697_90720[2] = null);
(statearr_90697_90720[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90679 === 14))
{var inst_90671 = (state_90678[2]);var inst_90672 = cljs.core.async.close_BANG_.call(null,out);var state_90678__$1 = (function (){var statearr_90698 = state_90678;(statearr_90698[14] = inst_90671);
return statearr_90698;
})();var statearr_90699_90721 = state_90678__$1;(statearr_90699_90721[2] = inst_90672);
(statearr_90699_90721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90679 === 15))
{var inst_90668 = (state_90678[2]);var state_90678__$1 = state_90678;var statearr_90700_90722 = state_90678__$1;(statearr_90700_90722[2] = inst_90668);
(statearr_90700_90722[1] = 14);
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
var state_machine__18769__auto____0 = (function (){var statearr_90704 = (new Array(15));(statearr_90704[0] = state_machine__18769__auto__);
(statearr_90704[1] = 1);
return statearr_90704;
});
var state_machine__18769__auto____1 = (function (state_90678){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_90678);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e90705){if((e90705 instanceof Object))
{var ex__18772__auto__ = e90705;var statearr_90706_90723 = state_90678;(statearr_90706_90723[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90678);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e90705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__90724 = state_90678;
state_90678 = G__90724;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_90678){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_90678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_90707 = f__18839__auto__.call(null);(statearr_90707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___90708);
return statearr_90707;
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