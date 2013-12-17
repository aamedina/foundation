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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19640 = (function (f,fn_handler,meta19641){
this.f = f;
this.fn_handler = fn_handler;
this.meta19641 = meta19641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19640.cljs$lang$type = true;
cljs.core.async.t19640.cljs$lang$ctorStr = "cljs.core.async/t19640";
cljs.core.async.t19640.cljs$lang$ctorPrWriter = (function (this__8370__auto__,writer__8371__auto__,opt__8372__auto__){return cljs.core._write.call(null,writer__8371__auto__,"cljs.core.async/t19640");
});
cljs.core.async.t19640.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19642){var self__ = this;
var _19642__$1 = this;return self__.meta19641;
});
cljs.core.async.t19640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19642,meta19641__$1){var self__ = this;
var _19642__$1 = this;return (new cljs.core.async.t19640(self__.f,self__.fn_handler,meta19641__$1));
});
cljs.core.async.__GT_t19640 = (function __GT_t19640(f__$1,fn_handler__$1,meta19641){return (new cljs.core.async.t19640(f__$1,fn_handler__$1,meta19641));
});
}
return (new cljs.core.async.t19640(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19644 = buff;if(G__19644)
{var bit__8452__auto__ = null;if(cljs.core.truth_((function (){var or__7826__auto__ = bit__8452__auto__;if(cljs.core.truth_(or__7826__auto__))
{return or__7826__auto__;
} else
{return G__19644.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19644.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19644);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19644);
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
{var val_19645 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19645);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_19645);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7814__auto__ = ret;if(cljs.core.truth_(and__7814__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7814__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8649__auto___19646 = n;var x_19647 = 0;while(true){
if((x_19647 < n__8649__auto___19646))
{(a[x_19647] = 0);
{
var G__19648 = (x_19647 + 1);
x_19647 = G__19648;
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
var G__19649 = (i + 1);
i = G__19649;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19653 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19653 = (function (flag,alt_flag,meta19654){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19654 = meta19654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19653.cljs$lang$type = true;
cljs.core.async.t19653.cljs$lang$ctorStr = "cljs.core.async/t19653";
cljs.core.async.t19653.cljs$lang$ctorPrWriter = (function (this__8370__auto__,writer__8371__auto__,opt__8372__auto__){return cljs.core._write.call(null,writer__8371__auto__,"cljs.core.async/t19653");
});
cljs.core.async.t19653.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t19653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t19653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19655){var self__ = this;
var _19655__$1 = this;return self__.meta19654;
});
cljs.core.async.t19653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19655,meta19654__$1){var self__ = this;
var _19655__$1 = this;return (new cljs.core.async.t19653(self__.flag,self__.alt_flag,meta19654__$1));
});
cljs.core.async.__GT_t19653 = (function __GT_t19653(flag__$1,alt_flag__$1,meta19654){return (new cljs.core.async.t19653(flag__$1,alt_flag__$1,meta19654));
});
}
return (new cljs.core.async.t19653(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19659 = (function (cb,flag,alt_handler,meta19660){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19660 = meta19660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19659.cljs$lang$type = true;
cljs.core.async.t19659.cljs$lang$ctorStr = "cljs.core.async/t19659";
cljs.core.async.t19659.cljs$lang$ctorPrWriter = (function (this__8370__auto__,writer__8371__auto__,opt__8372__auto__){return cljs.core._write.call(null,writer__8371__auto__,"cljs.core.async/t19659");
});
cljs.core.async.t19659.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19661){var self__ = this;
var _19661__$1 = this;return self__.meta19660;
});
cljs.core.async.t19659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19661,meta19660__$1){var self__ = this;
var _19661__$1 = this;return (new cljs.core.async.t19659(self__.cb,self__.flag,self__.alt_handler,meta19660__$1));
});
cljs.core.async.__GT_t19659 = (function __GT_t19659(cb__$1,flag__$1,alt_handler__$1,meta19660){return (new cljs.core.async.t19659(cb__$1,flag__$1,alt_handler__$1,meta19660));
});
}
return (new cljs.core.async.t19659(cb,flag,alt_handler,null));
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
return (function (p1__19662_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19662_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7826__auto__ = wport;if(cljs.core.truth_(or__7826__auto__))
{return or__7826__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__19663 = (i + 1);
i = G__19663;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7826__auto__ = ret;if(cljs.core.truth_(or__7826__auto__))
{return or__7826__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7814__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7814__auto__;
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
var alts_BANG___delegate = function (ports,p__19664){var map__19666 = p__19664;var map__19666__$1 = ((cljs.core.seq_QMARK_.call(null,map__19666))?cljs.core.apply.call(null,cljs.core.hash_map,map__19666):map__19666);var opts = map__19666__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__19664 = null;if (arguments.length > 1) {
  p__19664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19664);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19667){
var ports = cljs.core.first(arglist__19667);
var p__19664 = cljs.core.rest(arglist__19667);
return alts_BANG___delegate(ports,p__19664);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19675 = (function (ch,f,map_LT_,meta19676){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19676 = meta19676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19675.cljs$lang$type = true;
cljs.core.async.t19675.cljs$lang$ctorStr = "cljs.core.async/t19675";
cljs.core.async.t19675.cljs$lang$ctorPrWriter = (function (this__8370__auto__,writer__8371__auto__,opt__8372__auto__){return cljs.core._write.call(null,writer__8371__auto__,"cljs.core.async/t19675");
});
cljs.core.async.t19675.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19675.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t19675.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19675.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19678 = (function (fn1,_,meta19676,ch,f,map_LT_,meta19679){
this.fn1 = fn1;
this._ = _;
this.meta19676 = meta19676;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19679 = meta19679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19678.cljs$lang$type = true;
cljs.core.async.t19678.cljs$lang$ctorStr = "cljs.core.async/t19678";
cljs.core.async.t19678.cljs$lang$ctorPrWriter = (function (this__8370__auto__,writer__8371__auto__,opt__8372__auto__){return cljs.core._write.call(null,writer__8371__auto__,"cljs.core.async/t19678");
});
cljs.core.async.t19678.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t19678.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t19678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__19668_SHARP_){return f1.call(null,(((p1__19668_SHARP_ == null))?null:self__.f.call(null,p1__19668_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t19678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19680){var self__ = this;
var _19680__$1 = this;return self__.meta19679;
});
cljs.core.async.t19678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19680,meta19679__$1){var self__ = this;
var _19680__$1 = this;return (new cljs.core.async.t19678(self__.fn1,self__._,self__.meta19676,self__.ch,self__.f,self__.map_LT_,meta19679__$1));
});
cljs.core.async.__GT_t19678 = (function __GT_t19678(fn1__$1,___$2,meta19676__$1,ch__$2,f__$2,map_LT___$2,meta19679){return (new cljs.core.async.t19678(fn1__$1,___$2,meta19676__$1,ch__$2,f__$2,map_LT___$2,meta19679));
});
}
return (new cljs.core.async.t19678(fn1,___$1,self__.meta19676,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7814__auto__ = ret;if(cljs.core.truth_(and__7814__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7814__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t19675.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19675.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19677){var self__ = this;
var _19677__$1 = this;return self__.meta19676;
});
cljs.core.async.t19675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19677,meta19676__$1){var self__ = this;
var _19677__$1 = this;return (new cljs.core.async.t19675(self__.ch,self__.f,self__.map_LT_,meta19676__$1));
});
cljs.core.async.__GT_t19675 = (function __GT_t19675(ch__$1,f__$1,map_LT___$1,meta19676){return (new cljs.core.async.t19675(ch__$1,f__$1,map_LT___$1,meta19676));
});
}
return (new cljs.core.async.t19675(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19684 = (function (ch,f,map_GT_,meta19685){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19685 = meta19685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19684.cljs$lang$type = true;
cljs.core.async.t19684.cljs$lang$ctorStr = "cljs.core.async/t19684";
cljs.core.async.t19684.cljs$lang$ctorPrWriter = (function (this__8370__auto__,writer__8371__auto__,opt__8372__auto__){return cljs.core._write.call(null,writer__8371__auto__,"cljs.core.async/t19684");
});
cljs.core.async.t19684.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t19684.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19684.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19686){var self__ = this;
var _19686__$1 = this;return self__.meta19685;
});
cljs.core.async.t19684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19686,meta19685__$1){var self__ = this;
var _19686__$1 = this;return (new cljs.core.async.t19684(self__.ch,self__.f,self__.map_GT_,meta19685__$1));
});
cljs.core.async.__GT_t19684 = (function __GT_t19684(ch__$1,f__$1,map_GT___$1,meta19685){return (new cljs.core.async.t19684(ch__$1,f__$1,map_GT___$1,meta19685));
});
}
return (new cljs.core.async.t19684(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19690 = (function (ch,p,filter_GT_,meta19691){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19691 = meta19691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19690.cljs$lang$type = true;
cljs.core.async.t19690.cljs$lang$ctorStr = "cljs.core.async/t19690";
cljs.core.async.t19690.cljs$lang$ctorPrWriter = (function (this__8370__auto__,writer__8371__auto__,opt__8372__auto__){return cljs.core._write.call(null,writer__8371__auto__,"cljs.core.async/t19690");
});
cljs.core.async.t19690.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t19690.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19690.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19692){var self__ = this;
var _19692__$1 = this;return self__.meta19691;
});
cljs.core.async.t19690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19692,meta19691__$1){var self__ = this;
var _19692__$1 = this;return (new cljs.core.async.t19690(self__.ch,self__.p,self__.filter_GT_,meta19691__$1));
});
cljs.core.async.__GT_t19690 = (function __GT_t19690(ch__$1,p__$1,filter_GT___$1,meta19691){return (new cljs.core.async.t19690(ch__$1,p__$1,filter_GT___$1,meta19691));
});
}
return (new cljs.core.async.t19690(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14413__auto___19775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_19754){var state_val_19755 = (state_19754[1]);if((state_val_19755 === 1))
{var state_19754__$1 = state_19754;var statearr_19756_19776 = state_19754__$1;(statearr_19756_19776[2] = null);
(statearr_19756_19776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19755 === 2))
{var state_19754__$1 = state_19754;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19754__$1,4,ch);
} else
{if((state_val_19755 === 3))
{var inst_19752 = (state_19754[2]);var state_19754__$1 = state_19754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19754__$1,inst_19752);
} else
{if((state_val_19755 === 4))
{var inst_19736 = (state_19754[7]);var inst_19736__$1 = (state_19754[2]);var inst_19737 = (inst_19736__$1 == null);var state_19754__$1 = (function (){var statearr_19757 = state_19754;(statearr_19757[7] = inst_19736__$1);
return statearr_19757;
})();if(cljs.core.truth_(inst_19737))
{var statearr_19758_19777 = state_19754__$1;(statearr_19758_19777[1] = 5);
} else
{var statearr_19759_19778 = state_19754__$1;(statearr_19759_19778[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19755 === 5))
{var inst_19739 = cljs.core.async.close_BANG_.call(null,out);var state_19754__$1 = state_19754;var statearr_19760_19779 = state_19754__$1;(statearr_19760_19779[2] = inst_19739);
(statearr_19760_19779[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19755 === 6))
{var inst_19736 = (state_19754[7]);var inst_19741 = p.call(null,inst_19736);var state_19754__$1 = state_19754;if(cljs.core.truth_(inst_19741))
{var statearr_19761_19780 = state_19754__$1;(statearr_19761_19780[1] = 8);
} else
{var statearr_19762_19781 = state_19754__$1;(statearr_19762_19781[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19755 === 7))
{var inst_19750 = (state_19754[2]);var state_19754__$1 = state_19754;var statearr_19763_19782 = state_19754__$1;(statearr_19763_19782[2] = inst_19750);
(statearr_19763_19782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19755 === 8))
{var inst_19736 = (state_19754[7]);var state_19754__$1 = state_19754;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19754__$1,11,out,inst_19736);
} else
{if((state_val_19755 === 9))
{var state_19754__$1 = state_19754;var statearr_19764_19783 = state_19754__$1;(statearr_19764_19783[2] = null);
(statearr_19764_19783[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19755 === 10))
{var inst_19747 = (state_19754[2]);var state_19754__$1 = (function (){var statearr_19765 = state_19754;(statearr_19765[8] = inst_19747);
return statearr_19765;
})();var statearr_19766_19784 = state_19754__$1;(statearr_19766_19784[2] = null);
(statearr_19766_19784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19755 === 11))
{var inst_19744 = (state_19754[2]);var state_19754__$1 = state_19754;var statearr_19767_19785 = state_19754__$1;(statearr_19767_19785[2] = inst_19744);
(statearr_19767_19785[1] = 10);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_19771 = (new Array(9));(statearr_19771[0] = state_machine__14324__auto__);
(statearr_19771[1] = 1);
return statearr_19771;
});
var state_machine__14324__auto____1 = (function (state_19754){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_19754);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e19772){if((e19772 instanceof Object))
{var ex__14327__auto__ = e19772;var statearr_19773_19786 = state_19754;(statearr_19773_19786[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19754);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19787 = state_19754;
state_19754 = G__19787;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_19754){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_19754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_19774 = f__14414__auto__.call(null);(statearr_19774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___19775);
return statearr_19774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__14413__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_19939){var state_val_19940 = (state_19939[1]);if((state_val_19940 === 1))
{var state_19939__$1 = state_19939;var statearr_19941_19978 = state_19939__$1;(statearr_19941_19978[2] = null);
(statearr_19941_19978[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 2))
{var state_19939__$1 = state_19939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19939__$1,4,in$);
} else
{if((state_val_19940 === 3))
{var inst_19937 = (state_19939[2]);var state_19939__$1 = state_19939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19939__$1,inst_19937);
} else
{if((state_val_19940 === 4))
{var inst_19885 = (state_19939[7]);var inst_19885__$1 = (state_19939[2]);var inst_19886 = (inst_19885__$1 == null);var state_19939__$1 = (function (){var statearr_19942 = state_19939;(statearr_19942[7] = inst_19885__$1);
return statearr_19942;
})();if(cljs.core.truth_(inst_19886))
{var statearr_19943_19979 = state_19939__$1;(statearr_19943_19979[1] = 5);
} else
{var statearr_19944_19980 = state_19939__$1;(statearr_19944_19980[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 5))
{var inst_19888 = cljs.core.async.close_BANG_.call(null,out);var state_19939__$1 = state_19939;var statearr_19945_19981 = state_19939__$1;(statearr_19945_19981[2] = inst_19888);
(statearr_19945_19981[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 6))
{var inst_19885 = (state_19939[7]);var inst_19890 = f.call(null,inst_19885);var inst_19895 = cljs.core.seq.call(null,inst_19890);var inst_19896 = inst_19895;var inst_19897 = null;var inst_19898 = 0;var inst_19899 = 0;var state_19939__$1 = (function (){var statearr_19946 = state_19939;(statearr_19946[8] = inst_19898);
(statearr_19946[9] = inst_19899);
(statearr_19946[10] = inst_19896);
(statearr_19946[11] = inst_19897);
return statearr_19946;
})();var statearr_19947_19982 = state_19939__$1;(statearr_19947_19982[2] = null);
(statearr_19947_19982[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 7))
{var inst_19935 = (state_19939[2]);var state_19939__$1 = state_19939;var statearr_19948_19983 = state_19939__$1;(statearr_19948_19983[2] = inst_19935);
(statearr_19948_19983[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 8))
{var inst_19898 = (state_19939[8]);var inst_19899 = (state_19939[9]);var inst_19901 = (inst_19899 < inst_19898);var inst_19902 = inst_19901;var state_19939__$1 = state_19939;if(cljs.core.truth_(inst_19902))
{var statearr_19949_19984 = state_19939__$1;(statearr_19949_19984[1] = 10);
} else
{var statearr_19950_19985 = state_19939__$1;(statearr_19950_19985[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 9))
{var inst_19932 = (state_19939[2]);var state_19939__$1 = (function (){var statearr_19951 = state_19939;(statearr_19951[12] = inst_19932);
return statearr_19951;
})();var statearr_19952_19986 = state_19939__$1;(statearr_19952_19986[2] = null);
(statearr_19952_19986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 10))
{var inst_19899 = (state_19939[9]);var inst_19897 = (state_19939[11]);var inst_19904 = cljs.core._nth.call(null,inst_19897,inst_19899);var state_19939__$1 = state_19939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19939__$1,13,out,inst_19904);
} else
{if((state_val_19940 === 11))
{var inst_19896 = (state_19939[10]);var inst_19910 = (state_19939[13]);var inst_19910__$1 = cljs.core.seq.call(null,inst_19896);var state_19939__$1 = (function (){var statearr_19956 = state_19939;(statearr_19956[13] = inst_19910__$1);
return statearr_19956;
})();if(inst_19910__$1)
{var statearr_19957_19987 = state_19939__$1;(statearr_19957_19987[1] = 14);
} else
{var statearr_19958_19988 = state_19939__$1;(statearr_19958_19988[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 12))
{var inst_19930 = (state_19939[2]);var state_19939__$1 = state_19939;var statearr_19959_19989 = state_19939__$1;(statearr_19959_19989[2] = inst_19930);
(statearr_19959_19989[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 13))
{var inst_19898 = (state_19939[8]);var inst_19899 = (state_19939[9]);var inst_19896 = (state_19939[10]);var inst_19897 = (state_19939[11]);var inst_19906 = (state_19939[2]);var inst_19907 = (inst_19899 + 1);var tmp19953 = inst_19898;var tmp19954 = inst_19896;var tmp19955 = inst_19897;var inst_19896__$1 = tmp19954;var inst_19897__$1 = tmp19955;var inst_19898__$1 = tmp19953;var inst_19899__$1 = inst_19907;var state_19939__$1 = (function (){var statearr_19960 = state_19939;(statearr_19960[8] = inst_19898__$1);
(statearr_19960[9] = inst_19899__$1);
(statearr_19960[10] = inst_19896__$1);
(statearr_19960[11] = inst_19897__$1);
(statearr_19960[14] = inst_19906);
return statearr_19960;
})();var statearr_19961_19990 = state_19939__$1;(statearr_19961_19990[2] = null);
(statearr_19961_19990[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 14))
{var inst_19910 = (state_19939[13]);var inst_19912 = cljs.core.chunked_seq_QMARK_.call(null,inst_19910);var state_19939__$1 = state_19939;if(inst_19912)
{var statearr_19962_19991 = state_19939__$1;(statearr_19962_19991[1] = 17);
} else
{var statearr_19963_19992 = state_19939__$1;(statearr_19963_19992[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 15))
{var state_19939__$1 = state_19939;var statearr_19964_19993 = state_19939__$1;(statearr_19964_19993[2] = null);
(statearr_19964_19993[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 16))
{var inst_19928 = (state_19939[2]);var state_19939__$1 = state_19939;var statearr_19965_19994 = state_19939__$1;(statearr_19965_19994[2] = inst_19928);
(statearr_19965_19994[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 17))
{var inst_19910 = (state_19939[13]);var inst_19914 = cljs.core.chunk_first.call(null,inst_19910);var inst_19915 = cljs.core.chunk_rest.call(null,inst_19910);var inst_19916 = cljs.core.count.call(null,inst_19914);var inst_19896 = inst_19915;var inst_19897 = inst_19914;var inst_19898 = inst_19916;var inst_19899 = 0;var state_19939__$1 = (function (){var statearr_19966 = state_19939;(statearr_19966[8] = inst_19898);
(statearr_19966[9] = inst_19899);
(statearr_19966[10] = inst_19896);
(statearr_19966[11] = inst_19897);
return statearr_19966;
})();var statearr_19967_19995 = state_19939__$1;(statearr_19967_19995[2] = null);
(statearr_19967_19995[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 18))
{var inst_19910 = (state_19939[13]);var inst_19919 = cljs.core.first.call(null,inst_19910);var state_19939__$1 = state_19939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19939__$1,20,out,inst_19919);
} else
{if((state_val_19940 === 19))
{var inst_19925 = (state_19939[2]);var state_19939__$1 = state_19939;var statearr_19968_19996 = state_19939__$1;(statearr_19968_19996[2] = inst_19925);
(statearr_19968_19996[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19940 === 20))
{var inst_19910 = (state_19939[13]);var inst_19921 = (state_19939[2]);var inst_19922 = cljs.core.next.call(null,inst_19910);var inst_19896 = inst_19922;var inst_19897 = null;var inst_19898 = 0;var inst_19899 = 0;var state_19939__$1 = (function (){var statearr_19969 = state_19939;(statearr_19969[8] = inst_19898);
(statearr_19969[9] = inst_19899);
(statearr_19969[10] = inst_19896);
(statearr_19969[11] = inst_19897);
(statearr_19969[15] = inst_19921);
return statearr_19969;
})();var statearr_19970_19997 = state_19939__$1;(statearr_19970_19997[2] = null);
(statearr_19970_19997[1] = 8);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_19974 = (new Array(16));(statearr_19974[0] = state_machine__14324__auto__);
(statearr_19974[1] = 1);
return statearr_19974;
});
var state_machine__14324__auto____1 = (function (state_19939){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_19939);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e19975){if((e19975 instanceof Object))
{var ex__14327__auto__ = e19975;var statearr_19976_19998 = state_19939;(statearr_19976_19998[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19999 = state_19939;
state_19939 = G__19999;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_19939){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_19939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_19977 = f__14414__auto__.call(null);(statearr_19977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto__);
return statearr_19977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
}));
return c__14413__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__14413__auto___20080 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_20059){var state_val_20060 = (state_20059[1]);if((state_val_20060 === 1))
{var state_20059__$1 = state_20059;var statearr_20061_20081 = state_20059__$1;(statearr_20061_20081[2] = null);
(statearr_20061_20081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20060 === 2))
{var state_20059__$1 = state_20059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20059__$1,4,from);
} else
{if((state_val_20060 === 3))
{var inst_20057 = (state_20059[2]);var state_20059__$1 = state_20059;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20059__$1,inst_20057);
} else
{if((state_val_20060 === 4))
{var inst_20042 = (state_20059[7]);var inst_20042__$1 = (state_20059[2]);var inst_20043 = (inst_20042__$1 == null);var state_20059__$1 = (function (){var statearr_20062 = state_20059;(statearr_20062[7] = inst_20042__$1);
return statearr_20062;
})();if(cljs.core.truth_(inst_20043))
{var statearr_20063_20082 = state_20059__$1;(statearr_20063_20082[1] = 5);
} else
{var statearr_20064_20083 = state_20059__$1;(statearr_20064_20083[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20060 === 5))
{var state_20059__$1 = state_20059;if(cljs.core.truth_(close_QMARK_))
{var statearr_20065_20084 = state_20059__$1;(statearr_20065_20084[1] = 8);
} else
{var statearr_20066_20085 = state_20059__$1;(statearr_20066_20085[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20060 === 6))
{var inst_20042 = (state_20059[7]);var state_20059__$1 = state_20059;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20059__$1,11,to,inst_20042);
} else
{if((state_val_20060 === 7))
{var inst_20055 = (state_20059[2]);var state_20059__$1 = state_20059;var statearr_20067_20086 = state_20059__$1;(statearr_20067_20086[2] = inst_20055);
(statearr_20067_20086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20060 === 8))
{var inst_20046 = cljs.core.async.close_BANG_.call(null,to);var state_20059__$1 = state_20059;var statearr_20068_20087 = state_20059__$1;(statearr_20068_20087[2] = inst_20046);
(statearr_20068_20087[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20060 === 9))
{var state_20059__$1 = state_20059;var statearr_20069_20088 = state_20059__$1;(statearr_20069_20088[2] = null);
(statearr_20069_20088[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20060 === 10))
{var inst_20049 = (state_20059[2]);var state_20059__$1 = state_20059;var statearr_20070_20089 = state_20059__$1;(statearr_20070_20089[2] = inst_20049);
(statearr_20070_20089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20060 === 11))
{var inst_20052 = (state_20059[2]);var state_20059__$1 = (function (){var statearr_20071 = state_20059;(statearr_20071[8] = inst_20052);
return statearr_20071;
})();var statearr_20072_20090 = state_20059__$1;(statearr_20072_20090[2] = null);
(statearr_20072_20090[1] = 2);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_20076 = (new Array(9));(statearr_20076[0] = state_machine__14324__auto__);
(statearr_20076[1] = 1);
return statearr_20076;
});
var state_machine__14324__auto____1 = (function (state_20059){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_20059);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e20077){if((e20077 instanceof Object))
{var ex__14327__auto__ = e20077;var statearr_20078_20091 = state_20059;(statearr_20078_20091[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20059);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20092 = state_20059;
state_20059 = G__20092;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_20059){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_20059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_20079 = f__14414__auto__.call(null);(statearr_20079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___20080);
return statearr_20079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14413__auto___20179 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_20157){var state_val_20158 = (state_20157[1]);if((state_val_20158 === 1))
{var state_20157__$1 = state_20157;var statearr_20159_20180 = state_20157__$1;(statearr_20159_20180[2] = null);
(statearr_20159_20180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 2))
{var state_20157__$1 = state_20157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20157__$1,4,ch);
} else
{if((state_val_20158 === 3))
{var inst_20155 = (state_20157[2]);var state_20157__$1 = state_20157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20157__$1,inst_20155);
} else
{if((state_val_20158 === 4))
{var inst_20138 = (state_20157[7]);var inst_20138__$1 = (state_20157[2]);var inst_20139 = (inst_20138__$1 == null);var state_20157__$1 = (function (){var statearr_20160 = state_20157;(statearr_20160[7] = inst_20138__$1);
return statearr_20160;
})();if(cljs.core.truth_(inst_20139))
{var statearr_20161_20181 = state_20157__$1;(statearr_20161_20181[1] = 5);
} else
{var statearr_20162_20182 = state_20157__$1;(statearr_20162_20182[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 5))
{var inst_20141 = cljs.core.async.close_BANG_.call(null,tc);var inst_20142 = cljs.core.async.close_BANG_.call(null,fc);var state_20157__$1 = (function (){var statearr_20163 = state_20157;(statearr_20163[8] = inst_20141);
return statearr_20163;
})();var statearr_20164_20183 = state_20157__$1;(statearr_20164_20183[2] = inst_20142);
(statearr_20164_20183[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 6))
{var inst_20138 = (state_20157[7]);var inst_20144 = p.call(null,inst_20138);var state_20157__$1 = state_20157;if(cljs.core.truth_(inst_20144))
{var statearr_20165_20184 = state_20157__$1;(statearr_20165_20184[1] = 9);
} else
{var statearr_20166_20185 = state_20157__$1;(statearr_20166_20185[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 7))
{var inst_20153 = (state_20157[2]);var state_20157__$1 = state_20157;var statearr_20167_20186 = state_20157__$1;(statearr_20167_20186[2] = inst_20153);
(statearr_20167_20186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 8))
{var inst_20150 = (state_20157[2]);var state_20157__$1 = (function (){var statearr_20168 = state_20157;(statearr_20168[9] = inst_20150);
return statearr_20168;
})();var statearr_20169_20187 = state_20157__$1;(statearr_20169_20187[2] = null);
(statearr_20169_20187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 9))
{var state_20157__$1 = state_20157;var statearr_20170_20188 = state_20157__$1;(statearr_20170_20188[2] = tc);
(statearr_20170_20188[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 10))
{var state_20157__$1 = state_20157;var statearr_20171_20189 = state_20157__$1;(statearr_20171_20189[2] = fc);
(statearr_20171_20189[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20158 === 11))
{var inst_20138 = (state_20157[7]);var inst_20148 = (state_20157[2]);var state_20157__$1 = state_20157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20157__$1,8,inst_20148,inst_20138);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_20175 = (new Array(10));(statearr_20175[0] = state_machine__14324__auto__);
(statearr_20175[1] = 1);
return statearr_20175;
});
var state_machine__14324__auto____1 = (function (state_20157){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_20157);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e20176){if((e20176 instanceof Object))
{var ex__14327__auto__ = e20176;var statearr_20177_20190 = state_20157;(statearr_20177_20190[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20176;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20191 = state_20157;
state_20157 = G__20191;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_20157){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_20157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_20178 = f__14414__auto__.call(null);(statearr_20178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___20179);
return statearr_20178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__14413__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_20238){var state_val_20239 = (state_20238[1]);if((state_val_20239 === 7))
{var inst_20234 = (state_20238[2]);var state_20238__$1 = state_20238;var statearr_20240_20256 = state_20238__$1;(statearr_20240_20256[2] = inst_20234);
(statearr_20240_20256[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20239 === 6))
{var inst_20227 = (state_20238[7]);var inst_20224 = (state_20238[8]);var inst_20231 = f.call(null,inst_20224,inst_20227);var inst_20224__$1 = inst_20231;var state_20238__$1 = (function (){var statearr_20241 = state_20238;(statearr_20241[8] = inst_20224__$1);
return statearr_20241;
})();var statearr_20242_20257 = state_20238__$1;(statearr_20242_20257[2] = null);
(statearr_20242_20257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20239 === 5))
{var inst_20224 = (state_20238[8]);var state_20238__$1 = state_20238;var statearr_20243_20258 = state_20238__$1;(statearr_20243_20258[2] = inst_20224);
(statearr_20243_20258[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20239 === 4))
{var inst_20227 = (state_20238[7]);var inst_20227__$1 = (state_20238[2]);var inst_20228 = (inst_20227__$1 == null);var state_20238__$1 = (function (){var statearr_20244 = state_20238;(statearr_20244[7] = inst_20227__$1);
return statearr_20244;
})();if(cljs.core.truth_(inst_20228))
{var statearr_20245_20259 = state_20238__$1;(statearr_20245_20259[1] = 5);
} else
{var statearr_20246_20260 = state_20238__$1;(statearr_20246_20260[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20239 === 3))
{var inst_20236 = (state_20238[2]);var state_20238__$1 = state_20238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20238__$1,inst_20236);
} else
{if((state_val_20239 === 2))
{var state_20238__$1 = state_20238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20238__$1,4,ch);
} else
{if((state_val_20239 === 1))
{var inst_20224 = init;var state_20238__$1 = (function (){var statearr_20247 = state_20238;(statearr_20247[8] = inst_20224);
return statearr_20247;
})();var statearr_20248_20261 = state_20238__$1;(statearr_20248_20261[2] = null);
(statearr_20248_20261[1] = 2);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_20252 = (new Array(9));(statearr_20252[0] = state_machine__14324__auto__);
(statearr_20252[1] = 1);
return statearr_20252;
});
var state_machine__14324__auto____1 = (function (state_20238){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_20238);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e20253){if((e20253 instanceof Object))
{var ex__14327__auto__ = e20253;var statearr_20254_20262 = state_20238;(statearr_20254_20262[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20238);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20263 = state_20238;
state_20238 = G__20263;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_20238){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_20238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_20255 = f__14414__auto__.call(null);(statearr_20255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto__);
return statearr_20255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
}));
return c__14413__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__14413__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_20325){var state_val_20326 = (state_20325[1]);if((state_val_20326 === 1))
{var inst_20305 = cljs.core.seq.call(null,coll);var inst_20306 = inst_20305;var state_20325__$1 = (function (){var statearr_20327 = state_20325;(statearr_20327[7] = inst_20306);
return statearr_20327;
})();var statearr_20328_20346 = state_20325__$1;(statearr_20328_20346[2] = null);
(statearr_20328_20346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20326 === 2))
{var inst_20306 = (state_20325[7]);var state_20325__$1 = state_20325;if(cljs.core.truth_(inst_20306))
{var statearr_20329_20347 = state_20325__$1;(statearr_20329_20347[1] = 4);
} else
{var statearr_20330_20348 = state_20325__$1;(statearr_20330_20348[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20326 === 3))
{var inst_20323 = (state_20325[2]);var state_20325__$1 = state_20325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20325__$1,inst_20323);
} else
{if((state_val_20326 === 4))
{var inst_20306 = (state_20325[7]);var inst_20309 = cljs.core.first.call(null,inst_20306);var state_20325__$1 = state_20325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20325__$1,7,ch,inst_20309);
} else
{if((state_val_20326 === 5))
{var state_20325__$1 = state_20325;if(cljs.core.truth_(close_QMARK_))
{var statearr_20331_20349 = state_20325__$1;(statearr_20331_20349[1] = 8);
} else
{var statearr_20332_20350 = state_20325__$1;(statearr_20332_20350[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20326 === 6))
{var inst_20321 = (state_20325[2]);var state_20325__$1 = state_20325;var statearr_20333_20351 = state_20325__$1;(statearr_20333_20351[2] = inst_20321);
(statearr_20333_20351[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20326 === 7))
{var inst_20306 = (state_20325[7]);var inst_20311 = (state_20325[2]);var inst_20312 = cljs.core.next.call(null,inst_20306);var inst_20306__$1 = inst_20312;var state_20325__$1 = (function (){var statearr_20334 = state_20325;(statearr_20334[7] = inst_20306__$1);
(statearr_20334[8] = inst_20311);
return statearr_20334;
})();var statearr_20335_20352 = state_20325__$1;(statearr_20335_20352[2] = null);
(statearr_20335_20352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20326 === 8))
{var inst_20316 = cljs.core.async.close_BANG_.call(null,ch);var state_20325__$1 = state_20325;var statearr_20336_20353 = state_20325__$1;(statearr_20336_20353[2] = inst_20316);
(statearr_20336_20353[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20326 === 9))
{var state_20325__$1 = state_20325;var statearr_20337_20354 = state_20325__$1;(statearr_20337_20354[2] = null);
(statearr_20337_20354[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20326 === 10))
{var inst_20319 = (state_20325[2]);var state_20325__$1 = state_20325;var statearr_20338_20355 = state_20325__$1;(statearr_20338_20355[2] = inst_20319);
(statearr_20338_20355[1] = 6);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_20342 = (new Array(9));(statearr_20342[0] = state_machine__14324__auto__);
(statearr_20342[1] = 1);
return statearr_20342;
});
var state_machine__14324__auto____1 = (function (state_20325){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_20325);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e20343){if((e20343 instanceof Object))
{var ex__14327__auto__ = e20343;var statearr_20344_20356 = state_20325;(statearr_20344_20356[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20325);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20357 = state_20325;
state_20325 = G__20357;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_20325){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_20325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_20345 = f__14414__auto__.call(null);(statearr_20345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto__);
return statearr_20345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
}));
return c__14413__auto__;
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
cljs.core.async.Mux = (function (){var obj20359 = {};return obj20359;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7814__auto__ = _;if(and__7814__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7814__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8429__auto__ = (((_ == null))?null:_);return (function (){var or__7826__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj20361 = {};return obj20361;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7814__auto__ = m;if(and__7814__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7814__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8429__auto__ = (((m == null))?null:m);return (function (){var or__7826__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7814__auto__ = m;if(and__7814__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7814__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8429__auto__ = (((m == null))?null:m);return (function (){var or__7826__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7814__auto__ = m;if(and__7814__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7814__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8429__auto__ = (((m == null))?null:m);return (function (){var or__7826__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20585 = (function (cs,ch,mult,meta20586){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20586 = meta20586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20585.cljs$lang$type = true;
cljs.core.async.t20585.cljs$lang$ctorStr = "cljs.core.async/t20585";
cljs.core.async.t20585.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8370__auto__,writer__8371__auto__,opt__8372__auto__){return cljs.core._write.call(null,writer__8371__auto__,"cljs.core.async/t20585");
});})(cs))
;
cljs.core.async.t20585.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20585.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20585.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20585.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20585.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20587){var self__ = this;
var _20587__$1 = this;return self__.meta20586;
});})(cs))
;
cljs.core.async.t20585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20587,meta20586__$1){var self__ = this;
var _20587__$1 = this;return (new cljs.core.async.t20585(self__.cs,self__.ch,self__.mult,meta20586__$1));
});})(cs))
;
cljs.core.async.__GT_t20585 = ((function (cs){
return (function __GT_t20585(cs__$1,ch__$1,mult__$1,meta20586){return (new cljs.core.async.t20585(cs__$1,ch__$1,mult__$1,meta20586));
});})(cs))
;
}
return (new cljs.core.async.t20585(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14413__auto___20808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_20722){var state_val_20723 = (state_20722[1]);if((state_val_20723 === 32))
{var inst_20666 = (state_20722[7]);var inst_20590 = (state_20722[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20722,31,Object,null,30);var inst_20673 = cljs.core.async.put_BANG_.call(null,inst_20666,inst_20590,done);var state_20722__$1 = state_20722;var statearr_20724_20809 = state_20722__$1;(statearr_20724_20809[2] = inst_20673);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20722__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 1))
{var state_20722__$1 = state_20722;var statearr_20725_20810 = state_20722__$1;(statearr_20725_20810[2] = null);
(statearr_20725_20810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 33))
{var inst_20679 = (state_20722[9]);var inst_20681 = cljs.core.chunked_seq_QMARK_.call(null,inst_20679);var state_20722__$1 = state_20722;if(inst_20681)
{var statearr_20726_20811 = state_20722__$1;(statearr_20726_20811[1] = 36);
} else
{var statearr_20727_20812 = state_20722__$1;(statearr_20727_20812[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 2))
{var state_20722__$1 = state_20722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20722__$1,4,ch);
} else
{if((state_val_20723 === 34))
{var state_20722__$1 = state_20722;var statearr_20728_20813 = state_20722__$1;(statearr_20728_20813[2] = null);
(statearr_20728_20813[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 3))
{var inst_20720 = (state_20722[2]);var state_20722__$1 = state_20722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20722__$1,inst_20720);
} else
{if((state_val_20723 === 35))
{var inst_20704 = (state_20722[2]);var state_20722__$1 = state_20722;var statearr_20729_20814 = state_20722__$1;(statearr_20729_20814[2] = inst_20704);
(statearr_20729_20814[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 4))
{var inst_20590 = (state_20722[8]);var inst_20590__$1 = (state_20722[2]);var inst_20591 = (inst_20590__$1 == null);var state_20722__$1 = (function (){var statearr_20730 = state_20722;(statearr_20730[8] = inst_20590__$1);
return statearr_20730;
})();if(cljs.core.truth_(inst_20591))
{var statearr_20731_20815 = state_20722__$1;(statearr_20731_20815[1] = 5);
} else
{var statearr_20732_20816 = state_20722__$1;(statearr_20732_20816[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 36))
{var inst_20679 = (state_20722[9]);var inst_20683 = cljs.core.chunk_first.call(null,inst_20679);var inst_20684 = cljs.core.chunk_rest.call(null,inst_20679);var inst_20685 = cljs.core.count.call(null,inst_20683);var inst_20658 = inst_20684;var inst_20659 = inst_20683;var inst_20660 = inst_20685;var inst_20661 = 0;var state_20722__$1 = (function (){var statearr_20733 = state_20722;(statearr_20733[10] = inst_20659);
(statearr_20733[11] = inst_20658);
(statearr_20733[12] = inst_20661);
(statearr_20733[13] = inst_20660);
return statearr_20733;
})();var statearr_20734_20817 = state_20722__$1;(statearr_20734_20817[2] = null);
(statearr_20734_20817[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 5))
{var inst_20597 = cljs.core.deref.call(null,cs);var inst_20598 = cljs.core.seq.call(null,inst_20597);var inst_20599 = inst_20598;var inst_20600 = null;var inst_20601 = 0;var inst_20602 = 0;var state_20722__$1 = (function (){var statearr_20735 = state_20722;(statearr_20735[14] = inst_20600);
(statearr_20735[15] = inst_20599);
(statearr_20735[16] = inst_20602);
(statearr_20735[17] = inst_20601);
return statearr_20735;
})();var statearr_20736_20818 = state_20722__$1;(statearr_20736_20818[2] = null);
(statearr_20736_20818[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 37))
{var inst_20679 = (state_20722[9]);var inst_20688 = cljs.core.first.call(null,inst_20679);var state_20722__$1 = (function (){var statearr_20737 = state_20722;(statearr_20737[18] = inst_20688);
return statearr_20737;
})();var statearr_20738_20819 = state_20722__$1;(statearr_20738_20819[2] = null);
(statearr_20738_20819[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 6))
{var inst_20650 = (state_20722[19]);var inst_20649 = cljs.core.deref.call(null,cs);var inst_20650__$1 = cljs.core.keys.call(null,inst_20649);var inst_20651 = cljs.core.count.call(null,inst_20650__$1);var inst_20652 = cljs.core.reset_BANG_.call(null,dctr,inst_20651);var inst_20657 = cljs.core.seq.call(null,inst_20650__$1);var inst_20658 = inst_20657;var inst_20659 = null;var inst_20660 = 0;var inst_20661 = 0;var state_20722__$1 = (function (){var statearr_20739 = state_20722;(statearr_20739[10] = inst_20659);
(statearr_20739[11] = inst_20658);
(statearr_20739[19] = inst_20650__$1);
(statearr_20739[20] = inst_20652);
(statearr_20739[12] = inst_20661);
(statearr_20739[13] = inst_20660);
return statearr_20739;
})();var statearr_20740_20820 = state_20722__$1;(statearr_20740_20820[2] = null);
(statearr_20740_20820[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 38))
{var inst_20701 = (state_20722[2]);var state_20722__$1 = state_20722;var statearr_20741_20821 = state_20722__$1;(statearr_20741_20821[2] = inst_20701);
(statearr_20741_20821[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 7))
{var inst_20718 = (state_20722[2]);var state_20722__$1 = state_20722;var statearr_20742_20822 = state_20722__$1;(statearr_20742_20822[2] = inst_20718);
(statearr_20742_20822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 39))
{var inst_20679 = (state_20722[9]);var inst_20697 = (state_20722[2]);var inst_20698 = cljs.core.next.call(null,inst_20679);var inst_20658 = inst_20698;var inst_20659 = null;var inst_20660 = 0;var inst_20661 = 0;var state_20722__$1 = (function (){var statearr_20743 = state_20722;(statearr_20743[10] = inst_20659);
(statearr_20743[11] = inst_20658);
(statearr_20743[12] = inst_20661);
(statearr_20743[21] = inst_20697);
(statearr_20743[13] = inst_20660);
return statearr_20743;
})();var statearr_20744_20823 = state_20722__$1;(statearr_20744_20823[2] = null);
(statearr_20744_20823[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 8))
{var inst_20602 = (state_20722[16]);var inst_20601 = (state_20722[17]);var inst_20604 = (inst_20602 < inst_20601);var inst_20605 = inst_20604;var state_20722__$1 = state_20722;if(cljs.core.truth_(inst_20605))
{var statearr_20745_20824 = state_20722__$1;(statearr_20745_20824[1] = 10);
} else
{var statearr_20746_20825 = state_20722__$1;(statearr_20746_20825[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 40))
{var inst_20688 = (state_20722[18]);var inst_20689 = (state_20722[2]);var inst_20690 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20691 = cljs.core.async.untap_STAR_.call(null,m,inst_20688);var state_20722__$1 = (function (){var statearr_20747 = state_20722;(statearr_20747[22] = inst_20690);
(statearr_20747[23] = inst_20689);
return statearr_20747;
})();var statearr_20748_20826 = state_20722__$1;(statearr_20748_20826[2] = inst_20691);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20722__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 9))
{var inst_20647 = (state_20722[2]);var state_20722__$1 = state_20722;var statearr_20749_20827 = state_20722__$1;(statearr_20749_20827[2] = inst_20647);
(statearr_20749_20827[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 41))
{var inst_20688 = (state_20722[18]);var inst_20590 = (state_20722[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20722,40,Object,null,39);var inst_20695 = cljs.core.async.put_BANG_.call(null,inst_20688,inst_20590,done);var state_20722__$1 = state_20722;var statearr_20750_20828 = state_20722__$1;(statearr_20750_20828[2] = inst_20695);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20722__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 10))
{var inst_20600 = (state_20722[14]);var inst_20602 = (state_20722[16]);var inst_20608 = cljs.core._nth.call(null,inst_20600,inst_20602);var inst_20609 = cljs.core.nth.call(null,inst_20608,0,null);var inst_20610 = cljs.core.nth.call(null,inst_20608,1,null);var state_20722__$1 = (function (){var statearr_20751 = state_20722;(statearr_20751[24] = inst_20609);
return statearr_20751;
})();if(cljs.core.truth_(inst_20610))
{var statearr_20752_20829 = state_20722__$1;(statearr_20752_20829[1] = 13);
} else
{var statearr_20753_20830 = state_20722__$1;(statearr_20753_20830[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 42))
{var state_20722__$1 = state_20722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20722__$1,45,dchan);
} else
{if((state_val_20723 === 11))
{var inst_20619 = (state_20722[25]);var inst_20599 = (state_20722[15]);var inst_20619__$1 = cljs.core.seq.call(null,inst_20599);var state_20722__$1 = (function (){var statearr_20754 = state_20722;(statearr_20754[25] = inst_20619__$1);
return statearr_20754;
})();if(inst_20619__$1)
{var statearr_20755_20831 = state_20722__$1;(statearr_20755_20831[1] = 16);
} else
{var statearr_20756_20832 = state_20722__$1;(statearr_20756_20832[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 43))
{var state_20722__$1 = state_20722;var statearr_20757_20833 = state_20722__$1;(statearr_20757_20833[2] = null);
(statearr_20757_20833[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 12))
{var inst_20645 = (state_20722[2]);var state_20722__$1 = state_20722;var statearr_20758_20834 = state_20722__$1;(statearr_20758_20834[2] = inst_20645);
(statearr_20758_20834[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 44))
{var inst_20715 = (state_20722[2]);var state_20722__$1 = (function (){var statearr_20759 = state_20722;(statearr_20759[26] = inst_20715);
return statearr_20759;
})();var statearr_20760_20835 = state_20722__$1;(statearr_20760_20835[2] = null);
(statearr_20760_20835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 13))
{var inst_20609 = (state_20722[24]);var inst_20612 = cljs.core.async.close_BANG_.call(null,inst_20609);var state_20722__$1 = state_20722;var statearr_20761_20836 = state_20722__$1;(statearr_20761_20836[2] = inst_20612);
(statearr_20761_20836[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 45))
{var inst_20712 = (state_20722[2]);var state_20722__$1 = state_20722;var statearr_20765_20837 = state_20722__$1;(statearr_20765_20837[2] = inst_20712);
(statearr_20765_20837[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 14))
{var state_20722__$1 = state_20722;var statearr_20766_20838 = state_20722__$1;(statearr_20766_20838[2] = null);
(statearr_20766_20838[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 15))
{var inst_20600 = (state_20722[14]);var inst_20599 = (state_20722[15]);var inst_20602 = (state_20722[16]);var inst_20601 = (state_20722[17]);var inst_20615 = (state_20722[2]);var inst_20616 = (inst_20602 + 1);var tmp20762 = inst_20600;var tmp20763 = inst_20599;var tmp20764 = inst_20601;var inst_20599__$1 = tmp20763;var inst_20600__$1 = tmp20762;var inst_20601__$1 = tmp20764;var inst_20602__$1 = inst_20616;var state_20722__$1 = (function (){var statearr_20767 = state_20722;(statearr_20767[27] = inst_20615);
(statearr_20767[14] = inst_20600__$1);
(statearr_20767[15] = inst_20599__$1);
(statearr_20767[16] = inst_20602__$1);
(statearr_20767[17] = inst_20601__$1);
return statearr_20767;
})();var statearr_20768_20839 = state_20722__$1;(statearr_20768_20839[2] = null);
(statearr_20768_20839[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 16))
{var inst_20619 = (state_20722[25]);var inst_20621 = cljs.core.chunked_seq_QMARK_.call(null,inst_20619);var state_20722__$1 = state_20722;if(inst_20621)
{var statearr_20769_20840 = state_20722__$1;(statearr_20769_20840[1] = 19);
} else
{var statearr_20770_20841 = state_20722__$1;(statearr_20770_20841[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 17))
{var state_20722__$1 = state_20722;var statearr_20771_20842 = state_20722__$1;(statearr_20771_20842[2] = null);
(statearr_20771_20842[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 18))
{var inst_20643 = (state_20722[2]);var state_20722__$1 = state_20722;var statearr_20772_20843 = state_20722__$1;(statearr_20772_20843[2] = inst_20643);
(statearr_20772_20843[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 19))
{var inst_20619 = (state_20722[25]);var inst_20623 = cljs.core.chunk_first.call(null,inst_20619);var inst_20624 = cljs.core.chunk_rest.call(null,inst_20619);var inst_20625 = cljs.core.count.call(null,inst_20623);var inst_20599 = inst_20624;var inst_20600 = inst_20623;var inst_20601 = inst_20625;var inst_20602 = 0;var state_20722__$1 = (function (){var statearr_20773 = state_20722;(statearr_20773[14] = inst_20600);
(statearr_20773[15] = inst_20599);
(statearr_20773[16] = inst_20602);
(statearr_20773[17] = inst_20601);
return statearr_20773;
})();var statearr_20774_20844 = state_20722__$1;(statearr_20774_20844[2] = null);
(statearr_20774_20844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 20))
{var inst_20619 = (state_20722[25]);var inst_20629 = cljs.core.first.call(null,inst_20619);var inst_20630 = cljs.core.nth.call(null,inst_20629,0,null);var inst_20631 = cljs.core.nth.call(null,inst_20629,1,null);var state_20722__$1 = (function (){var statearr_20775 = state_20722;(statearr_20775[28] = inst_20630);
return statearr_20775;
})();if(cljs.core.truth_(inst_20631))
{var statearr_20776_20845 = state_20722__$1;(statearr_20776_20845[1] = 22);
} else
{var statearr_20777_20846 = state_20722__$1;(statearr_20777_20846[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 21))
{var inst_20640 = (state_20722[2]);var state_20722__$1 = state_20722;var statearr_20778_20847 = state_20722__$1;(statearr_20778_20847[2] = inst_20640);
(statearr_20778_20847[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 22))
{var inst_20630 = (state_20722[28]);var inst_20633 = cljs.core.async.close_BANG_.call(null,inst_20630);var state_20722__$1 = state_20722;var statearr_20779_20848 = state_20722__$1;(statearr_20779_20848[2] = inst_20633);
(statearr_20779_20848[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 23))
{var state_20722__$1 = state_20722;var statearr_20780_20849 = state_20722__$1;(statearr_20780_20849[2] = null);
(statearr_20780_20849[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 24))
{var inst_20619 = (state_20722[25]);var inst_20636 = (state_20722[2]);var inst_20637 = cljs.core.next.call(null,inst_20619);var inst_20599 = inst_20637;var inst_20600 = null;var inst_20601 = 0;var inst_20602 = 0;var state_20722__$1 = (function (){var statearr_20781 = state_20722;(statearr_20781[14] = inst_20600);
(statearr_20781[15] = inst_20599);
(statearr_20781[29] = inst_20636);
(statearr_20781[16] = inst_20602);
(statearr_20781[17] = inst_20601);
return statearr_20781;
})();var statearr_20782_20850 = state_20722__$1;(statearr_20782_20850[2] = null);
(statearr_20782_20850[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 25))
{var inst_20661 = (state_20722[12]);var inst_20660 = (state_20722[13]);var inst_20663 = (inst_20661 < inst_20660);var inst_20664 = inst_20663;var state_20722__$1 = state_20722;if(cljs.core.truth_(inst_20664))
{var statearr_20783_20851 = state_20722__$1;(statearr_20783_20851[1] = 27);
} else
{var statearr_20784_20852 = state_20722__$1;(statearr_20784_20852[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 26))
{var inst_20650 = (state_20722[19]);var inst_20708 = (state_20722[2]);var inst_20709 = cljs.core.seq.call(null,inst_20650);var state_20722__$1 = (function (){var statearr_20785 = state_20722;(statearr_20785[30] = inst_20708);
return statearr_20785;
})();if(inst_20709)
{var statearr_20786_20853 = state_20722__$1;(statearr_20786_20853[1] = 42);
} else
{var statearr_20787_20854 = state_20722__$1;(statearr_20787_20854[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 27))
{var inst_20659 = (state_20722[10]);var inst_20661 = (state_20722[12]);var inst_20666 = cljs.core._nth.call(null,inst_20659,inst_20661);var state_20722__$1 = (function (){var statearr_20788 = state_20722;(statearr_20788[7] = inst_20666);
return statearr_20788;
})();var statearr_20789_20855 = state_20722__$1;(statearr_20789_20855[2] = null);
(statearr_20789_20855[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 28))
{var inst_20658 = (state_20722[11]);var inst_20679 = (state_20722[9]);var inst_20679__$1 = cljs.core.seq.call(null,inst_20658);var state_20722__$1 = (function (){var statearr_20793 = state_20722;(statearr_20793[9] = inst_20679__$1);
return statearr_20793;
})();if(inst_20679__$1)
{var statearr_20794_20856 = state_20722__$1;(statearr_20794_20856[1] = 33);
} else
{var statearr_20795_20857 = state_20722__$1;(statearr_20795_20857[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 29))
{var inst_20706 = (state_20722[2]);var state_20722__$1 = state_20722;var statearr_20796_20858 = state_20722__$1;(statearr_20796_20858[2] = inst_20706);
(statearr_20796_20858[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 30))
{var inst_20659 = (state_20722[10]);var inst_20658 = (state_20722[11]);var inst_20661 = (state_20722[12]);var inst_20660 = (state_20722[13]);var inst_20675 = (state_20722[2]);var inst_20676 = (inst_20661 + 1);var tmp20790 = inst_20659;var tmp20791 = inst_20658;var tmp20792 = inst_20660;var inst_20658__$1 = tmp20791;var inst_20659__$1 = tmp20790;var inst_20660__$1 = tmp20792;var inst_20661__$1 = inst_20676;var state_20722__$1 = (function (){var statearr_20797 = state_20722;(statearr_20797[10] = inst_20659__$1);
(statearr_20797[11] = inst_20658__$1);
(statearr_20797[31] = inst_20675);
(statearr_20797[12] = inst_20661__$1);
(statearr_20797[13] = inst_20660__$1);
return statearr_20797;
})();var statearr_20798_20859 = state_20722__$1;(statearr_20798_20859[2] = null);
(statearr_20798_20859[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20723 === 31))
{var inst_20666 = (state_20722[7]);var inst_20667 = (state_20722[2]);var inst_20668 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20669 = cljs.core.async.untap_STAR_.call(null,m,inst_20666);var state_20722__$1 = (function (){var statearr_20799 = state_20722;(statearr_20799[32] = inst_20668);
(statearr_20799[33] = inst_20667);
return statearr_20799;
})();var statearr_20800_20860 = state_20722__$1;(statearr_20800_20860[2] = inst_20669);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20722__$1);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_20804 = (new Array(34));(statearr_20804[0] = state_machine__14324__auto__);
(statearr_20804[1] = 1);
return statearr_20804;
});
var state_machine__14324__auto____1 = (function (state_20722){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_20722);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e20805){if((e20805 instanceof Object))
{var ex__14327__auto__ = e20805;var statearr_20806_20861 = state_20722;(statearr_20806_20861[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20722);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20862 = state_20722;
state_20722 = G__20862;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_20722){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_20722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_20807 = f__14414__auto__.call(null);(statearr_20807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___20808);
return statearr_20807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
cljs.core.async.Mix = (function (){var obj20864 = {};return obj20864;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7814__auto__ = m;if(and__7814__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7814__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8429__auto__ = (((m == null))?null:m);return (function (){var or__7826__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7814__auto__ = m;if(and__7814__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7814__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8429__auto__ = (((m == null))?null:m);return (function (){var or__7826__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7814__auto__ = m;if(and__7814__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7814__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8429__auto__ = (((m == null))?null:m);return (function (){var or__7826__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7814__auto__ = m;if(and__7814__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7814__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8429__auto__ = (((m == null))?null:m);return (function (){var or__7826__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7814__auto__ = m;if(and__7814__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7814__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8429__auto__ = (((m == null))?null:m);return (function (){var or__7826__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t20974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20974 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta20975){
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
this.meta20975 = meta20975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20974.cljs$lang$type = true;
cljs.core.async.t20974.cljs$lang$ctorStr = "cljs.core.async/t20974";
cljs.core.async.t20974.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8370__auto__,writer__8371__auto__,opt__8372__auto__){return cljs.core._write.call(null,writer__8371__auto__,"cljs.core.async/t20974");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20974.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20974.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20974.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20974.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20974.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20974.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20974.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20974.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20976){var self__ = this;
var _20976__$1 = this;return self__.meta20975;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20976,meta20975__$1){var self__ = this;
var _20976__$1 = this;return (new cljs.core.async.t20974(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta20975__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20974 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20974(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta20975){return (new cljs.core.async.t20974(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta20975));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20974(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__14413__auto___21083 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_21041){var state_val_21042 = (state_21041[1]);if((state_val_21042 === 1))
{var inst_20980 = (state_21041[7]);var inst_20980__$1 = calc_state.call(null);var inst_20981 = cljs.core.seq_QMARK_.call(null,inst_20980__$1);var state_21041__$1 = (function (){var statearr_21043 = state_21041;(statearr_21043[7] = inst_20980__$1);
return statearr_21043;
})();if(inst_20981)
{var statearr_21044_21084 = state_21041__$1;(statearr_21044_21084[1] = 2);
} else
{var statearr_21045_21085 = state_21041__$1;(statearr_21045_21085[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 2))
{var inst_20980 = (state_21041[7]);var inst_20983 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20980);var state_21041__$1 = state_21041;var statearr_21046_21086 = state_21041__$1;(statearr_21046_21086[2] = inst_20983);
(statearr_21046_21086[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 3))
{var inst_20980 = (state_21041[7]);var state_21041__$1 = state_21041;var statearr_21047_21087 = state_21041__$1;(statearr_21047_21087[2] = inst_20980);
(statearr_21047_21087[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 4))
{var inst_20980 = (state_21041[7]);var inst_20986 = (state_21041[2]);var inst_20987 = cljs.core.get.call(null,inst_20986,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_20988 = cljs.core.get.call(null,inst_20986,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_20989 = cljs.core.get.call(null,inst_20986,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_20990 = inst_20980;var state_21041__$1 = (function (){var statearr_21048 = state_21041;(statearr_21048[8] = inst_20987);
(statearr_21048[9] = inst_20989);
(statearr_21048[10] = inst_20988);
(statearr_21048[11] = inst_20990);
return statearr_21048;
})();var statearr_21049_21088 = state_21041__$1;(statearr_21049_21088[2] = null);
(statearr_21049_21088[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 5))
{var inst_20990 = (state_21041[11]);var inst_20993 = cljs.core.seq_QMARK_.call(null,inst_20990);var state_21041__$1 = state_21041;if(inst_20993)
{var statearr_21050_21089 = state_21041__$1;(statearr_21050_21089[1] = 7);
} else
{var statearr_21051_21090 = state_21041__$1;(statearr_21051_21090[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 6))
{var inst_21039 = (state_21041[2]);var state_21041__$1 = state_21041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21041__$1,inst_21039);
} else
{if((state_val_21042 === 7))
{var inst_20990 = (state_21041[11]);var inst_20995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20990);var state_21041__$1 = state_21041;var statearr_21052_21091 = state_21041__$1;(statearr_21052_21091[2] = inst_20995);
(statearr_21052_21091[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 8))
{var inst_20990 = (state_21041[11]);var state_21041__$1 = state_21041;var statearr_21053_21092 = state_21041__$1;(statearr_21053_21092[2] = inst_20990);
(statearr_21053_21092[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 9))
{var inst_20998 = (state_21041[12]);var inst_20998__$1 = (state_21041[2]);var inst_20999 = cljs.core.get.call(null,inst_20998__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_21000 = cljs.core.get.call(null,inst_20998__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_21001 = cljs.core.get.call(null,inst_20998__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_21041__$1 = (function (){var statearr_21054 = state_21041;(statearr_21054[12] = inst_20998__$1);
(statearr_21054[13] = inst_21001);
(statearr_21054[14] = inst_21000);
return statearr_21054;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21041__$1,10,inst_20999);
} else
{if((state_val_21042 === 10))
{var inst_21005 = (state_21041[15]);var inst_21006 = (state_21041[16]);var inst_21004 = (state_21041[2]);var inst_21005__$1 = cljs.core.nth.call(null,inst_21004,0,null);var inst_21006__$1 = cljs.core.nth.call(null,inst_21004,1,null);var inst_21007 = (inst_21005__$1 == null);var inst_21008 = cljs.core._EQ_.call(null,inst_21006__$1,change);var inst_21009 = (inst_21007) || (inst_21008);var state_21041__$1 = (function (){var statearr_21055 = state_21041;(statearr_21055[15] = inst_21005__$1);
(statearr_21055[16] = inst_21006__$1);
return statearr_21055;
})();if(cljs.core.truth_(inst_21009))
{var statearr_21056_21093 = state_21041__$1;(statearr_21056_21093[1] = 11);
} else
{var statearr_21057_21094 = state_21041__$1;(statearr_21057_21094[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 11))
{var inst_21005 = (state_21041[15]);var inst_21011 = (inst_21005 == null);var state_21041__$1 = state_21041;if(cljs.core.truth_(inst_21011))
{var statearr_21058_21095 = state_21041__$1;(statearr_21058_21095[1] = 14);
} else
{var statearr_21059_21096 = state_21041__$1;(statearr_21059_21096[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 12))
{var inst_21020 = (state_21041[17]);var inst_21006 = (state_21041[16]);var inst_21001 = (state_21041[13]);var inst_21020__$1 = inst_21001.call(null,inst_21006);var state_21041__$1 = (function (){var statearr_21060 = state_21041;(statearr_21060[17] = inst_21020__$1);
return statearr_21060;
})();if(cljs.core.truth_(inst_21020__$1))
{var statearr_21061_21097 = state_21041__$1;(statearr_21061_21097[1] = 17);
} else
{var statearr_21062_21098 = state_21041__$1;(statearr_21062_21098[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 13))
{var inst_21037 = (state_21041[2]);var state_21041__$1 = state_21041;var statearr_21063_21099 = state_21041__$1;(statearr_21063_21099[2] = inst_21037);
(statearr_21063_21099[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 14))
{var inst_21006 = (state_21041[16]);var inst_21013 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21006);var state_21041__$1 = state_21041;var statearr_21064_21100 = state_21041__$1;(statearr_21064_21100[2] = inst_21013);
(statearr_21064_21100[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 15))
{var state_21041__$1 = state_21041;var statearr_21065_21101 = state_21041__$1;(statearr_21065_21101[2] = null);
(statearr_21065_21101[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 16))
{var inst_21016 = (state_21041[2]);var inst_21017 = calc_state.call(null);var inst_20990 = inst_21017;var state_21041__$1 = (function (){var statearr_21066 = state_21041;(statearr_21066[18] = inst_21016);
(statearr_21066[11] = inst_20990);
return statearr_21066;
})();var statearr_21067_21102 = state_21041__$1;(statearr_21067_21102[2] = null);
(statearr_21067_21102[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 17))
{var inst_21020 = (state_21041[17]);var state_21041__$1 = state_21041;var statearr_21068_21103 = state_21041__$1;(statearr_21068_21103[2] = inst_21020);
(statearr_21068_21103[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 18))
{var inst_21006 = (state_21041[16]);var inst_21001 = (state_21041[13]);var inst_21000 = (state_21041[14]);var inst_21023 = cljs.core.empty_QMARK_.call(null,inst_21001);var inst_21024 = inst_21000.call(null,inst_21006);var inst_21025 = cljs.core.not.call(null,inst_21024);var inst_21026 = (inst_21023) && (inst_21025);var state_21041__$1 = state_21041;var statearr_21069_21104 = state_21041__$1;(statearr_21069_21104[2] = inst_21026);
(statearr_21069_21104[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 19))
{var inst_21028 = (state_21041[2]);var state_21041__$1 = state_21041;if(cljs.core.truth_(inst_21028))
{var statearr_21070_21105 = state_21041__$1;(statearr_21070_21105[1] = 20);
} else
{var statearr_21071_21106 = state_21041__$1;(statearr_21071_21106[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 20))
{var inst_21005 = (state_21041[15]);var state_21041__$1 = state_21041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21041__$1,23,out,inst_21005);
} else
{if((state_val_21042 === 21))
{var state_21041__$1 = state_21041;var statearr_21072_21107 = state_21041__$1;(statearr_21072_21107[2] = null);
(statearr_21072_21107[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 22))
{var inst_20998 = (state_21041[12]);var inst_21034 = (state_21041[2]);var inst_20990 = inst_20998;var state_21041__$1 = (function (){var statearr_21073 = state_21041;(statearr_21073[11] = inst_20990);
(statearr_21073[19] = inst_21034);
return statearr_21073;
})();var statearr_21074_21108 = state_21041__$1;(statearr_21074_21108[2] = null);
(statearr_21074_21108[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21042 === 23))
{var inst_21031 = (state_21041[2]);var state_21041__$1 = state_21041;var statearr_21075_21109 = state_21041__$1;(statearr_21075_21109[2] = inst_21031);
(statearr_21075_21109[1] = 22);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_21079 = (new Array(20));(statearr_21079[0] = state_machine__14324__auto__);
(statearr_21079[1] = 1);
return statearr_21079;
});
var state_machine__14324__auto____1 = (function (state_21041){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_21041);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e21080){if((e21080 instanceof Object))
{var ex__14327__auto__ = e21080;var statearr_21081_21110 = state_21041;(statearr_21081_21110[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21041);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21111 = state_21041;
state_21041 = G__21111;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_21041){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_21041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_21082 = f__14414__auto__.call(null);(statearr_21082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___21083);
return statearr_21082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
cljs.core.async.Pub = (function (){var obj21113 = {};return obj21113;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7814__auto__ = p;if(and__7814__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7814__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8429__auto__ = (((p == null))?null:p);return (function (){var or__7826__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7814__auto__ = p;if(and__7814__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7814__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8429__auto__ = (((p == null))?null:p);return (function (){var or__7826__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7814__auto__ = p;if(and__7814__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7814__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8429__auto__ = (((p == null))?null:p);return (function (){var or__7826__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7814__auto__ = p;if(and__7814__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7814__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8429__auto__ = (((p == null))?null:p);return (function (){var or__7826__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8429__auto__)]);if(or__7826__auto__)
{return or__7826__auto__;
} else
{var or__7826__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7826__auto____$1)
{return or__7826__auto____$1;
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
return (function (topic){var or__7826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7826__auto__))
{return or__7826__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7826__auto__,mults){
return (function (p1__21114_SHARP_){if(cljs.core.truth_(p1__21114_SHARP_.call(null,topic)))
{return p1__21114_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__21114_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7826__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t21239 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21239 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21240){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21240 = meta21240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21239.cljs$lang$type = true;
cljs.core.async.t21239.cljs$lang$ctorStr = "cljs.core.async/t21239";
cljs.core.async.t21239.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8370__auto__,writer__8371__auto__,opt__8372__auto__){return cljs.core._write.call(null,writer__8371__auto__,"cljs.core.async/t21239");
});})(mults,ensure_mult))
;
cljs.core.async.t21239.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t21239.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t21239.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t21239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t21239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t21239.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t21239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21241){var self__ = this;
var _21241__$1 = this;return self__.meta21240;
});})(mults,ensure_mult))
;
cljs.core.async.t21239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21241,meta21240__$1){var self__ = this;
var _21241__$1 = this;return (new cljs.core.async.t21239(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21240__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t21239 = ((function (mults,ensure_mult){
return (function __GT_t21239(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21240){return (new cljs.core.async.t21239(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21240));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t21239(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14413__auto___21363 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_21315){var state_val_21316 = (state_21315[1]);if((state_val_21316 === 1))
{var state_21315__$1 = state_21315;var statearr_21317_21364 = state_21315__$1;(statearr_21317_21364[2] = null);
(statearr_21317_21364[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 2))
{var state_21315__$1 = state_21315;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21315__$1,4,ch);
} else
{if((state_val_21316 === 3))
{var inst_21313 = (state_21315[2]);var state_21315__$1 = state_21315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21315__$1,inst_21313);
} else
{if((state_val_21316 === 4))
{var inst_21244 = (state_21315[7]);var inst_21244__$1 = (state_21315[2]);var inst_21245 = (inst_21244__$1 == null);var state_21315__$1 = (function (){var statearr_21318 = state_21315;(statearr_21318[7] = inst_21244__$1);
return statearr_21318;
})();if(cljs.core.truth_(inst_21245))
{var statearr_21319_21365 = state_21315__$1;(statearr_21319_21365[1] = 5);
} else
{var statearr_21320_21366 = state_21315__$1;(statearr_21320_21366[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 5))
{var inst_21251 = cljs.core.deref.call(null,mults);var inst_21252 = cljs.core.vals.call(null,inst_21251);var inst_21253 = cljs.core.seq.call(null,inst_21252);var inst_21254 = inst_21253;var inst_21255 = null;var inst_21256 = 0;var inst_21257 = 0;var state_21315__$1 = (function (){var statearr_21321 = state_21315;(statearr_21321[8] = inst_21257);
(statearr_21321[9] = inst_21256);
(statearr_21321[10] = inst_21255);
(statearr_21321[11] = inst_21254);
return statearr_21321;
})();var statearr_21322_21367 = state_21315__$1;(statearr_21322_21367[2] = null);
(statearr_21322_21367[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 6))
{var inst_21294 = (state_21315[12]);var inst_21292 = (state_21315[13]);var inst_21244 = (state_21315[7]);var inst_21292__$1 = topic_fn.call(null,inst_21244);var inst_21293 = cljs.core.deref.call(null,mults);var inst_21294__$1 = cljs.core.get.call(null,inst_21293,inst_21292__$1);var state_21315__$1 = (function (){var statearr_21323 = state_21315;(statearr_21323[12] = inst_21294__$1);
(statearr_21323[13] = inst_21292__$1);
return statearr_21323;
})();if(cljs.core.truth_(inst_21294__$1))
{var statearr_21324_21368 = state_21315__$1;(statearr_21324_21368[1] = 19);
} else
{var statearr_21325_21369 = state_21315__$1;(statearr_21325_21369[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 7))
{var inst_21311 = (state_21315[2]);var state_21315__$1 = state_21315;var statearr_21326_21370 = state_21315__$1;(statearr_21326_21370[2] = inst_21311);
(statearr_21326_21370[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 8))
{var inst_21257 = (state_21315[8]);var inst_21256 = (state_21315[9]);var inst_21259 = (inst_21257 < inst_21256);var inst_21260 = inst_21259;var state_21315__$1 = state_21315;if(cljs.core.truth_(inst_21260))
{var statearr_21330_21371 = state_21315__$1;(statearr_21330_21371[1] = 10);
} else
{var statearr_21331_21372 = state_21315__$1;(statearr_21331_21372[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 9))
{var inst_21290 = (state_21315[2]);var state_21315__$1 = state_21315;var statearr_21332_21373 = state_21315__$1;(statearr_21332_21373[2] = inst_21290);
(statearr_21332_21373[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 10))
{var inst_21257 = (state_21315[8]);var inst_21256 = (state_21315[9]);var inst_21255 = (state_21315[10]);var inst_21254 = (state_21315[11]);var inst_21262 = cljs.core._nth.call(null,inst_21255,inst_21257);var inst_21263 = cljs.core.async.muxch_STAR_.call(null,inst_21262);var inst_21264 = cljs.core.async.close_BANG_.call(null,inst_21263);var inst_21265 = (inst_21257 + 1);var tmp21327 = inst_21256;var tmp21328 = inst_21255;var tmp21329 = inst_21254;var inst_21254__$1 = tmp21329;var inst_21255__$1 = tmp21328;var inst_21256__$1 = tmp21327;var inst_21257__$1 = inst_21265;var state_21315__$1 = (function (){var statearr_21333 = state_21315;(statearr_21333[8] = inst_21257__$1);
(statearr_21333[14] = inst_21264);
(statearr_21333[9] = inst_21256__$1);
(statearr_21333[10] = inst_21255__$1);
(statearr_21333[11] = inst_21254__$1);
return statearr_21333;
})();var statearr_21334_21374 = state_21315__$1;(statearr_21334_21374[2] = null);
(statearr_21334_21374[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 11))
{var inst_21254 = (state_21315[11]);var inst_21268 = (state_21315[15]);var inst_21268__$1 = cljs.core.seq.call(null,inst_21254);var state_21315__$1 = (function (){var statearr_21335 = state_21315;(statearr_21335[15] = inst_21268__$1);
return statearr_21335;
})();if(inst_21268__$1)
{var statearr_21336_21375 = state_21315__$1;(statearr_21336_21375[1] = 13);
} else
{var statearr_21337_21376 = state_21315__$1;(statearr_21337_21376[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 12))
{var inst_21288 = (state_21315[2]);var state_21315__$1 = state_21315;var statearr_21338_21377 = state_21315__$1;(statearr_21338_21377[2] = inst_21288);
(statearr_21338_21377[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 13))
{var inst_21268 = (state_21315[15]);var inst_21270 = cljs.core.chunked_seq_QMARK_.call(null,inst_21268);var state_21315__$1 = state_21315;if(inst_21270)
{var statearr_21339_21378 = state_21315__$1;(statearr_21339_21378[1] = 16);
} else
{var statearr_21340_21379 = state_21315__$1;(statearr_21340_21379[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 14))
{var state_21315__$1 = state_21315;var statearr_21341_21380 = state_21315__$1;(statearr_21341_21380[2] = null);
(statearr_21341_21380[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 15))
{var inst_21286 = (state_21315[2]);var state_21315__$1 = state_21315;var statearr_21342_21381 = state_21315__$1;(statearr_21342_21381[2] = inst_21286);
(statearr_21342_21381[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 16))
{var inst_21268 = (state_21315[15]);var inst_21272 = cljs.core.chunk_first.call(null,inst_21268);var inst_21273 = cljs.core.chunk_rest.call(null,inst_21268);var inst_21274 = cljs.core.count.call(null,inst_21272);var inst_21254 = inst_21273;var inst_21255 = inst_21272;var inst_21256 = inst_21274;var inst_21257 = 0;var state_21315__$1 = (function (){var statearr_21343 = state_21315;(statearr_21343[8] = inst_21257);
(statearr_21343[9] = inst_21256);
(statearr_21343[10] = inst_21255);
(statearr_21343[11] = inst_21254);
return statearr_21343;
})();var statearr_21344_21382 = state_21315__$1;(statearr_21344_21382[2] = null);
(statearr_21344_21382[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 17))
{var inst_21268 = (state_21315[15]);var inst_21277 = cljs.core.first.call(null,inst_21268);var inst_21278 = cljs.core.async.muxch_STAR_.call(null,inst_21277);var inst_21279 = cljs.core.async.close_BANG_.call(null,inst_21278);var inst_21280 = cljs.core.next.call(null,inst_21268);var inst_21254 = inst_21280;var inst_21255 = null;var inst_21256 = 0;var inst_21257 = 0;var state_21315__$1 = (function (){var statearr_21345 = state_21315;(statearr_21345[8] = inst_21257);
(statearr_21345[9] = inst_21256);
(statearr_21345[10] = inst_21255);
(statearr_21345[11] = inst_21254);
(statearr_21345[16] = inst_21279);
return statearr_21345;
})();var statearr_21346_21383 = state_21315__$1;(statearr_21346_21383[2] = null);
(statearr_21346_21383[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 18))
{var inst_21283 = (state_21315[2]);var state_21315__$1 = state_21315;var statearr_21347_21384 = state_21315__$1;(statearr_21347_21384[2] = inst_21283);
(statearr_21347_21384[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 19))
{var state_21315__$1 = state_21315;var statearr_21348_21385 = state_21315__$1;(statearr_21348_21385[2] = null);
(statearr_21348_21385[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 20))
{var state_21315__$1 = state_21315;var statearr_21349_21386 = state_21315__$1;(statearr_21349_21386[2] = null);
(statearr_21349_21386[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 21))
{var inst_21308 = (state_21315[2]);var state_21315__$1 = (function (){var statearr_21350 = state_21315;(statearr_21350[17] = inst_21308);
return statearr_21350;
})();var statearr_21351_21387 = state_21315__$1;(statearr_21351_21387[2] = null);
(statearr_21351_21387[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 22))
{var inst_21305 = (state_21315[2]);var state_21315__$1 = state_21315;var statearr_21352_21388 = state_21315__$1;(statearr_21352_21388[2] = inst_21305);
(statearr_21352_21388[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 23))
{var inst_21292 = (state_21315[13]);var inst_21296 = (state_21315[2]);var inst_21297 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21292);var state_21315__$1 = (function (){var statearr_21353 = state_21315;(statearr_21353[18] = inst_21296);
return statearr_21353;
})();var statearr_21354_21389 = state_21315__$1;(statearr_21354_21389[2] = inst_21297);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21315__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21316 === 24))
{var inst_21294 = (state_21315[12]);var inst_21244 = (state_21315[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21315,23,Object,null,22);var inst_21301 = cljs.core.async.muxch_STAR_.call(null,inst_21294);var state_21315__$1 = state_21315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21315__$1,25,inst_21301,inst_21244);
} else
{if((state_val_21316 === 25))
{var inst_21303 = (state_21315[2]);var state_21315__$1 = state_21315;var statearr_21355_21390 = state_21315__$1;(statearr_21355_21390[2] = inst_21303);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21315__$1);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_21359 = (new Array(19));(statearr_21359[0] = state_machine__14324__auto__);
(statearr_21359[1] = 1);
return statearr_21359;
});
var state_machine__14324__auto____1 = (function (state_21315){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_21315);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e21360){if((e21360 instanceof Object))
{var ex__14327__auto__ = e21360;var statearr_21361_21391 = state_21315;(statearr_21361_21391[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21392 = state_21315;
state_21315 = G__21392;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_21315){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_21315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_21362 = f__14414__auto__.call(null);(statearr_21362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___21363);
return statearr_21362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
,cljs.core.range.call(null,cnt));var c__14413__auto___21529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_21499){var state_val_21500 = (state_21499[1]);if((state_val_21500 === 1))
{var state_21499__$1 = state_21499;var statearr_21501_21530 = state_21499__$1;(statearr_21501_21530[2] = null);
(statearr_21501_21530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 2))
{var inst_21462 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21463 = 0;var state_21499__$1 = (function (){var statearr_21502 = state_21499;(statearr_21502[7] = inst_21463);
(statearr_21502[8] = inst_21462);
return statearr_21502;
})();var statearr_21503_21531 = state_21499__$1;(statearr_21503_21531[2] = null);
(statearr_21503_21531[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 3))
{var inst_21497 = (state_21499[2]);var state_21499__$1 = state_21499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21499__$1,inst_21497);
} else
{if((state_val_21500 === 4))
{var inst_21463 = (state_21499[7]);var inst_21465 = (inst_21463 < cnt);var state_21499__$1 = state_21499;if(cljs.core.truth_(inst_21465))
{var statearr_21504_21532 = state_21499__$1;(statearr_21504_21532[1] = 6);
} else
{var statearr_21505_21533 = state_21499__$1;(statearr_21505_21533[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 5))
{var inst_21483 = (state_21499[2]);var state_21499__$1 = (function (){var statearr_21506 = state_21499;(statearr_21506[9] = inst_21483);
return statearr_21506;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21499__$1,12,dchan);
} else
{if((state_val_21500 === 6))
{var state_21499__$1 = state_21499;var statearr_21507_21534 = state_21499__$1;(statearr_21507_21534[2] = null);
(statearr_21507_21534[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 7))
{var state_21499__$1 = state_21499;var statearr_21508_21535 = state_21499__$1;(statearr_21508_21535[2] = null);
(statearr_21508_21535[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 8))
{var inst_21481 = (state_21499[2]);var state_21499__$1 = state_21499;var statearr_21509_21536 = state_21499__$1;(statearr_21509_21536[2] = inst_21481);
(statearr_21509_21536[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 9))
{var inst_21463 = (state_21499[7]);var inst_21476 = (state_21499[2]);var inst_21477 = (inst_21463 + 1);var inst_21463__$1 = inst_21477;var state_21499__$1 = (function (){var statearr_21510 = state_21499;(statearr_21510[7] = inst_21463__$1);
(statearr_21510[10] = inst_21476);
return statearr_21510;
})();var statearr_21511_21537 = state_21499__$1;(statearr_21511_21537[2] = null);
(statearr_21511_21537[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 10))
{var inst_21467 = (state_21499[2]);var inst_21468 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21499__$1 = (function (){var statearr_21512 = state_21499;(statearr_21512[11] = inst_21467);
return statearr_21512;
})();var statearr_21513_21538 = state_21499__$1;(statearr_21513_21538[2] = inst_21468);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21499__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 11))
{var inst_21463 = (state_21499[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21499,10,Object,null,9);var inst_21472 = chs__$1.call(null,inst_21463);var inst_21473 = done.call(null,inst_21463);var inst_21474 = cljs.core.async.take_BANG_.call(null,inst_21472,inst_21473);var state_21499__$1 = state_21499;var statearr_21514_21539 = state_21499__$1;(statearr_21514_21539[2] = inst_21474);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21499__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 12))
{var inst_21485 = (state_21499[12]);var inst_21485__$1 = (state_21499[2]);var inst_21486 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21485__$1);var state_21499__$1 = (function (){var statearr_21515 = state_21499;(statearr_21515[12] = inst_21485__$1);
return statearr_21515;
})();if(cljs.core.truth_(inst_21486))
{var statearr_21516_21540 = state_21499__$1;(statearr_21516_21540[1] = 13);
} else
{var statearr_21517_21541 = state_21499__$1;(statearr_21517_21541[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 13))
{var inst_21488 = cljs.core.async.close_BANG_.call(null,out);var state_21499__$1 = state_21499;var statearr_21518_21542 = state_21499__$1;(statearr_21518_21542[2] = inst_21488);
(statearr_21518_21542[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 14))
{var inst_21485 = (state_21499[12]);var inst_21490 = cljs.core.apply.call(null,f,inst_21485);var state_21499__$1 = state_21499;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21499__$1,16,out,inst_21490);
} else
{if((state_val_21500 === 15))
{var inst_21495 = (state_21499[2]);var state_21499__$1 = state_21499;var statearr_21519_21543 = state_21499__$1;(statearr_21519_21543[2] = inst_21495);
(statearr_21519_21543[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21500 === 16))
{var inst_21492 = (state_21499[2]);var state_21499__$1 = (function (){var statearr_21520 = state_21499;(statearr_21520[13] = inst_21492);
return statearr_21520;
})();var statearr_21521_21544 = state_21499__$1;(statearr_21521_21544[2] = null);
(statearr_21521_21544[1] = 2);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_21525 = (new Array(14));(statearr_21525[0] = state_machine__14324__auto__);
(statearr_21525[1] = 1);
return statearr_21525;
});
var state_machine__14324__auto____1 = (function (state_21499){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_21499);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e21526){if((e21526 instanceof Object))
{var ex__14327__auto__ = e21526;var statearr_21527_21545 = state_21499;(statearr_21527_21545[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21499);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21546 = state_21499;
state_21499 = G__21546;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_21499){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_21499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_21528 = f__14414__auto__.call(null);(statearr_21528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___21529);
return statearr_21528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14413__auto___21654 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_21630){var state_val_21631 = (state_21630[1]);if((state_val_21631 === 1))
{var inst_21601 = cljs.core.vec.call(null,chs);var inst_21602 = inst_21601;var state_21630__$1 = (function (){var statearr_21632 = state_21630;(statearr_21632[7] = inst_21602);
return statearr_21632;
})();var statearr_21633_21655 = state_21630__$1;(statearr_21633_21655[2] = null);
(statearr_21633_21655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21631 === 2))
{var inst_21602 = (state_21630[7]);var inst_21604 = cljs.core.count.call(null,inst_21602);var inst_21605 = (inst_21604 > 0);var state_21630__$1 = state_21630;if(cljs.core.truth_(inst_21605))
{var statearr_21634_21656 = state_21630__$1;(statearr_21634_21656[1] = 4);
} else
{var statearr_21635_21657 = state_21630__$1;(statearr_21635_21657[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21631 === 3))
{var inst_21628 = (state_21630[2]);var state_21630__$1 = state_21630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21630__$1,inst_21628);
} else
{if((state_val_21631 === 4))
{var inst_21602 = (state_21630[7]);var state_21630__$1 = state_21630;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21630__$1,7,inst_21602);
} else
{if((state_val_21631 === 5))
{var inst_21624 = cljs.core.async.close_BANG_.call(null,out);var state_21630__$1 = state_21630;var statearr_21636_21658 = state_21630__$1;(statearr_21636_21658[2] = inst_21624);
(statearr_21636_21658[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21631 === 6))
{var inst_21626 = (state_21630[2]);var state_21630__$1 = state_21630;var statearr_21637_21659 = state_21630__$1;(statearr_21637_21659[2] = inst_21626);
(statearr_21637_21659[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21631 === 7))
{var inst_21610 = (state_21630[8]);var inst_21609 = (state_21630[9]);var inst_21609__$1 = (state_21630[2]);var inst_21610__$1 = cljs.core.nth.call(null,inst_21609__$1,0,null);var inst_21611 = cljs.core.nth.call(null,inst_21609__$1,1,null);var inst_21612 = (inst_21610__$1 == null);var state_21630__$1 = (function (){var statearr_21638 = state_21630;(statearr_21638[8] = inst_21610__$1);
(statearr_21638[10] = inst_21611);
(statearr_21638[9] = inst_21609__$1);
return statearr_21638;
})();if(cljs.core.truth_(inst_21612))
{var statearr_21639_21660 = state_21630__$1;(statearr_21639_21660[1] = 8);
} else
{var statearr_21640_21661 = state_21630__$1;(statearr_21640_21661[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21631 === 8))
{var inst_21610 = (state_21630[8]);var inst_21611 = (state_21630[10]);var inst_21602 = (state_21630[7]);var inst_21609 = (state_21630[9]);var inst_21614 = (function (){var c = inst_21611;var v = inst_21610;var vec__21607 = inst_21609;var cs = inst_21602;return ((function (c,v,vec__21607,cs,inst_21610,inst_21611,inst_21602,inst_21609,state_val_21631){
return (function (p1__21547_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21547_SHARP_);
});
;})(c,v,vec__21607,cs,inst_21610,inst_21611,inst_21602,inst_21609,state_val_21631))
})();var inst_21615 = cljs.core.filterv.call(null,inst_21614,inst_21602);var inst_21602__$1 = inst_21615;var state_21630__$1 = (function (){var statearr_21641 = state_21630;(statearr_21641[7] = inst_21602__$1);
return statearr_21641;
})();var statearr_21642_21662 = state_21630__$1;(statearr_21642_21662[2] = null);
(statearr_21642_21662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21631 === 9))
{var inst_21610 = (state_21630[8]);var state_21630__$1 = state_21630;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21630__$1,11,out,inst_21610);
} else
{if((state_val_21631 === 10))
{var inst_21622 = (state_21630[2]);var state_21630__$1 = state_21630;var statearr_21644_21663 = state_21630__$1;(statearr_21644_21663[2] = inst_21622);
(statearr_21644_21663[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21631 === 11))
{var inst_21602 = (state_21630[7]);var inst_21619 = (state_21630[2]);var tmp21643 = inst_21602;var inst_21602__$1 = tmp21643;var state_21630__$1 = (function (){var statearr_21645 = state_21630;(statearr_21645[7] = inst_21602__$1);
(statearr_21645[11] = inst_21619);
return statearr_21645;
})();var statearr_21646_21664 = state_21630__$1;(statearr_21646_21664[2] = null);
(statearr_21646_21664[1] = 2);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_21650 = (new Array(12));(statearr_21650[0] = state_machine__14324__auto__);
(statearr_21650[1] = 1);
return statearr_21650;
});
var state_machine__14324__auto____1 = (function (state_21630){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_21630);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e21651){if((e21651 instanceof Object))
{var ex__14327__auto__ = e21651;var statearr_21652_21665 = state_21630;(statearr_21652_21665[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21630);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21666 = state_21630;
state_21630 = G__21666;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_21630){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_21630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_21653 = f__14414__auto__.call(null);(statearr_21653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___21654);
return statearr_21653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14413__auto___21759 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_21736){var state_val_21737 = (state_21736[1]);if((state_val_21737 === 1))
{var inst_21713 = 0;var state_21736__$1 = (function (){var statearr_21738 = state_21736;(statearr_21738[7] = inst_21713);
return statearr_21738;
})();var statearr_21739_21760 = state_21736__$1;(statearr_21739_21760[2] = null);
(statearr_21739_21760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21737 === 2))
{var inst_21713 = (state_21736[7]);var inst_21715 = (inst_21713 < n);var state_21736__$1 = state_21736;if(cljs.core.truth_(inst_21715))
{var statearr_21740_21761 = state_21736__$1;(statearr_21740_21761[1] = 4);
} else
{var statearr_21741_21762 = state_21736__$1;(statearr_21741_21762[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21737 === 3))
{var inst_21733 = (state_21736[2]);var inst_21734 = cljs.core.async.close_BANG_.call(null,out);var state_21736__$1 = (function (){var statearr_21742 = state_21736;(statearr_21742[8] = inst_21733);
return statearr_21742;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21736__$1,inst_21734);
} else
{if((state_val_21737 === 4))
{var state_21736__$1 = state_21736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21736__$1,7,ch);
} else
{if((state_val_21737 === 5))
{var state_21736__$1 = state_21736;var statearr_21743_21763 = state_21736__$1;(statearr_21743_21763[2] = null);
(statearr_21743_21763[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21737 === 6))
{var inst_21731 = (state_21736[2]);var state_21736__$1 = state_21736;var statearr_21744_21764 = state_21736__$1;(statearr_21744_21764[2] = inst_21731);
(statearr_21744_21764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21737 === 7))
{var inst_21718 = (state_21736[9]);var inst_21718__$1 = (state_21736[2]);var inst_21719 = (inst_21718__$1 == null);var inst_21720 = cljs.core.not.call(null,inst_21719);var state_21736__$1 = (function (){var statearr_21745 = state_21736;(statearr_21745[9] = inst_21718__$1);
return statearr_21745;
})();if(inst_21720)
{var statearr_21746_21765 = state_21736__$1;(statearr_21746_21765[1] = 8);
} else
{var statearr_21747_21766 = state_21736__$1;(statearr_21747_21766[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21737 === 8))
{var inst_21718 = (state_21736[9]);var state_21736__$1 = state_21736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21736__$1,11,out,inst_21718);
} else
{if((state_val_21737 === 9))
{var state_21736__$1 = state_21736;var statearr_21748_21767 = state_21736__$1;(statearr_21748_21767[2] = null);
(statearr_21748_21767[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21737 === 10))
{var inst_21728 = (state_21736[2]);var state_21736__$1 = state_21736;var statearr_21749_21768 = state_21736__$1;(statearr_21749_21768[2] = inst_21728);
(statearr_21749_21768[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21737 === 11))
{var inst_21713 = (state_21736[7]);var inst_21723 = (state_21736[2]);var inst_21724 = (inst_21713 + 1);var inst_21713__$1 = inst_21724;var state_21736__$1 = (function (){var statearr_21750 = state_21736;(statearr_21750[7] = inst_21713__$1);
(statearr_21750[10] = inst_21723);
return statearr_21750;
})();var statearr_21751_21769 = state_21736__$1;(statearr_21751_21769[2] = null);
(statearr_21751_21769[1] = 2);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_21755 = (new Array(11));(statearr_21755[0] = state_machine__14324__auto__);
(statearr_21755[1] = 1);
return statearr_21755;
});
var state_machine__14324__auto____1 = (function (state_21736){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_21736);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e21756){if((e21756 instanceof Object))
{var ex__14327__auto__ = e21756;var statearr_21757_21770 = state_21736;(statearr_21757_21770[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21771 = state_21736;
state_21736 = G__21771;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_21736){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_21736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_21758 = f__14414__auto__.call(null);(statearr_21758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___21759);
return statearr_21758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14413__auto___21868 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_21843){var state_val_21844 = (state_21843[1]);if((state_val_21844 === 1))
{var inst_21820 = null;var state_21843__$1 = (function (){var statearr_21845 = state_21843;(statearr_21845[7] = inst_21820);
return statearr_21845;
})();var statearr_21846_21869 = state_21843__$1;(statearr_21846_21869[2] = null);
(statearr_21846_21869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21844 === 2))
{var state_21843__$1 = state_21843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21843__$1,4,ch);
} else
{if((state_val_21844 === 3))
{var inst_21840 = (state_21843[2]);var inst_21841 = cljs.core.async.close_BANG_.call(null,out);var state_21843__$1 = (function (){var statearr_21847 = state_21843;(statearr_21847[8] = inst_21840);
return statearr_21847;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21843__$1,inst_21841);
} else
{if((state_val_21844 === 4))
{var inst_21823 = (state_21843[9]);var inst_21823__$1 = (state_21843[2]);var inst_21824 = (inst_21823__$1 == null);var inst_21825 = cljs.core.not.call(null,inst_21824);var state_21843__$1 = (function (){var statearr_21848 = state_21843;(statearr_21848[9] = inst_21823__$1);
return statearr_21848;
})();if(inst_21825)
{var statearr_21849_21870 = state_21843__$1;(statearr_21849_21870[1] = 5);
} else
{var statearr_21850_21871 = state_21843__$1;(statearr_21850_21871[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21844 === 5))
{var inst_21823 = (state_21843[9]);var inst_21820 = (state_21843[7]);var inst_21827 = cljs.core._EQ_.call(null,inst_21823,inst_21820);var state_21843__$1 = state_21843;if(inst_21827)
{var statearr_21851_21872 = state_21843__$1;(statearr_21851_21872[1] = 8);
} else
{var statearr_21852_21873 = state_21843__$1;(statearr_21852_21873[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21844 === 6))
{var state_21843__$1 = state_21843;var statearr_21854_21874 = state_21843__$1;(statearr_21854_21874[2] = null);
(statearr_21854_21874[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21844 === 7))
{var inst_21838 = (state_21843[2]);var state_21843__$1 = state_21843;var statearr_21855_21875 = state_21843__$1;(statearr_21855_21875[2] = inst_21838);
(statearr_21855_21875[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21844 === 8))
{var inst_21820 = (state_21843[7]);var tmp21853 = inst_21820;var inst_21820__$1 = tmp21853;var state_21843__$1 = (function (){var statearr_21856 = state_21843;(statearr_21856[7] = inst_21820__$1);
return statearr_21856;
})();var statearr_21857_21876 = state_21843__$1;(statearr_21857_21876[2] = null);
(statearr_21857_21876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21844 === 9))
{var inst_21823 = (state_21843[9]);var state_21843__$1 = state_21843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21843__$1,11,out,inst_21823);
} else
{if((state_val_21844 === 10))
{var inst_21835 = (state_21843[2]);var state_21843__$1 = state_21843;var statearr_21858_21877 = state_21843__$1;(statearr_21858_21877[2] = inst_21835);
(statearr_21858_21877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21844 === 11))
{var inst_21823 = (state_21843[9]);var inst_21832 = (state_21843[2]);var inst_21820 = inst_21823;var state_21843__$1 = (function (){var statearr_21859 = state_21843;(statearr_21859[10] = inst_21832);
(statearr_21859[7] = inst_21820);
return statearr_21859;
})();var statearr_21860_21878 = state_21843__$1;(statearr_21860_21878[2] = null);
(statearr_21860_21878[1] = 2);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_21864 = (new Array(11));(statearr_21864[0] = state_machine__14324__auto__);
(statearr_21864[1] = 1);
return statearr_21864;
});
var state_machine__14324__auto____1 = (function (state_21843){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_21843);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e21865){if((e21865 instanceof Object))
{var ex__14327__auto__ = e21865;var statearr_21866_21879 = state_21843;(statearr_21866_21879[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21880 = state_21843;
state_21843 = G__21880;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_21843){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_21843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_21867 = f__14414__auto__.call(null);(statearr_21867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___21868);
return statearr_21867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14413__auto___22015 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_21985){var state_val_21986 = (state_21985[1]);if((state_val_21986 === 1))
{var inst_21948 = (new Array(n));var inst_21949 = inst_21948;var inst_21950 = 0;var state_21985__$1 = (function (){var statearr_21987 = state_21985;(statearr_21987[7] = inst_21949);
(statearr_21987[8] = inst_21950);
return statearr_21987;
})();var statearr_21988_22016 = state_21985__$1;(statearr_21988_22016[2] = null);
(statearr_21988_22016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21986 === 2))
{var state_21985__$1 = state_21985;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21985__$1,4,ch);
} else
{if((state_val_21986 === 3))
{var inst_21983 = (state_21985[2]);var state_21985__$1 = state_21985;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21985__$1,inst_21983);
} else
{if((state_val_21986 === 4))
{var inst_21953 = (state_21985[9]);var inst_21953__$1 = (state_21985[2]);var inst_21954 = (inst_21953__$1 == null);var inst_21955 = cljs.core.not.call(null,inst_21954);var state_21985__$1 = (function (){var statearr_21989 = state_21985;(statearr_21989[9] = inst_21953__$1);
return statearr_21989;
})();if(inst_21955)
{var statearr_21990_22017 = state_21985__$1;(statearr_21990_22017[1] = 5);
} else
{var statearr_21991_22018 = state_21985__$1;(statearr_21991_22018[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21986 === 5))
{var inst_21949 = (state_21985[7]);var inst_21958 = (state_21985[10]);var inst_21950 = (state_21985[8]);var inst_21953 = (state_21985[9]);var inst_21957 = (inst_21949[inst_21950] = inst_21953);var inst_21958__$1 = (inst_21950 + 1);var inst_21959 = (inst_21958__$1 < n);var state_21985__$1 = (function (){var statearr_21992 = state_21985;(statearr_21992[11] = inst_21957);
(statearr_21992[10] = inst_21958__$1);
return statearr_21992;
})();if(cljs.core.truth_(inst_21959))
{var statearr_21993_22019 = state_21985__$1;(statearr_21993_22019[1] = 8);
} else
{var statearr_21994_22020 = state_21985__$1;(statearr_21994_22020[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21986 === 6))
{var inst_21950 = (state_21985[8]);var inst_21971 = (inst_21950 > 0);var state_21985__$1 = state_21985;if(cljs.core.truth_(inst_21971))
{var statearr_21996_22021 = state_21985__$1;(statearr_21996_22021[1] = 12);
} else
{var statearr_21997_22022 = state_21985__$1;(statearr_21997_22022[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21986 === 7))
{var inst_21981 = (state_21985[2]);var state_21985__$1 = state_21985;var statearr_21998_22023 = state_21985__$1;(statearr_21998_22023[2] = inst_21981);
(statearr_21998_22023[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21986 === 8))
{var inst_21949 = (state_21985[7]);var inst_21958 = (state_21985[10]);var tmp21995 = inst_21949;var inst_21949__$1 = tmp21995;var inst_21950 = inst_21958;var state_21985__$1 = (function (){var statearr_21999 = state_21985;(statearr_21999[7] = inst_21949__$1);
(statearr_21999[8] = inst_21950);
return statearr_21999;
})();var statearr_22000_22024 = state_21985__$1;(statearr_22000_22024[2] = null);
(statearr_22000_22024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21986 === 9))
{var inst_21949 = (state_21985[7]);var inst_21963 = cljs.core.vec.call(null,inst_21949);var state_21985__$1 = state_21985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21985__$1,11,out,inst_21963);
} else
{if((state_val_21986 === 10))
{var inst_21969 = (state_21985[2]);var state_21985__$1 = state_21985;var statearr_22001_22025 = state_21985__$1;(statearr_22001_22025[2] = inst_21969);
(statearr_22001_22025[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21986 === 11))
{var inst_21965 = (state_21985[2]);var inst_21966 = (new Array(n));var inst_21949 = inst_21966;var inst_21950 = 0;var state_21985__$1 = (function (){var statearr_22002 = state_21985;(statearr_22002[7] = inst_21949);
(statearr_22002[12] = inst_21965);
(statearr_22002[8] = inst_21950);
return statearr_22002;
})();var statearr_22003_22026 = state_21985__$1;(statearr_22003_22026[2] = null);
(statearr_22003_22026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21986 === 12))
{var inst_21949 = (state_21985[7]);var inst_21973 = cljs.core.vec.call(null,inst_21949);var state_21985__$1 = state_21985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21985__$1,15,out,inst_21973);
} else
{if((state_val_21986 === 13))
{var state_21985__$1 = state_21985;var statearr_22004_22027 = state_21985__$1;(statearr_22004_22027[2] = null);
(statearr_22004_22027[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21986 === 14))
{var inst_21978 = (state_21985[2]);var inst_21979 = cljs.core.async.close_BANG_.call(null,out);var state_21985__$1 = (function (){var statearr_22005 = state_21985;(statearr_22005[13] = inst_21978);
return statearr_22005;
})();var statearr_22006_22028 = state_21985__$1;(statearr_22006_22028[2] = inst_21979);
(statearr_22006_22028[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21986 === 15))
{var inst_21975 = (state_21985[2]);var state_21985__$1 = state_21985;var statearr_22007_22029 = state_21985__$1;(statearr_22007_22029[2] = inst_21975);
(statearr_22007_22029[1] = 14);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_22011 = (new Array(14));(statearr_22011[0] = state_machine__14324__auto__);
(statearr_22011[1] = 1);
return statearr_22011;
});
var state_machine__14324__auto____1 = (function (state_21985){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_21985);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e22012){if((e22012 instanceof Object))
{var ex__14327__auto__ = e22012;var statearr_22013_22030 = state_21985;(statearr_22013_22030[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21985);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22031 = state_21985;
state_21985 = G__22031;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_21985){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_21985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_22014 = f__14414__auto__.call(null);(statearr_22014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___22015);
return statearr_22014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14413__auto___22174 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14414__auto__ = (function (){var switch__14323__auto__ = (function (state_22144){var state_val_22145 = (state_22144[1]);if((state_val_22145 === 1))
{var inst_22103 = (new Array(0));var inst_22104 = inst_22103;var inst_22105 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_22144__$1 = (function (){var statearr_22146 = state_22144;(statearr_22146[7] = inst_22104);
(statearr_22146[8] = inst_22105);
return statearr_22146;
})();var statearr_22147_22175 = state_22144__$1;(statearr_22147_22175[2] = null);
(statearr_22147_22175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22145 === 2))
{var state_22144__$1 = state_22144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22144__$1,4,ch);
} else
{if((state_val_22145 === 3))
{var inst_22142 = (state_22144[2]);var state_22144__$1 = state_22144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22144__$1,inst_22142);
} else
{if((state_val_22145 === 4))
{var inst_22108 = (state_22144[9]);var inst_22108__$1 = (state_22144[2]);var inst_22109 = (inst_22108__$1 == null);var inst_22110 = cljs.core.not.call(null,inst_22109);var state_22144__$1 = (function (){var statearr_22148 = state_22144;(statearr_22148[9] = inst_22108__$1);
return statearr_22148;
})();if(inst_22110)
{var statearr_22149_22176 = state_22144__$1;(statearr_22149_22176[1] = 5);
} else
{var statearr_22150_22177 = state_22144__$1;(statearr_22150_22177[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22145 === 5))
{var inst_22105 = (state_22144[8]);var inst_22112 = (state_22144[10]);var inst_22108 = (state_22144[9]);var inst_22112__$1 = f.call(null,inst_22108);var inst_22113 = cljs.core._EQ_.call(null,inst_22112__$1,inst_22105);var inst_22114 = cljs.core.keyword_identical_QMARK_.call(null,inst_22105,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_22115 = (inst_22113) || (inst_22114);var state_22144__$1 = (function (){var statearr_22151 = state_22144;(statearr_22151[10] = inst_22112__$1);
return statearr_22151;
})();if(cljs.core.truth_(inst_22115))
{var statearr_22152_22178 = state_22144__$1;(statearr_22152_22178[1] = 8);
} else
{var statearr_22153_22179 = state_22144__$1;(statearr_22153_22179[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22145 === 6))
{var inst_22104 = (state_22144[7]);var inst_22129 = inst_22104.length;var inst_22130 = (inst_22129 > 0);var state_22144__$1 = state_22144;if(cljs.core.truth_(inst_22130))
{var statearr_22155_22180 = state_22144__$1;(statearr_22155_22180[1] = 12);
} else
{var statearr_22156_22181 = state_22144__$1;(statearr_22156_22181[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22145 === 7))
{var inst_22140 = (state_22144[2]);var state_22144__$1 = state_22144;var statearr_22157_22182 = state_22144__$1;(statearr_22157_22182[2] = inst_22140);
(statearr_22157_22182[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22145 === 8))
{var inst_22104 = (state_22144[7]);var inst_22112 = (state_22144[10]);var inst_22108 = (state_22144[9]);var inst_22117 = inst_22104.push(inst_22108);var tmp22154 = inst_22104;var inst_22104__$1 = tmp22154;var inst_22105 = inst_22112;var state_22144__$1 = (function (){var statearr_22158 = state_22144;(statearr_22158[7] = inst_22104__$1);
(statearr_22158[8] = inst_22105);
(statearr_22158[11] = inst_22117);
return statearr_22158;
})();var statearr_22159_22183 = state_22144__$1;(statearr_22159_22183[2] = null);
(statearr_22159_22183[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22145 === 9))
{var inst_22104 = (state_22144[7]);var inst_22120 = cljs.core.vec.call(null,inst_22104);var state_22144__$1 = state_22144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22144__$1,11,out,inst_22120);
} else
{if((state_val_22145 === 10))
{var inst_22127 = (state_22144[2]);var state_22144__$1 = state_22144;var statearr_22160_22184 = state_22144__$1;(statearr_22160_22184[2] = inst_22127);
(statearr_22160_22184[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22145 === 11))
{var inst_22112 = (state_22144[10]);var inst_22108 = (state_22144[9]);var inst_22122 = (state_22144[2]);var inst_22123 = (new Array(0));var inst_22124 = inst_22123.push(inst_22108);var inst_22104 = inst_22123;var inst_22105 = inst_22112;var state_22144__$1 = (function (){var statearr_22161 = state_22144;(statearr_22161[7] = inst_22104);
(statearr_22161[8] = inst_22105);
(statearr_22161[12] = inst_22124);
(statearr_22161[13] = inst_22122);
return statearr_22161;
})();var statearr_22162_22185 = state_22144__$1;(statearr_22162_22185[2] = null);
(statearr_22162_22185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22145 === 12))
{var inst_22104 = (state_22144[7]);var inst_22132 = cljs.core.vec.call(null,inst_22104);var state_22144__$1 = state_22144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22144__$1,15,out,inst_22132);
} else
{if((state_val_22145 === 13))
{var state_22144__$1 = state_22144;var statearr_22163_22186 = state_22144__$1;(statearr_22163_22186[2] = null);
(statearr_22163_22186[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22145 === 14))
{var inst_22137 = (state_22144[2]);var inst_22138 = cljs.core.async.close_BANG_.call(null,out);var state_22144__$1 = (function (){var statearr_22164 = state_22144;(statearr_22164[14] = inst_22137);
return statearr_22164;
})();var statearr_22165_22187 = state_22144__$1;(statearr_22165_22187[2] = inst_22138);
(statearr_22165_22187[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22145 === 15))
{var inst_22134 = (state_22144[2]);var state_22144__$1 = state_22144;var statearr_22166_22188 = state_22144__$1;(statearr_22166_22188[2] = inst_22134);
(statearr_22166_22188[1] = 14);
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
});return ((function (switch__14323__auto__){
return (function() {
var state_machine__14324__auto__ = null;
var state_machine__14324__auto____0 = (function (){var statearr_22170 = (new Array(15));(statearr_22170[0] = state_machine__14324__auto__);
(statearr_22170[1] = 1);
return statearr_22170;
});
var state_machine__14324__auto____1 = (function (state_22144){while(true){
var ret_value__14325__auto__ = (function (){try{while(true){
var result__14326__auto__ = switch__14323__auto__.call(null,state_22144);if(cljs.core.keyword_identical_QMARK_.call(null,result__14326__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14326__auto__;
}
break;
}
}catch (e22171){if((e22171 instanceof Object))
{var ex__14327__auto__ = e22171;var statearr_22172_22189 = state_22144;(statearr_22172_22189[5] = ex__14327__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14325__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22190 = state_22144;
state_22144 = G__22190;
continue;
}
} else
{return ret_value__14325__auto__;
}
break;
}
});
state_machine__14324__auto__ = function(state_22144){
switch(arguments.length){
case 0:
return state_machine__14324__auto____0.call(this);
case 1:
return state_machine__14324__auto____1.call(this,state_22144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14324__auto____0;
state_machine__14324__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14324__auto____1;
return state_machine__14324__auto__;
})()
;})(switch__14323__auto__))
})();var state__14415__auto__ = (function (){var statearr_22173 = f__14414__auto__.call(null);(statearr_22173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14413__auto___22174);
return statearr_22173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14415__auto__);
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
