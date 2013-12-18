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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25664 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25664 = (function (f,fn_handler,meta25665){
this.f = f;
this.fn_handler = fn_handler;
this.meta25665 = meta25665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25664.cljs$lang$type = true;
cljs.core.async.t25664.cljs$lang$ctorStr = "cljs.core.async/t25664";
cljs.core.async.t25664.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t25664");
});
cljs.core.async.t25664.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25666){var self__ = this;
var _25666__$1 = this;return self__.meta25665;
});
cljs.core.async.t25664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25666,meta25665__$1){var self__ = this;
var _25666__$1 = this;return (new cljs.core.async.t25664(self__.f,self__.fn_handler,meta25665__$1));
});
cljs.core.async.__GT_t25664 = (function __GT_t25664(f__$1,fn_handler__$1,meta25665){return (new cljs.core.async.t25664(f__$1,fn_handler__$1,meta25665));
});
}
return (new cljs.core.async.t25664(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25668 = buff;if(G__25668)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__25668.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25668.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25668);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25668);
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
{var val_25669 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25669);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_25669);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9056__auto___25670 = n;var x_25671 = 0;while(true){
if((x_25671 < n__9056__auto___25670))
{(a[x_25671] = 0);
{
var G__25672 = (x_25671 + 1);
x_25671 = G__25672;
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
var G__25673 = (i + 1);
i = G__25673;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25677 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25677 = (function (flag,alt_flag,meta25678){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25678 = meta25678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25677.cljs$lang$type = true;
cljs.core.async.t25677.cljs$lang$ctorStr = "cljs.core.async/t25677";
cljs.core.async.t25677.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t25677");
});
cljs.core.async.t25677.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t25677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t25677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25679){var self__ = this;
var _25679__$1 = this;return self__.meta25678;
});
cljs.core.async.t25677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25679,meta25678__$1){var self__ = this;
var _25679__$1 = this;return (new cljs.core.async.t25677(self__.flag,self__.alt_flag,meta25678__$1));
});
cljs.core.async.__GT_t25677 = (function __GT_t25677(flag__$1,alt_flag__$1,meta25678){return (new cljs.core.async.t25677(flag__$1,alt_flag__$1,meta25678));
});
}
return (new cljs.core.async.t25677(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25683 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25683 = (function (cb,flag,alt_handler,meta25684){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25684 = meta25684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25683.cljs$lang$type = true;
cljs.core.async.t25683.cljs$lang$ctorStr = "cljs.core.async/t25683";
cljs.core.async.t25683.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t25683");
});
cljs.core.async.t25683.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25685){var self__ = this;
var _25685__$1 = this;return self__.meta25684;
});
cljs.core.async.t25683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25685,meta25684__$1){var self__ = this;
var _25685__$1 = this;return (new cljs.core.async.t25683(self__.cb,self__.flag,self__.alt_handler,meta25684__$1));
});
cljs.core.async.__GT_t25683 = (function __GT_t25683(cb__$1,flag__$1,alt_handler__$1,meta25684){return (new cljs.core.async.t25683(cb__$1,flag__$1,alt_handler__$1,meta25684));
});
}
return (new cljs.core.async.t25683(cb,flag,alt_handler,null));
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
return (function (p1__25686_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25686_SHARP_,port], null));
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
var G__25687 = (i + 1);
i = G__25687;
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
var alts_BANG___delegate = function (ports,p__25688){var map__25690 = p__25688;var map__25690__$1 = ((cljs.core.seq_QMARK_.call(null,map__25690))?cljs.core.apply.call(null,cljs.core.hash_map,map__25690):map__25690);var opts = map__25690__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25688 = null;if (arguments.length > 1) {
  p__25688 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25688);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25691){
var ports = cljs.core.first(arglist__25691);
var p__25688 = cljs.core.rest(arglist__25691);
return alts_BANG___delegate(ports,p__25688);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25699 = (function (ch,f,map_LT_,meta25700){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25700 = meta25700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25699.cljs$lang$type = true;
cljs.core.async.t25699.cljs$lang$ctorStr = "cljs.core.async/t25699";
cljs.core.async.t25699.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t25699");
});
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25702 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25702 = (function (fn1,_,meta25700,ch,f,map_LT_,meta25703){
this.fn1 = fn1;
this._ = _;
this.meta25700 = meta25700;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25703 = meta25703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25702.cljs$lang$type = true;
cljs.core.async.t25702.cljs$lang$ctorStr = "cljs.core.async/t25702";
cljs.core.async.t25702.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t25702");
});
cljs.core.async.t25702.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t25702.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t25702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__25692_SHARP_){return f1.call(null,(((p1__25692_SHARP_ == null))?null:self__.f.call(null,p1__25692_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t25702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25704){var self__ = this;
var _25704__$1 = this;return self__.meta25703;
});
cljs.core.async.t25702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25704,meta25703__$1){var self__ = this;
var _25704__$1 = this;return (new cljs.core.async.t25702(self__.fn1,self__._,self__.meta25700,self__.ch,self__.f,self__.map_LT_,meta25703__$1));
});
cljs.core.async.__GT_t25702 = (function __GT_t25702(fn1__$1,___$2,meta25700__$1,ch__$2,f__$2,map_LT___$2,meta25703){return (new cljs.core.async.t25702(fn1__$1,___$2,meta25700__$1,ch__$2,f__$2,map_LT___$2,meta25703));
});
}
return (new cljs.core.async.t25702(fn1,___$1,self__.meta25700,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25701){var self__ = this;
var _25701__$1 = this;return self__.meta25700;
});
cljs.core.async.t25699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25701,meta25700__$1){var self__ = this;
var _25701__$1 = this;return (new cljs.core.async.t25699(self__.ch,self__.f,self__.map_LT_,meta25700__$1));
});
cljs.core.async.__GT_t25699 = (function __GT_t25699(ch__$1,f__$1,map_LT___$1,meta25700){return (new cljs.core.async.t25699(ch__$1,f__$1,map_LT___$1,meta25700));
});
}
return (new cljs.core.async.t25699(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25708 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25708 = (function (ch,f,map_GT_,meta25709){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25709 = meta25709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25708.cljs$lang$type = true;
cljs.core.async.t25708.cljs$lang$ctorStr = "cljs.core.async/t25708";
cljs.core.async.t25708.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t25708");
});
cljs.core.async.t25708.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25708.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25708.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25710){var self__ = this;
var _25710__$1 = this;return self__.meta25709;
});
cljs.core.async.t25708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25710,meta25709__$1){var self__ = this;
var _25710__$1 = this;return (new cljs.core.async.t25708(self__.ch,self__.f,self__.map_GT_,meta25709__$1));
});
cljs.core.async.__GT_t25708 = (function __GT_t25708(ch__$1,f__$1,map_GT___$1,meta25709){return (new cljs.core.async.t25708(ch__$1,f__$1,map_GT___$1,meta25709));
});
}
return (new cljs.core.async.t25708(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25714 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25714 = (function (ch,p,filter_GT_,meta25715){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25715 = meta25715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25714.cljs$lang$type = true;
cljs.core.async.t25714.cljs$lang$ctorStr = "cljs.core.async/t25714";
cljs.core.async.t25714.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t25714");
});
cljs.core.async.t25714.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25714.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25714.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25714.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25714.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25714.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25716){var self__ = this;
var _25716__$1 = this;return self__.meta25715;
});
cljs.core.async.t25714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25716,meta25715__$1){var self__ = this;
var _25716__$1 = this;return (new cljs.core.async.t25714(self__.ch,self__.p,self__.filter_GT_,meta25715__$1));
});
cljs.core.async.__GT_t25714 = (function __GT_t25714(ch__$1,p__$1,filter_GT___$1,meta25715){return (new cljs.core.async.t25714(ch__$1,p__$1,filter_GT___$1,meta25715));
});
}
return (new cljs.core.async.t25714(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___25799 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_25778){var state_val_25779 = (state_25778[1]);if((state_val_25779 === 1))
{var state_25778__$1 = state_25778;var statearr_25780_25800 = state_25778__$1;(statearr_25780_25800[2] = null);
(statearr_25780_25800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25779 === 2))
{var state_25778__$1 = state_25778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25778__$1,4,ch);
} else
{if((state_val_25779 === 3))
{var inst_25776 = (state_25778[2]);var state_25778__$1 = state_25778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25778__$1,inst_25776);
} else
{if((state_val_25779 === 4))
{var inst_25760 = (state_25778[7]);var inst_25760__$1 = (state_25778[2]);var inst_25761 = (inst_25760__$1 == null);var state_25778__$1 = (function (){var statearr_25781 = state_25778;(statearr_25781[7] = inst_25760__$1);
return statearr_25781;
})();if(cljs.core.truth_(inst_25761))
{var statearr_25782_25801 = state_25778__$1;(statearr_25782_25801[1] = 5);
} else
{var statearr_25783_25802 = state_25778__$1;(statearr_25783_25802[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25779 === 5))
{var inst_25763 = cljs.core.async.close_BANG_.call(null,out);var state_25778__$1 = state_25778;var statearr_25784_25803 = state_25778__$1;(statearr_25784_25803[2] = inst_25763);
(statearr_25784_25803[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25779 === 6))
{var inst_25760 = (state_25778[7]);var inst_25765 = p.call(null,inst_25760);var state_25778__$1 = state_25778;if(cljs.core.truth_(inst_25765))
{var statearr_25785_25804 = state_25778__$1;(statearr_25785_25804[1] = 8);
} else
{var statearr_25786_25805 = state_25778__$1;(statearr_25786_25805[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25779 === 7))
{var inst_25774 = (state_25778[2]);var state_25778__$1 = state_25778;var statearr_25787_25806 = state_25778__$1;(statearr_25787_25806[2] = inst_25774);
(statearr_25787_25806[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25779 === 8))
{var inst_25760 = (state_25778[7]);var state_25778__$1 = state_25778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25778__$1,11,out,inst_25760);
} else
{if((state_val_25779 === 9))
{var state_25778__$1 = state_25778;var statearr_25788_25807 = state_25778__$1;(statearr_25788_25807[2] = null);
(statearr_25788_25807[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25779 === 10))
{var inst_25771 = (state_25778[2]);var state_25778__$1 = (function (){var statearr_25789 = state_25778;(statearr_25789[8] = inst_25771);
return statearr_25789;
})();var statearr_25790_25808 = state_25778__$1;(statearr_25790_25808[2] = null);
(statearr_25790_25808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25779 === 11))
{var inst_25768 = (state_25778[2]);var state_25778__$1 = state_25778;var statearr_25791_25809 = state_25778__$1;(statearr_25791_25809[2] = inst_25768);
(statearr_25791_25809[1] = 10);
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
var state_machine__12116__auto____0 = (function (){var statearr_25795 = [null,null,null,null,null,null,null,null,null];(statearr_25795[0] = state_machine__12116__auto__);
(statearr_25795[1] = 1);
return statearr_25795;
});
var state_machine__12116__auto____1 = (function (state_25778){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_25778);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e25796){if((e25796 instanceof Object))
{var ex__12119__auto__ = e25796;var statearr_25797_25810 = state_25778;(statearr_25797_25810[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25811 = state_25778;
state_25778 = G__25811;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_25778){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_25778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_25798 = f__12186__auto__.call(null);(statearr_25798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___25799);
return statearr_25798;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12185__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_25963){var state_val_25964 = (state_25963[1]);if((state_val_25964 === 1))
{var state_25963__$1 = state_25963;var statearr_25965_26002 = state_25963__$1;(statearr_25965_26002[2] = null);
(statearr_25965_26002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 2))
{var state_25963__$1 = state_25963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25963__$1,4,in$);
} else
{if((state_val_25964 === 3))
{var inst_25961 = (state_25963[2]);var state_25963__$1 = state_25963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25963__$1,inst_25961);
} else
{if((state_val_25964 === 4))
{var inst_25909 = (state_25963[7]);var inst_25909__$1 = (state_25963[2]);var inst_25910 = (inst_25909__$1 == null);var state_25963__$1 = (function (){var statearr_25966 = state_25963;(statearr_25966[7] = inst_25909__$1);
return statearr_25966;
})();if(cljs.core.truth_(inst_25910))
{var statearr_25967_26003 = state_25963__$1;(statearr_25967_26003[1] = 5);
} else
{var statearr_25968_26004 = state_25963__$1;(statearr_25968_26004[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 5))
{var inst_25912 = cljs.core.async.close_BANG_.call(null,out);var state_25963__$1 = state_25963;var statearr_25969_26005 = state_25963__$1;(statearr_25969_26005[2] = inst_25912);
(statearr_25969_26005[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 6))
{var inst_25909 = (state_25963[7]);var inst_25914 = f.call(null,inst_25909);var inst_25919 = cljs.core.seq.call(null,inst_25914);var inst_25920 = inst_25919;var inst_25921 = null;var inst_25922 = 0;var inst_25923 = 0;var state_25963__$1 = (function (){var statearr_25970 = state_25963;(statearr_25970[8] = inst_25921);
(statearr_25970[9] = inst_25922);
(statearr_25970[10] = inst_25923);
(statearr_25970[11] = inst_25920);
return statearr_25970;
})();var statearr_25971_26006 = state_25963__$1;(statearr_25971_26006[2] = null);
(statearr_25971_26006[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 7))
{var inst_25959 = (state_25963[2]);var state_25963__$1 = state_25963;var statearr_25972_26007 = state_25963__$1;(statearr_25972_26007[2] = inst_25959);
(statearr_25972_26007[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 8))
{var inst_25922 = (state_25963[9]);var inst_25923 = (state_25963[10]);var inst_25925 = (inst_25923 < inst_25922);var inst_25926 = inst_25925;var state_25963__$1 = state_25963;if(cljs.core.truth_(inst_25926))
{var statearr_25973_26008 = state_25963__$1;(statearr_25973_26008[1] = 10);
} else
{var statearr_25974_26009 = state_25963__$1;(statearr_25974_26009[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 9))
{var inst_25956 = (state_25963[2]);var state_25963__$1 = (function (){var statearr_25975 = state_25963;(statearr_25975[12] = inst_25956);
return statearr_25975;
})();var statearr_25976_26010 = state_25963__$1;(statearr_25976_26010[2] = null);
(statearr_25976_26010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 10))
{var inst_25921 = (state_25963[8]);var inst_25923 = (state_25963[10]);var inst_25928 = cljs.core._nth.call(null,inst_25921,inst_25923);var state_25963__$1 = state_25963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25963__$1,13,out,inst_25928);
} else
{if((state_val_25964 === 11))
{var inst_25934 = (state_25963[13]);var inst_25920 = (state_25963[11]);var inst_25934__$1 = cljs.core.seq.call(null,inst_25920);var state_25963__$1 = (function (){var statearr_25980 = state_25963;(statearr_25980[13] = inst_25934__$1);
return statearr_25980;
})();if(inst_25934__$1)
{var statearr_25981_26011 = state_25963__$1;(statearr_25981_26011[1] = 14);
} else
{var statearr_25982_26012 = state_25963__$1;(statearr_25982_26012[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 12))
{var inst_25954 = (state_25963[2]);var state_25963__$1 = state_25963;var statearr_25983_26013 = state_25963__$1;(statearr_25983_26013[2] = inst_25954);
(statearr_25983_26013[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 13))
{var inst_25921 = (state_25963[8]);var inst_25922 = (state_25963[9]);var inst_25923 = (state_25963[10]);var inst_25920 = (state_25963[11]);var inst_25930 = (state_25963[2]);var inst_25931 = (inst_25923 + 1);var tmp25977 = inst_25921;var tmp25978 = inst_25922;var tmp25979 = inst_25920;var inst_25920__$1 = tmp25979;var inst_25921__$1 = tmp25977;var inst_25922__$1 = tmp25978;var inst_25923__$1 = inst_25931;var state_25963__$1 = (function (){var statearr_25984 = state_25963;(statearr_25984[8] = inst_25921__$1);
(statearr_25984[9] = inst_25922__$1);
(statearr_25984[14] = inst_25930);
(statearr_25984[10] = inst_25923__$1);
(statearr_25984[11] = inst_25920__$1);
return statearr_25984;
})();var statearr_25985_26014 = state_25963__$1;(statearr_25985_26014[2] = null);
(statearr_25985_26014[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 14))
{var inst_25934 = (state_25963[13]);var inst_25936 = cljs.core.chunked_seq_QMARK_.call(null,inst_25934);var state_25963__$1 = state_25963;if(inst_25936)
{var statearr_25986_26015 = state_25963__$1;(statearr_25986_26015[1] = 17);
} else
{var statearr_25987_26016 = state_25963__$1;(statearr_25987_26016[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 15))
{var state_25963__$1 = state_25963;var statearr_25988_26017 = state_25963__$1;(statearr_25988_26017[2] = null);
(statearr_25988_26017[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 16))
{var inst_25952 = (state_25963[2]);var state_25963__$1 = state_25963;var statearr_25989_26018 = state_25963__$1;(statearr_25989_26018[2] = inst_25952);
(statearr_25989_26018[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 17))
{var inst_25934 = (state_25963[13]);var inst_25938 = cljs.core.chunk_first.call(null,inst_25934);var inst_25939 = cljs.core.chunk_rest.call(null,inst_25934);var inst_25940 = cljs.core.count.call(null,inst_25938);var inst_25920 = inst_25939;var inst_25921 = inst_25938;var inst_25922 = inst_25940;var inst_25923 = 0;var state_25963__$1 = (function (){var statearr_25990 = state_25963;(statearr_25990[8] = inst_25921);
(statearr_25990[9] = inst_25922);
(statearr_25990[10] = inst_25923);
(statearr_25990[11] = inst_25920);
return statearr_25990;
})();var statearr_25991_26019 = state_25963__$1;(statearr_25991_26019[2] = null);
(statearr_25991_26019[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 18))
{var inst_25934 = (state_25963[13]);var inst_25943 = cljs.core.first.call(null,inst_25934);var state_25963__$1 = state_25963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25963__$1,20,out,inst_25943);
} else
{if((state_val_25964 === 19))
{var inst_25949 = (state_25963[2]);var state_25963__$1 = state_25963;var statearr_25992_26020 = state_25963__$1;(statearr_25992_26020[2] = inst_25949);
(statearr_25992_26020[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25964 === 20))
{var inst_25934 = (state_25963[13]);var inst_25945 = (state_25963[2]);var inst_25946 = cljs.core.next.call(null,inst_25934);var inst_25920 = inst_25946;var inst_25921 = null;var inst_25922 = 0;var inst_25923 = 0;var state_25963__$1 = (function (){var statearr_25993 = state_25963;(statearr_25993[8] = inst_25921);
(statearr_25993[9] = inst_25922);
(statearr_25993[10] = inst_25923);
(statearr_25993[11] = inst_25920);
(statearr_25993[15] = inst_25945);
return statearr_25993;
})();var statearr_25994_26021 = state_25963__$1;(statearr_25994_26021[2] = null);
(statearr_25994_26021[1] = 8);
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
var state_machine__12116__auto____0 = (function (){var statearr_25998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25998[0] = state_machine__12116__auto__);
(statearr_25998[1] = 1);
return statearr_25998;
});
var state_machine__12116__auto____1 = (function (state_25963){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_25963);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e25999){if((e25999 instanceof Object))
{var ex__12119__auto__ = e25999;var statearr_26000_26022 = state_25963;(statearr_26000_26022[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25963);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26023 = state_25963;
state_25963 = G__26023;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_25963){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_25963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_26001 = f__12186__auto__.call(null);(statearr_26001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto__);
return statearr_26001;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12185__auto___26104 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_26083){var state_val_26084 = (state_26083[1]);if((state_val_26084 === 1))
{var state_26083__$1 = state_26083;var statearr_26085_26105 = state_26083__$1;(statearr_26085_26105[2] = null);
(statearr_26085_26105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26084 === 2))
{var state_26083__$1 = state_26083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26083__$1,4,from);
} else
{if((state_val_26084 === 3))
{var inst_26081 = (state_26083[2]);var state_26083__$1 = state_26083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26083__$1,inst_26081);
} else
{if((state_val_26084 === 4))
{var inst_26066 = (state_26083[7]);var inst_26066__$1 = (state_26083[2]);var inst_26067 = (inst_26066__$1 == null);var state_26083__$1 = (function (){var statearr_26086 = state_26083;(statearr_26086[7] = inst_26066__$1);
return statearr_26086;
})();if(cljs.core.truth_(inst_26067))
{var statearr_26087_26106 = state_26083__$1;(statearr_26087_26106[1] = 5);
} else
{var statearr_26088_26107 = state_26083__$1;(statearr_26088_26107[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26084 === 5))
{var state_26083__$1 = state_26083;if(cljs.core.truth_(close_QMARK_))
{var statearr_26089_26108 = state_26083__$1;(statearr_26089_26108[1] = 8);
} else
{var statearr_26090_26109 = state_26083__$1;(statearr_26090_26109[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26084 === 6))
{var inst_26066 = (state_26083[7]);var state_26083__$1 = state_26083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26083__$1,11,to,inst_26066);
} else
{if((state_val_26084 === 7))
{var inst_26079 = (state_26083[2]);var state_26083__$1 = state_26083;var statearr_26091_26110 = state_26083__$1;(statearr_26091_26110[2] = inst_26079);
(statearr_26091_26110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26084 === 8))
{var inst_26070 = cljs.core.async.close_BANG_.call(null,to);var state_26083__$1 = state_26083;var statearr_26092_26111 = state_26083__$1;(statearr_26092_26111[2] = inst_26070);
(statearr_26092_26111[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26084 === 9))
{var state_26083__$1 = state_26083;var statearr_26093_26112 = state_26083__$1;(statearr_26093_26112[2] = null);
(statearr_26093_26112[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26084 === 10))
{var inst_26073 = (state_26083[2]);var state_26083__$1 = state_26083;var statearr_26094_26113 = state_26083__$1;(statearr_26094_26113[2] = inst_26073);
(statearr_26094_26113[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26084 === 11))
{var inst_26076 = (state_26083[2]);var state_26083__$1 = (function (){var statearr_26095 = state_26083;(statearr_26095[8] = inst_26076);
return statearr_26095;
})();var statearr_26096_26114 = state_26083__$1;(statearr_26096_26114[2] = null);
(statearr_26096_26114[1] = 2);
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
var state_machine__12116__auto____0 = (function (){var statearr_26100 = [null,null,null,null,null,null,null,null,null];(statearr_26100[0] = state_machine__12116__auto__);
(statearr_26100[1] = 1);
return statearr_26100;
});
var state_machine__12116__auto____1 = (function (state_26083){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_26083);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e26101){if((e26101 instanceof Object))
{var ex__12119__auto__ = e26101;var statearr_26102_26115 = state_26083;(statearr_26102_26115[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26116 = state_26083;
state_26083 = G__26116;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_26083){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_26083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_26103 = f__12186__auto__.call(null);(statearr_26103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___26104);
return statearr_26103;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12185__auto___26203 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_26181){var state_val_26182 = (state_26181[1]);if((state_val_26182 === 1))
{var state_26181__$1 = state_26181;var statearr_26183_26204 = state_26181__$1;(statearr_26183_26204[2] = null);
(statearr_26183_26204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26182 === 2))
{var state_26181__$1 = state_26181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26181__$1,4,ch);
} else
{if((state_val_26182 === 3))
{var inst_26179 = (state_26181[2]);var state_26181__$1 = state_26181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26181__$1,inst_26179);
} else
{if((state_val_26182 === 4))
{var inst_26162 = (state_26181[7]);var inst_26162__$1 = (state_26181[2]);var inst_26163 = (inst_26162__$1 == null);var state_26181__$1 = (function (){var statearr_26184 = state_26181;(statearr_26184[7] = inst_26162__$1);
return statearr_26184;
})();if(cljs.core.truth_(inst_26163))
{var statearr_26185_26205 = state_26181__$1;(statearr_26185_26205[1] = 5);
} else
{var statearr_26186_26206 = state_26181__$1;(statearr_26186_26206[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26182 === 5))
{var inst_26165 = cljs.core.async.close_BANG_.call(null,tc);var inst_26166 = cljs.core.async.close_BANG_.call(null,fc);var state_26181__$1 = (function (){var statearr_26187 = state_26181;(statearr_26187[8] = inst_26165);
return statearr_26187;
})();var statearr_26188_26207 = state_26181__$1;(statearr_26188_26207[2] = inst_26166);
(statearr_26188_26207[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26182 === 6))
{var inst_26162 = (state_26181[7]);var inst_26168 = p.call(null,inst_26162);var state_26181__$1 = state_26181;if(cljs.core.truth_(inst_26168))
{var statearr_26189_26208 = state_26181__$1;(statearr_26189_26208[1] = 9);
} else
{var statearr_26190_26209 = state_26181__$1;(statearr_26190_26209[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26182 === 7))
{var inst_26177 = (state_26181[2]);var state_26181__$1 = state_26181;var statearr_26191_26210 = state_26181__$1;(statearr_26191_26210[2] = inst_26177);
(statearr_26191_26210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26182 === 8))
{var inst_26174 = (state_26181[2]);var state_26181__$1 = (function (){var statearr_26192 = state_26181;(statearr_26192[9] = inst_26174);
return statearr_26192;
})();var statearr_26193_26211 = state_26181__$1;(statearr_26193_26211[2] = null);
(statearr_26193_26211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26182 === 9))
{var state_26181__$1 = state_26181;var statearr_26194_26212 = state_26181__$1;(statearr_26194_26212[2] = tc);
(statearr_26194_26212[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26182 === 10))
{var state_26181__$1 = state_26181;var statearr_26195_26213 = state_26181__$1;(statearr_26195_26213[2] = fc);
(statearr_26195_26213[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26182 === 11))
{var inst_26162 = (state_26181[7]);var inst_26172 = (state_26181[2]);var state_26181__$1 = state_26181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26181__$1,8,inst_26172,inst_26162);
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
var state_machine__12116__auto____0 = (function (){var statearr_26199 = [null,null,null,null,null,null,null,null,null,null];(statearr_26199[0] = state_machine__12116__auto__);
(statearr_26199[1] = 1);
return statearr_26199;
});
var state_machine__12116__auto____1 = (function (state_26181){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_26181);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e26200){if((e26200 instanceof Object))
{var ex__12119__auto__ = e26200;var statearr_26201_26214 = state_26181;(statearr_26201_26214[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26215 = state_26181;
state_26181 = G__26215;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_26181){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_26181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_26202 = f__12186__auto__.call(null);(statearr_26202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___26203);
return statearr_26202;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12185__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_26262){var state_val_26263 = (state_26262[1]);if((state_val_26263 === 7))
{var inst_26258 = (state_26262[2]);var state_26262__$1 = state_26262;var statearr_26264_26280 = state_26262__$1;(statearr_26264_26280[2] = inst_26258);
(statearr_26264_26280[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26263 === 6))
{var inst_26251 = (state_26262[7]);var inst_26248 = (state_26262[8]);var inst_26255 = f.call(null,inst_26248,inst_26251);var inst_26248__$1 = inst_26255;var state_26262__$1 = (function (){var statearr_26265 = state_26262;(statearr_26265[8] = inst_26248__$1);
return statearr_26265;
})();var statearr_26266_26281 = state_26262__$1;(statearr_26266_26281[2] = null);
(statearr_26266_26281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26263 === 5))
{var inst_26248 = (state_26262[8]);var state_26262__$1 = state_26262;var statearr_26267_26282 = state_26262__$1;(statearr_26267_26282[2] = inst_26248);
(statearr_26267_26282[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26263 === 4))
{var inst_26251 = (state_26262[7]);var inst_26251__$1 = (state_26262[2]);var inst_26252 = (inst_26251__$1 == null);var state_26262__$1 = (function (){var statearr_26268 = state_26262;(statearr_26268[7] = inst_26251__$1);
return statearr_26268;
})();if(cljs.core.truth_(inst_26252))
{var statearr_26269_26283 = state_26262__$1;(statearr_26269_26283[1] = 5);
} else
{var statearr_26270_26284 = state_26262__$1;(statearr_26270_26284[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26263 === 3))
{var inst_26260 = (state_26262[2]);var state_26262__$1 = state_26262;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26262__$1,inst_26260);
} else
{if((state_val_26263 === 2))
{var state_26262__$1 = state_26262;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26262__$1,4,ch);
} else
{if((state_val_26263 === 1))
{var inst_26248 = init;var state_26262__$1 = (function (){var statearr_26271 = state_26262;(statearr_26271[8] = inst_26248);
return statearr_26271;
})();var statearr_26272_26285 = state_26262__$1;(statearr_26272_26285[2] = null);
(statearr_26272_26285[1] = 2);
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
var state_machine__12116__auto____0 = (function (){var statearr_26276 = [null,null,null,null,null,null,null,null,null];(statearr_26276[0] = state_machine__12116__auto__);
(statearr_26276[1] = 1);
return statearr_26276;
});
var state_machine__12116__auto____1 = (function (state_26262){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_26262);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e26277){if((e26277 instanceof Object))
{var ex__12119__auto__ = e26277;var statearr_26278_26286 = state_26262;(statearr_26278_26286[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26262);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26287 = state_26262;
state_26262 = G__26287;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_26262){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_26262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_26279 = f__12186__auto__.call(null);(statearr_26279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto__);
return statearr_26279;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12185__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_26349){var state_val_26350 = (state_26349[1]);if((state_val_26350 === 1))
{var inst_26329 = cljs.core.seq.call(null,coll);var inst_26330 = inst_26329;var state_26349__$1 = (function (){var statearr_26351 = state_26349;(statearr_26351[7] = inst_26330);
return statearr_26351;
})();var statearr_26352_26370 = state_26349__$1;(statearr_26352_26370[2] = null);
(statearr_26352_26370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26350 === 2))
{var inst_26330 = (state_26349[7]);var state_26349__$1 = state_26349;if(cljs.core.truth_(inst_26330))
{var statearr_26353_26371 = state_26349__$1;(statearr_26353_26371[1] = 4);
} else
{var statearr_26354_26372 = state_26349__$1;(statearr_26354_26372[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26350 === 3))
{var inst_26347 = (state_26349[2]);var state_26349__$1 = state_26349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26349__$1,inst_26347);
} else
{if((state_val_26350 === 4))
{var inst_26330 = (state_26349[7]);var inst_26333 = cljs.core.first.call(null,inst_26330);var state_26349__$1 = state_26349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26349__$1,7,ch,inst_26333);
} else
{if((state_val_26350 === 5))
{var state_26349__$1 = state_26349;if(cljs.core.truth_(close_QMARK_))
{var statearr_26355_26373 = state_26349__$1;(statearr_26355_26373[1] = 8);
} else
{var statearr_26356_26374 = state_26349__$1;(statearr_26356_26374[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26350 === 6))
{var inst_26345 = (state_26349[2]);var state_26349__$1 = state_26349;var statearr_26357_26375 = state_26349__$1;(statearr_26357_26375[2] = inst_26345);
(statearr_26357_26375[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26350 === 7))
{var inst_26330 = (state_26349[7]);var inst_26335 = (state_26349[2]);var inst_26336 = cljs.core.next.call(null,inst_26330);var inst_26330__$1 = inst_26336;var state_26349__$1 = (function (){var statearr_26358 = state_26349;(statearr_26358[8] = inst_26335);
(statearr_26358[7] = inst_26330__$1);
return statearr_26358;
})();var statearr_26359_26376 = state_26349__$1;(statearr_26359_26376[2] = null);
(statearr_26359_26376[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26350 === 8))
{var inst_26340 = cljs.core.async.close_BANG_.call(null,ch);var state_26349__$1 = state_26349;var statearr_26360_26377 = state_26349__$1;(statearr_26360_26377[2] = inst_26340);
(statearr_26360_26377[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26350 === 9))
{var state_26349__$1 = state_26349;var statearr_26361_26378 = state_26349__$1;(statearr_26361_26378[2] = null);
(statearr_26361_26378[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26350 === 10))
{var inst_26343 = (state_26349[2]);var state_26349__$1 = state_26349;var statearr_26362_26379 = state_26349__$1;(statearr_26362_26379[2] = inst_26343);
(statearr_26362_26379[1] = 6);
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
var state_machine__12116__auto____0 = (function (){var statearr_26366 = [null,null,null,null,null,null,null,null,null];(statearr_26366[0] = state_machine__12116__auto__);
(statearr_26366[1] = 1);
return statearr_26366;
});
var state_machine__12116__auto____1 = (function (state_26349){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_26349);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e26367){if((e26367 instanceof Object))
{var ex__12119__auto__ = e26367;var statearr_26368_26380 = state_26349;(statearr_26368_26380[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26349);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26381 = state_26349;
state_26349 = G__26381;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_26349){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_26349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_26369 = f__12186__auto__.call(null);(statearr_26369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto__);
return statearr_26369;
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
cljs.core.async.Mux = (function (){var obj26383 = {};return obj26383;
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
cljs.core.async.Mult = (function (){var obj26385 = {};return obj26385;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26609 = (function (cs,ch,mult,meta26610){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26610 = meta26610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26609.cljs$lang$type = true;
cljs.core.async.t26609.cljs$lang$ctorStr = "cljs.core.async/t26609";
cljs.core.async.t26609.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t26609");
});})(cs))
;
cljs.core.async.t26609.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26609.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26609.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26609.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26609.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26609.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26611){var self__ = this;
var _26611__$1 = this;return self__.meta26610;
});})(cs))
;
cljs.core.async.t26609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26611,meta26610__$1){var self__ = this;
var _26611__$1 = this;return (new cljs.core.async.t26609(self__.cs,self__.ch,self__.mult,meta26610__$1));
});})(cs))
;
cljs.core.async.__GT_t26609 = ((function (cs){
return (function __GT_t26609(cs__$1,ch__$1,mult__$1,meta26610){return (new cljs.core.async.t26609(cs__$1,ch__$1,mult__$1,meta26610));
});})(cs))
;
}
return (new cljs.core.async.t26609(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12185__auto___26832 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_26746){var state_val_26747 = (state_26746[1]);if((state_val_26747 === 32))
{var inst_26614 = (state_26746[7]);var inst_26690 = (state_26746[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26746,31,Object,null,30);var inst_26697 = cljs.core.async.put_BANG_.call(null,inst_26690,inst_26614,done);var state_26746__$1 = state_26746;var statearr_26748_26833 = state_26746__$1;(statearr_26748_26833[2] = inst_26697);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26746__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 1))
{var state_26746__$1 = state_26746;var statearr_26749_26834 = state_26746__$1;(statearr_26749_26834[2] = null);
(statearr_26749_26834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 33))
{var inst_26703 = (state_26746[9]);var inst_26705 = cljs.core.chunked_seq_QMARK_.call(null,inst_26703);var state_26746__$1 = state_26746;if(inst_26705)
{var statearr_26750_26835 = state_26746__$1;(statearr_26750_26835[1] = 36);
} else
{var statearr_26751_26836 = state_26746__$1;(statearr_26751_26836[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 2))
{var state_26746__$1 = state_26746;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26746__$1,4,ch);
} else
{if((state_val_26747 === 34))
{var state_26746__$1 = state_26746;var statearr_26752_26837 = state_26746__$1;(statearr_26752_26837[2] = null);
(statearr_26752_26837[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 3))
{var inst_26744 = (state_26746[2]);var state_26746__$1 = state_26746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26746__$1,inst_26744);
} else
{if((state_val_26747 === 35))
{var inst_26728 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26753_26838 = state_26746__$1;(statearr_26753_26838[2] = inst_26728);
(statearr_26753_26838[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 4))
{var inst_26614 = (state_26746[7]);var inst_26614__$1 = (state_26746[2]);var inst_26615 = (inst_26614__$1 == null);var state_26746__$1 = (function (){var statearr_26754 = state_26746;(statearr_26754[7] = inst_26614__$1);
return statearr_26754;
})();if(cljs.core.truth_(inst_26615))
{var statearr_26755_26839 = state_26746__$1;(statearr_26755_26839[1] = 5);
} else
{var statearr_26756_26840 = state_26746__$1;(statearr_26756_26840[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 36))
{var inst_26703 = (state_26746[9]);var inst_26707 = cljs.core.chunk_first.call(null,inst_26703);var inst_26708 = cljs.core.chunk_rest.call(null,inst_26703);var inst_26709 = cljs.core.count.call(null,inst_26707);var inst_26682 = inst_26708;var inst_26683 = inst_26707;var inst_26684 = inst_26709;var inst_26685 = 0;var state_26746__$1 = (function (){var statearr_26757 = state_26746;(statearr_26757[10] = inst_26685);
(statearr_26757[11] = inst_26683);
(statearr_26757[12] = inst_26684);
(statearr_26757[13] = inst_26682);
return statearr_26757;
})();var statearr_26758_26841 = state_26746__$1;(statearr_26758_26841[2] = null);
(statearr_26758_26841[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 5))
{var inst_26621 = cljs.core.deref.call(null,cs);var inst_26622 = cljs.core.seq.call(null,inst_26621);var inst_26623 = inst_26622;var inst_26624 = null;var inst_26625 = 0;var inst_26626 = 0;var state_26746__$1 = (function (){var statearr_26759 = state_26746;(statearr_26759[14] = inst_26625);
(statearr_26759[15] = inst_26626);
(statearr_26759[16] = inst_26624);
(statearr_26759[17] = inst_26623);
return statearr_26759;
})();var statearr_26760_26842 = state_26746__$1;(statearr_26760_26842[2] = null);
(statearr_26760_26842[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 37))
{var inst_26703 = (state_26746[9]);var inst_26712 = cljs.core.first.call(null,inst_26703);var state_26746__$1 = (function (){var statearr_26761 = state_26746;(statearr_26761[18] = inst_26712);
return statearr_26761;
})();var statearr_26762_26843 = state_26746__$1;(statearr_26762_26843[2] = null);
(statearr_26762_26843[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 6))
{var inst_26674 = (state_26746[19]);var inst_26673 = cljs.core.deref.call(null,cs);var inst_26674__$1 = cljs.core.keys.call(null,inst_26673);var inst_26675 = cljs.core.count.call(null,inst_26674__$1);var inst_26676 = cljs.core.reset_BANG_.call(null,dctr,inst_26675);var inst_26681 = cljs.core.seq.call(null,inst_26674__$1);var inst_26682 = inst_26681;var inst_26683 = null;var inst_26684 = 0;var inst_26685 = 0;var state_26746__$1 = (function (){var statearr_26763 = state_26746;(statearr_26763[20] = inst_26676);
(statearr_26763[19] = inst_26674__$1);
(statearr_26763[10] = inst_26685);
(statearr_26763[11] = inst_26683);
(statearr_26763[12] = inst_26684);
(statearr_26763[13] = inst_26682);
return statearr_26763;
})();var statearr_26764_26844 = state_26746__$1;(statearr_26764_26844[2] = null);
(statearr_26764_26844[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 38))
{var inst_26725 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26765_26845 = state_26746__$1;(statearr_26765_26845[2] = inst_26725);
(statearr_26765_26845[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 7))
{var inst_26742 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26766_26846 = state_26746__$1;(statearr_26766_26846[2] = inst_26742);
(statearr_26766_26846[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 39))
{var inst_26703 = (state_26746[9]);var inst_26721 = (state_26746[2]);var inst_26722 = cljs.core.next.call(null,inst_26703);var inst_26682 = inst_26722;var inst_26683 = null;var inst_26684 = 0;var inst_26685 = 0;var state_26746__$1 = (function (){var statearr_26767 = state_26746;(statearr_26767[10] = inst_26685);
(statearr_26767[11] = inst_26683);
(statearr_26767[12] = inst_26684);
(statearr_26767[13] = inst_26682);
(statearr_26767[21] = inst_26721);
return statearr_26767;
})();var statearr_26768_26847 = state_26746__$1;(statearr_26768_26847[2] = null);
(statearr_26768_26847[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 8))
{var inst_26625 = (state_26746[14]);var inst_26626 = (state_26746[15]);var inst_26628 = (inst_26626 < inst_26625);var inst_26629 = inst_26628;var state_26746__$1 = state_26746;if(cljs.core.truth_(inst_26629))
{var statearr_26769_26848 = state_26746__$1;(statearr_26769_26848[1] = 10);
} else
{var statearr_26770_26849 = state_26746__$1;(statearr_26770_26849[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 40))
{var inst_26712 = (state_26746[18]);var inst_26713 = (state_26746[2]);var inst_26714 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26715 = cljs.core.async.untap_STAR_.call(null,m,inst_26712);var state_26746__$1 = (function (){var statearr_26771 = state_26746;(statearr_26771[22] = inst_26713);
(statearr_26771[23] = inst_26714);
return statearr_26771;
})();var statearr_26772_26850 = state_26746__$1;(statearr_26772_26850[2] = inst_26715);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26746__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 9))
{var inst_26671 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26773_26851 = state_26746__$1;(statearr_26773_26851[2] = inst_26671);
(statearr_26773_26851[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 41))
{var inst_26712 = (state_26746[18]);var inst_26614 = (state_26746[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26746,40,Object,null,39);var inst_26719 = cljs.core.async.put_BANG_.call(null,inst_26712,inst_26614,done);var state_26746__$1 = state_26746;var statearr_26774_26852 = state_26746__$1;(statearr_26774_26852[2] = inst_26719);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26746__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 10))
{var inst_26626 = (state_26746[15]);var inst_26624 = (state_26746[16]);var inst_26632 = cljs.core._nth.call(null,inst_26624,inst_26626);var inst_26633 = cljs.core.nth.call(null,inst_26632,0,null);var inst_26634 = cljs.core.nth.call(null,inst_26632,1,null);var state_26746__$1 = (function (){var statearr_26775 = state_26746;(statearr_26775[24] = inst_26633);
return statearr_26775;
})();if(cljs.core.truth_(inst_26634))
{var statearr_26776_26853 = state_26746__$1;(statearr_26776_26853[1] = 13);
} else
{var statearr_26777_26854 = state_26746__$1;(statearr_26777_26854[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 42))
{var state_26746__$1 = state_26746;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26746__$1,45,dchan);
} else
{if((state_val_26747 === 11))
{var inst_26623 = (state_26746[17]);var inst_26643 = (state_26746[25]);var inst_26643__$1 = cljs.core.seq.call(null,inst_26623);var state_26746__$1 = (function (){var statearr_26778 = state_26746;(statearr_26778[25] = inst_26643__$1);
return statearr_26778;
})();if(inst_26643__$1)
{var statearr_26779_26855 = state_26746__$1;(statearr_26779_26855[1] = 16);
} else
{var statearr_26780_26856 = state_26746__$1;(statearr_26780_26856[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 43))
{var state_26746__$1 = state_26746;var statearr_26781_26857 = state_26746__$1;(statearr_26781_26857[2] = null);
(statearr_26781_26857[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 12))
{var inst_26669 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26782_26858 = state_26746__$1;(statearr_26782_26858[2] = inst_26669);
(statearr_26782_26858[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 44))
{var inst_26739 = (state_26746[2]);var state_26746__$1 = (function (){var statearr_26783 = state_26746;(statearr_26783[26] = inst_26739);
return statearr_26783;
})();var statearr_26784_26859 = state_26746__$1;(statearr_26784_26859[2] = null);
(statearr_26784_26859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 13))
{var inst_26633 = (state_26746[24]);var inst_26636 = cljs.core.async.close_BANG_.call(null,inst_26633);var state_26746__$1 = state_26746;var statearr_26785_26860 = state_26746__$1;(statearr_26785_26860[2] = inst_26636);
(statearr_26785_26860[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 45))
{var inst_26736 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26789_26861 = state_26746__$1;(statearr_26789_26861[2] = inst_26736);
(statearr_26789_26861[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 14))
{var state_26746__$1 = state_26746;var statearr_26790_26862 = state_26746__$1;(statearr_26790_26862[2] = null);
(statearr_26790_26862[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 15))
{var inst_26625 = (state_26746[14]);var inst_26626 = (state_26746[15]);var inst_26624 = (state_26746[16]);var inst_26623 = (state_26746[17]);var inst_26639 = (state_26746[2]);var inst_26640 = (inst_26626 + 1);var tmp26786 = inst_26625;var tmp26787 = inst_26624;var tmp26788 = inst_26623;var inst_26623__$1 = tmp26788;var inst_26624__$1 = tmp26787;var inst_26625__$1 = tmp26786;var inst_26626__$1 = inst_26640;var state_26746__$1 = (function (){var statearr_26791 = state_26746;(statearr_26791[14] = inst_26625__$1);
(statearr_26791[15] = inst_26626__$1);
(statearr_26791[16] = inst_26624__$1);
(statearr_26791[17] = inst_26623__$1);
(statearr_26791[27] = inst_26639);
return statearr_26791;
})();var statearr_26792_26863 = state_26746__$1;(statearr_26792_26863[2] = null);
(statearr_26792_26863[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 16))
{var inst_26643 = (state_26746[25]);var inst_26645 = cljs.core.chunked_seq_QMARK_.call(null,inst_26643);var state_26746__$1 = state_26746;if(inst_26645)
{var statearr_26793_26864 = state_26746__$1;(statearr_26793_26864[1] = 19);
} else
{var statearr_26794_26865 = state_26746__$1;(statearr_26794_26865[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 17))
{var state_26746__$1 = state_26746;var statearr_26795_26866 = state_26746__$1;(statearr_26795_26866[2] = null);
(statearr_26795_26866[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 18))
{var inst_26667 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26796_26867 = state_26746__$1;(statearr_26796_26867[2] = inst_26667);
(statearr_26796_26867[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 19))
{var inst_26643 = (state_26746[25]);var inst_26647 = cljs.core.chunk_first.call(null,inst_26643);var inst_26648 = cljs.core.chunk_rest.call(null,inst_26643);var inst_26649 = cljs.core.count.call(null,inst_26647);var inst_26623 = inst_26648;var inst_26624 = inst_26647;var inst_26625 = inst_26649;var inst_26626 = 0;var state_26746__$1 = (function (){var statearr_26797 = state_26746;(statearr_26797[14] = inst_26625);
(statearr_26797[15] = inst_26626);
(statearr_26797[16] = inst_26624);
(statearr_26797[17] = inst_26623);
return statearr_26797;
})();var statearr_26798_26868 = state_26746__$1;(statearr_26798_26868[2] = null);
(statearr_26798_26868[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 20))
{var inst_26643 = (state_26746[25]);var inst_26653 = cljs.core.first.call(null,inst_26643);var inst_26654 = cljs.core.nth.call(null,inst_26653,0,null);var inst_26655 = cljs.core.nth.call(null,inst_26653,1,null);var state_26746__$1 = (function (){var statearr_26799 = state_26746;(statearr_26799[28] = inst_26654);
return statearr_26799;
})();if(cljs.core.truth_(inst_26655))
{var statearr_26800_26869 = state_26746__$1;(statearr_26800_26869[1] = 22);
} else
{var statearr_26801_26870 = state_26746__$1;(statearr_26801_26870[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 21))
{var inst_26664 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26802_26871 = state_26746__$1;(statearr_26802_26871[2] = inst_26664);
(statearr_26802_26871[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 22))
{var inst_26654 = (state_26746[28]);var inst_26657 = cljs.core.async.close_BANG_.call(null,inst_26654);var state_26746__$1 = state_26746;var statearr_26803_26872 = state_26746__$1;(statearr_26803_26872[2] = inst_26657);
(statearr_26803_26872[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 23))
{var state_26746__$1 = state_26746;var statearr_26804_26873 = state_26746__$1;(statearr_26804_26873[2] = null);
(statearr_26804_26873[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 24))
{var inst_26643 = (state_26746[25]);var inst_26660 = (state_26746[2]);var inst_26661 = cljs.core.next.call(null,inst_26643);var inst_26623 = inst_26661;var inst_26624 = null;var inst_26625 = 0;var inst_26626 = 0;var state_26746__$1 = (function (){var statearr_26805 = state_26746;(statearr_26805[14] = inst_26625);
(statearr_26805[15] = inst_26626);
(statearr_26805[29] = inst_26660);
(statearr_26805[16] = inst_26624);
(statearr_26805[17] = inst_26623);
return statearr_26805;
})();var statearr_26806_26874 = state_26746__$1;(statearr_26806_26874[2] = null);
(statearr_26806_26874[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 25))
{var inst_26685 = (state_26746[10]);var inst_26684 = (state_26746[12]);var inst_26687 = (inst_26685 < inst_26684);var inst_26688 = inst_26687;var state_26746__$1 = state_26746;if(cljs.core.truth_(inst_26688))
{var statearr_26807_26875 = state_26746__$1;(statearr_26807_26875[1] = 27);
} else
{var statearr_26808_26876 = state_26746__$1;(statearr_26808_26876[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 26))
{var inst_26674 = (state_26746[19]);var inst_26732 = (state_26746[2]);var inst_26733 = cljs.core.seq.call(null,inst_26674);var state_26746__$1 = (function (){var statearr_26809 = state_26746;(statearr_26809[30] = inst_26732);
return statearr_26809;
})();if(inst_26733)
{var statearr_26810_26877 = state_26746__$1;(statearr_26810_26877[1] = 42);
} else
{var statearr_26811_26878 = state_26746__$1;(statearr_26811_26878[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 27))
{var inst_26685 = (state_26746[10]);var inst_26683 = (state_26746[11]);var inst_26690 = cljs.core._nth.call(null,inst_26683,inst_26685);var state_26746__$1 = (function (){var statearr_26812 = state_26746;(statearr_26812[8] = inst_26690);
return statearr_26812;
})();var statearr_26813_26879 = state_26746__$1;(statearr_26813_26879[2] = null);
(statearr_26813_26879[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 28))
{var inst_26703 = (state_26746[9]);var inst_26682 = (state_26746[13]);var inst_26703__$1 = cljs.core.seq.call(null,inst_26682);var state_26746__$1 = (function (){var statearr_26817 = state_26746;(statearr_26817[9] = inst_26703__$1);
return statearr_26817;
})();if(inst_26703__$1)
{var statearr_26818_26880 = state_26746__$1;(statearr_26818_26880[1] = 33);
} else
{var statearr_26819_26881 = state_26746__$1;(statearr_26819_26881[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 29))
{var inst_26730 = (state_26746[2]);var state_26746__$1 = state_26746;var statearr_26820_26882 = state_26746__$1;(statearr_26820_26882[2] = inst_26730);
(statearr_26820_26882[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 30))
{var inst_26685 = (state_26746[10]);var inst_26683 = (state_26746[11]);var inst_26684 = (state_26746[12]);var inst_26682 = (state_26746[13]);var inst_26699 = (state_26746[2]);var inst_26700 = (inst_26685 + 1);var tmp26814 = inst_26683;var tmp26815 = inst_26684;var tmp26816 = inst_26682;var inst_26682__$1 = tmp26816;var inst_26683__$1 = tmp26814;var inst_26684__$1 = tmp26815;var inst_26685__$1 = inst_26700;var state_26746__$1 = (function (){var statearr_26821 = state_26746;(statearr_26821[10] = inst_26685__$1);
(statearr_26821[11] = inst_26683__$1);
(statearr_26821[12] = inst_26684__$1);
(statearr_26821[31] = inst_26699);
(statearr_26821[13] = inst_26682__$1);
return statearr_26821;
})();var statearr_26822_26883 = state_26746__$1;(statearr_26822_26883[2] = null);
(statearr_26822_26883[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26747 === 31))
{var inst_26690 = (state_26746[8]);var inst_26691 = (state_26746[2]);var inst_26692 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26693 = cljs.core.async.untap_STAR_.call(null,m,inst_26690);var state_26746__$1 = (function (){var statearr_26823 = state_26746;(statearr_26823[32] = inst_26691);
(statearr_26823[33] = inst_26692);
return statearr_26823;
})();var statearr_26824_26884 = state_26746__$1;(statearr_26824_26884[2] = inst_26693);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26746__$1);
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
var state_machine__12116__auto____0 = (function (){var statearr_26828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26828[0] = state_machine__12116__auto__);
(statearr_26828[1] = 1);
return statearr_26828;
});
var state_machine__12116__auto____1 = (function (state_26746){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_26746);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e26829){if((e26829 instanceof Object))
{var ex__12119__auto__ = e26829;var statearr_26830_26885 = state_26746;(statearr_26830_26885[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26746);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26886 = state_26746;
state_26746 = G__26886;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_26746){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_26746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_26831 = f__12186__auto__.call(null);(statearr_26831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___26832);
return statearr_26831;
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
cljs.core.async.Mix = (function (){var obj26888 = {};return obj26888;
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
;var m = (function (){if(typeof cljs.core.async.t26998 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26998 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26999){
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
this.meta26999 = meta26999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26998.cljs$lang$type = true;
cljs.core.async.t26998.cljs$lang$ctorStr = "cljs.core.async/t26998";
cljs.core.async.t26998.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t26998");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26998.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26998.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26998.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26998.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26998.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26998.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26998.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27000){var self__ = this;
var _27000__$1 = this;return self__.meta26999;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27000,meta26999__$1){var self__ = this;
var _27000__$1 = this;return (new cljs.core.async.t26998(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26999__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26998 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26998(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26999){return (new cljs.core.async.t26998(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26999));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26998(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12185__auto___27107 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_27065){var state_val_27066 = (state_27065[1]);if((state_val_27066 === 1))
{var inst_27004 = (state_27065[7]);var inst_27004__$1 = calc_state.call(null);var inst_27005 = cljs.core.seq_QMARK_.call(null,inst_27004__$1);var state_27065__$1 = (function (){var statearr_27067 = state_27065;(statearr_27067[7] = inst_27004__$1);
return statearr_27067;
})();if(inst_27005)
{var statearr_27068_27108 = state_27065__$1;(statearr_27068_27108[1] = 2);
} else
{var statearr_27069_27109 = state_27065__$1;(statearr_27069_27109[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 2))
{var inst_27004 = (state_27065[7]);var inst_27007 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27004);var state_27065__$1 = state_27065;var statearr_27070_27110 = state_27065__$1;(statearr_27070_27110[2] = inst_27007);
(statearr_27070_27110[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 3))
{var inst_27004 = (state_27065[7]);var state_27065__$1 = state_27065;var statearr_27071_27111 = state_27065__$1;(statearr_27071_27111[2] = inst_27004);
(statearr_27071_27111[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 4))
{var inst_27004 = (state_27065[7]);var inst_27010 = (state_27065[2]);var inst_27011 = cljs.core.get.call(null,inst_27010,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27012 = cljs.core.get.call(null,inst_27010,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27013 = cljs.core.get.call(null,inst_27010,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27014 = inst_27004;var state_27065__$1 = (function (){var statearr_27072 = state_27065;(statearr_27072[8] = inst_27013);
(statearr_27072[9] = inst_27014);
(statearr_27072[10] = inst_27012);
(statearr_27072[11] = inst_27011);
return statearr_27072;
})();var statearr_27073_27112 = state_27065__$1;(statearr_27073_27112[2] = null);
(statearr_27073_27112[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 5))
{var inst_27014 = (state_27065[9]);var inst_27017 = cljs.core.seq_QMARK_.call(null,inst_27014);var state_27065__$1 = state_27065;if(inst_27017)
{var statearr_27074_27113 = state_27065__$1;(statearr_27074_27113[1] = 7);
} else
{var statearr_27075_27114 = state_27065__$1;(statearr_27075_27114[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 6))
{var inst_27063 = (state_27065[2]);var state_27065__$1 = state_27065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27065__$1,inst_27063);
} else
{if((state_val_27066 === 7))
{var inst_27014 = (state_27065[9]);var inst_27019 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27014);var state_27065__$1 = state_27065;var statearr_27076_27115 = state_27065__$1;(statearr_27076_27115[2] = inst_27019);
(statearr_27076_27115[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 8))
{var inst_27014 = (state_27065[9]);var state_27065__$1 = state_27065;var statearr_27077_27116 = state_27065__$1;(statearr_27077_27116[2] = inst_27014);
(statearr_27077_27116[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 9))
{var inst_27022 = (state_27065[12]);var inst_27022__$1 = (state_27065[2]);var inst_27023 = cljs.core.get.call(null,inst_27022__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27024 = cljs.core.get.call(null,inst_27022__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27025 = cljs.core.get.call(null,inst_27022__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27065__$1 = (function (){var statearr_27078 = state_27065;(statearr_27078[13] = inst_27024);
(statearr_27078[14] = inst_27025);
(statearr_27078[12] = inst_27022__$1);
return statearr_27078;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27065__$1,10,inst_27023);
} else
{if((state_val_27066 === 10))
{var inst_27029 = (state_27065[15]);var inst_27030 = (state_27065[16]);var inst_27028 = (state_27065[2]);var inst_27029__$1 = cljs.core.nth.call(null,inst_27028,0,null);var inst_27030__$1 = cljs.core.nth.call(null,inst_27028,1,null);var inst_27031 = (inst_27029__$1 == null);var inst_27032 = cljs.core._EQ_.call(null,inst_27030__$1,change);var inst_27033 = (inst_27031) || (inst_27032);var state_27065__$1 = (function (){var statearr_27079 = state_27065;(statearr_27079[15] = inst_27029__$1);
(statearr_27079[16] = inst_27030__$1);
return statearr_27079;
})();if(cljs.core.truth_(inst_27033))
{var statearr_27080_27117 = state_27065__$1;(statearr_27080_27117[1] = 11);
} else
{var statearr_27081_27118 = state_27065__$1;(statearr_27081_27118[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 11))
{var inst_27029 = (state_27065[15]);var inst_27035 = (inst_27029 == null);var state_27065__$1 = state_27065;if(cljs.core.truth_(inst_27035))
{var statearr_27082_27119 = state_27065__$1;(statearr_27082_27119[1] = 14);
} else
{var statearr_27083_27120 = state_27065__$1;(statearr_27083_27120[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 12))
{var inst_27044 = (state_27065[17]);var inst_27025 = (state_27065[14]);var inst_27030 = (state_27065[16]);var inst_27044__$1 = inst_27025.call(null,inst_27030);var state_27065__$1 = (function (){var statearr_27084 = state_27065;(statearr_27084[17] = inst_27044__$1);
return statearr_27084;
})();if(cljs.core.truth_(inst_27044__$1))
{var statearr_27085_27121 = state_27065__$1;(statearr_27085_27121[1] = 17);
} else
{var statearr_27086_27122 = state_27065__$1;(statearr_27086_27122[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 13))
{var inst_27061 = (state_27065[2]);var state_27065__$1 = state_27065;var statearr_27087_27123 = state_27065__$1;(statearr_27087_27123[2] = inst_27061);
(statearr_27087_27123[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 14))
{var inst_27030 = (state_27065[16]);var inst_27037 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27030);var state_27065__$1 = state_27065;var statearr_27088_27124 = state_27065__$1;(statearr_27088_27124[2] = inst_27037);
(statearr_27088_27124[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 15))
{var state_27065__$1 = state_27065;var statearr_27089_27125 = state_27065__$1;(statearr_27089_27125[2] = null);
(statearr_27089_27125[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 16))
{var inst_27040 = (state_27065[2]);var inst_27041 = calc_state.call(null);var inst_27014 = inst_27041;var state_27065__$1 = (function (){var statearr_27090 = state_27065;(statearr_27090[18] = inst_27040);
(statearr_27090[9] = inst_27014);
return statearr_27090;
})();var statearr_27091_27126 = state_27065__$1;(statearr_27091_27126[2] = null);
(statearr_27091_27126[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 17))
{var inst_27044 = (state_27065[17]);var state_27065__$1 = state_27065;var statearr_27092_27127 = state_27065__$1;(statearr_27092_27127[2] = inst_27044);
(statearr_27092_27127[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 18))
{var inst_27024 = (state_27065[13]);var inst_27025 = (state_27065[14]);var inst_27030 = (state_27065[16]);var inst_27047 = cljs.core.empty_QMARK_.call(null,inst_27025);var inst_27048 = inst_27024.call(null,inst_27030);var inst_27049 = cljs.core.not.call(null,inst_27048);var inst_27050 = (inst_27047) && (inst_27049);var state_27065__$1 = state_27065;var statearr_27093_27128 = state_27065__$1;(statearr_27093_27128[2] = inst_27050);
(statearr_27093_27128[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 19))
{var inst_27052 = (state_27065[2]);var state_27065__$1 = state_27065;if(cljs.core.truth_(inst_27052))
{var statearr_27094_27129 = state_27065__$1;(statearr_27094_27129[1] = 20);
} else
{var statearr_27095_27130 = state_27065__$1;(statearr_27095_27130[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 20))
{var inst_27029 = (state_27065[15]);var state_27065__$1 = state_27065;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27065__$1,23,out,inst_27029);
} else
{if((state_val_27066 === 21))
{var state_27065__$1 = state_27065;var statearr_27096_27131 = state_27065__$1;(statearr_27096_27131[2] = null);
(statearr_27096_27131[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 22))
{var inst_27022 = (state_27065[12]);var inst_27058 = (state_27065[2]);var inst_27014 = inst_27022;var state_27065__$1 = (function (){var statearr_27097 = state_27065;(statearr_27097[9] = inst_27014);
(statearr_27097[19] = inst_27058);
return statearr_27097;
})();var statearr_27098_27132 = state_27065__$1;(statearr_27098_27132[2] = null);
(statearr_27098_27132[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27066 === 23))
{var inst_27055 = (state_27065[2]);var state_27065__$1 = state_27065;var statearr_27099_27133 = state_27065__$1;(statearr_27099_27133[2] = inst_27055);
(statearr_27099_27133[1] = 22);
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
var state_machine__12116__auto____0 = (function (){var statearr_27103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27103[0] = state_machine__12116__auto__);
(statearr_27103[1] = 1);
return statearr_27103;
});
var state_machine__12116__auto____1 = (function (state_27065){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_27065);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e27104){if((e27104 instanceof Object))
{var ex__12119__auto__ = e27104;var statearr_27105_27134 = state_27065;(statearr_27105_27134[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27065);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27135 = state_27065;
state_27065 = G__27135;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_27065){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_27065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_27106 = f__12186__auto__.call(null);(statearr_27106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___27107);
return statearr_27106;
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
cljs.core.async.Pub = (function (){var obj27137 = {};return obj27137;
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
return (function (p1__27138_SHARP_){if(cljs.core.truth_(p1__27138_SHARP_.call(null,topic)))
{return p1__27138_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27138_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8228__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27263 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27263 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27264){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27264 = meta27264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27263.cljs$lang$type = true;
cljs.core.async.t27263.cljs$lang$ctorStr = "cljs.core.async/t27263";
cljs.core.async.t27263.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"cljs.core.async/t27263");
});})(mults,ensure_mult))
;
cljs.core.async.t27263.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27263.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27263.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27263.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27263.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27263.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27263.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27265){var self__ = this;
var _27265__$1 = this;return self__.meta27264;
});})(mults,ensure_mult))
;
cljs.core.async.t27263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27265,meta27264__$1){var self__ = this;
var _27265__$1 = this;return (new cljs.core.async.t27263(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27264__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27263 = ((function (mults,ensure_mult){
return (function __GT_t27263(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27264){return (new cljs.core.async.t27263(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27264));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27263(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12185__auto___27387 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_27339){var state_val_27340 = (state_27339[1]);if((state_val_27340 === 1))
{var state_27339__$1 = state_27339;var statearr_27341_27388 = state_27339__$1;(statearr_27341_27388[2] = null);
(statearr_27341_27388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 2))
{var state_27339__$1 = state_27339;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27339__$1,4,ch);
} else
{if((state_val_27340 === 3))
{var inst_27337 = (state_27339[2]);var state_27339__$1 = state_27339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27339__$1,inst_27337);
} else
{if((state_val_27340 === 4))
{var inst_27268 = (state_27339[7]);var inst_27268__$1 = (state_27339[2]);var inst_27269 = (inst_27268__$1 == null);var state_27339__$1 = (function (){var statearr_27342 = state_27339;(statearr_27342[7] = inst_27268__$1);
return statearr_27342;
})();if(cljs.core.truth_(inst_27269))
{var statearr_27343_27389 = state_27339__$1;(statearr_27343_27389[1] = 5);
} else
{var statearr_27344_27390 = state_27339__$1;(statearr_27344_27390[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 5))
{var inst_27275 = cljs.core.deref.call(null,mults);var inst_27276 = cljs.core.vals.call(null,inst_27275);var inst_27277 = cljs.core.seq.call(null,inst_27276);var inst_27278 = inst_27277;var inst_27279 = null;var inst_27280 = 0;var inst_27281 = 0;var state_27339__$1 = (function (){var statearr_27345 = state_27339;(statearr_27345[8] = inst_27279);
(statearr_27345[9] = inst_27278);
(statearr_27345[10] = inst_27280);
(statearr_27345[11] = inst_27281);
return statearr_27345;
})();var statearr_27346_27391 = state_27339__$1;(statearr_27346_27391[2] = null);
(statearr_27346_27391[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 6))
{var inst_27318 = (state_27339[12]);var inst_27316 = (state_27339[13]);var inst_27268 = (state_27339[7]);var inst_27316__$1 = topic_fn.call(null,inst_27268);var inst_27317 = cljs.core.deref.call(null,mults);var inst_27318__$1 = cljs.core.get.call(null,inst_27317,inst_27316__$1);var state_27339__$1 = (function (){var statearr_27347 = state_27339;(statearr_27347[12] = inst_27318__$1);
(statearr_27347[13] = inst_27316__$1);
return statearr_27347;
})();if(cljs.core.truth_(inst_27318__$1))
{var statearr_27348_27392 = state_27339__$1;(statearr_27348_27392[1] = 19);
} else
{var statearr_27349_27393 = state_27339__$1;(statearr_27349_27393[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 7))
{var inst_27335 = (state_27339[2]);var state_27339__$1 = state_27339;var statearr_27350_27394 = state_27339__$1;(statearr_27350_27394[2] = inst_27335);
(statearr_27350_27394[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 8))
{var inst_27280 = (state_27339[10]);var inst_27281 = (state_27339[11]);var inst_27283 = (inst_27281 < inst_27280);var inst_27284 = inst_27283;var state_27339__$1 = state_27339;if(cljs.core.truth_(inst_27284))
{var statearr_27354_27395 = state_27339__$1;(statearr_27354_27395[1] = 10);
} else
{var statearr_27355_27396 = state_27339__$1;(statearr_27355_27396[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 9))
{var inst_27314 = (state_27339[2]);var state_27339__$1 = state_27339;var statearr_27356_27397 = state_27339__$1;(statearr_27356_27397[2] = inst_27314);
(statearr_27356_27397[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 10))
{var inst_27279 = (state_27339[8]);var inst_27278 = (state_27339[9]);var inst_27280 = (state_27339[10]);var inst_27281 = (state_27339[11]);var inst_27286 = cljs.core._nth.call(null,inst_27279,inst_27281);var inst_27287 = cljs.core.async.muxch_STAR_.call(null,inst_27286);var inst_27288 = cljs.core.async.close_BANG_.call(null,inst_27287);var inst_27289 = (inst_27281 + 1);var tmp27351 = inst_27279;var tmp27352 = inst_27278;var tmp27353 = inst_27280;var inst_27278__$1 = tmp27352;var inst_27279__$1 = tmp27351;var inst_27280__$1 = tmp27353;var inst_27281__$1 = inst_27289;var state_27339__$1 = (function (){var statearr_27357 = state_27339;(statearr_27357[8] = inst_27279__$1);
(statearr_27357[9] = inst_27278__$1);
(statearr_27357[14] = inst_27288);
(statearr_27357[10] = inst_27280__$1);
(statearr_27357[11] = inst_27281__$1);
return statearr_27357;
})();var statearr_27358_27398 = state_27339__$1;(statearr_27358_27398[2] = null);
(statearr_27358_27398[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 11))
{var inst_27278 = (state_27339[9]);var inst_27292 = (state_27339[15]);var inst_27292__$1 = cljs.core.seq.call(null,inst_27278);var state_27339__$1 = (function (){var statearr_27359 = state_27339;(statearr_27359[15] = inst_27292__$1);
return statearr_27359;
})();if(inst_27292__$1)
{var statearr_27360_27399 = state_27339__$1;(statearr_27360_27399[1] = 13);
} else
{var statearr_27361_27400 = state_27339__$1;(statearr_27361_27400[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 12))
{var inst_27312 = (state_27339[2]);var state_27339__$1 = state_27339;var statearr_27362_27401 = state_27339__$1;(statearr_27362_27401[2] = inst_27312);
(statearr_27362_27401[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 13))
{var inst_27292 = (state_27339[15]);var inst_27294 = cljs.core.chunked_seq_QMARK_.call(null,inst_27292);var state_27339__$1 = state_27339;if(inst_27294)
{var statearr_27363_27402 = state_27339__$1;(statearr_27363_27402[1] = 16);
} else
{var statearr_27364_27403 = state_27339__$1;(statearr_27364_27403[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 14))
{var state_27339__$1 = state_27339;var statearr_27365_27404 = state_27339__$1;(statearr_27365_27404[2] = null);
(statearr_27365_27404[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 15))
{var inst_27310 = (state_27339[2]);var state_27339__$1 = state_27339;var statearr_27366_27405 = state_27339__$1;(statearr_27366_27405[2] = inst_27310);
(statearr_27366_27405[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 16))
{var inst_27292 = (state_27339[15]);var inst_27296 = cljs.core.chunk_first.call(null,inst_27292);var inst_27297 = cljs.core.chunk_rest.call(null,inst_27292);var inst_27298 = cljs.core.count.call(null,inst_27296);var inst_27278 = inst_27297;var inst_27279 = inst_27296;var inst_27280 = inst_27298;var inst_27281 = 0;var state_27339__$1 = (function (){var statearr_27367 = state_27339;(statearr_27367[8] = inst_27279);
(statearr_27367[9] = inst_27278);
(statearr_27367[10] = inst_27280);
(statearr_27367[11] = inst_27281);
return statearr_27367;
})();var statearr_27368_27406 = state_27339__$1;(statearr_27368_27406[2] = null);
(statearr_27368_27406[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 17))
{var inst_27292 = (state_27339[15]);var inst_27301 = cljs.core.first.call(null,inst_27292);var inst_27302 = cljs.core.async.muxch_STAR_.call(null,inst_27301);var inst_27303 = cljs.core.async.close_BANG_.call(null,inst_27302);var inst_27304 = cljs.core.next.call(null,inst_27292);var inst_27278 = inst_27304;var inst_27279 = null;var inst_27280 = 0;var inst_27281 = 0;var state_27339__$1 = (function (){var statearr_27369 = state_27339;(statearr_27369[8] = inst_27279);
(statearr_27369[9] = inst_27278);
(statearr_27369[10] = inst_27280);
(statearr_27369[11] = inst_27281);
(statearr_27369[16] = inst_27303);
return statearr_27369;
})();var statearr_27370_27407 = state_27339__$1;(statearr_27370_27407[2] = null);
(statearr_27370_27407[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 18))
{var inst_27307 = (state_27339[2]);var state_27339__$1 = state_27339;var statearr_27371_27408 = state_27339__$1;(statearr_27371_27408[2] = inst_27307);
(statearr_27371_27408[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 19))
{var state_27339__$1 = state_27339;var statearr_27372_27409 = state_27339__$1;(statearr_27372_27409[2] = null);
(statearr_27372_27409[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 20))
{var state_27339__$1 = state_27339;var statearr_27373_27410 = state_27339__$1;(statearr_27373_27410[2] = null);
(statearr_27373_27410[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 21))
{var inst_27332 = (state_27339[2]);var state_27339__$1 = (function (){var statearr_27374 = state_27339;(statearr_27374[17] = inst_27332);
return statearr_27374;
})();var statearr_27375_27411 = state_27339__$1;(statearr_27375_27411[2] = null);
(statearr_27375_27411[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 22))
{var inst_27329 = (state_27339[2]);var state_27339__$1 = state_27339;var statearr_27376_27412 = state_27339__$1;(statearr_27376_27412[2] = inst_27329);
(statearr_27376_27412[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 23))
{var inst_27316 = (state_27339[13]);var inst_27320 = (state_27339[2]);var inst_27321 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27316);var state_27339__$1 = (function (){var statearr_27377 = state_27339;(statearr_27377[18] = inst_27320);
return statearr_27377;
})();var statearr_27378_27413 = state_27339__$1;(statearr_27378_27413[2] = inst_27321);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27339__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27340 === 24))
{var inst_27318 = (state_27339[12]);var inst_27268 = (state_27339[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27339,23,Object,null,22);var inst_27325 = cljs.core.async.muxch_STAR_.call(null,inst_27318);var state_27339__$1 = state_27339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27339__$1,25,inst_27325,inst_27268);
} else
{if((state_val_27340 === 25))
{var inst_27327 = (state_27339[2]);var state_27339__$1 = state_27339;var statearr_27379_27414 = state_27339__$1;(statearr_27379_27414[2] = inst_27327);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27339__$1);
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
var state_machine__12116__auto____0 = (function (){var statearr_27383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27383[0] = state_machine__12116__auto__);
(statearr_27383[1] = 1);
return statearr_27383;
});
var state_machine__12116__auto____1 = (function (state_27339){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_27339);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e27384){if((e27384 instanceof Object))
{var ex__12119__auto__ = e27384;var statearr_27385_27415 = state_27339;(statearr_27385_27415[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27339);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27416 = state_27339;
state_27339 = G__27416;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_27339){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_27339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_27386 = f__12186__auto__.call(null);(statearr_27386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___27387);
return statearr_27386;
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
,cljs.core.range.call(null,cnt));var c__12185__auto___27553 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_27523){var state_val_27524 = (state_27523[1]);if((state_val_27524 === 1))
{var state_27523__$1 = state_27523;var statearr_27525_27554 = state_27523__$1;(statearr_27525_27554[2] = null);
(statearr_27525_27554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 2))
{var inst_27486 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27487 = 0;var state_27523__$1 = (function (){var statearr_27526 = state_27523;(statearr_27526[7] = inst_27486);
(statearr_27526[8] = inst_27487);
return statearr_27526;
})();var statearr_27527_27555 = state_27523__$1;(statearr_27527_27555[2] = null);
(statearr_27527_27555[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 3))
{var inst_27521 = (state_27523[2]);var state_27523__$1 = state_27523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27523__$1,inst_27521);
} else
{if((state_val_27524 === 4))
{var inst_27487 = (state_27523[8]);var inst_27489 = (inst_27487 < cnt);var state_27523__$1 = state_27523;if(cljs.core.truth_(inst_27489))
{var statearr_27528_27556 = state_27523__$1;(statearr_27528_27556[1] = 6);
} else
{var statearr_27529_27557 = state_27523__$1;(statearr_27529_27557[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 5))
{var inst_27507 = (state_27523[2]);var state_27523__$1 = (function (){var statearr_27530 = state_27523;(statearr_27530[9] = inst_27507);
return statearr_27530;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,12,dchan);
} else
{if((state_val_27524 === 6))
{var state_27523__$1 = state_27523;var statearr_27531_27558 = state_27523__$1;(statearr_27531_27558[2] = null);
(statearr_27531_27558[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 7))
{var state_27523__$1 = state_27523;var statearr_27532_27559 = state_27523__$1;(statearr_27532_27559[2] = null);
(statearr_27532_27559[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 8))
{var inst_27505 = (state_27523[2]);var state_27523__$1 = state_27523;var statearr_27533_27560 = state_27523__$1;(statearr_27533_27560[2] = inst_27505);
(statearr_27533_27560[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 9))
{var inst_27487 = (state_27523[8]);var inst_27500 = (state_27523[2]);var inst_27501 = (inst_27487 + 1);var inst_27487__$1 = inst_27501;var state_27523__$1 = (function (){var statearr_27534 = state_27523;(statearr_27534[8] = inst_27487__$1);
(statearr_27534[10] = inst_27500);
return statearr_27534;
})();var statearr_27535_27561 = state_27523__$1;(statearr_27535_27561[2] = null);
(statearr_27535_27561[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 10))
{var inst_27491 = (state_27523[2]);var inst_27492 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27523__$1 = (function (){var statearr_27536 = state_27523;(statearr_27536[11] = inst_27491);
return statearr_27536;
})();var statearr_27537_27562 = state_27523__$1;(statearr_27537_27562[2] = inst_27492);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27523__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 11))
{var inst_27487 = (state_27523[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27523,10,Object,null,9);var inst_27496 = chs__$1.call(null,inst_27487);var inst_27497 = done.call(null,inst_27487);var inst_27498 = cljs.core.async.take_BANG_.call(null,inst_27496,inst_27497);var state_27523__$1 = state_27523;var statearr_27538_27563 = state_27523__$1;(statearr_27538_27563[2] = inst_27498);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27523__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 12))
{var inst_27509 = (state_27523[12]);var inst_27509__$1 = (state_27523[2]);var inst_27510 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27509__$1);var state_27523__$1 = (function (){var statearr_27539 = state_27523;(statearr_27539[12] = inst_27509__$1);
return statearr_27539;
})();if(cljs.core.truth_(inst_27510))
{var statearr_27540_27564 = state_27523__$1;(statearr_27540_27564[1] = 13);
} else
{var statearr_27541_27565 = state_27523__$1;(statearr_27541_27565[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 13))
{var inst_27512 = cljs.core.async.close_BANG_.call(null,out);var state_27523__$1 = state_27523;var statearr_27542_27566 = state_27523__$1;(statearr_27542_27566[2] = inst_27512);
(statearr_27542_27566[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 14))
{var inst_27509 = (state_27523[12]);var inst_27514 = cljs.core.apply.call(null,f,inst_27509);var state_27523__$1 = state_27523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27523__$1,16,out,inst_27514);
} else
{if((state_val_27524 === 15))
{var inst_27519 = (state_27523[2]);var state_27523__$1 = state_27523;var statearr_27543_27567 = state_27523__$1;(statearr_27543_27567[2] = inst_27519);
(statearr_27543_27567[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27524 === 16))
{var inst_27516 = (state_27523[2]);var state_27523__$1 = (function (){var statearr_27544 = state_27523;(statearr_27544[13] = inst_27516);
return statearr_27544;
})();var statearr_27545_27568 = state_27523__$1;(statearr_27545_27568[2] = null);
(statearr_27545_27568[1] = 2);
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
var state_machine__12116__auto____0 = (function (){var statearr_27549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27549[0] = state_machine__12116__auto__);
(statearr_27549[1] = 1);
return statearr_27549;
});
var state_machine__12116__auto____1 = (function (state_27523){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_27523);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e27550){if((e27550 instanceof Object))
{var ex__12119__auto__ = e27550;var statearr_27551_27569 = state_27523;(statearr_27551_27569[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27570 = state_27523;
state_27523 = G__27570;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_27523){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_27523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_27552 = f__12186__auto__.call(null);(statearr_27552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___27553);
return statearr_27552;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___27678 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_27654){var state_val_27655 = (state_27654[1]);if((state_val_27655 === 1))
{var inst_27625 = cljs.core.vec.call(null,chs);var inst_27626 = inst_27625;var state_27654__$1 = (function (){var statearr_27656 = state_27654;(statearr_27656[7] = inst_27626);
return statearr_27656;
})();var statearr_27657_27679 = state_27654__$1;(statearr_27657_27679[2] = null);
(statearr_27657_27679[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 2))
{var inst_27626 = (state_27654[7]);var inst_27628 = cljs.core.count.call(null,inst_27626);var inst_27629 = (inst_27628 > 0);var state_27654__$1 = state_27654;if(cljs.core.truth_(inst_27629))
{var statearr_27658_27680 = state_27654__$1;(statearr_27658_27680[1] = 4);
} else
{var statearr_27659_27681 = state_27654__$1;(statearr_27659_27681[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 3))
{var inst_27652 = (state_27654[2]);var state_27654__$1 = state_27654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27654__$1,inst_27652);
} else
{if((state_val_27655 === 4))
{var inst_27626 = (state_27654[7]);var state_27654__$1 = state_27654;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27654__$1,7,inst_27626);
} else
{if((state_val_27655 === 5))
{var inst_27648 = cljs.core.async.close_BANG_.call(null,out);var state_27654__$1 = state_27654;var statearr_27660_27682 = state_27654__$1;(statearr_27660_27682[2] = inst_27648);
(statearr_27660_27682[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 6))
{var inst_27650 = (state_27654[2]);var state_27654__$1 = state_27654;var statearr_27661_27683 = state_27654__$1;(statearr_27661_27683[2] = inst_27650);
(statearr_27661_27683[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 7))
{var inst_27634 = (state_27654[8]);var inst_27633 = (state_27654[9]);var inst_27633__$1 = (state_27654[2]);var inst_27634__$1 = cljs.core.nth.call(null,inst_27633__$1,0,null);var inst_27635 = cljs.core.nth.call(null,inst_27633__$1,1,null);var inst_27636 = (inst_27634__$1 == null);var state_27654__$1 = (function (){var statearr_27662 = state_27654;(statearr_27662[10] = inst_27635);
(statearr_27662[8] = inst_27634__$1);
(statearr_27662[9] = inst_27633__$1);
return statearr_27662;
})();if(cljs.core.truth_(inst_27636))
{var statearr_27663_27684 = state_27654__$1;(statearr_27663_27684[1] = 8);
} else
{var statearr_27664_27685 = state_27654__$1;(statearr_27664_27685[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 8))
{var inst_27626 = (state_27654[7]);var inst_27635 = (state_27654[10]);var inst_27634 = (state_27654[8]);var inst_27633 = (state_27654[9]);var inst_27638 = (function (){var c = inst_27635;var v = inst_27634;var vec__27631 = inst_27633;var cs = inst_27626;return ((function (c,v,vec__27631,cs,inst_27626,inst_27635,inst_27634,inst_27633,state_val_27655){
return (function (p1__27571_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27571_SHARP_);
});
;})(c,v,vec__27631,cs,inst_27626,inst_27635,inst_27634,inst_27633,state_val_27655))
})();var inst_27639 = cljs.core.filterv.call(null,inst_27638,inst_27626);var inst_27626__$1 = inst_27639;var state_27654__$1 = (function (){var statearr_27665 = state_27654;(statearr_27665[7] = inst_27626__$1);
return statearr_27665;
})();var statearr_27666_27686 = state_27654__$1;(statearr_27666_27686[2] = null);
(statearr_27666_27686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 9))
{var inst_27634 = (state_27654[8]);var state_27654__$1 = state_27654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27654__$1,11,out,inst_27634);
} else
{if((state_val_27655 === 10))
{var inst_27646 = (state_27654[2]);var state_27654__$1 = state_27654;var statearr_27668_27687 = state_27654__$1;(statearr_27668_27687[2] = inst_27646);
(statearr_27668_27687[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27655 === 11))
{var inst_27626 = (state_27654[7]);var inst_27643 = (state_27654[2]);var tmp27667 = inst_27626;var inst_27626__$1 = tmp27667;var state_27654__$1 = (function (){var statearr_27669 = state_27654;(statearr_27669[11] = inst_27643);
(statearr_27669[7] = inst_27626__$1);
return statearr_27669;
})();var statearr_27670_27688 = state_27654__$1;(statearr_27670_27688[2] = null);
(statearr_27670_27688[1] = 2);
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
var state_machine__12116__auto____0 = (function (){var statearr_27674 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27674[0] = state_machine__12116__auto__);
(statearr_27674[1] = 1);
return statearr_27674;
});
var state_machine__12116__auto____1 = (function (state_27654){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_27654);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e27675){if((e27675 instanceof Object))
{var ex__12119__auto__ = e27675;var statearr_27676_27689 = state_27654;(statearr_27676_27689[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27654);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27690 = state_27654;
state_27654 = G__27690;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_27654){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_27654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_27677 = f__12186__auto__.call(null);(statearr_27677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___27678);
return statearr_27677;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___27783 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_27760){var state_val_27761 = (state_27760[1]);if((state_val_27761 === 1))
{var inst_27737 = 0;var state_27760__$1 = (function (){var statearr_27762 = state_27760;(statearr_27762[7] = inst_27737);
return statearr_27762;
})();var statearr_27763_27784 = state_27760__$1;(statearr_27763_27784[2] = null);
(statearr_27763_27784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27761 === 2))
{var inst_27737 = (state_27760[7]);var inst_27739 = (inst_27737 < n);var state_27760__$1 = state_27760;if(cljs.core.truth_(inst_27739))
{var statearr_27764_27785 = state_27760__$1;(statearr_27764_27785[1] = 4);
} else
{var statearr_27765_27786 = state_27760__$1;(statearr_27765_27786[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27761 === 3))
{var inst_27757 = (state_27760[2]);var inst_27758 = cljs.core.async.close_BANG_.call(null,out);var state_27760__$1 = (function (){var statearr_27766 = state_27760;(statearr_27766[8] = inst_27757);
return statearr_27766;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27760__$1,inst_27758);
} else
{if((state_val_27761 === 4))
{var state_27760__$1 = state_27760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27760__$1,7,ch);
} else
{if((state_val_27761 === 5))
{var state_27760__$1 = state_27760;var statearr_27767_27787 = state_27760__$1;(statearr_27767_27787[2] = null);
(statearr_27767_27787[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27761 === 6))
{var inst_27755 = (state_27760[2]);var state_27760__$1 = state_27760;var statearr_27768_27788 = state_27760__$1;(statearr_27768_27788[2] = inst_27755);
(statearr_27768_27788[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27761 === 7))
{var inst_27742 = (state_27760[9]);var inst_27742__$1 = (state_27760[2]);var inst_27743 = (inst_27742__$1 == null);var inst_27744 = cljs.core.not.call(null,inst_27743);var state_27760__$1 = (function (){var statearr_27769 = state_27760;(statearr_27769[9] = inst_27742__$1);
return statearr_27769;
})();if(inst_27744)
{var statearr_27770_27789 = state_27760__$1;(statearr_27770_27789[1] = 8);
} else
{var statearr_27771_27790 = state_27760__$1;(statearr_27771_27790[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27761 === 8))
{var inst_27742 = (state_27760[9]);var state_27760__$1 = state_27760;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27760__$1,11,out,inst_27742);
} else
{if((state_val_27761 === 9))
{var state_27760__$1 = state_27760;var statearr_27772_27791 = state_27760__$1;(statearr_27772_27791[2] = null);
(statearr_27772_27791[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27761 === 10))
{var inst_27752 = (state_27760[2]);var state_27760__$1 = state_27760;var statearr_27773_27792 = state_27760__$1;(statearr_27773_27792[2] = inst_27752);
(statearr_27773_27792[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27761 === 11))
{var inst_27737 = (state_27760[7]);var inst_27747 = (state_27760[2]);var inst_27748 = (inst_27737 + 1);var inst_27737__$1 = inst_27748;var state_27760__$1 = (function (){var statearr_27774 = state_27760;(statearr_27774[10] = inst_27747);
(statearr_27774[7] = inst_27737__$1);
return statearr_27774;
})();var statearr_27775_27793 = state_27760__$1;(statearr_27775_27793[2] = null);
(statearr_27775_27793[1] = 2);
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
var state_machine__12116__auto____0 = (function (){var statearr_27779 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27779[0] = state_machine__12116__auto__);
(statearr_27779[1] = 1);
return statearr_27779;
});
var state_machine__12116__auto____1 = (function (state_27760){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_27760);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e27780){if((e27780 instanceof Object))
{var ex__12119__auto__ = e27780;var statearr_27781_27794 = state_27760;(statearr_27781_27794[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27760);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27780;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27795 = state_27760;
state_27760 = G__27795;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_27760){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_27760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_27782 = f__12186__auto__.call(null);(statearr_27782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___27783);
return statearr_27782;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___27892 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_27867){var state_val_27868 = (state_27867[1]);if((state_val_27868 === 1))
{var inst_27844 = null;var state_27867__$1 = (function (){var statearr_27869 = state_27867;(statearr_27869[7] = inst_27844);
return statearr_27869;
})();var statearr_27870_27893 = state_27867__$1;(statearr_27870_27893[2] = null);
(statearr_27870_27893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27868 === 2))
{var state_27867__$1 = state_27867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27867__$1,4,ch);
} else
{if((state_val_27868 === 3))
{var inst_27864 = (state_27867[2]);var inst_27865 = cljs.core.async.close_BANG_.call(null,out);var state_27867__$1 = (function (){var statearr_27871 = state_27867;(statearr_27871[8] = inst_27864);
return statearr_27871;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27867__$1,inst_27865);
} else
{if((state_val_27868 === 4))
{var inst_27847 = (state_27867[9]);var inst_27847__$1 = (state_27867[2]);var inst_27848 = (inst_27847__$1 == null);var inst_27849 = cljs.core.not.call(null,inst_27848);var state_27867__$1 = (function (){var statearr_27872 = state_27867;(statearr_27872[9] = inst_27847__$1);
return statearr_27872;
})();if(inst_27849)
{var statearr_27873_27894 = state_27867__$1;(statearr_27873_27894[1] = 5);
} else
{var statearr_27874_27895 = state_27867__$1;(statearr_27874_27895[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27868 === 5))
{var inst_27844 = (state_27867[7]);var inst_27847 = (state_27867[9]);var inst_27851 = cljs.core._EQ_.call(null,inst_27847,inst_27844);var state_27867__$1 = state_27867;if(inst_27851)
{var statearr_27875_27896 = state_27867__$1;(statearr_27875_27896[1] = 8);
} else
{var statearr_27876_27897 = state_27867__$1;(statearr_27876_27897[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27868 === 6))
{var state_27867__$1 = state_27867;var statearr_27878_27898 = state_27867__$1;(statearr_27878_27898[2] = null);
(statearr_27878_27898[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27868 === 7))
{var inst_27862 = (state_27867[2]);var state_27867__$1 = state_27867;var statearr_27879_27899 = state_27867__$1;(statearr_27879_27899[2] = inst_27862);
(statearr_27879_27899[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27868 === 8))
{var inst_27844 = (state_27867[7]);var tmp27877 = inst_27844;var inst_27844__$1 = tmp27877;var state_27867__$1 = (function (){var statearr_27880 = state_27867;(statearr_27880[7] = inst_27844__$1);
return statearr_27880;
})();var statearr_27881_27900 = state_27867__$1;(statearr_27881_27900[2] = null);
(statearr_27881_27900[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27868 === 9))
{var inst_27847 = (state_27867[9]);var state_27867__$1 = state_27867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27867__$1,11,out,inst_27847);
} else
{if((state_val_27868 === 10))
{var inst_27859 = (state_27867[2]);var state_27867__$1 = state_27867;var statearr_27882_27901 = state_27867__$1;(statearr_27882_27901[2] = inst_27859);
(statearr_27882_27901[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27868 === 11))
{var inst_27847 = (state_27867[9]);var inst_27856 = (state_27867[2]);var inst_27844 = inst_27847;var state_27867__$1 = (function (){var statearr_27883 = state_27867;(statearr_27883[7] = inst_27844);
(statearr_27883[10] = inst_27856);
return statearr_27883;
})();var statearr_27884_27902 = state_27867__$1;(statearr_27884_27902[2] = null);
(statearr_27884_27902[1] = 2);
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
var state_machine__12116__auto____0 = (function (){var statearr_27888 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27888[0] = state_machine__12116__auto__);
(statearr_27888[1] = 1);
return statearr_27888;
});
var state_machine__12116__auto____1 = (function (state_27867){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_27867);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e27889){if((e27889 instanceof Object))
{var ex__12119__auto__ = e27889;var statearr_27890_27903 = state_27867;(statearr_27890_27903[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27867);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27904 = state_27867;
state_27867 = G__27904;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_27867){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_27867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_27891 = f__12186__auto__.call(null);(statearr_27891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___27892);
return statearr_27891;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___28039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_28009){var state_val_28010 = (state_28009[1]);if((state_val_28010 === 1))
{var inst_27972 = (new Array(n));var inst_27973 = inst_27972;var inst_27974 = 0;var state_28009__$1 = (function (){var statearr_28011 = state_28009;(statearr_28011[7] = inst_27973);
(statearr_28011[8] = inst_27974);
return statearr_28011;
})();var statearr_28012_28040 = state_28009__$1;(statearr_28012_28040[2] = null);
(statearr_28012_28040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28010 === 2))
{var state_28009__$1 = state_28009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28009__$1,4,ch);
} else
{if((state_val_28010 === 3))
{var inst_28007 = (state_28009[2]);var state_28009__$1 = state_28009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28009__$1,inst_28007);
} else
{if((state_val_28010 === 4))
{var inst_27977 = (state_28009[9]);var inst_27977__$1 = (state_28009[2]);var inst_27978 = (inst_27977__$1 == null);var inst_27979 = cljs.core.not.call(null,inst_27978);var state_28009__$1 = (function (){var statearr_28013 = state_28009;(statearr_28013[9] = inst_27977__$1);
return statearr_28013;
})();if(inst_27979)
{var statearr_28014_28041 = state_28009__$1;(statearr_28014_28041[1] = 5);
} else
{var statearr_28015_28042 = state_28009__$1;(statearr_28015_28042[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28010 === 5))
{var inst_27973 = (state_28009[7]);var inst_27982 = (state_28009[10]);var inst_27977 = (state_28009[9]);var inst_27974 = (state_28009[8]);var inst_27981 = (inst_27973[inst_27974] = inst_27977);var inst_27982__$1 = (inst_27974 + 1);var inst_27983 = (inst_27982__$1 < n);var state_28009__$1 = (function (){var statearr_28016 = state_28009;(statearr_28016[11] = inst_27981);
(statearr_28016[10] = inst_27982__$1);
return statearr_28016;
})();if(cljs.core.truth_(inst_27983))
{var statearr_28017_28043 = state_28009__$1;(statearr_28017_28043[1] = 8);
} else
{var statearr_28018_28044 = state_28009__$1;(statearr_28018_28044[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28010 === 6))
{var inst_27974 = (state_28009[8]);var inst_27995 = (inst_27974 > 0);var state_28009__$1 = state_28009;if(cljs.core.truth_(inst_27995))
{var statearr_28020_28045 = state_28009__$1;(statearr_28020_28045[1] = 12);
} else
{var statearr_28021_28046 = state_28009__$1;(statearr_28021_28046[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28010 === 7))
{var inst_28005 = (state_28009[2]);var state_28009__$1 = state_28009;var statearr_28022_28047 = state_28009__$1;(statearr_28022_28047[2] = inst_28005);
(statearr_28022_28047[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28010 === 8))
{var inst_27973 = (state_28009[7]);var inst_27982 = (state_28009[10]);var tmp28019 = inst_27973;var inst_27973__$1 = tmp28019;var inst_27974 = inst_27982;var state_28009__$1 = (function (){var statearr_28023 = state_28009;(statearr_28023[7] = inst_27973__$1);
(statearr_28023[8] = inst_27974);
return statearr_28023;
})();var statearr_28024_28048 = state_28009__$1;(statearr_28024_28048[2] = null);
(statearr_28024_28048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28010 === 9))
{var inst_27973 = (state_28009[7]);var inst_27987 = cljs.core.vec.call(null,inst_27973);var state_28009__$1 = state_28009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28009__$1,11,out,inst_27987);
} else
{if((state_val_28010 === 10))
{var inst_27993 = (state_28009[2]);var state_28009__$1 = state_28009;var statearr_28025_28049 = state_28009__$1;(statearr_28025_28049[2] = inst_27993);
(statearr_28025_28049[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28010 === 11))
{var inst_27989 = (state_28009[2]);var inst_27990 = (new Array(n));var inst_27973 = inst_27990;var inst_27974 = 0;var state_28009__$1 = (function (){var statearr_28026 = state_28009;(statearr_28026[12] = inst_27989);
(statearr_28026[7] = inst_27973);
(statearr_28026[8] = inst_27974);
return statearr_28026;
})();var statearr_28027_28050 = state_28009__$1;(statearr_28027_28050[2] = null);
(statearr_28027_28050[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28010 === 12))
{var inst_27973 = (state_28009[7]);var inst_27997 = cljs.core.vec.call(null,inst_27973);var state_28009__$1 = state_28009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28009__$1,15,out,inst_27997);
} else
{if((state_val_28010 === 13))
{var state_28009__$1 = state_28009;var statearr_28028_28051 = state_28009__$1;(statearr_28028_28051[2] = null);
(statearr_28028_28051[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28010 === 14))
{var inst_28002 = (state_28009[2]);var inst_28003 = cljs.core.async.close_BANG_.call(null,out);var state_28009__$1 = (function (){var statearr_28029 = state_28009;(statearr_28029[13] = inst_28002);
return statearr_28029;
})();var statearr_28030_28052 = state_28009__$1;(statearr_28030_28052[2] = inst_28003);
(statearr_28030_28052[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28010 === 15))
{var inst_27999 = (state_28009[2]);var state_28009__$1 = state_28009;var statearr_28031_28053 = state_28009__$1;(statearr_28031_28053[2] = inst_27999);
(statearr_28031_28053[1] = 14);
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
var state_machine__12116__auto____0 = (function (){var statearr_28035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28035[0] = state_machine__12116__auto__);
(statearr_28035[1] = 1);
return statearr_28035;
});
var state_machine__12116__auto____1 = (function (state_28009){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_28009);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e28036){if((e28036 instanceof Object))
{var ex__12119__auto__ = e28036;var statearr_28037_28054 = state_28009;(statearr_28037_28054[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28009);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28055 = state_28009;
state_28009 = G__28055;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_28009){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_28009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_28038 = f__12186__auto__.call(null);(statearr_28038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___28039);
return statearr_28038;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12185__auto___28198 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_28168){var state_val_28169 = (state_28168[1]);if((state_val_28169 === 1))
{var inst_28127 = [];var inst_28128 = inst_28127;var inst_28129 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28168__$1 = (function (){var statearr_28170 = state_28168;(statearr_28170[7] = inst_28129);
(statearr_28170[8] = inst_28128);
return statearr_28170;
})();var statearr_28171_28199 = state_28168__$1;(statearr_28171_28199[2] = null);
(statearr_28171_28199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28169 === 2))
{var state_28168__$1 = state_28168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28168__$1,4,ch);
} else
{if((state_val_28169 === 3))
{var inst_28166 = (state_28168[2]);var state_28168__$1 = state_28168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28168__$1,inst_28166);
} else
{if((state_val_28169 === 4))
{var inst_28132 = (state_28168[9]);var inst_28132__$1 = (state_28168[2]);var inst_28133 = (inst_28132__$1 == null);var inst_28134 = cljs.core.not.call(null,inst_28133);var state_28168__$1 = (function (){var statearr_28172 = state_28168;(statearr_28172[9] = inst_28132__$1);
return statearr_28172;
})();if(inst_28134)
{var statearr_28173_28200 = state_28168__$1;(statearr_28173_28200[1] = 5);
} else
{var statearr_28174_28201 = state_28168__$1;(statearr_28174_28201[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28169 === 5))
{var inst_28136 = (state_28168[10]);var inst_28132 = (state_28168[9]);var inst_28129 = (state_28168[7]);var inst_28136__$1 = f.call(null,inst_28132);var inst_28137 = cljs.core._EQ_.call(null,inst_28136__$1,inst_28129);var inst_28138 = cljs.core.keyword_identical_QMARK_.call(null,inst_28129,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28139 = (inst_28137) || (inst_28138);var state_28168__$1 = (function (){var statearr_28175 = state_28168;(statearr_28175[10] = inst_28136__$1);
return statearr_28175;
})();if(cljs.core.truth_(inst_28139))
{var statearr_28176_28202 = state_28168__$1;(statearr_28176_28202[1] = 8);
} else
{var statearr_28177_28203 = state_28168__$1;(statearr_28177_28203[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28169 === 6))
{var inst_28128 = (state_28168[8]);var inst_28153 = inst_28128.length;var inst_28154 = (inst_28153 > 0);var state_28168__$1 = state_28168;if(cljs.core.truth_(inst_28154))
{var statearr_28179_28204 = state_28168__$1;(statearr_28179_28204[1] = 12);
} else
{var statearr_28180_28205 = state_28168__$1;(statearr_28180_28205[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28169 === 7))
{var inst_28164 = (state_28168[2]);var state_28168__$1 = state_28168;var statearr_28181_28206 = state_28168__$1;(statearr_28181_28206[2] = inst_28164);
(statearr_28181_28206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28169 === 8))
{var inst_28136 = (state_28168[10]);var inst_28132 = (state_28168[9]);var inst_28128 = (state_28168[8]);var inst_28141 = inst_28128.push(inst_28132);var tmp28178 = inst_28128;var inst_28128__$1 = tmp28178;var inst_28129 = inst_28136;var state_28168__$1 = (function (){var statearr_28182 = state_28168;(statearr_28182[11] = inst_28141);
(statearr_28182[7] = inst_28129);
(statearr_28182[8] = inst_28128__$1);
return statearr_28182;
})();var statearr_28183_28207 = state_28168__$1;(statearr_28183_28207[2] = null);
(statearr_28183_28207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28169 === 9))
{var inst_28128 = (state_28168[8]);var inst_28144 = cljs.core.vec.call(null,inst_28128);var state_28168__$1 = state_28168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28168__$1,11,out,inst_28144);
} else
{if((state_val_28169 === 10))
{var inst_28151 = (state_28168[2]);var state_28168__$1 = state_28168;var statearr_28184_28208 = state_28168__$1;(statearr_28184_28208[2] = inst_28151);
(statearr_28184_28208[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28169 === 11))
{var inst_28136 = (state_28168[10]);var inst_28132 = (state_28168[9]);var inst_28146 = (state_28168[2]);var inst_28147 = [];var inst_28148 = inst_28147.push(inst_28132);var inst_28128 = inst_28147;var inst_28129 = inst_28136;var state_28168__$1 = (function (){var statearr_28185 = state_28168;(statearr_28185[7] = inst_28129);
(statearr_28185[8] = inst_28128);
(statearr_28185[12] = inst_28148);
(statearr_28185[13] = inst_28146);
return statearr_28185;
})();var statearr_28186_28209 = state_28168__$1;(statearr_28186_28209[2] = null);
(statearr_28186_28209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28169 === 12))
{var inst_28128 = (state_28168[8]);var inst_28156 = cljs.core.vec.call(null,inst_28128);var state_28168__$1 = state_28168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28168__$1,15,out,inst_28156);
} else
{if((state_val_28169 === 13))
{var state_28168__$1 = state_28168;var statearr_28187_28210 = state_28168__$1;(statearr_28187_28210[2] = null);
(statearr_28187_28210[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28169 === 14))
{var inst_28161 = (state_28168[2]);var inst_28162 = cljs.core.async.close_BANG_.call(null,out);var state_28168__$1 = (function (){var statearr_28188 = state_28168;(statearr_28188[14] = inst_28161);
return statearr_28188;
})();var statearr_28189_28211 = state_28168__$1;(statearr_28189_28211[2] = inst_28162);
(statearr_28189_28211[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28169 === 15))
{var inst_28158 = (state_28168[2]);var state_28168__$1 = state_28168;var statearr_28190_28212 = state_28168__$1;(statearr_28190_28212[2] = inst_28158);
(statearr_28190_28212[1] = 14);
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
var state_machine__12116__auto____0 = (function (){var statearr_28194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28194[0] = state_machine__12116__auto__);
(statearr_28194[1] = 1);
return statearr_28194;
});
var state_machine__12116__auto____1 = (function (state_28168){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_28168);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e28195){if((e28195 instanceof Object))
{var ex__12119__auto__ = e28195;var statearr_28196_28213 = state_28168;(statearr_28196_28213[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28195;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28214 = state_28168;
state_28168 = G__28214;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_28168){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_28168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_28197 = f__12186__auto__.call(null);(statearr_28197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___28198);
return statearr_28197;
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